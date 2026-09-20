import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { trackEvent } from "@/lib/analytics";

export default function CTASection({
    title = "Let's Simplify Your Healthcare Operations.",
    description = "Talk to the Marth Systems team about how we can support your credentialing, billing, AR, prior authorization, and patient support workflows.",
    buttonText = "Request a Consultation",
    email,
    emailLabel,
}) {
    return (
        <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
            <div className="absolute inset-0 bg-grid-dark opacity-30" />
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
            <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
                <ScrollReveal>
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight text-white">
                        {title}
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.08}>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                        {description}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.16}>
                    <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            onClick={() => trackEvent("service_cta_click", { cta: buttonText })}
                            className="group inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-base font-semibold text-navy-950 shadow-premium-lg transition-all hover:bg-teal-400 hover:scale-[1.02]"
                        >
                            {buttonText}
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        {email && (
                            <a
                                href={`mailto:${email}`}
                                onClick={() => trackEvent("email_cta_click", { cta: buttonText })}
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                            >
                                {emailLabel || email}
                            </a>
                        )}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}