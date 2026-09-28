---
title: "Logistics and transport software in Australia"
metaTitle: "Logistics and Transport Software Development in Australia"
description: "Logistics software shaped by Chain of Responsibility, the amended HVNL, fatigue records and WMS, TMS and telematics integration, with phases and cost ranges."
eyebrow: "Industry solution"
published: 2026-09-28
updated: 2026-09-28
summary: "Logistics software in Australia is shaped by the Heavy Vehicle National Law: Chain of Responsibility makes consignors, schedulers, loaders and receivers accountable for heavy vehicle safety, not just drivers, and the amended HVNL that commenced on 1 August 2026 changed accreditation, fatigue and work diary rules. Custom software earns its place as the layer that joins your WMS, TMS, telematics and ERP into one evidence trail, rather than replacing mature platforms. A typical integration and compliance evidence build costs $60,000 to $200,000 (AUD, ex GST) as a market range, not a quote."
takeaways:
  - "You're a Chain of Responsibility party if you perform any of 10 functions, including scheduling, consigning, receiving, packing, loading or unloading, even if you never own a truck."
  - "The amended HVNL commenced on 1 August 2026, replacing NHVAS with the Heavy Vehicle Accreditation scheme and changing work diary and fatigue provisions. Systems built on the old rules need review."
  - "An electronic work diary must be approved by the NHVR against its EWD standards; for most operators buying an approved EWD and integrating its data is far cheaper than building one."
  - "The HVNL hasn't commenced in Western Australia or the Northern Territory, but it applies to vehicles from those jurisdictions once they cross into an HVNL state."
  - "The most valuable custom work is usually integration: one record of each load that joins booking, loading, telematics, fatigue and delivery data."
faqs:
  - q: "Does Chain of Responsibility apply to us if we don't run trucks?"
    a: "Probably. The NHVR lists 10 CoR functions, and more than half relate to businesses that don't own or operate heavy vehicles, such as consignors, consignees, packers, loading managers, loaders and unloaders. A good rule of thumb from the regulator: if your business sends or receives goods by heavy vehicle, it's a party in the CoR."
  - q: "Should we build our own electronic work diary?"
    a: "Usually not. An EWD has to meet the NHVR's EWD standards and be approved before use, and the NHVR and Transport Certification Australia have introduced a Generation 2.0 EWD framework with a new system specification and strengthened testing. Unless fatigue technology is your product, buy an approved EWD and integrate its data into your dispatch and compliance systems."
  - q: "What changed on 1 August 2026?"
    a: "The Heavy Vehicle National Law Amendment Act 2025 commenced. The NHVR lists changes including the new Heavy Vehicle Accreditation scheme and safety management system audits, unfit to drive provisions, simplified work diary record keeping, and mass, dimension and loading changes. Transitional arrangements mean some old and new rules run side by side for a period, so check each rule's effective date."
  - q: "Can you integrate with CargoWise, SAP or our WMS?"
    a: "Integration is the core of most logistics projects. The approach depends on what each platform exposes: modern REST APIs, EDI messages, file drops or database views. We confirm access, test environments and message formats during discovery, because integration effort varies more than any other cost driver."
  - q: "Do drivers need a native app, or will a web app do?"
    a: "For drivers, a mobile app that works offline is usually worth it: regional routes lose signal, and proof of delivery, pre-start checks and photos must be captured regardless. Dispatch and office tools are typically web apps. Flutter lets one codebase cover Android and iOS if your fleet uses both."
  - q: "Does software reduce our CoR liability?"
    a: "Software doesn't discharge a legal duty. What it can do is make your controls consistent and your evidence complete: it shows what was scheduled, what was checked, what was loaded and what happened when something went wrong. Executives still have to exercise due diligence, and your lawyer should advise on your specific position."
