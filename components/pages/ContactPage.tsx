"use client";

import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { LocationSection } from "@/components/sections/location-section";
import GoogleReviewWidget from "@/components/GoogleReviewWidget";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Car,
    Calendar,
    Star,
    Award,
    ExternalLink,
} from "lucide-react";

/* ─── NAP Data ──────────────────────────────────────────────────── */
const NAP = {
    name: "Sync Massage Therapy",
    street: "132, 328 Wale Rd #120",
    city: "Colwood",
    province: "BC",
    postalCode: "V9B 1J2",
    country: "Canada",
    phone: "(250) 812-8698",
    phoneTel: "+12508128698",
    email: "info@synctherapy.ca",
    bookingUrl: "https://synctherapy.janeapp.com/",
    directionsUrl:
        "https://www.google.com/maps/dir//Sync+Massage+Therapy,+132,+328+Wale+Rd+%23120+Colwood,+BC+V9B+1J2/@48.445469,-123.4724964,17z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x548f74851cb74787:0xeacdf009885e6cb5!2m2!1d-123.4699215!2d48.445469!3e0?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D",
    googleMapsUrl:
        "https://www.google.com/maps/dir//Sync+Massage+Therapy,+132,+328+Wale+Rd+%23120+Colwood,+BC+V9B+1J2/@48.445469,-123.4724964,17z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x548f74851cb74787:0xeacdf009885e6cb5!2m2!1d-123.4699215!2d48.445469!3e0?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D",
};

