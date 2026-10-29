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
        <div className="bg-[#040A1C] text-slate-100 min-h-screen overflow-x-hidden">
            <SEO
                title="About Marth Systems"
                description="Marth Systems is a healthcare operations and administrative services company built on accuracy, compliance-minded operations, connection between workflows, accountability, and operational efficiency."
                path="/about"
            />

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#040A1C] pt-32 pb-24 sm:pt-40 sm:pb-32 border-b border-white/10">
                <div className="pointer-events-none absolute -left-36 top-10 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[130px] animate-ambient-slow" />
                <div className="pointer-events-none absolute -right-32 top-20 h-[460px] w-[460px] rounded-full bg-teal-400/15 blur-[130px] animate-ambient-reverse" />
                <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 backdrop-blur-md">
                                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse-soft" />
                                About Marth Systems
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight text-white">
                                Healthcare operations, handled with{" "}
                                <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
                                    discipline.
                                </span>
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

            {/* OUR STORY */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <SectionHeading
                                eyebrow="Our story"
                                title="Built for the operational side of healthcare."
                                description="Healthcare organizations are asked to do more administratively with the same resources. Credentialing files sit incomplete. Claims get denied. AR ages. Prior authorizations stall. Patient inquiries pile up."
                                align="left"
                                light={true}
                            />
                            <ScrollReveal delay={0.1}>
                                <p className="mt-5 text-base leading-relaxed text-slate-300">
                                    Marth Systems was built to take on that operational load — not as a generic
                                    vendor, but as a team that understands how these workflows connect. When
                                    credentialing is incomplete, billing suffers. When billing suffers, AR ages.
                                    When AR ages, the whole practice feels it.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.16}>
                                <p className="mt-4 text-base leading-relaxed text-slate-300">
                                    We work across that chain so the handoffs don't break down — and so your team can
                                    stay focused on what matters most: patient care.
                                </p>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal delay={0.1}>
                            <div className="relative">
                                <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-500/15 to-cyan-500/10 blur-2xl" />
                                <div className="relative rounded-[32px] border border-teal-500/30 bg-slate-900/85 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-300">
                                        Core Identity
                                    </span>
                                    <p className="mt-4 text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                                        Accurate. Compliant. Connected.
                                    </p>
                                    <p className="mt-3 text-base leading-relaxed text-slate-300">
                                        Three words that guide how we work — and what we expect of ourselves on every
                                        credentialing file, claim, and authorization we touch.
                                    </p>
                                    <div className="mt-7 grid grid-cols-3 gap-3 text-center">
                                        {["Accurate", "Compliant", "Connected"].map((w) => (
                                            <div
                                                key={w}
                                                className="rounded-2xl border border-white/10 bg-slate-950/70 p-3.5 shadow-lg"
                                            >
                                                <span className="text-sm font-bold text-teal-300">{w}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* WHAT WE STAND FOR */}
            <section className="relative overflow-hidden bg-[#040A1C] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute right-1/4 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What we stand for"
                        title="The principles behind our work."
                        description="These aren't marketing words — they're how we actually operate day to day."
                        light={true}
                    />
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {PILLARS.map((p, i) => (
                            <ScrollReveal key={p.title} delay={(i % 3) * 0.06}>
                                <div className="group h-full rounded-[28px] border border-white/10 bg-slate-900/75 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/60 hover:bg-slate-900/95">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-teal-300 border border-white/10 transition-colors group-hover:bg-gradient-to-tr group-hover:from-teal-500 group-hover:to-cyan-400 group-hover:text-navy-950">
                                        <p.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-5 text-lg font-bold text-white">{p.title}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{p.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMMITMENT TO HONESTY */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28">
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
                    <div className="rounded-[36px] border border-white/15 bg-gradient-to-br from-slate-900/90 via-[#07112C] to-slate-950 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-2xl">
                        <ScrollReveal>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                                We'd rather do the work well than promise what we can't deliver.
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.08}>
                            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                                We don't trade in invented statistics, fake testimonials, or unsupported guarantees.
                                We believe healthcare operations is serious work — and we treat it that way.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.16}>
                            <Link
                                to="/contact"
                                className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-8 py-4 text-base font-bold text-navy-950 shadow-premium transition-all hover:brightness-110 hover:scale-[1.02]"
                            >
                                Request a Consultation
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}