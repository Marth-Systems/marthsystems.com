import { Link } from "react-router-dom";
import { Mail, ShieldCheck } from "lucide-react";
import { LogoMark } from "./Logo";

const SERVICES = [
    { label: "Credentialing", path: "/credentialing" },
    { label: "Provider Enrollment", path: "/provider-enrollment" },
    { label: "Billing", path: "/billing" },
    { label: "AR Management", path: "/ar-management" },
    { label: "Prior Authorization", path: "/prior-authorization" },
    { label: "Patient Support", path: "/patient-support" },
    { label: "Provider Contracting", path: "/provider-contracting" },
];

const COMPANY = [
    { label: "About", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" },
];

const EMAILS = [
    { label: "Contact", email: "contact@marthsystems.com" },
    { label: "General", email: "info@marthsystems.com" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#030712] text-slate-300 border-t border-white/10">
            <div className="absolute inset-0 bg-grid-dark opacity-30" />
            <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-16 pb-12">
                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center gap-3 group" aria-label="Marth Systems home">
                            <LogoMark className="h-10 w-auto transition-transform group-hover:scale-105" />
                            <div>
                                <span className="block text-lg font-bold text-white tracking-tight">Marth Systems</span>
                                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-teal-300 whitespace-nowrap mt-0.5">
                                    Accurate · Compliant · Connected
                                </span>
                            </div>
                        </Link>
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
                            Healthcare operations and administrative services for organizations that need
                            credentialing, billing, AR management, prior authorization, and patient
                            support — handled with accuracy and compliance in mind.
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold text-teal-300">
                            <ShieldCheck className="h-4 w-4 text-teal-400" />
                            B2B Healthcare Operations Services
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {SERVICES.map((s) => (
                                <li key={s.label}>
                                    <Link
                                        to={s.path}
                                        className="text-slate-400 hover:text-teal-300 transition-all inline-block hover:translate-x-1"
                                    >
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {COMPANY.map((s) => (
                                <li key={s.label}>
                                    <Link
                                        to={s.path}
                                        className="text-slate-400 hover:text-teal-300 transition-all inline-block hover:translate-x-1"
                                    >
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {EMAILS.map((e) => (
                                <li key={e.email}>
                                    <a
                                        href={`mailto:${e.email}`}
                                        className="group inline-flex items-center gap-2 text-slate-400 hover:text-teal-300 transition-colors"
                                    >
                                        <Mail className="h-4 w-4 text-teal-400/80 group-hover:text-teal-300 transition-colors shrink-0" />
                                        <span className="font-semibold text-slate-300">{e.label}:</span>
                                        <span className="truncate">{e.email}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/contact"
                            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-6 py-3 text-xs font-bold text-navy-950 shadow-md transition-all hover:brightness-110 hover:scale-[1.02]"
                        >
                            Request a Consultation
                        </Link>
                    </div>
                </div>

                <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400">
                    <p>© {new Date().getFullYear()} Marth Systems. All rights reserved.</p>
                    <p className="max-w-xl leading-relaxed text-slate-500">
                        Marth Systems provides administrative and operational support services. We do not
                        provide medical diagnosis, treatment, or clinical advice.
                    </p>
                </div>
            </div>
        </footer>
    );
}