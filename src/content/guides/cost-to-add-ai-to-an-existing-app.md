---
title: "How much does it cost to add AI to an existing app?"
metaTitle: "Cost to Add AI to an Existing App in Australia (2026)"
description: "Adding AI to an existing app typically costs $10k to $60k AUD per feature, and $60k to $200k for assistants or agents. Feature ranges and a worked example."
eyebrow: "Cost guide"
category: cost
published: 2026-09-28
updated: 2026-09-28
summary: "Adding a single AI feature, such as summaries, drafting or automatic tagging, to an existing app typically costs $10k to $35k AUD (ex GST) with an Australian team. Semantic search and document extraction usually run $20k to $80k, and an AI assistant that answers from your data or takes actions in the app often costs $60k to $200k. The first AI feature costs the most because it carries shared foundations: a model gateway, permission-aware data access, evaluation tests, logging and cost controls."
takeaways:
  - "Price is set more by the state of your existing app and data than by the AI model itself."
  - "The first feature carries the foundations. Later features reuse them and cost noticeably less."
  - "Model usage is a running cost. Summarising 20,000 records a month can cost under US$200 at current list prices; an assistant used all day by many staff can cost far more."
  - "Budget for evaluation. A test set of real examples is what tells you the feature is good enough to ship."
  - "Privacy and security work is part of the build, not an extra: the OAIC expects privacy by design, and prompt injection tops OWASP's LLM risk list."
faqs:
  - q: "What is the cheapest way to add AI to an app?"
    a: "A narrow text feature inside an existing screen, such as summarising a record or drafting a reply, calling a hosted model API. It needs no new data infrastructure and can often be built and evaluated in one to three weeks."
  - q: "Do we need to train our own model?"
    a: "Almost never for business apps. Hosted models from Anthropic, OpenAI and others handle most tasks with good instructions and the right context from your data. Fine-tuning or training is worth considering only for very high volume, narrow tasks or special privacy needs."
  - q: "Will adding AI slow down or break our existing app?"
    a: "Not if it's built as a separate service with timeouts, fallbacks and a feature flag. Model calls take seconds, so AI features should run in the background or stream results rather than block the main workflow."
  - q: "How much will the AI cost to run each month?"
    a: "It depends on volume and model choice. Background tasks on mid-tier models are often tens to hundreds of dollars a month. Chat assistants used heavily by many people can reach thousands. Model the cost with your real volumes before launch and set usage limits."
  - q: "Can the AI see data a user shouldn't?"
    a: "Only if it's built carelessly. The AI should only receive data the current user is already allowed to see, enforced by your app's existing permissions, not by instructions to the model. This is one of the most important parts of the build."
  - q: "Where does our data go when we add AI?"
    a: "To wherever the model runs. Some providers and cloud platforms offer model inference in Australian regions for certain models. Check the provider's regional availability for the exact model and confirm how prompts are logged and retained."
sources:
  - title: "Claude pricing"
    url: "https://claude.com/pricing"
    publisher: "Anthropic"
  - title: "OWASP Top 10 for LLM Applications 2025"
    url: "https://genai.owasp.org/llm-top-10/"
    publisher: "OWASP GenAI Security Project"
  - title: "Guidance on privacy and the use of commercially available AI products"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Salary Guide 2026, Australia (mid-year edition)"
    url: "https://www.robertwalters.com.au/content/dam/robert-walters-redesign/country/australia/files/salary-survey/Salary-Guide-2026-AU-V10-mid-year.pdf"
    publisher: "Robert Walters"
  - title: "Top tech contractor day rates in Australia (6 March 2026)"
    url: "https://www.talentinternational.com/blog/top-tech-contractor-day-rates-australia/"
    publisher: "Talent International"
related:
  - title: "How much does AI development cost in Australia?"
    href: "/guides/ai-development-cost-australia"
  - title: "What does it cost to run an LLM in production?"
    href: "/guides/llm-running-costs"
  - title: "How much does a RAG knowledge base cost?"
    href: "/guides/rag-knowledge-base-cost"
  - title: "How to evaluate an LLM application before launch"
    href: "/guides/llm-evaluation"
service:
  title: "Adding AI to existing software"
  href: "/services/ai-integration"
disclaimer: financial
---

## What does each type of AI feature cost to add?

