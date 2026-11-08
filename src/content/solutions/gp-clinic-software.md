---
title: "GP practice software in Australia: what to build around Best Practice and MedicalDirector"
metaTitle: "GP Practice Software Australia: Build Around Bp and MD"
description: "GP practice software in Australia: integrating with Bp Premier and MedicalDirector, chronic condition plan recalls, AI scribes, PIP QI and group reporting."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "A GP clinic should not replace Best Practice or MedicalDirector. Those systems own the clinical record, billing and prescribing, and they carry the conformance work for every practice that uses them. Custom software earns its place around them: recall workflows for GP chronic condition management plans, reporting across several clinics, booking and reminder logic the off the shelf tools don't cover, and AI note tools that clinicians check before anything enters the record. Integration goes through each vendor's approved partner route, so confirm access before you budget."
takeaways:
  - "From 1 July 2025 the GP chronic condition management plan (GPCCMP) replaced GP management plans and team care arrangements, and patients registered in MyMedicare must get these services from the practice where they are registered."
  - "A patient needs a GPCCMP prepared or reviewed in the previous 18 months to access Medicare allied health services, which makes recall tracking a revenue and care issue at once."
  - "Best Practice admits third party integrators through its Bp Partner Network after a review, with partners moving to Halo Connect; budget for that approval before promising direct database access."
  - "RACGP and AHPRA expect patient consent before an AI scribe is used and a GP check of every note it drafts."
  - "Practices in the PIP QI Incentive submit the PIP Eligible Data Set to their PHN quarterly, so a dashboard built on the same extract costs little extra to keep current."
faqs:
  - q: "Can custom software read and write directly to our Bp Premier database?"
    a: "Only through Best Practice's approved route. Third party products are enabled in Bp Premier's third party integrations screen after the vendor has joined the Bp Partner Network, and Best Practice says partners are moving to Halo Connect as the integration layer. If a product isn't approved, the realistic options are reports and exports the practice already has, or a supported integration partner. We confirm the route in the Discovery Audit before you get a fixed price."
  - q: "Do we need MyMedicare for chronic condition management plans?"
    a: "If the patient is registered in MyMedicare, the GPCCMP has to be billed by a GP or prescribed medical practitioner at the practice where they are registered. If they aren't registered, the plan is billed by their usual medical practitioner or someone at the same practice. Your recall logic should know which rule applies to each patient."
  - q: "Should we build our own AI scribe?"
    a: "Usually not. Products such as Heidi Health and Lyrebird Health already exist, and a single clinic will rarely beat them on cost. A custom tool makes sense for a group with a specific need: Australian hosting the group controls, a letter or care plan format no product supports, or summaries pulled from several systems. Either way, consent and a GP check of every note stay mandatory."
  - q: "Can we replace HotDoc or HealthEngine with our own booking system?"
    a: "You can, but compare the subscription cost against building, hosting and maintaining it, plus the patient traffic a marketplace brings. Most clinics are better keeping the booking product and building around it, for example a recall campaign that books into the same appointment book. A group with its own patient app may justify a branded booking flow."
  - q: "Is patient data allowed to leave Australia?"
    a: "The Privacy Act doesn't ban it outright, but you stay accountable for an overseas recipient's handling of health information, some states add their own health records laws, and RACGP tells GPs to check whether an AI scribe processes or stores data overseas. We host in Australian cloud regions by default."
  - q: "What does a GP group dashboard cost?"
    a: "As an indicative market range, a group dashboard built on clinical and billing extracts runs about $25,000 to $70,000 (AUD, ex GST), depending on the number of sites, data sources and how clean the data is. That is a range for planning, not a quote."
