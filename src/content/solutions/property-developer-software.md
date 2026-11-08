---
title: "Software for Australian property developers: feasibility, presales and buyer portals"
metaTitle: "Property Development Software Australia: Presales to Handover"
description: "Property development software in Australia: EstateMaster and spreadsheets, off the plan rules in NSW and Victoria, lot registers, buyer portals and costs."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Most Australian residential developers run feasibility in ARGUS EstateMaster or Excel, presales in a CRM or a spreadsheet, and construction in the builder's systems, with nothing joining them by lot. The custom build that usually pays is a lot register: one record per lot that tracks the contract, deposit, finance, variations, buyer communications and settlement, and feeds investor and lender reports. It has to respect off the plan rules, including NSW's disclosure statements, 14 day window after a material change, 10 business day cooling off and Supreme Court approval for developer sunset rescissions. Typical builds sit in the $20,000 to $100,000 (AUD, ex GST) market range, as a range, not a quote."
takeaways:
  - "Keep EstateMaster or your feasibility model for appraisal. Build the lot register, because that is where spreadsheets break once presales start."
  - "In NSW a developer needs the buyer's consent or a Supreme Court order to rescind using a sunset clause, and buyers get 10 business days to cool off, forfeiting 0.25% if they withdraw."
  - "NSW buyers have 14 days from notice of a change to a material particular to act, and must receive the registered plan at least 21 days before settlement."
  - "In Victoria, off the plan deposits are capped at 10%, and the buyer can end the contract if the plan isn't registered by the contract date or the 18 month default."
  - "Foreign buyers are generally barred from established dwellings from 1 April 2025 to 30 June 2029, but developers can notify FIRB on behalf of foreign buyers of new dwellings."
faqs:
  - q: "What software do property developers use in Australia?"
    a: "Feasibility is commonly done in ARGUS EstateMaster, which Altus Group describes as a development feasibility, budgeting and cash flow forecasting tool, or in Excel models. Presales often run in Salesforce, HubSpot or an agency's CRM, contracts with the developer's lawyers, and construction in the builder's project management system. The gap is usually a single record per lot that ties these together."
  - q: "Should we replace our feasibility spreadsheets with software?"
    a: "Not necessarily. A well built feasibility model is fine for appraisal and scenario testing. The trouble starts when the same spreadsheet becomes the sales register, deposit ledger and investor report, edited by several people. That is the point to move the operational data into a database and keep the model for what it does well."
  - q: "Can software help us manage sunset dates?"
    a: "Yes. A lot register can store each contract's sunset date, completion date and any extension terms, and alert the team well before they arrive. It can't make the legal decision. In NSW a developer needs the buyer's consent or a Supreme Court order to rescind under a sunset clause, so the system should record the steps and correspondence for your lawyers."
  - q: "What should a buyer portal include?"
    a: "The useful core is a login per buyer showing their lot, contract key dates, deposit status, construction progress updates, colour and finish selections with deadlines, variation requests and documents such as the registered plan. It should never show another buyer's details, and changes to selections should need the buyer's confirmation."
  - q: "Do foreign buyers change what our sales system must record?"
    a: "They can. The Foreign Investment Review Board says developers selling new dwellings can notify it on behalf of foreign customers, in which case the buyer generally doesn't need to submit a proposal. Recording each buyer's foreign person status and the notification reference per lot keeps that evidence in one place. Your lawyers should confirm the current rules for each project."
  - q: "Have you built software for property developers?"
    a: "Not yet. We haven't delivered a project for a property developer, so we won't claim one. We bring database, integration and portal engineering; your lawyers and financiers own the legal and lending requirements."
