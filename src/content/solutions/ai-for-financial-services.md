---
title: "AI development for APRA-regulated financial services"
metaTitle: "AI Development for APRA-Regulated Financial Services"
description: "How to build AI for Australian banks, insurers and super funds under CPS 234, CPS 230 and CPG 235: use cases, controls, integrations, risks and cost ranges."
eyebrow: "Industry solution"
published: 2026-09-28
updated: 2026-09-28
summary: "AI for an APRA-regulated entity is built like any other material system: information security under CPS 234, service provider and operational resilience controls under CPS 230, and data quality discipline from CPG 235. APRA's April 2026 letter to industry adds explicit expectations on AI inventories, human involvement in high-risk decisions and AI supply chain visibility. Start with internal, human-reviewed use cases, keep data in Australian regions, and budget roughly $120k to $400k (AUD, ex GST) for a first production system after discovery."
takeaways:
  - "CPS 234 applies to AI systems and the third parties that run them, including model providers: you need evidence of their controls, not just a contract."
  - "Under CPS 230, a model or AI platform provider can become a material service provider, which brings register, contract and exit planning requirements."
  - "CPG 235's data quality dimensions (accuracy, completeness, consistency, timeliness, availability) map directly to how you test retrieval and extraction."
  - "APRA's 30 April 2026 AI letter expects an AI inventory, human involvement for high-risk decisions and continuous monitoring rather than point-in-time review."
  - "Internal assistants and document workflows with a human reviewer are the lowest-risk starting point; automated customer decisions come later, if at all."
faqs:
  - q: "Is a large language model provider a material service provider under CPS 230?"
    a: "It can be. It depends on whether the provider supports a critical operation or exposes you to material operational risk. A model used for an internal drafting tool may not be material; a model sitting inside a claims or lending workflow may be. Your risk team makes that call, and the build should produce the information they need: data flows, dependencies, fallbacks and exit options."
  - q: "Can we use Claude or GPT models without data leaving Australia?"
    a: "At the time of writing (September 2026), some models are offered through Australian regions of the major clouds, but availability varies by model and changes often. Check the provider's regional availability page for the exact model and confirm that inference, logging and abuse monitoring stay in region. Where a model isn't available onshore, an open-weight model hosted in your own Australian cloud account is the alternative."
  - q: "Do we need to notify APRA about an AI project?"
    a: "Not because it is AI. The existing triggers still apply: CPS 230 notifications for new or changed material arrangements and offshoring, and CPS 234 notifications within 72 hours of a material information security incident. Your compliance team decides whether a specific arrangement meets those thresholds."
  - q: "How do you stop an AI system giving financial advice?"
    a: "By scoping and testing for it. Customer-facing tools get a defined topic boundary, retrieval limited to approved content, refusal behaviour for personal advice questions, and an evaluation set that tries to push the system over the line. Whether a given output amounts to personal advice under the Corporations Act is a question for your licensee compliance and legal advisers."
  - q: "Who owns the models, prompts and evaluation data?"
    a: "You do. Prompts, retrieval pipelines, evaluation sets and all code live in your repository from the first day, and IP transfers on completion. Foundation models remain the vendor's, used under your own cloud or API agreement."
  - q: "How long before something is in production?"
    a: "For a well-scoped internal use case, typically 12 to 20 weeks from the start of discovery, including security review. Security assessment and vendor onboarding inside a bank or insurer often take longer than the engineering, so start them in parallel with discovery."
sources:
  - title: "APRA Letter to Industry on Artificial Intelligence (AI), 30 April 2026"
    url: "https://www.apra.gov.au/apra-letter-to-industry-on-artificial-intelligence-ai"
    publisher: "Australian Prudential Regulation Authority"
  - title: "CPS 234 Information Security"
    url: "https://www.apra.gov.au/standards/cps-234"
    publisher: "Australian Prudential Regulation Authority"
  - title: "Operational risk management (CPS 230)"
    url: "https://www.apra.gov.au/operational-risk-management"
    publisher: "Australian Prudential Regulation Authority"
  - title: "CPG 235 Managing Data Risk"
    url: "https://www.apra.gov.au/practice-guides/cpg-235"
    publisher: "Australian Prudential Regulation Authority"
  - title: "REP 798 Beware the gap: Governance arrangements in the face of AI innovation"
    url: "https://www.asic.gov.au/regulatory-resources/find-a-document/reports/rep-798-beware-the-gap-governance-arrangements-in-the-face-of-ai-innovation"
    publisher: "Australian Securities and Investments Commission"
related:
  - title: "APRA CPS 234 and AI systems: what vendors need to provide"
    href: "/guides/apra-cps-234-ai"
  - title: "APRA CPS 230 and AI vendors"
    href: "/guides/apra-cps-230-ai-vendors"
  - title: "AI claims and document automation for Australian insurers"
    href: "/solutions/insurance-claims-automation"
  - title: "Finance and fintech software"
    href: "/industries/finance-fintech"
service:
  title: "LLM integration services"
  href: "/services/llm-integration"
