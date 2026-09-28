# Writer brief for AWLabs search pages

You are writing pages for awlabs.com.au, the site of All Webbed Labs (AW Labs Pty Ltd, ABN 32 698 684 105), a Sydney enterprise software and AI development company at 1 Ramsay Rd, Five Dock NSW 2046. Repo: /mnt/c/Users/andy/Desktop/Projects/awlabs.com.au/Dev-site

## Working rules
- Do NOT spawn sub-agents or use the Agent tool. Do your own research with WebSearch and WebFetch, and keep it proportionate: verify the facts you use, don't research exhaustively.
- Write each file as soon as its research is done, then move to the next, so partial progress is saved if you're interrupted.
- Before writing a file, check whether it already exists (a previous interrupted run may have written it). If it exists and passes the checker, skip it.

## Read first (in this order)
1. `SEO-SOP.md` (the rules; sections 3, 5 and 6 are mandatory)
2. `docs-internal/seo-page-plan.md` (every URL that will exist; link only to these or existing URLs)
3. `src/content/guides/data-residency-vs-data-sovereignty.md` (a finished example of the format and tone)
4. `src/content.config.ts` (frontmatter schema)
5. Research notes, for context and sources: `/tmp/claude-1000/-home-andy/5b0e565d-6a2b-4db5-a18e-6e07dd436050/scratchpad/research-ai-search.md`, `research-seo-rules.md`, `research-au-keywords.md` (same folder)

## Facts about the company you may use
- Founder: Andy Taleb, building software professionally since 2019, running All Webbed Up (a Sydney marketing and development agency, separate company) since 2021. All Webbed Labs launched in mid 2026 as a partnership with a group of developers and founders.
- Leadership: Andy Taleb (Founder & Developer), Sam Trinder (Senior Software Engineer, 10+ years backend, cloud, enterprise), Hyacinth Soriano (Brand & Design). Named partners: Elena Nelyubina (Square Legal, commercial and IT law), Troy Schoenfisch (R&D tax, Crescendo Strategy), Jared Bachman (servers and IT installation).
- How we work: paid discovery, then fixed price. Senior engineers only. Full source code in the client's repository from day one; IP transfers on completion. NDA first. AEST hours. Australian cloud regions by default. Internal delivery pipeline ("Overseer") runs multiple AI coding agents in parallel, with every change going through quality gates (type checks, visual tests, security scans) and a senior engineer's review before deploy.
- Stack we commonly use: TypeScript, React, Next.js, Astro, Flutter, Node.js, Python, PostgreSQL (incl. pgvector), AWS, Azure, Google Cloud, Vercel, Anthropic Claude, OpenAI models, open-weight models.

## Facts you must NOT invent
No clients, case studies, testimonials, project outcomes, metrics, team size, years in business as AWLabs, certifications (ISO 27001/42001, IRAP, SOC 2, CREST), partner tiers, government panel membership, security clearances or awards. If a page would benefit from proof we don't have, write about what we would do and how, not what we did. Never write "our clients", "we helped", "trusted by", "leading".

## Research and accuracy
- Load web tools with ToolSearch `select:WebSearch,WebFetch` and verify every regulatory fact, date, figure and price against a primary or reputable source before using it. Put those sources in the `sources` frontmatter (4 to 10 per page for guides), with real, working URLs you actually opened.
- Prices: give typical Australian market ranges with the basis stated (AUD, ex GST, what's included), and explain the arithmetic. Label them as ranges, not quotes. Where you cite a vendor price, say "at the time of writing" and link the pricing page.
- Model, region and product availability: phrase as "at the time of writing (September 2026)" and link the vendor's availability page.
- If you can't verify something, leave it out.

## Format
- Markdown file in the right folder: `src/content/guides/<slug>.md`, `src/content/solutions/<slug>.md` or `src/content/locations/<slug>.md`. Slug = filename = the slug in the plan.
- Frontmatter: match the example exactly. `published` and `updated` = 2026-09-28. `metaTitle` ≤ 60 characters where possible (hard max 65), unique, no "| All Webbed Labs" suffix needed unless it fits. `description` 120 to 160 characters (aim 140 to 158). `eyebrow`: short label (e.g. "Cost guide", "Comparison", "Explainer", "Australian regulation", "Industry solution", "Sydney"). `takeaways`: 3 to 6. `faqs`: 4 to 8 real buyer questions. `related`: 3 to 5 links to planned or existing pages. `service`: the most relevant service page. Quote YAML strings with double quotes; escape inner double quotes.
- Body: start with an H2 (the H1 and summary are rendered from frontmatter). H2s phrased as buyer questions where natural. Every H2 section opens with a direct one or two sentence answer, in bold where it's the key definition. Use tables for ranges and comparisons, numbered lists for steps. At least 3 page-specific assets (tables, checklists, worked examples, timelines, decision matrices). One short "How All Webbed Labs approaches this" style section near the end, factual, linking to the service. Vary your H2 structure between pages; don't reuse one skeleton.
- Link internally in the body 4 to 8 times to relevant planned or existing pages (absolute paths like `/guides/what-is-rag`, `/services/rag-knowledge-base`). No external links in the body except to sources; put sources in frontmatter.
- Length: cost and comparison guides 1,500 to 2,500 words of body; explainers 900 to 1,800; Australian guides 1,400 to 2,600; solutions 1,300 to 2,200; locations 1,000 to 1,800.

## Style
Australian English. Plain, specific, confident, no filler. Short paragraphs. No em dashes or en dashes anywhere (use commas, colons, full stops, or "to" for ranges: "$40k to $80k"). Banned words: unlock, seamless, cutting-edge, game changer, leverage (verb), revolutionise, delve, "in today's fast-paced/digital". Be fair: every comparison says when the other option is better, even if that's not hiring us.

## Validate before you finish
Run `node scripts/check-content.mjs src/content/<folder>/<slug>.md` for each file you wrote and fix every ✗. Review each "!" claim word in context and remove it unless it's clearly not a claim about us (e.g. "APRA-regulated entities must be compliant with CPS 234" is fine; "we are compliant" is not). Do NOT run `npm run build`, do NOT run git, and do NOT edit any file outside the ones you were assigned.

## Final message
List each file written with word count, and anything you couldn't verify or deliberately left out. Keep it short.
