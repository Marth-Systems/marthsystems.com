/**
 * Martha 2.0 — Intelligent Healthcare RCM & Credentialing Concierge
 *
 * PRIVACY-SAFE CLIENT-SIDE INTELLIGENCE ENGINE:
 * - Combines conversational natural-language intent matching, page-aware context suggestions,
 *   an interactive Bottleneck Diagnostic Recommender, and a structured Service Explorer.
 * - Operates 100% client-side with zero external API keys or third-party data transmission.
 * - Strictly grounded in verified Marth Systems operational capabilities and compliance standards.
 */

export const INITIAL_GREETING = {
    text: "Hi, I'm Martha — your Marth Systems AI Concierge.",
    subtext: "Ask me any question below, diagnose a workflow bottleneck, or explore our 7 core operational pillars.",
};

export const PRIMARY_CONTACT_LINK = {
    text: "Request a Consultation",
    to: "/contact",
    isPrimary: true,
};

/**
 * Interactive Bottleneck Diagnostic Scenarios ("Help Me Find the Right Solution")
 */
export const DIAGNOSTIC_SCENARIOS = [
    {
        id: "diag-onboarding",
        label: "Providers waiting 60–120+ days to get enrolled & bill",
        shortLabel: "Slow Provider Onboarding",
        recommendationTitle: "Credentialing + Provider Enrollment Integration",
        summary:
            "When provider onboarding stalls, the root cause is usually incomplete packets or disconnected handoffs between primary source verification and payer enrollment. We unify both into a single tracked pipeline.",
        metrics: ["99.2% First-Pass Packet Acceptance", "24h Payer Inquiry Response", "50-State Coverage"],
        recommendedServices: ["credentialing", "provider-enrollment"],
        primaryRoute: "/credentialing",
        primaryRouteLabel: "Explore Credentialing",
        secondaryRoute: "/provider-enrollment",
        secondaryRouteLabel: "Explore Enrollment",
    },
    {
        id: "diag-denials",
        label: "High claim denials or aging 60–90+ day AR balances",
        shortLabel: "Denials & Aging AR",
        recommendationTitle: "Full-Cycle Billing + Targeted AR Recovery",
        summary:
            "We pair pre-submission claim scrubbing (98.5% clean claim rate) with forensic AR segmentation and structured payer appeals so aging balances are actively worked to resolution.",
        metrics: ["98.5% Clean Claim Rate", "30–45% Denial Reduction", "Forensic 90+ Day AR Recovery"],
        recommendedServices: ["billing", "ar-management"],
        primaryRoute: "/ar-management",
        primaryRouteLabel: "Explore AR Management",
        secondaryRoute: "/billing",
        secondaryRouteLabel: "Explore Billing",
    },
    {
        id: "diag-admin-overload",
        label: "Clinical staff buried in prior auths & patient calls",
        shortLabel: "Prior Auth & Front-Office Overload",
        recommendationTitle: "Prior Authorization + Patient Support Pods",
        summary:
            "Our dedicated administrative pods offload payer determination checks, clinical packet assembly, status follow-ups, and patient billing/scheduling inquiries so your clinical staff can focus on care.",
        metrics: ["< 24h Urgent Auth Submission", "100% Tracked Renewals", "HIPAA-Compliant Front Desk Relief"],
        recommendedServices: ["prior-authorization", "patient-support"],
        primaryRoute: "/prior-authorization",
        primaryRouteLabel: "Explore Prior Auth",
        secondaryRoute: "/patient-support",
        secondaryRouteLabel: "Explore Patient Support",
    },
    {
        id: "diag-contracts",
        label: "Expanding to new payers, states, or managing agreements",
        shortLabel: "Payer Contracting & Expansion",
        recommendationTitle: "Provider Contracting & Roster Lifecycle Governance",
        summary:
            "We organize payer participation agreements, demographic rosters, fee schedule alignment records, and multi-tin/multi-location updates in one centralized repository.",
        metrics: ["Centralized Agreement Matrix", "Multi-State & Multi-TIN Ready", "Proactive Renewal Tracking"],
        recommendedServices: ["provider-contracting", "provider-enrollment"],
        primaryRoute: "/provider-contracting",
        primaryRouteLabel: "Explore Contracting",
        secondaryRoute: "/provider-enrollment",
        secondaryRouteLabel: "Explore Enrollment",
    },
];

