---
title: "HVAC software in Australia: refrigerant records, plant registers and maintenance contracts"
metaTitle: "HVAC Software Australia: Refrigerant Logs, Assets and PPM"
description: "HVAC and refrigeration software in Australia: ARC licence and RTA records, asset registers, planned maintenance, NSW cooling tower rules and BMS alerts."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "HVAC and refrigeration contractors carry obligations most trades don't: every technician handling fluorocarbon refrigerant needs an ARC refrigerant handling licence, the business needs a refrigerant trading authorisation with quarterly records it must produce within 14 days of a written request, and commercial clients expect planned maintenance against an asset register, including cooling towers regulated under state public health law. Field service platforms such as simPRO and AroFlo handle jobs and invoicing; the gaps are refrigerant logs tied to each asset, PPM scheduling across many sites and BMS alerts that open jobs. Those builds typically sit in the $15,000 to $80,000 (AUD, ex GST) market range."
takeaways:
  - "Handling fluorocarbon refrigerant without a refrigerant handling licence is an offence, and businesses that buy, store or sell refrigerant need a refrigerant trading authorisation from ARC."
  - "RTA holders must keep quarterly records of refrigerant bought, recovered, sold and disposed of, cylinder leak checks and licensees, and send copies within 14 days of a written request."
  - "In NSW, cooling water systems need monthly Legionella sampling, an annual independent audit and a risk management plan at least every 5 years, with reportable results notified within 24 hours."
  - "The asset, not the job, is the unit that matters in commercial HVAC: refrigerant history, service history and contract scope all hang off it."
  - "Most HVAC businesses should keep their field service platform and add an asset and refrigerant layer, rather than replace it."
faqs:
  - q: "What is the best field service software for an HVAC business?"
    a: "For residential install and service, ServiceM8 or Tradify are often enough. For commercial maintenance with assets, contracts and stock, simPRO and AroFlo are common in Australia. Pick on how well each handles assets across sites and planned maintenance, and test it with a real maintenance contract before you commit."
  - q: "Do we have to report refrigerant use to ARC every quarter?"
    a: "The conditions published by ARC require you to keep records for each quarter and send copies within 14 days of a written request, which usually arrives as part of a permit condition check. ARC provides templates and says you don't have to use them, but you must keep the records, and supplier invoices or supplier activity lists can't replace the purchase records."
  - q: "Can software track refrigerant against each piece of equipment?"
    a: "Yes, and it's one of the most useful builds for a commercial HVAC business. Each service job records refrigerant type and quantity recovered or charged against the asset, and the system rolls those up into the quarterly business records. Leak patterns on a single unit then become visible, which is also a sales conversation about replacement."
  - q: "Who is responsible for cooling tower compliance in NSW, us or the building owner?"
    a: "The occupier, which can be the owner, a tenant entitled to occupy or an owners corporation. The occupier can engage contractors as the duly qualified person for routine management and a competent person for the risk management plan, but can't audit its own system. Your software should record which role you hold on each site and produce the evidence that role needs."
  - q: "Can a BMS alarm automatically create a job?"
    a: "Usually, yes, if the BMS or its monitoring layer can send alarms out by email, webhook or API. A small service filters alarms, matches them to the asset and site, and opens a job in your platform with the right priority. The work is mostly in filtering, so technicians aren't flooded with nuisance alarms."
  - q: "Have you built HVAC software before?"
    a: "Not yet. AWLabs hasn't delivered a project for an HVAC or refrigeration contractor, so we don't claim sector experience. We bring integration, data engineering and mobile app skills, and rely on your licensed technicians and the regulators for compliance content."
sources:
  - title: "Refrigerant Handling Licence"
    url: "https://arctick.org/refrigerant-handling-licence/"
    publisher: "Australian Refrigeration Council"
  - title: "Refrigerant Trading Authorisation (RTA)"
    url: "https://arctick.org/refrigerant-trading-authorisation/"
    publisher: "Australian Refrigeration Council"
  - title: "Conditions of authorisation"
    url: "https://arctick.org/refrigerant-trading-authorisation/conditions-of-authorisation/"
    publisher: "Australian Refrigeration Council"
  - title: "Business reporting templates and guides"
    url: "https://arctick.org/refrigerant-trading-authorisation/business-reporting-templates-and-guides/"
    publisher: "Australian Refrigeration Council"
  - title: "Legionella control in cooling water systems: occupier"
    url: "https://www.health.nsw.gov.au/environment/factsheets/Pages/legionella-control-occupier.aspx"
    publisher: "NSW Health"
  - title: "Legionella control in cooling water systems: competent person"
    url: "https://www.health.nsw.gov.au/environment/factsheets/Pages/legionella-control-competent-person.aspx"
    publisher: "NSW Health"
  - title: "Simpro pricing and add-ons"
    url: "https://www.simprogroup.com/pricing"
    publisher: "Simpro"
  - title: "AroFlo pricing and features"
    url: "https://aroflo.com/pricing/"
    publisher: "AroFlo"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Software for fire protection businesses"
    href: "/solutions/fire-protection-software"
  - title: "Software for plumbing businesses"
    href: "/solutions/plumbing-business-software"
  - title: "Software for trades businesses"
    href: "/solutions/trades-business-software"
  - title: "How much does API integration cost in Australia?"
    href: "/guides/api-integration-cost-australia"