sources:
  - title: "MBS billing rules for GP chronic condition management plans"
    url: "https://www.servicesaustralia.gov.au/mbs-billing-rules-for-gp-chronic-condition-management-plans"
    publisher: "Services Australia"
  - title: "Changes to MBS chronic disease management from 1 July 2025"
    url: "https://swsphn.com.au/news/changes-to-mbs-cdm-1-july-2025/"
    publisher: "South Western Sydney PHN"
  - title: "MyMedicare"
    url: "https://www.health.gov.au/our-work/mymedicare"
    publisher: "Department of Health, Disability and Ageing"
  - title: "Practice Incentives Program Quality Improvement Incentive"
    url: "https://www.health.gov.au/our-work/practice-incentives-program-quality-improvement-incentive"
    publisher: "Department of Health, Disability and Ageing"
  - title: "Best Practice Software Partner Network"
    url: "https://kb.bestpracticesoftware.com/bppremier/oxford/Management/PartnerNetwork.htm"
    publisher: "Best Practice Software"
  - title: "Artificial intelligence (AI) scribes"
    url: "https://www.racgp.org.au/running-a-practice/technology/business-technology/artificial-intelligence-ai-scribes-fact-sheet"
    publisher: "RACGP"
  - title: "Meeting your professional obligations when using Artificial Intelligence in healthcare"
    url: "https://www.ahpra.gov.au/Resources/Artificial-Intelligence-in-healthcare.aspx"
    publisher: "Ahpra"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "AI in healthcare: privacy, TGA rules and My Health Record"
    href: "/solutions/ai-in-healthcare"
  - title: "Specialist medical practice software"
    href: "/solutions/specialist-medical-practice-software"
  - title: "Healthcare software"
    href: "/industries/healthcare"
  - title: "Using personal information in AI systems under the Privacy Act"
    href: "/guides/privacy-act-and-ai"
  - title: "How much does a telehealth app cost to build in Australia?"
    href: "/guides/telehealth-app-cost"
  - title: "Pharmacy software and apps in Australia"
    href: "/solutions/pharmacy-software"
service:
  title: "Data analytics"
  href: "/services/data-analytics"
industry:
  title: "Healthcare"
  href: "/industries/healthcare"
disclaimer: legal
---

## Where does custom software fit in a GP clinic?

**Around the clinical system, never instead of it.** Best Practice (Bp Premier and Bp Omni), MedicalDirector (Clinical and Helix) and Zedmed handle the record, Medicare billing, prescribing and secure messaging. They also carry the conformance burden for My Health Record and electronic prescribing on behalf of every practice. Rebuilding any of that would cost a practice far more than the licence and leave it with the compliance work.

The gaps show up in the same places in most clinics we would talk to. Practice managers keep recall lists in spreadsheets because the clinical system flags a patient but doesn't chase them. Owners of three or four clinics export reports from each site and paste them together. Nurses track care plan reviews on a whiteboard. Online booking tools fill the diary but don't know which patients are overdue for a review. Each of those is a narrow, buildable problem.

| Clinic problem | Off the shelf answer | Where custom work starts |
|---|---|---|
| Patients overdue for a care plan review | Clinical system recall flags, Cubiko | Recall queue that spans SMS, nurse tasks and booking, with outcome tracking |
| Reporting across several clinics | Pen CS CAT4, Cubiko, vendor reports | One warehouse across sites and billing, with measures the owner defines |
| Booking and reminders | HotDoc, HealthEngine | Booking rules tied to recalls, a group's own patient app |
| Documentation load | Heidi Health, Lyrebird Health | Group controlled, Australian hosted summaries in your own templates |
| Referrals and results | Healthlink, Medical Objects | Intake triage and task routing on top of secure messaging |

If a product in the middle column already solves your problem, buy it. Our [build vs buy guide](/guides/build-vs-buy-software) sets out the general test.

## How far can you integrate with Bp Premier and MedicalDirector?

**As far as the vendor's partner program allows, and no further.** Best Practice runs the Bp Partner Network, which it describes as a program that formalises its relationship with technology vendors that build integrated products. Partners are admitted after a review process, then get credentials to a developer portal with schemas, APIs and connection details. A practice enables an approved partner in Bp Premier under Setup, Configuration, Database, third party integrations. Best Practice also says partners are moving to Halo Connect as the integration layer.

MedicalDirector and Zedmed have their own partner arrangements and terms, which we would confirm directly with each vendor for your clinic. Three practical consequences follow:

1. **Approval comes first.** A custom tool that needs live read or write access to the clinical database needs an approved route before a line of code is written.
2. **Read access is easier than write access.** Reporting and recall tools mostly read. Writing appointments or notes back into the record carries more risk and more vendor scrutiny.
3. **Fallbacks exist.** Where direct access isn't available, scheduled report exports, the booking product's API or a data extraction tool the practice already runs can feed a custom layer.

The API patterns behind this sit in our [API development](/services/api-development) service.

## The chronic condition plan recall: the workflow most worth building

**Since 1 July 2025, one GP chronic condition management plan has replaced GP management plans and team care arrangements, and the recall around it is now one of the clearest custom builds in general practice.** The old GPMP, TCA and review items ceased on that date. South Western Sydney PHN's summary of the changes notes that plans can still be prepared once every 12 months if needed and reviewed every three months, and that patients with older plans could keep using them for two years, with a GPCCMP required for ongoing allied health access from 1 July 2027.

