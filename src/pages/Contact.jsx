import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { base44 } from "@/api/base44Client";
import { trackEvent } from "@/lib/analytics";

const SERVICES = [
    "Credentialing",
    "Provider Enrollment",
    "Billing",
    "AR Management",
    "Prior Authorization",
    "Patient Support",
    "Contracting",
    "Multiple Services",
    "Other",
];

const PROVIDER_COUNTS = ["1–5", "6–15", "16–50", "51–100", "100+"];

function routeEmail(service) {
    if (!service) return "info@marthsystems.com";
    if (service === "Credentialing" || service === "Provider Enrollment")
        return "credentialing@marthsystems.com";
    if (service === "Billing" || service === "AR Management")
        return "billing@marthsystems.com";
    if (service === "Prior Authorization" || service === "Patient Support")
        return "support@marthsystems.com";
    return "info@marthsystems.com";
}

export default function Contact() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        organization: "",
        email: "",
        phone: "",
        service: "",
        providers: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSubmitting(true);
        try {
            const to = routeEmail(form.service);
            const subject = `New inquiry from ${form.name || "website visitor"}${form.organization ? ` (${form.organization})` : ""}`;
            const body = [
                `Name: ${form.name}`,
                `Organization: ${form.organization}`,
                `Work Email: ${form.email}`,
                `Phone: ${form.phone || "—"}`,
                `Service Needed: ${form.service || "—"}`,
                `Number of Providers: ${form.providers || "—"}`,
                "",
                "Message:",
                form.message,
            ].join("\n");

            await base44.integrations.Core.SendEmail({ to, subject, body });

            trackEvent("contact_form_submit", { service: form.service || "not specified" });

            navigate("/thank-you", { state: { service: form.service } });
        } catch (err) {
            setError("Something went wrong sending your message. Please try again or email us directly.");
            setSubmitting(false);
        }
    };

    return (
        <>
            <SEO
                title="Contact Marth Systems"
                description="Request a consultation with Marth Systems. Tell us about your organization, the service you need, and the number of providers — we'll route your inquiry to the right team."
                path="/contact"
            />

            <section className="relative overflow-hidden bg-navy-900 pt-28 pb-16 sm:pt-36 sm:pb-20">
                <div className="absolute inset-0 bg-grid-dark opacity-25" />
                <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                                Contact
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white">
                                Request a consultation.
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mt-5 text-lg leading-relaxed text-slate-300">
                                Tell us about your organization and what you need. We'll route your inquiry to the
                                right team and get back to you.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-12">
                        {/* Form */}
                        <ScrollReveal className="lg:col-span-7">
                            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-premium-lg">
                                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                                    Tell us what you're trying to improve, and our team will review your inquiry and
                                    direct it to the appropriate department.
                                </p>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <Field label="Name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                                    <Field label="Organization" name="organization" value={form.organization} onChange={handleChange} required placeholder="Organization or practice" />
                                    <Field label="Work Email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@organization.com" />
                                    <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Optional" />
                                    <SelectField label="Service Needed" name="service" value={form.service} onChange={handleChange} options={SERVICES} required />
                                    <SelectField label="Number of Providers" name="providers" value={form.providers} onChange={handleChange} options={PROVIDER_COUNTS} />
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-900">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Tell us about your operational challenges or what you need support with."
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30 transition"
                                    />
                                </div>

                                {error && (
                                    <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-base font-semibold text-white shadow-premium-lg transition-all hover:bg-navy-800 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {submitting ? (
                                        <>
                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                            Sending…
                                        </>
                                    ) : (
                                        <>
                                            Request a Consultation
                                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                        </>
                                    )}
                                </button>
                                <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-navy-800">
                                    Please do not submit medical records, clinical notes, diagnoses, insurance
                                    cards, or other sensitive patient information through this form.
                                </p>
                            </form>
                        </ScrollReveal>

                        {/* Side info */}
                        <div className="lg:col-span-5">
                            <ScrollReveal delay={0.1}>
                                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
                                    <h2 className="text-xl font-semibold text-navy-900">Contact by service</h2>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                        Prefer to reach out directly? Use the address that matches your need.
                                    </p>
                                    <ul className="mt-6 space-y-4">
                                        {[
                                            { label: "Credentialing & Enrollment", email: "credentialing@marthsystems.com" },
                                            { label: "Billing & AR", email: "billing@marthsystems.com" },
                                            { label: "Prior Authorization & Patient Support", email: "support@marthsystems.com" },
                                            { label: "General Inquiries", email: "info@marthsystems.com" },
                                        ].map((c) => (
                                            <li key={c.email} className="flex items-start gap-3">
                                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-teal-600 shadow-premium">
                                                    <Mail className="h-4 w-4" />
                                                </span>
                                                <div>
                                                    <div className="text-sm font-semibold text-navy-900">{c.label}</div>
                                                    <a href={`mailto:${c.email}`} className="text-sm text-teal-700 hover:underline">
                                                        {c.email}
                                                    </a>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-7 space-y-3 border-t border-slate-200 pt-6">
                                        <div className="flex items-center gap-3 text-sm text-slate-600">
                                            <ShieldCheck className="h-5 w-5 text-teal-600" />
                                            B2B healthcare operations services
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-600">
                                            <Clock className="h-5 w-5 text-teal-600" />
                                            We respond to inquiries during business hours
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function Field({ label, name, type = "text", value, onChange, required, placeholder }) {
    return (
        <div>
            <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-900">
                {label}{required && <span className="text-teal-600"> *</span>}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30 transition"
            />
        </div>
    );
}

function SelectField({ label, name, value, onChange, options, required }) {
    return (
        <div>
            <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-900">
                {label}{required && <span className="text-teal-600"> *</span>}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-900 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30 transition"
            >
                <option value="">Select…</option>
                {options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                ))}
            </select>
        </div>
    );
}