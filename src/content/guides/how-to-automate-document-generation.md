---
title: "How to automate document generation: contracts, proposals and reports from your own data"
metaTitle: "How to Automate Document Generation in Australia"
description: "How to automate contracts, proposals and reports from CRM or job data: templates, clause logic, Power Automate vs custom, AI drafting and s127 execution."
eyebrow: "How to guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "Automated document generation fills a template from data you already hold, such as CRM records, job details or form answers, and applies rules about which clauses and sections appear. Start with documents that are high volume, low variation and costly to get wrong. Power Automate with Word templates handles simple merges for businesses on Microsoft 365. Document assembly tools suit legal style clause logic. A custom generator pays when documents depend on complex rules, approvals or several systems. As an indicative guide, a few Word templates on Power Automate run $8,000 to $25,000 (AUD, ex GST), and a custom generator with a clause library and e-signing $40,000 to $90,000."
takeaways:
  - "Pick documents by volume, variation and risk. A letter sent 500 times a year with three versions is a better first project than a bespoke contract."
  - "There are three levels: merge fields, conditional sections, and clause logic driven by rules. Know which one you need before choosing a tool."
  - "Dirty CRM data produces wrong documents at scale. Fix the source fields before you automate the output."
  - "AI can draft sections, but a named person must approve anything sent to a client or counterparty."
  - "Companies can sign electronically under s127 of the Corporations Act, and directors can sign different copies by different methods."
faqs:
  - q: "Can Power Automate generate Word documents?"
    a: "Yes. The Word Online (Business) connector has a Populate a Microsoft Word template action that fills content controls in a Word template, and a convert to PDF action. Both are premium connectors, so each user running the flow needs a premium licence. Power Automate Premium is listed at AU$22.40 per user per month (ex GST, paid yearly) at the time of writing."
  - q: "What is the difference between document automation and document processing?"
    a: "Document generation writes documents out from data you hold. Document processing reads documents coming in, such as invoices or forms, and turns them into data. They often sit in the same workflow, but the tools and risks are different. Our AI document processing service covers the reading side."
  - q: "Can AI write our contracts?"
    a: "AI can draft sections, summarise terms and suggest clauses, and it is useful for first drafts of proposals and reports. For contracts, the safer pattern is an approved clause library chosen by rules, with AI used only for low risk wording and a lawyer or responsible person reviewing anything non standard. Models can invent terms that sound right but are not."
  - q: "Which documents can't be signed electronically in Australia?"
    a: "Most business documents can be. The exceptions vary by state and by document: wills, some powers of attorney, some statutory declarations and certain land dealings have their own execution and witnessing rules. Check the state law for each document type before you automate its signing. This is general information, not legal advice."
  - q: "How long should we keep generated documents?"
    a: "The ATO says you need to keep most business records for 5 years, and ASIC requires companies to keep certain records for 7 years. Contracts, deeds and industry records can have longer periods. Store the final signed version, the data it was generated from and the template version used."
  - q: "What is a realistic first project?"
    a: "One document family with clear rules and real volume, such as engagement letters, standard proposals or job completion reports. Build the template, connect it to one data source, add an approval step and measure the time saved for a month before adding more."
sources:
  - title: "Word Online (Business) connector reference"
    url: "https://learn.microsoft.com/en-us/connectors/wordonlinebusiness/"
    publisher: "Microsoft Learn"
  - title: "Power Automate pricing (Australia)"
    url: "https://www.microsoft.com/en-au/power-platform/products/power-automate/pricing"
    publisher: "Microsoft"
  - title: "Corporations Amendment (Meetings and Documents) Act 2022"
    url: "https://www.legislation.gov.au/C2022A00009/asmade/text"
    publisher: "Federal Register of Legislation"
  - title: "Electronic signatures"
    url: "https://www.ag.gov.au/legal-system/electronic-signatures-documents-and-transactions/electronic-signatures"
    publisher: "Attorney-General's Department"
  - title: "Exemptions to the ETA"
    url: "https://www.ag.gov.au/legal-system/electronic-signatures-documents-and-transactions/exemptions-eta"
    publisher: "Attorney-General's Department"
  - title: "Overview of record keeping rules for business"
    url: "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/record-keeping-for-business/overview-of-record-keeping-rules-for-business"
    publisher: "Australian Taxation Office"
