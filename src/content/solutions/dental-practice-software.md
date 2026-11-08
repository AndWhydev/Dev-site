---
title: "Dental practice management software in Australia: case acceptance, claiming and group reporting"
metaTitle: "Dental Practice Management Software Australia: What to Build"
description: "Dental practice software in Australia: what D4W, Praktika and Core Practice cover, HICAPS and CDBS claiming, case acceptance, AI radiographs, group reports."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Most Australian dental practices should keep their practice management system, whether that is Centaur D4W, Praktika, Core Practice or Exact, and spend custom budget on the gaps around it: treatment plan presentation and follow up so more accepted plans turn into booked appointments, recall and cancellation fill, Child Dental Benefits Schedule tracking, and reporting for groups running different systems at different clinics. AI that reads radiographs to aid diagnosis is a regulated medical device, so buy a TGA included product rather than building one."
takeaways:
  - "Dental claiming runs on item codes from the ADA's Australian Schedule of Dental Services and Glossary; the 13th edition came into effect on 1 July 2022."
  - "The Child Dental Benefits Schedule caps benefits at $1,158 per child over 2 consecutive calendar years at the time of writing, indexed each 1 January, so a balance check before treatment is worth automating."
  - "HICAPS offers software partners API documentation and a sandbox simulator for terminal and digital claiming integrations."
  - "The TGA lists radiology image analysis that aids diagnosis as an example of software regulated as a medical device."
  - "Patient messaging about treatment is health advertising: it must not use testimonials or offer inducements without stating their terms."
faqs:
  - q: "Should we replace D4W or Praktika with custom software?"
    a: "Almost never. A practice management system holds the appointment book, charting, item codes, claiming and imaging links, and its vendor keeps it current for every practice. Rebuilding that is a large, ongoing cost. Custom software belongs in the gaps: case acceptance, recall fill, group reporting and integrations the vendor doesn't offer."
  - q: "Can our own app push claims to HICAPS?"
    a: "HICAPS works with software partners on terminal and digital integrations and provides API documentation, a sandbox simulator and testing support. In most practices the claiming integration already lives in the practice management system, so a custom tool usually reads claim results rather than sending claims itself. We would confirm the right route with HICAPS and your PMS vendor first."
  - q: "How do we track a child's CDBS balance?"
    a: "Services Australia says to check a patient's eligibility and balance before providing services, through Health Professional Online Services (HPOS) or by phone. A custom tool can flag children with likely eligibility at booking and remind staff to check, then hold the result against the treatment plan so the family isn't surprised by a gap."
  - q: "Can we use AI to read our radiographs?"
    a: "Yes, through a product included in the Australian Register of Therapeutic Goods for that purpose. The TGA regulates software intended to aid diagnosis from images as a medical device, so a practice or developer building its own would take on manufacturer obligations. AI that drafts patient letters or summarises a treatment plan is a different, lower risk category."
  - q: "Can our follow up messages include patient reviews?"
    a: "Be careful. The Dental Board's advertising guidance says advertising of a regulated health service must not use testimonials, must not be misleading, and must state the terms of any gift, discount or inducement. Treatment plan reminders and recall messages should stick to the facts of the plan, cost and next step."
  - q: "What does a treatment plan portal cost?"
    a: "As an indicative market range, a treatment plan portal with electronic signature and payment plan options runs about $30,000 to $80,000 (AUD, ex GST), driven mostly by how it connects to your practice system and payments provider. That is a planning range, not a quote."
