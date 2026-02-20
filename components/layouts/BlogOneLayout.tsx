"use client";

import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { Verified, ShieldCheck } from "lucide-react";

interface BlogOneLayoutProps {
    frontmatter: {
        title: string;
        date?: string;
        author?: string; // We might need to map this to an object
        description?: string;
        readTime?: string; // Optional if we calculate it
        category?: string;
    };
    content: React.ReactNode; // Content is passed as children or rendered HTML
    toc?: { id: string; text: string }[];
}

export function BlogOneLayout({ frontmatter, content, toc }: BlogOneLayoutProps) {
    // Mock data for author if not present - mapping from template
    const authorName = frontmatter.author || "Dr. Aris Thorne";
    const authorRole = "RMT, PhD";
    const authorImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAc-eW12rCHZkz8c41DbXegbvcd6Pc6geyggon8WGdJP3kEotvi01hakUQgrtgldysjlE-OKEiBzOHXlqiA5ycwdCUswTL4RVEYaOah_2kcXvqjQGt745RM3TE3wELC2Vrl18gwpSCDpJeuuJcNvibMS2LF7q3lE4klLm8dcJsiVuqAVo7oJUqt0LFj4ipEAJdHqXSBCfDU72wQ--Rx-jWpmSuTw8DY-5g6J5TyNfBc6G3UFrXX5jRZtQiWJb_Fg291gusPVnaYujM";

    const formattedDate = frontmatter.date ? format(new Date(frontmatter.date), "MMM d, yyyy") : "Oct 24, 2023";

    return (
        <div className="font-sans antialiased bg-[#F0F5FF] min-h-screen text-[#1A2B3C]">
            {/* Header handled by global layout mostly, but template has specific one. 
          We might want to hide global header or overlay it. 
          For now, let's implement the specific components inside the layout. 
      */}

            {/* Sticky TOC Bar */}
            <div className="sticky top-14 z-40 bg-[#F0F5FF]/90 backdrop-blur-md border-b border-[#1A2B3C]/5 overflow-x-auto hide-scrollbar px-4 py-3 flex gap-6 text-[11px] font-bold uppercase tracking-wider text-[#1A2B3C]/40">
                <a className="whitespace-nowrap text-[#2563EB] border-b-2 border-[#2563EB]" href="#overview">Overview</a>
                <a className="whitespace-nowrap hover:text-[#2563EB] transition-colors" href="#content">Article</a>
                {/* Dynamic TOC items could go here */}
                <a className="whitespace-nowrap hover:text-[#2563EB] transition-colors" href="#resources">Resources</a>
            </div>

            <main className="max-w-3xl mx-auto">
                <section className="bg-[#1A2B3C] text-white px-5 pt-12 pb-14 relative overflow-hidden rounded-b-3xl mb-8">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#2563EB]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                    <div className="flex items-center gap-2 mb-6">
                        <span className="bg-[#2563EB] text-white px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">Medical Review</span>
                        <span className="text-white/40 text-[10px] font-medium uppercase tracking-widest">• {frontmatter.readTime || "5 min read"}</span>
                    </div>

                    <h1 className="text-4xl leading-[1.1] mb-10 font-sans font-extrabold tracking-tight">
                        {frontmatter.title}
                    </h1>

                    <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#2563EB] relative">
                            <Image
                                alt={authorName}
                                src={authorImage}
                                fill
                                sizes="56px"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-1.5">
                                <p className="text-sm font-bold text-white font-sans">{authorName}</p>
                                <Verified className="text-[#2563EB] w-4 h-4 fill-current" />
                            </div>
                            <p className="text-[11px] text-white/60 leading-snug mb-1">{authorRole}</p>
                            <div className="flex items-center gap-2">
                                <span className="text-[9px] font-bold text-[#2563EB] uppercase tracking-widest">Reviewed {formattedDate}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Image placeholder if we had one in frontmatter, otherwise skipping as template allows */}

                <article className="px-6 py-8" id="content">
                    {/* Clinical Standard Box */}
                    <div className="bg-white border-l-4 border-[#2563EB] p-6 mb-12 shadow-[0_4px_20px_-4px_rgba(37,99,235,0.1)] rounded-r-xl">
                        <div className="flex items-center gap-2 text-[#2563EB] mb-3">
                            <ShieldCheck className="w-5 h-5" />
                            <p className="text-[10px] font-bold uppercase tracking-widest">Clinical Standard</p>
                        </div>
                        <p className="text-sm text-[#1A2B3C]/80 leading-relaxed font-body">
                            This article has been peer-reviewed for clinical accuracy by our senior medical staff. Sync Massage Therapy protocols are based on current evidence-based athletic therapy standards.
                        </p>
                    </div>

                    {/* Content Injection */}
                    <div className="prose prose-lg max-w-none text-[#1A2B3C]/80 font-body
                prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#1A2B3C]
                prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6
                prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-[#2563EB] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-[#2563EB] prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-[#1A2B3C] prose-blockquote:bg-white/50 prose-blockquote:rounded-r-lg
                prose-img:rounded-2xl prose-img:shadow-xl prose-img:shadow-[#1A2B3C]/10
            ">
                        {content}
                    </div>
                </article>

                {/* Clinical Lead Profile / Sidebar content at bottom for mobile, or could be sidebar on desktop */}
                <section className="mx-6 mb-16 p-8 bg-white rounded-3xl border border-[#1A2B3C]/5 shadow-2xl shadow-[#1A2B3C]/5" id="resources">
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-8 border-b border-[#1A2B3C]/5 pb-3">Clinical Lead Profile</h5>
                    <div className="flex items-center gap-5 mb-6">
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden">
                            <Image
                                alt={authorName}
                                src={authorImage}
                                fill
                                sizes="80px"
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#1A2B3C] font-sans">{authorName}</h4>
                            <p className="text-[12px] text-[#1A2B3C]/50 font-medium uppercase tracking-wide">{authorRole} • Senior Clinician</p>
                        </div>
                    </div>
                    <p className="text-sm text-[#1A2B3C]/70 leading-relaxed mb-8 font-body">
                        Specializing in high-performance musculoskeletal rehabilitation, Dr. Thorne integrates evidence-based research with hands-on clinical mastery.
                    </p>
                    <div className="grid grid-cols-2 gap-4 border-y border-[#1A2B3C]/5 py-6">
                        <div>
                            <p className="text-[#1A2B3C] font-bold text-2xl font-sans">1.2k+</p>
                            <p className="text-[10px] text-[#2563EB] uppercase font-bold tracking-widest">Clinical Cases</p>
                        </div>
                        <div>
                            <p className="text-[#1A2B3C] font-bold text-2xl font-sans">98%</p>
                            <p className="text-[10px] text-[#2563EB] uppercase font-bold tracking-widest">Recovery Rate</p>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="px-6 mb-20">
                    <div className="bg-[#1A2B3C] rounded-[2rem] p-10 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2563EB]"></div>
                        <h3 className="text-2xl font-sans text-white mb-4">Clinical Resources Weekly</h3>
                        <p className="text-white/50 text-xs mb-10 leading-relaxed font-body">The latest evidence-based insights in recovery science.</p>
                        <div className="space-y-4">
                            <input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#2563EB] outline-none text-white placeholder-white/20 transition-all" placeholder="Clinical email address" type="email" />
                            <button className="w-full bg-[#2563EB] text-white font-bold uppercase tracking-[0.15em] text-[11px] py-4 rounded-xl shadow-lg shadow-[#2563EB]/20 active:scale-95 transition-transform">
                                Subscribe to Journal
                            </button>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
