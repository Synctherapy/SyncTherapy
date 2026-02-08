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
        <section className="py-20 bg-muted/30">
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
                        <h2 className="font-serif text-3xl md:text-4xl mb-2">Meet Your {title}</h2>
                        <h3 className="text-xl text-foreground font-bold mb-4">{name}</h3>

                        {experienceText && (
                            <div className="mb-6 font-semibold text-foreground/80 bg-background/50 inline-block p-2 rounded border border-border/50">
                                {experienceText}
                            </div>
                        )}

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {bio}
                        </p>
                        <Button asChild size="lg">
                            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                                Book with {name.split(' ')[0]}
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
