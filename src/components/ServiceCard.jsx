import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ICONS = {
    credentialing: (
        <>
            <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
            <path d="m9 12 2 2 4-4" />
        </>
    ),
    billing: (
        <>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 9h18M7 14h6" />
        </>
    ),
    ar: (
        <>
            <path d="M3 3v18h18" />
            <path d="M7 15l3-4 3 2 4-6" />
        </>
    ),
    auth: (
        <>
            <path d="M9 12h6M12 9v6" />
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M7 8h10" />
        </>
    ),
    support: (
        <>
            <path d="M3 11a9 9 0 0 1 18 0" />
            <path d="M21 16v-5h-6v5h6ZM3 16v-5H3a2 2 0 0 0-2 2v3h2Z" />
            <path d="M21 16a2 2 0 0 1-2 2h-3" />
        </>
    ),
    contracting: (
        <>
            <path d="M14 3v5h5" />
            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-5Z" />
            <path d="M9 13h6M9 17h6" />
        </>
    ),
};

export default function ServiceCard({
    icon,
    title,
    description,
    badge,
    highlights = [],
    path,
    delay = 0,
}) {
    return (
        <ScrollReveal delay={delay}>
            <Link
                to={path}
                className="group relative flex h-full flex-col justify-between rounded-[32px] border border-white/10 bg-slate-900/75 p-7 sm:p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/80 hover:bg-slate-900/95 hover:shadow-2xl hover:shadow-teal-500/10"
            >
                {/* Top Row: Icon & Tag */}
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-800 text-teal-300 border border-white/10 shadow-sm transition-all duration-300 group-hover:bg-gradient-to-tr group-hover:from-teal-500 group-hover:to-cyan-400 group-hover:text-navy-950 group-hover:scale-105">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6"
                            >
                                {ICONS[icon]}
                            </svg>
                        </div>
                        {badge ? (
                            <span className="rounded-full bg-teal-500/15 px-3 py-1 text-[11px] font-bold tracking-wide text-teal-300 border border-teal-500/30 transition-colors group-hover:bg-teal-500/25">
                                {badge}
                            </span>
                        ) : (
                            <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-slate-300 transition-colors group-hover:bg-teal-500/15 group-hover:text-teal-300">
                                Core Solution
                            </span>
                        )}
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-teal-300">
                        {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {description}
                    </p>

                    {/* Key Capabilities Checklist */}
                    {highlights.length > 0 && (
                        <div className="mt-5 space-y-2 pt-4 border-t border-white/10">
                            {highlights.map((h, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
                                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                                    </span>
                                    <span className="truncate">{h}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Bottom Row: Link Action */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-sm font-bold text-teal-300">
                    <span className="inline-flex items-center gap-1.5 group-hover:text-teal-200">
                        Explore Capabilities
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-teal-300 transition-all duration-300 group-hover:bg-teal-400 group-hover:text-navy-950 group-hover:translate-x-1 shadow-xs">
                        <ArrowUpRight className="h-4 w-4" />
                    </span>
                </div>

                {/* Subtle gradient accent along bottom on hover */}
                <div className="pointer-events-none absolute inset-x-8 bottom-0 h-1 scale-x-0 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 transition-transform duration-500 group-hover:scale-x-100" />
            </Link>
        </ScrollReveal>
    );
}