---
title: "Software for local government in Australia: what councils build around their ERP"
metaTitle: "Software for Local Government Australia: Council Builds"
description: "Software for Australian councils: NSW Planning Portal APIs, State Records and GIPA, MNDB breach rules, IP&R reporting, AI pilots and buying through LGP."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Australian councils run their core on an enterprise system such as TechnologyOne OneCouncil or Civica Authority, and that should stay. The work that improves services sits around it: customer request portals that write back to the ERP, integrations with state planning portals, records and information access workflows that meet state law, and carefully governed AI assistants for staff. In NSW that means the Planning Portal APIs, the State Records Act 1998, the GIPA Act 2009, the Mandatory Notification of Data Breach scheme and the Office of Local Government's Integrated Planning and Reporting framework. Focused builds typically sit between $40,000 and $160,000 (AUD, ex GST) as an indicative planning range, not a quote."
takeaways:
  - "The NSW Planning Portal publishes inbound and outbound APIs for councils covering the Online DA, CDC, Section 10.7, Section 68 and certificate services, each requiring a subscription key."
  - "NSW privacy law applies to councils, and since 28 November 2023 agencies covered by the PPIP Act must notify the Privacy Commissioner and affected people of eligible data breaches, with 30 days to assess a suspected breach."
  - "A formal GIPA access application can take up to 20 working days, so search across systems has to be fast and complete."
  - "Local Government Procurement is a prescribed entity under s55 of the Local Government Act 1993 (NSW), so councils using LGP contracts don't have to go to tender above the threshold."
  - "AWLabs has not yet delivered a project for a council and is not on any LGP contract."
faqs:
  - q: "Should a council replace TechnologyOne or Civica?"
    a: "That is a large, multi year decision, and usually not the right first step. TechnologyOne says more than 73% of Australian and New Zealand residents live in a council powered by its software, so the ecosystem, skills and integrations are deep. Most councils get faster results from building customer facing services and integrations around the existing core, through its APIs, than from replacing it."
  - q: "Can a customer request portal update our ERP directly?"
    a: "It should, through the ERP's supported APIs or integration layer, so staff work in one system and customers see real status. The portal creates the request, the ERP owns the workflow and service level, and status updates flow back to the customer. Avoid portals that email requests into a shared inbox; they recreate the problem they were meant to solve."
  - q: "Does the NSW AI Assessment Framework apply to councils?"
    a: "The framework is mandatory for NSW Government agencies, and the digital.nsw page describes its scope in those terms rather than naming councils. Even so, it is a sensible template for a council AI pilot: register the use case, assess the risk, record mitigations and reassess when the system changes. Check with the Office of Local Government and your own governance team for current expectations."
  - q: "Can we use AI to answer GIPA applications?"
    a: "AI can help search and sort documents and draft a schedule of records, which saves time on large applications. The decision to release or withhold, and any redaction for public interest considerations, must be made by an authorised officer. Keep a log of what the tool searched and what it found, because the search itself may be reviewed."
  - q: "How do councils in other states differ?"
    a: "Each state has its own local government act, records law, information access law and planning system. The structure of this page carries over, but the specific obligations don't. We confirm the rules for the council's state in the Discovery Audit rather than assuming the NSW position."
  - q: "Can council data be hosted overseas?"
    a: "That is a question for your records, privacy and risk teams, and the State Records Act and privacy law both bear on it. Most councils choose Australian hosting for customer and records data, and the major clouds offer Sydney and Melbourne regions. We build for the hosting location the council decides."
