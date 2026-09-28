---
title: "Using personal information in AI systems under the Privacy Act"
metaTitle: "Privacy Act and AI: Using Personal Information in AI Systems"
description: "Using personal information in AI under Australia's Privacy Act: how the APPs apply to prompts, RAG, outputs and model training, based on OAIC guidance."
eyebrow: "Australian regulation"
category: australia
published: 2026-09-28
updated: 2026-09-28
summary: "Using personal information in AI systems is governed by the Privacy Act 1988, because Australia has no separate AI privacy law: the 13 Australian Privacy Principles apply to personal information going into an AI system, coming out of it, and used to train it. The OAIC's October 2024 guidance makes three points software teams most often miss: AI-generated or inferred information about an identifiable person is a new collection under APP 3, reusing data you already hold to train or fine-tune a model is usually a secondary use under APP 6, and publicly available data isn't automatically fair game for training."
takeaways:
  - "Prompts, retrieved documents, outputs, embeddings and logs can all contain personal information, and the APPs apply to each."
  - "The OAIC treats inferred, incorrect or generated information about an identifiable person, including hallucinations, as personal information."
  - "Training or fine-tuning on customer data is generally a secondary use that needs consent or a genuine reasonable expectation, and a privacy policy update alone usually won't create that expectation."
  - "The OAIC recommends, as best practice, not entering personal information into publicly available generative AI tools."
  - "APP 11 now expressly includes technical and organisational measures, and APP 8 applies whenever a model endpoint sits offshore."
  - "From 10 December 2026, AI that makes or substantially assists significant decisions must also be described in your privacy policy."
faqs:
  - q: "Can we put customer data into ChatGPT, Claude or Copilot?"
    a: "The OAIC's best practice position is not to enter personal information, especially sensitive information, into publicly available generative AI tools. Enterprise products with contractual controls, no training on your data and defined retention are a different risk profile, but you still need to satisfy APP 6 on use, APP 8 if data goes offshore and APP 11 on security. Do the due diligence the OAIC describes before rollout."
  - q: "Can staff use their own personal AI accounts for work?"
    a: "It's risky if work involves personal information. A personal account sits outside your organisation's contracts, retention settings and access controls, and the OAIC's best practice is not to enter personal information into publicly available generative AI tools at all. Give staff an approved tool and an acceptable use policy instead. Federal public servants have DTA guidance that rules out entering personal information or information classified OFFICIAL: Sensitive or above into public generative AI tools."
  - q: "Can we train or fine-tune a model on our customer records?"
    a: "Possibly, but it is usually a secondary use under APP 6. You need consent, or a strong case that customers would reasonably expect it and that it relates to the purpose of collection. For sensitive information the bar is higher: it generally requires consent. De-identifying the data first, or using retrieval instead of training, often removes the problem."
  - q: "Is scraped public web data fair to use for training?"
    a: "Not automatically. The OAIC says that just because data is publicly available does not mean it can legally be used to train or fine-tune generative AI models. Collection must be lawful and fair under APP 3, and sensitive information such as images of people generally needs consent."
  - q: "Is a hallucination about a real person a privacy issue?"
    a: "Yes. The OAIC's guidance says inferred, incorrect or artificially generated information about an identified or reasonably identifiable individual is personal information. Generating it is a collection under APP 3, and APP 10 requires reasonable steps to keep personal information accurate."
  - q: "Do we need a privacy impact assessment for an AI project?"
    a: "For private sector organisations it isn't generally mandatory, but the OAIC recommends one for AI systems as part of privacy by design. Australian Government agencies must do one for high privacy risk projects under the Australian Government Agencies Privacy Code."
  - q: "Are embeddings personal information?"
    a: "Treat them as if they are. An embedding derived from a document about a person can often be linked back to that person through the vector store's metadata or the source chunk. Apply the same access controls, retention and residency rules as the source data."
sources:
  - title: "Guidance on privacy and the use of commercially available AI products"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Guidance on privacy and developing and training generative AI models"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-developing-and-training-generative-ai-models"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Australian Privacy Principles"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Privacy and Other Legislation Amendment Act 2024 (No. 128, 2024), as made"
    url: "https://www.legislation.gov.au/C2024A00128/asmade/text"
    publisher: "Federal Register of Legislation"
  - title: "Staff guidance on public generative AI"
    url: "https://www.digital.gov.au/policy/ai/staff-guidance-public-generative-ai"
    publisher: "Digital Transformation Agency"
  - title: "Chapter 1: APP 1 Open and transparent management of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information"
    publisher: "Office of the Australian Information Commissioner"
related:
  - title: "Privacy Act automated decision-making rules from 10 December 2026"
    href: "/guides/privacy-act-automated-decision-making"
  - title: "AI data sovereignty in Australia: which models can run onshore?"
    href: "/guides/ai-data-sovereignty-australia"
  - title: "What is prompt injection and how do you defend against it?"
    href: "/guides/prompt-injection"
  - title: "RAG vs fine-tuning: which does your business need?"
    href: "/guides/rag-vs-fine-tuning"
