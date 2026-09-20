import { Link } from "react-router-dom";
import { TrendingUp, Layers, Target, RefreshCw, CheckCircle2, FileText } from "lucide-react";
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
        <>
            <SEO
                title="Accounts Receivable (AR) Management Services"
                description="Marth Systems provides AR management support — aging analysis, insurance AR follow-up, denial and underpayment resolution, payer follow-up, patient balance workflows, and AR reporting for healthcare organizations."
                path="/ar-management"
            />
            <ServicePageHero
                eyebrow="AR Management"
                title="Bring structure to your accounts receivable."
                description="Outstanding AR quietly ages when internal teams are stretched. Marth Systems brings a structured, repeatable workflow to analyze, prioritize, and follow up on your AR — so balances get worked instead of ignored."
                email="billing@marthsystems.com"
                ctaText="Let's Review Your AR Workflow"
            />

            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The AR workflow"
                        title="A repeatable AR workflow."
                        description="Six stages that turn a pile of outstanding balances into organized, tracked work."
                    />
                    <div className="mt-16">
                        <WorkflowDiagram steps={STEPS} />
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What's included"
                        title="What AR management covers."
                        description="The full scope of AR work — from aging analysis through reporting."
                        align="left"
                    />
                    <div className="mt-10">
                        <FeatureList items={SCOPE} columns={2} />
                    </div>
                    <ScrollReveal delay={0.1}>
                        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6">
                            <TrendingUp className="h-5 w-5 shrink-0 text-teal-600 mt-0.5" />
                            <p className="text-sm leading-relaxed text-slate-600">
                                AR resolution depends on claim accuracy, payer behavior, and documentation. We
                                don't guarantee specific recovery amounts — we provide consistent, well-tracked
                                follow-up that gives your AR the attention it needs.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <p className="mt-6 text-center text-sm text-slate-500">
                            Outstanding receivables may require coordination across{" "}
                            <Link to="/billing" className="font-semibold text-teal-700 hover:underline">
                                billing
                            </Link>
                            , payer communication, and{" "}
                            <Link to="/prior-authorization" className="font-semibold text-teal-700 hover:underline">
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
                email="billing@marthsystems.com"
                emailLabel="billing@marthsystems.com"
            />
        </>
    );
}