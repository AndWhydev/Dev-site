# Keyword optimisation brief (AI search first, Google second)

Repo: /mnt/c/Users/andy/Desktop/Projects/awlabs.com.au/Dev-site. Today is 28 September 2026. The pages are live and have been fact-checked; your job is to widen the range of real queries each page answers, without breaking any rule.

Read first: `SEO-SOP.md` (all of it), `docs-internal/writer-brief.md` ("Facts about the company", "Facts you must NOT invent", "Style").

## Why and what "keyword-rich" means here
AI engines (ChatGPT, Perplexity, Gemini, AI Overviews and AI Mode, Copilot, Claude) run many related sub-searches ("query fan-out") and cite passages that directly answer them. Google ranks pages that match the phrasing and intent of real queries. Keyword stuffing (repeating phrases, keyword lists, unnatural density) measurably LOWERS AI visibility and triggers Google's spam systems. So "keyword-rich" means: every real way a buyer phrases this topic, and every real follow-up question, is answered in the page in natural language.

## Inputs per page
`docs-internal/keywords/<collection>__<slug>.json` (e.g. `guides__what-is-rag.json`, `services__rag-knowledge-base.json`, `solutions__ai-in-healthcare.json`, `locations__melbourne.json`): real Google autocomplete suggestions for Australia, with a `questions` subset. Industry pages have no keyword file: derive variants from the page topic and the related service/solution files. Some suggestions are irrelevant (other meanings of the acronym, e.g. "rag rugging", project "RAG status"): ignore them.

## Do, per page
1. **Primary query in the right places.** Pick the page's primary query (highest commercial or informational intent that the page truly answers). Make sure it appears naturally in: the `metaTitle` (≤ 60 chars; add "Australia" or "Sydney" where that matches local intent and fits), the `description` (140 to 158 chars, includes primary plus one secondary variant, reads as a sentence), the H1/title where it reads well, the first sentence of the summary, and at least one H2.
2. **Variants and synonyms.** Weave in the common alternative phrasings from the keyword file where they fit the meaning: e.g. cost / price / pricing / how much; "custom software development" / "bespoke software" / "software developers"; "RAG" / "retrieval-augmented generation" / "AI knowledge base" / "chat with your documents"; Australian vs US spelling where buyers search both (write Australian English, but a term like "modernization" can appear once in parentheses if buyers search it). Each variant appears where it naturally belongs, usually once or twice. Never a list of keywords.
3. **Fan-out coverage.** From the `questions` list and the keyword list, find 3 to 6 real buyer questions the page doesn't yet answer clearly. Answer each: either add an FAQ (question phrased close to the real query, direct 2 to 4 sentence answer), or turn an existing H2 into the question form, or add a short H2 section (answer-first, 80 to 200 words). Only add questions that fit this page's intent; send off-topic ones elsewhere by linking to the right page instead.
4. **Entities.** Name the specific things buyers and AI engines associate with the topic (vendors, products, laws, regulators, standards, Australian regions and cities) where relevant and accurate.
5. **Internal anchors.** Where the page mentions a topic that has its own page, link it with descriptive anchor text using the target's primary keyword (e.g. "[RAG development services](/services/rag-knowledge-base)"), at most once per target per page. Only link to URLs that exist (`node scripts/check-content.mjs` validates markdown links).

## Don't
- Don't repeat any phrase unnaturally; if a sentence reads like it was written for a search engine, rewrite it.
- Don't add hidden text, keyword lists, "related searches" blocks, or city lists.
- Don't add new factual claims (dates, figures, legal points, product facts) unless you verify them against a primary source with WebFetch (load via ToolSearch `select:WebFetch`; web search budget may be exhausted, so fetch known primary URLs; `curl -sL -A "Mozilla/5.0" <url>` works for some blocked sites). Prefer rephrasing and reorganising what's already verified on the page.
- Don't invent anything about the company. Don't change prices, dates or the `published` field. Keep `updated` as is.
- No em or en dashes. Australian English. Keep every truthfulness rule.
- Don't spawn sub-agents. No git, no builds. Only edit your assigned files.

## Validate
Markdown: `node scripts/check-content.mjs <file>` must pass (no ✗). Astro pages: check for no em/en dashes and no github.com, and syntax-check the data object: `node -e "const s=require('fs').readFileSync(process.argv[1],'utf8'); const m=s.match(/const data = (\{[\s\S]*?\n\});/); if(m){ new Function('return '+m[1])(); console.log('parses ok') } else console.log('pattern not found, check manually')" <file>` (industry and some service pages may use a different variable name; adapt the check).

## Report
Append to `docs-internal/keywords/changes-<batch>.md`: per page, the primary query chosen, metaTitle/description before → after, and the questions/variants added. Final message: a short summary.