sources:
  - title: "APIs for Online Services"
    url: "https://www.planningportal.nsw.gov.au/API"
    publisher: "NSW Planning Portal"
  - title: "NSW privacy laws"
    url: "https://www.ipc.nsw.gov.au/privacy/nsw-privacy-laws"
    publisher: "Information and Privacy Commission NSW"
  - title: "MNDB Scheme: information for agencies"
    url: "https://www.ipc.nsw.gov.au/privacy/MNDB-scheme"
    publisher: "Information and Privacy Commission NSW"
  - title: "Fact sheet: Mandatory Notification of Data Breach Scheme (archived copy)"
    url: "https://web.archive.org/web/2025/https://www.ipc.nsw.gov.au/fact-sheet-mandatory-notification-data-breach-scheme"
    publisher: "Information and Privacy Commission NSW via Wayback Machine"
  - title: "Access NSW government information"
    url: "https://www.ipc.nsw.gov.au/information-access/citizens/access-nsw-govt-info"
    publisher: "Information and Privacy Commission NSW"
  - title: "Retention and disposal authorities: local government"
    url: "https://staterecords.nsw.gov.au/recordkeeping/rules/retention-and-disposal-authorities/general-retention-and-disposal-authorities/local-government"
    publisher: "State Records NSW"
  - title: "Integrated Planning and Reporting"
    url: "https://www.olg.nsw.gov.au/councils/integrated-planning-and-reporting/"
    publisher: "Office of Local Government NSW"
  - title: "About Local Government Procurement"
    url: "https://www.lgp.org.au/about"
    publisher: "Local Government Procurement"
  - title: "NSW AI Assessment Framework"
    url: "https://www.digital.nsw.gov.au/policy/artificial-intelligence/nsw-artificial-intelligence-assessment-framework"
    publisher: "Digital NSW"
  - title: "Local government software (archived copy)"
    url: "https://web.archive.org/web/2026/https://www.technologyonecorp.com/industries/local-government"
    publisher: "TechnologyOne via Wayback Machine"
  - title: "Civica Australia"
    url: "https://www.civica.com/en-au/"
    publisher: "Civica"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "AI for Australian government: DTA policy, ISM, PSPF and hosting"
    href: "/solutions/government-ai-and-software"
  - title: "Building software for NSW Government"
    href: "/solutions/nsw-government-software"
  - title: "RAG knowledge base development"
    href: "/services/rag-knowledge-base"
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
service:
  title: "RAG knowledge base development"
  href: "/services/rag-knowledge-base"
industry:
  title: "Government and enterprise"
  href: "/industries/government-enterprise"
disclaimer: "legal"
---

## What does a council's software estate usually include?

**A council's core is one enterprise system covering finance, property and rating, regulatory services and assets, surrounded by a records system, a CRM and many specialist tools.** TechnologyOne says its OneCouncil product supports the day to day operations of local governments with a single integrated solution, and that more than 73% of Australian and New Zealand residents live in a council powered by its software. Civica's Authority product is the other common core in Australian councils.

| Function | Typical systems | Where gaps appear |
|---|---|---|
| Finance, property, rating, regulatory | TechnologyOne OneCouncil, Civica Authority | Customer facing experience |
| Records | Objective, Content Manager, or the ERP's own module | Search across systems for GIPA |
| Customer requests | ERP CRM module or a separate CRM | Mobile reporting, status back to residents |
| Planning | ERP module plus the state planning portal | Data moving between the two |
| Reporting | Spreadsheets and BI tools | IP&R progress and service level reporting |

The federal [government AI and software page](/solutions/government-ai-and-software) covers the DTA policy and Commonwealth security frameworks. Councils sit under state law instead, and the rest of this page uses NSW as the worked example.

## How do councils integrate with the NSW Planning Portal?

**The NSW Planning Portal provides inbound and outbound APIs so that application data flows between the portal and a council's own systems, and each API needs a subscription key requested from the department.** The portal lists APIs for the Online DA Service, Online CDC Service, Online Section 10.7 Service, Online Section 68 Service, Online Certificate Registration and Online Post Consent Certificates.

Most ERPs offer a connector, but councils still find gaps:

- applications that arrive in the portal but need manual matching to the right property and officer
- status changes in the ERP that don't reach the applicant in the portal promptly
- documents duplicated across the portal, ERP and records system
- no single view of where each application sits and how long it has waited

A custom integration service sits between the portal APIs and the ERP, maps fields, files documents to records automatically, and gives managers an ageing dashboard. Other states run their own planning systems with different interfaces.

## What do State Records and GIPA mean for software?

**In NSW, councils are public offices under the State Records Act 1998, so records may only be destroyed after the minimum retention periods in an approved retention and disposal authority, and State Records NSW publishes authorities for local government.** Every new system that creates council records needs a plan for how those records reach the records system or are kept and disposed of properly in place.

Information access adds a second requirement. The IPC describes four ways to access NSW government information: open access information, authorised proactive release, informal release, and a formal access application. A formal application can take up to 20 working days, with an extra 10 to 15 working days possible when third parties or archives must be consulted.

What this means for any council build:

1. **Records capture by design.** New portals and apps file their records, with metadata, to the records system.
2. **Disposal rules attached.** Each record class carries its retention class from the start.
3. **Searchable across systems.** GIPA searches must cover the ERP, records, email and any new system, so give them an index.
4. **Open access publishing.** Information that must be published should flow to the website automatically, not by copy and paste.

## How should customer requests and IP&R reporting connect?

**Integrated Planning and Reporting asks every NSW council to link a community strategic plan of at least 10 years to a 4 year delivery program and an annual operational plan, and all plans, projects, activities and funding must link to the delivery program.** The Office of Local Government sets this out in its IP&R guidelines.

Customer requests are where residents feel the delivery program. A request portal that records category, location, service level and outcome gives a council real data on service delivery, which then rolls into IP&R reporting rather than being assembled by hand.

A sensible request portal:

- lets residents report with a photo and map pin, on mobile, without an account for simple issues
- creates the request in the ERP with the right category and service level
- returns status and closure messages to the resident automatically
- feeds a dashboard that maps request volumes and response times to delivery program actions

Our [customer portal guide](/guides/customer-portal-development) covers portal scoping in general terms.

## How should councils approach AI?

**Start with internal tools that help staff find and summarise council's own documents, and govern them as you would a high profile service.** A policy and procedures assistant built on retrieval augmented generation, answering only from approved council documents with citations, is a common first step. Our [RAG knowledge base service](/services/rag-knowledge-base) explains how that works.

For governance, NSW Government agencies must register AI use cases and, where required, complete the NSW AI Assessment Framework, which became mandatory on its platform from 30 September 2026. The digital.nsw page frames that obligation for NSW Government agencies, so councils should confirm their own position, but the framework is a sound model for any council pilot: describe the use case, assess the risk, record the mitigations and reassess when it changes.

Community trust matters more in local government than almost anywhere. Publish what your AI tools do, keep a person accountable for every decision that affects a resident, and avoid using AI to decide applications, fines or eligibility.

## What do data breach rules mean for council systems?

**The IPC says the PPIP Act applies to NSW public sector agencies including local councils, and since 28 November 2023 the Mandatory Notification of Data Breach scheme requires agencies to notify the Privacy Commissioner and affected individuals of an eligible data breach.** Agencies have 30 days from becoming aware of a possible breach to assess whether it is likely to result in serious harm, must notify the Commissioner immediately once it is eligible, and must keep an internal data breach register and a public data breach policy.

For software that means: logs that tell you what was accessed and by whom, a fast way to identify affected people, and contracts that make vendors report incidents to the council promptly. The HRIP Act also applies to councils for any health information they hold.

## How do councils buy custom software?

**NSW councils can tender, use their own panels, or buy through Local Government Procurement, which is a prescribed entity under s55 of the Local Government Act 1993 (NSW), so councils using LGP contracts don't need to go to tender above the tendering threshold.** Other states have their own local government procurement bodies and rules.

AWLabs is not on any LGP contract. A council buying from us would use its own procurement process, and for larger work that may mean a tender.

## What do council builds cost?

**These are indicative AUD planning ranges, ex GST, not quotes.** Expeed publishes $40,000 to $150,000 for mid complexity custom software in Australia and $150,000 to $500,000 or more for enterprise solutions.

| Build | Includes | Indicative range |
|---|---|---|
| Customer request portal integrated with the ERP | Mobile reporting, map and photo, ERP write back, status messages, dashboard | $60,000 to $160,000 |
| AI knowledge assistant for council policies | Document ingestion, retrieval with citations, access control, usage logs | $40,000 to $120,000 |
| Planning Portal integration service | API connection, field mapping, records filing, ageing dashboard | $40,000 to $100,000 |

Cost depends most on the ERP's API maturity, the records system and the council's security review.

## How AWLabs approaches council work

AWLabs has not yet delivered a project for a council and is not on any LGP contract, so we won't claim local government experience. We bring integration, portal and AI engineering, from our base in Sydney. Each engagement starts with a Development Consult, then a paid Discovery Audit that maps your ERP, records system and obligations. You receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with updates every Tuesday and Friday, Sydney business hours. For state agency work, see [building software for NSW Government](/solutions/nsw-government-software), and for our wider public sector approach see [government and enterprise](/industries/government-enterprise).

This page is general information, not legal advice.
