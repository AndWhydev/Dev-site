# Fact-check report: costs batch (28 September 2026)

13 cost guides checked. Every source URL was opened (GAO and Make return 403 to curl but load through a browser fetcher; both are correct). Every worked example was recalculated line by line. All 13 files pass `node scripts/check-content.mjs`. No company-truthfulness breaches found (no invented clients, metrics, certifications or team size; no compliance guarantees; the R&D mentions never promise a refund).

Rate and statutory figures cross-checked against: Robert Walters Salary Guide 2026 mid-year, Jobs and Skills Australia ANZSCO 2613, Seek, Re:Sourced (Jul 2026), Talent International (Mar 2026), Hyperion IT/Hays ACT, ATO super guarantee (12% from 1 July 2025), Revenue NSW payroll tax (5.45% above $1.2M), icare 2026 to 2027 (WIC 783400, 0.218%), Fair Work annual leave, NSW long service leave, RBA exchange rates (25 Sep 2026 USD 0.7019), ABS AWE May 2026 ($2,083.70 FT adult OTE, seasonally adjusted).

## Cross-page consistency

| Figure | Finding |
|---|---|
| Planning day rate | $1,400 on legacy, SaaS, enterprise, add-AI, maintenance. Workflow automation used $1,300 in Option A and $1,400 in Option B with no explanation: harmonised to $1,400. Custom software uses a blended $165/hr (about $1,250/day): explanation added. |
| Agency hourly rates | Custom said $120 to $250; rates guide said $120 to $330. Both are sourced (Expeed/VT Digital vs Conduct). Custom takeaway now mentions the $330 upper end; rates guide now quotes Conduct's actual lower bound ($123). |
| Maintenance % | 15 to 20% for conventional software; 15 to 25% on AI, RAG, add-AI (explained: models change) and SaaS (consistent with maintenance guide's "fast-moving products"). App guide said 15 to 20% while maintenance guide said 20 to 25% for web plus mobile: app summary now notes "towards 25%" for frequent-release apps. |
| Discovery | Custom $10k to $25k; legacy assessment $10k to $40k: explanation added on the legacy page. |
| Contractor day rates, super, payroll tax, FX | Consistent across pages. |

## Per page

### custom-software-development-cost-australia (claims checked: 34)
Arithmetic all correct (725 h, $119,625, $131,625, $144,787.50, $23,944, $203,457). Expeed, Conduct, VT Digital, Accelerance figures confirmed.
- Takeaway: "Australian agencies commonly bill $120 to $250 an hour" → "Most published Australian agency rates fall between about $120 and $250 an hour, with some small and mid-sized firms up to $330" (consistency with rates guide; Conduct https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/).
- Added: blended $165/hr is about $1,250/day, below the $1,400 used elsewhere, because of part-time design/QA.
- Payment processing row: "often around 1.75 to 2.9%" (stale: Stripe AU domestic is 1.7% + A$0.30 and falls again from 1 Oct 2026) → "A percentage plus a fixed fee per transaction, set by the provider; check its current pricing page" (https://stripe.com/au/pricing).

### app-development-cost-australia (claims checked: 30)
Arithmetic correct ($129,000; native $73,800 and $154,800; $141,900; $19,350). AppGurus (published 24 Nov 2025), Wave Digital (1 Jul 2026), Apple US$99, Small Business Program 15% under US$1M, Google Play US$25 all confirmed.
- Summary: added "and towards 25% for apps with frequent releases or many integrations" (consistency with maintenance guide).

### ai-development-cost-australia (claims checked: 28)
Arithmetic correct (US$44 = A$63 at 0.70; RBA 25 Sep 2026 is 0.7019). Lanex, Quanton (11 Jun 2026), Team 400 confirmed. US$2/US$10 matches Claude Sonnet 5 list price. 10% regional premium confirmed (Anthropic on Bedrock/Google Cloud; OpenAI data residency uplift).
- Stage table proof of concept duration "2 to 8 weeks" → "2 to 10 weeks" (matched FAQ and sources: Team 400 2 to 4 weeks, Lanex 6 to 10 weeks, https://lanex.au/blog/ai-development-cost-in-2026-au-businesses-budget).

### ai-chatbot-cost-australia (claims checked: 27)
Intercom Fin US$0.99 per outcome, Anthropic's ~US$37 per 10,000 tickets on Haiku 4.5, Team 400 tiers and running costs, PSOS and Bumblebee Studio figures confirmed.
- Tier 1 monthly cost "About US$19 to US$300" (mixed PSOS's USD with Bumblebee's AUD figure) → "US$19 to US$120 (PSOS) or $0 to $300 (Bumblebee Studio)".
- "Option B is about A$44,000 cheaper" → "about A$45,000" (A$152,700 − A$108,000 = A$44,700).

### rag-knowledge-base-cost (claims checked: 30)
Arithmetic correct (50M tokens, US$6.50/US$1.00, 1.2 GB, US$9/18/36 per 1,000, caching saving US$2.70, monthly total $4,339). OpenAI embedding prices, Supabase Pro from US$25, Pinecone Standard US$50 minimum, Claude prices, OpenAI 10% regional uplift confirmed.
- "Quanton AI puts a focused generative AI pilot at $20,000 to $50,000" → "a narrowly focused generative AI project" (Quanton lists $20k to $50k as a narrow-focus implementation, not a pilot; https://quanton.ai/blog-articles/how-much-does-ai-consulting-cost-in-australia-2026-pricing-guide/).

### software-developer-rates-australia (claims checked: 45)
Loaded-cost example verified: super $19,200; payroll tax 5.45% of $179,200 = $9,766; workers comp 0.218% = $391; LSL $2,668; total $197,025; 1,710 hours; $115/hr; $110/hr below threshold. JSA, Seek, Payscale, Robert Walters, Re:Sourced, Hyperion figures confirmed.
- Agency row source "Conduct 2026, Robert Walters, agency guides" → "Conduct 2026, other agency guides" (Robert Walters publishes no agency rates).
- "commonly bill $120 to $330 an hour" (attributed to Conduct) → "about $123 to $330" (Conduct's figure).
- Talent International "around $1,450 a day" → "about $1,450 to $1,510" (Enterprise Architect is $1,512; https://www.talentinternational.com/blog/top-tech-contractor-day-rates-australia/).
- Offshore AUD conversions at 0.70 corrected: Asia $44 to $58 → $44 to $59; LatAm $85 to $107 → $86 to $107; CEE $91 to $108 → $91 to $109.

### mvp-development-cost-australia (claims checked: 28)
Arithmetic correct ($187,000 and $73,000; 61%; $80,300; $10,950). Appinventiv (7 Aug 2026), Bubble Growth US$209/month billed annually, business.gov.au R&D eligibility ($20,000 minimum, RSP/CRC exceptions) confirmed. No changes.

### legacy-modernisation-cost-australia (claims checked: 30)
Arithmetic correct (105 days, $147,000, $176,400; 71 and 214 days; payback 2.25 years). AWS 7 Rs and both AWS quotations verbatim; GAO 80% (17 Jul 2025); XpansionIT (25 Aug 2026) and Appinventiv (18 Sep 2026) bands confirmed.
- Discovery bullet: added that a $10k to $40k legacy assessment exceeds a typical new-build discovery because the old system must be mapped (consistency with custom guide's $10k to $25k).

### saas-development-cost-australia (claims checked: 32)
Arithmetic correct (128 days, $179,200, $206,080; 39 days = 30%; fee example $535.20 = 2.7%). Aizecs (13 Mar 2026), OAIC $3 million threshold, AWS silo/pool/bridge confirmed.
- Stripe made robust to the 1 October 2026 change (https://stripe.com/au/pricing shows 1.7% + A$0.30 domestic with "Lower pricing from 1 Oct 2026", international lower from 1 Apr 2027, Billing 0.7%): takeaway now describes the pricing basis and points to the live page; body paragraph describes basis, notes both announced changes and links the page; worked example now states 1.7% + A$0.30 as an explicit assumption (pre-October domestic rate, conservative afterwards).
- Summary: SaaS-specific parts "add 25 to 40% on top of the core features" → "account for 25 to 40% of the build" (the worked example shows 30% of total, not of core features; FAQ says a quarter to a third of the build).
- Component total "$60k to $200k" → "roughly $60k to $210k" (table high ends sum to $210k).

### enterprise-software-development-cost-australia (claims checked: 30)
Arithmetic correct (347 days, $485,800, $72,870, $573,670; maintenance $86k to $115k). VT Digital (12 Feb 2026) 15 to 25% and 8 to 12%, Intrix (30 Jul 2026) pen test ranges, CPS 234 third-party provisions, Essential Eight URL, Talent International confirmed. No changes.

### workflow-automation-cost (claims checked: 27)
ABS $2,083.70 (May 2026, SA) → $54.83 → $61.41 with 12% super confirmed. Zapier (US$19.99/US$29.99, 750 tasks; Team US$69), Make ($9, 5,000 credits), n8n (€20/€50), Power Automate (AU$22.40, AU$224.50, ex GST) confirmed.
- Option A day rate $1,300 → $1,400 (consistency with Option B and other guides): build $10,400 → $11,200; upkeep $1,300 → $1,400 a month; payback "$10,400 ÷ ($5,200 − about $1,500)" → "$11,200 ÷ ($5,200 − about $1,600) ≈ 3 months" (result unchanged).

### cost-to-add-ai-to-an-existing-app (claims checked: 26)
Arithmetic correct (43 days, $60,200, $69,230; US$180/month). Claude Sonnet 5 and Haiku 4.5 prices, OWASP LLM Top 10 2025 order, OAIC AI guidance points confirmed.
- "might need 10 to 15 days rather than 25" (unclear what 25 referred to) → "rather than the 25 or so a first feature needs once the 19 days of foundations are counted" (6 + 19 = 25).

### software-maintenance-cost (claims checked: 29)
Arithmetic correct (all table rows; 27 days, $37,800, 18.9%, $3,150; $180k over five years). Node.js LTS 30 months, Google Play Android 16 / API 36 from 31 Aug 2026, VT Digital and Aizecs percentages confirmed.
- "ISO/IEC/IEEE 14764 splits the work into four types" → "classifies the work into categories. The four classic ones are:" (the 2022 edition may define more than four categories; could not verify without the standard).

## Needs expert review
1. ISO/IEC/IEEE 14764:2022 maintenance categories (maintenance guide): confirm against a licensed copy whether the current edition has four categories or adds others (for example additive). Wording softened pending that.
2. Stripe (SaaS guide): once Stripe publishes the post-1 October 2026 domestic rate, consider replacing the 1.7% + A$0.30 assumption in the worked example.
3. SaaS guide: the SaaS component table (low to high sums of $60k to $210k) sits awkwardly against a commercial v1 of $100k to $300k and the "25 to 40% of the build" claim at the low end. A writer should decide whether to narrow the component ranges.
4. Several market ranges and percentage splits are author synthesis rather than sourced (app budget shares, AI pattern bands, legacy per-approach bands, enterprise overhead percentages other than VT Digital's). They are labelled as typical ranges, not quotes; flag if the team wants sources for each.
5. Payroll tax on the loaded-cost example assumes a NSW employer above the $1.2M threshold; other states differ. Accountant review optional.