service:
  title: "Data engineering"
  href: "/services/data-engineering"
industry:
  title: "Construction and trades"
  href: "/industries/construction-trades"
disclaimer: "legal"
---

## What does an HVAC business track that other trades don't?

**Three things: refrigerant, plant and contracts.** A plumber or electrician mostly tracks jobs. An HVAC and refrigeration contractor also tracks a controlled substance that it buys, stores, charges and recovers under federal regulation; a register of plant that it services for years; and maintenance contracts that define what must happen to each piece of plant, and when.

That makes the asset the centre of the system. A rooftop package unit at a shopping centre has a refrigerant type and charge, a service history, a contract scope, a warranty and a replacement date. Jobs come and go; the asset stays. Software that hangs everything off jobs will always struggle with commercial HVAC.

## What refrigerant records does the law require?

**Technicians need a licence, the business needs an authorisation, and the authorisation comes with quarterly records.** The Australian Refrigeration Council (ARC) administers both on behalf of the Australian Government under the Ozone Protection and Synthetic Greenhouse Gas Management Regulations 1995.

ARC states that anyone carrying out work on refrigeration and air conditioning equipment that risks emitting fluorocarbon refrigerant, including installing, commissioning, servicing, maintaining or decommissioning it, needs a refrigerant handling licence. Any individual or business buying, storing or selling fluorocarbon refrigerant needs a refrigerant trading authorisation (RTA).

The RTA conditions, reproduced by ARC from regulation 141, set out what your records must hold:

| Record | What the conditions require | What software should capture |
|---|---|---|
| Refrigerant bought, recovered, sold and disposed of | Up to date records for each quarter | Purchases from supplier invoices; recovery and charge per job, per asset |
| Purchase details | Date, supplier, refrigerant type and quantity; supplier invoices or activity lists can't be substituted | Structured purchase entries, not attached PDFs |
| Cylinder leak checks | Containers in your possession checked for leaks at least every quarter, with cylinder test dates recorded | Cylinder register with check and test due dates |
| Equipment | Leak detectors, vacuum pumps and recovery units maintained and operating correctly | Tool register with maintenance history |
| Licensees | Name and licence number of each licensee handling your refrigerant | Technician profiles with licence expiry alerts |
| Risk management plan | A plan for handling and storage, put into effect | Stored plan and review date |
| Production on request | Copies sent within 14 days of a written request | One click quarterly report |

ARC offers templates and says you don't have to use them, but you must keep the records quarterly. In practice, most businesses rebuild them every quarter from invoices and job notes. If each service job already records refrigerant type and kilograms recovered or charged against the asset, the quarterly records become a report rather than a project.

## How should planned maintenance and asset registers work?

**A planned preventive maintenance (PPM) contract is a schedule of tasks per asset per frequency, and the software's job is to generate those visits, record what was done and show the client what is due.** The design questions to settle early:

1. **Asset hierarchy.** Site, building, plant room, asset, component. Clients with portfolios want to see all of it; technicians want only what is in front of them.
2. **Task libraries.** Monthly, quarterly and annual task lists per asset type, reused across contracts and edited in one place.
3. **Visit generation.** Grouping tasks that fall due together at one site into a single visit, so you don't send three technicians in one week.
4. **Evidence.** Readings, photos and refrigerant entries captured on the asset during the visit, offline if the plant room has no signal.
5. **Defects to quotes.** A defect found on a PPM visit should become a quote the client can approve, without the technician writing it up twice.
6. **Client reporting.** A monthly report per site, and a portfolio view for facilities managers.

