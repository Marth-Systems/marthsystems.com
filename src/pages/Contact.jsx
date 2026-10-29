import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
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
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.name.trim(),
                    organization: form.organization.trim(),
                    email: form.email.trim(),
                    phone: form.phone.trim(),
                    service: form.service,
                    providers: form.providers,
                    message: form.message.trim(),
                }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.message || "Something went wrong sending your message. Please try again or email us directly.");
            }

            trackEvent("contact_form_submit", { service: form.service || "not specified" });

            navigate("/thank-you", { state: { service: form.service } });
        } catch (err) {
            setError(err.message || "Something went wrong sending your message. Please try again or email us directly.");
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-[#040A1C] text-slate-100 min-h-screen overflow-x-hidden">
            <SEO
                title="Contact Marth Systems"
                description="Request a consultation with Marth Systems. Tell us about your organization, the service you need, and the number of providers — we'll route your inquiry to the right team."
                path="/contact"
            />

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#040A1C] pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-white/10">
                <div className="pointer-events-none absolute -left-36 top-10 h-[460px] w-[460px] rounded-full bg-cyan-500/15 blur-[130px] animate-ambient-slow" />
                <div className="pointer-events-none absolute -right-32 top-20 h-[440px] w-[440px] rounded-full bg-teal-400/15 blur-[130px] animate-ambient-reverse" />
                <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 backdrop-blur-md">
                                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse-soft" />
                                Contact
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight text-white">
                                Request a{" "}
                                <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
                                    consultation.
                                </span>
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

            {/* FORM & DIRECT INQUIRIES */}
            <section className="relative overflow-hidden bg-[#060E28] py-16 sm:py-24">
                <div className="pointer-events-none absolute left-10 bottom-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-12">
                        {/* Form */}
                        <ScrollReveal className="lg:col-span-7">
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-[32px] border border-white/15 bg-slate-900/80 p-7 sm:p-10 shadow-2xl backdrop-blur-2xl"
                            >
                                <p className="mb-6 text-sm leading-relaxed text-slate-300">
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
                                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-200">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Tell us about your operational challenges or what you need support with."
                                        className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30 transition"
                                    />
                                </div>

                                {error && (
                                    <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/15 px-4 py-3 text-sm text-red-300">
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-8 py-4 text-base font-bold text-navy-950 shadow-premium transition-all hover:brightness-110 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {submitting ? (
                                        <>
                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-navy-950/40 border-t-navy-950" />
                                            Sending…
                                        </>
                                    ) : (
                                        <>
                                            Request a Consultation
                                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                        </>
                                    )}
                                </button>
                                <p className="mt-5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-xs leading-relaxed text-amber-200">
                                    Please do not submit medical records, clinical notes, diagnoses, insurance
                                    cards, or other sensitive patient information through this form.
                                </p>
                            </form>
                        </ScrollReveal>

                        {/* Side info */}
                        <div className="lg:col-span-5">
                            <ScrollReveal delay={0.1}>
                                <div className="rounded-[32px] border border-white/15 bg-slate-900/75 p-7 sm:p-9 shadow-xl backdrop-blur-xl">
                                    <h2 className="text-xl font-bold text-white">Direct Inquiries</h2>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                        Prefer to reach out directly? Use the address that matches your need.
                                    </p>
                                    <ul className="mt-6 space-y-4">
                                        {[
                                            { label: "Operations & Client Inquiries", email: "contact@marthsystems.com" },
                                            { label: "General Inquiries", email: "info@marthsystems.com" },
                                        ].map((c) => (
                                            <li
                                                key={c.email}
                                                className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition-colors hover:border-teal-400/40"
                                            >
                                                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300 border border-teal-500/30">
                                                    <Mail className="h-4 w-4" />
                                                </span>
                                                <div>
                                                    <div className="text-sm font-bold text-white">{c.label}</div>
                                                    <a
                                                        href={`mailto:${c.email}`}
                                                        className="text-sm text-teal-300 hover:text-teal-200 underline underline-offset-4"
                                                    >
                                                        {c.email}
                                                    </a>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-7 space-y-3.5 border-t border-white/10 pt-6">
                                        <div className="flex items-center gap-3 text-sm text-slate-300">
                                            <ShieldCheck className="h-5 w-5 text-teal-400 shrink-0" />
                                            <span>B2B healthcare operations services</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-300">
                                            <Clock className="h-5 w-5 text-teal-400 shrink-0" />
                                            <span>We respond to inquiries during business hours</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Field({ label, name, type = "text", value, onChange, required, placeholder }) {
    return (
        <div>
            <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-slate-200">
                {label}{required && <span className="text-teal-400"> *</span>}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30 transition"
            />
        </div>
    );
}

function SelectField({ label, name, value, onChange, options, required }) {
    return (
        <div>
            <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-slate-200">
                {label}{required && <span className="text-teal-400"> *</span>}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30 transition"
            >
                <option value="" className="bg-slate-950 text-slate-400">Select…</option>
                {options.map((o) => (
                    <option key={o} value={o} className="bg-slate-950 text-white">{o}</option>
                ))}
            </select>
        </div>
    );
}