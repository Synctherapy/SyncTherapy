import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { Activity, Footprints, ChevronDown, Repeat } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Anterior Knee Pain (Runner\'s Knee) Relief in Colwood | Sync Massage Therapy',
    description: 'Biomechanical and corrective Anterior Knee Pain treatment in Colwood. We assess patellar tracking to relieve Runner\'s Knee pain safely.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/anterior-knee-pain/',
    },
};

export default function AnteriorKneePainPage() {
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
                        "name": "Do I have to stop running entirely?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Not always. We focus on load management. Often, modifying a runner's weekly volume or adjusting biomechanical stride rather than completely halting activity produces the most effective adaptation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is my knee cartilage permanently damaged?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Anterior knee pain is frequently caused by friction and active tissue inflammation, not permanent arthritis. Retraining how the kneecap moves usually resolves the localized pain entirely."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will a knee brace fix this?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A brace can provide temporary proprioceptive relief, but it acts solely as a band-aid. True rehabilitation requires strengthening the hip and thigh muscles to naturally pull the kneecap back into proper alignment."
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
                        <Link href="/conditions/" className="hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">Conditions</Link> /
                        <span className="text-white">Anterior Knee Pain</span>
                    </nav>
                </div>

                {/* 3. Hero */}
                <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                    <span className="text-yellow-400 text-sm">★</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Platinum Winner • Sports Therapy</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    <span className="text-blue-400">Anterior Knee Pain (Runner's Knee)</span> <br className="hidden md:block" />
                                    Relief in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Biomechanical, corrective, and active care crafted for Langford and West Shore runners. We identify how your kneecap is tracking and correct the tension networks causing friction.
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
                                        src="/images/generated/runners-knee-placeholder.jpg"
                                        alt="Runners Knee Pain Treatment"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Biomechanical Focus</span>
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
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><ChevronDown className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Movie Theater Sign"</h3>
                                <p className="text-slate-700">Sitting for a long period with your knees bent (like in a movie theater or at a desk) causes a deep aching pain immediately behind the kneecap.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Footprints className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Downhill Grind"</h3>
                                <p className="text-slate-700">Your pain is significantly worse when running downhill or stepping repeatedly down a heavy flight of structural stairs.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Activity className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Popping Sensation"</h3>
                                <p className="text-slate-700">You frequently feel or hear an audible popping, grinding, or loud clicking beneath the kneecap when you straighten the leg.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Repeat className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Mileage Limit"</h3>
                                <p className="text-slate-700">You can often start a run fine, but at a very specific, consistent repetitive distance, the knee pain sharply forces you to stop.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Patellofemoral Tracking & Friction</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Anterior knee pain, or patellofemoral pain syndrome, is a mechanical tracking problem. The kneecap (patella) is designed to slide smoothly up and down a specific groove in the thigh bone. If your outer thigh muscles (TFL/IT band) pull harder than your inner thigh muscles, the kneecap is physically dragged off-center. Every time you bend the knee, it aggressively grinds against the bone instead of sliding smoothly.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Diagnostic Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We measure the precise angles and forces acting directly upon your patellofemoral joint.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Patellar Grind Test (Clarke's Sign)</h3>
                                <p className="text-sm text-slate-600">Assessing the smoothness of the cartilage and identifying the specific frictional resistance points.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Q-Angle Measurement</h3>
                                <p className="text-sm text-slate-600">Calculating the precise mechanical angle between your hips and knees to determine how off-center the patella is being pulled.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Our dual-credentialed approach is vital here. As an RMT, we can manually manipulate and strip the incredibly dense fascial tension of the outer hip and IT band that is pulling the kneecap laterally. Simultaneously, as an Athletic Therapist, we prescribe perfectly calibrated muscular activations for the medial (inner) quadriceps to firmly pull the knee cap back to center, correcting the tracking issue permanently.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Stop Rolling Your IT Band:</strong> Foam rolling your IT band directly repeatedly is often incredibly painful and doesn't work well because it's thick, non-contractile fascial tissue; it doesn't "relax." Instead, roll the TFL (the small hip flexor muscle at the very top of your hip pocket). Releasing the TFL relieves the massive tension pulling on your kneecap from above.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Conditions</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/conditions/knee-pain/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Knee Pain</h3>
                            </Link>
                            <Link href="/conditions/it-band-syndrome/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">IT Band Syndrome</h3>
                            </Link>
                            <Link href="/services/sports-massage/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Sports Massage</h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 10. Practitioner Bio Block */}
                <section className="py-16 px-4 bg-white border-t border-gray-100">
                    <div className="max-w-3xl mx-auto text-center bg-slate-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-blue-950 mb-4">Your Practitioner</h2>
                        <p className="text-slate-700 mb-6">
                            Clinical care provided by Daryl Stubbs, RMT & CAT(C). Specializing in lower limb running mechanics and fascial tracking dysfunctions.
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
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Do I have to stop running entirely?</h3>
                                <p className="text-slate-600 text-sm">Not always. We focus on load management. Often, modifying a runner's weekly volume or adjusting biomechanical stride rather than completely halting activity produces the most effective adaptation.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Is my knee cartilage permanently damaged?</h3>
                                <p className="text-slate-600 text-sm">Anterior knee pain is frequently caused by friction and active tissue inflammation, not permanent arthritis. Retraining how the kneecap moves usually resolves the localized pain entirely.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Will a knee brace fix this?</h3>
                                <p className="text-slate-600 text-sm">A brace can provide temporary proprioceptive relief, but it acts solely as a band-aid. True rehabilitation requires strengthening the hip and thigh muscles to naturally pull the kneecap back into proper alignment.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
