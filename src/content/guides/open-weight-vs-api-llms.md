---
title: "Open-weight models vs API models: which should Australian enterprises use?"
metaTitle: "Open-Weight vs API LLMs: When to Self-Host in Australia"
description: "Open-weight (open source) LLMs like Llama, Mistral, Qwen and gpt-oss vs API models: when a self-hosted LLM beats an API on sovereignty, cost and control."
eyebrow: "Comparison"
category: compare
published: 2026-09-28
updated: 2026-09-28
summary: "In the open-weight vs API LLM decision, use a hosted API model by default: the strongest models are API-only, you pay only for what you use, and several can now process data inside Australia through cloud platforms. Choose an open-weight model when you need prompts to never reach a model vendor, when you must run offline or in an isolated environment, when steady high volume makes owning capacity cheaper, or when you need to fine-tune and control the exact model version. Many enterprises end up using both, routed by data sensitivity."
takeaways:
  - "Open-weight means the trained weights are published so you can run the model on your own infrastructure. It doesn't always mean open source: licences such as Llama's carry conditions."
  - "API models still lead on the hardest reasoning and coding tasks, but open-weight models such as gpt-oss, Qwen and Mistral handle most classification, extraction and summarisation work well."
  - "Self-hosting gives the strongest sovereignty position: no model vendor ever sees your prompts, and you hold the logs."
  - "Self-hosting only beats per-token pricing at steady, high volume. GPUs cost money while idle, and you take on operations, patching and evaluation."
  - "A middle path exists: open-weight models served by a cloud platform such as Amazon Bedrock in Sydney, where the model maker never sees your data and you don't run GPUs."
faqs:
  - q: "Are open-weight models as good as GPT, Claude or Gemini?"
    a: "For the hardest tasks, generally not at the time of writing: the frontier models are API-only. For well-defined tasks such as extraction, classification, routing, summarisation and retrieval-augmented answers over your own documents, a good open-weight model is often good enough. Test on your own data rather than relying on public benchmarks."
  - q: "Is it legal to use open-weight models commercially in Australia?"
    a: "Usually yes, but read the licence. gpt-oss, the Qwen3 models and many Mistral models are released under Apache 2.0, which permits commercial use. Meta's Llama 4 Community License allows commercial use but requires attribution, compliance with Meta's acceptable use policy, and a separate licence above 700 million monthly active users."
  - q: "What is the best open source LLM for business?"
    a: "There isn't one best model; it depends on the task, the hardware you can run and the licence you can accept. At the time of writing, OpenAI's gpt-oss, the Qwen3 family and Mistral's Apache 2.0 models are sensible starting points because their licences permit commercial use. Shortlist two or three and test them on your own examples."
  - q: "Is an open-weight model the same as an open source LLM?"
    a: "Not quite, though people use the terms interchangeably. Open-weight means the trained weights are published so you can run the model yourself. Open source, strictly, would also cover the training code and data, which usually aren't released, and some open-weight licences, such as Llama's, add conditions an open source licence wouldn't."
  - q: "Can we run an LLM on-premises or locally instead of in the cloud?"
    a: "Yes, with an open-weight model. You can run a private LLM on your own servers, in a secure facility or fully offline, which API models don't allow. You take on the hardware, serving, patching and evaluation, so it makes sense when isolation is a requirement rather than a preference."
  - q: "Does self-hosting take care of our Privacy Act obligations?"
    a: "No single technical choice does that. Self-hosting in an Australian region removes the overseas disclosure question for the model itself, which simplifies your APP 8 analysis, but you still need to meet the other Australian Privacy Principles for collection, use, security and access. The OAIC's guidance on AI products is a good starting point."
  - q: "What hardware does an open-weight model need?"
    a: "It depends on size. OpenAI's gpt-oss-20b runs within 16 GB of memory, and gpt-oss-120b fits on a single 80 GB GPU thanks to quantisation. Larger models need several GPUs. Cloud GPU instances are available in Australian regions, subject to quota."
sources:
  - title: "Regional availability by models (Amazon Bedrock User Guide)"
    url: "https://docs.aws.amazon.com/bedrock/latest/userguide/models-region-compatibility.html"
    publisher: "Amazon Web Services"
  - title: "gpt-oss-120b model card"
    url: "https://huggingface.co/openai/gpt-oss-120b"
    publisher: "OpenAI on Hugging Face"
  - title: "Llama 4 Community License Agreement"
    url: "https://dev.meta.ai/llama/llama4/license/"
    publisher: "Meta"
  - title: "Models overview"
    url: "https://docs.mistral.ai/models"
    publisher: "Mistral AI"
  - title: "Qwen3-32B model card"
    url: "https://huggingface.co/Qwen/Qwen3-32B"
    publisher: "Qwen on Hugging Face"
  - title: "Amazon Bedrock pricing"
    url: "https://aws.amazon.com/bedrock/pricing/"
    publisher: "Amazon Web Services"
  - title: "Amazon EC2 On-Demand pricing"
    url: "https://aws.amazon.com/ec2/pricing/on-demand/"
    publisher: "Amazon Web Services"
  - title: "Guidance on privacy and the use of commercially available AI products"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products"
    publisher: "Office of the Australian Information Commissioner"
