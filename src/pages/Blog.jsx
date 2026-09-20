import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import BlogSEO from "@/components/blog/BlogSEO";
import BlogCard from "@/components/blog/BlogCard";
import ScrollReveal from "@/components/ScrollReveal";
import { BLOG_CATEGORIES, getAllPosts, getFeaturedPost } from "@/data/blog/blogPosts";

export default function Blog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = searchParams.get("topic") || "All";

    const allPosts = useMemo(() => getAllPosts(), []);
    const featuredPost = useMemo(() => getFeaturedPost(), []);

    // Filter posts based on selected topic
    const filteredPosts = useMemo(() => {
        if (activeCategory === "All") {
            return allPosts;
        }
        return allPosts.filter((post) => post.category === activeCategory);
    }, [allPosts, activeCategory]);

    // Compute counts for each category
    const categoryCounts = useMemo(() => {
        const counts = { All: allPosts.length };
        BLOG_CATEGORIES.forEach((cat) => {
            counts[cat] = allPosts.filter((p) => p.category === cat).length;
        });
        return counts;
    }, [allPosts]);

    const handleCategoryClick = (category) => {
        if (category === "All") {
            searchParams.delete("topic");
            setSearchParams(searchParams);
        } else {
            setSearchParams({ topic: category });
        }
    };

    return (
        <>
            <BlogSEO
                title="Marth Systems Blog — Practical Insights for U.S. Healthcare Operations"
                description="Practical insights on provider credentialing, payer enrollment, medical billing, AR management, prior authorization, provider contracting, and connected healthcare operations."
                path="/blog"
            />

            {/* A. HERO SECTION */}
            <section className="relative overflow-hidden bg-navy-900 pt-28 pb-20 sm:pt-36 sm:pb-24">
                <div className="absolute inset-0 bg-grid-dark opacity-30" />
                <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
                <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
                
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                                <BookOpen className="h-3.5 w-3.5" />
                                Editorial Publication
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-white">
                                Marth Systems Blog
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mt-4 text-xl sm:text-2xl font-medium text-teal-300">
                                Practical insights for U.S. healthcare operations.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.18}>
                            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
                                In-depth analysis and operational guidance covering provider credentialing, payer enrollment, 
                                medical billing, revenue cycle management, prior authorization, provider contracting, 
                                patient support, and cross-functional healthcare operations.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* MAIN EDITORIAL CONTENT AREA */}
            <section className="bg-slate-50 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    
                    {/* B. FEATURED ARTICLE AREA (Shown when viewing 'All' topics) */}
                    {activeCategory === "All" && featuredPost && (
                        <div className="mb-16 sm:mb-20">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
                                    <Layers className="h-4 w-4" />
                                    Featured Insight
                                </div>
                            </div>
                            <BlogCard post={featuredPost} featured={true} />
                        </div>
                    )}

                    {/* D. BROWSE BY TOPIC */}
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                            <div>
                                <h2 className="text-xl font-bold text-navy-900">
                                    Browse by Topic
                                </h2>
                                <p className="mt-1 text-sm text-slate-600">
                                    Filter educational articles by operational focus area.
                                </p>
                            </div>
                            <span className="text-xs font-medium text-slate-500">
                                Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
                            </span>
                        </div>

                        {/* Topic Pills */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            <button
                                onClick={() => handleCategoryClick("All")}
                                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                                    activeCategory === "All"
                                        ? "bg-navy-900 text-white shadow-sm"
                                        : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                                }`}
                            >
                                All Topics ({categoryCounts.All || 0})
                            </button>
                            {BLOG_CATEGORIES.map((cat) => {
                                const count = categoryCounts[cat] || 0;
                                if (count === 0) return null;
                                const isActive = activeCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategoryClick(cat)}
                                        className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                                            isActive
                                                ? "bg-navy-900 text-white shadow-sm"
                                                : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                                        }`}
                                    >
                                        {cat} ({count})
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* C. LATEST INSIGHTS GRID */}
                    <div>
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                                {activeCategory === "All" ? "Latest Insights" : `${activeCategory} Insights`}
                            </h2>
                        </div>

                        {filteredPosts.length > 0 ? (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredPosts.map((post) => (
                                    <BlogCard key={post.slug} post={post} featured={false} />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
                                <p className="text-base text-slate-600">
                                    No articles found in this category.
                                </p>
                                <button
                                    onClick={() => handleCategoryClick("All")}
                                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2 text-xs font-semibold text-white"
                                >
                                    View All Articles
                                </button>
                            </div>
                        )}
                    </div>

                    {/* E. CLOSING CTA */}
                    <div className="mt-20 sm:mt-28">
                        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 lg:p-16 shadow-premium">
                            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                                <div className="lg:col-span-8">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700">
                                        <CheckCircle2 className="h-4 w-4" />
                                        Marth Systems Operations
                                    </span>
                                    <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-navy-900">
                                        Need support with your healthcare operations?
                                    </h3>
                                    <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
                                        Whether navigating provider credentialing, streamlining billing, working aged accounts 
                                        receivable, or managing prior authorizations, our team brings accuracy, compliance, and structure 
                                        to your administrative workflows.
                                    </p>
                                </div>
                                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-premium transition-all hover:bg-navy-800"
                                    >
                                        Request a Consultation
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        to="/credentialing"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:bg-slate-50"
                                    >
                                        Explore Our Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
