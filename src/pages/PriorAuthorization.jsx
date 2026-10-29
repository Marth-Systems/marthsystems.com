import { Link } from "react-router-dom";
import { ClipboardCheck, FileText, Send, Phone, Activity, FileCheck, RefreshCw, Info } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageHero from "@/components/ServicePageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const STEPS = [
    { title: "Order / Service", description: "A service is ordered that may require prior authorization." },
    { title: "Coverage Check", description: "We check the patient's coverage and plan details." },
    { title: "Auth Requirement", description: "We determine whether authorization is required for the service." },
    { title: "Documentation", description: "We coordinate the clinical and administrative documentation needed." },
    { title: "Submission", description: "We submit the authorization request to the payer." },
    { title: "Payer Review", description: "The payer reviews the request and may request additional information." },
    { title: "Decision", description: "The payer returns an approval, denial, or modification." },
    { title: "Tracking", description: "We track authorization status, including expiration and renewal where applicable." },
];

const SCOPE = [
    { title: "Authorization Requirement Checks", description: "Determining whether a planned service requires prior authorization under the patient's plan." },
    { title: "Documentation Coordination", description: "Coordinating the clinical and administrative documentation needed to support the request." },
    { title: "Authorization Submissions", description: "Preparing and submitting authorization requests to the appropriate payer." },
    { title: "Payer Follow-up", description: "Following up with payers on submitted requests to confirm status and prompt decisions." },
    { title: "Status Tracking", description: "Tracking the status of each authorization from submission through decision." },
    { title: "Additional-Information Requests", description: "Coordinating responses when payers request additional information." },
    { title: "Authorization Documentation", description: "Maintaining documentation of authorizations and supporting correspondence." },
    { title: "Expiration & Renewal Tracking", description: "Tracking authorization expiration and supporting renewals where applicable." },
];

export default function PriorAuthorization() {
    return (
        <div className="bg-[#040A1C] text-slate-100 min-h-screen overflow-x-hidden">
            <SEO
                title="Prior Authorization Support Services"
                description="Marth Systems provides administrative prior authorization support — requirement checks, documentation coordination, submissions, payer follow-up, status tracking, and expiration tracking. Authorization requirements vary by payer, plan, and service."
                path="/prior-authorization"
            />
            <ServicePageHero
                eyebrow="Prior Authorization"
                title="Administrative prior authorization support."
                description="Prior authorization requirements can stall scheduled services and frustrate patients and staff. Marth Systems provides administrative support to coordinate documentation, submit requests, follow up with payers, and track status — so your team isn't buried in authorization paperwork."
                email="contact@marthsystems.com"
                ctaText="Discuss Authorization Support"
                highlights={[
                    "Payer Rule & Plan Verification",
                    "Clinical Packet Coordination",
                    "Expiration & Renewal Tracking",
                ]}
                metrics={[
                    {
                        label: "Submission Turnaround",
                        sub: "Coordinated packet preparation & transmission",
                        value: "24–48h",
                    },
                    {
                        label: "Packet Completeness",
                        sub: "Clinical & CPT/ICD-10 documentation check",
                        value: "100%",
                    },
                    {
                        label: "Status Tracking",
                        sub: "From initial order to payer determination",
                        value: "Real-Time",
                    },
                ]}
            />

            {/* THE WORKFLOW */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The workflow"
                        title="How prior authorization moves with us."
                        description="A clear, tracked path from order to decision — with follow-up at every stage."
                        light={true}
                    />
                    <div className="mt-16">
                        <WorkflowDiagram steps={STEPS} variant="dark" />
                    </div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="relative overflow-hidden bg-[#040A1C] py-20 sm:py-28">
                <div className="pointer-events-none absolute right-1/4 top-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What's included"
                        title="What prior authorization support covers."
                        description="The administrative scope we handle so your team can focus on clinical priorities."
                        align="left"
                        light={true}
                    />
                    <div className="mt-10">
                        <FeatureList items={SCOPE} columns={2} light={true} />
                    </div>
                    <ScrollReveal delay={0.1}>
                        <div className="mt-12 flex items-start gap-3.5 rounded-2xl border border-teal-500/30 bg-teal-500/10 p-6 backdrop-blur-xl">
                            <Info className="h-5 w-5 shrink-0 text-teal-300 mt-0.5" />
                            <p className="text-sm leading-relaxed text-slate-200">
                                Authorization requirements vary by payer, plan, service, and clinical
                                circumstances. Marth Systems provides administrative support for the authorization
                                process; clinical decisions remain with the ordering provider and payer.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <p className="mt-8 text-center text-sm text-slate-400">
                            Authorization workflows can intersect with{" "}
                            <Link to="/patient-support" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                patient support
                            </Link>{" "}
                            and{" "}
                            <Link to="/billing" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                billing
                            </Link>{" "}
                            operations.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <CTASection
                title="Need Prior Authorization Support?"
                description="Let's talk about how Marth Systems can help coordinate and track your prior authorization workload."
                buttonText="Discuss Authorization Support"
                email="contact@marthsystems.com"
                emailLabel="contact@marthsystems.com"
            />
        </div>
    );
}