/**
 * Google Places (New) API reviews loader. Runs at build time, so the reviews
 * bake into static HTML (readable by search engines and AI assistants) with
 * no client JS. Refreshes on every deploy.
 *
 * Env var on Vercel (Production + Preview, server only, never PUBLIC_):
 *   GOOGLE_PLACES_API_KEY  key restricted to Places API (New)
 *
 * Without the key, or if Google errors, getReviews returns null and the
 * section hides that business rather than showing an empty state.
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
}

// Looked up by Text Search and matched on place id. (Place Details returns
// 403 for this key, while Text Search works and returns the same fields.)
export const PLACES = {
  awlabs: { id: 'ChIJ7SB3xTa7EmsRecxLdpkCzIQ', query: 'AWLabs Software Development Agency Five Dock' },
  awu: { id: 'ChIJ96B65vboZyYRPzvUa2u-ZvI', query: 'All Webbed Up Georges Hall' },
} as const;

// One fetch per place per build, shared by every page and component, so the
// numbers and the reviews section can never disagree within a build.
const cache = new Map<string, Promise<ReviewsData | null>>();

export function getReviews(place: { id: string; query: string }): Promise<ReviewsData | null> {
  if (!cache.has(place.id)) cache.set(place.id, fetchWithRetry(place));
  return cache.get(place.id)!;
}

async function fetchWithRetry(place: { id: string; query: string }): Promise<ReviewsData | null> {
  for (let attempt = 0; attempt < 3; attempt++) {
    const data = await fetchReviews(place);
    if (data) return data;
    await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
  }
  return null;
}

async function fetchReviews(place: { id: string; query: string }): Promise<ReviewsData | null> {
  const placeId = place.id;
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY ?? process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'places.id,places.rating,places.userRatingCount,places.reviews,places.googleMapsUri',
      },
      body: JSON.stringify({ textQuery: place.query, regionCode: 'AU', languageCode: 'en' }),
    });
    if (!res.ok) {
      console.warn(`[reviews] Google Places ${res.status} for ${placeId}`);
      return null;
    }
    const json = await res.json();
    const data = ((json.places as { id: string }[]) ?? []).find((p) => p.id === placeId) as Record<string, any> | undefined;
    if (!data) {
      console.warn(`[reviews] ${placeId} not in search results`);
      return null;
    }

    // Google returns up to 5 reviews it selects. Show them all (no rating
    // filter), skipping only star-only reviews with no text.
    const reviews: Review[] = ((data.reviews as unknown[]) ?? [])
      .map((raw) => raw as {
        authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
        rating?: number;
        text?: { text?: string };
        originalText?: { text?: string };
        relativePublishTimeDescription?: string;
      })
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? 'Google user',
        photoUrl: r.authorAttribution?.photoUri,
        rating: r.rating ?? 5,
        text: (r.originalText?.text ?? r.text?.text ?? '').trim(),
        timeDescription: r.relativePublishTimeDescription ?? '',
        profileUrl: r.authorAttribution?.uri,
      }))
      .filter((r) => r.text.length > 0);

    if (!data.rating) return null;
    return {
      aggregateRating: data.rating,
      totalReviews: data.userRatingCount ?? 0,
      reviews,
      reviewsUrl: data.googleMapsUri,
    };
  } catch (e) {
    console.warn('[reviews] fetch failed', e);
    return null;
  }
}
