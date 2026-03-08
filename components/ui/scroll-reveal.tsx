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
    // Use an initializer function so it defaults to true on server, but we can manage client state safely.
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Respect prefers-reduced-motion: skip animation entirely
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (motionQuery.matches) {
            setIsVisible(true);
            return;
        }

        // Delay hiding the element to let the browser paint the first frame.
        // Instead of immediate false, we check if it's already in viewport.
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            // If the element is visibly above the fold, we never hide it.
            if (rect.top >= 0 && rect.top <= window.innerHeight) {
                setIsVisible(true);
                return;
            } else {
                setIsVisible(false);
            }
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { rootMargin: "50px" } // Increased rootMargin so it triggers slightly earlier
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
                style={{ transitionDelay: isVisible ? `${delay}s` : '0s' }}
            >
                {children}
            </div>
        </div>
    );
}
