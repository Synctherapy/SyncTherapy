"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Verified, ShieldCheck, Zap, Leaf, ChevronRight, ChevronDown, Share2, Facebook, Linkedin, ArrowUp, Calendar, Clock, User } from "lucide-react";

// ─── Category Types ────────────────────────────────────────────
export type BlogCategory = "red-light-recovery" | "gut-health-nutrition" | "manual-therapy";

// ─── E-E-A-T Config Per Category ───────────────────────────────
const EEAT_CONFIG: Record<BlogCategory, {
    icon: React.ElementType;
    header: string;
    body: string;
}> = {
    "red-light-recovery": {
        icon: Zap,
        header: "Clinical Perspective: Recovery Modalities",
        body: "As a Certified Athletic Therapist and RMT, I evaluate recovery tech based on its ability to accelerate tissue healing and reduce musculoskeletal inflammation. The insights in this article reflect my 12+ years of clinical practice integrating advanced modalities like photobiomodulation with hands-on manual therapy.",
    },
    "gut-health-nutrition": {
        icon: Leaf,
        header: "Clinical Standard: Holistic Nutrition",
        body: "As a Holistic Nutritionist and Athletic Therapist, I approach gut health as the foundation of systemic recovery. The supplements, probiotics, and hydration protocols discussed here are evaluated for their clinical efficacy in reducing systemic inflammation, based on practical experience optimizing client health.",
    },
    "manual-therapy": {
        icon: ShieldCheck,
        header: "Clinical Standard: Manual Therapy",
        body: "The protocols and assessments discussed in this article are based on evidence-based athletic therapy and registered massage therapy standards. This information reflects over a decade of hands-on clinical experience treating chronic pain and sports injuries at Sync Massage Therapy.",
    },
};

// ─── Props ─────────────────────────────────────────────────────
interface BlogOneLayoutProps {
    frontmatter: {
        title: string;
        date?: string;
        author?: string;
        description?: string;
        readTime?: string;
        category?: string;
    };
    content: React.ReactNode;
    category?: BlogCategory;
    toc?: { id: string; text: string }[];
    relatedPosts?: { slug: string; title: string; description?: string; date?: string }[];
    slug?: string;
}

