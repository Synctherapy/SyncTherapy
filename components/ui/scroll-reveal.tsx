"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    viewOptions?: any; // Kept for backwards compatibility but not used exactly the same
}

export function ScrollReveal({
    children,
    width = "fit-content",
    className,
    delay = 0,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true); // Default to true to prevent SEO/hydration issues

    useEffect(() => {
        // Run once on mount to handle initial state, then use observer
        setIsVisible(false);
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { rootMargin: "-10px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div style={{ position: "relative", width }} className={className}>
            <div
                ref={ref}
                className={cn(
                    "transition-all duration-700 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    className?.includes("h-full") && "h-full"
                )}
                style={{ transitionDelay: `${delay}s` }}
            >
                {children}
            </div>
        </div>
    );
}
