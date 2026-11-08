---
title: "Practice management software for specialists in Australia: referrals, letters and billing"
metaTitle: "Specialist Practice Management Software in Australia"
description: "Specialist practice software in Australia: referral intake and validity, informed financial consent, ECLIPSE and gap billing, theatre lists and AI letters."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Specialist rooms run on paper flow more than bookings: referrals arrive by fax, secure message and email, letters go back to GPs after every consult, fee estimates must be given before treatment, in hospital claims go through ECLIPSE and health fund gap arrangements, and theatre lists span several hospitals. Systems such as Genie, Gentu, Clinic to Cloud, MedicalDirector and Best Practice Specialist handle the core. Custom work earns its place in referral intake, letter turnaround with AI drafting the specialist signs, fee estimate generation and reporting across rooms."
takeaways:
  - "Under MBS rules, a referral from a specialist or consultant physician is valid for 3 months; referrals from other practitioners default to 12 months unless the referrer states another period or indefinitely."
  - "A specialist's referral to another specialist must name the patient's GP or practice, or state that the patient couldn't or wouldn't nominate one."
  - "For in hospital services to private patients with hospital cover, Medicare pays 75% of the MBS fee and the insurer must pay at least the remaining 25%; gap arrangements can reduce or remove the patient's gap."
  - "ECLIPSE lets hospitals or billing agents submit Simplified Billing claims so the patient pays one out of pocket amount to the provider."
  - "AI can draft letters from dictation, but the specialist checks and signs every one, and patients should know if AI is used with their information."
faqs:
  - q: "How long is a GP referral to a specialist valid?"
    a: "Under the MBS explanatory notes, a referral from a GP or other practitioner who isn't a specialist is valid for 12 months from the specialist's first service, unless the referrer specifies a different period, such as 3, 6 or 18 months, or indefinitely. A referral from a specialist or consultant physician is valid for 3 months, with special rules for admitted patients. Your software should calculate expiry from the first service date, not the letter date."
  - q: "Can incoming referrals be filed automatically?"
    a: "They can be read automatically and filed after a person confirms them. A document processing step extracts the patient, referrer, date, period and reason from a fax, secure message or email, matches it to an existing patient or creates a new one, and puts it in a queue for staff to approve. Fully unattended filing isn't worth the risk of a referral landing in the wrong record."
  - q: "What must an informed financial consent estimate include?"
    a: "The Department of Health describes informed financial consent as the patient's right to an estimate of costs before agreeing to treatment. The AMA's 2024 position statement sets out doctors' roles in good practice, including clear, complete and timely information about fees. In practice an estimate should list each fee, the expected Medicare and fund contributions, the likely gap and other providers who may bill separately."
  - q: "Should we replace Genie or Gentu with custom software?"
    a: "Rarely. These systems already handle appointments, clinical records, letters and Medicare and ECLIPSE billing for specialist rooms. Custom software works best beside them: intake, estimates, dictation workflows and reports. A full replacement only makes sense for a large group with needs no product meets, and the budget to maintain it."
  - q: "Can AI write our clinic letters?"
    a: "It can draft them from the specialist's dictation or notes, in your letter templates, for the specialist to check and sign. AHPRA's guidance says practitioners must apply human judgement to AI output, remain accountable, and get informed consent before using AI tools that need patients' personal data. The tool should keep the dictation and show what changed between draft and signed letter."
  - q: "What does dictation to letter drafting cost?"
    a: "As an indicative market range, a dictation to letter drafting tool with specialist review runs about $30,000 to $90,000 (AUD, ex GST), driven by the number of letter types, integration with your practice system and hosting choices. It is a planning range, not a quote."
