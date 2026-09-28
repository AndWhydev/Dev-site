---
title: "What does it cost to run an LLM in production? (2026 guide)"
metaTitle: "LLM Running Costs in Production: Tokens, Caching, Hosting"
description: "What an LLM costs to run: token pricing, caching, batch, model tiers, Australian region premiums and self-hosting, with the arithmetic shown step by step."
eyebrow: "Cost guide"
category: cost
published: 2026-09-28
updated: 2026-09-28
summary: "Running a large language model in production usually costs somewhere between tens of dollars and several thousand dollars a month for most business applications, set by four things: how many tokens you send and receive, which model tier you use, whether you use prompt caching and batch processing, and where the model runs. At the time of writing, mainstream hosted models cost from about US$0.10 to US$10 per million input tokens and US$0.50 to US$50 per million output tokens. Caching, batching and model routing cut the bill in the worked example below by about 80%. Self-hosting an open-weight model only saves money at high, steady volume."
takeaways:
  - "You pay per token, and output tokens cost about five times as much as input tokens on most current models."
  - "Prompt caching charges 10% of the normal input price for repeated context on most Claude and GPT models, which often halves the bill for document-heavy work."
  - "Batch processing is 50% cheaper for work that can wait, and the discount stacks with caching."
  - "Australian and other regional endpoints typically cost about 10% more on hosted APIs, and GPU servers in AWS Sydney cost about 30% more than in North Virginia at the time of writing."
  - "Self-hosting a model on a GPU server costs thousands of dollars a month before engineering time, so it pays off only at high volume or when sovereignty requires it."
faqs:
  - q: "How much does it cost to run ChatGPT or Claude for my business?"
    a: "It depends on how you use it. Seat-based products such as ChatGPT Enterprise or Claude Enterprise are priced per user per month. Custom applications using the API are priced per token. A focused internal tool may cost under $100 a month in model usage; a high-volume customer-facing system can cost thousands. Hosting, monitoring and maintenance are extra."
  - q: "What is a token?"
    a: "A token is a piece of text a model processes, roughly three quarters of an English word on average. Models count both the tokens you send (instructions, documents, conversation history) and the tokens they generate. Our guide to tokens and context windows explains why they drive cost."
  - q: "Is it cheaper to run an open-weight model ourselves?"
    a: "Rarely at low or uneven volume. A GPU server costs the same whether it's busy or idle, and someone has to run, patch and monitor it. At the time of writing, a single four-GPU server in AWS Sydney costs about US$4,370 a month running full time. Hosted open-weight models on platforms like Amazon Bedrock often give most of the sovereignty benefit at lower cost."
  - q: "Do Australian regions cost more for AI?"
    a: "Usually a little. At the time of writing, Anthropic notes a 10% premium for regional endpoints on AWS Bedrock and Google Cloud for recent Claude models, OpenAI charges a 10% uplift for regional processing on eligible models, and AWS GPU instances cost about 30% more in Sydney than in North Virginia. Check the live pricing pages, because this changes."
  - q: "Why is our LLM bill higher than our estimate?"
    a: "Common causes are conversation history resent on every turn, more retrieved context than needed, retries and fallbacks, agent loops making many calls per task, a premium model used for simple steps, and development and testing traffic. Logging token usage per feature usually shows the cause within a week."
  - q: "How do exchange rates affect LLM costs?"
    a: "Most model providers bill in US dollars. If the Australian dollar falls from US$0.70 to US$0.65, the same usage costs about 7.7% more in AUD. Build a currency buffer into your budget."
sources:
  - title: "Claude API pricing"
    url: "https://platform.claude.com/docs/en/about-claude/pricing"
    publisher: "Anthropic"
  - title: "OpenAI API pricing"
    url: "https://developers.openai.com/api/docs/pricing"
    publisher: "OpenAI"
  - title: "Amazon Bedrock pricing"
    url: "https://aws.amazon.com/bedrock/pricing/"
    publisher: "Amazon Web Services"
  - title: "Amazon EC2 On-Demand pricing"
    url: "https://aws.amazon.com/ec2/pricing/on-demand/"
    publisher: "Amazon Web Services"
  - title: "Amazon EC2 G6 instances"
    url: "https://aws.amazon.com/ec2/instance-types/g6/"
    publisher: "Amazon Web Services"
  - title: "Exchange rates"
    url: "https://www.rba.gov.au/statistics/frequency/exchange-rates.html"
    publisher: "Reserve Bank of Australia"
related:
  - title: "Tokens and context windows explained"
    href: "/guides/tokens-and-context-windows"
  - title: "Open-weight models vs API models for Australian enterprises"
    href: "/guides/open-weight-vs-api-llms"
  - title: "AI data sovereignty in Australia: which models can run onshore?"
    href: "/guides/ai-data-sovereignty-australia"
  - title: "How much does a RAG knowledge base cost?"
    href: "/guides/rag-knowledge-base-cost"
  - title: "Private LLM deployment"
    href: "/services/private-llm-deployment"
service:
  title: "LLM integration services"
  href: "/services/llm-integration"
disclaimer: financial
---

## What are you actually paying for when you run an LLM?

