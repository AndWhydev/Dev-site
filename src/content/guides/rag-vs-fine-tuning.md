---
title: "RAG vs fine-tuning: which does your business need?"
metaTitle: "RAG vs Fine-Tuning vs Prompt Engineering: Which to Use?"
description: "RAG vs fine-tuning (and prompt engineering): RAG gives a model your knowledge, fine-tuning changes how it behaves. Costs, data residency, and when to combine."
eyebrow: "Comparison"
category: compare
published: 2026-09-28
updated: 2026-09-28
summary: "Choose between RAG and fine-tuning by the problem you have: use retrieval-augmented generation (RAG) when the model needs to answer from your documents and data, especially if they change or need citations and access control. Use fine-tuning when you need the model to behave differently, such as following a strict output format, a house style or a narrow classification task, and prompting alone can't get there. Most business knowledge assistants need RAG, not fine-tuning. Some mature systems use both."
takeaways:
  - "RAG adds knowledge at question time by retrieving relevant passages; fine-tuning adjusts the model's weights with training examples."
  - "If the problem is 'the model doesn't know our information', RAG is almost always the answer. If it's 'the model knows enough but behaves wrongly', consider fine-tuning."
  - "RAG keeps knowledge current, supports citations and can respect per-user permissions. A fine-tuned model can't forget a document you've withdrawn without retraining."
  - "At the time of writing, fine-tuning inside Australian regions is far more limited than inference, which matters if training data must stay onshore."
  - "Try better prompts and RAG first. Fine-tune only when evaluation shows a gap they can't close."
faqs:
  - q: "What is model fine-tuning?"
    a: "Fine-tuning is further training of an existing, pre-trained model on your own examples, usually hundreds to thousands of input and output pairs, so its weights shift towards the behaviour you want. It doesn't build a model from scratch. Methods such as LoRA train a small set of extra weights instead of the whole model, which makes it cheaper. Our guide to what LLM fine-tuning is covers it in more depth."
  - q: "Can fine-tuning teach a model our company's knowledge?"
    a: "Partly, but it's an unreliable way to do it. Fine-tuning is good at teaching patterns, formats and style. It's poor at making a model recall specific facts accurately, it can't cite where an answer came from, and every update to your documents means another training run. RAG is the standard approach for knowledge."
  - q: "Is RAG cheaper than fine-tuning?"
    a: "Usually to start, because there's no training step and you can use a general model as is. RAG adds retrieval infrastructure and longer prompts, so per-question costs are higher. A fine-tuned smaller model can be cheaper per request at high volume, but you pay for training data preparation, training runs and retraining whenever things change."
  - q: "Does fine-tuning a model send our data overseas?"
    a: "It can. At the time of writing, several cloud platforms run fine-tuning jobs only in a handful of US and European regions, or offer global training that doesn't keep data in Australia. Check the specific model's customisation regions before you prepare training data containing personal information."
  - q: "What about very long context windows? Do they replace RAG?"
    a: "For small document sets, putting everything in the prompt can work and is simpler. It gets expensive and slower as the collection grows, and it doesn't solve access control. For a few dozen documents, long context may be enough; for thousands of documents with different permissions, you still need retrieval."
  - q: "Can we use RAG and fine-tuning together?"
    a: "Yes. A common pattern is RAG for knowledge plus a fine-tuned model for a narrow step, such as classifying a query, extracting fields into a fixed schema, or matching a regulated tone. Only add the fine-tuned step once you've measured that it improves results."
sources:
  - title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., 2020)"
    url: "https://arxiv.org/abs/2005.11401"
    publisher: "arXiv"
  - title: "LoRA: Low-Rank Adaptation of Large Language Models (Hu et al., 2021)"
    url: "https://arxiv.org/abs/2106.09685"
    publisher: "arXiv"
  - title: "Foundry Models sold by Azure: fine-tuning models and regions"
    url: "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure"
    publisher: "Microsoft Learn"
  - title: "Customize your model to improve its performance for your use case"
    url: "https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html"
    publisher: "Amazon Web Services"
  - title: "Regional availability by models (Amazon Bedrock)"
    url: "https://docs.aws.amazon.com/bedrock/latest/userguide/models-region-compatibility.html"
    publisher: "Amazon Web Services"
  - title: "Data residency for generative AI"
    url: "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/data-residency"
    publisher: "Google Cloud"
  - title: "Guidance on privacy and developing and training generative AI models"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-developing-and-training-generative-ai-models"
    publisher: "Office of the Australian Information Commissioner"
  - title: "OpenAI API pricing (fine-tuning platform notice)"
    url: "https://developers.openai.com/api/docs/pricing"
    publisher: "OpenAI"
  - title: "Amazon Bedrock pricing"
    url: "https://aws.amazon.com/bedrock/pricing/"
    publisher: "Amazon Web Services"
related:
  - title: "What is RAG (retrieval-augmented generation)?"
    href: "/guides/what-is-rag"
  - title: "What is LLM fine-tuning, and when don't you need it?"
    href: "/guides/what-is-llm-fine-tuning"
  - title: "How much does a RAG knowledge base cost?"
    href: "/guides/rag-knowledge-base-cost"
  - title: "Open-weight models vs API models for Australian enterprises"
    href: "/guides/open-weight-vs-api-llms"
  - title: "RAG knowledge base development"
    href: "/services/rag-knowledge-base"
