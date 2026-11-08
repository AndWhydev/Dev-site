---
title: "Physiotherapy practice management software in Australia: the payer problem and what to build"
metaTitle: "Physiotherapy Practice Software Australia: Beyond Cliniko"
description: "Physio practice software in Australia: tracking workers comp, CTP, DVA and Medicare caps, what the Cliniko API allows, exercise apps and AI drafted reports."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Cliniko, Nookal, Splose and similar platforms run a physiotherapy clinic's bookings, notes and invoices well. Where they stop is the payer layer: each patient may be funded by a workers compensation insurer, a CTP insurer, DVA, Medicare under a chronic condition plan, the NDIS or a health fund, each with its own approvals, session limits and reports. Custom software earns its place by tracking those limits before the clinic treats unfunded sessions, drafting payer reports for the physio to check, and giving multi clinic owners KPIs the platform can't produce."
takeaways:
  - "A DVA allied health referral lasts 12 sessions or 1 year, whichever ends first, and the physio reports back to the GP at the end of the cycle."
  - "Medicare allied health item 10960 for physiotherapy allows a maximum of 5 services per calendar year across the allied health subgroup, each at least 20 minutes, and needs a current chronic condition management plan."
  - "In NSW, the Allied Health Treatment Request replaced the Allied Health Recovery Request in June 2024 and is mandatory for SIRA approved practitioners in workers compensation."
  - "The Cliniko API limits requests to 200 a minute per user, returns JSON and expects UTC dates, which shapes how a sync or reporting tool is designed."
  - "AI can draft progress reports to insurers and GPs, but the physio stays accountable and must check every output."
faqs:
  - q: "Can Cliniko track workers compensation session approvals?"
    a: "Partly. You can record the claim and payer against a patient and invoice the insurer, but tracking approved sessions used against sessions remaining, with alerts before the limit, usually needs configuration workarounds or a separate tool. A small layer that reads appointments and invoices through the Cliniko API and keeps the approval counts is a common, contained build."
  - q: "How many Medicare physio sessions can a patient get?"
    a: "Under item 10960, a maximum of 5 allied health services a calendar year in total, not 5 per discipline, each at least 20 minutes, where the service is recommended in the patient's chronic condition plan. Your system should count every allied health service the patient has had that year, which the clinic may only know if the patient or GP tells you."
  - q: "Should we build our own exercise app instead of using Physitrack?"
    a: "For most clinics, no. Physitrack and similar products already provide exercise libraries, video and adherence tracking for a subscription. A branded app only makes sense when it does more than exercises: rebooking, package purchases, progress tracking your clinicians designed, or a group brand you want patients to keep on their phone."
  - q: "Can AI write our workers compensation progress reports?"
    a: "It can draft them from the clinical notes and outcome measures, in the insurer's format, for the physio to edit and sign. AHPRA's guidance says practitioners must apply human judgement to any AI output and stay responsible for care. The tool should never submit a report on its own, and patients should know if their information is processed by an AI tool."
  - q: "Does this work with Nookal or Splose too?"
    a: "The same approach works with any platform that exposes appointments, patients and invoices through an API or reliable export. Each vendor's API scope and terms differ, so we confirm them during the Discovery Audit before you get a fixed price."
  - q: "What does a payer tracking layer cost?"
    a: "As an indicative market range, a payer tracking layer on Cliniko with alerts and reports runs about $20,000 to $60,000 (AUD, ex GST), depending on how many payers and states you cover and how much reporting you need. It is a planning range, not a quote."
