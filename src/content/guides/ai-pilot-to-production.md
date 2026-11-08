---
title: "From AI pilot to production: why proofs of concept stall and how to ship one"
metaTitle: "AI Proof of Concept to Production: The Graduation Checklist"
description: "Why AI pilots stall before production, and the engineering checklist to ship one: evaluation sets, security review, monitoring, human review, cost controls."
eyebrow: "Engineering guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "AI pilots usually stall for reasons that have little to do with the model: nobody measured the baseline, nobody owns the result, there is no agreed test of 'good enough', the pilot used a data export that production can't, and security and privacy reviews start only after the demo impressed everyone. A pilot designed to graduate fixes those up front. It runs on real data access, is judged against an evaluation set with acceptance thresholds, goes through security and procurement review in parallel, and is rebuilt for production with logging, fallbacks, cost limits, human review and a named person who signs off the release."
takeaways:
  - "Design the pilot to graduate: real data access, a named owner, a baseline and an acceptance threshold agreed before it starts."
  - "An evaluation set of real cases, scored the same way every time, is the single most useful artefact a pilot can produce."
  - "Start security, privacy and procurement reviews in week one, not after the demo."
  - "The production version is mostly ordinary engineering: logging, retries, fallbacks, rate limits, cost caps and a kill switch."
  - "Australia's Guidance for AI Adoption asks for documented deployment authorisation from the accountable person based on test results; build that step into your release process."
faqs:
  - q: "What is the difference between an AI proof of concept and a pilot?"
    a: "A proof of concept answers whether something can work at all, usually on a small sample in a sandbox. A pilot answers whether it works in your business, with real users, real data and real volumes for a set period. Many projects skip from a proof of concept to an announcement and never run a proper pilot, which is where they stall."
  - q: "How long does it take to get an AI pilot into production?"
    a: "For a contained feature such as document extraction or drafting replies inside an existing system, a typical shape is four to eight weeks of pilot and evaluation followed by six to twelve weeks of production engineering and rollout. Integration with older systems, regulated data and procurement reviews add time. These are typical ranges, not a quote."
  - q: "Why did our Copilot or chatbot pilot not get adopted?"
    a: "The common causes are vague use cases, no change to the actual workflow, permission problems that surfaced the wrong documents, and no one measuring whether time was saved. Adoption follows when a specific task is redesigned around the tool and the result is measured."
  - q: "Do we need to rebuild the pilot for production?"
    a: "Often partly. Pilot code tends to hard code prompts, skip error handling and rely on one person's credentials. Keep the evaluation set, the prompts that tested well and the lessons; rebuild the plumbing with proper authentication, logging, retries and configuration."
  - q: "What do government agencies need before putting AI into production?"
    a: "Federal agencies must follow the Digital Transformation Agency's Policy for the responsible use of AI in government. Version 2.0 took effect on 15 December 2025, and its mandatory requirements include accountable officials, transparency statements, AI use case accountability, internal use case registers, staff training and AI use case impact assessment."
sources:
  - title: "Guidance for AI adoption: implementation guidance"
    url: "https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-implementation-guidance"
    publisher: "National AI Centre"
  - title: "REP 798 Beware the gap: Governance arrangements in the face of AI innovation"
    url: "https://www.asic.gov.au/regulatory-resources/find-a-document/reports/rep-798-beware-the-gap-governance-arrangements-in-the-face-of-ai-innovation/"
    publisher: "ASIC"
  - title: "REP 798 full report (PDF), published 29 October 2024"
    url: "https://download.asic.gov.au/media/mtllqjo0/rep-798-published-29-october-2024.pdf"
    publisher: "ASIC"
  - title: "Policy for the responsible use of AI in government, version 2.1"
    url: "https://www.digital.gov.au/policy/ai/policy"
    publisher: "Digital Transformation Agency"
  - title: "Guidance on privacy and the use of commercially available AI products"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products"
    publisher: "Office of the Australian Information Commissioner"
