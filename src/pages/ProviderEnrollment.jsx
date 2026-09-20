import { Link } from "react-router-dom";
import {
    Building2, FileText, Send, MessageSquare, Activity, RefreshCw,
    ClipboardList, FileWarning, Eye, Info, ArrowRight, ShieldCheck,
} from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import EnrollmentVisualization from "@/components/EnrollmentVisualization";
import { trackEvent } from "@/lib/analytics";

const SERVICES = [
    { icon: Building2, title: "Initial Enrollment Support", description: "Support preparation and coordination of enrollment activities for applicable payers." },
    { icon: FileText, title: "Application Preparation", description: "Help organize provider and organization information and required administrative documentation." },
    { icon: Send, title: "Enrollment Submission Support", description: "Support submission workflows and documentation coordination where applicable." },
    { icon: MessageSquare, title: "Payer Follow-Up", description: "Maintain visibility into outstanding requests, responses, and follow-up activities." },
    { icon: Activity, title: "Enrollment Status Tracking", description: "Track application progress, pending items, additional-information requests, and status updates." },
    { icon: RefreshCw, title: "Revalidation / Re-enrollment Support", description: "Support applicable ongoing enrollment maintenance activities." },
];

const DIFFICULTIES = [
    { icon: ClipboardList, title: "Multiple Applications", description: "Different organizations and payers may have different processes and documentation requirements." },
    { icon: FileWarning, title: "Incomplete Information", description: "Missing or inconsistent information can create additional administrative work." },
    { icon: MessageSquare, title: "Follow-Up Gaps", description: "Untracked requests or unanswered communications can make status difficult to determine." },
    { icon: Eye, title: "Limited Visibility", description: "Without centralized tracking, teams may struggle to see what is pending and what needs attention." },
];

const STEPS = [
    { title: "Assess", description: "Review current enrollment status, applicable payers, and outstanding needs." },
    { title: "Gather", description: "Collect provider, organization, and administrative information needed for applications." },
    { title: "Prepare", description: "Organize complete, accurate applications and supporting documentation where applicable." },
    { title: "Submit", description: "Support submission workflows through the appropriate channels." },
    { title: "Follow Up", description: "Track responses and follow up on outstanding items and communication." },
    { title: "Track", description: "Maintain visibility into application status, pending items, and next steps." },
    { title: "Maintain", description: "Support revalidation, re-enrollment, and ongoing enrollment maintenance where applicable." },
];

