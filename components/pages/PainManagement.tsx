
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

export function PainManagement() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Sync Therapy Pain Management",
        "url": "https://synctherapy.ca/services/pain-management",
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
        "medicalSpecialty": "PainManagement",
        "availableService": {
            "@type": "MedicalService",
            "name": "Pain Management",
            "description": "Specialized pain management focusing on nervous system regulation and chronic inflammation."
        }
    };

    const pricingPlans = [
        {
            name: "75 Minute Pain Management",
            price: "157.50",
            period: "per session",
            features: [
                "Nervous system regulation",
                "Soft tissue treatment",
                "Direct Billing Available",
                "Detailed assessment included"
            ],
            description: "Ideal for complex chronic pain conditions.",
            buttonText: "Book 75 Minutes",
            href: "https://synctherapy.janeapp.com/",
            isPopular: false,
        },
        {
            name: "Initial Pain Assessment",
            price: "130",
            period: "60 minutes",
            features: [
                "Comprehensive pain history review",
                "Nervous system assessment",
                "Targeted management plan",
                "Evidence-based relief",
                "Direct Billing Available"
            ],
            description: "Required for all new patients to establish a baseline.",
            buttonText: "Book Initial Visit",
            href: "https://synctherapy.janeapp.com/",
            isPopular: true,
        },
        {
            name: "90 Minute Pain Management",
            price: "178.50",
            period: "per session",
            features: [
                "Maximum hands-on time",
                "Full nervous system reset",
                "Deep restorative focus",
                "Direct Billing Available",
                "Stress reduction focus"
            ],
            description: "The ultimate session for deep relief and regulation.",
            buttonText: "Book 90 Minutes",
            href: "https://synctherapy.janeapp.com/",
            isPopular: false,
        },
    ];

    const treatmentLinks = [
        { title: "Chronic Pain Management", href: "/services/chronic-pain-management/" },
        { title: "Back Pain Treatment", href: "/services/back-pain-treatment/" },
        { title: "Neck Pain Relief", href: "/services/neck-pain-relief/" },
        { title: "Fibromyalgia Treatment", href: "/services/fibromyalgia-treatment/" },
        { title: "Migraine & Headache", href: "/services/migraine-headache-management/" },
        { title: "Sciatica Treatment", href: "/services/sciatica-treatment/" },
        { title: "Arthritis Pain Management", href: "/services/arthritis-pain-management/" },
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
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
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
                                Pain Management & Chronic Pain Relief in Colwood
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                The Pain Management Approach. Serving Colwood, Langford & West Shore.
                            </p>

                            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                                <p>
                                    Pain isn't just a muscle problem; it's a nervous system signal. We focus on down-regulating Central Sensitization and managing chronic inflammation.
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
                                    <a href="https://synctherapy.janeapp.com/">Book Assessment</a>
                                </Button>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square">
                                <Image
                                    src="/images/generated/chronic-pain-management-colwood-clinic.jpg"
                                    alt="chronic-pain-management-colwood-clinic.jpg"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    unoptimized
                                />
                            </div>
                            {/* Decorative background blob behind image */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60" />
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
                                Pain Management Treatments
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Specialized care for chronic and acute pain conditions.
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
                                    Meet Your Pain Management Team
                                </h2>
                                <p className="text-xl text-slate-700 leading-relaxed font-light">
                                    We use an evidence-based approach to pain relief. Our RMTs focus on soft tissue treatment and nervous system regulation to help manage your pain long-term.
                                </p>

                                <div className="bg-blue-50/80 p-8 rounded-2xl border border-blue-100 mt-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                                            <Image
                                                src="/images/daryl-stubbs-thumb.jpg"
                                                alt="Daryl Stubbs RMT"
                                                width={64}
                                                height={64}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-blue-900 text-lg">
                                                Daryl Stubbs, RMT - Clinical Director
                                            </h4>
                                            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                                                "Our goal isn't just to fix the symptom, but to understand the driver. By regulating the nervous system, we can often reduce the volume of pain you experience daily."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">Platinum</div>
                                        <div className="text-sm font-medium text-slate-600">Award Winner</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">Evidence</div>
                                        <div className="text-sm font-medium text-slate-600">Based Relief</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center col-span-2">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">RMT</div>
                                        <div className="text-sm font-medium text-slate-600">Registered Massage Therapy</div>
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
                            Pain Management Rates
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
                    description="Common questions about our pain management approach."
                    faqs={[
                        {
                            question: "Do I need a doctor's referral?",
                            answer: "You do not need a referral to see our RMTs for pain management. However, some insurance plans may require one for reimbursement. Please check with your provider."
                        },
                        {
                            question: "How is this different from relaxation massage?",
                            answer: "Relaxation massage focuses on stress reduction. Our Pain Management approach focuses on the nervous system, down-regulating Central Sensitization, and addressing the root causes of chronic inflammation and pain."
                        },
                        {
                            question: "Can you help with conditions like Fibromyalgia?",
                            answer: "Yes. We have experience managing complex pain conditions including Fibromyalgia. Our approach is gentle, evidence-based, and focused on nervous system regulation to avoid flare-ups."
                        }
                    ]}
                />

                {/* 9. Final CTA */}
                <section className="py-16 bg-white border-t border-slate-200">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Start Your Pain Management Plan</h2>
                        <div className="flex justify-center mb-12">
                            <Button
                                size="lg"
                                className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg px-8 py-6 rounded-xl text-lg"
                                asChild
                            >
                                <a href="https://synctherapy.janeapp.com/">Book Assessment</a>
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
