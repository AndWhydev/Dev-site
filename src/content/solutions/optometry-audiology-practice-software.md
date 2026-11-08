---
title: "Optometry and audiology practice software: joining the clinic to the shop"
metaTitle: "Optometry and Audiology Practice Software in Australia"
description: "Optometry and audiology practice software in Australia: Medicare recall intervals, lab job tracking, Hearing Services Program claims and device trials."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Optometry and audiology practices are each half clinic and half retailer: a subsidised clinical service leads to the sale and fitting of a product, spectacles or hearing devices, with follow up and returns after. Practice systems such as Optomate and Sunix for optometry, and Noah based fitting with a practice layer above it for audiology, cover the core. Custom work pays where the two halves don't talk: lab and job tracking customers can check themselves, Hearing Services Program voucher and claim tracking, device trials and returns, and reporting across several stores."
takeaways:
  - "Medicare's comprehensive initial optometry consultation (item 10910) is claimable once every 36 months for patients under 65, and every 12 months for patients 65 and over, so recall rules should follow those intervals."
  - "Hearing Services Program providers can upload a csv batch claim file from their own or vendor software for most items, but items 1, 2, 3, 4 and 6 must be claimed through the portal."
  - "Before a program service, the client must have a current voucher and be linked to your business; only practitioners with a qualified practitioner number, or supervised provisional practitioners, can deliver services."
  - "Eye disease screening apps are among the TGA's examples of software regulated as a medical device; buy an ARTG included product rather than build one."
  - "Consumer guarantees on spectacles and hearing devices can't be removed by a 'no refunds' sign, so trial and return workflows need to reflect them."
faqs:
  - q: "Is there one system that runs both optometry and audiology?"
    a: "Some practices run both services, but the clinical software is usually separate: an optometry practice system on one side and Noah based fitting software with a hearing practice system on the other. A shared layer for bookings, customer records, sales and reporting is a realistic custom build when one business runs both."
  - q: "Can customers track their glasses order online?"
    a: "Yes. A job tracker takes order status from the practice system or the lab, shows each stage to the customer through a link, and sends an SMS when the order is ready to collect. It saves front desk calls and is one of the cheaper builds on this page."
  - q: "How do Hearing Services Program claims work with our software?"
    a: "The program accepts batch claims as a csv file uploaded to its online portal, created by vendor or bespoke software, for most items. Items 1, 2, 3, 4 and 6 must be claimed directly through the portal. Exception claims go to program staff by email within 20 days. Your system should generate the batch file and show which claims still need to be lodged by hand."
  - q: "Can we use AI to screen retinal images?"
    a: "Only with a product included in the ARTG for that intended purpose. The TGA lists eye disease screening apps, for conditions such as diabetic retinopathy, glaucoma and macular degeneration, as examples of software regulated as medical devices. Building one yourself makes you a manufacturer under TGA rules."
  - q: "Are audiologists regulated by AHPRA?"
    a: "No. Audiology isn't one of the professions covered by AHPRA's 15 National Boards, while optometry is, through the Optometry Board of Australia. Hearing Services Program rules on qualified practitioners still apply to audiologists and audiometrists delivering program services."
  - q: "What does a lab order tracker cost?"
    a: "As an indicative market range, a lab order tracker with SMS updates runs about $15,000 to $40,000 (AUD, ex GST), depending on how order status is read from your practice system or labs. It is a planning range, not a quote."
