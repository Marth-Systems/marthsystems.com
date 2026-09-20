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
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" },
];

const EMAILS = [
    { label: "Credentialing", email: "credentialing@marthsystems.com" },
    { label: "Billing", email: "billing@marthsystems.com" },
    { label: "Support", email: "support@marthsystems.com" },
    { label: "General", email: "info@marthsystems.com" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-navy-900 text-slate-300">
            <div className="absolute inset-0 bg-grid-dark opacity-40" />
            <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-16 pb-10">
                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center gap-3" aria-label="Marth Systems home">
                            <LogoMark className="h-11 w-11" />
                            <div>
                                <span className="block text-lg font-bold text-white">Marth Systems</span>
                                <span className="block text-xs font-medium uppercase tracking-[0.22em] text-teal-300/80">
                                    Accurate | Compliant | Connected
                                </span>
                            </div>
                        </Link>
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
                            Healthcare operations and administrative services for organizations that need
                            credentialing, billing, AR management, prior authorization, and patient
                            support — handled with accuracy and compliance in mind.
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
                            <ShieldCheck className="h-4 w-4 text-teal-300" />
                            B2B healthcare operations services
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-semibold text-white">Services</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {SERVICES.map((s) => (
                                <li key={s.label}>
                                    <Link to={s.path} className="text-slate-400 hover:text-teal-300 transition-colors">
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-semibold text-white">Company</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {COMPANY.map((s) => (
                                <li key={s.label}>
                                    <Link to={s.path} className="text-slate-400 hover:text-teal-300 transition-colors">
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-semibold text-white">Contact</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {EMAILS.map((e) => (
                                <li key={e.email}>
                                    <a
                                        href={`mailto:${e.email}`}
                                        className="group inline-flex items-center gap-2 text-slate-400 hover:text-teal-300 transition-colors"
                                    >
                                        <Mail className="h-4 w-4 text-teal-400/70 group-hover:text-teal-300" />
                                        <span className="font-medium text-slate-300">{e.label}:</span>
                                        <span className="truncate">{e.email}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/contact"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-400"
                        >
                            Request a Consultation
                        </Link>
                    </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Marth Systems. All rights reserved.</p>
                    <p className="max-w-xl leading-relaxed">
                        Marth Systems provides administrative and operational support services. We do not
                        provide medical diagnosis, treatment, or clinical advice.
                    </p>
                </div>
            </div>
        </footer>
    );
}