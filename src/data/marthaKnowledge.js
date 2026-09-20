/**
 * Martha Knowledge Base & Guided Service Navigator
 *
 * CLOSED-KNOWLEDGE LOCAL SYSTEM:
 * - Pre-populated guided service navigator with ZERO text input and NO free-form user entry.
 * - Operates entirely client-side with ZERO external AI APIs, keys, or external network requests.
 * - Contains ONLY factual information already present and approved on the Marth Systems website.
 * - In-memory state only (no DB, no localStorage, no message text sent to analytics or servers).
 */

export const INITIAL_GREETING = {
    text: "Hi, I'm Martha. 👋\n\nI'm the Marth Systems virtual assistant. I can help you explore our services and find the right place to start.",
    subtext: "What would you like to explore?",
};

export const PRIMARY_CONTACT_LINK = {
    text: "Request a Consultation",
    to: "/contact",
    isPrimary: true,
};

export const MARTHA_SERVICES = [
    {
        id: "credentialing",
        label: "Credentialing",
        route: "/credentialing",
        exploreLabel: "Explore Credentialing",
        questions: [
            {
                id: "cred-what-is",
                question: "What is credentialing?",
                answer: "Credentialing focuses on verifying provider qualifications and professional information — education, training, licensure, board certifications, and malpractice history — through primary sources and applicable screenings.",
                bullets: [
                    "Primary source verification directly with originating institutions",
                    "State medical license status, restrictions, and DEA checks",
                    "Board certification and medical education/fellowship verification",
                    "Federal and state sanction and exclusion database screening",
                ],
                note: "Credentialing timelines vary by payer, provider type, and completeness of documentation. We focus on accurate, complete submissions and consistent follow-up.",
            },
            {
                id: "cred-what-helps",
                question: "What does Marth Systems help with?",
                answer: "Marth Systems manages provider credentialing with accuracy and compliance in mind so your providers can see patients and bill without avoidable delays.",
                bullets: [
                    "Primary source verification and required screenings",
                    "Ongoing management and updating of CAQH profiles",
                    "Initial credentialing and recredentialing maintenance",
                    "Clear tracking so your team knows where each provider stands",
                ],
            },
            {
                id: "cred-how-works",
                question: "How does the credentialing process work?",
                answer: "Marth Systems follows a structured, repeatable six-stage credentialing workflow:",
                bullets: [
                    "1. Assess: Review provider roster, credentialing status, and payer gaps.",
                    "2. Verify: Complete primary source verification and screenings.",
                    "3. Prepare: Assemble complete applications and CAQH profiles.",
                    "4. Submit: Coordinate submissions to Medicare, Medicaid, and commercial payers.",
                    "5. Follow Up: Track applications and follow up with payers promptly.",
                    "6. Maintain: Monitor recredentialing cycles, revalidation, and CAQH updates.",
                ],
            },
            {
                id: "cred-what-next",
                question: "What should I do next?",
                answer: "Explore our credentialing services to see how we help practices maintain compliance, or request a consultation to discuss your provider roster.",
            },
        ],
    },
    {
        id: "provider-enrollment",
        label: "Provider Enrollment",
        route: "/provider-enrollment",
        exploreLabel: "Explore Provider Enrollment",
        secondaryLinks: [
            { text: "Explore Credentialing", to: "/credentialing" },
        ],
        questions: [
            {
                id: "enroll-what-is",
                question: "What is provider enrollment?",
                answer: "Provider enrollment focuses on establishing and maintaining participation with applicable payers and health plan networks — including Medicare, Medicaid, and commercial payers.",
                bullets: [
                    "Application preparation and submission support",
                    "Managing provider and organization administrative documentation",
                    "Structured payer follow-up on submitted enrollment applications",
                    "Tracking application status and pending information requests",
                ],
                note: "Enrollment requirements, processes, and decisions vary by payer and program. Marth Systems provides administrative and operational support — we do not approve, determine, or guarantee enrollment outcomes.",
            },
            {
                id: "enroll-vs-cred",
                question: "How is enrollment different from credentialing?",
                answer: "Credentialing and provider enrollment are connected parts of the provider-payer workflow, but they are not the same process:",
                bullets: [
                    "Credentialing focuses on verifying provider qualifications, training, licenses, and professional history.",
                    "Enrollment focuses on establishing or maintaining participation and billing privileges with applicable payers.",
                    "The two processes overlap operationally, and Marth Systems organizes both so handoffs don't break down.",
                ],
            },
            {
                id: "enroll-what-supports",
                question: "What does Marth Systems support?",
                answer: "We support the administrative workflow to help keep enrollment activities organized, visible, and moving.",
                bullets: [
                    "Initial enrollment support for applicable payers",
                    "Application preparation and submission coordination",
                    "Structured payer follow-up to resolve questions and avoid stalls",
                    "Enrollment status tracking across all pending items",
                    "Revalidation and re-enrollment maintenance where applicable",
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
        route: "/provider-contracting",
        exploreLabel: "Explore Provider Contracting",
        questions: [
            {
                id: "contract-what-is",
                question: "What is provider contracting?",
                answer: "Provider contracting involves organizing, coordinating, and maintaining formal participation agreements, rosters, and administrative documentation between healthcare providers and payers.",
                note: "Marth Systems provides administrative and operational support for contracting workflows. We are not a payer, we do not approve or execute contracts, and we do not provide legal services or advice.",
            },
            {
                id: "contract-what-support",
                question: "What contracting support do you provide?",
                answer: "Marth Systems helps organize the administrative workflow so contracting activities are easier to manage, track, and maintain.",
                bullets: [
                    "Organization and preparation of required administrative documentation",
                    "Provider roster and organization information management",
                    "Support for preparation and submission workflows where applicable",
                    "Payer coordination, correspondence follow-up, and status tracking",
                    "Ongoing contract maintenance and record organization",
                ],
            },
            {
                id: "contract-who-benefit",
                question: "Who can benefit from contracting support?",
                answer: "Any healthcare organization managing payer participation can benefit from a more organized administrative workflow:",
                bullets: [
                    "Medical practices",
                    "Healthcare organizations",
                    "Provider groups",
                    "Multi-provider organizations",
                    "Organizations managing multiple payer relationships",
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
        label: "Billing",
        route: "/billing",
        exploreLabel: "Explore Billing",
        questions: [
            {
                id: "billing-what-support",
                question: "What billing support do you provide?",
                answer: "Marth Systems manages the billing cycle from charge capture through payment posting and denial management with accurate claim preparation, consistent follow-up, and clear reporting.",
                bullets: [
                    "Structured charge capture workflows",
                    "Accurate claim preparation and timely submission",
                    "Consistent claim follow-up to confirm prompt processing",
                    "Structured denial management and root-cause rework",
                    "Payment posting, reconciliation, and transparent reporting",
                ],
                note: "Reimbursement depends on payer contracts, documentation, and factors outside any billing team's control. We don't promise guaranteed collections or reimbursement — we promise disciplined, transparent billing work.",
            },
            {
                id: "billing-workflow-involve",
                question: "What does the billing workflow involve?",
                answer: "Our billing support covers the fundamentals of a healthy revenue cycle across six core stages:",
                bullets: [
                    "1. Charge Capture: Complete and accurate capture of services.",
                    "2. Claim Preparation: Getting claims right the first time.",
                    "3. Timely Submission: Moving claims promptly through payer channels.",
                    "4. Claim Follow-up: Structured follow-up on outstanding claims.",
                    "5. Denial Management: Proactive review and rework of denials.",
                    "6. Payment Posting & Reporting: Accurate reconciliation and clear reporting.",
                ],
            },
            {
                id: "billing-who-benefit",
                question: "Who can benefit from billing support?",
                answer: "Medical practices and healthcare organizations that want disciplined claim submission, proactive denial handling, and transparent reporting without administrative overload.",
            },
            {
                id: "billing-what-next",
                question: "What should I do next?",
                answer: "Explore our billing workflow details or connect with our billing team to discuss your practice's revenue cycle.",
            },
        ],
    },
    {
        id: "ar-management",
        label: "AR Management",
        route: "/ar-management",
        exploreLabel: "Explore AR Management",
        questions: [
            {
                id: "ar-what-is",
                question: "What is AR management?",
                answer: "Accounts Receivable (AR) management brings structure to outstanding balances that quietly age when internal teams are stretched. We analyze, prioritize, and follow up on balances so they get worked instead of ignored.",
                note: "AR resolution depends on claim accuracy, payer behavior, and documentation. We don't guarantee specific recovery amounts — we provide consistent, well-tracked follow-up.",
            },
            {
                id: "ar-what-support",
                question: "What AR support do you provide?",
                answer: "Marth Systems covers the full scope of AR work across both insurance and patient balances:",
                bullets: [
                    "Structured analysis of AR by aging bucket",
                    "Insurance AR follow-up across commercial, Medicare, and Medicaid payers",
                    "Targeted follow-up on denied and underpaid claims",
                    "Direct payer communication to confirm status and resolve disputes",
                    "Patient balance workflows with clear, respectful communication",
                    "Regular reporting on aging trends and resolution progress",
                ],
            },
            {
                id: "ar-how-followup-works",
                question: "How does AR follow-up work?",
                answer: "We follow a repeatable, six-stage workflow that turns outstanding balances into tracked work:",
                bullets: [
                    "1. Analyze: Review AR aging to understand composition and age.",
                    "2. Categorize: Group balances by payer, age, and action required.",
                    "3. Prioritize: Focus effort on balances most likely to resolve.",
                    "4. Follow Up: Structured outreach with payers and patients.",
                    "5. Resolve: Work denials, underpayments, and disputes to resolution.",
                    "6. Report: Clear AR reporting on resolution progress.",
                ],
            },
            {
                id: "ar-what-next",
                question: "What should I do next?",
                answer: "Review our AR management process or request an evaluation of your current accounts receivable workflow.",
            },
        ],
    },
    {
        id: "prior-authorization",
        label: "Prior Authorization",
        route: "/prior-authorization",
        exploreLabel: "Explore Prior Authorization",
        questions: [
            {
                id: "pa-what-is",
                question: "What is prior authorization?",
                answer: "Prior authorization is an administrative requirement by health plans where specific services, procedures, or medications must receive prior payer approval before care is delivered.",
                note: "Authorization requirements vary by payer, plan, and clinical circumstances. Marth Systems provides administrative support; clinical decisions remain with the ordering provider and payer. We do not provide medical advice or payer-specific guarantees.",
            },
            {
                id: "pa-what-helps",
                question: "What does Marth Systems help with?",
                answer: "Marth Systems provides administrative support so your team isn't buried in authorization paperwork:",
                bullets: [
                    "Determining prior authorization requirements under patient plans",
                    "Coordinating clinical and administrative documentation",
                    "Preparing and submitting authorization requests to payers",
                    "Structured payer follow-up to confirm status and prompt decisions",
                    "Managing additional-information requests and tracking renewals",
                ],
            },
            {
                id: "pa-workflow-works",
                question: "How does the authorization workflow work?",
                answer: "We manage a clear, tracked path from order to determination:",
                bullets: [
                    "1. Order/Service: Service is ordered requiring prior authorization.",
                    "2. Coverage Check: Check patient coverage and plan rules.",
                    "3. Auth Requirement: Confirm whether authorization is required.",
                    "4. Documentation: Coordinate clinical notes and admin records.",
                    "5. Submission: Submit authorization request to the payer.",
                    "6. Payer Review & Follow-up: Follow up and address inquiries.",
                    "7. Decision & Tracking: Record approval/denial and monitor expiration.",
                ],
            },
            {
                id: "pa-what-next",
                question: "What should I do next?",
                answer: "Explore our prior authorization support scope or contact our team to discuss your practice's administrative authorization needs.",
            },
        ],
    },
    {
        id: "patient-support",
        label: "Patient Support",
        route: "/patient-support",
        exploreLabel: "Explore Patient Support",
        questions: [
            {
                id: "ps-what-services",
                question: "What patient support services do you provide?",
                answer: "Marth Systems provides administrative and operational patient support to handle inquiries, appointment communication, and billing questions so your clinical staff can focus on care.",
                note: "Marth Systems provides administrative and operational support only. We do not provide medical diagnosis, treatment, or clinical advice, and we do not request or process patient health information.",
            },
            {
                id: "ps-how-supports",
                question: "How can Marth Systems support patient-related workflows?",
                answer: "We provide front-office operational relief through timely, respectful administrative communication:",
                bullets: [
                    "Administrative support for patient inquiries routed to your practice",
                    "Appointment-related administrative coordination and reminders",
                    "Helping patients understand insurance information from an administrative perspective",
                    "Clear status communication and structured clinical escalation workflows",
                ],
            },
            {
                id: "ps-what-includes",
                question: "What does patient support include?",
                answer: "Our patient support covers the administrative communication lifecycle:",
                bullets: [
                    "Patient inquiry handling and documentation coordination",
                    "Appointment-related administrative communication",
                    "Administrative support for billing questions and balance inquiries",
                    "Structured escalation of issues that require clinical attention",
                    "Consistent follow-up communication to keep patients informed",
                ],
            },
            {
                id: "ps-what-next",
                question: "What should I do next?",
                answer: "Learn more about our administrative patient support services or talk to our support team about your practice's front-office needs.",
            },
        ],
    },
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