sources:
  - title: "Buying property off the plan"
    url: "https://www.nsw.gov.au/housing-and-construction/buying-and-selling-property/buying-property-nsw/buying-property-off-plan"
    publisher: "NSW Fair Trading"
  - title: "Buying off the plan"
    url: "https://www.consumer.vic.gov.au/housing/buying-and-selling-property/buying-property/buying-off-the-plan"
    publisher: "Consumer Affairs Victoria"
  - title: "Residential land"
    url: "https://foreigninvestment.gov.au/guidance/types-investments/residential-land"
    publisher: "Foreign Investment Review Board"
  - title: "ARGUS EstateMaster"
    url: "https://www.estatemaster.net/"
    publisher: "Altus Group"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Construction software and AI"
    href: "/solutions/construction-software-and-ai"
  - title: "Software for residential home builders"
    href: "/solutions/home-builder-software"
  - title: "Replace Excel or Access with a web app"
    href: "/guides/replace-excel-or-access-with-a-web-app"
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
service:
  title: "Data analytics"
  href: "/services/data-analytics"
industry:
  title: "Real estate"
  href: "/industries/real-estate"
disclaimer: legal
---

## What does a development run on, from site to settlement?

**A residential development passes through four sets of hands, each with its own system: the feasibility model, the sales team, the builder and the lawyers. Very little of it is joined up by lot.** That is fine during acquisition and approval, when the project is a model. It stops being fine the day presales begin, because from then on every lot has a contract, a deposit, a buyer and a set of dates that people need to see together.

| Stage | Usual tools | What goes wrong |
|---|---|---|
| Site acquisition and feasibility | ARGUS EstateMaster, Excel | Versions multiply; nobody is sure which model the lender saw |
| Approvals | Consultants' reports, email | Conditions tracked in a spreadsheet, disconnected from the programme |
| Presales | Agency CRM, Salesforce or HubSpot, spreadsheets | Price lists, holds and contracts drift between agents and the developer |
| Contracts and deposits | Lawyers' matter system, trust account statements | Deposit status known only to the stakeholder; finance clauses tracked by hand |
| Construction | Builder's project management system | Buyers ask for progress; sales staff don't have it |
| Settlement and handover | Lawyers, building manager, defects lists | Registered plan dates, settlement notices and keys coordinated by email |

## When does a feasibility model need a database?

**Keep the model for appraisal, and move operational data out of it once more than one person updates sales and deposits.** EstateMaster is built for feasibility, budgeting and cash flow forecasting, and a disciplined Excel model can do the same job. Neither is designed to be the record of 120 contracts.

The signs it is time:

- The sales register is a tab in the feasibility file, or a separate spreadsheet that has to be reconciled to it.
- Agents keep their own lists of holds and exchanged lots.
- The weekly investor or lender report takes a day to assemble.
- Nobody can answer "which buyers have finance conditions still open?" in under ten minutes.

The fix is a lot register, a small database with one record per lot, which the model can read for actual sales figures. Our guide to [replacing Excel with a web app](/guides/replace-excel-or-access-with-a-web-app) covers the general approach.

## Presales and off the plan: what the lot register must record

**Every exchanged lot carries obligations with dates attached, and in NSW several of them are statutory.** NSW Fair Trading's off the plan guidance sets out the rules your system has to track:

1. **Disclosure statement.** Attached to the contract, covering key information such as sunset dates. Record the version given to each buyer.
2. **Cooling off.** 10 business days for off the plan buyers, with 0.25% of the price forfeited if they withdraw. It can be waived or shortened only with the certificate the legislation requires from the buyer's lawyer or conveyancer.
3. **Deposits.** Held by the stakeholder in a trust or controlled money account until settlement, not released to the developer. A bank guarantee or deposit bond is allowed only if agreed before signing.
4. **Material particulars.** If a change makes the disclosure inaccurate in a material particular, the buyer must be notified, and has 14 days from that notice to act. Compensation, where claimed instead of rescinding, is capped at 2% of the price.
5. **Registered plan.** A copy must reach the buyer at least 21 days before settlement.
6. **Sunset clauses.** The developer needs the buyer's consent, or must apply to the NSW Supreme Court, to rescind under a sunset clause.

In Victoria, Consumer Affairs Victoria says an off the plan deposit can't exceed 10% of the price, the contract must carry a clearly visible warning notice, and the buyer can end the contract and recover the deposit if the plan of subdivision isn't registered by the contract date or the default 18 months.

