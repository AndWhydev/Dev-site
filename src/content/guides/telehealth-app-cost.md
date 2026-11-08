---
title: "How much does a telehealth app cost to build in Australia?"
metaTitle: "Telehealth App Development Cost in Australia (2026)"
description: "Telehealth app costs in Australia: video API vs Coviu and Healthdirect, Medicare telehealth rules, eScripts conformance, TGA limits and 3 year totals."
eyebrow: "Cost guide"
category: cost
published: 2026-11-08
updated: 2026-11-08
summary: "A branded telehealth booking and video portal built on an embedded video provider typically costs $30k to $70k (AUD, ex GST) in Australia. A platform with electronic prescribing, Medicare billing and practitioner apps is typically $120k to $300k, and a multi specialty platform with asynchronous care and clinical integrations $300k to $700k or more. Video itself is cheap: at published API rates it is cents per consult. The cost sits in booking, records, prescribing integration and privacy. These are market ranges and worked examples at an assumed $1,100 to $1,500 agency day rate, not quotes."
takeaways:
  - "Check first whether Coviu (from $48 a month ex GST per user) or Healthdirect Video Call (no cost to general practices) already does the job."
  - "Video API minutes cost very little. Booking, intake, notes, prescribing and billing integration are where the budget goes."
  - "Medicare GP telehealth generally needs a face to face visit in the previous 12 months, and the Medical Board does not support prescribing without a real time consultation. Both shape the product."
  - "Do not build your own prescribing. Integrate software on the Australian Digital Health Agency's electronic prescribing conformance register."
  - "Health service providers are covered by the Privacy Act regardless of turnover, so privacy and security work is part of every telehealth build."
faqs:
  - q: "How much does it cost to build a telehealth app?"
    a: "As worked examples at an assumed $1,100 to $1,500 a day, a booking and video portal using an embedded video provider is typically $30k to $70k ex GST, a platform with prescribing integration, Medicare billing and practitioner apps $120k to $300k, and a multi specialty platform with asynchronous care, AI intake and clinical integrations $300k to $700k or more."
  - q: "What does the video part cost per consult?"
    a: "At published rates at the time of writing, Twilio Video charges US$0.004 per participant per minute, so a 20 minute consult with two participants costs about US$0.16. Daily starts with 10,000 included minutes a month. Video minutes are rarely the expensive part of a telehealth product."
  - q: "Can patients claim Medicare for telehealth?"
    a: "Many telehealth services are ongoing Medicare items. For GP telehealth, the Department of Health says the patient must generally have had a face to face consultation with the GP, or another GP in the same practice, in the 12 months before the telehealth service, with limited exceptions. Check the current item rules on MBS Online before you design billing."
  - q: "Can we build an app that prescribes from a questionnaire?"
    a: "The Medical Board of Australia's telehealth guidelines say prescribing or providing healthcare without a real time direct consultation, in person, by video or by phone, is not good practice and is not supported by the Board. Design asynchronous intake to lead into a real time consultation rather than replace it."
  - q: "Is a telehealth app a medical device?"
    a: "Usually not, if it only enables communication, booking and records. The TGA lists 15 categories of excluded software, including communications software and electronic health records. Software that diagnoses, recommends treatment or analyses patient data for a clinical purpose may be a medical device and need ARTG inclusion."
  - q: "Should we use Healthdirect Video Call instead of building?"
    a: "If you are eligible, consider it first. Healthdirect says Video Call is provided without cost to general practices, Aboriginal Medical Services and ACCHOs, and that several other practice types may be eligible. A custom product makes sense when telehealth is the service you sell, or must be embedded in your own patient journey."
sources:
  - title: "Coviu pricing (Australia)"
    url: "https://www.coviu.com/en-au/pricing"
    publisher: "Coviu"
  - title: "healthdirect Video Call"
    url: "https://about.healthdirect.gov.au/video-call"
    publisher: "Healthdirect Australia"
  - title: "Twilio Video pricing"
    url: "https://www.twilio.com/en-us/video/pricing"
    publisher: "Twilio"
  - title: "Daily Video SDK pricing"
    url: "https://www.daily.co/pricing/video-sdk"
    publisher: "Daily"
  - title: "Telehealth"
    url: "https://www.health.gov.au/topics/health-technologies-and-digital-health/about/telehealth"
    publisher: "Department of Health, Disability and Ageing"
  - title: "Guidelines: Telehealth consultations with patients"
    url: "https://www.medicalboard.gov.au/codes-guidelines-policies/telehealth-consultations-with-patients.aspx"
    publisher: "Medical Board of Australia"
  - title: "Registers (including the Electronic Prescribing Conformance Register)"
    url: "https://www.digitalhealth.gov.au/about-us/policies-privacy-and-reporting/registers"
    publisher: "Australian Digital Health Agency"
  - title: "Software based medical device exclusions"
    url: "https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/overview/software-based-medical-device-exclusions"
    publisher: "Therapeutic Goods Administration"
  - title: "Small business and the Privacy Act"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business"
    publisher: "Office of the Australian Information Commissioner"
  - title: "HRIP Act"
    url: "https://www.ipc.nsw.gov.au/privacy/nsw-privacy-laws/hrip"
    publisher: "Information and Privacy Commission NSW"
