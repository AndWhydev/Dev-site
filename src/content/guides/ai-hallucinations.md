---
title: "Why AI hallucinates and how to reduce it in business systems"
metaTitle: "Why AI Hallucinates and How to Reduce It"
description: "AI hallucinations are confident but false outputs. Why language models make things up, the main types, and the layered controls that reduce them at work."
eyebrow: "Explainer"
category: explainer
published: 2026-09-28
updated: 2026-09-28
summary: "An AI hallucination is output from a language model that sounds confident and plausible but is false, unsupported by its sources, or invented, such as a made-up citation, policy or figure. It happens because models generate the most likely-sounding text rather than looking facts up, and because training and testing have historically rewarded guessing over admitting uncertainty. Hallucinations can't be eliminated, but grounding, constraints, verification and human review reduce them to a level most business uses can manage."
takeaways:
  - "Hallucination is a built-in property of how language models generate text, not a bug that a future update will fully remove."
  - "There are two main kinds: factual errors about the world, and unfaithful answers that misstate the documents the model was given."
  - "Research by Kalai et al. (2025) argues models hallucinate partly because training and benchmarks reward guessing over saying \"I don't know\"."
  - "The strongest controls are grounding answers in retrieved sources, allowing and testing refusals, requiring citations, and checking outputs before they're acted on."
  - "In Australia, the OAIC treats hallucinated information about an identifiable person as personal information, with APP 10 accuracy obligations."
faqs:
  - q: "Can hallucinations be completely eliminated?"
    a: "No. Every current language model can produce false statements. The realistic goal is to make them rare, detectable and low-impact for your use case: ground the model in sources, let it decline, check its claims, and keep a human in the loop where errors matter."
  - q: "Does using RAG stop hallucinations?"
    a: "It reduces them substantially for questions your documents can answer, because the model works from supplied text instead of memory. It doesn't stop them: the model can still misread a passage, merge two sources or answer when retrieval found nothing relevant. You still need citations, refusal rules and testing."
  - q: "Are newer, bigger models less likely to hallucinate?"
    a: "Generally more capable models hallucinate less on common knowledge, but none are immune, and they can be more convincing when they are wrong. Model choice helps; system design matters more."
  - q: "Who is responsible if our AI gives a customer wrong information?"
    a: "Assume your organisation is. Customers and regulators will see the chatbot as speaking for the business. Treat AI outputs to customers with the same care as any other published information, and get legal advice on consumer law and privacy exposure for your specific use."
  - q: "How do we measure how often our system hallucinates?"
    a: "Build a test set of real questions with known correct answers and sources, including questions the system should refuse. Score each answer for correctness and for faithfulness to the retrieved sources, and rerun the set whenever you change the model, prompt or data."
sources:
  - title: "Why Language Models Hallucinate (Kalai, Nachum, Vempala and Zhang, 2025)"
    url: "https://arxiv.org/abs/2509.04664"
    publisher: "arXiv"
  - title: "A Survey on Hallucination in Large Language Models (Huang et al., 2023)"
    url: "https://arxiv.org/abs/2311.05232"
    publisher: "arXiv"
  - title: "Reduce hallucinations"
    url: "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations"
    publisher: "Anthropic"
  - title: "Guidance on privacy and the use of commercially available AI products"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., 2020)"
    url: "https://arxiv.org/abs/2005.11401"
    publisher: "arXiv"
related:
  - title: "What is RAG (retrieval-augmented generation)?"
    href: "/guides/what-is-rag"
  - title: "How to evaluate an LLM application before launch"
    href: "/guides/llm-evaluation"
  - title: "Using personal information in AI systems under the Privacy Act"
    href: "/guides/privacy-act-and-ai"
  - title: "LLM integration services"
    href: "/services/llm-integration"
service:
  title: "LLM integration"
  href: "/services/llm-integration"
disclaimer: none
---

## Why do language models make things up?

**Because a language model writes by predicting plausible next words, not by looking up facts, and it has been trained and tested in ways that reward a confident guess over "I don't know".** When the model has solid patterns for a fact, the plausible answer is usually the true one. When it doesn't, such as for an obscure date, a niche regulation or a document it has never seen, it still produces fluent text in the right shape. That text can be wrong.

A 2025 paper by Kalai, Nachum, Vempala and Zhang makes the incentive problem explicit. They argue that "language models hallucinate because the training and evaluation procedures reward guessing over acknowledging uncertainty". Most benchmarks score a wrong answer and a refusal the same, zero, so a model that always guesses scores higher than one that admits doubt. The authors' proposed fix is to change how benchmarks are scored so that honest uncertainty stops being penalised.

For a business the practical lessons are:

- The model doesn't know what it doesn't know, unless you design the system so it can tell.
- Asking for an answer "confidently" makes things worse; permission to decline makes them better.
- Anything factual the model relies on from memory, rather than from a source you supplied, carries hallucination risk.

## What kinds of hallucination are there?

**Researchers split hallucinations into factuality errors, where the output contradicts real-world facts, and faithfulness errors, where it misstates the input or source it was given.** That distinction, from the survey by Huang et al. (2023), matters because the fixes differ.

