import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, FileCheck, Receipt, TrendingUp, ClipboardCheck, Headphones, Target, Layers, Play, Activity, BarChart3, Eye, MessageSquare } from "lucide-react";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import CTASection from "@/components/CTASection";
import HeroVisualization from "@/components/HeroVisualization";
import { trackEvent } from "@/lib/analytics";

const TRUST_STRIP = [
    "Credentialing",
    "Enrollment",
    "Billing",
    "AR",
    "Authorizations",
    "Patient Support",
];

const SERVICES = [
    {
        icon: "credentialing",
        title: "Credentialing",
        description: "Primary source verification, license and board certification checks, CAQH management, and payer enrollment preparation and follow-up.",
        path: "/credentialing",
    },
    {
        icon: "credentialing",
        title: "Provider Enrollment",
        description: "Enrollment application preparation, submission support, payer follow-up, status tracking, and ongoing enrollment maintenance.",
        path: "/provider-enrollment",
    },
    {
        icon: "billing",
        title: "Billing",
        description: "Charge capture, claim preparation and submission, denial management, payment posting, and clear billing reporting.",
        path: "/billing",
    },
    {
        icon: "ar",
        title: "AR Management",
        description: "Aging analysis, insurance AR follow-up, denial and underpayment resolution, and structured AR reporting.",
        path: "/ar-management",
    },
    {
        icon: "auth",
        title: "Prior Authorization",
        description: "Authorization requirement checks, documentation coordination, submissions, payer follow-up, and status tracking.",
        path: "/prior-authorization",
    },
    {
        icon: "support",
        title: "Patient Support",
        description: "Administrative patient inquiry support, billing inquiries, status communication, and follow-up coordination.",
        path: "/patient-support",
    },
    {
        icon: "contracting",
        title: "Provider Contracting",
        description: "Contracting support coordination to help your practice navigate payer relationships and enrollment requirements.",
        path: "/provider-contracting",
    },
];

const HOW_WE_WORK = [
    { title: "Assess", description: "We review your current credentialing, billing, and AR workflows to understand where friction exists." },
    { title: "Organize", description: "We structure documentation, timelines, and responsibilities so work moves cleanly across teams." },
    { title: "Execute", description: "We handle credentialing, claims, follow-ups, and authorizations with accuracy and compliance in mind." },
    { title: "Track", description: "We track applications, claims, and AR aging so nothing falls through the cracks." },
    { title: "Improve", description: "We surface patterns and refine workflows to keep operations running more smoothly over time." },
];

const WHY_US = [
    { icon: Target, title: "Accuracy", description: "Structured workflows help reduce administrative errors and incomplete information." },
    { icon: ShieldCheck, title: "Compliance-minded", description: "Processes are designed with applicable requirements and documentation needs in mind." },
    { icon: Layers, title: "Connected", description: "Keep teams, workflows, and follow-ups connected across administrative processes." },
    { icon: Eye, title: "Accountable", description: "Maintain visibility into responsibilities, status, and outstanding actions." },
    { icon: Activity, title: "Efficient", description: "Create repeatable workflows that reduce unnecessary administrative friction." },
];

const PROBLEMS = [
    { icon: FileCheck, title: "Credentialing backlogs", description: "Incomplete files and slow payer responses delay providers from seeing patients and billing." },
    { icon: Receipt, title: "Claim denials", description: "Front-end errors and missing information lead to denials that consume staff time to rework." },
    { icon: TrendingUp, title: "Aging AR", description: "Unworked insurance balances quietly grow while internal teams focus on day-to-day operations." },
    { icon: ClipboardCheck, title: "Authorization delays", description: "Prior authorization requirements stall scheduled services and frustrate patients and staff." },
];

