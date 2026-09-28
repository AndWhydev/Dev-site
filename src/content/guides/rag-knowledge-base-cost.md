---
title: "How much does a RAG knowledge base cost? (2026 Australian guide)"
metaTitle: "How Much Does a RAG Knowledge Base Cost? (Australia 2026)"
description: "How much does a RAG knowledge base cost? An AI knowledge base is usually $25k to $50k to pilot and $60k to $150k in production (AUD), plus a per-query cost."
eyebrow: "Cost guide"
category: cost
published: 2026-09-28
updated: 2026-09-28
summary: "A retrieval-augmented generation (RAG) knowledge base, the kind of AI knowledge base that lets staff chat with your documents, typically costs $25,000 to $50,000 (AUD, ex GST) for a pilot on one document collection, $60,000 to $150,000 for a production system serving a department, and $150,000 to $350,000 or more for an enterprise system that spans several sources and enforces document-level permissions. Model usage is usually modest, about US$9 to US$36 per 1,000 questions across current low-cost to premium models at the time of writing, so ongoing cost is driven more by hosting, content upkeep and evaluation."
takeaways:
  - "Build cost is driven by the number and messiness of sources, permission rules and how good the answers must be, not by document count."
  - "Embedding even a large document collection costs a few dollars at current prices. Ingestion engineering, not embedding, is the expensive part."
  - "Illustrative model cost is about US$9 to US$36 per 1,000 questions at the time of writing; long context and multi-step retrieval raise it."
  - "Evaluation is a real line item. Without a test set of questions and expected answers, you can't tell whether a change made the system better or worse."
  - "Access control is the step most often missing from low quotes, and the one that matters most in an enterprise."
faqs:
  - q: "Is RAG cheaper than fine-tuning?"
    a: "For most knowledge base use cases, yes. RAG uses your documents at query time, so updates are as simple as re-indexing a file, and answers can cite their source. Fine-tuning suits changing a model's style or teaching a narrow task, not keeping it current with changing documents. Our RAG vs fine-tuning guide compares them in detail."
  - q: "Do I need a dedicated vector database?"
    a: "Not usually at the start. PostgreSQL with the pgvector extension handles millions of chunks for most business knowledge bases, and it's available on managed services such as Amazon RDS in Australian regions. Dedicated vector databases make sense at very large scale or when you need features they specialise in."
  - q: "How long does a RAG knowledge base take to build?"
    a: "A pilot on one clean document collection takes about 4 to 8 weeks. A production system for a department, with integrations and permissions, usually takes 3 to 5 months. Enterprise systems with many sources take longer, mostly because of access control and content governance."
  - q: "How much does a RAG chatbot for customer support cost?"
    a: "A customer-facing chatbot that answers from your help content is the same technology pointed at a public audience. Team 400 prices a chatbot with knowledge base integration at $30,000 to $80,000 (AUD, ex GST). Customer support adds handover to staff, tone controls and more testing; our AI chatbot cost guide covers those tiers."
  - q: "Can Microsoft 365 Copilot or ChatGPT Enterprise do this instead?"
    a: "Often, for documents already in SharePoint or connected sources, and that's the cheaper route if it meets your accuracy and data requirements. A custom RAG system is worth it when you need specific sources those tools can't reach, stricter control over where data is processed, cited answers tuned to your domain, or integration into your own product."
  - q: "What does it cost to keep a knowledge base up to date?"
    a: "Automated re-indexing keeps technical upkeep low. The larger cost is content governance: retiring outdated documents, fixing contradictions and reviewing questions the system answered poorly. Budget a few hours a week of a subject expert's time plus 15 to 25% of the build cost a year for maintenance."