sources:
  - title: "Chain of Responsibility (CoR)"
    url: "https://www.nhvr.gov.au/safety-accreditation-compliance/chain-of-responsibility"
    publisher: "National Heavy Vehicle Regulator"
  - title: "Parties in the CoR"
    url: "https://www.nhvr.gov.au/safety-accreditation-compliance/chain-of-responsibility/the-primary-duty/parties-in-the-cor"
    publisher: "National Heavy Vehicle Regulator"
  - title: "HVNL reform implementation"
    url: "https://www.nhvr.gov.au/law-policies/hvnl-reform-implementation"
    publisher: "National Heavy Vehicle Regulator"
  - title: "Heavy Vehicle National Law and Regulations"
    url: "https://www.nhvr.gov.au/law-policies/heavy-vehicle-national-law-and-regulations"
    publisher: "National Heavy Vehicle Regulator"
  - title: "Electronic Work Diary"
    url: "https://www.nhvr.gov.au/safety-accreditation-compliance/fatigue-management/electronic-work-diary"
    publisher: "National Heavy Vehicle Regulator"
  - title: "Work diary"
    url: "https://www.nhvr.gov.au/safety-accreditation-compliance/fatigue-management/work-diary"
    publisher: "National Heavy Vehicle Regulator"
  - title: "Record keeping requirements"
    url: "https://www.nhvr.gov.au/safety-accreditation-compliance/fatigue-management/record-keeping-requirements"
    publisher: "National Heavy Vehicle Regulator"
  - title: "Employee records exemption"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/employee-records-exemption"
    publisher: "Office of the Australian Information Commissioner"
related:
  - title: "Logistics and transport"
    href: "/industries/logistics-transport"
  - title: "API development and integration"
    href: "/services/api-development"
  - title: "Flutter vs React Native in 2026"
    href: "/guides/flutter-vs-react-native"
  - title: "Legacy system modernisation cost in Australia"
    href: "/guides/legacy-modernisation-cost-australia"
industry:
  title: "Logistics & Transport"
  href: "/industries/logistics-transport"
service:
  title: "API development and integration"
  href: "/services/api-development"
disclaimer: legal
---

## Is your business a Chain of Responsibility party?

**If your business schedules, sends, packs, loads, unloads or receives goods moved by heavy vehicles, it's almost certainly a party in the Chain of Responsibility under the Heavy Vehicle National Law.** The NHVR is explicit that you're a party because of a function you perform, not your job title or what the contract says.

| CoR function | Typical business | What your systems should be able to show |
|---|---|---|
| Employer, prime contractor, operator | Carriers, owner drivers, fleet operators | Driver qualifications, vehicle maintenance, fatigue records, how jobs were allocated |
| Scheduler | Dispatch teams, freight brokers | That schedules allowed legal work and rest, and weren't changed to force unsafe timeframes |
| Consignor, consignee | Manufacturers, retailers, distributors | Booking lead times, delivery windows, and that demands on carriers were reasonable |
| Packer | Warehouses, 3PLs | Declared weights and packing details for each consignment |
| Loading manager, loader, unloader | Distribution centres, ports, depots | Load restraint, mass declarations, loading times and queue waits |

Each party has the same Primary Duty: to ensure, so far as is reasonably practicable, the safety of its transport activities. Executives carry a separate duty to exercise due diligence that the business complies. For a software buyer, that translates into one question: when something goes wrong, can the business show what it knew, what it checked and what it did? Most logistics software requests we'd expect to see are really answers to that question.

## What changed in the HVNL on 1 August 2026, and does your software need to change?

**The amended Heavy Vehicle National Law commenced on 1 August 2026, after Queensland Parliament passed the 2025 amendment package on 18 November 2025.** If your fleet, compliance or dispatch systems encode HVNL rules, they need a review against the new provisions.

