import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ShieldCheck,
    FileCheck,
    Receipt,
    TrendingUp,
    ClipboardCheck,
    Target,
    Layers,
    Play,
    Activity,
    BarChart3,
    Eye,
    Sparkles,
    CheckCircle2,
    Clock,
    Globe,
    Zap,
    AlertTriangle,
    Check,
} from "lucide-react";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import CTASection from "@/components/CTASection";
import HeroVisualization from "@/components/HeroVisualization";
import AnimatedCounter from "@/components/AnimatedCounter";
import { trackEvent } from "@/lib/analytics";

const METRICS = [
    {
        value: 98.5,
        suffix: "%",
        decimals: 1,
        title: "Clean Claim Rate",
        description: "First-pass submission accuracy across clearinghouses",
        icon: Zap,
    },
    {
        prefix: "< ",
        value: 21,
        suffix: " Days",
        decimals: 0,
        title: "Credentialing TAT",
        description: "Average turnaround from dossier to payer submission",
        icon: Clock,
    },
    {
        value: 100,
        suffix: "%",
        decimals: 0,
        title: "HIPAA Compliant",
        description: "Strict regulatory protocols and privacy standards",
        icon: ShieldCheck,
    },
    {
        value: 24,
        suffix: "/7",
        decimals: 0,
        title: "Global Operations",
        description: "Worldwide remote support across time zones",
        icon: Globe,
    },
];

const PROBLEMS = [
    {
        num: "01",
        icon: FileCheck,
        title: "Credentialing Backlogs",
        description:
            "Incomplete dossiers and delayed payer reviews stall providers from seeing patients, costing practices tens of thousands in unbillable time.",
        tag: "Provider Bottleneck",
        impact: "$15K–$40K/mo unbillable per provider",
        solution: "Primary source verified within <21 days",
    },
    {
        num: "02",
        icon: Receipt,
        title: "Claim Rejections & Denials",
        description:
            "Front-end coding discrepancies, expired authorizations, and eligibility oversights consume valuable staff hours reworking contested claims.",
        tag: "Lost Cash Flow",
        impact: "12%–18% initial denial industry average",
        solution: "98.5% first-pass clean claim submission",
    },
    {
        num: "03",
        icon: TrendingUp,
        title: "Aging AR (90+ Days)",
        description:
            "Unpaid insurance balances silently pile up while internal office staff remain tied up with day-to-day patient check-ins and billing inquiries.",
        tag: "Revenue Leakage",
        impact: "Over 35% of aged claims written off",
        solution: "Structured CARC/RARC dispute recovery",
    },
    {
        num: "04",
        icon: ClipboardCheck,
        title: "Authorization Delays",
        description:
            "Manual payer portals and sluggish approval turnaround create frustration for clinical staff and disrupt vital patient care schedules.",
        tag: "Care Disruption",
        impact: "3–7 days average treatment stall",
        solution: "24–48h coordinated submission & tracking",
    },
];

const SERVICE_CATEGORIES = [
    "All Solutions",
    "Credentialing & Enrollment",
    "Billing & Revenue",
    "Clinical & Operations",
];

