"use client";

import React from "react";
import Link from "next/link";
import {
    ChevronLeft, Menu, Award, ArrowRight,
    Calendar, ShieldCheck, Users, Shield
} from "lucide-react";

interface ServicesIndexLayoutProps {
    content: React.ReactNode; // Optional, maybe we just hardcode the loop for now or map from markdown lists?
    // Ideally, this layout should take a list of services. 
    // But for now, we'll staticly recreate the template structure and inject content where appropriate or just use the layout frame.
    // Since the template is VERY specific (images, layout), we might want to hardcode the structure 
    // and just link to the dynamic pages.
}

export function ServicesIndexLayout({ }: ServicesIndexLayoutProps) {
    // We can hardcode the services list from the template for now, 
    // or fetch them dynamically if we had the data. 
    // Given the request is to "stitch" the template, let's replicate the template's look.

    return (
        <div className="font-sans antialiased bg-[#F0F5FF] min-h-screen text-[#1A2B3C]">
            <header className="sticky top-0 z-50 bg-[#F0F5FF]/80 backdrop-blur-md border-b border-[#2563EB]/10 px-6 py-5 flex items-center justify-between">
                <Link href="/" className="flex items-center justify-center w-8 h-8">
                    <ChevronLeft className="text-[#1A2B3C]/60 text-xl" />
                </Link>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2563EB]">Elite Therapeutic Services</span>
                <button className="flex items-center justify-center w-8 h-8">
                    <Menu className="text-[#1A2B3C]/60 text-2xl" />
                </button>
            </header>

            <main className="flex-1 px-6 pt-10 pb-40 hide-scrollbar max-w-md mx-auto w-full">
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-5 py-2.5 rounded-full shadow-sm">
                        <Award className="text-[#2563EB] w-5 h-5" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A2B3C]">Local's Choice • Award Winning 2024</span>
                    </div>
                </div>

                <div className="mb-14 text-center">
                    <h1 className="text-5xl font-bold mb-4 tracking-tight text-[#1A2B3C]">Our Services</h1>
                    <div className="w-12 h-0.5 bg-[#2563EB] mx-auto mb-5"></div>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium max-w-[280px] mx-auto">
                        Bespoke therapeutic excellence tailored for refined recovery and long-term vitality.
                    </p>
                </div>

                <div className="space-y-20">
                    {/* Massage Therapy Card */}
                    <section className="group">
                        <div className="relative mb-8 rounded-3xl overflow-hidden aspect-[16/10] bg-white p-1 ring-1 ring-black/5 shadow-sm">
                            <div className="absolute inset-1 rounded-[20px] bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9ThYMGDw9lGdmUHo0piExI2omSl5SZYAWQOXFl0EqNbSYKdl4RbZVor-k9qXSmNkV5Bw0jX61Odu7Pise2LOUFFPrKJpY3ZCC5GQ1yPXuAxzvt2JMg-NbWIWKJUlkNxmlwckReypGt8v1eprJ4Q5HBFPvha-upORmklZXbjMsr38NV5_2z06KzyWAWCMzis2HFUPYkPbwY_E96QxXQ-La4chO789FtCXWKdHB9-gHkht2Zgmv5vol1bll0itg26xcyUGd1xGR0Zc')]"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-baseline justify-between gap-4">
                                <Link href="/services/massage-therapy-colwood" className="hover:underline decoration-[#2563EB]">
                                    <h2 className="text-3xl font-bold text-[#1A2B3C] leading-tight">Massage Therapy</h2>
                                </Link>
                                <div className="h-px flex-1 bg-[#2563EB]/20"></div>
                                <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest whitespace-nowrap">60–90m</span>
                            </div>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                A restorative experience designed for deep physiological release and mental clarity. Our therapists utilize advanced techniques.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-1">
                                <span className="text-[9px] font-bold uppercase tracking-widest bg-white/50 border border-blue-100 px-3 py-1.5 rounded-full text-[#1A2B3C]/70">Deep Tissue</span>
                                <span className="text-[9px] font-bold uppercase tracking-widest bg-white/50 border border-blue-100 px-3 py-1.5 rounded-full text-[#1A2B3C]/70">Myofascial</span>
                            </div>
                            <div className="flex justify-center pt-4">
                                <Link href="/services/massage-therapy-colwood" className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#2563EB] group-hover:gap-5 transition-all">
                                    Explore Details
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Athletic Therapy Card */}
                    <section className="group">
                        <div className="relative mb-8 rounded-3xl overflow-hidden aspect-[16/10] bg-white p-1 ring-1 ring-black/5 shadow-sm">
                            <div className="absolute inset-1 rounded-[20px] bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDr2BGe5yPTlZKwg_cME-jgnDSPiSUxDN5CweyyZLyOkf9qdyKCA8O4K2xeWeZB3QRjq1Kj72nemDoJpJtIECowuAP57Sv4xPJN5iWcu2MZu_GAuLu6Y0Tqn3IPG35dm6V0-Gb6bohf-GQawoa3rh0QadLYFX7rfn51NBz3A1gatzCC7ZFr7Pgq0vnIvrx0uKSQib6eT0Q3I3keP6lTN6Ai3Jm5yKMXzRlgMLkyWehVEPWpfOe2Ll2URhambmEZTxFzjdFwZrGWNc')]"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-baseline justify-between gap-4">
                                <Link href="/services/athletic-therapy-colwood" className="hover:underline decoration-[#2563EB]">
                                    <h2 className="text-3xl font-bold text-[#1A2B3C] leading-tight">Athletic Therapy</h2>
                                </Link>
                                <div className="h-px flex-1 bg-[#2563EB]/20"></div>
                                <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest whitespace-nowrap">Clinical</span>
                            </div>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                Integrated clinical assessments and personalized rehabilitation protocols to optimize movement efficiency.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-1">
                                <span className="text-[9px] font-bold uppercase tracking-widest bg-white/50 border border-blue-100 px-3 py-1.5 rounded-full text-[#1A2B3C]/70">Rehab</span>
                                <span className="text-[9px] font-bold uppercase tracking-widest bg-white/50 border border-blue-100 px-3 py-1.5 rounded-full text-[#1A2B3C]/70">Mobility</span>
                            </div>
                            <div className="flex justify-center pt-4">
                                <Link href="/services/athletic-therapy-colwood" className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#2563EB] group-hover:gap-5 transition-all">
                                    View Programs
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-24 text-center pb-12">
                    <p className="text-[11px] text-[#1A2B3C]/40 font-bold uppercase tracking-[0.25em] leading-loose">
                        Premium Wellness Architecture<br />
                        Elite Standards • Certified Specialists
                    </p>
                </div>
            </main>

            <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#F0F5FF] via-[#F0F5FF]/95 to-transparent pb-8 z-50">
                <button className="w-full bg-[#2563EB] text-white font-bold text-[13px] tracking-[0.2em] uppercase py-5 rounded-xl shadow-xl shadow-blue-900/10 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                    Book Appointment
                    <Calendar className="w-[18px] h-[18px]" />
                </button>
            </div>
        </div>
    );
}
