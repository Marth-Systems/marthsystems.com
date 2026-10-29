import { Link } from "react-router-dom";
import { TrendingUp, Clock, AlertCircle, ShieldAlert, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageHero from "@/components/ServicePageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const STEPS = [
    { title: "Analyze", description: "Review AR aging to understand the composition and age of outstanding balances." },
    { title: "Categorize", description: "Group balances by payer, age, denial status, and action required." },
    { title: "Prioritize", description: "Focus effort on the balances most likely to resolve and most material to your practice." },
    { title: "Follow Up", description: "Structured follow-up with payers and patients on outstanding balances." },
    { title: "Resolve", description: "Work denials, underpayments, and disputes through to resolution." },
    { title: "Report", description: "Clear AR reporting on aging, resolution progress, and remaining balances." },
];

const BUCKETS = [
    {
        range: "0–30 Days",
        tag: "Clean Transit",
        icon: CheckCircle2,
        description: "Confirm clearinghouse acceptance, verify ERA schedules, and intercept early front-end edits immediately.",
    },
    {
        range: "31–60 Days",
        tag: "Active Follow-Up",
        icon: Clock,
        description: "Audit unpaid claims, initiate payer portal status checks, and resolve pending documentation requests.",
    },
    {
        range: "61–90 Days",
        tag: "Escalation & Appeals",
        icon: AlertCircle,
        description: "Execute CARC/RARC denial root-cause analysis, submit clinical appeals, and escalate underpaid claims.",
    },
    {
        range: "90–120+ Days",
        tag: "Intensive Recovery",
        icon: ShieldAlert,
        description: "Prioritize high-value aged balances before timely filing limits expire, with direct payer representative outreach.",
    },
];

const SCOPE = [
    { title: "Aging Analysis", description: "Structured analysis of AR by aging bucket to identify where attention is needed." },
    { title: "Insurance AR", description: "Follow-up on outstanding insurance balances across commercial, Medicare, and Medicaid payers." },
    { title: "Denial & Underpayment Follow-up", description: "Targeted work on denied and underpaid claims to recover appropriate reimbursement." },
    { title: "Payer Follow-up", description: "Direct follow-up with payers to confirm claim status and resolve disputes." },
    { title: "Patient Balance Workflows", description: "Structured handling of patient balances with clear, respectful communication." },
    { title: "AR Reporting", description: "Regular reporting on AR composition, aging trends, and resolution progress." },
];

export default function ARManagement() {
    return (
        <div className="bg-[#040A1C] text-slate-100 min-h-screen overflow-x-hidden">
            <SEO
                title="Accounts Receivable (AR) Management Services"
                description="Marth Systems provides AR management support — aging analysis, insurance AR follow-up, denial and underpayment resolution, payer follow-up, patient balance workflows, and AR reporting for healthcare organizations."
                path="/ar-management"
            />
            <ServicePageHero
                eyebrow="AR Management & Recovery"
                title="Bring structure to your accounts receivable."
                description="Outstanding AR quietly ages when internal teams are stretched. Marth Systems brings a structured, repeatable workflow to analyze, prioritize, and follow up on your AR — so balances get worked instead of ignored."
                email="contact@marthsystems.com"
                ctaText="Let's Review Your AR Workflow"
                highlights={[
                    "30/60/90/120+ Day Aging Audits",
                    "CARC/RARC Denial Appeals",
                    "Underpayment & Payer Escalation",
                ]}
                metrics={[
                    {
                        label: "Aging Segmentation",
                        sub: "Structured bucket triage & prioritization",
                        value: "30–120+d",
                    },
                    {
                        label: "Denial Resolution",
                        sub: "Evidence-backed CARC/RARC appeals",
                        value: "Targeted",
                    },
                    {
                        label: "Accountability",
                        sub: "Every claim touch & payer call logged",
                        value: "100%",
                    },
                ]}
            />

            {/* AGING BUCKET TRIAGE */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Aging Bucket Strategy"
                        title="Disciplined Triage Across Every Aging Window."
                        description="We segment your accounts receivable by age, payer behavior, and dollar value so no recoverable claim slips past timely filing deadlines."
                        light={true}
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {BUCKETS.map((b, i) => (
                            <ScrollReveal key={b.range} delay={i * 0.06}>
                                <div className="group h-full rounded-[28px] border border-white/10 bg-slate-900/75 p-6 sm:p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/60 hover:bg-slate-900/95">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-extrabold font-mono uppercase tracking-wider text-teal-300 bg-teal-500/15 border border-teal-500/30 px-3 py-1 rounded-lg">
                                            {b.range}
                                        </span>
                                        <b.icon className="h-5 w-5 text-teal-400" />
                                    </div>
                                    <h3 className="mt-5 text-lg font-bold text-white">{b.tag}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{b.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE AR WORKFLOW */}
            <section className="relative overflow-hidden bg-[#040A1C] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute right-1/4 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The AR workflow"
                        title="A repeatable AR workflow."
                        description="Six stages that turn a pile of outstanding balances into organized, tracked work."
                        light={true}
                    />
                    <div className="mt-16">
                        <WorkflowDiagram steps={STEPS} variant="dark" />
                    </div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28">
                <div className="pointer-events-none absolute left-10 bottom-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What's included"
                        title="What AR management covers."
                        description="The full scope of AR work — from aging analysis through reporting."
                        align="left"
                        light={true}
                    />
                    <div className="mt-10">
                        <FeatureList items={SCOPE} columns={2} light={true} />
                    </div>
                    <ScrollReveal delay={0.1}>
                        <div className="mt-12 flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/75 p-6 sm:p-7 shadow-xl backdrop-blur-xl">
                            <TrendingUp className="h-5 w-5 shrink-0 text-teal-400 mt-0.5" />
                            <p className="text-sm leading-relaxed text-slate-300">
                                AR resolution depends on claim accuracy, payer behavior, and documentation. We
                                don't guarantee specific recovery amounts — we provide consistent, well-tracked
                                follow-up that gives your AR the attention it needs.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <p className="mt-8 text-center text-sm text-slate-400">
                            Outstanding receivables may require coordination across{" "}
                            <Link to="/billing" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                billing
                            </Link>
                            , payer communication, and{" "}
                            <Link to="/prior-authorization" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                authorization
                            </Link>{" "}
                            workflows.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <CTASection
                title="Let's Review Your AR Workflow."
                description="See how Marth Systems can bring structure and follow-up to your outstanding accounts receivable."
                buttonText="Let's Review Your AR Workflow"
                email="contact@marthsystems.com"
                emailLabel="contact@marthsystems.com"
            />
        </div>
    );
}