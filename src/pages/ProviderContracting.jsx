import { Link } from "react-router-dom";
import {
    FileText, MessageSquare, ClipboardList, Send, Activity, RefreshCw,
    FileCheck, Eye, Layers, Info, ArrowRight, Building2, Network, Users, Share2, Briefcase,
} from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import ContractingVisualization from "@/components/ContractingVisualization";

const CHALLENGE = [
    { title: "Contract & participation documentation", description: "Applications, participation agreements, and supporting documentation that may be required for contracting." },
    { title: "Provider & organization information", description: "Provider rosters, practice details, and organizational information used during contracting processes." },
    { title: "Payer-specific requirements", description: "Each payer may have distinct documentation, formats, and submission expectations." },
    { title: "Document coordination", description: "Collecting, assembling, and tracking documents across your team and the payer." },
    { title: "Follow-up & status tracking", description: "Knowing what has been submitted, what is pending, and what needs attention." },
    { title: "Contract-related communication", description: "Ongoing correspondence with payer representatives and internal stakeholders." },
    { title: "Ongoing maintenance", description: "Updates, renewals, and documentation changes that arise over time." },
];

const SUPPORT = [
    { icon: FileText, title: "Contracting Documentation", description: "Support organization and preparation of required administrative documentation." },
    { icon: MessageSquare, title: "Payer Coordination", description: "Support communication and follow-up related to contracting workflows." },
    { icon: ClipboardList, title: "Provider Information Management", description: "Help maintain organized provider and organization information used during contracting processes." },
    { icon: Send, title: "Application & Submission Support", description: "Support preparation and submission workflows where applicable." },
    { icon: Activity, title: "Contract Status Tracking", description: "Maintain visibility into outstanding items, submissions, responses, and follow-ups." },
    { icon: RefreshCw, title: "Ongoing Contract Maintenance", description: "Support organized tracking of contracting-related updates and documentation." },
];

const STEPS = [
    { title: "Assess", description: "Review current contracting status, participation needs, and applicable requirements." },
    { title: "Organize", description: "Structure documentation, provider information, and payer requirements in one place." },
    { title: "Prepare", description: "Assemble complete, accurate contracting documentation where applicable." },
    { title: "Submit", description: "Support submission workflows through the appropriate payer channels." },
    { title: "Follow Up", description: "Track responses and follow up on outstanding items and communication." },
    { title: "Track", description: "Maintain visibility into status, pending items, and next steps." },
    { title: "Maintain", description: "Support organized updates and documentation as contracting needs evolve." },
];

const PILLARS = [
    { icon: FileCheck, title: "Clear Documentation", description: "Keep contracting-related information organized." },
    { icon: MessageSquare, title: "Consistent Follow-Up", description: "Maintain visibility into outstanding communication and next steps." },
    { icon: Eye, title: "Status Visibility", description: "Know what has been submitted, what is pending, and what requires attention." },
    { icon: Layers, title: "Operational Continuity", description: "Create a repeatable process that can be maintained as contracting needs evolve." },
];

const AUDIENCES = [
    { icon: Briefcase, label: "Medical practices" },
    { icon: Building2, label: "Healthcare organizations" },
    { icon: Users, label: "Provider groups" },
    { icon: Network, label: "Multi-provider organizations" },
    { icon: Share2, label: "Organizations managing multiple payer relationships" },
];

