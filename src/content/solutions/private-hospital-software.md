---
title: "Private hospital and day surgery software: theatre, credentialing and pre admission"
metaTitle: "Private Hospital and Day Surgery Software in Australia"
description: "Private hospital and day surgery software: NSQHS accreditation evidence, HCP data and health funds, theatre utilisation, VMO credentialing and pre admission."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "A private hospital or day surgery should keep its patient administration system (PAS) and theatre system, and build only where they leave staff working in spreadsheets. The three gaps that come up most are theatre utilisation reporting, credentialing and scope of practice for visiting medical officers, and online pre admission with informed financial consent. Each one feeds evidence the hospital already owes: NSQHS accreditation, state facility licensing and, for hospitals relying on second tier default benefits, Hospital Casemix Protocol data with every claim."
takeaways:
  - "All public and private hospitals and day hospitals must be accredited to the NSQHS Standards; the second edition is still the one in use while a third edition is developed."
  - "NSQHS Actions 1.23 and 1.24 require documented processes to define each clinician's scope of clinical practice and to credential clinicians, which is exactly what a credentialing register has to evidence."
  - "To be second tier default benefits eligible, a private hospital must be accredited, ensure patients can give informed financial consent and give Hospital Casemix Protocol data to insurers with every second tier claim."
  - "In NSW, the Private Health Facilities Regulation 2024 sets 19 classes of facility, and licensing standards can cover practitioner accreditation and the delineation of clinical privileges."
  - "Indicative planning ranges for the three common builds run from about $30,000 to $120,000 each (AUD, ex GST)."
faqs:
  - q: "Should a day surgery replace its patient administration system with custom software?"
    a: "Almost never. The PAS carries admissions, billing, health fund claiming and the data feeds funds and regulators expect, and its vendor maintains those as rules change. Custom software makes sense around it: a pre admission portal that writes into the PAS, a theatre dashboard that reads from it, or a credentialing register the PAS doesn't offer."
  - q: "What is Hospital Casemix Protocol data and why does it matter to our software?"
    a: "HCP data is a standard set of information about each hospital episode that hospitals give to health insurers. The Department of Health, Disability and Ageing makes giving HCP data with every claim a condition of second tier default benefits eligibility. Any system that changes how episodes are recorded, coded or billed has to keep that data complete and consistent."
  - q: "Can a credentialing system automatically check a doctor's AHPRA registration?"
    a: "A credentialing tool can record registration details and prompt staff to verify them against the public register at intake and before expiry. Whether it can query the register automatically depends on what access route is available at the time, so we confirm that in discovery rather than promising it. Either way, the credentialing committee makes the decision, not the software."
  - q: "Will online pre admission forms satisfy informed financial consent?"
    a: "They can deliver the estimate and record the patient's acknowledgement, which is the evidence you need. The content of the estimate, which fees are included and who signs off remain the hospital's decisions. A good portal records which version of the estimate the patient saw, when, and how they accepted it."
  - q: "Is AI allowed to suggest theatre lists or flag deteriorating patients?"
    a: "Scheduling suggestions that a person reviews are an operational tool. Software that analyses patient data to inform a clinical decision may meet the definition of a medical device, and the TGA requires those to be in the ARTG unless exempt or excluded. The clinical decision support exemption was clarified with amendments effective 1 November 2026. Keep clinical AI inside your clinical governance committee's oversight."
  - q: "What does a theatre utilisation dashboard cost?"
    a: "As an indicative planning range, about $30,000 to $90,000 (AUD, ex GST), depending on how many theatre and PAS sources it reads, how clean the timestamps are and how many sites it covers. It is a range for budgeting, not a quote."
