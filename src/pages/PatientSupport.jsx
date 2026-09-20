import { Link } from "react-router-dom";
import { Headphones, CalendarClock, CreditCard, MessageSquare, FileText, AlertTriangle, RefreshCw, Info } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageHero from "@/components/ServicePageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
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

export default function PatientSupport() {
    return (
        <>
            <SEO
                title="Patient Support & Administrative Services"
                description="Marth Systems provides administrative patient support — inquiry handling, appointment-related administrative support, billing inquiries, status communication, documentation coordination, and follow-up. We do not provide medical diagnosis, treatment, or clinical advice."
                path="/patient-support"
            />
            <ServicePageHero
                eyebrow="Patient Support"
                title="Administrative patient support that keeps communication clear."
                description="Patients expect timely, clear answers — but administrative inquiries can overwhelm front-office teams. Marth Systems provides administrative and operational patient support to handle inquiries, billing questions, and follow-up communication so your staff can focus on in-person care."
                email="support@marthsystems.com"
                ctaText="Talk to Our Support Team"
            />

            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What's included"
                        title="What patient support covers."
                        description="Administrative and operational support across the patient communication lifecycle."
                        align="left"
                    />
                    <div className="mt-10">
                        <FeatureList items={SCOPE} columns={2} />
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="mx-auto max-w-3xl rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                                <Info className="h-6 w-6" />
                            </div>
                            <p className="mt-5 text-lg font-semibold text-navy-900">
                                Marth Systems provides administrative and operational support.
                            </p>
                            <p className="mt-2 text-base leading-relaxed text-navy-800">
                                We do not provide medical diagnosis, treatment, or clinical advice. Clinical
                                questions are escalated to your clinical team — we handle the administrative layer.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
                            Patient support often intersects with{" "}
                            <Link to="/prior-authorization" className="font-semibold text-teal-700 hover:underline">
                                prior authorization
                            </Link>{" "}
                            status communication and billing inquiries —{" "}
                            <Link to="/contact" className="font-semibold text-teal-700 hover:underline">
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
                email="support@marthsystems.com"
                emailLabel="support@marthsystems.com"
            />
        </>
    );
}