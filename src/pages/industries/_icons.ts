/**
 * Line icons for each industry, shared by the /industries hub cards and the
 * industry detail page heroes. Same drawing style as the pain point icons on
 * the detail pages: 24px grid, 1.75 stroke, round caps and joins.
 * Underscore prefix keeps Astro from treating this file as a route.
 */
const wrap = (paths: string, size = 28) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const paths: Record<string, string> = {
  'finance-fintech': '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="6" y1="15" x2="10" y2="15"/>',
  healthcare: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/><path d="M7 12h3l1.5-3 2 5 1.5-2h2"/>',
  'logistics-transport': '<rect x="1" y="4" width="14" height="12" rx="1"/><path d="M15 8h4l3 3.5V16h-7"/><circle cx="5.5" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>',
  'retail-ecommerce': '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  education: '<path d="M22 9L12 4 2 9l10 5 10-5z"/><path d="M6 11v5c3 2.7 9 2.7 12 0v-5"/><line x1="22" y1="9" x2="22" y2="15"/>',
  'government-enterprise': '<path d="M3 9l9-6 9 6"/><line x1="3" y1="21" x2="21" y2="21"/><path d="M5 9v9M9.5 9v9M14.5 9v9M19 9v9"/>',
  'construction-trades': '<path d="M2 18h20"/><path d="M4 18v-2a8 8 0 0 1 16 0v2"/><path d="M10 8.5V5h4v3.5"/>',
  'real-estate': '<path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 13 15 13 15 22"/>',
  hospitality: '<path d="M2 5v15"/><path d="M2 9h17a3 3 0 0 1 3 3v8"/><path d="M2 16h20"/><circle cx="7" cy="12.5" r="1.5"/>',
  'sports-recreation': '<path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  'web3-crypto': '<rect x="2" y="7" width="8" height="10" rx="1.5"/><rect x="14" y="7" width="8" height="10" rx="1.5"/><line x1="10" y1="12" x2="14" y2="12"/>',
  'ai-automation': '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  manufacturing: '<path d="M2 21V10l6 4v-4l6 4V5h6v16z"/><line x1="2" y1="21" x2="22" y2="21"/><line x1="17" y1="9" x2="17" y2="11"/>',
};

export function industryIcon(slug: string, size = 28): string {
  const p = paths[slug];
  return p ? wrap(p, size) : '';
}
