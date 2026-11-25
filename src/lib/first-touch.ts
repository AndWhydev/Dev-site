/**
 * First-touch attribution. On a visitor's first page view we store where they
 * came from (UTMs, referrer host, landing page) in localStorage, and every
 * form submission and booking link carries it to GoHighLevel as
 * lead_source, lead_referrer and lead_landing_page.
 */

const KEY = 'awl_first_touch';

/** Referrer hosts counted as AI assistants. */
const AI_HOSTS = [
  'chatgpt.com',
  'chat.openai.com',
  'perplexity.ai',
  'gemini.google.com',
  'copilot.microsoft.com',
  'claude.ai',
];

export interface FirstTouch {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  /** Referring site's host, '' when direct or internal. */
  referrer: string;
  /** Path (and non-UTM query) of the first page viewed. */
  landing_page: string;
  /** Summary: 'AI', 'Google Ads', the utm_source, the referrer host, or 'Direct'. */
  source: string;
  /** ISO time of the first visit. */
  first_seen: string;
}

const isAi = (host: string) =>
  AI_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));

function capture(): FirstTouch {
  const params = new URLSearchParams(location.search);
  let referrer = '';
  try {
    const r = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : '';
    if (r && r !== location.hostname.replace(/^www\./, '')) referrer = r;
  } catch {}
  const utm_source = params.get('utm_source') ?? '';
  // ChatGPT and others also tag links with utm_source=chatgpt.com.
  const source = isAi(referrer) || isAi(utm_source.replace(/^www\./, ''))
    ? 'AI'
    : params.has('gclid') || params.has('gbraid') || params.has('wbraid')
      ? 'Google Ads'
      : utm_source || referrer || 'Direct';

  const landing = new URLSearchParams(params);
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid'].forEach((k) => landing.delete(k));
  const qs = landing.toString();

  return {
    utm_source,
    utm_medium: params.get('utm_medium') ?? '',
    utm_campaign: params.get('utm_campaign') ?? '',
    referrer,
    landing_page: location.pathname + (qs ? `?${qs}` : ''),
    source,
    first_seen: new Date().toISOString(),
  };
}

/** Records the first touch once; later page views leave it alone. */
export function recordFirstTouch(): void {
  try {
    if (!localStorage.getItem(KEY)) localStorage.setItem(KEY, JSON.stringify(capture()));
  } catch {}
}

/** The stored first touch, or this page view's if storage is unavailable. */
export function getFirstTouch(): FirstTouch {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as FirstTouch;
  } catch {}
  return capture();
}

/** The GHL custom fields, keyed by their field keys without `contact.`. */
export function leadFields(ft: FirstTouch = getFirstTouch()) {
  return {
    lead_source: ft.source,
    lead_referrer: ft.referrer,
    lead_landing_page: ft.landing_page,
  };
}
