"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/sections/hero-section";
import dynamic from "next/dynamic";

const BioSection = dynamic(() => import("@/components/sections/bio-section").then(mod => mod.BioSection));
const DetailedServicesGrid = dynamic(() => import("@/components/sections/detailed-services-grid").then(mod => mod.DetailedServicesGrid));
const ConditionsSection = dynamic(() => import("@/components/ui/feature-section-with-grid").then(mod => ({ default: mod.Feature })));
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section").then(mod => mod.TestimonialsSection));
const PlanSection = dynamic(() => import("@/components/sections/plan-section").then(mod => mod.PlanSection)); // Process
const PricingSection = dynamic(() => import("@/components/sections/pricing-section").then(mod => mod.PricingSection));
const LocationSection = dynamic(() => import("@/components/sections/location-section").then(mod => mod.LocationSection));
const FaqSection = dynamic(() => import("@/components/sections/faq-section").then(mod => mod.FaqSection));
const AboutOneClinic = dynamic(() => import("@/components/sections/about-one-clinic").then(mod => mod.AboutOneClinic));

import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

interface HomeLayoutProps {
    reviewsComponent: React.ReactNode;
}

export function HomeLayout({ reviewsComponent }: HomeLayoutProps) {
    return (
        <div className="font-sans antialiased bg-white">
            <Header />

            <main className="relative">
                <HeroSection />

                <ScrollAnimation>
                    {reviewsComponent}
                </ScrollAnimation>

                <ScrollAnimation>
                    <AboutOneClinic />
                </ScrollAnimation>

                <ScrollAnimation>
                    <BioSection
                        name="Daryl Stubbs"
                        title="RMT / CAT(C)"
                        imageUrl="/uploads/2025/06/Daryl-is-an-RMT-in-Colwood-scaled.jpg"
                        bio="I founded Sync Therapy with one goal: to provide the kind of comprehensive, attentive care I felt was missing. As both a Registered Massage Therapist and Certified Athletic Therapist, I don't just treat symptoms — I look for the root cause to help you move better and live pain-free."
                        experienceText="15+ Years Experience"
                    />
                </ScrollAnimation>



                <ScrollAnimation>
                    <DetailedServicesGrid />
                </ScrollAnimation>

                <ScrollAnimation>
                    <ConditionsSection />
                </ScrollAnimation>

                <ScrollAnimation>
                    <TestimonialsSection />
                </ScrollAnimation>





                <ScrollAnimation>
                    <PlanSection />
                </ScrollAnimation>

                <ScrollAnimation>
                    <PricingSection />
                </ScrollAnimation>

                <ScrollAnimation>
                    <LocationSection />
                </ScrollAnimation>

                <ScrollAnimation>
                    <FaqSection />
                </ScrollAnimation>

                <StickyMobileCTA />
            </main>

            <Footer />
        </div>
    );
}

// Helper component for icon
function Share2(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
        </svg>
    )
}
