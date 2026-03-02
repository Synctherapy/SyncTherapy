"use client";

import { useState, useEffect } from "react";

export function ShareButtons() {
    const [shareUrl, setShareUrl] = useState("");

    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
        } catch { /* fallback: do nothing */ }
    };

    return (
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
                    {/* Facebook icon */}
                    <svg className="w-4 h-4 text-[#1A2B3C]/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="w-10 h-10 rounded-full bg-[#1A2B3C]/5 hover:bg-[#2563EB]/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                    {/* LinkedIn icon */}
                    <svg className="w-4 h-4 text-[#1A2B3C]/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <button
                    onClick={handleCopyLink}
                    aria-label="Copy article link"
                    className="w-10 h-10 rounded-full bg-[#1A2B3C]/5 hover:bg-[#2563EB]/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                    {/* Share2 icon */}
                    <svg className="w-4 h-4 text-[#1A2B3C]/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                </button>
            </div>
        </div>
    );
}