sources:
  - title: "Claude API pricing"
    url: "https://platform.claude.com/docs/en/about-claude/pricing"
    publisher: "Anthropic"
  - title: "OpenAI API pricing (including embedding models)"
    url: "https://developers.openai.com/api/docs/pricing"
    publisher: "OpenAI"
  - title: "Pinecone pricing"
    url: "https://www.pinecone.io/pricing/"
    publisher: "Pinecone"
  - title: "Supabase pricing"
    url: "https://supabase.com/pricing"
    publisher: "Supabase"
  - title: "Amazon RDS for PostgreSQL now supports pgvector"
    url: "https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-rds-postgresql-pgvector-ml-model-integration/"
    publisher: "Amazon Web Services"
  - title: "How Much Does a Custom Chatbot Cost in Australia"
    url: "https://team400.ai/blog/2026-04-03-custom-chatbot-cost-australia"
    publisher: "Team 400"
  - title: "How Much Does AI Consulting Cost in Australia? (2026 Pricing Guide)"
    url: "https://quanton.ai/blog-articles/how-much-does-ai-consulting-cost-in-australia-2026-pricing-guide/"
    publisher: "Quanton AI"
  - title: "Exchange rates"
    url: "https://www.rba.gov.au/statistics/frequency/exchange-rates.html"
    publisher: "Reserve Bank of Australia"
related:
  - title: "What is RAG (retrieval-augmented generation)?"
    href: "/guides/what-is-rag"
  - title: "RAG vs fine-tuning: which does your business need?"
    href: "/guides/rag-vs-fine-tuning"
  - title: "pgvector vs Pinecone vs Weaviate vs Qdrant"
    href: "/guides/vector-database-comparison"
  - title: "AI knowledge bases for professional services firms"
    href: "/solutions/professional-services-knowledge-base"
  - title: "What does it cost to run an LLM in production?"
    href: "/guides/llm-running-costs"
service:
  title: "RAG knowledge base development"
  href: "/services/rag-knowledge-base"
disclaimer: financial
---

## How much does a RAG knowledge base cost to build?

**Most RAG knowledge bases cost $25,000 to $150,000 (AUD, ex GST) to build, with enterprise systems above that.** A RAG system (sometimes sold as an AI knowledge base, AI search or "chat with your documents") answers questions by first retrieving relevant passages from your documents, then giving them to a language model to write a cited answer. If the term is new, start with [what RAG is](/guides/what-is-rag). If the audience is customers rather than staff, the [AI chatbot cost guide](/guides/ai-chatbot-cost-australia) covers the extra work.

Very few Australian firms publish RAG-specific pricing. The bands below are our synthesis of published Australian AI ranges: Team 400 prices a chatbot with knowledge base integration at $30,000 to $80,000, and Quanton AI puts a narrowly focused generative AI project at $20,000 to $50,000 and a production deployment at $50,000 to $150,000.

| Scope | What's included | Typical range (AUD, ex GST) | Typical timeline |
|---|---|---|---|
| Pilot | One document collection (for example a policy library), web chat interface, cited answers, a test set of 50 to 100 questions | $25,000 to $50,000 | 4 to 8 weeks |
| Department production system | Two to four sources (SharePoint, a document system, a wiki), scheduled re-indexing, single sign-on, feedback capture, monitoring | $60,000 to $150,000 | 3 to 5 months |
| Enterprise system | Many sources, document-level permissions mirrored from source systems, audit logging, multiple user groups, embedding into other applications | $150,000 to $350,000+ | 5 to 9 months |

## Where does the build budget go?

**A RAG system has five parts, and ingestion and evaluation usually take more effort than the chat interface.** Buyers tend to picture the chat window; most of the cost sits behind it.

| Component | What it involves | What makes it expensive |
|---|---|---|
| Ingestion | Connecting to sources, extracting text from PDFs, Word, scans and web pages, splitting into chunks, attaching metadata | Scanned documents needing OCR, tables and forms, many source systems, frequent changes |
| Retrieval | Embeddings, vector and keyword search, re-ranking, filters by date, product or jurisdiction | Specialist terminology, similar-looking documents, questions needing several sources at once |
| Generation | Prompts, citation formatting, refusing when the answer isn't in the documents | Strict tone or regulatory requirements, multi-step answers |
| Access control | Making sure each user only retrieves documents they're allowed to see | Permissions stored in several systems, frequent staff changes, sensitive matters |
| Evaluation and monitoring | Test questions with expected answers, automated scoring, logging, feedback review | Needing subject experts to write and check answers; see [how to evaluate an LLM application](/guides/llm-evaluation) |