sources:
  - title: "Treatment cycle information for allied health providers"
    url: "https://www.dva.gov.au/get-support/providers/notes-fee-schedules-and-guidelines/allied-health-treatment-cycle-and-referrals/treatment-cycle-information-allied-health-providers"
    publisher: "Department of Veterans' Affairs"
  - title: "MBS item 10960"
    url: "https://www9.health.gov.au/mbs/fullDisplay.cfm?type=item&q=10960"
    publisher: "MBS Online"
  - title: "Allied Health Treatment Request (AHTR)"
    url: "https://www.sira.nsw.gov.au/health-providers/allied-health-treatment-request-ahtr"
    publisher: "State Insurance Regulatory Authority NSW"
  - title: "MBS billing rules for GP chronic condition management plans"
    url: "https://www.servicesaustralia.gov.au/mbs-billing-rules-for-gp-chronic-condition-management-plans"
    publisher: "Services Australia"
  - title: "Cliniko API introduction"
    url: "https://docs.api.cliniko.com/"
    publisher: "Cliniko"
  - title: "HICAPS Integrations for Software Partners"
    url: "https://www.hicaps.com.au/partners/hicaps-integrations"
    publisher: "HICAPS"
  - title: "Meeting your professional obligations when using Artificial Intelligence in healthcare"
    url: "https://www.ahpra.gov.au/Resources/Artificial-Intelligence-in-healthcare.aspx"
    publisher: "Ahpra"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "Software for paediatric speech pathology and OT clinics"
    href: "/solutions/paediatric-therapy-clinic-software"
  - title: "AI in healthcare: privacy, TGA rules and My Health Record"
    href: "/solutions/ai-in-healthcare"
  - title: "API integration cost in Australia"
    href: "/guides/api-integration-cost-australia"
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

## Why does physio billing break generic practice software?

**Because one clinic bills up to six kinds of payer, and each has its own approval process, session limits and reporting duty.** A private patient pays and claims through their health fund on the spot. The next patient is on a workers compensation claim with sessions approved by an insurer case manager. The one after is a veteran on a DVA referral that runs out after 12 sessions. Practice platforms record who pays. Few of them warn the front desk that today's session is the one beyond what was approved.

| Payer | What controls funding | What the clinic has to track |
|---|---|---|
| Workers compensation (state scheme) | Insurer approval under state rules, such as the AHTR in NSW | Approved sessions, approval dates, report due dates |
| CTP (motor accident) | Insurer approval under the state scheme | Same as workers compensation, often a different insurer |
| DVA | GP referral, 12 sessions or 1 year | Sessions used, referral expiry, end of cycle report |
| Medicare chronic condition referral | GP plan and referral, 5 allied health services a calendar year | Services used across all allied health, plan currency |
| NDIS | Participant plan and service agreement | Funded hours, line items, plan dates |
| Private health insurance | Fund rules, claimed at the counter through HICAPS or Tyro Health | Usually nothing beyond the claim result |

The cost of getting this wrong is direct: treatment delivered that no one will pay for, or an awkward conversation asking a patient to cover it. Every row above except the last is a counter that can be kept automatically.

## Workers compensation and CTP: approvals and reports by state

**Each state runs its own personal injury schemes, so the rules for approval and reporting differ; build the rules as configuration per scheme, not code.** NSW is a good example of how specific they get. The State Insurance Regulatory Authority (SIRA) says the Allied Health Treatment Request replaced the Allied Health Recovery Request from June 2024. It is used to request insurer approval before treatment, sets out the person's presentation, progress, barriers and goals, and uses standardised outcome measures. Completing it is mandatory for SIRA approved allied health practitioners in the NSW workers compensation scheme, and optional for others.

Victoria, Queensland and other states have their own regulators and forms. A clinic operating across borders needs a system that knows which scheme applies to each claim. In practice that means:

- A claim record with scheme, insurer, case manager, claim number and approval details.
- Approved sessions and dates, decremented as appointments are completed.
- Alerts at a set threshold, for example two sessions remaining, to the treating physio and the front desk.
- Report due dates and a draft built from notes and outcome measures.
- A log of what was sent to the insurer and when.

## DVA and Medicare referrals: tracking caps before the clinic absorbs them

**DVA referrals and Medicare chronic condition referrals both run out on counts the clinic can see coming, so the system should see them first.**

DVA says an allied health referral lasts 12 sessions or 1 year, whichever ends first. The client's GP coordinates care, the provider reports back at the end of the cycle, and clients can have as many cycles as their GP decides are clinically necessary. Totally and Permanently Incapacitated (TPI) clients are exempt from the cycle for physiotherapy and exercise physiology, which the system also needs to know.

Medicare is tighter. At the time of writing, MBS item 10960 (physiotherapy) allows a maximum of 5 allied health services per calendar year in total across that subgroup, each at least 20 minutes, where the service is recommended in the patient's chronic condition plan. The schedule fee shown on MBS Online is $74.55. Services Australia adds that a patient needs a GP chronic condition management plan prepared or reviewed within the previous 18 months to access these services. A patient who saw a podiatrist twice this year has three physio sessions left, not five, and the clinic only knows if it asks.

