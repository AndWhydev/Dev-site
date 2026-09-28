---
title: "Software and AI glossary for non-technical buyers"
metaTitle: "Software and AI Glossary for Non-Technical Buyers"
description: "Plain-English definitions of 59 software and AI terms buyers meet in proposals and contracts, from RAG and tokens to fixed price, IRAP and the Essential Eight."
eyebrow: "Glossary"
category: explainer
published: 2026-09-28
updated: 2026-09-28
summary: "This glossary defines 59 terms that non-technical buyers meet when commissioning software and AI in Australia, each in one to three plain sentences. Terms are grouped into AI and machine learning, data, architecture and infrastructure, delivery and contracts, security and compliance, and Australian terms, with links to fuller explainers and guides where they exist."
takeaways:
  - "Most confusion in software proposals comes from a handful of pairs: RAG vs fine-tuning, residency vs sovereignty, proof of concept vs MVP, fixed price vs time and materials."
  - "AI costs are measured in tokens, and what fits in a request is limited by the context window, so both terms appear in any serious AI proposal."
  - "Contract terms such as IP assignment, acceptance criteria and change requests matter as much to project outcomes as technical ones."
  - "Australian terms such as the APPs, the NDB scheme, the Essential Eight and IRAP describe obligations and frameworks; a supplier can explain them without holding any certification."
faqs:
  - q: "Why does a glossary matter when buying software?"
    a: "Because proposals from different suppliers use the same words to mean different things. Knowing what a term should mean lets you ask whether a quote includes it, for example whether \"testing\" means automated tests, an LLM evaluation suite, or a quick check before launch."
  - q: "Which terms should I check most carefully in a proposal?"
    a: "Scope, acceptance criteria, change request process, IP assignment, source code access, warranty period and what maintenance covers. These decide what you get and what it costs when things change."
  - q: "Is an AI chatbot the same as an AI agent?"
    a: "Not quite. A chatbot answers questions in conversation. An agent can also take actions, such as looking up records, updating systems or sending messages, and decide the steps itself. Agents are more capable and carry more risk."
  - q: "Do I need to understand these terms in depth?"
    a: "No. You need enough to ask good questions and to notice when a proposal is vague. The linked explainers go deeper on the terms that most affect cost and risk."
sources:
  - title: "OWASP GenAI LLM Top 10 2026"
    url: "https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/"
    publisher: "OWASP Gen AI Security Project"
  - title: "Context windows"
    url: "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    publisher: "Anthropic"
  - title: "Strangler Fig"
    url: "https://martinfowler.com/bliki/StranglerFigApplication.html"
    publisher: "Martin Fowler"
  - title: "About the Notifiable Data Breaches scheme"
    url: "https://www.oaic.gov.au/privacy/notifiable-data-breaches/about-the-notifiable-data-breaches-scheme"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Australian Privacy Principles, APP 8: Cross-border disclosure of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Essential Eight explained"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-explained"
    publisher: "Australian Signals Directorate, ACSC"
  - title: "Infosec Registered Assessors Program (IRAP)"
    url: "https://www.cyber.gov.au/irap"
    publisher: "Australian Signals Directorate, ACSC"
  - title: "Operational risk management (CPS 230)"
    url: "https://www.apra.gov.au/operational-risk-management"
    publisher: "Australian Prudential Regulation Authority"
  - title: "Conducting core R&D activities for the R&D Tax Incentive"
    url: "https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/check-if-you-are-eligible-for-the-randd-tax-incentive/conducting-core-activities"
    publisher: "business.gov.au"
  - title: "AI Risk Management Framework"
    url: "https://www.nist.gov/itl/ai-risk-management-framework"
    publisher: "National Institute of Standards and Technology"
related:
  - title: "What is RAG (retrieval-augmented generation)?"
    href: "/guides/what-is-rag"
  - title: "What is a discovery phase in software development?"
    href: "/guides/software-discovery-phase"
  - title: "Tokens and context windows explained"
    href: "/guides/tokens-and-context-windows"
  - title: "What to check before signing a software development contract"
    href: "/guides/software-development-contract-checklist"
  - title: "All guides"
    href: "/guides"
service:
  title: "AI consulting"
  href: "/ai-consulting"
disclaimer: none
---

## How to use this glossary

**This page defines the software and AI terms that appear most often in proposals, contracts and vendor conversations, in plain language.** Each entry is one to three sentences. Where we've written a fuller explainer or guide, the term links to it.

The definitions describe how the terms are generally used in the Australian market in 2026. Suppliers sometimes use them differently, so when a word matters to price or risk, ask what it means in that specific proposal.

