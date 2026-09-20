/**
 * Marth Systems — Contact Form Netlify Function
 *
 * Handles: POST /api/contact (rewritten from netlify.toml)
 *
 * Architecture:
 * Client Form Submission -> Netlify Function -> Server-Side Validation -> Resend REST API -> Department Inbox
 */

import { validateContactPayload, formatInquiryEmail } from "../../server/contact-handler.js";

/**
 * Core business processor shared between Netlify Functions v1 and v2 formats.
 */
async function processContactSubmission(body) {
    const validation = validateContactPayload(body);

    if (!validation.valid) {
        return {
            status: 400,
            data: { error: validation.errors[0] || "Invalid submission." },
        };
    }

    const { sanitized } = validation;
    const { subject, body: emailText } = formatInquiryEmail(sanitized);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.warn("[contact-function] RESEND_API_KEY environment variable is not configured.");
        return {
            status: 500,
            data: { error: "Email delivery service is currently unconfigured." },
        };
    }

    try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "Marth Systems <info@marthsystems.com>",
                to: [sanitized.recipient],
                reply_to: sanitized.email,
                subject,
                text: emailText,
            }),
        });

        if (!resendResponse.ok) {
            const errData = await resendResponse.json().catch(() => ({}));
            console.error("[contact-function] Delivery provider error:", resendResponse.status, errData?.message || "Unknown error");
            return {
                status: 502,
                data: { error: "Failed to send message via delivery provider." },
            };
        }

        return {
            status: 200,
            data: { success: true },
        };
    } catch {
        console.error("[contact-function] Delivery connection error");
        return {
            status: 502,
            data: { error: "Network error communicating with delivery provider." },
        };
    }
}

/**
 * Netlify Functions v2 handler (Web standard Request/Response)
 */
export default async function (req, context) {
    if (req.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
            status: 405,
            headers: {
                "Content-Type": "application/json",
                "Allow": "POST",
            },
        });
    }

    try {
        const body = await req.json().catch(() => null);
        if (!body) {
            return new Response(JSON.stringify({ error: "Invalid JSON request body." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const result = await processContactSubmission(body);
        return new Response(JSON.stringify(result.data), {
            status: result.status,
            headers: { "Content-Type": "application/json" },
        });
    } catch {
        return new Response(JSON.stringify({ error: "Internal server error." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

/**
 * Netlify Functions v1 / AWS Lambda format compatibility export
 */
export async function handler(event, context) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            headers: {
                "Content-Type": "application/json",
                "Allow": "POST",
            },
            body: JSON.stringify({ error: "Method Not Allowed" }),
        };
    }

    try {
        let body;
        try {
            body = typeof event.body === "string" ? JSON.parse(event.body || "{}") : (event.body || {});
        } catch {
            return {
                statusCode: 400,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ error: "Invalid JSON request body." }),
            };
        }

        const result = await processContactSubmission(body);
        return {
            statusCode: result.status,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(result.data),
        };
    } catch {
        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: "Internal server error." }),
        };
    }
}
