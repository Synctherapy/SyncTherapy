
import { Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const googleReviews = [
  {
    name: "Melanie M.",
    date: "2 months ago",
    text: "I've been going to Daryl for RMT massage for about a year, and he is always excellent. Very skilled, professional, and knowledgeable.",
    avatar: "M",
    bg: "bg-purple-600"
  },
  {
    name: "Chris R.",
    date: "1 month ago",
    text: "Daryl was able to fit me in on short notice. Knowledgeable RMT who asked a lot of questions and got me sorted very quickly.",
    avatar: "C",
    bg: "bg-green-600"
  },
  {
    name: "L.B.",
    date: "3 months ago",
    text: "Daryl is personable, professional, and talented. As a Massage Therapist, he was able to diagnose the issue and I felt better coming out.",
    avatar: "L",
    bg: "bg-orange-600"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        {/* Header Badge */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-6 flex items-center gap-6 border border-black/5">
            <div className="flex-shrink-0">
              {/* Google G Logo */}
              <svg className="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-xl text-foreground">Excellent</div>
              <div className="flex items-center gap-1 my-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Based on <strong className="text-foreground">119+ reviews</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {googleReviews.map((review, i) => (
            <div key={i} className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col h-full relative overflow-hidden">
              {/* Decorative Quote */}
              <div className="absolute top-4 right-4 text-9xl leading-none text-accent/5 font-serif select-none">"</div>

              <div className="flex items-center gap-3 mb-4 z-10 w-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${review.bg}`}>
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
                </div>
                <div className="ml-auto">
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#4285F4" /></svg>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3 z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed z-10">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Sync+Massage+Therapy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            See all 119+ Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

