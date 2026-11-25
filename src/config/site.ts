/**
 * Shared business facts for AWLabs. Change a value here and every page,
 * the JSON-LD and /llms.txt pick it up on the next build.
 */

export const SITE_URL = 'https://www.awlabs.com.au';

/**
 * Google Ads. Both are empty until the account gives you the values.
 * GOOGLE_TAG_ID: the tag ID, e.g. 'AW-123456789' (or a GA4 'G-...' ID).
 *   When set, the Google tag loads on every page (src/layouts/Layout.astro).
 * GOOGLE_ADS_SEND_TO: the conversion action's send_to, e.g.
 *   'AW-123456789/AbCdEfGhIjk'. When set, /thank-you reports one conversion
 *   per lead (form or booking).
 */
export const GOOGLE_TAG_ID = 'AW-18585307986';
export const GOOGLE_ADS_SEND_TO = 'AW-18585307986/onkSCJuGpr0dENKWlZ5F';
/**
 * GoHighLevel Inbound Webhook (Automation > Workflow > trigger "Inbound
 * Webhook"). Every enquiry form submit is also posted here with the lead
 * tracking fields; the workflow maps them onto the contact. Empty = off.
 */
export const GHL_LEAD_WEBHOOK_URL = '';

/** Bing Webmaster Tools verification (the content of the msvalidate.01 meta tag). Empty = no tag. */
export const BING_SITE_VERIFICATION = '';

export const ORG_ID = `${SITE_URL}/#organization`;
export const LOCAL_ID = `${SITE_URL}/#localbusiness`;
export const FOUNDER_ID = `${SITE_URL}/team/andy-taleb#person`;

/** AWLabs Google Business Profile. Update the count by hand as reviews come in. */
export const GOOGLE_REVIEW_COUNT = 40;
export const GOOGLE_RATING = 5.0;
export const GOOGLE_PLACE_ID = 'ChIJ7SB3xTa7EmsRecxLdpkCzIQ';
export const GOOGLE_MAPS_URL = 'https://maps.google.com/?cid=9569026166393392249';
export const GOOGLE_REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`;
export const GOOGLE_MAP_EMBED_URL =
  'https://maps.google.com/maps?q=AWLabs%2C%201%20Ramsay%20Rd%2C%20Five%20Dock%20NSW%202046&z=16&output=embed';

export const PHONE_DISPLAY = '1800 714 148';
export const PHONE_TEL = '1800714148';
export const PHONE_E164 = '+61 1800 714 148';

export const ADDRESS = {
  streetAddress: '1 Ramsay Rd',
  addressLocality: 'Five Dock',
  addressRegion: 'NSW',
  postalCode: '2046',
  addressCountry: 'AU',
};
export const ADDRESS_LINE = '1 Ramsay Rd, Five Dock NSW 2046';
export const GEO = { latitude: -33.8728717, longitude: 151.1321369 };
export const HOURS_TEXT = 'Monday to Friday, 9am to 6pm Sydney time';

export const FOUNDER_LINKEDIN = 'https://www.linkedin.com/in/andytaleb/';

/**
 * AWLabs company profiles. Paste each URL as the profile goes live; empty
 * ones are skipped. Never add All Webbed Up or personal profiles here.
 */
export const PROFILES = {
  instagram: 'https://www.instagram.com/andy_awlabs/',
  googleMaps: GOOGLE_MAPS_URL,
  linkedin: '', // TODO: LinkedIn company page URL
  youtube: '', // TODO: YouTube channel URL
  clutch: '', // TODO: Clutch profile URL
  goodfirms: '', // TODO: GoodFirms profile URL
  designrush: '', // TODO: DesignRush profile URL
  yelp: '', // TODO: Yelp business page URL
  bingPlaces: '', // TODO: Bing Places listing URL
  facebook: '', // TODO: Facebook business page URL
  crunchbase: '', // TODO: Crunchbase profile URL
};

/** Organization sameAs: the profiles above that are filled in. */
export const SAME_AS = Object.values(PROFILES).filter(Boolean);

/** ProfessionalService node for the homepage and /contact, linked to the Organization. */
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': LOCAL_ID,
  name: 'AWLabs',
  url: SITE_URL,
  image: `${SITE_URL}/logo.png`,
  parentOrganization: { '@id': ORG_ID },
  address: { '@type': 'PostalAddress', ...ADDRESS },
  telephone: PHONE_E164,
  geo: { '@type': 'GeoCoordinates', ...GEO },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  hasMap: GOOGLE_MAPS_URL,
  areaServed: [
    { '@type': 'City', name: 'Sydney' },
    { '@type': 'Country', name: 'Australia' },
  ],
};
