---
title: "Data residency vs data sovereignty in Australia: what's the difference?"
metaTitle: "Data Residency vs Data Sovereignty in Australia"
description: "Data residency vs data sovereignty: residency is where data is stored, sovereignty is whose laws can reach it. What it means for cloud and AI in Australia."
eyebrow: "Explainer"
category: explainer
published: 2026-09-28
updated: 2026-09-28
summary: "The difference between data residency and data sovereignty is location versus law. Data residency is the physical location where data is stored and processed, such as an AWS region in Sydney. Data sovereignty is the question of which country's laws apply to that data and who can legally compel access to it. Keeping data in Australia gives you residency, but if the provider is a foreign company, foreign law can still reach it, so residency alone doesn't guarantee sovereignty."
takeaways:
  - "Residency is about geography: which data centre, in which country, holds and processes the data."
  - "Sovereignty is about jurisdiction: whose courts and agencies can compel the provider to hand data over."
  - "Hosting in an Australian region of AWS, Azure or Google Cloud gives you Australian residency, but those providers are also subject to US law."
  - "The Privacy Act 1988 doesn't require personal information to stay onshore, but APP 8 makes you accountable for how overseas recipients handle it."
  - "For AI projects, check where the model runs as well as where the database lives: prompts and documents sent to a model are data too."
faqs:
  - q: "Does the Privacy Act require data to be stored in Australia?"
    a: "No. The Privacy Act 1988 doesn't impose a general data localisation rule. Australian Privacy Principle 8 lets you disclose personal information overseas, but you generally remain accountable if the overseas recipient mishandles it. Some sectors and contracts do require onshore storage, such as My Health Record data under the My Health Records Act 2012 and many government contracts."
  - q: "If I use the AWS Sydney region, is my data sovereign?"
    a: "It's resident in Australia. Whether it's sovereign depends on your definition. AWS is a US company, so US legal processes such as the CLOUD Act can apply to it. For most commercial workloads, Australian residency plus encryption with keys you control is an accepted position; for sensitive government data, whole-of-government systems and PROTECTED systems, Australian Government agencies use providers certified under the Hosting Certification Framework."
  - q: "Do AI models like Claude or GPT process data in Australia?"
    a: "Some can. At the time of writing, major cloud platforms offer certain models through their Australian regions, but availability varies by model and changes often. Check the provider's regional availability page for the exact model you plan to use, and confirm whether inference, logging and any abuse monitoring all stay in-region."
  - q: "What is the difference between data residency, data sovereignty and data localisation?"
    a: "Data residency is where data is stored and processed. Data sovereignty is which country's laws apply to it and who can compel access. Data localisation (data localization in US usage) is a legal or contractual rule that data must stay inside a country's borders. Localisation forces residency; neither one on its own settles sovereignty."
  - q: "Is data residency the same as data retention?"
    a: "No. Residency is where data is kept; retention is how long it's kept before deletion. Both matter for AI services: a provider can process prompts in Australia but retain logs for a period, or delete promptly but process offshore. Check both settings for every service that touches your data."
  - q: "Why is data sovereignty important for Australian businesses?"
    a: "Because it decides who can get at your data without your agreement. Customers, regulators and government buyers increasingly ask where data lives and which laws reach it, and your answer affects procurement, your privacy impact assessment and your APP 8 accountability when data goes overseas."
  - q: "What's the simplest way to improve sovereignty without leaving the big clouds?"
    a: "Store and process data in an Australian region, encrypt it with customer-managed keys, restrict administrative access, log every access, and make sure your contracts cover where data can go and how you are notified of legal requests. That combination addresses most enterprise risk assessments."
sources:
  - title: "Australian Privacy Principles, APP 8: Cross-border disclosure of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Hosting Certification Framework"
    url: "https://www.hostingcertification.gov.au/framework"
    publisher: "Department of Home Affairs"
  - title: "International production order framework (AUS-US Data Access Agreement)"
    url: "https://www.ag.gov.au/international-relations/international-crime-cooperation-arrangements/international-production-order-framework"
    publisher: "Attorney-General's Department"
  - title: "AWS Regions and Availability Zones"
    url: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"
    publisher: "Amazon Web Services"
  - title: "MnW Principles (Indigenous Data Sovereignty Communique, 2018)"
    url: "https://www.maiamnayriwingara.org/mnw-principles"
    publisher: "Maiam nayri Wingara"
  - title: "Azure geographies: Australia"
    url: "https://azure.microsoft.com/en-au/explore/global-infrastructure/geographies/"
    publisher: "Microsoft"
related:
  - title: "RAG knowledge base development"
    href: "/services/rag-knowledge-base"
  - title: "LLM integration services"
    href: "/services/llm-integration"
  - title: "Trust, security and compliance at All Webbed Labs"
    href: "/trust"
  - title: "Cloud infrastructure and DevOps"
    href: "/services/cloud-infrastructure"
service:
  title: "Cloud infrastructure in Australian regions"
  href: "/services/cloud-infrastructure"
disclaimer: legal
---

## What is data residency?

**Data residency is the physical location where your data is stored and processed.** In Australia that usually means choosing an Australian cloud region for every service that holds or handles the data. If your database runs in the AWS Asia Pacific (Sydney) region, your data resides in Australia. Residency is a technical and contractual fact you can verify: you choose the region, and the provider commits to keeping the data there unless you move it.

The three hyperscale clouds all run Australian regions:

| Provider | Australian regions |
|---|---|
| Amazon Web Services | Asia Pacific (Sydney) `ap-southeast-2`, Asia Pacific (Melbourne) `ap-southeast-4` |
| Microsoft Azure | Australia East (New South Wales), Australia Southeast (Victoria), Australia Central 1 and 2 (Canberra) |
| Google Cloud | `australia-southeast1` (Sydney), `australia-southeast2` (Melbourne) |

