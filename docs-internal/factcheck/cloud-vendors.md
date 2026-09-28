# Fact-check report: cloud-vendors batch

Checked 28 September 2026 against vendor documentation, pricing pages and government sources (fetched directly; web search budget was exhausted). All ten pages pass `node scripts/check-content.mjs`. `published` and `updated` were not changed.

Totals: about 390 claims checked, 36 edits across 10 pages. Every piece of arithmetic in the worked examples was recomputed and is correct.

---

## 1. data-residency-vs-data-sovereignty (about 30 claims)

Changes:
- FAQ, Hosting Certification Framework scope. Before: "for classified or highly sensitive government data, agencies look to providers certified under the government's Hosting Certification Framework". After: "for sensitive government data, whole-of-government systems and PROTECTED systems, Australian Government agencies use providers certified under the Hosting Certification Framework". Source: https://www.hostingcertification.gov.au/framework
- Body, HCF. Before: "Federal agencies handling sensitive or classified data use hosting providers certified under the Digital Transformation Agency's Hosting Certification Framework." After: agencies hosting sensitive data, whole-of-government systems or PROTECTED systems use HCF-certified providers; the framework is now administered by the Department of Home Affairs (moved from the DTA on 1 May 2023); at the time of writing it is under reform and new certification registrations have been paused since 3 November 2025. Sources: https://www.hostingcertification.gov.au/framework, https://www.hostingcertification.gov.au/
- Source publisher for the HCF: "Digital Transformation Agency" → "Department of Home Affairs".
- CLOUD Act agreement. Before: a general description with no dates. After: names the AUS-US Data Access Agreement, signed 15 December 2021 and in force since 30 January 2024, which covers orders for data held by communications providers for serious crime and national security purposes, and says US authorities can't intentionally target Australian citizens, permanent residents or people in Australia under it. Source: https://www.ag.gov.au/international-relations/international-crime-cooperation-arrangements/international-production-order-framework
- Dead source URL (404): the old ag.gov.au CLOUD Act page → the AG international production order framework page above.
- Abuse monitoring. Before: "Some services keep samples for human review in another region". After: some services keep flagged prompts for human review and the reviewers may be outside Australia. Azure stores abuse data in the resource's geography; only EEA reviewer location is guaranteed. Source: https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy

Confirmed: APP 8 accountability, the My Health Records Act onshore rule, AWS, Azure and Google Cloud Australian regions, and the CLOUD Act 2018.

## 2. ai-data-sovereignty-australia (about 55 claims)

Changes:
- Summary: "Azure and Google Vertex AI offer Australian geography endpoints for some models" → "offer Australian processing for a short list of models".
- Azure table row and OpenAI FAQ now say what Microsoft actually lists for Australia East. Standard (regional) covers only gpt-4.1-mini, gpt-4o (2024-11-20) and the OpenAI embedding models. Regional Provisioned adds gpt-5, gpt-5.1, gpt-5.2, gpt-5.4, o3 and o3-mini. GPT-5.6 and GPT-6 are Global only. Source: https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure-region-availability
- Google row: Before: Australian locational endpoints for "models Google lists as supported". After: Google commits to Australian ML processing only for Gemini 3.5 Flash, Gemini 2.5 Flash (128k) and text-embedding-004. It has no Australian commitment for newer Gemini models or partner models such as Claude. The row also notes that Vertex AI is now part of Gemini Enterprise Agent Platform. Source: https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/data-residency
- OpenAI row: adds that the Australian storage endpoint requires approval for Modified Abuse Monitoring or Zero Data Retention. Source: https://developers.openai.com/api/docs/guides/your-data
- Source URLs updated to their current (redirected) locations: Azure deployment types, Azure region availability (replacing the model overview page), Google data residency, and the Claude data residency page (now /docs/en/manage-claude/data-residency).

Confirmed against the Bedrock regional table: Opus 5.5, Opus 5, Sonnet 5, Opus 4.8 (and 4.7) and Haiku 4.5 run in-Region in Melbourne. The Australian geo profile is available from Sydney and Melbourne for several models (Sonnet 5 from Melbourne only). Nova Pro, Lite and Micro run in-Region in Sydney, as do Mistral, Qwen3, gpt-oss, DeepSeek and GLM. Fable 5.1, Mythos 5.1 and GPT-5.6 are global only. Geo cross-Region calls are priced at the source Region's rate. Also confirmed: Azure data zones (US, EU and APAC, "without prior notice"), Claude API inference_geo (us or global) with US-only workspace geo, and the usage object returning inference_geo.

