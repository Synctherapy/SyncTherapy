import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { GoogleReviewsColumns } from '@/components/testimonials/google-reviews-columns';

export const metadata: Metadata = {
    title: 'Daryl Stubbs | RMT, Athletic Therapist & Nutritionist in Colwood',
    description:
        'Meet Daryl Stubbs, Clinical Director of Sync Massage Therapy. With over a decade of experience, Daryl offers RMT, Athletic Therapy, and Holistic Nutrition in the West Shore.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/our-team/daryl-stubbs/',
    },
    openGraph: {
        title: 'Daryl Stubbs | RMT, Athletic Therapist & Nutritionist in Colwood',
        description:
            'Meet Daryl Stubbs, Clinical Director of Sync Massage Therapy. With over a decade of experience, Daryl offers RMT, Athletic Therapy, and Holistic Nutrition in the West Shore.',
        url: 'https://www.synctherapy.ca/our-team/daryl-stubbs/',
        siteName: 'Sync Massage Therapy',
        locale: 'en_CA',
        type: 'profile',
    },
};

const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.synctherapy.ca/our-team/daryl-stubbs/#person',
    name: 'Daryl Stubbs',
    url: 'https://www.synctherapy.ca/our-team/daryl-stubbs/',
    image: 'https://www.synctherapy.ca/images/daryl-stubbs-author.jpg',
    jobTitle: 'Registered Massage Therapist, Certified Athletic Therapist, Holistic Nutritionist',
    description:
        'Daryl Stubbs is the founder and Clinical Director of Sync Massage Therapy in Colwood, BC. He holds credentials as a Registered Massage Therapist (CCHPBC), Certified Athletic Therapist (CATA), and Holistic Nutritionist, with over a decade of clinical experience.',
    worksFor: { '@id': 'https://www.synctherapy.ca/#organization' },
    founder: { '@id': 'https://www.synctherapy.ca/#organization' },
    alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Camosun College' },
        { '@type': 'EducationalOrganization', name: 'CSNN Vancouver Island' },
    ],
    hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Registered Massage Therapist (CCHPBC)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Certified Athletic Therapist — CATA' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Registered Holistic Nutritionist' },
    ],
    knowsAbout: [
        'Massage Therapy',
        'Athletic Therapy',
        'Visceral Manipulation',
        'Holistic Nutrition',
        'Sports Rehabilitation',
        'Myofascial Release',
        'Deep Tissue Massage',
    ],
    sameAs: [
        'https://www.instagram.com/synctherapy/',
        'https://www.facebook.com/SyncTherapyVictoria/',
        'https://www.youtube.com/@synctherapy',
        'https://ca.pinterest.com/SyncTherapyWellness/',
    ],
};

const timeline = [
    { year: '2013', label: "Bachelor's Degree in Athletic and Exercise Therapy — Camosun College" },
    { year: '2015', label: 'Founded Sync Therapy — Lead Therapist & Clinic Owner' },
    { year: '2017', label: 'Registered Massage Therapist License (CMTBC / CCHPBC)' },
    { year: '2018', label: 'Registered Holistic Nutritionist — CSNN Vancouver Island' },
];

const advancedTraining = [
    'Visceral Manipulation Certification (VM1)',
    'Sports Injury Assessment',
    'Ongoing continuous education in rehabilitative sciences',
];

