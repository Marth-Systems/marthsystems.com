import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { trackEvent } from "@/lib/analytics";

export default function ServicePageHero({ eyebrow, title, description, email, ctaText }) {
    return (
        <section className="relative overflow-hidden bg-navy-900 pt-28 pb-20 sm:pt-36 sm:pb-28">
            <div className="absolute inset-0 bg-grid-dark opacity-25" />
            <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <ScrollReveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                            {eyebrow}
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.06}>
                        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white">
                            {title}
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.12}>
                        <p className="mt-6 text-lg leading-relaxed text-slate-300">{description}</p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.18}>
                        <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Link
                                to="/contact"
                                onClick={() => trackEvent("service_cta_click", { cta: ctaText })}
                                className="group inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-base font-semibold text-navy-950 shadow-premium-lg transition-all hover:bg-teal-400 hover:scale-[1.02]"
                            >
                                {ctaText}
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            {email && (
                                <a
                                    href={`mailto:${email}`}
                                    onClick={() => trackEvent("email_cta_click", { cta: ctaText })}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                                >
                                    <Mail className="h-4 w-4 text-teal-300" />
                                    {email}
                                </a>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}