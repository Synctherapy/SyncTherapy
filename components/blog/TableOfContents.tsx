"use client";

import { useState, useEffect } from "react";

export function TableOfContents({ articleId }: { articleId: string }) {
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
    const [showToc, setShowToc] = useState(false);
    const [tocOpen, setTocOpen] = useState(false);

    useEffect(() => {
        const articleEl = document.getElementById(articleId);
        if (articleEl) {
            const h2Elements = articleEl.querySelectorAll("h2, h3");
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
    }, [articleId]);

    if (!showToc || headings.length === 0) return null;

    return (
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
                <svg className={`w-5 h-5 text-[#2563EB] transition-transform duration-200 ${tocOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
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
    );
}
