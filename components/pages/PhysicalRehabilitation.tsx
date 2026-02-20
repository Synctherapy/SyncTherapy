
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

export function PhysicalRehabilitation() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Sync Physical Rehabilitation",
        "url": "https://synctherapy.ca/services/physical-rehabilitation",
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
        "medicalSpecialty": "PhysicalTherapy",
        "availableService": {
            "@type": "MedicalService",
            "name": "Physical Rehabilitation",
            "description": "Functional rehabilitation and strength training to build capacity and prevent injury recurrence."
        }
    };

    const pricingPlans = [
        {
            name: "Initial Functional Assessment",
            price: "130",
            period: "60 minutes",
            features: [
                "Movement screen",
                "Strength & capacity testing",
                "Customized rehab plan",
                "Home exercise program",
                "Direct Billing Available"
            ],
            description: "We identify biomechanical faults and build a plan to fix them.",
            buttonText: "Book Assessment",
            href: "https://synctherapy.janeapp.com/",
            isPopular: true,
        },
        {
            name: "Rehab & Strength Session",
            price: "105",
            period: "45 minutes",
            features: [
                "Guided exercise therapy",
                "Load management",
                "Technique correction",
                "Progressive overload"
            ],
            description: "Active sessions to build resilience.",
            buttonText: "Book Session",
            href: "https://synctherapy.janeapp.com/",
            isPopular: false,
        },
        {
            name: "Comprehensive Rehab",
            price: "135",
            period: "60 minutes",
            features: [
                "Advanced strength work",
                "Return-to-Sport testing",
                "Complex case management",
                "Direct Billing Available"
            ],
            description: "For athletes and complex recovery needs.",
            buttonText: "Book Comprehensive",
            href: "https://synctherapy.janeapp.com/",
            isPopular: false,
        },
    ];

    const treatmentLinks = [
        { title: "Sports Injury Rehab", href: "/services/sports-injury-rehab/" },
        { title: "Exercise Therapy", href: "/services/exercise-therapy/" },
        { title: "Chronic Pain Rehab", href: "/services/chronic-pain-rehab/" },
        { title: "Knee Rehab", href: "/services/knee-rehab/" },
        { title: "Back Pain Rehab", href: "/services/back-pain-rehab/" },
        { title: "Shoulder Rehab", href: "/services/shoulder-rehab/" },
        { title: "Hip Rehab", href: "/services/hip-rehab/" },
        { title: "Home Exercise Plans", href: "/services/home-exercise-plans/" },
        { title: "Arthritis Management", href: "/services/arthritis-management/" },
    ];

    return (
        <div className="bg-background min-h-screen relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Global Fluid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-green-100/30 rounded-full blur-[100px] animate-blob mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
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
                                Physical Rehabilitation Center in Colwood
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                The Recovery Architect. Serving Colwood, Langford & West Shore.
                            </p>

                            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                                <p>
                                    Recovery doesn't end when the pain stops. We build load capacity and functional strength so the injury doesn't come back. Bridging the gap between healthcare and the gym.
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
                                    <a href="https://synctherapy.janeapp.com/">Start Rehab</a>
                                </Button>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square">
                                <Image
                                    src="/images/generated/physical_rehabilitation_knee_hero.jpg"
                                    alt="Physical rehabilitation exercise"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    unoptimized
                                />
                            </div>
                            {/* Decorative background blob behind image */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-100 to-blue-100 rounded-full blur-3xl opacity-60" />
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
                                Rehabilitation Programs
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Active recovery programs tailored to your injury and lifestyle.
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
                                            View Program <span className="group-hover:translate-x-1 transition-transform">→</span>
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
                                    Build Resilience, Not Dependency
                                </h2>
                                <p className="text-xl text-slate-700 leading-relaxed font-light">
                                    Many treatments provide temporary relief. We focus on building the strength and capacity you need to handle your life demands, ensuring the injury doesn't return.
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
                                                Daryl Stubbs, CAT(C)
                                            </h4>
                                            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                                                "We treat like performance coaches. Whether you need to lift your groceries without pain or run a marathon, we reverse-engineer the rehab plan to get you there."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">Strength</div>
                                        <div className="text-sm font-medium text-slate-600">Based Recovery</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">Active</div>
                                        <div className="text-sm font-medium text-slate-600">Care Focus</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center col-span-2">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">Functional</div>
                                        <div className="text-sm font-medium text-slate-600">Movement Screening</div>
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
                            Rehabilitation Rates
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
                    description="Common questions about our physical rehabilitation programs."
                    faqs={[
                        {
                            question: "How is this different from a personal trainer?",
                            answer: "We are healthcare providers (Certified Athletic Therapists). We understand pathology, pain mechanisms, and tissue healing. We bridge the gap between initial injury treatment and return to full fitness."
                        },
                        {
                            question: "Do I need to be injured to come in?",
                            answer: "No. We also work on injury prevention and performance optimization. If you want to move better, lift more safely, or prepare for a season, we can help."
                        },
                        {
                            question: "Is this covered by insurance?",
                            answer: "Yes, expert rehabilitation is provided by Certified Athletic Therapists or RMTs and is covered by most extended health plans. We direct bill major providers."
                        }
                    ]}
                />

                {/* 9. Final CTA */}
                <section className="py-16 bg-white border-t border-slate-200">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Start Your Recovery Architecture</h2>
                        <div className="flex justify-center mb-12">
                            <Button
                                size="lg"
                                className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg px-8 py-6 rounded-xl text-lg"
                                asChild
                            >
                                <a href="https://synctherapy.janeapp.com/">Book Rehab Assessment</a>
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