const SERVICES = [
    {
        icon: "credentialing",
        title: "Credentialing",
        category: "Credentialing & Enrollment",
        badge: "Fast Turnaround",
        description:
            "Primary source verification, medical license attestations, CAQH management, and proactive payer re-credentialing.",
        highlights: [
            "CAQH ProView Profile Management",
            "Medical Board PSV Verification",
            "Expiration Tracking (DEA/License)",
        ],
        path: "/credentialing",
    },
    {
        icon: "credentialing",
        title: "Provider Enrollment",
        category: "Credentialing & Enrollment",
        badge: "Multi-State",
        description:
            "Medicare/Medicaid and commercial enrollment application preparation, submission support, payer follow-up, and status tracking.",
        highlights: [
            "PECOS & NPPES Maintenance",
            "Payer Application Tracking",
            "Group & Facility Rosters",
        ],
        path: "/provider-enrollment",
    },
    {
        icon: "billing",
        title: "Billing & Revenue Cycle",
        category: "Billing & Revenue",
        badge: "98.5% Clean Claims",
        description:
            "Charge capture, clearinghouse claim scrubbing, denial mitigation, electronic remittance advice posting, and financial transparency.",
        highlights: [
            "Clearinghouse Edit Scrubbing",
            "ERA/835 & Manual EOB Posting",
            "Modifier & Fee Schedule Review",
        ],
        path: "/billing",
    },
    {
        icon: "ar",
        title: "AR Management",
        category: "Billing & Revenue",
        badge: "Denial Recovery",
        description:
            "Detailed aging analysis, CARC/RARC denial resolution, underpayment audits, and structured recovery of aged insurance balances.",
        highlights: [
            "60/90/120+ Day Aging Audits",
            "Evidence-Based Appeal Letters",
            "Payer Rep Escalation Calls",
        ],
        path: "/ar-management",
    },
    {
        icon: "auth",
        title: "Prior Authorization",
        category: "Clinical & Operations",
        badge: "24–48h TAT",
        description:
            "Clinical requirement checks, packet coordination, electronic submission, payer escalation, and fast approval tracking.",
        highlights: [
            "Payer Rule Determination",
            "Clinical Packet Compilation",
            "Expedited Urgent Approvals",
        ],
        path: "/prior-authorization",
    },
    {
        icon: "support",
        title: "Patient Support",
        category: "Clinical & Operations",
        badge: "Compassionate Care",
        description:
            "Compassionate front-line administrative inquiry support, patient billing explanations, and seamless practice coordination.",
        highlights: [
            "Patient Statement Explanations",
            "Dispute & Payment Plan Intake",
            "Dedicated Practice Pods",
        ],
        path: "/patient-support",
    },
    {
        icon: "contracting",
        title: "Provider Contracting",
        category: "Credentialing & Enrollment",
        badge: "Strategic Expansion",
        description:
            "Contract coordination and rate schedule analysis to help your practice build advantageous payer relationships.",
        highlights: [
            "Fee Schedule Review",
            "Payer Contract Tracking",
            "Language & Term Assessment",
        ],
        path: "/provider-contracting",
    },
];

