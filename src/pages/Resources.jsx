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
        <>
            <SEO
                title="Resources — Healthcare Operations Insights"
                description="Educational resources from Marth Systems on provider credentialing, provider enrollment, medical billing, AR management, prior authorization, patient support, and healthcare operations."
                path="/resources"
            />

            <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-28 pb-16 sm:pt-36 sm:pb-20">
                <div className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 shadow-premium">
                                Resources
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-navy-900">
                                Insights on healthcare operations.
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mt-5 text-lg leading-relaxed text-slate-600">
                                Educational articles to help healthcare organizations understand credentialing,
                                enrollment, billing, AR management, prior authorization, and the operational side
                                of running a practice. Our library is organized by category and will grow over
                                time.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CATEGORIES */}
            <section className="bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Content categories"
                        title="What we'll be writing about."
                        description="Seven categories covering the operational areas where healthcare organizations need clarity most."
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {CATEGORIES.map((c, i) => (
                            <ScrollReveal key={c.name} delay={(i % 3) * 0.06}>
                                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-premium transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-premium-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                                            <BookOpen className="h-5 w-5" />
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                                            <Clock className="h-3 w-3" />
                                            {plannedCount(c.name) > 0
                                                ? `${plannedCount(c.name)} planned article${plannedCount(c.name) === 1 ? "" : "s"}`
                                                : "Topics in planning"}
                                        </span>
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-navy-900">{c.name}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* PLANNED ARTICLES */}
            <section className="bg-slate-50 py-16 sm:py-24">
                <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The content plan"
                        title="Planned article topics."
                        description="Articles we're preparing, based on the questions healthcare organizations actually search for. They'll be published here as they're completed — we won't post anything before it's ready."
                    />
                    <div className="mt-14 space-y-12">
                        {CATEGORIES.map((c) => (
                            <div key={c.name}>
                                <ScrollReveal>
                                    <h3 className="flex items-center gap-3 text-lg font-semibold text-navy-900">
                                        <span className="h-px w-6 bg-teal-500" />
                                        {c.name}
                                    </h3>
                                </ScrollReveal>
                                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                    {(PLANNED_ARTICLES[c.name] || []).map((title, i) => (
                                        <ScrollReveal key={title} delay={i * 0.04}>
                                            <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-premium">
                                                <span className="text-sm font-medium text-navy-900">{title}</span>
                                                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
                                                    <FileText className="h-3 w-3" />
                                                    Planned
                                                </span>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                    {plannedCount(c.name) === 0 && (
                                        <ScrollReveal>
                                            <p className="text-sm leading-relaxed text-slate-500">
                                                Topics in planning — check back soon.
                                            </p>
                                        </ScrollReveal>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <ScrollReveal delay={0.1}>
                        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
                            Resource topics are educational content for healthcare organizations — not clinical,
                            legal, or payer-specific advice. Requirements vary by payer, state, and provider
                            type; check with the applicable payer or program for current requirements.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-teal-300">
                            <FileText className="h-6 w-6" />
                        </div>
                        <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-navy-900">
                            Have a question about your operations?
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                            While we build out our resource library, our team is happy to talk through your
                            credentialing, enrollment, billing, AR, or authorization questions directly.
                        </p>
                        <Link
                            to="/contact"
                            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-base font-semibold text-navy-950 shadow-premium-lg transition-all hover:bg-teal-400 hover:scale-[1.02]"
                        >
                            Request a Consultation
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}