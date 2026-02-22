import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";

export const metadata: Metadata = {
    title: 'Headache & Migraine Treatment in Colwood',
    description: 'Targeted clinical relief for tension headaches, migraines, and jaw (TMJ) dysfunction without relying on constant medication.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/headaches-migraines/',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalClinic",
                "@id": "https://synctherapy.ca/#organization",
                "name": "Sync Massage Therapy",
                "url": "https://synctherapy.ca",
                "logo": "https://synctherapy.ca/images/logo.png",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "328 Wale Rd #120",
                    "addressLocality": "Colwood",
                    "addressRegion": "BC",
                    "postalCode": "V9B 0J8",
                    "addressCountry": "CA"
                },
                "telephone": "+1-250-812-8698",
                "priceRange": "$$"
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://synctherapy.ca/conditions/headaches-migraines/#webpage",
                "url": "https://synctherapy.ca/conditions/headaches-migraines/",
                "name": "Headache & Migraine Treatment in Colwood",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can massage help during an active migraine?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "During the acute, throbbing phase of a migraine, treatment may be too intense. We focus on treating you *between* episodes to reduce the frequency and severity of future attacks."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you treat TMJ and jaw pain?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, tension in the jaw muscles is a massive contributor to headaches. We are trained to safely treat the muscles of mastication (chewing) to relieve this pressure."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need a doctor's referral for headache treatment?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No referral is necessary to book an assessment, though some extended health plans require one for direct billing purposes."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="bg-white text-gray-900 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />

            {/* BREADCRUMBS */}
            <div className="bg-blue-950 pt-28 px-4">
                <nav className="max-w-7xl mx-auto text-sm text-gray-400 flex gap-2 items-center" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-white p-2 -m-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Home</Link> <span aria-hidden="true">/</span>
                    <Link href="/conditions/" className="hover:text-white p-2 -m-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Conditions</Link> <span aria-hidden="true">/</span>
                    <span className="text-white p-2 -m-2" aria-current="page">Headache & Migraine</span>
                </nav>
            </div>

            {/* HERO SECTION */}
            <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 shrink-0"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                                <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Platinum Best Massage Clinic</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                                Headache & Migraine Treatment in Colwood
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Targeted clinical relief for tension headaches, migraines, and jaw (TMJ) dysfunction without relying on constant medication. Soothing, highly targeted, and written for chronic sufferers who know Advil isn't cutting it anymore.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                <a href="https://synctherapy.janeapp.com/" aria-label="Book a Headache & Migraine assessment on Jane App" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto text-center focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-950 cursor-pointer">
                                    Book Assessment
                                </a>
                            </div>
                        </div>
                        {/* Hero Image Column */}
                        <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/generated/hero-headaches-migraines.png"
                                alt="Headache & Migraine Treatment in Colwood"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SYMPTOM CHECKLIST */}
            <section className="py-16 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Is This You?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "A tight band of pressure wrapping around your forehead.",
                            "Throbbing pain behind one eye or at the base of the skull.",
                            "Jaw clenching (TMJ) that triggers morning headaches.",
                            "Sensitivity to light and sound when tension peaks."
                        ].map((symptom, i) => (
                            <div key={i} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-start text-blue-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mr-3 shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12" /></svg>
                                    <span className="leading-tight">{symptom}</span>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ANATOMY / ROOT CAUSE */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">The Anatomy & Root Cause</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Many headaches are 'cervicogenic,' meaning the pain originates from the neck and refers up into the head. By targeting the suboccipital muscles (base of the skull), the SCM (side of the neck), and the masseter (jaw), we can often eliminate the mechanical triggers of tension headaches and reduce migraine severity.
                        </p>
                    </div>
                </div>
            </section>

            {/* DIAGNOSTIC APPROACH */}
            <section className="py-16 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-blue-50/50 p-8 rounded-2xl text-center">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">Our Diagnostic Approach</h2>
                        <p className="text-slate-700 text-lg leading-relaxed">
                            We assess cervical active range of motion, palpate the muscles of mastication (TMJ/jaw) for trigger points, and screen for 'Upper Cross Syndrome' (forward head posture).
                        </p>
                    </div>
                </div>
            </section>

            {/* THE SYNC DIFFERENCE */}
            <section className="py-20 px-4 bg-blue-950 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">The Sync Difference (Dual-Care)</span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">Why Our Approach Works</h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        Standard massage often just rubs the shoulders. Our dual-credentialed approach means we use precise intra-oral techniques for the jaw and Athletic Therapy to strengthen the deep neck flexors, keeping your head upright so the tension doesn't return.
                    </p>
                </div>
            </section>

            {/* AT-HOME RELIEF TIP */}
            <section className="py-16 px-4 bg-slate-50 border-b border-slate-200">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl border-l-4 border-blue-600 shadow-sm">
                        <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                            At-Home Relief Tip
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            <strong>Ergonomic monitor height check:</strong> The <em>top</em> of your computer screen should be at eye level. Looking down all day forces your neck muscles to work overtime, leading directly to tension headaches.
                        </p>
                    </div>
                </div>
            </section>

            {/* THE SEO SILO (INTERNAL LINKS) */}
            <section className="py-16 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Our Treatment Toolkit</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { url: "/services/myofascial-release/", title: "Myofascial Release", desc: "Cranial Fascia Release" },
                            { url: "/services/trigger-point-therapy/", title: "Trigger Point Therapy", desc: "Targeted Knot Release" },
                            { url: "/services/massage-therapy/", title: "Massage Therapy", desc: "Cervical Tension Relief" }
                        ].map((link, i) => (
                            <Link key={i} href={link.url} className="block p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 group cursor-pointer" aria-label={`View details for ${link.title}`}>
                                <h3 className="font-bold text-lg mb-2 text-blue-900 group-hover:text-blue-600 flex items-center justify-between">
                                    {link.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 text-slate-400 group-hover:text-blue-600"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </h3>
                                <p className="text-sm text-slate-600">{link.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRACTITIONER BIO BLOCK */}
            <section className="py-12 px-4 bg-blue-50/80">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block p-6 rounded-2xl bg-white shadow-sm border border-blue-100">
                        <p className="text-blue-950 font-bold mb-2">
                            Clinical care provided by Daryl Stubbs, RMT & CAT(C)
                        </p>
                        <p className="text-slate-600 text-sm mb-4">Dual-credentialed Registered Massage Therapist & Certified Athletic Therapist</p>
                        <Link href="/our-team/daryl-stubbs/" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 bg-blue-50 hover:bg-blue-100">
                            Read Full Bio <span aria-hidden="true" className="ml-1">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* REVIEWS WIDGET */}
            <section className="py-16 px-4 bg-white text-center border-t border-slate-100">
                <h2 className="text-2xl font-bold mb-8 text-blue-950">Trusted by West Shore Residents</h2>
                <div className="max-w-4xl mx-auto bg-slate-50 p-8 rounded-2xl border border-dashed border-slate-200">
                    <GoogleReviewsColumns />
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4 bg-slate-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center text-blue-950">Common Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Can massage help during an active migraine?", a: "During the acute, throbbing phase of a migraine, treatment may be too intense. We focus on treating you *between* episodes to reduce the frequency and severity of future attacks." },
                            { q: "Do you treat TMJ and jaw pain?", a: "Yes, tension in the jaw muscles is a massive contributor to headaches. We are trained to safely treat the muscles of mastication (chewing) to relieve this pressure." },
                            { q: "Do I need a doctor's referral for headache treatment?", a: "No referral is necessary to book an assessment, though some extended health plans require one for direct billing purposes." }
                        ].map((f, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">{f.q}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
