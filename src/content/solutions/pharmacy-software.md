---
title: "Pharmacy software and apps in Australia: what to build around your dispense system"
metaTitle: "Pharmacy Software and Apps in Australia: Build or Buy?"
description: "Pharmacy software in Australia: dispense and POS, eScripts and the Active Script List, RTPM, AIR vaccination reporting, customer apps and group reporting."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Community pharmacies should keep their dispense and point of sale software, because products such as Fred Dispense Plus, Z Dispense, Minfos and LOTS carry the electronic prescribing conformance, PBS claiming and real time prescription monitoring connections that no single pharmacy wants to own. Custom software pays off around them: reporting across a banner group's stores, booking and record keeping for vaccinations and other professional services, and branded customer apps. Any app that touches electronic prescriptions or the Active Script List has to go through the Australian Digital Health Agency's conformance process first."
takeaways:
  - "An electronic prescription token is evidence of a prescription, not the prescription itself; once a pharmacy scans and dispenses it, it cannot be reused."
  - "Mobile apps that connect to the National Prescription Delivery Service or Active Script List Registry have their own ADHA conformance process, and the Agency says its part typically takes 20 business days."
  - "Each state and territory runs its own real time prescription monitoring system, such as SafeScript NSW and SafeScript in Victoria, and defines its own list of monitored medicines."
  - "Influenza, COVID-19, NIP and JEV vaccinations must be reported to the Australian Immunisation Register within 24 hours and no more than 10 working days after the vaccination."
  - "Pharmacies are covered by the Privacy Act regardless of turnover, because pharmacists are health service providers."
faqs:
  - q: "Can our pharmacy app show customers their scripts from the Active Script List?"
    a: "Only through a conformant route. The ADHA lists separate conformance processes for mobile applications and for mobile intermediary systems, the software a mobile app uses to connect to the National Prescription Delivery Service or Active Script List Registry. Consumers can already link their ASL to apps using an ASL linking code. In practice, a pharmacy group either builds on a conformant intermediary or takes its own product through conformance. We confirm which before quoting."
  - q: "Should we use MedAdvisor or build our own app?"
    a: "For most independent pharmacies, an established product such as MedAdvisor is the cheaper and lower risk choice, because it already handles script reminders and ordering. A banner group with its own loyalty program, brand and service menu may justify a custom app, particularly when it wants bookings, loyalty and click and collect in one place. Price both over three years, including conformance and support."
  - q: "Can custom software report vaccinations to the AIR for us?"
    a: "It can, if it uses the AIR's approved electronic channels, and it must meet the timing in the Australian Immunisation Register Rule 2015. Many pharmacies already report through their existing software. A custom booking system should usually hand the vaccination record to software that reports to the AIR rather than duplicate that integration."
  - q: "Can AI help with stock ordering?"
    a: "Yes. Forecasting demand from dispense and POS history, seasonal patterns such as the flu season and promotions is a sensible use. The forecast should suggest orders for staff to approve, and monitored medicines should be kept out of any automated ordering."
  - q: "Can AI check prescriptions or counsel patients?"
    a: "Not on its own. Clinical checking, counselling and the decision to supply belong to the pharmacist. Software that analyses patient data to inform clinical decisions may be a medical device under TGA rules. Drafting a medication list or a plain language summary for the pharmacist to check is a different and lower risk task."
  - q: "What does group reporting across stores cost?"
    a: "As an indicative planning range, about $30,000 to $80,000 (AUD, ex GST), depending on how many dispense and POS systems you run, how data is extracted from each, and how many measures you want. It's a figure for budgeting, not a quote."
