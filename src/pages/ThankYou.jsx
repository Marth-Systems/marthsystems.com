import { Link } from "react-router-dom";
import { FileSearch, Share2, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";

const NEXT_STEPS = [
    { icon: FileSearch, title: "Request Reviewed", description: "Our team reviews the information you submitted." },
    { icon: Share2, title: "Routed to the Right Team", description: "Your inquiry is directed according to the service you selected." },
    { icon: MessageSquare, title: "Next Conversation", description: "We'll use your inquiry to understand where operational support may be appropriate." },
];

export default function ThankYou() {
    return (
        <div className="bg-[#040A1C] text-slate-100 min-h-screen overflow-x-hidden">
            <SEO
                title="Thank You — Marth Systems"
                description="Thank you for contacting Marth Systems. Your inquiry has been directed to the appropriate team and will be reviewed."
                path="/thank-you"
                noindex
            />
            <section className="relative overflow-hidden bg-[#040A1C] pt-36 pb-24 sm:pt-44 sm:pb-32">
                <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[130px]" />
                <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-teal-500/15 blur-[130px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
                <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-500/30 bg-teal-500/15 text-teal-300 shadow-xl">
                            <CheckCircle2 className="h-9 w-9" />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.06}>
                        <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-white">
                            Thank You. We've Received Your Inquiry.
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.12}>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                            Your request has been directed to the appropriate Marth Systems team. We'll review the
                            information you provided and determine the appropriate next step.
                        </p>
                    </ScrollReveal>

                    <div className="mt-12 grid gap-5 sm:grid-cols-3">
                        {NEXT_STEPS.map((s, i) => (
                            <ScrollReveal key={s.title} delay={0.16 + i * 0.06}>
                                <div className="h-full rounded-[28px] border border-white/10 bg-slate-900/75 p-6 sm:p-7 text-left shadow-xl backdrop-blur-xl">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300 border border-teal-500/30">
                                        <s.icon className="h-5 w-5" />
                                    </div>
                                    <h2 className="mt-4 text-base font-bold text-white">{s.title}</h2>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal delay={0.36}>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/"
                                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-8 py-4 text-base font-bold text-navy-950 shadow-premium transition-all hover:brightness-110 hover:scale-[1.02]"
                            >
                                Return to Homepage
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                to="/resources"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/40"
                            >
                                Explore Resources
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}