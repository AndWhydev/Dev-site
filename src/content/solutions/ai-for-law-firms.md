---
title: "AI for Australian law firms: document review, precedent search and matter knowledge"
metaTitle: "AI for Australian Law Firms: Review, Precedents, Knowledge"
description: "Building AI for Australian law firms around privilege, confidentiality, the Uniform Law regulators' AI statement and court practice notes on generative AI."
eyebrow: "Industry solution"
published: 2026-09-28
updated: 2026-09-28
summary: "AI for an Australian law firm has to protect confidentiality and privilege first and speed second. The Uniform Law regulators in NSW, Victoria and WA say lawyers can't safely put confidential or privileged client information into public AI tools, must verify everything AI produces and should have written AI policies. Courts such as the NSW Supreme Court set further rules on what AI may touch. Within those limits, document review, precedent search and matter knowledge bases are the builds that fit best, typically $60k to $250k (AUD, ex GST)."
takeaways:
  - "The December 2024 Uniform Law statement ties AI use to existing conduct rules: confidentiality (ASCR r 9.1), independent advice, competence and diligence, and fair costs."
  - "NSW Supreme Court Practice Note SC Gen 23 bars generative AI from generating the content of affidavits and witness statements, and restricts which material can be entered into AI tools at all."
  - "Matter-level access control and ethical walls must be enforced inside retrieval, not just in the user interface."
  - "Every AI answer in legal work needs a pinpoint citation to the source document so a lawyer can verify it quickly."
  - "Legal AI products from research and practice management vendors are the right answer for many firms; custom builds fit firms whose value is in their own precedents and matter history."
faqs:
  - q: "Does using AI on client documents waive legal professional privilege?"
    a: "Privilege depends on confidentiality, so the risk is losing confidentiality through the tool. Processing by a technology provider bound by strict confidentiality, with no training on your data and no human access, is designed to preserve it, but there is little Australian case law on AI tools specifically. Firms should get their own advice on the position and design systems so the question doesn't arise: private deployment, no training, tight retention, full logs."
  - q: "Can we use Microsoft 365 Copilot instead of a custom build?"
    a: "Often, for general drafting and email. Copilot respects Microsoft 365 permissions, so it's only as safe as your SharePoint and Teams permissions. Firms with matter walls, precedent banks outside Microsoft 365 or a need for pinpoint citations to clause level often need something more specific. Our Copilot comparison guide covers when each fits."
  - q: "Can AI draft court documents?"
    a: "Depends on the court and the document. In NSW, Practice Note SC Gen 23 permits generative AI for chronologies, indexes, summaries and draft submissions (with citation verification that isn't done solely by AI), but bars it from generating the content of affidavits, witness statements and character references, and requires leave for expert reports. Check the practice notes of each court you appear in."
  - q: "Can the system use our LexisNexis or Westlaw subscriptions?"
    a: "Only as their licence terms allow. Research publishers generally restrict copying their content into your own systems, and several offer their own AI tools. A custom build usually indexes the firm's own work product and links out to licensed research rather than ingesting it."
  - q: "How do we bill for work done with AI?"
    a: "The Uniform Law statement says billed time and work items should accurately represent the legal work done by the practice's staff, and AI shouldn't increase costs above traditional methods through extra verification time. Recording AI use per matter makes those conversations with clients easier."
  - q: "Is Queensland or South Australia different?"
    a: "They aren't Uniform Law jurisdictions, so the joint statement doesn't formally apply, but their conduct rules on confidentiality and competence are similar, and their law societies and courts publish their own guidance. We build to the strictest set of rules among the jurisdictions a firm practises in."
sources:
  - title: "Statement on the use of artificial intelligence in Australian legal practice"
    url: "https://lsbc.vic.gov.au/news-updates/news/statement-use-artificial-intelligence-australian-legal-practice"
    publisher: "Victorian Legal Services Board and Commissioner, Law Society of NSW, Legal Practice Board of WA"
  - title: "Practice Note SC Gen 23: Use of Generative Artificial Intelligence"
    url: "https://supremecourt.nsw.gov.au/documents/Practice-and-Procedure/Practice-Notes/general/current/PN_SC_Gen_23.pdf"
    publisher: "Supreme Court of New South Wales"
  - title: "Evidence Act 1995 (Cth), Part 3.10 Division 1: Client legal privilege"
    url: "https://www.legislation.gov.au/C2004A04858/latest/text"
    publisher: "Federal Register of Legislation"
related:
  - title: "AI knowledge bases for professional services firms"
    href: "/solutions/professional-services-knowledge-base"
  - title: "Microsoft 365 Copilot vs a custom AI assistant"
    href: "/guides/copilot-vs-custom-ai-assistant"
  - title: "What is RAG (retrieval-augmented generation)?"
    href: "/guides/what-is-rag"
  - title: "AI for accounting and advisory firms in Australia"
    href: "/solutions/ai-for-accounting-firms"
