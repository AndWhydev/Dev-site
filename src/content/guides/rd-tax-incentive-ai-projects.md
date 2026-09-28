---
title: "R&D Tax Incentive for AI and machine learning projects"
metaTitle: "R&D Tax Incentive for AI and Machine Learning Projects"
description: "When AI and machine learning work can be R&D under Australia's R&D Tax Incentive, what the official AI guidance rules out, and how to record experiments."
eyebrow: "Australian program"
category: australia
published: 2026-09-28
updated: 2026-09-28
summary: "AI work can qualify for the Australian R&D Tax Incentive, but using AI doesn't make an activity eligible. The official AI guidance on business.gov.au says an AI activity is core R&D only where there is a technical hurdle that experts can't resolve with existing knowledge, and a proposed solution is tested through planned experiments. Picking a model, wiring up an API, preparing data to a documented format or tuning parameters with known effects usually isn't core R&D. Records must be made as the work happens, and a registered R&D tax agent should assess any claim."
takeaways:
  - "business.gov.au has specific guidance on AI-related activities, which sits on top of the general software sector guide."
  - "Using a model or technique that is new to you doesn't make the work eligible; the hurdle has to be unknown to experts in the field."
  - "Researching and choosing a proven stack for a RAG chatbot isn't core R&D, according to the department's own example."
  - "Testing an unproven method on real-world data, with defined metrics and a baseline, can be core R&D."
  - "Evaluation runs, metrics and results logs are the natural records for AI experiments, but they must be created at the time."
faqs:
  - q: "Does building a chatbot on GPT or Claude qualify for the R&D Tax Incentive?"
    a: "Usually not by itself. The department's first AI example describes a company choosing proven platforms, models and RAG pipelines for a workplace chatbot and concludes that it isn't core R&D, because the outcome could be determined from existing knowledge. Specific experiments within the project may qualify if they target a genuine technical hurdle."
  - q: "Is fine-tuning a model R&D?"
    a: "It depends on what is unknown. The guidance says adjusting parameters using established methods, where the issue is known to be solvable that way and the effect is well understood, is unlikely to be core R&D. Testing a fine-tuning strategy whose effects aren't well understood, in an environment where established methods have failed, may be."
  - q: "Can data cleaning and labelling count?"
    a: "Standard preparation to meet a model's documented input requirements, where the transformations are known in advance, is unlikely to be core R&D. It may be a supporting activity if it is directly related to a core experiment, and in some cases it must also be done for the dominant purpose of supporting that experiment."
  - q: "We used AI coding assistants to build our product. Does that help a claim?"
    a: "No. The guidance says the requirements don't depend on the technology used. How the code was written is irrelevant; what matters is whether an activity resolved a technical hurdle through a systematic progression of work."
  - q: "Who should assess whether our AI project qualifies?"
    a: "A registered R&D tax agent, working from your technical records. You can also apply to the department for an advance finding if you want its view before you register."
sources:
  - title: "Artificial intelligence-related activities and the R&D Tax Incentive"
    url: "https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/sector-guides-for-r-and-d-tax-incentive-applicants/software-development/artificial-intelligence-related-activities-and-the-rd-tax-incentive"
    publisher: "business.gov.au"
  - title: "Software development sector guide for the R&D Tax Incentive"
    url: "https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/sector-guides-for-r-and-d-tax-incentive-applicants/software-development"
    publisher: "business.gov.au"
  - title: "Hypothetical machine learning case study"
    url: "https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/sector-guides-for-r-and-d-tax-incentive-applicants/software-development/hypothetical-machine-learning-case-study"
    publisher: "business.gov.au"
  - title: "Conducting supporting R&D activities for the R&DTI"
    url: "https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/check-if-you-are-eligible-for-the-randd-tax-incentive/conducting-supporting-rd-activities-for-the-rdti"
    publisher: "business.gov.au"
  - title: "Apply for the R&D Tax Incentive"
    url: "https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/apply-to-register-with-the-randd-tax-incentive"
    publisher: "business.gov.au"
  - title: "Checklist for claiming R&D tax incentive"
    url: "https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/incentives-and-concessions/research-and-development-tax-incentive/helping-you-get-r-d-claims-right/checklist-for-claiming-r-d-tax-incentive"
    publisher: "Australian Taxation Office"
