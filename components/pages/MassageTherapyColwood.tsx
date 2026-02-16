"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { Feature } from "@/components/ui/feature-section-with-grid";
import { DetailedServicesGrid } from "@/components/sections/detailed-services-grid";
import { PricingSection } from "@/components/sections/pricing-section";
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { DirectBillingBar } from "@/components/sections/direct-billing-bar";
import { FirstVisitRoadmap } from "@/components/sections/first-visit-roadmap";

export function MassageTherapyColwood() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Sync Massage Therapy",
        "image": "https://synctherapy.ca/images/massage-treatment.jpg",
        "telephone": "+1-250-555-0000",
        "email": "info@synctherapy.ca",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "328 Wale Rd #120",
            "addressLocality": "Colwood",
            "addressRegion": "BC",
            "postalCode": "V9B 0J8",
            "addressCountry": "CA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.4359,
            "longitude": -123.4752
        },
        "url": "https://synctherapy.ca/services/massage-therapy-colwood",
        "priceRange": "$$",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Therapeutic Massage Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Tissue Massage" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sports Massage" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Myofascial Release" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trigger Point Therapy" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Relaxation Massage" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Direct Billing Massage" } }
            ]
        }
    };

    return (
        <div className="bg-background min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. Hero Section - SEO Optimized H1 */}
            <HeroSection
                title="Registered Massage Therapy (RMT) in Colwood, BC | Sync Massage Therapy"
                subtitle="Serving Royal Bay, Langford & West Shore. RMT, Athletic Therapy & Holistic Nutrition — All Under One Roof."
                primaryCtaText="Book Colwood RMT Session"
                primaryCtaLink="https://synctherapy.janeapp.com/"
                secondaryCtaText="View Services"
                secondaryCtaLink="#services"
            />

            {/* 2. Direct Billing Bar (Conversion) */}
            <DirectBillingBar />

            {/* 3. Who We Serve (Mini-Hubs for Local Intent) */}
            <section className="py-20 bg-primary/5 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                            Trusted By Locals
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground font-sans">
                            Therapeutic Treatments for Colwood Residents
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            As Colwood's trusted Registered Massage Therapist, we understand the specific needs of our community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "💻", title: "Desk Worker Tension", desc: "For Colwood & Victoria Commuters dealing with neck strain." },
                            { icon: "🏃", title: "Sports Recovery", desc: "For Langford athletes and active residents." },
                            { icon: "🌊", title: "Royal Bay Families", desc: "Stress relief for busy parents in our seaside community." },
                            { icon: "🎓", title: "Students & Faculty", desc: "Accessible care for Royal Roads University members." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <GlassCard className="p-8 text-center h-full hover:scale-105 transition-transform duration-300">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </GlassCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. First Visit Roadmap (Conversion) */}
            <FirstVisitRoadmap />

            {/* 5. Services Grid (Reused) */}
            <div id="services">
                <DetailedServicesGrid />
            </div>

            {/* 6. Feature/Conditions Grid (Reused) */}
            <Feature />

            {/* 7. Why Choose Us (E-E-A-T & Meet Your Therapist) */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <h3 className="text-3xl md:text-5xl font-bold text-foreground font-sans leading-tight">
                                Why Choose an RMT & <span className="text-primary">Athletic Therapist in Colwood?</span>
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                <strong>Meet Daryl Stubbs</strong> — Daryl brings a decade of clinical excellence to West Shore's most established community. His unique triple qualification in massage therapy, athletic therapy (graduated 2013), and holistic nutrition provides comprehensive care for Colwood's discerning residents.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Bachelor’s in Athletic & Exercise Therapy (2013)",
                                    "Registered Massage Therapist (RMT)",
                                    "Certified Holistic Nutritionist",
                                    "Specializing in Chronic Pain & Sports Injury"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</div>
                                        <span className="text-foreground/80 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Now</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-primary/20 text-foreground hover:bg-primary/5"
                                    asChild
                                >
                                    <Link href="/about">Meet Daryl</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500">
                                <Image
                                    src="/uploads/2025/06/Daryl-is-an-RMT-in-Colwood-scaled.jpg"
                                    alt="Daryl Stubbs - RMT and Athletic Therapist in Colwood"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="font-bold text-2xl">Daryl Stubbs</p>
                                    <p className="text-primary-foreground/80">RMT • CAT(C) • Nutritionist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Testimonials */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground font-sans">
                        What Colwood Residents Say
                    </h2>
                    <GoogleReviewsColumns />
                </div>
            </section>

            {/* 9. Pricing */}
            <PricingSection />

            {/* 10. Location */}
            <LocationSection />

            {/* 11. FAQ */}
            <FaqSection />

        </div>
    );
}
