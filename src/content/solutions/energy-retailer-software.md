---
title: "Software for Australian energy retailers: billing rules, hardship and market systems"
metaTitle: "Energy Retailer Software Australia: Rules and Builds"
description: "Software for Australian energy retailers: Better Bills Guideline, hardship policies, life support, DMO and VDO, AEMO MSATS and B2B, CDR and Solar Sharer."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "An Australian energy retailer's core billing and market platform, such as Gentrack or Hansen, should stay in place, because it carries the AEMO market transactions and tariff engine that no small team wants to rebuild. The risk for smaller and newer retailers sits in the layers around it: bills that meet the AER's Better Bills Guideline, hardship and life support processes that the National Energy Retail Rules expect to be followed every time, and a customer experience that explains a bill before the customer calls. Focused builds in those layers typically sit between $50,000 and $200,000 (AUD, ex GST) as an indicative planning range, not a quote."
takeaways:
  - "The AER published the final Better Bills Guideline (Version 2) on 30 January 2023, and has since used section 37 decisions to require extra bill messages such as the energy bill relief message."
  - "Under the National Energy Retail Law, every retailer must have a customer hardship policy approved by the AER, and retailers must recognise family violence as a likely cause of hardship or payment difficulty."
  - "The Default Market Offer is the maximum standing offer price in DMO regions and resets every 1 July; Victoria has its own Victorian Default Offer set by the Essential Services Commission."
  - "AEMO's MSATS Procedures are made under clause 7.16.2 of the National Electricity Rules and are revised often, with several versions taking effect in 2025 alone."
  - "AWLabs is not an energy retailer, holds no retail authorisation and has not yet delivered a project for one."
faqs:
  - q: "Should a new retailer build its own billing system?"
    a: "Almost never. Market billing in the NEM means MSATS transfers, B2B service orders, meter data in AEMO formats, network tariffs and frequent procedure changes. Specialist platforms such as Gentrack carry that load for many retailers. Build the parts that differ by retailer: hardship workflow, bill explanations, customer apps, analytics and compliance evidence."
  - q: "What does the Better Bills Guideline require?"
    a: "It sets how retailers must prepare and issue bills to small customers so they are easy to understand, including the better offer message that tells a customer whether a cheaper plan is available from the same retailer. The AER has added requirements through section 37 decisions, including the energy bill relief message and, from 23 May 2025, extra information in the first tier of bills that carry a negative better offer message. Read the guideline and the current section 37 decisions together."
  - q: "Can software decide whether a customer qualifies for hardship?"
    a: "It can help identify customers who may be in hardship and route them to the right team quickly, which the AER's hardship guideline expects. The decision about a hardship arrangement should be made by trained staff applying your approved policy. Automated flags are a prompt, not a determination."
  - q: "What happens to life support customers in our systems?"
    a: "Life support registration is one of the most serious obligations a retailer has, because it protects people who rely on powered medical equipment. The AER says customers must provide confirmation from a medical practitioner. Your systems need a single authoritative register, exchanged reliably with the distributor, with the account protected while registration is in place. The exact steps and timeframes are in the National Energy Retail Rules, which your compliance team should map before any build."
  - q: "Do we have to share data under the Consumer Data Right?"
    a: "If you are a retailer with at least 10,000 small customers, very likely. The CDR rollout says consumer data sharing commenced in November 2023 for smaller energy retailers with at least 10,000 small customers, after AEMO, AGL, Origin and EnergyAustralia started in November 2022. Check your designation with your lawyers."
  - q: "Can AI explain a bill to customers?"
    a: "Yes, if it only uses the customer's own bill, usage and tariff data, it cannot change anything, and it hands over to a person on any sign of hardship, life support or a complaint. A good explainer answers why this bill is higher than the last one using real numbers. It should never give advice that contradicts the better offer message on the bill."
