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
        <div className="bg-[#040A1C] text-slate-100 min-h-screen overflow-x-hidden">
            <SEO
                title="Provider Enrollment Services | Marth Systems"
                description="Provider enrollment support for healthcare organizations, including application preparation, submission support, payer follow-up, status tracking, and ongoing enrollment maintenance."
                path="/provider-enrollment"
            />

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#040A1C] pt-32 pb-24 sm:pt-40 sm:pb-32 border-b border-white/10">
                <div className="pointer-events-none absolute -left-36 top-10 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[130px] animate-ambient-slow" />
                <div className="pointer-events-none absolute -right-32 top-20 h-[460px] w-[460px] rounded-full bg-teal-400/15 blur-[130px] animate-ambient-reverse" />
                <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-14 lg:grid-cols-2">
                        <div className="max-w-3xl">
                            <ScrollReveal>
                                <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 backdrop-blur-md">
                                    <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse-soft" />
                                    Provider Enrollment
                                </span>
                            </ScrollReveal>
                            <ScrollReveal delay={0.06}>
                                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight text-white">
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
                                <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                    <Link
                                        to="/contact"
                                        onClick={() => trackEvent("service_cta_click", { cta: "Discuss Provider Enrollment" })}
                                        className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-8 py-4 text-base font-bold text-navy-950 shadow-premium transition-all hover:brightness-110 hover:scale-[1.02]"
                                    >
                                        Discuss Provider Enrollment
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <Link
                                        to="/credentialing"
                                        onClick={() => trackEvent("secondary_cta_click", { location: "enrollment_hero" })}
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/40"
                                    >
                                        Explore Credentialing
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal delay={0.2} className="lg:justify-self-end w-full flex justify-center lg:justify-end">
                            <EnrollmentVisualization />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* WHY ENROLLMENT WORKFLOWS BECOME DIFFICULT */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The challenge"
                        title="Why enrollment workflows become difficult."
                        description="Enrollment work is rarely difficult because of any single step — it becomes difficult when applications, requirements, and follow-ups aren't organized in one place."
                        light={true}
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {DIFFICULTIES.map((d, i) => (
                            <ScrollReveal key={d.title} delay={i * 0.06}>
                                <div className="group h-full rounded-[28px] border border-white/10 bg-slate-900/75 p-6 sm:p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/60 hover:bg-slate-900/95">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300 border border-teal-500/30 transition-colors group-hover:bg-gradient-to-tr group-hover:from-teal-500 group-hover:to-cyan-400 group-hover:text-navy-950">
                                        <d.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-5 text-base font-bold text-white">{d.title}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{d.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT WE SUPPORT */}
            <section className="relative overflow-hidden bg-[#040A1C] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute right-10 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What we support"
                        title="Administrative support across the enrollment workflow."
                        description="Organized, coordinated support for the operational side of provider enrollment."
                        light={true}
                    />
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((s, i) => (
                            <ScrollReveal key={s.title} delay={(i % 3) * 0.06}>
                                <div className="group h-full rounded-[28px] border border-white/10 bg-slate-900/75 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/60 hover:bg-slate-900/95">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-teal-300 border border-white/10 transition-colors group-hover:bg-gradient-to-tr group-hover:from-teal-500 group-hover:to-cyan-400 group-hover:text-navy-950">
                                        <s.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{s.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal delay={0.1}>
                        <div className="mt-12 flex items-start gap-3.5 rounded-2xl border border-teal-500/30 bg-teal-500/10 p-6 backdrop-blur-xl">
                            <Info className="h-5 w-5 shrink-0 text-teal-300 mt-0.5" />
                            <p className="text-sm leading-relaxed text-slate-200">
                                Enrollment requirements, processes, and decisions vary by payer and program. Marth
                                Systems provides administrative and operational support for enrollment workflows —
                                we do not approve, determine, or guarantee enrollment outcomes.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* WORKFLOW */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28 border-b border-white/10">
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The workflow"
                        title="A structured path from assessment to maintenance."
                        description="Each step keeps enrollment work organized, visible, and moving."
                        light={true}
                    />
                    <div className="mt-16">
                        <WorkflowDiagram steps={STEPS} variant="dark" />
                    </div>
                </div>
            </section>

            {/* CREDENTIALING VS ENROLLMENT */}
            <section className="relative overflow-hidden bg-[#040A1C] py-20 sm:py-28">
                <div className="pointer-events-none absolute left-1/4 bottom-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Credentialing vs. enrollment"
                        title="Credentialing and Enrollment Are Connected — But They Are Not the Same Process"
                        description="The two terms are often used interchangeably, but they describe different parts of the provider-payer workflow."
                        light={true}
                    />
                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
                        <ScrollReveal>
                            <div className="h-full rounded-[32px] border border-white/10 bg-slate-900/75 p-8 shadow-xl backdrop-blur-xl hover:border-teal-400/50 transition-all">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300 border border-teal-500/30">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <h3 className="mt-5 text-xl font-bold text-white">Credentialing</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                    Credentialing focuses on verifying provider qualifications and professional
                                    information — education, training, licensure, certifications, and related
                                    history — through primary sources and applicable screenings.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.08}>
                            <div className="h-full rounded-[32px] border border-teal-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-8 shadow-xl backdrop-blur-xl hover:border-teal-400/70 transition-all">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 text-navy-950">
                                    <Building2 className="h-6 w-6" />
                                </div>
                                <h3 className="mt-5 text-xl font-bold text-white">Enrollment</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                    Enrollment focuses on establishing or maintaining participation with applicable
                                    payers and related administrative processes — applications, submissions,
                                    follow-up, and ongoing maintenance.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal delay={0.14}>
                        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-slate-300">
                            The two processes may overlap operationally. Credentialing information often
                            supports enrollment applications, and both typically require coordinated
                            documentation and follow-up. Learn more about our{" "}
                            <Link to="/credentialing" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                credentialing support
                            </Link>
                            .
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.18}>
                        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-slate-400">
                            Provider enrollment can affect downstream administrative workflows, including{" "}
                            <Link to="/billing" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                billing
                            </Link>{" "}
                            and payer-related processes — see how we support{" "}
                            <Link to="/ar-management" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                AR management
                            </Link>{" "}
                            and{" "}
                            <Link to="/provider-contracting" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
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
                email="contact@marthsystems.com"
                emailLabel="contact@marthsystems.com"
            />
        </div>
    );
}