export default function DarylStubbsBio() {
    return (
        <>
            {/* Person + LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />

            <Header />

            <main className="bg-background min-h-screen relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
                {/* Fluid Background Blobs */}
                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/30 rounded-full blur-[100px] motion-safe:animate-pulse mix-blend-multiply filter will-change-transform" />
                    <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-orange-100/20 rounded-full blur-[100px] mix-blend-multiply filter will-change-transform" />
                    <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-teal-100/20 rounded-full blur-[100px] mix-blend-multiply filter will-change-transform" />
                </div>

                <div className="relative z-10">
                    {/* ════════════════════════════════════════
                        1. HERO / PROFILE HEADER
                       ════════════════════════════════════════ */}
                    <section className="pt-[120px] pb-12 lg:pt-[180px] lg:pb-20">
                        <div className="container mx-auto px-4 max-w-5xl">
                            <div className="flex flex-col lg:flex-row gap-12 items-center">
                                {/* Headshot */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl relative">
                                        <Image
                                            src="/images/daryl-stubbs-author.jpg"
                                            alt="Daryl Stubbs — Clinical Director, Sync Massage Therapy"
                                            fill
                                            className="object-cover"
                                            sizes="288px"
                                            priority
                                        />
                                    </div>
                                    {/* Decorative ring */}
                                    <div className="absolute -z-10 inset-0 rounded-full bg-gradient-to-br from-blue-200 to-orange-100 scale-110 blur-sm opacity-60" />
                                </div>

                                {/* Profile Text */}
                                <div className="text-center lg:text-left flex-1">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight mb-3">
                                        Daryl Stubbs
                                    </h1>
                                    <p className="text-blue-700 font-semibold text-lg mb-4">
                                        Registered Massage Therapist (RMT) · Certified Athletic Therapist (CAT(C)) · Registered Holistic Nutritionist
                                    </p>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl">
                                        Clinical Director &amp; Founder of Sync Massage Therapy. Dedicated to helping the West Shore community recover from pain, rehabilitate injuries, and achieve optimal systemic health.
                                    </p>

                                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                                        <a
                                            href="https://synctherapy.janeapp.com/"
                                            className="inline-flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl motion-safe:hover:-translate-y-0.5 transition-all text-lg px-8 py-4 rounded-xl font-semibold cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                                        >
                                            Book an Assessment with Daryl
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </a>
                                    </div>

                                    {/* Stats Row */}
                                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm font-medium text-slate-500">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-blue-900">11+</span>
                                            <span>Years Experience</span>
                                        </div>
                                        <div className="w-px h-8 bg-slate-200 hidden sm:block" />
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-blue-900">8,000+</span>
                                            <span>Treatments</span>
                                        </div>
                                        <div className="w-px h-8 bg-slate-200 hidden sm:block" />
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-blue-900">CCHPBC &amp; CATA</span>
                                            <span>Member</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ════════════════════════════════════════
                        2. PHILOSOPHY OF CARE
                       ════════════════════════════════════════ */}
                    <section className="py-16 lg:py-24">
                        <div className="container mx-auto px-4 max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-8 text-center">
                                Empowering Your Recovery Journey
                            </h2>
                            <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                                <p>
                                    I believe in empowering my clients through education and understanding. When you know how your body works and what is causing your pain or dysfunction, you become an active participant in your recovery.
                                </p>
                                <p>
                                    My approach combines evidence-based manual therapy, movement education, and lifestyle modifications. I don&apos;t just want to help you feel better today—I want to give you the tools and knowledge to maintain optimal health and prevent future injuries.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ════════════════════════════════════════
                        Google Reviews Widget
                       ════════════════════════════════════════ */}
                    <GoogleReviewsColumns />

                    {/* ════════════════════════════════════════
                        3. THREE PILLARS OF CARE
                       ════════════════════════════════════════ */}
                    <section className="py-16 lg:py-24 bg-blue-50/40">
                        <div className="container mx-auto px-4 max-w-5xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-4 text-center">
                                Three Pillars of Care
                            </h2>
                            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                                Each profession is a distinct, regulated scope of practice. Here&apos;s how they work together under one roof.
                            </p>

                            <div className="space-y-6">
                                {/* Pillar 1: RMT */}
                                <div className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-sm overflow-hidden mb-6">
                                    <div className="flex items-center gap-4 p-6 md:p-8 pb-4 md:pb-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700" aria-hidden="true"><path d="M7 21h10" /><path d="M12 21V3" /><path d="M3 7h4" /><path d="M17 7h4" /><path d="M5 3l2 4" /><path d="M19 3l-2 4" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-blue-900">Registered Massage Therapy</h3>
                                            <p className="text-sm text-slate-500 font-medium">CCHPBC — College of Complementary Health Professionals of BC</p>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-slate-600 leading-relaxed text-lg">
                                        As a <Link href="/" className="text-blue-700 hover:text-blue-900 underline underline-offset-4 font-medium transition-colors">Registered Massage Therapist</Link>, I focus on evidence-based soft tissue rehabilitation. I use targeted manual therapy, including <Link href="/services/deep-tissue-massage/" className="text-blue-700 hover:text-blue-900 underline underline-offset-4 font-medium transition-colors">Deep Tissue</Link> techniques, <Link href="/services/myofascial-release/" className="text-blue-700 hover:text-blue-900 underline underline-offset-4 font-medium transition-colors">Myofascial Release</Link>, and <Link href="/services/visceral-manipulation/" className="text-blue-700 hover:text-blue-900 underline underline-offset-4 font-medium transition-colors">Visceral Manipulation</Link>, to address chronic pain, postural dysfunction, and systemic tension. My goal is to restore mobility and calm the nervous system, providing clinical relief for conditions ranging from tension headaches to chronic back pain.
                                    </div>
                                </div>

                                {/* Pillar 2: Athletic Therapy */}
                                <div className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-sm overflow-hidden mb-6">
                                    <div className="flex items-center gap-4 p-6 md:p-8 pb-4 md:pb-6">
                                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-700" aria-hidden="true"><circle cx="12" cy="5" r="3" /><path d="m6.5 8 6 6" /><path d="m6.5 16 6-6" /><path d="M17.5 8 12 14" /><path d="m17.5 16-6-6" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-blue-900">Certified Athletic Therapy</h3>
                                            <p className="text-sm text-slate-500 font-medium">CATA — Canadian Athletic Therapists Association</p>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-slate-600 leading-relaxed text-lg">
                                        As a <Link href="/services/athletic-therapy/" className="text-blue-700 hover:text-blue-900 underline underline-offset-4 font-medium transition-colors">Certified Athletic Therapist</Link>, I treat the whole athlete—whether you are a weekend warrior on the Galloping Goose or a competitive professional. My Athletic Therapy practice emphasizes injury prevention, movement analysis, and sport-specific conditioning. We focus on orthopedic assessment and active <Link href="/services/physical-rehabilitation/" className="text-blue-700 hover:text-blue-900 underline underline-offset-4 font-medium transition-colors">rehabilitation programs</Link> to get you back to your sport stronger and more resilient than before.
                                    </div>
                                </div>

                                {/* Pillar 3: Holistic Nutrition */}
                                <div className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-sm overflow-hidden mb-6">
                                    <div className="flex items-center gap-4 p-6 md:p-8 pb-4 md:pb-6">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700" aria-hidden="true"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 0 0-16 0c0 4.5 4 8 8 12z" /><circle cx="12" cy="10" r="3" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-blue-900">Holistic Nutrition</h3>
                                            <p className="text-sm text-slate-500 font-medium">CSNN — Canadian School of Natural Nutrition</p>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-slate-600 leading-relaxed text-lg">
                                        Healing often requires more than just physical manipulation; it requires the right cellular building blocks. As a <Link href="/services/nutrition-consulting/" className="text-blue-700 hover:text-blue-900 underline underline-offset-4 font-medium transition-colors">Holistic Nutritionist</Link>, I focus on systemic wellness. By utilizing targeted anti-inflammatory diets, gut health protocols, and lifestyle/supplement recommendations, I help clients reduce internal tension and systemic inflammation, allowing the body to truly feel its best and accelerate the physical healing process.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ════════════════════════════════════════
                        4. EXPERIENCE & EDUCATION TIMELINE
                       ════════════════════════════════════════ */}
                    <section className="py-16 lg:py-24">
                        <div className="container mx-auto px-4 max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-12 text-center">
                                Clinical Background &amp; Credentials
                            </h2>

                            {/* Timeline */}
                            <div className="relative">
                                {/* Vertical line */}
                                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200" aria-hidden="true" />

                                <div className="space-y-8">
                                    {timeline.map((item, index) => (
                                        <div key={index} className="relative flex gap-6 items-start">
                                            <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md z-10">
                                                {item.year.slice(-2)}
                                            </div>
                                            <div className="pt-2">
                                                <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">{item.year}</span>
                                                <p className="text-lg text-slate-700 mt-1">{item.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Advanced Training */}
                            <div className="mt-12 bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-blue-900 mb-4">Advanced Training</h3>
                                <ul className="space-y-2">
                                    {advancedTraining.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 flex-shrink-0 mt-1" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-slate-600 mt-4">
                                    <strong>Experience:</strong> Over 8,000 successful treatment sessions and previous experience working alongside Team Canada athletes.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ════════════════════════════════════════
                        5. BEYOND THE CLINIC
                       ════════════════════════════════════════ */}
                    <section className="py-16 lg:py-24 bg-blue-50/40">
                        <div className="container mx-auto px-4 max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-8 text-center">
                                Deeply Rooted in the West Shore
                            </h2>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                As both a practitioner and an active member of the community, I bring personal experience to my practice. I am an avid mountain hiker exploring the trails of Mount Doug and Goldstream Provincial Park, and I play soccer in local Victoria leagues. This connection gives me firsthand understanding of the physical demands my active clients face. When I&apos;m not in the clinic, you&apos;ll find me spending time with my family or volunteering with local youth sports teams.
                            </p>
                        </div>
                    </section>

                    {/* ════════════════════════════════════════
                        6. LEGAL & SCOPE DISCLAIMER
                       ════════════════════════════════════════ */}
                    <section className="py-8 border-t border-slate-200">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <p className="text-xs text-slate-400 italic leading-relaxed text-center">
                                <strong>Regulatory Notice:</strong> Registered Massage Therapy, Athletic Therapy, and Holistic Nutrition are distinct and separate professions with different regulatory scopes of practice in British Columbia. Treatment plans, assessments, and billing will clearly reflect the specific, singular service being provided during your scheduled appointment time.
                            </p>
                        </div>
                    </section>

                    {/* ════════════════════════════════════════
                        7. FINAL CTA
                       ════════════════════════════════════════ */}
                    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.06)_0%,_transparent_60%)]" />
                        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                                Ready to Start Your Recovery?
                            </h2>
                            <p className="text-lg text-blue-200 mb-10 leading-relaxed">
                                Serving Colwood, Langford, and the Greater Victoria area with direct billing available for RMT and Athletic Therapy services.
                            </p>
                            <a
                                href="https://synctherapy.janeapp.com/"
                                className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 shadow-lg shadow-black/20 hover:shadow-xl motion-safe:hover:-translate-y-0.5 transition-all text-lg px-8 py-4 rounded-xl font-bold cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:outline-none"
                            >
                                View Schedule &amp; Book
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </a>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}
