---
title: "Mortgage broker software in Australia: what to build around your aggregator"
metaTitle: "Mortgage Broker Software Australia: Beyond the Aggregator CRM"
description: "Mortgage broker software in Australia: what Mercury Nexus, Salestrekker and ApplyOnline cover, best interests records, CDR bank data and retention tools."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Most Australian mortgage brokers already have a CRM through their aggregator, such as Connective's Mercury Nexus, AFG's BrokerEngine Plus or Salestrekker, plus ApplyOnline or Simpology for lodgement and a servicing calculator such as Quickli. A new CRM is rarely the answer. The useful custom work sits around that stack: client intake and document collection, records that show the best interests duty was met, consented bank data, and retention triggers across a whole book. Those pieces typically fall in the $20,000 to $60,000 (AUD, ex GST) market range each, as a range, not a quote."
takeaways:
  - "Brokers facilitate 81.6% of new residential home loans in Australia, according to the MFAA, so the broker file is where most borrower data first lands."
  - "The best interests duty in Part 3-5A of the National Consumer Credit Protection Act has applied since 1 January 2021, and ASIC's RG 273 lists the records it expects you to keep."
  - "Your aggregator owns the CRM and lodgement pipes. Check what data you can export and through which API before you build anything on top."
  - "Mortgage brokers are a named trusted adviser class in the CDR Rules, which gives a consented path to bank data without screen scraping."
  - "AI can draft preliminary assessment notes and credit proposals, but the broker reviews and signs every one."
faqs:
  - q: "What is the best CRM for a mortgage broker in Australia?"
    a: "Usually the one your aggregator supports well, because lodgement, commission and compliance reporting all flow through it. Connective brokers use Mercury Nexus, AFG offers BrokerEngine Plus inside its Suite360 platform, and Salestrekker is an independent CRM built for finance and mortgage brokers. If you are choosing, trial one with a real deal from fact find to settlement and check the export options before you commit."
  - q: "Can we build our own CRM and leave the aggregator system?"
    a: "You can, but you would rebuild lodgement links, lender product data and compliance reports that the aggregator already maintains, and your aggregator agreement may limit what you can move. For most brokerages it is cheaper and safer to keep the aggregator system as the record and build the client facing and retention pieces around it."
  - q: "Should we collect bank statements through screen scraping or CDR?"
    a: "Screen scraping asks clients to hand over internet banking logins, which raises security, privacy and bank terms of use problems. The Consumer Data Right gives a consented alternative. Brokers can receive CDR data as trusted advisers, usually through a CDR provider such as Basiq, whose accreditation you can confirm on the CDR Register. Our CDR guide explains the pathways."
  - q: "What records does ASIC expect a broker to keep?"
    a: "RG 273 lists, among other things, the responsible lending assessment or the material behind it, the credit guide given, information sent to the lender, application outcomes, relevant conversations, the options and the recommendation with reasons, and any conflicts identified and how you prioritised the client. Software should capture these as the deal moves, rather than at audit time."
  - q: "Can AI write my credit proposal?"
    a: "It can draft one from the fact find, servicing results and your notes, in your template, and flag gaps such as an objective you have not addressed. It should not choose the loan. You are legally responsible for the recommendation and its reasons, so the tool must show you the full draft and keep both versions."
  - q: "Have you built software for mortgage brokers before?"
    a: "No. AWLabs has not delivered a project for a mortgage brokerage, so we won't claim sector experience. We bring integration, data and AI engineering. AWLabs holds no Australian credit licence, AFSL or CDR accreditation, and we rely on your licensee and compliance team for what the law requires."