/**
 * Page-aware context tips based on current URL pathname
 */
export const PAGE_CONTEXT_TIPS = {
    "/": {
        badge: "Homepage Overview",
        prompt: "Want help diagnosing which RCM or credentialing workflow will create the fastest ROI for your practice?",
        suggestedServiceId: "credentialing",
        quickActionLabel: "Run Bottleneck Finder",
        quickActionMode: "diagnose",
    },
    "/credentialing": {
        badge: "Viewing Credentialing",
        prompt: "Ask me about CAQH ProView management, primary source verification, or our 6-stage credentialing lifecycle.",
        suggestedServiceId: "credentialing",
    },
    "/provider-enrollment": {
        badge: "Viewing Provider Enrollment",
        prompt: "Curious how PECOS, state Medicaid, and commercial payer enrollment differ from credentialing?",
        suggestedServiceId: "provider-enrollment",
    },
    "/provider-contracting": {
        badge: "Viewing Provider Contracting",
        prompt: "Ask how we organize payer participation agreements, group rosters, and contract lifecycle tracking.",
        suggestedServiceId: "provider-contracting",
    },
    "/billing": {
        badge: "Viewing Medical Billing",
        prompt: "Ask about our 98.5% clean claim rate, 24-hour charge lag SLA, or coding & denial prevention.",
        suggestedServiceId: "billing",
    },
    "/ar-management": {
        badge: "Viewing AR Management",
        prompt: "Ask how we segment 30/60/90/120+ day aging buckets and appeal underpaid or denied claims.",
        suggestedServiceId: "ar-management",
    },
    "/prior-authorization": {
        badge: "Viewing Prior Authorization",
        prompt: "Ask how our 8-stage authorization workflow prevents same-day procedure cancellations.",
        suggestedServiceId: "prior-authorization",
    },
    "/patient-support": {
        badge: "Viewing Patient Support",
        prompt: "Ask how we handle patient billing questions, scheduling coordination, and clinical escalation.",
        suggestedServiceId: "patient-support",
    },
    "/careers": {
        badge: "Viewing Careers",
        prompt: "Looking to join Marth Systems? Ask me about open RCM & credentialing roles or our application process.",
        suggestedQuery: "careers",
    },
    "/contact": {
        badge: "Viewing Contact",
        prompt: "Ready to connect? You can submit the consultation form on this page or call us at (609) 337-4723.",
        suggestedQuery: "contact",
    },
};

