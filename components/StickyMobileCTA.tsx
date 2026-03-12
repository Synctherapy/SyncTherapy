"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useWindowScroll } from "react-use";

// Blog slugs are defined by the catch-all route and rendered via BlogOneLayout.
// We hide the sticky CTA on blog posts to avoid distracting from long-form content.
const BLOG_PREFIXES = ["/best-", "/top-", "/how-", "/what-", "/is-", "/does-", "/can-"];

export function StickyMobileCTA() {
    const { y } = useWindowScroll();
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    // Hide on blog posts — they live at root-level slugs like /best-red-light-therapy/
    const isBlogPost =
        BLOG_PREFIXES.some(p => pathname.startsWith(p)) ||
        // Catch blog posts that don't match prefixes but are in known blog categories
        (!pathname.startsWith("/services") &&
         !pathname.startsWith("/conditions") &&
         !pathname.startsWith("/about") &&
         !pathname.startsWith("/contact") &&
         !pathname.startsWith("/direct-billing") &&
         !pathname.startsWith("/new-patients") &&
         !pathname.startsWith("/our-team") &&
         !pathname.startsWith("/blog") &&
         !pathname.startsWith("/html-sitemap") &&
         pathname !== "/" &&
         pathname.split("/").filter(Boolean).length === 1 &&
         pathname.length > 5);

    useEffect(() => {
        setIsVisible(y > 500);

        const footer = document.querySelector("footer");
        if (footer) {
            const rect = footer.getBoundingClientRect();
            setIsFooterVisible(rect.top < window.innerHeight);
        }
    }, [y]);

    if (isBlogPost || !isVisible || isFooterVisible) return null;

    return (
        <>
            {/* ── Mobile: Orange bar + Book Now FAB ── */}
            <div className="fixed bottom-4 left-4 right-16 z-50 md:hidden animate-in slide-in-from-bottom-4 duration-300">
                <Button className="w-full shadow-xl text-lg h-14 font-bold bg-orange-500 text-white hover:bg-orange-600 rounded-xl focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2" asChild>
                    <a href="/new-patients/">New Patients Start Here</a>
                </Button>
            </div>
            {/* Mobile FAB: quick-book via JaneApp */}
            <div className="fixed bottom-4 right-3 z-50 md:hidden animate-in slide-in-from-bottom-4 duration-300">
                <a
                    href="https://synctherapy.janeapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book appointment on JaneApp"
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-700 text-white shadow-xl hover:bg-blue-800 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    <Calendar className="w-6 h-6" />
                </a>
            </div>

            {/* ── Desktop: Orange pill in bottom-right ── */}
            <div className="fixed bottom-6 right-6 z-50 hidden md:block animate-in slide-in-from-bottom-4 duration-300">
                <Button className="shadow-xl text-base h-12 font-bold bg-orange-500 text-white hover:bg-orange-600 rounded-full px-6 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2" asChild>
                    <a href="https://synctherapy.janeapp.com/">Book Your Visit</a>
                </Button>
            </div>
        </>
    );
}
