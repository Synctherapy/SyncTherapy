"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (motionQuery.matches) return;

        function handleScroll() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            if (ref.current) {
                ref.current.style.width = `${progress}%`;
                ref.current.setAttribute("aria-valuenow", Math.round(progress).toString());
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Call once on mount to set initial width
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 to-orange-500 z-[100] transition-[width] duration-150 ease-out"
            style={{ width: `0%` }}
            role="progressbar"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Page scroll progress"
        />
    );
}