sources:
  - title: "MBS item 10910"
    url: "https://www9.health.gov.au/mbs/fullDisplay.cfm?type=item&q=10910"
    publisher: "MBS Online"
  - title: "Hearing Services Program"
    url: "https://www.health.gov.au/our-work/hearing-services-program"
    publisher: "Department of Health, Disability and Ageing"
  - title: "Providing Hearing Services Program services"
    url: "https://www.health.gov.au/our-work/hearing-services-program/providing-services"
    publisher: "Department of Health, Disability and Ageing"
  - title: "Claiming for Hearing Services Program services"
    url: "https://www.health.gov.au/our-work/hearing-services-program/providing-services/claiming"
    publisher: "Department of Health, Disability and Ageing"
  - title: "Artificial intelligence (AI) and medical device software regulation"
    url: "https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation"
    publisher: "Therapeutic Goods Administration"
  - title: "National Boards"
    url: "https://www.ahpra.gov.au/National-Boards.aspx"
    publisher: "Ahpra"
  - title: "Consumer rights and guarantees"
    url: "https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees"
    publisher: "ACCC"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "AI in healthcare: privacy, TGA rules and My Health Record"
    href: "/solutions/ai-in-healthcare"
  - title: "Retail and ecommerce software"
    href: "/industries/retail-ecommerce"
  - title: "Healthcare software"
    href: "/industries/healthcare"
  - title: "API integration cost in Australia"
    href: "/guides/api-integration-cost-australia"
  - title: "Dental practice management software in Australia"
    href: "/solutions/dental-practice-software"
  - title: "Pharmacy software and apps in Australia"
    href: "/solutions/pharmacy-software"
service:
  title: "API development"
  href: "/services/api-development"
industry:
  title: "Healthcare"
  href: "/industries/healthcare"
disclaimer: legal
---

## Why cover optometry and audiology together?

**Because both run the same business model: a subsidised clinical appointment, then the sale, fitting and aftercare of a product the customer wears every day.** An optometrist examines eyes under Medicare, then sells frames and lenses that go to a lab and come back weeks later. An audiologist tests hearing, often under the Hearing Services Program, then trials, fits and maintains hearing devices. In both, the clinical system and the retail system tend to be separate, and the customer falls through the gap between them.

The professions are regulated differently, though. Optometry is one of the professions under AHPRA's 15 National Boards, through the Optometry Board of Australia. Audiology isn't, so audiology practices rely on Hearing Services Program rules and professional bodies for practitioner standards. The software problems are similar enough that the same patterns apply.

| Stage | Optometry | Audiology |
|---|---|---|
| Clinical service | Eye examination, Medicare item | Hearing assessment, often under a program voucher |
| Product | Frames, lenses, contact lenses | Hearing devices and accessories |
| Fulfilment | Lab order, job tracking, collection | Device order, fitting, trial period |
| Aftercare | Adjustments, recalls | Follow ups, batteries, maintenance, refits |
| Typical systems | Optomate, Sunix, Oculo for referrals | Noah with fitting software, Blueprint OMS and similar |

## Optometry: Medicare intervals drive the appointment book

**Recalls in optometry follow Medicare's consultation intervals, so the recall engine should know them.** At the time of writing, MBS item 10910, the comprehensive initial consultation, applies to patients under 65 who haven't had that or a related item in the previous 36 months. Patients 65 and over can have one every 12 months under the related items. The MBS Online listing shows a schedule fee of $79.80, and the explanatory notes say that where the practice charges more than the Medicare benefit, the optometrist must tell the patient the benefit payable and that the extra fee won't attract benefits.

A recall layer reads last consultation dates and age from the practice system, sends reminders when the patient becomes eligible again, and suppresses them for patients already booked. It also helps with informed fees: the booking confirmation can state the expected out of pocket cost before the patient arrives.

## Optometry: lens orders and job status customers can check

**The most common phone call in an optical store is "are my glasses ready?", and a job tracker answers it without staff.** A tracker usually covers:

1. The order created in the practice system, with frame, lens type and lab.
2. Status updates from the lab, by integration where the lab offers one, or by staff scanning a job at each stage.
3. A link the customer can open to see where their order is.
4. An SMS when the job is ready, and a reminder if it isn't collected.
5. A report of jobs overdue at each lab, so the store can chase them.

Stock is the other half. Groups with several stores often want frame stock visible across locations, so a customer can be offered a frame held at a nearby store. That is standard retail inventory work, covered on our [retail and ecommerce](/industries/retail-ecommerce) page.

## Retinal imaging and AI screening claims

**OCT and retinal imaging belong to the device vendor's software; AI that screens images for disease is a regulated medical device.** The TGA lists eye disease screening apps, for conditions such as diabetic retinopathy, glaucoma and macular degeneration, among its examples of software regulated as medical devices. A practice adopting AI screening should check the product's ARTG inclusion and intended purpose, and the optometrist stays accountable for the result. Building screening software yourself would make you a manufacturer.