**Most AI features fall into a handful of patterns, and each pattern has a fairly predictable cost range.** The table shows typical Australian market ranges for adding a feature to an existing, reasonably modern web or mobile app, in AUD, ex GST, covering design, build, evaluation and release. They are ranges, not quotes. Model usage is extra and ongoing.

| AI feature | What it does | Typical build cost | Typical timeline |
|---|---|---|---|
| Proof of concept | Tests one feature on real data before committing | $10k to $30k | 2 to 4 weeks |
| Summarise, draft or rewrite | Summaries of records, draft replies, rewrite in plain English | $10k to $30k | 2 to 5 weeks |
| Classify, tag and route | Auto-categorise tickets, leads or documents and send them to the right queue | $10k to $35k | 3 to 6 weeks |
| Semantic search | Find records by meaning, not just keywords | $20k to $60k | 4 to 8 weeks |
| Document extraction | Pull structured data from invoices, forms or contracts into the app | $20k to $80k | 4 to 10 weeks |
| Assistant over your content (RAG) | Answers questions from your documents and app data, with citations | $40k to $150k | 6 to 16 weeks |
| Agent that takes actions | Carries out tasks in the app (create, update, schedule) with user approval | $60k to $200k | 8 to 20 weeks |

The lower half of each range assumes clean APIs, a mainstream stack and a narrow scope. The upper half assumes messy data, strict permissions, multiple languages or regulated information. For a standalone AI product rather than a feature, see [AI development cost in Australia](/guides/ai-development-cost-australia); for a question-answering system in detail, see [RAG knowledge base cost](/guides/rag-knowledge-base-cost).

## Why does the first AI feature cost more than the rest?

**The first feature pays for foundations every later AI feature reuses.** Once they exist, a second or third feature often costs 30 to 50% less than the first. The foundations are:

- **A model gateway.** One service in your backend that calls models, handles retries, timeouts and fallbacks, and lets you swap providers without rewriting features.
- **Permission-aware context.** Code that gathers only the data the current user is allowed to see and passes it to the model. The model must never be the thing enforcing access.
- **Evaluation.** A set of real examples with known good answers, run automatically whenever prompts or models change. This is how you know quality hasn't slipped.
- **Observability and cost controls.** Logs of inputs and outputs (with sensitive data handled properly), per-user and per-tenant limits, and dashboards for spend.
- **Security defences.** OWASP's 2025 Top 10 for LLM applications lists prompt injection first, followed by sensitive information disclosure. Defences include separating instructions from untrusted content, limiting what the AI can do, and checking outputs before acting on them. Our guide to [prompt injection](/guides/prompt-injection) explains the details.

Skipping these makes the first feature cheaper and every later one more expensive, and it's where most AI incidents come from.

## A worked example: two AI features in a helpdesk app

**Here is an illustrative estimate for adding AI to an existing customer support application, including both build and running costs.** The app: a Node.js and PostgreSQL helpdesk used by 60 support staff, handling about 20,000 tickets a month. The features: an automatic summary on each ticket, and AI classification that sets category and priority and routes the ticket to a team.

**Build cost**

| Work package | Engineer-days | Cost at $1,400/day |
|---|---|---|
| Discovery and proof of concept on 200 real tickets | 8 | $11,200 |
| Model gateway: retries, fallbacks, provider abstraction | 6 | $8,400 |
| Ticket summary feature (API and interface) | 6 | $8,400 |
| Classification and routing feature | 7 | $9,800 |
| Permission-aware data access for AI calls | 4 | $5,600 |
| Evaluation harness and labelled test set | 5 | $7,000 |
| Logging, cost monitoring, rate limits, injection defences | 4 | $5,600 |
| Privacy review support, documentation, feature-flagged rollout | 3 | $4,200 |
| **Subtotal** | **43** | **$60,200** |
| Contingency at 15% | | $9,030 |
| **Planning budget** | | **$69,230 ex GST** |

The $1,400 day rate is a planning figure for a senior Australian agency team. For comparison, the Robert Walters 2026 guide lists NSW senior backend contractors at $800 to $1,000 a day, and Talent International reports top-end averages of about $1,450 a day for AI principal engineers; agencies add project management, testing and warranty on top of contractor rates.

About 19 of the 43 days are foundations (gateway, permissions, evaluation and monitoring). A third AI feature added later, such as suggested replies, might need 10 to 15 days rather than 25.

