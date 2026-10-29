import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageHero from "@/components/ServicePageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const SCOPE = [
    { title: "Patient Inquiry Support", description: "Administrative support for patient inquiries routed to your practice." },
    { title: "Appointment-Related Administrative Support", description: "Coordination of appointment-related administrative tasks and communication." },
    { title: "Insurance Information Assistance", description: "Helping patients understand insurance information from an administrative perspective." },
    { title: "Billing Inquiry Support", description: "Administrative support for patient billing questions and balance inquiries." },
    { title: "Status Communication", description: "Clear communication of statuses to patients where appropriate." },
    { title: "Documentation Coordination", description: "Coordination of administrative documentation related to patient interactions." },
    { title: "Escalation Workflows", description: "Structured escalation of issues that require clinical or higher-level attention." },
    { title: "Follow-up Communication", description: "Consistent follow-up communication to keep patients informed." },
];

const STEPS = [
    { title: "Intake", description: "Receive and log patient administrative, scheduling, or statement inquiries promptly." },
    { title: "Verify", description: "Check account records, insurance details, or authorization status in your system." },
    { title: "Assist", description: "Provide clear, respectful administrative explanations regarding balances or status." },
    { title: "Escalate", description: "Route clinical or complex provider-level questions immediately to your clinical staff." },
    { title: "Follow Up", description: "Document every interaction and complete promised follow-up communication." },
];

export default function PatientSupport() {
    return (
        <div className="bg-[#040A1C] text-slate-100 min-h-screen overflow-x-hidden">
            <SEO
                title="Patient Support & Administrative Services"
                description="Marth Systems provides administrative patient support — inquiry handling, appointment-related administrative support, billing inquiries, status communication, documentation coordination, and follow-up. We do not provide medical diagnosis, treatment, or clinical advice."
                path="/patient-support"
            />
            <ServicePageHero
                eyebrow="Patient Support"
                title="Administrative patient support that keeps communication clear."
                description="Patients expect timely, clear answers — but administrative inquiries can overwhelm front-office teams. Marth Systems provides administrative and operational patient support to handle inquiries, billing questions, and follow-up communication so your staff can focus on in-person care."
                email="contact@marthsystems.com"
                ctaText="Talk to Our Support Team"
                highlights={[
                    "Statement & Balance Explanations",
                    "Structured Clinical Escalation",
                    "Dedicated Practice Pods",
                ]}
                metrics={[
                    {
                        label: "Communication Style",
                        sub: "Respectful, clear administrative guidance",
                        value: "Patient-First",
                    },
                    {
                        label: "Clinical Escalation",
                        sub: "Immediate routing of medical questions",
                        value: "100% Strict",
                    },
                    {
                        label: "Documentation",
                        sub: "Every inquiry & follow-up logged",
                        value: "Full Audit",
                    },
                ]}
            />

            {/* WHAT'S INCLUDED */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What's included"
                        title="What patient support covers."
                        description="Administrative and operational support across the patient communication lifecycle."
                        align="left"
                        light={true}
                    />
                    <div className="mt-10">
                        <FeatureList items={SCOPE} columns={2} light={true} />
                    </div>
                </div>
            </section>

            {/* 5-STAGE INQUIRY WORKFLOW */}
            <section className="relative overflow-hidden bg-[#040A1C] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute right-1/4 top-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The workflow"
                        title="How Patient Inquiries Are Handled."
                        description="A disciplined 5-stage communication protocol that resolves administrative questions while protecting clinical boundaries."
                        light={true}
                    />
                    <div className="mt-16">
                        <WorkflowDiagram steps={STEPS} variant="dark" />
                    </div>
                </div>
            </section>

            {/* ADMINISTRATIVE BOUNDARY CALLOUT */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28">
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="mx-auto max-w-3xl rounded-[32px] border border-teal-500/30 bg-slate-900/80 p-8 sm:p-10 text-center shadow-2xl backdrop-blur-2xl">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300 border border-teal-500/30">
                                <Info className="h-6 w-6" />
                            </div>
                            <p className="mt-5 text-xl font-bold text-white">
                                Marth Systems provides administrative and operational support.
                            </p>
                            <p className="mt-3 text-base leading-relaxed text-slate-300">
                                We do not provide medical diagnosis, treatment, or clinical advice. Clinical
                                questions are escalated to your clinical team — we handle the administrative layer.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-400">
                            Patient support often intersects with{" "}
                            <Link to="/prior-authorization" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                prior authorization
                            </Link>{" "}
                            status communication and billing inquiries —{" "}
                            <Link to="/contact" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                tell us what your team needs
                            </Link>
                            .
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <CTASection
                title="Talk to Our Support Team."
                description="Let's discuss how Marth Systems can provide administrative patient support for your practice."
                buttonText="Talk to Our Support Team"
                email="contact@marthsystems.com"
                emailLabel="contact@marthsystems.com"
            />
        </div>
    );
}