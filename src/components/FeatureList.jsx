import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FeatureList({ items, columns = 2, light = true }) {
    const colClass = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
    return (
        <div className={`grid gap-5 ${colClass}`}>
            {items.map((item, i) => (
                <ScrollReveal key={item.title || item} delay={(i % columns) * 0.05}>
                    <div
                        className={`group flex h-full gap-4 rounded-2xl border p-6 transition-all duration-300 ${
                            light
                                ? "border-white/10 bg-slate-900/75 shadow-xl backdrop-blur-xl hover:-translate-y-1 hover:border-teal-400/60 hover:bg-slate-900/95"
                                : "border-slate-200 bg-white shadow-premium"
                        }`}
                    >
                        <span
                            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl transition-colors ${
                                light
                                    ? "bg-teal-500/15 text-teal-300 border border-teal-500/30 group-hover:bg-teal-400 group-hover:text-navy-950"
                                    : "bg-teal-50 text-teal-600"
                            }`}
                        >
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        <div>
                            {item.title && (
                                <h3 className={`text-base font-bold ${light ? "text-white" : "text-navy-900"}`}>
                                    {item.title}
                                </h3>
                            )}
                            <p className={`mt-1.5 text-sm leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>
                                {item.description || item}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
}