service:
  title: "RAG knowledge base development"
  href: "/services/rag-knowledge-base"
disclaimer: none
---

## What's the difference between RAG and fine-tuning?

**RAG changes what the model can see; fine-tuning changes how the model behaves.** With retrieval-augmented generation, your system searches your documents when a question arrives and passes the most relevant passages to the model along with the question. With fine-tuning, you train an existing model further on hundreds or thousands of examples so its weights shift towards the behaviour you want.

An analogy that holds up: RAG is giving a capable new hire access to the company wiki and telling them to check it before answering. Fine-tuning is sending them on a training course so they write in your format without being reminded. One gives knowledge, the other builds habits.

| | RAG | Fine-tuning |
|---|---|---|
| What it changes | The information in the prompt at question time | The model's weights |
| Best at | Answering from your documents, current facts, citations | Consistent format, tone, narrow tasks, shorter prompts |
| Keeping it current | Re-index changed documents, usually minutes | Retrain and redeploy, usually days |
| Citations | Yes, to the source passage | No |
| Per-user access control | Yes, filter retrieval by permission | No: everything trained in is available to every user |
| Removing information | Delete it from the index | Retrain without it |
| Upfront effort | Document ingestion, chunking, search tuning, evaluation | Curating and labelling training examples, training runs, evaluation |
| Ongoing cost driver | Longer prompts and retrieval infrastructure | Retraining, hosting or premium rates for custom models |
| Typical failure | Retrieves the wrong passage, so answers from the wrong source | Confident answers that blend training examples incorrectly |

For a fuller explanation of each technique, see [what is RAG](/guides/what-is-rag) and [what is LLM fine-tuning](/guides/what-is-llm-fine-tuning).

## Where do prompt engineering, LoRA, embeddings, MCP and agents fit?

**Prompt engineering is the step before both; LoRA is a way to fine-tune; embeddings are part of RAG; MCP and agents are ways to connect a model to tools.** Buyers often see these listed as alternatives, but only prompt engineering is a genuine third option for the same problem.

| Term | What it is | How it relates to RAG vs fine-tuning |
|---|---|---|
| Prompt engineering | Writing clear instructions and worked examples into the prompt | Try it first. It's free to test and often removes the need for either technique |
| LoRA | Low-Rank Adaptation: freezes the model's weights and trains small added matrices | A cheaper form of fine-tuning, not an alternative to it |
| Embeddings | Numeric representations of text that let a system find passages by meaning | The search engine inside most RAG systems; see [what are embeddings](/guides/what-are-embeddings) |
| Training from scratch | Pre-training a new model on a huge corpus | Almost never needed by a business; fine-tuning starts from an existing model |
| MCP | The Model Context Protocol, an open standard for connecting models to tools and data sources | Complements RAG: it can fetch live records from systems, while RAG searches documents. See [what is MCP](/guides/what-is-mcp) |
| AI agents | Systems where the model chooses its own steps using tools | An agent can use RAG as one of its tools; fine-tuning rarely comes into it |
| Long context | Putting whole documents into a very large prompt | Can replace RAG for small, stable document sets (see the FAQ below) |

So the practical order is: prompt engineering, then RAG if the gap is knowledge, then fine-tuning if the gap is behaviour.

## Which one does your business need?

**Most organisations asking this question need RAG.** The usual complaint is "the model doesn't know our policies, products or procedures", and that's a knowledge problem. Fine-tuning is the right tool for a different complaint: "the model has the information but won't reliably do what we need with it".

### Choose RAG if

- Staff or customers ask questions that should be answered from your documents, policies, contracts or knowledge base.
- The content changes weekly or monthly.
- Answers need citations so people can check them.
- Different users are allowed to see different documents.
- You need to withdraw information quickly, for example a superseded policy or a document subject to a legal hold.
- You want to switch model vendors later without redoing the work.

### Choose fine-tuning if

- The task is narrow and repetitive: classifying emails, extracting fields into a fixed schema, tagging claims or tickets.
- You need a very consistent output style or format that prompting doesn't achieve reliably.
- You have, or can create, several hundred high-quality labelled examples.
- You want a smaller, faster, cheaper model to match a larger model's quality on one task at high volume.
- The underlying knowledge is stable, or isn't what the task depends on.

### Choose neither (yet) if

- You haven't tried a well-written prompt with a current model and a few worked examples. This is free to test and resolves a surprising share of "we need fine-tuning" requests.
- You don't have an evaluation set. Without one, you can't tell whether either technique helped. Our guide to [evaluating an LLM application](/guides/llm-evaluation) explains how to build one.

## Worked example: one firm, two problems

**Here's how the choice plays out for a single business.** Picture a mid-sized Australian insurer with two AI projects on the table.