service:
  title: "RAG knowledge base development"
  href: "/services/rag-knowledge-base"
industry:
  title: "AI & Automation"
  href: "/industries/ai-automation"
disclaimer: legal
---

## What changes when the client is a law firm?

**Two things: the information is protected by privilege as well as confidentiality, and the people using the output are personally responsible to clients and courts for every word of it.** A retrieval error in a retail chatbot is an annoyance. In a firm it can be a false citation in submissions or a document from another client's matter surfacing in the wrong place.

Client legal privilege protects confidential communications and documents made for the dominant purpose of legal advice or litigation. In court proceedings it is set out in the uniform Evidence Acts (sections 118 and 119 of the Commonwealth Act), with the common law applying elsewhere. It survives only while confidentiality does, and conduct inconsistent with maintaining confidentiality can waive it. So the first design question for any legal AI system is where client information goes, who can see it, and whether any provider can keep or learn from it. The second is how a lawyer checks what the system says, quickly enough that they will actually do it.

That second question is where many legal AI pilots stall. If verifying an AI summary takes as long as reading the document, lawyers stop verifying or stop using the tool. The design goal is a system where every claim is one click from its source, so checking becomes fast enough to be routine.

## What have regulators and courts said about AI?

**The regulators say existing conduct rules apply in full; some courts have gone further with specific rules on what AI may touch.** In December 2024 the Law Society of NSW, the Legal Practice Board of WA and the Victorian Legal Services Board and Commissioner, the regulators in the Uniform Law jurisdictions, issued a joint statement on AI in legal practice. The NSW Supreme Court's Practice Note SC Gen 23 has applied to all proceedings since 3 February 2025.

The table turns the key points into software requirements. It's our engineering reading of the documents, not legal advice.

| Source and requirement | What the software needs to do |
|---|---|
| Uniform Law statement: lawyers can't safely enter confidential or privileged information into public AI tools; commercial tools need their contract terms reviewed (ASCR r 9.1) | Private deployment or enterprise terms with no training, controlled retention and Australian processing; record the terms per tool |
| Uniform Law statement: AI can't substitute for the lawyer's own judgement or expertise, and lawyers must personally verify AI-prepared documents | Every answer carries pinpoint citations to source documents; drafts are clearly marked until a lawyer settles them |
| Uniform Law statement: written, risk-based AI policies covering which tools, who, for what and with what information, plus supervision of junior staff | Tool access by role, usage logs per user and matter, reports supervisors can review |
| Uniform Law statement: billing must reflect the work actually done (Uniform Law ss 172 to 173, ASCR r 12.2) | AI use recorded against the matter, available if the client asks |
| SC Gen 23 para 9A: suppressed material, subpoenaed documents and Harman undertaking material may only go into a Gen AI tool that keeps data in a controlled environment, uses it only for that proceeding and never trains on it | Matter-scoped storage, per-matter deletion, contractual no-training, and a flag on restricted documents that blocks them from any tool not meeting those conditions |
| SC Gen 23 paras 10 to 13: no Gen AI in generating affidavit, witness statement or character reference content | Block or warn on those document types; keep preparatory work (chronologies, indexes) separate |
| SC Gen 23 paras 16 to 17: citations in AI-assisted submissions must be verified, and not solely with AI | Citation extraction with links to the authority, and a checklist a person completes |

Queensland, South Australia and other jurisdictions sit outside the Uniform Law but have similar confidentiality and competence rules and their own guidance, and other courts publish their own practice notes. A firm practising across several should design to the strictest.

## Which AI builds fit law firms best?

**Three builds do most of the useful work: document review, precedent search and a matter knowledge base.** All three are retrieval problems at heart: the model's job is to find and quote the firm's own material accurately, not to know the law. Our [RAG explainer](/guides/what-is-rag) covers the underlying technique.

### Document review and summarising

The system reads a document set (a data room, a discovery production, a lease portfolio) and extracts or summarises against a question list: change of control clauses, termination rights, assignment restrictions, key dates. Each answer quotes the clause and links to the page.

Design points we would insist on:

- A structured review template agreed with the supervising lawyer, so outputs are comparable across documents
- Confidence flags and "not found" as an explicit answer, never a guess
- A reviewer screen that shows the source clause beside the extraction for one-click accept or correct
- Sampling: a lawyer checks a random share of accepted answers, and the error rate is reported

This is preparatory and summarising work of the kind SC Gen 23 permits, provided the material entered meets its paragraph 9A conditions.

### Precedent and clause search

