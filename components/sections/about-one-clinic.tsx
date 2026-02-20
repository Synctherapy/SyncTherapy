
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import ShineBorder from "@/components/ui/shine-border";

export function AboutOneClinic() {
    return (
        <section className="py-24 bg-white dark:bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="flex-1 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight font-bold">
                            What Sync Massage Therapy Can Offer Colwood
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            At Sync Therapy, you aren't just another file number. You get consistent, personalized care from <strong>Daryl Stubbs</strong> every single time. No repeating your story, no inconsistencies—just a dedicated partner in your health journey who knows your history and goals inside out.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {[
                                "Consistent, Personalized Care",
                                "Deep Understanding of Your History",
                                "Efficient, Results-Driven Treatment",
                                "Direct Billing & Easy Booking"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-sm font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/about" className="inline-block">
                            <ShineBorder
                                className="bg-navy text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase hover:scale-105 transition-transform"
                                color={["#0052cc", "#3385ff", "#002966"]}
                            >
                                Meet Daryl Stubbs
                            </ShineBorder>
                        </Link>
                    </div>

                    {/* Image/Visual */}
                    <div className="flex-1 w-full max-w-md lg:max-w-xl relative">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500">
                            {/* Placeholder for Jay's image - needing a real image path primarily */}
                            <Image
                                src="/uploads/2025/06/Daryl-is-an-RMT-in-Colwood-scaled.jpg"
                                alt="Daryl Stubbs - Sync Therapy"
                                fill
                                className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-serif text-2xl font-bold">Daryl Stubbs</p>
                                    <p className="text-blue-200 text-sm font-medium tracking-wider uppercase">Registered Massage Therapist</p>
                                </div>
                            </div>
                        </div>

                        {/* Decor elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-blue-100 dark:border-blue-900 rounded-3xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
