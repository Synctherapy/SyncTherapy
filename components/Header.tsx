"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, MenuItem, HoveredLink, ProductItem } from "@/components/ui/navbar-menu";
import { Phone, MapPin, Star, Award, Menu as MenuIcon, X, ChevronDown, ChevronRight, Mail, Clock } from "lucide-react";

export default function Header() {
    const [active, setActive] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                {/* Top Bar - Desktop Only */}
                <div className="hidden lg:flex justify-between items-center py-2 px-4 max-w-7xl mx-auto text-xs font-medium text-muted-foreground border-b border-border/40 w-full">
                    <div className="flex items-center space-x-6">
                        <a href="tel:2508128698" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                            <Phone className="w-3.5 h-3.5" />
                            (250) 812-8698
                        </a>
                        <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            132-328 Wale Road, Suite 120, Colwood, BC
                        </span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center gap-1.5">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span className="font-semibold text-foreground">4.9/5</span> • 120+ Reviews
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-primary" />
                            6x Award Winner
                        </span>
                    </div>
                </div>

                {/* Main Navbar */}
                <div className="relative max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col z-50">
                        <span className="text-xl md:text-2xl font-bold uppercase tracking-widest font-sans text-primary">
                            Sync Massage Therapy
                        </span>
                    </Link>

                    {/* Desktop Menu - Aligned Top/Center */}
                    <div className="hidden lg:block absolute left-1/2 top-4 transform -translate-x-1/2 z-50">
                        <Menu setActive={setActive}>
                            <MenuItem setActive={setActive} active={active} item="Services">
                                <div className="text-sm grid grid-cols-2 gap-10 p-4 min-w-[500px]">
                                    <ProductItem
                                        title="Massage Therapy"
                                        href="/services/massage-therapy-victoria"
                                        description="Registered Massage Therapy for pain relief and relaxation."
                                    />
                                    <ProductItem
                                        title="Athletic Therapy"
                                        href="/services/athletic-therapy"
                                        description="Injury rehabilitation and performance optimization."
                                    />
                                    <ProductItem
                                        title="Sports Massage"
                                        href="/services/sports-massage-victoria"
                                        description="Specialized treatment for athletes and active individuals."
                                    />
                                    <ProductItem
                                        title="Deep Tissue"
                                        href="/services/deep-tissue-massage-victoria"
                                        description="Targeted pressure to release chronic tension."
                                    />
                                </div>
                            </MenuItem>

                            <MenuItem setActive={setActive} active={active} item="Conditions">
                                <div className="flex flex-col space-y-4 text-sm min-w-[200px] p-4">
                                    <h4 className="font-bold text-foreground mb-2">We Treat</h4>
                                    <HoveredLink href="/conditions/back-pain-relief-victoria">Back Pain</HoveredLink>
                                    <HoveredLink href="/conditions/neck-pain-relief-victoria">Headaches & Neck Pain</HoveredLink>
                                    <HoveredLink href="/conditions/shoulder-pain-relief-victoria">Shoulder Pain</HoveredLink>
                                    <HoveredLink href="/conditions/sciatica-relief-victoria">Hip & Knee Pain</HoveredLink>
                                    <HoveredLink href="/conditions/chronic-pain-relief-victoria">Chronic Pain</HoveredLink>
                                </div>
                            </MenuItem>

                            <MenuItem setActive={setActive} active={active} item="About">
                                <div className="flex flex-col space-y-4 text-sm min-w-[200px] p-4">
                                    <HoveredLink href="/about/our-team">Our Team</HoveredLink>
                                    <HoveredLink href="/about/why-choose-us">Why Choose Us</HoveredLink>
                                    <HoveredLink href="/about/contact">Contact & Location</HoveredLink>
                                </div>
                            </MenuItem>

                            <Link href="/blog-1" className="text-black hover:opacity-[0.9] dark:text-white cursor-pointer hover:text-primary transition-colors">
                                Blog
                            </Link>
                        </Menu>
                    </div>

                    {/* Right Side - CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <a href="https://synctherapy.janeapp.com/" className="hidden md:inline-flex justify-center items-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-sm transform transition-all h-10 px-6 py-2 uppercase tracking-wider">
                            Book Now
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* spacer to prevent content overlap */}
            <div className="h-[73px] lg:h-[110px]" />

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-50 bg-white dark:bg-zinc-950 lg:hidden flex flex-col pt-6 pb-10 px-6 overflow-y-auto animate-in fade-in slide-in-from-right-full duration-300"
                >
                    {/* Close Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    <div className="flex flex-col space-y-6">
                        <div className="flex flex-col items-center space-y-4 pb-6 border-b border-border/50 text-center">
                            <div className="flex flex-col items-center">
                                <h2 className="text-xl font-bold font-sans uppercase tracking-widest text-primary">Sync Massage Therapy</h2>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Victoria's Premier Wellness Clinic</p>
                            </div>

                            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-600 text-[11px] font-bold uppercase tracking-wider gap-1.5">
                                <Award className="w-3.5 h-3.5" />
                                6x Award Winner
                            </span>

                            <a href="https://synctherapy.janeapp.com/" className="w-full text-center rounded-md text-base font-bold bg-[#fbbf24] text-black py-3.5 uppercase tracking-wider shadow-sm hover:bg-[#f59e0b] transition-colors">
                                Book Appointment Now
                            </a>

                            <div className="flex flex-col items-center space-y-2 text-sm text-muted-foreground w-full">
                                <a href="tel:2508128698" className="w-full flex items-center justify-center gap-2 font-bold text-black border-2 border-amber-400 rounded-md py-3 uppercase tracking-wider hover:bg-amber-50 transition-colors">
                                    <Phone className="w-4 h-4 text-amber-500" />
                                    Call (250) 812-8698
                                </a>

                                <span className="flex items-center gap-2 mt-2">
                                    <span className="flex text-amber-400">
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                    </span>
                                    <span className="font-semibold text-foreground">4.9/5 • 120+ Reviews</span>
                                </span>
                                <span className="flex items-center gap-2 text-center max-w-[250px] leading-tight text-xs pt-2">
                                    <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                                    132-328 Wale Road, Suite 120, Colwood, BC
                                </span>
                            </div>
                        </div>

                        <nav className="flex flex-col space-y-1">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-bold text-foreground hover:text-primary transition-colors">
                                Home
                            </Link>

                            <div className="py-2">
                                <span className="text-base font-bold text-foreground block mb-2">Services</span>
                                <div className="pl-4 flex flex-col space-y-2.5 text-muted-foreground text-sm font-medium border-l-2 border-border/50 ml-1">
                                    <Link href="/services/massage-therapy-victoria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block pl-3">
                                        Massage Therapy
                                    </Link>
                                    <Link href="/services/direct-billing-massage-victoria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block pl-3">
                                        Direct Billing Massage
                                    </Link>
                                    <Link href="/services/deep-tissue-massage-victoria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block pl-3">
                                        Deep Tissue Massage
                                    </Link>
                                    <Link href="/services/sports-massage-victoria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block pl-3">
                                        Sports Massage
                                    </Link>
                                    <Link href="/services/myofascial-release-victoria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block pl-3">
                                        Myofascial Release
                                    </Link>
                                    <Link href="/services/athletic-therapy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block pl-3">
                                        Athletic Therapy
                                    </Link>
                                    <Link href="/services/visceral-manipulation-victoria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block pl-3">
                                        Visceral Manipulation
                                    </Link>
                                </div>
                            </div>

                            <div className="py-2">
                                <span className="text-base font-bold text-foreground block mb-2">Conditions</span>
                                <div className="pl-4 flex flex-col space-y-2.5 text-muted-foreground text-sm font-medium border-l-2 border-border/50 ml-1">
                                    <Link href="/conditions/back-pain-relief-victoria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block pl-3">Back Pain</Link>
                                    <Link href="/conditions/neck-pain-relief-victoria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block pl-3">Headaches & Neck Pain</Link>
                                    <Link href="/conditions/shoulder-pain-relief-victoria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block pl-3">Shoulder Pain</Link>
                                    <Link href="/conditions/sciatica-relief-victoria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block pl-3">Hip & Knee Pain</Link>
                                    <Link href="/conditions/chronic-pain-relief-victoria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block pl-3">Chronic Pain</Link>
                                </div>
                            </div>

                            <Link href="/about/about-sync-therapy" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-bold text-foreground hover:text-primary transition-colors">
                                About
                            </Link>
                            <Link href="/about/why-choose-us" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-bold text-foreground hover:text-primary transition-colors">
                                Why Choose Us
                            </Link>
                            <Link href="/about/our-team" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-bold text-foreground hover:text-primary transition-colors">
                                Our Team
                            </Link>
                            <Link href="/blog-1" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-bold text-foreground hover:text-primary transition-colors">
                                Blog
                            </Link>
                            <Link href="/about/contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-base font-bold text-foreground hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