Most firms have a precedent bank and years of executed documents that nobody can search well. A search layer lets a lawyer ask for "a landlord-friendly make good clause for a NSW retail lease, post 2020" and get the firm's own clauses ranked, with the matter, date and author.

The traps are version control and currency. The system needs to know which precedents are approved and current, which were client-specific negotiated positions, and which are superseded. Tagging those at ingestion, and showing them in results, matters more than model choice.

### Matter knowledge base

A matter knowledge base answers questions about one matter from its own documents, correspondence and file notes: "when did the other side first raise the limitation point?" It's most useful on long-running litigation and large transactions where the team changes over time.

It's also where access control matters most, covered below. For firms wanting a broader knowledge base across practice groups, our page on [AI knowledge bases for professional services](/solutions/professional-services-knowledge-base) covers the firm-wide version.

## How are ethical walls and matter access enforced?

**Inside the retrieval layer, using the same matter permissions as your document management system, checked on every query.** A system that filters results only in the interface can still leak information through summaries, because the model saw documents the user shouldn't have. We would treat this checklist as mandatory:

- [ ] Every indexed document carries its matter number, client and access list from the source system
- [ ] Permissions are synchronised from the document management system, and removals take effect within minutes
- [ ] Retrieval filters by the user's permissions before any text reaches the model
- [ ] Information barriers (ethical walls) are modelled explicitly and tested with users on each side
- [ ] Cross-matter search is off by default and limited to approved precedent content
- [ ] Every query, retrieved document and answer is logged against the user and matter
- [ ] Deleting or archiving a matter removes its documents and embeddings from the index
- [ ] Documents flagged as suppressed, subpoenaed or subject to undertakings are excluded from tools that don't meet the court's conditions
- [ ] Uploaded documents from other parties are treated as untrusted input and tested for prompt injection

## Which systems does a legal AI build connect to?

**The document management system is the anchor; practice management provides matters and people.**

| System type | Common examples | Role in the build |
|---|---|---|
| Document management | iManage, NetDocuments, SharePoint | Source documents, versions and permissions |
| Practice management | LEAP, Actionstep, Smokeball, Clio | Matters, clients, teams, conflicts data |
| eDiscovery and review | Relativity and similar platforms | Large document productions, often with their own AI features |
| Email | Microsoft 365, filed to matters | Correspondence for matter knowledge |
| Identity | Microsoft Entra ID or Okta | Single sign-on and group membership |
| Legal research | LexisNexis, Thomson Reuters | Linked, not ingested, subject to licence terms |

## Should a firm build or buy?

**Buy if a vendor product covers your need and its data terms satisfy your policy; build when your advantage is your own precedents, matter history or workflows.** Research publishers and legal tech vendors sell AI assistants, and Microsoft 365 Copilot handles general drafting well where permissions are tidy. For many firms that's the right answer, and we'd say so in discovery. Our [Copilot vs custom assistant comparison](/guides/copilot-vs-custom-ai-assistant) sets out the trade-offs.

Custom builds make sense when a firm needs citations at clause level across its own documents, matter walls a general tool can't model, Australian processing with specific providers, or integration with a practice management system the vendors don't support well.

## What budget and timeline should a firm plan for?

**A first legal AI system typically takes 10 to 20 weeks and costs roughly $60,000 to $250,000 (AUD, ex GST), including discovery.** These are typical Australian market ranges for senior onshore teams, not a quote.

| Scope | Duration | Typical range (AUD, ex GST) |
|---|---|---|
| Discovery: policy review, systems, permissions model, sample documents, fixed price | 2 to 4 weeks | $12,000 to $30,000 |
| Precedent and clause search over an approved precedent bank | 6 to 10 weeks | $45,000 to $110,000 |
| Document review tool with templates and reviewer screen | 8 to 12 weeks | $70,000 to $150,000 |
| Matter knowledge base with full permission sync and ethical walls | 10 to 16 weeks | $100,000 to $220,000 |

Worked example: a precedent search build of about 420 hours at a blended $175 an hour is $73,500; with $18,000 of discovery the total is $91,500 ex GST. Running costs are model usage, hosting and the vector index, which we estimate from your document volumes during discovery.

## How All Webbed Labs works with law firms

We start by reading your AI policy (or helping your risk partner scope one) and mapping your document management permissions, because those decide the architecture. Then we build at a fixed price, with documents, embeddings and, where the model is available onshore, inference in Australian regions. Every change passes automated quality gates and a senior engineer's review, and all code lives in your repository from day one. We work under NDA from the first conversation. See our [RAG knowledge base service](/services/rag-knowledge-base), [LLM integration](/services/llm-integration) and the [AI and automation](/industries/ai-automation) overview.