## 3. bedrock-vs-azure-openai-vs-vertex-australia (about 60 claims)

Changes:
- Source URLs updated. The Google data residency and data governance pages moved to docs.cloud.google.com/gemini-enterprise-agent-platform/...; the Azure OpenAI pricing page moved to /pricing/details/azure-openai/.

Confirmed: every row of the onshore model table (Azure Standard vs Regional Provisioned lists, Vertex Australian list, Bedrock embeddings and open-weight models in Sydney). Also confirmed: Azure fine-tuning regions (Global training in Australia East has no residency), Bedrock abuse detection (ZDR by default; GPT-5.4+ keeps flagged traffic and Fable 5/5.1 keeps all traffic for up to 30 days, stored in the destination Region), CloudTrail logging in the source Region, Google grounding logs kept up to 3 days with no opt-out, and the training commitments of all three vendors.

## 4. chatgpt-vs-claude-vs-copilot-for-business (about 45 claims)

Changes:
- Advanced Data Residency. Before: "must cover every eligible seat". After: "must cover every eligible paid Microsoft 365 seat in the tenant". Source: https://learn.microsoft.com/en-us/microsoft-365/enterprise/advanced-data-residency
- Copilot licensing source URL updated to its current location.

Confirmed:
- Microsoft: no training on prompts or Graph data; queries from outside the EU may be processed in the US, EU or other regions; Bing receives web queries; Anthropic models are a subprocessor.
- OpenAI: the ChatGPT "isn't universal" quote is verbatim.
- Anthropic commercial terms: "Anthropic may not train models on Customer Content".
- Claude plans: Team is per seat (standard and premium); Enterprise is US$20 per seat plus usage at API rates; SCIM and audit logs are Enterprise only.

## 5. copilot-vs-custom-ai-assistant (about 35 claims)

Changes:
- Copilot licensing source URL updated.

Confirmed: the prerequisite plans (E3, E5, Business Standard, Business Premium), 100% seat coverage for ADR, the "content of interactions" commitment (prompts, responses and citations), and Copilot Credits (pay-as-you-go, prepurchase and prepaid packs).

## 6. open-weight-vs-api-llms (about 30 claims)

Changes:
- Mistral source URL moved to https://docs.mistral.ai/models.

Confirmed:
- gpt-oss-120b: 117B parameters, fits on one 80 GB GPU, Apache 2.0.
- Qwen3-32B: Apache 2.0.
- Mistral: Small 4, Large 3 and Ministral 3 are Apache 2.0; Medium 3.5 is Modified MIT.
- Llama 4: listed on Bedrock only in US regions.
- Break-even arithmetic: $7,300 + $3,333 ≈ $10,600; ÷ $5 per million ≈ 2.1 billion tokens.

## 7. vector-database-comparison (about 40 claims)

Changes:
- Weaviate managed options. Before: "Serverless and Dedicated Cloud". After: "Weaviate Cloud: Flex (shared), Premium (shared or dedicated)". Before (body): serverless and dedicated deployments, with a broad region set "on Premium". After: shared deployments (Flex, Premium) and dedicated (Premium), billed on vector dimensions plus storage and backups, with 7 regions on the shared tiers and about 40 on Premium dedicated. Source: https://weaviate.io/pricing
- Pinecone BYOC: "only operational metrics" → "only operational metrics and traces". Source: https://docs.pinecone.io/guides/production/bring-your-own-cloud

Confirmed:
- Pinecone: serverless regions and plan support (Starter is us-east-1 only), $50 and $500 minimums, BYOC is Enterprise only.
- Qdrant: resource-based pricing; Hybrid Cloud is on the Enterprise plan and sends only telemetry.
- pgvector: version 0.8.2 on RDS PostgreSQL 17 and 18; extensions don't upgrade automatically with the engine.
- Storage arithmetic: 400,000 × 1,536 × 4 bytes ≈ 2.46 GB.

## 8. n8n-vs-make-vs-zapier (about 45 claims)

Changes:
- n8n Cloud location. Before: "in the EU (Frankfurt)" and "n8n Cloud runs in Frankfurt". After: hosted on Microsoft Azure in the EU. n8n doesn't publish a city. Added the source https://n8n.io/legal/security/
- Make custom functions. Before: "Custom functions on Enterprise". After: "Custom JavaScript functions (plan-dependent; check the current plan table)". Make restructured its plans into Free, Make plan and Enterprise (credits have been the billing unit since 27 August). The live page appears to include custom functions on the Make plan, but the September 2026 archive showed them on Enterprise only. Source: https://www.make.com/en/pricing

