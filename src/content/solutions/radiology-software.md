---
title: "Radiology software in Australia: RIS, PACS, referrer portals and AI"
metaTitle: "Radiology Information System Software in Australia"
description: "Radiology software for Australian imaging practices: DIAS accreditation, RIS and PACS integration, referrer portals, eRequesting, worklists and approved AI."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "An Australian imaging practice runs on a radiology information system (RIS) such as Karisma or Visage RIS and a PACS, and it should keep them. Custom software earns its place in the gaps those products leave: the referrer's experience of requesting and receiving results, worklist routing across sites and reporting radiologists, patient preparation and booking, and the glue between AI tools and the reporting workflow. Every build has to protect the evidence a practice needs for Diagnostic Imaging Accreditation Scheme accreditation, without which Medicare benefits are not payable."
takeaways:
  - "To provide Medicare funded diagnostic imaging, practices must be accredited to the Diagnostic Imaging Accreditation Scheme Standards, and accreditation must be renewed through assessment every four years."
  - "DIAS evidence includes how the practice manages requests and reporting, staff registration and licensing, equipment inventories and patient identification, so software changes need to keep those records intact."
  - "HL7 Australia's AU eRequesting implementation guide (v1.0.1, trial use) defines FHIR based requesting for pathology and medical imaging in community care."
  - "The TGA publishes a list of AI enabled medical devices in the ARTG, last updated 10 September 2026, which includes imaging analysis software from Australian developer Harrison.ai."
  - "RANZCR builds AI requirements into its Standards of Practice for Clinical Radiology, with a dedicated AI addendum."
faqs:
  - q: "Should we replace our RIS with a custom system?"
    a: "No, unless you are prepared to own billing, Medicare claiming, HL7 interfaces and DIAS record keeping for the life of the system. Products such as Kestral's Karisma and Pro Medicus's Visage RIS already carry that load. Custom work belongs in the layers around them: referrer portals, routing, analytics and patient apps."
  - q: "Can we build our own AI to read scans?"
    a: "Software that analyses images to detect or localise abnormalities is a medical device, and the TGA requires medical devices to be included in the ARTG unless they are excluded or exempt. For almost every practice, buying a product already in the ARTG is the realistic route. Custom work fits around it: routing AI findings into the worklist, tracking agreement between AI and radiologist, and audit logging."
  - q: "What does eRequesting change for imaging practices?"
    a: "It replaces paper and PDF requests with structured electronic requests that can flow from the referrer's clinical software into your RIS. HL7 Australia's AU eRequesting guide sets the FHIR data model and API interactions. Adoption depends on referrer software vendors and your RIS vendor, so plan for paper, PDF and electronic requests to coexist for some time."
  - q: "Is a referrer portal worth it if referrers already get reports by secure messaging?"
    a: "Often yes, because secure messaging delivers the report but not the context. A portal can show a referrer every study for their patient, images through a viewer link, the status of pending exams, and a way to request an urgent callback. It also reduces phone calls to your front desk asking whether a report is ready."
  - q: "How do we balance worklists across sites?"
    a: "A routing engine reads unreported studies from the RIS, applies rules for modality, subspecialty, urgency, credentialing and radiologist availability, and assigns them. The rules should be editable by the practice, and every assignment logged, so a clinical director can see why a study went where it did."
  - q: "What does a referrer portal cost?"
    a: "As an indicative planning range, about $50,000 to $150,000 (AUD, ex GST), depending on RIS integration, the image viewer, single sign on for referrers and how many sites it covers. It is a planning figure, not a quote."
