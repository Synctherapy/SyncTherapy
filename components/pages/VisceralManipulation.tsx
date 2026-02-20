"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { Pricing } from "@/components/ui/pricing";

export function VisceralManipulation() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Sync Therapy Visceral Manipulation",
        "url": "https://synctherapy.ca/services/visceral-manipulation",
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
            "name": "Visceral Manipulation",
            "description": "Gentle manual therapy for internal organ restrictions and chronic pain."
        }
    };

    const pricingPlans = [
        {
            name: "Initial Assessment & Treatment",
            price: "130",
            period: "60 minutes",
            features: [
                "Full health history review",
                "Organ mobility screen",
                "Gentle visceral release",
                "Structural integration",
                "Direct Billing Available"
            ],
            description: "Required for all new patients to identify internal restrictions.",
            buttonText: "Book Assessment",
            href: "https://synctherapy.janeapp.com/",
            isPopular: true,
        },
        {
            name: "Follow-Up Session",
            price: "130",
            period: "60 minutes",
            features: [
                "Focused visceral release",
                "Deep tension resolution",
                "Scar tissue mobilization",
                "Nervous system regulation",
                "Direct Billing Available"
            ],
            description: "Continue restoring motion to the organ system.",
            buttonText: "Book Follow-Up",
            href: "https://synctherapy.janeapp.com/",
            isPopular: false,
        },
    ];

    const conditions = [
        { name: 'Chronic Back Pain', url: '/services/back-pain-treatment/', desc: 'Releasing deep tension pulling from the front.' },
        { name: 'Digestive Issues (IBS)', url: '/services/nutrition-consulting/', desc: 'Reducing mechanical restriction in the gut.' },
        { name: 'Sciatica Relief', url: '/services/sciatica-treatment/', desc: 'Addressing pelvic organ pressure on nerves.' },
        { name: 'C-Section/Surgery Scars', url: '/services/myofascial-release/', desc: 'Mobilizing scar tissue adhesions.' },
        { name: 'Hip Mobility', url: '/services/hip-rehab/', desc: 'Restoring cecum/sigmoid colon motion.' },
        { name: 'Chronic Acid Reflux', url: '/services/nutrition-counseling/', desc: 'Releasing tension in the diaphragm/stomach.' },
    ];

    return (
        <div className="bg-background min-h-screen relative selection:bg-indigo-100 selection:text-indigo-900 overflow-hidden">
            <Header /> {/* Manually included as requested */}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Global Fluid Background (Indigo Theme) */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-100/30 rounded-full blur-[100px] animate-blob mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
                <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-blue-100/30 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                {/* 1. Custom Hero Section - Side by Side */}
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Column */}
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                Advanced Manual Therapy
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Visceral Manipulation in Colwood: <span className="text-indigo-600">Back Pain Often Starts in the Front</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                Your organs are attached to your spine. When they get stuck, your back hurts. We restore internal mobility.
                            </p>

                            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                                <p>
                                    We use gentle, precise force to release internal adhesions (scar tissue) that pull on your spine and restrict your movement.
                                </p>
                                <p className="font-medium text-indigo-900">
                                    Direct Billing to Pacific Blue Cross, Canada Life, Sun Life.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-indigo-700 text-white hover:bg-indigo-800 shadow-lg shadow-indigo-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Visceral Assessment</a>
                                </Button>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square">
                                <Image
                                    src="/images/generated/visceral-manipulation-hero.png"
                                    alt="Visceral Manipulation Therapy"
                                    fill
                                    className="object-cover"

                                />
                            </div>
                            {/* Decorative background blob behind image */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-60" />
                        </div>
                    </div>
                </div>

                {/* 2. Identity Section: The Missing Link */}
                <section className="py-24 bg-white/50 border-y border-white/50 backdrop-blur-sm mt-16">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-8">
                            The "Missing Link" in Chronic Pain
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold text-indigo-900 mb-6">
                            Why Your Pain Isn't Where You Think It Is
                        </h3>
                        <p className="text-xl text-slate-700 leading-relaxed font-light mb-8">
                            Organs refer pain to muscles. If the organ is restricted, the brain protects it by tightening the surrounding muscles.
                        </p>
                    </div>
                </section>

                {/* 3. Real World Anatomy (Expanded) */}
                <section className="py-24 relative bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900">4 Common Connections We Treat</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* 1. Liver */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-indigo-100">
                                <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase">01</span>
                                <h3 className="text-2xl font-bold mt-2 mb-4 text-slate-900">Liver & Right Shoulder</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    <strong>The Connection:</strong> The liver connects to the diaphragm, sharing the Phrenic Nerve which travels directly to the right shoulder.
                                </p>
                                <p className="text-slate-700 bg-indigo-50 p-4 rounded-lg text-sm">
                                    <strong>The Symptom:</strong> Deep, aching tension on top of the right shoulder that feels like a "knot" but never releases with standard massage.
                                </p>
                            </div>

                            {/* 2. Intestines */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-indigo-100">
                                <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase">02</span>
                                <h3 className="text-2xl font-bold mt-2 mb-4 text-slate-900">Intestines & Low Back</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    <strong>The Connection:</strong> The "Root of the Mesentery" (anchor for the small intestine) attaches directly to the front of your lumbar spine (L1-L5).
                                </p>
                                <p className="text-slate-700 bg-indigo-50 p-4 rounded-lg text-sm">
                                    <strong>The Symptom:</strong> A nagging, deep low back ache that gets worse after eating or when bloated. It feels "stiff" and deep inside the spine.
                                </p>
                            </div>

                            {/* 3. Stomach */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-indigo-100">
                                <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase">03</span>
                                <h3 className="text-2xl font-bold mt-2 mb-4 text-slate-900">Stomach & Left Shoulder</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    <strong>The Connection:</strong> Just like the liver on the right, the stomach sits under the left diaphragm. Tension here pulls on the left Phrenic Nerve.
                                </p>
                                <p className="text-slate-700 bg-indigo-50 p-4 rounded-lg text-sm">
                                    <strong>The Symptom:</strong> Chronic left neck stiffness or "Trapezius" tightness that flares up with stress, acid reflux, or shallow breathing.
                                </p>
                            </div>

                            {/* 4. Gallbladder */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-indigo-100">
                                <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase">04</span>
                                <h3 className="text-2xl font-bold mt-2 mb-4 text-slate-900">Gallbladder & Scapula</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    <strong>The Connection:</strong> The gallbladder refers pain via the Vagus nerve and spinal segments T4-T9, often bypassing the abdomen entirely.
                                </p>
                                <p className="text-slate-700 bg-indigo-50 p-4 rounded-lg text-sm">
                                    <strong>The Symptom:</strong> A sharp, stabbing pain under the right shoulder blade (scapula) or tension running up the right side of the neck.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Conditions Grid */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                Conditions We Treat
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Visceral Manipulation addresses the root cause of these common issues.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {conditions.map((item) => (
                                <Link key={item.url} href={item.url} className="group">
                                    <GlassCard className="p-8 rounded-3xl h-full hover:border-indigo-200 transition-all hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-indigo-900 mb-3 group-hover:text-indigo-700 transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-slate-600 text-sm font-medium mb-4">
                                            {item.desc}
                                        </p>
                                        <p className="text-indigo-600 text-sm font-bold flex items-center gap-2">
                                            Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </p>
                                    </GlassCard>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Patient Roadmap */}
                <section className="py-24 bg-indigo-50/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-900">What to Expect</h2>
                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-indigo-200 -z-10"></div>

                            <div className="text-center bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-indigo-200 shadow-lg">1</div>
                                <h3 className="font-bold text-xl mb-3 text-slate-900">Internal Listening</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">We use gentle palpation (listening hands) to find where your organs are restricted or pulling.</p>
                            </div>
                            <div className="text-center bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-indigo-200 shadow-lg">2</div>
                                <h3 className="font-bold text-xl mb-3 text-slate-900">Precision Release</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">Using only 5 grams of pressure (the weight of a nickel), we encourage the organ to release its tension.</p>
                            </div>
                            <div className="text-center bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-indigo-200 shadow-lg">3</div>
                                <h3 className="font-bold text-xl mb-3 text-slate-900">Integration</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">We re-check your spinal mobility. Often, a "stuck" back moves freely once the front is released.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Expert Bio */}
                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/3">
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                    <Image
                                        src="/uploads/2025/06/daryls-an-RMT-in-downtown-victoria-offering-massage-therapy.jpg"
                                        alt="Daryl Stubbs RMT"
                                        fill
                                        className="object-cover"

                                    />
                                </div>
                            </div>
                            <div className="md:w-2/3 space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-2">Meet Daryl Stubbs, RMT</h3>
                                    <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none">
                                        Advanced Practice Focus: Visceral Manipulation
                                    </Badge>
                                </div>
                                <p className="text-xl text-slate-700 italic font-light leading-relaxed">
                                    "I have pursued advanced training in Visceral Manipulation because I saw too many patients whose back pain wasn't just a muscle knot. By treating the organ system, we often solve chronic cases that have failed other treatments."
                                </p>
                                <Button asChild variant="link" className="text-indigo-600 font-bold p-0 text-lg">
                                    <Link href="/about">Read Full Bio →</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Pricing */}
                <section className="py-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                            Session Rates
                        </h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            Covered under Registered Massage Therapy benefits.
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
                        <p className="pt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto italic">
                            * Visceral Manipulation is a gentle therapy suitable for all ages.
                        </p>
                    </div>
                </section>

                {/* 8. Testimonials */}
                <section className="py-24 relative bg-indigo-50/30">
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

                {/* 9. FAQ */}
                <FaqSection
                    heading="Common Questions"
                    description="Everything you need to know about Visceral Manipulation."
                    faqs={[
                        {
                            question: "Is this painful?",
                            answer: "No. Visceral Manipulation is extremely gentle. We use about 5 grams of pressure (the weight of a nickel) to encourage the organ to release. It is not a 'deep tissue' abdominal massage."
                        },
                        {
                            question: "Does this help bloating/IBS?",
                            answer: "Yes. By releasing restrictions around the intestines and sigmoid colon, we can improve motility (movement) and reduce the sensation of bloating."
                        },
                        {
                            question: "Can I do this after surgery?",
                            answer: "Yes, it is excellent for C-section or abdominal surgery recovery. However, we typically wait 6-8 weeks post-surgery for the incision to heal before beginning treatment."
                        }
                    ]}
                />

                {/* 10. Final CTA */}
                <section className="py-16 bg-white border-t border-slate-200">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-indigo-900 mb-6">Solve the Root Cause</h2>
                        <div className="flex justify-center mb-12">
                            <Button
                                size="lg"
                                className="bg-indigo-700 text-white hover:bg-indigo-800 shadow-lg px-8 py-6 rounded-xl text-lg"
                                asChild
                            >
                                <a href="https://synctherapy.janeapp.com/">Book Visceral Session</a>
                            </Button>
                        </div>
                    </div>
                </section>

                <LocationSection />
            </div>

            <Footer /> {/* Manually included as requested */}
        </div>
    );
}
