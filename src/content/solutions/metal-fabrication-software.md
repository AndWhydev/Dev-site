---
title: "Steel fabrication software in Australia: quoting, traceability and progress claims"
metaTitle: "Steel Fabrication Software Australia: What to Build"
description: "Steel fabrication software for Australian job shops: quoting from drawings, heat number traceability for AS/NZS 5131, NSSCS audits and progress claims."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Most Australian steel fabricators run three disconnected systems: a modelling tool such as Tekla Structures, a fabrication MRP such as Tekla PowerFab or STRUMIS, and an accounting ERP such as MYOB Acumatica. The gaps between them are where custom software pays off: a quote builder that turns drawing takeoffs into priced estimates, a traceability record that links every heat number and mill certificate to the members it went into, and a progress claim workflow that keeps you on the right side of security of payment deadlines. Focused builds typically sit between $30,000 and $100,000 (AUD, ex GST) as an indicative planning range, not a quote."
takeaways:
  - "Steelwork Compliance Australia is the only approved certification body for the ASI National Structural Steelwork Compliance Scheme, and audits fabricators to AS/NZS 5131 and Parts 2, 3 and 4 of AS/NZS ISO 3834."
  - "AS/NZS 5131 covers documentation, materials, welding and traceability, surface treatment, bolting, erection and inspection, so your records have to follow a member from mill to site."
  - "In NSW, unless the contract says otherwise, a subcontractor's progress payment is due 20 business days after the payment claim, and the respondent has 10 business days to serve a payment schedule."
  - "Buy the fabrication MRP. Build the parts that are specific to how you quote, what your auditors ask for and how your builders pay."
  - "AWLabs has not yet delivered a project for a steel fabricator, and we say so plainly."
faqs:
  - q: "Should we replace Tekla PowerFab or STRUMIS with custom software?"
    a: "Usually not. Both products already handle estimating, purchasing, inventory and production control for structural steel, and replacing them is expensive and risky. Custom work makes more sense around them: a quoting front end for the work they handle poorly, a QA record your auditor can read in one place, or an integration that stops your team keying the same job into three systems."
  - q: "What traceability records does an NSSCS audit look at?"
    a: "Steelwork Compliance Australia audits against AS/NZS 5131, which includes materials, welding and traceability, and against AS/NZS ISO 3834 for welding quality. In practice auditors want to see that material certificates are linked to the steel they describe, that welding procedures and welder qualifications match the work done, and that inspection and test records exist for the construction category the engineer specified. The standard itself is the authority, so buy a copy and map your records to it."
  - q: "Can software tell us which construction category a job is?"
    a: "No. The construction category is chosen and specified by the project engineer, under AS 4100 and AS/NZS 5131. Software should capture the category from the contract documents and then drive the inspection and record requirements that follow from it."
  - q: "Can AI read our drawings and produce a quote?"
    a: "It can produce a draft takeoff and a draft quote. Current models can read member schedules, extract sizes and lengths and flag items such as connections and surface treatment. They still make mistakes on scale, revisions and notes, so an estimator should check every line and the pricing rules should stay in your own rate tables, not in the model."
  - q: "Does security of payment software need to be different in each state?"
    a: "Yes. Each state and territory has its own security of payment legislation with its own timeframes and forms. A claims tool should hold the rules per jurisdiction rather than hard coding the NSW deadlines, and your lawyer should confirm the settings for each state you work in."
  - q: "How long does a fabrication software build take?"
    a: "It depends mostly on how many systems the tool integrates with and how clean your existing data is. We set the timeline in the Schedule of Work after the Discovery Audit rather than guessing here."
sources:
  - title: "Steelwork Compliance Australia"
    url: "https://www.scacompliance.com.au/"
    publisher: "Steelwork Compliance Australia"
  - title: "About SCA"
    url: "https://www.scacompliance.com.au/about-sca"
    publisher: "Steelwork Compliance Australia"
  - title: "Benefits of certification"
    url: "https://www.scacompliance.com.au/benefits-of-certification"
    publisher: "Steelwork Compliance Australia"
  - title: "Steel compliance"
    url: "https://www.steel.org.au/what-we-do/compliance/"
    publisher: "Australian Steel Institute"
  - title: "Making a payment claim"
    url: "https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/security-of-payment/making-a-payment-claim"
    publisher: "NSW Government"
  - title: "Responding to a payment claim"
    url: "https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/security-of-payment/responding-to-a-payment-claim"
    publisher: "NSW Government"
  - title: "Retention money"
    url: "https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/security-of-payment/retention-money"
    publisher: "NSW Government"
  - title: "Tekla PowerFab"
    url: "https://www.tekla.com/products/tekla-powerfab"
    publisher: "Trimble"
  - title: "STRUMIS steel fabrication management software"
    url: "https://www.strumis.com/"
    publisher: "STRUMIS"
  - title: "MYOB Acumatica"
    url: "https://www.myob.com/au/erp-software/products/myob-acumatica"
    publisher: "MYOB"
  - title: "JobBOSS2 job shop software"
    url: "https://www.ecisolutions.com/products/jobboss2/"
    publisher: "ECI Software Solutions"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Construction software and AI: security of payment and WHS"
    href: "/solutions/construction-software-and-ai"
  - title: "AI document processing"
    href: "/services/ai-document-processing"
  - title: "Build vs buy: custom software or off the shelf?"
    href: "/guides/build-vs-buy-software"
  - title: "Xero and MYOB integration"
    href: "/services/xero-myob-integration"
