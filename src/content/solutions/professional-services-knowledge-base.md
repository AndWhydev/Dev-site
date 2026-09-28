---
title: "AI knowledge bases for professional services firms"
metaTitle: "AI Knowledge Bases for Professional Services Firms"
description: "How consulting, engineering and advisory firms build RAG knowledge bases over past work, with per-client access control, confidentiality and Australian hosting."
eyebrow: "Industry solution"
published: 2026-09-28
updated: 2026-09-28
summary: "An AI knowledge base for a professional services firm is a retrieval-augmented generation (RAG) system that answers staff questions from the firm's own reports, proposals, methodologies and correspondence, with a citation to every source. What makes it different from a generic chatbot is access control: a consultant must only ever retrieve documents from engagements they're entitled to see, so permissions from the document management system have to be enforced at retrieval time. A production system for a mid-sized firm typically costs $60,000 to $180,000 (AUD, ex GST) as a market range, not a quote."
takeaways:
  - "The hard part isn't the AI. It's making sure every answer respects client confidentiality, ethical walls and engagement-level permissions."
  - "Permissions must be filtered before retrieval, not after generation; otherwise confidential content can leak into an answer even if the source link is hidden."
  - "The OAIC says privacy obligations apply to personal information put into an AI system and to AI outputs that contain it, including incorrect or inferred information."
  - "Check client contracts before indexing: some engagement terms restrict AI processing, offshore processing or reuse of deliverables."
  - "If your documents already live in Microsoft 365 with clean permissions, Copilot may be enough. Custom builds earn their place with mixed sources, specialist content or strict residency needs."
faqs:
  - q: "Will the AI use one client's confidential documents to answer questions about another client?"
    a: "Not if it's built properly. Each document carries the permissions of the engagement it belongs to, and the search only runs over documents the person asking is allowed to see. A consultant behind an ethical wall gets no results from the walled engagement, not a redacted answer. We test this explicitly with users who should and shouldn't have access before launch."
  - q: "Is our data used to train the AI model?"
    a: "It shouldn't be. Enterprise API terms from the major model providers generally exclude customer data from training by default, but terms differ by provider and product and change over time, so confirm them for the exact service you use and record the date. A RAG system also doesn't need training on your documents at all: it retrieves them at question time."
  - q: "Can the knowledge base run entirely in Australia?"
    a: "The document store, search index and application can run in Australian cloud regions. Whether the model itself runs onshore depends on which model you choose and its availability in Australian regions at the time, which changes often. We check the provider's regional availability page during discovery and document any processing that leaves Australia."
  - q: "What about superseded documents and old standards?"
    a: "Tag documents with status and date, rank current versions higher, and show the date alongside every citation so a reader can tell a 2016 methodology from the current one. For engineering firms, licensed standards documents should only be indexed if the licence permits it; many don't allow reuse in this way."
  - q: "How long before staff can use it?"
    a: "A pilot over one practice area's documents typically takes 6 to 10 weeks after discovery, and a firm-wide rollout with document management integration another 6 to 12 weeks. The biggest variable is how clean your existing permissions and folder structures are."
  - q: "Does this count as automated decision-making under the Privacy Act?"
    a: "A tool that helps staff find and draft from past work generally doesn't make decisions about individuals. If it's used to screen candidates, assess clients or make other decisions that significantly affect people, the APP 1.7 to 1.9 transparency rules from 10 December 2026 may apply, and that use should be assessed separately."
sources:
  - title: "Guidance on privacy and the use of commercially available AI products"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Australian Privacy Principles, APP 8: Cross-border disclosure of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Small business"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business"
    publisher: "Office of the Australian Information Commissioner"
  - title: "AWS Regions and Availability Zones"
    url: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"
    publisher: "Amazon Web Services"
related:
  - title: "What is RAG (retrieval-augmented generation)?"
    href: "/guides/what-is-rag"
  - title: "How much does a RAG knowledge base cost?"
    href: "/guides/rag-knowledge-base-cost"
  - title: "Microsoft 365 Copilot vs a custom AI assistant"
    href: "/guides/copilot-vs-custom-ai-assistant"
  - title: "AI for Australian law firms"
    href: "/solutions/ai-for-law-firms"
  - title: "AI for accounting and advisory firms in Australia"
    href: "/solutions/ai-for-accounting-firms"
industry:
  title: "AI & Automation"
  href: "/industries/ai-automation"
service:
  title: "RAG knowledge base development"
  href: "/services/rag-knowledge-base"
disclaimer: legal
---

## What does a firm knowledge base actually answer?

