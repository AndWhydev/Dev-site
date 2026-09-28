---
title: "Tokens and context windows explained (and why they drive cost)"
metaTitle: "What Is a Token in AI? Tokens and Context Windows Explained"
description: "What is a token in AI, and what does context window mean? How LLM tokens and context windows work, rough English ratios, and why they drive cost and speed."
eyebrow: "Explainer"
category: explainer
published: 2026-09-28
updated: 2026-09-28
summary: "In AI, a token is the chunk of text a large language model reads and writes, usually a word or part of a word; in English one token is roughly 4 characters or three quarters of a word. The context window is the maximum number of tokens a model can consider in one request, including its own reply. Providers bill per token, and every token in the window costs money and time, so what you put in context is the biggest lever on an AI system's running cost and speed."
takeaways:
  - "Rule of thumb from Anthropic and OpenAI: 1 token is about 4 characters or 0.75 words of English, so 1,000 words is roughly 1,300 tokens."
  - "Everything sent counts: system prompt, conversation history, retrieved documents, tool definitions, images, and the model's reply."
  - "Output tokens typically cost around five times as much as input tokens, and they are generated one at a time, so long answers are slow as well as expensive."
  - "Chat applications resend the whole conversation on every turn, so cost per message rises as a conversation gets longer."
  - "Prompt caching can cut the price of repeated input by up to 90% at the time of writing, and is the first optimisation to check."
faqs:
  - q: "How many tokens is a page of text?"
    a: "A typical A4 page of business prose, around 500 words, is roughly 650 to 700 tokens in English using the common rule of thumb. Tables, code, unusual names and non-English text can use more. Always measure with the provider's token counter on your real documents."
  - q: "Are tokens the same across providers?"
    a: "No. Each model family uses its own tokenizer, so the same text produces different counts. Anthropic notes that its newer models produce about 30% more tokens for the same text than earlier ones. Compare prices per task on your own content, not price per token alone."
  - q: "If a model has a 1 million token window, should I fill it?"
    a: "Usually not. Anthropic's documentation warns that accuracy and recall degrade as context grows, which it calls context rot. Sending only the most relevant material is cheaper, faster and often more accurate than sending everything."
  - q: "Is a token limit the same as a context window?"
    a: "Often, but not always. Context window, context length and context size all mean the maximum tokens a model can consider in one request. Token limit can also mean the maximum output a model will write in one reply, or a rate limit such as tokens per minute on your account. Check which one an error message or pricing page refers to."
  - q: "What happens if I go over the context window?"
    a: "The model can't consider more than its window, so the request has to be shortened: an API call that's too long is refused, and chat applications typically drop or summarise older turns to fit. Well-built systems manage this deliberately, by retrieving only relevant passages and summarising long histories, rather than letting content fall off the end."
  - q: "Does a large context window mean the model remembers my conversations?"
    a: "No. The context window is working memory for a single request. Models don't remember earlier requests; a chat application resends the conversation each turn, which is why long chats cost more. Any longer-term memory is a feature the application builds, by storing and re-inserting information."
  - q: "Do images and PDFs use tokens?"
    a: "Yes. Images, PDF pages, audio and video are converted into tokens and billed as input. Google, for example, documents a small image as 258 tokens and audio at about 32 tokens per second for Gemini models, at the time of writing."
sources:
  - title: "Pricing (token definition, cache and batch pricing, tokenizer note)"
    url: "https://platform.claude.com/docs/en/about-claude/pricing"
    publisher: "Anthropic"
  - title: "Context windows"
    url: "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    publisher: "Anthropic"
  - title: "Prompt caching"
    url: "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    publisher: "Anthropic"
  - title: "Reducing latency"
    url: "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-latency"
    publisher: "Anthropic"
  - title: "Key concepts: tokens"
    url: "https://developers.openai.com/api/docs/concepts"
    publisher: "OpenAI"
  - title: "Prompt caching"
    url: "https://developers.openai.com/api/docs/guides/prompt-caching"
    publisher: "OpenAI"
  - title: "Understand and count tokens"
    url: "https://ai.google.dev/gemini-api/docs/tokens"
    publisher: "Google"
related:
  - title: "What does it cost to run an LLM in production?"
    href: "/guides/llm-running-costs"
  - title: "What is RAG (retrieval-augmented generation)?"
    href: "/guides/what-is-rag"
  - title: "What are embeddings in AI?"
    href: "/guides/what-are-embeddings"
  - title: "How much does a RAG knowledge base cost?"
    href: "/guides/rag-knowledge-base-cost"
service:
  title: "LLM integration services"
  href: "/services/llm-integration"
disclaimer: none
---

## What is a token in AI?

**In AI, a token is the unit of text a language model (LLM) processes: often a whole short word, sometimes part of a longer word, a number or a punctuation mark.** Models never see letters or words directly. A tokenizer splits text into tokens from a fixed vocabulary, and the model reads and writes those. OpenAI's documentation gives the example that " tokenization" becomes two tokens, " token" and "ization", while " the" is one.

So when people ask what "tokens" mean in ChatGPT, Claude or Gemini, the answer is the same: the pieces of text the model counts. Tokens matter to buyers for one reason: providers measure and bill model usage in tokens, and rate limits are set in tokens too.

## How many tokens is a word?

**For English, both Anthropic and OpenAI give the same rule of thumb: 1 token is about 4 characters, or about 0.75 words.** Google's Gemini documentation says 100 tokens is roughly 60 to 80 English words. Treat these as planning estimates only.

