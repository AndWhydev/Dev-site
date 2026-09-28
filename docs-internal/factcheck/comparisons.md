# Fact-check report: comparisons batch

Checked 28 September 2026. All source URLs in the batch were opened (HTTP 200); one redirected to a generic hub page and one had moved domain (both fixed below). `node scripts/check-content.mjs` shows no ✗ on any page. The remaining "!" flags are "guarantee" used about third parties or "super guarantee", which is fine. No em or en dashes. No github.com links.

## ai-agents-vs-chatbots-vs-automation (claims checked: 14)
Confirmed: Anthropic's agent vs workflow definition and "simplest solution possible" advice (paraphrased, no quote marks); OWASP LLM06:2025, whose three root causes are excessive functionality, permissions and autonomy; APP 1.7 to 1.9 automated decision disclosure from 10 December 2026; NAIC Guidance for AI Adoption has 6 essential practices, one of which is "maintain human control" (the page paraphrases it); MCP described as an open standard. The page is fair: it says rule-based automation is usually the right answer.
Changes: none.

## build-vs-buy-software (claims checked: 16)
Arithmetic checked. Example A subscription: $57,600 in year 1, $260,676 over years 2 to 5, $318,276 over five years, about $70,013 in year 5. Custom total $505k. Example B: about $1.59m. Matrix totals 70 and 103. All correct. Copyright default and APP 8 and APP 11 points are consistent with the sources. Fairness is good: the page opens with "Buy, unless...".
Changes:
- Source "Cloud computing security guidance" at `cyber.gov.au/resources-business-and-government/.../cloud-computing-security-considerations` now redirects to a generic hub. Replaced with "Cloud computing security for tenants": https://www.cyber.gov.au/business-government/protecting-devices-systems/cloud-computing/cloud-computing-security-for-tenants

## flutter-vs-react-native (claims checked: 22)
Confirmed against vendor docs:
- RN 0.82 (8 Oct 2025) is the first release that runs only on the New Architecture.
- RN 0.84 (11 Feb 2026) made Hermes V1 the default, removed Legacy Architecture components and set Node 22 as the minimum.
- RN 0.87 (11 Aug 2026) made the Strict TypeScript API the default.
- RN has shipped a release every two months from 0.80 to 0.87.
- Flutter 3.47 came out on 12 Aug 2026, and Widget Previews graduated to stable in it.
- Impeller has been the default on iOS and Android API 29+ since 3.27, and is the only renderer on iOS.
- The RN docs recommend a framework and name Expo.
- EAS Update is billed by MAU. Shorebird is billed by patch installs.
- Stack Overflow 2025 (all respondents): JavaScript 66%, TypeScript 43.6%, Dart 5.9%.
Changes:
- Rendering row: "Draws every pixel with Impeller" → "Draws every pixel itself (Impeller, with a legacy renderer fallback on older Android devices)". Reason: Flutter docs say Impeller falls back to OpenGL below API 29 or without Vulkan. Source: https://docs.flutter.dev/perf/impeller
- "the ... tools we're usually asked for" → "the ... tools we focus on". Reason: it implied client demand history that we can't evidence for a firm launched in mid 2026.

## freelancer-vs-agency-vs-in-house (claims checked: 20)
Arithmetic checked:
- Super $19,800. Payroll tax 5.45% × $184,800 = $10,072. Workers comp 0.218% ≈ $360. Total $203,232.
- 1,976 − 304 = 1,672 hours, so $203,232 ÷ 1,672 ≈ $122 an hour, or about $115 without payroll tax.
- A solution architect comes out at about $152 an hour, which supports "well above $140".
- Contractor rates of $800 to $1,100 a day ÷ 8 give $100 to $137.50 an hour, which matches the summary.
Rates match research-dev-rates.md (Robert Walters, Re:Sourced, Software Co, Conduct). Copyright Act: s35(6), s196(3) and non-assignable moral rights all confirmed. Compilation No. 65 (C2026C00138) is the latest. The Fair Work whole of relationship test from 26 Aug 2024 and the 10 days of NES personal leave are confirmed. Fairness is good: "if you have years of continuous work ... hire".
Changes: none.

## how-to-choose-a-software-development-company (claims checked: 12)
The ABN (32 698 684 105) and Five Dock address match the site footer and trust page. The company history is stated correctly. The page says plainly that we don't hold ISO or SOC 2. It ranks no competitors.
Changes:
- Quote comparison: "Firm A and Firm B are comparable once discovery is counted. The difference between them comes down to warranty length against code access..." → it now says A is still about $55k cheaper ($155k against $210k), so the choice is price and code access against B's longer warranty. Reason: the original arithmetic claim was wrong ($140k + $15k ≠ ~$210k).