## Terms people most often confuse

**A few pairs of terms cause most of the misunderstandings in software and AI projects.** If you only read one section, read this one.

| Often confused | The difference in one line |
|---|---|
| RAG vs fine-tuning | RAG looks up your documents at question time; fine-tuning changes the model's behaviour through extra training |
| Chatbot vs AI agent | A chatbot answers; an agent also takes actions and chooses its own steps |
| Data residency vs data sovereignty | Residency is where data is stored; sovereignty is whose laws can reach it |
| Proof of concept vs MVP | A proof of concept tests whether something can work; an MVP is the smallest version real users can use |
| Fixed price vs time and materials | Fixed price sets the cost for a defined scope; time and materials bills for hours actually worked |
| Monolith vs microservices | One application deployed as a unit, versus many small services deployed independently |
| Penetration test vs code audit | A pen test attacks the running system; a code audit reviews the source code and architecture |
| Hallucination vs prompt injection | A hallucination is the model making something up; prompt injection is someone deliberately manipulating it |

## AI and machine learning

**Artificial intelligence (AI).** Software that performs tasks normally associated with human judgement, such as understanding language, recognising images or making predictions. In business conversations in 2026, "AI" usually means systems built on large language models.

**Machine learning.** A way of building software that learns patterns from examples rather than following hand-written rules. Fraud scoring, demand forecasting and document classification are common business uses.

**Large language model (LLM).** A machine learning model trained on very large amounts of text to predict and generate language. Claude, GPT and Gemini models are LLMs; see our [LLM integration service](/services/llm-integration).

**Open-weight model.** A model whose trained parameters are published so you can run it on your own servers or cloud account, such as Llama, Mistral or Qwen models. Compare the trade-offs in [open-weight vs API models](/guides/open-weight-vs-api-llms) and [private LLM deployment](/services/private-llm-deployment).

**Token.** The unit of text a model reads and writes, roughly three quarters of an English word. Providers bill per token; see [tokens and context windows explained](/guides/tokens-and-context-windows).

**Context window.** The maximum amount of text, measured in tokens, a model can consider in a single request, including its reply. Anthropic describes it as the model's working memory.

**Prompt and system prompt.** A prompt is the input sent to a model. The system prompt is the standing set of instructions the application sends with every request to define the model's role, rules and tone.

**Hallucination.** When a model states something false or unsupported with confidence. It's reduced by grounding answers in retrieved sources and testing; see [why AI hallucinates](/guides/ai-hallucinations).

**Retrieval-augmented generation (RAG).** A design where the system first searches your documents for relevant passages, then gives them to the model to answer from. It's the usual way to build AI over company knowledge; see [what is RAG](/guides/what-is-rag) and our [RAG knowledge base service](/services/rag-knowledge-base).

**Embeddings.** Lists of numbers that represent the meaning of a piece of text, so that similar meanings sit close together mathematically. They power semantic search in RAG systems; see [what are embeddings](/guides/what-are-embeddings).

**Vector database.** A database designed to store embeddings and quickly find the ones most similar to a query. PostgreSQL with pgvector, Pinecone, Weaviate and Qdrant are examples; see [what is a vector database](/guides/what-is-a-vector-database).

**Fine-tuning.** Further training an existing model on your own examples to change its style, format or behaviour on a narrow task. It's often unnecessary; see [what is LLM fine-tuning](/guides/what-is-llm-fine-tuning) and [RAG vs fine-tuning](/guides/rag-vs-fine-tuning).

**AI agent.** An AI system that can plan steps and use tools, such as searching, calling APIs or updating records, to complete a task with some autonomy. See [what is an AI agent](/guides/what-is-an-ai-agent) and [AI agent development](/services/ai-agent-development).

**Model Context Protocol (MCP).** An open standard for connecting AI applications to tools and data sources through a common interface. See [what is MCP](/guides/what-is-mcp) and [MCP server development](/services/mcp-server-development).

**Evals (LLM evaluation).** Repeatable tests that score an AI application's answers against a set of realistic questions with known good outcomes. They're how you know a change made things better, not worse; see [how to evaluate an LLM application](/guides/llm-evaluation).

## Data

**Personal information.** Under the Privacy Act 1988, information or an opinion about an identified individual, or one who is reasonably identifiable. It's the category most Australian privacy obligations attach to.

**Structured and unstructured data.** Structured data fits neatly in rows and columns, like orders or invoices. Unstructured data is free-form, like emails, PDFs, contracts and call recordings, and is where most AI document work happens; see [AI document processing](/services/ai-document-processing).