| Type | What it looks like | Typical cause | Main fix |
|---|---|---|---|
| Fabricated fact | A plausible but wrong date, figure or name | Answering from memory | Ground in retrieved sources |
| Fabricated source | A citation, case or URL that doesn't exist | Model imitating the shape of a reference | Only cite from retrieved documents; verify links |
| Unfaithful summary | A summary adds, drops or reverses a point | Long inputs, ambiguous passages | Quote first, then summarise; check against source |
| Wrong source blend | Merges two policies or two customers' details | Several similar passages retrieved | Better retrieval and metadata; cite per claim |
| Invented capability | "I've updated your booking" when nothing happened | No real tool call made | Only confirm actions from actual tool results |
| Outdated fact | States something that has since changed | Training cut-off | Retrieve current data; show dates |

The "invented capability" row deserves attention in [AI agents](/guides/what-is-an-ai-agent). A model that says it did something is not evidence it did. The system should report actions from tool results, not from the model's narration.

## How risky are hallucinations for your use case?

**The risk depends less on how often the model errs than on what happens when it does, and whether anyone would notice.**

| Use case | Impact of an error | Chance it's caught | Sensible control level |
|---|---|---|---|
| Brainstorming, first drafts for staff | Low | High: a person edits it | Light |
| Internal knowledge assistant | Medium | Medium | Citations, refusals, feedback button |
| Customer-facing answers | High | Low: the customer trusts it | Grounding, strict scope, escalation, monitoring |
| Extracting data into systems of record | High | Low once stored | Validation rules, confidence thresholds, sampling review |
| Decisions affecting individuals (credit, claims, eligibility) | Very high | Low | Human decision-maker, full audit trail, legal review |

## How do you reduce hallucinations in a business system?

**Use several layers, because no single technique is enough.** Roughly in order of impact:

1. **Ground answers in sources.** Retrieve relevant passages from trusted documents and instruct the model to answer only from them. This is the core idea of [retrieval-augmented generation](/guides/what-is-rag), which Lewis et al. (2020) found produced more factual output than the model alone.
2. **Allow and test "I don't know".** Anthropic's guidance lists giving the model explicit permission to admit uncertainty as a basic technique that "can drastically reduce false information". Then test it with questions the sources can't answer.
3. **Require citations per claim.** Each statement links to the passage that supports it. Better still, have the system check each claim against a supporting quote and remove any claim it can't support.
4. **Quote before reasoning on long documents.** Asking the model to extract the relevant word-for-word quotes first, then answer from them, keeps it anchored to the text.
5. **Narrow the scope.** A model told it only answers questions about your leave policies is harder to lead astray than a general assistant.
6. **Use structure and validation.** For extraction, force a schema and validate outputs: dates must parse, totals must add up, codes must exist in your system.
7. **Get facts from systems, not memory.** Prices, balances and stock levels should come from a database or API call, never from the model.
8. **Check consistency.** Running the same query more than once and comparing outputs can flag unstable answers for review.
9. **Keep a human in the loop** where errors are costly, and make AI-generated content clearly labelled.
10. **Measure continuously.** Track correctness and faithfulness on a fixed test set, and review real conversations. See [how to evaluate an LLM application](/guides/llm-evaluation).

What doesn't work well: telling the model "don't hallucinate", relying on the model's own stated confidence, or [fine-tuning](/guides/what-is-llm-fine-tuning) it on your documents in the hope it will memorise them. Fine-tuned facts go stale and can't be cited.

## A worked example: a policy assistant

A staff assistant answers questions about HR policies. Before controls, testers find it sometimes quotes a parental leave entitlement from a superseded policy and occasionally invents a policy number.

The fixes, in order:

1. Remove superseded policies from the index, and store each policy's effective date as metadata.
2. Retrieve with hybrid search so policy numbers match exactly.
3. Require every answer to cite the policy name, section and effective date.
4. Add a rule: if no retrieved passage answers the question, reply that it can't find it and point to the HR contact.
5. Add 40 test questions, including 10 that should be refused, and run them on every change.

The result is not a system that never errs. It's one whose errors are visible (a citation a person can check), rarer, and fail safely.

## What do Australian rules say about inaccurate AI output?

**The OAIC says hallucinated information about an identifiable person is personal information, so the Privacy Act's accuracy obligations apply.** Its October 2024 guidance on commercially available AI products states that "inferred, incorrect or artificially generated information produced by AI models (such as hallucinations and deepfakes), where it is about an identified or reasonably identifiable individual, constitutes personal information". Under APP 10, organisations must take reasonable steps to ensure the personal information they collect, use and disclose is accurate.

The OAIC recommends human oversight, verifying outputs before recording them, and marking AI-generated information in records as such. If your system writes AI output about people into a CRM, case file or decision, build those steps in. Read more in [using personal information in AI systems](/guides/privacy-act-and-ai).

## How All Webbed Labs handles hallucination risk

We start by rating the use case on the risk matrix above, then choose controls to match. By default that means answers grounded in retrieved sources with per-claim citations, tested refusal behaviour, facts pulled from systems of record rather than the model, schema validation for extraction, and an evaluation set that runs on every change. See our [LLM integration](/services/llm-integration) and [RAG knowledge base](/services/rag-knowledge-base) services.
