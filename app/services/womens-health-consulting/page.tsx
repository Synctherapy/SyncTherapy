import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { Activity, Shield, TrendingUp, HeartOff } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Holistic Women\'s Health Consulting in Colwood | Sync Massage Therapy',
    description: 'Supportive, empowering Holistic Women\'s Health Consulting in Colwood. We focus on hormonal balance, systemic stress, and critical micronutrient needs.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/womens-health-consulting/',
    },
};

export default function WomensHealthConsultingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalClinic",
                "@id": "https://synctherapy.ca/#organization",
                "name": "Sync Massage Therapy",
                "url": "https://synctherapy.ca",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "328 Wale Rd #120",
                    "addressLocality": "Colwood",
                    "addressRegion": "BC",
                    "postalCode": "V9B 0J8",
                    "addressCountry": "CA"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can holistic nutrition actually help balance my hormones?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Hormones are physically built from the dietary fats, proteins, and micronutrients you consume. By optimizing your systemic nutritional baseline and stabilizing blood sugar, you provide your endocrine system with the exact raw materials it requires to regulate itself naturally."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you only help with perimenopause and menopause?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. We support women at every stage of their physiological journey—from managing energy fluctuations in their 20s and 30s, to navigating the heavy structural demands of postpartum recovery, to supporting bone density during menopause."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does this combine with my existing medical care?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Holistic nutrition is actively complementary. We do not replace your physician or prescribe medications. Rather, we manage the foundational, everyday nutritional and lifestyle variables that directly support the clinical goals you've established with your primary medical provider."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main>
            <Header />
            <div className="bg-white text-gray-900 font-sans">
                {/* 1. JSON-LD Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* 2. Breadcrumbs */}
                <div className="bg-blue-950 pt-4 px-4">
                    <nav className="max-w-7xl mx-auto text-xs text-gray-400 flex gap-2">
                        <Link href="/" className="hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">Home</Link> /
                        <Link href="/services/" className="hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">Services</Link> /
                        <span className="text-white">Women's Health Consulting</span>
                    </nav>
                </div>

                {/* 3. Hero */}
                <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                    <span className="text-yellow-400 text-sm">★</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Platinum Winner • Holistic Care</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    <span className="text-blue-400">Holistic Women's Health Consulting</span> <br className="hidden md:block" />
                                    in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Supportive, empowering, and hormonally aware. We comprehensively analyze your nutritional impacts, systemic stress load, and critical micronutrient needs.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                    <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                        Book Consultation
                                    </a>
                                </div>
                            </div>

                            <div className="relative mt-8 lg:mt-0">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/10 backdrop-blur-sm bg-white/5 aspect-[4/3] lg:aspect-square transform hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="/images/generated/health_consulting_wellness_hero.jpg"
                                        alt="Holistic Women's Health Clinic Colwood"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Empowering Care</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Symptom Checklist */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Is This You?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Activity className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> Energy Fluctuations</h3>
                                <p className="text-slate-700">You find yourself deeply struggling to effectively navigate wildly unpredictable energy, mood, and fatigue fluctuations throughout the month.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><HeartOff className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> Hormonal Imbalance</h3>
                                <p className="text-slate-700">You are actively seeking safe, evidence-based nutritional support to naturally encourage and maintain long-term hormonal balance.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Shield className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> Structural Longevity</h3>
                                <p className="text-slate-700">You are heavily focused on looking for effective, proactive ways to solidly maintain crucial bone density and muscle mass as you naturally age.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><TrendingUp className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The Stress Burden</h3>
                                <p className="text-slate-700">The overwhelming, compounding daily systemic stress is now visibly resulting in severe physical fatigue and stubborn physiological changes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Endocrine Function & Systemic Stress Loads</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            A woman's endocrine (hormonal) system is incredibly exquisitely sensitive to her environment. Chronic variables like sleep deprivation, unmanaged psychological stress, or aggressive undereating force the body to continuously overproduce cortisol—the primary survival hormone. When the body is neurologically locked in this "fight or flight" survival state, it biologically deprioritizes other critical functions, heavily disrupting reproductive hormones, dramatically slowing metabolic repair, and leeching vital minerals directly from the cellular structure.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Assessment Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We meticulously evaluate the foundational pillars supporting your unique physiological cycles.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Nutritional Cyclical Analysis</h3>
                                <p className="text-sm text-slate-600">Deeply analyzing the direct nutritional impacts on your naturally shifting hormonal cycles and corresponding metabolic demands.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Systemic Cortisol Evaluation</h3>
                                <p className="text-sm text-slate-600">Assessing your total systemic stress load and identifying exactly where physiological "burnout" is currently manifesting physically.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Micronutrient Profiling</h3>
                                <p className="text-sm text-slate-600">Targeting and evaluating specific foundational needs like highly accessible calcium, iron, magnesium, and essential fatty acids.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            As a triple-credentialed practitioner (RMT, CAT(C), RHN), we address Women's Health comprehensively. Hormonal shifts frequently present simultaneously with undeniable structural issues—such as newly developing joint hypermobility postpartum or increased musculoskeletal stiffness during perimenopause. By brilliantly combining Holistic Nutrition with advanced Athletic Therapy biomechanics and soothing Massage Therapy, we don't just nutritionally support the transitioning internal system; we proactively and physically rehabilitate the external structure simultaneously to ensure full-body resiliency.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Prioritize High-Protein Breakfasts:</strong> Immediately breaking your overnight fast with an adequately protein-rich breakfast is crucial. It biologically prevents early-morning glucose spikes and crashes, fundamentally stabilizing your blood sugar extremely early. This dramatically supports far more perfectly balanced, sustained energy and optimal hormone production throughout the rest of your busy day.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Options</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/services/nutrition-counseling/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Nutrition Counseling</h3>
                            </Link>
                            <Link href="/services/wellness-consultation/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Wellness Consultation</h3>
                            </Link>
                            <Link href="/services/personalized-health-plan/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Personalized Health Plan</h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 10. Practitioner Bio Block */}
                <section className="py-16 px-4 bg-white border-t border-gray-100">
                    <div className="max-w-3xl mx-auto text-center bg-slate-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-blue-950 mb-4">Your Practitioner</h2>
                        <p className="text-slate-700 mb-6">
                            Clinical care provided by Daryl Stubbs, RMT, CAT(C) & RHN. Deeply experienced in supporting physiological resilience through all stages of systemic health.
                        </p>
                        <Link href="/our-team/daryl-stubbs/" className="text-blue-600 font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
                            Read Full Bio →
                        </Link>
                    </div>
                </section>

                {/* 11. Reviews Placeholder */}
                <section className="py-16 px-4 bg-blue-50/50 text-center border-t border-blue-100">
                    <h2 className="text-2xl font-bold mb-8 text-blue-950">Award-Winning Care in Colwood</h2>
                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl border border-dashed border-blue-200">
                        {/* <!-- INSERT GOOGLE REVIEW WIDGET HERE --> */}
                        <GoogleReviewsColumns />
                    </div>
                </section>

                {/* 12. FAQ */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-8 text-center text-blue-950">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Can holistic nutrition actually help balance my hormones?</h3>
                                <p className="text-slate-600 text-sm">Yes. Hormones are physically built from the dietary fats, proteins, and micronutrients you consume. By optimizing your systemic nutritional baseline and stabilizing blood sugar, you provide your endocrine system with the exact raw materials it requires to regulate itself naturally.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Do you only help with perimenopause and menopause?</h3>
                                <p className="text-slate-600 text-sm">No. We support women at every stage of their physiological journey—from managing energy fluctuations in their 20s and 30s, to navigating the heavy structural demands of postpartum recovery, to supporting bone density during menopause.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">How does this combine with my existing medical care?</h3>
                                <p className="text-slate-600 text-sm">Holistic nutrition is actively complementary. We do not replace your physician or prescribe medications. Rather, we manage the foundational, everyday nutritional and lifestyle variables that directly support the clinical goals you've established with your primary medical provider.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
