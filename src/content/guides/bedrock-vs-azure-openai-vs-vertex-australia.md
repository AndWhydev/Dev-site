---
title: "AWS Bedrock vs Azure OpenAI vs Google Vertex AI for Australian data residency"
metaTitle: "AWS Bedrock vs Azure OpenAI vs Vertex AI in Australia"
description: "AWS Bedrock vs Azure OpenAI vs Vertex AI in Australia: which models run onshore in Bedrock Sydney, Azure OpenAI Australia East and Vertex AI's Sydney region."
eyebrow: "Comparison"
category: compare
published: 2026-09-28
updated: 2026-09-28
summary: "Comparing AWS Bedrock vs Azure OpenAI vs Google Vertex AI for Australian data residency at the time of writing (September 2026), Amazon Bedrock offers the widest choice of models that can process prompts inside Australia, including several current Claude models through its Australian geography and many open-weight models in Sydney. Azure OpenAI keeps processing in Australia East only for an older subset of OpenAI models on pay-as-you-go, with more on reserved capacity. Google Vertex AI commits to Australian processing for a small number of Gemini and embedding models. All three keep your data at rest in the region you choose and say they don't train on your prompts. The newest models usually launch on global routing first."
takeaways:
  - "Separate storage from processing. All three platforms store data at rest in the region you choose; the question is where the model actually runs."
  - "Each platform has an onshore option and a cheaper or broader global option. Global routing can process prompts outside Australia."
  - "Bedrock: many Claude models via an Australian geography or Melbourne in-Region, plus open-weight models in Sydney. The newest frontier releases are often global-only at first."
  - "Azure OpenAI: Australia East regional pay-as-you-go covers a limited set of models; the APAC data zone is broader than Australia."
  - "Vertex AI: Australian processing commitments cover a few Gemini and embedding models; partner models such as Claude have no Australian commitment listed."
  - "Model availability changes monthly. Check the vendor's availability page for the exact model and deployment type before you design around it."
faqs:
  - q: "Which cloud is best for keeping AI data in Australia?"
    a: "At the time of writing, Amazon Bedrock offers the broadest set of models with Australian processing, especially if you want Claude or open-weight models. Azure is a strong choice if you're committed to OpenAI models and Microsoft's ecosystem and can work with the models available in Australia East or reserved capacity. Vertex AI suits organisations standardised on Google Cloud whose use case fits the Gemini models with an Australian commitment."
  - q: "Is Bedrock's Australian geography the same as keeping data in Sydney?"
    a: "Not exactly. Geographic cross-Region inference lets AWS route a request to any Region within the Australian geography, keeping it inside Australia but not necessarily in one Region. If you need processing pinned to a single Region, use In-Region inference where the model supports it."
  - q: "Do these platforms train models on our prompts?"
    a: "All three say no by default. AWS states Bedrock content isn't used to improve base models or shared with model providers. Microsoft states prompts and completions aren't used to train foundation models without permission. Google's service terms restrict it from training or fine-tuning on your data without permission or instruction. Each has abuse monitoring rules worth reading."
  - q: "Can we use the latest models and still keep data in Australia?"
    a: "Sometimes, but often not on launch day. All three vendors typically release new models on global routing first, with regional availability following later or not at all. If onshore processing is mandatory, design your system so you can swap models easily and test against the best model available in Australia."
  - q: "Should we run open-weight models ourselves instead?"
    a: "It's an option when you need full control, such as running a model entirely in your own cloud account. It adds hosting, scaling and patching work. Bedrock already offers several open-weight models in Sydney as a managed service, which is a middle path. Our open-weight vs API models guide covers the trade-offs."
  - q: "Which Bedrock region should I use in Australia, Sydney or Melbourne?"
    a: "Choose the model first, then the region. At the time of writing, several Claude models (including Opus 5.5, Opus 5, Sonnet 5 and Haiku 4.5) run In-Region in Melbourne (ap-southeast-4), while Amazon Nova and open-weight models such as Mistral, Qwen3 and gpt-oss run In-Region in Sydney (ap-southeast-2). The Australian geographic profile is callable from both regions for several models, though Sonnet 5 is listed from Melbourne only."
  - q: "What is Azure OpenAI, and is it the same as Microsoft Foundry?"
    a: "Azure OpenAI is Microsoft's service for running OpenAI models under Azure's security, networking and billing. It is now delivered through Microsoft Foundry (formerly Azure AI Foundry), which also offers models from other providers. Australian processing depends on the model and deployment type you pick in Australia East, not on the Foundry name."
  - q: "Is Azure better than AWS for AI?"
    a: "Neither is better across the board. For Australian residency at the time of writing, AWS Bedrock offers more onshore models, including current Claude and open-weight models, while Azure suits organisations committed to OpenAI models and Microsoft 365. Whichever cloud your team already runs is usually easier, because identity, networking and logging carry over."
