export function LogoMark({ className = "h-9 w-9" }) {
    return (
        <img
            src="/logo-mark.svg"
            alt="Marth Systems logo"
            className={className}
            loading="eager"
        />
    );
}

export function LogoHorizontal({ className = "h-8" }) {
    return (
        <img
            src="/logo-horizontal.svg"
            alt="Marth Systems"
            className={className}
            loading="eager"
        />
    );
}

export function Wordmark({ className = "" }) {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <LogoMark className="h-9 w-9" />
            <div className="leading-none">
                <span className="block text-[1.05rem] font-bold tracking-tight text-navy-900">
                    Marth<span className="text-teal-600"> Systems</span>
                </span>
                <span className="block text-[0.6rem] font-medium uppercase tracking-[0.22em] text-slate-400 mt-0.5">
                    Accurate · Compliant · Connected
                </span>
            </div>
        </div>
    );
}