import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Wordmark } from "./Logo";
import { trackEvent } from "@/lib/analytics";

const NAV_LINKS = [
    { label: "Home", full: "Home", path: "/" },
    { label: "Credentialing", full: "Credentialing", path: "/credentialing" },
    { label: "Enrollment", full: "Provider Enrollment", path: "/provider-enrollment" },
    { label: "Contracting", full: "Provider Contracting", path: "/provider-contracting" },
    { label: "Billing", full: "Billing", path: "/billing" },
    { label: "AR", full: "AR Management", path: "/ar-management" },
    { label: "PAR", full: "Prior Authorization", path: "/prior-authorization" },
    { label: "Support", full: "Patient Support", path: "/patient-support" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled || open
                    ? "bg-[#040A1C]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
                    : "bg-transparent"
            }`}
        >
            <nav className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 2xl:px-10">
                <div className="flex h-16 lg:h-20 items-center justify-between">
                    <Link to="/" aria-label="Marth Systems home" className="shrink-0">
                        <Wordmark light={true} />
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden xl:flex items-center gap-1.5 2xl:gap-3.5 mx-4 2xl:mx-8">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === "/"}
                                className={({ isActive }) =>
                                    `px-2.5 2xl:px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                                        isActive
                                            ? "text-teal-300 bg-teal-500/10 font-semibold"
                                            : "text-slate-200 hover:text-white hover:bg-white/10"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="hidden xl:block shrink-0">
                        <Link
                            to="/contact"
                            onClick={() => trackEvent("primary_cta_click", { location: "navbar" })}
                            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-5 py-2.5 text-sm font-bold text-navy-950 shadow-premium transition-all hover:brightness-110 hover:scale-[1.02]"
                        >
                            Request a Consultation
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-white hover:bg-white/10 transition-colors"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="xl:hidden bg-[#040A1C]/95 backdrop-blur-2xl border-t border-white/10">
                    <div className="px-5 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                        <div className="flex flex-col gap-1">
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    end={link.path === "/"}
                                    className={({ isActive }) =>
                                        `px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                                            isActive
                                                ? "bg-teal-500/15 text-teal-300 border border-teal-500/30 font-semibold"
                                                : "text-slate-200 hover:bg-white/10 hover:text-white"
                                        }`
                                    }
                                >
                                    {link.full || link.label}
                                </NavLink>
                            ))}
                        </div>
                        <Link
                            to="/contact"
                            onClick={() => trackEvent("primary_cta_click", { location: "navbar_mobile" })}
                            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-5 py-3 text-sm font-bold text-navy-950 shadow-premium"
                        >
                            Request a Consultation
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}