related:
  - title: "R&D Tax Incentive for software development: what qualifies"
    href: "/guides/rd-tax-incentive-software-development"
  - title: "What counts as technical uncertainty for the R&D Tax Incentive?"
    href: "/guides/technical-uncertainty-rd-tax-incentive"
  - title: "R&D Tax Incentive and how we document software projects"
    href: "/r-and-d"
  - title: "How to evaluate an LLM application before launch"
    href: "/guides/llm-evaluation"
service:
  title: "LLM integration"
  href: "/services/llm-integration"
disclaimer: tax
---

## Can AI projects qualify for the R&D Tax Incentive?

**Yes, some AI activities can qualify, but the technology is irrelevant to eligibility.** The Department of Industry, Science and Resources published guidance on AI-related activities as a supplement to its software sector guide, and its central point is that the requirements "do not depend on the technology used". An AI activity is core R&D only when a technical hurdle exists and an expert in the field considers that only experimentation will show whether a proposed solution can resolve it.

That is a higher bar than many AI projects clear. A lot of commercial AI work in 2026 is integration: choosing a hosted model, connecting it to company data, and building a product around it. That can be hard, valuable work and still be routine in the program's sense.

The general rules (who can claim, the $20,000 expenditure threshold, the internal administration exclusion, registration within 10 months of your income year end) are the same as for any software project. We cover them in [R&D Tax Incentive for software development](/guides/rd-tax-incentive-software-development). This page deals with what is specific to AI.

## What does the official guidance count as AI-related activity?

**The department treats AI as part of software development, covering both building models and using AI inside software.** Its list of AI-related activities is:

1. Scoping and designing AI-enabled solutions
2. Developing and training AI models
3. Testing and evaluating model performance
4. Integrating AI into software applications and platforms
5. Deploying models into operational use
6. Monitoring, updating or maintaining AI systems over time

Any of these can be part of an R&D project. None of them is R&D automatically. Each activity still has to meet the core or supporting definitions on its own facts.

## Which AI work is unlikely to be core R&D?

**Work that experts could address with existing knowledge is unlikely to be core R&D, however complex it is.** The guidance also warns that using an AI model or technique that is new to you doesn't, by itself, make an activity eligible. The test is what is unknown to the field, not to your team.

The department lists these as unlikely to meet the core R&D requirements, and the table maps each to what it looks like on a typical build:

| Unlikely to be core R&D (per the guidance) | What it looks like on an AI project |
|---|---|
| Logging, alerts, dashboards or routine performance checks using established methods | Adding tracing and token cost dashboards to an LLM app |
| Cleaning, formatting and aligning data to a model's documented input requirements, where the transformations are known | Converting PDFs to text and chunking them to a documented size limit |
| Regression, acceptance or functionality tests where expected outcomes are known | Running a test suite to confirm the chatbot still answers set questions |
| Tuning parameters with established methods when the effect is well understood | Adjusting temperature or learning rate to a known good range |
| Integrating known model outputs into apps or dashboards with pre-defined logic | Showing a classifier's labels in a CRM screen |

These activities may still be supporting R&D if they are directly related to a core experiment. Where an activity produces goods or services, or is on the excluded list, it must also be done for the dominant purpose of supporting core R&D.

## What kind of AI work can be core R&D?

**AI work can be core R&D where there is a genuine technical hurdle, no expert can predict whether the proposed approach will resolve it, and you test it through planned experiments.** The guidance gives two short examples:

- Investigating whether a novel fine-tuning strategy, whose effects aren't well understood and which hasn't been applied in a comparable deployment environment, could resolve scalability issues where established methods have failed.
- Experimentally testing an AI architecture against domain-specific performance limits when nobody knows if it can work in the target domain or cope with the available data.

Note the shape of both: established methods have been tried or ruled out, the uncertainty is about the approach itself, and the answer can only come from running the experiment.

## A worked example: one RAG chatbot, three different answers

**The department's own examples use a single retrieval-augmented generation (RAG) chatbot to show how the same project contains ineligible, supporting and core activities.** It is the most useful illustration available for AI buyers, so here it is in summary.

| Activity | What the company did | Department's conclusion |
|---|---|---|
| 1. Research the stack | Desktop research into proven platforms, models, frameworks and RAG pipelines to choose a technology stack for a workplace chatbot | Not core R&D. The stack could be chosen from existing knowledge; there was no technical hurdle |
| 2. Research new chunking methods | Reviewed publications and developer communities on theoretical dynamic chunking methods, picked one, defined variables and success metrics | Can be a supporting activity, because it was done to refine the hypothesis for a planned core experiment |
| 3. Experiment on real-world data | Compared the new chunking methods with a baseline across repeated runs on real documents and queries, measuring semantic similarity, retrieval precision and recall, and answer faithfulness, then evaluated statistical significance | Can be core R&D. Background research found no solution experts were confident in, and the outcome on real-world data couldn't be predicted |