sources:
  - title: "Regional availability by models (Amazon Bedrock)"
    url: "https://docs.aws.amazon.com/bedrock/latest/userguide/models-region-compatibility.html"
    publisher: "Amazon Web Services"
  - title: "Amazon Bedrock abuse detection"
    url: "https://docs.aws.amazon.com/bedrock/latest/userguide/abuse-detection.html"
    publisher: "Amazon Web Services"
  - title: "Amazon Bedrock FAQs"
    url: "https://aws.amazon.com/bedrock/faqs/"
    publisher: "Amazon Web Services"
  - title: "Foundry Models sold by Azure: region availability"
    url: "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure-region-availability"
    publisher: "Microsoft Learn"
  - title: "Deployment types for Microsoft Foundry Models"
    url: "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/deployment-types"
    publisher: "Microsoft Learn"
  - title: "Data, privacy and security for Models sold by Azure"
    url: "https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy"
    publisher: "Microsoft Learn"
  - title: "Data residency (Gemini Enterprise Agent Platform, formerly Vertex AI)"
    url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/data-residency"
    publisher: "Google Cloud"
  - title: "Gemini Enterprise Agent Platform and zero data retention"
    url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention"
    publisher: "Google Cloud"
  - title: "Amazon Bedrock pricing"
    url: "https://aws.amazon.com/bedrock/pricing/"
    publisher: "Amazon Web Services"
  - title: "Azure OpenAI pricing"
    url: "https://azure.microsoft.com/en-au/pricing/details/azure-openai/"
    publisher: "Microsoft"
related:
  - title: "Data residency vs data sovereignty in Australia"
    href: "/guides/data-residency-vs-data-sovereignty"
  - title: "AI data sovereignty in Australia: which models can run onshore?"
    href: "/guides/ai-data-sovereignty-australia"
  - title: "Open-weight models vs API models for Australian enterprises"
    href: "/guides/open-weight-vs-api-llms"
  - title: "What does it cost to run an LLM in production?"
    href: "/guides/llm-running-costs"
  - title: "Private LLM deployment"
    href: "/services/private-llm-deployment"
service:
  title: "Private LLM deployment in Australian regions"
  href: "/services/private-llm-deployment"
disclaimer: none
---

## AWS Bedrock vs Azure OpenAI vs Vertex AI: which keeps AI processing in Australia?

**All three can keep some AI processing in Australia, but they differ sharply in which models qualify.** Amazon Bedrock, Azure OpenAI in Microsoft Foundry (formerly Azure AI Foundry) and Google Vertex AI (which Google now documents as Gemini Enterprise Agent Platform) each let you store data in an Australian region. Where they differ is whether the model you want runs onshore, and under which deployment option.

Everything on this page reflects each vendor's own documentation at the time of writing (September 2026). Model availability changes monthly, so treat the snapshots below as a starting point and confirm on the linked availability pages before you commit to an architecture.

## How does each platform control where prompts are processed?

**Each platform offers a spectrum from pinned to one region, to confined to a geography, to routed globally.** The names differ, but the idea is the same: the tighter the boundary, the fewer models and the less capacity you get.

| Boundary | Amazon Bedrock | Azure OpenAI (Foundry) | Google Vertex AI |
|---|---|---|---|
| Single region | In-Region inference: processed only in the Region you call | Standard (regional) and Regional Provisioned: processed in the resource's Azure geography | Locational endpoints, such as australia-southeast1, with per-model processing commitments |
| Geography | Geographic cross-Region inference, including an Australia geography | Data Zone: US, EU or Asia Pacific (APAC). No Australia-only zone | Jurisdictional multi-region endpoints (US, EU) |
| Global | Global cross-Region inference: any supported commercial Region | Global Standard and Global Provisioned: any geography where the model is deployed | Global endpoint: no regional isolation |
| Data at rest | Stays in the Region you use | Stays in the customer-designated geography for all deployment types | Stays in the location you chose, whichever endpoint you call |

