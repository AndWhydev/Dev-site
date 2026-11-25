/**
 * AWLabs brand facts: the single source of truth. Pages, the footer, every
 * JSON-LD node and /llms.txt and /llms-full.txt read from here, so every AI
 * assistant and search engine sees the same description of the business.
 * Change a fact here, never in a page.
 */

export const BRAND = {
  name: 'AWLabs',
  legalName: 'AW Labs Pty Ltd',
  abn: '32 698 684 105',
  /** Other names people use for us (schema alternateName). */
  alternateNames: ['AW Labs', 'All Webbed Labs'],
  email: 'admin@awlabs.com.au',
  phone: {
    display: '1800 714 148',
    tel: '1800714148',
    e164: '+61 1800 714 148',
  },
  address: {
    streetAddress: '1 Ramsay Rd',
    addressLocality: 'Five Dock',
    addressRegion: 'NSW',
    postalCode: '2046',
    addressCountry: 'AU',
  },
  /** One line, as printed on pages. */
  addressLine: '1 Ramsay Rd, Five Dock NSW 2046',
  geo: { latitude: -33.8728717, longitude: 151.1321369 },
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
    /** Plain text, as printed on pages. */
    text: 'Monday to Friday, 9am to 6pm Sydney time',
    short: 'Mon to Fri, 9am to 6pm Sydney time',
  },
  /** When AWLabs was founded, in words and as a schema date. */
  founded: 'mid 2026',
  foundingDate: '2026',
  founder: {
    name: 'Andy Taleb',
    jobTitle: 'Founder and Director',
    url: '/team/andy-taleb',
    photo: '/team/andy-taleb.webp',
    linkedin: 'https://www.linkedin.com/in/andytaleb/',
    youtube: '', // TODO: Andy's YouTube channel URL, if separate from the company one
    /** Year Andy started building software professionally. */
    buildingSince: '2019',
  },
  /**
   * Social links shown in the footer. The Facebook page is the one the
   * footer already linked to. TODO: confirm whose page it is before it goes
   * into profiles.facebook (schema sameAs).
   */
  footerSocial: {
    linkedin: 'https://www.linkedin.com/in/andytaleb/',
    facebook: 'https://www.facebook.com/profile.php?id=61556526584232',
    instagram: 'https://www.instagram.com/andy_awlabs/',
  },
  sisterCompany: { name: 'All Webbed Up', url: 'https://allwebbedup.com.au', since: '2021' },
  /** Headline services, linked to their pages. */
  services: [
    { name: 'Custom software development', href: '/services/custom-app-development' },
    { name: 'Web and mobile app development', href: '/services/web-mobile-apps' },
    { name: 'AI agents and chatbots', href: '/services/ai-agent-development' },
    { name: 'AI voice agents', href: '/services/ai-voice-agents' },
    { name: 'CRM, Xero and MYOB integrations', href: '/services/crm-integration' },
    { name: 'Workflow automation', href: '/services/workflow-automation' },
    { name: 'SaaS and MVP development', href: '/services/saas-development' },
    { name: 'Legacy modernisation and project rescue', href: '/services/legacy-modernisation' },
    { name: 'Cloud infrastructure', href: '/services/cloud-infrastructure' },
    { name: 'Fractional CTO', href: '/services/fractional-cto' },
    { name: 'Staff augmentation', href: '/staff-augmentation' },
    { name: 'Digital transformation', href: '/digital-transformation' },
    { name: 'Web3 and blockchain development', href: '/web3-crypto' },
  ],
  /** Where we work. */
  areasServed: ['Sydney', 'Australia'],
  /**
   * Company profiles (schema sameAs). Paste each URL as the profile goes
   * live; empty ones are skipped in every output. Never add All Webbed Up
   * or personal profiles here; Andy's personal ones live under founder.
   */
  profiles: {
    googleMaps: 'https://maps.google.com/?cid=9569026166393392249',
    instagram: 'https://www.instagram.com/andy_awlabs/',
    linkedin: '', // TODO: LinkedIn company page URL
    youtube: '', // TODO: YouTube channel URL
    clutch: '', // TODO: Clutch profile URL
    goodfirms: '', // TODO: GoodFirms profile URL
    designrush: '', // TODO: DesignRush profile URL
    sortlist: '', // TODO: Sortlist profile URL
    crunchbase: '', // TODO: Crunchbase profile URL
    yelp: '', // TODO: Yelp business page URL
    bingPlaces: '', // TODO: Bing Places listing URL
    appleMaps: '', // TODO: Apple Maps (Business Connect) place URL
    facebook: '', // TODO: Facebook business page URL
  },
} as const;

/** Filled-in company profiles, for schema sameAs. */
export const BRAND_SAME_AS: string[] = Object.values(BRAND.profiles).filter(Boolean);

/** Founder's personal profiles that are filled in, for the Person node. */
export const FOUNDER_SAME_AS: string[] = [BRAND.founder.linkedin, BRAND.founder.youtube].filter(Boolean);
