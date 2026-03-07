"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// ⚡ Bolt Optimization:
// Removed `useWindowScroll` which triggers re-renders on every scroll pixel.
// Replaced with a throttled IntersectionObserver for the footer and a simple
// custom scroll listener that only updates React state when the threshold is crossed.
// Also removed synchronous layout read (`getBoundingClientRect`) which causes layout thrashing.
export function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        // 1. Handle threshold visibility with a highly efficient scroll listener
        // Only updates state when crossing the 500px boundary
        const handleScroll = () => {
            const shouldBeVisible = window.scrollY > 500;
            setIsVisible((prev) => {
                if (prev !== shouldBeVisible) return shouldBeVisible;
                return prev;
            });
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        // 2. Handle footer visibility using IntersectionObserver
        // Bypasses synchronous getBoundingClientRect() on every scroll tick
        const footer = document.querySelector("footer");
        let observer: IntersectionObserver;

        if (footer) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    setIsFooterVisible(entry.isIntersecting);
                },
                // Trigger slightly before footer is fully visible
                { rootMargin: "50px 0px 0px 0px", threshold: 0 }
            );
            observer.observe(footer);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (observer && footer) observer.unobserve(footer);
        };
    }, []);

    if (!isVisible || isFooterVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-in slide-in-from-bottom-4 duration-300">
            <Button className="w-full shadow-xl text-lg h-14 font-bold bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="https://synctherapy.janeapp.com/">Book Appointment</a>
            </Button>
        </div>
    );
}
