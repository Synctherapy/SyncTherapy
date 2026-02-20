
import React from "react";
import Link from "next/link";
import {
    ChevronLeft, Share2, Verified, Calendar, Star,
    Award, ClipboardList, Shield, Users, Phone, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceLayoutProps {
    frontmatter: {
        title: string;
        description?: string;
    };
    content: React.ReactNode;
}

export function ServiceLayout({ frontmatter, content }: ServiceLayoutProps) {
    return (
        <div className="font-sans antialiased bg-[#F0F5FF] min-h-screen text-[#2D3436] pb-24">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#F0F5FF]/80 backdrop-blur-md border-b border-[#2563EB]/10">
                <div className="flex items-center px-4 h-14 justify-between">
                    <Link href="/services" className="flex items-center justify-center size-10 rounded-full active:bg-[#2563EB]/10 transition-colors text-[#1A2B3C]">
                        <ChevronLeft className="w-5 h-5" />
                    </Link>
                    <h2 className="text-[#1A2B3C] text-[13px] font-extrabold uppercase tracking-[0.2em]">Service Detail</h2>
                    <button className="flex items-center justify-center size-10 rounded-full active:bg-[#2563EB]/10 transition-colors text-[#1A2B3C]">
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="px-6 pt-10 pb-8 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-[11px] font-bold uppercase tracking-wider mb-4">
                    <Verified className="w-3.5 h-3.5 fill-current" /> Clinical Pathway
                </div>
                <h1 className="text-[#1A2B3C] text-4xl font-extrabold font-sans leading-tight tracking-tight mb-4">
                    {frontmatter.title}
                </h1>
                <p className="text-slate-600 text-[17px] font-dm leading-relaxed max-w-[90%] mx-auto mb-8">
                    {frontmatter.description || "Advanced therapeutic care for optimal recovery and performance."}
                </p>
                <button className="bg-[#2563EB] text-white font-bold text-[15px] px-8 py-4 rounded-2xl inline-flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-[#2563EB]/20">
                    Book Specialist Consult
                    <Calendar className="w-5 h-5" />
                </button>
            </section>

            {/* Social Proof / Stats */}
            <section className="px-5 mb-10">
                <div className="bg-white rounded-[32px] p-6 shadow-[0_4px_25px_-5px_rgba(37,99,235,0.08)] border border-[#2563EB]/5">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-[#1A2B3C] text-lg font-bold font-sans">Patient Success</h3>
                            <div className="flex items-center gap-1 mt-1">
                                <div className="flex text-[#2563EB]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                    ))}
                                </div>
                                <span className="text-[12px] font-bold text-slate-400">4.9/5 on Google</span>
                            </div>
                        </div>
                        <div className="bg-[#1A2B3C] text-white p-3 rounded-2xl flex flex-col items-center">
                            <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70">Experience</span>
                            <span className="text-lg font-extrabold">12yr+</span>
                        </div>
                    </div>

                    <div className="bg-[#F0F5FF]/50 rounded-2xl p-4 mb-4 border border-[#2563EB]/5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="size-10 bg-slate-200 rounded-full flex items-center justify-center text-[#1A2B3C] font-bold">SM</div>
                            <div>
                                <p className="text-[14px] font-bold text-[#1A2B3C] flex items-center gap-1">
                                    Sarah Mitchell <Verified className="w-3.5 h-3.5 text-[#2563EB] fill-current" />
                                </p>
                                <p className="text-[11px] text-slate-500">Verified Patient Review</p>
                            </div>
                        </div>
                        <p className="text-[14px] text-slate-600 font-dm italic leading-relaxed">
                            "Significant relief after just 3 sessions. The specialized pathway here was a game changer."
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                        <div className="flex flex-col items-center text-center p-3 rounded-2xl border border-dashed border-[#2563EB]/20">
                            <Award className="text-[#2563EB] w-8 h-8 mb-1" />
                            <span className="text-[11px] font-bold text-[#1A2B3C] leading-tight">Award-Winning Protocol</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-3 rounded-2xl border border-dashed border-[#2563EB]/20">
                            <ClipboardList className="text-[#2563EB] w-8 h-8 mb-1" />
                            <span className="text-[11px] font-bold text-[#1A2B3C] leading-tight">Evidence-Based Care</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content (The "Therapeutic Pathway" in template, but generic for us) */}
            <section className="px-6 mb-12">
                <h3 className="text-[#1A2B3C] text-2xl font-bold font-sans mb-6">Treatment Details</h3>

                {/* Inject markdown content here */}
                <div className="prose prose-lg max-w-none text-slate-600 font-dm 
            prose-headings:font-sans prose-headings:font-bold prose-headings:text-[#1A2B3C] 
            prose-a:text-[#2563EB] prose-a:no-underline
            prose-strong:text-[#1A2B3C]
            prose-img:rounded-2xl prose-img:shadow-lg
        ">
                    {content}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="px-5 mb-12">
                <div className="bg-[#1A2B3C] rounded-[32px] p-8 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold font-sans mb-6 text-white">Why patients choose us</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Shield className="text-[#2563EB] w-6 h-6" />
                                <p className="text-slate-300 font-dm text-[15px]">Multi-award winning clinic specializing in complex recovery since 2012.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Users className="text-[#2563EB] w-6 h-6" />
                                <p className="text-slate-300 font-dm text-[15px]">Senior therapists with over 10,000 combined clinical hours.</p>
                            </div>
                        </div>
                        <button className="mt-8 bg-[#2563EB] text-white font-bold text-[15px] px-8 py-4 rounded-2xl w-full active:bg-blue-700 transition-colors shadow-lg shadow-blue-900/40">
                            View Our Team
                        </button>
                    </div>
                    {/* Decorative icon background */}
                    <div className="absolute -right-4 -top-4 text-white/5 pointer-events-none">
                        <Shield className="w-[120px] h-[120px]" />
                    </div>
                </div>
            </section>

            {/* Sticky Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/50 px-6 pt-4 pb-10 z-[60] flex items-center gap-4">
                <button className="size-14 rounded-2xl border-2 border-[#2563EB]/20 flex items-center justify-center text-[#1A2B3C] active:bg-[#F0F5FF]">
                    <Phone className="w-6 h-6" />
                </button>
                <button className="flex-grow bg-[#2563EB] text-white font-bold text-[16px] h-14 rounded-2xl shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2">
                    Book Now
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

        </div>
    );
}
