---
title: "Freight forwarding software in Australia: building around CargoWise and the ICS"
metaTitle: "Freight Forwarding Software in Australia: Beyond CargoWise"
description: "Freight forwarding software for Australian forwarders and customs brokers: CargoWise gaps, ICS trade data APIs, BMSB season, COLS and broker licensing."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Most Australian forwarders and customs brokers should keep their core freight platform, usually CargoWise, and automate the work around it: rate quoting, document extraction, biosecurity checks and client visibility. The ABF's Trade Data API Services now give ICS users near real time cargo status by API or webhook, which makes client portals far easier to build. The ABF's Future Cargo Reporting Model is a design project that will not replace the ICS on its own, so build integrations that can absorb a change in reporting later. Typical custom pieces sit in an indicative $25,000 to $100,000 (AUD, ex GST) market range."
takeaways:
  - "CargoWise covers forwarding, customs and warehousing in one platform; custom work earns its place in quoting, inbound document handling and client facing visibility."
  - "Organisations with ICS access, including software providers, can use the ABF Cargo Status API or Event Subscriptions instead of polling or rekeying cargo status."
  - "The Future Cargo Reporting Model is a design project: the ABF says it will not build systems, replace the ICS or change the Customs Act."
  - "From 10 August 2026, DAFF says all import documents are lodged through the Cargo Online Lodgement System (COLS)."
  - "Customs broker licence conditions, such as lodging import declarations only from inside Australia and producing staff lists within 7 days, should shape user access and audit logs."
faqs:
  - q: "Do we need custom software if we already run CargoWise?"
    a: "Usually not for the core. CargoWise handles bookings, consolidation, customs and accounting for a large share of the industry. Custom work makes sense for the pieces that sit outside it or are awkward inside it: quoting across carrier rate sheets, reading supplier documents before they reach an operator, and giving smaller clients a simple tracking view. Ask your CargoWise partner what the platform can already do before you scope anything."
  - q: "Is the Integrated Cargo System being replaced?"
    a: "Not by the Future Cargo Reporting Model. The ABF describes FCRM as a design project that will inform a future business model when the ICS is modernised, and says it will not build new systems or replace the ICS. Industry submissions closed on 29 June 2026. No replacement date has been published at the time of writing, November 2026."
  - q: "Can a client portal show live customs status?"
    a: "Yes, if your organisation has ICS access. The ABF's Trade Data API Services offer a Cargo Status API for on demand queries and Event Subscriptions that push status changes, for air and sea cargo. A portal can combine those events with your own milestones and carrier tracking."
  - q: "Can AI fill in our entries from commercial invoices?"
    a: "It can draft them. Extraction models read invoices and packing lists well, but tariff classification, valuation and origin decisions carry legal weight under the broker's licence. A sound design extracts the fields, flags low confidence values and leaves the licensed broker to review and lodge."
  - q: "What about BMSB season?"
    a: "BMSB seasonal measures apply to targeted goods made in or shipped from target risk countries and shipped between 1 September and 30 April inclusive. Software can flag affected shipments at booking from the origin country, goods type and ship date, so treatment certificates are chased early rather than at arrival."
  - q: "Have you built software for freight forwarders before?"
    a: "No. AWLabs has not delivered a project for a forwarder or customs broker, so we won't claim industry experience. We bring integration, document processing and portal engineering, and we lean on your licensed brokers and the ABF and DAFF documentation for the regulatory detail."
sources:
  - title: "Future Cargo Reporting Model"
    url: "https://www.abf.gov.au/help-and-support/ics/future-cargo-reporting-model"
    publisher: "Australian Border Force"
  - title: "Trade Data API Services"
    url: "https://www.abf.gov.au/help-and-support/ics/trade-data-api-services"
    publisher: "Australian Border Force"
  - title: "Integrated Cargo System (ICS) overview"
    url: "https://www.abf.gov.au/help-and-support/ics/integrated-cargo-system-(ics)/overview"
    publisher: "Australian Border Force"
  - title: "Customs brokers licensing overview"
    url: "https://www.abf.gov.au/licensing/brokers/overview"
    publisher: "Australian Border Force"
  - title: "Customs broker obligations and conditions"
    url: "https://www.abf.gov.au/licensing/brokers/when-you-have/obligations-conditions"
    publisher: "Australian Border Force"
  - title: "Simplifying Australia's trade system"
    url: "https://www.austrade.gov.au/en/how-we-can-help-you/programs-and-services/simplified-trade-system"
    publisher: "Austrade"
  - title: "Seasonal measures for brown marmorated stink bug (BMSB)"
    url: "https://www.agriculture.gov.au/biosecurity-trade/import/before/brown-marmorated-stink-bugs"
    publisher: "Department of Agriculture, Fisheries and Forestry"
  - title: "Lodging import documents (COLS)"
    url: "https://www.agriculture.gov.au/biosecurity-trade/import/online-services/cols/lodging"
    publisher: "Department of Agriculture, Fisheries and Forestry"
  - title: "BICON software developers guide"
    url: "https://www.agriculture.gov.au/biosecurity-trade/import/online-services/bicon/bicon-software-guide"
    publisher: "Department of Agriculture, Fisheries and Forestry"
  - title: "CargoWise"
    url: "https://www.cargowise.com/"
    publisher: "WiseTech Global"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Logistics software for Chain of Responsibility and the HVNL"
    href: "/solutions/logistics-software-development"
  - title: "3PL warehouse software in Australia"
    href: "/solutions/3pl-warehouse-software"
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
  - title: "How much does API integration cost in Australia?"
    href: "/guides/api-integration-cost-australia"