export function BlogOneLayout({ frontmatter, content, category = "manual-therapy", toc, relatedPosts, slug }: BlogOneLayoutProps) {
    // ─── Author ────────────────────────────────────────────────
    const authorName = "Daryl Stubbs";
    const authorRole = "RMT, CAT(C), B.A.E.T., Holistic Nutritionist";
    const authorImage = "/images/daryl-stubbs-author.jpg";

    const formattedDate = frontmatter.date ? format(new Date(frontmatter.date), "MMM d, yyyy") : "";

    // ─── E-E-A-T config for current category ───────────────────
    const eeat = EEAT_CONFIG[category] || EEAT_CONFIG["manual-therapy"];
    const EeatIcon = eeat.icon;

    // ─── Reading Progress Bar ──────────────────────────────────
    const [scrollProgress, setScrollProgress] = useState(0);
    const articleRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            setScrollProgress(Math.min(progress, 100));
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ─── Auto-generate TOC from content ─────────────────────────
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
    const [showToc, setShowToc] = useState(false);
    const [tocOpen, setTocOpen] = useState(false);

    useEffect(() => {
        if (articleRef.current) {
            const h2Elements = articleRef.current.querySelectorAll("h2, h3");
            const items = Array.from(h2Elements).map((el, i) => {
                if (!el.id) el.id = `heading-${i}`;
                return {
                    id: el.id,
                    text: el.textContent || "",
                    level: el.tagName === "H2" ? 2 : 3,
                };
            });
            if (items.length > 2) {
                setHeadings(items);
                setShowToc(true);
            }
        }
    }, []);

    // ─── Share URL (set after mount to avoid hydration mismatch) ──
    const [shareUrl, setShareUrl] = useState("");
    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);
    const shareTitle = frontmatter.title;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
        } catch { /* fallback: do nothing */ }
    };

    return (
        <div className="font-sans antialiased bg-[#F0F5FF] min-h-screen text-[#1A2B3C]">

            {/* ─── Reading Progress Bar ────────────────────────────── */}
            <div
                className="fixed top-0 left-0 h-[3px] bg-[#2563EB] z-[60] transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
                role="progressbar"
                aria-valuenow={Math.round(scrollProgress)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Reading progress"
            />

            {/* ─── Breadcrumb ──────────────────────────────────────── */}
            <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-5 pt-4 pb-2">
                <ol className="flex items-center gap-1.5 text-[12px] text-[#1A2B3C]/50">
                    <li>
                        <Link href="/" className="hover:text-[#2563EB] transition-colors cursor-pointer">Home</Link>
                    </li>
                    <li><ChevronRight className="w-3 h-3" /></li>
                    <li>
                        <Link href="/blog" className="hover:text-[#2563EB] transition-colors cursor-pointer">Blog</Link>
                    </li>
                    <li><ChevronRight className="w-3 h-3" /></li>
                    <li className="text-[#1A2B3C]/80 font-medium truncate max-w-[200px]" aria-current="page">
                        {frontmatter.title}
                    </li>
                </ol>
            </nav>

            <main className="max-w-3xl mx-auto">
                {/* ─── Hero Section ──────────────────────────────────── */}
                <section className="bg-[#1A2B3C] text-white px-5 pt-10 pb-12 relative overflow-hidden rounded-3xl mb-8 mx-4" id="overview">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#2563EB]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                    <div className="flex items-center gap-3 mb-5 flex-wrap">
                        <span className="bg-[#2563EB] text-white px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">Medical Review</span>
                        <span className="text-white/70 text-[11px] font-medium uppercase tracking-widest flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {frontmatter.readTime || "5 min read"}
                        </span>
                        {formattedDate && (
                            <span className="text-white/70 text-[11px] font-medium uppercase tracking-widest flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {formattedDate}
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl sm:text-4xl leading-[1.1] mb-8 font-sans font-extrabold tracking-tight text-white" style={{ color: '#ffffff' }}>
                        {frontmatter.title}
                    </h1>

                    {frontmatter.description && (
                        <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-xl">
                            {frontmatter.description}
                        </p>
                    )}

                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#2563EB]">
                            <Image
                                src={authorImage}
                                alt={`${authorName} - Founder of Sync Massage Therapy`}
                                width={56}
                                height={56}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-1.5">
                                <p className="text-sm font-bold text-white font-sans">{authorName}</p>
                                <Verified className="text-[#2563EB] w-4 h-4 fill-current" />
                            </div>
                            <p className="text-[11px] text-white/75 leading-snug mb-1">{authorRole}</p>
                            {formattedDate && (
                                <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest">Clinically Reviewed {formattedDate}</span>
                            )}
                        </div>
                    </div>
                </section>

                {/* ─── Table of Contents (collapsible, closed by default) ── */}
                {showToc && headings.length > 0 && (
                    <nav aria-label="Table of contents" className="mx-4 mb-8 bg-white rounded-2xl border border-[#2563EB]/15 overflow-hidden shadow-sm">
                        <button
                            onClick={() => setTocOpen(!tocOpen)}
                            className="w-full flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-[#F0F5FF]/70 transition-colors min-h-[48px] border-l-4 border-l-[#2563EB]"
                            aria-expanded={tocOpen}
                            aria-controls="toc-list"
                        >
                            <div className="flex items-center gap-3">
                                <h2 className="text-sm font-bold text-[#1A2B3C] m-0 font-sans">In This Article</h2>
                                <span className="text-xs font-medium text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded-full">{headings.length} sections</span>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-[#2563EB] transition-transform duration-200 ${tocOpen ? "rotate-180" : ""}`} />
                        </button>
                        {tocOpen && (
                            <ol id="toc-list" className="space-y-2 px-6 pb-6">
                                {headings.map((h, i) => (
                                    <li key={h.id}>
                                        <a
                                            href={`#${h.id}`}
                                            className={`text-sm text-[#1A2B3C]/70 hover:text-[#2563EB] transition-colors cursor-pointer block py-1 ${h.level === 3 ? "pl-4" : ""}`}
                                        >
                                            {h.level === 2 && <span className="text-[#2563EB]/50 font-mono text-xs mr-2">{String(i + 1).padStart(2, "0")}</span>}
                                            {h.text}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        )}
                    </nav>
                )}

                {/* ─── Article Content ────────────────────────────────── */}
                <article className="px-6 py-8" id="content" ref={articleRef}>
                    {/* Dynamic E-E-A-T Box */}
                    <div className="bg-white border-l-4 border-[#2563EB] p-6 mb-12 shadow-[0_4px_20px_-4px_rgba(37,99,235,0.1)] rounded-r-xl">
                        <div className="flex items-center gap-2 text-[#2563EB] mb-3">
                            <EeatIcon className="w-5 h-5" aria-hidden="true" />
                            <p className="text-[10px] font-bold uppercase tracking-widest">{eeat.header}</p>
                        </div>
                        <p className="text-sm text-[#1A2B3C]/80 leading-relaxed">
                            {eeat.body}
                        </p>
                    </div>

                    {/* Content Injection */}
                    <div className="prose prose-lg max-w-none text-[#1A2B3C]/80
                prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#1A2B3C]
                prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6
                prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-[#2563EB] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-[#2563EB] prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-[#1A2B3C] prose-blockquote:bg-white/50 prose-blockquote:rounded-r-lg
                prose-img:rounded-2xl prose-img:shadow-xl prose-img:shadow-[#1A2B3C]/10
            ">
                        {content}
                    </div>

                    {/* ─── Mid-Article CTA (category-aware) ──────────────── */}
                    {category === "manual-therapy" ? (
                        <div className="my-16 bg-gradient-to-r from-[#1A2B3C] to-[#2563EB]/90 rounded-2xl p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <p className="text-white/80 text-sm mb-2">Ready to feel the difference?</p>
                            <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 font-sans">Book Your Appointment Today</h3>
                            <p className="text-white/60 text-xs mb-6 max-w-md mx-auto">Direct billing available for Pacific Blue Cross, Canada Life, Sun Life & more.</p>
                            <a
                                href="https://sync-massage-therapy.janeapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-[#1A2B3C] font-bold uppercase tracking-[0.1em] text-[12px] px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer min-h-[48px] min-w-[48px]"
                            >
                                Book Now →
                            </a>
                        </div>
                    ) : (
                        <div className="my-16 bg-white rounded-2xl p-8 text-center border border-[#1A2B3C]/5 shadow-sm">
                            <p className="text-[#1A2B3C]/50 text-xs uppercase tracking-widest font-bold mb-3">
                                {category === "red-light-recovery" ? "Recovery Resources" : "Nutrition Resources"}
                            </p>
                            <h3 className="text-[#1A2B3C] text-xl sm:text-2xl font-bold mb-3 font-sans">
                                {category === "red-light-recovery"
                                    ? "Explore More Recovery Tools"
                                    : "Explore More Nutrition Guides"}
                            </h3>
                            <p className="text-[#1A2B3C]/60 text-sm mb-6 max-w-md mx-auto">
                                {category === "red-light-recovery"
                                    ? "Browse our clinically reviewed guides on red light therapy, PEMF mats, and sauna blankets."
                                    : "Browse our clinically reviewed guides on probiotics, gut health supplements, and hydration protocols."}
                            </p>
                            <a
                                href="/blog"
                                className="inline-block bg-[#2563EB] text-white font-bold uppercase tracking-[0.1em] text-[12px] px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer min-h-[48px] min-w-[48px]"
                            >
                                Browse Articles →
                            </a>
                        </div>
                    )}
                </article>

                {/* ─── Social Share ───────────────────────────────────── */}
                <div className="mx-6 mb-8 flex items-center justify-between border-y border-[#1A2B3C]/5 py-4">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#1A2B3C]/40">Share this article</p>
                    <div className="flex items-center gap-3">
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on Facebook"
                            className="w-10 h-10 rounded-full bg-[#1A2B3C]/5 hover:bg-[#2563EB]/10 flex items-center justify-center transition-colors cursor-pointer"
                        >
                            <Facebook className="w-4 h-4 text-[#1A2B3C]/60" />
                        </a>
                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on LinkedIn"
                            className="w-10 h-10 rounded-full bg-[#1A2B3C]/5 hover:bg-[#2563EB]/10 flex items-center justify-center transition-colors cursor-pointer"
                        >
                            <Linkedin className="w-4 h-4 text-[#1A2B3C]/60" />
                        </a>
                        <button
                            onClick={handleCopyLink}
                            aria-label="Copy article link"
                            className="w-10 h-10 rounded-full bg-[#1A2B3C]/5 hover:bg-[#2563EB]/10 flex items-center justify-center transition-colors cursor-pointer"
                        >
                            <Share2 className="w-4 h-4 text-[#1A2B3C]/60" />
                        </button>
                    </div>
                </div>

                {/* ─── Clinical Lead Profile ─────────────────────────── */}
                <section className="mx-4 mb-12 p-8 bg-white rounded-3xl border border-[#1A2B3C]/5 shadow-2xl shadow-[#1A2B3C]/5" id="resources">
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-8 border-b border-[#1A2B3C]/5 pb-3">Founder & Lead Therapist</h5>
                    <div className="flex items-center gap-5 mb-6">
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                            <Image
                                src={authorImage}
                                alt={`${authorName} - Founder of Sync Massage Therapy`}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#1A2B3C] font-sans">{authorName}</h4>
                            <p className="text-[12px] text-[#1A2B3C]/50 font-medium uppercase tracking-wide">RMT, CAT(C), Holistic Nutritionist</p>
                        </div>
                    </div>
                    <p className="text-sm text-[#1A2B3C]/70 leading-relaxed mb-8">
                        Specializing in high-performance musculoskeletal rehabilitation and functional nutrition, Daryl integrates evidence-based athletic therapy with holistic strategies to resolve chronic pain and optimize systemic health.
                    </p>
                    <div className="grid grid-cols-2 gap-4 border-y border-[#1A2B3C]/5 py-6 mb-6">
                        <div>
                            <p className="text-[#1A2B3C] font-bold text-2xl font-sans">800+</p>
                            <p className="text-[10px] text-[#2563EB] uppercase font-bold tracking-widest">Clients Treated</p>
                        </div>
                        <div>
                            <p className="text-[#1A2B3C] font-bold text-2xl font-sans">6x</p>
                            <p className="text-[10px] text-[#2563EB] uppercase font-bold tracking-widest">Award Winner</p>
                        </div>
                    </div>
                    <a
                        href="https://sync-massage-therapy.janeapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#2563EB] text-white font-bold uppercase tracking-[0.1em] text-[11px] px-6 py-3.5 rounded-xl hover:shadow-lg hover:shadow-[#2563EB]/20 active:scale-95 transition-all cursor-pointer min-h-[44px]"
                    >
                        Book with Daryl →
                    </a>
                </section>

                {/* ─── Related Posts ──────────────────────────────────── */}
                {relatedPosts && relatedPosts.length > 0 && (
                    <section className="mx-4 mb-12">
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-6 px-2">You Might Also Like</h5>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {relatedPosts.slice(0, 4).map((post) => (
                                <Link key={post.slug} href={`/${post.slug}`} className="block group cursor-pointer">
                                    <div className="bg-white rounded-2xl p-5 border border-[#1A2B3C]/5 hover:shadow-lg hover:border-[#2563EB]/20 transition-all h-full">
                                        {post.date && (
                                            <span className="text-[10px] text-[#2563EB] font-bold uppercase tracking-widest">
                                                {format(new Date(post.date), "MMM d, yyyy")}
                                            </span>
                                        )}
                                        <h3 className="text-sm font-bold text-[#1A2B3C] mt-1.5 mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2 font-sans">
                                            {post.title}
                                        </h3>
                                        {post.description && (
                                            <p className="text-xs text-[#1A2B3C]/50 line-clamp-2">{post.description}</p>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* ─── Newsletter ─────────────────────────────────────── */}
                <section className="px-4 mb-16">
                    <div className="bg-[#1A2B3C] rounded-[2rem] p-10 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2563EB]"></div>
                        <h3 className="text-2xl font-sans text-white mb-4">The Sync Therapy Wellness Newsletter</h3>
                        <p className="text-white/60 text-sm mb-10 leading-relaxed">Evidence-based insights on recovery tech, gut health, and pain management straight from the clinic.</p>
                        <div className="space-y-4">
                            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                            <input
                                id="newsletter-email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#2563EB] outline-none text-white placeholder-white/30 transition-all min-h-[48px]"
                                placeholder="Enter your email address"
                                type="email"
                                aria-label="Email address for newsletter"
                            />
                            <button
                                className="w-full bg-[#2563EB] text-white font-bold uppercase tracking-[0.15em] text-[11px] py-4 rounded-xl shadow-lg shadow-[#2563EB]/20 active:scale-95 transition-transform cursor-pointer min-h-[48px]"
                                aria-label="Subscribe to the Sync Therapy newsletter"
                            >
                                GET CLINICAL INSIGHTS
                            </button>
                        </div>
                    </div>
                </section>

                {/* ─── Back to Blog ───────────────────────────────────── */}
                <div className="px-6 pb-12 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-[#2563EB] font-semibold hover:underline transition-colors cursor-pointer min-h-[44px]"
                    >
                        ← Back to All Articles
                    </Link>
                </div>

            </main>
        </div>
    );
}
