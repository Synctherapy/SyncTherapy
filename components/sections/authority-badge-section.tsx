import { Award, Star } from "lucide-react";

export function AuthorityBadgeSection() {
    return (
        <section className="bg-primary text-primary-foreground py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm md:text-base font-medium">
                    <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent" />
                        <span>4x Winner Best Massage Therapy Clinic</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent" />
                        <span>3x Winner Best Rehab Clinic</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-90">
                        <Star className="w-4 h-4" />
                        <span>Voted by Community Votes</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