Services Australia's billing rules add the details a recall engine has to know:

- The patient must have a condition present, or likely to be present, for at least 6 months, or a terminal condition.
- Patients registered in MyMedicare must access GPCCMP items from the practice where they are registered. Others go to their usual medical practitioner or someone at the same practice.
- A plan must have been prepared or reviewed in the previous 18 months for the patient to access Medicare allied health services.
- GPCCMP items and general attendance items can't be billed for the same patient on the same day.

A good recall workflow reads plan and review dates from the clinical system, works out who is due, overdue or about to lose allied health access, and sends each patient down the right path: an SMS with a booking link, a nurse call task, or a flag for the GP at the next visit. It records every attempt so the practice can show what it did. The rules belong in configuration, not code, because the MBS changes.

## AI scribes: consent, checking and where the data goes

**RACGP and AHPRA agree on the basics: get the patient's consent before the scribe listens, check every note before it enters the record, and know where the audio and text are processed.** AHPRA's guidance says practitioners remain accountable, must apply human judgement to any AI output, and must check scribed records for accuracy. It also warns that recording a consultation without consent may carry criminal implications in some states.

RACGP's fact sheet on AI scribes goes further for practices. It suggests a practice policy naming which scribes are permitted, an updated privacy policy, consent at the start of each consultation (in writing if your medical defence organisation requires it, otherwise verbal and noted in the record), a review of each note as soon as possible after the consultation, and a check of whether the vendor processes or stores data outside Australia.

For a single clinic, an established scribe product is usually the right buy. A custom build is worth considering when a group wants summaries in its own care plan or letter templates, data held in an Australian region the group controls, or one tool across clinics running different clinical systems. Our [AI in healthcare](/solutions/ai-in-healthcare) page explains why a scribe that only summarises generally sits outside TGA regulation, and how adding diagnosis suggestions changes that. For private hosting, see [private LLM deployment](/services/private-llm-deployment).

## Dashboards a practice owner will actually open

**Most owners need five or six numbers per clinic, refreshed daily, not a hundred charts.** The PIP QI Incentive already obliges participating practices to submit the PIP Eligible Data Set to their PHN quarterly from the clinical information system, so the extraction habit and data exist. A custom layer adds the measures that run the business:

- Appointment utilisation and gaps by GP and session.
- Care plans due, overdue and completed, per clinic.
- Billings by item group, against the previous period.
- Patients at risk of losing allied health access.
- Recall campaign outcomes: sent, booked, attended.
- PIP QI improvement measures on the same screen, so quality and revenue are read together.

The warehouse behind this is standard [data analytics](/services/data-analytics) work. The hard part is agreeing definitions across clinics, not the charts.

## What do these builds cost?

**Indicative market ranges for a GP clinic or group run from about $25,000 for a focused dashboard to $180,000 for a privately hosted AI note tool (AUD, ex GST).** Conduct's 2026 cost guide puts mid sized Australian agencies at roughly $150 to $330 an hour, so a $40,000 build buys somewhere between 120 and 270 hours of work.

| Build | Indicative range (AUD, ex GST) | What drives the cost |
|---|---|---|
| Group dashboard from clinical and billing extracts | $25k to $70k | Number of sites and systems, data cleaning, measure definitions |
| Chronic condition plan recall workflow with SMS and clinical system integration | $30k to $90k | Integration route, booking product API, staff task design |
| Australian hosted AI note summariser with clinician sign off | $60k to $180k | Templates, evaluation, hosting, security review |

These are planning ranges, not quotes. Ongoing hosting, vendor fees and maintenance sit on top. Our [custom software cost guide](/guides/custom-software-development-cost-australia) explains the drivers in more depth.

## How AWLabs approaches GP clinic projects

We start by checking whether your clinical system, booking product or an existing tool can do the job, and say so if it can. If custom work is justified, every build starts with our Discovery Audit, a fixed fee credited in full against the build, where we confirm the integration route with Best Practice or MedicalDirector before anything is priced. You then receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates arrive every Tuesday and Friday, Sydney time, and code and IP are assigned to you as they are paid for. We haven't yet delivered a project for a general practice, and we aren't a Bp Partner; your practice owner, clinicians and advisers own the clinical and regulatory decisions, and we build to them. See also our [specialist practice software](/solutions/specialist-medical-practice-software) page and the [healthcare](/industries/healthcare) industry page.
