import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { 
    Calendar, Clock, ArrowLeft, ArrowRight, ShieldCheck, 
    Share2, ChevronRight, BookOpen
} from "lucide-react";
import BlogSEO from "@/components/blog/BlogSEO";
import BlogCard from "@/components/blog/BlogCard";
import { getPostBySlug, getRelatedPosts } from "@/data/blog/blogPosts";

export default function BlogPost() {
    const { slug } = useParams();
    const post = useMemo(() => getPostBySlug(slug), [slug]);
    const relatedPosts = useMemo(() => getRelatedPosts(post, 3), [post]);

    if (!post) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
                <BlogSEO
                    title="Article Unavailable"
                    description="The requested article is not currently available or may not have been published yet."
                    path={`/blog/${slug || ""}`}
                    noindex={true}
                />
                <div className="relative overflow-hidden bg-navy-900 pt-28 pb-20 sm:pt-36 sm:pb-28">
                    <div className="absolute inset-0 bg-grid-dark opacity-30" />
                    <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
                    <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
                        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-300 mb-6">
                            <Clock className="h-8 w-8" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                            Article Unavailable
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
                            The requested article is not currently available or has not been published yet. Please explore our published insights in the Blog Directory.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 hover:bg-teal-400 transition-colors"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Return to Blog Directory
                            </Link>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1 py-16 px-5 sm:px-6 text-center text-sm text-slate-500">
                    Looking for administrative solutions? Visit{" "}
                    <Link to="/contact" className="text-teal-600 font-medium hover:underline">
                        Marth Systems Consultation
                    </Link>
                    .
                </div>
            </div>
        );
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                url: window.location.href,
            }).catch(() => {});
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Article link copied to clipboard!");
        }
    };

    return (
        <>
            <BlogSEO
                title={post.title}
                description={post.excerpt}
                path={`/blog/${post.slug}`}
                type="article"
                publishedDate={post.publishDate}
                author={post.author}
                articleSchema={{
                    title: post.title,
                    description: post.excerpt,
                    datePublished: post.publishDate,
                    dateModified: post.publishDate,
                }}
            />

            {/* EDITORIAL HEADER / HERO */}
            <header className="relative overflow-hidden bg-navy-900 pt-28 pb-16 sm:pt-36 sm:pb-20">
                <div className="absolute inset-0 bg-grid-dark opacity-30" />
                <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
                <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="mb-6 flex items-center gap-2 text-xs text-slate-400">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="h-3 w-3 text-slate-500" />
                        <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <ChevronRight className="h-3 w-3 text-slate-500" />
                        <Link 
                            to={`/blog?topic=${encodeURIComponent(post.category)}`}
                            className="text-teal-300 hover:text-teal-200 transition-colors"
                        >
                            {post.category}
                        </Link>
                    </nav>

                    {/* Category badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-300">
                        <BookOpen className="h-3.5 w-3.5" />
                        {post.category}
                    </div>

                    {/* Single Clear H1 */}
                    <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight text-white">
                        {post.title}
                    </h1>

                    {/* Dek / Summary */}
                    {post.dek && (
                        <p className="mt-5 text-lg sm:text-xl leading-relaxed text-slate-300 font-normal">
                            {post.dek}
                        </p>
                    )}

                    {/* Metadata bar */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400">
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                            <span className="font-medium text-slate-300">
                                By {post.author}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5 text-teal-400" />
                                {post.date}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Clock className="h-3.5 w-3.5 text-teal-400" />
                                {post.readingTime}
                            </span>
                        </div>
                        <button
                            onClick={handleShare}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                            aria-label="Share this article"
                        >
                            <Share2 className="h-3.5 w-3.5" />
                            Share
                        </button>
                    </div>
                </div>
            </header>

            {/* MAIN ARTICLE BODY */}
            <main className="bg-white py-16 sm:py-20">
                <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
                    
                    {/* Back link */}
                    <div className="mb-10">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Back to All Insights
                        </Link>
                    </div>

                    {/* Formatted Markdown Body */}
                    <div className="prose-content">
                        <ReactMarkdown
                            components={{
                                h2: ({ ...props }) => (
                                    <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-12 mb-4 tracking-tight border-b border-slate-100 pb-3" {...props} />
                                ),
                                h3: ({ ...props }) => (
                                    <h3 className="text-xl sm:text-2xl font-semibold text-navy-900 mt-8 mb-3 tracking-tight" {...props} />
                                ),
                                p: ({ ...props }) => (
                                    <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6" {...props} />
                                ),
                                ul: ({ ...props }) => (
                                    <ul className="my-6 space-y-2.5 pl-6 list-disc text-slate-700 text-base sm:text-lg leading-relaxed marker:text-teal-600" {...props} />
                                ),
                                ol: ({ ...props }) => (
                                    <ol className="my-6 space-y-2.5 pl-6 list-decimal text-slate-700 text-base sm:text-lg leading-relaxed marker:text-teal-700 font-medium" {...props} />
                                ),
                                li: ({ ...props }) => (
                                    <li className="pl-1" {...props} />
                                ),
                                blockquote: ({ ...props }) => (
                                    <blockquote className="border-l-4 border-teal-500 pl-6 my-8 italic text-slate-700 bg-teal-50/50 py-4 rounded-r-lg text-base sm:text-lg" {...props} />
                                ),
                                code: ({ inline, ...props }) => (
                                    inline ? (
                                        <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono text-navy-900" {...props} />
                                    ) : (
                                        <pre className="bg-navy-950 text-slate-200 p-5 rounded-xl overflow-x-auto my-6 text-xs sm:text-sm font-mono border border-navy-800" {...props} />
                                    )
                                ),
                                hr: () => <hr className="my-10 border-slate-200" />,
                                table: ({ ...props }) => (
                                    <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-sm">
                                        <table className="w-full text-left border-collapse" {...props} />
                                    </div>
                                ),
                                th: ({ ...props }) => (
                                    <th className="bg-slate-100 p-3 sm:p-4 text-xs sm:text-sm font-bold text-navy-900 border-b border-slate-200" {...props} />
                                ),
                                td: ({ ...props }) => (
                                    <td className="p-3 sm:p-4 text-xs sm:text-sm text-slate-700 border-b border-slate-100" {...props} />
                                ),
                                strong: ({ ...props }) => (
                                    <strong className="font-semibold text-navy-950" {...props} />
                                ),
                                a: ({ href, ...props }) => (
                                    <a
                                        href={href}
                                        className="text-teal-700 underline font-medium hover:text-teal-800"
                                        {...props}
                                    />
                                ),
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    {/* RELEVANT MARTH SYSTEMS SERVICE CTA */}
                    {post.relatedService && (
                        <div className="mt-14 rounded-2xl border border-teal-200 bg-teal-50/60 p-6 sm:p-8">
                            <div className="flex items-start gap-4">
                                <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-teal-300">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                                        Operational Support
                                    </span>
                                    <h3 className="mt-1 text-lg sm:text-xl font-bold text-navy-900">
                                        {post.relatedService.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                        {post.relatedService.description}
                                    </p>
                                    <div className="mt-4 flex flex-wrap items-center gap-3">
                                        <Link
                                            to={post.relatedService.path}
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:text-teal-700 transition-colors"
                                        >
                                            Learn more about our services
                                            <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>
                                        <span className="text-slate-300">·</span>
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors"
                                        >
                                            Request a consultation
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Author Attribution Card */}
                    <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-white font-bold text-xs">
                                MS
                            </div>
                            <div>
                                <h4 className="font-bold text-navy-900">{post.author}</h4>
                                <p className="text-xs text-slate-500">Marth Systems Editorial Publication</p>
                            </div>
                        </div>
                        <p className="mt-3 text-xs leading-relaxed text-slate-500">
                            Articles published by the Marth Systems Editorial Team focus on practical operational insights for U.S. healthcare organizations. We do not provide clinical advice or legal counsel.
                        </p>
                    </div>

                </div>
            </main>

            {/* RELATED ARTICLES SECTION */}
            {relatedPosts.length > 0 && (
                <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
                    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                        <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                                    Related Insights
                                </h2>
                                <p className="mt-1 text-sm text-slate-600">
                                    Continue exploring operational topics in healthcare administration.
                                </p>
                            </div>
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
                            >
                                View all insights
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedPosts.map((related) => (
                                <BlogCard key={related.slug} post={related} featured={false} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
