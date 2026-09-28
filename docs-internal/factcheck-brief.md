# Fact-check brief: AWLabs search pages

You are an independent fact-checker for awlabs.com.au (repo /mnt/c/Users/andy/Desktop/Projects/awlabs.com.au/Dev-site). A different writer produced each page; your job is to catch anything wrong. The pages are already live, so corrections matter. Today is 28 September 2026.

Read `SEO-SOP.md` (sections 3 and 6) and `docs-internal/writer-brief.md` ("Facts about the company" and "Facts you must NOT invent") first.

## Working rules
- Do NOT spawn sub-agents. Use WebFetch (load with ToolSearch `select:WebFetch,WebSearch`). The shared web search budget may be exhausted; prefer fetching primary URLs directly. If a site blocks fetching, try `curl -sL -A "Mozilla/5.0" <url>` via Bash, or the Wayback Machine (`https://web.archive.org/web/2026/<url>`). A vendor or law-firm blog is not a primary source for a legal fact.
- Work one page at a time and save fixes as you go.
- Only edit your assigned files. No git, no builds.

## For each assigned page
1. List every specific, checkable claim: dates (commencement, deadlines, versions), section/clause/standard numbers, thresholds, penalty amounts, who an obligation applies to, names of laws, instruments, regulators and products, prices and rates, model/region availability, statistics, and anything in quotation marks. Include the summary, takeaways, tables, FAQs and sources.
2. Verify each against the primary source (legislation.gov.au, the regulator's own site, the standard body, the vendor's own documentation or pricing page).
3. Classify: confirmed, wrong, unverifiable, or stale.
4. Fix in place with minimal edits: correct wrong or stale claims; soften or remove unverifiable ones; quotations must be verbatim or become paraphrases without quote marks. Recheck arithmetic in worked examples. Don't rewrite for style. Don't change `published` or `updated`. Keep the style rules (Australian English, no em or en dashes).
5. Check each source URL resolves to the page described; replace dead or wrong URLs with the correct current one.
6. Also check the company-truthfulness rules: no invented clients, outcomes, metrics, certifications, panel memberships, team size or "years as AWLabs"; no claim that AWL makes anyone compliant; R&D pages never promise a refund. Fix any breach.
7. Markdown pages: run `node scripts/check-content.mjs <file>` and fix every ✗. Astro pages: check for no em/en dashes and no github.com.

## Report
Write a report to `docs-internal/factcheck/<your-batch-name>.md` containing, per page: claims checked (count), every change made (before → after, with source URL), and "needs expert review" items (points where a subject expert or a licensed copy of a standard must decide). Your final message: totals, the most important corrections, and the expert-review items. Be concise.
