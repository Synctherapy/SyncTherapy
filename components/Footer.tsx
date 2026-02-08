import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground py-12 border-t border-border">
            <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-2xl font-bold whitespace-nowrap text-primary font-sans uppercase tracking-widest">
                                Sync Therapy
                            </span>
                        </Link>
                        <p className="mt-4 text-muted-foreground max-w-xs">
                            Professional Registered Massage Therapy & Athletic Therapy in Victoria, Langford & Colwood.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-primary uppercase tracking-wider">Services</h2>
                            <ul className="text-muted-foreground font-medium space-y-4">
                                <li><Link href="/services/massage-therapy-victoria" className="hover:text-foreground">Massage Therapy</Link></li>
                                <li><Link href="/services/athletic-therapy-victoria" className="hover:text-foreground">Athletic Therapy</Link></li>
                                <li><Link href="/services/sports-massage-therapy" className="hover:text-foreground">Sports Massage</Link></li>
                                <li><Link href="/services/deep-tissue-massage-victoria" className="hover:text-foreground">Deep Tissue</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-primary uppercase tracking-wider">Clinic</h2>
                            <ul className="text-muted-foreground font-medium space-y-4">
                                <li><Link href="/our-team" className="hover:text-foreground">Our Team</Link></li>
                                <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                                <li><Link href="https://synctherapy.janeapp.com/" className="hover:text-foreground">Book Online</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-primary uppercase tracking-wider">Contact</h2>
                                <ul className="text-muted-foreground font-medium space-y-4 mb-6">
                                    <li className="mb-2">
                                        <span className="block font-bold text-foreground">Address:</span>
                                        132, 328 Wale Rd #120<br />Colwood, BC V9B 1J2
                                    </li>
                                    <li className="mb-2">
                                        <span className="block font-bold text-foreground">Phone:</span>
                                        <a href="tel:2508128698" className="hover:text-primary">(250) 812-8698</a>
                                    </li>
                                    <li>
                                        <span className="block font-bold text-foreground">Hours:</span>
                                        Mon-Sat: 8am - 8pm
                                    </li>
                                </ul>
                                <div className="w-full h-48 rounded-lg overflow-hidden border border-border">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.168759714884!2d-123.4659039232598!3d48.43425717127734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f73177302450b%3A0xe542617f6987186a!2sSync%20Therapy!5e0!3m2!1sen!2sca!4v1707000000000!5m2!1sen!2sca"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-border sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-muted-foreground sm:text-center">© {new Date().getFullYear()} Sync Therapy. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
}
