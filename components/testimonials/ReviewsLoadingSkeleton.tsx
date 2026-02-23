export function ReviewsLoadingSkeleton() {
    return (
        <section className="relative py-20 bg-slate-50 dark:bg-black/20 overflow-hidden h-[660px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 animate-pulse w-full">
                <div className="h-8 w-64 bg-slate-200 dark:bg-slate-800 rounded-full mb-4"></div>
                <div className="h-4 w-48 bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="mt-12 flex gap-4 w-full justify-center overflow-hidden max-w-7xl px-4">
                   {/* Mock cards */}
                   <div className="h-[200px] w-full max-w-[300px] bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
                   <div className="h-[200px] w-full max-w-[300px] bg-slate-200 dark:bg-slate-800 rounded-xl hidden md:block"></div>
                   <div className="h-[200px] w-full max-w-[300px] bg-slate-200 dark:bg-slate-800 rounded-xl hidden lg:block"></div>
                </div>
            </div>
        </section>
    )
}