**A professional services knowledge base answers the questions staff currently ask a senior colleague or spend an hour searching shared drives for: "Have we done this before, for whom, and what did we recommend?"** It retrieves passages from the firm's own documents and has a language model compose an answer with a citation to each source, so the reader can check it. The technique is [retrieval-augmented generation](/guides/what-is-rag).

| Question type | Example | Sources it draws on | Value |
|---|---|---|---|
| Precedent | "Show me our last three pump station condition assessments and their structure." | Final reports, templates | Faster starts, consistent quality |
| Expertise | "Who in the firm has worked on hospital commissioning?" | Project sheets, CVs, timesheet codes | Staffing and proposals |
| Method | "How do we normally scope a market sizing for a regulated sector?" | Methodology documents, past proposals | Juniors learn the firm's way |
| Proposal | "Draft a relevant experience section for a water utility tender." | Credentials library, project summaries | Hours saved per tender |
| Technical recall | "What design assumptions did we use for seismic loads on the 2023 warehouse jobs?" | Calculations, design reports | Consistency, fewer repeated mistakes |

Consulting, engineering, architecture, planning and advisory firms share the same pattern: valuable knowledge locked in thousands of engagement documents, filed by client and project, with access that should stay restricted. Law and accounting firms add their own regulatory layers, covered on our [law firm](/solutions/ai-for-law-firms) and [accounting firm](/solutions/ai-for-accounting-firms) pages.

## Why does per-client access control shape the whole architecture?

**Because in a professional services firm, the worst failure isn't a wrong answer, it's a right answer drawn from an engagement the asker should never have seen.** Client confidentiality, conflict checks and ethical walls all depend on the knowledge base inheriting and enforcing the same permissions as the document system.

There are three common ways to enforce access, and only one is safe for confidential engagement content:

| Approach | How it works | Risk |
|---|---|---|
| Filter after generation | Search everything, generate an answer, then hide links the user can't open | High. Confidential content has already shaped the answer text. Never acceptable for client work. |
| Separate index per group | One index per practice or team | Moderate. Coarse, hard to maintain as people move between engagements. |
| Filter before retrieval | Every chunk carries the permissions of its source; search only runs over what the asker can see | Low, if permissions are synced reliably. This is the pattern to use. |

Getting filter-before-retrieval right involves several details that generic tools often miss:

1. **Sync permissions, not just documents.** When someone is removed from an engagement or a wall goes up, the index must reflect it quickly, ideally within minutes.
2. **Map identities.** The user signed into the knowledge base must map to the same identity in SharePoint, iManage, NetDocuments or whatever system holds the documents.
3. **Handle inherited and broken permissions.** Folders with unique permissions, shared links and "everyone" groups are common and must be reproduced faithfully, or cleaned up first.
4. **Log every query and retrieval.** Who asked what, and which documents were retrieved, so the firm can answer a client's question about who accessed their material.
5. **Test with adversarial users.** Before launch, test with accounts that are deliberately excluded from specific engagements and confirm they get nothing.

## Which confidentiality obligations shape the build?

**Three layers apply: what your client contracts say, what the Privacy Act requires, and what your profession expects.** The build has to satisfy the strictest of them for each document.

- **Client contracts.** Engagement terms may restrict use of AI tools, processing outside Australia, subcontracting, or reuse of deliverables for other clients. Some government and infrastructure clients impose security requirements on anyone handling their documents. Review a sample of your major contracts before deciding what to index.
- **Privacy Act.** If your firm is covered (most firms with annual turnover above $3 million, among others), the Australian Privacy Principles apply to personal information in engagement files: names, contact details, employee data from HR advisory work, health information in injury or workplace reports. The OAIC's guidance on AI products says privacy obligations apply to personal information input into an AI system and to outputs that contain it, including inferred or incorrect information. It also recommends not entering personal information, particularly sensitive information, into publicly available generative AI tools.
- **Cross-border disclosure.** If a model runs offshore, personal information in prompts and retrieved passages is disclosed overseas, which brings APP 8 into play. Keeping inference onshore where possible, or documenting what leaves, is simpler than arguing about it later.
- **Professional expectations.** Registered engineers, architects and other professionals remain responsible for their advice. A knowledge base can surface precedent; it can't sign off on a design or a recommendation.

### Before you index anything: a checklist

- [ ] Inventory the document sources and who owns each.
- [ ] Review client contract terms for AI, offshore and reuse restrictions, and tag restricted engagements.
- [ ] Clean up "everyone" permissions and orphaned folders.
- [ ] Decide what's excluded outright (HR files, board papers, partner remuneration, walled matters).
- [ ] Confirm licence terms for third party content such as purchased standards and subscription reports.
- [ ] Choose where the index and model will run, and record the provider's data retention terms.