related:
  - title: "Are electronic signatures legal in Australia?"
    href: "/guides/electronic-signatures-australia"
  - title: "How to automate quoting"
    href: "/guides/how-to-automate-quoting"
  - title: "How to automate client onboarding"
    href: "/guides/how-to-automate-customer-onboarding"
  - title: "AI for law firms"
    href: "/solutions/ai-for-law-firms"
  - title: "Low-code vs custom development"
    href: "/guides/low-code-vs-custom-development"
service:
  title: "Workflow automation"
  href: "/services/workflow-automation"
disclaimer: legal
---

## Which documents are worth automating first?

**Automate the documents you produce often, that follow clear rules, and that cause real trouble when they are wrong.** Score each candidate on volume, variation and risk before you pick a tool.

| Document | Volume | Variation | Risk if wrong | Good first project? |
|---|---|---|---|---|
| Engagement letters and terms of business | High | Low to medium | High (scope and fees) | Yes |
| Standard proposals and quotes | High | Medium | Medium | Yes |
| Job completion or inspection reports | High | Low | Medium | Yes |
| Employment contracts and offer letters | Medium | Medium | High | Yes, with legal review of the template |
| Bespoke commercial contracts | Low | High | High | Not first; use a clause library later |
| Board papers and one off reports | Low | High | Low | Rarely worth it |

A good rule: if staff copy last month's version and change the names, it is a candidate. If every version is drafted from scratch by a senior person, automation helps less than a good template library.

## What are the three levels of document automation?

**Level one fills in fields, level two switches sections on and off, and level three assembles documents from a clause library by rules.** Each level costs more and needs more careful testing.

1. **Merge fields.** Names, addresses, dates, fees and line items drop into fixed positions. Mail merge has done this for decades, and Power Automate does it with Word content controls.
2. **Conditional sections.** Whole paragraphs appear or disappear by rule: a GST clause only for GST registered clients, a deposit clause only above a contract value, a state specific clause by the customer's address.
3. **Clause logic.** The document is assembled from an approved library. Rules pick the clause version (for example, a liability cap by contract value), number the clauses, fix cross references and record which version of each clause was used.

Most businesses need level two. Law firms, financial services and anyone producing contracts at volume usually need level three, which is where [AI for law firms](/solutions/ai-for-law-firms) and document assembly products earn their keep.

## Power Automate, a document assembly tool or a custom generator?

**Use Power Automate for level one and simple level two on Microsoft 365, a document assembly product for legal clause logic, and a custom generator when documents depend on complex rules or several systems.** The table sets out the trade offs.

| Factor | Power Automate and Word templates | Document assembly products | Custom generator |
|---|---|---|---|
| Best for | Letters, simple contracts, reports from SharePoint or Dataverse | Legal and compliance documents with clause choices | Documents driven by pricing, jobs, CRM and approvals together |
| Logic | Merge fields; conditions need flow logic | Strong clause and question logic | Anything you can specify |
| Licensing | Premium connector, per user licence | Per user subscription | Build cost plus hosting |
| Data sources | Microsoft connectors, others via premium connectors | Questionnaires and some integrations | Any system with an API or database |
| Who maintains templates | Power user | Lawyers or document owners | Developers plus document owners |
| Weak spot | Complex tables and rules get messy | Tied to the vendor's format | Upfront cost |

Two Power Automate details matter when you cost it. The Populate a Microsoft Word template action is a premium connector, so it needs a premium licence. Microsoft's documentation also notes the action can't be used when a multifactor authentication conditional access policy applies, which catches out some organisations with strict security settings. Our [low code vs custom guide](/guides/low-code-vs-custom-development) covers the broader decision.

## Where does the data come from, and why does it break documents?

**A generated document is only as good as the fields behind it, and automation copies errors into every document at once.** Fix the data before you build the template.

The usual problems, and what to do about them:

- **Free text where you need a choice.** "NSW", "N.S.W." and "New South Wales" in a state field break any state based clause rule. Replace free text with picklists.
- **Missing fields.** If ABN, legal entity name or billing contact is optional in the CRM, many records will be blank. Make the generator refuse to run and list what is missing.
- **Trading name versus legal name.** Contracts need the legal entity. Store both, and look up the legal name against the ABN where you can.
- **Stale records.** Old addresses and departed contacts produce documents addressed to the wrong person. Add a check date to key fields.
- **Several sources disagree.** If the CRM and the accounting system hold different addresses, decide which one wins for each field.