What is safe to build: routing images and reports to the right referral destination, tracking referrals until the ophthalmologist responds, and drafting referral letters for the optometrist to check. Our [AI in healthcare](/solutions/ai-in-healthcare) page explains the intended purpose test in detail.

## Audiology: the Hearing Services Program in your system

**If you deliver program services, your system has to prove every claim against the voucher, the client's link to your business and the schedule of items.** The Department of Health says the program supported 834,048 Australians in 2024 to 25, across 3,510 sites. Providers must check the client has a current voucher and that the services are available to them, and only practitioners with a qualified practitioner number, or provisional practitioners under supervision, can deliver services. Providers must also get client consent and manage health records in line with relevant laws.

Claiming has three routes, according to the program's claiming page:

- **Batch claims:** vendor or bespoke software can create a csv batch file to upload to the portal, for most items.
- **Portal claims:** items 1, 2, 3, 4 and 6 must be claimed in the portal, along with approved revalidated services and anything that can't be batch claimed.
- **Exception claims:** for cases the portal can't handle, emailed to program staff, one client per email, within 20 days.

A custom compliance layer beside your practice system tracks each client's voucher status, the items delivered and claimed, the claims that need manual lodgement, and the documents an audit would ask for. The department says it regularly conducts compliance monitoring, and providers can run their own audits; a report that answers those questions in minutes is worth having.

## Audiology: Noah, trials, returns and maintenance

**Fitting happens in manufacturer software running through Noah; the practice layer around it is where trials, returns and maintenance programs get lost.** Noah is HIMSA's platform for hearing care data and fitting software, and integration with it follows HIMSA's own terms, which we would confirm for your setup. The workflows that usually need custom support are:

- **Device trials:** trial start and end dates, reminders to the client and clinician, and the outcome (kept, returned, exchanged).
- **Returns and warranty:** device serial numbers, manufacturer warranty periods, repair history and loan devices.
- **Maintenance programs:** battery supply and maintenance under the program, or a paid plan for private clients.
- **Recalls:** annual reviews and refit eligibility.

Returns need care. The ACCC says consumer guarantees under the Australian Consumer Law are automatic and can't be removed by a business, for example by a "no refunds" sign or by suggesting a customer must buy an extended warranty. Trial terms and warranty offers should sit on top of those rights, and staff screens should make the difference clear.

## Reporting for independents and groups

**Owners want clinical activity and product sales on the same screen, per store and per clinician.** Useful measures include appointments to sales conversion, average order value, lab or device turnaround, trial return rates, recall response rates and, for audiology, program claims lodged against services delivered. Pulling these from a clinical system, a retail system and a program portal is a data integration job; our [API integration cost guide](/guides/api-integration-cost-australia) covers typical budgets.

## What do these builds cost?

**Indicative market ranges run from about $15,000 for a lab order tracker to $60,000 for a multi store dashboard or a program claim tracker (AUD, ex GST).** Conduct's 2026 guide puts mid sized Australian agencies at $150 to $330 an hour, so $30,000 buys roughly 90 to 200 hours.

| Build | Indicative range (AUD, ex GST) | Main cost driver |
|---|---|---|
| Lab order tracker with SMS updates | $15k to $40k | Lab integrations or scanning workflow, SMS provider |
| Patient maintenance program portal (audiology) | $20k to $50k | Device records, payments, reminders |
| Hearing Services Program voucher and claim tracker beside Noah | $20k to $60k | Practice system access, batch file generation, audit reports |
| Multi store dashboard | $25k to $60k | Number of systems and stores, shared definitions |

These are planning ranges, not quotes, and exclude ongoing hosting and fees.

## How AWLabs approaches optometry and audiology projects

We check first whether your practice system or an existing add on already covers the need. If custom work is justified, every build starts with our Discovery Audit, a fixed fee credited in full against the build, where we confirm what your practice system, labs and Noah allow. You then receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates arrive every Tuesday and Friday, Sydney time, and code and IP are assigned to you as they are paid for. We haven't yet delivered a project for an optometry or audiology practice; your clinicians and advisers own the clinical, program and consumer law decisions. The integration work sits in our [API development](/services/api-development) service, and the broader context is on our [healthcare](/industries/healthcare) page.
