---
title: "AI data sovereignty in Australia: which models can run onshore?"
metaTitle: "AI Data Sovereignty in Australia: Which Models Run Onshore?"
description: "Which AI models can process prompts inside Australia as of September 2026, across Bedrock, Azure, Vertex AI, Claude and OpenAI, and how to verify it yourself."
eyebrow: "Australian regulation"
category: australia
published: 2026-09-28
updated: 2026-09-28
summary: "At the time of writing (September 2026), you can keep AI inference inside Australia, but only for particular models on particular platforms. Amazon Bedrock offers in-region inference in Sydney or Melbourne, or an Australia-only cross-region profile, for several Claude, Amazon Nova and open-weight models. Azure and Google Vertex AI offer Australian geography endpoints for some models. The direct Claude API offers US or global inference only, and OpenAI's API offers Australian data storage but not Australian processing. The newest frontier models usually launch on global routing first, so onshore options lag."
takeaways:
  - "Onshore AI means the model's inference runs in Australia, not just that your database does. Check processing location, not only storage."
  - "Every major platform now has three routing modes: single region, a defined geography, or global. Only the first two can keep prompts in Australia."
  - "On Bedrock, several Claude models run in-region in Melbourne and within an Australia-only profile from Sydney; some newer Claude tiers are global only."
  - "Azure's APAC data zone spans multiple countries, so it is not an Australian residency option. Use a Standard (geography) deployment instead."
  - "Self-hosting an open-weight model in your own Australian cloud account gives the strongest control, at the cost of running GPUs yourself."
  - "Availability changes monthly. Record the model, platform, routing mode and date in your architecture decision, and re-check before each release."
faqs:
  - q: "Can I use Claude with data staying in Australia?"
    a: "At the time of writing, yes, through Amazon Bedrock. AWS lists several Claude models with in-region inference in Melbourne (ap-southeast-4) and an Australian geographic cross-region profile that keeps requests within Australian regions. Some of the newest Claude tiers are listed as global only. The direct Claude API currently offers US-only or global inference, not Australian. Check the AWS regional availability page for the exact model before you build."
  - q: "Does OpenAI's API process data in Australia?"
    a: "Not at the time of writing. OpenAI's data controls documentation lists Australia with regional storage but not regional processing, so prompts can be stored in Australia while inference happens elsewhere. Azure's Standard deployment type is the usual route to Australian processing for OpenAI models, where the specific model is offered in Australia East."
  - q: "Is an Australian region enough for data sovereignty?"
    a: "It gives you residency, not full sovereignty. The major cloud and model providers are foreign companies, so foreign legal processes can still reach them. That distinction, and how Australian law treats it, is covered in our data residency vs data sovereignty explainer."
  - q: "What is the difference between in-region and geographic cross-region inference?"
    a: "In-region inference processes the request only in the region you call, such as Melbourne. Geographic cross-region inference lets the platform route the request to any region in a defined geography, which on Bedrock can be Australia. Both keep data in Australia when the geography is Australia; global routing does not."
  - q: "Are open-weight models more sovereign than API models?"
    a: "They can be. If you run an open-weight model on infrastructure in your own Australian cloud account, no model vendor sees your prompts. Bedrock also hosts many open-weight models in Sydney. The trade-off is capability, since the strongest frontier models are generally not open-weight, and the cost and effort of operating GPU infrastructure."
  - q: "How often does this change?"
    a: "Often. New models tend to launch on global endpoints first, then geographic and single-region options follow weeks or months later, if at all. Treat any list, including this one, as a snapshot and check the vendor's availability page before each release."
sources:
  - title: "Regional availability by models (Amazon Bedrock User Guide)"
    url: "https://docs.aws.amazon.com/bedrock/latest/userguide/models-region-compatibility.html"
    publisher: "Amazon Web Services"
  - title: "Understanding deployment types in Microsoft Foundry Models"
    url: "https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/deployment-types"
    publisher: "Microsoft"
  - title: "Foundry Models sold by Azure (model and region availability)"
    url: "https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/models"
    publisher: "Microsoft"
  - title: "Data residency (generative AI on Google Cloud)"
    url: "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/data-residency"
    publisher: "Google Cloud"
  - title: "Data residency (Claude API)"
    url: "https://platform.claude.com/docs/en/build-with-claude/data-residency"
    publisher: "Anthropic"
  - title: "Data controls in the OpenAI platform"
    url: "https://developers.openai.com/api/docs/guides/your-data"
    publisher: "OpenAI"
  - title: "Guidance on privacy and the use of commercially available AI products"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products"
    publisher: "Office of the Australian Information Commissioner"