sources:
  - title: "Schedule and Glossary"
    url: "https://ada.org.au/services/schedule-glossary"
    publisher: "Australian Dental Association"
  - title: "Child Dental Benefits Schedule features (health professionals)"
    url: "https://www.servicesaustralia.gov.au/child-dental-benefits-schedule-features"
    publisher: "Services Australia"
  - title: "HICAPS Integrations for Software Partners"
    url: "https://www.hicaps.com.au/partners/hicaps-integrations"
    publisher: "HICAPS"
  - title: "Artificial intelligence (AI) and medical device software regulation"
    url: "https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation"
    publisher: "Therapeutic Goods Administration"
  - title: "Software-based medical device exclusions"
    url: "https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/overview/software-based-medical-device-exclusions"
    publisher: "Therapeutic Goods Administration"
  - title: "Advertising a regulated health service"
    url: "https://www.dentalboard.gov.au/Codes-Guidelines/Advertising-a-regulated-health-service.aspx"
    publisher: "Dental Board of Australia"
  - title: "Meeting your professional obligations when using Artificial Intelligence in healthcare"
    url: "https://www.ahpra.gov.au/Resources/Artificial-Intelligence-in-healthcare.aspx"
    publisher: "Ahpra"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "AI in healthcare: privacy, TGA rules and My Health Record"
    href: "/solutions/ai-in-healthcare"
  - title: "AI receptionist cost in Australia"
    href: "/guides/ai-receptionist-cost-australia"
  - title: "Healthcare software"
    href: "/industries/healthcare"
  - title: "Build vs buy software"
    href: "/guides/build-vs-buy-software"
  - title: "Cosmetic and medispa clinic software"
    href: "/solutions/cosmetic-clinic-software"
  - title: "Optometry and audiology practice software"
    href: "/solutions/optometry-audiology-practice-software"
service:
  title: "Workflow automation"
  href: "/services/workflow-automation"
industry:
  title: "Healthcare"
  href: "/industries/healthcare"
disclaimer: legal
---

## Why does a dental practice need different software from a medical clinic?

**Because dental revenue runs on item codes claimed chairside, on treatment plans that span several visits, and on patients deciding whether to go ahead, often with a gap to pay.** A GP consult is billed and finished the same day. A dental crown might be quoted in March, accepted in April, financed over six months and completed across three appointments, with a health fund claim at each one.

Every service is coded against the ADA's Australian Schedule of Dental Services and Glossary. The current 13th edition came into effect on 1 July 2022, according to the ADA. Practice systems carry those codes, health funds pay against them, and any custom tool that reports on revenue or treatment has to speak the same codes.

That shapes where custom work pays. The appointment book and charting are solved problems. The leakage happens between a dentist presenting a plan and the patient booking the first appointment, between a cancellation and a filled chair, and between clinics in a group that can't be compared because they run different systems.

## What do the main dental systems cover, and what stays locked?

**The practice management system is the source of truth for patients, appointments, charting and claims; integration depends on what each vendor exposes and allows.**

| System | Integration question to ask the vendor |
|---|---|
| Centaur D4W and Dental4Web | Read access for reporting, and whether outside tools can write appointments |
| Praktika | API scope, rate limits and data export for warehousing |
| Core Practice | Which events and records are available to third parties |
| Exact (Henry Schein One) | Database access terms and supported partners |
| Oasis | Reporting access and export formats |

We don't publish integration claims for these products because terms change and vary by contract. The first step on any dental project is getting the vendor's current answer in writing, which we do in the Discovery Audit. Where direct access is limited, scheduled exports or a reporting database the vendor supports can still feed a custom layer. The integration patterns sit in our [API development](/services/api-development) service.

## How do you get more treatment plans accepted?

**Make the plan easy to understand at home, make the cost clear, and follow up on a schedule, because most patients decide after they leave the chair.** A printed estimate with item codes means little to a patient. A plan they can open on their phone, with plain descriptions, the expected health fund rebate, the gap, payment options and a button to book the first visit, gives them what they need to say yes.

A case acceptance portal usually includes:

1. The plan pulled from the practice system, with each item described in plain English next to its code.
2. Estimated fund rebate and gap per item, labelled as an estimate until claimed.
3. Payment plan or finance options the practice already offers.
4. Electronic signature for consent and financial agreement.
5. A booking link straight into the appointment book.
6. A follow up sequence that stops the moment the patient books or declines.
7. A dashboard of presented, accepted and booked plans by dentist.

The messages count as health advertising. The Dental Board's advertising guidance says advertising must not be false or misleading, must not use testimonials, must not create an unreasonable expectation of beneficial treatment, and must state the terms of any gift, discount or inducement. Keep follow ups factual: the plan, the cost, the next step.

## Where can claiming be automated?

**Chairside claiming through HICAPS or Tyro Health is already automated inside the practice system; the custom opportunity is checking eligibility before treatment and reconciling results after it.** HICAPS says it gives software partners online API documentation, a sandbox simulator for test payloads and invoices, and support through testing and release. That is the route for a product vendor. A practice's own tool more often reads claim outcomes for reporting than sends claims itself.

