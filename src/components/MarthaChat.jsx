import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
    MessageSquare,
    X,
    RotateCcw,
    ArrowRight,
    ExternalLink,
    Bot,
    ChevronRight,
    ArrowLeft,
} from "lucide-react";
import {
    INITIAL_GREETING,
    PRIMARY_CONTACT_LINK,
    MARTHA_SERVICES,
    getServiceById,
    getQuestionById,
} from "@/data/marthaKnowledge";
import { trackEvent } from "@/lib/analytics";

export default function MarthaChat() {
    const [isOpen, setIsOpen] = useState(false);
    // Navigation state: null = main services menu; string = serviceId
    const [currentServiceId, setCurrentServiceId] = useState(null);
    // Question state: null = questions menu for service; string = questionId
    const [currentQuestionId, setCurrentQuestionId] = useState(null);

    const shouldReduceMotion = useReducedMotion();
    const launcherRef = useRef(null);
    const panelContentRef = useRef(null);

    // Escape key closes panel
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
                launcherRef.current?.focus();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    // Focus panel on open
    useEffect(() => {
        if (isOpen && panelContentRef.current) {
            panelContentRef.current.scrollTop = 0;
        }
    }, [isOpen, currentServiceId, currentQuestionId]);

    const handleOpen = () => {
        setIsOpen(true);
        trackEvent("martha_opened");
    };

    const handleClose = () => {
        setIsOpen(false);
        // Reset navigation state when closed
        setCurrentServiceId(null);
        setCurrentQuestionId(null);
        launcherRef.current?.focus();
    };

    const handleReset = () => {
        setCurrentServiceId(null);
        setCurrentQuestionId(null);
        if (panelContentRef.current) {
            panelContentRef.current.scrollTop = 0;
        }
    };

    const handleSelectService = (serviceId) => {
        setCurrentServiceId(serviceId);
        setCurrentQuestionId(null);
        trackEvent("martha_service_selected", { service: serviceId });
        if (panelContentRef.current) {
            panelContentRef.current.scrollTop = 0;
        }
    };

    const handleSelectQuestion = (serviceId, questionId) => {
        setCurrentQuestionId(questionId);
        trackEvent("martha_question_selected", { service: serviceId, question: questionId });
        if (panelContentRef.current) {
            panelContentRef.current.scrollTop = 0;
        }
    };

    const handleBackToServices = () => {
        setCurrentServiceId(null);
        setCurrentQuestionId(null);
        if (panelContentRef.current) {
            panelContentRef.current.scrollTop = 0;
        }
    };

    const handleBackToQuestions = () => {
        setCurrentQuestionId(null);
        if (panelContentRef.current) {
            panelContentRef.current.scrollTop = 0;
        }
    };

    const selectedService = currentServiceId ? getServiceById(currentServiceId) : null;
    const selectedQuestion = currentServiceId && currentQuestionId ? getQuestionById(currentServiceId, currentQuestionId) : null;

    const panelAnimation = shouldReduceMotion
        ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 } }
        : {
              initial: { opacity: 0, y: 16, scale: 0.96 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: 16, scale: 0.96 },
              transition: { duration: 0.2, ease: "easeOut" },
          };

    return (
        <aside aria-label="Marth Systems Virtual Assistant">
            {/* Chat Dialog Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        role="dialog"
                        aria-modal="false"
                        aria-labelledby="martha-panel-title"
                        {...panelAnimation}
                        className="fixed bottom-20 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-24 z-50 flex h-[min(580px,calc(100vh-6.5rem))] w-auto sm:w-[390px] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-2xl backdrop-blur-md"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-slate-200 bg-navy-900 px-4 py-3.5 text-white">
                            <div className="flex items-center gap-3">
                                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-navy-950 font-semibold shadow-sm">
                                    <Bot className="h-5 w-5" />
                                    <span
                                        className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-navy-900 bg-emerald-400"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div>
                                    <h2 id="martha-panel-title" className="text-sm font-bold tracking-tight text-white leading-none">
                                        Martha
                                    </h2>
                                    <p className="mt-1 text-[11px] font-medium text-teal-300 leading-none">
                                        Marth Systems Virtual Assistant
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                {(currentServiceId !== null || currentQuestionId !== null) && (
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        title="Start over"
                                        aria-label="Start over"
                                        className="rounded-lg p-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                                    >
                                        <RotateCcw className="h-4 w-4" />
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    title="Close Martha"
                                    aria-label="Close Martha assistant"
                                    className="rounded-lg p-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Guided Navigator Body */}
                        <div
                            ref={panelContentRef}
                            className="flex-1 overflow-y-auto px-4 py-4 text-xs sm:text-sm"
                        >
                            {/* LEVEL 1: MAIN SERVICES LIST */}
                            {!selectedService && (
                                <div className="space-y-4">
                                    {/* Martha Greeting */}
                                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-3.5 text-navy-950 shadow-sm">
                                        <p className="whitespace-pre-line leading-relaxed">{INITIAL_GREETING.text}</p>
                                        <p className="mt-2.5 font-semibold text-teal-800">{INITIAL_GREETING.subtext}</p>
                                    </div>

                                    {/* Primary Service Categories List */}
                                    <div className="space-y-2">
                                        {MARTHA_SERVICES.map((service) => (
                                            <button
                                                key={service.id}
                                                type="button"
                                                onClick={() => handleSelectService(service.id)}
                                                className="group flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left font-medium text-navy-900 shadow-sm transition-all hover:border-teal-400 hover:bg-teal-50/50 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                                            >
                                                <span>{service.label}</span>
                                                <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-600" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* LEVEL 2: SERVICE QUESTIONS LIST */}
                            {selectedService && !selectedQuestion && (
                                <div className="space-y-4">
                                    {/* Back to Services Navigation */}
                                    <button
                                        type="button"
                                        onClick={handleBackToServices}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
                                    >
                                        <ArrowLeft className="h-3.5 w-3.5" />
                                        <span>← Back to Services</span>
                                    </button>

                                    {/* Service Title & Prompt */}
                                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-3.5 text-navy-950 shadow-sm">
                                        <h3 className="text-sm font-bold text-navy-900">{selectedService.label}</h3>
                                        <p className="mt-1 font-medium text-slate-600">What would you like to know?</p>
                                    </div>

                                    {/* Question Buttons */}
                                    <div className="space-y-2">
                                        {selectedService.questions.map((q) => (
                                            <button
                                                key={q.id}
                                                type="button"
                                                onClick={() => handleSelectQuestion(selectedService.id, q.id)}
                                                className="group flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left text-xs sm:text-sm font-medium text-navy-900 shadow-sm transition-all hover:border-teal-400 hover:bg-teal-50/50 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                                            >
                                                <span>{q.question}</span>
                                                <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-600" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* LEVEL 3: QUESTION ANSWER VIEW */}
                            {selectedService && selectedQuestion && (
                                <div className="space-y-4">
                                    {/* Navigation breadcrumbs */}
                                    <div className="flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={handleBackToQuestions}
                                            className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
                                        >
                                            <ArrowLeft className="h-3.5 w-3.5" />
                                            <span>← Back to {selectedService.label}</span>
                                        </button>
                                    </div>

                                    {/* Selected Question Header */}
                                    <div className="rounded-xl bg-teal-700 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm">
                                        {selectedQuestion.question}
                                    </div>

                                    {/* Answer Card */}
                                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-3.5 text-navy-950 shadow-sm leading-relaxed text-xs sm:text-sm space-y-2.5">
                                        <p className="whitespace-pre-line">{selectedQuestion.answer}</p>
                                        {selectedQuestion.bullets && selectedQuestion.bullets.length > 0 && (
                                            <ul className="space-y-1.5 border-t border-slate-200/80 pt-2 text-[11px] sm:text-xs text-slate-700">
                                                {selectedQuestion.bullets.map((b, i) => (
                                                    <li key={i} className="flex items-start gap-1.5">
                                                        <span className="font-bold text-teal-600">•</span>
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {selectedQuestion.note && (
                                            <div className="rounded-lg border border-slate-200 bg-white/90 p-2.5 text-[11px] leading-relaxed text-slate-600 shadow-sm">
                                                {selectedQuestion.note}
                                            </div>
                                        )}
                                    </div>

                                    {/* Navigation Action Links */}
                                    <div className="space-y-2 pt-1">
                                        <div className="flex flex-wrap gap-2">
                                            <Link
                                                to={selectedService.route}
                                                className="inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-navy-800"
                                            >
                                                <span>{selectedService.exploreLabel}</span>
                                                <ExternalLink className="h-3 w-3" />
                                            </Link>
                                            {selectedService.secondaryLinks?.map((sLink, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={sLink.to}
                                                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-slate-700"
                                                >
                                                    <span>{sLink.text}</span>
                                                    <ExternalLink className="h-3 w-3" />
                                                </Link>
                                            ))}
                                            <Link
                                                to={PRIMARY_CONTACT_LINK.to}
                                                onClick={() => trackEvent("martha_contact_clicked")}
                                                className="inline-flex items-center gap-1.5 rounded-full bg-teal-500 px-3.5 py-1.5 text-xs font-semibold text-navy-950 shadow-sm transition-all hover:bg-teal-400"
                                            >
                                                <span>{PRIMARY_CONTACT_LINK.text}</span>
                                                <ArrowRight className="h-3.5 w-3.5" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Next Step Options */}
                                    <div className="border-t border-slate-200/80 pt-3">
                                        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                                            What would you like to explore next?
                                        </p>
                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                            <button
                                                type="button"
                                                onClick={handleBackToQuestions}
                                                className="rounded-full border border-teal-600/30 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800 transition-colors hover:bg-teal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                                            >
                                                More {selectedService.label} Questions
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleBackToServices}
                                                className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                                            >
                                                ← Back to Services
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Launcher Button */}
            <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
                <button
                    ref={launcherRef}
                    type="button"
                    onClick={isOpen ? handleClose : handleOpen}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close Martha assistant" : "Ask Martha — Virtual Assistant"}
                    className="group relative flex items-center gap-2.5 rounded-full bg-navy-900 px-4 py-3 text-white shadow-premium-lg transition-all duration-200 hover:scale-105 hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 border border-slate-700/60"
                >
                    <span className="relative flex h-5 w-5 items-center justify-center text-teal-300">
                        {isOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
                        {!isOpen && (
                            <span
                                className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-teal-400 ring-2 ring-navy-900"
                                aria-hidden="true"
                            />
                        )}
                    </span>
                    <span className="text-sm font-semibold tracking-wide text-white">
                        {isOpen ? "Close" : "Ask Martha"}
                    </span>
                </button>
            </div>
        </aside>
    );
}
