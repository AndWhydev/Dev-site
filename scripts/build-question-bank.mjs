#!/usr/bin/env node
/**
 * Builds reports/question-bank.csv: the buyer question bank for the guides
 * content plan (phase 1). No dependencies; run with `node scripts/build-question-bank.mjs`.
 *
 * Inputs
 *  - src/content/{guides,solutions,locations}/*.md   frontmatter faqs, titles, H2s
 *  - src/pages/services/*.astro, src/pages/industries/*.astro and top level
 *    marketing pages                                  FAQ questions, H2s
 *  - reports/content-inventory.csv                    Title and H1 per URL
 *  - scripts/data/question-bank-curated.txt           hand-curated pattern questions
 *  - docs-internal/keywords/*.json                    Google autocomplete (en-AU), used
 *                                                     to mark rows grounded in real queries
 *    (refresh the extra prefixes with scripts/mine-question-bank.mjs)
 *
 * Outputs
 *  - reports/question-bank.csv            question, cluster, intent, target_page_slug, existing_page, action
 *  - reports/question-bank-provenance.csv per row: source, grounding match, coverage match, merged duplicates
 *  - reports/question-bank-clusters.md    cluster slug -> name -> description -> counts
 *
 * Method
 *  1. Extract every FAQ question and every question-form H2 from existing pages.
 *     Drop questions addressed to AWLabs ("do you", "have you") and H2s that only
 *     make sense inside their article ("What does it cost?").
 *  2. Add the curated pattern questions.
 *  3. Dedupe by intent: questions are reduced to a normalised token set
 *     (synonyms folded, stopwords, place names and years removed); a candidate
 *     that is near-identical to a kept row (Jaccard >= 0.7, same intent, or
 *     >= 0.85 any intent) is merged into it. Rows grounded in autocomplete and
 *     page FAQs win over H2s and curated phrasing.
 *  4. Curated rows are checked against existing page titles, H1s, H2s and FAQs;
 *     a match makes the row "improve existing" with that page.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rd = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const ls = (p) => fs.readdirSync(path.join(root, p));

// ---------------------------------------------------------------- clusters
export const CLUSTERS = {
  'software-costs': ['Software and app costs', 'What custom software, apps, AI and integrations cost in Australia, what drives the price, and the running costs after launch.'],
  'timelines-process': ['Timelines and delivery process', 'How long builds take, what happens in each phase, and the agile, testing and launch terms a buyer meets.'],
  'choosing-a-developer': ['Choosing and managing a developer', 'How to find, brief, compare, hire and manage a developer or agency, and what to do when a project goes wrong.'],
  'contracts-ip': ['Contracts, IP and pricing models', 'Who owns the code, what a software contract should say, fixed price vs time and materials, warranties and exit.'],
  'build-vs-buy': ['Build vs buy and platforms', 'When off the shelf SaaS, low-code, no-code or AI app builders are enough, and when custom software pays.'],
  'app-development': ['App development', 'Mobile, web and cross platform apps: features, app stores, design and what it takes to launch and keep users.'],
  'tech-stack': ['Tech stack and architecture', 'Frameworks, databases, hosting platforms and architecture choices explained for non-technical buyers.'],
  'integrations-tools': ['Integrations and business tools', 'Connecting Xero, MYOB, ServiceM8, simPRO, JobAdder, HubSpot, Salesforce, Shopify, Microsoft 365 and other systems.'],
  'ai-agents-automation': ['AI agents and automation', 'What AI agents, chatbots, voice agents and workflow automation can do for specific business tasks, and how to deploy them safely.'],
  'ai-technology': ['AI strategy and technology', 'LLMs, RAG, model choice, AI data safety, evaluation and AI strategy and governance explained.'],
  'australian-rules': ['Australian rules and compliance', 'Privacy Act, AI regulation, APRA, NDIS, TGA, Aged Care Act, ATO, accessibility, cyber and government rules for software.'],
  'tax-grants-funding': ['R&D tax, grants and funding', 'The R&D Tax Incentive, tax treatment of software, government grants and ways to fund a build.'],
  'cloud-security': ['Security, cloud and hosting', 'Hosting in Australia, cloud costs, backups, security testing, certifications and securing AI.'],
  'data-analytics': ['Data, reporting and analytics', 'Dashboards, data warehouses, data migration, data quality and getting answers from business data.'],
  'maintenance-modernisation': ['Maintenance, rescue and modernisation', 'Keeping software healthy, fixing or rescuing a project, and replacing or modernising legacy systems.'],
  'saas-startups': ['SaaS and startups', 'Validating, building, pricing, launching and selling a SaaS product or startup app from Australia.'],
  'industry-software': ['Industry software', 'What software and AI look like in specific Australian industries, where regulation, workflow or incumbent systems differ.'],
};
const INTENTS = ['cost', 'timeline', 'compare', 'how-to', 'rules', 'choosing', 'industry', 'tool'];

// ---------------------------------------------------------------- helpers
function parseCsv(text) {
  const rows = []; let row = []; let f = ''; let q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; }
    else if (c !== '\r') f += c;
  }
  if (f || row.length) { row.push(f); rows.push(row); }
  return rows;
}
const csvCell = (v) => { const s = String(v ?? ''); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
const toCsv = (rows) => rows.map((r) => r.map(csvCell).join(',')).join('\n') + '\n';
const unq = (s) => s.trim().replace(/^(['"`])([\s\S]*)\1$/, '$2').replace(/\\(['"`])/g, '$1').replace(/''/g, "'");
const decode = (s) => s.replace(/&rsquo;|&lsquo;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&mdash;|&ndash;/g, '-').replace(/&quot;|&ldquo;|&rdquo;/g, '"').replace(/<[^>]+>/g, '').replace(/\{[^}]*\}/g, '').replace(/\s+/g, ' ').trim();

// ---------------------------------------------------------------- normalisation
const STOP = new Set(('a an the of to for in on at by with and or but is are was be been being do does did done doing how what which who whom whose why when where will would can could should shall may might must i me my we our us you your yourself it its this that these those there their they them he she his her if than then so as from into about just also any some much many more most very really actually still need needs get gets got going make makes have has had not no yes own one between versus vs ' +
  'australia australian aussie australians au sydney melbourne brisbane canberra perth adelaide nsw victoria queensland 2025 2026 2027 business businesses company companies small ' +
  'right best good kind type types way ways much exactly typically usually').split(' '));
const SYN = [
  [/\bhow much (does|do|is|will|would|should)\b/g, ' cost '], [/\bprices?\b|\bpricing\b|\bcosts\b|\bcosting\b|\bbudget\b|\bspend\b|\bquote[sd]?\b/g, ' cost '],
  [/\bhow long\b|\btimeline\b|\btimeframe\b/g, ' duration '], [/\bversus\b|\bvs\.?\b|\bcompared? (with|to)\b|\bdifference between\b/g, ' vs '],
  [/\bapplications?\b|\bapps\b|\bmobile app\b/g, ' app '], [/\bdevelopers?\b|\bprogrammers?\b|\bcoders?\b|\bsoftware engineers?\b|\bdev team\b/g, ' developer '],
  [/\bagenc(y|ies)\b|\bstudios?\b|\bdevelopment compan(y|ies)\b|\bsoftware compan(y|ies)\b/g, ' agency '],
  [/\bbuild(ing)?\b|\bdevelop(ing|ment)?\b|\bcreat(e|ing)\b|\bmak(e|ing)\b|\bdevelopped\b/g, ' build '],
  [/\bartificial intelligence\b|\bgenai\b|\bgenerative ai\b/g, ' ai '], [/\bchat ?bots?\b/g, ' chatbot '], [/\blarge language models?\b|\bllms\b/g, ' llm '],
  [/\bcustomi[sz]ed?\b|\bbespoke\b|\btailored\b/g, ' custom '], [/\boff[- ]the[- ]shelf\b|\bpackaged\b/g, ' offshelf '],
  [/\bintegrat(e|ed|es|ing|ion|ions)\b|\bconnect(ed|ing|s|ion)?\b|\bsync(ing|ed|s)?\b|\blink(ing)?\b/g, ' integrate '],
  [/\bautomat(e|ed|es|ing|ion)\b/g, ' automate '], [/\bm\.?v\.?p\.?s?\b|\bminimum viable products?\b/g, ' mvp '],
  [/\br ?& ?d\b|\brdti\b|\bresearch and development\b/g, ' rnd '], [/\bmicrosoft 365\b|\boffice 365\b|\bm365\b/g, ' m365 '],
  [/\bweb ?sites?\b/g, ' website '], [/\bsaas\b|\bsoftware as a service\b/g, ' saas '], [/\bhire|hiring|employ\b/g, ' hire '],
  [/\bworth it\b|\bworthwhile\b|\bworth the (money|cost)\b/g, ' worth '], [/\bmaintain(ing|ed)?\b|\bmaintenance\b|\bupkeep\b/g, ' maintain '],
];
function norm(q) {
  let s = ' ' + q.toLowerCase().replace(/[’']/g, '').replace(/&/g, ' and ').replace(/\(.*?\)/g, ' ') + ' ';
  for (const [re, rep] of SYN) s = s.replace(re, rep);
  s = s.replace(/[^a-z0-9.+# ]/g, ' ');
  const toks = s.split(/\s+/).filter(Boolean).map((t) => t.replace(/\.$/, ''))
    .map((t) => (t.length > 4 && t.endsWith('ies') ? t.slice(0, -3) + 'y' : t.length > 3 && t.endsWith('s') && !t.endsWith('ss') ? t.slice(0, -1) : t))
    .filter((t) => t && !STOP.has(t));
  return new Set(toks);
}
// IDF weighted so that generic words (cost, app, build, software) count for less than
// the words that make a question distinct (gps, ndis, xero, escrow).
const DF = new Map(); let DOCS = 0;
const learn = (toks) => { DOCS++; for (const t of toks) DF.set(t, (DF.get(t) || 0) + 1); };
const w = (t) => Math.log((DOCS + 1) / ((DF.get(t) || 0) + 1)) + 1;
const jac = (a, b) => { if (!a.size || !b.size) return 0; let i = 0, u = 0; for (const t of a) { const x = w(t); u += x; if (b.has(t)) i += x; } for (const t of b) if (!a.has(t)) u += w(t); return i / u; };
const contain = (a, b) => { if (!a.size) return 0; let i = 0, u = 0; for (const t of a) { const x = w(t); u += x; if (b.has(t)) i += x; } return i / u; };

// ---------------------------------------------------------------- intent and cluster rules
const TOOL_RE = /\b(xero|myob|servicem8|simpro|aroflo|tradify|fergus|jobadder|bullhorn|hubspot|salesforce|shopify|woocommerce|bigcommerce|microsoft 365|office 365|sharepoint|teams|power (apps|automate|bi)|dataverse|entra|stripe|tyro|square|adyen|payto|cin7|unleashed|deputy|employment hero|keypay|pipedrive|monday\.com|zoho|netsuite|dynamics|business central|acumatica|odoo|gohighlevel|airtable|zapier|n8n|make\.com|cliniko|halaxy|best practice|medical director|pexa|propertyme|console cloud|cartoncloud|google workspace|docusign|australia post|startrack|api|apis|webhooks?|integrat\w*|mcp)\b/i;
function intentOf(q, page) {
  const s = q.toLowerCase();
  if (/\bhow long\b|\btimeline|\bhow quickly\b|\bhow fast\b|\bhow soon\b|\bturnaround\b/.test(s)) return 'timeline';
  if (/\b(cost|costs|price|prices|pricing|how much|budget|fees?|rates?|charge|cheap|cheaper|cheapest|expensive|afford|roi|payback|quotes?)\b/.test(s) && !/\btax offset\b/.test(s)) return 'cost';
  if (/\bvs\.?\b|\bversus\b|\bdifference between\b|\bbetter than\b|\bcompare|\balternative|\binstead of\b/.test(s) || (/^(should|which|is it better|do i need|is a|is an)\b/.test(s) && /\w \bor\b \w/.test(s))) return 'compare';
  if (/\b(law|laws|legal|legally|illegal|act|privacy|regulat\w*|complian\w*|apra|cps ?2\d\d|ndis|tga|medical device|ato|tax|gst|r&d|licen[cs]\w*|consent|obligations?|mandatory|required|requirements?|allowed|ahpra|asic|afsl|aml|ctf|wcag|accessib\w*|dda|copyright|patent|trade ?marks?|contracts?|ip|own|owns|ownership|liable|liability|warrant\w*|nda|essential eight|irap|ism|pspf|dta|aged care act|standards?|code|spam act|breach\w*|sovereignty|residency)\b/.test(s)) return 'rules';
  if (TOOL_RE.test(s)) return 'tool';
  if (/\b(choose|choosing|hire|hiring|pick|select|selecting|shortlist|red flags?|questions to ask|agency|agencies|freelancer|consultant|partner|vendor|supplier|tender|rfp|proposal|references?|trust)\b/.test(s)) return 'choosing';
  if (page && /^\/(solutions|industries)\//.test(page)) return 'industry';
  return 'how-to';
}
const CLUSTER_RULES = [
  ['tax-grants-funding', /\b(r&d|rdti|tax incentive|tax offset|grants?|deduct\w*|instant asset|effective life|capitali[sz]\w*|funding|fund)\b/i],
  ['contracts-ip', /\b(contracts?|ip|intellectual property|owns?|ownership|source code|escrow|nda|non-disclosure|warrant\w*|liabilit\w*|patent|trade ?marks?|copyright|terms of service|msa|fixed price|time and materials)\b/i],
  ['australian-rules', /\b(privacy|law|laws|legal|act|regulat\w*|complian\w*|apra|cps|ndis|tga|medical device|ato|stp|payroll rules|essential eight|irap|wcag|dda|accessib\w*|consent|spam|breach|ahpra|asic|afsl|aml|ctf|consumer data right|cdr|sovereign\w*|residency|ism|pspf|dta|government|e-?invoic\w*|peppol|signatures?|guidance for ai adoption|ethics principles|guardrails|award)\b/i],
  ['ai-agents-automation', /\b(ai agents?|agentic|chatbots?|voice agents?|receptionist|automat\w*|n8n|zapier|make\.com|workflow|rpa|copilot studio|inbox|onboarding|invoice processing|document processing|document generation|quoting)\b/i],
  ['cloud-security', /\b(security|secure|pen(etration)? test\w*|hack\w*|cyber|soc ?2|iso ?27001|backups?|disaster|cloud|aws|azure|google cloud|hosting|host|encrypt\w*|mfa|passwords?|sso|single sign on|prompt injection|vulnerabilit\w*)\b/i],
  ['ai-technology', /\b(ai|llms?|rag|models?|gpt|chatgpt|claude|gemini|copilot|embeddings?|vector|fine-?tun\w*|prompts?|hallucinat\w*|machine learning|tokens?|context window|evaluat\w*|mcp|computer vision)\b/i],
  ['integrations-tools', TOOL_RE],
  ['data-analytics', /\b(data warehouse|dashboards?|power bi|tableau|looker|reports?|reporting|analytics|bi|data pipeline|data migration|migrate data|data quality|etl|data)\b/i],
  ['maintenance-modernisation', /\b(maint\w*|legacy|moderni[sz]\w*|rewrite|refactor|rescue|audit|slow|bugs?|support|upgrade|end of life|strangler|access database|excel)\b/i],
  ['saas-startups', /\b(saas|startups?|mvp|founders?|investors?|marketplace|subscription|churn|tenan\w*|white label)\b/i],
  ['build-vs-buy', /\b(build or buy|build vs buy|off[- ]the[- ]shelf|low-?code|no-?code|bubble|power apps|retool|lovable|bolt|replit|airtable|monday|odoo|spreadsheets?)\b/i],
  ['tech-stack', /\b(flutter|react|next\.?js|postgres\w*|mongo\w*|supabase|firebase|database|stack|microservices?|monolith|vercel|architecture|framework|native)\b/i],
  ['app-development', /\b(apps?|ios|android|app store|google play|mobile|pwa)\b/i],
  ['timelines-process', /\b(discovery|sprint|agile|uat|acceptance testing|go live|launch|scope|brief|process|phase)\b/i],
  ['choosing-a-developer', /\b(choose|hire|hiring|agency|freelanc\w*|developers?|vendor|partner|offshore|onshore|in-house|cofounder|cto|quotes?|proposal|tender)\b/i],
];
function clusterOfPage(page) {
  if (/^\/(solutions|industries)\//.test(page.url)) return 'industry-software';
  if (/^\/locations\//.test(page.url)) return 'choosing-a-developer';
  if (PAGE_CLUSTER[page.slug]) return PAGE_CLUSTER[page.slug];
  if (page.category === 'cost') return 'software-costs';
  const t = `${page.title} ${page.h1 || ''}`;
  for (const [c, re] of CLUSTER_RULES) if (re.test(t)) return c;
  return 'choosing-a-developer';
}
// Pages whose title rules would mis-file them (hub membership is decided per page).
const PAGE_CLUSTER = {
  'ai-acceptable-use-policy': 'australian-rules', 'ai-meeting-transcription-recording-laws': 'australian-rules', 'app-accessibility-australia': 'australian-rules',
  'australian-business-data-apis': 'integrations-tools', 'award-interpretation-software': 'australian-rules', 'business-sms-rules-australia': 'australian-rules',
  'consumer-data-right-software': 'australian-rules', 'electronic-signatures-australia': 'australian-rules', 'identity-verification-australia': 'australian-rules',
  'notifiable-data-breaches-software': 'australian-rules', 'privacy-safe-product-analytics': 'australian-rules', 'payto-integration': 'integrations-tools',
  'peppol-e-invoicing-australia': 'integrations-tools', 'shipping-carrier-integration': 'integrations-tools', 'sso-entra-id-business-apps': 'cloud-security',
  'expand-saas-to-new-zealand': 'saas-startups', 'selling-software-to-australian-government': 'saas-startups', 'security-questionnaire-for-saas': 'cloud-security',
  'soc-2-vs-iso-27001-australia': 'cloud-security', 'essential-eight-software-development': 'cloud-security', 'irap-explained': 'cloud-security',
  'apra-cps-230-ai-vendors': 'australian-rules', 'apra-cps-234-ai': 'australian-rules', 'dta-ai-policy-government': 'australian-rules', 'is-there-an-ai-act-in-australia': 'australian-rules',
  'guidance-for-ai-adoption': 'australian-rules', 'australian-ai-ethics-principles': 'australian-rules', 'privacy-act-and-ai': 'australian-rules',
  'privacy-act-automated-decision-making': 'australian-rules', 'privacy-act-small-business-software': 'australian-rules', 'ai-data-sovereignty-australia': 'australian-rules',
  'data-residency-vs-data-sovereignty': 'australian-rules', 'who-owns-the-source-code-australia': 'contracts-ip', 'software-development-contract-checklist': 'contracts-ip',
  'fixed-price-vs-time-and-materials': 'contracts-ip', 'how-to-protect-an-app-idea': 'contracts-ip', 'technical-due-diligence': 'saas-startups',
  'rd-tax-incentive-ai-projects': 'tax-grants-funding', 'rd-tax-incentive-software-development': 'tax-grants-funding', 'rd-tax-incentive-software-development-cost': 'tax-grants-funding',
  'technical-uncertainty-rd-tax-incentive': 'tax-grants-funding', 'software-development-tax-deductions': 'tax-grants-funding', 'government-grants-for-software-development': 'tax-grants-funding',
  'software-discovery-phase': 'timelines-process', 'user-acceptance-testing': 'timelines-process', 'how-to-write-a-software-brief': 'choosing-a-developer',
  'how-to-compare-software-quotes': 'choosing-a-developer', 'freelancer-vs-agency-vs-in-house': 'choosing-a-developer', 'onshore-vs-offshore-software-development': 'choosing-a-developer',
  'technical-cofounder-vs-agency': 'choosing-a-developer', 'how-to-choose-a-software-development-company': 'choosing-a-developer', 'how-to-choose-an-ai-development-company': 'choosing-a-developer',
  'build-vs-buy-software': 'build-vs-buy', 'low-code-vs-custom-development': 'build-vs-buy', 'bubble-vs-custom-development': 'build-vs-buy', 'lovable-vs-bolt-vs-replit': 'build-vs-buy',
  'retool-vs-custom-internal-tools': 'build-vs-buy', 'power-apps-vs-custom-app': 'build-vs-buy', 'monday-vs-custom-software': 'build-vs-buy', 'odoo-vs-custom-erp': 'build-vs-buy',
  'sharepoint-intranet-vs-custom': 'build-vs-buy', 'shopify-vs-custom-ecommerce': 'build-vs-buy', 'cin7-vs-unleashed-vs-custom': 'build-vs-buy', 'replace-excel-or-access-with-a-web-app': 'build-vs-buy',
  'make-ai-built-app-production-ready': 'build-vs-buy', 'migrate-from-bubble-to-code': 'build-vs-buy', 'internal-tools-development': 'build-vs-buy',
  'servicem8-vs-simpro-vs-aroflo': 'integrations-tools', 'hubspot-vs-salesforce-australia': 'integrations-tools', 'gohighlevel-vs-hubspot': 'integrations-tools',
  'netsuite-vs-business-central-vs-acumatica': 'integrations-tools', 'stripe-vs-square-vs-tyro': 'integrations-tools', 'n8n-vs-make-vs-zapier': 'ai-agents-automation',
  'ai-agents-vs-chatbots-vs-automation': 'ai-agents-automation', 'what-is-an-ai-agent': 'ai-agents-automation', 'ai-email-inbox-automation': 'ai-agents-automation',
  'how-to-automate-customer-onboarding': 'ai-agents-automation', 'how-to-automate-document-generation': 'ai-agents-automation', 'how-to-automate-invoice-processing': 'ai-agents-automation',
  'how-to-automate-quoting': 'ai-agents-automation', 'how-to-digitise-paper-forms': 'ai-agents-automation', 'ai-for-small-business-australia': 'ai-technology',
  'ai-pilot-to-production': 'ai-technology', 'measure-ai-roi': 'ai-technology', 'data-readiness-for-ai': 'ai-technology', 'chatgpt-vs-claude-vs-copilot-for-business': 'ai-technology',
  'copilot-vs-custom-ai-assistant': 'ai-technology', 'bedrock-vs-azure-openai-vs-vertex-australia': 'ai-technology', 'open-weight-vs-api-llms': 'ai-technology',
  'prompt-injection': 'cloud-security', 'what-is-mcp': 'ai-technology', 'vector-database-comparison': 'ai-technology', 'what-is-a-vector-database': 'ai-technology',
  'flutter-vs-react-native': 'app-development', 'native-vs-cross-platform-apps': 'app-development', 'web-app-vs-mobile-app': 'app-development', 'app-store-publishing-australia': 'app-development',
  'offline-first-field-apps': 'app-development', 'subscription-app-development': 'app-development', 'how-to-build-a-marketplace': 'saas-startups', 'multi-tenant-saas-architecture': 'saas-startups',
  'how-to-choose-a-tech-stack': 'tech-stack', 'monolith-vs-microservices': 'tech-stack', 'postgresql-vs-mongodb': 'tech-stack', 'supabase-vs-firebase': 'tech-stack', 'vercel-vs-aws-hosting': 'tech-stack',
  'aws-vs-azure-vs-google-cloud-australia': 'cloud-security', 'reduce-cloud-costs': 'cloud-security', 'saas-backup-disaster-recovery': 'cloud-security',
  'power-bi-vs-tableau-vs-looker': 'data-analytics', 'data-migration-plan': 'data-analytics', 'multichannel-inventory-sync': 'integrations-tools',
  'rewrite-vs-refactor-legacy-software': 'maintenance-modernisation', 'strangler-fig-pattern': 'maintenance-modernisation', 'how-to-migrate-off-legacy-erp': 'maintenance-modernisation',
  'why-is-my-app-slow': 'maintenance-modernisation', 'customer-portal-development': 'app-development', 'software-and-ai-glossary': 'ai-technology',
  // services and top level pages
  'xero-myob-integration': 'integrations-tools', 'crm-integration': 'integrations-tools', 'api-development': 'integrations-tools', 'mcp-server-development': 'ai-technology',
  'workflow-automation': 'ai-agents-automation', 'ai-agent-development': 'ai-agents-automation', 'ai-chatbot': 'ai-agents-automation', 'ai-voice-agents': 'ai-agents-automation',
  'ai-document-processing': 'ai-agents-automation', 'ai-governance': 'ai-technology', 'ai-integration': 'ai-technology', 'ai-readiness-assessment': 'ai-technology', 'llm-integration': 'ai-technology',
  'private-llm-deployment': 'ai-technology', 'rag-knowledge-base': 'ai-technology', 'ai-consulting': 'ai-technology', 'custom-app-development': 'app-development', 'web-mobile-apps': 'app-development',
  'flutter-development': 'app-development', 'ui-ux-design': 'app-development', 'saas-development': 'saas-startups', 'startup-mvp': 'saas-startups', 'react-nextjs': 'tech-stack',
  'backend-development': 'tech-stack', 'database-architecture': 'tech-stack', 'cloud-infrastructure': 'cloud-security', 'cybersecurity': 'cloud-security', 'deployment': 'cloud-security',
  'data-analytics': 'data-analytics', 'data-engineering': 'data-analytics', 'legacy-modernisation': 'maintenance-modernisation', 'software-maintenance-support': 'maintenance-modernisation',
  'software-project-rescue': 'maintenance-modernisation', 'code-audit': 'maintenance-modernisation', 'qa-testing': 'timelines-process', 'fractional-cto': 'choosing-a-developer',
  'staff-augmentation': 'choosing-a-developer', 'enterprise-software': 'build-vs-buy', 'r-and-d': 'tax-grants-funding', 'digital-transformation': 'build-vs-buy',
  'blockchain-development': 'tech-stack', 'smart-contracts': 'tech-stack', 'web3-crypto': 'tech-stack', 'seo-backlinks': 'choosing-a-developer', 'why-audit': 'maintenance-modernisation',
  'methodology': 'timelines-process', 'how-we-work': 'timelines-process', 'trust': 'cloud-security',
};

// ---------------------------------------------------------------- page inventory
const inventory = new Map();
for (const r of parseCsv(rd('reports/content-inventory.csv')).slice(1)) {
  if (!r[0]) continue;
  const url = r[0].replace(/^https?:\/\/(www\.)?awlabs\.com\.au/, '') || '/';
  inventory.set(url, { title: r[1].replace(/\s*\|\s*AWLabs.*$/, ''), h1: r[2] });
}
const pages = [];
for (const dir of ['guides', 'solutions', 'locations']) {
  for (const f of ls(`src/content/${dir}`).filter((f) => f.endsWith('.md'))) {
    const src = rd(`src/content/${dir}/${f}`);
    const m = src.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    const fm = m[1]; const body = m[2];
    const get = (k) => { const x = fm.match(new RegExp(`^${k}:\\s*(.+)$`, 'm')); return x ? unq(x[1]) : ''; };
    const slug = f.replace(/\.md$/, '');
    const url = `/${dir}/${slug}`;
    const faqs = [...fm.matchAll(/^\s*- q:\s*(.+)$/gm)].map((x) => unq(x[1]));
    const h2s = [...body.matchAll(/^##\s+(.+)$/gm)].map((x) => decode(x[1].replace(/[*`]/g, '')));
    pages.push({ url, slug, dir, title: get('title'), metaTitle: get('metaTitle'), category: get('category'), h1: inventory.get(url)?.h1 || get('title'), faqs, h2s });
  }
}
const astroPages = [
  ...ls('src/pages/services').filter((f) => f.endsWith('.astro')).map((f) => `services/${f}`),
  ...ls('src/pages/industries').filter((f) => f.endsWith('.astro') && f !== 'index.astro').map((f) => `industries/${f}`),
  ...['ai-consulting', 'digital-transformation', 'r-and-d', 'staff-augmentation', 'startup-mvp', 'web3-crypto', 'why-audit', 'methodology', 'how-we-work', 'trust', 'index', 'about'].map((s) => `${s}.astro`),
];
for (const rel of astroPages) {
  const src = rd(`src/pages/${rel}`);
  const slug = path.basename(rel, '.astro');
  const url = slug === 'index' ? '/' : `/${rel.replace(/\.astro$/, '')}`;
  const faqs = [...src.matchAll(/\b(?:q|question):\s*(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/g)].map((x) => unq(x[1] + x[2] + x[1]));
  const h2s = [...src.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((x) => decode(x[1])).filter((s) => s.length > 3);
  const meta = (src.match(/metaTitle:\s*(['"])(.*?)\1/) || [])[2] || '';
  const inv = inventory.get(url) || {};
  pages.push({ url, slug, dir: rel.split('/')[0], title: inv.title || meta.replace(/\s*\|.*$/, '') || slug, metaTitle: meta, h1: inv.h1 || '', faqs, h2s });
}
for (const p of pages) p.cluster = clusterOfPage(p);
const pageByUrl = new Map(pages.map((p) => [p.url, p]));
const existingSlugs = new Set(pages.map((p) => p.slug));

// ---------------------------------------------------------------- candidates
const VENDOR = /\b(awlabs|aw labs)\b|\bhave you\b|\bare you\b|\bdo you (take|offer|charge|give|sign|work|provide|handle|support|use|recommend|build|do|have|need from|integrate|connect|host|guarantee|write)\b|\bwill you\b|\bwould you\b|\b(for|with|from) us\b|\bus to\b|\bour (team|fixed|engagement|care plan|project)\b|\byour (team|fees?|process|care plan|warranty|rates?|engagements?)\b|\bwhy choose\b|\bwhich [\w ]+ can you\b|\bcan you (help|work|sign|take|do|start|also|guarantee|host)\b|\bwhat do you need\b|\btypical engagement\b|\bhow we\b/i;
const CONTEXTUAL = /\b(they|these|this|them|those|that one|above|below|here)\b|^(what|how) (does|do|did) (it|that|this)\b|^(what|how) (it|they)\b|^(is|are) (it|they)\b|^(what|where) next\b|^why it\b/i;
const CONTEXTUAL_H2 = /\b(each|both|either|the two|this path|each path|the options|the feature|the ai feature|the new rule|order of operations|matter most early|what changes when|a quick|in practice\?$)\b|\?.+\S/i;
const isQuestion = (s) => /\?\s*$/.test(s) || /^(what|how|why|when|which|who|is|are|can|does|do|should|will)\b/i.test(s);
const tidy = (s) => { let t = s.replace(/\s+/g, ' ').trim(); if (!/\?$/.test(t)) t += '?'; return t[0].toUpperCase() + t.slice(1); };

const cands = []; const dropped = { vendor: 0, contextual: 0, short: 0 };
function addCand(q, o) {
  const toks = norm(q);
  cands.push({ q: tidy(q), toks, ...o });
}
for (const p of pages) {
  for (const q of p.faqs) {
    if (VENDOR.test(q)) { dropped.vendor++; continue; }
    if (/\b(they|these|this|them|those)\b/i.test(q) && !/\b(this year|this month)\b/i.test(q)) { dropped.contextual++; continue; }
    if (norm(q).size < 2) { dropped.short++; continue; }
    addCand(q, { source: 'faq', page: p.url, intent: intentOf(q, p.url), cluster: p.cluster });
  }
  for (const h of p.h2s) {
    if (!isQuestion(h)) continue;
    if (VENDOR.test(h)) { dropped.vendor++; continue; }
    if (CONTEXTUAL.test(h) || CONTEXTUAL_H2.test(h)) { dropped.contextual++; continue; }
    if (norm(h).size < 3) { dropped.short++; continue; }
    addCand(h, { source: 'h2', page: p.url, intent: intentOf(h, p.url), cluster: p.cluster });
  }
}
let curCluster = null; let curatedCount = 0;
for (const line of rd('scripts/data/question-bank-curated.txt').split('\n')) {
  const l = line.trim();
  if (!l || l.startsWith('#')) { const m = l.match(/^##\s+(\S+)/); if (m) { curCluster = m[1]; if (!CLUSTERS[curCluster]) throw new Error(`unknown cluster ${curCluster}`); } continue; }
  const [intent, q, slug] = l.split('|').map((s) => s.trim());
  if (!INTENTS.includes(intent)) throw new Error(`bad intent in: ${l}`);
  addCand(q, { source: 'curated', page: '', intent, cluster: curCluster, slug });
  curatedCount++;
}

// ---------------------------------------------------------------- autocomplete grounding
const ac = new Set();
for (const f of ls('docs-internal/keywords').filter((f) => f.endsWith('.json'))) {
  const j = JSON.parse(rd(`docs-internal/keywords/${f}`));
  for (const k of j.keywords || []) ac.add(k);
  for (const v of Object.values(j.results || {})) for (const k of v) ac.add(k);
}
const acList = [...ac].map((s) => ({ s, toks: norm(s) })).filter((x) => x.toks.size >= 2);
const acIndex = new Map();
acList.forEach((x, i) => { for (const t of x.toks) { if (!acIndex.has(t)) acIndex.set(t, []); acIndex.get(t).push(i); } });
function grounding(toks) {
  const seen = new Map();
  for (const t of toks) for (const i of acIndex.get(t) || []) seen.set(i, (seen.get(i) || 0) + 1);
  let best = { score: 0, s: '' };
  for (const [i, n] of seen) {
    if (n < 2) continue;
    const x = acList[i]; const sc = n / (toks.size + x.toks.size - n);
    // a suggestion that is a subset of the question also counts if it covers most of it
    const cov = n / toks.size;
    const s2 = Math.max(sc, cov >= 0.8 && n === x.toks.size ? 0.75 : 0);
    if (s2 > best.score) best = { score: s2, s: x.s };
  }
  return best;
}
for (const c of cands) { const g = grounding(c.toks); c.ground = g.score >= 0.6 ? g.s : ''; c.groundScore = g.score; }

// ---------------------------------------------------------------- document frequencies
for (const c of cands) learn(c.toks);
for (const p of pages) for (const x of [p.title, p.h1, ...p.h2s, ...p.faqs]) if (x) learn(norm(x));

// ---------------------------------------------------------------- dedupe by intent
const SRC_RANK = { faq: 0, curated: 1, h2: 2 };
cands.sort((a, b) => (b.ground ? 1 : 0) - (a.ground ? 1 : 0) || SRC_RANK[a.source] - SRC_RANK[b.source] || a.q.length - b.q.length);
const kept = []; const tokIndex = new Map();
for (const c of cands) {
  const near = new Map();
  for (const t of c.toks) for (const i of tokIndex.get(t) || []) near.set(i, 1);
  let hit = null;
  for (const i of near.keys()) {
    const k = kept[i]; const j = jac(c.toks, k.toks);
    if ((j >= 0.72 && k.intent === c.intent) || j >= 0.85) { hit = k; break; }
  }
  if (hit) {
    hit.merged.push(c.q);
    if (c.page) { if (!hit.page) { hit.page = c.page; hit.matchedBy = 'duplicate of page question'; } else if (c.page !== hit.page && !hit.alsoOn.includes(c.page)) hit.alsoOn.push(c.page); }
    continue;
  }
  const idx = kept.length;
  kept.push({ ...c, merged: [], alsoOn: [] });
  for (const t of c.toks) { if (!tokIndex.has(t)) tokIndex.set(t, []); tokIndex.get(t).push(idx); }
}

// ---------------------------------------------------------------- coverage check for curated rows
const units = [];
for (const p of pages) {
  for (const s of [p.title, p.metaTitle, p.h1].filter(Boolean)) units.push({ s, toks: norm(s), page: p.url, kind: 'title' });
  for (const s of p.h2s) units.push({ s, toks: norm(s), page: p.url, kind: 'h2' });
  for (const s of p.faqs) units.push({ s, toks: norm(s), page: p.url, kind: 'faq' });
}
const MANUAL = JSON.parse(rd('scripts/data/question-bank-coverage-overrides.json'));
for (const k of kept) {
  if (k.page) continue;
  if (MANUAL.new.includes(k.q)) continue;
  if (MANUAL.existing[k.q]) { k.page = MANUAL.existing[k.q]; k.matchedBy = 'manual'; continue; }
  let best = null;
  for (const u of units) {
    if (u.toks.size < 2) continue;
    const j = jac(k.toks, u.toks); const c = contain(k.toks, u.toks);
    const score = Math.max(j >= 0.6 ? j : 0, k.toks.size >= 3 && c >= 0.9 && u.toks.size <= k.toks.size + 4 ? 0.5 + c / 4 : 0);
    if (score && (!best || score > best.score)) best = { score, u };
  }
  if (best) { k.page = best.u.page; k.matchedBy = `${best.u.kind}: ${best.u.s} (${best.score.toFixed(2)})`; }
}

// ---------------------------------------------------------------- slugs
const SLUG_STOP = new Set('a an the of to for in on my our i we you your it is are do does how what which who why when can should will be with and or that this there get much does australia australian 2026 me us need really actually still'.split(' '));
function slugFor(k) {
  if (k.slug) return k.slug;
  let s = k.q.toLowerCase().replace(/[’']/g, '').replace(/\?/g, '').replace(/\br ?& ?d\b/g, 'rd').replace(/\.net\b/g, 'dotnet').replace(/&/g, 'and').replace(/\(.*?\)/g, '')
    .replace(/\b(for |in |to |of )?(my|a|your|our|an australian|the) (small )?business(es)?\b/g, ' ').replace(/\bfor (small )?business(es)?\b/g, ' ');
  let pre = ''; let post = '';
  if (k.intent === 'cost' && /^how much/.test(s)) { s = s.replace(/^how much (does|do|is|will|should|more does)( it)?( cost)?( to)?/, '').replace(/\bcosts?\b/g, ''); post = 'cost'; }
  else if (/^how long/.test(s)) { s = s.replace(/^how long (does|do|should|will)( it)?( take)?( to)?/, '').replace(/\btakes?\b/g, ''); pre = 'how-long'; }
  else if (/^how (do|can|should) (i|we|you)\b/.test(s)) { s = s.replace(/^how (do|can|should) (i|we|you)\b/, ''); pre = 'how-to'; }
  else if (/^what is\b|^what are\b/.test(s)) { pre = /^what is/.test(s) ? 'what-is' : 'what-are'; s = s.replace(/^what (is|are)\b/, ''); }
  const words = s.replace(/[^a-z0-9 +.-]/g, ' ').replace(/\./g, '').replace(/\+/g, ' plus ').split(/\s+/).filter((w) => w && !SLUG_STOP.has(w));
  const core = words.slice(0, 6);
  return [pre, ...core, post].filter(Boolean).join('-').replace(/-+/g, '-');
}
const usedSlugs = new Set(existingSlugs);
for (const k of kept) {
  if (k.page) { k.target = pageByUrl.get(k.page)?.slug || k.page.split('/').pop(); continue; }
  let s = slugFor(k);
  if (usedSlugs.has(s)) { const alt = `${s}-${k.cluster.split('-')[0]}`; s = usedSlugs.has(alt) ? `${s}-${k.intent}` : alt; }
  let n = 2; const base = s; while (usedSlugs.has(s)) s = `${base}-${n++}`;
  usedSlugs.add(s); k.target = s;
}

// ---------------------------------------------------------------- output
const clusterOrder = Object.keys(CLUSTERS);
kept.sort((a, b) => clusterOrder.indexOf(a.cluster) - clusterOrder.indexOf(b.cluster) || INTENTS.indexOf(a.intent) - INTENTS.indexOf(b.intent) || (a.page ? 1 : 0) - (b.page ? 1 : 0) || a.q.localeCompare(b.q));
const rows = [['question', 'cluster', 'intent', 'target_page_slug', 'existing_page', 'action']];
const prov = [['question', 'source', 'source_page', 'grounded_in_autocomplete', 'autocomplete_match', 'coverage_match', 'merged_duplicates', 'also_answered_on']];
for (const k of kept) {
  rows.push([k.q, k.cluster, k.intent, k.target, k.page, k.page ? 'improve existing' : 'new']);
  prov.push([k.q, k.source, k.source === 'curated' ? '' : k.page, k.ground ? 'yes' : 'no', k.ground, k.matchedBy || '', k.merged.join(' | '), k.alsoOn.join(' ')]);
}
fs.mkdirSync(path.join(root, 'reports'), { recursive: true });
fs.writeFileSync(path.join(root, 'reports/question-bank.csv'), toCsv(rows));
fs.writeFileSync(path.join(root, 'reports/question-bank-provenance.csv'), toCsv(prov));

const count = (f) => kept.filter(f).length;
let md = `# Question bank clusters\n\nGenerated by \`scripts/build-question-bank.mjs\` on ${new Date().toISOString().slice(0, 10)}. Each cluster gets a hub at \`/guides/<cluster>/\`.\n\n`;
md += `Total rows: ${kept.length} (new ${count((k) => !k.page)}, improve existing ${count((k) => k.page)}). Grounded in Google autocomplete (en-AU): ${count((k) => k.ground)}.\n\n`;
md += '| Cluster slug | Name | Description | Rows | New | Improve existing | Grounded |\n|---|---|---|---|---|---|---|\n';
for (const [slug, [name, desc]] of Object.entries(CLUSTERS)) {
  md += `| ${slug} | ${name} | ${desc} | ${count((k) => k.cluster === slug)} | ${count((k) => k.cluster === slug && !k.page)} | ${count((k) => k.cluster === slug && k.page)} | ${count((k) => k.cluster === slug && k.ground)} |\n`;
}
md += '\n## By intent\n\n| Intent | Rows | New | Improve existing |\n|---|---|---|---|\n';
for (const i of INTENTS) md += `| ${i} | ${count((k) => k.intent === i)} | ${count((k) => k.intent === i && !k.page)} | ${count((k) => k.intent === i && k.page)} |\n`;
md += `\n## Sources\n\n| Source | Candidates | Rows kept |\n|---|---|---|\n`;
for (const s of ['faq', 'h2', 'curated']) md += `| ${s} | ${cands.filter((c) => c.source === s).length} | ${count((k) => k.source === s)} |\n`;
md += `\nDropped before dedupe: ${dropped.vendor} questions addressed to AWLabs, ${dropped.contextual} H2s or FAQs that only make sense inside their page, ${dropped.short} too short to stand alone.\n`;
md += `\n## Notes\n\n- Improve existing rows take the hub cluster of the page that answers them; new rows take the cluster they were curated under.\n- "Grounded" means the question's normalised words closely match (IDF weighted Jaccard 0.6 or more) a Google autocomplete (en-AU) suggestion in docs-internal/keywords. It shows real search phrasing exists, not search volume.\n- Coverage for curated rows was matched automatically against page titles, H1s, H2s and FAQs, then corrected by hand in scripts/data/question-bank-coverage-overrides.json after spot checks.\n- Per row provenance (source, grounding match, coverage match, merged duplicates, other pages answering the same question) is in reports/question-bank-provenance.csv.\n- The industry-software hub holds every solution and industry page FAQ (${count((k) => k.cluster === 'industry-software')} rows); it will need sub-hubs (health, trades and construction, finance, property, logistics, education, hospitality) rather than one list.\n`;
fs.writeFileSync(path.join(root, 'reports/question-bank-clusters.md'), md);

console.log(`pages ${pages.length}, candidates ${cands.length} (curated ${curatedCount}), kept ${kept.length}, new ${count((k) => !k.page)}, improve ${count((k) => k.page)}, grounded ${count((k) => k.ground)}`);
console.log('dropped', dropped);
