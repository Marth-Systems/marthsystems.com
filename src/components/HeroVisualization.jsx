import { motion } from "framer-motion";
import { Shield, Receipt, TrendingUp, CheckCircle, Headphones, Check, Sparkles, Activity } from "lucide-react";

const NODES = [
    { x: 55, y: 45, label: "Credentialing", icon: "shield", metric: "100% PSV" },
    { x: 55, y: 135, label: "Claim Filing", icon: "receipt", metric: "98.5% Clean" },
    { x: 55, y: 225, label: "AR Recovery", icon: "chart", metric: "Overturn 78%" },
    { x: 55, y: 315, label: "Prior Auth", icon: "check", metric: "24-48h TAT" },
    { x: 55, y: 405, label: "Patient Care", icon: "support", metric: "<3m Hold" },
];

const FLOW = [
    { x: 235, y: 45, label: "Verified", status: "Primary Source" },
    { x: 235, y: 135, label: "Accepted", status: "Clearinghouse" },
    { x: 235, y: 225, label: "Resolved", status: "Payer Escalated" },
    { x: 235, y: 315, label: "Approved", status: "Clinical Packet" },
    { x: 235, y: 405, label: "Coordinated", status: "Inquiry Closed" },
];

function NodeIcon({ icon }) {
    if (icon === "shield") return <Shield className="h-4 w-4" />;
    if (icon === "receipt") return <Receipt className="h-4 w-4" />;
    if (icon === "chart") return <TrendingUp className="h-4 w-4" />;
    if (icon === "check") return <CheckCircle className="h-4 w-4" />;
    return <Headphones className="h-4 w-4" />;
}

