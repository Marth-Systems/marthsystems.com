import { motion } from "framer-motion";
import { CheckCircle2, Clock3, FileText, Send } from "lucide-react";

const APPLICATIONS = [
    { payer: "Medicare", status: "In review", icon: Clock3, tone: "border-amber-200 bg-amber-50 text-amber-700" },
    { payer: "Medicaid", status: "Submitted", icon: FileText, tone: "border-sky-200 bg-sky-50 text-sky-700" },
    { payer: "Commercial Payer A", status: "Follow-up sent", icon: Send, tone: "border-teal-200 bg-teal-50 text-teal-700" },
    { payer: "Commercial Payer B", status: "Enrolled", icon: CheckCircle2, tone: "border-emerald-200 bg-emerald-50 text-emerald-700" },
];

export default function EnrollmentVisualization() {
    return (
        <div className="relative w-full max-w-md">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-white/15 bg-white/95 p-6 shadow-premium-lg backdrop-blur"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-navy-900">Enrollment Tracker</p>
                        <p className="text-xs text-slate-500">Provider enrollment pipeline</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse-soft" />
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
                            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-premium"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-teal-300">
                                    <a.icon className="h-4 w-4" />
                                </span>
                                <span className="text-sm font-semibold text-navy-900">{a.payer}</span>
                            </div>
                            <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${a.tone}`}>
                                {a.status}
                            </span>
                        </motion.li>
                    ))}
                </ul>

                <div className="mt-5">
                    <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                        <span>Application progress</span>
                        <span className="text-teal-700">Follow-up logged</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-400"
                            initial={{ width: "15%" }}
                            animate={{ width: ["15%", "78%", "15%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -right-3 -bottom-5 sm:-right-5 rounded-2xl border border-white/15 bg-navy-950/90 px-4 py-3 shadow-premium-lg backdrop-blur"
            >
                <p className="text-xs font-semibold text-teal-300">Organized · Visible · Moving</p>
                <p className="mt-0.5 text-[11px] text-slate-400">Every application tracked to follow-up</p>
            </motion.div>
        </div>
    );
}