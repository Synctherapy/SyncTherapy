"use client";

import { Star } from "lucide-react";
import Link from "next/link";

const STARS = [0, 1, 2, 3, 4];

const reviews = [
    {
        name: "Melanie M.",
        text: "I've been going to Daryl for RMT massage for about a year, and he is always excellent. Very skilled, professional, and knowledgeable.",
        stars: 5,
        date: "2 months ago",
        avatar: "M",
        bg: "bg-purple-600"
    },
    {
        name: "Chris R.",
        text: "Daryl was able to fit me in on short notice. Knowledgeable RMT who asked a lot of questions and got me sorted very quickly.",
        stars: 5,
        date: "1 month ago",
        avatar: "C",
        bg: "bg-green-600"
    },
    {
        name: "L.B.",
        text: "Daryl is personable, professional, and talented. As a Massage Therapist, he was able to diagnose the issue and I felt better coming out.",
        stars: 5,
        date: "3 months ago",
        avatar: "L",
        bg: "bg-orange-600"
    }
];

export default function GoogleReviewWidget() {
    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto space-y-10">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-4 bg-white dark:bg-zinc-900 rounded-full shadow-lg border border-black/5 px-6 py-3 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3">
                    {/* Authentic Google G Logo SVG */}
                    <div className="w-6 h-6 flex-shrink-0">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-foreground">Google Rating</span>
                            <span className="text-sm font-medium text-muted-foreground">4.9</span>
                            <div className="flex items-center">
                            {STARS.map((i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                                ))}
                            </div>
                        </div>
                        <Link
                            href="https://www.google.com/maps/place/Sync+Massage+Therapy/@48.445469,-123.4699215,17z/data=!3m1!4b1!4m6!3m5!1s0x548f74851cb74787:0xeacdf009885e6cb5!8m2!3d48.445469!4d-123.4673466!16s%2Fg%2F11h_s_1y0_"
                            target="_blank"
                            className="text-xs text-[#4285F4] hover:underline font-medium"
                        >
                            See all 120+ reviews
                        </Link>
                    </div>
                </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-3 gap-6 w-full">
                {reviews.map((review, i) => (
                    <div key={i} className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col h-full">
                        <div className="flex items-center gap-1 mb-3">
                            {STARS.slice(0, review.stars).map((i) => (
                                <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                            ))}
                        </div>
                        <p className="text-foreground/90 text-sm leading-relaxed mb-4 flex-grow">
                            &quot;{review.text}&quot;
                        </p>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${review.bg} flex items-center justify-center text-xs font-bold text-white`}>
                                {review.avatar}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-sm text-foreground">{review.name}</span>
                                <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="ml-auto">
                                <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
