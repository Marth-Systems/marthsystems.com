import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function WorkflowDiagram({ steps, variant = "light" }) {
    const isLight = variant === "light";
    return (
        <div className="w-full">
            {/* Desktop horizontal */}
            <div className="hidden lg:flex items-stretch justify-between gap-2">
                {steps.map((step, i) => (
                    <div key={step.title} className="flex flex-1 items-stretch">
                        <ScrollReveal delay={i * 0.08} className="flex-1">
                            <div
                                className={`relative flex h-full flex-col rounded-2xl border p-5 ${isLight
                                        ? "border-slate-200 bg-white shadow-premium"
                                        : "border-white/10 bg-white/5"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${isLight ? "bg-navy-900 text-teal-300" : "bg-teal-500 text-navy-950"
                                            }`}
                                    >
                                        {i + 1}
                                    </span>
                                    <h4 className={`text-sm font-semibold ${isLight ? "text-navy-900" : "text-white"}`}>
                                        {step.title}
                                    </h4>
                                </div>
                                <p className={`mt-3 text-xs leading-relaxed ${isLight ? "text-slate-500" : "text-slate-300"}`}>
                                    {step.description}
                                </p>
                            </div>
                        </ScrollReveal>
                        {i < steps.length - 1 && (
                            <div className="flex items-center px-1">
                                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" className="shrink-0">
                                    <motion.path
                                        d="M2 12h22M18 6l6 6-6 6"
                                        stroke={isLight ? "#0d8a78" : "#34c4a6"}
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.08 + 0.2 }}
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile vertical */}
            <div className="lg:hidden space-y-0">
                {steps.map((step, i) => (
                    <div key={step.title} className="relative flex gap-4">
                        <div className="flex flex-col items-center">
                            <span
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${isLight ? "bg-navy-900 text-teal-300" : "bg-teal-500 text-navy-950"
                                    }`}
                            >
                                {i + 1}
                            </span>
                            {i < steps.length - 1 && (
                                <div className={`w-px flex-1 ${isLight ? "bg-slate-200" : "bg-white/15"} my-1`} />
                            )}
                        </div>
                        <ScrollReveal delay={i * 0.05} className="flex-1 pb-6">
                            <div
                                className={`rounded-2xl border p-5 ${isLight ? "border-slate-200 bg-white shadow-premium" : "border-white/10 bg-white/5"
                                    }`}
                            >
                                <h4 className={`text-sm font-semibold ${isLight ? "text-navy-900" : "text-white"}`}>
                                    {step.title}
                                </h4>
                                <p className={`mt-2 text-xs leading-relaxed ${isLight ? "text-slate-500" : "text-slate-300"}`}>
                                    {step.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                ))}
            </div>
        </div>
    );
}