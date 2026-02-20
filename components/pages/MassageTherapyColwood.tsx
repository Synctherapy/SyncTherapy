
import { HeroSection } from "@/components/sections/hero-section";

import { MassageTherapyServices } from "@/components/pages/MassageTherapyServices";
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
        "url": "https://synctherapy.ca/services/massage-therapy",
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
        <div className="bg-background min-h-screen relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Global Fluid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/30 rounded-full blur-[100px] animate-blob mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
                <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-teal-100/30 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10">
                {/* 1. Hero Section - SEO Optimized H1 */}
                {/* 1. Hero Section - SEO Optimized H1 */}
                <HeroSection
                    title="Registered Massage Therapy (RMT) in Colwood, BC | Sync Massage Therapy"
                    subtitle="Serving Royal Bay, Langford & West Shore. RMT, Athletic Therapy & Holistic Nutrition — All Under One Roof."
                    image="/uploads/2025/06/Daryl-is-an-RMT-in-Colwood-scaled.jpg"
                    description={
                        <div className="space-y-4">
                            <p>
                                If you're looking for massage therapy in Colwood, you're probably dealing with some kind of pain or stress that's affecting your daily life. Maybe it's that nagging shoulder pain from working at your computer all day, or maybe you just need to actually relax for once. Whatever brought you here, you're in the right place.
                            </p>
                            <p>
                                We've been helping people in Colwood, Langford, and across the West Shore feel better since 2017. Our clinic is right on Wale Road, and we see everything from weekend warriors who overdid it at Thetis Lake to folks who've been dealing with chronic pain for years. The thing is, massage therapy works when it's done right - and we mean really works, not just feels nice for a day.
                            </p>
                            <h2 className="text-2xl font-bold text-white mt-6 mb-2">Why People in Colwood Choose Massage Therapy</h2>
                            <p>
                                Here's what we notice: people wait way too long before getting help. They'll deal with neck pain for months, or they'll just accept that headaches are part of their life now. But here's the truth - most of this stuff can get better with the right treatment approach.
                            </p>
                            <p>
                                The West Shore is active. People here hike, bike, kayak, and work physically demanding jobs. That means bodies take a beating. Add in the stress of commuting to Victoria or long days at the computer, and you've got a recipe for muscle tension and pain.
                            </p>
                        </div>
                    }
                    primaryCtaText="Book Colwood RMT Session"
                    primaryCtaLink="https://synctherapy.janeapp.com/"
                    secondaryCtaText="View Services"
                    secondaryCtaLink="#services"
                />

                {/* 2. Direct Billing Bar (Conversion) */}
                <DirectBillingBar />

                {/* 3. Why Choose Us (E-E-A-T & Meet Your Therapist) */}
                <section className="py-24 lg:py-32 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            <div className="flex-1 space-y-10">
                                <ScrollReveal>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                        Expert Care
                                    </div>
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight">
                                        Why Choose an RMT & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">Athletic Therapist?</span>
                                    </h3>
                                    <p className="text-xl text-muted-foreground leading-relaxed font-light">
                                        <strong>Meet Daryl Stubbs</strong> — Daryl brings a decade of clinical excellence to West Shore's most established community. His unique triple qualification in massage therapy, athletic therapy (graduated 2013), and holistic nutrition provides comprehensive care for Colwood's discerning residents.
                                    </p>

                                    <p className="text-lg text-slate-600 border-l-4 border-blue-200 pl-4 py-2 italic bg-blue-50/30 rounded-r-lg">
                                        We bridge the gap between relaxation and rehabilitation. We don't just rub where it hurts; we use orthopedic assessments to find out <strong>WHY</strong> it hurts, combining RMT with Athletic Therapy principles.
                                    </p>

                                    <div className="grid gap-4 pt-4">
                                        {[
                                            "Bachelor’s in Athletic & Exercise Therapy (2013)",
                                            "Registered Massage Therapist (RMT)",
                                            "Certified Holistic Nutritionist"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 group">
                                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <span className="text-lg text-foreground/80 font-medium group-hover:text-foreground transition-colors">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-8">
                                        <Button
                                            size="lg"
                                            className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                            asChild
                                        >
                                            <a href="https://synctherapy.janeapp.com/">Book Now</a>
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="border-2 border-slate-200 text-foreground hover:bg-slate-50 hover:border-slate-300 text-lg px-8 py-6 h-auto rounded-xl"
                                            asChild
                                        >
                                            <Link href="/about">Meet Daryl</Link>
                                        </Button>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <div className="flex-1 w-full relative group">
                                <ScrollReveal delay={0.2}>
                                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border-8 border-white/50 backdrop-blur-sm">
                                        <Image
                                            src="/uploads/2025/06/Daryl-is-an-RMT-in-Colwood-scaled.jpg"
                                            alt="Daryl Stubbs - RMT and Athletic Therapist in Colwood"
                                            fill
                                            className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <p className="font-bold text-3xl mb-1 tracking-tight">Daryl Stubbs</p>
                                            <p className="text-blue-200 font-medium text-lg tracking-wide">RMT • CAT(C) • Nutritionist</p>
                                        </div>
                                    </div>

                                    {/* Deco elements */}
                                    <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-blue-200/30 rounded-[2.5rem] rounded-tr-[5rem] rotate-6 group-hover:rotate-3 transition-transform duration-700" />
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Testimonials */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50/50 backdrop-blur-sm">Community Trust</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground font-sans tracking-tight">
                                Loved by Locals
                            </h2>
                        </div>
                        <GlassCard className="bg-white/40 backdrop-blur-md border-white/60 shadow-xl p-8 rounded-3xl">
                            <GoogleReviewsColumns />
                        </GlassCard>
                    </div>
                </section>

                {/* 5. First Visit Roadmap (Conversion) */}
                <FirstVisitRoadmap />

                {/* 6. Services Grid (Reused) */}
                <div id="services">
                    <MassageTherapyServices />
                </div>

                {/* 7. Pricing */}
                <div className="flex flex-col items-center text-center">
                    <PricingSection />
                </div>

                {/* 8. Location */}
                <LocationSection />

                {/* 9. FAQ */}
                {/* 9. FAQ - Hyper Local SEO */}
                <FaqSection
                    heading="Common Questions About Massage Therapy in Colwood"
                    description="Everything you need to know about booking an RMT appointment in the West Shore."
                    faqs={[
                        {
                            question: "Where is your Colwood massage clinic located?",
                            answer: "We are conveniently located at 328 Wale Rd #120 in Colwood, serving the entire West Shore community including Royal Bay, Langford, and Metchosin. Our clinic offers a calm, professional environment with ample free parking right outside."
                        },
                        {
                            question: "Do you offer direct billing for Colwood residents?",
                            answer: "Yes! We offer direct billing to most major insurance providers including Pacific Blue Cross, Canada Life, Manulife, Sun Life, and more. We handle the paperwork so you can focus on your recovery."
                        },
                        {
                            question: "What types of massage therapy do you offer in Colwood?",
                            answer: "Our Colwood clinic provides a comprehensive range of services including Deep Tissue Massage, Sports Massage, Myofascial Release, Trigger Point Therapy, and Relaxation Massage. We also offer Athletic Therapy for injury rehabilitation."
                        },
                        {
                            question: "How quickly can I book an RMT appointment in Colwood?",
                            answer: "We strive to offer flexible availability for our West Shore patients. You can view real-time availability and book instantly online through our Jane App system. We recommend booking in advance for evening and weekend slots."
                        },
                        {
                            question: "Do I need a doctor's referral for massage therapy?",
                            answer: "No referral is required to book an appointment at our Colwood clinic. However, check your specific insurance plan as some extended health benefits may require one for reimbursement."
                        },
                        {
                            question: "Is there parking available at your Wale Rd location?",
                            answer: "Absolutely. One of the benefits of our Colwood location is the stress-free parking. There is a large, free parking lot directly in front of the clinic, making your visit easy and accessible."
                        }
                    ]}
                />

            </div>
        </div>
    );
}
