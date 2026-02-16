import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

function Feature() {
    const conditions = [
        {
            title: "Back Pain",
            description: "Sciatica, herniated discs, lower back strain, and posture correction.",
            image: "/images/conditions/back-pain.png", // Generated AI image
            href: "/conditions/back-pain-relief-victoria"
        },
        {
            title: "Neck Pain",
            description: "Whiplash, stiff neck, tech-neck, and tension headaches.",
            image: "/images/conditions/neck-pain.png", // Generated AI image
            href: "/conditions/neck-pain-relief-victoria"
        },
        {
            title: "Shoulder Pain",
            description: "Rotator cuff injuries, frozen shoulder, and impingement.",
            image: "/images/conditions/shoulder-pain.png", // Generated AI image
            href: "/conditions/shoulder-pain-relief-victoria"
        },
        {
            title: "Hip & Knee Pain",
            description: "Runner’s knee, IT band syndrome, arthritis, and hip flexor strain.",
            image: "/images/conditions/hip-knee-pain.png", // Generated AI image
            href: "/conditions/sciatica-relief-victoria"
        },
        {
            title: "Chronic Pain",
            description: "Fibromyalgia, arthritis management, and long-standing injury patterns.",
            image: "/images/conditions/chronic-pain.png", // Generated AI image
            href: "/conditions/chronic-pain-relief-victoria"
        },
        {
            title: "Sports Injuries",
            description: "Sprains, strains, tendonitis, and post-surgical rehab.",
            image: "/images/conditions/sports-injuries.png", // Generated AI image
            href: "/conditions/conditions-sports-injuries"
        }
    ];

    return (
        <div className="w-full py-20 lg:py-40 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-4 flex-col items-start max-w-2xl">
                        <div>
                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                                Specialized Care
                            </Badge>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-3xl md:text-5xl tracking-tight font-bold text-left text-foreground font-sans">
                                Conditions We Treat
                            </h2>
                            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-left font-roboto">
                                It’s not just about "fixing" a body part. It’s about getting your life back. We treat the root cause of your pain.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {conditions.map((item, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <Link href={item.href} className="block h-full">
                                    <GlassCard variant="hover" className="h-full flex flex-col gap-4 p-4">
                                        <div className="bg-muted rounded-xl aspect-video overflow-hidden relative shadow-inner">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-110"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 p-2">
                                            <h3 className="text-xl tracking-tight font-bold flex items-center gap-2 font-inter text-navy">
                                                {item.title}
                                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                                            </h3>
                                            <p className="text-slate-600 text-base font-roboto leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </GlassCard>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Feature };
