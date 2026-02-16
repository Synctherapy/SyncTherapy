"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";

// Placeholder logos - in a real scenario these would be actual brand assets
// Using text/simple representations for now if logos aren't available
const insuranceProviders = [
    { name: "Pacific Blue Cross", logo: "/images/insurance/pbc.png" }, // We might need to check if these exist
    { name: "Canada Life", logo: "/images/insurance/canada-life.png" },
    { name: "Manulife", logo: "/images/insurance/manulife.png" },
    { name: "Sun Life", logo: "/images/insurance/sunlife.png" },
    { name: "Desjardins", logo: "/images/insurance/desjardins.png" },
    { name: "Greenshield", logo: "/images/insurance/greenshield.png" },
    { name: "ICBC", logo: "/images/insurance/icbc.png" },
    { name: "WorkSpaceBC", logo: "/images/insurance/wsbc.png" },
];

export function DirectBillingBar() {
    return (
        <div className="w-full bg-slate-50 border-y border-slate-200 py-8 overflow-hidden">
            <div className="container mx-auto px-4 mb-6">
                <p className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
                    Direct Billing Available For
                </p>
            </div>

            {/* Logos formatted as text for now to ensure visibility if images miss */}
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 items-center px-4">
                    {/* Duplicated set for seamless scrolling */}
                    {[...insuranceProviders, ...insuranceProviders, ...insuranceProviders].map((provider, i) => (
                        <div key={i} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default">
                            <span className="text-xl md:text-2xl font-bold font-sans text-slate-800">{provider.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
