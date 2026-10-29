import { motion } from "framer-motion";
import {
    Wrench,
    Mail,
    Clock,
    Sparkles,
    AlertTriangle,
    ServerCog,
} from "lucide-react";
import { Wordmark } from "@/components/Logo";
import SEO from "@/components/SEO";

const MAINTENANCE_ITEMS = [
    {
        label: "Public Website & Navigation",
        status: "Offline for Maintenance",
        tone: "amber",
    },
    {
        label: "Service Portals & Forms",
        status: "Temporarily Unavailable",
        tone: "amber",
    },
    {
        label: "Platform & Infrastructure Upgrade",
        status: "In Progress",
        tone: "teal",
    },
    {
        label: "Final Verification & QA",
        status: "Scheduled",
        tone: "slate",
    },
];

export default function Maintenance() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#040A1C] text-slate-100 flex flex-col justify-between">
            <SEO
                title="Website Under Maintenance"
                description="Marth Systems website is currently offline for scheduled maintenance and development. Please check back soon or reach us at info@marthsystems.com."
                path="/maintenance"
                noindex={true}
            />

            {/* Cosmic Ambient Lighting & Grid */}
            <div className="pointer-events-none absolute -left-40 -top-24 h-[520px] w-[520px] rounded-full bg-teal-500/15 blur-[140px] animate-ambient-slow" />
            <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px] animate-ambient-reverse" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-indigo-500/10 blur-[130px]" />
            <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />

            {/* Top Bar (No clickable navigation links since entire website is offline) */}
            <header className="relative z-10 border-b border-white/10 bg-[#040A1C]/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
                    <Wordmark light={true} />
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-bold text-amber-300">
                        <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                        <span>Maintenance Mode</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
                    {/* Left Column: Maintenance Message & Email Support */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 backdrop-blur-md">
                            <Wrench className="h-3.5 w-3.5" />
                            <span>Website Under Development & Maintenance</span>
                        </div>

                        <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Our Website Is Currently{" "}
                            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                                Under Maintenance.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                            We are performing scheduled maintenance and system upgrades across the entire website. All pages and online forms are temporarily unavailable while we complete this deployment. We apologize for the inconvenience and will be back online shortly.
                        </p>

                        {/* Direct Email Contact Channel */}
                        <div className="mt-8 max-w-md">
                            <a
                                href="mailto:info@marthsystems.com"
                                className="group flex items-start gap-3.5 rounded-2xl border border-white/10 bg-slate-900/75 p-4 backdrop-blur-md transition-all hover:border-teal-400/40 hover:bg-slate-900"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-500/30 bg-teal-500/15 text-teal-300 transition-colors group-hover:bg-teal-400 group-hover:text-slate-950">
                                    <Mail className="h-5 w-5" />
                                </span>
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                        Need to Reach Us While We&apos;re Offline?
                                    </div>
                                    <div className="mt-1 text-base font-extrabold text-white group-hover:text-teal-300 transition-colors break-all">
                                        info@marthsystems.com
                                    </div>
                                    <div className="mt-0.5 text-xs text-slate-400">
                                        Email our team directly for any inquiries
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: System Maintenance Console */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/80 p-6 sm:p-8 shadow-[0_28px_70px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
                            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-500/15 blur-2xl" />

                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/15 border border-teal-400/30 text-teal-300">
                                        <ServerCog className="h-4 w-4" />
                                    </span>
                                    <div>
                                        <h2 className="text-sm font-extrabold text-white">
                                            System Maintenance Status
                                        </h2>
                                        <p className="text-[11px] text-slate-400">
                                            marthsystems.com
                                        </p>
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 border border-amber-400/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                                    <AlertTriangle className="h-3 w-3" />
                                    Offline
                                </span>
                            </div>

                            {/* Status Rows */}
                            <div className="mt-5 space-y-3">
                                {MAINTENANCE_ITEMS.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3"
                                    >
                                        <span className="text-xs sm:text-sm font-medium text-slate-200">
                                            {item.label}
                                        </span>
                                        {item.tone === "amber" && (
                                            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 text-[11px] font-bold text-amber-300">
                                                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                                                {item.status}
                                            </span>
                                        )}
                                        {item.tone === "teal" && (
                                            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 px-2.5 py-0.5 text-[11px] font-bold text-teal-300">
                                                <Sparkles className="h-3 w-3 animate-spin" />
                                                {item.status}
                                            </span>
                                        )}
                                        {item.tone === "slate" && (
                                            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-slate-400">
                                                {item.status}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Upgrade Progress Indicator */}
                            <div className="mt-6 rounded-2xl border border-white/10 bg-[#060E28] p-4">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="inline-flex items-center gap-1.5 font-semibold text-slate-300">
                                        <Clock className="h-3.5 w-3.5 text-teal-300" />
                                        Maintenance Progress
                                    </span>
                                    <span className="font-mono font-bold text-teal-300">In Progress</span>
                                </div>
                                <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 animate-pulse" />
                                </div>
                                <p className="mt-2.5 text-[11px] leading-relaxed text-slate-400">
                                    Our team is actively working on the site. Please check back soon.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/10 bg-[#030712]/90 py-5 text-xs text-slate-400">
                <div className="mx-auto flex max-w-7xl items-center justify-center px-5 sm:px-6 lg:px-8">
                    <div>
                        &copy; {new Date().getFullYear()} Marth Systems. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