export default function Home() {
    return (
        <>
            <SEO
                title="Marth Systems | Healthcare Operations, Simplified."
                description="Marth Systems helps healthcare organizations reduce administrative complexity with provider credentialing, billing, AR management, prior authorization, and patient support. Accurate. Compliant. Connected."
                path="/"
            />

            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-28 pb-20 sm:pt-36 sm:pb-28">
                <div className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
                <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
                <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-navy-400/10 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <ScrollReveal>
                                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 shadow-premium">
                                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse-soft" />
                                    Accurate · Compliant · Connected
                                </span>
                            </ScrollReveal>
                            <ScrollReveal delay={0.06}>
                                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-navy-900">
                                    Healthcare Operations,{" "}
                                    <span className="text-gradient-teal">Simplified.</span>
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.12}>
                                <p className="mt-5 text-lg font-medium text-navy-800">
                                    Credentialing. Billing. AR Management. Prior Authorization. Patient Support.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.18}>
                                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                                    Marth Systems helps healthcare organizations reduce administrative complexity,
                                    improve operational workflows, and keep their teams focused on patient care.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.24}>
                                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <Link
                                        to="/contact"
                                        onClick={() => trackEvent("primary_cta_click", { location: "hero" })}
                                        className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-base font-semibold text-white shadow-premium-lg transition-all hover:bg-navy-800 hover:scale-[1.02]"
                                    >
                                        Request a Consultation
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <a
                                        href="#services"
                                        onClick={() => trackEvent("secondary_cta_click", { location: "hero" })}
                                        className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-navy-900 transition-all hover:border-teal-400 hover:text-teal-700"
                                    >
                                        <Play className="h-4 w-4 fill-current" />
                                        Explore Our Services
                                    </a>
                                </div>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal delay={0.2}>
                            <HeroVisualization />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* TRUST STRIP */}
            <section className="border-y border-slate-200 bg-white py-6">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-500">
                        {TRUST_STRIP.map((item, i) => (
                            <div key={item} className="flex items-center gap-8">
                                {i > 0 && <span className="hidden sm:block h-1 w-1 rounded-full bg-teal-400" />}
                                <span className="uppercase tracking-wide transition-colors hover:text-navy-900">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROBLEM */}
            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The challenge"
                        title="Your Practice Shouldn't Have to Manage Everything Alone."
                        description="Healthcare organizations carry a growing administrative load. Credentialing, billing, AR, and prior authorization each demand specialized attention — and when internal teams are stretched, work stalls and revenue slips through the gaps."
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {PROBLEMS.map((p, i) => (
                            <ScrollReveal key={p.title} delay={i * 0.06}>
                                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-premium">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                                        <p.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-4 text-base font-semibold text-navy-900">{p.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal delay={0.2}>
                        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-slate-600">
                            Marth Systems works alongside your team to take on the operational load — so your
                            staff can stay focused on patients instead of paperwork.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What we do"
                        title="Operational services built for healthcare organizations."
                        description="Six focused service areas covering the administrative backbone of your practice — each with a dedicated team and a clear workflow."
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((s, i) => (
                            <ServiceCard key={s.title} {...s} delay={(i % 3) * 0.06} />
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW WE WORK */}
            <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
                <div className="absolute inset-0 bg-grid-dark opacity-25" />
                <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="How we work"
                        title="A clear, repeatable operational workflow."
                        description="We don't just take tasks off your plate. We bring structure to how credentialing, billing, and AR work gets done."
                        light
                    />
                    <div className="mt-16">
                        <WorkflowDiagram steps={HOW_WE_WORK} variant="dark" />
                    </div>
                </div>
            </section>

            {/* WHY MARTH SYSTEMS */}
            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Why Marth Systems"
                        title="The qualities that define how we work."
                        description="We focus on the fundamentals that make healthcare operations run cleanly — accuracy, compliance, visibility, and communication."
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {WHY_US.map((w, i) => (
                            <ScrollReveal key={w.title} delay={(i % 3) * 0.06}>
                                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-premium transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-premium-lg">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-teal-300 transition-colors group-hover:bg-teal-500 group-hover:text-navy-950">
                                        <w.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold text-navy-900">{w.title}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{w.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal delay={0.1}>
                        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <BarChart3 className="h-5 w-5 shrink-0 text-teal-600 mt-0.5" />
                            <p className="text-sm leading-relaxed text-slate-600">
                                We focus on consistent, well-documented operational support. We don't promise
                                guaranteed results — we promise a disciplined, communicative approach to the work
                                that keeps your operations moving.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SERVICE DISCOVERY */}
            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <ScrollReveal>
                            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-navy-900">
                                Not Sure Where to Start?
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <p className="mt-5 text-lg leading-relaxed text-slate-600">
                                Healthcare administration rarely fits into a single category. If you're dealing
                                with multiple operational challenges, tell us what's happening and we'll help
                                identify the appropriate starting point.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <Link
                                to="/contact"
                                onClick={() => trackEvent("tell_us_what_you_need_click")}
                                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-base font-semibold text-white shadow-premium-lg transition-all hover:bg-navy-800 hover:scale-[1.02]"
                            >
                                Tell Us What You Need
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}