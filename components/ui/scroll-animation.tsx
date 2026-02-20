"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string; // Allow passing styles
    delay?: number; // Optional delay
}

export function ScrollAnimation({ children, className = "", delay = 0 }: ScrollAnimationProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true); // Default true for SEO/SSR

    useEffect(() => {
        setIsVisible(false);
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { rootMargin: "-100px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                className
            )}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}
