# SEO page plan (September 2026)

Master list of pages being built under SEO-SOP.md. Every URL here will exist, so any page may link to any other. Existing site URLs are listed at the bottom.

Legend: **Q** = target query. **Flag** = credibility constraint (see SOP section 3).

## Guides: cost (`/guides/<slug>`, category `cost`, disclaimer `financial`)

| Slug | Title / Q | Notes |
|---|---|---|
| custom-software-development-cost-australia | How much does custom software cost in Australia? | Ranges by project size, what drives cost, onshore vs offshore rates, discovery, ongoing costs. |
| app-development-cost-australia | How much does it cost to build an app in Australia? | Saturated query: differentiate with business/enterprise apps, integrations, backend, maintenance, Flutter vs native cost. |
| ai-development-cost-australia | How much does AI development cost in Australia? | Proof of concept vs production, build vs API, run costs, data prep. |
| ai-chatbot-cost-australia | How much does an AI chatbot cost in Australia? | Off-the-shelf vs configured platform vs custom vs enterprise agent. Cover the enterprise band small studios skip. |
| rag-knowledge-base-cost | How much does a RAG knowledge base cost? | Almost no AU pages. Ingestion, retrieval, evals, access control, hosting, run costs per 1,000 queries (illustrative, method shown). |
| llm-running-costs | What does it cost to run an LLM in production? | Tokens, caching, model tiers, AU region pricing differences, hosting open-weight models. Show the arithmetic with clearly illustrative prices and a link to live pricing pages. |
| software-developer-rates-australia | Software developer rates in Australia | Employee loaded cost vs contractor vs agency vs offshore. Use ABS/Seek/Hays/Robert Walters/Jora sources where possible. Fair to offshore. |
| mvp-development-cost-australia | How much does an MVP cost in Australia? | Scope levers, no-code MVP, R&D Tax Incentive note (caveated). |
| legacy-modernisation-cost-australia | How much does legacy system modernisation cost in Australia? | By approach (rehost, replatform, refactor, rebuild, replace). |
| saas-development-cost-australia | How much does it cost to build a SaaS product in Australia? | Multi-tenancy, billing, compliance, run costs. |
| enterprise-software-development-cost-australia | Enterprise software development cost in Australia | Integration, security reviews, procurement overheads, governance. |
| workflow-automation-cost | How much does business process automation cost? | n8n/Make/Zapier subscriptions vs custom, maintenance. |
| cost-to-add-ai-to-an-existing-app | How much does it cost to add AI to an existing app? | Common features and their cost drivers. |
| software-maintenance-cost | How much does software maintenance cost per year? | The 15 to 20% of build cost rule of thumb (cite sources), what's included, SLAs. |
| rd-tax-incentive-software-development-cost | How the R&D Tax Incentive affects the cost of building software | disclaimer `tax`. Flag: never promise a refund or headline a percentage; explain mechanism, eligibility gates, registration timing, and to speak to a registered R&D tax agent. |

## Guides: comparisons (`/guides/<slug>`, category `compare`)