industry:
  title: "Financial services"
  href: "/industries/finance-fintech"
disclaimer: legal
---

## Why is AI different inside an APRA-regulated entity?

**It isn't a separate regime: an AI system in a bank, insurer or super fund is an information asset, often run by a third party, feeding decisions that affect customers.** That puts it squarely under the prudential standards you already work with, plus the expectations APRA set out specifically for AI in its letter to industry of 30 April 2026.

What changes is the evidence. A startup can ship a chatbot and iterate. An authorised deposit-taking institution, general or life insurer, or registrable superannuation entity has to show its board and APRA that the system's security, data, supplier dependencies and failure modes are understood and controlled. The engineering has to generate that evidence as it goes, not reconstruct it before a risk committee.

ASIC reached a similar conclusion from the conduct side. Its October 2024 review of 23 licensees (REP 798) found AI adoption running ahead of governance and risk frameworks, and asked licensees to close that gap before deploying AI in ways that affect consumers.

## Which AI use cases make sense to start with?

**Start where a person already reviews the output and the data stays internal.** The table ranks common financial services use cases by how much regulatory and conduct exposure they carry.

| Use case | What the AI does | Exposure | Human role |
|---|---|---|---|
| Policy and procedure assistant | Answers staff questions from approved internal documents, with citations | Low | Staff member reads the cited source before acting |
| Complaint triage | Classifies incoming complaints, flags vulnerability indicators and deadlines, drafts a summary | Medium | Complaints officer confirms category and owns the response |
| KYC and onboarding document extraction | Pulls fields from identity documents, trust deeds and company extracts into structured data | Medium | Analyst verifies low-confidence fields and all exceptions |
| Credit memo and file drafting | Assembles a first draft from application data and statements | Medium | Credit officer edits and signs; the decision stays human |
| Regulatory change mapping | Compares new APRA, ASIC or AUSTRAC material to internal obligations registers | Low to medium | Compliance analyst accepts or rejects each mapping |
| Customer-facing assistant | Answers general product questions on web or app | High | Scope limits, escalation to a person, ongoing monitoring |
| Automated decisions about customers | Approves, declines or prices without human review | Highest | Usually not a first project; see the Privacy Act note below |

Automated decisions carry an extra obligation from 10 December 2026, when the Privacy Act's automated decision-making transparency rules commence. Our [guide to those rules](/guides/privacy-act-automated-decision-making) covers the logging and disclosure work involved.

## What do CPS 234, CPS 230 and CPG 235 mean for the build?

**Each standard turns into specific engineering deliverables.** The mapping below is how we translate the obligations into work items. It is a starting point for your risk and compliance teams, not a substitute for their assessment.

| Obligation | What it says in short | What the build produces |
|---|---|---|
| CPS 234 information security (in force since 1 July 2019) | Controls commensurate with the asset's criticality and sensitivity, including assets managed by third parties; notify APRA within 72 hours of a material incident | Data classification of every input and output, threat model covering prompt injection and data leakage, evidence pack on the model provider's controls, alerting wired into your incident process |
| CPS 234 testing | Systematic testing of control effectiveness | Security tests in the delivery pipeline, penetration test before launch, retest schedule |
| CPS 230 operational risk (in force since 1 July 2025) | Manage operational risk, maintain critical operations within tolerance, manage material service providers | Dependency map of every AI supplier, fallback mode if the model endpoint fails, documented exit path to another model |
| CPS 230 service providers | Register of material service providers, contract requirements; pre-existing contracts apply from the earlier of renewal or 1 July 2026 | Information for the register: data flows, locations, sub-processors, termination and transition terms |
| CPG 235 data risk (guidance, 2013) | Data quality across accuracy, completeness, consistency, timeliness and availability; validation close to capture | Retrieval and extraction evaluation sets, source freshness checks, validation at ingestion rather than after the model answers |

Two of these deserve more detail, and they have their own guides: [CPS 234 and AI systems](/guides/apra-cps-234-ai) and [CPS 230 for AI vendors](/guides/apra-cps-230-ai-vendors).

## What did APRA's April 2026 AI letter add?

**It moved APRA from "the existing framework covers AI" to a specific list of what it expects to see.** The letter followed targeted engagement with large banks, insurers and super trustees in late 2025, and it names seven areas. Each one lands on the engineering team in a concrete way.

1. **Board literacy and strategy.** Boards should understand AI well enough to oversee a strategy consistent with risk appetite. Deliverable: plain-language system descriptions and risk summaries a director can read.
2. **Lifecycle ownership.** Ownership from design to decommissioning. Deliverable: a named owner, a model card and a retirement plan for each system.
3. **Human involvement for high-risk decisions.** Deliverable: review queues, confidence thresholds and audit trails showing who approved what.
4. **Full AI supply chain visibility**, including fourth parties. Deliverable: a record of which model, which host, which region and which sub-processors sit behind each feature.
5. **AI-specific cyber threats**, including controls over agentic and autonomous workflows. Deliverable: least-privilege tool access for agents, allow-listed actions and human approval for anything that moves money or changes records.
6. **An inventory of AI tools and use cases.** Deliverable: each system registered at build time with its purpose, data and risk rating.
7. **Continuous assurance** rather than point-in-time review. Deliverable: production monitoring for drift, answer quality and control failures, with thresholds that page someone.