Residency also covers processing, not just storage. A database in Sydney that sends every record to an analytics service in the United States doesn't have Australian residency for that processing step.

## What is data sovereignty?

**Data sovereignty is the principle that data is subject to the laws of the country with jurisdiction over it.** In simple terms, the question is: which governments and courts can compel someone to hand your data over? In cloud computing, that means looking past the region to the company that runs it.

That depends on two things. The first is where the data sits, which is residency. The second is who controls it. A US-headquartered provider can be compelled under US law, most notably the Clarifying Lawful Overseas Use of Data Act (CLOUD Act) of 2018, to produce data it controls even when that data is stored outside the US. So data can be resident in Sydney and still be reachable by a foreign legal process.

Australia and the United States have a bilateral agreement under the CLOUD Act framework, the AUS-US Data Access Agreement, signed on 15 December 2021 and in force since 30 January 2024. It governs how each country's agencies can obtain orders for data held by communications providers in the other for serious crime and national security purposes, with safeguards: US authorities can't intentionally target Australian citizens, permanent residents or people in Australia under it. It narrows the practical risk for many workloads but doesn't make a US provider a purely Australian one.

## What's the difference between data residency and data sovereignty?

**Residency answers "where is the data?" and sovereignty answers "whose laws can reach it?"** A third term, data localisation, describes a rule that data must stay in a country, which forces residency but doesn't settle sovereignty.

| | Data residency | Data sovereignty |
|---|---|---|
| The question it answers | Where is the data? | Whose laws can reach it? |
| Determined by | Region and data centre location | Location plus the provider's nationality and control |
| How you achieve it | Pick an Australian region, block replication elsewhere | Residency plus provider choice, key control, access control and contracts |
| Can you verify it yourself? | Yes, through configuration and audit logs | Partly: it also depends on law and the provider's obligations |

## What are the data residency requirements in Australia?

**Australian law generally doesn't require data to stay in Australia, but some data and some contracts do.** There is no single data sovereignty law in Australia; the requirements come from privacy law, sector rules and contracts. The Privacy Act 1988 doesn't ban sending personal information overseas. Under APP 8, before disclosing personal information to an overseas recipient you must take reasonable steps to make sure it's handled consistently with the APPs, and you're usually accountable for the recipient's mistakes.

Specific regimes are stricter. My Health Record data can't be held or processed outside Australia under the My Health Records Act 2012. Australian Government agencies hosting sensitive government data, whole-of-government systems or systems classified at PROTECTED use providers certified under the Hosting Certification Framework, now administered by the Department of Home Affairs (at the time of writing the framework is under reform, and new certification registrations have been paused since 3 November 2025). Many state government, health and financial services contracts write onshore storage into their terms, and APRA-regulated entities must manage the risks of offshore arrangements under their prudential standards.

## Is Indigenous data sovereignty the same thing?

**No. Indigenous data sovereignty is a separate and broader idea: the right of Indigenous peoples to govern data about them, their communities and their lands.** Many searches for "data sovereignty Australia" are about this meaning rather than cloud hosting.

In Australia, the Maiam nayri Wingara Indigenous Data Sovereignty Collective published the principles agreed at the 2018 Indigenous Data Sovereignty Summit. They assert that Aboriginal and Torres Strait Islander peoples have the right to exercise control of the data ecosystem, including creation, stewardship, analysis, dissemination and infrastructure, and to data structures that are accountable to Indigenous peoples and First Nations.

For a software or AI project, the practical point is that cloud residency doesn't address these rights. If a system collects or analyses data about Aboriginal and Torres Strait Islander people or communities, governance, consent and who controls the data need to be designed with those communities, not settled by picking a Sydney region.

## Why this matters more for AI projects

**For AI, data sovereignty depends on where the model runs, not only where the database lives.** AI systems move data in ways traditional apps don't. When a chatbot or RAG system answers a question, the user's prompt, the retrieved documents and the model's response all travel to wherever the model runs. A system with a Sydney database but a model endpoint in the US has Australian residency for storage and US processing for every question asked.

Check these points before choosing a model provider:

1. **Inference location.** Is the specific model you want available in an Australian region? Availability differs by model and changes frequently.
2. **Logging and retention.** Does the provider store prompts and outputs, where, and for how long? Is it used for training?
3. **Abuse monitoring.** Some services keep flagged prompts and outputs for human review, and the reviewers may sit outside Australia, unless you're approved for an exemption.
4. **Embeddings and vector stores.** Embeddings are derived from your documents. Treat them with the same residency rules as the source data.
5. **Sub-processors.** Which third parties touch the data, and where are they?

Which models can actually run onshore, on AWS Bedrock, Azure OpenAI, Google Cloud and the direct APIs, is covered in our guide to [AI data sovereignty in Australia](/guides/ai-data-sovereignty-australia). For the region-by-region view of the three clouds, see [Bedrock vs Azure OpenAI vs Vertex AI in Australia](/guides/bedrock-vs-azure-openai-vs-vertex-australia).

## How we handle it at All Webbed Labs

We default to Australian regions for databases, storage, vector indexes and, where the model you need is available onshore, inference. Where a requirement can only be met offshore, we document exactly what leaves Australia and why, so it can go into your privacy impact assessment and APP 8 analysis. We also design for key control: encryption with keys held in your own cloud account, so access requires your permission as well as the provider's.

If your project has strict sovereignty requirements, that decision is made during discovery, before architecture, because it shapes the choice of cloud, model and vendors. See our [cloud infrastructure](/services/cloud-infrastructure) and [LLM integration](/services/llm-integration) services, or read how we approach [trust and security](/trust).
