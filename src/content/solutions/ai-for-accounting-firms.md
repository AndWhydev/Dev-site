---
title: "AI for accounting and advisory firms in Australia"
metaTitle: "AI for Accounting Firms in Australia: Uses and Costs"
description: "AI for accounting firms in Australia: real examples, accounting automation with Xero and MYOB, TPB confidentiality rules and what a custom build costs."
eyebrow: "Industry solution"
published: 2026-09-28
updated: 2026-09-28
summary: "AI for accounting firms in Australia works best on the document-heavy work around compliance jobs: collecting and sorting client records, extracting figures into workpapers, drafting queries and answering staff questions from the firm's own procedures. The main constraint is Code item 6 of the Tax Practitioners Board's Code of Professional Conduct: an AI provider is a third party, so client permission, disclosure in engagement letters and tight data handling come first. A custom build for a mid-sized firm typically costs $40k to $205k (AUD, ex GST) including discovery."
takeaways:
  - "The TPB says third parties include offsite and cloud storage providers; treat an AI model provider the same way and cover it in your engagement letter."
  - "Xero's revised developer terms (effective from 4 December 2025 for new developers and 2 March 2026 for existing ones) prohibit using data obtained from its APIs to train AI or machine learning models."
  - "The best first projects sit before and after the accountant's judgement: document intake, reconciliation prep and first drafts, not the tax position itself."
  - "Off-the-shelf AI in Xero, MYOB and practice management tools is often enough; custom work pays off when you need to join systems or apply firm-specific procedures."
  - "Every AI output that reaches the ATO or a client should pass a registered agent's review, consistent with the Code's competence and reasonable care obligations."
faqs:
  - q: "Do we need client consent to use AI on their files?"
    a: "Code item 6 prohibits disclosing information about a client's affairs to a third party without the client's permission, unless you have a legal duty to disclose. The TPB's guidance treats cloud storage and outsourcing providers as third parties and expects you to tell clients what will be disclosed, to whom and where. Most firms handle this in the engagement letter. Whether a specific tool involves a disclosure is a question for your own professional judgement and advisers."
  - q: "Can we use ChatGPT or Claude directly with client documents?"
    a: "Consumer plans are a poor fit because of data retention and training defaults. Business and enterprise plans, or models accessed through your own cloud account, give contractual commitments on training and retention, and in some cases Australian data residency. Check the current terms for the exact product, and record your assessment."
  - q: "Can AI prepare and lodge tax returns?"
    a: "AI can assemble data and draft schedules, but lodgment and the positions taken should stay with a registered agent. The Code requires tax agent services provided on your behalf to be provided competently and requires reasonable care in applying the tax law. A human review step is how you meet that when AI is involved."
  - q: "Will this work with Xero Practice Manager?"
    a: "Usually, but check access first. At the time of writing, Xero lists the XPM API as a premium feature requiring a security assessment and use case approval, available on its higher partner tiers. That approval can take longer than the build, so it belongs in discovery."
  - q: "We're a 10-person firm. Is custom AI worth it?"
    a: "Often not yet. Start with the AI features in the software you already pay for and a well-configured business AI assistant. Custom work makes sense when a recurring workflow crosses several systems, or when you have firm-specific procedures that generic tools can't follow."
  - q: "Will AI replace accountants?"
    a: "Not the parts of the job that carry professional responsibility. The Code ties tax positions, reasonable care and lodgment to a registered agent, so AI in accounting mostly removes the document handling and first drafts around that work. Firms that adopt it tend to shift staff time from data entry towards review and advisory work rather than removing the accountant."
  - q: "What is the difference between accounting automation and AI?"
    a: "Accounting automation usually means fixed rules: bank feed rules, recurring journals, a workflow that moves a file when a status changes. AI adds judgement-like steps that rules can't handle, such as reading an unfamiliar PDF, classifying a document or drafting a reply. Most useful builds combine both, with rules doing the predictable steps and a model handling the messy inputs."
  - q: "What happens to tax file numbers?"
    a: "TFNs are covered by the Privacy (Tax File Number) Rule 2015 as well as the Privacy Act. Our default is to detect and mask TFNs before any text reaches a model, and to keep them only in the systems that already hold them."
sources:
  - title: "Code of Professional Conduct"
    url: "https://www.tpb.gov.au/code-professional-conduct"
    publisher: "Tax Practitioners Board"
  - title: "Confidentiality of client information"
    url: "https://www.tpb.gov.au/confidentiality-client-information"
    publisher: "Tax Practitioners Board"
  - title: "Supervision, competency and quality management"
    url: "https://www.tpb.gov.au/supervision-competency-and-quality-management"
    publisher: "Tax Practitioners Board"
  - title: "Xero Developer pricing and policies"
    url: "https://developer.xero.com/pricing"
    publisher: "Xero"
  - title: "MYOB API overview"
    url: "https://developer.myob.com/api/myob-business-api/api-overview/"
    publisher: "MYOB"
  - title: "Privacy (Tax File Number) Rule 2015"
    url: "https://www.legislation.gov.au/F2015L00249/latest/text"
    publisher: "Federal Register of Legislation"