export const MARTHA_SERVICES = [
    {
        id: "credentialing",
        label: "Credentialing",
        tagline: "Primary source verification, CAQH & re-credentialing",
        benchmark: "99.2% First-Pass",
        route: "/credentialing",
        exploreLabel: "Explore Credentialing",
        keywords: ["credentialing", "caqh", "proview", "license", "dea", "board certification", "npdb", "oig", "sam", "recredentialing", "primary source", "verification", "onboarding"],
        questions: [
            {
                id: "cred-what-is",
                question: "What is credentialing?",
                answer: "Credentialing focuses on verifying provider qualifications and professional information — education, training, licensure, board certifications, and malpractice history — through primary sources and applicable screenings.",
                bullets: [
                    "Primary source verification directly with originating institutions",
                    "State medical license status, restrictions, and DEA checks",
                    "Board certification and medical education/fellowship verification",
                    "Federal and state sanction and exclusion database screening (NPDB, OIG, SAM)",
                ],
                note: "Credentialing timelines vary by payer, provider type, and completeness of documentation. We focus on 99.2% first-pass packet accuracy and relentless follow-up.",
            },
            {
                id: "cred-what-helps",
                question: "What does Marth Systems help with?",
                answer: "Marth Systems manages provider credentialing with accuracy and compliance in mind so your providers can see patients and bill without avoidable delays.",
                bullets: [
                    "Primary source verification and required sanction screenings",
                    "Ongoing management and quarterly re-attestation of CAQH ProView profiles",
                    "Initial credentialing and 36-month recredentialing maintenance",
                    "Real-time roster tracking so your leadership knows where every provider stands",
                ],
            },
            {
                id: "cred-how-works",
                question: "How does the credentialing process work?",
                answer: "Marth Systems follows a structured, repeatable six-stage credentialing workflow:",
                bullets: [
                    "1. Assess: Review provider roster, credentialing status, and payer gaps.",
                    "2. Verify: Complete primary source verification and compliance screenings.",
                    "3. Prepare: Assemble complete applications and audit CAQH profiles.",
                    "4. Submit: Coordinate submissions to Medicare, Medicaid, and commercial payers.",
                    "5. Follow Up: Track applications on a structured cadence and resolve payer inquiries within 24h.",
                    "6. Maintain: Monitor recredentialing cycles, license expirations, and CAQH re-attestations.",
                ],
            },
            {
                id: "cred-what-next",
                question: "What should I do next?",
                answer: "Explore our credentialing services to see how we help practices maintain compliance, or request a consultation for a free audit of your provider roster.",
            },
        ],
    },
    {
        id: "provider-enrollment",
        label: "Provider Enrollment",
        tagline: "Medicare PECOS, Medicaid & commercial network setup",
        benchmark: "50-State Coverage",
        route: "/provider-enrollment",
        exploreLabel: "Explore Provider Enrollment",
        keywords: ["enrollment", "pecos", "medicare", "medicaid", "commercial payer", "network", "era", "eft", "revalidation", "nppes", "npi", "billing privileges", "in-network"],
        secondaryLinks: [
            { text: "Explore Credentialing", to: "/credentialing" },
        ],
        questions: [
            {
                id: "enroll-what-is",
                question: "What is provider enrollment?",
                answer: "Provider enrollment focuses on establishing and maintaining participation and billing privileges with applicable payers and health plan networks — including Medicare (PECOS), state Medicaid portals, and commercial payers.",
                bullets: [
                    "Application preparation, CMS-855 / PECOS, and commercial submission support",
                    "Managing provider, group TIN, and facility administrative documentation",
                    "Structured payer follow-up on submitted enrollment applications",
                    " Coordinating ERA/EFT electronic linkage and effective dates",
                ],
                note: "Enrollment requirements, processes, and decisions vary by payer and program. Marth Systems provides administrative and operational support — we do not approve, determine, or guarantee enrollment outcomes.",
            },
            {
                id: "enroll-vs-cred",
                question: "How is enrollment different from credentialing?",
                answer: "Credentialing and provider enrollment are connected parts of the provider-payer workflow, but they serve distinct operational roles:",
                bullets: [
                    "Credentialing verifies a provider's clinical qualifications, licenses, training, and compliance history.",
                    "Enrollment links that verified provider to specific health plan networks, group TINs, and EDI/ERA billing systems.",
                    "Marth Systems unifies both workflows so handoffs between verification and network activation never stall.",
                ],
            },
            {
                id: "enroll-what-supports",
                question: "What does Marth Systems support?",
                answer: "We support the end-to-end administrative workflow to keep enrollment activities organized, visible, and moving forward.",
                bullets: [
                    "Initial Medicare, Medicaid, and commercial payer enrollment",
                    "Group linkage, new location additions, and TIN transitions",
                    "Structured payer follow-up to resolve deficiency letters before packets close",
                    "Medicare & Medicaid 3–5 year revalidation and re-enrollment maintenance",
                ],
            },
            {
                id: "enroll-what-next",
                question: "What should I do next?",
                answer: "Review our complete enrollment support workflow or speak with our team about your practice's payer enrollment needs.",
            },
        ],
    },
    {
        id: "provider-contracting",
        label: "Provider Contracting",
        tagline: "Payer participation agreements & roster governance",
        benchmark: "100% Roster Visibility",
        route: "/provider-contracting",
        exploreLabel: "Explore Provider Contracting",
        keywords: ["contracting", "contracts", "agreement", "participation", "fee schedule", "amendment", "roster", "tin", "multi-site", "demographics"],
        questions: [
            {
                id: "contract-what-is",
                question: "What is provider contracting?",
                answer: "Provider contracting involves organizing, coordinating, and maintaining formal participation agreements, group rosters, and administrative documentation between healthcare providers and payers.",
                note: "Marth Systems provides administrative and operational support for contracting workflows. We are not a payer, we do not approve or execute contracts, and we do not provide legal services or advice.",
            },
            {
                id: "contract-what-support",
                question: "What contracting support do you provide?",
                answer: "Marth Systems organizes the administrative workflow so payer agreements and roster changes are easy to manage, track, and maintain.",
                bullets: [
                    "Organization and preparation of required contracting documentation",
                    "Provider roster, Tax ID (TIN), and service location demographic management",
                    "Support for agreement preparation and payer submission workflows",
                    "Payer correspondence follow-up and active status tracking",
                    "Ongoing contract repository maintenance and renewal calendar tracking",
                ],
            },
            {
                id: "contract-who-benefit",
                question: "Who can benefit from contracting support?",
                answer: "Any healthcare organization managing multiple payer relationships can benefit from centralized contract visibility:",
                bullets: [
                    "Independent and growing medical practices",
                    "Multi-specialty provider groups and MSOs",
                    "Outpatient surgical centers, labs, and behavioral health groups",
                    "Organizations adding new service locations or acquiring practices",
                ],
            },
            {
                id: "contract-what-next",
                question: "What should I do next?",
                answer: "Learn more about our contracting visibility support or request a consultation to discuss your organization's contracting workflow.",
            },
        ],
    },
    {
        id: "billing",
        label: "Medical Billing",
        tagline: "Charge capture, scrubbing, claims & payment posting",
        benchmark: "98.5% Clean Claims",
        route: "/billing",
        exploreLabel: "Explore Billing",
        keywords: ["billing", "claims", "charge capture", "coding", "cpt", "icd-10", "modifier", "scrubbing", "era", "eob", "payment posting", "reconciliation", "clean claim", "revenue cycle", "rcm"],
        questions: [
            {
                id: "billing-what-support",
                question: "What billing support do you provide?",
                answer: "Marth Systems manages the billing lifecycle from charge capture through payment posting and denial prevention with 98.5% clean claim accuracy, consistent follow-up, and transparent analytics.",
                bullets: [
                    "Structured charge capture & coding validation (< 24h charge entry SLA)",
                    "Multi-layer claim scrubbing for NCCI edits, modifiers, and payer rules",
                    "Daily electronic claim submission (EDI 837P / 837I) and clearinghouse monitoring",
                    "Proactive denial rework and root-cause prevention",
                    "Automated ERA/EOB payment posting and penny-accurate reconciliation",
                ],
                note: "Reimbursement depends on payer contracts, documentation, and factors outside any billing team's control. We don't promise guaranteed collections — we deliver disciplined, transparent billing execution.",
            },
            {
                id: "billing-workflow-involve",
                question: "What does the billing workflow involve?",
                answer: "Our billing support covers the six core stages of a high-performing revenue cycle:",
                bullets: [
                    "1. Charge Capture: Complete, timely capture of billable encounters.",
                    "2. Claim Scrubbing: Validating CPT/ICD-10 coding, modifiers, and payer rules.",
                    "3. Timely Submission: Daily EDI transmission and clearinghouse tracking.",
                    "4. Claim Follow-Up: Proactive tracking before claims hit aging buckets.",
                    "5. Denial Management: Rapid root-cause correction and formal appeals.",
                    "6. Payment Posting & Reporting: Daily ERA reconciliation and executive dashboards.",
                ],
            },
            {
                id: "billing-who-benefit",
                question: "Who can benefit from billing support?",
                answer: "Single-specialty practices, multi-provider groups, and healthcare facilities across 40+ specialties seeking cleaner claims, faster cash velocity, and zero administrative blind spots.",
            },
            {
                id: "billing-what-next",
                question: "What should I do next?",
                answer: "Explore our billing workflow details or connect with our billing specialists for a revenue cycle assessment.",
            },
        ],
    },
    {
        id: "ar-management",
        label: "AR Management",
        tagline: "Aging bucket triage, denial appeals & recovery",
        benchmark: "30–45% Denial Reduction",
        route: "/ar-management",
        exploreLabel: "Explore AR Management",
        keywords: ["ar", "accounts receivable", "aging", "denials", "appeals", "underpaid", "recovery", "write-off", "timely filing", "90 days", "collections", "collections follow-up"],
        questions: [
            {
                id: "ar-what-is",
                question: "What is AR management?",
                answer: "Accounts Receivable (AR) management brings forensic structure to outstanding insurance and patient balances that quietly age past 60, 90, and 120+ days. We segment, prioritize, and relentlessly follow up on claims so earned revenue isn't written off.",
                note: "AR resolution depends on claim accuracy, timely filing windows, and documentation. We provide disciplined, transparent follow-up across every aging bucket.",
            },
            {
                id: "ar-what-support",
                question: "What AR support do you provide?",
                answer: "Marth Systems covers the full scope of AR recovery across both insurance payers and patient balances:",
                bullets: [
                    "Forensic analysis of AR by aging bucket (30 / 60 / 90 / 120+ days)",
                    "High-touch insurance AR follow-up across commercial, Medicare, and Medicaid",
                    "Clinical and administrative appeal drafting for denied and underpaid claims",
                    "Direct payer representative outreach to resolve stalled adjudications",
                    "Respectful patient balance workflows and statement coordination",
                    "Executive reporting on net collection velocity and aging reduction",
                ],
            },
            {
                id: "ar-how-followup-works",
                question: "How does AR follow-up work?",
                answer: "We execute a repeatable six-stage recovery workflow:",
                bullets: [
                    "1. Analyze: Audit AR aging by payer, CARC/RARC denial code, and dollar value.",
                    "2. Categorize: Group balances by collectability and root cause.",
                    "3. Prioritize: Target high-value claims and approaching timely-filing deadlines first.",
                    "4. Follow Up: Direct payer portal and phone outreach.",
                    "5. Resolve: Submit corrected claims, clinical appeals, and underpayment disputes.",
                    "6. Report: Track aging reduction and feed insights back to front-end billing.",
                ],
            },
            {
                id: "ar-what-next",
                question: "What should I do next?",
                answer: "Review our AR management process or request an evaluation of your current accounts receivable aging report.",
            },
        ],
    },
    {
        id: "prior-authorization",
        label: "Prior Authorization",
        tagline: "Eligibility checks, clinical packets & urgent tracking",
        benchmark: "< 24h Urgent Auth SLA",
        route: "/prior-authorization",
        exploreLabel: "Explore Prior Authorization",
        keywords: ["prior auth", "authorization", "pre-auth", "precertification", "eligibility", "benefits", "medical necessity", "peer to peer", "cancellation", "surgery", "imaging"],
        questions: [
            {
                id: "pa-what-is",
                question: "What is prior authorization?",
                answer: "Prior authorization is a health plan requirement where specific procedures, imaging studies, medications, or durable medical equipment must receive payer approval before care is rendered.",
                note: "Authorization requirements vary by payer, plan, and clinical circumstances. Marth Systems provides administrative support; clinical decisions remain with the ordering provider and payer.",
            },
            {
                id: "pa-what-helps",
                question: "What does Marth Systems help with?",
                answer: "Marth Systems acts as a dedicated prior authorization desk so your nurses and front-desk staff aren't stuck on payer portals:",
                bullets: [
                    "Real-time benefit verification and CPT/HCPCS authorization rule lookup",
                    "Clinical packet assembly using provider chart notes and payer checklists",
                    "Rapid electronic and portal submission (< 24h turnaround on urgent orders)",
                    "Structured payer follow-up and additional-information (pend) resolution",
                    "Proactive tracking of approval numbers, unit limits, and expiration dates",
                ],
            },
            {
                id: "pa-workflow-works",
                question: "How does the authorization workflow work?",
                answer: "We manage a transparent path from provider order to payer determination:",
                bullets: [
                    "1. Order Intake: Procedure or service order is flagged in EHR.",
                    "2. Coverage Verification: Verify active eligibility and plan rules.",
                    "3. Requirement Determination: Confirm CPT/diagnosis auth triggers.",
                    "4. Clinical Packaging: Compile supporting chart notes and labs.",
                    "5. Portal Submission: Submit clean request via payer portal/EDI.",
                    "6. Payer Follow-Up: Track review and schedule peer-to-peer if needed.",
                    "7. Determination & Sync: Log auth number and expiration in EHR.",
                ],
            },
            {
                id: "pa-what-next",
                question: "What should I do next?",
                answer: "Explore our prior authorization support scope or contact our team to offload your authorization volume.",
            },
        ],
    },
    {
        id: "patient-support",
        label: "Patient Support",
        tagline: "Inbound inquiries, scheduling & billing communication",
        benchmark: "Zero Front-Desk Bottlenecks",
        route: "/patient-support",
        exploreLabel: "Explore Patient Support",
        keywords: ["patient support", "call center", "scheduling", "appointments", "patient billing", "statements", "front desk", "inquiries", "patient calls"],
        questions: [
            {
                id: "ps-what-services",
                question: "What patient support services do you provide?",
                answer: "Marth Systems provides empathetic, HIPAA-compliant administrative patient support to handle inbound inquiries, appointment coordination, and statement questions so your on-site staff can focus on patients in the clinic.",
                note: "Marth Systems provides administrative and operational support only. We do not provide medical diagnosis, treatment, or clinical advice.",
            },
            {
                id: "ps-how-supports",
                question: "How can Marth Systems support patient-related workflows?",
                answer: "We extend your front office through structured, respectful communication:",
                bullets: [
                    "Dedicated handling of inbound patient administrative inquiries",
                    "Appointment scheduling, rescheduling, and pre-visit reminders",
                    "Clear, empathetic explanation of EOBs, copays, and patient statements",
                    "Documented clinical escalation protocols for medical questions",
                ],
            },
            {
                id: "ps-what-includes",
                question: "What does patient support include?",
                answer: "Our patient support covers the full administrative communication lifecycle:",
                bullets: [
                    "Multi-channel patient inquiry handling and EHR documentation",
                    "Appointment confirmation and no-show reduction outreach",
                    "Patient balance resolution and payment plan administrative support",
                    "Immediate warm escalation of clinical matters to your care team",
                ],
            },
            {
                id: "ps-what-next",
                question: "What should I do next?",
                answer: "Learn more about our administrative patient support services or talk to our team about relieving your front-office call volume.",
            },
        ],
    },
];

