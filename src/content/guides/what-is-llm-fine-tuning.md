---
title: "What is LLM fine-tuning, and when don't you need it?"
metaTitle: "What Is LLM Fine-Tuning, and When Don't You Need It?"
description: "Fine-tuning retrains a language model on your examples to change how it behaves. How it works, the main methods, and when prompting or RAG is the better choice."
eyebrow: "Explainer"
category: explainer
published: 2026-09-28
updated: 2026-09-28
summary: "LLM fine-tuning is the process of further training an existing large language model on a set of your own examples so that it adjusts its internal weights and reliably behaves the way you want, such as following a format, adopting a tone or doing a narrow task well. It changes how a model responds; it's a poor way to teach it new facts, which is usually better done with retrieval (RAG)."
takeaways:
  - "Fine-tuning changes the model's weights using example inputs and ideal outputs; prompting and RAG leave the model untouched."
  - "It's best for behaviour: consistent formats, classification, tone, and making a small, cheap model do one job as well as a big one."
  - "It's weak for knowledge. Research comparing the two found RAG consistently beat fine-tuning at adding facts."
  - "Parameter-efficient methods such as LoRA train a tiny fraction of the weights, making fine-tuning far cheaper than it was."
  - "Try better prompts, examples and retrieval first. Fine-tune only when you have an evaluation set proving they fall short."
faqs:
  - q: "Can I fine-tune a model on our company documents so it knows our business?"
    a: "You can, but it's usually the wrong tool. Models absorb new facts poorly through fine-tuning, can't cite where an answer came from, and go stale the moment a document changes. For question answering over company knowledge, use RAG, and consider fine-tuning later only if you need a particular answer style."
  - q: "How much training data does fine-tuning need?"
    a: "It depends on the task and method. Narrow formatting or classification tasks can show results with a few hundred high-quality examples; harder tasks need thousands. Quality and consistency matter more than volume: a few hundred carefully reviewed examples usually beat thousands of noisy ones."
  - q: "What does fine-tuning cost?"
    a: "On managed platforms you typically pay for training by tokens processed (training data tokens multiplied by the number of passes, called epochs), a monthly storage fee per custom model, and inference, which may require dedicated capacity. Self-hosting an open-weight model adds GPU costs. The ongoing costs usually outweigh the one-off training run."
  - q: "Can we fine-tune Claude or GPT models?"
    a: "Some hosted models can be fine-tuned through the vendor or a cloud platform, and many open-weight models can be fine-tuned anywhere. Which models support which methods, and in which regions, changes often. Check the provider's current documentation before planning around it."
  - q: "Will a fine-tuned model still work when the base model is retired?"
    a: "No. A fine-tune is tied to one base model version. When the vendor deprecates that version, you retrain on a newer one, which means keeping your training data and evaluation set ready to reuse."
sources:
  - title: "LoRA: Low-Rank Adaptation of Large Language Models (Hu et al., 2021)"
    url: "https://arxiv.org/abs/2106.09685"
    publisher: "arXiv"
  - title: "QLoRA: Efficient Finetuning of Quantized LLMs (Dettmers et al., 2023)"
    url: "https://arxiv.org/abs/2305.14314"
    publisher: "arXiv"
  - title: "Training language models to follow instructions with human feedback (Ouyang et al., 2022)"
    url: "https://arxiv.org/abs/2203.02155"
    publisher: "arXiv"
  - title: "Fine-Tuning or Retrieval? Comparing Knowledge Injection in LLMs (Ovadia et al., 2023)"
    url: "https://arxiv.org/abs/2312.05934"
    publisher: "arXiv"
  - title: "Model optimization"
    url: "https://developers.openai.com/api/docs/guides/model-optimization"
    publisher: "OpenAI"
  - title: "Customize your model to improve its performance for your use case"
    url: "https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html"
    publisher: "Amazon Web Services"
related:
  - title: "RAG vs fine-tuning: which does your business need?"
    href: "/guides/rag-vs-fine-tuning"
  - title: "What is RAG (retrieval-augmented generation)?"
    href: "/guides/what-is-rag"
  - title: "Open-weight models vs API models for Australian enterprises"
    href: "/guides/open-weight-vs-api-llms"
  - title: "How to evaluate an LLM application before launch"
    href: "/guides/llm-evaluation"
service:
  title: "Private LLM deployment"
  href: "/services/private-llm-deployment"
disclaimer: none
---

## What does fine-tuning actually change?

**Fine-tuning changes the model itself.** A large language model is, underneath, billions of numeric weights learned during its original training. Fine-tuning runs a second, much smaller round of training on your examples, nudging those weights so that the model's default behaviour shifts towards what the examples show.

Compare that with the other ways of customising a model:

| Method | What changes | Effort | Good for |
|---|---|---|---|
| Prompting | The instructions in each request | Hours | Most tasks; always the first step |
| Few-shot examples | Worked examples added to each prompt | Hours | Formats and edge cases |
| [RAG](/guides/what-is-rag) | Relevant documents added to each prompt | Weeks | Company knowledge, current facts, citations |
| Fine-tuning | The model's weights | Weeks, plus upkeep | Consistent behaviour, narrow tasks, smaller models |
| Pre-training from scratch | Everything | Months and millions of dollars | Almost never a business decision |

The famous demonstration of what fine-tuning can do is OpenAI's InstructGPT work (Ouyang et al., 2022). A 1.3 billion parameter model fine-tuned on human demonstrations and preferences produced outputs people preferred over the original 175 billion parameter GPT-3, despite having 100 times fewer parameters. The lesson for businesses: fine-tuning's biggest payoff is often making a smaller, cheaper model behave well on a specific job.

