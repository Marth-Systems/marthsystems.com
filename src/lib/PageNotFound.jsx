import { useLocation, Link } from 'react-router-dom';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#040A1C] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(13,148,136,0.12),transparent_60%)] pointer-events-none" />
            <div className="max-w-md w-full relative z-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
                <div className="text-center space-y-6">
                    {/* 404 Error Code */}
                    <div className="space-y-2">
                        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-400">404</h1>
                        <div className="h-0.5 w-16 bg-teal-500/40 mx-auto rounded-full"></div>
                    </div>

                    {/* Main Message */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold text-white">
                            Page Not Found
                        </h2>
                        <p className="text-slate-300 leading-relaxed text-sm">
                            The page <span className="font-mono text-teal-300">"{pageName}"</span> could not be found in this application.
                        </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                        <Link
                            to="/"
                            className="inline-flex items-center px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 rounded-xl shadow-[0_0_20px_-4px_rgba(45,212,191,0.5)] transition-all duration-200"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Return to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
