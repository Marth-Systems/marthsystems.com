import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function BlogCard({ post, featured = false }) {
    if (!post) return null;

    if (featured) {
        return (
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-premium transition-all duration-300 hover:border-teal-300 hover:shadow-premium-lg">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                            <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 font-semibold uppercase tracking-wider text-teal-700">
                                {post.category}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-slate-500">
                                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                                {post.date}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-slate-500">
                                <Clock className="h-3.5 w-3.5 text-slate-400" />
                                {post.readingTime}
                            </span>
                        </div>

                        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy-900 transition-colors group-hover:text-teal-700">
                            <Link to={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </h2>

                        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                        <span className="text-xs font-medium text-slate-500">
                            By {post.author}
                        </span>
                        <Link
                            to={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-800"
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
        <article className="group flex flex-col justify-between h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-premium-lg">
            <div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 font-semibold text-teal-700">
                        {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                        <Calendar className="h-3 w-3 text-slate-400" />
                        {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                        <Clock className="h-3 w-3 text-slate-400" />
                        {post.readingTime}
                    </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-navy-900 transition-colors group-hover:text-teal-700">
                    <Link to={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {post.excerpt}
                </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs text-slate-500">
                    {post.author}
                </span>
                <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 transition-colors hover:text-teal-800"
                >
                    Read Article
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </div>
        </article>
    );
}
