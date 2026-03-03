"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
// import { useWindowScroll } from "react-use"; // Removed to avoid re-rendering on every scroll tick

export function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        // Use IntersectionObserver to track footer visibility
        const footerObserver = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            { rootMargin: "0px" } // Adjust as needed, e.g., "100px" to hide slightly before it's fully in view
        );

        const footer = document.querySelector("footer");
        if (footer) {
            footerObserver.observe(footer);
        }

        // Custom scroll listener that only updates state when crossing the threshold
        let lastVisible = false;
        const threshold = 500;

        const handleScroll = () => {
            const currentVisible = window.scrollY > threshold;
            if (currentVisible !== lastVisible) {
                lastVisible = currentVisible;
                setIsVisible(currentVisible);
            }
        };

        // Initialize state on mount
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (footer) {
                footerObserver.unobserve(footer);
            }
            footerObserver.disconnect();
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
