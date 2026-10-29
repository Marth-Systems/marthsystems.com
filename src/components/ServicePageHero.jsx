import { Link } from "react-router-dom";
import { ArrowRight, Mail, CheckCircle2, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { trackEvent } from "@/lib/analytics";

export default function ServicePageHero({
    eyebrow,
    title,
    description,
    email,
    ctaText,
    metrics = [],
    highlights = [
        "Dedicated Operations Specialists",
        "HIPAA-Compliant Workflows",
        "Real-Time Status Visibility",
    ],
}) {
    return (
        <section className="relative overflow-hidden bg-[#040A1C] pt-32 pb-24 sm:pt-40 sm:pb-32 text-white border-b border-white/10">
            {/* Ambient Glowing Mesh Lighting */}
            <div className="pointer-events-none absolute -left-36 top-10 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[130px] animate-ambient-slow" />
            <div className="pointer-events-none absolute -right-32 top-20 h-[460px] w-[460px] rounded-full bg-teal-400/15 blur-[130px] animate-ambient-reverse" />
            <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className={`grid items-center gap-12 ${metrics.length > 0 ? "lg:grid-cols-12" : ""}`}>
                    <div className={metrics.length > 0 ? "lg:col-span-7" : "max-w-3xl"}>
                        <ScrollReveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 backdrop-blur-md">
                                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse-soft" />
                                {eyebrow}
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight text-white">
                                {title}
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mt-6 text-lg leading-relaxed text-slate-300">{description}</p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.18}>
                            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                <Link
                                    to="/contact"
                                    onClick={() => trackEvent("service_cta_click", { cta: ctaText })}
                                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-8 py-4 text-base font-bold text-navy-950 shadow-premium transition-all hover:brightness-110 hover:scale-[1.02]"
                                >
                                    {ctaText}
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                                {email && (
                                    <a
                                        href={`mailto:${email}`}
                                        onClick={() => trackEvent("email_cta_click", { cta: ctaText })}
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/40"
                                    >
                                        <Mail className="h-4 w-4 text-teal-300" />
                                        {email}
                                    </a>
                                )}
                            </div>
                        </ScrollReveal>

                        {highlights.length > 0 && (
                            <ScrollReveal delay={0.24}>
                                <div className="mt-10 flex flex-wrap items-center gap-6 pt-8 border-t border-white/10 text-xs text-slate-400">
                                    {highlights.map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        )}
                    </div>

                    {metrics.length > 0 && (
                        <div className="lg:col-span-5">
                            <ScrollReveal delay={0.2}>
                                <div className="rounded-[32px] border border-white/15 bg-slate-900/80 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
                                    <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                                        <div className="flex items-center gap-2.5">
                                            <span className="h-2.5 w-2.5 rounded-full bg-teal-400 animate-pulse" />
                                            <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                                                Operational Benchmarks
                                            </span>
                                        </div>
                                        <ShieldCheck className="h-4 w-4 text-teal-400" />
                                    </div>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                        {metrics.map((m) => (
                                            <div
                                                key={m.label}
                                                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 flex items-center justify-between gap-4 hover:border-teal-400/40 transition-colors"
                                            >
                                                <div>
                                                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                                        {m.label}
                                                    </div>
                                                    {m.sub && (
                                                        <div className="text-xs text-slate-300 mt-0.5">{m.sub}</div>
                                                    )}
                                                </div>
                                                <div className="text-2xl font-extrabold text-teal-300 shrink-0 font-mono">
                                                    {m.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}