---
title: "Software for Australian RTOs and education providers"
metaTitle: "Software for Australian RTOs: AVETMISS, USI and CRICOS"
description: "RTO software shaped by the move from AVETMISS to the VET Information Standard, the 2025 Standards for RTOs, USI, LMS integration and ESOS obligations."
eyebrow: "Industry solution"
published: 2026-09-28
updated: 2026-09-28
summary: "Software for Australian registered training organisations is shaped by national data and quality rules more than by teaching features. The biggest change in years is under way: national VET reporting is moving from AVETMISS to the VET Information Standard, with amended Data Provision Requirements commencing on 1 October 2026 and quarterly, API-based reporting to NCVER's STARS system. RTOs also operate under the 2025 Standards for RTOs, which took effect on 1 July 2025, must verify each student's USI, and, if they enrol international students, report through PRISMS under the ESOS framework. Most RTOs should buy a student management system that supports the new standard and build only the integrations and tools around it."
takeaways:
  - "The VET Information Standard replaces AVETMISS for the VET Provider Collection; the amending Data Provision Requirements instrument commences on 1 October 2026 and RTOs transition on a quarter-by-quarter basis."
  - "Under the new standard, data is reported progressively, with quarterly submissions due by 30 April, 31 July, 31 October and 31 January."
  - "An RTO that builds its own student management system must meet NCVER's technical requirements, including machine-to-machine API integration with STARS."
  - "USI integration uses the USI Registry System web services, which require the ATO's Digital Partnership Office authentication kit before the USI developer kit."
  - "ASQA's principles for responsible AI use in VET keep decisions affecting students with qualified trainers, assessors and staff; AI can assist, not assess on its own."
faqs:
  - q: "Should we build our own student management system?"
    a: "Usually not. Most RTOs will meet the new VET data system requirement through a commercial SMS that supports the VET Information Standard, and the SMS supplier carries the burden of keeping up with NCVER changes. Building your own makes sense only for large providers with genuinely unusual delivery models, and it means taking on API integration with STARS, the USI Registry System and possibly PRISMS yourself."
  - q: "When do we have to switch from AVETMISS to the VET Information Standard?"
    a: "It depends on your transition timing and your SMS supplier's readiness. NCVER publishes a page on when RTOs can transition, and recommends notifying it of your intent at least three months before the start of the quarter you plan to transition. Until you transition, AVETMISS 8.0 reporting continues to apply to you."
  - q: "Does the new standard change what we collect at enrolment?"
    a: "Yes. NCVER has published a sample enrolment form for the VET Information Standard, and the RTO transition checklist includes updating your data collection processes and enrolment form. Any custom enrolment portal or form builder you run needs to be updated alongside your SMS."
  - q: "Can AI mark student assessments?"
    a: "ASQA's principles for responsible AI use in VET say decisions affecting students remain the responsibility of qualified trainers, assessors and staff. AI can help draft feedback, check submissions for completeness or flag possible academic integrity issues, but a qualified assessor makes the competency judgement. ASQA also distinguishes AI from simple automation, such as automatically marking multiple choice questions."
  - q: "What do we need for international students?"
    a: "CRICOS providers must report specified student information to the Australian Government through PRISMS, including confirmation of enrolment details, fees received and visa information, and must monitor course progress and attendance under Standard 8 of the National Code 2018. Your systems need to hold that data accurately and produce it on time."
  - q: "Can you integrate our LMS with our student management system?"
    a: "Usually yes. Moodle, Canvas and other major LMS platforms offer APIs and support LTI for embedding tools. The typical integration syncs enrolments from the SMS to the LMS and returns progress, attendance and assessment outcomes to the SMS, which stays the system of record for reporting."
sources:
  - title: "Standards for RTOs: About the Standards"
    url: "https://www.asqa.gov.au/for-providers/standards-for-RTOs/about-the-standards"
    publisher: "Australian Skills Quality Authority"
  - title: "VET activity data reporting"
    url: "https://www.asqa.gov.au/for-providers/provider-obligations/data-collection-provision/vet-activity-data-reporting"
    publisher: "Australian Skills Quality Authority"
  - title: "Reporting under the VET Information Standard"
    url: "https://www.dewr.gov.au/vet-activity-data/reporting-under-vet-information-standard"
    publisher: "Department of Employment and Workplace Relations"
  - title: "RTO transition journey"
    url: "https://vetinformationstandard.ncver.edu.au/Preparing-for-transition/rto-transition-journey"
    publisher: "NCVER"
  - title: "SMS supplier transition journey"
    url: "https://vetinformationstandard.ncver.edu.au/Preparing-for-transition/sms-transition-journey"
    publisher: "NCVER"
  - title: "Student Management System (SMS) integration"
    url: "https://www.usi.gov.au/system-developers/student-management-system-sms-integration"
    publisher: "Office of the Student Identifiers Registrar"
  - title: "Verify or find a student's USI"
    url: "https://www.usi.gov.au/providers/verify-or-find-students-usi"
    publisher: "Office of the Student Identifiers Registrar"
  - title: "ESOS reporting obligations"
    url: "https://www.asqa.gov.au/for-providers/provider-obligations/esos-requirements/reporting-obligations"
    publisher: "Australian Skills Quality Authority"
  - title: "Overseas student attendance"
    url: "https://www.asqa.gov.au/for-providers/provider-obligations/esos-requirements/overseas-student-attendance"
    publisher: "Australian Skills Quality Authority"
  - title: "Responsible use of Artificial Intelligence (AI) in VET"
    url: "https://www.asqa.gov.au/for-providers/guidance-and-resources-providers/artificial-intelligence-ai-use-in-vocational-education-training-vet/responsible-use"
    publisher: "Australian Skills Quality Authority"