Two details catch people out. Azure's APAC data zone spans multiple Asia Pacific regions, so it isn't Australian residency. And on every platform, the global option is where new models appear first and, often, where prices are lowest. AWS notes that for some models global cross-Region inference is priced lower than geographic, and Microsoft recommends Global Standard as the default starting point for exactly those reasons.

## Which AI models are available in Australia on each platform?

**Bedrock has the broadest onshore catalogue, Azure has a narrower one on pay-as-you-go, and Vertex has the fewest.** The Australian locations are the Bedrock Sydney region (ap-southeast-2) and Melbourne region (ap-southeast-4), Azure OpenAI in Australia East, and Vertex AI in australia-southeast1 (Sydney). This snapshot is a summary; each vendor's page lists exact models and versions.

| | Amazon Bedrock (Sydney, Melbourne) | Azure OpenAI (Australia East) | Google Vertex AI (australia-southeast1) |
|---|---|---|---|
| Frontier proprietary models processed in Australia | Several Claude models (including Claude Opus 5.5, Opus 5, Sonnet 5 and Haiku 4.5) via the Australia geography, with In-Region in Melbourne for some | Regional pay-as-you-go: gpt-4o and gpt-4.1-mini. Regional Provisioned (reserved capacity): a wider set up to the GPT-5.4 family | Gemini 3.5 Flash and Gemini 2.5 Flash (128k context) |
| Newest releases | Some newer Claude, OpenAI and other models are global-only | Newest GPT models on Global and some on the APAC data zone | Newest Gemini models on US and EU multi-regions |
| Open-weight models onshore | Many In-Region in Sydney: Mistral, Qwen, DeepSeek, gpt-oss, Gemma, NVIDIA Nemotron and others | Other Foundry models (Llama, DeepSeek, Mistral and others) listed on Global deployment types | None listed with an Australian commitment |
| Embeddings onshore | Amazon Titan and Cohere Embed models In-Region in Sydney | text-embedding-3-large, -3-small and ada-002 on regional Standard | text-embedding-004 |
| Partner models such as Claude | Native | Offered in Foundry; check deployment type and region | No Australian processing commitment listed for partner models |
| Fine-tuning with Australian residency | Set per model; check the model card | Regional fine-tuning listed only in US and Swedish regions; Australia East offers Global training without residency | Tuning not listed with an Australian commitment |

If a specific model is non-negotiable, that decides the platform. If Australian processing is non-negotiable, the list above decides which models you can use, and you should test your use case against those rather than the headline model.

## What do they do with your data?

**All three state that they don't use your prompts to train models; their abuse monitoring and retention details differ.**

| | Amazon Bedrock | Azure OpenAI (Foundry) | Google Vertex AI |
|---|---|---|---|
| Training on your content | AWS states content isn't used to improve base models and isn't shared with model providers | Microsoft states prompts and completions aren't used to train foundation models without permission, and aren't available to OpenAI | Google's service terms restrict training or fine-tuning on your data without prior permission or instruction |
| Model provider access | Models run in AWS-operated accounts; providers can't see prompts or logs | Models sold by Azure run in Microsoft's service boundary | Managed models run on Google infrastructure |
| Abuse monitoring retention | By default, Bedrock doesn't store inputs and outputs. Certain newer models retain flagged or all traffic for up to 30 days, in the Region where it's processed | Flagged prompts may be stored for human review in the resource's geography; approved customers can apply for modified abuse monitoring | Google may log prompts for abuse monitoring; customers can request an exception for zero data retention |
| Optional logging you control | Model invocation logging to your own account, disabled by default | Logging and monitoring you configure in Azure | Request-response logging to BigQuery, off by default |
| Other retention to watch | Cross-Region inference stores any retained data in the destination Region | Batch and Global types can process outside your geography | Grounding with Google Search stores query logs for up to three days with no opt-out |

