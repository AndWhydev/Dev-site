---
title: "How to evaluate an LLM application before launch"
metaTitle: "What Is LLM Evaluation? Metrics and How to Test an AI App"
description: "What is LLM evaluation? How to test an AI app before launch: building an eval set, RAG and generation metrics, LLM-as-a-judge, tools and regression testing."
eyebrow: "Explainer"
category: explainer
published: 2026-09-28
updated: 2026-09-28
summary: "LLM evaluation is the practice of testing an AI application against a fixed set of realistic questions with known good answers, scoring its outputs with code, AI graders and people, and repeating that test every time the prompt, model or data changes. It replaces \"it seemed fine when we tried it\" with numbers you can track, compare and sign off against."
takeaways:
  - "An eval set is a version-controlled list of realistic inputs, expected outcomes and grading rules, built from real user questions and deliberate edge cases."
  - "Score retrieval and generation separately: a wrong answer from a RAG system is either a search failure or a writing failure, and the fix differs."
  - "LLM-as-judge grading scales well but has known biases (position, verbosity, self-preference), so calibrate it against human labels before trusting it."
  - "Run the eval suite on every change to prompts, models, chunking or data, and block releases that regress."
  - "Human review stays essential for high-stakes answers, for calibrating judges and for reading samples of live traffic after launch."
faqs:
  - q: "How many test cases do we need?"
    a: "Start with 50 to 100 well-chosen cases covering your main question types and known edge cases, then grow toward several hundred as real traffic shows you what users ask. Anthropic's guidance favours more cases with automated grading over a handful of hand-graded ones."
  - q: "Can we use public benchmarks instead?"
    a: "Public benchmarks tell you how capable a model is in general. They say little about whether it answers your policy questions correctly from your documents. Use them to shortlist models, then decide with your own eval set."
  - q: "How is LLM evaluation different from normal software testing?"
    a: "Normal tests expect the same output every time and check it exactly. LLM output varies in wording between runs, so evals score qualities such as correctness, faithfulness and relevance, often with graded scales, AI judges and repeated runs. The discipline is the same: fixed test cases, automatic runs and blocked releases on regression."
  - q: "What is RAG evaluation?"
    a: "RAG evaluation is LLM evaluation applied to a retrieval-augmented generation system. It scores the retrieval step (did the right passages come back?) and the generation step (is the answer faithful to them, correct and relevant?) separately, so you can tell which half to fix."
  - q: "Who should write the expected answers?"
    a: "Subject matter experts from the business, not the developers. Engineers can build the harness and automated checks, but only the people who own the content know what a correct and complete answer looks like."
  - q: "What score is good enough to launch?"
    a: "There's no universal number. Set thresholds per risk: a customer-facing answer about fees might need near-perfect faithfulness, while an internal search helper can tolerate more misses. Agree those thresholds with the business owner before testing, not after."
  - q: "Do evals stop after launch?"
    a: "No. Models are updated, documents change and users ask new things. Keep sampling live conversations, add failures to the eval set, and rerun the suite on a schedule and before any change."
sources:
  - title: "Define success criteria and build evaluations"
    url: "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    publisher: "Anthropic"
  - title: "Evaluation best practices"
    url: "https://developers.openai.com/api/docs/guides/evaluation-best-practices"
    publisher: "OpenAI"
  - title: "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (Zheng et al., 2023)"
    url: "https://arxiv.org/abs/2306.05685"
    publisher: "arXiv"
  - title: "Ragas: available metrics"
    url: "https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/"
    publisher: "Ragas"
  - title: "AI Risk Management Framework and Generative AI Profile (NIST AI 600-1)"
    url: "https://www.nist.gov/itl/ai-risk-management-framework"
    publisher: "National Institute of Standards and Technology"
related:
  - title: "What is RAG (retrieval-augmented generation)?"
    href: "/guides/what-is-rag"
  - title: "Why AI hallucinates and how to reduce it"
    href: "/guides/ai-hallucinations"
  - title: "What is prompt injection?"
    href: "/guides/prompt-injection"
  - title: "QA and testing services"
    href: "/services/qa-testing"
service:
  title: "LLM integration services"
  href: "/services/llm-integration"
