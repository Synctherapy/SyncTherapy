import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { Activity, MoveUp, Shirt, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Shoulder Impingement Treatment in Colwood | Sync Massage Therapy',
    description: 'Relieving, structural shoulder impingement treatment in Colwood. We assess the subacromial space and address postural rounding safely.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/shoulder-impingement/',
    },
};

export default function ShoulderImpingementPage() {
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
                        "name": "What exactly is being 'impinged' in my shoulder?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Typically, the supraspinatus tendon or a protective bursa sac is getting physically pinched between your arm bone and the roof of your shoulder blade when you raise your arm."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can poor posture actually cause shoulder pain?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, profoundly so. A slouched, forward-rounded posture mechanically tilts the shoulder blade downward, actively closing the joint space and increasing the likelihood of painful internal friction."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will cortisone shots fix this permanently?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A cortisone injection may rapidly decrease the local inflammation, providing excellent short-term relief, but it does not fix the underlying postural or biomechanical root cause pulling the joint out of alignment."
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
                        <span className="text-white">Shoulder Impingement</span>
                    </nav>
                </div>

                {/* 3. Hero */}
                <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                    <span className="text-yellow-400 text-sm">★</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Platinum Winner • Postural Care</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    <span className="text-blue-400">Shoulder Impingement Treatment</span> <br className="hidden md:block" />
                                    in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Relieving, postural, and structural care. We assess the subacromial space of your shoulder and correct the structural rounding that causes painful tendon pinching.
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
                                        src="/images/generated/impingement-placeholder.jpg"
                                        alt="Shoulder Impingement Clinic"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Structural Relief</span>
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
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><MoveUp className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Painful Arc"</h3>
                                <p className="text-slate-700">Raising your arm out to the side is fine initially, but there's a specific, highly painful block roughly halfway up before it gets slightly better at the very top.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Shirt className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Jacket Struggle"</h3>
                                <p className="text-slate-700">Trying to thread your arm into a jacket sleeve or grabbing a seatbelt aggressively pinches the very front boundary of your shoulder.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Activity className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Desk Ache"</h3>
                                <p className="text-slate-700">After sitting at a computer all day typing, the very top, outer edge of your shoulder develops a deep, burning ache.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><ShieldCheck className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Clicking Restriction"</h3>
                                <p className="text-slate-700">You frequently feel heavy, mechanical clicking or clunking in the joint as you attempt to roll or shrug your shoulders backward.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">The Subacromial Space & Posture</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Your shoulder joint looks a bit like a golf ball sitting on a tee, situated underneath a bony roof (the acromion). Tendons and fluid sacs (bursae) run precisely through the narrow gap under that roof. Impingement simply means that narrow space is physically closing, forcefully pinching the soft tissue inside every time you lift your arm. This is overwhelmingly caused by chronic, forward-rounded posture dragging the shoulder blade severely out of alignment.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Diagnostic Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We utilize structural testing to identify exactly what is pinching and why that subacromial space is reduced.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Neer's Impingement Test</h3>
                                <p className="text-sm text-slate-600">Replicating the mechanical pinching sensation to isolate superior structural involvement.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Hawkins-Kennedy Test</h3>
                                <p className="text-sm text-slate-600">A rigorous rotational assessment used to identify structural pinching specifically in the subacromial space.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Shoulder impingement is a mechanical puzzle that requires dual expertise. Standard treatment often fails if it only targets the shoulder. As an RMT, we release the heavy anterior chest muscles (pectorals) that chronically pull the shoulders forward. Then, as an Athletic Therapist, we prescribe highly specific mid-back retractor exercises to actively hold the shoulder blade back, permanently reopening the joint space.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Improve Thoracic (Mid-Back) Mobility:</strong> Focus heavily on bringing mobility to your mid spine. If your mid-back is constantly, rigidly rounded forward (kyphosis), your shoulder blade physically tilts downward with it, aggressively closing the joint gap and ensuring the tendon pinches every time you raise your arm.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Treatments</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/conditions/rotator-cuff-injury/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Rotator Cuff Injury</h3>
                            </Link>
                            <Link href="/services/myofascial-release/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Myofascial Release</h3>
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
                            Clinical care provided by Daryl Stubbs, RMT & CAT(C). Specializing in correcting structural impingement through active rehabilitation.
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
                                <h3 className="font-bold text-lg mb-2 text-blue-900">What exactly is being 'impinged' in my shoulder?</h3>
                                <p className="text-slate-600 text-sm">Typically, the supraspinatus tendon or a protective bursa sac is getting physically pinched between your arm bone and the roof of your shoulder blade when you raise your arm.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Can poor posture actually cause shoulder pain?</h3>
                                <p className="text-slate-600 text-sm">Yes, profoundly so. A slouched, forward-rounded posture mechanically tilts the shoulder blade downward, actively closing the joint space and increasing the likelihood of painful internal friction.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Will cortisone shots fix this permanently?</h3>
                                <p className="text-slate-600 text-sm">A cortisone injection may rapidly decrease the local inflammation, providing excellent short-term relief, but it does not fix the underlying postural or biomechanical root cause pulling the joint out of alignment.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
