/**
 * Google Places (New) API reviews loader. Runs at build time, so the reviews
 * bake into static HTML. No client JS. Env vars set on Vercel:
 *   GOOGLE_PLACES_API_KEY  — API key with Places API (New) enabled
 *   GOOGLE_PLACE_ID        — the place id for AWLabs Pty Ltd
 *
 * When either env var is missing, we fall back to a static "verified on
 * Google" state so the site still renders cleanly. To wire the live feed:
 *   1. Google Cloud Console → enable Places API (New), create an API key
 *      restricted to Places API and to the awlabs.com.au HTTP referrer.
 *   2. Grab your Place ID via the Place ID Finder tool (developers.google.com
 *      /maps/documentation/places/web-service/place-id).
 *   3. Add both as Vercel Production env vars, redeploy.
 */

export interface Review {
  author: string;
  photoUrl?: string;
  rating: number;
  text: string;
  timeDescription: string;
  profileUrl?: string;
}

export interface ReviewsData {
  aggregateRating: number;
  totalReviews: number;
  reviews: Review[];
  reviewsUrl: string;
  source: 'google-api' | 'fallback';
}

const FALLBACK_REVIEWS_URL = 'https://share.google/8WiXOthGKyQ4eH1Kx';

const FALLBACK: ReviewsData = {
  aggregateRating: 5.0,
  totalReviews: 0,
  reviews: [],
  reviewsUrl: FALLBACK_REVIEWS_URL,
  source: 'fallback',
};

export async function getReviews(): Promise<ReviewsData> {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return FALLBACK;

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount,reviews,googleMapsUri`;
    const res = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) return FALLBACK;
    const data = await res.json();

    const reviews: Review[] = ((data.reviews as unknown[]) ?? [])
      .map((raw) => raw as {
        authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
        rating?: number;
        text?: { text?: string };
        relativePublishTimeDescription?: string;
      })
      .filter((r) => (r.rating ?? 0) >= 4 && (r.text?.text?.length ?? 0) > 50)
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)
        || (b.text?.text?.length ?? 0) - (a.text?.text?.length ?? 0))
      .slice(0, 6)
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? 'Google user',
        photoUrl: r.authorAttribution?.photoUri,
        rating: r.rating ?? 5,
        text: r.text?.text ?? '',
        timeDescription: r.relativePublishTimeDescription ?? '',
        profileUrl: r.authorAttribution?.uri,
      }));

    return {
      aggregateRating: data.rating ?? 5.0,
      totalReviews: data.userRatingCount ?? 0,
      reviews,
      reviewsUrl: data.googleMapsUri ?? FALLBACK_REVIEWS_URL,
      source: 'google-api',
    };
  } catch {
    return FALLBACK;
  }
}
