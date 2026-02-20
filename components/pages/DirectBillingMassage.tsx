
import { HeroSection } from "@/components/sections/hero-section";
import { ColwoodServices } from "@/components/pages/ColwoodServices";
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

export function DirectBillingMassage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Sync Massage Therapy",
        "image": "https://synctherapy.ca/images/massage-treatment.jpg",
        "telephone": "+1-250-812-8698",
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
        "url": "https://synctherapy.ca/services/direct-billing-massage",
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

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                {/* 1. Custom Hero Section - Side by Side (Image Prominent) */}
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Column */}
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                Direct Billing Available
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Direct Billing Massage & Athletic Therapy in Victoria (Colwood)
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                Direct billing for Pacific Blue Cross, Sun Life, Canada Life, and more.
                            </p>

                            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                                <p>
                                    Skip the paperwork. At <strong>Sync Massage Therapy</strong> in Colwood, we handle the insurance claims for you. We provide direct billing for Registered Massage Therapy (RMT) and Athletic Therapy, serving patients from Langford, View Royal, and Greater Victoria.
                                </p>
                                <div className="p-6 bg-blue-50/80 rounded-2xl border border-blue-100">
                                    <h2 className="text-lg font-bold text-blue-900 mb-2">Does Insurance Cover Visceral Manipulation?</h2>
                                    <p className="text-base text-blue-800/80">
                                        Yes. Visceral Manipulation is performed by a Registered Massage Therapist (RMT) at Sync. If your insurance plan covers Massage Therapy, it typically covers Visceral Manipulation when performed as part of your RMT treatment.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Online – We Bill Insurance</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-slate-200 text-foreground hover:bg-slate-50 hover:border-slate-300 text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <Link href="#insurance-list">Check Your Insurance</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Image Column - Prominent */}
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square">
                                <Image
                                    src="/images/direct-billing-hero.webp"
                                    alt="List of insurance providers accepted at Sync Massage Therapy"
                                    fill
                                    className="object-contain p-8 bg-white" // Using object-contain and white bg to make the text/logos legible
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                            {/* Decorative background blob behind image */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60" />
                        </div>
                    </div>
                </div>

                {/* 2. Direct Billing Bar (Conversion) */}
                <div id="insurance-list" className="mt-16 lg:mt-24">
                    <DirectBillingBar />
                </div>

                {/* 3. Why Choose Us (Direct Billing focus) with Insurer Grid */}
                <section className="py-24 lg:py-32 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            <div className="flex-1 space-y-10">
                                <ScrollReveal>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                        Hassle-Free Payments
                                    </div>
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight">
                                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">Sync Massage Therapy?</span>
                                    </h3>
                                    <p className="text-xl text-muted-foreground leading-relaxed font-light">
                                        Choose convenience. Our <strong>fast, paperless billing system</strong> means you walk out feeling relaxed, not worrying about admin. We verify your coverage instantly and submit claims on your behalf.
                                    </p>

                                    <div className="bg-white/50 border border-blue-100 rounded-2xl p-6 mt-8">
                                        <h4 className="font-bold text-blue-900 mb-4">Supported Insurers:</h4>
                                        <ul className="grid grid-cols-2 gap-3 text-slate-700 font-medium">
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Pacific Blue Cross</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Sun Life Financial</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Canada Life</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Manulife</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Industrial Alliance</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Chamber of Commerce</li>
                                        </ul>
                                        <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl text-sm text-amber-800">
                                            <strong>Please note:</strong> Pacific Blue Cross direct billing is currently available for Registered Massage Therapy (RMT) appointments only. Athletic Therapy claims can be submitted for all other listed insurers.
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-8">
                                        <Button
                                            size="lg"
                                            className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                            asChild
                                        >
                                            <a href="https://synctherapy.janeapp.com/">Ready to book?</a>
                                        </Button>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <div className="flex-1 w-full relative group">
                                <ScrollReveal delay={0.2}>
                                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border-8 border-white/50 backdrop-blur-sm bg-white/20">
                                        {/* Illustration of insurance cards or billing process */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
                                            <div className="grid grid-cols-2 gap-4 p-8 opacity-80">
                                                <div className="bg-white p-4 rounded-xl shadow-sm text-center font-bold text-blue-900/60">Pacific Blue Cross</div>
                                                <div className="bg-white p-4 rounded-xl shadow-sm text-center font-bold text-blue-900/60">Canada Life</div>
                                                <div className="bg-white p-4 rounded-xl shadow-sm text-center font-bold text-blue-900/60">Sun Life</div>
                                                <div className="bg-white p-4 rounded-xl shadow-sm text-center font-bold text-blue-900/60">Manulife</div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/90 backdrop-blur-md border-t border-white/50">
                                            <p className="font-bold text-2xl mb-1 tracking-tight text-blue-900">Direct Billing Available</p>
                                            <p className="text-slate-600 font-medium">We handle the paperwork for you.</p>
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
                            <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50/50 backdrop-blur-sm">Trusted by Thousands</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground font-sans tracking-tight">
                                Reviews from Local Clients
                            </h2>
                        </div>
                        <GlassCard className="bg-white/40 backdrop-blur-md border-white/60 shadow-xl p-8 rounded-3xl">
                            <GoogleReviewsColumns />
                        </GlassCard>
                    </div>
                </section>

                {/* 5. First Visit Roadmap (Conversion) */}
                <FirstVisitRoadmap />

                {/* 6. Pricing */}
                <PricingSection />

                {/* 7. Location */}
                <LocationSection />

                {/* 8. Checklist Section (New) */}
                <section className="py-16 bg-blue-50/50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-blue-100">
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 text-xl">📋</span>
                                Checklist: Before You Book
                            </h3>
                            <p className="text-lg text-slate-600 mb-8">
                                While we handle the submission, every insurance plan is unique. We recommend checking these 3 details in your portal (e.g., Pacific Blue Cross Member Profile) before your visit:
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100/50">
                                    <div className="font-bold text-blue-800 mb-2">1. Do you have a deductible?</div>
                                    <p className="text-sm text-slate-600">Some plans require you to pay the first $50-$100 of the year yourself.</p>
                                </div>
                                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100/50">
                                    <div className="font-bold text-blue-800 mb-2">2. Is a doctor's note required?</div>
                                    <p className="text-sm text-slate-600">We don't need one, but your insurance might require one on file to reimburse you.</p>
                                </div>
                                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100/50">
                                    <div className="font-bold text-blue-800 mb-2">3. When does your year reset?</div>
                                    <p className="text-sm text-slate-600">Most reset Jan 1st, but some are on a fiscal year.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. FAQ - Direct Billing Specific */}
                <FaqSection
                    heading="Direct Billing & Insurance FAQ"
                    description="Common questions about using your extended health benefits for massage therapy."
                    faqs={[
                        {
                            question: "Do you bill for ICBC or WorkSafeBC?",
                            answer: "No, at this time we do not direct bill for ICBC or WorkSafeBC claims. We provide a detailed receipt for you to submit manually."
                        },
                        {
                            question: "How does it work?",
                            answer: "Bring your card or upload it to our secure Jane App portal. We submit the claim for you, and you just pay the remaining percentage (if any)."
                        },
                        {
                            question: "Do I need a doctor's referral for coverage?",
                            answer: "Our clinic does not require a referral to book an appointment. However, your specific insurance plan *might* require a doctor's referral for reimbursement. We recommend checking your benefits booklet or online portal to confirm before your visit."
                        },
                        {
                            question: "Can you check my coverage limit before my appointment?",
                            answer: "Due to privacy laws, insurance companies will not disclose your remaining balance or coverage limits to us directly. We can only see if a claim is approved or denied at the time of submission. Please check your balance with your provider beforehand."
                        },
                        {
                            question: "What if my claim is denied or requires manual submission?",
                            answer: "In rare cases where the portal is down or a claim cannot be processed instantly (e.g., 'pending' status), you will be required to pay the full amount at the clinic. We will provide you with a detailed receipt that you can submit manually to your insurer for reimbursement."
                        },
                        {
                            question: "Do you bill for secondary insurance (coordination of benefits)?",
                            answer: "We can only direct bill your *primary* insurance plan. If you have secondary coverage (e.g., through a spouse), you will need to pay any remaining balance and submit the receipt to the secondary insurer yourself."
                        }
                    ]}
                />

            </div>
        </div>
    );
}
