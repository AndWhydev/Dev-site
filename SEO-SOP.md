# AWLabs SEO and AI-search SOP

How we plan, write, build and publish search pages on awlabs.com.au. Written September 2026 from three research passes (AI search citation behaviour, Google's scaled-content and doorway rules, and the Australian competitive landscape). Follow it for every new page.

## 1. What actually moves rankings and AI citations

Ranked by evidence strength, strongest first.

1. **Third-party mentions beat everything for "best X company" answers.** AI engines assemble shortlists from directories and listicles (Clutch, DesignRush, GoodFirms, NAIC AI Directory, AVIXA Xchange style lists), LinkedIn and YouTube. Pages on our own site help us get cited for *questions*; off-site presence gets us *recommended*. Both are needed.
2. **Be in every index the engines use.** ChatGPT and Copilot lean on Bing (plus OpenAI's own index), Gemini and AI Overviews use Google, Claude uses Brave. Verify in Google Search Console, Bing Webmaster Tools and Brave; ping IndexNow on deploy.
3. **Crawlers must reach server-rendered HTML.** AI crawlers don't run JavaScript and largely ignore JSON-LD when fetching live. Every fact that matters must be visible text in the static HTML. (Astro SSG already does this; never hide content behind client-side rendering.)
4. **Answer first.** About 44% of ChatGPT citations come from the first 30% of a page, and definitional sentences ("X is ...") are cited about twice as often. Open every page and every H2 section with a direct, quotable answer.
5. **Statistics, quotations and cited sources** raise AI visibility 30 to 40% (GEO paper, KDD 2024), most for pages that don't already rank first. Cite primary sources (legislation, regulators, vendor docs, reputable surveys) with links.
6. **Cover the sub-questions.** Google's AI Mode runs "query fan-out": many related sub-searches. Only ~38% of AI Overview citations rank top 10 for the head term. A page that answers the follow-up questions a buyer would ask gets pulled in more often than one that ranks #1 for one phrase.
7. **Freshness.** AI-cited pages are ~26% newer than organic results. Show a visible "Last updated" date, keep `updated` accurate in frontmatter, and genuinely refresh priority pages quarterly. Cost guides carry the year in the title and get a new version each January.
8. **Schema is hygiene, not a lever.** Add Organization, Article, Service, BreadcrumbList and Person. Don't expect ranking gains. FAQ rich results were retired in May 2026. llms.txt is ignored by Google and barely requested by anyone; we ship a small one because it's free, nothing more.

## 2. Risk rules (Google's 2026 spam and helpful-content systems)

The main risk isn't a manual penalty, it's a sitewide quality demotion that drags our good service pages down with weak new ones.

- **No swapped-entity templates.** If you delete the H1 and the city or industry name, a reader must still be able to tell which page they're on. The majority of body content must be specific to the page.
- **No full grids.** We never build every service × industry or service × city combination. A combination page exists only if the industry changes the substance (regulations, systems, use cases, risks) *and* there's buyer demand.
- **City pages only with a real local reason.** We're a Sydney company (Five Dock NSW) delivering remotely. Every non-Sydney page says so plainly in the first paragraph and carries genuinely local content: state procurement channel, state privacy and records law, time zone, the local industry mix. No fake addresses, phone numbers, LocalBusiness schema or Google Business Profiles in other cities.
- **Vary structure.** Pages of the same type must not share an identical H2 skeleton. Sections follow what the topic needs.
- **Every page earns its place.** Test: would a buyer who landed on the site directly want to read this? If not, don't build it.
- **No islands.** Every page is linked from a hub and from at least two related pages, within three clicks of the home page. No keyword link grids in the footer.

## 3. Truthfulness rules (non-negotiable)

These protect the brand, and several are Australian Consumer Law issues.

- **No invented case studies, clients, testimonials, metrics or outcomes.** Not even "a major Australian bank". If we don't have a real, permissioned example, say what we would do, not what we did.
- **Company history is stated accurately:** founder shipping software since 2019, All Webbed Up since 2021, All Webbed Labs launched mid 2026 as a partnership with a group of developers and founders. Lead with 2019/2021, put the 2026 launch at the end. Never claim "X years as AWLabs" or a team size.
- **No certifications or panels we don't hold:** ISO 27001, ISO 42001, IRAP assessment, CREST, SOC 2, Microsoft/AWS/Google partner tiers, Claude Partner Network, BuyICT or state panel membership, security clearances. We can *explain* these; we can't *claim* them.
- **No "compliant" guarantees.** We build to requirements and provide evidence; the client remains responsible for its compliance. Regulatory pages carry a "general information, not legal advice" note.
- **R&D Tax Incentive:** we are not a registered tax agent. Never promise a refund or headline an offset percentage. Point to business.gov.au, the ATO and a registered R&D tax agent.
- **Prices:** we quote fixed prices after a paid discovery. Cost guides give *typical Australian market ranges* with the drivers explained and sources where available, clearly labelled as ranges, not quotes.
- **Model and cloud availability changes often.** Anything about which models run in which Australian region must be dated and phrased as "at the time of writing", with a link to the vendor's regional availability page.
- **Never link to github.com** from any page, byline or `sameAs`.

## 4. Page types

| Type | URL | Purpose | Length |
|---|---|---|---|
| Service | `/services/<slug>` | What we build and how. Uses `ServicePageLayout`. | 1,800 to 3,000 words |
| Solution (industry × service) | `/solutions/<slug>` | A specific solution for a specific industry, shaped by that industry's rules and systems. | 1,500 to 2,500 |
| Location | `/locations/<slug>` | Honest delivery page for a city with local context. | 1,200 to 2,000 |
| Cost guide | `/guides/<slug>` (category `cost`) | AUD ranges, drivers, worked examples, how to reduce cost. | 1,800 to 3,000 |
| Comparison / how to choose | `/guides/<slug>` (category `compare`) | Fair comparison with a clear recommendation per situation. | 1,500 to 2,500 |
| Explainer | `/guides/<slug>` (category `explainer`) | Definition first, then how it works, when it matters, pitfalls. | 1,000 to 2,000 |
| Australian guide | `/guides/<slug>` (category `australia`) | Regulation or program explained for software buyers, with primary sources. | 1,500 to 3,000 |

Hubs: `/guides` (grouped by category), `/solutions`, `/locations`, plus the existing `/services` and `/industries`. Guides link up to their hub and across to the service they support.

## 5. Anatomy of a guide, solution or location page

1. **H1** that matches the query the way a buyer phrases it. Title tag ≤ 60 characters where possible, meta description 140 to 158 characters, both unique and written for the page.
2. **Summary box ("The short answer")**: 2 to 4 sentences that answer the query directly, quotable on their own. For cost guides, the headline range in AUD.
3. **Key takeaways**: 3 to 5 bullets.
4. **Body**: H2s phrased as the questions buyers ask. Each section opens with a one or two sentence answer, then detail. Use tables for comparisons and ranges, numbered lists for processes. Include at least 3 page-specific assets (a table of ranges, a decision matrix, a checklist, a worked example, a regulation timeline, an integration list).
5. **Australian specifics** wherever they apply: AUD, GST, AEST, Australian regions (AWS ap-southeast-2 Sydney and ap-southeast-4 Melbourne, Azure Australia East/Southeast, Google australia-southeast1/2), Privacy Act 1988 and APPs, OAIC, APRA, ASD, DTA, state laws.
6. **How AWLabs approaches it**: one short section, factual, no hype, linking to the relevant service. This is the only self-promotional section.
7. **FAQs**: 4 to 8 real buyer questions with direct answers. Not filler.
8. **Sources**: numbered list of the primary sources cited, with links.
9. **Related**: 3 to 5 hand-picked related pages.
10. **Visible "Last updated" date** and "Published by All Webbed Labs" with a link to the editorial policy.

## 6. Writing style

- Australian English (organisation, optimise, licence as noun, program for government programs).
- Plain, confident, specific. Short paragraphs. No marketing filler ("in today's fast-paced digital landscape", "unlock", "seamless", "cutting-edge", "game-changer", "leverage" as a verb).
- No em dashes or en dashes; use commas, colons or full stops.
- Numbers as numerals, currency as "$85,000 AUD" or "$85k to $150k (AUD, ex GST)" with the basis stated.
- Write for a smart non-technical buyer first, with enough technical precision that an engineer trusts it.
- Honest about trade-offs: every comparison says when the *other* option is the better choice, including when that means not hiring us.

## 7. Technical checklist (per release)

- Build passes; every new URL is in the sitemap and returns 200 at the canonical (www, no trailing slash).
- Unique title and description on every page (check with the crawl script).
- Similarity check: no pair of new or existing pages above 50% shared 5-word shingles in body text.
- Every new page linked from its hub and from at least two other pages.
- JSON-LD: Article (guides), Service (solutions and service pages), BreadcrumbList, Organization sitewide.
- No github.com links; no unverifiable claims (grep for "%", "clients", "certified", "compliant", "guarantee" and review each hit).
- Lighthouse on a sample: performance ≥ 90, accessibility ≥ 95.
- After deploy: submit sitemap in GSC and Bing, IndexNow ping for new URLs, request indexing for the top 10.

## 8. Off-site actions (these do more for "who's the best" answers than any page)

1. Submit to the NAIC AI Directory (aidirectory.industry.gov.au), free and .gov.au.
2. Claim Clutch, GoodFirms, DesignRush and TechBehemoths profiles; collect 3 to 5 verified client reviews on Clutch first. Follow ACCC review rules: ask all clients, not only happy ones; no incentives without disclosure.
3. Google Business Profile (single Sydney listing, service-area business if clients don't visit the office), Bing Places, Apple Business Connect, 10 to 15 clean Australian directories with identical name, address, phone and ABN.
4. Pitch inclusion in the Australian "best AI development companies" lists that AI answers cite.
5. Keep the LinkedIn company page accurate and active; post short versions of each new guide.
6. Earn real mentions: talks at Sydney AI meetups, podcasts, Australian tech press (iTnews, InnovationAus, SmartCompany).

## 9. Measuring

- Google Search Console: Page indexing by sitemap, Performance, and the Generative AI report.
- Bing Webmaster Tools: AI Performance report (shows Copilot citations and the sub-queries it searched; use these to decide what to write next).
- Analytics: an "AI assistants" channel matching referrers chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai.
- Monthly prompt panel: 40 buyer questions, run 5 times each in ChatGPT, Perplexity, Gemini, Copilot and Claude from an Australian location. Track mention rate and which pages get cited.
- Contact form "How did you hear about us?" includes "AI assistant (ChatGPT, Claude etc.)".

## 10. Maintenance

- Quarterly: refresh the top 20 guides (facts, dates, prices), update `updated`.
- January: publish the new year's cost guides.
- After 120 days: any page not indexed or with no impressions gets improved, merged into its hub with a 301, or removed.