## How does fine-tuning work, step by step?

**You collect examples of the input and the ideal output, train on them, then test the new model against a held-back set.** In practice:

1. **Define the task narrowly.** "Extract these 14 fields from supplier invoices as JSON", not "be better at finance".
2. **Build the dataset.** Hundreds to thousands of example pairs, reviewed by someone who knows what a correct answer looks like. Remove personal information you don't need.
3. **Hold back a test set** the model never trains on, plus a baseline score from the best prompt-only approach.
4. **Choose a method** (see the next section) and a base model.
5. **Train.** On a managed platform this is a job you submit; on your own infrastructure it's a GPU run.
6. **Evaluate** against the held-back set and the baseline. If it doesn't clearly beat good prompting, stop.
7. **Deploy and monitor**, and keep the dataset, because you'll retrain when the base model is retired.

## What are the main types of fine-tuning?

**The methods differ in what kind of feedback the model learns from and how much of it gets retrained.**

| Method | What you provide | Typical use |
|---|---|---|
| Supervised fine-tuning (SFT) | Prompt and ideal response pairs | Formats, extraction, classification, house style |
| Preference tuning (for example DPO) | A better and a worse response for each prompt | Tone, helpfulness, avoiding unwanted styles |
| Reinforcement fine-tuning | Prompts plus a grader or reward function | Multi-step reasoning tasks with checkable answers |
| Distillation | Outputs from a large "teacher" model | Making a small model match a big one on your task |
| LoRA and other parameter-efficient methods | Any of the above, training small add-on weights | Cheaper training and hosting of many variants |

Parameter-efficient methods changed the economics. LoRA (Hu et al., 2021) freezes the original weights and trains small add-on matrices instead; against full fine-tuning of GPT-3 175B, it cut trainable parameters by 10,000 times and GPU memory by 3 times. QLoRA (Dettmers et al., 2023) added 4-bit quantisation and showed a 65 billion parameter model could be fine-tuned on a single 48 GB GPU. Managed services such as OpenAI's platform and Amazon Bedrock now offer supervised, preference or reinforcement fine-tuning and distillation for selected models.

## When does a business need fine-tuning?

**When you have a stable, well-defined task, a measured gap that prompting and retrieval can't close, and enough good examples.** Signals that it may be worth it:

- A very high volume of one task, where a fine-tuned small model would cut inference cost or latency substantially.
- Output must follow a strict structure or classification scheme every time, and prompting still fails on too many cases.
- A specialised style or domain language that's hard to describe but easy to show.
- You need to run on a small open-weight model inside your own environment for sovereignty reasons, and it needs help to match a larger hosted model. See [open-weight vs API models](/guides/open-weight-vs-api-llms).

And when you don't:

- **You want the AI to know your documents.** Ovadia et al. (2023) found RAG consistently outperformed fine-tuning for adding knowledge, both familiar and new. Use retrieval.
- **Your facts change** monthly or weekly. Every change would need retraining.
- **You need citations.** A fine-tuned model can't point to where it learned something.
- **You haven't tried a strong prompt with examples.** Many "we need fine-tuning" problems disappear here.
- **You don't have an evaluation set.** Without one you can't tell whether the fine-tune helped.

For a full side-by-side decision, read [RAG vs fine-tuning](/guides/rag-vs-fine-tuning).

## What goes wrong with fine-tuning?

**The common failures are data quality, weak evaluation and underestimating upkeep.**

- **Garbage in, confident garbage out.** Inconsistent examples teach inconsistent behaviour, delivered fluently.
- **Forgetting general skills.** Heavy training on a narrow task can degrade other abilities. Test beyond the target task.
- **Baked-in facts go stale.** Anything factual the model learned is frozen at training time, and may be stated confidently after it changes, which feeds [hallucinations](/guides/ai-hallucinations).
- **Base model lock-in.** When the vendor retires the base version, the fine-tune goes with it.
- **Privacy in the weights.** Personal information in training data can be memorised and reproduced. Minimise it and keep the model's access as controlled as the data's.
- **Hidden running costs.** Custom models may need dedicated capacity, and on Bedrock, for example, you pay for training tokens multiplied by epochs plus monthly storage per custom model. See [LLM running costs](/guides/llm-running-costs).

## Worked example: should this team fine-tune?

A claims team wants a model to read incident emails and output a claim category, urgency and five extracted fields.

1. **Baseline:** a well-written prompt with 10 examples on a mid-sized hosted model scores 91% on 300 held-back emails.
2. **Target:** 97%, and volume is 40,000 emails a month.
3. **Option A:** move to a larger model. Accuracy rises to 95%, but cost per email roughly triples.
4. **Option B:** fine-tune a small model on 2,000 reviewed examples. If it reaches 97% at a fraction of the per-email cost, the training and upkeep pay for themselves.

The figures here are illustrative, but the logic is the point: fine-tuning was justified by a measured gap, a stable task and high volume, not by a feeling that the model should "know us better".

## How All Webbed Labs approaches fine-tuning

We treat fine-tuning as a late optimisation, not a starting point. We build the evaluation set first, push prompting and retrieval as far as they go, and fine-tune only when the numbers show a gap worth the upkeep. Where a fine-tuned open-weight model needs to run inside your own cloud account in an Australian region, that's part of our [private LLM deployment](/services/private-llm-deployment) work, measured using the approach in our guide to [LLM evaluation](/guides/llm-evaluation).
