#!/usr/bin/env node
/**
 * Keyword discovery from Google autocomplete (en-AU), per page.
 * For each page we expand a few seed terms with the patterns buyers use
 * ("cost", "australia", "vs", "what is", "how much"...) and keep suggestions
 * relevant to an Australian buyer. Output: docs-internal/keywords/<page>.json
 * and a combined docs-internal/keywords/index.md.
 * Usage: node scripts/mine-keywords.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const outDir = path.join(root, 'docs-internal/keywords');
fs.mkdirSync(outDir, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const cache = new Map();
async function suggest(q) {
  if (cache.has(q)) return cache.get(q);
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&hl=en-AU&gl=au&q=${encodeURIComponent(q)}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const data = JSON.parse(await res.text());
        const out = (data[1] || []).map((s) => s.toLowerCase());
        cache.set(q, out);
        await sleep(120);
        return out;
      }
    } catch {}
    await sleep(800);
  }
  cache.set(q, []);
  return [];
}

// Suggestions about other countries or unrelated intents are noise for us.
const NOISE = /\b(india|indian|dubai|uae|usa|us|uk|london|pakistan|chennai|ahmedabad|mohali|jaipur|bangalore|hyderabad|noida|pune|kolkata|delhi|mumbai|canada|toronto|singapore|nigeria|philippines|kenya|course|courses|jobs?|salary in india|tutorial|pdf|ppt|reddit|youtube|free download|meaning in hindi|udemy|coursera|internship|certification course|github)\b/;

const PATTERNS = (s) => [
  s, `${s} australia`, `${s} sydney`, `${s} cost`, `${s} vs`, `${s} for`, `what is ${s}`, `how much does ${s}`, `best ${s}`, `${s} services`,
];

function seedsFromTitle(title) {
  const t = title
    .toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/[?:!,]/g, ' ')
    .replace(/\b(how much does|how much do|what is|what are|how to|in australia|australia|australian|for australian businesses|explained|guide|2026|the|a|an)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return [t.split(' ').slice(0, 5).join(' ')];
}

// Hand-picked seeds for pages where the title doesn't make a clean seed.
const EXTRA = {
  'rag-knowledge-base-cost': ['rag cost', 'ai knowledge base cost', 'rag implementation cost'],
  'llm-running-costs': ['llm cost', 'llm api cost', 'token cost'],
  'software-developer-rates-australia': ['software developer hourly rate', 'developer day rate', 'software developer salary'],
  'ai-chatbot-cost-australia': ['ai chatbot cost', 'chatbot development cost', 'custom chatbot price'],
  'what-is-mcp': ['mcp ai', 'model context protocol', 'mcp server'],
  'what-is-rag': ['rag ai', 'retrieval augmented generation'],
  'what-is-an-ai-agent': ['ai agent', 'agentic ai'],
  'privacy-act-automated-decision-making': ['automated decision making privacy act', 'privacy act december 2026', 'automated decision making australia'],
  'rd-tax-incentive-software-development': ['r&d tax incentive software', 'r&d tax incentive australia', 'rdti software'],
  'apra-cps-234-ai': ['cps 234', 'apra cps 234'],
  'apra-cps-230-ai-vendors': ['cps 230', 'apra cps 230'],
  'bedrock-vs-azure-openai-vs-vertex-australia': ['aws bedrock australia', 'azure openai australia', 'vertex ai australia'],
  'chatgpt-vs-claude-vs-copilot-for-business': ['chatgpt vs claude', 'claude vs copilot', 'chatgpt enterprise australia'],
  'copilot-vs-custom-ai-assistant': ['copilot vs custom', 'microsoft copilot vs'],
  'onshore-vs-offshore-software-development': ['offshore software development', 'onshore vs offshore'],
  'is-there-an-ai-act-in-australia': ['ai act australia', 'ai regulation australia', 'ai laws australia'],
  'guidance-for-ai-adoption': ['guidance for ai adoption', 'voluntary ai safety standard', 'ai6'],
  'dta-ai-policy-government': ['dta ai policy', 'responsible use of ai in government'],
  'irap-explained': ['irap', 'irap assessment'],
  'essential-eight-software-development': ['essential eight', 'essential 8'],
  'ai-data-sovereignty-australia': ['ai data sovereignty', 'sovereign ai australia', 'data sovereignty australia'],
  'data-residency-vs-data-sovereignty': ['data residency', 'data sovereignty'],
  'sydney-ai-development': ['ai development sydney', 'ai company sydney', 'ai consultants sydney', 'ai agency sydney'],
  'sydney-custom-software-development': ['custom software development sydney', 'software development company sydney', 'software developers sydney'],
  'australia-wide': ['software development company australia', 'ai development company australia'],
  canberra: ['software development canberra', 'ai consultants canberra'],
  melbourne: ['software development melbourne', 'ai development melbourne', 'ai consultants melbourne'],
  brisbane: ['software development brisbane', 'ai development brisbane', 'ai consultants brisbane'],
  'rag-knowledge-base': ['rag development', 'rag development services', 'ai knowledge base'],
  'llm-integration': ['llm integration', 'llm development', 'openai integration'],
  'ai-chatbot': ['ai chatbot development', 'chatbot development company', 'custom chatbot'],
  'ai-agent-development': ['ai agent development', 'ai agent development company', 'ai agents for business'],
  'mcp-server-development': ['mcp server development', 'custom mcp server'],
  'private-llm-deployment': ['private llm', 'self hosted llm', 'on premise llm'],
  'ai-readiness-assessment': ['ai readiness assessment', 'ai strategy consulting', 'ai consulting'],
  'ai-document-processing': ['ai document processing', 'intelligent document processing', 'invoice data extraction'],
  'ai-governance': ['ai governance', 'responsible ai', 'ai risk management'],
  'custom-app-development': ['custom app development', 'app development company', 'custom software development'],
  'enterprise-software': ['enterprise software development', 'enterprise software company'],
  'legacy-modernisation': ['legacy system modernisation', 'legacy application modernization'],
  'workflow-automation': ['workflow automation', 'business process automation', 'n8n consultant'],
  'cloud-infrastructure': ['cloud consulting', 'devops consulting', 'aws consulting'],
  'react-nextjs': ['next.js development', 'react development company', 'next.js agency'],
  'flutter-development': ['flutter app development', 'flutter developers'],
  'saas-development': ['saas development company', 'saas development'],
  'data-analytics': ['data analytics consulting', 'power bi consultant'],
  'cybersecurity': ['secure software development', 'application security'],
};

function readMd(dir) {
  const base = path.join(root, 'src/content', dir);
  if (!fs.existsSync(base)) return [];
  return fs.readdirSync(base).filter((f) => f.endsWith('.md')).map((f) => {
    const fm = yaml.load(fs.readFileSync(path.join(base, f), 'utf8').match(/^---\n([\s\S]*?)\n---/)[1]);
    const slug = f.replace(/\.md$/, '');
    return { key: `${dir}/${slug}`, slug, url: `/${dir}/${slug}`, title: fm.title };
  });
}
function readServices() {
  const base = path.join(root, 'src/pages/services');
  return fs.readdirSync(base).filter((f) => f.endsWith('.astro')).map((f) => {
    const s = fs.readFileSync(path.join(base, f), 'utf8');
    const name = (s.match(/serviceName:\s*'([^']+)'/) || s.match(/metaTitle:\s*'([^'|]+)/) || [])[1] || f;
    const slug = f.replace(/\.astro$/, '');
    return { key: `services/${slug}`, slug, url: `/services/${slug}`, title: name };
  });
}

const pages = [...readMd('guides'), ...readMd('solutions'), ...readMd('locations'), ...readServices()];
const index = [];
for (const p of pages) {
  const seeds = [...new Set([...(EXTRA[p.slug] || []), ...seedsFromTitle(p.title)])].filter(Boolean);
  const found = new Map();
  for (const seed of seeds) {
    for (const q of PATTERNS(seed)) {
      for (const s of await suggest(q)) {
        if (NOISE.test(s)) continue;
        found.set(s, (found.get(s) || 0) + 1);
      }
    }
  }
  const keywords = [...found.entries()].sort((a, b) => b[1] - a[1]).map(([k]) => k);
  const questions = keywords.filter((k) => /^(what|how|why|when|which|who|is|are|can|does|do|should)\b/.test(k));
  fs.writeFileSync(path.join(outDir, `${p.key.replace('/', '__')}.json`), JSON.stringify({ url: p.url, title: p.title, seeds, keywords, questions }, null, 1));
  index.push(`## ${p.url}\nSeeds: ${seeds.join('; ')}\n\nKeywords (${keywords.length}): ${keywords.slice(0, 60).join('; ')}\n\nQuestions: ${questions.slice(0, 20).join('; ') || 'none'}\n`);
  process.stdout.write('.');
}
fs.writeFileSync(path.join(outDir, 'index.md'), `# Autocomplete keyword map (en-AU, ${new Date().toISOString().slice(0, 10)})\n\n` + index.join('\n'));
console.log(`\n${pages.length} pages, ${cache.size} queries`);