const HOURS = [
    { day: "Monday", time: "9:00 am – 5:00 pm" },
    { day: "Tuesday", time: "8:00 am – 8:00 pm" },
    { day: "Wednesday", time: "8:00 am – 8:00 pm" },
    { day: "Thursday", time: "8:00 am – 8:00 pm" },
    { day: "Friday", time: "9:00 am – 5:00 pm" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
];

/* ─── Open / Closed Status Helper ───────────────────────────────── */
function getOpenStatus(): { isOpen: boolean; label: string } {
    const now = new Date();
    const day = now.getDay(); // 0=Sun, 1=Mon, …
    const hour = now.getHours();

    // Sat / Sun
    if (day === 0 || day === 6) return { isOpen: false, label: "Closed Today" };

    // Mon & Fri: 9-17
    if (day === 1 || day === 5) {
        if (hour >= 9 && hour < 17) return { isOpen: true, label: "Open Now" };
        return { isOpen: false, label: "Closed Now" };
    }

    // Tue-Thu: 8-20
    if (hour >= 8 && hour < 20) return { isOpen: true, label: "Open Now" };
    return { isOpen: false, label: "Closed Now" };
}

/* ═══════════════════════════════════════════════════════════════════
   ContactPage Component
   ═══════════════════════════════════════════════════════════════════ */
export function ContactPage() {
    const status = getOpenStatus();

    return (
        <main>
            {/* ── Hero ─────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-navy via-digital-blue-900 to-digital-blue-800">
                {/* Decorative blobs */}
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-digital-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-digital-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
                    {/* Trust badge */}
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6 border-white/20 bg-white/5">
                            <div className="flex -space-x-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star
                                        key={i}
                                        className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]"
                                    />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-white">
                                4.9 Stars · 120+ Reviews
                            </span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.05}>
                        <h1 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight text-balance">
                            Get In Touch
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
                            Book online, call us, or visit our clinic on Wale Road in Colwood.
                            We&apos;re here to help you feel better, move better, and live
                            better.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                variant="premium"
                                className="text-base px-8 h-13 shadow-blue-900/30"
                                asChild
                            >
                                <a
                                    href={NAP.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Book an appointment online"
                                    className="cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5 mr-1" />
                                    Book Online
                                </a>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base px-8 bg-transparent h-13"
                                asChild
                            >
                                <a href={`tel:${NAP.phoneTel}`} aria-label={`Call Sync Massage Therapy at ${NAP.phone}`} className="cursor-pointer">
                                    <Phone className="w-5 h-5 mr-1" />
                                    Call {NAP.phone}
                                </a>
                            </Button>
                        </div>
                    </ScrollReveal>

                    {/* Trust indicators */}
                    <ScrollReveal delay={0.2}>
                        <div className="mt-12 flex flex-wrap justify-center gap-3">
                            {[
                                { icon: Award, text: "8x Award Winner" },
                                { icon: Star, text: "120+ Five-Star Reviews" },
                                { icon: Car, text: "Free Parking" },
                            ].map((item) => (
                                <div
                                    key={item.text}
                                    className="flex items-center gap-2 text-white/90 glass-panel px-3 py-2 rounded-lg border-white/10 bg-white/5"
                                >
                                    <item.icon className="w-4 h-4 flex-shrink-0 text-blue-300" />
                                    <span className="text-xs font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── Contact Info Cards ───────────────────────────────────── */}
            <section className="py-20 md:py-28 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-digital-blue-50/50 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-14">
                            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground">
                                Contact Information
                            </h2>
                            <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto">
                                Everything you need to reach us or plan your visit.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Card 1: Visit Us */}
                        <ScrollReveal delay={0.1} className="w-full h-full">
                            <GlassCard
                                variant="strong"
                                className="flex flex-col h-full p-8"
                            >
                                <div className="p-3 rounded-xl bg-digital-blue-50 text-digital-blue-600 w-fit mb-5">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h3 className="font-sans text-xl font-bold text-foreground mb-3">
                                    Visit Us
                                </h3>
                                <address className="not-italic text-muted-foreground space-y-1 text-sm leading-relaxed flex-grow">
                                    <p className="font-semibold text-foreground">{NAP.name}</p>
                                    <p>{NAP.street}</p>
                                    <p>
                                        {NAP.city}, {NAP.province} {NAP.postalCode}
                                    </p>
                                </address>
                                <p className="flex items-center gap-2 text-xs text-green-700 font-medium bg-green-50 w-fit px-3 py-1.5 rounded-full mt-4">
                                    <Car className="w-3.5 h-3.5" /> Free parking on site
                                </p>
                                <div className="mt-5 pt-5 border-t border-border">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        asChild
                                        className="w-full"
                                    >
                                        <a
                                            href={NAP.directionsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Get directions to Sync Massage Therapy on Google Maps"
                                            className="cursor-pointer"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            Get Directions
                                        </a>
                                    </Button>
                                </div>
                            </GlassCard>
                        </ScrollReveal>

                        {/* Card 2: Call or Email */}
                        <ScrollReveal delay={0.2} className="w-full h-full">
                            <GlassCard
                                variant="strong"
                                className="flex flex-col h-full p-8"
                            >
                                <div className="p-3 rounded-xl bg-digital-blue-50 text-digital-blue-600 w-fit mb-5">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="font-sans text-xl font-bold text-foreground mb-3">
                                    Call or Email
                                </h3>
                                <div className="space-y-4 flex-grow">
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                            Phone
                                        </p>
                                        <a
                                            href={`tel:${NAP.phoneTel}`}
                                            className="text-lg font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
                                            aria-label={`Call Sync Massage Therapy at ${NAP.phone}`}
                                        >
                                            {NAP.phone}
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                            Email
                                        </p>
                                        <a
                                            href={`mailto:${NAP.email}`}
                                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors break-all cursor-pointer"
                                            aria-label={`Email Sync Massage Therapy at ${NAP.email}`}
                                        >
                                            {NAP.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-5 pt-5 border-t border-border">
                                    <Button size="sm" asChild className="w-full cursor-pointer">
                                        <a
                                            href={NAP.bookingUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Book an appointment online"
                                        >
                                            <Calendar className="w-4 h-4 mr-1" />
                                            Book Appointment
                                        </a>
                                    </Button>
                                </div>
                            </GlassCard>
                        </ScrollReveal>

                        {/* Card 3: Hours */}
                        <ScrollReveal delay={0.3} className="w-full h-full">
                            <GlassCard
                                variant="strong"
                                className="flex flex-col h-full p-8"
                            >
                                <div className="p-3 rounded-xl bg-digital-blue-50 text-digital-blue-600 w-fit mb-5">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h3 className="font-sans text-xl font-bold text-foreground mb-3">
                                    Hours
                                </h3>

                                {/* Open/Closed badge */}
                                <div
                                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold w-fit mb-4 ${status.isOpen
                                        ? "bg-green-50 text-green-700"
                                        : "bg-red-50 text-red-700"
                                        }`}
                                >
                                    <span
                                        className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-green-500" : "bg-red-500"
                                            }`}
                                    />
                                    {status.label}
                                </div>

                                <ul className="space-y-2.5 flex-grow">
                                    {HOURS.map((h) => (
                                        <li
                                            key={h.day}
                                            className="flex justify-between items-center text-sm"
                                        >
                                            <span className="text-muted-foreground font-medium">
                                                {h.day}
                                            </span>
                                            <span
                                                className={`font-semibold ${h.time === "Closed"
                                                    ? "text-muted-foreground/60"
                                                    : "text-foreground"
                                                    }`}
                                            >
                                                {h.time}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ── Google Map + Location Details ─────────────────────────── */}
            <LocationSection />

            {/* ── Google Reviews ───────────────────────────────────────── */}
            <section className="py-20 md:py-28 bg-background border-t border-border">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground">
                                What Our Clients Say
                            </h2>
                            <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto">
                                120+ five-star reviews from real patients on Google.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <GoogleReviewWidget />
                    </ScrollReveal>
                </div>
            </section>

            {/* ── Final CTA ────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-r from-navy via-digital-blue-900 to-digital-blue-800 py-20 md:py-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,102,255,0.15),transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <ScrollReveal>
                        <h2 className="font-sans text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Book Your Appointment?
                        </h2>
                        <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
                            Schedule online in under a minute. We direct bill most extended
                            health plans.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                variant="premium"
                                className="text-base px-10 h-14 shadow-xl"
                                asChild
                            >
                                <a
                                    href={NAP.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Book an appointment online"
                                    className="cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5 mr-1" />
                                    Book Online Now
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base px-8 bg-transparent h-14"
                                asChild
                            >
                                <a href={`tel:${NAP.phoneTel}`} aria-label={`Call Sync Massage Therapy at ${NAP.phone}`} className="cursor-pointer">
                                    <Phone className="w-5 h-5 mr-1" />
                                    Call {NAP.phone}
                                </a>
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
