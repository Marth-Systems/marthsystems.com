import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Briefcase,
    MapPin,
    Clock,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Laptop,
    GraduationCap,
    HeartPulse,
    TrendingUp,
    Users,
    Send,
    Copy,
    Check,
    FileText,
    Sparkles,
    X,
    Building2,
    HelpCircle,
    ChevronRight,
    Calendar,
} from "lucide-react";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { trackEvent } from "@/lib/analytics";

const BENEFITS = [
    {
        icon: Laptop,
        title: "100% Global Remote Culture",
        description:
            "Work from anywhere across the world. We are a truly global team providing collaborative cloud tooling, home-office stipends, and flexible schedules that support team members in every time zone.",
    },
    {
        icon: GraduationCap,
        title: "Certification Sponsorship",
        description:
            "We invest directly in your career. We fully sponsor professional credentials and continuing education through AAPC (CPC), NAMSS (CPCS, CPMSM), and HFMA (CRCR).",
    },
    {
        icon: ShieldCheck,
        title: "Structured, Repeatable Workflows",
        description:
            "Say goodbye to chaotic firefighting. Our five-stage operating model provides clear expectations, standardized SOPs, and dedicated workflow ownership.",
    },
    {
        icon: HeartPulse,
        title: "Comprehensive Health & PTO",
        description:
            "Competitive compensation, paid holidays, generous paid time off, and genuine respect for work-life balance and personal well-being.",
    },
    {
        icon: TrendingUp,
        title: "Merit-Driven Advancement",
        description:
            "Clear, transparent career progression tracks from specialist to senior analyst, quality auditor, team lead, and operations director.",
    },
    {
        icon: Users,
        title: "High-Trust, Collaborative Team",
        description:
            "A culture built on psychological safety, mutual respect, and cross-functional teamwork between credentialing, billing, and clinical support specialists.",
    },
];

const VALUES = [
    {
        title: "Accurate",
        description:
            "In healthcare administration, precision is quality. We take immense pride in first-pass accuracy on every credentialing dossier, claim submission, and prior authorization.",
        tag: "Our Standard",
    },
    {
        title: "Compliant",
        description:
            "Patient privacy, regulatory integrity, and payer compliance are non-negotiable. We adhere strictly to HIPAA guidelines and ethical administrative practices.",
        tag: "Our Foundation",
    },
    {
        title: "Connected",
        description:
            "We eliminate administrative silos. When credentialing, enrollment, billing, and patient support communicate openly, our partner practices and their patients thrive.",
        tag: "Our Strength",
    },
];

const HIRING_STEPS = [
    {
        step: "01",
        title: "Application & Review",
        time: "Within 48 hours",
        description:
            "Submit your resume and background. Our talent team reviews your relevant experience, healthcare systems proficiency, and certifications.",
    },
    {
        step: "02",
        title: "Initial Conversation",
        time: "30 minutes (Video)",
        description:
            "A friendly, two-way dialogue to discuss your background, expectations, our company values, and what you're looking for in your next role.",
    },
    {
        step: "03",
        title: "Skills & Practical Walkthrough",
        time: "45 minutes",
        description:
            "A collaborative session exploring real-world operational scenarios—such as addressing complex payer denials or managing a multi-state credentialing roster.",
    },
    {
        step: "04",
        title: "Offer & Welcome Aboard",
        time: "Prompt decision",
        description:
            "Clear offer details, followed by structured, comprehensive onboarding, mentorship, and full system training to set you up for long-term success.",
    },
];