| Text | Rough size | Approximate tokens (English) |
|---|---|---|
| A short customer question | 20 words | 25 to 30 |
| A detailed email | 300 words | about 400 |
| An A4 page of prose | 500 words | 650 to 700 |
| A 20-page policy document | 10,000 words | about 13,000 |
| A 300-page manual | 120,000 words | about 160,000 |

Real counts vary. Anthropic states the ratio "varies by language and content type", and each model family uses a different tokenizer. Anthropic also notes that its Claude 4.7 and later models use a newer tokenizer that produces about 30% more tokens for the same text than earlier Claude models. Before committing to a budget, run a sample of your real documents through the provider's token counting tool.

## What does context window mean?

**The context window, sometimes called context length, is the maximum number of tokens a model can take into account in a single request, including the response it writes.** Anthropic describes it as the model's "working memory", distinct from the much larger body of data the model was trained on.

Everything in the request counts toward it:

- the system prompt (your standing instructions)
- the conversation so far, including earlier answers
- documents or search results you retrieve and insert
- tool definitions and tool results, for [AI agents](/guides/what-is-an-ai-agent)
- images and PDF pages, converted to tokens
- the model's own output, including any reasoning it does before answering

Window sizes have grown fast. At the time of writing (September 2026), Anthropic lists a 1 million token window for most current Claude models, including Claude Fable 5.1, Opus 5.5 and Sonnet 5, and 200,000 tokens for Claude Haiku 4.5 and older models such as Sonnet 4.5. Check the vendor's model page for the exact model you plan to use, because sizes differ and change.

## Is a bigger context window better?

**A large window lets you send more, but sending more costs more, runs slower and can make answers worse.** Anthropic's documentation says plainly that "as token count grows, accuracy and recall degrade", a phenomenon it calls context rot.

This is why most business systems that answer from company documents use [retrieval-augmented generation (RAG)](/guides/what-is-rag) rather than pasting every document into every request. Retrieval finds the few passages that matter, using [embeddings](/guides/what-are-embeddings) and search, and sends only those. The result is a smaller, cheaper, faster prompt that the model can focus on.

## Why are tokens and context windows important for cost?

**Because you pay for every input token sent and every output token generated, and output is priced higher.** At the time of writing, Anthropic's published prices put output at five times the input rate across its current models, for example $2 USD per million input tokens and $10 USD per million output tokens for Claude Sonnet 5. Prices change often; always check the live pricing page.

Here is an illustrative calculation for one question to an internal policy assistant, using those Sonnet 5 list prices:

| Component | Tokens | Rate (USD per million) | Cost (USD) |
|---|---|---|---|
| System prompt and instructions | 3,000 | $2 input | $0.0060 |
| Retrieved policy passages | 4,000 | $2 input | $0.0080 |
| User question and short history | 500 | $2 input | $0.0010 |
| Model's answer | 400 | $10 output | $0.0040 |
| **Total per question** | **7,900** | | **$0.0190** |

At 10,000 questions a month that's about $190 USD in model fees, before hosting, search, logging and monitoring. Small per-request numbers multiply quickly, which is why our guide to [LLM running costs](/guides/llm-running-costs) walks through full monthly budgets.

## The hidden multiplier: conversation history

**Chat systems resend the entire conversation on every turn, so each message costs more than the last.** Models don't remember earlier turns between requests; the application supplies them each time.

| Turn | New tokens added | Total input sent this turn |
|---|---|---|
| 1 | 8,000 (prompt, context, question) | 8,000 |
| 2 | 900 (answer plus next question) | 8,900 |
| 5 | 900 | 11,600 |
| 10 | 900 | 16,100 |

By turn 10, one message costs about twice as much in input as the first. Long-running agents that call tools repeatedly show the same pattern, faster. Common controls are summarising older turns, dropping stale tool results and capping conversation length.

## Why do tokens affect speed?

**More input takes longer to process before the answer starts, and output is generated one token at a time, so long answers take longer to finish.** Anthropic's latency guidance recommends minimising tokens in both the prompt and the expected output, choosing a faster model where quality allows, and streaming responses so users see text as it's produced. The metric to watch is time to first token for interactive features, and total generation time for background jobs.

## How does caching reduce cost and latency?

**Prompt caching stores the processed form of a repeated prompt prefix, such as a long system prompt or document, so later requests can reuse it at a large discount.** At the time of writing:

- **Anthropic** charges 1.25x the base input price to write to a 5-minute cache and 0.1x to read from it (lower on some newer models), so caching pays for itself after one reuse.
- **OpenAI** enables caching by default on supported models and describes cached input as discounted by up to 90%, with a 1,024-token minimum on GPT-5.6 and later. On those models it also charges 1.25x the input price for cache writes.

Both say caching also reduces the time spent processing input before a response begins. In the example above, caching the 3,000-token system prompt cuts that line from $0.0060 to $0.0006 per question, saving about $54 USD a month at 10,000 questions. Caching only works on content that is identical from the start of the prompt, so put stable instructions first and changing content last.

Other levers worth checking:

1. **Batch processing** for work that can wait: Anthropic lists a 50% discount on input and output at the time of writing.
2. **Model routing:** send classification and extraction to a smaller, cheaper model and reserve large models for hard reasoning.
3. **Output caps:** limit answer length where a short answer is the right answer.
4. **Tighter retrieval:** fewer, better passages beat many loosely related ones.

## How All Webbed Labs approaches this

We measure token usage on your real documents during discovery and put a per-request and per-month cost estimate in the proposal, with the arithmetic shown. In the build, we structure prompts for caching, log token counts per feature, and set alerts so cost growth is visible early rather than on the invoice. See our [LLM integration](/services/llm-integration) service, or the [RAG knowledge base cost guide](/guides/rag-knowledge-base-cost) for a full budget example.