| Change area (per the NHVR) | What to check in your systems |
|---|---|
| Heavy Vehicle Accreditation (HVA) scheme replaces NHVAS, with safety management system audits | Accreditation records, module references, audit evidence and document templates |
| Work diaries: simplified written work diary record keeping, with transitional arrangements | Fatigue record validation logic, local area records, reports for record keepers |
| Fatigue and unfit to drive provisions | Fitness for duty declarations and how they're stored |
| Mass, dimension and loading | Load planning rules, permits, mass declarations |
| Euro VI emissions and mass provisions | Vehicle master data and eligible mass limits |

Two practical points. First, transitional arrangements mean old and new rules operate side by side for a fixed period, so rules need effective dates, not a single switch. Second, the HVNL hasn't commenced in Western Australia or the Northern Territory, but it applies to vehicles from those jurisdictions once they cross into an HVNL state, and some requirements such as work diaries can apply before the border. A national operator's systems need to know where each leg runs.

### Fatigue record rules a system has to model

- A driver of a fatigue-regulated heavy vehicle must carry a work diary when working 100 km or more from base under standard hours, or at any distance under Basic Fatigue Management, Advanced Fatigue Management, alternative compliance or exemption hours.
- Drivers working within 100 km of base under standard hours complete a local area record instead and give it to their record keeper.
- Unplanned travel beyond 100 km changes which record is required, so the system needs the driver's base location and the day's route.
- Primary produce transport within 160 km of base may fall under a work diary exemption.

## Should you build an electronic work diary or buy one?

**Buy one, unless fatigue technology is your product.** An EWD must meet the NHVR's EWD standards and be approved, with conditions of approval and use. The NHVR and Transport Certification Australia have also introduced a Generation 2.0 EWD framework with a new system specification and stronger testing and governance, though existing approved systems remain approved.

| Option | When it fits | Trade-off |
|---|---|---|
| Buy an approved EWD, use it as is | Most operators | Fastest; data may sit in the vendor's portal |
| Buy an approved EWD and integrate its data | Operators who want fatigue data in dispatch, payroll and compliance dashboards | Integration work, but one view of each driver's day |
| Build and seek NHVR approval | Technology companies selling to the industry | Long, costly approval path; justified only as a product |

For most businesses the valuable custom piece is what happens with the data: warning dispatchers before they allocate a run a driver can't legally complete, and reconciling fatigue records against telematics and job times.

## How do WMS, TMS, telematics and ERP fit together?

**In most logistics businesses the systems are individually fine and collectively disconnected, and the gaps are where both cost and CoR risk accumulate.** Custom software usually sits between them.

| System | Typical role | Common integration method | What the joining layer does |
|---|---|---|---|
| Warehouse management (WMS) | Inventory, picking, packing, dispatch | REST API, EDI, file exports | Pulls consignment weights and packing details into the load record |
| Transport management (TMS) or freight platform | Bookings, rating, allocation, tracking | REST or XML API, EDI | Pushes allocations and receives status events |
| Telematics | Location, speed, engine data, sometimes driver ID | Vendor API, webhooks | Adds actual times and locations; flags speed or route anomalies |
| EWD | Work and rest records | Vendor API or exports | Checks allocation against available hours |
| ERP and accounting | Invoicing, costing | API or integration platform | Turns proof of delivery into an invoice without rekeying |
| Customer portal | Track and trace, documents | Your own API | Gives customers self-service visibility |

Designing this layer well means event-driven messaging so one system's outage doesn't block the others, idempotent processing so a duplicated message doesn't create a duplicated load, and a single load identifier that every system can map to. Our [API development](/services/api-development) service covers that approach, and our [workflow automation](/services/workflow-automation) service covers lighter integrations where an off-the-shelf connector is enough.

## What about driver tracking data and privacy?

**Telematics, cameras and app location data are personal information about your drivers, so collecting more of it creates obligations as well as evidence.** The same data that proves a safe journey can become a liability if it's kept forever, shared loosely or used for purposes drivers weren't told about.

Points to settle during design:

