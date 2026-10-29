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
        <div className="bg-[#040A1C] text-slate-100 min-h-screen overflow-x-hidden">
            <SEO
                title="Provider Credentialing & Enrollment Services"
                description="Marth Systems provides provider credentialing and enrollment support — primary source verification, license and board certification checks, CAQH management, and Medicare, Medicaid, and commercial payer enrollment."
                path="/credentialing"
            />
            <ServicePageHero
                eyebrow="Credentialing & Enrollment"
                title="Credentialing that keeps your providers ready to practice."
                description="From primary source verification to payer enrollment and ongoing recredentialing, Marth Systems manages the credentialing process with accuracy and compliance in mind — so your providers can see patients and bill without avoidable delays."
                email="contact@marthsystems.com"
                ctaText="Talk to Our Credentialing Team"
                highlights={[
                    "Primary Source Verification (PSV)",
                    "CAQH ProView Attestation",
                    "Proactive Expiration Tracking",
                ]}
                metrics={[
                    {
                        label: "Dossier Turnaround",
                        sub: "From document intake to payer submission",
                        value: "< 21d",
                    },
                    {
                        label: "Primary Verification",
                        sub: "State boards, DEA, NPDB, OIG & SAM",
                        value: "100%",
                    },
                    {
                        label: "Payer Coverage",
                        sub: "Medicare, Medicaid & Commercial plans",
                        value: "50 States",
                    },
                ]}
            />

            {/* PILLARS & VERIFICATION SCOPE */}
            <section className="relative overflow-hidden bg-[#060E28] py-20 sm:py-28 border-b border-white/10">
                <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-5 sm:grid-cols-3 mb-20">
                        {[
                            {
                                icon: ShieldCheck,
                                label: "Initial & Recredentialing",
                                desc: "Complete primary source verification and cycle management.",
                            },
                            {
                                icon: Building2,
                                label: "Payer Enrollment",
                                desc: "Medicare, Medicaid, and commercial network submissions.",
                            },
                            {
                                icon: ClipboardList,
                                label: "Ongoing Tracking",
                                desc: "Continuous CAQH attestations and license expiration alerts.",
                            },
                        ].map((c, i) => (
                            <ScrollReveal key={c.label} delay={i * 0.06}>
                                <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/75 p-6 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-teal-400/60">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300 border border-teal-500/30 transition-colors group-hover:bg-teal-400 group-hover:text-navy-950">
                                        <c.icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <span className="block text-base font-bold text-white">{c.label}</span>
                                        <span className="mt-1 block text-xs leading-relaxed text-slate-300">
                                            {c.desc}
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <SectionHeading
                        eyebrow="Verification"
                        title="Thorough credentialing verification."
                        description="We handle the full verification scope expected for provider credentialing files."
                        align="left"
                        light={true}
                    />
                    <div className="mt-10">
                        <FeatureList items={VERIFICATION} columns={2} light={true} />
                    </div>

                    <div className="mt-20">
                        <SectionHeading
                            eyebrow="Enrollment"
                            title="Payer enrollment, prepared and followed up."
                            description="We prepare and submit enrollment applications, then track them through to completion."
                            align="left"
                            light={true}
                        />
                        <div className="mt-10">
                            <FeatureList items={ENROLLMENT} columns={2} light={true} />
                        </div>
                    </div>
                </div>
            </section>

            {/* WORKFLOW SECTION */}
            <section className="relative overflow-hidden bg-[#040A1C] py-20 sm:py-28">
                <div className="pointer-events-none absolute right-1/4 top-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The workflow"
                        title="How credentialing moves with Marth Systems."
                        description="A structured process that keeps verification, enrollment, and ongoing maintenance organized."
                        light={true}
                    />
                    <div className="mt-16">
                        <WorkflowDiagram steps={STEPS} variant="dark" />
                    </div>
                    <ScrollReveal delay={0.1}>
                        <div className="mt-12 flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/75 p-6 sm:p-7 shadow-xl backdrop-blur-xl">
                            <Search className="h-5 w-5 shrink-0 text-teal-400 mt-0.5" />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Credentialing timelines vary by payer, provider type, and completeness of
                                documentation. We focus on accurate, complete submissions and consistent follow-up
                                to keep the process moving as efficiently as possible.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <p className="mt-8 text-center text-sm text-slate-400">
                            Credentialing is often connected to{" "}
                            <Link to="/provider-enrollment" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
                                provider enrollment
                            </Link>{" "}
                            and{" "}
                            <Link to="/provider-contracting" className="font-semibold text-teal-300 hover:text-teal-200 underline underline-offset-4">
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
                email="contact@marthsystems.com"
                emailLabel="contact@marthsystems.com"
            />
        </div>
    );
}