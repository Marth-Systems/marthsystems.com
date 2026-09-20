import { motion } from "framer-motion";
import { FileText, MessageSquare, Send, RefreshCw, Eye } from "lucide-react";

const ROWS = [
    { icon: FileText, label: "Contract Documentation", status: "Submitted", pill: "bg-teal-500/15 text-teal-300", bar: "bg-teal-400", progress: 100 },
    { icon: MessageSquare, label: "Payer Coordination", status: "In Follow-up", pill: "bg-amber-400/15 text-amber-300", bar: "bg-amber-400", progress: 62 },
    { icon: Send, label: "Submission Support", status: "In Review", pill: "bg-sky-400/15 text-sky-300", bar: "bg-sky-400", progress: 45 },
    { icon: RefreshCw, label: "Ongoing Maintenance", status: "Scheduled", pill: "bg-white/10 text-slate-300", bar: "bg-slate-400", progress: 25 },
];

export default function ContractingVisualization() {
    return (
        <div
            className="relative mx-auto w-full max-w-lg"
            role="img"
            aria-label="Contracting workflow visualization showing tracked documentation, payer coordination, submission support, and ongoing maintenance, connected to multiple payer relationships."
        >
            {/* Provider–payer network */}
            <svg
                viewBox="0 0 400 150"
                fill="none"
                className="absolute -top-10 left-1/2 w-[130%] -translate-x-1/2 text-teal-300/40"
                aria-hidden="true"
            >
                <path d="M200 130 L60 30" stroke="currentColor" strokeWidth="1.5" className="animate-dash" />
                <path d="M200 130 L200 18" stroke="currentColor" strokeWidth="1.5" className="animate-dash" />
                <path d="M200 130 L340 30" stroke="currentColor" strokeWidth="1.5" className="animate-dash" />
                <circle cx="200" cy="130" r="7" className="fill-teal-400" />
                <circle cx="60" cy="30" r="4" className="fill-current" />
                <circle cx="200" cy="18" r="4" className="fill-current" />
                <circle cx="340" cy="30" r="4" className="fill-current" />
            </svg>

            {/* Tracker panel */}
            <div className="glass-dark relative mt-16 rounded-3xl p-6 sm:p-7 shadow-premium-lg">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">Contracting Tracker</p>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/15 px-2.5 py-1 text-[11px] font-semibold text-teal-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse-soft" />
                        Status visible
                    </span>
                </div>

                <div className="mt-5 space-y-5">
                    {ROWS.map((r, i) => (
                        <motion.div
                            key={r.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                        >
                            <div className="flex items-center justify-between gap-3">
                                <span className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-teal-300">
                                        <r.icon className="h-3.5 w-3.5" />
                                    </span>
                                    {r.label}
                                </span>
                                <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${r.pill}`}>
                                    {r.status}
                                </span>
                            </div>
                            <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/10">
                                <motion.div
                                    className={`h-full rounded-full ${r.bar}`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${r.progress}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.9, delay: 0.25 + i * 0.1, ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating visibility badge */}
            <motion.div
                className="glass-dark absolute -right-3 -bottom-5 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-premium-lg sm:-right-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 text-navy-950">
                    <Eye className="h-4 w-4" />
                </span>
                <div>
                    <p className="text-xs font-semibold text-white">Status Visibility</p>
                    <p className="text-[11px] text-slate-400">Outstanding items tracked</p>
                </div>
            </motion.div>
        </div>
    );
}