## What can the Cliniko API automate today?

**Enough to build most payer tracking and reporting tools without replacing Cliniko.** The Cliniko API exposes appointments, patients, invoices, billable items, bookings and more as JSON, authenticated with an API key from a Cliniko user. Its documentation sets out the constraints a developer has to design around:

1. **Rate limit.** 200 requests a minute per user, with a 429 response and a reset time when exceeded. A sync job has to stagger requests rather than pull everything at once.
2. **UTC time.** All dates and times are in UTC, so a clinic in Perth and one in Sydney need careful conversion for daily reports.
3. **Sharded accounts.** Accounts sit on different shards with their own base URL, which matters for groups.
4. **Identify your app.** Requests must send a user agent naming the app and a contact email.

Nookal, Splose, Zanda and PracSuite each have their own integration options and terms. The principle is the same: read appointments and invoices, keep the payer logic in your own layer, and write back only what the platform supports. Our [API integration cost guide](/guides/api-integration-cost-australia) covers typical integration budgets.

## Home exercise programs: Physitrack or your own app?

**Buy Physitrack or a similar product unless the app needs to do much more than exercises.** Exercise libraries with video, reminders and adherence tracking are mature, cheap per clinician and kept current by the vendor. A branded app becomes worth building when a clinic group wants patients to rebook, buy class passes or packages, see progress against goals their physio set, and keep one brand on their phone across every clinic. At that point exercises are one feature among several.

## AI drafted reports and notes, under AHPRA guidance

**Use AI to draft, never to decide or send: the physio checks and signs every report.** AHPRA's guidance on AI says practitioners remain accountable, must apply human judgement to any output and must check scribed records for accuracy, and that patients should give informed consent where their personal data goes into an AI tool. The Physiotherapy Board's code of conduct sits behind that.

The most useful drafting tasks for a physio clinic are the repetitive ones: a workers compensation progress report pulled from the last six notes and outcome scores, an end of cycle letter to a veteran's GP, a discharge summary. The draft follows the insurer's or GP's expected structure, links each statement to the note it came from, and stays in draft until the physio approves it. Our [AI in healthcare](/solutions/ai-in-healthcare) page covers where such tools sit relative to TGA regulation.

## What should a multi clinic owner measure?

**Utilisation, rebooking and payer mix, by clinician and clinic, on one screen.** Owners of three or more clinics typically want:

- Utilisation: booked hours against available hours.
- Rebooking rate: patients leaving with their next appointment booked.
- Drop off after the first and second visit.
- Revenue by payer type, and sessions at risk from expiring approvals.
- Outstanding insurer reports and debtor days by payer.

These come straight from appointment and invoice data the platform already holds. The work is in clean definitions and a reliable sync.

## What does it cost?

**Indicative market ranges run from about $20,000 for a payer tracking layer to $120,000 for a branded patient app (AUD, ex GST).** Conduct's 2026 guide puts mid sized Australian agencies at $150 to $330 an hour, so $40,000 buys roughly 120 to 270 hours.

| Build | Indicative range (AUD, ex GST) | Main cost driver |
|---|---|---|
| Payer tracking layer on Cliniko with alerts and reports | $20k to $60k | Number of payers and states, reporting depth |
| AI drafted workers compensation progress reports with clinician sign off | $25k to $70k | Report formats, evaluation, Australian hosting |
| Branded exercise and rebooking app | $40k to $120k | Features beyond exercises, booking and payments integration |

These are planning ranges, not quotes, and exclude ongoing hosting and subscriptions.

## How AWLabs approaches physiotherapy projects

We check first whether better use of your platform solves the problem. If custom work is justified, every build starts with our Discovery Audit, a fixed fee credited in full against the build, where we confirm what your platform's API allows and map each payer's rules with your team. You then receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates arrive every Tuesday and Friday, Sydney time, and code and IP are assigned to you as they are paid for. We haven't yet delivered a project for a physiotherapy clinic; your clinicians and advisers own the clinical and scheme decisions. The integration work sits in our [API development](/services/api-development) service; for paediatric and NDIS funded therapy, see our [paediatric therapy clinic software](/solutions/paediatric-therapy-clinic-software) page.
