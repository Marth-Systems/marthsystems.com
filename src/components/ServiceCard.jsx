import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
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

export default function ServiceCard({ icon, title, description, path, delay = 0 }) {
    return (
        <ScrollReveal delay={delay}>
            <Link
                to={path}
                className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-premium-lg"
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-teal-300 transition-colors group-hover:bg-teal-500 group-hover:text-navy-950">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                    >
                        {ICONS[icon]}
                    </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy-900">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                    Explore service
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-teal-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </Link>
        </ScrollReveal>
    );
}