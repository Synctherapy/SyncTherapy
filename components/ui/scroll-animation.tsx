import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    delay?: number; // Kept for backwards compatibility
}

export function ScrollAnimation({ children, className = "" }: ScrollAnimationProps) {
    // Static implementation to improve performance and remove hydration mismatch/flash
    // Original animations were causing performance issues and layout shifts
    return (
        <div className={cn(className)}>
            {children}
        </div>
    );
}