sources:
  - title: "Electronic prescribing for dispensers"
    url: "https://www.digitalhealth.gov.au/healthcare-providers/initiatives-and-programs/electronic-prescribing/for-dispensers"
    publisher: "Australian Digital Health Agency"
  - title: "Electronic prescribing: developer conformance"
    url: "https://implementer.digitalhealth.gov.au/resources/services/electronic-prescribing"
    publisher: "Australian Digital Health Agency"
  - title: "Real time prescription monitoring"
    url: "https://www.digitalhealth.gov.au/healthcare-providers/initiatives-and-programs/real-time-prescription-monitoring"
    publisher: "Australian Digital Health Agency"
  - title: "Using the Australian Immunisation Register"
    url: "https://www.health.gov.au/topics/immunisation/immunisation-information-for-health-professionals/using-the-australian-immunisation-register"
    publisher: "Department of Health, Disability and Ageing"
  - title: "Small business and the Privacy Act"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business"
    publisher: "OAIC"
  - title: "Artificial intelligence (AI) and medical device software"
    url: "https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence/manufacturing/artificial-intelligence-ai-and-medical-device-software"
    publisher: "Therapeutic Goods Administration"
  - title: "Fred IT Group"
    url: "https://www.fred.com.au/"
    publisher: "Fred IT Group"
  - title: "Z Software"
    url: "https://www.zsoftware.com.au/"
    publisher: "Z Software"
  - title: "Corum Health (LOTS)"
    url: "https://www.corumhealth.com.au/"
    publisher: "Corum Health"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "AI in healthcare: privacy, TGA rules and My Health Record"
    href: "/solutions/ai-in-healthcare"
  - title: "GP practice software"
    href: "/solutions/gp-clinic-software"
  - title: "Retail and ecommerce software"
    href: "/industries/retail-ecommerce"
  - title: "Data analytics"
    href: "/services/data-analytics"
  - title: "Aged care software under the new Aged Care Act"
    href: "/solutions/aged-care-software"
service:
  title: "Web and mobile apps"
  href: "/services/web-mobile-apps"
industry:
  title: "Healthcare"
  href: "/industries/healthcare"
disclaimer: legal
---

## What is in a community pharmacy's software stack?

**Two core systems, dispense and point of sale, plus a growing ring of tools for professional services, ordering and customer contact.** Dispense software (Fred Dispense Plus from Fred IT Group, Z Dispense from Z Software, Minfos, and LOTS Dispense from Corum Health are the familiar names) handles the prescription record, labels, PBS claiming, electronic prescriptions and the link to real time prescription monitoring. POS runs the front of shop, stock and loyalty. Around them sit wholesaler ordering, vaccination booking tools, script reminder apps and banner group reporting.

Pharmacies don't lack software. They lack joins. The owner of four stores exports reports from each one. Vaccination bookings come in through one tool and the clinical record lives in another. The customer app knows about loyalty points but not about the customer's repeats. Custom work belongs in those seams, and almost never in the dispense system itself.

## Electronic prescriptions and the Active Script List: what an app can do

**An app can help a customer manage their scripts, but only through a route the Australian Digital Health Agency has assessed as conformant.** That one sentence decides the budget for most pharmacy app projects, so it is worth understanding the moving parts.

When a prescriber issues an electronic prescription, the patient gets a token by SMS or email. The ADHA is clear that the token is evidence of a prescription, not the prescription, and once a pharmacy scans it and dispenses, it can't be reused. The Active Script List is a token management solution: a consolidated list of a patient's active prescriptions. A patient registers for an ASL at a pharmacy or with a prescriber, gives each pharmacy consent to access it, and then confirms their identity at the counter instead of showing a token. Patients can request an ASL linking code to connect their list to apps such as the 1800MEDICARE app.

For developers, the ADHA's implementer site sets out separate conformance processes for:

1. Clinical information systems connecting to the National Prescription Delivery Service.
2. Providers of prescription delivery and Active Script List Registry services.
3. Mobile intermediary systems, which a mobile app uses to connect to the NPDS or ASL Registry.
4. Mobile applications themselves.

The ASL is only available through the NPDS, not a direct prescription delivery model. Healthcare Identifiers Service conformance is a prerequisite for prescribing and dispensing systems, and the Agency says its part of the final step typically takes 20 business days, on top of development and testing. Its site also flagged that Electronic Prescribing conformance profile 2.3 was due to be sunset on 30 September 2026, so check the current requirements before relying on any older product.

## Real time prescription monitoring and monitored medicines

**RTPM is run state by state, and your software design has to respect that.** The ADHA explains that each state and territory maintains its own RTPM system, defines its own list of monitored medicines and sets its own rules on mandatory checks and alerts. NSW and Victoria both call theirs SafeScript; Queensland has QScript, South Australia ScriptCheckSA and Western Australia ScriptCheckWA. When a monitored medicine is prescribed or dispensed, the data flows in real time to the National Data Exchange through the National Prescription Delivery Service. Fred IT Group is contracted by the Agency to operate the national RTPM technology platform.