sources:
  - title: "National Consumer Credit Protection Act 2009, Part 3-5A"
    url: "https://www.legislation.gov.au/C2009A00134/latest/text"
    publisher: "Federal Register of Legislation"
  - title: "RG 273 Mortgage brokers: Best interests duty"
    url: "https://asic.gov.au/regulatory-resources/find-a-document/regulatory-guides/rg-273-mortgage-brokers-best-interests-duty/"
    publisher: "ASIC"
  - title: "Responsible lending"
    url: "https://asic.gov.au/regulatory-resources/credit/responsible-lending/"
    publisher: "ASIC"
  - title: "RG 209 Credit licensing: Responsible lending conduct"
    url: "https://asic.gov.au/regulatory-resources/find-a-document/regulatory-guides/rg-209-credit-licensing-responsible-lending-conduct/"
    publisher: "ASIC"
  - title: "Trusted advisers in the Consumer Data Right system"
    url: "https://www.oaic.gov.au/consumer-data-right/guidance-and-advice/trusted-advisers-in-the-Consumer-Data-Right-system"
    publisher: "OAIC"
  - title: "REP 798 Beware the gap: Governance arrangements in the face of AI innovation"
    url: "https://asic.gov.au/regulatory-resources/find-a-document/reports/rep-798-beware-the-gap-governance-arrangements-in-the-face-of-ai-innovation/"
    publisher: "ASIC"
  - title: "Helping your clients stay scam aware"
    url: "https://www.mfaa.com.au/news/helping-your-clients-stay-scam-aware"
    publisher: "MFAA"
  - title: "Salestrekker CRM for finance and mortgage brokers"
    url: "https://www.salestrekker.com/"
    publisher: "Salestrekker"
  - title: "ApplyOnline lending platform"
    url: "https://www.nextgen.net/"
    publisher: "NextGen"
  - title: "Broker technology: Suite360 and BrokerEngine Plus"
    url: "https://www.afgonline.com.au/"
    publisher: "AFG"
  - title: "Basiq open banking platform"
    url: "https://www.basiq.io/"
    publisher: "Basiq"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Consumer Data Right software: how to build with CDR data"
    href: "/guides/consumer-data-right-software"
  - title: "AI development for APRA-regulated financial services"
    href: "/solutions/ai-for-financial-services"
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
  - title: "Custom CRM development cost in Australia"
    href: "/guides/custom-crm-development-cost-australia"
  - title: "Loan origination and servicing software for Australian lenders"
    href: "/solutions/lending-software"
  - title: "Financial planning software in Australia"
    href: "/solutions/financial-planner-software"
service:
  title: "AI document processing"
  href: "/services/ai-document-processing"
industry:
  title: "Finance and fintech"
  href: "/industries/finance-fintech"
disclaimer: "legal"
---

## What does a broker's file look like from first call to the next refinance?

**A broker file is a chain of evidence: what the client said they need, what you checked, which loans you compared, why you recommended one, and what happened after settlement.** The CRM records the pipeline, but the evidence is scattered across emails, PDFs, calculator screenshots and phone notes.

A typical residential deal runs like this:

1. First conversation, with requirements and objectives noted.
2. Fact find: income, expenses, assets, liabilities, credit history and goals.
3. Document collection: payslips, tax returns, bank statements, identity, contract of sale.
4. Servicing across a shortlist of lenders, then a product comparison.
5. Preliminary assessment and the recommendation, with reasons.
6. Lodgement through ApplyOnline or Simpology, conditions, approval and settlement.
7. Years of ongoing relationship: rate reviews, fixed rate expiries, top ups and refinances.

The volume matters. The MFAA reports that brokers now facilitate 81.6% of new residential home loans, so a busy brokerage runs this chain hundreds of times a year. Steps 2, 3, 5 and 7 are where hours disappear and where custom software earns its keep.

## What does the aggregator stack already give you?

**Your aggregator usually supplies the CRM, lender product data, lodgement and commission reporting, and you should not rebuild any of that.** The main tools at the time of writing:

| Tool | Who provides it | What it covers |
|---|---|---|
| Mercury Nexus | Connective | Broker CRM, compliance workflow, lender comparison and reporting |
| BrokerEngine Plus, Suite360 | AFG | Deal lodgement, customer management and product selection |
| Salestrekker | Independent | Pipeline, broker calculators, compliance documents, post settlement marketing |
| ApplyOnline | NextGen | Lodgement and origination between brokers, aggregators and lenders |
| Loanapp | Simpology | Electronic lodgement with configurable application journeys |
| Quickli | Independent | Servicing calculators and lender policy across many lenders |

The seams show up in three places. Client facing intake is often a web form that dumps into the CRM without structure. Document chasing is still done by email. And retention tools work book by book inside one aggregator's system, which hurts brokerages that hold loans written through more than one aggregator over the years.

Before scoping any build, ask your aggregator three questions: which API or export can we use, who owns the client data under our agreement, and will they support a third party writing back into the CRM? The answers decide what is possible.

## What must your records show under the best interests duty?

**Since 1 January 2021, section 158LA of the National Consumer Credit Protection Act requires a mortgage broker to act in the best interests of the consumer, and section 158LB requires the consumer's interests to come first in a conflict.** ASIC's RG 273, issued in June 2020, explains how it assesses compliance and says your records should clearly show how you complied.

RG 273.165 lists what ASIC generally expects you to keep. Treat it as a checklist for what your software captures as the deal moves:

- The responsible lending assessment, or the documents used to prepare it
- The credit guide given to the client
- Information provided to the lender in the application
- Outcomes of credit applications
- Relevant conversations with the client
- Evidence you acted in their best interests, including efforts to educate them
- The options, the final recommendation and the reasons, with your decision process
- Conflicts identified and how you put the client first