Retention exceptions are model-specific and change, so check each model's page before sending personal information. Under APP 8 of the Privacy Act, processing personal information outside Australia can be a cross-border disclosure your organisation remains accountable for. See [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty) for why onshore residency and sovereignty aren't the same thing.

## How do governance and integration compare?

**Governance is broadly comparable; the deciding factor is usually which cloud your organisation already runs on.** Your identity, network, logging and key management controls should extend to the AI platform rather than sit beside it.

- **Amazon Bedrock** fits organisations on AWS: IAM for access, CloudTrail for API logging (including cross-Region inference requests, logged in your source Region), PrivateLink for private connectivity, and optional encryption with your own keys. It also offers agent tooling through AgentCore.
- **Azure OpenAI in Foundry** fits Microsoft-centric organisations: Entra ID identity, Azure networking and monitoring, configurable guardrails (content filters), and the same commercial relationship as Microsoft 365. Provisioned throughput gives predictable capacity for high-volume onshore workloads.
- **Vertex AI** fits Google Cloud organisations: Google Cloud IAM and networking, BigQuery integration, and explicit controls for zero data retention.

## How should you compare costs?

**Compare on the deployment type you'll actually use, because onshore options can be priced differently from global ones.** Bedrock, Azure OpenAI and Vertex AI pricing for language models is quoted per token on pay-as-you-go. Per-token prices change frequently, so use each vendor's pricing page for current AUD or USD rates rather than a figure from an article.

Things to check:

1. **Onshore vs global price.** Global routing can be cheaper. Azure describes Global Standard as having the lowest price; AWS says global cross-Region inference is cheaper than geographic for some models.
2. **Pay-as-you-go vs reserved capacity.** On Azure, several newer models are only available in Australia East on Regional Provisioned, which means committing to provisioned throughput units rather than paying per token.
3. **Batch discounts.** Batch processing is cheaper on every platform, but batch deployment types may process outside Australia.
4. **Currency.** Cloud bills are often in USD. Budget for exchange-rate movement.

Our [LLM running costs guide](/guides/llm-running-costs) shows how to turn token prices into a monthly estimate.

## Which should you choose?

**Choose the platform that runs your required model inside your required boundary, on the cloud you already operate.**

### Choose Amazon Bedrock if

- You need current Claude models or open-weight models processed in Australia.
- You're already on AWS, or you want the widest onshore model choice to test against.
- You want to switch between model providers without changing cloud.

### Choose Azure OpenAI if

- You're committed to OpenAI models and Microsoft's ecosystem, including Microsoft 365 and Entra ID.
- The models available in Australia East on regional Standard meet your quality bar, or your volume justifies reserved capacity.
- You want AI billed under your existing Microsoft agreement.

### Choose Vertex AI if

- You're standardised on Google Cloud and your data lives in BigQuery.
- Gemini Flash models with an Australian commitment handle your use case well in testing.

### Choose none of them (for this need) if

- Staff just need a productivity assistant inside Microsoft 365. Licensed Microsoft 365 Copilot may be simpler; see [Copilot vs a custom AI assistant](/guides/copilot-vs-custom-ai-assistant).
- You need a model fully under your own control. Consider hosting an open-weight model in your own account; see [open-weight vs API models](/guides/open-weight-vs-api-llms).

## A residency checklist before you build

1. Name the exact model and version you plan to use, and confirm its Australian availability and deployment type on the vendor's page.
2. Confirm where prompts are processed, not just where data is stored.
3. Check abuse monitoring and retention rules for that specific model.
4. Put embeddings, vector indexes, logs and backups in the same Australian region.
5. Disable or restrict features that send data elsewhere, such as global batch or web grounding, unless you've assessed them.
6. Design so the model can be swapped, because availability will change.
7. Record all of this for your privacy impact assessment.

## How All Webbed Labs approaches this

We work across AWS, Azure and Google Cloud and don't hold partner status with any of them, so our recommendation follows your requirements. By default we build in Australian regions: data, vector indexes and logs onshore, and inference onshore wherever the model you need supports it. Where a requirement can only be met with global processing, we document exactly what leaves Australia and why. We also design model access behind a thin layer so you can move to a better onshore model when one appears. See [private LLM deployment](/services/private-llm-deployment) and [cloud infrastructure](/services/cloud-infrastructure).
