"use client";

import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    viewOptions?: { once?: boolean; margin?: string };
}

export function ScrollReveal({
    children,
    width = "fit-content",
    className,
    delay = 0,
    viewOptions = { once: true, margin: "-10px" }
}: ScrollRevealProps) {
    // Animation was disabled (initial="visible" === whileInView="visible")
    // Removed framer-motion entirely for performance optimization.
    return (
        <div style={{ position: "relative", width }} className={className}>
            <div className={cn(className?.includes("h-full") && "h-full")}>
                {children}
            </div>
        </div>
    );
}