sources:
  - title: "National Safety and Quality Health Service Standards"
    url: "https://www.safetyandquality.gov.au/standards/nsqhs-standards"
    publisher: "Australian Commission on Safety and Quality in Health Care"
  - title: "Clinical Governance Standard (Actions 1.23 and 1.24)"
    url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/clinical-governance-standard"
    publisher: "Australian Commission on Safety and Quality in Health Care"
  - title: "Become a second-tier default benefits eligible hospital"
    url: "https://www.health.gov.au/topics/private-health-insurance/operating-rules-for-private-health-insurers-and-providers/become-a-second-tier-default-benefits-eligible-hospital"
    publisher: "Department of Health, Disability and Ageing"
  - title: "Private health facilities: licensing and regulation"
    url: "https://www.health.nsw.gov.au/hospitals/privatehealth/Pages/default.aspx"
    publisher: "NSW Health"
  - title: "Clinical decision support system exemption amendments"
    url: "https://www.tga.gov.au/news/news-articles/clinical-decision-support-system-exemption-amendments"
    publisher: "Therapeutic Goods Administration"
  - title: "Artificial intelligence (AI) and medical device software"
    url: "https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence/manufacturing/artificial-intelligence-ai-and-medical-device-software"
    publisher: "Therapeutic Goods Administration"
  - title: "Small business and the Privacy Act"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business"
    publisher: "OAIC"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "AI in healthcare: privacy, TGA rules and My Health Record"
    href: "/solutions/ai-in-healthcare"
  - title: "Specialist medical practice software"
    href: "/solutions/specialist-medical-practice-software"
  - title: "Radiology and medical imaging software"
    href: "/solutions/radiology-software"
  - title: "Healthcare software"
    href: "/industries/healthcare"
service:
  title: "Enterprise software"
  href: "/services/enterprise-software"
industry:
  title: "Healthcare"
  href: "/industries/healthcare"
disclaimer: legal
---

## What should a private hospital build, and what should it keep?

**Keep the patient administration system and the theatre management module; build the workflows that sit between them and your people.** A PAS, whether a dedicated private hospital product or an enterprise platform, handles admissions, episodes, billing and health fund claiming, and its vendor carries the rule changes that come with those. Replacing it would put the hospital's revenue and its fund data obligations on a new codebase for little gain.

What a PAS rarely does well is show the director of nursing why Theatre 3 ran 40 minutes late every Tuesday, tell the medical advisory committee whose indemnity insurance expires next month, or get a patient to finish their admission forms before they arrive. Those are the jobs this page is about.

## What does accreditation ask your systems to prove?

**Evidence, on demand, that the hospital's governance processes run as documented.** The Australian Commission on Safety and Quality in Health Care says all public and private hospitals, day hospitals and most public dental practices must be accredited to the NSQHS Standards. The second edition remains the one to use while the Commission develops a third edition over several years.

Two actions in the Clinical Governance Standard matter most for software. Action 1.23 requires processes to define each clinician's scope of clinical practice, monitor that they work within it and review it periodically. Action 1.24 requires processes to credential clinicians and to monitor and improve how well credentialing works. Assessors are prompted to check that credentialing is documented in policy and that audits test compliance.

State licensing adds its own layer. In NSW, the Ministry of Health licenses private health facilities under the Private Health Facilities Act 2007. The Private Health Facilities Regulation 2024 specifies 19 classes of facility, and the standards it can prescribe include accreditation of practitioners, delineation of clinical privileges, staffing and quality assurance. Victoria and the other states run their own regimes, so a group operating across borders needs its rules held as configuration per facility.

## Health funds, informed financial consent and HCP data

**For many private hospitals, the health fund relationship shapes the data model more than any clinical rule.** Where a fund has no negotiated agreement with a hospital, the Department of Health, Disability and Ageing says insurers must generally pay second tier default benefits to eligible hospitals. Those benefits are at least 85% of the average charge for equivalent treatment under that insurer's agreements with comparable hospitals in the same state and category.

To be eligible, a hospital must be a private hospital, be accredited, not bill patients for the minimum benefit, ensure patients can give informed financial consent, and agree to give Hospital Casemix Protocol data to insurers with every claim for second tier benefits. Eligibility expires 60 days after the hospital's accreditation expires. Software implications:

- Accreditation expiry dates belong on the same dashboard as revenue, because a lapse affects benefits.
- Informed financial consent needs a record of which estimate the patient saw and when they accepted it.
- Any change to how episodes are captured has to keep HCP data complete, so test the extract, not just the screens.

## Theatre time: where most of the custom value sits

**A theatre utilisation dashboard pays for itself only if surgeons, anaesthetists and nursing managers agree what the numbers mean.** The raw material is timestamps the theatre system already records: patient in, anaesthetic start, knife to skin, closure, patient out. The disputes are about definitions. Is a list that started late because the surgeon arrived late the same problem as one that started late because the previous patient's bed wasn't ready?

A useful build reads those timestamps nightly and shows, per list, session and surgeon:

1. Booked time against used time, including overruns.
2. First case start delay and its recorded reason.
3. Turnover time between cases.
4. Cancellations on the day, split by patient, clinical and hospital causes.
5. Sessions released late, which a waiting surgeon could have used.

