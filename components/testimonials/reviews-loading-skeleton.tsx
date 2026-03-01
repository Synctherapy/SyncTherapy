import { Button } from "@/components/ui/button";

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
)

const SkeletonCard = () => (
    <div className="relative w-full overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
        <div className="flex flex-row items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-zinc-800 animate-pulse"></div>
            <div className="flex flex-col gap-1">
                <div className="w-24 h-4 bg-slate-200 dark:bg-zinc-800 rounded animate-pulse"></div>
                <div className="w-16 h-3 bg-slate-200 dark:bg-zinc-800 rounded animate-pulse"></div>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="w-full h-3 bg-slate-200 dark:bg-zinc-800 rounded animate-pulse"></div>
            <div className="w-[90%] h-3 bg-slate-200 dark:bg-zinc-800 rounded animate-pulse"></div>
            <div className="w-[80%] h-3 bg-slate-200 dark:bg-zinc-800 rounded animate-pulse"></div>
        </div>
    </div>
);

export function ReviewsLoadingSkeleton() {
    return (
        <section className="relative py-20 bg-slate-50 dark:bg-black/20 overflow-hidden">
            {/* Top Bar matching GoogleReviewsColumns */}
            <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                <div className="flex-1 bg-[#4285F4]"></div>
                <div className="flex-1 bg-[#EA4335]"></div>
                <div className="flex-1 bg-[#FBBC05]"></div>
                <div className="flex-1 bg-[#34A853]"></div>
            </div>

            <div className="container mx-auto px-4 mb-10 text-center">
                <div className="flex flex-col items-center justify-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border shadow-sm text-sm font-medium text-muted-foreground">
                        <GoogleIcon />
                        <span className="text-zinc-700 dark:text-zinc-200">Loading verified reviews...</span>
                    </span>
                </div>
                <h2 className="text-3xl font-bold font-serif mb-4">Kind Words from Our Patients</h2>
                <p className="text-muted-foreground">Recent 5-Star Reviews from your neighbors in Colwood & Langford.</p>
            </div>

            {/* Placeholder Marquee Area matching exact h-[500px] to prevent CLS */}
            <div className="relative flex h-[500px] w-full flex-row items-start gap-4 overflow-hidden px-4 md:px-0 max-w-7xl mx-auto opacity-70">
                <div className="flex-1 flex flex-col gap-4">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>
                <div className="hidden md:flex flex-1 flex-col gap-4">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <Button disabled variant="outline" size="lg" className="rounded-full shadow-sm">
                    <GoogleIcon />
                    See More Reviews
                </Button>
            </div>
        </section>
    );
}
