"use client";

import { motion, UseInViewOptions } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    viewOptions?: UseInViewOptions;
}

export function ScrollReveal({
    children,
    width = "fit-content",
    className,
    delay = 0,
    viewOptions = { once: true, margin: "-10px" } // Adjusted default margin
}: ScrollRevealProps) {
    return (
        <div style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="visible" // Forced visible for debugging
                whileInView="visible"
                viewport={viewOptions}
                transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
                className={cn(className?.includes("h-full") && "h-full")}
            >
                {children}
            </motion.div>
        </div>
    );
}
