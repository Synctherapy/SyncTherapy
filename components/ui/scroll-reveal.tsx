import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    viewOptions?: any;
}

export function ScrollReveal({
    children,
    width = "fit-content",
    className,
}: ScrollRevealProps) {
    return (
        <div style={{ position: "relative", width }} className={cn(className)}>
            {children}
        </div>
    );
}
