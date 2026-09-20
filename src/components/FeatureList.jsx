import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FeatureList({ items, columns = 2, light = false }) {
    const colClass = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
    return (
        <div className={`grid gap-4 ${colClass}`}>
            {items.map((item, i) => (
                <ScrollReveal key={item.title || item} delay={(i % columns) * 0.05}>
                    <div
                        className={`flex h-full gap-3.5 rounded-xl border p-5 ${light ? "border-white/10 bg-white/5" : "border-slate-200 bg-white shadow-premium"
                            }`}
                    >
                        <span
                            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${light ? "bg-teal-500 text-navy-950" : "bg-teal-50 text-teal-600"
                                }`}
                        >
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        <div>
                            {item.title && (
                                <h3 className={`text-base font-semibold ${light ? "text-white" : "text-navy-900"}`}>
                                    {item.title}
                                </h3>
                            )}
                            <p className={`mt-1 text-sm leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>
                                {item.description || item}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
}