"use server";
import { getGoogleReviews } from "../google";

export async function fetchGoogleReviewsAction() {
    const reviews = await getGoogleReviews();
    return reviews.map((r: any) => ({
        img: r.profile_photo_url || "https://avatar.vercel.sh/google",
        name: r.author_name,
        username: r.relative_time_description || "Google Review",
        body: r.text,
        rating: r.rating
    }));
}