export default function ProviderEnrollment() {
    return (
        <>
            <SEO
                title="Provider Enrollment Services | Marth Systems"
                description="Provider enrollment support for healthcare organizations, including application preparation, submission support, payer follow-up, status tracking, and ongoing enrollment maintenance."
                path="/provider-enrollment"
            />

            {/* HERO */}
            <section className="relative overflow-hidden bg-navy-900 pt-28 pb-20 sm:pt-36 sm:pb-28">
                <div className="absolute inset-0 bg-grid-dark opacity-25" />
                <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
                <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-14 lg:grid-cols-2">
                        <div className="max-w-3xl">
                            <ScrollReveal>
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                                    Provider Enrollment
                                </span>
                            </ScrollReveal>
                            <ScrollReveal delay={0.06}>
                                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white">
                                    Provider Enrollment, Organized From Application to Follow-Up
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.12}>
                                <p className="mt-6 text-lg leading-relaxed text-slate-300">
                                    Provider enrollment can involve multiple applications, payer requirements,
                                    documentation requests, and follow-ups. Marth Systems supports the
                                    administrative workflow to help keep enrollment activities organized, visible,
                                    and moving.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.18}>
                                <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <Link
                                        to="/contact"
                                        onClick={() => trackEvent("service_cta_click", { cta: "Discuss Provider Enrollment" })}
                                        className="group inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-base font-semibold text-navy-950 shadow-premium-lg transition-all hover:bg-teal-400 hover:scale-[1.02]"
                                    >
                                        Discuss Provider Enrollment
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <Link
                                        to="/credentialing"
                                        onClick={() => trackEvent("secondary_cta_click", { location: "enrollment_hero" })}
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                                    >
                                        Explore Credentialing
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal delay={0.2} className="lg:justify-self-end">
                            <EnrollmentVisualization />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* WHY ENROLLMENT WORKFLOWS BECOME DIFFICULT */}
            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The challenge"
                        title="Why enrollment workflows become difficult."
                        description="Enrollment work is rarely difficult because of any single step — it becomes difficult when applications, requirements, and follow-ups aren't organized in one place."
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {DIFFICULTIES.map((d, i) => (
                            <ScrollReveal key={d.title} delay={i * 0.06}>
                                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-premium transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-premium-lg">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-navy-900 group-hover:text-teal-300">
                                        <d.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-4 text-base font-semibold text-navy-900">{d.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT WE SUPPORT */}
            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What we support"
                        title="Administrative support across the enrollment workflow."
                        description="Organized, coordinated support for the operational side of provider enrollment."
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((s, i) => (
                            <ScrollReveal key={s.title} delay={(i % 3) * 0.06}>
                                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-premium transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-premium-lg">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-teal-300 transition-colors group-hover:bg-teal-500 group-hover:text-navy-950">
                                        <s.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold text-navy-900">{s.title}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{s.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal delay={0.1}>
                        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-teal-200 bg-teal-50 p-6">
                            <Info className="h-5 w-5 shrink-0 text-teal-700 mt-0.5" />
                            <p className="text-sm leading-relaxed text-navy-800">
                                Enrollment requirements, processes, and decisions vary by payer and program. Marth
                                Systems provides administrative and operational support for enrollment workflows —
                                we do not approve, determine, or guarantee enrollment outcomes.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* WORKFLOW */}
            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The workflow"
                        title="A structured path from assessment to maintenance."
                        description="Each step keeps enrollment work organized, visible, and moving."
                    />
                    <div className="mt-16">
                        <WorkflowDiagram steps={STEPS} />
                    </div>
                </div>
            </section>

            {/* CREDENTIALING VS ENROLLMENT */}
            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Credentialing vs. enrollment"
                        title="Credentialing and Enrollment Are Connected — But They Are Not the Same Process"
                        description="The two terms are often used interchangeably, but they describe different parts of the provider-payer workflow."
                    />
                    <div className="mt-14 grid gap-5 lg:grid-cols-2">
                        <ScrollReveal>
                            <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-premium">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-teal-300">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-navy-900">Credentialing</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Credentialing focuses on verifying provider qualifications and professional
                                    information — education, training, licensure, certifications, and related
                                    history — through primary sources and applicable screenings.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.08}>
                            <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-premium">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500 text-navy-950">
                                    <Building2 className="h-6 w-6" />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-navy-900">Enrollment</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Enrollment focuses on establishing or maintaining participation with applicable
                                    payers and related administrative processes — applications, submissions,
                                    follow-up, and ongoing maintenance.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal delay={0.14}>
                        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-slate-600">
                            The two processes may overlap operationally. Credentialing information often
                            supports enrollment applications, and both typically require coordinated
                            documentation and follow-up. Learn more about our{" "}
                            <Link to="/credentialing" className="font-semibold text-teal-700 hover:underline">
                                credentialing support
                            </Link>
                            .
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.18}>
                        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-slate-500">
                            Provider enrollment can affect downstream administrative workflows, including{" "}
                            <Link to="/billing" className="font-semibold text-teal-700 hover:underline">
                                billing
                            </Link>{" "}
                            and payer-related processes — see how we support{" "}
                            <Link to="/ar-management" className="font-semibold text-teal-700 hover:underline">
                                AR management
                            </Link>{" "}
                            and{" "}
                            <Link to="/provider-contracting" className="font-semibold text-teal-700 hover:underline">
                                provider contracting
                            </Link>
                            .
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <CTASection
                title="Discuss Provider Enrollment."
                description="Let's talk about how Marth Systems can support the administrative side of your provider enrollment workflow."
                buttonText="Discuss Provider Enrollment"
                email="credentialing@marthsystems.com"
                emailLabel="credentialing@marthsystems.com"
            />
        </>
    );
}