related:
  - title: "AI data sovereignty in Australia: which models can run onshore?"
    href: "/guides/ai-data-sovereignty-australia"
  - title: "What does it cost to run an LLM in production?"
    href: "/guides/llm-running-costs"
  - title: "RAG vs fine-tuning"
    href: "/guides/rag-vs-fine-tuning"
  - title: "AWS Bedrock vs Azure OpenAI vs Google Vertex AI for Australian data residency"
    href: "/guides/bedrock-vs-azure-openai-vs-vertex-australia"
service:
  title: "Private LLM deployment"
  href: "/services/private-llm-deployment"
---

## Open-weight vs API LLMs: which should you use?

**Start with a hosted API model unless you have a specific reason not to; move to open-weight when sovereignty, isolation, volume or control demands it.** The decision is less about ideology and more about four practical questions: how capable does the model need to be, where may the data go, how much volume will you run, and who will operate it.

The terms first. An **API model** (Claude, GPT, Gemini) runs only on its vendor's or a cloud partner's infrastructure; you send a request and pay per token. An **open-weight model** (Llama, Mistral, Qwen, DeepSeek, OpenAI's gpt-oss) has its trained weights published, so you can download it and run it wherever you like. "Open-weight" isn't the same as open source: the training data and code usually aren't released, and some licences restrict use. Buyers searching for an "open source LLM", a "self-hosted LLM", a "local LLM" or a "private LLM" usually mean an open-weight model run on infrastructure they control; API models are sometimes called closed or proprietary models.

## How do they compare side by side?

**API models win on capability and simplicity; open-weight models win on control and, at scale, on cost.** Details reflect vendor pages as at 28 September 2026.

| | Hosted API model | Open-weight, served by a cloud platform | Open-weight, self-hosted |
|---|---|---|---|
| Examples | Claude, GPT, Gemini via vendor API or Bedrock, Azure, Vertex AI | gpt-oss, Qwen, Mistral on Amazon Bedrock | Any open-weight model on your own GPUs |
| Capability ceiling | Highest: frontier models are API-only | Good to very good | Good to very good; you pick the exact model |
| Who sees your prompts | Model vendor or cloud provider | Cloud provider, not the model maker | Only you (and your cloud provider's infrastructure) |
| Australian processing | Some models, on some platforms, at the time of writing | Some models listed in Sydney | Yes, in any Australian region with GPU capacity |
| Pricing | Per token | Per token | Per GPU hour, whether used or not |
| Operations | None | None | You run serving, scaling, patching, monitoring |
| Model version control | Vendor retires versions on its schedule | Platform retires versions on its schedule | You keep a version as long as you like |
| Fine-tuning | Limited, on selected models | Varies by platform | Full control |
| Offline or air-gapped | No | No | Yes |

## Where do API models win?

**On raw capability, speed to launch, and low or unpredictable volume.** The best models for complex reasoning, long documents, coding and agentic work are, at the time of writing, available only through APIs. You pay per token, so a pilot costs almost nothing, and you inherit the vendor's scaling, safety work and continuous improvements.

Residency, once the main objection, has narrowed. Several API models can now process data inside Australia through Amazon Bedrock, Azure or Google Vertex AI, though availability varies by model and changes often. Our guide to [which models can run onshore](/guides/ai-data-sovereignty-australia) tracks the detail, and the [Bedrock vs Azure vs Vertex comparison](/guides/bedrock-vs-azure-openai-vs-vertex-australia) covers the platforms.

Choose an API model if:

- The task needs top-tier reasoning, writing or coding quality.
- Volume is low, spiky or unknown.
- You don't have, and don't want, people to operate GPU infrastructure.
- An Australian-region API option exists for the model, or offshore processing has been assessed and accepted.

## When should you use a self-hosted LLM?

**When control matters more than the last increment of capability. Open-weight models win on control: over where data goes, which exact model runs, how it's tuned, and whether it runs at all without an internet connection.** When you self-host, prompts and outputs never reach a model vendor, and your own logs prove where every request went.

Situations where that matters:

1. **Data that can't go to a third-party AI service** under contract, client instructions, legal privilege or government classification.
2. **Isolated or offline environments**, such as secure facilities, remote sites with poor connectivity, or on-premises deployments.
3. **Version stability.** API vendors retire models; a self-hosted model behaves identically until you choose to change it, which matters for validated workflows.
4. **Deep customisation.** Full fine-tuning, custom decoding, or distilling a small specialised model.
5. **Steady, high volume** of simpler tasks, where owned capacity undercuts per-token prices.

Open-weight quality is good enough for much enterprise work. Many tasks, such as extracting fields from invoices, classifying emails or answering questions over retrieved documents, don't need a frontier model. OpenAI's gpt-oss-120b, for example, has 117 billion parameters and fits on a single 80 GB GPU; gpt-oss-20b runs within 16 GB of memory.

## What about licences?

**Most popular open-weight models allow commercial use, but the terms differ, so check before you build a product on one.**

| Model family | Licence at the time of writing | Things to note |
|---|---|---|
| OpenAI gpt-oss | Apache 2.0 | Permissive, commercial use allowed |
| Qwen3 (for example Qwen3-32B) | Apache 2.0 | Check each model card; licences vary across releases |
| Mistral (Small 4, Large 3, Ministral 3) | Apache 2.0 | Mistral Medium 3.5 uses a modified MIT licence |
| Meta Llama 4 | Llama 4 Community License | Attribution ("Built with Llama"), acceptable use policy, separate licence above 700 million monthly active users |

Also consider provenance. Some organisations, particularly in government and critical infrastructure, have policies on the country of origin of AI models. That's an organisational risk decision, but it needs making explicitly before you pick a model family.

## When does self-hosting actually save money?

**Only when a GPU is kept busy.** Per-token pricing charges nothing when idle; a GPU instance charges every hour it runs. The break-even is simple arithmetic.

Here is an illustration using round, clearly hypothetical numbers. Use the live Bedrock, model vendor and EC2 pricing pages in the sources for real figures in your region.

| Step | Illustrative assumption | Result |
|---|---|---|
| GPU instance able to serve your chosen model | $10 an hour (AUD) | |
| Running 24/7 | $10 × 730 hours | $7,300 a month |
| Add operations effort | 0.2 of an engineer at $200,000 a year loaded | about $3,300 a month |
| Total monthly cost of self-hosting | | about $10,600 |
| API price for a comparable model | $5 per million tokens, blended input and output | |
| Break-even volume | $10,600 ÷ $5 per million | about 2.1 billion tokens a month |

Below the break-even, the API is cheaper; above it, owning capacity wins, provided the instance can actually serve that throughput. Real deployments shift the numbers: you may need redundancy (two instances), savings plans reduce GPU cost, prompt caching reduces API cost, and a smaller open-weight model may do the job on a cheaper GPU. Our [LLM running costs guide](/guides/llm-running-costs) works through these levers in detail.

The practical conclusion: for most organisations starting out, the API is cheaper. Self-hosting is justified first by control, and only later, if ever, by cost.

## Is there a middle path?

**Yes: run an open-weight model through a managed cloud platform in an Australian region.** At the time of writing, AWS's Bedrock regional table lists Sydney for several open-weight models, including gpt-oss-120b and models from Qwen and Mistral, while Llama 4 models are listed only in US regions. You pay per token, AWS operates the infrastructure, and the model maker never sees your data. You're still on a foreign-owned cloud, which matters for some sovereignty definitions but not most commercial risk assessments.

The other common pattern is routing by sensitivity: a single internal gateway sends restricted data to a self-hosted or onshore model and everything else to the most capable API model. That gives most users frontier quality while keeping the sensitive lane under your control.

## A decision guide

| If this is true | Lean towards |
|---|---|
| You need the best available reasoning or coding quality | API model |
| Volume is low or unpredictable | API model |
| An Australian-region option exists for the model you need | API model via that platform |
| Prompts must never reach a model vendor | Self-hosted open-weight |
| You must run offline or in an isolated network | Self-hosted open-weight |
| Steady, very high volume of simpler tasks | Open-weight, self-hosted or managed |
| You need a frozen model version for a validated process | Self-hosted open-weight |
| You want onshore processing without running GPUs | Open-weight on a managed platform in Sydney |
| Mixed data sensitivity | Both, behind one routing gateway |

If fine-tuning is the reason you're considering open-weight models, note that some API providers also offer fine-tuning for selected models, though you don't get the weights and the options are narrower. Read [RAG vs fine-tuning](/guides/rag-vs-fine-tuning) first: retrieval often solves the problem more cheaply than either.

## How All Webbed Labs approaches model choice

We test candidate models, API and open-weight, against your own examples before recommending one, and we write down the model, platform, region and date in the architecture decision. Where sovereignty requires it, we deploy open-weight models in your own cloud account in an Australian region, with logging you control. Where it doesn't, we'll usually recommend an API model and say why. See our [private LLM deployment service](/services/private-llm-deployment) and [LLM integration](/services/llm-integration) work.
