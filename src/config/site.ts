/**
 * Site configuration: tracking, Google Business Profile and the schema nodes
 * built from the brand facts. The facts themselves (name, phone, address,
 * hours, profiles) live in src/config/brand.ts; the names below re-export
 * them so existing imports keep working.
 */
import { BRAND, BRAND_SAME_AS } from './brand';

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
export const GOOGLE_MAPS_URL = BRAND.profiles.googleMaps;
export const GOOGLE_REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`;
export const GOOGLE_MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(`${BRAND.name}, ${BRAND.addressLine}`)}&z=16&output=embed`;

export const PHONE_DISPLAY = BRAND.phone.display;
export const PHONE_TEL = BRAND.phone.tel;
export const PHONE_E164 = BRAND.phone.e164;
export const ADDRESS = BRAND.address;
export const ADDRESS_LINE = BRAND.addressLine;
export const GEO = BRAND.geo;
export const HOURS_TEXT = BRAND.hours.text;
export const FOUNDER_LINKEDIN = BRAND.founder.linkedin;

/** Organization sameAs: the company profiles in brand.ts that are filled in. */
export const SAME_AS = BRAND_SAME_AS;

/** ProfessionalService node for the homepage and /contact, linked to the Organization. */
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': LOCAL_ID,
  name: BRAND.name,
  url: SITE_URL,
  image: `${SITE_URL}/logo.png`,
  parentOrganization: { '@id': ORG_ID },
  address: { '@type': 'PostalAddress', ...ADDRESS },
  telephone: PHONE_E164,
  geo: { '@type': 'GeoCoordinates', ...GEO },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [...BRAND.hours.days],
      opens: BRAND.hours.opens,
      closes: BRAND.hours.closes,
    },
  ],
  hasMap: GOOGLE_MAPS_URL,
  areaServed: BRAND.areasServed.map((name) => ({ '@type': name === 'Australia' ? 'Country' : 'City', name })),
};
