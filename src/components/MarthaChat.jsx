import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
    X,
    RotateCcw,
    ArrowRight,
    ExternalLink,
    Bot,
    ChevronRight,
    ArrowLeft,
    Sparkles,
    Stethoscope,
    Compass,
    CheckCircle2,
    ShieldCheck,
} from "lucide-react";
import {
    INITIAL_GREETING,
    PRIMARY_CONTACT_LINK,
    MARTHA_SERVICES,
    DIAGNOSTIC_SCENARIOS,
    PAGE_CONTEXT_TIPS,
    getServiceById,
    getQuestionById,
} from "@/data/marthaKnowledge";
import { trackEvent } from "@/lib/analytics";

export default function MarthaChat() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    // Guided mode: "explore" (7 Pillars) | "diagnose" (Bottleneck Finder)
    const [activeMode, setActiveMode] = useState("explore");

    // Service Explorer State
    const [currentServiceId, setCurrentServiceId] = useState(null);
    const [currentQuestionId, setCurrentQuestionId] = useState(null);

    // Diagnostic Recommender State
    const [selectedScenarioId, setSelectedScenarioId] = useState(null);

    const shouldReduceMotion = useReducedMotion();
    const launcherRef = useRef(null);
    const panelContentRef = useRef(null);

    const pageContext = PAGE_CONTEXT_TIPS[location.pathname] || PAGE_CONTEXT_TIPS["/"];

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

    // Scroll to top on view change
    useEffect(() => {
        if (isOpen && panelContentRef.current) {
            panelContentRef.current.scrollTop = 0;
        }
    }, [isOpen, activeMode, currentServiceId, currentQuestionId, selectedScenarioId]);

    const handleOpen = () => {
        setIsOpen(true);
        trackEvent("martha_opened", { path: location.pathname });
    };

    const handleClose = () => {
        setIsOpen(false);
        setCurrentServiceId(null);
        setCurrentQuestionId(null);
        setSelectedScenarioId(null);
        launcherRef.current?.focus();
    };

    const handleReset = () => {
        setActiveMode("explore");
        setCurrentServiceId(null);
        setCurrentQuestionId(null);
        setSelectedScenarioId(null);
    };

    const handleSelectService = (serviceId) => {
        setActiveMode("explore");
        setCurrentServiceId(serviceId);
        setCurrentQuestionId(null);
        trackEvent("martha_service_selected", { service: serviceId });
    };

    const handleSelectQuestion = (serviceId, questionId) => {
        setCurrentQuestionId(questionId);
        trackEvent("martha_question_selected", { service: serviceId, question: questionId });
    };

    const handleBackToServices = () => {
        setCurrentServiceId(null);
        setCurrentQuestionId(null);
    };

    const handleBackToQuestions = () => {
        setCurrentQuestionId(null);
    };

    const selectedService = currentServiceId ? getServiceById(currentServiceId) : null;
    const selectedQuestion =
        currentServiceId && currentQuestionId ? getQuestionById(currentServiceId, currentQuestionId) : null;
    const selectedScenario = selectedScenarioId
        ? DIAGNOSTIC_SCENARIOS.find((s) => s.id === selectedScenarioId)
        : null;

    const panelAnimation = shouldReduceMotion
        ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 } }
        : {
              initial: { opacity: 0, y: 20, scale: 0.95 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: 20, scale: 0.95 },
              transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
          };

    return (
        <aside aria-label="Marth Systems Virtual Assistant">
            {/* Guided Navigator Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        role="dialog"
                        aria-modal="false"
                        aria-labelledby="martha-panel-title"
                        {...panelAnimation}
                        className="fixed bottom-20 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-24 z-50 flex h-[min(620px,calc(100vh-6.5rem))] w-auto sm:w-[410px] flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#050C20]/95 shadow-[0_28px_70px_-15px_rgba(0,0,0,0.9),0_0_40px_-10px_rgba(45,212,191,0.2)] backdrop-blur-2xl"
                    >
                        {/* Cosmic Header with Ambient Mesh Glow */}
                        <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-[#040A1C] via-[#071330] to-[#040A1C] px-4 pt-3.5 pb-3 text-white">
                            <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-teal-500/20 blur-2xl" />
                            <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-cyan-500/15 blur-2xl" />

                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 via-cyan-400 to-teal-300 text-slate-950 font-bold shadow-[0_0_20px_-3px_rgba(45,212,191,0.6)]">
                                        <Bot className="h-5 w-5" />
                                        <span
                                            className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#040A1C] bg-emerald-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h2 id="martha-panel-title" className="text-sm font-extrabold tracking-tight text-white leading-none">
                                                Martha
                                            </h2>
                                            <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/15 border border-teal-400/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-300">
                                                <Sparkles className="h-2.5 w-2.5" />
                                                RCM Concierge
                                            </span>
                                        </div>
                                        <p className="mt-1 text-[11px] font-medium text-slate-300 leading-none">
                                            Guided Healthcare Operations Navigator
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1">
                                    {(currentServiceId !== null || currentQuestionId !== null || selectedScenarioId !== null || activeMode !== "explore") && (
                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            title="Start over"
                                            aria-label="Start over"
                                            className="rounded-xl p-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                                        >
                                            <RotateCcw className="h-4 w-4" />
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        title="Close Martha"
                                        aria-label="Close Martha assistant"
                                        className="rounded-xl p-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            {/* 2-Mode Guided Segmented Control Bar */}
                            <div className="relative z-10 mt-3 grid grid-cols-2 gap-1.5 rounded-xl bg-slate-950/80 p-1 border border-white/10">
                                <button
                                    type="button"
                                    onClick={() => setActiveMode("explore")}
                                    className={`flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-[11px] font-bold transition-all ${
                                        activeMode === "explore"
                                            ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 shadow-sm"
                                            : "text-slate-300 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    <Compass className="h-3.5 w-3.5" />
                                    <span>Explore 7 Pillars</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveMode("diagnose")}
                                    className={`flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-[11px] font-bold transition-all ${
                                        activeMode === "diagnose"
                                            ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 shadow-sm"
                                            : "text-slate-300 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    <Stethoscope className="h-3.5 w-3.5" />
                                    <span>Diagnose Bottleneck</span>
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Guided Body */}
                        <div
                            ref={panelContentRef}
                            className="flex-1 overflow-y-auto px-4 py-4 text-xs sm:text-sm space-y-3.5"
                        >
                            {/* =========================================================
                                MODE 1: 7-PILLAR SERVICE EXPLORER ("Explore 7 Pillars")
                               ========================================================= */}
                            {activeMode === "explore" && (
                                <>
                                    {/* LEVEL 1: ALL 7 PILLARS */}
                                    {!selectedService && (
                                        <div className="space-y-3">
                                            {/* Context-Aware Page Banner */}
                                            {pageContext && (
                                                <div className="rounded-2xl border border-teal-500/25 bg-gradient-to-br from-teal-500/10 via-slate-900/90 to-cyan-500/10 p-3.5 shadow-sm">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-teal-300">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                                                            {pageContext.badge}
                                                        </span>
                                                        {pageContext.suggestedServiceId && (
                                                            <button
                                                                type="button"
                                                                onClick={() => handleSelectService(pageContext.suggestedServiceId)}
                                                                className="text-[11px] font-bold text-cyan-300 hover:text-cyan-200 underline underline-offset-2"
                                                            >
                                                                Open Topic Q&A →
                                                            </button>
                                                        )}
                                                        {pageContext.quickActionMode === "diagnose" && (
                                                            <button
                                                                type="button"
                                                                onClick={() => setActiveMode("diagnose")}
                                                                className="text-[11px] font-bold text-cyan-300 hover:text-cyan-200 underline underline-offset-2"
                                                            >
                                                                {pageContext.quickActionLabel} →
                                                            </button>
                                                        )}
                                                    </div>
                                                    <p className="mt-1.5 text-xs text-slate-200 leading-relaxed">
                                                        {INITIAL_GREETING.text} Select any pillar below to explore workflows, benchmarks, and common questions:
                                                    </p>
                                                </div>
                                            )}

                                            {/* 7 Service Pillars List */}
                                            <div className="space-y-2">
                                                {MARTHA_SERVICES.map((service) => (
                                                    <button
                                                        key={service.id}
                                                        type="button"
                                                        onClick={() => handleSelectService(service.id)}
                                                        className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-3.5 py-3 text-left transition-all hover:border-teal-400/50 hover:bg-slate-800/90 shadow-sm"
                                                    >
                                                        <div className="min-w-0">
                                                            <div className="flex items-center gap-2 flex-wrap">
                                                                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-teal-200 transition-colors">
                                                                    {service.label}
                                                                </span>
                                                                {service.benchmark && (
                                                                    <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/15 border border-teal-500/30 px-2 py-0.5 text-[10px] font-bold text-teal-300">
                                                                        <ShieldCheck className="h-2.5 w-2.5" />
                                                                        {service.benchmark}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            {service.tagline && (
                                                                <p className="mt-0.5 text-[11px] text-slate-400 truncate">
                                                                    {service.tagline}
                                                                </p>
                                                            )}
                                                        </div>
                                                        <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-300" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* LEVEL 2: SERVICE QUESTIONS LIST */}
                                    {selectedService && !selectedQuestion && (
                                        <div className="space-y-3.5">
                                            <button
                                                type="button"
                                                onClick={handleBackToServices}
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 hover:text-teal-200 transition-colors"
                                            >
                                                <ArrowLeft className="h-3.5 w-3.5" />
                                                <span>Back to All 7 Pillars</span>
                                            </button>

                                            <div className="rounded-2xl border border-teal-500/25 bg-slate-900/90 p-3.5 text-white shadow-sm">
                                                <div className="flex items-center justify-between gap-2 flex-wrap">
                                                    <h3 className="text-sm font-extrabold text-white">{selectedService.label}</h3>
                                                    {selectedService.benchmark && (
                                                        <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/15 border border-teal-500/30 px-2 py-0.5 text-[10px] font-bold text-teal-300">
                                                            <ShieldCheck className="h-3 w-3" />
                                                            {selectedService.benchmark}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="mt-1 text-xs text-slate-300">{selectedService.tagline}</p>
                                            </div>

                                            <div className="space-y-2">
                                                {selectedService.questions.map((q) => (
                                                    <button
                                                        key={q.id}
                                                        type="button"
                                                        onClick={() => handleSelectQuestion(selectedService.id, q.id)}
                                                        className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-slate-900/75 px-3.5 py-2.5 text-left text-xs sm:text-sm font-medium text-white shadow-sm transition-all hover:border-teal-400/50 hover:bg-slate-800/90"
                                                    >
                                                        <span>{q.question}</span>
                                                        <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-300" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* LEVEL 3: QUESTION ANSWER VIEW */}
                                    {selectedService && selectedQuestion && (
                                        <div className="space-y-3.5">
                                            <button
                                                type="button"
                                                onClick={handleBackToQuestions}
                                                className="inline-flex items-center gap-1 text-xs font-bold text-teal-300 hover:text-teal-200 transition-colors"
                                            >
                                                <ArrowLeft className="h-3.5 w-3.5" />
                                                <span>Back to {selectedService.label}</span>
                                            </button>

                                            <div className="rounded-xl bg-teal-500/15 border border-teal-500/30 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-teal-200 shadow-sm">
                                                {selectedQuestion.question}
                                            </div>

                                            <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-3.5 text-slate-200 shadow-sm leading-relaxed text-xs sm:text-sm space-y-2.5">
                                                <p className="whitespace-pre-line">{selectedQuestion.answer}</p>
                                                {selectedQuestion.bullets && selectedQuestion.bullets.length > 0 && (
                                                    <ul className="space-y-1.5 border-t border-white/10 pt-2.5 text-[11px] sm:text-xs text-slate-300">
                                                        {selectedQuestion.bullets.map((b, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal-400 mt-0.5" />
                                                                <span>{b}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                {selectedQuestion.note && (
                                                    <div className="rounded-xl border border-white/10 bg-slate-950/80 p-2.5 text-[11px] leading-relaxed text-slate-400">
                                                        {selectedQuestion.note}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap gap-2 pt-1">
                                                <Link
                                                    to={selectedService.route}
                                                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 border border-white/15 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-slate-700 hover:border-teal-400/40"
                                                >
                                                    <span>{selectedService.exploreLabel}</span>
                                                    <ExternalLink className="h-3 w-3 text-teal-300" />
                                                </Link>
                                                {selectedService.secondaryLinks?.map((sLink, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={sLink.to}
                                                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 border border-white/15 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-slate-700 hover:border-teal-400/40"
                                                    >
                                                        <span>{sLink.text}</span>
                                                        <ExternalLink className="h-3 w-3 text-teal-300" />
                                                    </Link>
                                                ))}
                                                <Link
                                                    to={PRIMARY_CONTACT_LINK.to}
                                                    onClick={() => trackEvent("martha_contact_clicked")}
                                                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-sm transition-all hover:from-teal-300 hover:to-cyan-300"
                                                >
                                                    <span>{PRIMARY_CONTACT_LINK.text}</span>
                                                    <ArrowRight className="h-3.5 w-3.5" />
                                                </Link>
                                            </div>

                                            <div className="border-t border-white/10 pt-3">
                                                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                                    What would you like to explore next?
                                                </p>
                                                <div className="mt-2 flex flex-wrap gap-1.5">
                                                    <button
                                                        type="button"
                                                        onClick={handleBackToQuestions}
                                                        className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors hover:bg-teal-500/20"
                                                    >
                                                        More {selectedService.label} Questions
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={handleBackToServices}
                                                        className="rounded-full border border-white/15 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                                                    >
                                                        ← All 7 Pillars
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* =========================================================
                                MODE 2: BOTTLENECK DIAGNOSTIC RECOMMENDER ("Diagnose")
                               ========================================================= */}
                            {activeMode === "diagnose" && (
                                <div className="space-y-4">
                                    {!selectedScenario ? (
                                        <>
                                            <div className="rounded-2xl border border-teal-500/25 bg-gradient-to-br from-teal-500/10 via-slate-900/90 to-slate-900 p-4">
                                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-teal-300">
                                                    <Stethoscope className="h-3.5 w-3.5" />
                                                    Interactive Diagnostic
                                                </span>
                                                <h3 className="mt-1 text-sm font-extrabold text-white">
                                                    What is your biggest operational bottleneck right now?
                                                </h3>
                                                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                                                    Select a challenge below to see the recommended Marth Systems workflow and target operational benchmarks.
                                                </p>
                                            </div>

                                            <div className="space-y-2.5">
                                                {DIAGNOSTIC_SCENARIOS.map((scen) => (
                                                    <button
                                                        key={scen.id}
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedScenarioId(scen.id);
                                                            trackEvent("martha_diagnostic_selected", { scenario: scen.id });
                                                        }}
                                                        className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-3.5 text-left transition-all hover:border-teal-400/50 hover:bg-slate-800/90 shadow-sm"
                                                    >
                                                        <div>
                                                            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-300">
                                                                {scen.shortLabel}
                                                            </div>
                                                            <div className="mt-0.5 text-xs sm:text-[13px] font-semibold text-white">
                                                                {scen.label}
                                                            </div>
                                                        </div>
                                                        <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-300" />
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <div className="space-y-4">
                                            <button
                                                type="button"
                                                onClick={() => setSelectedScenarioId(null)}
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 hover:text-teal-200"
                                            >
                                                <ArrowLeft className="h-3.5 w-3.5" />
                                                <span>Choose a different bottleneck</span>
                                            </button>

                                            <div className="rounded-2xl border border-teal-500/30 bg-slate-900/90 p-4 space-y-3 shadow-lg">
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-300">
                                                    Recommended Prescription
                                                </span>
                                                <h3 className="text-base font-extrabold text-white leading-snug">
                                                    {selectedScenario.recommendationTitle}
                                                </h3>
                                                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                                                    {selectedScenario.summary}
                                                </p>

                                                <div className="border-t border-white/10 pt-3">
                                                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                                                        Target Operational Benchmarks
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        {selectedScenario.metrics.map((m, i) => (
                                                            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-teal-200">
                                                                <CheckCircle2 className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                                                                <span>{m}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    <Link
                                                        to={selectedScenario.primaryRoute}
                                                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 border border-white/15 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-slate-700 hover:border-teal-400/50 transition-all"
                                                    >
                                                        <span>{selectedScenario.primaryRouteLabel}</span>
                                                        <ExternalLink className="h-3 w-3 text-teal-300" />
                                                    </Link>
                                                    {selectedScenario.secondaryRoute && (
                                                        <Link
                                                            to={selectedScenario.secondaryRoute}
                                                            className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 border border-white/15 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-slate-700 hover:border-teal-400/50 transition-all"
                                                        >
                                                            <span>{selectedScenario.secondaryRouteLabel}</span>
                                                            <ExternalLink className="h-3 w-3 text-teal-300" />
                                                        </Link>
                                                    )}
                                                    <Link
                                                        to="/contact"
                                                        onClick={() => trackEvent("martha_contact_clicked")}
                                                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-sm hover:from-teal-300 hover:to-cyan-300 transition-all"
                                                    >
                                                        <span>Request Custom Audit</span>
                                                        <ArrowRight className="h-3.5 w-3.5" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Quick Consultation Footer Bar (No free-text input) */}
                        <div className="flex items-center justify-between border-t border-white/10 bg-[#040A1C]/95 px-4 py-2.5">
                            <span className="text-[11px] font-medium text-slate-400">
                                Need tailored support for your practice?
                            </span>
                            <Link
                                to="/contact"
                                onClick={() => trackEvent("martha_contact_clicked")}
                                className="inline-flex items-center gap-1 rounded-full bg-teal-500/15 border border-teal-400/30 px-3 py-1 text-[11px] font-bold text-teal-300 hover:bg-teal-500/25 hover:text-teal-200 transition-all"
                            >
                                <span>Book Consultation</span>
                                <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Cosmic Launcher Button */}
            <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
                <button
                    ref={launcherRef}
                    type="button"
                    onClick={isOpen ? handleClose : handleOpen}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close Martha assistant" : "Ask Martha — RCM & Credentialing Concierge"}
                    className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#06102A] via-[#09193E] to-[#06102A] p-1.5 pr-4 text-white shadow-[0_0_30px_-5px_rgba(45,212,191,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_36px_-2px_rgba(45,212,191,0.65)] border border-teal-400/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 text-slate-950 shadow-md">
                        {isOpen ? <X className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                        {!isOpen && (
                            <span
                                className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#06102A]"
                                aria-hidden="true"
                            />
                        )}
                    </span>
                    <div className="text-left">
                        <div className="flex items-center gap-1.5">
                            <span className="text-xs font-extrabold tracking-wide text-white leading-none">
                                {isOpen ? "Close Martha" : "Ask Martha"}
                            </span>
                        </div>
                        {!isOpen && (
                            <span className="block text-[10px] font-medium text-teal-300 leading-tight mt-0.5">
                                Guided RCM Concierge
                            </span>
                        )}
                    </div>
                </button>
            </div>
        </aside>
    );
}