**Running cost (illustrative, at list prices at the time of writing).** Anthropic lists Claude Sonnet 5 at US$2 per million input tokens and US$10 per million output tokens. Assume each ticket sends about 3,000 tokens of text and receives about 300 tokens back, across both features combined.

1. Input: 20,000 tickets × 3,000 tokens = 60 million tokens × US$2 = US$120
2. Output: 20,000 × 300 tokens = 6 million tokens × US$10 = US$60
3. Total: about US$180 a month in model usage, before any caching or cheaper-model savings

Using a smaller model for classification would cut that further; Anthropic lists Claude Haiku 4.5 at US$1 and US$5 per million tokens. Prices change often, so check the live pricing page. For a full treatment of token costs, caching and model tiers, see [what it costs to run an LLM in production](/guides/llm-running-costs).

## What drives the cost of adding AI?

**Your existing app and data drive the cost more than the model does.** These questions decide where you land in the ranges:

1. **Is there a clean backend API?** Apps with a well-structured API layer are far cheaper to extend than ones with logic spread through the interface or database.
2. **Is the data accessible and tidy?** AI features are only as good as the context they receive. Scattered, duplicated or unstructured data needs preparation first.
3. **How complex are permissions?** Multi-tenant apps, role hierarchies and record-level access all need careful handling so the AI never sees more than the user.
4. **How accurate must it be?** A draft a person edits can tolerate imperfection. An automated decision or an extraction feeding a payment can't, and needs more evaluation, review queues and fallbacks.
5. **Is the data regulated?** Health, financial and personal information bring privacy impact assessments and constraints on which models and regions you can use.
6. **What stack is it on?** Modern TypeScript, Python, Java or .NET backends are straightforward. Old or unusual platforms may need a separate AI service alongside them.

## What about privacy and data location?

**Treat privacy as a build requirement from day one.** The OAIC's guidance on commercially available AI products recommends privacy by design, a privacy impact assessment before deployment, transparency with users that AI is involved, and human oversight of outputs that affect people. It also warns against putting personal information, especially sensitive information, into publicly available AI tools. See [using personal information in AI systems under the Privacy Act](/guides/privacy-act-and-ai) for the detail.

In practice that means choosing a model endpoint whose data handling you've reviewed, confirming whether the specific model is available in an Australian region at the time you build, and documenting what data leaves your systems. Those decisions belong in discovery, because they can change the model choice and therefore the running cost.

## What's usually excluded from the quote?

**Model usage, vendor accounts and your team's time are the usual exclusions.** Check for:

- Model API usage, billed to your own provider account
- Vector database or search service hosting, if the feature needs one
- Your staff's time labelling examples and reviewing outputs during evaluation
- Legal review of privacy policy changes and customer contracts
- Work to clean or restructure data before AI can use it
- Changes to mobile apps and app store releases, if the feature appears there

## How can you reduce the cost?

**Start with one narrow, high-value feature and prove it on real data before you build more.** Specific levers:

- **Run a proof of concept first.** Two to four weeks on real examples tells you whether a feature is feasible and what accuracy to expect, before a full build.
- **Pick features where a person stays in the loop.** Drafts and suggestions need less evaluation than automated decisions and deliver value sooner.
- **Use hosted models.** Training or hosting your own model is rarely justified for app features.
- **Use smaller models where they're good enough.** Classification and extraction often work well on cheaper, faster models.
- **Reuse the foundations.** Plan a roadmap of AI features so the gateway, evaluation and permission work is built once.

## What does it cost to keep AI features running?

**Plan for model usage plus ongoing tuning.** Beyond the monthly model bill, AI features need periodic evaluation runs, prompt adjustments when providers update or retire models, and monitoring of quality and cost. A reasonable planning figure is 15 to 25% of the build cost a year, on top of usage, with more in the first few months as real users reveal edge cases. Our guide to [evaluating an LLM application](/guides/llm-evaluation) covers how to keep quality measurable.

## How All Webbed Labs approaches adding AI

We start with a short, paid discovery and proof of concept on your real data, then quote a fixed price for the build. The AI runs as a separate service behind your existing permissions, with evaluation tests, logging, cost limits and a feature flag so it can be rolled out gradually. We work in your repository from day one, default to Australian cloud regions, and choose models (Anthropic Claude, OpenAI or open-weight) on fit, cost and data location. Read more about our [AI integration service](/services/ai-integration).