related:
  - title: "AI in healthcare"
    href: "/solutions/ai-in-healthcare"
  - title: "Psychology practice software"
    href: "/solutions/psychology-practice-software"
  - title: "GP clinic software"
    href: "/solutions/gp-clinic-software"
  - title: "How much does it cost to build an app in Australia?"
    href: "/guides/app-development-cost-australia"
service:
  title: "Web and mobile app development"
  href: "/services/web-mobile-apps"
disclaimer: financial
---

## What are you actually paying for in a telehealth product?

**A telehealth product is a booking system, a patient record, a video room and a billing flow joined together, and the video room is the cheapest of the four.** Founders often price the video and underestimate the rest. This is what an Australian telehealth product usually needs, and where each line lands:

| Component | What it involves | Relative cost |
|---|---|---|
| Booking and payments | Practitioner availability, appointment types, reminders, card capture, cancellations | Medium |
| Intake and consent | Forms before the visit, identity details, consent to telehealth and to any recording | Low to medium |
| Video | A provider such as Twilio or Daily, or an embedded product such as Coviu; waiting room; join links by SMS or email | Low if embedded or API based |
| Clinical notes and documents | Notes, referrals, letters, or export to the practice's existing clinical system | Medium to high |
| Prescribing | Integration with conformant electronic prescribing software | Medium, plus vendor terms |
| Medicare and health fund billing | Item numbers, eligibility checks, claiming through a channel the practice already uses | Medium to high |
| Privacy and security | Access controls, audit logs, data location decisions, breach readiness | Always present |
| Practitioner app | Schedule, notes and calls on mobile | High if native iOS and Android |

If a practice simply needs video consults, it should not build any of this. The question is whether telehealth is a feature of your practice or the service you are selling.

## Should you embed Coviu or Healthdirect, or build on a video API?

**Use an existing telehealth product when you are a practice adding video; build on a video API when the patient journey itself is your product.** Published prices at the time of writing (November 2026):

| Option | Published price | Notes |
|---|---|---|
| Coviu Individual | $48 a month per user, or $40 on annual billing, ex GST | Waiting area, payment capture, consent forms |
| Coviu Clinic | $64 a month per clinician, or $54 annual, ex GST | Shared reception, admin users included |
| Coviu AI Scribe | An extra $79 per clinician | Sold as an add on to any plan |
| healthdirect Video Call | Provided without cost to general practices, AMS and ACCHOs | Funded by the Australian Government and several states; other practice types may be eligible |
| Twilio Video API | US$0.004 per participant per minute | Recording and transcription billed separately |
| Daily Video SDK | 10,000 minutes a month included, then per participant minute | Volume discounts published |

The arithmetic is telling. A 20 minute consult between a clinician and a patient is 40 participant minutes, or about US$0.16 on Twilio's published rate. A practice running 1,000 such consults a month spends roughly US$160 on video minutes. The build around the video is what costs real money.

## Which Medicare and Medical Board rules change the design?

**Medicare GP telehealth generally requires an established clinical relationship, and the Medical Board does not support prescribing without a real time consultation, so both rules shape booking and intake logic.** The Department of Health says that to be eligible for GP telehealth services, patients must have had a face to face consultation with their GP, or another GP in the same practice, in the 12 months before the telehealth service, with some limited exceptions. Expanded telehealth became an ongoing part of Medicare on 1 January 2022.

For your software, that means the booking flow needs to know whether a patient is eligible for a bulk billed or rebated telehealth item, and steer ineligible patients to a private fee or an in person visit. Item numbers change, so build the rules as configuration, not code.

The Medical Board of Australia's telehealth guidelines add three design constraints:

1. **No prescribing from forms alone.** The Board says prescribing or providing healthcare without a real time direct consultation, in person, by video or by phone, is not good practice and is not supported.
2. **Consent for recording.** The guidelines expect consent from all participants if a consultation is digitally recorded or uploaded to digital health infrastructure such as My Health Record.
3. **Secure records.** Doctors should use systems that allow secure access to clinical records and secure transmission and storage of notes, prescriptions, referrals and images.

Allied health and psychology services have their own item rules. Our [psychology practice software page](/solutions/psychology-practice-software) covers the session and referral side.

## What does electronic prescribing integration involve?

**Telehealth products should integrate prescribing software that is already conformant, not build a prescribing engine.** The Australian Digital Health Agency publishes an Electronic Prescribing Conformance Register listing software that conforms to the electronic prescribing framework, and says healthcare providers can choose software based on whether it is conformant to legislation. Building and certifying your own would add months and a large compliance budget for little advantage.