export default function ProviderContracting() {
    return (
        <>
            <SEO
                title="Provider Contracting Services | Marth Systems"
                description="Organized provider contracting support for healthcare organizations, including documentation, coordination, submission support, follow-up, status tracking, and ongoing maintenance."
                path="/provider-contracting"
            />

            {/* HERO */}
            <section className="relative overflow-hidden bg-navy-900 pt-28 pb-20 sm:pt-36 sm:pb-28">
                <div className="absolute inset-0 bg-grid-dark opacity-25" />
                <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
                <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-14 lg:grid-cols-2">
                        <div className="max-w-3xl">
                            <ScrollReveal>
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                                    Provider Contracting
                                </span>
                            </ScrollReveal>
                            <ScrollReveal delay={0.06}>
                                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white">
                                    Provider Contracting, Organized for Better Operations
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.12}>
                                <p className="mt-6 text-lg leading-relaxed text-slate-300">
                                    Provider contracting can involve multiple documents, payer requirements,
                                    follow-ups, and ongoing coordination. Marth Systems helps organize the
                                    administrative workflow so contracting activities are easier to manage, track,
                                    and maintain.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.18}>
                                <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <Link
                                        to="/contact"
                                        className="group inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-base font-semibold text-navy-950 shadow-premium-lg transition-all hover:bg-teal-400 hover:scale-[1.02]"
                                    >
                                        Talk to Our Team
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <Link
                                        to="/#services"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                                    >
                                        Explore Our Services
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal delay={0.2} className="lg:justify-self-end">
                            <ContractingVisualization />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* SECTION 1 — THE CHALLENGE */}
            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The challenge"
                        title="Provider Contracting Shouldn't Become an Administrative Bottleneck"
                        description="Contracting touches documents, payer requirements, and ongoing coordination — and when it's managed ad hoc, items stall and visibility disappears. Provider contracting may involve:"
                        align="left"
                    />
                    <div className="mt-10">
                        <FeatureList items={CHALLENGE} columns={2} />
                    </div>
                </div>
            </section>

            {/* SECTION 2 — WHAT WE SUPPORT */}
            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What we support"
                        title="Administrative support across the contracting workflow."
                        description="Organized, coordinated support for the operational side of provider contracting."
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {SUPPORT.map((s, i) => (
                            <ScrollReveal key={s.title} delay={(i % 3) * 0.06}>
                                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-premium transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-premium-lg">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-teal-300 transition-colors group-hover:bg-teal-500 group-hover:text-navy-950">
                                        <s.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold text-navy-900">{s.title}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{s.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal delay={0.1}>
                        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-teal-200 bg-teal-50 p-6">
                            <Info className="h-5 w-5 shrink-0 text-teal-700 mt-0.5" />
                            <p className="text-sm leading-relaxed text-navy-800">
                                Marth Systems provides administrative and operational support for contracting
                                workflows. We are not a payer, we do not approve or execute contracts, and
                                contracting decisions rest with the payer and your organization.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 3 — WORKFLOW */}
            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="The workflow"
                        title="A structured path from assessment to maintenance."
                        description="Each step keeps contracting work organized, visible, and moving."
                    />
                    <div className="mt-16">
                        <WorkflowDiagram steps={STEPS} />
                    </div>
                    <ScrollReveal delay={0.1}>
                        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <Info className="h-5 w-5 shrink-0 text-teal-600 mt-0.5" />
                            <p className="text-sm leading-relaxed text-slate-600">
                                Contracting requirements, participation criteria, documentation, and payer
                                processes may vary by organization, payer, provider type, and applicable
                                requirements. Marth Systems focuses on accurate, organized administrative support —
                                not legal services or advice.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 4 — WHY ORGANIZATION MATTERS */}
            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Why organization matters"
                        title="Visibility Across the Contracting Process"
                        description="Organization is what turns contracting activity into a manageable, repeatable process."
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {PILLARS.map((p, i) => (
                            <ScrollReveal key={p.title} delay={i * 0.06}>
                                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-premium transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-premium-lg">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-navy-900 group-hover:text-teal-300">
                                        <p.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-4 text-base font-semibold text-navy-900">{p.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5 — WHO THIS SUPPORT IS FOR */}
            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Who this support is for"
                        title="Support for organizations of different shapes and sizes."
                        description="Any organization that manages payer contracting activity can benefit from a more organized administrative workflow."
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {AUDIENCES.map((a, i) => (
                            <ScrollReveal key={a.label} delay={i * 0.06}>
                                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-premium transition-all hover:-translate-y-1 hover:border-teal-300 hover:bg-white hover:shadow-premium-lg">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-teal-300">
                                        <a.icon className="h-5 w-5" />
                                    </span>
                                    <span className="text-sm font-semibold leading-snug text-navy-900">{a.label}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal delay={0.1}>
                        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-slate-600">
                            Contracting work often sits alongside{" "}
                            <Link to="/credentialing" className="font-semibold text-teal-700 hover:underline">
                                credentialing
                            </Link>
                            ,{" "}
                            <Link to="/provider-enrollment" className="font-semibold text-teal-700 hover:underline">
                                provider enrollment
                            </Link>
                            , and{" "}
                            <Link to="/billing" className="font-semibold text-teal-700 hover:underline">
                                billing
                            </Link>{" "}
                            — when those workflows are organized together, handoffs break down less often.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 6 — CTA */}
            <CTASection
                title="Need More Visibility Into Your Contracting Workflow?"
                description="Let's discuss how Marth Systems can support the administrative side of your provider contracting process."
                buttonText="Discuss Contracting Support"
                email="info@marthsystems.com"
                emailLabel="info@marthsystems.com"
            />
        </>
    );
}