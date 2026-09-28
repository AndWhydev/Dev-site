# Fact-check report: services batch

Checked 28 September 2026. 12 Astro pages. All edited files re-parsed with the `const data` Function check (all "parses ok"); no em/en dashes or github.com links in any file. `useCases` is empty on every page. No invented clients, outcomes, metrics, certifications or team size found. Overseer is described only as in the writer brief (agent page, description and FAQ). Web search budget was exhausted, so verification used direct fetches of primary pages.

Shared sources used:
- MCP spec (current version 2026-07-28): https://modelcontextprotocol.io/specification/latest , /specification/versioning , /specification/2026-07-28/basic/transports , /specification/2026-07-28/basic/authorization
- Linux Foundation AAIF announcement (9 Dec 2025): https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation
- Claude MCP connector (beta): https://platform.claude.com/docs/en/agents-and-tools/mcp-connector
- Bedrock regional table: https://docs.aws.amazon.com/bedrock/latest/userguide/models-region-compatibility.html
- Textract endpoints: https://docs.aws.amazon.com/general/latest/gr/textract.html
- OAIC APP 1 guidelines: https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information
- Guidance for AI Adoption: https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-foundations ; VAISS page: https://www.industry.gov.au/publications/voluntary-ai-safety-standard
- Node.js releases: https://nodejs.org/en/about/previous-releases ; Python versions: https://devguide.python.org/versions/
- MYOB Acumatica: https://www.myob.com/au/erp-software/products/myob-acumatica
- Cost guides in src/content/guides/ (discovery $10k to $25k; add-AI $10k to $60k per feature, $40k to $150k RAG assistant, $60k to $200k agents; maintenance retainers $1.5k to $15k/month, 24/7 $8k to $30k+)

## ai-agent-development (claims checked: 14)
All confirmed: pricing labelled as typical market ranges, day arithmetic correct at $1,400/day, Overseer wording matches brief, region claim hedged.
- Change: tech list `Azure AI Foundry` → `Microsoft Foundry (formerly Azure AI Foundry)` (product renamed; Microsoft docs now at learn.microsoft.com/azure/foundry).

## mcp-server-development (claims checked: 22)
Confirmed: introduced Nov 2024; contributed to AAIF under Linux Foundation Dec 2025; current spec 2026-07-28; tools/resources/prompts; JSON-RPC 2.0; stdio and Streamable HTTP (single endpoint POST, JSON or request-scoped SSE); OAuth 2.1 resource server; RFC 9728 metadata MUST; audience-bound tokens MUST; no token passthrough; scope challenges; stateless request model; "tools represent arbitrary code execution" and host consent (paraphrased, not quoted); client list (Claude, ChatGPT, Copilot, Gemini, Cursor, VS Code) per LF announcement; stdio uses env credentials.
- Change (x2): "Anthropic's Messages API can connect/call remote MCP servers directly." → adds "through its MCP connector, in beta at the time of writing" / "which is in beta". Source: platform.claude.com MCP connector page (status: beta).

## private-llm-deployment (claims checked: 16)
Confirmed: Bedrock In-Region Sydney listings for DeepSeek, Google (Gemma), Mistral, NVIDIA, OpenAI (gpt-oss), Qwen; cross-region inference can stay in AU geography or go global; APP 8 and APP 11 references.
- Change: "Amazon Bedrock ... announced open-weight models ... in the Asia Pacific (Sydney) region in February 2026." → "Amazon Bedrock's regional availability table ... lists open-weight models from providers including DeepSeek, Google, Mistral, Nvidia, OpenAI and Qwen for In-Region use in Asia Pacific (Sydney) at the time of writing." (Announcement date could not be verified; current table verified.)
- Change: FAQ "AWS has announced open-weight models ... on Amazon Bedrock in Sydney." → "Amazon Bedrock's regional availability table lists open-weight models from DeepSeek, Google, Mistral, Nvidia, OpenAI, Qwen and others for In-Region use in Sydney."
- Change: Foundry rename in tech list.

## ai-readiness-assessment (claims checked: 12)
Confirmed: APP 1 ADM transparency commences 10 December 2026 (OAIC); six practices in Guidance for AI Adoption; pricing $10k to $25k matches discovery range in custom-software cost guide; day arithmetic correct.
- Change: Foundry rename in tech list.