The analysis behind this is standard [data analytics](/services/data-analytics) work. What makes it stick is a short list of measures the medical advisory committee has signed off.

## Credentialing visiting medical officers without the spreadsheet

**A credentialing register links each VMO to the procedures they are approved to perform, the evidence behind that approval, and the dates it lapses.** In most hospitals that evidence lives in email attachments and a spreadsheet maintained by one administrator. When that person is on leave, nobody can say with confidence whether a surgeon booked for Thursday is still within scope.

| Record | What the register holds | Who acts on it |
|---|---|---|
| Registration | AHPRA registration type, conditions and expiry | Medical administration verifies at intake and renewal |
| Indemnity | Insurer, cover period and certificate | Alert 60 days before expiry |
| Scope | Approved procedures, mapped to the hospital's service capability | Credentialing committee approves and reviews |
| Supervision | Clinicians expanding scope or under oversight | Head of department records outcomes |
| Booking check | Procedure booked against approved scope | Theatre booking flags a mismatch before the list is published |

The last row is where the register earns its keep. A booking that falls outside a surgeon's approved scope is caught at the point of booking, not after the case. Our [enterprise software](/services/enterprise-software) service covers the approvals, audit trail and role based access this needs.

## Pre admission patients will actually finish

**Online pre admission works when it is short, saves as the patient goes, and hands nurses a summary instead of a stack of forms.** The usual flow has a health questionnaire, medication list, fund details, consent to share information with the treating team, and the financial estimate. The nursing pre admission team then triages which patients need a call, a clinic visit or nothing further.

The basics of any long web form apply: one question per screen on a phone, plain language, and the ability to stop and come back. Two points are specific to hospitals. The questionnaire should flag answers that need a nurse, such as anticoagulants or a history of anaesthetic problems, rather than leaving every form for manual review. And every write into the PAS should be logged, because pre admission data becomes part of the clinical record.

Private hospitals are covered by the Privacy Act regardless of turnover, as the OAIC lists private hospitals and day surgeries among health service providers. Host in an Australian region and keep audit logs. Our guide to the [Privacy Act and AI](/guides/privacy-act-and-ai) covers the rules for using that data in AI systems.

## AI that fits inside clinical governance

**Operational AI is the safe starting point; clinical AI belongs in front of the clinical governance committee.** Reasonable first uses include summarising pre admission questionnaires for the nurse who reviews them, drafting theatre list suggestions that a booking officer approves, and reading referral letters into structured fields.

Anything that analyses patient information to support a diagnosis or treatment decision may be a medical device. The TGA says medical devices generally must be included in the ARTG unless excluded or exempt. On 8 September 2026 it announced amendments to the clinical decision support system exemption, effective 1 November 2026, which clarify when the exemption applies without changing its scope. Our [AI in healthcare](/solutions/ai-in-healthcare) page explains those lines in more detail.

## Indicative costs

**These are indicative planning ranges for the Australian market, not quotes.** Conduct's cost guide puts mid sized Australian agencies at roughly $150 to $330 an hour, so a $60,000 build buys somewhere between about 180 and 400 hours.

| Build | Indicative range (AUD, ex GST) | What moves the number |
|---|---|---|
| Online pre admission portal writing into the PAS | $40k to $120k | PAS integration route, form logic, nurse triage rules |
| Theatre utilisation dashboard | $30k to $90k | Number of sources and sites, timestamp quality, agreed definitions |
| VMO credentialing and scope register with booking checks | $40k to $110k | Integration with theatre booking, approval workflow, data migration |

Hosting, PAS vendor interface fees and ongoing support sit on top. The [custom software cost guide](/guides/custom-software-development-cost-australia) explains the drivers.

## How AWLabs would run a hospital project

We would start with a Development Consult, a 15 minute call to understand the problem, and then a paid Discovery Audit, whose fee is credited in full against the build. The audit confirms what your PAS and theatre vendors allow by way of integration before anything is priced. You then get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete.

Senior engineers lead every build, you get updates every Tuesday and Friday during Sydney business hours, and code is assigned to you as it is paid for. We haven't yet delivered a project for a private hospital or day surgery. Your clinical governance, medical advisory and credentialing committees own every clinical and regulatory decision, and we build to them. For practices that feed your theatres, see our [specialist practice software](/solutions/specialist-medical-practice-software) page.