export default function HeroVisualization() {
    return (
        <div className="relative mx-auto w-full max-w-xl">
            {/* Ambient Radial Backlights */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-cyan-500/20 via-teal-500/15 to-blue-600/20 blur-3xl opacity-80" />
            
            {/* Main Command Console Card */}
            <div className="relative rounded-[32px] sm:rounded-[36px] border border-white/15 bg-slate-950/75 p-6 sm:p-7 shadow-2xl backdrop-blur-2xl">
                {/* Console Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-400" />
                        </span>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-white">
                                Operations Intelligence Grid
                            </span>
                            <span className="block text-[10px] text-teal-300/80 font-mono">
                                Live Pipeline · Automated Validation
                            </span>
                        </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 text-[11px] font-semibold text-teal-300">
                        <Activity className="h-3 w-3" />
                        Live Status
                    </span>
                </div>

                {/* SVG Visual Flow Graph */}
                <svg viewBox="-85 10 400 435" className="mt-3 w-full" role="img" aria-label="Healthcare operations live visualization">
                    <defs>
                        <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.9" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Dynamic Connecting Lines & Moving Data Points */}
                    {NODES.map((n, i) => {
                        const startX = n.x + 22;
                        const endX = FLOW[i].x - 26;
                        const lineY = n.y;

                        return (
                            <g key={`line-group-${i}`}>
                                {/* Static underlying track */}
                                <line
                                    x1={startX}
                                    y1={lineY}
                                    x2={endX}
                                    y2={lineY}
                                    stroke="#1e293b"
                                    strokeWidth="2"
                                />

                                {/* Subtle dashed active pipeline */}
                                <line
                                    x1={startX}
                                    y1={lineY}
                                    x2={endX}
                                    y2={lineY}
                                    stroke="url(#streamGrad)"
                                    strokeWidth="1.5"
                                    strokeDasharray="4 6"
                                    opacity="0.45"
                                />

                                {/* Moving soft glow halo (traveling left to right) */}
                                <motion.circle
                                    r="7"
                                    fill="#2dd4bf"
                                    filter="url(#glow)"
                                    animate={{
                                        cx: [startX, endX],
                                        cy: [lineY, lineY],
                                        opacity: [0, 0.45, 0.5, 0.2, 0],
                                    }}
                                    transition={{
                                        duration: 2.2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.35,
                                    }}
                                />

                                {/* Moving bright core point (traveling left to right) */}
                                <motion.circle
                                    r="3.5"
                                    fill="#38bdf8"
                                    filter="url(#glow)"
                                    animate={{
                                        cx: [startX, endX],
                                        cy: [lineY, lineY],
                                        opacity: [0, 1, 1, 0.7, 0],
                                    }}
                                    transition={{
                                        duration: 2.2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.35,
                                    }}
                                />
                            </g>
                        );
                    })}

                    {/* Left Nodes: Functional Areas */}
                    {NODES.map((n, i) => (
                        <motion.g
                            key={`node-${i}`}
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                        >
                            {/* Glow halo */}
                            <circle cx={n.x} cy={n.y} r="22" fill="#0f172a" />
                            <circle cx={n.x} cy={n.y} r="22" fill="none" stroke="#2dd4bf" strokeWidth="1.5" opacity="0.6" />
                            
                            {/* Icon embedded */}
                            <foreignObject x={n.x - 10} y={n.y - 10} width="20" height="20">
                                <div className="text-teal-300 flex items-center justify-center">
                                    <NodeIcon icon={n.icon} />
                                </div>
                            </foreignObject>

                            {/* Label & metric text */}
                            <text x={n.x - 30} y={n.y - 1} textAnchor="end" className="fill-white" style={{ fontSize: 10, fontWeight: 700 }}>
                                {n.label}
                            </text>
                            <text x={n.x - 30} y={n.y + 12} textAnchor="end" className="fill-teal-300/80 font-mono" style={{ fontSize: 8, fontWeight: 600 }}>
                                {n.metric}
                            </text>
                        </motion.g>
                    ))}

                    {/* Right Output Flow Cards */}
                    {FLOW.map((f, i) => (
                        <motion.g
                            key={`flow-${i}`}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                        >
                            <rect
                                x={f.x - 26}
                                y={f.y - 14}
                                width="96"
                                height="28"
                                rx="8"
                                fill="#0f172a"
                                stroke="#334155"
                                strokeWidth="1"
                            />
                            {/* Pulsing indicator dot */}
                            <motion.circle
                                cx={f.x - 16}
                                cy={f.y}
                                r="3.5"
                                fill="#38bdf8"
                                animate={{
                                    scale: [1, 1.4, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 2.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.6 + i * 0.35,
                                }}
                            />
                            <text x={f.x - 7} y={f.y - 1} className="fill-white" style={{ fontSize: 9, fontWeight: 700 }}>
                                {f.label}
                            </text>
                            <text x={f.x - 7} y={f.y + 9} className="fill-slate-400" style={{ fontSize: 7, fontWeight: 500 }}>
                                {f.status}
                            </text>
                        </motion.g>
                    ))}
                </svg>

                {/* Footer Metrics Row */}
                <div className="mt-4 grid grid-cols-3 gap-2.5 border-t border-white/10 pt-4">
                    {[
                        { label: "Clean Claims", value: "98.5%", note: "First-pass" },
                        { label: "Credentialing", value: "<21d", note: "Average TAT" },
                        { label: "HIPAA Compliant", value: "100%", note: "Verified" },
                    ].map((s) => (
                        <div key={s.label} className="rounded-xl border border-white/5 bg-white/[0.04] p-2.5 text-center transition-colors hover:border-teal-500/30">
                            <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">{s.label}</div>
                            <div className="text-sm font-bold text-white mt-0.5">{s.value}</div>
                            <div className="text-[9px] text-teal-300/80 font-mono mt-0.5">{s.note}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Live Badge #1 */}
            <motion.div
                className="absolute -right-4 -top-3 hidden sm:flex items-center gap-2.5 rounded-2xl border border-white/15 bg-slate-900/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300">
                    <Check className="h-4 w-4 stroke-[3]" />
                </span>
                <div className="leading-tight text-left">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Quality Standard</div>
                    <div className="text-xs font-bold text-white">Zero Non-Compliant Gaps</div>
                </div>
            </motion.div>

            {/* Floating Live Badge #2 */}
            <motion.div
                className="absolute -left-4 -bottom-4 hidden sm:flex items-center gap-2.5 rounded-2xl border border-white/15 bg-slate-900/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                    <Sparkles className="h-4 w-4" />
                </span>
                <div className="leading-tight text-left">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Global Coverage</div>
                    <div className="text-xs font-bold text-white">24/7 Operations Support</div>
                </div>
            </motion.div>
        </div>
    );
}