related:
  - title: "Education"
    href: "/industries/education"
  - title: "SaaS development"
    href: "/services/saas-development"
  - title: "Build vs buy: custom software or off-the-shelf SaaS?"
    href: "/guides/build-vs-buy-software"
  - title: "How much does it cost to build a SaaS product in Australia?"
    href: "/guides/saas-development-cost-australia"
industry:
  title: "Education"
  href: "/industries/education"
service:
  title: "API development and integration"
  href: "/services/api-development"
disclaimer: legal
---

## What should an RTO build, and what should it buy?

**Most RTOs should buy a student management system (SMS) and a learning management system (LMS), then build only what connects them or what their delivery model uniquely needs.** National reporting rules change often, and a commercial SMS spreads the cost of keeping up across many providers.

| Need | Usually buy | When custom makes sense |
|---|---|---|
| Student records and national reporting | Commercial SMS that supports the VET Information Standard | Large providers with unusual delivery models, or edtech companies building an SMS product |
| Online learning and assessment delivery | Moodle, Canvas or a VET-focused LMS | Specialised simulations or workplace assessment tools, embedded via LTI |
| Enrolment and pre-enrolment | SMS enrolment forms | Complex eligibility checks for funded training, employer-led enrolments, multilingual portals |
| Employer and workplace supervisor portals | Sometimes included in the SMS | Apprenticeship and traineeship workflows with logbooks and sign-offs |
| Reporting and dashboards | SMS reports | Cross-system views of progress, attendance, completions and funding risk |
| Integrations | Built-in connectors where they exist | SMS to LMS, CRM, finance and agent portals where connectors fall short |

The rest of this page is about the rules that make those custom pieces harder than they look. The broader [education industry](/industries/education) page covers schools and universities as well.

## AVETMISS is being replaced. What does the VET Information Standard mean for your systems?

**The VET Information Standard replaces AVETMISS for the VET Provider Collection, and reporting moves from an annual file to progressive, quarterly, API-based submissions to NCVER's Student Training Activity Reporting System (STARS).** It's part of the VET Data Streamlining Program, and it affects every system that touches student or enrolment data.

| Date | What happens |
|---|---|
| 1 July 2025 | 2025 Standards for RTOs take effect |
| 10 July 2026 | NCVER announces that the new data reporting requirements have been published |
| 1 October 2026 | The Data Provision Requirements amendment instrument (Data Streamlining) 2026 commences |
| Quarter by quarter | RTOs transition when ready; NCVER recommends notifying it at least 3 months before the chosen quarter |

Once an RTO reports under the new standard, data is submitted as it becomes available and within these timeframes:

| Activity quarter | Submission due |
|---|---|
| 1 January to 31 March | 30 April |
| 1 April to 30 June | 31 July |
| 1 July to 30 September | 31 October |
| 1 October to 31 December | 31 January |

There are two reporting pathways. RTOs that deliver only fee-for-service training, and those delivering government funded training in the ACT, NSW, the NT and SA, submit directly to NCVER from their SMS. RTOs delivering government funded training in Queensland, Tasmania, Victoria and WA submit through the state or territory, which passes data on to NCVER.

### What this means for software

- **Every RTO must maintain a VET data system** that stores reportable data digitally and supports reporting through the required pathway. Most will do this through an SMS that supports the new standard.
- **A self-built SMS must meet the technical requirements**, including machine-to-machine credentials, integration testing in NCVER's client integration environment and use-case testing, the same journey NCVER sets out for SMS suppliers.
- **Enrolment forms change.** NCVER has published a sample enrolment form, and custom enrolment portals must collect the new elements.
- **Data quality becomes continuous.** Quarterly deadlines leave less time to fix validation errors in a rush each February. Validation should run when data is entered, not at submission time.
- **Transition planning is shared.** Your SMS supplier's readiness sets your earliest transition date. Custom integrations that read or write SMS data may need changes at the same time.

Until an RTO transitions, AVETMISS 8.0 reporting still applies, so for a period some systems need to support both.

## What do the 2025 Standards for RTOs mean for software?

**The 2025 Standards for RTOs, in effect since 1 July 2025, have three parts: the Outcome Standards, the Compliance Standards and the Credential Policy.** They focus on outcomes rather than prescribing processes, which shifts the burden onto RTOs to show, with evidence, that training and support are working.

