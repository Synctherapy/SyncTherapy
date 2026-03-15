"use client";

import { useEffect, useRef } from "react";

export function ReadingProgressBar() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            const clamped = Math.min(progress, 100);

            if (ref.current) {
                ref.current.style.width = `${clamped}%`;
                ref.current.setAttribute("aria-valuenow", Math.round(clamped).toString());
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Call once on mount to set initial width
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 h-[3px] bg-[#2563EB] z-[60] transition-all duration-150 ease-out"
            style={{ width: `0%` }}
            role="progressbar"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Reading progress"
        />
    );
}
