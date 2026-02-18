"use client";

import { ReactNode } from "react";

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string; // Allow passing styles
    delay?: number; // Optional delay
}

export function ScrollAnimation({ children, className = "", delay = 0 }: ScrollAnimationProps) {
    // Animation was disabled (initial="visible" === whileInView="visible").
    // Removed framer-motion for performance.
    return (
        <div className={className}>
            {children}
        </div>
    );
}