**Data residency.** The physical location where data is stored and processed, such as an Australian cloud region. See [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty).

**Data sovereignty.** Which country's laws apply to data and who can legally compel access to it. Keeping data in Australia gives residency, but a foreign provider may still be subject to foreign law; see [AI data sovereignty in Australia](/guides/ai-data-sovereignty-australia).

**ETL (extract, transform, load).** The process of pulling data out of source systems, cleaning and reshaping it, and loading it somewhere else, such as a reporting database. See [data engineering](/services/data-engineering).

**Data warehouse.** A central database built for reporting and analysis, fed from operational systems. It lets you query history across systems without slowing down the systems people work in; see [data analytics](/services/data-analytics).

## Architecture and infrastructure

**API (application programming interface).** A defined way for one piece of software to request data or actions from another. Most integrations are built on APIs; see [API development](/services/api-development).

**Frontend and backend.** The frontend is what users see and interact with in a browser or app. The backend is the server-side code, databases and integrations behind it; see [backend development](/services/backend-development).

**Cloud region.** A cluster of a cloud provider's data centres in one geographic area, such as AWS Asia Pacific (Sydney) or Azure Australia East. Choosing an Australian region is the starting point for data residency; see [cloud infrastructure](/services/cloud-infrastructure).

**SaaS (software as a service).** Software you rent and use over the internet rather than install, usually on a subscription. Building your own SaaS product is covered in our [SaaS development cost guide](/guides/saas-development-cost-australia).

**Legacy system.** An older system that is still important to the business but is hard or risky to change, often because of outdated technology or missing knowledge. See [legacy modernisation](/services/legacy-modernisation) and [rewrite vs refactor](/guides/rewrite-vs-refactor-legacy-software).

**Strangler fig pattern.** A way to replace a legacy system gradually, routing features one by one to a new system until the old one can be switched off. Martin Fowler named it after strangler figs he saw in Queensland; see [what is the strangler fig pattern](/guides/strangler-fig-pattern).

## Delivery and contracts

**Discovery phase.** A short, paid piece of work before a build that defines scope, approach, risks and cost. See [what is a discovery phase](/guides/software-discovery-phase) and our [AI readiness assessment](/services/ai-readiness-assessment).

**Scope.** The agreed list of what will be built, and just as importantly what won't. Vague scope is the most common cause of disputes and overruns.

**Acceptance criteria.** The specific conditions a feature must meet to be considered done. They turn "it should work well" into something both sides can test.

**Fixed price.** A contract where the supplier agrees to deliver a defined scope for a set price. It needs a well-defined scope to be fair to both sides; see [fixed price vs time and materials](/guides/fixed-price-vs-time-and-materials).

**Time and materials (T&M).** A contract where you pay for the hours actually worked at agreed rates. It suits work where requirements are expected to change as you learn.

**Change request.** A formal request to alter agreed scope, usually with its own price and timeline impact. A clear change process protects both parties under a fixed-price contract.

**Proof of concept (PoC).** A small experiment to test whether a specific idea or technology can work at all. It isn't built for real users or production.

**MVP (minimum viable product).** The smallest version of a product that real users can use and give feedback on. See [MVP development cost in Australia](/guides/mvp-development-cost-australia) and our [startup MVP service](/startup-mvp).

**Agile and sprints.** Agile is an approach that delivers software in short cycles with regular feedback. A sprint is one of those cycles, typically one to two weeks; see [our methodology](/methodology).

**Technical debt.** The future cost created by shortcuts or outdated design in existing code, paid back as slower and riskier changes. Some debt is a reasonable trade-off; unmanaged debt compounds.

**IP assignment.** The contract clause that transfers ownership of the code and other work produced to the client. Check when it transfers and what it covers; see the [software development contract checklist](/guides/software-development-contract-checklist).

**SLA (service level agreement).** A commitment to measurable service levels, such as uptime or response times for support requests, often with remedies if missed. See [software maintenance and support](/services/software-maintenance-support).

**Maintenance.** Ongoing work to keep software secure, working and compatible: updates, fixes, monitoring and small changes. See [how much software maintenance costs](/guides/software-maintenance-cost).

**Staff augmentation.** Adding external developers to your own team under your direction, rather than outsourcing a defined project. See [staff augmentation](/staff-augmentation).

## Security and compliance

**Prompt injection.** An attack where text given to an AI model, directly or hidden in a document or web page, overrides its instructions. It's the top risk in the OWASP Top 10 for LLM Applications 2026; see [what is prompt injection](/guides/prompt-injection).