sources:
  - title: "MBS note GN.6.16: Referral of patients to specialists or consultant physicians"
    url: "https://www9.health.gov.au/mbs/fullDisplay.cfm?type=note&q=GN.6.16&qt=noteID"
    publisher: "MBS Online"
  - title: "MBS item 104"
    url: "https://www9.health.gov.au/mbs/fullDisplay.cfm?type=item&q=104"
    publisher: "MBS Online"
  - title: "ECLIPSE"
    url: "https://www.servicesaustralia.gov.au/eclipse"
    publisher: "Services Australia"
  - title: "Out of pocket costs"
    url: "https://www.health.gov.au/topics/private-health-insurance/what-private-health-insurance-covers/out-of-pocket-costs"
    publisher: "Department of Health, Disability and Ageing"
  - title: "Informed financial consent 2024"
    url: "https://www.ama.com.au/articles/informed-financial-consent"
    publisher: "Australian Medical Association"
  - title: "Meeting your professional obligations when using Artificial Intelligence in healthcare"
    url: "https://www.ahpra.gov.au/Resources/Artificial-Intelligence-in-healthcare.aspx"
    publisher: "Ahpra"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "GP practice software in Australia"
    href: "/solutions/gp-clinic-software"
  - title: "AI in healthcare: privacy, TGA rules and My Health Record"
    href: "/solutions/ai-in-healthcare"
  - title: "AI document processing"
    href: "/services/ai-document-processing"
  - title: "Healthcare software"
    href: "/industries/healthcare"
service:
  title: "AI document processing"
  href: "/services/ai-document-processing"
industry:
  title: "Healthcare"
  href: "/industries/healthcare"
disclaimer: legal
---

## Referrals in, letters out: what specialist rooms actually process

**A specialist practice is a document pipeline with a clinic attached: every new patient starts with a referral, and every consult ends with a letter.** The appointment book matters, but the work that fills a practice manager's day is chasing missing referrals, checking which ones have expired, typing letters, sending them back to GPs, and explaining fees before surgery.

Medicare's rules make the referral more than paperwork. MBS items for referred attendances, such as item 104 for an initial specialist consultation, require a valid referral, and the MBS explanatory notes set how long a referral lasts:

| Referral from | Valid for | Notes |
|---|---|---|
| GP or other practitioner who isn't a specialist | 12 months by default | The referrer can set another period, such as 3, 6 or 18 months, or indefinitely |
| Specialist or consultant physician | 3 months | Must name the patient's GP or practice, or state that none was nominated |
| Specialist, for an admitted patient | 3 months or the length of the admission | Ends when the patient is discharged |

Validity runs from the date of the specialist's first service under the referral, not the date on the letter. Software that stores only the letter date gets expiry wrong. A practice with hundreds of continuing patients needs a list of referrals about to expire, with a task to request a new one from the GP before the next appointment.

## Referral intake from fax, secure messaging and email

**Most practices receive referrals through at least three channels, and each one ends with someone retyping details into the practice system.** Secure messaging through Healthlink and Medical Objects carries many referrals, but faxes and emailed PDFs still arrive. An intake workflow brings them together:

1. Every referral, whatever its channel, lands in one queue.
2. A document processing step reads the patient's name, date of birth, Medicare number, referrer, provider number, date, period and reason.
3. The system matches the patient to an existing record or proposes a new one.
4. A staff member checks the extracted details against the document and approves.
5. The referral is filed in the practice system, the validity period calculated, and the patient offered appointments by SMS.
6. Urgent referrals, flagged by the referrer or by the specialist's own rules, go to the top of the queue for a person to triage.

The extraction step is a standard [AI document processing](/services/ai-document-processing) build. The approval step is what makes it safe.

## Informed financial consent and gap billing

**Patients have a right to a cost estimate before they agree to treatment, and the practice that produces clear estimates quickly avoids disputes later.** The Department of Health calls this informed financial consent, and the AMA's 2024 position statement describes it as giving patients clear, complete and timely information about fees before they proceed.

The arithmetic behind an estimate for in hospital treatment is set out by the Department of Health. For a private patient with hospital cover, Medicare pays 75% of the MBS fee and the insurer must pay at least the remaining 25%. If the specialist charges more than the MBS fee, the difference is the gap. Many insurers have gap cover arrangements with doctors:

- **No gap:** the insurer pays a set amount above the MBS fee, and if the doctor charges within that limit, the patient pays nothing.
- **Known gap:** the doctor charges above the no gap limit but within a further limit set by the insurer, and the patient pays a known amount.