/**
 * General Company & Operational FAQs for Natural Language Queries
 */
export const GENERAL_INTENTS = [
    {
        id: "intent-contact",
        keywords: ["contact", "phone", "call", "email", "address", "location", "reach", "talk to human", "consultation", "quote", "pricing", "cost", "demo", "schedule"],
        title: "Connect with Marth Systems",
        answer: "You can reach our team directly by phone, email, or through our consultation form. We typically respond within 1 business day.",
        bullets: [
            "Phone: (609) 337-4723 (Mon – Fri, 9:00 AM – 5:00 PM EST)",
            "Email: info@marthsystems.com",
            "Headquarters: 252 Nassau St, Floor 2, Princeton, NJ 08542",
        ],
        route: "/contact",
        routeLabel: "Open Consultation Form",
    },
    {
        id: "intent-careers",
        keywords: ["career", "careers", "job", "jobs", "hiring", "work", "apply", "resume", "openings", "position", "remote", "hr"],
        title: "Careers at Marth Systems",
        answer: "We're growing across Credentialing, Provider Enrollment, Medical Billing, AR Recovery, and Prior Authorization! You can view our open remote & hybrid roles and submit your resume directly online.",
        bullets: [
            "Open roles in Credentialing, Enrollment, Medical Coding, AR, and Prior Auth",
            "Direct online application with resume upload on our Careers page",
            "Competitive compensation and structured career growth paths",
        ],
        route: "/careers",
        routeLabel: "View Open Positions",
    },
    {
        id: "intent-about",
        keywords: ["about", "who are you", "company", "marth systems", "hipaa", "security", "specialties", "ehr", "states", "benchmarks"],
        title: "About Marth Systems",
        answer: "Marth Systems is a specialized healthcare revenue cycle and provider lifecycle operations partner based in Princeton, NJ, supporting healthcare organizations across all 50 states and 40+ medical specialties.",
        bullets: [
            "98.5% Clean Claim Rate & 99.2% First-Pass Credentialing Acceptance",
            "100% HIPAA-Compliant workflows working directly inside your existing EHR/PM",
            "Dedicated account pods with < 24h SLA on payer and client inquiries",
        ],
        route: "/about",
        routeLabel: "Explore About Us",
    },
    {
        id: "intent-resources",
        keywords: ["blog", "resources", "checklist", "guide", "articles", "playbook", "read", "learn"],
        title: "RCM & Credentialing Resource Hub",
        answer: "We publish practical playbooks, checklists, and articles covering credentialing timelines, CAQH attestation, denial reduction, and prior authorization workflows.",
        bullets: [
            "Step-by-step Credentialing & Enrollment Checklists",
            "AR Aging & Denial Prevention Playbooks",
            "In-depth Healthcare Operations Blog",
        ],
        route: "/resources",
        routeLabel: "Browse Resource Hub",
        secondaryRoute: "/blog",
        secondaryRouteLabel: "Read Our Blog",
    },
];