## ai-document-processing (claims checked: 11)
Confirmed: Textract endpoint in ap-southeast-2; ADM paraphrase; pricing labelled.
- Change: "Amazon Textract has been available in the AWS Sydney region since December 2019." → "AWS lists an Amazon Textract endpoint in its Sydney region." (start date unverifiable).
- Change: FAQ "Document services such as Amazon Textract are available in the AWS Sydney region," → "At the time of writing (September 2026), document services such as Amazon Textract have an endpoint in the AWS Sydney region,".

## ai-governance (claims checked: 15)
Confirmed: ISO/IEC 42001 disclaimer present and correct (we do not offer certification, not a certification body, do not hold it); 42001 published 2023; six practices listed correctly; ADM obligation wording matches OAIC; general-information note present.
- Change (x3): "to replace / replacing / It replaced the Voluntary AI Safety Standard" → "as updated, simplified guidance that evolves the (2024) Voluntary AI Safety Standard" and added the exact date 21 October 2025. DISR's wording is "evolves"; VAISS remains published.
- Change: "Implementation Practices version" → "Implementation guidance version" (name used on ai.gov.au).

## ai-integration (claims checked: 10)
- Change: pricing aligned with /guides/cost-to-add-ai-to-an-existing-app: single feature `$15k to $45k` → `$10k to $60k` (days 10 to 30 → 7 to 43, plus note that summaries sit low and search/extraction higher); in-app assistant `$45k to $120k` → `$40k to $150k` (with note that agents doing many tasks cost more); programme `$120k+` → `$150k+`.
- Change: tech list `AWS Bedrock` → `Amazon Bedrock`.

## software-maintenance-support (claims checked: 12)
Confirmed: 15 to 20% planning figure and retainer ranges consistent with /guides/software-maintenance-cost; Node LTS 30 months total; Python about five years.
- Change: Node/Python sentence dated ("At the time of writing (September 2026) ... Node.js says each LTS release typically receives critical fixes for a total of 30 months ... bugfix and then security releases for about five years"). Node.js announces an annual cycle from Node 27, so this is time-sensitive.
- Change: LTS definition dated in the same way.
- Change: "Patching applications is one of the ASD Essential Eight strategies" → "Patch applications is one of the ASD Essential Eight mitigation strategies" (official strategy name).

## code-audit (claims checked: 8)
Confirmed: Discovery Audit fee credited to build (matches /why-audit); no certification claims; pricing labelled. No changes.

## data-engineering (claims checked: 9)
Confirmed: Australian regions for AWS, Azure, Google Cloud; Privacy Act note and disclaimer present.
- Change: "AI data readiness assessment $15k to $35k" detail now notes it goes deeper than a general AI readiness assessment or paid discovery, "which typically runs $10k to $25k", so it doesn't conflict with the readiness page and cost guide.

## backend-development (claims checked: 8)
- Change: Node/Python support sentence dated and reworded as on the maintenance page.

## industries/manufacturing (claims checked: 9)
Confirmed: SAP Business One Service Layer and DI API; NetSuite SuiteTalk and RESTlets; Dynamics 365 BC and F&O APIs; product name MYOB Acumatica; R&D note says we are not a registered tax agent, no refund promise; stats and useCases empty.
- Change: "the REST and contract-based APIs for MYOB Acumatica" → "the contract-based REST API and OData interface for MYOB Acumatica" (the REST API is the contract-based API; wording was redundant).

## Needs expert review
1. All pricing tiers are typical market planning ranges derived from a $1,400/day figure, not sourced market data. Andy should confirm he is comfortable with each tier, especially the new AI integration ranges and the $15k to $35k data readiness tier.
2. Privacy Act ADM: pages say extracting data is not itself a decision but auto-approving a claim "may be". That is a fair reading of APP 1.7 to 1.9 but should be checked by a privacy lawyer (e.g. Square Legal).
3. MYOB Acumatica integration routes and any MYOB developer programme or licence requirements for API access in ANZ should be confirmed with an Acumatica partner. The Acumatica help site blocked fetching.
4. MCP client support list (Copilot, Gemini and so on) comes from the Dec 2025 LF announcement; feature support varies by client, and the page already says so.
