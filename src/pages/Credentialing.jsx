import { Link } from "react-router-dom";
import { ShieldCheck, FileCheck, ClipboardList, Building2, Send, Search } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageHero from "@/components/ServicePageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const VERIFICATION = [
    { title: "Primary Source Verification", description: "Direct verification of credentials with the originating source for each required element." },
    { title: "License Verification", description: "Verification of state medical licenses, including current status and any restrictions." },
    { title: "Board Certification Verification", description: "Confirmation of board certification status through the appropriate certifying boards." },
    { title: "Education & Training Verification", description: "Verification of medical education, residency, and fellowship training history." },
    { title: "Malpractice Verification", description: "Collection and verification of malpractice history and claims data where applicable." },
    { title: "DEA Verification", description: "Verification of DEA registration when applicable to the provider's practice." },
    { title: "Sanction & Exclusion Screening", description: "Screening against federal and state sanction and exclusion databases." },
    { title: "CAQH Management", description: "Ongoing management and updating of CAQH profiles to support payer applications." },
];

const ENROLLMENT = [
    { title: "Medicare Enrollment", description: "Preparation and submission support for Medicare enrollment applications." },
    { title: "Medicaid Enrollment", description: "Support navigating state Medicaid enrollment requirements and processes." },
    { title: "Commercial Payer Enrollment", description: "Enrollment support across commercial payer programs." },
    { title: "Application Preparation", description: "Accurate, complete application preparation to reduce back-and-forth with payers." },
    { title: "Submission Support", description: "Managed submission of enrollment applications to the appropriate payer channels." },
    { title: "Payer Follow-up", description: "Structured follow-up on submitted applications to keep enrollment moving." },
    { title: "Enrollment Tracking", description: "Tracking of application status across payers so you know where each provider stands." },
    { title: "Revalidation & Re-enrollment", description: "Support for revalidation and re-enrollment requirements where applicable." },
];

const STEPS = [
    { title: "Assess", description: "Review provider roster, current credentialing status, and payer enrollment gaps." },
    { title: "Verify", description: "Complete primary source verification and required screenings for each provider." },
    { title: "Prepare", description: "Assemble accurate, complete applications and CAQH profiles." },
    { title: "Submit", description: "Submit enrollment applications to Medicare, Medicaid, and commercial payers." },
    { title: "Follow Up", description: "Track applications and follow up with payers to resolve questions promptly." },
    { title: "Maintain", description: "Monitor recredentialing cycles, revalidation, and CAQH updates." },
];

export default function Credentialing() {
    return (
        <>
            <SEO
                title="Provider Credentialing & Enrollment Services"
                description="Marth Systems provides provider credentialing and enrollment support — primary source verification, license and board certification checks, CAQH management, and Medicare, Medicaid, and commercial payer enrollment."
                path="/credentialing"
            />
            <ServicePageHero
                eyebrow="Credentialing & Enrollment"
                title="Credentialing that keeps your providers ready to practice."
                description="From primary source verification to payer enrollment and ongoing recredentialing, Marth Systems manages the credentialing process with accuracy and compliance in mind — so your providers can see patients and bill without avoidable delays."
                email="credentialing@marthsystems.com"
                ctaText="Talk to Our Credentialing Team"
            />

            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-3 sm:grid-cols-3 mb-16">
                        {[
                            { icon: ShieldCheck, label: "Initial & Recredentialing" },
                            { icon: Building2, label: "Payer Enrollment" },
                            { icon: ClipboardList, label: "Ongoing Tracking" },
                        ].map((c, i) => (
                            <ScrollReveal key={c.label} delay={i * 0.06}>
                                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-teal-300">
                                        <c.icon className="h-5 w-5" />
                                    </span>
                                    <span className="text-sm font-semibold text-navy-900">{c.label}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <SectionHeading
                        eyebrow="Verification"
                        title="Thorough credentialing verification."
                        description="We handle the full verification scope expected for provider credentialing files."
                        align="left"
                    />
                    <div className="mt-10">
                        <FeatureList items={VERIFICATION} columns={2} />
                    </div>

                    <div className="mt-20">
                        <SectionHeading
                            eyebrow="Enrollment"
                            title="Payer enrollment, prepared and followed up."
                            description="We prepare and submit enrollment applications, then track them through to completion."
                            align="left"
                        />
                        <div className="mt-10">
                            <FeatureList items={ENROLLMENT} columns={2} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The workflow"
                        title="How credentialing moves with Marth Systems."
                        description="A structured process that keeps verification, enrollment, and ongoing maintenance organized."
                    />
                    <div className="mt-16">
                        <WorkflowDiagram steps={STEPS} />
                    </div>
                    <ScrollReveal delay={0.1}>
                        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6">
                            <Search className="h-5 w-5 shrink-0 text-teal-600 mt-0.5" />
                            <p className="text-sm leading-relaxed text-slate-600">
                                Credentialing timelines vary by payer, provider type, and completeness of
                                documentation. We focus on accurate, complete submissions and consistent follow-up
                                to keep the process moving as efficiently as possible.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <p className="mt-6 text-center text-sm text-slate-500">
                            Credentialing is often connected to{" "}
                            <Link to="/provider-enrollment" className="font-semibold text-teal-700 hover:underline">
                                provider enrollment
                            </Link>{" "}
                            and{" "}
                            <Link to="/provider-contracting" className="font-semibold text-teal-700 hover:underline">
                                contracting
                            </Link>{" "}
                            — organized together, the handoffs between them break down less often.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <CTASection
                title="Talk to Our Credentialing Team."
                description="Find out how Marth Systems can support your provider credentialing and payer enrollment workflows."
                buttonText="Talk to Our Credentialing Team"
                email="credentialing@marthsystems.com"
                emailLabel="credentialing@marthsystems.com"
            />
        </>
    );
}