sources:
  - title: "Diagnostic Imaging Accreditation Scheme"
    url: "https://www.safetyandquality.gov.au/accreditation/diagnostic-imaging-accreditation-scheme"
    publisher: "Australian Commission on Safety and Quality in Health Care"
  - title: "AU eRequesting Implementation Guide v1.0.1"
    url: "https://hl7.org.au/fhir/ereq/"
    publisher: "HL7 Australia"
  - title: "AI-enabled medical devices in the ARTG"
    url: "https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation/ai-enabled-medical-devices-artg"
    publisher: "Therapeutic Goods Administration"
  - title: "Artificial intelligence (AI) and medical device software"
    url: "https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence/manufacturing/artificial-intelligence-ai-and-medical-device-software"
    publisher: "Therapeutic Goods Administration"
  - title: "Artificial intelligence"
    url: "https://www.ranzcr.com/advocacy-standards/artificial-intelligence/"
    publisher: "RANZCR"
  - title: "Secure messaging"
    url: "https://www.digitalhealth.gov.au/healthcare-providers/initiatives-and-programs/secure-messaging"
    publisher: "Australian Digital Health Agency"
  - title: "Small business and the Privacy Act"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business"
    publisher: "OAIC"
  - title: "Karisma radiology information system"
    url: "https://www.kestral.com.au/"
    publisher: "Kestral"
  - title: "Visage RIS"
    url: "https://www.promedicus.com/"
    publisher: "Pro Medicus"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "AI in healthcare: privacy, TGA rules and My Health Record"
    href: "/solutions/ai-in-healthcare"
  - title: "Private hospital and day surgery software"
    href: "/solutions/private-hospital-software"
  - title: "GP practice software"
    href: "/solutions/gp-clinic-software"
  - title: "Healthcare software"
    href: "/industries/healthcare"
service:
  title: "API development"
  href: "/services/api-development"
industry:
  title: "Healthcare"
  href: "/industries/healthcare"
disclaimer: legal
---

## How does work move through an Australian imaging practice?

**A request arrives, the RIS books and tracks it, the modality captures images into PACS, a radiologist reports, and the report and images go back to the referrer.** Each handover is a place where time is lost or something goes missing. The RIS (Karisma from Kestral and Visage RIS from Pro Medicus are two established Australian products) owns bookings, patient demographics, billing and the report. PACS owns images. HL7 v2 messages connect them to each other and to the outside world, and DICOM carries the images themselves.

Larger groups add teleradiology, several sites with different modalities, and AI tools that read studies before a radiologist does. The result is a stack that works but is hard to see across. Practice managers end up answering three questions by hand: where is this patient's request, who is reporting this study, and has the referrer got the result.

## What does DIAS accreditation expect your systems to hold?

**DIAS is the gate to Medicare: practices must be accredited to the Diagnostic Imaging Accreditation Scheme Standards to provide Medicare funded imaging.** Unaccredited practices must tell patients beforehand that they are not accredited and no Medicare benefit is payable. Accreditation is granted for two or four years depending on level, and practices must be assessed every four years to keep it.

The Commission's list of evidence reads like a software requirements document. Practices provide records of staff registration and licensing, compliance with state radiation safety laws, an equipment inventory with service reports, data on the practice's imaging services, patient records with consent where applicable, incident and complaint registers, and procedures for managing requests, reporting, patient identification and transfer of care. The standards also require that imaging is only done where there is an identified clinical need and an appropriate request under the Health Insurance Act 1973, or where the providing practitioner may self determine the service.

Two practical rules follow for any custom build. Don't create a second source of truth for anything an assessor will ask for. And make sure every system that touches a request keeps the requester's details and the request itself linked to the study.

## Referrals: getting requests in cleanly

**The weakest point in most practices is still the paper or PDF request, retyped by front desk staff.** Retyping introduces errors in names, Medicare numbers and clinical notes, and an incomplete request can hold up a booking or a Medicare claim.

Electronic requesting is on its way. HL7 Australia's AU eRequesting implementation guide, version 1.0.1 and marked trial use, defines the FHIR data model and RESTful API interactions for placing and accessing electronic requests. Its first release focuses on pathology and medical imaging requests in community based care, and it is being developed through the Sparked AU FHIR Accelerator. Uptake depends on referrer software and RIS vendors, so a practice will handle paper, PDF and structured requests side by side for some time.

A request intake layer can help now:

1. Read emailed, faxed and scanned requests with document AI into structured fields.
2. Match patients against the RIS and flag likely duplicates.
3. Check required fields and highlight missing clinical detail before booking.
4. Accept FHIR eRequests as referrer software starts sending them.
5. Hand a clean record to the RIS through its supported interface.

That is mostly [AI document processing](/services/ai-document-processing) and [API development](/services/api-development) work.

## Getting results back to referrers