## Can AI draft sections safely?

**Yes, for wording that a person then approves. Keep AI out of choosing legal terms and prices.** The accountable person should see exactly what was generated and approve it before it is sent.

Sensible uses: summarising a long brief into an executive summary, drafting the scope description in a proposal from job notes, turning inspection notes into readable findings, and producing a first draft of a report section. Each draft lands in a review queue with its source data next to it.

Design rules that keep it safe:

1. **Approved clauses come from the library, never from the model.** The model can pick which approved clause applies only if a rule or a person confirms it.
2. **Label AI drafted text** inside the review screen, so the reviewer knows what to read closely.
3. **Log the prompt, model and output** with the document, so you can explain how it was produced.
4. **Keep personal information out of public AI tools.** Use an enterprise model service with appropriate data terms; our guide to the [Privacy Act and AI](/guides/privacy-act-and-ai) explains the obligations.

## How are generated documents signed and executed?

**Most business documents can be signed electronically, and companies can execute documents, including deeds, electronically under s127 of the Corporations Act.** The details decide how you build the signing step.

Under the Commonwealth Electronic Transactions Act, the Attorney-General's Department explains that an electronic signature works for most Commonwealth processes if the method identifies the signer, shows their intention and is as reliable as appropriate in the circumstances. Each state and territory has its own Act for processes under state law, with its own exemptions.

For companies, the Corporations Amendment (Meetings and Documents) Act 2022 made electronic execution permanent from 23 February 2022. Its main points for software:

- A director or secretary can sign an electronic form of the document by electronic means, if the method identifies them and shows their intention.
- Signers don't need to sign the same copy, the same page or use the same method. One director can sign on paper and another electronically.
- A company can execute a deed under s127(1) without witnesses, whether the document is physical or electronic, and delivery isn't needed.
- A proprietary company with a sole director can execute if that director is also the sole secretary or there is no secretary.

So a generator can send one contract to two directors through an e-signing service and treat it as executed when both have signed. Our guide to [electronic signatures in Australia](/guides/electronic-signatures-australia) covers the documents that still need special handling.

## How do you control versions and find documents later?

**Store three things for every document: the final signed file, the data it was generated from, and the template and clause versions used.** With those, you can recreate or explain any document years later.

- **Template versioning.** Each template change gets a version number, an approver and a date. Old versions stay available.
- **Naming and metadata.** Client, matter or job number, document type, date and status as fields, not just in the file name.
- **One home.** Signed documents go to one place, such as SharePoint, the matter system or your own document store, linked back to the CRM record.
- **Retention.** The ATO says you need to keep most business records for 5 years, and notes that ASIC requires companies to keep records for 7 years. Industry rules can be longer. Set retention by document type and delete on schedule.

## What does it cost, and what is a realistic first project?

**Indicative ranges run from about $8,000 for a few templates on Power Automate to $120,000 for AI assisted drafting with a review workflow.** These are our estimates of typical Australian market pricing (AUD, ex GST), not quotes.

| Build | Indicative range (AUD, ex GST) | Ongoing costs |
|---|---|---|
| Power Automate and Word templates for a few document types | $8,000 to $25,000 | Premium licences per user |
| Custom generator with clause library, approvals and e-signing | $40,000 to $90,000 | Hosting, e-signing fees, maintenance |
| AI assisted drafting with a review workflow | $50,000 to $120,000 | Model usage, hosting, maintenance |

A realistic first project takes one document family, connects one data source, adds a review step and runs for a month. Measure the minutes per document before and after. If the saving is real, add the next family. The [workflow automation cost guide](/guides/workflow-automation-cost) shows how to turn those minutes into a payback period, and if the documents feed a quoting process, see [how to automate quoting](/guides/how-to-automate-quoting).

## How AWLabs approaches document automation

We start by collecting the last 20 versions of the document you want to automate and finding where they differ. In the Development Consult we tell you if Power Automate or an existing document assembly product will do the job. Where a custom generator is the better fit, a paid Discovery Audit maps the clause rules and the data sources; its fee is credited in full against the build. The Schedule of Work then sets a fixed price across three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, and template ownership stays with your team so you aren't dependent on us for every wording change. See our [workflow automation service](/services/workflow-automation) and, for the reading side of documents, [AI document processing](/services/ai-document-processing).
