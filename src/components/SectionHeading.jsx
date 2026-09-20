import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({ eyebrow, title, description, align = "center", light = false }) {
    const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
    return (
        <div className={`max-w-3xl ${alignClass}`}>
            {eyebrow && (
                <ScrollReveal>
                    <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-teal-300" : "text-teal-700"}`}>
                        <span className="h-px w-6 bg-current opacity-60" />
                        {eyebrow}
                    </span>
                </ScrollReveal>
            )}
            <ScrollReveal delay={0.05}>
                <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.1] ${light ? "text-white" : "text-navy-900"}`}>
                    {title}
                </h2>
            </ScrollReveal>
            {description && (
                <ScrollReveal delay={0.1}>
                    <p className={`mt-5 text-lg leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>
                        {description}
                    </p>
                </ScrollReveal>
            )}
        </div>
    );
}