Responsible lending sits alongside this. ASIC's RG 209 requires reasonable inquiries, reasonable steps to verify, and a preliminary assessment that the loan is not unsuitable, with a written copy available if the client asks. A system that ties each of those items to the deal record, with timestamps and versions, turns an audit request into an export rather than a week of digging.

## How do you collect the fact find and documents without the email chase?

**A secure client portal that asks for exactly what this deal needs, checks it on arrival and syncs it to the CRM removes most of the chasing.** The portal is the custom piece; the CRM stays the record.

What a good one does:

- Builds the document list from the deal type, so a self employed borrower is asked for tax returns and a PAYG borrower for payslips.
- Accepts photos from a phone and checks they are readable and complete.
- Uses [AI document processing](/services/ai-document-processing) to read a payslip or a notice of assessment and prefill the fact find, with the broker confirming values.
- Shows the client, and the broker, what is still outstanding.
- Sends reminders by SMS and email on a schedule the broker controls.

Our [customer portal guide](/guides/customer-portal-development) covers the design decisions that apply to any portal of this kind.

## Bank statements: CDR data or screen scraping?

**Brokers can receive bank data through the Consumer Data Right as trusted advisers, which is the consented, regulated route; screen scraping asks clients to share their banking logins with a third party.** The OAIC lists mortgage brokers within the meaning of the National Credit Act as one of the trusted adviser classes in CDR Rules rule 1.10C.

In practice a brokerage does not seek its own accreditation. It uses a provider such as Basiq, part of Cuscal, which offers CDR and open banking access across more than 135 Australian and New Zealand institutions, and passes the consented data into the servicing and expense workflow. Our [Consumer Data Right guide](/guides/consumer-data-right-software) covers accreditation, CDR representatives and trusted advisers in depth; here the point is design. Store which consent produced which data, and when it expires.

## How do you keep the book, not just write it?

**Retention is a data problem: knowing, across every loan you have written, which clients are coming off a fixed rate, paying above a fair rate or due for a review.** Most aggregator CRMs hold some of this, but rarely across books on different platforms.

A retention engine pulls settled loan data from each source, calculates trigger dates and builds a weekly work list:

- Fixed rate expiries 90 and 30 days out
- Annual reviews that are due
- Clients whose rate sits well above current offers for their profile
- Life events the client has told you about, such as a child starting school or a planned renovation

The broker still decides who to call and what to recommend; the system only makes sure nobody is forgotten. That kind of [workflow automation](/services/workflow-automation) is a common first build because it pays back in retained trail.

## Where does AI help, and where must the broker stay in charge?

**AI is useful for drafting the credit proposal and the preliminary assessment notes from the fact find, servicing output and your call notes, provided the broker reviews every word.** It is not a decision maker. The recommendation and its reasons are the broker's under section 158LA.

ASIC's REP 798, released in October 2024, reviewed 23 AFS and credit licensees and found governance was lagging AI adoption. Build to answer the questions your licensee will ask: which data the model saw, where it was processed, what the draft said, what the broker changed and who approved it. Keep both the draft and the final in the file.

## What do typical builds cost?

**Most brokerages need one or two focused tools, which sit in the lower to middle bands of Australian custom software pricing.** These are indicative AUD market ranges, ex GST, not quotes. Expeed publishes $15,000 to $40,000 for simple internal tools and $40,000 to $150,000 for mid complexity systems such as customer portals.

| Build | Includes | Indicative range |
|---|---|---|
| Fact find and document portal with CRM sync | Deal based document lists, phone upload, AI prefill, reminders | $25,000 to $60,000 |
| Retention engine across aggregator books | Data import from each source, trigger rules, weekly work lists | $20,000 to $50,000 |
| AI credit proposal and assessment drafting | Templates, review screen, version history, model hosting | $25,000 to $60,000 |

Ranges move with the number of aggregator systems, the quality of their APIs and how much data sits outside them. Expeed puts ongoing maintenance at 15% to 20% of the build each year.

## How AWLabs works with brokerages

We start with a Development Consult to hear where deals stall and what you would automate first. If a build looks worthwhile, a paid Discovery Audit tests your aggregator's API and export options and maps your compliance records, then you receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with updates every Tuesday and Friday, Sydney time.

AWLabs has not yet delivered a project for a mortgage brokerage, and we will say so if your aggregator can already do the job. We hold no credit licence, AFSL or CDR accreditation. This page is general information, not legal or credit advice; your licensee and compliance advisers decide what your obligations require. See our wider [finance and fintech](/industries/finance-fintech) work.
