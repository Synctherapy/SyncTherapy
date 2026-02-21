"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, Calendar, ChevronDown, X } from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────
export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    description: string;
    category: "red-light-recovery" | "gut-health-nutrition" | "manual-therapy";
    readTime: number;
    image: string | null;
};

const CATEGORY_FALLBACK_IMAGES: Record<BlogPost["category"], string> = {
    "red-light-recovery": "/images/blog-fallback-recovery.png",
    "gut-health-nutrition": "/images/blog-fallback-nutrition.png",
    "manual-therapy": "/images/blog-fallback-therapy.png",
};

const CATEGORY_CONFIG = {
    "red-light-recovery": {
        label: "Recovery & Red Light",
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200",
        accent: "from-rose-500 to-orange-400",
    },
    "gut-health-nutrition": {
        label: "Gut Health & Nutrition",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        accent: "from-emerald-500 to-teal-400",
    },
    "manual-therapy": {
        label: "Therapy & Rehab",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200",
        accent: "from-blue-500 to-indigo-400",
    },
} as const;

const TABS = [
    { key: "all" as const, label: "All Articles" },
    { key: "red-light-recovery" as const, label: "Recovery" },
    { key: "gut-health-nutrition" as const, label: "Nutrition" },
    { key: "manual-therapy" as const, label: "Therapy" },
];

const PAGE_SIZE = 12;

// ─── Component ─────────────────────────────────────────────────
export function BlogArchiveClient({ posts }: { posts: BlogPost[] }) {
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState<"all" | BlogPost["category"]>("all");
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    // ─── Filtering ─────────────────────────────────────────────
    const filtered = useMemo(() => {
        let result = posts;

        if (activeTab !== "all") {
            result = result.filter((p) => p.category === activeTab);
        }

        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q)
            );
        }

        return result;
    }, [posts, activeTab, search]);

    const visible = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

    // Reset pagination when filter changes
    const handleTabChange = (tab: typeof activeTab) => {
        setActiveTab(tab);
        setVisibleCount(PAGE_SIZE);
    };

    const handleSearchChange = (val: string) => {
        setSearch(val);
        setVisibleCount(PAGE_SIZE);
    };

    return (
        <div className="font-sans antialiased">
            {/* ─── Hero ─────────────────────────────────────────────── */}
            <section className="bg-gradient-to-b from-[#0A1628] to-[#1A2B3C] text-white py-16 sm:py-20 text-center px-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ color: "#ffffff" }}>
                    The Sync Massage Therapy Blog
                </h1>
                <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
                    Evidence-based insights on recovery, nutrition, and manual therapy — by Daryl Stubbs, RMT.
                </p>

                {/* ─── Search ───────────────────────────────────────── */}
                <div className="max-w-xl mx-auto relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        placeholder="Search articles..."
                        aria-label="Search blog articles"
                        className="w-full pl-12 pr-10 py-4 bg-white/10 border border-white/15 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/60 focus:border-transparent transition-all text-sm backdrop-blur-sm"
                    />
                    {search && (
                        <button
                            onClick={() => handleSearchChange("")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors cursor-pointer"
                            aria-label="Clear search"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </section>

            {/* ─── Category Tabs + Count ────────────────────────────── */}
            <div className="bg-[#F0F5FF] border-b border-[#1A2B3C]/5 sticky top-0 z-30">
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    <nav className="flex gap-1 overflow-x-auto py-3 -mb-px" aria-label="Blog categories">
                        {TABS.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => handleTabChange(tab.key)}
                                className={`px-4 py-2.5 text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${activeTab === tab.key
                                    ? "bg-[#2563EB] text-white shadow-md"
                                    : "text-[#1A2B3C]/60 hover:text-[#1A2B3C] hover:bg-white/60"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                    <p className="text-sm text-[#1A2B3C]/40 font-medium hidden sm:block">
                        {filtered.length} article{filtered.length !== 1 ? "s" : ""}
                    </p>
                </div>
            </div>

            {/* ─── Grid ─────────────────────────────────────────────── */}
            <section className="bg-[#F0F5FF] py-12 px-4 min-h-[60vh]">
                <div className="max-w-6xl mx-auto">
                    {filtered.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-[#1A2B3C]/40 text-lg">No articles found.</p>
                            <button
                                onClick={() => { setSearch(""); setActiveTab("all"); }}
                                className="mt-4 text-[#2563EB] font-semibold text-sm hover:underline cursor-pointer"
                            >
                                Clear filters
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {visible.map((post) => {
                                    const cat = CATEGORY_CONFIG[post.category];
                                    return (
                                        <Link
                                            key={post.slug}
                                            href={`/${post.slug}`}
                                            className="group block"
                                        >
                                            <article className="bg-white rounded-2xl border border-[#1A2B3C]/5 overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                                                {/* Card image */}
                                                <div className="relative h-[180px] overflow-hidden bg-[#1A2B3C]">
                                                    <img
                                                        src={post.image || CATEGORY_FALLBACK_IMAGES[post.category]}
                                                        alt=""
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        loading="lazy"
                                                        onError={(e) => {
                                                            const target = e.currentTarget;
                                                            target.onerror = null;
                                                            target.src = CATEGORY_FALLBACK_IMAGES[post.category];
                                                        }}
                                                    />
                                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.accent}`} />
                                                </div>

                                                <div className="p-6 flex flex-col flex-1">
                                                    {/* Category + Meta */}
                                                    <div className="flex items-center justify-between mb-4">
                                                        <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${cat.bg} ${cat.color} ${cat.border} border`}>
                                                            {cat.label}
                                                        </span>
                                                        <div className="flex items-center gap-3 text-[11px] text-[#1A2B3C]/40">
                                                            <span className="flex items-center gap-1">
                                                                <Clock className="w-3 h-3" />
                                                                {post.readTime} min
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Title */}
                                                    <h2 className="text-lg font-bold text-[#1A2B3C] mb-2 group-hover:text-[#2563EB] transition-colors leading-snug line-clamp-2">
                                                        {post.title}
                                                    </h2>

                                                    {/* Description */}
                                                    {post.description && (
                                                        <p className="text-sm text-[#1A2B3C]/55 leading-relaxed line-clamp-2 mb-4 flex-1">
                                                            {post.description}
                                                        </p>
                                                    )}

                                                    {/* Footer */}
                                                    <div className="flex items-center justify-between pt-4 border-t border-[#1A2B3C]/5 mt-auto">
                                                        <span className="text-xs text-[#1A2B3C]/40 flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" />
                                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric",
                                                            })}
                                                        </span>
                                                        <span className="text-xs font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                                                            Read →
                                                        </span>
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Load More */}
                            {hasMore && (
                                <div className="text-center mt-12">
                                    <button
                                        onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1A2B3C] font-bold text-sm uppercase tracking-wider rounded-2xl border border-[#1A2B3C]/10 hover:border-[#2563EB]/30 hover:shadow-md transition-all cursor-pointer"
                                    >
                                        Load More Articles
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                    <p className="text-xs text-[#1A2B3C]/30 mt-3">
                                        Showing {visible.length} of {filtered.length}
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}
