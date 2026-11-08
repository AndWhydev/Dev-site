---
title: "University software and AI in Australia: beyond the student management system"
metaTitle: "University Software and AI: SMS Integration, TCSI and TEQSA"
description: "University software in Australia: integration around the student management system, TCSI reporting, international limits, TEQSA on gen AI and AI support."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Australian universities already own a student management system, such as Callista, TechnologyOne Student Management, PeopleSoft Campus Solutions or an Ellucian product, so custom work is rarely a new SMS. It is integration between the SMS, LMS, CRM and identity; data quality for TCSI, the government's reporting system that SMS vendors and in house developers connect to through a registered API; enrolment planning under the National Planning Level, which is 295,000 for 2027; and student support assistants that fit TEQSA's work on gen AI and the Higher Education Standards Framework. Indicative market ranges are $80,000 to $250,000 (AUD, ex GST) for a student support assistant with retrieval and $150,000 to $500,000 for an integration hub, as ranges, not quotes."
takeaways:
  - "TCSI offers a business to government interface for automated reporting from student management software, and any SMS vendor or in house team building on its API must test and register the product with government first."
  - "The National Planning Level for international students is 295,000 for 2027, the same as 2026, with visa prioritisation still managed through a Ministerial Direction."
  - "TEQSA's gen AI resources focus on assessment reform and academic integrity. Tools should support secure assessment and transparent AI use, not promise to detect AI writing."
  - "A student support assistant must cite the policy it answers from, hand off to a person on anything about welfare, visas, special consideration or complaints, and be tested for equity across student groups."
  - "NSW universities are bound by the NSW Privacy and Personal Information Protection Act 1998 as well as any Commonwealth obligations, so check which privacy laws apply before data leaves campus systems."
faqs:
  - q: "What student management systems do Australian universities use?"
    a: "Universities use a mix of products, including Callista, TechnologyOne Student Management, Oracle PeopleSoft Campus Solutions and Ellucian systems, often heavily customised over many years, with Canvas or Moodle as the LMS and Salesforce Education Cloud or similar as the CRM. Replacing an SMS is a multi year program; most custom work integrates with the one you have."
  - q: "What is TCSI?"
    a: "TCSI, the Tertiary Collection of Student Information, is a joint project of the Department of Education and Services Australia that collects information about students and staff at approved providers. It replaced HEIMS and HEPCAT. Providers report through a business to government interface from their student management software or through an online portal for uploads and record changes."
  - q: "How many international students can a university enrol?"
    a: "The government manages growth through a National Planning Level, announced as 295,000 for 2027, the same as 2026, with indicative allocations published for each higher education provider. Visa processing is prioritised through a Ministerial Direction. Your enrolment and offer systems should track commencements against your allocation in close to real time."
  - q: "Does TEQSA require universities to use AI detection tools?"
    a: "Not as far as its published resources show. TEQSA's gen AI hub focuses on assessment reform, academic integrity and sharing approaches from across the sector, and publishes papers such as Assessment reform for the age of artificial intelligence and Enacting assessment reform in a time of artificial intelligence. Software should support assessment design and integrity processes, rather than rely on a detector's verdict."
  - q: "Can an AI assistant answer student questions accurately?"
    a: "It can answer well on questions covered by current, approved university content, such as enrolment dates, fees policy and how to apply for special consideration, if it retrieves from that content and cites it. It should refuse or hand off when the content doesn't answer the question, and never decide a student's case. Test it on real questions before launch and monitor answers after."
  - q: "How do universities buy custom software?"
    a: "Usually through formal procurement: a request for tender or quotation, security and privacy assessment, contract negotiation and often a panel arrangement. Expect questions about data residency, security controls and insurances. Our guide to selling software to government covers much of the same ground, because many universities follow public sector procurement rules."