## how-to-choose-an-ai-development-company (claims checked: 15)
Confirmed: the NAIC six practices (accountability, impacts, risk, information, test and monitor, human control); the OAIC AI guidance pages exist at the cited URLs; the AI Directory URL resolves; the scorecard maximum is 9 × 2 = 18. The page says we have no public AI case studies and no ISO 27001, IRAP or partner tiers. No competitor ranking.
Changes:
- Company history order: the paragraph led with the 2026 launch, and SEO-SOP §3 requires 2019 and 2021 first with the 2026 launch at the end. Reordered.

## onshore-vs-offshore-software-development (claims checked: 24)
Rates match the research file (RW, Re:Sourced, Software Co and AppGurus, Accelerance, Upscalix, JSA $2,537/week). Worked example checked: onshore $336k, offshore $120k + $64k + $18k = $202k, hybrid $72k + $128k + $16k = $216k. All correct. Time offsets and overlaps for NZ, the Philippines, Vietnam and Jakarta, India and Eastern Europe are correct.
Changes:
- Latin America "13 to 14" hours behind → "13 to 16". Reason: Brazil and Argentina (UTC−3) are 13 hours behind AEST, Colombia (UTC−5) 15 and Mexico City (UTC−6) 16.
- "narrow the cost gap ... without sending your data or code overseas" → "... while keeping your systems and data in Australian cloud regions by default". Reason: the delivery pipeline uses AI coding agents, and the model APIs they call may process code offshore. We can't evidence "code never leaves Australia" (see expert review).

## rag-vs-fine-tuning (claims checked: 14)
Confirmed:
- OpenAI's pricing page says it is "winding down the fine-tuning platform", that it is no longer open to new users, and that fine-tuned models stay available until their base models are deprecated.
- Azure Foundry lists Standard fine-tuning regions as US and Sweden Central only. Global training is available in Australia East and is "more affordable" but doesn't offer data residency.
- The Google page is now titled "Gemini Enterprise Agent Platform". It lists no Australian commitment for any "Tuning for Gemini" row. australia-southeast1 does have commitments for Gemini 3.5 Flash, Gemini 2.5 Flash 128k and text-embedding-004.
- Bedrock offers SFT, RFT and distillation.
- 3,000 × 50,000 = 150M tokens is correct.
Changes:
- Google data residency source URL moved (301): `cloud.google.com/...` → https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/data-residency

## rewrite-vs-refactor-legacy-software (claims checked: 10)
Confirmed: Fowler named the pattern after strangler figs he saw "in the rain forests of Queensland in 2001", and wrote that "users can't wait for new features" (paraphrased on the page). Microsoft's four "might not be suitable when" conditions match the page. The Joel Spolsky Netscape essay and the AWS rehost terminology are correct. The page is fair: it lists "leave it alone" and "buy SaaS" as options.
Changes: none.

## low-code-vs-custom-development (claims checked: 18)
Confirmed:
- Power Apps is priced per user per month in AUD: Premium AU$29.90, and AU$18.00 at 2,000+ seats. There is a free Developer plan.
- Each Premium licence includes 250 MB of Dataverse database.
- The limit is 40,000 requests per Premium user per 24 hours.
- Environments are bound to their region, and Australian tenants can create environments in Australia.
- Bubble bills by workload units. It has no source code export, but offers a JSON logic export plus CSV and API data export. Dedicated instances can choose a hosting region.
Three-year arithmetic checked: $43,200 and $432,000, against custom at $87k to $145k. The conclusions hold.
Changes:
- Bubble mobile "Native iOS and Android on paid plans" → "Native iOS and Android apps; publishing to the stores needs a paid plan". Reason: Bubble pricing says you can build on Free and need a paid plan to deploy. Source: https://bubble.io/pricing
- "we often migrate successful low-code apps into code" → "we can migrate a successful low-code app into code". Reason: it claimed a track record we can't evidence.

## Needs expert review
1. **Onshore page and Overseer data flow:** does the AI coding agent pipeline send client code to model APIs hosted outside Australia? If it does, the other pages that say "Australian cloud regions by default" are fine (they refer to where client systems are hosted). But no page should claim code never leaves Australia, and APP 8 or client NDAs may need a note.
2. **IP timing consistency:** both how-to-choose guides tell buyers to seek IP assignment "on payment for each milestone", while AWL's own terms say IP transfers "on completion". This is not false, but a lawyer (Square Legal) should confirm the MSA wording and decide whether the guides or the terms should change.
3. **Copyright ownership nuance** (build-vs-buy, freelancer, how-to-choose): "the developer owns copyright unless assigned in writing" is correct for contractors and agencies under s35 and s196(3). Whether any implied licence or equitable assignment might apply is a legal nuance for a lawyer, not a factual error.
