import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-2xl font-bold whitespace-nowrap text-white font-heading uppercase tracking-widest">
                                Sync Therapy
                            </span>
                        </Link>
                        <p className="mt-4 text-gray-300 max-w-xs">
                            Professional Registered Massage Therapy & Athletic Therapy in Victoria, Langford & Colwood.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-accent uppercase font-heading tracking-wider">Services</h2>
                            <ul className="text-gray-300 font-medium space-y-4">
                                <li><Link href="/services/massage-therapy-victoria" className="hover:text-white">Massage Therapy</Link></li>
                                <li><Link href="/services/athletic-therapy-victoria" className="hover:text-white">Athletic Therapy</Link></li>
                                <li><Link href="/services/sports-massage-therapy" className="hover:text-white">Sports Massage</Link></li>
                                <li><Link href="/services/deep-tissue-massage-victoria" className="hover:text-white">Deep Tissue</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-accent uppercase font-heading tracking-wider">Clinic</h2>
                            <ul className="text-gray-300 font-medium space-y-4">
                                <li><Link href="/our-team" className="hover:text-white">Our Team</Link></li>
                                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                                <li><Link href="/about/contact" className="hover:text-white">Contact</Link></li>
                                <li><a href="https://synctherapy.janeapp.com/" className="hover:text-white">Book Online</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-accent uppercase font-heading tracking-wider">Contact</h2>
                            <ul className="text-gray-300 font-medium space-y-4">
                                <li className="mb-2">
                                    <span className="block font-bold text-white">Address:</span>
                                    132, 328 Wale Rd #120<br />Colwood, BC V9B 1J2
                                </li>
                                <li className="mb-2">
                                    <span className="block font-bold text-white">Phone:</span>
                                    <a href="tel:2508128698" className="hover:text-accent">(250) 812-8698</a>
                                </li>
                                <li>
                                    <span className="block font-bold text-white">Hours:</span>
                                    Mon-Sat: 8am - 8pm
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-400 sm:text-center">© {new Date().getFullYear()} Sync Therapy. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
}