sources:
  - title: "About TCSI"
    url: "https://www.tcsisupport.gov.au/about"
    publisher: "TCSI Support, Australian Government"
  - title: "Developing TCSI compatible software"
    url: "https://www.tcsisupport.gov.au/support/developing-tcsi-compatible-software"
    publisher: "TCSI Support, Australian Government"
  - title: "A managed system for international education"
    url: "https://www.education.gov.au/managed-system-international-education-2026"
    publisher: "Australian Government Department of Education"
  - title: "Gen AI knowledge hub"
    url: "https://www.teqsa.gov.au/guides-resources/higher-education-good-practice-hub/gen-ai-knowledge-hub"
    publisher: "Tertiary Education Quality and Standards Agency"
  - title: "Gen AI: TEQSA resources"
    url: "https://www.teqsa.gov.au/guides-resources/higher-education-good-practice-hub/gen-ai-knowledge-hub/gen-ai-teqsa-resources"
    publisher: "Tertiary Education Quality and Standards Agency"
  - title: "Higher Education Standards Framework (Threshold Standards) 2021"
    url: "https://www.teqsa.gov.au/how-we-regulate/higher-education-standards-framework-2021"
    publisher: "Tertiary Education Quality and Standards Agency"
  - title: "Higher Education Standards Framework (Threshold Standards) 2021, text"
    url: "https://www.legislation.gov.au/F2021L00488/latest/text"
    publisher: "Federal Register of Legislation"
  - title: "Privacy and Personal Information Protection Act 1998 (PPIP Act)"
    url: "https://www.ipc.nsw.gov.au/privacy/nsw-privacy-laws/ppip-act"
    publisher: "Information and Privacy Commission NSW"
  - title: "Education Services for Overseas Students (ESOS) Framework"
    url: "https://www.education.gov.au/esos-framework"
    publisher: "Australian Government Department of Education"
related:
  - title: "Education and RTO software"
    href: "/solutions/education-rto-software"
  - title: "How much does a RAG knowledge base cost?"
    href: "/guides/rag-knowledge-base-cost"
  - title: "Selling software to Australian government"
    href: "/guides/selling-software-to-australian-government"
  - title: "Data residency vs data sovereignty"
    href: "/guides/data-residency-vs-data-sovereignty"
service:
  title: "Enterprise software development"
  href: "/services/enterprise-software"
industry:
  title: "Education"
  href: "/industries/education"
disclaimer: legal
---

## Where does custom software fit beside the student management system?

**Around it, almost never instead of it.** A university's student management system holds admissions, enrolment, fees, results and graduation, usually after years of configuration. Replacing it is a program measured in years. The custom work that pays sits in the seams.

| Seam | What goes wrong | What custom work does |
|---|---|---|
| SMS to government reporting | Validation errors found late, manual fixes | Data quality checks and dashboards before each TCSI submission |
| SMS to LMS | Class lists and results out of sync | Event driven sync and reconciliation |
| CRM to SMS | Prospective student data retyped at offer | Integration from enquiry to application to enrolment |
| Policies to students | Students can't find answers, call centres overload | A support assistant that answers from approved content and hands off |
| Research office systems | Grants, ethics and outputs tracked in spreadsheets | Workflow and reporting across the research lifecycle |

Common products in this landscape include Callista, TechnologyOne Student Management, PeopleSoft Campus Solutions and Ellucian for the SMS; Canvas and Moodle for learning; and Salesforce Education Cloud for recruitment and student relationships. Each has its own APIs and limits, which shape every design below.

## What does TCSI reporting demand of your data?

**Clean, timely, validated student and staff data, reported through either a business to government interface or a portal.** TCSI, pronounced taxi, is a joint project of the Department of Education and Services Australia. It replaced the department's HEIMS and HEPCAT tools and collects information about students and staff at approved providers.

The government describes two channels: a business to government interface that enables automated reporting through student management software, and a secure online portal for uploading files and creating and amending records. SMS vendors and in house developers building on the TCSI API must test and register their product with government before they can connect.

For a university, the practical burden is validation. Every error found after submission means rework, often in the busiest weeks of the year. A data quality layer runs the same kinds of checks before data leaves the SMS, routes each error to the faculty or team that owns the record, and tracks fixes to closure. It doesn't replace your SMS vendor's TCSI connector; it makes sure what goes through it is right the first time.

## How should systems handle international enrolment planning?

**By tracking offers, acceptances and commencements against your allocation continuously, not at census.** The government has announced a National Planning Level of 295,000 for 2027, the same as 2026, published indicative 2027 allocations for each higher education provider, and will keep using a Ministerial Direction to manage student flows through visa prioritisation. Overseas students also bring the ESOS framework and the National Code 2018 into play for enrolment, attendance and welfare.

What admissions teams need is a live view: offers made, acceptances and confirmations of enrolment issued, likely commencements by course and campus, and the gap to the allocation. That view usually draws on the CRM, the SMS and the agent portal, and it has to agree with PRISMS. A small reporting layer is often enough; it doesn't need a new admissions system.

## What does TEQSA's work on gen AI mean for tools?

**TEQSA's gen AI hub is about assessment reform and academic integrity, and its resources share approaches rather than set rules.** TEQSA's own publications include Assessment reform for the age of artificial intelligence (November 2023), Gen AI strategies for Australian higher education: Emerging practice (November 2024), Enacting assessment reform in a time of artificial intelligence (September 2025), and a June 2026 paper on assuring quality learning as gen AI becomes part of study.