simPRO sells a Maintenance Planner add-on for preventative maintenance of customer assets, and AroFlo lists an assets module, a maintenance work type and HVAC among its industries, so check whether either already covers your contracts before you build. Custom work tends to pay where contracts are complex, sites number in the hundreds, or clients demand reporting in their own format.

## What do cooling towers add?

**Cooling towers bring state public health law into the contract, with fixed testing, audit and notification cycles.** In NSW, the occupier must manage cooling water systems under the Public Health Act 2010, the Public Health Regulation 2022 and AS/NZS 3666:2011, and NSW Health lists six safeguards.

| Requirement (NSW) | Frequency or deadline |
|---|---|
| Risk assessment and risk management plan (Approved Form 1) | Every 5 years, or more often if required |
| Independent audit of compliance | Annually |
| Certificates of plan and audit completion to the local council | Within 7 days |
| Sampling for Legionella and heterotrophic colony count | Monthly |
| Reportable results (Legionella at or above 1,000 cfu/mL, or HCC at or above 5,000,000 cfu/mL) notified to council | Within 24 hours of the lab result |
| Unique identification number displayed on each tower | Sign within 30 days of issue |

The occupier carries the legal duty but can engage contractors as the duly qualified person for routine management and as the competent person for the risk management plan; it can't audit its own system. For an HVAC contractor, the software needs to know which role you hold on each site, schedule the monthly sampling, track lab results, and raise an alarm the moment a reportable result arrives, because the 24 hour clock starts then. Other states have their own cooling tower rules, so a national contractor needs these as configurable schedules per state.

## Why do field service tools struggle with asset history?

**Most field service tools were built for jobs first and added assets later, so history lives in job notes rather than on the asset.** That shows up when a client asks how much refrigerant a chiller has lost in three years, which units are on the oldest refrigerant, or what you did to an air handler last spring. If the answer requires reading old job cards, the data model is the problem.

Before building anything, try those three questions in your current platform. If it answers them, you need configuration and training, not software. If it can't, an asset and refrigerant layer that syncs jobs from your platform's API, adds the asset data model and writes results back is usually cheaper than migrating. That is a [data engineering](/services/data-engineering) problem as much as an app problem.

## Can BMS alarms turn into jobs?

**Yes, and it is the most direct way to move from reactive callouts to faster, cheaper fixes.** A building management system already knows when a supply air temperature drifts or a compressor trips. The usual flow:

1. The BMS or its monitoring layer sends alarms out by email, webhook or API.
2. A small integration service filters nuisance alarms and duplicates.
3. It matches the alarm to your asset record and the client's contract.
4. It opens a job in your field service platform with priority and the alarm data attached.
5. It notifies the on call technician, and closes the loop when the alarm clears.

The engineering effort is mostly in step 2 and 3: mapping BMS point names to your assets, and setting rules so technicians trust the alerts. Our [API development service](/services/api-development) covers this kind of integration, and the [API integration cost guide](/guides/api-integration-cost-australia) explains the pricing drivers.

## Typical builds and indicative costs

**These builds sit beside your platform, not instead of it.** Figures are indicative AUD market ranges, ex GST, not quotes. They fall within the bands Expeed publishes for Australian custom software: $15,000 to $40,000 for simple internal tools and $40,000 to $150,000 for mid complexity systems.

| Build | Includes | Indicative range |
|---|---|---|
| Asset register and PPM scheduler | Site and asset hierarchy, task libraries, visit generation, offline capture, client portfolio reporting | $30,000 to $80,000 |
| Refrigerant usage log and reports | Per asset recovery and charge capture, cylinder and tool registers, licence expiry alerts, quarterly RTA records | $15,000 to $35,000 |
| BMS alert to job integration | Alarm intake, filtering rules, asset matching, job creation in your platform, on call notification | $20,000 to $50,000 |

Expeed puts annual maintenance at 15% to 20% of the build. Cost rises with the number of BMS vendors, the quality of your platform's API and how clean your existing asset data is.

## How AWLabs would approach an HVAC build

We start with a Development Consult about your contracts, your refrigerant records and the questions your platform can't answer. If custom work is worth it, a paid Discovery Audit looks at your platform's API, a sample of asset data and any BMS feeds, then you get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, and updates arrive every Tuesday and Friday, Sydney time.

We haven't yet delivered an HVAC project, and we'll say so if better configuration of your platform solves the problem. For the fire side of building services, see our [fire protection software page](/solutions/fire-protection-software); for platform choice, the [trades software comparison](/solutions/trades-business-software). More on our [construction and trades](/industries/construction-trades) work. This is general information, not legal advice.