related:
  - title: "Data residency vs data sovereignty in Australia"
    href: "/guides/data-residency-vs-data-sovereignty"
  - title: "AWS Bedrock vs Azure OpenAI vs Google Vertex AI for Australian data residency"
    href: "/guides/bedrock-vs-azure-openai-vs-vertex-australia"
  - title: "Open-weight models vs API models for Australian enterprises"
    href: "/guides/open-weight-vs-api-llms"
  - title: "Using personal information in AI systems under the Privacy Act"
    href: "/guides/privacy-act-and-ai"
service:
  title: "Private LLM deployment"
  href: "/services/private-llm-deployment"
disclaimer: legal
---

## What does "onshore AI" actually mean?

**Onshore AI means the model's inference, the computation that reads your prompt and writes the answer, runs on infrastructure in Australia.** Storing your documents in Sydney is not enough if every question and every retrieved passage is sent to a model endpoint overseas.

This page answers the practical question: which models can do that today, on which platforms, and how do you prove it. For the underlying difference between where data sits and whose laws reach it, read our explainer on [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty). We don't repeat it here.

Everything below reflects vendor documentation read in September 2026. Model availability changes often, so treat this as a dated snapshot and follow the source links before you commit.

## The three routing modes every platform now uses

**Each major AI platform offers some version of single-region, geography-bound and global routing, and only the first two can keep inference in Australia.**

| Mode | What it means | Keeps prompts in Australia? | Typical trade-off |
|---|---|---|---|
| Single region | Processed only in the region you call (for example Melbourne) | Yes | Fewer models, lower quotas |
| Geography | Routed among regions inside a defined geography | Only if the geography is Australia | More capacity than single region |
| Global | Routed to any region worldwide | No | Newest models, best price and quota |

The naming differs. Bedrock calls them in-Region, Geographic (Geo) cross-Region and Global cross-Region inference. Azure calls them Standard (Azure geography), Data Zone and Global. Google Cloud distinguishes locational endpoints, jurisdictional multi-region endpoints and global endpoints.

One trap stands out. Azure's data zones are US, EU and Asia Pacific, and Microsoft says the APAC zone covers multiple Asia Pacific regions and can have regions added without notice. An APAC data zone deployment is therefore not an Australian residency option. For Australia on Azure you need the Standard or Regional Provisioned type in an Australian region.

## Which models can run in Australia today?

**At the time of writing (September 2026), Amazon Bedrock has the broadest set of models with documented Australian processing.** The table summarises vendor documentation; it isn't exhaustive, and the source pages are authoritative.

| Platform | Australian inference options at the time of writing | Notable gaps |
|---|---|---|
| Amazon Bedrock | Claude Opus 5.5, Opus 5, Sonnet 5, Opus 4.8, Haiku 4.5 and others in-region in Melbourne; several Claude models through an Australia geographic profile from Sydney and Melbourne; Amazon Nova Pro, Lite and Micro in-region; open-weight models in-region in Sydney including Mistral, Qwen3, OpenAI gpt-oss, DeepSeek and GLM | Claude Fable 5.1 and Mythos 5.1, and OpenAI GPT-5.6 models on Bedrock, listed as global only |
| Microsoft Azure (Foundry) | Standard deployments keep prompts and responses within the Azure geography; availability per model in Australia East is listed in Microsoft's model table | New models arrive on Global first; Microsoft says geography-based types come last with no guaranteed date |
| Google Cloud (Vertex AI) | Locational endpoints, including Australia (australia-southeast1), keep ML processing in that jurisdiction for models Google lists as supported | Global endpoints give no residency guarantee; per-model support varies |
| Claude API (direct) | None: inference geo options are global or US only | No Australian workspace or inference geo |
| OpenAI API (direct) | Australian regional storage through `au.api.openai.com` | Regional processing not offered for Australia |

The Bedrock details come from AWS's regional availability table, which marks each model and region against the three inference types. Two details matter for design. First, in-region support differs between Sydney and Melbourne for the same model, so choose your primary region after choosing your model, not before. Second, Bedrock prices geographic cross-region calls at the source region's rate, so the Australia profile is usually the easiest way to get capacity without leaving the country.

## Self-hosting open-weight models

**Running an open-weight model in your own Australian cloud account is the strongest form of control available, because no model vendor processes your prompts.** You choose the region, hold the keys, and can prove where every request went from your own logs.

It suits workloads where sovereignty requirements outweigh raw capability: classified or near-classified government data, health records, legal privilege, or contracts that prohibit third-party AI processing. It costs more to run than paying per token at low volume, because GPUs are billed while idle, and you take on patching, scaling and evaluation. Our comparison of [open-weight models vs API models](/guides/open-weight-vs-api-llms) and the [LLM running costs](/guides/llm-running-costs) guide cover the economics.

A middle path is a managed open-weight model on Bedrock in Sydney. The model vendor never sees your data, AWS runs the infrastructure, and you avoid GPU operations, but you are still on a foreign-owned cloud.