disclaimer: none
---

## What is LLM evaluation?

**LLM evaluation (often shortened to "LLM evals") is the repeatable measurement of how well an AI application performs on the tasks it was built for.** You assemble realistic inputs with known good outcomes, run the system over them, score the results, and track those scores over time. Engineers call the test sets and the harness that runs them "evals".

Evaluation matters because language model output varies. The same question can produce different wording on each run, a model update can quietly change behaviour, and a small prompt edit that fixes one answer can break ten others. Without evals, every change is a guess. OpenAI's guidance names informal "vibe-based" testing as an anti-pattern for exactly this reason.

## What goes into an eval set?

**An eval set is a version-controlled file of test cases, each with an input, the expected outcome and a rule for grading it.** It should look like your real traffic, plus the awkward cases real traffic will eventually contain.

Anthropic's documentation recommends making evals task-specific and deliberately including edge cases: missing or irrelevant input data, overly long input, poor or hostile user input, and ambiguous questions where even humans would disagree.

| Case type | Share of set (rough guide) | Example for an HR policy assistant |
|---|---|---|
| Common questions | 40 to 50% | "How many days of personal leave do I get?" |
| Multi-step or comparative | 15 to 20% | "Can I combine long service leave with parental leave?" |
| Unanswerable from the documents | 10 to 15% | "What's the CEO's salary?" (should decline) |
| Ambiguous or underspecified | 10% | "What's the policy on travel?" (domestic or international?) |
| Adversarial | 5 to 10% | Attempts to extract other staff records or override instructions |
| Recently changed content | 5 to 10% | Questions whose answer changed in the latest policy version |

Where to get the cases:

1. Real questions from support tickets, search logs, emails or a pilot group.
2. Subject matter experts listing the questions they're asked most, and the ones people get wrong.
3. Deliberate edge cases and attack cases, including the injection patterns in our [prompt injection guide](/guides/prompt-injection).
4. Every failure found after launch, added back so it can't recur unnoticed.

## Which metrics matter for retrieval and for generation?

**Measure the retrieval step and the generation step separately, because they fail for different reasons.** In a [RAG system](/guides/what-is-rag), a bad answer means either the right document wasn't found or the model misused what it was given.

| Stage | Metric | What it tells you | How it's usually scored |
|---|---|---|---|
| Retrieval | Recall at k | Did the right passage appear in the top k results? | Code, against labelled source passages |
| Retrieval | Precision / context precision | How much of what was retrieved was relevant? | Code or LLM judge |
| Retrieval | Mean reciprocal rank | How high did the first correct passage rank? | Code |
| Generation | Faithfulness (groundedness) | Is every claim supported by the retrieved context? | LLM judge, spot-checked by people |
| Generation | Answer correctness | Does the answer match the expert's reference answer? | LLM judge or exact match for structured answers |
| Generation | Relevance | Does it actually address the question? | LLM judge |
| Generation | Citation accuracy | Do cited sources support the sentence they're attached to? | LLM judge plus code checks |
| Behaviour | Refusal accuracy | Does it decline when the answer isn't in the documents? | Code on labelled unanswerable cases |
| Operations | Latency and cost per answer | Is it fast and affordable enough? | Logged automatically |

Open-source libraries such as Ragas package several of these, including context precision, context recall, faithfulness and response relevancy. Low faithfulness is the metric most closely linked to what people call [hallucination](/guides/ai-hallucinations).

For structured tasks, prefer code. If the model classifies an email into one of six categories or extracts an ABN, exact match or a validation rule is cheaper and more reliable than any AI grader.

## Can you trust an LLM to grade another LLM?

**Partly, once you've checked it against people.** The most cited study, Zheng et al. (2023), found that strong LLM judges agreed with human preferences over 80% of the time, about the same rate at which humans agree with each other. The same paper documented position bias, verbosity bias and self-enhancement bias, along with limited reasoning ability.

Practical rules for using an LLM judge:

- **Use a different model** from the one that generated the answer, as Anthropic recommends, to reduce self-preference.
- **Write a rubric** with explicit criteria and a short scale, and ask for structured output such as a single score or a pass/fail.
- **Prefer pairwise comparisons** when choosing between two prompt or model versions. OpenAI's guidance notes models are more reliable at comparing than at open-ended scoring.
- **Randomise order** in pairwise tests to cancel position bias.
- **Don't reward length.** Tell the judge that a shorter complete answer beats a longer padded one.
- **Calibrate.** Have experts label a sample of 50 to 100 cases, measure how often the judge agrees, and fix the rubric until agreement is acceptable. Recheck when you change the judge model.

## How does regression testing work for AI?

**Every change to a prompt, model, retrieval setting or document set triggers a full eval run, and a drop below agreed thresholds blocks the release.** This is ordinary software regression testing adapted to probabilistic output.

A typical release flow:

1. A developer changes the chunking strategy to improve long-document answers.
2. The eval suite runs automatically: several hundred cases, scored by code and a calibrated judge.
3. Results are compared with the last approved baseline, per metric and per case type.
4. Faithfulness holds, recall improves, but refusal accuracy on unanswerable questions falls from 95% to 81%.
5. The release is blocked, the regression is investigated and fixed, and the suite runs again.

Because outputs vary between runs, run borderline cases more than once and watch trends rather than reacting to a single point of movement. Pin model versions in production so a provider update doesn't change behaviour without an eval run first.

## Where does human review fit?

**People set the standard, calibrate the automated graders and review what the system does in production.** Automation provides scale; humans provide judgement.

- **Before launch:** experts write reference answers and grade a sample of outputs directly.
- **High-stakes outputs:** answers about money, health, legal rights or safety get human review before release to users, or a human stays in the loop permanently.
- **After launch:** reviewers read a regular sample of live conversations, especially ones users rated poorly, and turn failures into new test cases.

NIST's Generative AI Profile (AI 600-1) frames this as ongoing measurement and management across the system's life, not a one-off gate.

## LLM evaluation vs model benchmarks

**Benchmarks measure a model; evaluation measures your application.** Public leaderboards test general abilities, such as reasoning, coding or knowledge, on shared datasets. Useful for shortlisting models, but they can't tell you whether your assistant answers your customers' questions correctly from your documents with your prompt.

| | Model benchmark | Application evaluation |
|---|---|---|
| What's tested | A model on its own | Your whole system: prompt, retrieval, tools and model |
| Test data | Public datasets | Your real questions and documents |
| Who writes the answers | Benchmark authors | Your subject matter experts |
| Use it to | Shortlist models | Decide whether to launch, and catch regressions |

## What tools are used for LLM evaluation?

**You need three things: a place to keep test cases, a harness that runs them and scores results, and tracing so you can see what happened in each case.** Options range from a spreadsheet and a script to dedicated platforms.

- **Open-source evaluation frameworks** such as Ragas, promptfoo and DeepEval provide ready-made metrics for RAG and generation, and run in a CI pipeline.
- **Model provider tooling**, such as the evaluation features in OpenAI's platform, can run graders over datasets.
- **Tracing and observability platforms** such as Langfuse and LangSmith record prompts, retrieved context and outputs in production so failures can be turned into new test cases.

The tool matters less than the test set. A well-built eval set can move between tools; a clever tool with poor test cases measures the wrong thing.

## Pre-launch evaluation checklist

- [ ] Success criteria and thresholds agreed with the business owner, per risk level
- [ ] Eval set of at least 50 to 100 cases, including unanswerable and adversarial cases
- [ ] Reference answers written or approved by subject matter experts
- [ ] Retrieval and generation scored separately
- [ ] LLM judge calibrated against human labels, with agreement recorded
- [ ] Eval suite runs automatically on every change and blocks regressions
- [ ] Model versions pinned in production
- [ ] Latency and cost per answer measured on realistic load
- [ ] Live traffic sampling and feedback loop in place for after launch

## How All Webbed Labs approaches this

We agree success criteria and build the first eval set during discovery, with your subject matter experts, so the target is fixed before we write prompts. The suite then runs inside our delivery pipeline alongside type checks, visual tests and security scans, and a senior engineer reviews results before any release. You keep the eval set in your repository as a lasting asset. See our [LLM integration](/services/llm-integration), [RAG knowledge base](/services/rag-knowledge-base) and [QA and testing](/services/qa-testing) services.
