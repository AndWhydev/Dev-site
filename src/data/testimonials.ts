/**
 * Client video testimonials, shared by the homepage video section
 * (src/components/VideoTestimonials.astro) and /client-stories.
 *
 * Copy rules: every role, quote and outcome must come from the person's own
 * words in src/data/testimonial-transcripts.json (or the video itself).
 * Quotes are their words, lightly trimmed, never reworded.
 * Only publish a video once the client has agreed in writing.
 */

export interface Story {
  name: string;
  role: string; // who they are, from the transcript
  quote: string; // one sentence, their words
  outcome: string; // what was built or fixed, from the transcript
  file: string; // /videos/testimonials/<file>.mp4 and .webp poster
  portrait: boolean;
}

export const stories: Story[] = [
  {
    name: 'Britney',
    role: 'Personal trainer',
    quote: "I don't actually have to manually go in and process any payments.",
    outcome: 'A website that takes client payments automatically',
    file: 'britney',
    portrait: true,
  },
  {
    name: 'Dave',
    role: 'Runs his own construction company',
    quote: "I'd written the whole thing off in my head and Andy and the team brought it back to life for me.",
    outcome: 'Rescued a bookings and invoicing platform another provider left in a mess',
    file: 'dave',
    portrait: true,
  },
  {
    name: 'Kawkab',
    role: 'Supplies professional hair and beauty products across Australia',
    quote: 'They listened to what our business needed and explained everything to us clearly.',
    outcome: 'Rebuilt an outdated website so products and online orders are easier to manage',
    file: 'kawkab',
    portrait: true,
  },
  {
    name: 'Nat',
    role: 'Runs an online health and fitness coaching business',
    quote: 'They found a security hole, fixed it and put monitoring in place to keep an eye on things moving forward.',
    outcome: 'Tested their systems like a real attacker, closed the gap and added monitoring',
    file: 'nat',
    portrait: false,
  },
  {
    name: 'Scott',
    role: 'Runs an online marketplace',
    quote: 'That one issue could have brought the whole marketplace to a halt.',
    outcome: 'Audited the payments setup before launch and restructured how the money moves',
    file: 'img6966',
    portrait: false,
  },
  {
    name: 'Michael',
    role: 'Commercial Floorcoverings Australia, supplies and installs commercial flooring',
    quote: "We've gone from a Sydney business to quoting and winning flooring jobs all around Australia.",
    outcome: 'A quoting system built around how they price jobs, usable from anywhere',
    file: 'whatsapp',
    portrait: true,
  },
  {
    name: 'Ebony',
    role: 'Founder of an early childhood compliance platform',
    quote: 'They treated my project like it was their own.',
    outcome: 'An MVP to validate the idea and seek investment, now a working product',
    file: 'ebony',
    portrait: false,
  },
  {
    name: 'Helen',
    role: 'Hairdresser on the Central Coast',
    quote: 'Spending way less time on admin and much more time with my clients.',
    outcome: 'One place for client history and previous appointments',
    file: 'option2',
    portrait: true,
  },
];