**OWASP Top 10.** Widely used lists of the most critical security risks, published by the Open Worldwide Application Security Project, with separate lists for web applications and for LLM applications. Suppliers use them as a baseline for secure design and testing.

**Penetration test.** An authorised simulated attack on a system by security specialists to find exploitable weaknesses. It's usually done before launch and after major changes; see [cybersecurity](/services/cybersecurity).

**Code audit.** An expert review of a codebase's quality, security, architecture and maintainability. Often used before acquiring a product or taking over from another supplier; see [code audit](/services/code-audit).

**ISO/IEC 27001.** An international standard for running an information security management system, against which organisations can seek independent certification. Buyers often ask for it in procurement.

**SOC 2.** An independent auditor's report, under an American Institute of CPAs framework, on a service organisation's controls for security and related criteria. Common in SaaS procurement, especially with US-linked buyers.

**AI governance.** The policies, roles, risk assessments and technical controls an organisation uses to develop and use AI responsibly. Frameworks include NIST's AI Risk Management Framework and Australia's [Guidance for AI Adoption](/guides/guidance-for-ai-adoption); see [AI governance](/services/ai-governance).

## Australian terms

**Privacy Act 1988 and the APPs.** The Privacy Act is Australia's main privacy law, and the 13 Australian Privacy Principles set the rules for how covered organisations handle personal information. See [using personal information in AI systems](/guides/privacy-act-and-ai).

**APP 8 (cross-border disclosure).** The principle covering sending personal information overseas. The OAIC explains that you must take reasonable steps to protect it and generally remain accountable for how the overseas recipient handles it.

**Notifiable Data Breaches (NDB) scheme.** The requirement to notify affected individuals and the OAIC when a data breach is likely to result in serious harm. See [the NDB scheme and your software](/guides/notifiable-data-breaches-software).

**Automated decision-making (ADM) transparency.** From 10 December 2026, privacy policies must describe the kinds of decisions made by computer programs that could significantly affect individuals' rights or interests. See [Privacy Act automated decision-making rules](/guides/privacy-act-automated-decision-making).

**Essential Eight.** ASD's eight prioritised mitigation strategies: patching applications and operating systems, MFA, restricting admin privileges, application control, restricting Office macros, user application hardening and regular backups. See [the Essential Eight for software projects](/guides/essential-eight-software-development).

**IRAP.** The Infosec Registered Assessors Program, through which ASD endorses assessors to evaluate systems against the Information Security Manual, commonly required for government work. See [IRAP explained](/guides/irap-explained).

**APRA CPS 234 and CPS 230.** APRA prudential standards for regulated banks, insurers and super funds: CPS 234 covers information security, and CPS 230 covers operational risk including material service providers, effective from 1 July 2025. See [CPS 234 and AI](/guides/apra-cps-234-ai) and [CPS 230 and AI vendors](/guides/apra-cps-230-ai-vendors).

**DTA.** The Digital Transformation Agency, which sets digital and AI policy for Australian Government agencies, including the Hosting Certification Framework. See [the DTA AI policy for government](/guides/dta-ai-policy-government).

**R&D Tax Incentive (R&DTI).** A federal program that provides tax offsets for eligible research and development, jointly run by the Department of Industry, Science and Resources and the ATO. It's self-assessed; see [R&D Tax Incentive for software development](/guides/rd-tax-incentive-software-development).

**Technical uncertainty.** Shorthand for the R&DTI requirement that an activity's outcome cannot be known or determined in advance from current knowledge, only through experiment. See [what counts as technical uncertainty](/guides/technical-uncertainty-rd-tax-incentive).

**Ex GST.** A price before the 10% goods and services tax is added. Australian business software quotes are usually given ex GST.

## Checklist: questions to ask when a proposal uses these terms

- [ ] What exactly is in scope, and what is explicitly out?
- [ ] What are the acceptance criteria for each main feature?
- [ ] Is it fixed price or time and materials, and how are change requests priced?
- [ ] When does IP transfer, and do we have the source code from day one?
- [ ] For AI features: which model, which region, how is it evaluated, and what does it cost per request?
- [ ] Where will data be stored and processed, and by which providers?
- [ ] What security testing is included before launch?
- [ ] What does maintenance cover after launch, and at what cost?

## How All Webbed Labs uses these terms

We write proposals in plain language and define any technical term the first time it appears, so the scope you approve is the scope you understand. Every project starts with a paid discovery and a fixed price for the agreed scope, with source code in your repository from day one. If a term in a proposal from us, or anyone else, isn't clear, ask; see our [AI consulting](/ai-consulting) service or browse all [guides](/guides).
