# AWLabs Site — Open Reminders

Items Andy needs to provide/decide. Claude will action once each is unblocked.

## Waiting on Andy

- [ ] **Google Places API key + Place ID** — for the new Reviews section on the homepage. Currently falls back to a "Verified on Google" state.
  - Steps: (1) Google Cloud Console → new project (or existing) → enable **Places API (New)** → create an API key → restrict to Places API + the `awlabs.com.au` HTTP referrer. (2) Grab the Place ID via [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id) (search "AWLabs Pty Ltd"). (3) Add to Vercel Production env vars: `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID`. (4) Redeploy — reviews bake into static HTML at build time.

- [ ] **VSL hero video** — Andy is providing a VSL for the hero soon. Once received: (1) drop MP4 into `/public/hero/`, (2) restructure `HeroWebGL.astro` to a two-column layout (headline+CTA left, video player right, poster frame, click-to-play unmuted), (3) mobile stacks video below headline. Poster image TBD when video lands.

- [ ] **Terms & Conditions contracts** — Andy to share existing AWLabs client contracts so Claude can adapt them into stronger site T&Cs. Current `/terms` uses interim 12-clause AU T&Cs written 2026-07-16; solid baseline but bespoke contract text will be stronger.

- [ ] **Calendly booking link** — Andy to provide Calendly URL. Booking section on `src/pages/contact.astro` is currently hidden until link is provided. Once received, unhide and embed.

## Case Studies

- [ ] Andy to add real case studies. A `/case-studies` hub page + nav entry exists and is ready to receive entries. Format is defined in `src/layouts/CaseStudyLayout.astro`.

---

_Last updated: 2026-07-19 by Claude._