const OPEN_ROLES = [
    {
        id: "senior-credentialing-specialist",
        title: "Senior Credentialing & Enrollment Specialist",
        department: "Credentialing & Enrollment",
        location: "Remote (Worldwide)",
        type: "Full-Time",
        experience: "3+ years",
        postedAgo: "10 days ago",
        postedDate: "Oct 19, 2026",
        description:
            "Drive primary source verification, CAQH profile lifecycle maintenance, and state licensing across multi-state physician and allied health rosters.",
        responsibilities: [
            "Conduct thorough primary source verification (PSV) directly with issuing medical boards, NPDB, OIG, and educational institutions.",
            "Maintain complete, up-to-date CAQH ProView profiles, attestations, and supporting document repositories.",
            "Prepare and submit initial credentialing packets and re-credentialing applications to commercial and government payers.",
            "Proactively track expiration calendars for DEA registrations, state licenses, malpractice insurance, and board certifications.",
            "Collaborate with client practice managers to resolve documentation discrepancies promptly.",
        ],
        qualifications: [
            "3+ years of dedicated experience in healthcare provider credentialing.",
            "Deep familiarity with CAQH, NPPES, PECOS, and NCQA standards.",
            "NAMSS certification (CPCS or CPMSM) is a strong plus.",
            "Meticulous attention to detail and outstanding organizational discipline.",
        ],
    },
    {
        id: "medical-billing-specialist",
        title: "Medical Billing & Revenue Cycle Specialist",
        department: "Billing & Revenue Cycle",
        location: "Remote (Worldwide)",
        type: "Full-Time",
        experience: "2–4 years",
        postedAgo: "10 days ago",
        postedDate: "Oct 19, 2026",
        description:
            "Manage charge entry, clearinghouse claim scrubbing, electronic filing, payment posting, and front-line denial mitigation for ambulatory practices.",
        responsibilities: [
            "Scrub electronic claims (837P/837I) against clearinghouse and payer edits prior to transmission.",
            "Accurately post electronic remittance advice (ERA/835) and manual explanation of benefits (EOBs).",
            "Identify recurring claim rejection patterns and coordinate with provider intake teams to prevent front-end errors.",
            "Review fee schedules and payer payment variance to ensure proper contract reimbursement.",
            "Maintain clean, audit-ready billing documentation and financial reporting records.",
        ],
        qualifications: [
            "2+ years of medical billing and revenue cycle experience in an outpatient or multi-specialty setting.",
            "Working knowledge of CPT, HCPCS, ICD-10 coding guidelines, and modifier usage.",
            "Hands-on experience with major clearinghouses (Change Healthcare, Availity, Waystar, or similar).",
            "AAPC certification (CPC or CPB) preferred.",
        ],
    },
    {
        id: "ar-denial-analyst",
        title: "Accounts Receivable (AR) & Denial Resolution Analyst",
        department: "Billing & Revenue Cycle",
        location: "Remote (Worldwide)",
        type: "Full-Time",
        experience: "3+ years",
        postedAgo: "15 days ago",
        postedDate: "Oct 14, 2026",
        description:
            "Analyze aging accounts receivable (60+, 90+, 120+ days), interpret CARC/RARC codes, and craft persuasive, evidence-based payer appeals to recover revenue.",
        responsibilities: [
            "Investigate and work unpaid and denied claims across Medicare, Medicaid, and commercial payers.",
            "Interpret Claim Adjustment Reason Codes (CARCs) and Remittance Advice Remark Codes (RARCs) to determine root-cause denials.",
            "Draft detailed, documentation-backed appeal letters for medical necessity, coding, and authorization disputes.",
            "Engage directly with payer provider representatives to escalate stalled or misprocessed claims.",
            "Compile monthly AR aging trends and feedback insights for leadership.",
        ],
        qualifications: [
            "3+ years in healthcare accounts receivable follow-up and denial management.",
            "Proven track record of resolving complex, aged claims and overturning payer denials.",
            "Solid understanding of timely filing limits, ERISA regulations, and payer dispute pathways.",
            "Strong analytical mindset and proficiency with spreadsheet reporting (Excel / Google Sheets).",
        ],
    },
    {
        id: "prior-auth-coordinator",
        title: "Prior Authorization Coordinator",
        department: "Clinical Administration",
        location: "Remote (Worldwide)",
        type: "Full-Time",
        experience: "2+ years",
        postedAgo: "15 days ago",
        postedDate: "Oct 14, 2026",
        description:
            "Coordinate timely prior authorization submissions for diagnostic imaging, surgical procedures, and specialty medications with commercial and government health plans.",
        responsibilities: [
            "Review clinical notes, lab results, and physician orders against specific payer medical coverage guidelines.",
            "Submit comprehensive prior authorization requests via electronic portals, clearinghouses, and direct payer channels.",
            "Actively track pending authorization queues to meet stringent clinical and surgical deadlines.",
            "Coordinate peer-to-peer physician reviews when initial authorization requests require clinical clarification.",
            "Communicate authorization status and approval reference numbers clearly to clinic staff.",
        ],
        qualifications: [
            "2+ years handling prior authorizations in a clinical, hospital, or outsourced operations setting.",
            "Familiarity with medical terminology, ICD-10, and procedure codes.",
            "Experience navigating major payer portals (CoverMyMeds, Availity, Carelon, eviCore, etc.).",
            "Calm, disciplined approach to managing time-sensitive clinical authorizations.",
        ],
    },
    {
        id: "patient-support-specialist",
        title: "Patient Support & Intake Representative",
        department: "Operations & Patient Care",
        location: "Remote (Worldwide)",
        type: "Full-Time",
        experience: "1–3 years",
        postedAgo: "20 days ago",
        postedDate: "Oct 9, 2026",
        description:
            "Deliver empathetic, professional administrative communication for patient inquiries, insurance eligibility verifications, and statement explanations.",
        responsibilities: [
            "Handle inbound patient inquiries via phone and secure portal regarding billing questions, balances, and appointment scheduling.",
            "Perform real-time insurance eligibility and benefits verification (copay, coinsurance, deductible).",
            "Explain complex billing statements and insurance coverage details to patients in simple, courteous language.",
            "Assist patients with payment plans and financial hardship intake documentation.",
            "Document every patient interaction accurately in compliance with HIPAA guidelines.",
        ],
        qualifications: [
            "1–3 years of patient access, scheduling, or customer service experience in a medical office or call center.",
            "High empathy, active listening, and calm demeanor when assisting concerned patients.",
            "Fluency in English (Bilingual Spanish is a strong advantage).",
            "Strict adherence to patient confidentiality and HIPAA standards.",
        ],
    },
    {
        id: "operations-qa-lead",
        title: "Healthcare Operations Team Lead / QA Auditor",
        department: "Operations & Quality",
        location: "Remote (Worldwide)",
        type: "Full-Time",
        experience: "4+ years",
        postedAgo: "20 days ago",
        postedDate: "Oct 9, 2026",
        description:
            "Oversee day-to-day workflow milestones, conduct quality assurance audits on credentialing and billing deliverables, and mentor team specialists.",
        responsibilities: [
            "Monitor team production queues, turnaround times, and adherence to client service level agreements (SLAs).",
            "Perform random and targeted quality audits on submitted credentialing dossiers, claims, and authorization records.",
            "Lead structured training sessions for new hires and ongoing skill-building workshops for existing staff.",
            "Identify workflow bottlenecks and partner with leadership to continuously refine standard operating procedures.",
            "Foster a culture of mutual support, accuracy, and operational pride across remote team members.",
        ],
        qualifications: [
            "4+ years in healthcare administrative operations with at least 1 year in a supervisory, team lead, or QA capacity.",
            "Comprehensive understanding of credentialing, enrollment, or revenue cycle operations.",
            "Demonstrated leadership, coaching, and clear interpersonal communication abilities.",
            "Passionate about workflow standardization and high-quality outcomes.",
        ],
    },
];