## What does the AI need to plug into?

**Most of the cost in financial services AI sits in integration and access control, not in the model.** A typical first system touches five to eight of these:

- **Identity:** Microsoft Entra ID or Okta, so the AI inherits the user's existing permissions and never shows a document the user couldn't open directly.
- **Document stores:** SharePoint, OpenText or a policy management platform holding the approved source content.
- **CRM and case management:** Salesforce or Microsoft Dynamics 365 for complaints, onboarding and service cases.
- **Core platforms:** core banking, policy administration or member administration systems, usually read-only through an existing API or integration layer.
- **Data platform:** Snowflake, Databricks or an on-premises warehouse for structured context.
- **Security tooling:** your SIEM (for example Microsoft Sentinel or Splunk) for AI audit logs, and your secrets manager for credentials.
- **Model hosting:** Amazon Bedrock, Azure AI Foundry or Google Vertex AI in an Australian region, or an open-weight model in your own account. Our [cloud AI platform comparison](/guides/bedrock-vs-azure-openai-vs-vertex-australia) covers the trade-offs.

## Where should the model and the data live?

**In Australian regions by default, with any exception written down before build.** No prudential standard bans offshore processing outright, but offshoring is one of the arrangements CPS 230 expects you to manage and notify, and most boards and customers expect onshore handling of financial data. For AI that means checking three locations, not one: where documents and embeddings are stored, where the model runs inference, and where the provider keeps logs or samples for abuse monitoring.

When the model you want isn't offered in an Australian region, there are usually three options. Use a different model that is available onshore and test whether it meets your quality bar. Host an open-weight model in your own Australian cloud account, which trades some capability for full control. Or accept offshore inference for low-sensitivity content only, with the data flow documented for your privacy and service provider assessments. Our [data residency explainer](/guides/data-residency-vs-data-sovereignty) covers why onshore storage alone doesn't settle the jurisdiction question.

## What are the main risks, and how are they controlled?

**The risks that matter are data leakage, wrong answers acted on, supplier failure and scope creep into advice or decisions.** This checklist is what we would expect to be closed before go-live:

- [ ] Every data source classified; nothing above the approved classification reaches the model
- [ ] Retrieval enforces document-level permissions from the source system
- [ ] Prompts, outputs and retrieved passages logged, retained per your records policy, and searchable
- [ ] Evaluation set of real questions with expected answers, run on every change, with a pass threshold agreed by the business owner
- [ ] Prompt injection tests against uploaded documents and emails
- [ ] Fallback behaviour defined for model outage, slow responses and low confidence
- [ ] Model provider's data use, retention and region terms documented for the service provider register
- [ ] Exit plan: the prompt and retrieval layer can switch to another model with a test run, not a rebuild
- [ ] Customer-facing scope boundaries and escalation tested with adversarial questions

## How long does it take, and what does it cost?

**A first production AI system for a regulated entity typically runs 12 to 24 weeks and costs roughly $120,000 to $400,000 (AUD, ex GST), including discovery.** These are typical Australian market ranges for senior onshore teams, not a quote. The spread comes from the number of integrations, the security review burden and whether the system faces customers.

| Phase | Typical duration | Typical range (AUD, ex GST) | Output |
|---|---|---|---|
| Paid discovery | 3 to 5 weeks | $15,000 to $40,000 | Use case selection, data and integration map, risk assessment inputs, fixed price for the build |
| Pilot build | 6 to 10 weeks | $60,000 to $150,000 | Working system for a small user group, evaluation set, security testing |
| Production hardening | 4 to 8 weeks | $45,000 to $210,000 | Monitoring, fallbacks, penetration test remediation, runbooks, handover |
| Run and improve | Ongoing | 15% to 20% of build per year, plus model and cloud costs | Model upgrades, evaluation reruns, new sources |

The arithmetic behind the middle of that range: a pilot of about 500 hours of senior engineering at a blended $180 an hour is $90,000; production hardening of 400 hours is $72,000; add $25,000 of discovery and the total is $187,000 ex GST. Discovery is longer here than in unregulated work because vendor risk questionnaires and data classification take real time.

## How All Webbed Labs approaches this

We start with paid discovery that produces the risk inputs your teams need alongside the technical plan, then build at a fixed price. Data, vector indexes and, where the model is available onshore, inference stay in Australian regions by default. Every change passes automated quality gates (type checks, tests, security scans) and a senior engineer's review before deploy, and all code sits in your repository from day one.

We don't hold ISO 27001 or SOC 2 certifications to offer as a shortcut; what we provide is the evidence about the system we built, in the form your assessors ask for. Your organisation stays responsible for its compliance. See our [LLM integration](/services/llm-integration) and [AI governance](/services/ai-governance) services, or the broader [finance and fintech](/industries/finance-fintech) page.
