import { unstable_cache } from "next/cache";

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
export const PLACE_ID = "ChIJh0e3HIV0j1QRtWxeiAnwzeo"; // Sync Therapy Colwood (Correct ID)

export const getGoogleReviews = unstable_cache(
    async () => {
        if (!GOOGLE_PLACES_API_KEY) {
            console.warn("GOOGLE_PLACES_API_KEY is missing.");
            return [];
        }

        try {
            const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_PLACES_API_KEY}&reviews_no_translations=true`;

            const response = await fetch(url);
            const data = await response.json();

            if (!data.result || !data.result.reviews) {
                console.error("No reviews found in Google API response", data);
                return [];
            }

            // Filter for 4+ stars & sort by most recent (time is unix timestamp)
            const reviews = data.result.reviews
                .filter((r: any) => r.rating >= 4)
                .sort((a: any, b: any) => b.time - a.time);

            return reviews;
        } catch (error) {
            console.error("Error fetching Google Reviews:", error);
            return [];
        }
    },
    ["google-reviews-v4"], // Cache key forced update
    { revalidate: 1209600, tags: ["reviews"] } // 14 Days (60 * 60 * 24 * 14)
);