## Which content should go in first, and what should stay out?

**Start with the documents that are already reviewed, finalised and reused: final reports, approved methodologies, credentials and proposal libraries.** They're the highest quality material the firm has, and they're usually the least sensitive per page because they were written to be read by a client.

A sensible loading order for most firms:

1. **Methodologies, templates and internal guidance.** Low confidentiality risk, high value to junior staff, and a good first test of answer quality.
2. **Credentials and project summaries.** Already written for reuse in proposals; they make the expertise and proposal questions work.
3. **Final deliverables from completed engagements.** Indexed with engagement-level permissions and any contract restrictions applied.
4. **Working papers and correspondence.** Only once the permission model has proven itself, and often only for the engagement team while the job is live.

Some content should usually stay out entirely: personnel files, partner remuneration and board papers, walled engagements until the wall is lifted, and anything a client contract says can't be reused. Drafts are a judgement call. They're often wrong, and a knowledge base that confidently quotes a draft recommendation the client later rejected causes real harm. If drafts go in, label them clearly and rank final versions above them.

## What tends to go wrong?

**Most disappointing firm knowledge bases fail on content and trust, not technology.** Staff try it, get a stale or unsupported answer, and go back to asking a colleague.

- **Indexing everything at once.** Duplicates, drafts and outdated templates drown out good material. Curate first.
- **No owner for the content.** Someone in each practice needs to retire superseded methods and flag new exemplars.
- **Hidden citations.** If people can't see and open the source in one click, they won't trust the answer, and they shouldn't.
- **Permission drift.** Permission sync that runs nightly is too slow when an ethical wall goes up at 10am.
- **Measuring usage instead of quality.** Query counts say nothing about whether answers were right. Keep scoring the evaluation set.

## Copilot, an off-the-shelf tool or a custom build?

**If your documents live in Microsoft 365 with clean permissions and you mainly want search and drafting inside Office, try Microsoft 365 Copilot first.** A custom build makes sense when the requirements go beyond that. Our [Copilot vs custom assistant guide](/guides/copilot-vs-custom-ai-assistant) goes into detail.

| Your situation | Likely best fit |
|---|---|
| Documents in SharePoint and OneDrive, permissions well maintained, general drafting and search needs | Microsoft 365 Copilot |
| A legal or accounting specific platform already licensed with a knowledge module | That platform's module |
| Documents across a DMS, project system, CRM and file shares | Custom RAG with connectors |
| Strict residency, retention or client audit requirements | Custom RAG in your own cloud account |
| Specialist retrieval: drawings metadata, calculation files, tender libraries with structured fields | Custom RAG |
| A firm under about 30 people with little document history | Probably neither yet; better filing will give more value first |

## What does a typical engagement look like?

**Most firms should start with one practice area, prove quality and access control, then expand.** Figures below are typical Australian market ranges for an onshore senior team (AUD, ex GST), labelled as ranges, not quotes. Our [RAG knowledge base cost guide](/guides/rag-knowledge-base-cost) explains the drivers, including running costs per query.

| Phase | Duration | What's delivered | Typical range (AUD, ex GST) |
|---|---|---|---|
| Discovery | 2 to 4 weeks | Source inventory, permission audit, contract restrictions, evaluation question set, architecture, fixed price | $10,000 to $25,000 |
| Pilot | 6 to 10 weeks | One practice area indexed, permission sync with one source, cited answers, evaluation results | $35,000 to $80,000 |
| Firm-wide rollout | 6 to 12 weeks | Further sources, SSO, audit logs, admin tools, training | $30,000 to $90,000 |
| Running costs | Monthly | Hosting, vector index, model usage | Varies mainly with query volume and document count; the cost guide shows the arithmetic |

## How should you test it before staff rely on it?

**Build a set of 100 to 200 real questions with known correct answers and sources before launch, and score the system on them after every change.** Include questions whose answer is "we have nothing on that", since a system that invents precedent is worse than useless. Measure whether the right documents were retrieved, whether the answer is faithful to them, and whether citations point to the exact passage. Repeat the permission tests from the checklist above. Our [LLM evaluation](/guides/llm-evaluation) explainer covers the method.

## How All Webbed Labs approaches firm knowledge bases

We start with a paid discovery that audits your permissions and contract restrictions before any content is indexed, then quote a fixed price. Our default is filter-before-retrieval access control, Australian cloud regions for the index and application, and an evaluation set agreed with your partners. Code sits in your repository from day one, and every change passes automated quality gates and a senior engineer's review before release. See our [RAG knowledge base](/services/rag-knowledge-base) service for more.