An estimate generator takes the planned item numbers, the specialist's fees, the patient's fund and the fund's gap scheme rates, and produces a plain English estimate showing the fee, Medicare's share, the fund's share and the gap. It lists other providers likely to bill separately, such as the anaesthetist and assistant surgeon, and records when the patient received and accepted it. Fund rates change, so they live in a table staff can update.

## In hospital claims through ECLIPSE

**ECLIPSE is how in hospital claims reach Medicare and health funds together, and your practice system or billing agent already uses it.** Services Australia describes ECLIPSE as the channel for Simplified Billing claims and patient claims for in patient services. With Simplified Billing, hospitals or billing agents submit claims on behalf of the provider for both the Medicare benefit and the insurer's gap payment, so the patient pays a single out of pocket amount to the provider. Claims over 2 years from the date of service need a late lodgement application.

Custom software rarely needs to submit ECLIPSE claims itself. Where it helps is reconciliation: matching claims sent, payments received and rejections across hospitals, and showing which accounts are unpaid and why.

## Theatre lists and hospital bookings across sites

**A surgeon operating at three hospitals keeps three sets of booking forms, list times and contacts, usually in email and spreadsheets.** A theatre list tool brings bookings into one view per surgeon: patient, procedure, item numbers, hospital, list date, admission forms sent, estimate accepted, pre admission done. It produces each hospital's booking form from the same data, shows what is missing before the list closes, and gives the anaesthetist and assistant their lists. It reads from, and ideally writes to, the practice system, so details are entered once.

## Dictation, typing pools and AI drafted letters

**Letter turnaround is the specialist practice's most visible quality signal to referring GPs, and AI drafting can shorten it without taking the specialist out of the loop.** The traditional flow is dictation, a typist, a draft, the specialist's corrections, then sending. An AI drafting step turns the dictation into a draft in your letter template within minutes. The specialist reviews, edits and signs, and the letter goes by secure messaging.

AHPRA's guidance sets the rules: practitioners remain accountable for AI output and must apply human judgement to it, patients should give informed consent when their personal data is used in an AI tool, and recording a consultation without consent may carry criminal implications. For a letter drafted from the specialist's own dictation after the consult, the main controls are accuracy checking, an audit trail and Australian hosting. Our [AI in healthcare](/solutions/ai-in-healthcare) page explains why letter drafting generally sits outside TGA regulation.

## Genie, Gentu and Clinic to Cloud: what integrates

**Treat the practice system as the record and build beside it, through whatever integration route its vendor supports.** Genie Solutions, Gentu (Magentus), Clinic to Cloud, MedicalDirector and Best Practice Specialist each have their own integration options and partner terms, which change over time. We confirm the current route for your system in writing before pricing any build. Where live integration isn't available, scheduled exports and the secure messaging channel can still carry data in and out. Our [GP clinic software](/solutions/gp-clinic-software) page describes how partner programs work for Best Practice.

## What do these builds cost?

**Indicative market ranges run from about $20,000 for referral intake automation to $90,000 for dictation to letter drafting (AUD, ex GST).** Conduct's 2026 guide puts mid sized Australian agencies at $150 to $330 an hour, so $45,000 buys roughly 135 to 300 hours.

| Build | Indicative range (AUD, ex GST) | Main cost driver |
|---|---|---|
| Referral intake automation into the practice system | $20k to $60k | Channels covered, extraction accuracy, filing route |
| Fee estimate generator with fund gap tables | $20k to $50k | Item and fund coverage, practice system integration |
| Dictation to letter drafting with specialist review | $30k to $90k | Letter types, templates, hosting, evaluation |

These are planning ranges, not quotes, and exclude ongoing hosting and vendor fees.

## How AWLabs approaches specialist practice projects

We check first whether your practice system or an existing add on already does the job. If custom work is justified, every build starts with our Discovery Audit, a fixed fee credited in full against the build, where we map your referral, letter and billing flows and confirm your vendor's integration route. You then receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates arrive every Tuesday and Friday, Sydney time, and code and IP are assigned to you as they are paid for. We haven't yet delivered a project for a specialist practice; your specialists and advisers own the clinical, billing and consent decisions. See also our [healthcare](/industries/healthcare) page and the [Privacy Act and AI guide](/guides/privacy-act-and-ai).
