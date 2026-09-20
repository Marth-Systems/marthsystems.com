import { Link } from "react-router-dom";
import { Target, ShieldCheck, Link2, ClipboardCheck, Gauge, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const PILLARS = [
    { icon: Target, title: "Accuracy", description: "We treat credentialing files, claims, and authorization documentation with the precision they require. Small errors create large delays, so we sweat the details." },
    { icon: ShieldCheck, title: "Compliance-minded operations", description: "Our workflows are structured around verification, documentation, and payer requirements — not shortcuts." },
    { icon: Link2, title: "Connection between workflows", description: "Credentialing, billing, AR, and authorizations are connected. We work across them so handoffs don't break down." },
    { icon: ClipboardCheck, title: "Accountability", description: "We track what we work on and report back clearly. You always know where applications, claims, and AR stand." },
    { icon: Gauge, title: "Operational efficiency", description: "We bring structure and consistency to repetitive administrative work so your team spends less time chasing and more time caring for patients." },
];

export default function About() {
    return (
        <>
            <SEO
                title="About Marth Systems"
                description="Marth Systems is a healthcare operations and administrative services company built on accuracy, compliance-minded operations, connection between workflows, accountability, and operational efficiency."
                path="/about"
            />

            <section className="relative overflow-hidden bg-navy-900 pt-28 pb-20 sm:pt-36 sm:pb-28">
                <div className="absolute inset-0 bg-grid-dark opacity-25" />
                <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                                About Marth Systems
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white">
                                Healthcare operations, handled with discipline.
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mt-6 text-lg leading-relaxed text-slate-300">
                                Marth Systems is a healthcare operations and administrative services company. We
                                exist because the administrative backbone of healthcare — credentialing, billing,
                                AR, prior authorization, and patient communication — is where organizations lose
                                the most time. We bring structure, accuracy, and consistency to that work.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <SectionHeading
                                eyebrow="Our story"
                                title="Built for the operational side of healthcare."
                                description="Healthcare organizations are asked to do more administratively with the same resources. Credentialing files sit incomplete. Claims get denied. AR ages. Prior authorizations stall. Patient inquiries pile up."
                                align="left"
                            />
                            <ScrollReveal delay={0.1}>
                                <p className="mt-5 text-base leading-relaxed text-slate-600">
                                    Marth Systems was built to take on that operational load — not as a generic
                                    vendor, but as a team that understands how these workflows connect. When
                                    credentialing is incomplete, billing suffers. When billing suffers, AR ages.
                                    When AR ages, the whole practice feels it.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.16}>
                                <p className="mt-4 text-base leading-relaxed text-slate-600">
                                    We work across that chain so the handoffs don't break down — and so your team can
                                    stay focused on what matters most: patient care.
                                </p>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal delay={0.1}>
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-500/10 to-navy-400/10 blur-2xl" />
                                <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8">
                                    <p className="text-2xl font-semibold leading-tight text-navy-900">
                                        Accurate. Compliant. Connected.
                                    </p>
                                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                                        Three words that guide how we work — and what we expect of ourselves on every
                                        credentialing file, claim, and authorization we touch.
                                    </p>
                                    <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                                        {["Accurate", "Compliant", "Connected"].map((w) => (
                                            <div key={w} className="rounded-xl bg-white p-3 shadow-premium">
                                                <span className="text-sm font-semibold text-teal-700">{w}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What we stand for"
                        title="The principles behind our work."
                        description="These aren't marketing words — they're how we actually operate day to day."
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {PILLARS.map((p, i) => (
                            <ScrollReveal key={p.title} delay={(i % 3) * 0.06}>
                                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-premium transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-premium-lg">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-teal-300 transition-colors group-hover:bg-teal-500 group-hover:text-navy-950">
                                        <p.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold text-navy-900">{p.title}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{p.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
                            We'd rather do the work well than promise what we can't deliver.
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.08}>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                            We don't trade in invented statistics, fake testimonials, or unsupported guarantees.
                            We believe healthcare operations is serious work — and we treat it that way.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.16}>
                        <Link
                            to="/contact"
                            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-base font-semibold text-white shadow-premium-lg transition-all hover:bg-navy-800 hover:scale-[1.02]"
                        >
                            Request a Consultation
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <CTASection />
        </>
    );
}