Integration usually means launching the prescriber's conformant clinical software from your consult screen, or using a prescribing partner's interface, then recording that a script was issued. Allow two to four weeks of engineering plus the time to agree commercial terms with the vendor.

## Where does software become a TGA regulated medical device?

**Booking, video and records software is generally excluded from TGA regulation, but software that diagnoses, triages or recommends treatment may be a medical device.** The TGA says there are currently 15 categories of excluded software in Schedule 1 of the Therapeutic Goods (Excluded Goods) Determination 2018, including communications software, electronic health records, clinical workflow management and patient surveys. If a product meets the medical device definition and is not excluded, it must be included in the ARTG before supply.

AI intake that suggests a likely condition, or a symptom checker that routes patients by risk, needs a regulatory assessment before you scope it. Our page on [AI in healthcare](/solutions/ai-in-healthcare) covers the TGA position on AI in more depth.

## What privacy obligations apply, and what do they cost?

**Health service providers must comply with the Australian Privacy Principles regardless of turnover, and NSW adds its own health privacy law, so privacy work is part of the base budget.** The OAIC's small business guidance lists health service providers among the businesses covered even with turnover of $3 million or less. In NSW, the Health Records and Information Privacy Act applies to private sector organisations that provide a health service or collect, hold or use health information.

Practical cost lines in a build:

- **Access control and audit logging** for every view of a clinical record: typically 5 to 10 days.
- **Vendor review** of where your video, recording, transcription and email providers store data, and whether that is disclosed in your privacy policy.
- **Independent security testing** before launch. See our [penetration testing cost guide](/guides/penetration-testing-cost-australia).
- **Breach readiness:** logs and processes that let you answer what was accessed and by whom. See [Notifiable Data Breaches and your software](/guides/notifiable-data-breaches-software).

## How much do typical telehealth builds cost?

**Worked at an assumed agency rate of $1,100 to $1,500 a day, telehealth builds run from about $30k for a portal around an embedded video product to $700k or more for a multi specialty platform.** The rate assumption reflects Re:Sourced's July 2026 guide, which puts senior software contractors in Sydney at $800 to $1,100 a day ex GST before agency overheads.

| Build | Typical scope | Effort | Cost range (AUD, ex GST) |
|---|---|---|---|
| Branded booking and video portal | Booking, payments, intake and consent forms, embedded video, reminders, notes export | 25 to 50 days | $30k to $70k |
| Telehealth platform | Above, plus practitioner app, clinical notes, prescribing integration, Medicare billing, admin and reporting | 110 to 200 days | $120k to $300k |
| Multi specialty platform | Several services and practitioner types, asynchronous care, AI intake, integrations with clinical systems and pathology | 250 to 470+ days | $300k to $700k+ |

### Worked example: an online psychology service with eight clinicians

A hypothetical service wants patients to book, complete intake, pay and join a video session from its own site, with notes exported to its existing practice software. Scope: booking with clinician matching (8 days), intake and consent forms (6 days), payments and receipts (5 days), video rooms on Daily with a waiting room (7 days), notes export (6 days), audit logging and access controls (6 days), testing and security fixes (7 days). That is 45 days, or $49,500 to $67,500 ex GST.

## What will it cost over three years?

**For a practice adding video, a subscription product is far cheaper over three years; a custom platform only makes sense when the platform is the business.** Assumptions, not quotes: the eight clinician service above, 800 sessions a month of 50 minutes with two participants, hosting $3k to $6k a year, maintenance at 15% to 20% of build a year, and US dollar costs converted at an assumed A$1.50.

| Option | Year 1 | Years 2 and 3 | 3 year total |
|---|---|---|---|
| Coviu Clinic, 8 clinicians at $54 a month annual | $5.2k | $10.4k | $15.6k |
| Custom portal on Daily (80,000 participant minutes a month, about US$280 after included minutes at an assumed US$0.004 a minute) | $49.5k to $67.5k build, plus $8k to $11k running | $31k to $49k | $89k to $128k |

The custom option costs roughly six to eight times more here. It wins only if the branded journey, matching logic or data ownership is what attracts patients, or if you plan to license the platform to other practices.

## How AWLabs approaches telehealth projects

We begin with a Development Consult, then a paid Discovery Audit, credited in full against the build, that checks whether Coviu, Healthdirect Video Call or your existing practice software already covers the need. If custom is justified, we price it as a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. We agree hosting location and every data flow with you during discovery, and we build to your clinical governance requirements; responsibility for clinical and regulatory compliance stays with the practice. See our [web and mobile app development](/services/web-mobile-apps) service, our [healthcare industry page](/industries/healthcare) and our [GP clinic software page](/solutions/gp-clinic-software).
