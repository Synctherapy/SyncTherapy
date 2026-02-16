"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

export function StickyMobileCTA() {
    const { y } = useWindowScroll();
    const [isVisible, setIsVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        // Show button after scrolling past hero (approx 500px)
        setIsVisible(y > 500);

        // Hide if footer is visible to prevent overlap
        const footer = document.querySelector("footer");
        if (footer) {
            const rect = footer.getBoundingClientRect();
            setIsFooterVisible(rect.top < window.innerHeight);
        }
    }, [y]);

    if (!isVisible || isFooterVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-in slide-in-from-bottom-4 duration-300">
            <Button className="w-full shadow-xl text-lg h-14 font-bold bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="https://synctherapy.janeapp.com/">Book Appointment</a>
            </Button>
        </div>
    );
}
