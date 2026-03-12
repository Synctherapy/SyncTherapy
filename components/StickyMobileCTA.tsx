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
        <>
            {/* Mobile: full-width bottom bar */}
            <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-in slide-in-from-bottom-4 duration-300">
                <Button className="w-full shadow-xl text-lg h-14 font-bold bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" asChild>
                    <a href="https://synctherapy.janeapp.com/">Book Appointment</a>
                </Button>
            </div>
            {/* Desktop: subtle pill in bottom-right */}
            <div className="fixed bottom-6 right-6 z-50 hidden md:block animate-in slide-in-from-bottom-4 duration-300">
                <Button className="shadow-xl text-base h-12 font-bold bg-orange-500 text-white hover:bg-orange-600 rounded-full px-6 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2" asChild>
                    <a href="https://synctherapy.janeapp.com/">Book Your Visit</a>
                </Button>
            </div>
        </>
    );
}