Practically, RTPM checks happen inside conformant prescribing and dispensing software. A custom app or reporting tool shouldn't try to replicate them. What a group can sensibly build is reporting on Schedule 8 workflow, such as register reconciliation tasks completed per store, while leaving the clinical check where it belongs.

## Vaccinations and other professional services

**Professional services turn a pharmacy into a small clinic, with bookings, consent, clinical records and reporting obligations to match.** Vaccination is the clearest example. Under the Australian Immunisation Register Act, COVID-19 vaccinations from 20 February 2021, influenza from 1 March 2021, NIP vaccines from 1 July 2021 and JEV vaccines from 21 December 2022 must be reported. The Australian Immunisation Register Rule 2015 says to report electronically where reasonably practical, within 24 hours and no more than 10 working days after the vaccination.

A professional services booking system for a pharmacy group typically covers:

- Online booking by service, store and pharmacist, with eligibility questions up front.
- Consent and screening captured before the appointment.
- A record of what was given, handed to the software that reports to the AIR.
- Reminders for the next dose or next season.
- Reporting on services delivered by store and pharmacist.

Which services a pharmacist may provide, including any prescribing, depends on state rules and changes often. Keep the service catalogue and eligibility rules in configuration, owned by your professional services lead, so a rule change doesn't need a developer.

## Customer apps: buy MedAdvisor or build your own?

**Buy unless your brand and service menu are the point of the app.** MedAdvisor is an established product for script reminders and ordering, and it already carries the integrations. A custom app earns its cost for a banner group that wants loyalty, click and collect, service bookings and script management under its own brand, and has the customer base to make an app worth installing.

| Question | Points to an existing product | Points to a custom app |
|---|---|---|
| How many stores? | One to a handful | A group large enough to fund support |
| What should the app do? | Script reminders and ordering | Loyalty, bookings, click and collect and scripts together |
| Conformance appetite | None | Willing to use or certify a conformant route |
| Ongoing budget | Subscription | Hosting, support and app store releases every year |

If you do build, the [web and mobile apps](/services/web-mobile-apps) service covers the app itself, and our [Flutter development](/services/flutter-development) page explains why one codebase for iOS and Android usually suits this kind of product.

## Banner groups and multi store reporting

**Most groups need a short list of comparable numbers per store, refreshed daily.** Scripts dispensed, front of shop sales, gross margin by category, services delivered, stock on hand against days of cover, and staff hours. The difficulty is that stores may run different dispense or POS systems, or different versions of the same one, and each exports data differently.

A reporting layer pulls those extracts into one warehouse, maps products and categories to a group standard, and publishes a dashboard per store and for the group. The [data analytics](/services/data-analytics) service covers this. Agree definitions first: if two stores count a dispensed repeat differently, the dashboard will start arguments rather than settle them.

## AI in pharmacy: useful jobs and red lines

**Use AI for forecasting and drafting, never for the clinical decision to supply.** Good uses include forecasting stock from dispense and POS history, drafting plain language medication summaries for a pharmacist to check, answering customer questions about opening hours and services, and reading supplier invoices. The TGA treats software that analyses patient data to support clinical decisions as a possible medical device, which generally must be in the ARTG unless exempt or excluded.

Pharmacies are health service providers, so the OAIC confirms the Privacy Act covers them regardless of turnover. Any AI tool that sees customer or prescription data needs Australian hosting, clear terms on whether data trains the vendor's model, and logging. Our guide to the [Privacy Act and AI](/guides/privacy-act-and-ai) covers the detail.

## Indicative costs

**Indicative planning ranges for the Australian market, not quotes.** Conduct's cost guide places mid sized Australian agencies at roughly $150 to $330 an hour.

| Build | Indicative range (AUD, ex GST) | Main drivers |
|---|---|---|
| Multi store reporting across dispense and POS | $30k to $80k | Number of systems, extract method, measures |
| Professional services booking with reporting support | $30k to $90k | Services, eligibility rules, hand off to AIR reporting software |
| Branded customer app | $60k to $180k | Features, conformance route for scripts, loyalty integration |

## How AWLabs would approach a pharmacy project

A Development Consult comes first, then a paid Discovery Audit (credited in full against the build) that confirms what your dispense and POS vendors expose and whether any script features need an ADHA conformant route. You then choose from a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, and updates arrive every Tuesday and Friday. We haven't delivered a pharmacy project before, we hold no ADHA conformance for any product, and we aren't a partner of any dispense vendor. Your pharmacists and professional services lead own every clinical decision.