service:
  title: "AI document processing"
  href: "/services/ai-document-processing"
industry:
  title: "Manufacturing"
  href: "/industries/manufacturing"
disclaimer: "legal"
---

## Where do fabricators' systems split?

**A typical Australian structural steel shop has its model in one system, its production in another and its money in a third, and nobody owns the joins.** The detailer works in Tekla Structures or a similar modelling tool. Production runs in a fabrication MRP. Invoices, payroll and job costs sit in the accounting ERP.

| Layer | Common Australian choices | What it does well | Where it usually falls short |
|---|---|---|---|
| Modelling and detailing | Tekla Structures | Members, connections, drawings, NC files | Nothing to do with price or cash |
| Fabrication MRP | Tekla PowerFab, STRUMIS | Estimating, purchasing, inventory, production control, barcoding | Quoting jobs that arrive as PDFs rather than models, AU specific QA packs |
| Job shop ERP | JobBOSS2, ProShop | Machine shop routing, job costing | Structural steel traceability, security of payment |
| Accounting ERP | MYOB Acumatica (formerly MYOB Advanced), Xero | Ledgers, payroll, project accounting | Shop floor data, material certificates |

Trimble describes Tekla PowerFab as covering estimating, purchasing, inventory control and production control, with traceability through the workshop. STRUMIS markets enquiries and estimating, production control with barcoding, and inventory and material traceability. These are mature products and most fabricators should keep them. The custom work lives in the gaps, and our [build vs buy guide](/guides/build-vs-buy-software) explains how to draw that line.

## How do you quote faster from drawings?

**The slow part of most fabrication quotes is not pricing, it is turning a set of PDF drawings into a weight, a cut list and a labour estimate.** Smaller jobs, builder variations and miscellaneous metalwork often arrive with no model at all, so the MRP's model driven estimating has nothing to read.

A custom quote builder usually does four things:

1. **Ingests the documents.** Drawings, member schedules and the builder's scope, as PDFs or images.
2. **Extracts a takeoff.** Section sizes, lengths, quantities, plate, bolts and surface treatment, each line linked back to the sheet it came from.
3. **Prices from your rules.** Steel by the tonne from your current supplier price file, labour from your own rates per operation (cutting, drilling, welding, painting), plus galvanising, delivery and crane allowances.
4. **Drafts the quote.** Inclusions, exclusions and assumptions in your standard wording, ready for an estimator to approve.

The estimator stays in charge. The tool turns most of a takeoff into a review task rather than a typing task. Once a quote is won, the job and its line items should flow into the MRP and the ERP rather than being keyed again.

## What does AS/NZS 5131 traceability mean in practice?

**AS/NZS 5131 is the Australian and New Zealand standard for fabrication and erection of structural steelwork, and it treats traceability as part of compliance, not an optional extra.** Steelwork Compliance Australia (SCA) lists what the standard covers: documentation and specification; materials, welding consumables, fasteners and grout; welding and traceability; surface treatment and corrosion protection; mechanical fastening; architecturally exposed steelwork; erection; inspection, testing and correction; and site modifications.

For a records system, that means every piece of steel needs a chain:

- **Mill certificate in.** The certificate arrives with the delivery and is stored against the heat number.
- **Heat number to stock.** Each bar, beam or plate in the yard carries its heat number.
- **Stock to cut part.** When a length is cut, the offcut and the part both keep the heat reference.
- **Part to member to assembly.** Welded assemblies record which parts, which welding procedure and which welder.
- **Assembly to dispatch.** The delivery docket shows what left the shop and the inspection status.
- **Dispatch to handover pack.** The QA pack for the builder or engineer is generated from the records, not assembled by hand at the end.

A common failure in fabrication records is not a missing certificate. It is a certificate that exists but cannot be tied to the member it describes, because the heat number was lost at the saw. Capture at the saw and at the welding bay, on a tablet or with barcodes, is the fix.

## What will a steel fabricator certification auditor ask for?