Confirmed:
- Zapier: plans; 100 free tasks and two-step Zaps; 9,000+ apps; triggers, filters, paths and Formatter don't use tasks; hosted on AWS in the US.
- Make: 1,000 free credits; credit = module action; 3,000+ apps; US or EU data centre, fixed at creation; on-prem agent.
- n8n: Starter, Pro, Business and Enterprise; per-execution billing; list of features excluded from Community edition.
- Unit-count arithmetic.

## 9. llm-running-costs (about 60 claims)

Changes:
- Takeaway: "10% of the normal input price ... on most Claude and GPT models" → "10% or less ... on current Claude and GPT models". Opus 5.5 cache reads are 5% and Fable 5.1 reads are 2.5%. Source: https://platform.claude.com/docs/en/about-claude/pricing
- Long context bullet: added that the OpenAI GPT-6 prices in the table are short context rates and long context requests cost more. Source: https://developers.openai.com/api/docs/pricing

Confirmed:
- Claude API prices: Fable 5.1, Opus 5.5, Sonnet 5 and Haiku 4.5, including cache rates.
- OpenAI GPT-6 Luna, Sol and Astra prices; the 10% regional processing uplift for models from 5 March 2026; text-embedding-3-small at $0.02.
- 50% batch discount on both providers; the Bedrock regional 10% premium; the "about 30% more tokens" tokeniser note; 1M context at standard rates.
- Bedrock Mistral Large 3: $0.515/$1.545 in Sydney vs $0.50/$1.50 in US East.
- EC2 on-demand, Sydney vs N. Virginia: g6.xlarge $1.0464 vs $0.8048; g6.12xlarge $5.98299 in Sydney; p5.48xlarge $71.552 vs $55.04 (AWS price list API).
- RBA rate on 25 September 2026: 0.7019.
- All worked-example steps: 2,520 → 1,206 → 905 → 452; AUD conversions; 52%, 64% and 82% savings; ×1.1 = 996; $4,368 a month; 5.7 billion tokens.

## 10. tokens-and-context-windows (about 40 claims)

Changes:
- Context windows. Before: "a 1 million token window for its current Claude models and 200,000 tokens for some older ones". After: 1M for most current models (Fable 5.1, Opus 5.5, Sonnet 5); 200k for Claude Haiku 4.5 and older models such as Sonnet 4.5. Source: https://platform.claude.com/docs/en/build-with-claude/context-windows
- OpenAI caching. Before: "1,024-token minimum on its newest models". After: 1,024-token minimum on GPT-5.6 and later, and on those models cache writes cost 1.25x the input price. Source: https://developers.openai.com/api/docs/guides/prompt-caching

Confirmed: the quotes "working memory", "As token count grows, accuracy and recall degrade" and "varies by language and content type" are all verbatim. Also confirmed: OpenAI's " tokenization" example; the 4 characters or 0.75 words rule; Gemini's 60 to 80 words per 100 tokens, 258 tokens per image and 32 tokens per second of audio; all table and cost arithmetic.

---

## Company-truthfulness check
No breaches found. No invented clients, metrics, certifications or partner tiers, and no compliance guarantees. The claim "don't hold partner status with any of them" (page 3) is accurate.

## Needs expert review
1. **Microsoft naming.** Microsoft's licensing and privacy pages now say "Microsoft Copilot" (with Microsoft 365 E7 including it), while the data residency page still says "Microsoft 365 Copilot". Decide whether to rename across the Copilot pages.
2. **"Vertex AI" branding.** Google now markets it as Gemini Enterprise Agent Platform (formerly Vertex AI). The pages keep "Vertex AI", including slugs and titles, with notes added. Decide whether to retitle.
3. **Make plan features.** Confirm in the live pricing table whether custom functions are on the Make plan or Enterprise only. The cell is now phrased neutrally.
4. **ChatGPT Enterprise Australian data residency.** OpenAI's help and enterprise privacy pages block automated fetching, so this couldn't be verified. The pages already say "confirm for your plan". A person should check whether Australia is now a ChatGPT Enterprise residency region.
5. **HCF reform.** The framework is paused pending reform. Recheck the residency explainer when Home Affairs publishes the reformed framework.
6. **Retrieval date.** All availability and price snapshots come from vendor pages fetched on 28 September 2026. They should be rechecked before the next content update.
