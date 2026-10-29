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
        <div className="bg-[#040A1C] text-slate-100 min-h-screen overflow-x-hidden">
            <BlogSEO
                title="Marth Systems Blog — Practical Insights for U.S. Healthcare Operations"
                description="Practical insights on provider credentialing, payer enrollment, medical billing, AR management, prior authorization, provider contracting, and connected healthcare operations."
                path="/blog"
            />

            {/* A. HERO SECTION */}
            <section className="relative overflow-hidden bg-[#040A1C] pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-white/10">
                <div className="pointer-events-none absolute -left-36 top-10 h-[460px] w-[460px] rounded-full bg-cyan-500/15 blur-[130px] animate-ambient-slow" />
                <div className="pointer-events-none absolute -right-32 top-20 h-[440px] w-[440px] rounded-full bg-teal-400/15 blur-[130px] animate-ambient-reverse" />
                <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />
                
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 backdrop-blur-md">
                                <BookOpen className="h-3.5 w-3.5" />
                                Editorial Publication
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight text-white">
                                Marth Systems{" "}
                                <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
                                    Blog
                                </span>
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
            <section className="relative overflow-hidden bg-[#060E28] py-16 sm:py-24">
                <div className="pointer-events-none absolute -left-20 top-40 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    
                    {/* B. FEATURED ARTICLE AREA (Shown when viewing 'All' topics) */}
                    {activeCategory === "All" && featuredPost && (
                        <div className="mb-16 sm:mb-20">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300">
                                    <Layers className="h-4 w-4 text-teal-400" />
                                    Featured Insight
                                </div>
                            </div>
                            <BlogCard post={featuredPost} featured={true} />
                        </div>
                    )}

                    {/* D. BROWSE BY TOPIC */}
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    Browse by Topic
                                </h2>
                                <p className="mt-1 text-sm text-slate-300">
                                    Filter educational articles by operational focus area.
                                </p>
                            </div>
                            <span className="text-xs font-medium text-slate-400">
                                Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
                            </span>
                        </div>

                        {/* Topic Pills */}
                        <div className="mt-6 flex flex-wrap gap-2.5">
                            <button
                                onClick={() => handleCategoryClick("All")}
                                className={`rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                                    activeCategory === "All"
                                        ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-navy-950 shadow-lg shadow-teal-500/20"
                                        : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
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
                                        className={`rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                                            isActive
                                                ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-navy-950 shadow-lg shadow-teal-500/20"
                                                : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
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
                            <h2 className="text-2xl font-bold tracking-tight text-white">
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
                            <div className="rounded-[28px] border border-white/10 bg-slate-900/75 p-12 text-center backdrop-blur-xl">
                                <p className="text-base text-slate-300">
                                    No articles found in this category.
                                </p>
                                <button
                                    onClick={() => handleCategoryClick("All")}
                                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-5 py-2.5 text-xs font-bold text-navy-950 cursor-pointer"
                                >
                                    View All Articles
                                </button>
                            </div>
                        )}
                    </div>

                    {/* E. CLOSING CTA */}
                    <div className="mt-20 sm:mt-28">
                        <div className="rounded-[36px] border border-white/15 bg-gradient-to-br from-slate-900/90 via-[#07112C] to-slate-950 p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-2xl">
                            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                                <div className="lg:col-span-8">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-300">
                                        <CheckCircle2 className="h-4 w-4 text-teal-400" />
                                        Marth Systems Operations
                                    </span>
                                    <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
                                        Need support with your healthcare operations?
                                    </h3>
                                    <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl">
                                        Whether navigating provider credentialing, streamlining billing, working aged accounts 
                                        receivable, or managing prior authorizations, our team brings accuracy, compliance, and structure 
                                        to your administrative workflows.
                                    </p>
                                </div>
                                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-premium transition-all hover:brightness-110"
                                    >
                                        Request a Consultation
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        to="/credentialing"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15"
                                    >
                                        Explore Our Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
