import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { ReactNode } from "react";

interface FooterLink {
    name: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

interface SocialLink {
    icon: ReactNode;
    href: string;
    label: string;
}

const footerNavigation = {
    column1: [
        { name: "Massage Therapy", href: "/massage-therapy/" },
        { name: "Athletic Therapy", href: "/athletic-therapy/" },
        { name: "Deep Tissue & Sports", href: "/deep-tissue-massage/" },
        { name: "Myofascial Release", href: "/myofascial-release/" },
        { name: "Visceral Manipulation", href: "/visceral-manipulation/" },
        { name: "Direct Billing", href: "/direct-billing/" },
    ],
    column2: [
        { name: "About Us", href: "/about/" },
        { name: "Our Team", href: "/team/" },
        { name: "Blog", href: "/blog/" },
        { name: "Contact", href: "/contact/" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy-policy/" },
        { name: "Terms", href: "/terms/" },
        { name: "Sitemap", href: "/sitemap/" },
    ],
    social: [
        {
            label: "Instagram",
            href: "https://www.instagram.com/synctherapy/",
            icon: <FaInstagram className="h-5 w-5" />,
        },
        {
            label: "Facebook",
            href: "https://www.facebook.com/SyncTherapyVictoria/",
            icon: <FaFacebook className="h-5 w-5" />,
        },
        {
            label: "YouTube",
            href: "https://www.youtube.com/@synctherapy",
            icon: <FaYoutube className="h-5 w-5" />,
        },
        {
            label: "Pinterest",
            href: "https://ca.pinterest.com/SyncTherapyWellness/",
            icon: <FaPinterest className="h-5 w-5" />,
        },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t bg-slate-50 text-slate-600" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex flex-col">
                            <span className="text-xl font-bold uppercase tracking-widest font-sans text-navy">
                                Sync Massage Therapy
                            </span>
                        </Link>
                        <p className="text-sm leading-6 text-slate-500 max-w-xs">
                            <span className="block font-semibold mb-2 text-navy">Feel Better. Move Better. Live Better.</span>
                            6x Award-Winning Clinic (2022-2024). Providing premier registered massage therapy and athletic therapy in Colwood, BC. Trusted by 800+ clients since 2015.
                        </p>
                        <div className="flex space-x-6">
                            {footerNavigation.social.map((item) => (
                                <a key={item.label} href={item.href} className="text-slate-400 hover:text-blue-600 transition-colors">
                                    <span className="sr-only">{item.label}</span>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-8">
                            {/* Services */}
                            <div>
                                <h3 className="text-sm font-bold leading-6 text-navy uppercase tracking-wider">Services</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.column1.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-slate-600 hover:text-blue-600 transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Clinic */}
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-bold leading-6 text-navy uppercase tracking-wider">Clinic</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.column2.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-slate-600 hover:text-blue-600 transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <a href="https://synctherapy.janeapp.com/" className="text-sm leading-6 font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                                            Book Online &rarr;
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Local SEO & Hours */}
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-bold leading-6 text-navy uppercase tracking-wider">Contact & Hours</h3>
                                <address className="mt-6 space-y-4 text-sm leading-6 text-slate-600 not-italic">
                                    <div className="space-y-1">
                                        <p className="font-semibold text-navy">Sync Massage Therapy</p>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=132,+328+Wale+Rd+%23120,+Colwood,+BC+V9B+1J2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block hover:text-blue-600 transition-colors"
                                        >
                                            132, 328 Wale Rd #120,<br />Colwood, BC V9B 1J2
                                        </a>
                                        <p className="text-xs text-slate-500 mt-1">Located in Coastal Offices | 1 min from Juan De Fuca Rec Centre</p>
                                    </div>

                                    <div className="pt-2">
                                        <a href="tel:+12508128698" className="font-semibold text-navy hover:text-blue-600 transition-colors block">
                                            (250) 812-8698
                                        </a>
                                    </div>

                                    <div className="pt-2 border-t border-slate-200 mt-4">
                                        <p className="font-semibold text-navy mb-2">Hours</p>
                                        <ul className="space-y-1 text-xs">
                                            <li className="flex justify-between"><span>Mon:</span> <span>9am - 5pm</span></li>
                                            <li className="flex justify-between"><span>Tue:</span> <span>8am - 8pm</span></li>
                                            <li className="flex justify-between"><span>Wed:</span> <span>8am - 8pm</span></li>
                                            <li className="flex justify-between"><span>Thu:</span> <span>8am - 8pm</span></li>
                                            <li className="flex justify-between"><span>Fri:</span> <span>9am - 5pm</span></li>
                                            <li className="flex justify-between text-slate-400"><span>Sat-Sun:</span> <span>Closed</span></li>
                                        </ul>
                                    </div>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-200 pt-8 sm:mt-20 lg:mt-24">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs leading-5 text-slate-500">
                        <p>&copy; 2026 Sync Therapy. All rights reserved.</p>
                        <div className="flex gap-6">
                            {footerNavigation.legal.map((item) => (
                                <Link key={item.name} href={item.href} className="hover:text-navy transition-colors">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
