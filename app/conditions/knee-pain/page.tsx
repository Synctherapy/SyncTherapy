import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { MoveDown, Shield, TrendingDown, Footprints } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Knee Pain & Injury Rehab in Colwood | Sync Massage Therapy',
    description: 'Structural, stabilizing knee pain rehabilitation in Colwood. We assess ligamentous laxity and proper meniscus tracking to manage joint pain effectively.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/knee-pain/',
    },
};

export default function KneePainPage() {
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
                        "name": "Do I need an MRI before attending a rehab session?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. While imaging is helpful, our physical orthopedic screening assessments can often reliably identify the compromised structural tissue guiding our immediate rehabilitative approach."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is walking good for knee pain?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It depends highly on the root cause. If your pain stems from improper pelvic tracking, walking may simply aggravate the friction. We assess your biomechanics to advise safely."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does knee ligament recovery take?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ligaments have poor blood supply. Rebuilding functional capacity in a severely strained knee ligament often takes between 6 to 12 weeks of structured, consistent therapy."
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
                        <span className="text-white">Knee Pain</span>
                    </nav>
                </div>

                {/* 3. Hero */}
                <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                    <span className="text-yellow-400 text-sm">★</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Platinum Winner • Structural Care</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    <span className="text-blue-400">Knee Pain & Injury Rehab</span> <br className="hidden md:block" />
                                    in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Structural, stabilizing, and reassuring care. By testing specific knee ligaments and examining the chain mechanism of the hip and ankle, we address the true mechanical root of knee pain.
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
                                        src="/images/generated/knee-pain-placeholder.jpg"
                                        alt="Knee Pain Injury Rehab"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Joint Stabilization</span>
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
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><MoveDown className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Staircase Dread"</h3>
                                <p className="text-slate-700">Walking down stairs causes an acute, sharp pain directly behind or beneath your kneecap.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Shield className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Instability Give"</h3>
                                <p className="text-slate-700">When changing directions quickly, your knee frequently feels like it might visually buckle or collapse inward.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><TrendingDown className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Deep Ache"</h3>
                                <p className="text-slate-700">You experience a profound, dull ache deep inside the joint space that worsens after prolonged walking or running.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Footprints className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Morning Stiffness"</h3>
                                <p className="text-slate-700">Your knees feel incredibly stiff and difficult to bend upon waking, requiring time to structurally "warm up."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Ligament Load & Meniscus Tracking</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            The knee is essentially a hinge joint directly influenced by the joints above and below it (the hip and the ankle). If the glutes are weak, or the ankle lacks mobility, the knee is forced to rotate unnaturally to compensate. This poor biomechanical tracking causes extreme friction on the internal meniscus and excessive stretching of the supportive ACL/MCL ligaments.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Diagnostic Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We utilize highly specific orthopedic tests to identify which passive structures have been compromised.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Ligamentous Laxity Testing</h3>
                                <p className="text-sm text-slate-600">Including Lachman's test to evaluate the ACL, and Valgus stress tests to check MCL structural integrity.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Meniscus Tracking Assessments</h3>
                                <p className="text-sm text-slate-600">Carefully tracking the patella (kneecap) through its natural groove to isolate points of restrictive friction.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Treating just the knee rarely solves knee pain. By combining RMT to deeply release restrictive tension in the heavy quadriceps and IT-band networks, alongside Athletic Therapy to actively rehabilitate and strengthen the pelvic stabilizers (glutes), we holistically correct the movement pattern causing the damage, providing significantly more reliable outcomes.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Strengthen the Gluteus Medius:</strong> A weak hip often causes the knee to uncontrollably cave inward (valgus collapse) during squats, stair climbing, or running. Strengthening the side of your hip is often the most critical step in alleviating deep joint pain at the knee.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Conditions</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/conditions/anterior-knee-pain/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Anterior Knee Pain</h3>
                            </Link>
                            <Link href="/conditions/it-band-syndrome/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">IT Band Syndrome</h3>
                            </Link>
                            <Link href="/services/athletic-therapy/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Athletic Therapy</h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 10. Practitioner Bio Block */}
                <section className="py-16 px-4 bg-white border-t border-gray-100">
                    <div className="max-w-3xl mx-auto text-center bg-slate-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-blue-950 mb-4">Your Practitioner</h2>
                        <p className="text-slate-700 mb-6">
                            Clinical care provided by Daryl Stubbs, RMT & CAT(C). Specializing in lower limb biomechanics and joint stabilization.
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
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Do I need an MRI before attending a rehab session?</h3>
                                <p className="text-slate-600 text-sm">No. While imaging is helpful, our physical orthopedic screening assessments can often reliably identify the compromised structural tissue guiding our immediate rehabilitative approach.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Is walking good for knee pain?</h3>
                                <p className="text-slate-600 text-sm">It depends highly on the root cause. If your pain stems from improper pelvic tracking, walking may simply aggravate the friction. We assess your biomechanics to advise safely.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">How long does knee ligament recovery take?</h3>
                                <p className="text-slate-600 text-sm">Ligaments have poor blood supply. Rebuilding functional capacity in a severely strained knee ligament often takes between 6 to 12 weeks of structured, consistent therapy.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