**Referrers want the report fast, the images when they need them, and one place to see everything about their patient.** Secure messaging, which the Australian Digital Health Agency promotes for its security, auditability and privacy over email, handles the report. A portal handles the rest.

| Referrer need | Usual answer | What a portal adds |
|---|---|---|
| The report | Secure messaging into clinical software | Status of pending studies, not just completed ones |
| Images | Viewer link or CD | Browser viewer launched from the report, with access logged |
| History | Phone the practice | Every prior study for the patient at this group |
| Urgent findings | Radiologist phones | Callback request and acknowledgement trail |
| New referral | Paper pad | Electronic request with the practice's own preparation instructions |

Access control is the hard part. Referrers should see their own patients, plus patients referred by colleagues in the same practice where policy allows, and nothing else. Every view should be logged.

## AI in radiology: what's already approved and where custom work fits

**Image reading AI is a regulated medical device, so most practices should buy it, and build the workflow around it.** The TGA's list of AI enabled medical devices in the ARTG, last updated 10 September 2026, includes imaging analysis software from Harrison.ai, including an interpretive program that analyses x ray images to detect and localise suspected abnormalities. The TGA notes the list doesn't capture every device using AI.

RANZCR has nine ethical principles for AI in medicine and has written AI requirements into its Standards of Practice for Clinical Radiology, with a separate addendum. Practices should read both before deploying anything.

Custom work fits around the approved product:

- Routing AI flagged studies up the worklist so likely critical findings are reported first.
- Recording whether the radiologist agreed with the AI finding, so the practice can monitor performance on its own patients.
- Logging which model version touched which study.
- Keeping AI vendor data flows within the practice's privacy commitments.

Any change to an AI product's intended use or a custom model that analyses images moves you into TGA territory. Our [AI in healthcare](/solutions/ai-in-healthcare) page covers that boundary.

## Worklists across sites and teleradiology

**A routing engine assigns each unreported study to the right radiologist based on rules the practice controls.** The inputs are the study's modality, body part, urgency and site; the radiologist's subspecialty, credentialing, roster and current queue. Without it, groups rely on radiologists picking from a shared list, which can leave complex or less popular studies waiting.

Rules should live in configuration that the clinical director can change, and every assignment should be explainable. When a study breaches its target turnaround, the engine should escalate it rather than wait.

## Patient apps: bookings, preparation and results

**A patient app for imaging is mostly about preparation.** Fasting instructions, medication holds for contrast studies, what to wear and how long to allow are the questions that fill phone lines. A booking flow that sends the right preparation instructions for the exam booked, with reminders the day before, saves rework on the day. Image access for patients is possible but needs care with timing, so patients don't see a report before their doctor has discussed it.

Imaging practices are health service providers, so the Privacy Act applies to them regardless of turnover, and images and reports are health information. Host the app and its data in an Australian cloud region, keep identity checks proportionate to what the patient can see, and log every access. If patients can share images with another doctor, make that share expire and record who opened it. These controls are cheap to design in at the start and expensive to retrofit after a privacy complaint.

## Indicative costs

**Indicative planning ranges, not quotes.** Conduct's cost guide puts mid sized Australian agencies at roughly $150 to $330 an hour.

| Build | Indicative range (AUD, ex GST) | Main drivers |
|---|---|---|
| Referrer portal with viewer launch and access logging | $50k to $150k | RIS and PACS integration, referrer identity, number of sites |
| Cross site worklist routing engine | $60k to $180k | Rule complexity, RIS events, roster integration, escalation |
| Request intake with document AI and FHIR eRequest support | $40k to $120k | Request volume and formats, matching rules, RIS interface |

Interface licence fees from your RIS and PACS vendors sit on top.

## How AWLabs approaches imaging projects

The first step is a Development Consult, then a paid Discovery Audit, credited in full against the build, in which we map your RIS, PACS and AI vendors' interfaces and agree what we can touch. You receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with updates every Tuesday and Friday. We have no track record in diagnostic imaging yet, and we aren't a partner of any RIS or PACS vendor. Your clinical director and accreditation lead own the clinical and regulatory calls. Related reading: [GP practice software](/solutions/gp-clinic-software) for the referrer side of the same workflow.
