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
    { label: "Prior Auth", full: "Prior Authorization", path: "/prior-authorization" },
    { label: "Support", full: "Patient Support", path: "/patient-support" },
    { label: "About", full: "About", path: "/about" },
    { label: "Resources", full: "Resources", path: "/resources" },
    { label: "Contact", full: "Contact", path: "/contact" },
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
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-premium border-b border-white/40" : "bg-transparent"
                }`}
        >
            <nav className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 2xl:px-10">
                <div className="flex h-16 lg:h-20 items-center justify-between">
                    <Link to="/" aria-label="Marth Systems home" className="shrink-0">
                        <Wordmark />
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden xl:flex items-center gap-1.5 2xl:gap-3.5 mx-4 2xl:mx-8">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === "/"}
                                className={({ isActive }) =>
                                    `px-2.5 2xl:px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                                        ? "text-teal-700"
                                        : "text-slate-600 hover:text-navy-900 hover:bg-slate-100/70"
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
                            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-premium transition-all hover:bg-navy-800 hover:shadow-premium-lg"
                        >
                            Request a Consultation
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-navy-900 hover:bg-slate-100 transition-colors"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="xl:hidden glass border-t border-white/40">
                    <div className="px-5 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                        <div className="flex flex-col gap-1">
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    end={link.path === "/"}
                                    className={({ isActive }) =>
                                        `px-4 py-3 text-base font-medium rounded-lg transition-colors ${isActive
                                            ? "bg-teal-50 text-teal-700"
                                            : "text-slate-700 hover:bg-slate-100"
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
                            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white"
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