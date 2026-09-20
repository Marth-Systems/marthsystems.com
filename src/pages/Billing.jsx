import { Link } from "react-router-dom";
import { Receipt, Send, FileWarning, Wallet, MessageSquare, BarChart3, Eye } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageHero from "@/components/ServicePageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
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

const PRINCIPLES = [
    { icon: Receipt, title: "Accurate claim preparation", description: "We focus on getting claims right the first time to reduce avoidable denials." },
    { icon: Send, title: "Timely submission", description: "Claims move through submission promptly to keep the revenue cycle flowing." },
    { icon: FileWarning, title: "Proactive denial handling", description: "Denials are reviewed, categorized, and worked — not left to age." },
    { icon: Eye, title: "Transparent reporting", description: "You see claim status, denial trends, and billing activity in clear reports." },
];

export default function Billing() {
    return (
        <>
            <SEO
                title="Medical Billing Services for Healthcare Organizations"
                description="Marth Systems provides medical billing support — charge capture, claim preparation and submission, denial management, payment posting, payer communication, and billing reporting with workflow visibility."
                path="/billing"
            />
            <ServicePageHero
                eyebrow="Medical Billing"
                title="Billing workflows that keep your revenue cycle moving."
                description="Marth Systems manages the billing cycle from charge capture through payment posting and denial management — with accurate claim preparation, consistent follow-up, and clear reporting so you always know where things stand."
                email="billing@marthsystems.com"
                ctaText="Talk to Our Billing Team"
            />

            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The billing workflow"
                        title="End-to-end billing support."
                        description="Each stage of the billing cycle, handled with attention to detail and clear visibility."
                        align="left"
                    />
                    <div className="mt-10">
                        <FeatureList items={WORKFLOW} columns={2} />
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Our approach"
                        title="How we approach billing."
                        description="We focus on the fundamentals of a healthy revenue cycle — without overpromising."
                    />
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {PRINCIPLES.map((p, i) => (
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
                    <ScrollReveal delay={0.1}>
                        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6">
                            <BarChart3 className="h-5 w-5 shrink-0 text-teal-600 mt-0.5" />
                            <p className="text-sm leading-relaxed text-slate-600">
                                Reimbursement depends on payer contracts, claim accuracy, documentation, and many
                                factors outside any billing team's control. We don't promise guaranteed collections
                                or guaranteed reimbursement — we promise disciplined, transparent billing work.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <p className="mt-6 text-center text-sm text-slate-500">
                            Billing performance can be affected by upstream{" "}
                            <Link to="/provider-enrollment" className="font-semibold text-teal-700 hover:underline">
                                provider enrollment
                            </Link>
                            ,{" "}
                            <Link to="/prior-authorization" className="font-semibold text-teal-700 hover:underline">
                                authorization
                            </Link>
                            , and{" "}
                            <Link to="/ar-management" className="font-semibold text-teal-700 hover:underline">
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
                email="billing@marthsystems.com"
                emailLabel="billing@marthsystems.com"
            />
        </>
    );
}