import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { Activity, Flame, ShieldAlert, Zap } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Sports Injury Treatment in Colwood | Sync Massage Therapy',
    description: 'Urgent, clinical, and performance-focused sports injury treatment in Colwood. We manage tissue loading and safely rehabilitate athletic injuries.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/sports-injury-treatment/',
    },
};

export default function SportsInjuryTreatmentPage() {
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
                        "name": "When should I seek treatment for a sports injury?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It is best to seek clinical assessment within the first 48 to 72 hours of an acute injury. Early intervention helps manage initial inflammation safely and sets a foundation for faster remodeling."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does treatment hurt?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We prioritize pain-free, controlled movement. While rehabilitating injured tissue may involve some discomfort, we actively communicate to ensure treatments remain within your therapeutic tolerance."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How is this different from regular massage?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sports injury treatment incorporates active rehabilitation, tissue loading assessments, and the P.E.A.C.E. & L.O.V.E. protocols to actively rebuild tissue capacity, going beyond simple relaxation."
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
                        <span className="text-white">Sports Injury Treatment</span>
                    </nav>
                </div>

                {/* 3. Hero */}
                <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                    <span className="text-yellow-400 text-sm">★</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Platinum Winner • Athletic Rehab</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    <span className="text-blue-400">Sports Injury Treatment</span> <br className="hidden md:block" />
                                    in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Urgent, performance-focused care. We analyze the root-cause biomechanics of your injury and guide you through active rehabilitation to safely rebuild tissue capacity.
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
                                        src="/images/generated/sports-injury-placeholder.jpg"
                                        alt="Sports Injury Treatment Clinic"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Clinical Rehab</span>
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
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Zap className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Sudden Pop"</h3>
                                <p className="text-slate-700">You felt an immediate shift, pop, or sharp sensation during an explosive movement, leaving the area severely guarded.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Flame className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Acute Swelling"</h3>
                                <p className="text-slate-700">A joint or muscle group has rapidly inflamed following an impact or awkward twist on the field or court.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><ShieldAlert className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Loss of Confidence"</h3>
                                <p className="text-slate-700">You are afraid to put weight on the injured limb, fearing the joint might buckle or give way entirely.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Activity className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Nagging Pull"</h3>
                                <p className="text-slate-700">What started as a mild tightness during warmups has evolved into a sharp, restrictive pain when you try to sprint or lift.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Tissue Overload & Biomechanics</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            A sports injury fundamentally occurs when the physical load placed on a muscle, tendon, or ligament exceeds its current capacity to absorb that force. This can happen instantly (an acute sprain) or build up over time (repetitive strain). By analyzing your baseline biomechanics, we identify why that specific tissue failed and map out a precise pathway to restore its structural integrity.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Diagnostic Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We don't just guess; we employ clinical testing to isolate the compromised structures.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">P.E.A.C.E. & L.O.V.E. Protocol</h3>
                                <p className="text-sm text-slate-600">Managing acute inflammation safely without unnecessarily delaying the natural healing response.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Tissue Loading Tests</h3>
                                <p className="text-sm text-slate-600">Applying specific, measurable forces to tendons and ligaments to assess their current capacity and pain thresholds.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Standard massage therapy is excellent for managing generalized tension, but true sports injury rehabilitation requires a dual approach. By combining RMT techniques (managing soft tissue restrictions) with Athletic Therapy principles (active rehab and progressive tissue loading), we don't just reduce your immediate pain—we actively help prevent re-injury when you return to your sport.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Avoid Extended Icing:</strong> While ice can aggressively numb initial pain, avoid icing after the first 48 hours of an acute internal injury. Controlled, pain-free movement accelerates fresh blood flow and proper tissue remodeling far more effectively than complete rest or chronic icing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Services</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/services/athletic-therapy/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Athletic Therapy</h3>
                            </Link>
                            <Link href="/conditions/sprains-and-strains/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Sprains and Strains</h3>
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
                            Clinical care provided by Daryl Stubbs, RMT & CAT(C). Bringing dual-credentialed expertise in tissue mechanics and active athletic rehabilitation.
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
                                <h3 className="font-bold text-lg mb-2 text-blue-900">When should I seek treatment for a sports injury?</h3>
                                <p className="text-slate-600 text-sm">It is best to seek clinical assessment within the first 48 to 72 hours of an acute injury. Early intervention helps manage initial inflammation safely and sets a foundation for faster remodeling.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Does treatment hurt?</h3>
                                <p className="text-slate-600 text-sm">We prioritize pain-free, controlled movement. While rehabilitating injured tissue may involve some discomfort, we actively communicate to ensure treatments remain within your therapeutic tolerance.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">How is this different from regular massage?</h3>
                                <p className="text-slate-600 text-sm">Sports injury treatment incorporates active rehabilitation, tissue loading assessments, and the P.E.A.C.E. & L.O.V.E. protocols to actively rebuild tissue capacity, going beyond simple relaxation.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