related:
  - title: "AI knowledge bases for professional services firms"
    href: "/solutions/professional-services-knowledge-base"
  - title: "Using personal information in AI systems under the Privacy Act"
    href: "/guides/privacy-act-and-ai"
  - title: "n8n vs Make vs Zapier (and when to go custom)"
    href: "/guides/n8n-vs-make-vs-zapier"
  - title: "AI development for APRA-regulated financial services"
    href: "/solutions/ai-for-financial-services"
service:
  title: "AI document processing and data extraction"
  href: "/services/ai-document-processing"
industry:
  title: "Financial services"
  href: "/industries/finance-fintech"
disclaimer: legal
---

## How can accounting firms use AI? Examples by workflow

**The best way to use AI in accounting is on the collection, sorting and drafting work that surrounds each job, while the accountant keeps the judgement.** Tax, BAS and advisory work runs on documents: bank statements, invoices, trust distribution minutes, depreciation schedules, emails from clients who attach the wrong year's statement. That's the part a model handles well, and it's where most practical examples of AI in accounting sit today, whether you buy a feature or commission custom accounting software development.

| Workflow | What AI does | Who checks it |
|---|---|---|
| Year-end records collection | Reads what the client uploaded, labels each document, lists what's missing against the job checklist, drafts the follow-up request | Job manager sends the request |
| Bookkeeping and bank reconciliation prep | Suggests coding for uncoded transactions using the client's history, flags unusual items | Accountant accepts or recodes in Xero or MYOB |
| Workpaper population | Extracts figures from statements and schedules into the firm's workpaper template, with a link to each source | Preparer ticks each figure; reviewer signs off |
| Client queries | Drafts replies to routine questions from the file and the firm's standard wording | Staff member edits and sends |
| Internal procedures assistant | Answers staff questions from the firm's manuals, checklists and past technical memos | Staff member reads the cited source |
| Advisory prep | Summarises management accounts and prior-year notes before a client meeting | Partner uses it as a briefing, not advice |

Notice what's missing: forming the tax position, deciding deductibility, and lodging. Those are the tasks the Code ties most closely to a registered agent's competence and reasonable care.

## Does sending client data to an AI model breach confidentiality?

**Not automatically, but it is a disclosure to a third party, so it needs the same permission and controls as any cloud provider.** Code item 6 says that unless you have a legal duty to do so, you must not disclose any information relating to a client's affairs to a third party without the client's permission.

The TPB's confidentiality guidance is explicit that third parties include entities maintaining offsite data storage, including cloud storage, and outsourced service providers. It says the obligation hasn't changed because practices increasingly use these arrangements: you must keep client information confidential and appropriately disclose the arrangements to clients. It also expects you to tell clients what information is disclosed, to whom and where, typically through the engagement letter.

An AI model provider fits comfortably inside that description. The practical consequences for a build:

1. **Engagement letters** should name the category of AI provider, the purpose and where the data is processed.
2. **Provider terms** must rule out training on your data and set a short or zero retention period. Record which plan and terms apply.
3. **Location** matters for client expectations and your own privacy obligations; prefer Australian regions where the model you need is available.
4. **Minimisation:** mask TFNs, bank account numbers and identity document numbers before text reaches a model, unless the task genuinely needs them.
5. **Access control:** the AI should only see the jobs the user is allowed to open in the practice management system.

The 2024 Code Determination added further obligations, including quality management systems and ensuring those who provide services on your behalf have sufficient knowledge and skills. Those apply from 1 January 2025 for larger practices and 1 July 2025 for practices with 100 or fewer employees. An AI tool that drafts work is part of how services are delivered on your behalf, so it belongs in your quality management documentation. Members of the professional bodies also carry the confidentiality principle in the APES 110 Code of Ethics.

For the wider Privacy Act picture, our guide to [using personal information in AI systems](/guides/privacy-act-and-ai) covers collection, use and overseas disclosure.

## A checklist before any client data reaches a model

**Clear these ten items first; most are policy decisions, not engineering.**

- [ ] Engagement letter wording updated to cover AI processing, and existing clients informed
- [ ] Each AI provider's terms on training, retention and location recorded
- [ ] Business or enterprise plans only; no personal accounts used for client work
- [ ] TFN and identifier masking in place and tested
- [ ] Permissions inherited from the practice management system
- [ ] Every output linked back to its source document
- [ ] Human review step defined for each workflow, with the reviewer recorded
- [ ] Prompts, outputs and sources logged and kept under your records policy
- [ ] Staff guidance on what can and can't be pasted into general AI tools
- [ ] AI tools added to the firm's quality management documentation

## How does it work with Xero, MYOB and practice software?

**Most practices run a ledger platform, a practice management system and a document portal, and the AI layer has to respect all three.**