sources:
  - title: "Better Bills Guideline (Version 2) (archived copy)"
    url: "https://web.archive.org/web/20260903220816/https://www.aer.gov.au/industry/registers/resources/guidelines/better-bills-guideline-version-2"
    publisher: "Australian Energy Regulator via Wayback Machine"
  - title: "Customer hardship policies"
    url: "https://www.aer.gov.au/industry/retail/customer-hardship-policies"
    publisher: "Australian Energy Regulator"
  - title: "Your energy rights"
    url: "https://www.aer.gov.au/consumers/understanding-energy/your-energy-rights"
    publisher: "Australian Energy Regulator"
  - title: "Default Market Offer"
    url: "https://www.aer.gov.au/industry/retail/default-market-offer"
    publisher: "Australian Energy Regulator"
  - title: "Victorian Default Offer"
    url: "https://www.esc.vic.gov.au/electricity-and-gas/prices-tariffs-and-benchmarks/victorian-default-offer"
    publisher: "Essential Services Commission"
  - title: "Market Settlement and Transfer Solutions (MSATS) (archived copy)"
    url: "https://web.archive.org/web/20251112180701/https://www.aemo.com.au/energy-systems/electricity/national-electricity-market-nem/market-operations/retail-and-metering/market-settlement-and-transfer-solutions-msats"
    publisher: "AEMO via Wayback Machine"
  - title: "CDR rollout"
    url: "https://www.cdr.gov.au/rollout"
    publisher: "Australian Government"
  - title: "Privacy and Other Legislation Amendment Act 2024"
    url: "https://www.legislation.gov.au/C2024A00128/asmade/text"
    publisher: "Federal Register of Legislation"
  - title: "Gentrack"
    url: "https://gentrack.com/"
    publisher: "Gentrack"
  - title: "Hansen Technologies"
    url: "https://www.hansencx.com/"
    publisher: "Hansen Technologies"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Consumer Data Right software"
    href: "/guides/consumer-data-right-software"
  - title: "Solar installer software in Australia"
    href: "/solutions/solar-installer-software"
  - title: "Privacy Act automated decision rules from December 2026"
    href: "/guides/privacy-act-automated-decision-making"
  - title: "AI integration"
    href: "/services/ai-integration"
service:
  title: "Enterprise software"
  href: "/services/enterprise-software"
industry:
  title: "Government and enterprise"
  href: "/industries/government-enterprise"
disclaimer: "legal"
---

## What sits in an energy retailer's stack?

**A retailer's software has five layers: market systems, billing, customer relationship management, customer channels, and the compliance evidence that ties them together.** The first two are specialist products. The last three are where retailers differ, and where most compliance failures start.

| Layer | Typical systems | Custom work usually needed? |
|---|---|---|
| Market systems | AEMO MSATS, the B2B hub, meter data handling | Rarely. Use the platform's market gateway |
| Billing and rating | Gentrack, Hansen, SAP, Oracle | Rarely. Configure tariffs and bill templates |
| CRM and service | Salesforce or the billing platform's own CRM | Often. Hardship, life support and complaint workflows |
| Customer channels | Web portal, app, bill delivery, contact centre | Often. Bill explainers, self service, notifications |
| Compliance evidence | Usually spreadsheets | Almost always. Registers, audit trails, regulator reporting |

Gentrack positions itself as a platform for energy suppliers and networks covering billing and finance and distributed energy resource management. Hansen sells billing and market software to energy and telecommunications businesses. A small retailer should configure one of these, not replace it, and invest in the layers that make it different. Our [enterprise software service](/services/enterprise-software) covers that kind of surrounding build.

## What makes a bill compliant with the Better Bills Guideline?

**The Better Bills Guideline tells retailers how to prepare and issue bills to small customers so that billing information is easy to understand, and it includes the better offer message that tells a customer if a cheaper plan is available from you.** The AER published Version 1 on 31 March 2022, and the final Version 2 on 30 January 2023 to clarify the better offer and self read requirements.

The guideline is not static. The AER has made a series of section 37 decisions that add or change bill content, including the energy bill relief message and, from 23 May 2025, extra information in the first tier of bills that carry a negative better offer message. A retailer's bill template therefore needs:

1. A better offer calculation you can reproduce and explain for any customer, with the inputs stored.
2. Bill content driven by configuration, so a new section 37 decision becomes a template change, not a code release.
3. A test pack of real customer scenarios (solar, time of use, concession, hardship, embedded network) checked against the guideline before every release.
4. A record of what each customer's bill said, kept for complaints and audits.

## Which obligations must the system enforce every time?

**Hardship and life support are the two areas where a missed step can harm a customer and trigger enforcement, so they belong in workflow, not in staff memory.** The AER says that under the National Energy Retail Law every retailer must have a customer hardship policy, and the AER approves each one against its Customer Hardship Policy Guideline. That guideline expects processes to identify customers in hardship, or let customers identify themselves, and an early response.

The AER also says retailers must recognise family violence as a likely cause of hardship or payment difficulty, must not require documentary evidence of family violence, and must keep affected customers' details and location safe.

| Obligation | What the workflow should do |
|---|---|
| Hardship identification | Flag signals such as missed payments, payment plan breaks and contact notes, and route to a trained team |
| Hardship program | Record the arrangement, payment plan and support offered, and suppress collections steps while it is active |
| Family violence | Restrict access to the account, honour the preferred contact method, never ask for proof |
| Life support | Keep one register, synchronise with the distributor, block disconnection paths while registered, record medical confirmation |
| Disconnection | Check every hold condition before any disconnection request leaves the system |

