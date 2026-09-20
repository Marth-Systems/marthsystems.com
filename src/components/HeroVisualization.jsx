import { motion } from "framer-motion";

const NODES = [
    { x: 50, y: 40, label: "Credentialing", icon: "shield" },
    { x: 50, y: 130, label: "Billing", icon: "receipt" },
    { x: 50, y: 220, label: "AR Mgmt", icon: "chart" },
    { x: 50, y: 310, label: "PAR", icon: "check" },
    { x: 50, y: 400, label: "Patient Support", icon: "support" },
];

const FLOW = [
    { x: 220, y: 40, label: "Verify" },
    { x: 220, y: 130, label: "Submit" },
    { x: 220, y: 220, label: "Follow-up" },
    { x: 220, y: 310, label: "Approve" },
    { x: 220, y: 400, label: "Resolve" },
];

function NodeIcon({ icon }) {
    const common = {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.4,
        strokeLinecap: "round",
        strokeLinejoin: "round",
    };
    if (icon === "shield")
        return (
            <g {...common}>
                <path d="M-6 -8 L0 -10 L6 -8 L6 0 C6 5 3 8 0 10 C-3 8 -6 5 -6 0 Z" />
                <path d="m-3 0 2 2 4-4" />
            </g>
        );
    if (icon === "receipt")
        return (
            <g {...common}>
                <rect x="-6" y="-9" width="12" height="18" rx="1" />
                <path d="M-3 -5h6M-3 -1h6M-3 3h4" />
            </g>
        );
    if (icon === "chart")
        return (
            <g {...common}>
                <path d="M-7 8 L-7 -8 M-7 8 L8 8" />
                <path d="M-4 4l3-3 2 2 4-5" />
            </g>
        );
    if (icon === "check")
        return (
            <g {...common}>
                <rect x="-7" y="-7" width="14" height="14" rx="2" />
                <path d="m-3 0 2 2 4-4" />
            </g>
        );
    return (
        <g {...common}>
            <path d="M-7 -2a7 7 0 0 1 14 0" />
            <path d="M7 2v-4h-4v4h4ZM-7 2v-4h-4a2 2 0 0 0 0 4h4Z" />
            <path d="M5 4a3 3 0 0 1-3 2h-2" />
        </g>
    );
}

export default function HeroVisualization() {
    return (
        <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-teal-500/10 via-transparent to-navy-500/10 blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-premium-lg glass">
                {/* header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-teal-400 animate-pulse-soft" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Operations Dashboard
                        </span>
                    </div>
                    <span className="text-[0.65rem] font-medium text-slate-400">Live workflow</span>
                </div>

                <svg viewBox="-85 0 375 450" className="mt-2 w-full" role="img" aria-label="Healthcare operations workflow visualization">
                    {/* connectors */}
                    {NODES.map((n, i) => (
                        <motion.path
                            key={`line-${i}`}
                            d={`M${n.x + 26} ${n.y} C 130 ${n.y}, 150 ${FLOW[i].y}, ${FLOW[i].x - 26} ${FLOW[i].y}`}
                            fill="none"
                            stroke="#0d8a78"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            className="animate-dash"
                            opacity="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 + i * 0.12 }}
                        />
                    ))}

                    {/* left nodes */}
                    {NODES.map((n, i) => (
                        <motion.g
                            key={`node-${i}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
                        >
                            <circle cx={n.x} cy={n.y} r="22" fill="#0a2540" />
                            <circle cx={n.x} cy={n.y} r="22" fill="none" stroke="#34c4a6" strokeWidth="1" opacity="0.5" />
                            <g transform={`translate(${n.x}, ${n.y})`} className="text-teal-300">
                                <NodeIcon icon={n.icon} />
                            </g>
                            <text x={n.x - 30} y={n.y + 3} textAnchor="end" className="fill-navy-900" style={{ fontSize: 9, fontWeight: 600 }}>
                                {n.label}
                            </text>
                        </motion.g>
                    ))}

                    {/* right flow cards */}
                    {FLOW.map((f, i) => (
                        <motion.g
                            key={`flow-${i}`}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                        >
                            <rect x={f.x - 26} y={f.y - 13} width="78" height="26" rx="6" fill="white" stroke="#e2e8f0" />
                            <circle cx={f.x - 16} cy={f.y} r="3" fill="#34c4a6" />
                            <text x={f.x - 8} y={f.y + 3} className="fill-slate-700" style={{ fontSize: 9, fontWeight: 600 }}>
                                {f.label}
                            </text>
                        </motion.g>
                    ))}
                </svg>

                {/* footer stats */}
                <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-200 pt-3">
                    {[
                        { label: "Credentialing", value: "Tracked" },
                        { label: "Claims", value: "Monitored" },
                        { label: "AR", value: "Aged" },
                    ].map((s) => (
                        <div key={s.label} className="rounded-lg bg-slate-50 px-2 py-2 text-center">
                            <div className="text-[0.65rem] font-medium uppercase tracking-wide text-slate-400">{s.label}</div>
                            <div className="text-xs font-semibold text-navy-900">{s.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* floating badge */}
            <motion.div
                className="absolute -right-3 top-10 hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-premium-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </span>
                <div className="leading-tight">
                    <div className="text-[0.65rem] text-slate-400">Compliance</div>
                    <div className="text-xs font-semibold text-navy-900">Verified</div>
                </div>
            </motion.div>
        </div>
    );
}