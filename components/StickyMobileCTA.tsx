"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        // Optimize: Only trigger re-renders when crossing the 500px threshold,
        // rather than on every single pixel of scroll.
        const handleScroll = () => {
            const shouldBeVisible = window.scrollY > 500;
            setIsVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev));
        };

        handleScroll(); // Initial check

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Optimize: Use IntersectionObserver instead of getBoundingClientRect() on scroll
        // to prevent synchronous layout thrashing (reflow) on the main thread.
        const footer = document.querySelector("footer");
        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            { rootMargin: "0px", threshold: 0 }
        );

        observer.observe(footer);
        return () => observer.disconnect();
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
