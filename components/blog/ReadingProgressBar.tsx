"use client";

import { useEffect, useRef } from "react";

// ⚡ Bolt Optimization:
// Removed React state (`useState`) from scroll handler.
// Directly mutating the DOM `style.width` via `useRef` bypasses the React render
// lifecycle completely. This eliminates a re-render on *every single scroll tick*,
// which is a classic performance anti-pattern.
export function ReadingProgressBar() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!barRef.current) return;

            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            const boundedProgress = Math.min(progress, 100);

            // Bypass React state and update DOM directly for max performance
            barRef.current.style.width = `${boundedProgress}%`;
            barRef.current.setAttribute("aria-valuenow", Math.round(boundedProgress).toString());
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Initial set
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={barRef}
            className="fixed top-0 left-0 h-[3px] bg-[#2563EB] z-[60] transition-all duration-150 ease-out"
            style={{ width: "0%" }}
            role="progressbar"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Reading progress"
        />
    );
}