The Child Dental Benefits Schedule is where small automation helps most. Services Australia states that at the time of writing CDBS benefits are capped at $1,158 over 2 consecutive calendar years, indexed each 1 January, with the two year period starting at the child's first eligible service. Children aged 0 to 17 qualify if they are Medicare eligible and their family receives certain government payments, and practices are told to check eligibility and balance through HPOS before treating. The CDBS doesn't cover orthodontic or cosmetic work or services in hospital.

A useful tool flags likely CDBS patients when they book, prompts the eligibility check, records the balance against the treatment plan and warns when planned items will exceed it.

## How do you fill a cancelled chair?

**Keep a short notice list of patients who want an earlier appointment and contact them automatically, in order, the moment a gap opens.** An empty chair costs the dentist, nurse and room for that hour. The workflow is simple to describe and fiddly to build well:

- Patients opt in to short notice offers, with the days and times they can do.
- A cancellation in the practice system triggers offers by SMS, one patient at a time or in small batches.
- The first patient to accept is booked; everyone else gets a polite "filled" message.
- Recalls overdue by a set period are added to the list automatically.
- Staff see each attempt, so nobody double books by phone.

Voice handling of after hours cancellations is a separate decision; our [AI receptionist cost guide](/guides/ai-receptionist-cost-australia) covers it, and [workflow automation](/services/workflow-automation) covers the messaging logic.

## Can AI read radiographs?

**It can, but software intended to aid diagnosis from images is regulated by the TGA as a medical device, so a practice should buy a product included in the ARTG for that purpose rather than commission one.** The TGA lists radiology image analysis that aids diagnosis among its examples of regulated software, and it publishes a list of AI enabled devices in the ARTG. Overseas tools such as Pearl and Overjet are marketed for dental imaging; check the ARTG and the vendor's Australian sponsor before relying on any of them here.

Software whose sole purpose is storing or transmitting images can fall under a TGA exclusion. Writing a patient friendly summary of a treatment plan, or drafting a referral letter for the dentist to check, is also a different category. AHPRA's guidance still applies: the dentist stays accountable and must check what the tool produces. Our [AI in healthcare](/solutions/ai-in-healthcare) page explains the intended purpose test in more detail.

## One view across a group on mixed systems

**Dental groups often grow by acquisition, so clinics arrive on different systems, and the owner loses the ability to compare them.** A reporting warehouse pulls appointments, production, collections, plan acceptance and recall rates from each system on a schedule, maps them to shared definitions and item code groups, and shows each clinic and dentist on the same measures. Migrating every clinic to one system is the alternative; it is often the better long term answer, and the warehouse helps prove which clinics to move first.

## What do dental builds cost?

**Indicative market ranges run from about $15,000 for recall and cancellation automation to $120,000 for a group warehouse across two practice systems (AUD, ex GST).** Conduct's 2026 guide puts mid sized Australian agencies at about $150 to $330 an hour, so $60,000 buys roughly 180 to 400 hours.

| Build | Indicative range (AUD, ex GST) | Main cost driver |
|---|---|---|
| Recall and cancellation fill automation | $15k to $45k | Practice system access, SMS provider, booking write back |
| Treatment plan portal with electronic signature and payment plans | $30k to $80k | Plan data access, payments and finance integration |
| Group reporting warehouse across two practice systems | $40k to $120k | Number of systems, data quality, shared definitions |

These are planning ranges, not quotes, and exclude ongoing hosting, SMS and vendor fees.

## How AWLabs approaches dental projects

We check first whether your practice system or an existing add on already does the job. If custom work is justified, every build starts with our Discovery Audit, a fixed fee credited in full against the build, where we get your vendor's integration terms in writing. You then receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates arrive every Tuesday and Friday, Sydney time, and code and IP are assigned to you as they are paid for. We haven't yet delivered a project for a dental practice; your dentists and advisers own the clinical, advertising and regulatory decisions, and we build to them. Related reading: [healthcare software](/industries/healthcare) and [build vs buy software](/guides/build-vs-buy-software).