service:
  title: "AI document processing"
  href: "/services/ai-document-processing"
industry:
  title: "Logistics and transport"
  href: "/industries/logistics-transport"
disclaimer: "legal"
---

## Where do Australian forwarders sit: CargoWise, Magaya or something lighter?

**Most mid sized and large Australian forwarders and brokers run CargoWise, and smaller operators split between Magaya, lighter freight tools and spreadsheets.** CargoWise, built by ASX listed WiseTech Global, covers international forwarding, customs and compliance, and warehouse operations in one platform. Magaya pitches itself at forwarders and customs brokers who want forwarding and warehousing together at a smaller scale.

The platform choice is rarely the real problem. The friction lives in the work that arrives before a job exists in the system and the questions that arrive after it. A sales rep builds a quote from four carrier rate sheets in Excel. An operator retypes a commercial invoice from a PDF. A client emails three times a day asking where their container is. None of that is solved by switching platforms.

This page is about international freight and customs. If your business also runs domestic trucks, our [logistics and Chain of Responsibility page](/solutions/logistics-software-development) covers the HVNL side, and our [3PL warehouse software page](/solutions/3pl-warehouse-software) covers storage and pick billing.

| Business profile | Typical core system | Where custom work usually pays |
|---|---|---|
| Large forwarder with several branches | CargoWise | Quoting engine, document extraction, client portal |
| Customs brokerage, mostly entries | CargoWise or a broker focused tool | Invoice and packing list extraction, licence and staff register |
| Small forwarder or NVOCC | Magaya, a lighter TMS or spreadsheets | Quote builder and a simple tracking page before anything bigger |

## Is the Integrated Cargo System about to change?

**Not in a way that should stop you building now.** The ABF's Future Cargo Reporting Model, started under the Simplified Trade System reforms, is a design project. The ABF says plainly that FCRM will not build new systems, will not replace the ICS and will not change the Customs Act 1901. Its job is to work out what cargo information government needs, who should provide it and at what stage, so that the model is ready when the ICS is modernised.

Industry submissions were due by 29 June 2026, and the ABF has said it will publish an overview of the feedback. Separately, Austrade's Simplified Trade System Unit ran from 1 July 2024 to 30 June 2026, and coordination of the trade regulatory reform program moved to the Department of Finance from 1 July 2026.

For a software buyer the practical lesson is architectural. Keep anything that talks to government systems behind one integration layer, with your own internal data model in front of it. Today the ICS exchanges messages through the Customs Connect Facility, and much of the developer documentation is still EDIFACT message mapping. If reporting changes in a few years, you rewrite one adapter rather than every screen.

## How can quoting across carriers be automated?

**A quoting engine loads every carrier and agent rate sheet into one structured table, then prices a request in seconds with your margins applied.** The hard part is not the maths. It is ingesting rate sheets that arrive as spreadsheets, PDFs and emails with different column names, surcharge rules, validity dates and currency.

A workable build has four parts:

1. **Rate ingestion.** Each sheet is parsed into lanes, container or weight breaks, surcharges and validity. AI extraction handles messy PDFs; a person approves each new sheet before it goes live.
2. **Rules.** Fuel and peak season surcharges, minimum charges, currency conversion and local charges at each end.
3. **Margin and approval.** Default margins by customer and lane, with a manager approval step for anything below a floor.
4. **Output.** A branded quote PDF and, when the customer accepts, a shipment record pushed into CargoWise so nobody types it again.

The win shows up in speed and consistency: a rep can answer the same afternoon with the cheapest valid option, and the business can see later which lanes it wins and loses.

## Can biosecurity document checks be automated?

**Partly. Software can flag which shipments need which documents and check that they arrived, while DAFF and your licensed staff still make the assessment.** Three current facts shape the design.

