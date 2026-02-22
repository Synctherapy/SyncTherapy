import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { MoveUp, Zap, Clock, Activity } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Rotator Cuff Injury Treatment in Colwood | Sync Massage Therapy',
    description: 'Precise, rehabilitative rotator cuff injury treatment in Colwood. We assess specific tendons and focus on restoring dynamic shoulder mobility safely.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/rotator-cuff-injury/',
    },
};

export default function RotatorCuffInjuryPage() {
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
                        "name": "Can a rotator cuff tear heal without surgery?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many partial tears or severe tendinopathies can be successfully managed and rehabilitated without surgical intervention by strengthening the surrounding compensatory musculature to stabilize the joint."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Should I wear a sling?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Generally, prolonged immobilization in a sling after the initial acute phase (first 48-72 hours) is discouraged as it can lead to severe muscle atrophy and 'frozen shoulder' complications."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why does my shoulder hurt worst at night?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "When you lie down, the structural layout of your shoulder shifts, often compressing already inflamed tendons against the surrounding bones, reducing blood flow and increasing swelling in a confined space."
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
                        <span className="text-white">Rotator Cuff Injury</span>
                    </nav>
                </div>

                {/* 3. Hero */}
                <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                    <span className="text-yellow-400 text-sm">★</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Platinum Winner • Joint Rehab</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    <span className="text-blue-400">Rotator Cuff Injury Treatment</span> <br className="hidden md:block" />
                                    in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Precise, rehabilitative, and mobility-focused care. We isolate the specific torn or inflamed tendon within the shoulder complex to deliver truly targeted recovery strategies.
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
                                        src="/images/generated/rotator-cuff-placeholder.jpg"
                                        alt="Rotator Cuff Injury Treatment"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Targeted Recovery</span>
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
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><MoveUp className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Overhead Catch"</h3>
                                <p className="text-slate-700">Reaching up to grab something from a high shelf or putting on a jacket causes a sudden, stabbing pain deep inside the shoulder.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Activity className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Weak Arm"</h3>
                                <p className="text-slate-700">You physically struggle to hold your arm out to the side; it feels incredibly heavy or drops involuntarily due to sudden weakness.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Clock className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Sleepless Night"</h3>
                                <p className="text-slate-700">Your shoulder aches constantly at night, completely disrupting your sleep, especially if you happen to roll onto the affected side.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Zap className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Rear Reach Pinch"</h3>
                                <p className="text-slate-700">Reaching behind your back (like grabbing a wallet or fastening clothing) sends a sharp, intense pinch into the front of the joint.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Structural Anatomy & Tendon Attrition</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            The rotator cuff isn't just one muscle; it's a structural group of four deeply situated muscles that act as dynamic stabilizers, literally pulling your arm bone securely into the shoulder socket as you move. Injuries happen when these precise, small tendons are asked to handle explosive loads they aren't prepared for, or when poor posture chronically pinches them against bone, slowly wearing the tendon fibers down over time.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Diagnostic Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We use specific clinical movements to isolate and identify WHICH of the four tendons is actually compromised.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Drop-Arm Test</h3>
                                <p className="text-sm text-slate-600">Checking for full-thickness tears in the supraspinatus tendon.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Empty Can Test</h3>
                                <p className="text-sm text-slate-600">Isolating specific inflammatory responses at specific angles of elevation.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Scapular Dyskinesis Evaluation</h3>
                                <p className="text-sm text-slate-600">Assessing how effectively your shoulder blade moves dynamically across your ribcage.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Because we integrate Athletic Therapy with Registered Massage Therapy, we excel at complex joints like the shoulder. We aggressively release the heavy, overriding muscles (like the pecs and lats) that are neurologically restricting the joint, and immediately follow up with focused, active rehabilitation strictly targeting the deep rotator cuff stabilizers, restoring true mechanical function.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Modify Your Sleep Position:</strong> Avoid sleeping with your injured arm extended overhead under your pillow. This specific position severely compresses the joint space, drastically reducing blood flow simultaneously to the same rotator cuff tendons that so desperately require oxygen to heal overnight. Keep the arm neutral and slightly supported.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Treatments</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/conditions/shoulder-impingement/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Shoulder Impingement</h3>
                            </Link>
                            <Link href="/services/rotator-cuff-release/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Rotator Cuff Release</h3>
                            </Link>
                            <Link href="/conditions/neck-shoulder-pain/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Neck & Shoulder Pain</h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 10. Practitioner Bio Block */}
                <section className="py-16 px-4 bg-white border-t border-gray-100">
                    <div className="max-w-3xl mx-auto text-center bg-slate-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-blue-950 mb-4">Your Practitioner</h2>
                        <p className="text-slate-700 mb-6">
                            Clinical care provided by Daryl Stubbs, RMT & CAT(C). Specializing in complex shoulder joint mechanics and deep tissue stabilization.
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
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Can a rotator cuff tear heal without surgery?</h3>
                                <p className="text-slate-600 text-sm">Many partial tears or severe tendinopathies can be successfully managed and rehabilitated without surgical intervention by strengthening the surrounding compensatory musculature to stabilize the joint.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Should I wear a sling?</h3>
                                <p className="text-slate-600 text-sm">Generally, prolonged immobilization in a sling after the initial acute phase (first 48-72 hours) is discouraged as it can lead to severe muscle atrophy and "frozen shoulder" complications.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Why does my shoulder hurt worst at night?</h3>
                                <p className="text-slate-600 text-sm">When you lie down, the structural layout of your shoulder shifts, often compressing already inflamed tendons against the surrounding bones, reducing blood flow and increasing swelling in a confined space.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