**Problem 1: claims staff need answers from 3,000 pages of policy wordings, product disclosure statements and internal procedures.** Documents are updated each quarter, answers must quote the relevant clause, and some procedures are restricted to senior assessors. This is RAG. Fine-tuning would bake quarterly content into weights that go stale, couldn't cite clauses and couldn't hide restricted procedures from junior staff.

**Problem 2: incoming claim emails need to be classified into one of 40 categories and key fields extracted into the claims system.** Volume is high, the categories are stable, and the insurer has two years of historical emails already labelled by staff. A general model with good prompting might reach acceptable accuracy. If evaluation shows it doesn't, or the per-email cost at volume is too high, fine-tuning a smaller model on the labelled history is a reasonable next step.

The same organisation needs both techniques, for different jobs. Neither problem needs a model trained from scratch.

## RAG vs fine-tuning cost: how do they compare?

**RAG usually costs less to start and more per question; fine-tuning costs more to start and can cost less per request at scale.** The exact numbers depend on the model, volumes and vendor pricing, which change often, so treat this as a map of cost drivers rather than a price list. Current rates are on each vendor's pricing page, linked in the sources.

| Cost element | RAG | Fine-tuning |
|---|---|---|
| Data preparation | Cleaning and structuring documents, extracting text from PDFs and scans | Writing or curating labelled examples, often the largest cost |
| Build | Ingestion pipeline, vector index, retrieval tuning, permissions, citations | Training pipeline, training runs, comparison against the base model |
| Evaluation | Needed | Needed, and repeated after each retraining |
| Per-request model cost | Higher: retrieved passages lengthen every prompt | Lower if a smaller tuned model replaces a larger one |
| Hosting | Vector database or search index | Some platforms charge for storing or hosting custom models, or require reserved capacity to serve them |
| Change cost | Low: re-index | Higher: re-curate data, retrain, re-evaluate |

A simple way to reason about per-request cost: if RAG adds 3,000 tokens of retrieved context to each question and you handle 50,000 questions a month, that's 150 million extra input tokens a month. Multiply by the input token price of your chosen model to get the monthly cost of retrieval context. Prompt caching and tighter retrieval can cut that substantially. For more detail, see [what it costs to run an LLM in production](/guides/llm-running-costs) and [RAG knowledge base costs](/guides/rag-knowledge-base-cost).

## What about Australian data residency?

**Inference is increasingly available in Australian regions; fine-tuning is much less so.** If your training data includes personal or sensitive information that must stay onshore, check this before you commit to fine-tuning.

At the time of writing (September 2026):

- **Azure OpenAI in Microsoft Foundry** lists regional ("Standard") fine-tuning for its OpenAI models only in US and Swedish regions. Australia East offers "Global" training, which Microsoft states is cheaper but doesn't provide data residency.
- **Google Vertex AI** (now documented by Google as Gemini Enterprise Agent Platform) publishes per-model data residency commitments. Its table lists no Australian residency commitment for Gemini tuning jobs, although some Gemini inference and text embeddings do carry an australia-southeast1 commitment.
- **OpenAI's own API** has announced it is winding down its fine-tuning platform: it's closed to new users, and existing fine-tuned models remain available until their base models are deprecated. That's a reminder that a fine-tuned model ties you to a vendor's roadmap in a way a RAG index doesn't.
- **Amazon Bedrock** supports supervised fine-tuning, reinforcement fine-tuning and distillation for selected models, with region support set per model. Check the model card for customisation regions before assuming Sydney or Melbourne.

RAG is easier to keep onshore. The document store, vector index and retrieval code can all run in an Australian region under your own account, and the model call can use an Australian region or geography where your chosen model supports it. The OAIC's guidance on developing and training generative AI models also applies: using personal information to train a model is a use you need to justify under the APPs, while retrieval can limit what personal information ever reaches the model. See [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty) for the underlying distinction.

## When should you combine them?

**Combine them when you have a working RAG system and evaluation shows a specific, repeatable weakness that better prompting can't fix.** The order matters: RAG first, measure, then fine-tune the narrow step that's failing.

Patterns that work:

1. **Query routing.** A small fine-tuned classifier decides which knowledge source or workflow a question belongs to, then RAG answers it.
2. **Structured extraction.** RAG finds the relevant clause; a fine-tuned model extracts it into your system's exact schema.
3. **Tuned embeddings or rerankers.** Improving retrieval for specialist vocabulary (legal, medical, engineering) can lift answer quality more than tuning the generating model.
4. **Tone for regulated communication.** RAG supplies the facts; a tuned model writes them in approved language for customer letters.

Patterns to avoid: fine-tuning a model on your documents so it "knows" them, and fine-tuning before you have an evaluation set to prove it helped.

## How All Webbed Labs approaches this

We start with the cheapest approach that could work: a current model, a well-designed prompt and, where knowledge is involved, retrieval over your documents in an Australian region. We build an evaluation set from real questions during discovery, so the decision to fine-tune (or not) rests on measured results rather than preference. When fine-tuning is justified, we check where the training job will run before any data is prepared and document it for your privacy impact assessment. See our [RAG knowledge base](/services/rag-knowledge-base) and [LLM integration](/services/llm-integration) services.