service:
  title: "LLM integration services"
  href: "/services/llm-integration"
disclaimer: legal
---

## Does the Privacy Act apply to AI?

**Yes. The Privacy Act 1988 applies to personal information handled by AI systems exactly as it applies to any other system, and there is no AI exemption.** If your organisation is an APP entity, the 13 Australian Privacy Principles govern the data you put into a model, the data the model produces and the data you use to train it.

The Office of the Australian Information Commissioner (OAIC) published two pieces of guidance on 21 October 2024 that apply the APPs to AI: one for organisations using commercially available AI products, and one for developers building and training generative AI models. They don't create new law, but they tell you how the regulator reads the existing principles. In practice, Australia's AI privacy law is the Privacy Act itself, read through that guidance. This guide turns them into engineering decisions.

## Where does personal information flow in an AI system?

**Far more places than a typical web app.** Map every one of these before you design controls, because each is a separate collection, use, disclosure or storage point under the APPs.

| Data point | Example | APPs most engaged |
|---|---|---|
| User prompt | A staff member pastes a client email into a chatbot | APP 6 (use), APP 11 (security) |
| Retrieved context | A RAG system pulls a customer file into the prompt | APP 6, APP 11 |
| Model provider | The prompt is sent to an API endpoint, possibly offshore | APP 8 (cross-border), APP 11 |
| Model output | A summary or inference about a named person | APP 3 (collection), APP 10 (accuracy) |
| Embeddings and vector store | Chunks of HR records converted to vectors | APP 11, APP 11.2 (destruction) |
| Logs and traces | Full prompts and outputs kept for debugging | APP 11, retention |
| Training or fine-tuning set | Past support tickets used to tune a model | APP 3, APP 5 (notice), APP 6 |
| Automated decisions | A model score used to approve or refuse | APP 1.7 to 1.9 from 10 December 2026 |

The logs row is where most real exposure lives. Observability tools that capture full prompts create a second, often less protected, copy of everything users typed.

## How do the Australian Privacy Principles apply to AI?

**The principles are technology neutral, so the work is in applying them to AI's particular data flows.** Here are the ones that bite hardest.

### APP 3: generated information is a collection

The OAIC's guidance says that inferred, incorrect or artificially generated information produced by AI, including hallucinations and deepfakes, is personal information when it is about an identified or reasonably identifiable person. Generating it counts as collecting it, so it must be reasonably necessary for your functions and done by lawful and fair means. Practically: don't build features that infer things about people you have no business need to know, such as health status from purchase history.

### APP 6: reuse for AI is usually a secondary purpose

Personal information collected to deliver a service can generally only be used for that purpose unless the person consents or would reasonably expect the new use and it relates to the original purpose (directly relates, for sensitive information). The developer guidance is blunt that updating a privacy policy alone usually won't establish that reasonable expectation for AI training. Engineering implications:

- tag data at ingestion with the purpose it was collected for, so pipelines can filter;
- keep training and fine-tuning datasets separate from production data, with a documented basis for each source;
- support consent or opt-out flags that flow through to the training pipeline, not just the marketing system.

### APP 8: the model endpoint may be overseas

Sending a prompt containing personal information to a model hosted outside Australia is a disclosure to an overseas recipient in most configurations. You generally remain accountable for how that recipient handles it. Choosing an Australian region for inference, where the model you need is available, removes most of the APP 8 analysis. See [AI data sovereignty in Australia](/guides/ai-data-sovereignty-australia) for which options exist, and [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty) for the underlying distinction.

### APP 10: accuracy applies to outputs

Entities must take reasonable steps to ensure personal information they collect, use and disclose is accurate, up to date and complete. For AI that means evaluation before release, grounding answers in source documents, showing citations, and giving users a way to correct outputs. The developer guidance also points to clear disclaimers about a model's limitations. Our guide to [reducing AI hallucinations](/guides/ai-hallucinations) covers the techniques.

### APP 11: security now names technical and organisational measures

Since 11 December 2024, APP 11.3 says the reasonable steps to protect personal information include technical and organisational measures. For AI systems, that includes access control on retrieval (a user should only get answers from documents they could open themselves), defences against [prompt injection](/guides/prompt-injection), encrypted vector stores, and deleting or de-identifying data you no longer need, including in logs and embeddings.

### APP 1 and APP 5: tell people

The OAIC recommends updating your privacy policy with clear information about AI use and identifying public-facing AI tools, such as chatbots, to users. From 10 December 2026, APP 1.7 to 1.9 add a specific duty to describe automated decisions that significantly affect people, covered in our guide to the [Privacy Act automated decision-making rules](/guides/privacy-act-automated-decision-making).

## Using an AI product vs building or training a model

**Using a vendor's product is mostly a due diligence and configuration problem; training a model is mostly a data rights problem.** The two OAIC guides reflect that split.