related:
  - title: "How to evaluate an LLM application before launch"
    href: "/guides/llm-evaluation"
  - title: "Make an AI built app production ready"
    href: "/guides/make-ai-built-app-production-ready"
  - title: "AI development cost in Australia"
    href: "/guides/ai-development-cost-australia"
  - title: "Guidance for AI Adoption: the six essential practices"
    href: "/guides/guidance-for-ai-adoption"
service:
  title: "AI consulting"
  href: "/ai-consulting"
---

## Why do most AI pilots never reach production?

**Most AI pilots stall because they were built to impress rather than to graduate: they prove the model can do the task, but not that the business can run it safely, measure it and pay for it.** The model is rarely the blocker. The surrounding decisions are.

Regulators see the same pattern at scale. ASIC's REP 798 looked at 624 AI use cases across 23 financial services licensees, found that 61% of licensees planned to increase AI use within 12 months, and warned that in some cases governance and risk management lagged adoption. It also found many licensees relied heavily on third parties for their models without matching governance. Those gaps are exactly what stops a pilot at the production gate.

| Why it stalls | What it looks like | The fix, before the pilot starts |
|---|---|---|
| No baseline | "It feels faster" is the only evidence | Measure volume, time and errors on the current process |
| No owner | The innovation team built it; operations never asked for it | A business owner who will be accountable for the live feature |
| No definition of good | Every demo gets a different opinion | An evaluation set and an acceptance threshold |
| Pilot data shortcut | It ran on a spreadsheet export nobody can refresh | Real, permissioned access to the source systems |
| Late reviews | Security and privacy see it for the first time after sign off | Reviews started in week one |
| Hidden running costs | Token bills appear at full volume | A cost model and per user limits from day one |

## Designing a pilot so it can graduate

**A pilot can graduate when it answers four questions: does it work on real cases, can the business run it, is it safe enough, and is it worth the cost.** Write those as the pilot's exit criteria before any code is written.

Practically, that means a one page pilot charter: the workflow and its baseline, the accountable owner, the users in the pilot group, the data sources and how they will be accessed, the evaluation method and threshold, the reviews that will run in parallel, the budget for the pilot and the estimated running cost at full volume. A pilot that cannot fill in that page is a proof of concept, which is fine, as long as everyone calls it that. Our guide to [AI development cost in Australia](/guides/ai-development-cost-australia) covers the budget side.

## Evaluation sets and acceptance thresholds

**An evaluation set is a fixed collection of real cases with known good answers, scored the same way on every version of the system.** It turns "is it good enough?" from an opinion into a number, and it is what lets you change models or prompts later without guessing.

Build it from your own data: a few hundred representative cases, plus the awkward ones (incomplete inputs, unusual formats, attempts to misuse the system). Agree the scoring with the business owner, and set thresholds for each type of error, because some errors cost far more than others. An invoice coded to the wrong account is a nuisance; one paid to the wrong supplier is an incident.

The Guidance for AI Adoption describes the same discipline. Its implementation guidance asks organisations to define acceptance criteria and test methods that reflect the intended use and risks, to request test results from upstream model providers and check them against those criteria, and to obtain documented deployment authorisation and rationale from the accountable person, based on the test results. Our guide to [LLM evaluation](/guides/llm-evaluation) explains how to build and score the set.

## Security, privacy and procurement: run them during the pilot

**Start the security review, privacy assessment and vendor procurement in the first week of the pilot, so they finish when the evaluation does.** Run in sequence after a successful demo, they routinely add months.

- **Security:** threat model the feature, including [prompt injection](/guides/prompt-injection) through documents or emails the AI reads, data leakage across users, and what any tools the AI can call are allowed to do.
- **Privacy:** map what personal information goes in and comes out. The OAIC is clear that privacy obligations apply to inputs and to outputs that contain personal information, and that due diligence on a commercial AI product should cover suitability, human oversight and access.
- **Procurement:** the model provider's terms on training use, data retention and processing location, plus any subprocessors. Large customers and regulated buyers will ask, and APRA regulated buyers carry their own third party duties under [CPS 234](/guides/apra-cps-234-ai).