**When you call a hosted model, you pay per token sent and per token generated. Everything else on the bill is either a discount on those tokens or the infrastructure around them.** A token is roughly three quarters of an English word; our [tokens and context windows explainer](/guides/tokens-and-context-windows) covers the detail.

| Cost element | How it's charged | Typical share of the bill |
|---|---|---|
| Input tokens | Per million tokens sent: instructions, documents, conversation history, tool definitions | Often the largest share for document and RAG work |
| Output tokens | Per million tokens generated, usually about 5 times the input price | Largest share for drafting and long answers |
| Cache writes and reads | Repeated context stored and reused at a discount | Reduces input cost |
| Batch processing | Asynchronous jobs at a discount | Halves cost for work that can wait |
| Tool calls | Some built-in tools (such as web search) charge per use | Small unless heavily used |
| Embeddings | Per million tokens, very low prices | Usually negligible |
| Hosting and observability | Your application servers, database, logs and monitoring | Fixed monthly cost |
| Self-hosted GPUs | Per hour of server time, busy or idle | Replaces token charges if you run your own model |

Two details catch teams out. First, conversation history is sent again with every turn, so a 20-turn conversation costs far more than 20 single questions. Second, tokenisers differ: Anthropic notes that the tokeniser in Claude 4.7 and later models produces about 30% more tokens for the same text than earlier models. Compare models on cost per task, not price per token.

## What do the models cost per token right now?

**At the time of writing (September 2026), hosted model prices span roughly a hundredfold from the smallest to the largest models.** Prices change often, so treat this table as a snapshot and check the live pricing pages in the sources.

| Tier | Example models | Input (US$ per million tokens) | Cached input | Output (US$ per million tokens) |
|---|---|---|---|---|
| Small and fast | GPT-6 Luna | $0.10 | $0.01 | $0.50 |
| Small and fast | Claude Haiku 4.5 | $1.00 | $0.10 | $5.00 |
| Mid-tier | Claude Sonnet 5, GPT-6 Sol | $2.00 | $0.20 | $10.00 |
| Premium | Claude Opus 5.5 | $4.00 | $0.20 | $20.00 |
| Frontier | Claude Fable 5.1, GPT-6 Astra | $10.00 | $0.25 to $1.00 | $50.00 |
| Hosted open-weight (Bedrock, Sydney) | Mistral Large 3 | $0.515 | n/a | $1.545 |

Other discounts and surcharges from the providers' pricing pages:

- **Batch processing** is 50% off input and output on both Anthropic and OpenAI.
- **Prompt caching** on Anthropic charges 1.25 times the input price to write a 5-minute cache and 0.1 times to read it, so it pays for itself after one reuse.
- **Long context:** Anthropic charges the same per-token rate across the full 1 million token window on recent models.
- **Embeddings:** OpenAI's text-embedding-3-small is US$0.02 per million tokens.

## A worked example: a document review agent, before and after optimisation

**Here is the arithmetic for a realistic workload, then the effect of each cost lever.** The workload: an agent reviews 30,000 documents a month. For each document it makes 4 model calls. Every call sends a 2,000-token system prompt with tool definitions, the 6,000-token document, and about 500 tokens of new instructions or results, and generates 400 tokens.

**Step 1: count the tokens.**

- Input per document: 4 calls × (2,000 + 6,000 + 500) = 34,000 tokens
- Output per document: 4 × 400 = 1,600 tokens
- Monthly input: 30,000 × 34,000 = 1.02 billion tokens
- Monthly output: 30,000 × 1,600 = 48 million tokens

**Step 2: price it on a mid-tier model (US$2 input, US$10 output).**

- Input: 1,020 × US$2 = US$2,040
- Output: 48 × US$10 = US$480
- Total: **US$2,520 a month**

**Step 3: add prompt caching.** The system prompt is identical on every call, and the document is identical across its four calls. Per document:

- System prompt read from cache on all 4 calls: 8,000 tokens × US$0.20 per million = US$0.0016
- Document written to cache once: 6,000 × US$2.50 per million = US$0.0150
- Document read from cache on 3 later calls: 18,000 × US$0.20 per million = US$0.0036
- New tokens at full price: 2,000 × US$2 per million = US$0.0040
- Input per document: US$0.0242, × 30,000 = US$726. Output is unchanged at US$480.
- Total: **US$1,206 a month**

**Step 4: route simple calls to a smaller model.** If two of the four calls are simple extraction steps that a small model handles well, and that model is half the price on every rate (as Claude Haiku 4.5 is relative to Sonnet 5 at the time of writing), half the spend is halved: US$1,206 × 0.75 = **US$905 a month**.

**Step 5: batch it, if results can wait until the next morning.** A 50% discount: **about US$452 a month**. In practice caching is less predictable inside batch jobs, so treat this as a best case.

| Stage | Monthly cost (USD) | Approx. AUD | Saving vs baseline |
|---|---|---|---|
| Baseline, mid-tier model | $2,520 | $3,590 | |
| + prompt caching | $1,206 | $1,718 | 52% |
| + routing half the calls to a small model | $905 | $1,289 | 64% |
| + batch processing | $452 | $644 | 82% |

