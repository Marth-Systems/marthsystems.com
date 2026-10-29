import { Link } from "react-router-dom";
import { Receipt, Send, FileWarning, BarChart3, Eye } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageHero from "@/components/ServicePageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const WORKFLOW = [
    { title: "Charge Capture", description: "Structured charge capture workflows to help ensure services are captured completely and accurately." },
    { title: "Claim Preparation & Submission", description: "Accurate claim preparation and timely submission to the appropriate payer channels." },
    { title: "Claim Follow-up", description: "Consistent follow-up on submitted claims to confirm receipt and prompt processing." },
    { title: "Denial Management", description: "Structured review and rework of denied claims to address root causes and resubmit where appropriate." },
    { title: "Payment Posting", description: "Posting of payments and reconciliation against expected reimbursement." },
    { title: "Payer Communication", description: "Managed communication with payers to resolve claim questions and disputes." },
    { title: "Billing Reporting", description: "Clear reporting on claim status, denials, and billing activity." },
    { title: "Workflow Visibility", description: "Visibility into where claims stand so your team always knows the state of the billing cycle." },
];

const STEPS = [
    { title: "Capture", description: "Verify encounter documentation, CPT/ICD-10 coding, modifiers, and charge completeness." },
    { title: "Scrub", description: "Run multi-point clearinghouse edits and payer-specific rule checks before submission." },
    { title: "Submit", description: "Transmit clean electronic claims promptly and confirm clearinghouse acceptance." },
    { title: "Post", description: "Post ERA/835 and manual EOB remittances accurately against expected fee schedules." },
    { title: "Resolve", description: "Immediately categorize, rework, and appeal rejections or denials with full visibility." },
];

const PRINCIPLES = [
    { icon: Receipt, title: "Accurate claim preparation", description: "We focus on getting claims right the first time to reduce avoidable denials." },
    { icon: Send, title: "Timely submission", description: "Claims move through submission promptly to keep the revenue cycle flowing." },
    { icon: FileWarning, title: "Proactive denial handling", description: "Denials are reviewed, categorized, and worked — not left to age." },
    { icon: Eye, title: "Transparent reporting", description: "You see claim status, denial trends, and billing activity in clear reports." },
];

export default function Billing() {
    return (
        <div className="bg-[#040A1C] text-slate-100 min-h-screen overflow-x-hidden">
            <SEO
                title="Medical Billing Services for Healthcare Organizations"
                description="Marth Systems provides medical billing support — charge capture, claim preparation and submission, denial management, payment posting, payer communication, and billing reporting with workflow visibility."
                path="/billing"
            />
            <ServicePageHero
                eyebrow="Medical Billing & Revenue Cycle"
                title="Billing workflows that keep your revenue cycle moving."
                description="Marth Systems manages the billing cycle from charge capture through payment posting and denial management — with accurate claim preparation, consistent follow-up, and clear reporting so you always know where things stand."
                email="contact@marthsystems.com"
                ctaText="Talk to Our Billing Team"
                highlights={[
                    "Clearinghouse Claim Scrubbing",
                    "ERA/835 & EOB Reconciliation",
                    "Proactive Denial Rework",
                ]}
                metrics={[
                    {
                        label: "First-Pass Clean Claims",
                        sub: "Multi-point scrubbing before submission",
                        value: "98.5%",
                    },
                    {
                        label: "Claim Submission TAT",
                        sub: "From finalized charge to clearinghouse",
                        value: "< 24h",
                    },
                    {
                        label: "Payment Reconciliation",
                        sub: "ERA/835 & manual EOB posting accuracy",
                        value: "100%",
                    },
                ]}
            />

            {/* END-TO-END BILLING SUPPORT */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The billing workflow"
                        title="End-to-end billing support."
                        description="Each stage of the billing cycle, handled with attention to detail and clear visibility."
                        align="left"
                        light={true}
                    />
                    <div className="mt-10">
                        <FeatureList items={WORKFLOW} columns={2} light={true} />
                    </div>
                </div>
            </section>

            {/* 5-STAGE BILLING PIPELINE */}
            <section className="relative overflow-hidden bg-[#040A1C] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute right-1/4 top-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Execution Pipeline"
                        title="A Disciplined 5-Stage Claim Lifecycle."
                        description="Every claim follows a standardized verification and tracking path so revenue never stalls silently."
                        light={true}
                    />
                    <div className="mt-16">
                        <WorkflowDiagram steps={STEPS} variant="dark" />
                    </div>
                </div>
            </section>

            {/* OUR APPROACH */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28">
                <div className="pointer-events-none absolute left-10 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Our approach"
                        title="How we approach billing."
                        description="We focus on the fundamentals of a healthy revenue cycle — without overpromising."
                        light={true}
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {PRINCIPLES.map((p, i) => (
                            <ScrollReveal key={p.title} delay={i * 0.06}>
                                <div className="group h-full rounded-[28px] border border-white/10 bg-slate-900/75 p-6 sm:p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/60 hover:bg-slate-900/95">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300 border border-teal-500/30 transition-colors group-hover:bg-gradient-to-tr group-hover:from-teal-500 group-hover:to-cyan-400 group-hover:text-navy-950">
                                        <p.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-5 text-base font-bold text-white">{p.title}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{p.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal delay={0.1}>
                        <div className="mt-12 flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/75 p-6 sm:p-7 shadow-xl backdrop-blur-xl">
                            <BarChart3 className="h-5 w-5 shrink-0 text-teal-400 mt-0.5" />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Reimbursement depends on payer contracts, claim accuracy, documentation, and many
                                factors outside any billing team's control. We don't promise guaranteed collections
                                or guaranteed reimbursement — we promise disciplined, transparent billing work.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <p className="mt-8 text-center text-sm text-slate-400">
                            Billing performance can be affected by upstream{" "}
                            <Link to="/provider-enrollment" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                provider enrollment
                            </Link>
                            ,{" "}
                            <Link to="/prior-authorization" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                authorization
                            </Link>
                            , and{" "}
                            <Link to="/ar-management" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                AR management
                            </Link>{" "}
                            workflows.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <CTASection
                title="Talk to Our Billing Team."
                description="Let's discuss how Marth Systems can support your billing workflow and revenue cycle."
                buttonText="Talk to Our Billing Team"
                email="contact@marthsystems.com"
                emailLabel="contact@marthsystems.com"
            />
        </div>
    );
}