const HOW_WE_WORK = [
    {
        title: "Assess",
        description:
            "We review your current credentialing, billing, and AR workflows to pinpoint where administrative friction and revenue leakage occur.",
    },
    {
        title: "Organize",
        description:
            "We structure documentation, provider rosters, calendars, and responsibilities into standardized repeatable operating procedures.",
    },
    {
        title: "Execute",
        description:
            "Our dedicated specialists handle primary verifications, clean claim scrubbing, payer appeals, and authorizations with disciplined precision.",
    },
    {
        title: "Track",
        description:
            "Real-time dashboards track application turnaround, clearinghouse status, and aging AR so nothing falls through the cracks.",
    },
    {
        title: "Improve",
        description:
            "We surface root-cause denial patterns and refine administrative workflows to ensure long-term operational efficiency.",
    },
];

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState("All Solutions");

    const filteredServices =
        selectedCategory === "All Solutions"
            ? SERVICES
            : SERVICES.filter((s) => s.category === selectedCategory);

    return (
        <div className="bg-[#040A1C] text-slate-100 min-h-screen overflow-x-hidden selection:bg-teal-500/30">
            <SEO
                title="Marth Systems | Healthcare Operations, Simplified."
                description="Marth Systems delivers high-precision healthcare administration across provider credentialing, billing, AR management, prior authorization, and patient support worldwide."
                path="/"
            />

            {/* HERO: SAGILITY-INSPIRED DEEP COSMIC LIVING CANVAS */}
            <section className="relative overflow-hidden bg-[#040A1C] pt-32 pb-32 sm:pt-40 sm:pb-40 text-white">
                {/* Ambient Glowing Mesh Lighting (Sagility dual-gradient drift) */}
                <div className="pointer-events-none absolute -left-40 top-10 h-[550px] w-[550px] rounded-full bg-cyan-500/20 blur-[130px] animate-ambient-slow" />
                <div className="pointer-events-none absolute -right-32 top-32 h-[500px] w-[500px] rounded-full bg-teal-400/20 blur-[140px] animate-ambient-reverse" />
                <div className="pointer-events-none absolute left-1/3 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[120px]" />

                {/* Computational Grid & Topographic Contour Texture */}
                <div className="absolute inset-0 bg-grid-dark opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
                        {/* Left Column: Staggered Headline & Narrative */}
                        <div className="lg:col-span-7">
                            <ScrollReveal>
                                <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 backdrop-blur-md">
                                    <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse-soft" />
                                    Accurate · Compliant · Connected
                                </span>
                            </ScrollReveal>

                            <ScrollReveal delay={0.06}>
                                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight text-white">
                                    Healthcare Operations,{" "}
                                    <span className="block bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
                                        Powerfully Simplified.
                                    </span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal delay={0.12}>
                                <p className="mt-6 text-lg sm:text-xl font-medium leading-relaxed text-slate-200">
                                    Provider Credentialing · Medical Billing · AR Recovery · Prior Authorization · Patient Support
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.18}>
                                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
                                    We deliver structured, high-accuracy administrative operations to healthcare organizations worldwide.
                                    By eliminating backlogs and reducing denials, we give your team the freedom to focus on clinical excellence.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.24}>
                                <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                    <Link
                                        to="/contact"
                                        onClick={() => trackEvent("primary_cta_click", { location: "hero" })}
                                        className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-8 py-4 text-base font-bold text-navy-950 shadow-premium transition-all hover:brightness-110 hover:scale-[1.02]"
                                    >
                                        Request a Consultation
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <a
                                        href="#services"
                                        onClick={() => trackEvent("secondary_cta_click", { location: "hero" })}
                                        className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/40"
                                    >
                                        <Play className="h-4 w-4 fill-current text-teal-400" />
                                        Explore Our Services
                                    </a>
                                </div>
                            </ScrollReveal>

                            {/* Trust badges row */}
                            <ScrollReveal delay={0.3}>
                                <div className="mt-10 flex flex-wrap items-center gap-6 pt-8 border-t border-white/10 text-xs text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                                        <span>No Setup Onboarding Friction</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                                        <span>Dedicated Operations Pods</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                                        <span>Full HIPAA Compliance</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Column: Interactive Living Command Console */}
                        <div className="lg:col-span-5">
                            <ScrollReveal delay={0.2}>
                                <HeroVisualization />
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERLAPPING KPI METRICS RIBBON */}
            <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 -mt-14 sm:-mt-20">
                <div className="rounded-[32px] sm:rounded-[40px] border border-white/15 bg-slate-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                        {METRICS.map((m, idx) => (
                            <div key={m.title} className={`${idx > 0 ? "pt-5 sm:pt-0 sm:pl-8" : ""} flex flex-col justify-between`}>
                                <div className="flex items-center gap-2 text-teal-400">
                                    <m.icon className="h-4 w-4" />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                                        {m.title}
                                    </span>
                                </div>
                                <div className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                                    <AnimatedCounter
                                        value={m.value}
                                        prefix={m.prefix || ""}
                                        suffix={m.suffix || ""}
                                        decimals={m.decimals}
                                        duration={2.2}
                                    />
                                </div>
                                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                                    {m.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 1: THE OPERATIONAL REALITY (DEEP COSMIC SLATE SHEET - EYE-FRIENDLY) */}
            <section className="relative z-10 overflow-hidden rounded-t-[44px] sm:rounded-t-[56px] -mt-10 sm:-mt-14 bg-[#060E28] pt-28 pb-24 sm:pt-36 sm:pb-32 border-t border-white/10 text-white">
                {/* Ambient Subtle Accent Glow */}
                <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The Operational Reality"
                        title="Your Practice Shouldn't Have to Fight Administrative Chaos Alone."
                        description="Credentialing backlogs, clearinghouse rejections, aging unworked claims, and prior authorization delays consume hundreds of staff hours. When operations stall, revenue slips away."
                        light={true}
                    />

                    {/* Bento Grid with Quantitative Impact & Outcome Badges */}
                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {PROBLEMS.map((p, i) => (
                            <ScrollReveal key={p.title} delay={i * 0.07}>
                                <div className="group h-full flex flex-col justify-between rounded-[32px] border border-white/10 bg-slate-900/75 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/80 hover:bg-slate-900/95 hover:shadow-2xl hover:shadow-teal-500/10">
                                    <div>
                                        {/* Header Row: Number + Tag */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-black font-mono tracking-widest text-teal-300 bg-teal-500/15 px-2.5 py-1 rounded-lg border border-teal-500/30">
                                                {p.num}
                                            </span>
                                            <span className="rounded-full bg-red-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-300 border border-red-500/30">
                                                {p.tag}
                                            </span>
                                        </div>

                                        {/* Icon & Title */}
                                        <div className="mt-5 flex items-center gap-3">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-800 text-teal-300 border border-white/10 transition-colors group-hover:bg-gradient-to-tr group-hover:from-teal-500 group-hover:to-cyan-400 group-hover:text-navy-950">
                                                <p.icon className="h-5 w-5" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white leading-snug">
                                                {p.title}
                                            </h3>
                                        </div>

                                        <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                            {p.description}
                                        </p>
                                    </div>

                                    {/* Bottom Callout: Risk vs Resolution */}
                                    <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                                        <div className="flex items-start gap-1.5 text-xs text-red-300 bg-red-500/10 rounded-xl p-2.5 border border-red-500/20">
                                            <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5 text-red-400" />
                                            <span className="font-medium">{p.impact}</span>
                                        </div>
                                        <div className="flex items-start gap-1.5 text-xs text-teal-300 bg-teal-500/15 rounded-xl p-2.5 border border-teal-500/30">
                                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-teal-400" />
                                            <span className="font-semibold">{p.solution}</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Executive Reassurance Banner */}
                    <ScrollReveal delay={0.2}>
                        <div className="mt-14 max-w-4xl mx-auto rounded-[32px] border border-white/10 bg-slate-900/60 p-6 sm:p-8 text-center backdrop-blur-xl shadow-xl">
                            <h4 className="text-base sm:text-lg font-bold text-white">
                                Built to integrate with your existing EHR, clearinghouse, and practice software.
                            </h4>
                            <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
                                We absorb the repetitive, high-stakes operational burdens without software migration friction, so your staff can stay focused on patients instead of payer hold music.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 2: SPECIALIZED OPERATIONAL SERVICES (DARK COSMIC BACKGROUND & CARDS) */}
            <section id="services" className="relative overflow-hidden bg-[#040A1C] py-24 sm:py-32 text-white border-t border-white/5 scroll-mt-20">
                {/* Ambient Soft Mesh Glow */}
                <div className="pointer-events-none absolute right-1/4 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
                <div className="pointer-events-none absolute left-10 bottom-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Specialized Services"
                        title="Specialized Operational Services Built for Healthcare Organizations."
                        description="From primary source provider verification to advanced denial overturning, our specialized pods manage your administrative backbone with first-pass accuracy."
                        light={true}
                    />

                    {/* Interactive Category Filter Pills */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
                        {SERVICE_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setSelectedCategory(cat)}
                                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                                    selectedCategory === cat
                                        ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-navy-950 shadow-lg shadow-teal-500/20 scale-105"
                                        : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Service Cards Grid (Now Dark Glassmorphic & Eye-Friendly) */}
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredServices.map((s, i) => (
                            <ServiceCard key={s.title} {...s} delay={(i % 3) * 0.06} />
                        ))}
                    </div>
                </div>
            </section>

            {/* OVERLAPPING SHEET: HOW WE WORK (METHODOLOGY) */}
            <section className="relative overflow-hidden rounded-[40px] sm:rounded-[56px] bg-[#07112C] text-white py-24 sm:py-32 my-10 mx-3 sm:mx-6 lg:mx-8 border border-white/10 shadow-2xl">
                {/* Ambient Glows */}
                <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-teal-500/15 blur-[120px]" />
                <div className="pointer-events-none absolute left-0 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-25" />

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Our Methodology"
                        title="A Disciplined, Repeatable 5-Stage Operating Model."
                        description="We don't just clear tasks. We introduce standardized systems, metrics, and workflows so operations move with predictability and zero chaos."
                        light={true}
                    />
                    <div className="mt-16">
                        <WorkflowDiagram steps={HOW_WE_WORK} variant="dark" />
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE OPERATING PRINCIPLES (DARK BENTO SHOWCASE - HARMONIOUS EYE-FRIENDLY) */}
            <section className="relative overflow-hidden bg-[#060E28] py-24 sm:py-32 text-white border-t border-white/5">
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute left-10 top-1/3 h-96 w-96 rounded-full bg-teal-500/10 blur-[130px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Why Marth Systems"
                        title="The Operating Principles That Define Everything We Touch."
                        description="Healthcare administration requires unyielding accuracy, strict regulatory compliance, and transparent communication across all payer and practice interfaces."
                        light={true}
                    />

                    {/* Bento Showcase Grid */}
                    <div className="mt-16 grid gap-6 lg:grid-cols-12">
                        {/* Featured Hero Bento Card: 01 / Accuracy */}
                        <div className="lg:col-span-7 rounded-[36px] border border-teal-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-8 sm:p-10 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-black font-mono tracking-widest text-teal-300 bg-teal-500/15 border border-teal-500/30 px-3 py-1 rounded-full">
                                        PRINCIPLE 01
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs font-bold text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
                                        <Zap className="h-3.5 w-3.5 text-teal-400" />
                                        98.5% First-Pass Target
                                    </span>
                                </div>
                                <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                                    First-Pass Accuracy is Our Foundational Metric
                                </h3>
                                <p className="mt-4 text-base leading-relaxed text-slate-300">
                                    In healthcare administration, precision is quality. A single transposed digit in an NPI or missing diagnosis code causes clearinghouse rejections, payer delays, and manual rework. We enforce multi-point validation to ensure first-pass perfection.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-300">
                                <div>
                                    <span className="block text-xl font-extrabold text-teal-300">0%</span>
                                    <span className="text-slate-400 mt-0.5 block">Estimated Guesswork</span>
                                </div>
                                <div>
                                    <span className="block text-xl font-extrabold text-teal-300">100%</span>
                                    <span className="text-slate-400 mt-0.5 block">Primary Verification</span>
                                </div>
                                <div>
                                    <span className="block text-xl font-extrabold text-teal-300">&lt;24h</span>
                                    <span className="text-slate-400 mt-0.5 block">Correction TAT</span>
                                </div>
                            </div>
                        </div>

                        {/* Featured Hero Bento Card: 02 / Compliance */}
                        <div className="lg:col-span-5 rounded-[36px] border border-white/15 bg-gradient-to-br from-slate-950 via-slate-900 to-navy-950 p-8 sm:p-10 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
                            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-500/20 blur-3xl" />
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-black font-mono tracking-widest text-teal-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                                        PRINCIPLE 02
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs font-bold text-teal-300 bg-teal-500/15 px-3 py-1 rounded-full border border-teal-500/30">
                                        <ShieldCheck className="h-3.5 w-3.5" />
                                        HIPAA Certified
                                    </span>
                                </div>
                                <h3 className="mt-6 text-2xl font-bold text-white leading-tight">
                                    Compliance-First Administrative Architecture
                                </h3>
                                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                                    Patient privacy, regulatory integrity, and payer compliance are non-negotiable. Every dossier review, remittance posting, and prior authorization conforms strictly to federal and state standards.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                                <span>NCQA Compliant Review</span>
                                <span>OIG & SAM Verified</span>
                            </div>
                        </div>

                        {/* Bento Card 03: Connected Operations */}
                        <div className="lg:col-span-4 rounded-[32px] border border-white/10 bg-slate-900/75 p-7 sm:p-8 shadow-xl backdrop-blur-xl flex flex-col justify-between hover:border-teal-400/50 transition-all">
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black font-mono tracking-widest text-teal-300 bg-teal-500/15 border border-teal-500/30 px-2.5 py-1 rounded-lg">
                                        03
                                    </span>
                                    <Layers className="h-5 w-5 text-teal-400" />
                                </div>
                                <h4 className="mt-5 text-lg font-bold text-white">
                                    Connected Operations
                                </h4>
                                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                                    We eliminate administrative silos. When credentialing, billing, and clinical support share unified rosters and calendars, denials plummet.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-teal-300 flex items-center gap-1.5">
                                <Check className="h-3.5 w-3.5 text-teal-400" />
                                <span>Unified Roster Synchronization</span>
                            </div>
                        </div>

                        {/* Bento Card 04: Transparent Visibility */}
                        <div className="lg:col-span-4 rounded-[32px] border border-white/10 bg-slate-900/75 p-7 sm:p-8 shadow-xl backdrop-blur-xl flex flex-col justify-between hover:border-teal-400/50 transition-all">
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black font-mono tracking-widest text-teal-300 bg-teal-500/15 border border-teal-500/30 px-2.5 py-1 rounded-lg">
                                        04
                                    </span>
                                    <Eye className="h-5 w-5 text-teal-400" />
                                </div>
                                <h4 className="mt-5 text-lg font-bold text-white">
                                    Transparent Visibility
                                </h4>
                                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                                    No opaque black boxes. Maintain daily insight into every application milestone, pending clearinghouse claim, and aging AR bucket.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-teal-300 flex items-center gap-1.5">
                                <Check className="h-3.5 w-3.5 text-teal-400" />
                                <span>Real-Time Status Tracking</span>
                            </div>
                        </div>

                        {/* Bento Card 05: Repeatable Scale */}
                        <div className="lg:col-span-4 rounded-[32px] border border-white/10 bg-slate-900/75 p-7 sm:p-8 shadow-xl backdrop-blur-xl flex flex-col justify-between hover:border-teal-400/50 transition-all">
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black font-mono tracking-widest text-teal-300 bg-teal-500/15 border border-teal-500/30 px-2.5 py-1 rounded-lg">
                                        05
                                    </span>
                                    <Activity className="h-5 w-5 text-teal-400" />
                                </div>
                                <h4 className="mt-5 text-lg font-bold text-white">
                                    Repeatable Scale
                                </h4>
                                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                                    Standardized SOPs and dedicated pods ensure your operations scale seamlessly whether you have 3 providers or 300.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-teal-300 flex items-center gap-1.5">
                                <Check className="h-3.5 w-3.5 text-teal-400" />
                                <span>Zero Chaos Growth</span>
                            </div>
                        </div>
                    </div>

                    {/* Partnership Transparency Card */}
                    <ScrollReveal delay={0.1}>
                        <div className="mt-14 flex items-start gap-4 rounded-[32px] border border-white/10 bg-slate-900/60 p-7 sm:p-9 shadow-xl backdrop-blur-xl">
                            <BarChart3 className="h-6 w-6 shrink-0 text-teal-400 mt-1" />
                            <div>
                                <h4 className="text-base font-bold text-white">
                                    Accountable Partnership Without Exaggerated Claims
                                </h4>
                                <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                                    We do not make hollow promises. We deliver disciplined, well-documented operational execution, direct daily communication, and measurable first-pass accuracy that keeps your practice revenue cycle moving smoothly.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SERVICE DISCOVERY CALLOUT (DARK HARMONIOUS CONTAINER) */}
            <section className="bg-[#040A1C] py-20 sm:py-28 border-t border-white/5 text-white">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl rounded-[40px] border border-white/15 bg-gradient-to-br from-slate-900/90 via-[#07112C] to-slate-950 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-2xl">
                        <ScrollReveal>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 px-3.5 py-1 text-xs font-semibold text-teal-300">
                                <Sparkles className="h-3.5 w-3.5" />
                                Tailored Operational Roadmaps
                            </span>
                            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-white">
                                Not Sure Which Service You Need First?
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
                                Healthcare operations rarely fit into a single category. Tell us about your provider count, current clearinghouse friction, or backlog challenges, and our team will craft a clear operational recommendation.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/contact"
                                    onClick={() => trackEvent("tell_us_what_you_need_click")}
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-8 py-3.5 text-base font-bold text-navy-950 shadow-premium-lg transition-all hover:brightness-110 hover:scale-[1.02]"
                                >
                                    Tell Us What You Need
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-medium text-slate-200 hover:bg-white/10 transition-colors"
                                >
                                    Learn About Our Team
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}