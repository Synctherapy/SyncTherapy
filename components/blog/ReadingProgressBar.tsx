"use client";

import { useEffect, useRef } from "react";

export function ReadingProgressBar() {
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!progressRef.current) return;

            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            const clampedProgress = Math.min(progress, 100);

            // Mutate DOM directly to bypass React render cycle for high-frequency scroll events
            progressRef.current.style.width = `${clampedProgress}%`;
            progressRef.current.setAttribute("aria-valuenow", Math.round(clampedProgress).toString());
        };

        // Initial set
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={progressRef}
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