## How to verify where inference really runs

**Don't rely on a sales deck. Verify the routing mode in configuration and in logs.** These checks take an afternoon and belong in every architecture review.

1. **Pin the model ID or deployment type.** On Bedrock, call the in-region model ID or the Australia geographic inference profile, never a global profile. On Azure, deploy with the Standard SKU in an Australian region. On Vertex AI, call a regional hostname, not the global one.
2. **Block the alternatives with policy.** Azure Policy can deny the GlobalStandard deployment type. AWS Service Control Policies and IAM conditions can restrict Bedrock to Australian regions and approved inference profiles. Google Cloud organisation policies can block global endpoint traffic.
3. **Log the response metadata.** Record the region, profile or deployment used on each call. The Claude API, for example, returns the inference geography in its usage object.
4. **Check the side services.** Embeddings, rerankers, moderation, file storage, vector stores and evaluation tools each have their own availability. A model in Melbourne with an embedding call in the US still sends your documents offshore. See [what embeddings are](/guides/what-are-embeddings) for why they carry your data.
5. **Read the retention and abuse monitoring terms.** Some services keep prompts for safety review. Confirm where and for how long, and whether zero or modified retention is available to you.
6. **Re-check on every model upgrade.** Moving from one model version to the next can silently change which routing modes exist.

## Sovereignty readiness checklist

- [ ] Data classification done: which data may leave Australia, which may not.
- [ ] Model chosen with its Australian routing mode documented, with the vendor page and date.
- [ ] Primary and fallback regions chosen to match that model's availability.
- [ ] Global routing blocked by policy, not just by convention.
- [ ] Embeddings, reranking, moderation and storage services confirmed onshore.
- [ ] Per-request logs capture model, version and processing region.
- [ ] Encryption keys held in your own account for stored prompts, documents and vectors.
- [ ] Vendor retention, training and abuse monitoring terms reviewed and recorded.
- [ ] APP 8 analysis written for anything that does leave Australia, as covered in our guide to [the Privacy Act and AI](/guides/privacy-act-and-ai).
- [ ] A calendar reminder to re-check availability before each release.

## Worked example: a two-lane design for a professional services firm

**Most organisations don't need every AI call onshore; they need the right calls onshore, enforced by code.** Consider a 150 person accounting firm that wants three AI features: a client file assistant, a proposal writer and a public website chatbot.

| Feature | Data involved | Lane | Reasoning |
|---|---|---|---|
| Client file assistant | Tax returns, financial statements, TFNs | Onshore: in-region or Australia geographic inference | Personal and confidential information; client engagement letters may restrict offshore processing |
| Proposal writer | Firm's own service descriptions, fee templates | Either; onshore by default | Commercially confidential but not personal; onshore costs little extra if the same model is available |
| Website chatbot | Published service pages, general questions | Global permitted | Public information; visitors may type personal details, so strip or refuse them before the call |

The engineering that makes this safe is small but essential:

1. **One gateway.** All model calls go through a single internal service that holds the routing rules, rather than each feature calling providers directly.
2. **Classification at the source.** Documents carry a sensitivity label from ingestion, and the gateway refuses to send a labelled document to a global route.
3. **Per-request evidence.** The gateway logs which lane, model and region handled each call, giving the firm's risk partner a report instead of a promise.
4. **A tested fallback.** If the onshore model is throttled, the gateway queues or degrades gracefully. It never quietly fails over to a global endpoint.

The fallback rule is where real systems break. Retry libraries and SDK defaults often try another region or endpoint on error. Write a test that simulates an onshore outage and asserts that no request leaves Australia.

## When is onshore inference not worth it?

**When the data isn't sensitive and the best model for the job is only available globally.** A marketing copy tool working on public product information gains little from Australian processing and may lose a lot of quality. Be deliberate: classify the data, then decide per workload. Many organisations end up with two lanes, an onshore lane for personal and confidential data and a global lane for public content, enforced in code by the gateway that routes requests.

For a platform-by-platform comparison of governance features, pricing basis and data use terms, see [Bedrock vs Azure OpenAI vs Vertex AI for Australian data residency](/guides/bedrock-vs-azure-openai-vs-vertex-australia).

## How All Webbed Labs approaches this

We default to Australian regions and pick the model and routing mode together during discovery, then enforce the choice with cloud policy and log it per request, so your security team can check it rather than trust it. Where requirements rule out any third-party model processing, we deploy open-weight models inside your own cloud account. We document what stays onshore, what doesn't and why, as input to your privacy impact assessment; the risk decision stays with you. See our [private LLM deployment](/services/private-llm-deployment) service and [cloud infrastructure](/services/cloud-infrastructure) work.
