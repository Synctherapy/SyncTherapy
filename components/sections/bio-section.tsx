import Image from "next/image";
import { Button } from "@/components/ui/button";

interface BioSectionProps {
    name: string;
    title: string;
    imageUrl: string;
    bio: string;
    bookingUrl?: string;
    experienceText?: string;
}

export function BioSection({
    name,
    title,
    imageUrl,
    bio,
    bookingUrl = "https://synctherapy.janeapp.com",
    experienceText
}: BioSectionProps) {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
                        <Image
                            src={imageUrl}
                            alt={`${name} - ${title} at Sync Therapy Colwood`}
                            fill
                            className="object-cover rounded-full border-4 border-background shadow-xl"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground font-bold">About Your Colwood RMT</h2>

                        <div className="mb-6 flex flex-wrap gap-2 justify-center md:justify-start">
                            <span className="font-semibold text-foreground/80 bg-background/50 p-2 rounded border border-border/50 text-sm">
                                Registered Massage Therapist (RMT) — Since 2017
                            </span>
                            <span className="font-semibold text-foreground/80 bg-background/50 p-2 rounded border border-border/50 text-sm">
                                Certified Athletic Therapist CAT(C) — Since 2013
                            </span>
                            <span className="font-semibold text-foreground/80 bg-background/50 p-2 rounded border border-border/50 text-sm">
                                Holistic Nutritionist — Since 2018
                            </span>
                            <span className="font-semibold text-foreground/80 bg-background/50 p-2 rounded border border-border/50 text-sm">
                                CCHPBC Registered
                            </span>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            I'm Daryl Stubbs—a Registered Massage Therapist, Certified Athletic Therapist, and Holistic Nutritionist. I run one clinic. I'm one therapist. That means when you come in, you're not just getting a massage. You're getting someone who can see the whole picture.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            And yeah—I've won Best Massage and Rehab Clinic six times in a row. But honestly, I don't care about awards. I care that you feel better when you walk out.
                        </p>
                        <Button asChild size="lg">
                            <a href="/about/about-sync-therapy">
                                Read Bio
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