**Under the Australian Steel Institute's National Structural Steelwork Compliance Scheme (NSSCS), Steelwork Compliance Australia audits fabricators against AS/NZS 5131 and against Parts 2, 3 and 4 of AS/NZS ISO 3834, the welding quality standard.** SCA operates to ISO 17065 and holds JAS-ANZ accreditation for both standards: for AS/NZS 5131 since 23 August 2022 and for AS/NZS ISO 3834 since 27 March 2025. It describes itself as the only approved certification body for the NSSCS.

Certification is tied to construction categories, which are defined in AS 4100 and AS/NZS 5131 and chosen by the engineer for each project. Higher categories bring heavier inspection and record requirements. So your software should:

- read the construction category from the project documents and set the inspection plan from it
- hold welding procedure specifications and welder qualifications with expiry dates, and block assignment of a welder whose qualification has lapsed
- record inspections and nonconformances against the member, with photos
- produce an audit view that shows, for any job, the chain from certificate to dispatch

This is general information. The standards are the authority, and you should map your records to the clauses in your licensed copies.

## How should shop floor tracking feed job costing?

**Job costing is only as good as the hours booked against each job, and most fabricators still capture those hours on paper timesheets.** A simple shop floor app that lets workers clock on and off operations by scanning a job or member barcode gives you real labour per tonne, per operation and per job.

That data closes the loop with quoting. If your welding rate per tonne on portal frames is consistently 20 per cent above what you quote, you will see it within a few jobs instead of at year end. Feed actual hours into the ERP's project accounting, and compare them to the quoted rates in a dashboard the estimators actually look at.

## How do progress claims work for a fabrication subcontractor?

**In NSW, the Building and Construction Industry Security of Payment Act 1999 lets a subcontractor serve a payment claim on each reference date, and unless the contract says otherwise the payment is due 20 business days after the claim is made.** The respondent must serve a payment schedule within 10 business days of receiving the claim, or it becomes liable for the full amount. If no reference date is in the contract, it is the last day of each month, and only one claim can be made per reference date.

This page covers the subcontractor side. Our [construction software guide](/solutions/construction-software-and-ai) covers security of payment from the builder's side.

A claims module for a fabricator should:

| Step | What the software does |
|---|---|
| Reference date | Holds each contract's reference dates and reminds you before each one |
| Claim | Builds the claim from completed and delivered work, with the statutory wording the NSW Government says a subcontractor needs on residential connected work |
| Service | Records how and when the claim was served |
| Schedule clock | Counts 10 business days for the payment schedule and 20 for the due date (NSW defaults) |
| Dispute | Flags a short schedule or no schedule so you can consider adjudication in time |
| Retention | Tracks retention held, release dates and, for NSW projects over $20 million, whether the head contractor must hold it in a trust account |

Each state has its own act and timeframes, so the rules should be data, not code.

## Where does AI help a fabricator?

**AI earns its place in reading documents: drawings, specifications, mill certificates and builder emails.** Good uses include:

- Draft takeoffs from PDF drawings for estimator review.
- Reading mill certificates and extracting heat number, grade and chemical and mechanical properties into the traceability record, with a person confirming each one.
- Summarising a 60 page specification into the requirements that change your price or your QA plan.
- Drafting variation notices from site photos and emails.

Poor uses include letting a model set prices or decide whether a member passes inspection. Our [AI document processing service](/services/ai-document-processing) covers how we build extraction with human review.

## What do fabrication builds cost?

**These are indicative AUD planning ranges, ex GST, not quotes.** Expeed publishes $40,000 to $150,000 as a typical range for mid complexity custom software in Australia, which matches the scale of most fabrication projects.

| Build | Includes | Indicative range |
|---|---|---|
| Quote builder from drawing takeoffs | Document intake, AI assisted takeoff, rate tables, quote output, MRP and ERP handoff | $30,000 to $90,000 |
| Traceability and QA records app | Certificate capture, heat number tracking at saw and weld bay, inspections, audit view, handover pack | $40,000 to $100,000 |
| Progress claims module | Contracts, reference dates, claim builder, clocks, retention tracking | $20,000 to $50,000 |

The main cost drivers are how many systems you integrate with, whether your MRP has a usable API, and how much shop floor hardware you need.

## How AWLabs approaches fabrication software

AWLabs has not yet delivered a project for a steel fabricator, so we won't claim sector experience. We bring document AI, integration and field app engineering. Every engagement starts with a Development Consult, then a paid Discovery Audit that maps your MRP, ERP and records against what your auditor and your builders ask for. You then receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with updates every Tuesday and Friday, Sydney business hours. See also our wider [manufacturing work](/industries/manufacturing) and [Xero and MYOB integration](/services/xero-myob-integration).

This page is general information, not legal or engineering advice.
