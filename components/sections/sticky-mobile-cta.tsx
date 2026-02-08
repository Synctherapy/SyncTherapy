import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function StickyMobileCTA() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t z-50 shadow-lg">
            <Button
                className="w-full h-12 text-lg font-semibold shadow-md"
                size="lg"
                asChild
            >
                <a href="https://synctherapy.janeapp.com" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Check Our Schedule
                </a>
            </Button>
        </div>
    );
}