| System | What the AI layer reads or writes | Watch for |
|---|---|---|
| Xero | Transactions, contacts, reports, attachments; writes suggested coding back as drafts | Under Xero's revised developer terms, data from its APIs may not be used to train AI or ML models. Partner tiers based on connection counts and data egress replaced the old revenue share model from 2 March 2026 |
| Xero Practice Manager | Jobs, clients, tasks, time | XPM API access requires a security assessment and use case approval at the time of writing |
| MYOB (AccountRight, Business, Essentials) | Company file data through the MYOB Business API | MYOB Acumatica has a separate API and developer program |
| Practice and document tools (for example FYI, Karbon, SuiteFiles, SharePoint) | Client documents, emails, job status | Each has its own API limits and permission model |
| Client portals and email | Incoming records and questions | Treat attachments as untrusted input |
| ATO online services | Out of scope for automation in most builds | Lodgment stays with the registered agent |

Where the job is simply moving data between two of these tools on a trigger, a workflow platform may be cheaper than custom code. Our [n8n vs Make vs Zapier comparison](/guides/n8n-vs-make-vs-zapier) explains when that's true.

## Worked example: a year-end records pack

**Here is the flow we would design for a mid-sized practice's individual and small business returns.** It shows where the AI acts and where people stay in charge.

1. The client uploads documents to the portal. The system classifies each one (bank statement, rental statement, payment summary, receipt) and reads the financial year.
2. It compares what arrived with the job checklist and prior-year file, and drafts a missing-items email for the job manager to approve.
3. Figures are extracted from each document into the workpaper template, each with a confidence score and a link to the page it came from.
4. Where the client's ledger is in Xero or MYOB, the system reconciles extracted figures against it and lists differences.
5. The preparer reviews every figure, focusing on low-confidence ones and differences, and completes the return in the firm's tax software.
6. The reviewer signs off as usual. The AI's contribution, the sources and the reviewer are recorded against the job.

Nothing in that flow changes who is responsible for the return. What changes is the time spent opening PDFs and retyping numbers.

## What goes wrong when firms rush this?

**The common failures are ordinary ones: staff pasting client files into personal AI accounts, numbers extracted from the wrong period, and drafts sent without review.** None needs sophisticated engineering to prevent, but each needs a deliberate control.

- **Shadow AI.** If the firm doesn't provide an approved tool, staff will use their own. Providing a sanctioned assistant with the right terms usually reduces risk more than banning AI outright.
- **Wrong-period figures.** A model reading a bank statement can pick up the opening balance of the wrong year. Checking the statement period against the job's financial year catches this before it reaches a workpaper.
- **Plausible but wrong explanations.** When asked why a figure changed, a model may invent a reason (see [why AI hallucinates and how to reduce it](/guides/ai-hallucinations)). Keep AI explanations out of client-facing material unless a person has confirmed them against the file.
- **Cross-client leakage.** A shared knowledge base built from past files can surface one client's details in another client's answer. Build retrieval per client, or restrict shared content to the firm's own procedures and de-identified technical memos.

## Should you build or buy?

**Buy first if your ledger and practice tools already include the AI you need; build when the workflow crosses systems or depends on your firm's own procedures.** Xero, MYOB and the major practice management vendors are all adding AI features, and for many small firms those plus a business AI assistant will be enough.

Custom work tends to pay off for firms that have:

- A recurring workflow that touches three or more systems
- Firm-specific checklists, templates and technical positions a generic tool doesn't know
- A need to keep processing in Australia with specific providers
- Volume high enough that small time savings per job add up

Our [build vs buy guide](/guides/build-vs-buy-software) goes through the total cost comparison.

## What does it cost for a mid-sized firm?

**Custom AI work for a mid-sized firm typically runs 6 to 19 weeks and $40,000 to $205,000 (AUD, ex GST) including discovery.** These are typical Australian market ranges for senior onshore teams, not a quote.

| Scope | Typical duration | Typical range (AUD, ex GST) |
|---|---|---|
| Discovery: workflows, systems, API access, confidentiality review | 2 to 3 weeks | $10,000 to $25,000 |
| Internal procedures assistant over the firm's manuals | 4 to 6 weeks | $30,000 to $60,000 |
| Records intake and workpaper extraction for one job type | 6 to 10 weeks | $50,000 to $110,000 |
| Multi-system workflow across ledger, practice management and portal | 10 to 16 weeks | $90,000 to $180,000 |

Worked example: a records intake workflow of about 400 hours at a blended $170 an hour is $68,000; with $15,000 of discovery the project is $83,000 ex GST. Running costs are mainly model usage, which scales with pages processed, plus hosting and any Xero partner tier fee.

## How All Webbed Labs works with accounting firms

We start with paid discovery that maps your workflows, confirms API access with Xero, MYOB and your practice tools, and sets out the confidentiality position for your partners to approve. Then we build at a fixed price, with data in Australian regions by default and every change going through automated quality gates and a senior engineer's review. Code sits in your repository from day one. See [AI document processing](/services/ai-document-processing), [workflow automation](/services/workflow-automation) and [AI knowledge bases for professional services firms](/solutions/professional-services-knowledge-base).
