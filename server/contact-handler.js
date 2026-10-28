/**
 * Marth Systems — Contact Form Server-Side Handler & Adapter Interface
 *
 * This module defines the server-side validation, anti-abuse, and department
 * routing logic for POST /api/contact.
 *
 * It is hosting-agnostic and ready to be wrapped in a Cloudflare Worker,
 * Vercel Serverless Function, Netlify Function, Node/Express server, or Lambda.
 *
 * SECURITY & PRIVACY MANDATES:
 * - Server determines recipient based on selected service; never accept client-provided recipient.
 * - No secrets or email API keys exposed to client.
 * - Do NOT log free-text message contents or patient/clinical notes to server logs or analytics.
 * - Enforce POST method only.
 */

export const DEPARTMENT_ROUTING = {
    "Credentialing": "contact@marthsystems.com",
    "Provider Enrollment": "contact@marthsystems.com",
    "Billing": "contact@marthsystems.com",
    "AR Management": "contact@marthsystems.com",
    "Prior Authorization": "contact@marthsystems.com",
    "Patient Support": "contact@marthsystems.com",
    "Provider Contracting": "contact@marthsystems.com",
    "Contracting": "contact@marthsystems.com",
    "Multiple Services": "contact@marthsystems.com",
    "Careers": "hr@marthsystems.com",
    "Human Resources": "hr@marthsystems.com",
    "Other": "info@marthsystems.com",
};

export const DEFAULT_RECIPIENT = "contact@marthsystems.com";

/**
 * Resolves the appropriate Marth Systems department recipient for a given service.
 * Server-enforced: client cannot override this.
 */
export function resolveRecipient(service) {
    if (!service || typeof service !== "string") {
        return DEFAULT_RECIPIENT;
    }
    return DEPARTMENT_ROUTING[service.trim()] || DEFAULT_RECIPIENT;
}

/**
 * Validates the contact form payload.
 * Returns { valid: boolean, errors?: string[], sanitized?: object }
 */
export function validateContactPayload(body) {
    if (!body || typeof body !== "object") {
        return { valid: false, errors: ["Invalid request body."] };
    }

    const { name, organization, email, phone, service, providers, message } = body;
    const errors = [];

    if (!name || typeof name !== "string" || !name.trim()) {
        errors.push("Name is required.");
    }
    if (!organization || typeof organization !== "string" || !organization.trim()) {
        errors.push("Organization is required.");
    }
    if (!email || typeof email !== "string" || !email.trim()) {
        errors.push("Work email is required.");
    } else {
        // Standard email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            errors.push("A valid work email address is required.");
        }
    }
    if (!service || typeof service !== "string" || !service.trim()) {
        errors.push("Service needed is required.");
    }

    if (errors.length > 0) {
        return { valid: false, errors };
    }

    const recipient = resolveRecipient(service);

    return {
        valid: true,
        sanitized: {
            name: name.trim().slice(0, 200),
            organization: organization.trim().slice(0, 200),
            email: email.trim().slice(0, 254),
            phone: phone ? String(phone).trim().slice(0, 50) : "",
            service: service.trim().slice(0, 100),
            providers: providers ? String(providers).trim().slice(0, 50) : "",
            message: message ? String(message).trim().slice(0, 5000) : "",
            recipient,
            ...(body.resumeName ? { resumeName: String(body.resumeName).slice(0, 200) } : {}),
            ...(body.resumeSize ? { resumeSize: Number(body.resumeSize) } : {}),
            ...(body.resumeBase64 ? { resumeBase64: String(body.resumeBase64) } : {}),
        },
    };
}

/**
 * Formats inquiry email subject and plaintext body.
 */
export function formatInquiryEmail(sanitized) {
    const isCareer = sanitized.service === "Careers" || sanitized.service === "Human Resources";
    const subject = isCareer
        ? `Career Application: ${sanitized.name}${sanitized.organization ? ` (${sanitized.organization})` : ""}`
        : `New inquiry from ${sanitized.name}${sanitized.organization ? ` (${sanitized.organization})` : ""}`;
    const body = [
        `Name: ${sanitized.name}`,
        `Organization: ${sanitized.organization}`,
        `Email: ${sanitized.email}`,
        `Phone: ${sanitized.phone || "—"}`,
        `Service / Category: ${sanitized.service || "—"}`,
        sanitized.providers ? `Experience / Providers: ${sanitized.providers}` : null,
        sanitized.resumeName ? `Attached Resume / CV: ${sanitized.resumeName}` : null,
        "",
        "Message / Details:",
        sanitized.message || "(No message provided)",
    ].filter(Boolean).join("\n");

    return { subject, body };
}
