import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: "default" | "hover" | "strong";
}

export function GlassCard({ children, className, variant = "default", ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-panel rounded-2xl p-6 transition-all duration-300",
                variant === "hover" && "hover:-translate-y-1 hover:shadow-lg",
                variant === "strong" && "bg-white/80 border-white/50 shadow-md",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