For software, that means evidence is a design requirement, not a by-product:

1. **Trainer and assessor credentials.** The Credential Policy sets out the credentials needed to deliver training, assess and validate. A staff system should hold qualifications, expiry dates and currency evidence, and flag gaps before someone is timetabled.
2. **Student support and progress.** Systems should show which students are falling behind and what support was offered, with dates.
3. **Assessment and validation records.** Who assessed what, against which version of the unit, and when validation occurred.
4. **Self-assurance.** ASQA's practice guides include self-assurance questions. Dashboards that answer them from live data save a scramble before audit.

## How does USI integration work?

**RTOs must verify each student's Unique Student Identifier for reporting and before conferring an award, and a student management system can do this in bulk through the USI Registry System web services.** Verification needs the USI, the student's name and date of birth.

For an in-house or custom integration, the steps are:

1. Hold an ABN and set up access through the ATO's Relationship Authorisation Manager with a standard strength digital identity such as myID.
2. Obtain the Digital Partnership Office authentication kit, then request the USI developer kit.
3. Build against the USI Technical Services Contract (version 5.0, effective from July 2022), including the security token service and check character algorithm.
4. Test in the third-party test environment with the mock data provided, then connect to production.

If you're using a commercial SMS, this is the supplier's job. It's only your problem when you build your own system or a separate enrolment platform.

## What changes when you enrol international students?

**CRICOS providers take on a second set of data obligations under the ESOS framework, reported through the Provider Registration and International Student Management System (PRISMS).** For each accepted student, the Australian Government needs identity details, course and CRICOS code, agreed start and expected completion dates, fees received before confirming enrolment, total tuition fees, English test results where relevant, and passport and visa numbers in some cases.

Standard 8 of the National Code of Practice for Providers of Education and Training to Overseas Students 2018 requires providers to monitor course progress and attendance. ASQA's guidance also notes that VET courses for overseas students must be full time, with a minimum of 20 scheduled course contact hours per week, and at least two thirds of units delivered face to face. Software for international cohorts therefore needs:

- Attendance capture by session, not just by unit, with early warnings when a student falls behind.
- Course progress tracking against the expected duration on the confirmation of enrolment.
- A record of face to face versus online delivery per student.
- Education agent records and commission tracking tied to written agreements.
- Clean, auditable data that matches what's in PRISMS.

## How should an LMS connect to the rest?

**The SMS should remain the system of record for students, enrolments and outcomes; the LMS delivers learning and sends results back.** A typical integration creates LMS enrolments when a student enrols in the SMS, returns progress, attendance and assessment outcomes to the SMS, and keeps unit versions aligned with the training package. For specialised tools, such as a workplace logbook or simulation, LTI lets them embed inside the LMS without a separate login. Our [API development](/services/api-development) service covers how we build and test these integrations.

## Where does AI fit within ASQA's principles?

**ASQA's principles for responsible AI use in VET don't add new rules, but they make clear that decisions affecting students stay with qualified trainers, assessors and staff.** The five principles cover governance, human oversight, secure information handling, equity and alignment with training product and industry requirements.

Reasonable uses include drafting learning materials for trainer review, summarising student questions, helping trainers write feedback, answering prospective student questions from published course information, and checking enrolment documents for completeness with [AI document processing](/services/ai-document-processing). Uses that need care include anything that judges competency, predicts which students to intervene with, or processes sensitive information such as disability details.

## What does a typical engagement look like?

**A common first project is an integration and compliance layer around an existing SMS and LMS, timed with the VET Information Standard transition.** Figures are typical Australian market ranges for an onshore senior team (AUD, ex GST), labelled as ranges, not quotes; the basis is in our [custom software cost guide](/guides/custom-software-development-cost-australia).

| Project | Typical timeline | Typical range (AUD, ex GST) |
|---|---|---|
| Discovery: systems map, data flows, transition impact, fixed price | 2 to 4 weeks | $10,000 to $25,000 |
| SMS to LMS integration with outcome sync | 6 to 10 weeks | $30,000 to $80,000 |
| Custom enrolment portal with eligibility logic and USI verification | 8 to 14 weeks | $50,000 to $120,000 |
| Trainer credential and compliance evidence dashboard | 6 to 10 weeks | $30,000 to $70,000 |
| Custom SMS with STARS, USI and PRISMS integration | 9 to 18 months | Scoped individually, typically well above $300,000 |

If you're an edtech company building an SMS or LMS product for the sector, our [SaaS development](/services/saas-development) service and [SaaS cost guide](/guides/saas-development-cost-australia) are the better starting points.

## How All Webbed Labs approaches RTO software

We start with a paid discovery that maps your SMS, LMS and reporting pathway and checks your transition timing before recommending anything, then quote a fixed price. We'll tell you if your SMS supplier already covers what you need. Where we build, code sits in your repository from day one, student data stays in Australian cloud regions by default, and every change passes automated type checks, visual tests and security scans plus a senior engineer's review before release.
