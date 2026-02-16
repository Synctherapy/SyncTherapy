"use client";

import React from "react";
import Link from "next/link";
import {
    Menu, Calendar, Star, ArrowRight, Activity, CreditCard,
    Brain, User, MapPin, Award, Quote, Mail, Phone, Shield
} from "lucide-react";

const CLINICAL_EXPERTISE = [
    { icon: Brain, label: "Migraines" },
    { icon: User, label: "Sciatica" }, // Choosing closest icons
    { icon: Activity, label: "Neck Pain" },
    { icon: Award, label: "Sports Injury" }
];

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCGFk48ZCCgZYJxxQ1JDKS0NxsoXxiCE0j64mKRZ4DJI-RRuhXKciLzysy--nBVCh7TDnZkX0r__txm5Op92lQhU096hdO5F_l4ULxgrr4UCSGEOBg2D_gl792HR_CJmLueQ9QPLzEXlk3UCGMWllllyo-Zn3ix0hctziZHTnKZHrcT5AhZejZ2IqJL5ylHjRZSOskLlDgZ0zj8sbv_IGO9fOJtj6PZ1LkjEEdO7cVdueVkCoWNoEbO2mYwCL2VRHJxGdrXMEiuK8k";
};

export function HomeLayout() {
    return (
        <div className="font-sans antialiased text-[#2D3748] bg-[#F0F5FF]">
            {/* Navigation */}
            <nav className="sticky top-0 z-[60] flex items-center justify-between px-6 py-4 bg-[#F0F5FF]/95 backdrop-blur-md border-b border-[#1A2B3C]/5">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-[#1A2B3C] uppercase tracking-tighter leading-none font-sans">Sync Therapy</span>
                </div>
                <div className="flex items-center gap-4">
                    <Menu className="text-[#1A2B3C] w-6 h-6" />
                </div>
            </nav>

            <main className="relative">
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex flex-col pt-4 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[60%] z-0">
                        <img
                            alt="Professional clinical environment"
                            className="w-full h-full object-cover"
                            src="/uploads/2025/06/Daryl-is-an-RMT-in-Colwood-scaled.jpg"
                            // Fallback to template image if local not found, but we should use local if possible. 
                            // For now using the template one as backup or the one from home.md
                            onError={handleImageError}
                            fetchPriority="high"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F5FF]/0 via-[#F0F5FF]/80 to-[#F0F5FF]"></div>
                    </div>

                    <div className="relative z-10 px-6 pt-12 flex flex-col h-full mt-auto pb-12">
                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            <div className="bg-[#1A2B3C] text-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                                <Award className="text-[#2563EB] w-4 h-4" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Top Rated Colwood 2024</span>
                            </div>
                            <div className="bg-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-[#1A2B3C]/5">
                                <div className="flex items-center gap-1">
                                    <Star className="text-[#2563EB] w-3 h-3 fill-current" />
                                    <span className="text-[10px] font-bold text-[#1A2B3C]">5.0 Clinical Excellence</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 text-center sm:text-left">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">Advanced Clinical Recovery</span>
                        </div>

                        <h1 className="text-5xl font-extrabold text-[#1A2B3C] leading-[1.1] mb-5 text-center sm:text-left font-sans">
                            Sync Your <br /><span className="text-[#2563EB] italic font-normal">Recovery.</span>
                        </h1>

                        <p className="text-[#2D3748] text-lg leading-relaxed mb-8 max-w-[92%] mx-auto sm:mx-0 text-center sm:text-left font-sans">
                            Victoria & Colwood's premier destination for integrated massage therapy and medical-grade recovery protocols.
                        </p>

                        <div className="flex justify-center sm:justify-start">
                            <button className="bg-[#2563EB] text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-[#2563EB]/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
                                <span className="uppercase tracking-widest text-sm">Book Treatment</span>
                                <Calendar className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Most Requested Section */}
                <section className="px-6 py-16 bg-white">
                    <div className="mb-10 text-center">
                        <h2 className="text-2xl text-[#1A2B3C] font-bold mb-2 font-sans">Most Requested</h2>
                        <div className="h-1 w-12 bg-[#2563EB] mx-auto"></div>
                    </div>

                    <div className="space-y-4 max-w-sm mx-auto">
                        <Link href="/services/massage-therapy-colwood" className="block">
                            <div className="bg-[#F0F5FF] p-6 rounded-2xl border border-[#1A2B3C]/5 flex items-center justify-between hover:shadow-md transition-shadow">
                                <div>
                                    <h3 className="text-lg text-[#1A2B3C] font-bold font-sans">Massage Therapy</h3>
                                    <p className="text-sm text-[#2D3748]/70">Our signature clinical care</p>
                                </div>
                                <div className="bg-[#2563EB] text-white p-3 rounded-full shadow-lg">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </Link>

                        <Link href="/conditions/back-pain-victoria" className="block">
                            <div className="bg-[#1A2B3C] p-6 rounded-2xl flex items-center justify-between hover:shadow-md transition-shadow">
                                <div>
                                    <h3 className="text-lg text-white font-bold font-sans">Back Pain Relief</h3>
                                    <p className="text-sm text-white/60">Targeted clinical focus</p>
                                </div>
                                <Activity className="text-[#2563EB] w-6 h-6" />
                            </div>
                        </Link>

                        <div className="bg-white p-6 rounded-2xl border-2 border-[#2563EB]/20 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg text-[#1A2B3C] font-bold font-sans">Direct Billing</h3>
                                <p className="text-sm text-[#2D3748]/70">Hassle-free insurance</p>
                            </div>
                            <CreditCard className="text-[#2563EB] w-6 h-6" />
                        </div>
                    </div>
                </section>

                {/* Clinical Expertise Grid */}
                <section className="px-6 py-20 bg-[#F0F5FF]">
                    <div className="text-center mb-12">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-2 block">What We Treat</span>
                        <h2 className="text-3xl text-[#1A2B3C] font-bold font-sans">Clinical Expertise</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                        {CLINICAL_EXPERTISE.map((item, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-[#1A2B3C]/5 text-center flex flex-col items-center">
                                <item.icon className="text-[#2563EB] w-8 h-8 mb-3" />
                                <h4 className="text-[#1A2B3C] font-bold text-base font-sans">{item.label}</h4>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Clinical Services List */}
                <section className="px-6 py-20 bg-[#1A2B3C] text-white">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl mb-4 text-white font-bold font-sans">Clinical Services</h2>
                        <div className="h-1 w-12 bg-[#2563EB] mx-auto"></div>
                    </div>

                    <div className="space-y-12 max-w-sm mx-auto">
                        {/* RMT */}
                        <div className="relative group">
                            <div className="aspect-[16/9] mb-6 overflow-hidden rounded-2xl">
                                <img alt="Clinical Massage" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLVThwGa9F9CJs8fjYuglxj9NZ7LNMsuqtxq-oh0RXNC-Ma0qFbSFIg_ULXU6_uI5aaYBloZM8srYp_gQRzsow1zm624RJ9IqSZnpXTGW12rDdmcoQzVie4-VNoR2qQWA0A4A_gJAm8Jb3olN_nndTcHewtcyXgBeOpZ6CyiWMOvXNsgBDhbn_urAAoigFXQQVMviFbURVleaV2tJAzmAxBTTCDUHt54aX9r-xkRmnH1h8j2_JQt1G08cKsvtE_taquq_hnwzoHMM" />
                            </div>
                            <h3 className="text-2xl mb-2 text-white font-bold font-sans">RMT Massage Therapy</h3>
                            <p className="text-white/70 text-base leading-relaxed mb-4">Evidence-based tissue manipulation for chronic pain resolution and recovery.</p>
                        </div>

                        {/* Athletic - using placeholder image */}
                        <div className="relative group">
                            <div className="aspect-[16/9] mb-6 overflow-hidden rounded-2xl">
                                <img alt="Athletic Therapy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOOtHVhjM5QG4_S47byX9JYIYfeX1OLEf4uwdHa9IycrcNK011B5M8kfbGYjybbXMwC3DOleXl9E50rbleOl7zOXRggi-Poz2u8yXHEJCc_gxHfv-cKVXWZkYO4BWPZgV7SJmD3-LCa7vw6tpBmF_D7gKaBC759AX5bbRXm-DFfmwyO62ekVv1-aYTPh0ItnejB7AxGGAE74ast2dok-YN4dvxQeOowN23NHmJm0jpRd0uZP37I_0Q2tptyygDpEEAT0oWADq-5Lg" />
                            </div>
                            <h3 className="text-2xl mb-2 text-white font-bold font-sans">Athletic Rehab</h3>
                            <p className="text-white/70 text-base leading-relaxed mb-4">High-performance recovery protocols designed for active lifestyles.</p>
                        </div>
                    </div>
                </section>

                {/* Why Sync / Footer Stats */}
                <section className="px-6 py-20 bg-[#F0F5FF]">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl text-[#1A2B3C] mb-4 font-bold font-sans">Why Sync Massage</h2>
                        <p className="text-sm text-[#2563EB] uppercase tracking-widest font-bold">Colwood's Gold Standard</p>
                    </div>
                    <div className="grid grid-cols-1 gap-10 max-w-sm mx-auto">
                        <div className="flex gap-5">
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                <Shield className="text-[#2563EB] w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg text-[#1A2B3C] mb-2 font-bold font-sans">Clinical Trust</h4>
                                <p className="text-[#2D3748]/80 text-sm leading-relaxed">Certified RMTs specialized in medical-grade musculoskeletal treatments.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                <MapPin className="text-[#2563EB] w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg text-[#1A2B3C] mb-2 font-bold font-sans">Colwood & Westshore</h4>
                                <p className="text-[#2D3748]/80 text-sm leading-relaxed">Deeply rooted in the local community with convenient access.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="px-6 py-20 bg-white">
                    <div className="bg-[#1A2B3C] p-10 rounded-3xl relative overflow-hidden max-w-sm mx-auto">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Quote className="text-white w-24 h-24" />
                        </div>
                        <p className="text-xl italic text-white leading-relaxed mb-8 relative z-10 font-serif">
                            "Sync Therapy offers the most sophisticated clinical experience in Victoria. Truly life-changing care."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-2 border-[#2563EB]/30 bg-white/10 flex items-center justify-center text-white font-bold">MJ</div>
                            <div>
                                <p className="font-bold text-white text-sm">Marcus Jensen</p>
                                <p className="text-[#2563EB] text-[10px] uppercase font-bold tracking-widest">Local Athlete</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Sticky Book Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 z-[100] pointer-events-none">
                <div className="max-w-md mx-auto pointer-events-auto">
                    <button className="w-full bg-[#2563EB] text-white py-4 rounded-2xl shadow-2xl flex items-center justify-between px-6 active:scale-95 transition-all">
                        <div className="flex flex-col items-start text-left">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Clinical Care</span>
                            <span className="text-sm font-bold">Book Appointment</span>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                            <Calendar className="w-5 h-5" />
                        </div>
                    </button>
                    <div className="h-6 safe-area-bottom"></div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#1A2B3C] text-white/50 px-6 py-16 pb-36 text-center border-t border-white/5">
                <div className="font-black text-white text-2xl mb-6 tracking-tighter uppercase font-sans">Sync Therapy</div>
                <p className="text-xs mb-8 font-bold tracking-[0.2em] uppercase text-[#2563EB]">132, 328 Wale Rd #120, Colwood, BC</p>
                <div className="flex justify-center gap-8 mb-10 text-white">
                    <Share2 className="w-5 h-5" />
                    <Mail className="w-5 h-5" />
                    <Phone className="w-5 h-5" />
                </div>
                <p className="text-[10px] uppercase tracking-widest opacity-40">© 2024 Sync Therapy.</p>
            </footer>

        </div>
    );
}

// Helper component for icon
function Share2(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
        </svg>
    )
}