The Higher Education Standards Framework is the binding layer. It has seven domains, and Standard 5.2 covers academic and research integrity. Domain 7 covers representation, information and information management, which is where accurate student facing information and record keeping sit.

For software, that points to a few principles:

1. **Support assessment design, not detection.** Tools that help staff design tasks, record how AI use is permitted in each one, and capture students' declarations are more defensible than a detector's score.
2. **Keep integrity processes human.** Software can gather evidence for an academic integrity case; a person decides it.
3. **Make AI use visible.** If a course allows AI assistance, the tool used should log what it was used for, so the declaration can be checked.

## How should a student support assistant be built?

**On retrieval from approved, current university content, with citations, clear refusals and a fast handoff to people.** This is a [retrieval augmented generation](/guides/what-is-rag) system, and the quality depends more on the content and the testing than on the model.

| Requirement | Why it matters at a university |
|---|---|
| Answers cite the policy or page they come from | Students and staff can check, and wrong content is found quickly |
| Refuses when content doesn't cover the question | Avoids invented deadlines and rules |
| Hands off on welfare, visas, special consideration, complaints and disability support | These need a person, and some carry legal duties |
| Tested across student groups | International, First Nations, regional and part time students ask differently; accuracy must hold for all |
| Respects access controls | A student sees only content meant for students; staff content stays internal |
| Logs and monitors | Wrong answers are reviewed weekly and content fixed at the source |

Our [RAG knowledge base](/services/rag-knowledge-base) service and [RAG cost guide](/guides/rag-knowledge-base-cost) cover the build and running costs.

## Where does research administration fit?

**In the gap between the grant management system, the ethics system and the repository, where research offices often run spreadsheets.** Typical builds are a single record per project that follows it from application to award, ethics approval, milestones and outputs; reminders to researchers before reporting deadlines; and reports for the research office and executive that join these sources. AI can help summarise progress reports or check an application against funder guidelines, for staff to review.

## Which privacy laws apply?

**More than one, often.** The NSW Information and Privacy Commission lists universities among the bodies bound by the NSW Privacy and Personal Information Protection Act 1998. Other states have their own public sector privacy regimes, and Commonwealth law can apply to some activities. Before any student data goes to a cloud AI service, map which law applies to it, where it will be processed, and whether the contract prevents training on it. Our guide to [data residency and data sovereignty](/guides/data-residency-vs-data-sovereignty) covers the hosting side.

## How should the integration hub be designed?

**As one governed layer that every system talks through, with the SMS as the source of truth for students and the identity provider for people.** Point to point connections multiply: ten systems connected directly can mean dozens of interfaces, each with its own failure modes. A hub replaces them with a smaller set of well defined events, such as student admitted, enrolment changed, result released and student withdrawn.

Design choices that matter at university scale:

- Every event is logged and replayable, so a failed sync can be rerun without manual fixes.
- Each consuming system subscribes only to the data it needs, which also limits privacy exposure.
- Identity comes from the university directory, so access ends when someone leaves.
- Changes are deployed outside census and results periods.

Our [API development](/services/api-development) service covers this work.

## What are the procurement and engagement realities?

**Expect formal procurement, security review and long timelines, and plan the project around them.** Universities often buy through tenders and panels, run security and privacy assessments on new vendors, and schedule changes around teaching periods and census dates. Our guide to [selling software to Australian government](/guides/selling-software-to-australian-government) covers much of the same process.

## What does it cost?

**Indicative Australian market ranges, AUD ex GST.**

| Build | Indicative range |
|---|---|
| Student support assistant with retrieval, evaluation and handoff | $80k to $250k |
| TCSI data quality layer and dashboards | $60k to $180k |
| Integration hub across SMS, LMS, CRM and identity | $150k to $500k |
| Research administration workflow and reporting | $80k to $250k |

The basis is Australian agency rates for discovery, design, build, testing and launch; hosting, model usage and support are extra. They are ranges, not quotes.

## How AWLabs approaches university projects

AWLabs hasn't yet delivered a project for a university, and we aren't on any university supplier panel. We bring [enterprise software](/services/enterprise-software), integration and AI engineering, and we work within your procurement, security and privacy processes. It starts with a Development Consult. A paid Discovery Audit then maps the systems, data and constraints, with the fee credited in full against the build, followed by a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates arrive every Tuesday and Friday, Sydney time, and the code and IP are assigned to you as they are paid for.
