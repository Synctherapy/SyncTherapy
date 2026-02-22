import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";

export const metadata: Metadata = {
    title: 'Injury Rehabilitation Massage in Colwood',
    description: 'Clinical injury rehabilitation massage focusing on scar tissue reduction, mobility restoration, and post-surgery care.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/injury-rehab-massage/',
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
                "@id": "https://synctherapy.ca/services/injury-rehab-massage/#webpage",
                "url": "https://synctherapy.ca/services/injury-rehab-massage/",
                "name": "Injury Rehabilitation Massage in Colwood",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Will massage damage my healing injury?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, when performed by a clinical RMT, rehabilitative massage is carefully scaled to your tissue's healing stage to promote recovery without causing re-injury."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you treat post-surgical scars?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, once the incision is fully closed and cleared by your doctor, manual therapy is highly effective at reducing scar tissue restriction."
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

            {/* 0. BREADCRUMBS */}
            <div className="bg-blue-950 pt-28 px-4">
                <nav className="max-w-7xl mx-auto text-xs text-gray-400 flex gap-2">
                    <Link href="/" className="hover:text-white">Home</Link> /
                    <Link href="/services/" className="hover:text-white">Services</Link> /
                    <span className="text-white">Injury Rehabilitation Massage</span>
                </nav>
            </div>

            {/* 1. HERO SECTION: High Urgency & Trust */}
            <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                <span className="text-yellow-400 text-sm">🏆</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Voted Platinum Best Massage Clinic (2022-2025)</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                                Injury Rehabilitation Massage in Colwood
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Serving Colwood, Langford & the West Shore. Clinical, precise, and progressive. Specially designed for patients terrified of re-injuring an old tear or recovering from surgery.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                    Book Treatment
                                </a>
                            </div>
                        </div>
                        {/* Hero Image Column */}
                        <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/generated/hero-injury-rehab-massage.png"
                                alt="Injury Rehabilitation Massage in Colwood"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THE "IS THIS YOU?" CHECKLIST */}
            <section className="py-16 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Is This You?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {["Thick, stiff scar tissue from an old tear","Restricted joint mobility post-surgery","Compensatory pain (your good knee hurts from limping)","Fear of bearing weight on an old injury"].map((symptom, i) => (
                            <div key={i} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900">
                                    <span className="text-blue-600 text-2xl mr-2">✓</span> {symptom}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ANATOMY SECTION */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">The Anatomy & Science</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            When a muscle tears, the body repairs it quickly with disorganized collagen (scar tissue). We use cross-fiber friction to break down this 'messy' tissue and restore proper directional alignment, allowing the muscle to bear load safely and smoothly again.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. THE SYNC DIFFERENCE */}
            <section className="py-20 px-4 bg-blue-950 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">The Sync Difference</span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">Why Our Approach Works</h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        By combining the deep tissue expertise of an RMT with the orthopedic assessment skills of an Athletic Therapist, we don't just treat the symptom—we correct the underlying mechanics so you can perform your best.
                    </p>
                </div>
            </section>

            {/* 5. TOOLKIT / INTERNAL LINKS */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Our Recovery Toolkit</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[{"url":"/conditions/","title":"Conditions Overview","desc":"Overall strategy"},{"url":"/services/athletic-therapy/","title":"Athletic Therapy","desc":"Active rehab and strengthening"}].map((link, i) => (
                            <Link key={i} href={link.url} className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                                <h3 className="font-bold text-xl mb-2 text-blue-900 group-hover:text-blue-600">{link.title} →</h3>
                                <p className="text-sm text-slate-600">{link.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. PATIENT ROADMAP */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Your Recovery Roadmap</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Assessment</h3>
                            <p className="text-slate-600 text-sm">We find exactly what is restricting your movement and causing pain.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 border-4 border-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Treatment</h3>
                            <p className="text-slate-600 text-sm">Targeted manual therapy to release tension, flush waste, or break down scar tissue.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Plan</h3>
                            <p className="text-slate-600 text-sm">You leave with a clear timeline and specific home exercises.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. REVIEWS WIDGET */}
            <section className="py-16 px-4 bg-blue-50/50 text-center">
                <h2 className="text-2xl font-bold mb-8 text-blue-950">Trusted by West Shore Athletes</h2>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl border border-dashed border-blue-200">
                    <GoogleReviewsColumns />
                </div>
            </section>

            {/* 8. FAQ */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center text-blue-950">Common Questions</h2>
                    <div className="space-y-4">
                        {[{"q":"Will massage damage my healing injury?","a":"No, when performed by a clinical RMT, rehabilitative massage is carefully scaled to your tissue's healing stage to promote recovery without causing re-injury."},{"q":"Do you treat post-surgical scars?","a":"Yes, once the incision is fully closed and cleared by your doctor, manual therapy is highly effective at reducing scar tissue restriction."}].map((f, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">{f.q}</h3>
                                <p className="text-slate-600 text-sm">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-950 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Perform at Your Best?</h2>
                <a href="https://synctherapy.janeapp.com/" className="inline-block bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition-all text-lg shadow-xl">
                    Book Assessment Now
                </a>
            </section>

            <Footer />
        </main>
    );
}
