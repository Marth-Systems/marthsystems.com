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
        <>
            <SEO
                title="Thank You — Marth Systems"
                description="Thank you for contacting Marth Systems. Your inquiry has been directed to the appropriate team and will be reviewed."
                path="/thank-you"
                noindex
            />
            <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-32 pb-24 sm:pt-40 sm:pb-32">
                <div className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
                <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
                <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                            <CheckCircle2 className="h-9 w-9" />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.06}>
                        <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-navy-900">
                            Thank You. We've Received Your Inquiry.
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.12}>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                            Your request has been directed to the appropriate Marth Systems team. We'll review the
                            information you provided and determine the appropriate next step.
                        </p>
                    </ScrollReveal>

                    <div className="mt-12 grid gap-5 sm:grid-cols-3">
                        {NEXT_STEPS.map((s, i) => (
                            <ScrollReveal key={s.title} delay={0.16 + i * 0.06}>
                                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-premium">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-teal-300">
                                        <s.icon className="h-5 w-5" />
                                    </div>
                                    <h2 className="mt-4 text-base font-semibold text-navy-900">{s.title}</h2>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal delay={0.36}>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/"
                                className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-base font-semibold text-white shadow-premium-lg transition-all hover:bg-navy-800 hover:scale-[1.02]"
                            >
                                Return to Homepage
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                to="/resources"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-navy-900 transition-all hover:border-teal-400 hover:text-teal-700"
                            >
                                Explore Resources
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}