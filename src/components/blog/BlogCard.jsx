import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function BlogCard({ post, featured = false }) {
    if (!post) return null;

    if (featured) {
        return (
            <article className="group relative overflow-hidden rounded-[32px] border border-teal-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-teal-400/70">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                            <span className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/15 px-3 py-1 font-bold uppercase tracking-wider text-teal-300">
                                {post.category}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-slate-400">
                                <Calendar className="h-3.5 w-3.5 text-teal-400" />
                                {post.date}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-slate-400">
                                <Clock className="h-3.5 w-3.5 text-teal-400" />
                                {post.readingTime}
                            </span>
                        </div>

                        <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white transition-colors group-hover:text-teal-300">
                            <Link to={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </h2>

                        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                        <span className="text-xs font-medium text-slate-400">
                            By {post.author}
                        </span>
                        <Link
                            to={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-bold text-teal-300 transition-colors hover:text-teal-200"
                        >
                            Read Article
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article className="group flex flex-col justify-between h-full rounded-[28px] border border-white/10 bg-slate-900/75 p-6 sm:p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/60 hover:bg-slate-900/95">
            <div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/15 px-2.5 py-0.5 font-semibold text-teal-300">
                        {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                        <Calendar className="h-3 w-3 text-teal-400" />
                        {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                        <Clock className="h-3 w-3 text-teal-400" />
                        {post.readingTime}
                    </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-teal-300">
                    <Link to={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300 line-clamp-3">
                    {post.excerpt}
                </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs text-slate-400">
                    {post.author}
                </span>
                <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 transition-colors hover:text-teal-200"
                >
                    Read Article
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </div>
        </article>
    );
}