- **BMSB season.** DAFF applies brown marmorated stink bug seasonal measures to targeted goods made in or shipped from target risk countries and shipped between 1 September and 30 April inclusive, and to vessels that berth, load or tranship in those countries in that window. A booking rule using origin, goods type and ship date can flag affected shipments on day one and chase offshore treatment certificates early.
- **One lodgement channel.** DAFF states that from 10 August 2026 all import documents are lodged through the Cargo Online Lodgement System (COLS), and it publishes a COLS software developers guide.
- **Import conditions.** BICON holds the import conditions and permits, and DAFF publishes a BICON software developers guide for organisations whose software needs to integrate with it.

A useful checklist tool reads the commodity and origin, shows the operator the documents BICON says are needed, checks that each one is on file and legible, and stops the job moving forward until a person confirms. That is document control, not a substitute for the regulator's decision.

## What should a client portal show?

**Status your clients actually care about: where the cargo is, whether customs and biosecurity have cleared it, and what documents or payments are holding it up.** Until recently that meant scraping carrier sites and copying ICS status by hand.

The ABF's Trade Data API Services change that. Organisations with ICS access, including customs brokers, forwarders, importers, exporters and software providers, can use a Cargo Status API to query status on demand or Event Subscriptions to receive status events as they happen, for both air and sea cargo. Organisations already receiving Cargo Status Advice through EDI can add API or webhook delivery as an extra channel.

A portal built on those events, plus carrier milestones and your own CargoWise data, can show a timeline per shipment, send alerts when status changes, and let clients download their own documents. Our guide to [customer portal development](/guides/customer-portal-development) covers login, permissions and the build choices in more depth.

## Where does AI help with invoices and packing lists?

**AI is good at reading supplier documents and filling a draft; it should not make tariff, valuation or origin decisions on its own.** A typical flow:

- Supplier invoices, packing lists and certificates arrive by email or upload.
- An extraction model pulls supplier, buyer, line items, quantities, values, currency, Incoterms and origin.
- The system cross checks totals between the invoice and the packing list, and flags missing or inconsistent fields.
- A broker reviews the draft in a side by side view, corrects it and pushes it into CargoWise.

Measure the result by fields corrected per document and time from document arrival to draft ready. Our [AI document processing](/services/ai-document-processing) service explains how we evaluate extraction accuracy before anything goes live.

## How do customs broker licence conditions shape the software?

**Broker licence conditions read like a security requirements list, so build them into access control and audit logging from the start.** Under Division 3 of Part XI of the Customs Act, only the owner of goods or a licensed customs broker can submit an import declaration to enter goods for home consumption. ABF licences run for up to three years and all expire on 30 June at three year intervals.

| ABF licence condition | What the software should do |
|---|---|
| Must not lodge an import declaration from outside Australia | Restrict lodgement actions to users and sessions located in Australia, and log location |
| Provide a list of everyone participating in the broker's work and operations within 7 days of an ABF request | Keep a live register of staff, roles, dates of birth and B1555 consent status |
| Obtain a signed B1555 consent form within 7 days of a new person starting in the operations | Onboarding checklist that blocks system access until the form is on file |
| Do not allow departmental systems or ABF information to be used for unauthorised purposes | Role based access, per user credentials and an audit trail of who viewed what |
| Keep auditable records of CPD for each CPD year (1 April to 31 March) | CPD log per broker with reminders before year end |

This is general information from the ABF's published conditions, not legal advice. Your licensed nominee decides how each condition applies to your business.

## What do these builds cost?

**Most forwarders need one or two focused tools rather than a platform, and those land between simple and mid complexity custom software.** The figures below are indicative AUD market ranges, ex GST, not quotes. They sit within the bands Expeed publishes for Australian custom software of $15,000 to $40,000 for simple tools and $40,000 to $150,000 for mid complexity systems.

| Build | Scope | Indicative range |
|---|---|---|
| Document extraction into CargoWise | Inbox intake, extraction, cross checks, broker review screen, push to CargoWise | $25,000 to $70,000 |
| Quoting engine across rate sheets | Rate ingestion, surcharge rules, margins, approvals, quote PDF, booking handoff | $30,000 to $90,000 |
| Client tracking portal | ABF trade data events, carrier milestones, documents, alerts, client logins | $40,000 to $100,000 |

The biggest cost drivers are the number of rate sheet formats, how much of CargoWise's interface your partner exposes, and how many client roles the portal needs. For how integration work is priced, see our [API integration cost guide](/guides/api-integration-cost-australia).

## How AWLabs would work with a forwarder or broker

Start with a Development Consult, where we ask which documents get retyped and which client questions eat the most time. If a build looks worthwhile, a paid Discovery Audit maps your CargoWise setup, ICS access and document flows, and you receive a fixed price Schedule of Work in three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with progress updates every Tuesday and Friday in Sydney business hours.

We have not worked with a forwarder or customs broker before, and we will say so if your CargoWise partner can solve the problem with configuration. More on the sector is on our [logistics and transport](/industries/logistics-transport) page.
