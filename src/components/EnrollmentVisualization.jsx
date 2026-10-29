import { motion } from "framer-motion";
import { CheckCircle2, Clock3, FileText, Send } from "lucide-react";

const APPLICATIONS = [
    { payer: "Medicare (PECOS)", status: "In review", icon: Clock3, tone: "border-amber-500/30 bg-amber-500/15 text-amber-300" },
    { payer: "State Medicaid", status: "Submitted", icon: FileText, tone: "border-sky-500/30 bg-sky-500/15 text-sky-300" },
    { payer: "Commercial Payer A", status: "Follow-up sent", icon: Send, tone: "border-teal-500/30 bg-teal-500/15 text-teal-300" },
    { payer: "Commercial Payer B", status: "Enrolled", icon: CheckCircle2, tone: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300" },
];

export default function EnrollmentVisualization() {
    return (
        <div className="relative w-full max-w-md">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[32px] border border-white/15 bg-slate-900/85 p-6 sm:p-7 shadow-2xl backdrop-blur-2xl"
            >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                        <p className="text-sm font-bold text-white">Enrollment Tracker</p>
                        <p className="text-xs text-slate-400">Provider enrollment pipeline</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse-soft" />
                        Live status
                    </span>
                </div>

                <ul className="mt-5 space-y-3">
                    {APPLICATIONS.map((a, i) => (
                        <motion.li
                            key={a.payer}
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 + i * 0.12, duration: 0.45 }}
                            className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3.5 transition-colors hover:border-teal-400/40"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300 border border-teal-500/30">
                                    <a.icon className="h-4 w-4" />
                                </span>
                                <span className="text-sm font-semibold text-white">{a.payer}</span>
                            </div>
                            <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${a.tone}`}>
                                {a.status}
                            </span>
                        </motion.li>
                    ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                        <span>Application progress</span>
                        <span className="text-teal-300 font-semibold">Follow-up logged</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                        <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
                            initial={{ width: "15%" }}
                            animate={{ width: ["15%", "82%", "15%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -right-2 -bottom-5 sm:-right-4 rounded-2xl border border-teal-500/30 bg-slate-950/95 px-4 py-3 shadow-2xl backdrop-blur-xl"
            >
                <p className="text-xs font-semibold text-teal-300">Organized · Visible · Moving</p>
                <p className="mt-0.5 text-[11px] text-slate-400">Every application tracked to follow-up</p>
            </motion.div>
        </div>
    );
}