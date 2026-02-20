
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/sections/hero-section";
import { BioSection } from "@/components/sections/bio-section";

import { DetailedServicesGrid } from "@/components/sections/detailed-services-grid";
import { Feature as ConditionsSection } from "@/components/ui/feature-section-with-grid";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PlanSection } from "@/components/sections/plan-section"; // Process
import { PricingSection } from "@/components/sections/pricing-section";
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { AboutOneClinic } from "@/components/sections/about-one-clinic";

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