/**
 * Quick starter prompts displayed in the conversational view
 */
export const QUICK_PROMPTS = [
    { label: "Diagnose my bottleneck", mode: "diagnose" },
    { label: "Credentialing vs. Enrollment?", query: "How is enrollment different from credentialing?" },
    { label: "How do you reduce denials & AR?", query: "What AR support do you provide?" },
    { label: "Prior auth turnaround time?", query: "What does Marth Systems help with for prior authorization?" },
    { label: "Pricing & consultation", query: "How do I request a consultation or contact you?" },
];

/**
 * Helper to find a service by ID.
 */
export function getServiceById(serviceId) {
    return MARTHA_SERVICES.find((s) => s.id === serviceId) || null;
}

/**
 * Helper to find a specific question within a service.
 */
export function getQuestionById(serviceId, questionId) {
    const service = getServiceById(serviceId);
    if (!service) return null;
    return service.questions.find((q) => q.id === questionId) || null;
}

/**
 * Client-side Semantic Intent & Keyword Search Engine
 * Matches free-text user queries to the most relevant specific Q&A, Service, or General Intent.
 */
export function findSmartMarthaAnswer(rawQuery) {
    if (!rawQuery || typeof rawQuery !== "string") return null;
    const q = rawQuery.toLowerCase().trim();
    if (!q) return null;

    const tokens = q.split(/[^a-z0-9-]+/).filter((t) => t.length >= 2);

    // Special check for "difference between credentialing and enrollment"
    if (
        (q.includes("credential") && q.includes("enroll")) ||
        (q.includes("difference") && (q.includes("credential") || q.includes("enroll")))
    ) {
        const enrollService = getServiceById("provider-enrollment");
        const diffQ = getQuestionById("provider-enrollment", "enroll-vs-cred");
        if (enrollService && diffQ) {
            return {
                type: "question",
                title: diffQ.question,
                answer: diffQ.answer,
                bullets: diffQ.bullets,
                note: diffQ.note,
                benchmark: enrollService.benchmark,
                route: enrollService.route,
                routeLabel: enrollService.exploreLabel,
                serviceId: enrollService.id,
            };
        }
    }

    // 1. Score all specific questions across all 7 services
    let bestQuestionMatch = null;
    let bestQuestionScore = 0;

    for (const service of MARTHA_SERVICES) {
        const serviceKeywordHits = (service.keywords || []).reduce(
            (acc, kw) => (q.includes(kw.toLowerCase()) ? acc + 3 : acc),
            0
        );

        for (const item of service.questions) {
            let score = serviceKeywordHits;
            const hayQuestion = item.question.toLowerCase();
            const hayAnswer = item.answer.toLowerCase();
            const hayBullets = (item.bullets || []).join(" ").toLowerCase();

            if (hayQuestion === q) score += 25;
            if (hayQuestion.includes(q)) score += 12;

            for (const tok of tokens) {
                if (["what", "how", "does", "the", "for", "with", "you", "your", "can", "who", "and", "are"].includes(tok)) {
                    continue;
                }
                if (hayQuestion.includes(tok)) score += 4;
                if (hayAnswer.includes(tok)) score += 2;
                if (hayBullets.includes(tok)) score += 1.5;
            }

            if (score > bestQuestionScore) {
                bestQuestionScore = score;
                bestQuestionMatch = {
                    type: "question",
                    title: `${service.label}: ${item.question}`,
                    answer: item.answer,
                    bullets: item.bullets,
                    note: item.note,
                    benchmark: service.benchmark,
                    route: service.route,
                    routeLabel: service.exploreLabel,
                    serviceId: service.id,
                };
            }
        }
    }

    // 2. Score General Intents (Contact, Careers, About, Resources)
    let bestGeneralMatch = null;
    let bestGeneralScore = 0;

    for (const intent of GENERAL_INTENTS) {
        let score = 0;
        for (const kw of intent.keywords) {
            if (q.includes(kw)) score += 5;
        }
        for (const tok of tokens) {
            if (intent.keywords.includes(tok)) score += 4;
        }
        if (score > bestGeneralScore) {
            bestGeneralScore = score;
            bestGeneralMatch = {
                type: "general",
                title: intent.title,
                answer: intent.answer,
                bullets: intent.bullets,
                route: intent.route,
                routeLabel: intent.routeLabel,
                secondaryRoute: intent.secondaryRoute,
                secondaryRouteLabel: intent.secondaryRouteLabel,
            };
        }
    }

    if (bestGeneralScore >= 5 && bestGeneralScore >= bestQuestionScore) {
        return bestGeneralMatch;
    }

    if (bestQuestionScore >= 3) {
        return bestQuestionMatch;
    }

    // 3. Fallback with helpful guided options
    return {
        type: "fallback",
        title: "Here is how Marth Systems can help",
        answer:
            "I specialize in Marth Systems' 7 healthcare operations pillars — Credentialing, Provider Enrollment, Provider Contracting, Medical Billing, AR Management, Prior Authorization, and Patient Support.",
        bullets: [
            "98.5% Clean Claim Rate & 99.2% First-Pass Credentialing Acceptance",
            "Use the 'Diagnose' tab above to match your practice bottleneck in 1 click",
            "Or connect directly with our operations team at (609) 337-4723",
        ],
        route: "/contact",
        routeLabel: "Request a Consultation",
    };
}