- **Notice and consent.** Some states have workplace surveillance laws with notice requirements for tracking employees; NSW's Workplace Surveillance Act 2005 is one. Owner drivers and subcontractors raise separate questions. Get advice for each state you operate in.
- **Privacy Act coverage.** Businesses with annual turnover above $3 million, and some smaller ones, must handle personal information under the Australian Privacy Principles. Employee records held by an employer are partly exempt, but contractor and customer data generally aren't.
- **Retention.** Keep fatigue and safety records for as long as the law and your risk profile require, then delete. A retention schedule per data type is simpler than arguing about it after an incident.
- **Access.** Dispatchers need current location; very few people need a driver's full history. Role-based access and an audit log of who viewed what are cheap to build at the start.
- **Location of storage.** Store telematics and fatigue data in Australian cloud regions unless there's a documented reason not to.

Handled well, drivers see the data protecting them as much as watching them, which helps adoption of the app far more than any feature. It also means that when an incident investigation asks for a journey's records, the business can produce exactly what's needed without exposing everything else it holds about that driver.

## Where do AI and optimisation actually help?

**The most reliable AI uses in logistics are document handling and exception triage; route optimisation is a mature field where proven solvers often beat new AI.**

- **Document extraction.** Consignment notes, bills of lading, customs documents and proof of delivery photos can be read and matched to bookings with [AI document processing](/services/ai-document-processing), with a person checking low confidence fields.
- **Exception triage.** Summarising why a load is late from telematics, messages and job notes, so a dispatcher acts faster.
- **Customer enquiries.** Answering "where's my freight" from live tracking data through a chatbot, with a handoff to a person.
- **Forecasting.** Demand and volume forecasts for rostering, built with standard [data analytics](/services/data-analytics) methods first.

Use AI with care where it touches safety decisions such as allocation against fatigue limits. Those rules should be deterministic, tested code, not a model's judgement.

## What does a typical engagement look like?

**A realistic first project is a load evidence and integration layer, built in phases over three to six months.** Figures are typical Australian market ranges for an onshore senior team (AUD, ex GST), labelled as ranges, not quotes; the basis is in our [custom software cost guide](/guides/custom-software-development-cost-australia).

| Phase | Weeks | Output | Typical range (AUD, ex GST) |
|---|---|---|---|
| Discovery | 3 to 4 | System map, data flows, CoR evidence gaps, integration access confirmed, fixed price | $12,000 to $25,000 |
| Integration core | 6 to 10 | Event pipeline joining TMS, WMS and telematics around one load record | $40,000 to $100,000 |
| Driver or yard app | 6 to 10 | Offline pre-start checks, load photos, proof of delivery | $40,000 to $90,000 |
| Dashboards and alerts | 3 to 5 | Fatigue and allocation warnings, exception queues, audit exports | $15,000 to $40,000 |

A business needing only the integration core and dashboards would sit around $60,000 to $165,000; adding the app takes it towards $200,000 or beyond. Replacing a legacy TMS is a different scale of project; see our [legacy modernisation cost guide](/guides/legacy-modernisation-cost-australia).

### Questions to settle before you commission anything

1. Which CoR functions does your business perform, and who owns CoR compliance?
2. Which systems hold the truth for bookings, weights, locations, fatigue and invoices?
3. Do your vendors offer APIs and test environments, and at what cost?
4. Where do drivers lose signal, and what must work offline?
5. Which HVNL transitional rules apply to your operation, and until when?

## How All Webbed Labs approaches logistics projects

We start with paid discovery to map your systems and data flows, then quote a fixed price. Regulatory rules are stored as configuration with effective dates, so the next HVNL change is an update, not a rebuild. Source code lives in your repository from day one, data stays in Australian cloud regions by default, and every change passes automated type checks, visual tests and security scans plus a senior engineer's review before it ships. The existing [logistics and transport](/industries/logistics-transport) page covers our wider services for the sector.