Two details in the third example matter. The company recorded, in an internal chat at the time, that experts couldn't predict the outcome. And several assumptions in its hypothesis turned out wrong, so it adjusted the hypothesis and ran again. That iteration is what a systematic progression of work looks like.

If you want to see what those measurements involve, our guide to [evaluating an LLM application](/guides/llm-evaluation) covers retrieval and faithfulness metrics, and [what is RAG](/guides/what-is-rag) explains the architecture.

## Where does the R&D usually sit in an AI project?

**In most AI projects, any core R&D is a small, identifiable set of experiments inside a larger body of routine delivery.** Mapping your project this way before you budget is more honest than hoping the whole build qualifies.

A typical enterprise AI build moves through discovery, data preparation, a first working version, evaluation, hardening and deployment. Discovery and stack selection are usually routine, as the department's first chatbot example shows. Data preparation is usually routine unless the transformation itself is the unknown. The first working version, built from documented APIs and patterns, is usually routine too.

The candidates for core R&D tend to appear at the evaluation stage. That is where a team finds out that the known techniques don't reach the accuracy, latency, cost or reliability the product needs, checks what the field already knows, and discovers the answer isn't there. From that point, a planned experiment against a baseline can meet the definition. Work built around that experiment, such as a test harness or a labelled evaluation set, may be supporting.

Hardening and deployment return to routine: logging, monitoring and integration using established methods.

Two practical consequences follow. First, you often can't know at the start whether a project will contain core R&D, so set up the record keeping anyway and let the evidence decide. Second, if the answer matters to a funding decision, you can apply to the department for an advance finding on specific activities. It gives you the department's view before you register, rather than after a review.

## How should an AI team record experiments?

**Records must show the technical hurdle, the hypothesis, the experiment and its results, and the purpose, and they must be made while the work happens.** The ATO calls these contemporaneous records and requires them to be kept for 5 years after you claim. AI teams have an advantage here: evaluation harnesses already produce much of the evidence, if you keep it.

A record template for each AI experiment:

1. **Hurdle.** The specific performance, accuracy, scale or behaviour problem, and the existing approaches you checked or tried.
2. **Why experts can't predict the answer.** Links to the papers, forum threads or expert advice that show the approach is unproven for your conditions.
3. **Hypothesis.** "Method X will lift metric Y above Z on dataset D compared with baseline B."
4. **Experiment design.** Dataset version, baseline, metrics, number of runs, and what result would reject the hypothesis.
5. **Run log.** Model and prompt versions, configuration, commit hash, and the raw results for every run, including failures.
6. **Evaluation.** How results were compared and what they showed.
7. **Conclusion and next step.** What was learnt, and whether the hypothesis was revised.
8. **Time and cost.** Hours and spend against the experiment, kept separate from product delivery work.

Keep the failed runs. A record that only shows the version that worked looks like routine development after the fact.

## Common traps in AI claims

**The most common problem is describing product development as research.** Watch for these:

- Treating "the model gave inconsistent answers" as a technical hurdle, when prompt changes and retrieval tuning from published practice would fix it.
- Counting the whole project as R&D when only a few experiments met the definition.
- Building the records at year end from memory. Backdated or vague records aren't appropriate records.
- Assuming AI-assisted coding makes the work innovative. It has no bearing on eligibility.
- Forgetting that software built mainly for your own internal administration is excluded from core R&D, AI or not.

## How All Webbed Labs handles AI experiments

We build AI systems with an evaluation harness from the start, because that is how you know whether a change helped. On projects where the client's R&D tax agent expects a claim, we go further: a technical uncertainty register at discovery, experiment tickets with the hypothesis written before work starts, versioned datasets and run logs, and time tracked per work package. We don't assess eligibility or prepare claims; we are not a registered tax agent, and that work belongs with one.

We will also tell you when an AI feature is straightforward integration. That is often the right engineering outcome even if it isn't R&D. See our [R&D Tax Incentive page](/r-and-d) for how we document projects, or our [LLM integration](/services/llm-integration) service.