const DEPARTMENTS = [
    "All Departments",
    "Credentialing & Enrollment",
    "Billing & Revenue Cycle",
    "Clinical Administration",
    "Operations & Patient Care",
    "Operations & Quality",
];

export default function Careers() {
    const [selectedDept, setSelectedDept] = useState("All Departments");
    const [activeModalRole, setActiveModalRole] = useState(null);
    const [candidateName, setCandidateName] = useState("");
    const [candidateEmail, setCandidateEmail] = useState("");
    const [candidatePhone, setCandidatePhone] = useState("");
    const [candidateExperience, setCandidateExperience] = useState("");
    const [candidateLinkedIn, setCandidateLinkedIn] = useState("");
    const [candidateNote, setCandidateNote] = useState("");
    const [copiedEmail, setCopiedEmail] = useState(false);

    const filteredRoles =
        selectedDept === "All Departments"
            ? OPEN_ROLES
            : OPEN_ROLES.filter((role) => role.department === selectedDept);

    const handleOpenModal = (role) => {
        setActiveModalRole(role);
        trackEvent("career_role_view", { role: role.title });
    };

    const handleCloseModal = () => {
        setActiveModalRole(null);
    };

    const handleCopyEmail = (email = "contact@marthsystems.com") => {
        navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const generateMailto = (role) => {
        const subject = encodeURIComponent(`Application: ${role.title} — ${candidateName.trim() || "Candidate"}`);
        const bodyText = [
            `Hello Marth Systems Talent Team,`,
            ``,
            `I am excited to apply for the ${role.title} position (${role.location}).`,
            ``,
            `Candidate Details:`,
            `• Full Name: ${candidateName.trim() || "[Your Full Name]"}`,
            `• Email: ${candidateEmail.trim() || "[Your Email]"}`,
            `• Phone: ${candidatePhone.trim() || "[Your Phone Number]"}`,
            `• Years of Relevant Healthcare Experience: ${candidateExperience.trim() || "[e.g., 4 years]"}`,
            `• LinkedIn / Portfolio: ${candidateLinkedIn.trim() || "[Optional LinkedIn URL]"}`,
            ``,
            `Why I am a strong fit for Marth Systems:`,
            candidateNote.trim() ||
                `I have strong background in healthcare operations and share your dedication to accuracy, compliance, and structured execution. Please find my resume attached.`,
            ``,
            `Thank you for your time and consideration.`,
            ``,
            `Sincerely,`,
            candidateName.trim() || "[Your Name]",
        ].join("\n");

        return `mailto:contact@marthsystems.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    };

    return (
        <>
            <SEO
                title="Careers at Marth Systems — Global Healthcare Operations & Administration Roles"
                description="Explore remote careers across the globe at Marth Systems. We provide healthcare operations and administrative services to organizations worldwide and hire talented professionals from everywhere."
                path="/careers"
            />

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-navy-900 pt-28 pb-20 sm:pt-36 sm:pb-28">
                <div className="absolute inset-0 bg-grid-dark opacity-30" />
                <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
                <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                                <Sparkles className="h-3.5 w-3.5 text-teal-400" />
                                Global Careers at Marth Systems
                            </span>
                        </ScrollReveal>

                        <ScrollReveal delay={0.06}>
                            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-white">
                                Do work that powers <br className="hidden sm:inline" />
                                healthcare worldwide.
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.12}>
                            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300">
                                Healthcare administration is the mission-critical foundation of patient care.
                                At Marth Systems, we deliver operational excellence to healthcare providers
                                across the world. Join our global remote team and build a meaningful career
                                from anywhere across the globe.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.18}>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href="#open-roles"
                                    onClick={() => trackEvent("careers_hero_explore_click")}
                                    className="group inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-premium transition-all hover:bg-teal-400 hover:scale-[1.02]"
                                >
                                    Explore Open Positions
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                                <a
                                    href="mailto:contact@marthsystems.com?subject=General%20Career%20Inquiry%20%E2%80%94%20Marth%20Systems"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                                >
                                    Send General Resume
                                </a>
                            </div>
                        </ScrollReveal>

                        {/* Quick Stats Pill Row */}
                        <ScrollReveal delay={0.24}>
                            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-2xl font-bold text-white">100%</div>
                                    <div className="text-xs text-slate-400 mt-0.5">Global Remote (Worldwide)</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-teal-300">Sponsored</div>
                                    <div className="text-xs text-slate-400 mt-0.5">AAPC & NAMSS Certs</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">Structure</div>
                                    <div className="text-xs text-slate-400 mt-0.5">No Chaos or Firefighting</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-teal-300">Growth</div>
                                    <div className="text-xs text-slate-400 mt-0.5">Merit-Driven Pathways</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CULTURE & BENEFITS SECTION */}
            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Why Marth Systems"
                        title="Built for professionals who care about doing work right."
                        description="We treat our people with the same accuracy, respect, and consistency that we bring to our healthcare partners."
                    />

                    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {BENEFITS.map((b, idx) => (
                            <ScrollReveal key={b.title} delay={idx * 0.05}>
                                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:shadow-md hover:border-teal-200 flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                                            <b.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="mt-5 text-lg font-bold text-navy-900">{b.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            {b.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CORE VALUES IN ACTION */}
            <section className="bg-white py-20 sm:py-24 border-y border-slate-200/60">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-5">
                            <SectionHeading
                                eyebrow="Our Operating Philosophy"
                                title="A culture defined by three clear words."
                                description="Whether analyzing a denial code, reviewing a physician dossier, or supporting a colleague, these principles shape our daily decisions."
                                align="left"
                            />
                            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
                                <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                                <span>Applied across all operational departments and client partnerships.</span>
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid gap-5">
                            {VALUES.map((val, idx) => (
                                <ScrollReveal key={val.title} delay={idx * 0.08}>
                                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition-all hover:bg-white hover:shadow-premium">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-bold text-navy-900">{val.title}</span>
                                            <span className="rounded-full bg-teal-100/70 px-3 py-1 text-xs font-semibold text-teal-800">
                                                {val.tag}
                                            </span>
                                        </div>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                            {val.description}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* OPEN POSITIONS SECTION */}
            <section id="open-roles" className="bg-slate-50 py-20 sm:py-28 scroll-mt-20">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Open Opportunities"
                        title="Find your place on our operational team."
                        description="Browse our active remote roles across credentialing, revenue cycle, clinical authorizations, and quality assurance."
                    />

                    {/* Department Filters */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                        {DEPARTMENTS.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDept(dept)}
                                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                                    selectedDept === dept
                                        ? "bg-navy-900 text-white shadow-sm"
                                        : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-navy-900"
                                }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>

                    {/* Roles Grid */}
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredRoles.map((role, idx) => (
                            <ScrollReveal key={role.id} delay={idx * 0.05}>
                                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-premium hover:border-teal-300 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">
                                                <Building2 className="h-3.5 w-3.5" />
                                                {role.department}
                                            </span>
                                            <span className="text-xs font-semibold text-slate-500">
                                                {role.experience}
                                            </span>
                                        </div>

                                        <h3 className="mt-4 text-xl font-bold leading-snug text-navy-900">
                                            {role.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                                            {role.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-xs text-slate-500">
                                            <span className="inline-flex items-center gap-1">
                                                <MapPin className="h-3.5 w-3.5 text-teal-600" />
                                                {role.location}
                                            </span>
                                            <span className="inline-flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5 text-teal-600" />
                                                {role.type}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-slate-600 font-medium">
                                                <Calendar className="h-3.5 w-3.5 text-teal-600" />
                                                Posted {role.postedAgo} ({role.postedDate})
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                                        <button
                                            onClick={() => handleOpenModal(role)}
                                            className="text-sm font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1 group"
                                        >
                                            View Details & Apply
                                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                        </button>
                                        <button
                                            onClick={() => handleOpenModal(role)}
                                            className="rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white hover:bg-navy-800 transition-colors"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {filteredRoles.length === 0 && (
                        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-12 text-center max-w-lg mx-auto">
                            <HelpCircle className="h-10 w-10 text-slate-400 mx-auto" />
                            <h3 className="mt-4 text-lg font-bold text-navy-900">No active postings in this category</h3>
                            <p className="mt-2 text-sm text-slate-600">
                                We are always looking for exceptional talent. Submit a general inquiry and we will keep
                                your profile active for upcoming openings.
                            </p>
                            <a
                                href="mailto:contact@marthsystems.com?subject=General%20Application%20Inquiry"
                                className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-teal-700"
                            >
                                Send Resume to contact@marthsystems.com
                            </a>
                        </div>
                    )}
                </div>
            </section>

            {/* HIRING PROCESS */}
            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Transparent & Respectful"
                        title="Our 4-step interview journey."
                        description="We know your time is valuable. Our hiring process is streamlined, respectful, and designed to give you an authentic look at life at Marth Systems."
                    />

                    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {HIRING_STEPS.map((h, idx) => (
                            <ScrollReveal key={h.step} delay={idx * 0.07}>
                                <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-extrabold text-teal-600/40 font-mono">
                                                {h.step}
                                            </span>
                                            <span className="rounded-full bg-white px-2.5 py-0.5 text-[0.7rem] font-semibold text-slate-600 shadow-xs border border-slate-200">
                                                {h.time}
                                            </span>
                                        </div>
                                        <h3 className="mt-4 text-lg font-bold text-navy-900">{h.title}</h3>
                                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                                            {h.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* GENERAL INQUIRIES & RESUME DROP */}
            <section className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 text-white">
                <div className="absolute inset-0 bg-grid-dark opacity-30" />
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />

                <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/20 bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-teal-300">
                        <Briefcase className="h-3.5 w-3.5" />
                        Don&apos;t see your specific role?
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
                        We provide services across the world and hire from everywhere.
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300 leading-relaxed">
                        We are a global team delivering healthcare operations to organizations worldwide. Whether you are an experienced credentialing specialist, medical coder, billing supervisor, or prior authorization coordinator, we welcome talented professionals from all countries. Send us your resume and a brief introduction.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:contact@marthsystems.com?subject=General%20Application%20%E2%80%94%20Marth%20Systems"
                            className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-navy-950 hover:bg-teal-400 transition-colors shadow-premium"
                        >
                            Email Resume to contact@marthsystems.com
                            <Send className="h-4 w-4" />
                        </a>
                        <button
                            onClick={() => handleCopyEmail("contact@marthsystems.com")}
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                        >
                            {copiedEmail ? (
                                <>
                                    <Check className="h-4 w-4 text-teal-400" />
                                    Email Copied to Clipboard
                                </>
                            ) : (
                                <>
                                    <Copy className="h-4 w-4 text-slate-300" />
                                    Copy Email Address
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </section>

            {/* ROLE DETAILS & APPLICATION MODAL */}
            {activeModalRole && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
                    onClick={handleCloseModal}
                >
                    <div
                        className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="bg-navy-900 px-6 sm:px-8 py-6 text-white relative">
                            <button
                                onClick={handleCloseModal}
                                className="absolute right-5 top-5 rounded-full p-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="h-5 w-5" />
                            </button>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 px-3 py-1 text-xs font-medium text-teal-300">
                                {activeModalRole.department}
                            </span>
                            <h2 className="mt-2 text-2xl sm:text-3xl font-bold leading-tight">
                                {activeModalRole.title}
                            </h2>
                            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                                <span className="inline-flex items-center gap-1">
                                    <MapPin className="h-3.5 w-3.5 text-teal-400" />
                                    {activeModalRole.location}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5 text-teal-400" />
                                    {activeModalRole.type}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                    <Briefcase className="h-3.5 w-3.5 text-teal-400" />
                                    {activeModalRole.experience}
                                </span>
                                <span className="inline-flex items-center gap-1 text-teal-200">
                                    <Calendar className="h-3.5 w-3.5 text-teal-400" />
                                    Posted {activeModalRole.postedAgo} ({activeModalRole.postedDate})
                                </span>
                            </div>
                        </div>

                        {/* Body - Scrollable */}
                        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-700">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                    Role Overview
                                </h3>
                                <p className="mt-2 text-base leading-relaxed text-slate-700">
                                    {activeModalRole.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                    Key Responsibilities
                                </h3>
                                <ul className="mt-3 space-y-2.5">
                                    {activeModalRole.responsibilities.map((r, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                                            <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                                            <span>{r}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                    Qualifications & Skills
                                </h3>
                                <ul className="mt-3 space-y-2.5">
                                    {activeModalRole.qualifications.map((q, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                                            <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                                            <span>{q}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Direct Application Form Generator */}
                            <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-6">
                                <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                                    <Send className="h-5 w-5 text-teal-700" />
                                    Quick Application via Email
                                </h3>
                                <p className="mt-1 text-xs text-slate-600">
                                    Fill in your details below to pre-populate an application email. You can attach your resume directly from your email client.
                                </p>

                                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={candidateName}
                                            onChange={(e) => setCandidateName(e.target.value)}
                                            placeholder="Jane Doe"
                                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            value={candidateEmail}
                                            onChange={(e) => setCandidateEmail(e.target.value)}
                                            placeholder="jane@example.com"
                                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={candidatePhone}
                                            onChange={(e) => setCandidatePhone(e.target.value)}
                                            placeholder="(555) 000-0000"
                                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Years in Healthcare Operations
                                        </label>
                                        <input
                                            type="text"
                                            value={candidateExperience}
                                            onChange={(e) => setCandidateExperience(e.target.value)}
                                            placeholder="e.g., 3 years"
                                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            LinkedIn / Online Profile (Optional)
                                        </label>
                                        <input
                                            type="url"
                                            value={candidateLinkedIn}
                                            onChange={(e) => setCandidateLinkedIn(e.target.value)}
                                            placeholder="https://linkedin.com/in/username"
                                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Brief Introduction / Relevant Experience
                                        </label>
                                        <textarea
                                            rows={3}
                                            value={candidateNote}
                                            onChange={(e) => setCandidateNote(e.target.value)}
                                            placeholder="Tell us briefly about your experience, EHR/clearinghouse systems you know, or certifications..."
                                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
                                    <a
                                        href={generateMailto(activeModalRole)}
                                        onClick={() =>
                                            trackEvent("career_apply_click", { role: activeModalRole.title })
                                        }
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 shadow-sm transition-colors"
                                    >
                                        Launch Application Email
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <span className="text-xs text-slate-500">
                                        Sends to <strong className="text-slate-800">contact@marthsystems.com</strong>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-slate-100 px-6 py-4 flex items-center justify-between border-t border-slate-200">
                            <span className="text-xs text-slate-500">
                                Marth Systems is an Equal Opportunity Employer.
                            </span>
                            <button
                                onClick={handleCloseModal}
                                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
