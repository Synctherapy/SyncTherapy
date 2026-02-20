
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { DirectBillingBar } from "@/components/sections/direct-billing-bar";
import { FirstVisitRoadmap } from "@/components/sections/first-visit-roadmap";
import { Pricing } from "@/components/ui/pricing";

export function SportsInjuryRehab() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Sync Sports Injury Rehab",
        "url": "https://synctherapy.ca/services/sports-injury-rehab",
        "logo": "https://synctherapy.ca/images/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-250-812-8698",
            "contactType": "customer service"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "328 Wale Rd #120",
            "addressLocality": "Colwood",
            "addressRegion": "BC",
            "postalCode": "V9B 0J8",
            "addressCountry": "CA"
        },
        "medicalSpecialty": "SportsMedicine",
        "availableService": {
            "@type": "MedicalService",
            "name": "Sports Injury Rehabilitation",
            "description": "Clinical orthopedic assessment and return-to-play rehabilitation for acute injuries."
        }
    };

    const pricingPlans = [
        {
            name: "Initial Athletic Therapy Assessment",
            price: "130",
            period: "60 minutes",
            features: [
                "Clinical orthopedic assessment",
                "Functional diagnosis",
                "Return-to-Play planning",
                "Active rehabilitation start",
                "Direct Billing Available"
            ],
            description: "Required for new injuries to determine the root cause.",
            buttonText: "Book Assessment",
            href: "https://synctherapy.janeapp.com/",
            isPopular: true,
        },
        {
            name: "Rehab Follow-Up",
            price: "105",
            period: "45 minutes",
            features: [
                "Hands-on manual therapy",
                "Exercise progression",
                "Taping & Bracing",
                "Sport-specific drills"
            ],
            description: "Focused treatment to get you back to your sport.",
            buttonText: "Book Follow-Up",
            href: "https://synctherapy.janeapp.com/",
            isPopular: false,
        },
        {
            name: "Extended Rehab Session",
            price: "135",
            period: "60 minutes",
            features: [
                "Complex injury care",
                "Multiple injury sites",
                "Extensive exercise review",
                "Direct Billing Available"
            ],
            description: "For complex cases requiring more time.",
            buttonText: "Book Extended",
            href: "https://synctherapy.janeapp.com/",
            isPopular: false,
        },
    ];

    const treatmentLinks = [
        { title: "Sports Injury Treatment", href: "/services/sports-injury-treatment/" },
        { title: "Athletic Therapy", href: "/services/athletic-therapy/" },
        { title: "Knee Pain Treatment", href: "/services/knee-pain-treatment/" },
        { title: "Athletic Training", href: "/services/athletic-training/" },
        { title: "Tendonitis Treatment", href: "/services/tendonitis-treatment/" },
        { title: "Sprain & Strain Treatment", href: "/services/sprain-strain-treatment/" },
        { title: "Baseball Injury Therapy", href: "/services/baseball-injury-therapy/" },
        { title: "Rotator Cuff Rehab", href: "/services/rotator-cuff-rehab/" },
        { title: "Anterior Knee Pain", href: "/services/anterior-knee-pain/" },
        { title: "Shoulder Impingement", href: "/services/shoulder-impingement/" },
    ];

    return (
        <div className="bg-background min-h-screen relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Global Fluid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/30 rounded-full blur-[100px] animate-blob mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-orange-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
                <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-teal-100/30 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                {/* 1. Custom Hero Section - Side by Side */}
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Column */}
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                Voted Platinum Winner: Best Massage Therapy Clinic (2024 Community Votes)
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Sports Injury Rehabilitation
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                The Injury Assessment Team. Serving Colwood, Langford & West Shore.
                            </p>

                            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                                <p>
                                    We provide clinical orthopedic assessment for acute injuries. As Certified Athletic Therapists, we act as your primary care for sprains, tears, and return-to-play decisions. No referral needed.
                                </p>
                                <p className="font-medium text-blue-900">
                                    Direct Billing to Pacific Blue Cross, Canada Life, Sun Life.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Injury Assessment</a>
                                </Button>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square">
                                <Image
                                    src="/images/generated/sports_injury_rehab_hero.jpg"
                                    alt="Sports injury rehabilitation session"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    unoptimized
                                />
                            </div>
                            {/* Decorative background blob behind image */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-100 to-blue-100 rounded-full blur-3xl opacity-60" />
                        </div>
                    </div>
                </div>

                {/* 2. Direct Billing Bar */}
                <div className="mt-16 lg:mt-24">
                    <DirectBillingBar />
                </div>

                {/* 3. Treatments Grid (The Hub) */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                Sports Injury Treatments
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Rapid assessment and rehabilitation for athletes and active individuals.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {treatmentLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="group">
                                    <GlassCard className="p-8 rounded-3xl h-full hover:border-blue-200 transition-all hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                                            {link.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm font-medium flex items-center gap-2">
                                            View Treatment <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </p>
                                    </GlassCard>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Differentiation / Expert Bio */}
                <section className="py-24 bg-white/50 border-y border-white/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                                    Why Choose an Athletic Therapist?
                                </h2>
                                <p className="text-xl text-slate-700 leading-relaxed font-light">
                                    We are experts in rapid return-to-play. Whether you are an elite athlete or a weekend warrior, we treat your injury with the same clinical rigor used in professional sports.
                                </p>

                                <div className="bg-blue-50/80 p-8 rounded-2xl border border-blue-100 mt-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                                            <Image
                                                src="/images/daryl-stubbs-thumb.jpg"
                                                alt="Daryl Stubbs CAT(C)"
                                                width={64}
                                                height={64}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-blue-900 text-lg">
                                                Daryl Stubbs, CAT(C) - Certified Athletic Therapist
                                            </h4>
                                            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                                                "My job is to bridge the gap between injury and performance. We don't just treat the pain; we correct the biomechanics that caused it, ensuring you come back stronger."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">CAT(C)</div>
                                        <div className="text-sm font-medium text-slate-600">Certified Athletic Therapist</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">Sports</div>
                                        <div className="text-sm font-medium text-slate-600">First Responders</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center col-span-2">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">Return<br />To Play</div>
                                        <div className="text-sm font-medium text-slate-600">Specialists</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Pricing (Centered) */}
                <section className="py-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                            Athletic Therapy Rates
                        </h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            Transparent pricing. Direct Billing to Pacific Blue Cross, Canada Life, Sun Life.
                        </p>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="flex justify-center">
                            <div className="w-full max-w-5xl">
                                <Pricing
                                    plans={pricingPlans}
                                    title=""
                                    description=""
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Testimonials */}
                <section className="py-24 relative bg-blue-50/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                                What Locals Say
                            </h2>
                        </div>
                        <GlassCard className="bg-white/40 backdrop-blur-md border-white/60 shadow-xl p-8 rounded-3xl">
                            <GoogleReviewsColumns />
                        </GlassCard>
                    </div>
                </section>

                {/* 7. Roadmap */}
                <FirstVisitRoadmap />

                {/* 8. FAQ */}
                <FaqSection
                    heading="Frequently Asked Questions"
                    description="Common questions about Athletic Therapy and Sports Rehab."
                    faqs={[
                        {
                            question: "Do I need a referral to see an Athletic Therapist?",
                            answer: "No, Certified Athletic Therapists (CAT(C)) are primary care providers. You can book an assessment directly without a doctor's referral."
                        },
                        {
                            question: "What is the difference between Physiotherapy and Athletic Therapy?",
                            answer: "Athletic Therapy specializes in rapid return-to-play and on-field emergency care, with a heavy focus on active rehabilitation and biomechanics. We bridge the gap between the clinic and your sport."
                        },
                        {
                            question: "Can you treat non-sports injuries?",
                            answer: "Yes! 'Athletic' refers to our active approach to recovery, not just the patient population. We treat everyone from gardeners with back pain to professional rugby players. The goal is always to get you moving pain-free."
                        }
                    ]}
                />

                {/* 9. Final CTA */}
                <section className="py-16 bg-white border-t border-slate-200">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Start Your Rehab Plan</h2>
                        <div className="flex justify-center mb-12">
                            <Button
                                size="lg"
                                className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg px-8 py-6 rounded-xl text-lg"
                                asChild
                            >
                                <a href="https://synctherapy.janeapp.com/">Book Injury Assessment</a>
                            </Button>
                        </div>
                        <div className="max-w-4xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5293.16543562527!2d-123.4704954927292!3d48.44534801448843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f74851cb74787%3A0xeacdf009885e6cb5!2sSync%20Massage%20Therapy!5e0!3m2!1sen!2sca!4v1771428978889!5m2!1sen!2sca" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </section>

                <LocationSection />
            </div>
        </div>
    );
}
