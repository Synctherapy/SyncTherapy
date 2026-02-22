import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { HelpCircle, Play, Calendar, ListChecks } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Custom Home Exercise Plans in Colwood | Sync Massage Therapy',
    description: 'Empowering, structured Custom Home Exercise Plans in Colwood. We design personalized, biomechanically-sound programs that bridge manual therapy to daily life.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/home-exercise-plans/',
    },
};

export default function HomeExercisePlansPage() {
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
                        "name": "Do I need to buy expensive gym equipment for my home plan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, absolutely not. The vast majority of our clinical home exercise programs start entirely with bodyweight or simple resistance bands that we can provide. Progression is based on movement quality, not heavy equipment."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How often are the plans updated?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Plans are continuously updated as your tissue capacity progresses. Once you can safely complete your baseline exercises without pain or compensatory shifting, we prescribe the next clinical phase."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is a home exercise plan covered by my extended health benefits?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, when it is prescribed and supervised by a Certified Athletic Therapist or Registered Massage Therapist as part of an active clinical treatment plan, it is eligible under most standard extended health physical therapy or massage therapy benefits."
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
                        <span className="text-white">Home Exercise Plans</span>
                    </nav>
                </div>

                {/* 3. Hero */}
                <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                    <span className="text-yellow-400 text-sm">★</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Platinum Winner • Rehab Clinic</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    <span className="text-blue-400">Custom Home Exercise Plans</span> <br className="hidden md:block" />
                                    in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Empowering, educational, and highly structured care. Passive therapy relieves tension, but active therapy changes tissue capacity physically.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                    <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                        Book Assessment
                                    </a>
                                </div>
                            </div>

                            <div className="relative mt-8 lg:mt-0">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/10 backdrop-blur-sm bg-white/5 aspect-[4/3] lg:aspect-square transform hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="/images/generated/health_consulting_wellness_hero.jpg"
                                        alt="Custom Home Exercise Plans Clinic"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Clinical Planning</span>
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
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><HelpCircle className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Guesswork" Client</h3>
                                <p className="text-slate-700">You are completely unsure what stretches or strengthening movements are actually safe and appropriate for your specific stage of injury.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Play className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "YouTube Trap"</h3>
                                <p className="text-slate-700">You have tried piecing together generic YouTube exercises, but they often inadvertently aggravate the joint and make your baseline pain distinctly worse.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Calendar className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Plateauing" Patient</h3>
                                <p className="text-slate-700">You feel incredibly good leaving the clinic after hands-on work, but strictly struggle to maintain that physical progress between your clinic visits independently.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><ListChecks className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Time Crunched"</h3>
                                <p className="text-slate-700">You absolutely need a structured, highly efficient routine that reliably fits into a chaotic, busy daily schedule without demanding an hour to complete.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Neuromuscular Science & Tissue Capacity</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Passive therapy (like deep tissue massage) brilliantly and effectively relieves tension, restores cellular blood flow, and decreases central nervous system threat levels. But active therapy structurally changes tissue capacity. Without proactively and progressively loading your muscles and tendons at home to build resilience, the weakened structures will rapidly fatigue again, and the deep compensatory pain patterns will eventually return simply because the body lacks the strength to hold its new, healthier posture.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Diagnostic Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We meticulously test your body before choosing what you need to do at home to rebuild it safely.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Functional Movement Screening (FMS)</h3>
                                <p className="text-sm text-slate-600">Assessing whole-body kinetic chain movements to identify gross asymmetries and critical mobility deficits.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Isolated Load-Tolerance Testing</h3>
                                <p className="text-sm text-slate-600">Determining your exact baseline strength thresholds specifically before prescribing any concentric or eccentric movements to prevent re-aggravation.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Instead of lazily handing out generic printouts of stick figures from decades ago, our Certified Athletic Therapist explicitly engineers and designs highly personalized, biomechanically-sound programs. We meticulously select specific exercises that directly bridge the gap between the profound physical gains of your manual massage therapy treatments and the heavy physical demands of your daily life.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Consistency Beats Intensity:</strong> Doing 5 to 10 minutes of strictly targeted corrective exercises daily is far more neurologically effective for neuromuscular re-education than completing one massive, exhausting 60-minute session merely once a week. Your brain needs repetitive, daily input to actually rewire how it controls a joint.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Options</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/services/athletic-therapy/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Athletic Therapy</h3>
                            </Link>
                            <Link href="/services/sports-injury-treatment/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Sports Injury Treatment</h3>
                            </Link>
                            <Link href="/conditions/chronic-pain/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Chronic Pain</h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 10. Practitioner Bio Block */}
                <section className="py-16 px-4 bg-white border-t border-gray-100">
                    <div className="max-w-3xl mx-auto text-center bg-slate-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-blue-950 mb-4">Your Practitioner</h2>
                        <p className="text-slate-700 mb-6">
                            Clinical care provided by Daryl Stubbs, RMT & CAT(C). Focused heavily on bridging the gap between passive manual relief and robust, resilient tissue capacity.
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
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Do I need to buy expensive gym equipment for my home plan?</h3>
                                <p className="text-slate-600 text-sm">No, absolutely not. The vast majority of our clinical home exercise programs start entirely with bodyweight or simple resistance bands that we can provide. Progression is based on movement quality, not heavy equipment.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">How often are the plans updated?</h3>
                                <p className="text-slate-600 text-sm">Plans are continuously updated as your tissue capacity progresses. Once you can safely complete your baseline exercises without pain or compensatory shifting, we prescribe the next clinical phase.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Is a home exercise plan covered by my extended health benefits?</h3>
                                <p className="text-slate-600 text-sm">Yes, when it is prescribed and supervised by a Certified Athletic Therapist or Registered Massage Therapist as part of an active clinical treatment plan, it is eligible under most standard extended health physical therapy or massage therapy benefits.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