| Slug | Title / Q | Notes |
|---|---|---|
| how-to-choose-an-ai-development-company | How to choose an AI development company in Australia | Checklist, questions to ask, evidence to request, red flags. Fair, not self-serving. |
| how-to-choose-a-software-development-company | How to choose a software development company in Australia | Same approach for general software. |
| rag-vs-fine-tuning | RAG vs fine-tuning: which does your business need? | Decision table, cost, data residency, when to combine. |
| copilot-vs-custom-ai-assistant | Microsoft 365 Copilot vs a custom AI assistant | Most common enterprise objection. Say plainly when Copilot is the right answer. |
| chatgpt-vs-claude-vs-copilot-for-business | ChatGPT Enterprise vs Claude vs Microsoft Copilot for Australian businesses | Data handling, residency options, admin controls, pricing basis (link to live pricing, don't hard-code prices that change). Date-stamp. |
| build-vs-buy-software | Build vs buy: custom software or off-the-shelf SaaS? | Total cost of ownership, fit, lock-in, decision matrix. |
| onshore-vs-offshore-software-development | Onshore vs offshore software development for Australian companies | Must be fair: offshore is right for some. Time zones, privacy, IP, communication, total cost. |
| ai-agents-vs-chatbots-vs-automation | AI agents vs chatbots vs workflow automation | Definitions, when each fits, examples. |
| bedrock-vs-azure-openai-vs-vertex-australia | AWS Bedrock vs Azure OpenAI vs Google Vertex AI for Australian data residency | Region availability "at time of writing", link to vendor availability pages, governance features, data use policies. |
| n8n-vs-make-vs-zapier | n8n vs Make vs Zapier (and when to go custom) | Pricing models, self-hosting (n8n), data residency, limits. |
| flutter-vs-react-native | Flutter vs React Native in 2026 | Fair; AWL builds Flutter, say when React Native is better. |
| freelancer-vs-agency-vs-in-house | Freelancer vs agency vs in-house developers | Cost, risk, continuity. |
| fixed-price-vs-time-and-materials | Fixed price vs time and materials software contracts | Explain paid discovery then fixed price model as one option. |
| rewrite-vs-refactor-legacy-software | Rewrite vs refactor: what to do with legacy software | Strangler fig, risk, decision criteria. |
| vector-database-comparison | pgvector vs Pinecone vs Weaviate vs Qdrant | Hosting options incl. AU regions, cost model, when each fits. |
| open-weight-vs-api-llms | Open-weight models vs API models for Australian enterprises | Llama, Mistral, Qwen etc. vs hosted APIs; sovereignty, cost, capability. |
| low-code-vs-custom-development | Low-code (Power Apps, Bubble) vs custom development | When low-code wins, where it breaks. |
| software-development-contract-checklist | What to check before signing a software development contract in Australia | disclaimer `legal`. IP assignment, moral rights, source code access/escrow, warranties, exit, liability caps, privacy. Link /MSA and /NDA. |

## Guides: explainers (`/guides/<slug>`, category `explainer`)

| Slug | Title / Q |
|---|---|
| what-is-rag | What is RAG (retrieval-augmented generation)? |
| what-is-a-vector-database | What is a vector database? |
| what-are-embeddings | What are embeddings in AI? |
| what-is-llm-fine-tuning | What is LLM fine-tuning, and when don't you need it? |
| what-is-an-ai-agent | What is an AI agent? (agentic AI explained) |
| what-is-mcp | What is MCP (Model Context Protocol)? |
| ai-hallucinations | Why AI hallucinates and how to reduce it in business systems |
| prompt-injection | What is prompt injection and how do you defend against it? |
| llm-evaluation | How to evaluate an LLM application before launch |
| tokens-and-context-windows | Tokens and context windows explained (and why they drive cost) |
| strangler-fig-pattern | What is the strangler fig pattern? |
| software-discovery-phase | What is a discovery phase in software development? |
| technical-uncertainty-rd-tax-incentive | What counts as technical uncertainty for the R&D Tax Incentive? (disclaimer `tax`) |
| software-and-ai-glossary | Software and AI glossary for non-technical buyers (40 to 60 terms, each 1 to 3 sentences, linking to the explainers) |
| data-residency-vs-data-sovereignty | DONE (exemplar) |

## Guides: Australian rules and programs (`/guides/<slug>`, category `australia`, disclaimer `legal` unless noted)

Verify every date and obligation against the primary source (OAIC, legislation.gov.au, APRA, ASD cyber.gov.au, DTA, DISR industry.gov.au, business.gov.au, ATO). Date-stamp.

| Slug | Title / Q | Notes |
|---|---|---|
| privacy-act-automated-decision-making | Privacy Act automated decision-making rules from 10 December 2026 | Engineering view: decision inventories, logging, privacy policy disclosure. Verify commencement date. |
| privacy-act-and-ai | Using personal information in AI systems under the Privacy Act | OAIC guidance on AI products and training (Oct 2024), APPs. |
| ai-data-sovereignty-australia | AI data sovereignty in Australia: which models can run onshore? | Date-stamped, vendor links; complements the residency explainer. |
| is-there-an-ai-act-in-australia | Is there an AI Act in Australia? AI regulation in 2026 | Current landscape; update often. |
| guidance-for-ai-adoption | Australia's Guidance for AI Adoption: the six essential practices explained | Replaced the Voluntary AI Safety Standard (verify date). |
| australian-ai-ethics-principles | Australia's AI Ethics Principles in practice | How to build to the 8 principles. |
| dta-ai-policy-government | The DTA policy for responsible use of AI in government: what agencies and suppliers must do | Verify version and deadlines (15 Dec 2026 per research). Flag: no panel claims. |
| notifiable-data-breaches-software | The Notifiable Data Breaches scheme: what it means for software you build | |
| rd-tax-incentive-software-development | R&D Tax Incentive for software development: what qualifies | disclaimer `tax`. Exclusions for software for internal administration, core vs supporting activities, registration with AusIndustry. Flag rules apply. |
| rd-tax-incentive-ai-projects | R&D Tax Incentive for AI and machine learning projects | disclaimer `tax`. |
| apra-cps-234-ai | APRA CPS 234 and AI systems: what vendors need to provide | Flag: don't claim to make clients compliant. |
| apra-cps-230-ai-vendors | APRA CPS 230 and AI vendors | Commenced 1 July 2025; pre-existing contracts transition to 1 July 2026 (verify). |
| irap-explained | IRAP explained for software buyers and SaaS vendors | Flag: AWL is not an IRAP assessor and has no IRAP-assessed system. |
| essential-eight-software-development | The Essential Eight for custom software projects | ASD maturity model; practical engineering angle. |
| selling-software-to-australian-government | How to sell software to Australian government | BuyICT, state schemes. Flag: no panel claims. disclaimer `none`. |

## Solutions (`/solutions/<slug>`), industry × service where the industry changes the substance

`industry` frontmatter links to the existing industry page. Flag for all: no invented clients or outcomes; say what we'd do.

| Slug | Title / Q | industry.href |
|---|---|---|
| ai-for-financial-services | AI development for APRA-regulated financial services | /industries/finance-fintech |
| ai-in-healthcare | AI and software development for Australian healthcare | /industries/healthcare (Flag: no ADHA conformance or TGA claims; explain the boundaries) |
| ai-for-law-firms | AI for Australian law firms: document review, precedent search and matter knowledge | /industries/ai-automation |
| ai-for-accounting-firms | AI for accounting and advisory firms in Australia | /industries/finance-fintech |
| insurance-claims-automation | AI claims and document automation for Australian insurers | /industries/finance-fintech |
| government-ai-and-software | AI and software development for Australian government | /industries/government-enterprise (Flag: no panel, IRAP or clearance claims) |
| construction-software-and-ai | Construction software and AI in Australia | /industries/construction-trades |
| logistics-software-development | Logistics and transport software in Australia | /industries/logistics-transport |
| professional-services-knowledge-base | AI knowledge bases for professional services firms | /industries/ai-automation |
| ai-for-not-for-profits | AI for Australian not-for-profits | /industries/ai-automation |
| education-rto-software | Software for Australian RTOs and education providers | /industries/education |

## Locations (`/locations/<slug>`)

Every non-Sydney page states in the first paragraph: Sydney-based team, delivering remotely, on site for workshops when needed. Genuinely local content only (state procurement, state privacy/records law, time zone, local industries). No fake addresses.

| Slug | Title / Q | city / state |
|---|---|---|
| sydney-ai-development | AI development company in Sydney | Sydney / NSW |
| sydney-custom-software-development | Custom software development in Sydney | Sydney / NSW |
| australia-wide | Software and AI development across Australia: how remote delivery works | Australia / National |
| canberra | AI and software development for Canberra and federal agencies | Canberra / ACT |
| melbourne | AI and software development for Melbourne businesses | Melbourne / VIC |
| brisbane | AI and software development for Brisbane and Queensland | Brisbane / QLD |

## New service pages (`/services/<slug>`, built with ServicePageLayout, `.astro` files)

| Slug | serviceName / Q |
|---|---|
| ai-agent-development | AI agent development (Q: AI agent development company Australia) |
| mcp-server-development | MCP server development |
| private-llm-deployment | Private LLM deployment (sovereign, in your cloud account) |
| ai-readiness-assessment | AI readiness assessment (productised discovery) |
| ai-document-processing | AI document processing and data extraction |
| ai-governance | AI governance and responsible AI engineering (Flag: no ISO 42001 certification services) |
| ai-integration | Adding AI to existing software |
| software-maintenance-support | Software maintenance and support |
| code-audit | Code audit and technical due diligence (link /why-audit) |
| data-engineering | Data engineering and AI data readiness |
| backend-development | Node.js and Python backend development (fixes an orphaned nav item) |

## Other pages

| URL | Purpose |
|---|---|
| /editorial-policy | How we write and research: AI-assisted drafting, primary sources, dates, corrections, no invented claims. |
| /team/andy-taleb | Founder profile with Person schema (ProfilePage). LinkedIn sameAs only; no GitHub. |
| /industries/manufacturing | Missing industry page (IndustryPageLayout). |

## Existing URLs available to link to

Services: /services, /services/ai-chatbot, /services/api-development, /services/blockchain-development, /services/cloud-infrastructure, /services/custom-app-development, /services/cybersecurity, /services/data-analytics, /services/database-architecture, /services/defi-platform, /services/deployment, /services/enterprise-software, /services/flutter-development, /services/legacy-modernisation, /services/llm-integration, /services/qa-testing, /services/rag-knowledge-base, /services/react-nextjs, /services/saas-development, /services/smart-contracts, /services/ui-ux-design, /services/web-mobile-apps, /services/workflow-automation

Industries: /industries, /industries/ai-automation, /industries/construction-trades, /industries/education, /industries/finance-fintech, /industries/government-enterprise, /industries/healthcare, /industries/hospitality, /industries/logistics-transport, /industries/real-estate, /industries/retail-ecommerce, /industries/sports-recreation, /industries/web3-crypto

Other: /ai-consulting, /digital-transformation, /staff-augmentation, /startup-mvp, /methodology, /r-and-d, /trust, /why-audit, /MSA, /NDA, /about, /our-journey, /contact, /technology-radar, /guides, /solutions, /locations