AUD figures use the Reserve Bank's 25 September 2026 rate of US$0.7019 per A$1. If the same workload has to run on a regional endpoint with a 10% premium, the routed and cached figure becomes US$905 × 1.1 ≈ US$996.

The lesson: design decisions (what you send, how often, and to which model) change the bill far more than negotiating the price per token.

## Does running AI in Australia cost more?

**Usually a little more for hosted APIs, and noticeably more for your own GPU servers.** Figures at the time of writing:

| Where the cost appears | Australian or regional price effect | Source |
|---|---|---|
| Claude on AWS Bedrock or Google Cloud, regional endpoints | 10% premium over global endpoints for recent models | Anthropic pricing page |
| OpenAI regional processing (data residency) | 10% uplift for eligible models released from March 2026 | OpenAI pricing page |
| Hosted open-weight model on Bedrock | Mistral Large 3 is US$0.515 / US$1.545 in Sydney against US$0.50 / US$1.50 in US East, about 3% more | Amazon Bedrock pricing |
| GPU servers on EC2 | g6.xlarge (1 NVIDIA L4) is US$1.046 an hour in Sydney against US$0.805 in North Virginia, about 30% more; p5.48xlarge is US$71.55 against US$55.04 | Amazon EC2 On-Demand pricing |
| Currency | Providers bill in USD; a fall in the Australian dollar raises AUD cost directly | Reserve Bank of Australia |

Which models are available in Australian regions changes often. Before assuming a model can run onshore, check the provider's regional availability page; our guide to [AI data sovereignty in Australia](/guides/ai-data-sovereignty-australia) covers the current position and what to confirm.

## When does self-hosting an open-weight model make sense?

**Self-hosting makes financial sense only at high, steady volume, or when control and sovereignty requirements justify the premium.** The server bills every hour whether it's answering questions or not.

**The arithmetic.** A g6.12xlarge instance (4 NVIDIA L4 GPUs, 96 GB of GPU memory in total) costs US$5.983 an hour on demand in AWS Sydney at the time of writing. Running full time: US$5.983 × 730 hours = about US$4,368 a month, or about A$6,220. That's before a second server for redundancy, storage, load balancing and the engineering time to deploy, patch, monitor and upgrade the model.

For comparison, US$4,368 buys a lot of hosted tokens. On Mistral Large 3 in Sydney through Bedrock, assuming three input tokens for every output token, the blended price is (3 × US$0.515 + US$1.545) ÷ 4 ≈ US$0.77 per million tokens. The same money buys about 4,368 ÷ 0.77 ≈ 5.7 billion tokens a month.

| Situation | Better option |
|---|---|
| Low or uneven volume, standard tasks | Hosted API |
| Need Australian processing, model available onshore on a managed platform | Hosted model in an Australian region |
| Very high, steady volume with a model that fits on your hardware | Self-hosting can win, with reserved or committed pricing |
| Data can't leave your own environment, or you need a fine-tuned model under your full control | Self-hosting, accepting the cost |
| Air-gapped or classified environment | Self-hosting on approved infrastructure |

Our comparison of [open-weight vs API models](/guides/open-weight-vs-api-llms) covers capability and governance trade-offs, and [private LLM deployment](/services/private-llm-deployment) covers how we'd set one up.

## What costs besides tokens should you budget for?

**Token charges are only part of running an LLM application.** Also budget for:

- **GST** where it applies to your provider's charges and to any services you buy.
- **Hosting** for your application, database and vector store.
- **Observability**: logging prompts and outputs (with privacy controls), tracing agent steps, and cost dashboards.
- **Evaluation runs.** Re-running a test set after each prompt or model change uses tokens too, often thousands of calls. See [how to evaluate an LLM application](/guides/llm-evaluation).
- **Development and staging usage**, which is easy to overlook while a system is under active development.
- **Model migrations.** Providers retire models on their own schedule; switching requires re-testing.
- **Maintenance**: prompt updates, guardrail tuning and incident response.

## How do you keep LLM running costs under control?

**Measure cost per task, then apply the cheapest lever first.**

1. **Log tokens per feature and per user** from day one. You can't manage what you can't see.
2. **Trim context.** Send the three most relevant passages, not twenty. Summarise long conversation history.
3. **Cache stable prefixes**: system prompts, tool definitions and documents used across several calls.
4. **Route by difficulty.** Use a small model for classification and extraction and a larger one only where it measurably helps.
5. **Batch anything that doesn't need an instant answer**: overnight reports, bulk classification, backfills.
6. **Cap output length** where long answers aren't needed. Output tokens are the expensive ones.
7. **Set spend alerts and per-user limits** to catch runaway agent loops early.
8. **Re-check prices quarterly.** New model releases often deliver the same quality for less.

## How All Webbed Labs manages LLM running costs

We build a cost model during discovery, using your real documents and expected volumes, so you see a monthly range before committing to a build. Systems we deliver log token usage per feature, use caching and model routing where testing shows no loss of quality, and include spend alerts. We default to Australian regions where the model you need is available there and show you what the regional premium costs. See our [LLM integration services](/services/llm-integration).