| Question | Using a commercial AI product | Developing or training a model |
|---|---|---|
| Main risk | Staff entering personal information; vendor retention and training | Lawfulness of the training data |
| Key APPs | APP 6, APP 8, APP 11 | APP 3, APP 5, APP 6, APP 10 |
| OAIC best practice | Don't enter personal information into public generative AI tools | Public availability doesn't make data usable for training |
| Engineering controls | Enterprise tenancy, no-training terms, retention settings, data loss prevention, SSO | Dataset provenance records, de-identification, consent flags, opt-out handling |
| Documents to keep | Vendor assessment, privacy impact assessment, acceptable use policy | Data sourcing register, PIA, model card, evaluation results |

Many business problems that look like they need fine-tuning are better solved with retrieval, which keeps personal information in a controlled store rather than baking it into model weights where it can't be deleted. [RAG vs fine-tuning](/guides/rag-vs-fine-tuning) compares the two.

## Worked example: an internal support assistant

**A realistic project shows how the principles stack up.** Imagine a 400 person insurer wants an assistant that helps call centre staff answer policy questions using past claim notes and policy documents.

1. **Scope the data.** Policy documents contain no personal information. Claim notes do, including health information, which is sensitive information under the Privacy Act. The first design decision is whether the assistant needs claim notes at all. If staff only need policy wording, leaving claim notes out removes most of the risk.
2. **Check the purpose.** If claim notes are included, they were collected to assess claims. Using them to help staff handle that same customer's claim is likely within the original purpose. Using them to tune a model that answers questions about other customers is a different purpose and needs its own APP 6 basis.
3. **Choose where inference runs.** An Australian region endpoint for the model avoids an overseas disclosure. If the preferred model is only available offshore, the APP 8 analysis and vendor terms go into the privacy impact assessment.
4. **Enforce permissions.** Retrieval filters by the staff member's existing access, so a junior agent can't surface a file they couldn't open in the claims system.
5. **Control the logs.** Traces keep document IDs and scores, not full claim text, and expire after a set period.
6. **Test accuracy.** Before release, the assistant is evaluated on a set of real questions with known answers, and every answer shows its source document so staff can check it.
7. **Decide on decisions.** If the assistant only drafts answers, it probably isn't making significant decisions. If it starts recommending claim outcomes, it becomes a candidate for the automated decision disclosures from 10 December 2026.

None of these steps needs exotic technology. They need someone to ask the questions before the architecture is fixed, which is far cheaper than retrofitting controls after launch.

## What changed in the 2024 reforms, and what's next?

**The Privacy and Other Legislation Amendment Act 2024 was the first tranche of reform, and several parts touch AI directly.**

| Date | Change | Relevance to AI systems |
|---|---|---|
| 11 December 2024 | APP 11.3: security includes technical and organisational measures | Clearer expectation of engineering controls |
| 11 December 2024 | New civil penalty tiers and infringement notices (sections 13G, 13H, 13K) | Lower-level breaches now attract penalties |
| 10 June 2025 | Statutory tort for serious invasions of privacy commences | Individuals can sue directly for serious invasions |
| By December 2026 | OAIC must develop and register a Children's Online Privacy Code within 24 months of Royal Assent | AI features in services likely to be accessed by children |
| 10 December 2026 | APP 1.7 to 1.9 automated decision disclosures commence | AI-driven decisions must be described in privacy policies |

Further reforms proposed in the Privacy Act Review, such as a "fair and reasonable" test for handling personal information, had not been legislated at the time of writing. Designing for them now, through data minimisation and purpose tagging, costs little and avoids rework.

## Checklist: before an AI feature touches personal information

- [ ] Data flow map covering prompts, retrieval, provider, outputs, embeddings, logs and training sets.
- [ ] Documented purpose of collection for every data source, and an APP 6 basis for using it in the AI feature.
- [ ] Sensitive information identified and either excluded, de-identified or covered by consent.
- [ ] Model provider assessed: region, retention, training on customer data, sub-processors, abuse monitoring.
- [ ] APP 8 position recorded if any processing is offshore.
- [ ] Retrieval enforces the requesting user's permissions at query time.
- [ ] Prompt and output logging minimised, redacted where possible, with a retention period.
- [ ] Evaluation of accuracy and hallucination rates on realistic data before release.
- [ ] Users told when they are dealing with AI, with a route to correct outputs.
- [ ] Privacy policy updated, including automated decisions from 10 December 2026.
- [ ] Deletion requests can reach vector stores, caches and logs, not just the main database.
- [ ] Privacy impact assessment completed and reviewed by your privacy officer.

## How All Webbed Labs approaches this

We design AI systems so the privacy analysis is easy to do. That means Australian regions by default, retrieval that respects existing permissions, purpose tags and consent flags carried through pipelines, minimal prompt logging, and a written data flow map your privacy officer can use in a privacy impact assessment. Where a client needs full control over where inference happens, we deploy models inside their own cloud account. We provide the engineering and the documentation; decisions on lawfulness stay with your privacy and legal advisers. See our [LLM integration](/services/llm-integration) and [private LLM deployment](/services/private-llm-deployment) services.