**Access control is the cost line most often missing from cheap quotes.** A system that indexes the whole shared drive and lets everyone ask questions of it will happily surface HR files and board papers. Mirroring permissions from source systems is careful engineering and adds meaningfully to the budget, but in most organisations it isn't optional.

## How much does it cost to embed your documents?

**Embedding is cheap: a large document collection costs a few US dollars to embed at current prices.** This surprises buyers, because the word "AI" suggests a big compute bill.

Here is the arithmetic for a collection of 20,000 documents averaging five pages:

1. **Estimate tokens.** At about 500 tokens a page: 20,000 × 5 × 500 = 50 million tokens.
2. **Price the embedding.** At the time of writing, OpenAI lists text-embedding-3-large at US$0.13 per million tokens and text-embedding-3-small at US$0.02. So 50 × US$0.13 = US$6.50, or 50 × US$0.02 = US$1.00.
3. **Estimate storage.** With 500-token chunks, that's about 100,000 chunks. Each large embedding holds 3,072 numbers at 4 bytes, about 12 KB, so the vectors take roughly 100,000 × 12 KB = 1.2 GB before indexes and text.

At that size, PostgreSQL with pgvector on a managed service is enough. Amazon RDS for PostgreSQL supports pgvector, and a managed Postgres plan such as Supabase Pro starts at US$25 a month at the time of writing. Dedicated vector databases such as Pinecone have their own pricing (its Standard plan has a US$50 monthly minimum at the time of writing). Our [vector database comparison](/guides/vector-database-comparison) covers when each is worth it, including Australian hosting options.

The expensive part is the engineering around embedding: clean extraction, sensible chunking, metadata, and re-indexing only what changed.

## What does a RAG system cost per 1,000 questions?

**At the time of writing, model usage is roughly US$9 to US$36 per 1,000 questions depending on the model tier, before hosting.** This is illustrative, and the method matters more than the result, because prices change often.

**The assumptions for one question:**

- System instructions: 1,500 tokens
- Retrieved passages: 8 chunks × 500 tokens = 4,000 tokens
- The question plus a little conversation history: 500 tokens
- Total input: 6,000 tokens. Answer with citations: 600 output tokens.
- Embedding the question itself: about 50 tokens, which costs almost nothing.

**Per 1,000 questions,** that's 6 million input tokens and 0.6 million output tokens. Using Anthropic's published prices at the time of writing:

| Model tier (example) | Price per million tokens (input / output) | Input cost | Output cost | Per 1,000 questions (USD) | Approx. AUD |
|---|---|---|---|---|---|
| Fast, low cost (Claude Haiku 4.5) | US$1 / US$5 | 6 × $1 = $6 | 0.6 × $5 = $3 | $9 | $13 |
| Mid-tier (Claude Sonnet 5) | US$2 / US$10 | 6 × $2 = $12 | 0.6 × $10 = $6 | $18 | $26 |
| Premium (Claude Opus 5.5) | US$4 / US$20 | 6 × $4 = $24 | 0.6 × $20 = $12 | $36 | $51 |

AUD conversions use the Reserve Bank's 25 September 2026 rate of about US$0.70 per A$1.

**Prompt caching lowers this further.** The 1,500-token system prompt is identical on every question, so it can be cached. On the mid-tier model, a cache hit costs 10% of the normal input price: 1.5 million cached tokens × (US$2 − US$0.20) saves about US$2.70 per 1,000 questions, roughly 15%.

