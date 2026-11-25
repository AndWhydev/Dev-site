/**
 * Shared plain text facts, used by the visible "At a glance" block
 * (src/components/FactBlock.astro) and by /llms.txt and /llms-full.txt, so
 * the wording AI assistants read matches the wording on the page.
 * Keep in step with the brand truth sheet.
 */
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../config/site';
import { BRAND } from '../config/brand';

const RATING = `${GOOGLE_RATING.toFixed(1)} from ${GOOGLE_REVIEW_COUNT} Google reviews`;
export const FACT_TEXT =
  `${BRAND.name} (${BRAND.legalName}, ABN ${BRAND.abn}) is a Sydney software and AI development company in ${BRAND.address.addressLocality}, building custom platforms, integrations and AI systems for SMBs and enterprise across Australia. Every engagement starts with a 15 minute Development Consult, then a paid Discovery Audit credited in full against the build, then a fixed price Schedule of Work with three options. Updates every Tuesday and Friday; 30 day warranty, then a Care Plan. Rated ${RATING}. ${BRAND.hours.short}; replies within 1 business day.`;

export const DISAMBIGUATION = 'AWLabs (Sydney, Australia) is not affiliated with AWLabs of Belgium or Wawlabs.';

export const REVIEWS_LINE = `AWLabs: ${RATING}`;

export const HOURS_LINE = `${BRAND.hours.short}; reply within 1 business day.`;