For each of these, the lot register needs the date, the document, who sent it and proof of delivery. That is also exactly the evidence your lawyers will ask for if a dispute arises.

## Foreign buyers

**Record foreign person status per buyer, because the rules for foreign purchasers of residential property have tightened.** The Foreign Investment Review Board says that from 1 April 2025 to 30 June 2029 foreign investors are generally prohibited from buying established dwellings, while policy channels foreign investment into new dwellings. Developers selling new dwellings can notify FIRB on behalf of their foreign customers, and the buyer then generally doesn't need to submit a proposal. Store the notification reference against the lot so it is never in doubt.

## Buyer portals for selections, variations and updates

**A buyer portal replaces most of the "how is my apartment going?" calls and the colour selection paperwork.** The features that earn their cost:

- Key dates for the buyer's own contract, including expected completion and any sunset date.
- Progress updates with photos, posted once by the project team for all buyers.
- Colour and finish selections with a deadline, options priced where they cost extra, and a confirmation step.
- Variation requests with the price, the effect on completion and a signature.
- Documents: the contract set, disclosure statement, notices and, later, the registered plan.

The [customer portal guide](/guides/customer-portal-development) covers security and cost in detail. The important design point here is strict separation: a buyer sees only their own lot.

## Defects, handover and after

**Handover is a second peak of coordination, and the evidence matters for years.** NSW Fair Trading notes that the Strata Building Bond and Inspections Scheme requires developers of new apartment buildings of 3 storeys and below to lodge a bond before applying for an occupation certificate, unless Home Building Compensation Fund cover applies, and that Building Commission NSW compliance powers for class 2 buildings can be used for up to 10 years after completion. A defects register by lot and common area, with photos, trades assigned and closure evidence, protects both the buyers and the developer. The builder's side of this is covered on our [construction software](/solutions/construction-software-and-ai) and [home builder software](/solutions/home-builder-software) pages.

## Investor and lender reporting without copy and paste

**Once the lot register exists, the weekly report is a query, not a project.** Lenders want presale coverage against the facility, exchanged lots with conditions outstanding, and deposits held. Equity partners want sales rate, average price per square metre against feasibility and forecast settlement dates. A [data analytics](/services/data-analytics) layer can produce both from the same data, with figures traceable to each lot.

The discipline that makes this work is a single source per figure. Sales prices come from exchanged contracts in the register, not from the agent's list. Deposits come from the stakeholder's trust statements, reconciled weekly. Costs come from the builder's progress claims and the accounting system. When a lender queries a number, anyone on the team can click through to the lot, the contract and the document behind it, which is a far stronger position than a spreadsheet emailed on Friday.

## Typical builds and indicative costs

**Developer builds range from a focused register to a portal used by hundreds of buyers.** Expeed's 2026 survey of Australian costs puts simple internal tools at $15,000 to $40,000 and mid complexity systems at $40,000 to $150,000.

| Build | Indicative range (AUD, ex GST) | Main drivers |
|---|---|---|
| Presales and lot register with contract, deposit and date tracking | $30k to $80k | Number of projects, states, CRM and agency integration |
| Buyer portal for selections, variations and updates | $40k to $100k | Selection catalogue complexity, signatures, payments |
| Investor and lender reporting dashboard | $20k to $50k | Data sources, report formats, feasibility model link |

These are market ranges, not quotes, and exclude hosting and maintenance.

## How AWLabs approaches development projects

We start with the lot: what has to be true for each one, from exchange to settlement, and where that information lives today. Every build starts with our Discovery Audit, a paid step credited in full against the build, followed by a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates arrive every Tuesday and Friday in Sydney business hours, and the code and IP are assigned to you as they are paid for. We haven't yet delivered a project for a property developer; your lawyers own the contract and disclosure requirements. Book a Development Consult, or see our [CRM integration](/services/crm-integration) service for connecting agency CRMs to your register.