The precise steps, notices and timeframes for each are in the National Energy Retail Rules. Your compliance team should own the rule set; software should make it impossible to skip a step.

## How do AEMO's MSATS and B2B processes affect your systems?

**MSATS is AEMO's system for retail market transactions, including customer transfers and the standing data for each connection point, and its procedures are made under clause 7.16.2 of the National Electricity Rules.** B2B procedures govern the messages between retailers, distributors and metering parties, such as service orders.

The practical point for a retailer is change frequency. AEMO's MSATS page lists several procedure versions taking effect during 2025, including versions effective 1 July, 17 September, 26 October and 27 October 2025, plus another effective 1 December 2025. Each can change fields, codes or timing your platform depends on.

Custom software rarely talks to MSATS directly. Where it adds value:

- An exceptions dashboard for failed or rejected transfers and B2B transactions, with ageing and owner.
- Reconciliation between your billing platform's customer list and market standing data.
- Alerts when a service order affecting a life support customer is raised or fails.

## What does the Consumer Data Right mean for energy?

**CDR in energy lets customers direct their retailer to share their data with accredited third parties, and it applies to retailers above a size threshold.** The government's rollout page says sharing commenced for AEMO, AGL, Origin and EnergyAustralia in November 2022, and for smaller retailers with at least 10,000 small customers in November 2023.

For a retailer, CDR is mostly a platform and integration question: product reference data, account and billing data endpoints, and a consent dashboard. Our [Consumer Data Right guide](/guides/consumer-data-right-software) covers the technical obligations in more detail.

## How do embedded networks, solar and VPP customers change things?

**Customers with solar, batteries, embedded network arrangements or virtual power plant contracts generate the most complex bills and the most calls.** They are also where the regulated offers are moving. The AER says the Default Market Offer is the maximum price a retailer can charge residential and small business customers on a standing offer in DMO regions, that it resets each 1 July, and that retailers must show how their plans compare to it in all advertising. The 2026 to 2027 DMO took effect on 1 July 2026. Victoria has its own Victorian Default Offer, set by the Essential Services Commission.

The AER also describes the Solar Sharer Offer, an opt in standing offer for residential customers with smart meters in DMO regions, with free usage periods and its own comparison price. Each new regulated offer is another tariff to model, compare and explain. Build the comparison and explanation logic once, driven by tariff data, so the next offer is configuration. If you also install systems, our [solar installer software page](/solutions/solar-installer-software) covers that side.

## Where can AI help, and where must it stop?

**AI is well suited to explaining bills and triaging contact, as long as it works only from the customer's own data and hands over to a person for anything involving hardship, life support or a complaint.** Sensible uses:

- **Bill shock explainers.** For example: "Your bill rose because your usage in July was 38% higher than June, mostly in the evening peak." Built from the bill, the interval data and the tariff, with every number traceable.
- **Contact triage.** Classifying emails and chats so hardship and life support contacts reach trained staff first.
- **Agent assist.** Summarising an account's history for the person on the phone.
- **Quality review.** Checking call notes for missed hardship signals.

Where AI should stop: deciding a hardship arrangement, changing a life support flag, or advising a customer to switch plans in a way that conflicts with the better offer message. If your systems make decisions that significantly affect individuals, read our guide to the [Privacy Act automated decision rules](/guides/privacy-act-automated-decision-making), which start on 10 December 2026. Our [AI integration service](/services/ai-integration) covers how we add models to an existing platform.

## What do retailer builds cost?

**These are indicative AUD planning ranges, ex GST, not quotes.** Expeed publishes $40,000 to $150,000 for mid complexity custom software in Australia and $150,000 to $500,000 or more for enterprise solutions; retailer work usually falls across that boundary because of integration and testing.

| Build | Includes | Indicative range |
|---|---|---|
| Hardship and life support workflow layer | Case management, register sync, holds on collections and disconnection, audit trail, reporting | $50,000 to $150,000 |
| Customer app and bill explainer | Account views, usage charts, AI explainer, notifications, hardship entry point | $80,000 to $200,000 |
| Market exceptions dashboard | Transfer and service order exceptions, reconciliation, alerts | $30,000 to $80,000 |

The biggest cost drivers are your billing platform's API quality, the test scenarios you need to sign off, and how much historical data has to move.

## How AWLabs approaches energy retail software

AWLabs is not an energy retailer, holds no retail authorisation and has not yet delivered a project for one, so we won't claim sector experience. We bring integration, workflow and AI engineering, and we work to your compliance team's rule set. Each engagement starts with a Development Consult, then a paid Discovery Audit that maps your platform, your obligations and the evidence each process must leave. You receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with updates every Tuesday and Friday, Sydney business hours.

This page is general information, not legal advice.