**What raises it:** sending more chunks, long conversation history, agent-style multi-step retrieval (several model calls per question), premium models, and regional endpoints. At the time of writing, Anthropic notes a 10% premium for regional endpoints on AWS Bedrock and Google Cloud for recent models, and OpenAI a 10% uplift for regional processing on eligible models. The [LLM running costs guide](/guides/llm-running-costs) goes further on these levers.

## How much does a RAG knowledge base cost per month? A 300-person firm

**For a typical mid-sized organisation, the model bill is the smallest part of running a knowledge base.** Illustrative figures, AUD ex GST:

| Monthly item | Assumption | Cost |
|---|---|---|
| Model usage | 300 staff × 4 questions a working day × 21 days = 25,200 questions; × $26 per 1,000 on a mid-tier model | $655 |
| Hosting | Application, Postgres with pgvector, storage and backups in an Australian region | $600 |
| Monitoring and logging | Error tracking, usage dashboards, log retention | $150 |
| Maintenance | 15% of a $110,000 build a year, ÷ 12 | $1,375 |
| Content governance | 4 hours a week of a subject expert's time at an internal cost of $90 an hour × 4.33 weeks | $1,559 |
| **Total** | | **$4,339** |

That's about $14.50 per staff member a month, or about 17 cents per question. The biggest line items are people: maintenance and content governance. Cutting the model bill in half would save about $330 a month; a bad answer about a policy could cost far more.

## What are the hidden costs of a RAG system?

**The hidden costs sit in what quotes leave out, so check whether a quote includes access control, evaluation and content clean-up, not just the chat interface.** Also check for:

- **GST** at 10% on ex GST quotes.
- **Model and embedding usage**, billed in US dollars by the provider.
- **Hosting**, including separate development and production environments.
- **OCR** for scanned documents, which some services charge per page.
- **Licences** for source systems' APIs or connectors.
- **Your experts' time** writing test questions and reviewing answers.
- **Content remediation.** RAG makes contradictions in your documents visible. Fixing them is business work.

## Is a RAG knowledge base worth the cost?

**A RAG knowledge base is worth it when many people spend real time searching for answers in documents that already exist, and a wrong or slow answer has a cost.** Policy libraries, contracts, technical manuals and procedures are the classic fits. It is not worth building when the documents are few, rarely consulted, or so out of date that the first job is rewriting them.

The break-even arithmetic is simple. In the example above, the system costs $4,339 a month to run. At the same internal cost of $90 an hour, it covers its running costs if it saves about 48 hours a month across the firm: roughly 10 minutes per person per month for 300 staff. Recovering the build cost as well takes more, so estimate honestly how often people search today and how long it takes them. A pilot on one collection, with usage logging, gives you real numbers before you commit to production.

## How do you reduce RAG costs without hurting answer quality?

**Spend on retrieval quality and evaluation, save on everything else.**

1. **Start with one high-value collection** where people waste time searching today.
2. **Remove duplicates and superseded versions** before indexing. Fewer, better documents improve answers and reduce cost.
3. **Use pgvector in your existing Postgres** unless scale demands otherwise.
4. **Route by difficulty.** A low-cost model can handle simple lookups; reserve premium models for complex questions.
5. **Cache the stable parts of the prompt.**
6. **Build the test set first.** It stops you paying for tuning that doesn't help.
7. **Consider buying.** If your content lives in Microsoft 365 and generic answers are acceptable, an off-the-shelf assistant may cost less. See [RAG vs fine-tuning](/guides/rag-vs-fine-tuning) and our other guides before committing.

## How All Webbed Labs builds RAG knowledge bases

We build RAG systems on PostgreSQL with pgvector by default, hosted in Australian cloud regions, with document-level permissions carried over from your source systems. Every build starts with a test set of real questions and expected answers written with your subject experts, and we report accuracy against it before launch and after every significant change. We quote a fixed price after paid discovery, and the code, indexes and test set stay in your accounts. See our [RAG knowledge base development service](/services/rag-knowledge-base).
