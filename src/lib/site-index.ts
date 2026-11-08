/**
 * Build time index of the service pages, read from their source so /llms.txt
 * and /llms-full.txt list every /services/* page without a hand kept copy.
 * Each service page passes a `data` object to ServicePageLayout; we pull the
 * plain string fields we need out of the raw source.
 */
const raw = import.meta.glob('../pages/services/*.astro', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function field(src: string, key: string): string {
  const m = src.match(new RegExp(`\\b${key}:\\s*(['"\`])((?:\\\\.|(?!\\1)[^\\\\])*)\\1`));
  return m ? m[2].replace(/\\(['"`\\])/g, '$1') : '';
}

export interface ServiceEntry {
  slug: string;
  name: string;
  description: string;
  summary: string;
}

export const services: ServiceEntry[] = Object.entries(raw)
  .map(([path, src]) => {
    const slug = path.split('/').pop()!.replace(/\.astro$/, '');
    return {
      slug,
      name: field(src, 'serviceName') || slug,
      description: field(src, 'metaDescription'),
      summary: field(src, 'summaryStatement') || field(src, 'metaDescription'),
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

/** Guides featured in /llms-full.txt, strongest first (matches FeaturedGuides, then four more). */
export const TOP_GUIDES = [
  'ai-development-cost-australia',
  'rag-knowledge-base-cost',
  'how-to-choose-an-ai-development-company',
  'privacy-act-automated-decision-making',
  'bedrock-vs-azure-openai-vs-vertex-australia',
  'custom-software-development-cost-australia',
  'app-development-cost-australia',
  'mvp-development-cost-australia',
  'how-to-choose-a-software-development-company',
  'data-residency-vs-data-sovereignty',
];
