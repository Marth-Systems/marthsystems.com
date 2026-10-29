import { Link } from "react-router-dom";
import { ArrowRight, FileText, Clock, BookOpen } from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

const CATEGORIES = [
    { name: "Credentialing", description: "Verification, applications, and what payers look for." },
    { name: "Provider Enrollment", description: "Applications, payer programs, and follow-up." },
    { name: "Medical Billing", description: "Claims workflow, denials, and payment fundamentals." },
    { name: "AR Management", description: "Aging, prioritization, and structured follow-up." },
    { name: "Prior Authorization", description: "Authorization workflows and status tracking." },
    { name: "Patient Support", description: "Administrative patient communication." },
    { name: "Healthcare Operations", description: "How connected administrative workflows fit together." },
];

const PLANNED_ARTICLES = {
    Credentialing: [
        "What Is Provider Credentialing?",
        "Credentialing vs Provider Enrollment: What's the Difference?",
        "What Is Primary Source Verification?",
        "What Information Is Commonly Needed for Credentialing?",
        "What Is CAQH and Why Does It Matter?",
    ],
    "Provider Enrollment": [
        "What Is Provider Enrollment?",
        "Common Provider Enrollment Challenges",
        "Provider Enrollment vs Credentialing",
        "What Is Medicare Provider Enrollment?",
        "What Is Medicaid Provider Enrollment?",
    ],
    "Medical Billing": [
        "What Is Medical Billing Workflow?",
        "What Is Denial Management?",
        "Common Causes of Claim Delays",
    ],
    "AR Management": [
        "Understanding A/R Aging in Medical Billing",
    ],
    "Prior Authorization": [],
    "Patient Support": [],
    "Healthcare Operations": [
        "How Billing, Enrollment, and Credentialing Connect",
    ],
};

function plannedCount(category) {
    return (PLANNED_ARTICLES[category] || []).length;
}

export default function Resources() {
    return (
        <div className="bg-[#040A1C] text-slate-100 min-h-screen overflow-x-hidden">
            <SEO
                title="Resources — Healthcare Operations Insights"
                description="Educational resources from Marth Systems on provider credentialing, provider enrollment, medical billing, AR management, prior authorization, patient support, and healthcare operations."
                path="/resources"
            />

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#040A1C] pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-white/10">
                <div className="pointer-events-none absolute -left-36 top-10 h-[460px] w-[460px] rounded-full bg-cyan-500/15 blur-[130px] animate-ambient-slow" />
                <div className="pointer-events-none absolute -right-32 top-20 h-[440px] w-[440px] rounded-full bg-teal-400/15 blur-[130px] animate-ambient-reverse" />
                <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 backdrop-blur-md">
                                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse-soft" />
                                Resources & Knowledge Hub
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight text-white">
                                Insights on{" "}
                                <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
                                    healthcare operations.
                                </span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mt-6 text-lg leading-relaxed text-slate-300">
                                Educational articles to help healthcare organizations understand credentialing,
                                enrollment, billing, AR management, prior authorization, and the operational side
                                of running a practice. Our library is organized by category and will grow over
                                time.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.18}>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/blog"
                                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-7 py-3.5 text-sm font-bold text-navy-950 shadow-premium transition-all hover:brightness-110 hover:scale-[1.02]"
                                >
                                    Read Published Articles
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/40"
                                >
                                    Ask an Operations Question
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CATEGORIES */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Content categories"
                        title="What we'll be writing about."
                        description="Seven categories covering the operational areas where healthcare organizations need clarity most."
                        light={true}
                    />
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {CATEGORIES.map((c, i) => (
                            <ScrollReveal key={c.name} delay={(i % 3) * 0.06}>
                                <div className="group h-full rounded-[28px] border border-white/10 bg-slate-900/75 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/60 hover:bg-slate-900/95">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300 border border-teal-500/30 transition-colors group-hover:bg-teal-400 group-hover:text-navy-950">
                                            <BookOpen className="h-5 w-5" />
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                                            <Clock className="h-3 w-3 text-teal-400" />
                                            {plannedCount(c.name) > 0
                                                ? `${plannedCount(c.name)} topic${plannedCount(c.name) === 1 ? "" : "s"}`
                                                : "Topics in planning"}
                                        </span>
                                    </div>
                                    <h3 className="mt-5 text-lg font-bold text-white">{c.name}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{c.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* PLANNED ARTICLES */}
            <section className="relative overflow-hidden bg-[#040A1C] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute right-10 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The content plan"
                        title="Article library & topic roadmap."
                        description="Articles we're preparing and publishing, based on the questions healthcare organizations actually search for."
                        light={true}
                    />
                    <div className="mt-14 space-y-12">
                        {CATEGORIES.map((c) => (
                            <div key={c.name}>
                                <ScrollReveal>
                                    <h3 className="flex items-center gap-3 text-lg font-bold text-white">
                                        <span className="h-px w-6 bg-teal-400" />
                                        {c.name}
                                    </h3>
                                </ScrollReveal>
                                <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
                                    {(PLANNED_ARTICLES[c.name] || []).map((title, i) => (
                                        <ScrollReveal key={title} delay={i * 0.04}>
                                            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/75 px-5 py-4 shadow-xl backdrop-blur-xl transition-colors hover:border-teal-400/50">
                                                <span className="text-sm font-semibold text-white">{title}</span>
                                                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/15 px-2.5 py-1 text-xs font-semibold text-teal-300">
                                                    <FileText className="h-3 w-3" />
                                                    Topic
                                                </span>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                    {plannedCount(c.name) === 0 && (
                                        <ScrollReveal>
                                            <p className="text-sm leading-relaxed text-slate-400">
                                                Topics in planning — check back soon.
                                            </p>
                                        </ScrollReveal>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <ScrollReveal delay={0.1}>
                        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-slate-400">
                            Resource topics are educational content for healthcare organizations — not clinical,
                            legal, or payer-specific advice. Requirements vary by payer, state, and provider
                            type; check with the applicable payer or program for current requirements.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* CALLOUT */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-24">
                <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
                    <div className="rounded-[36px] border border-white/15 bg-gradient-to-br from-slate-900/90 via-[#07112C] to-slate-950 p-8 sm:p-14 shadow-2xl backdrop-blur-2xl">
                        <ScrollReveal>
                            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-500/30 bg-teal-500/15 text-teal-300">
                                <FileText className="h-6 w-6" />
                            </div>
                            <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-white">
                                Have a question about your operations?
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
                                While we build out our resource library, our team is happy to talk through your
                                credentialing, enrollment, billing, AR, or authorization questions directly.
                            </p>
                            <Link
                                to="/contact"
                                className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-8 py-4 text-base font-bold text-navy-950 shadow-premium transition-all hover:brightness-110 hover:scale-[1.02]"
                            >
                                Request a Consultation
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}