## Engineering the production version

**The production version of an AI feature is mostly ordinary engineering that pilots skip.** It is the difference between a demo that works when its builder is watching and a service that works at 2am on a public holiday.

1. **Configuration, not code.** Prompts, model names and thresholds live in versioned configuration, so a change is reviewed and can be rolled back.
2. **Logging and tracing.** Every request records inputs, retrieved context, model version, output, latency and cost, with personal information handled under your retention rules.
3. **Retries, timeouts and fallbacks.** Model providers have outages and rate limits. Decide what happens: a retry, a second provider, or a graceful handover to the manual process.
4. **Rate limits and cost caps.** Limits per user and per day, and an alert when spend runs ahead of forecast.
5. **Authentication and permissions.** The feature acts with the user's permissions, never a shared service account that can see everything.
6. **A kill switch.** A feature flag that turns the AI off and routes work back to the old process, tested before launch.

If the pilot was built quickly with AI coding tools, our guide to making an [AI built app production ready](/guides/make-ai-built-app-production-ready) covers the clean up.

## Human review and escalation in live use

**Decide which outputs a person must approve, which they spot check, and which go straight through, based on the cost of an error.** Then build the review step into the workflow, not as an extra screen people learn to click past.

A sensible pattern is to start with full review, measure the agreement rate between the AI and the reviewers, and relax review only where agreement stays high on the evaluation set and in production. Every output that affects a customer should have a path to a human, and every reviewer correction should be captured, because those corrections become new evaluation cases. The implementation guidance makes the same point about human control: build mechanisms that let people oversee and intervene while the system runs.

## Monitoring quality and cost after launch

**Monitor three things after launch: quality, cost and use.** A system that passed its evaluation can still drift as inputs, models and user behaviour change.

| Signal | What to track | Typical trigger for action |
|---|---|---|
| Quality | Reviewer correction rate, sampled scoring, complaints | Correction rate rises above the pilot level |
| Cost | Spend per item and per user, token use per request | Spend per item rises more than your agreed tolerance |
| Use | Active users, items processed, fallbacks to manual | Use falls, or fallbacks climb |
| Safety | Flagged outputs, blocked requests, incidents | Any serious incident |

Rerun the evaluation set on every model or prompt change, and on a schedule even when nothing has changed, because hosted models are updated by their providers. Our guide to [LLM running costs](/guides/llm-running-costs) covers the cost side.

## Timeline from pilot to production

**For a contained feature, a typical path is four to eight weeks of pilot and evaluation, then six to twelve weeks of production engineering and staged rollout.** These are typical ranges for planning, not a quote; integrations with older systems, regulated data and procurement add time.

| Phase | Typical length | Exit criterion |
|---|---|---|
| Charter and baseline | 1 to 3 weeks | Signed pilot charter, baseline measured |
| Pilot and evaluation | 4 to 8 weeks | Threshold met on the evaluation set; reviews complete |
| Production build | 4 to 8 weeks | Logging, fallbacks, limits, kill switch tested |
| Staged rollout | 2 to 4 weeks | Monitoring stable; owner signs deployment authorisation |

For federal agencies, add the steps in the DTA's policy: use case accountability, registration in the internal use case register and an impact assessment. Our guide to the [DTA AI policy](/guides/dta-ai-policy-government) explains them.

## How AWLabs approaches this

We treat a pilot as the first phase of a production build, so the charter, evaluation set and reviews are part of the plan from the start. Our [AI consulting](/ai-consulting) work and [AI readiness assessment](/services/ai-readiness-assessment) set the baseline and exit criteria, and the Schedule of Work then gives a fixed price for the production version with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, and the evaluation set, logs and kill switch are delivered with the code.
