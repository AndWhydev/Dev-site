---
title: "Clinical trial software in Australia: start up tracking, GCP audit trails and pre screening"
metaTitle: "Clinical Trial Management Software in Australia"
description: "Clinical trial software for Australian sponsors, CROs and sites: CTN start up tracking, ICH E6(R3) and Part 11 audit trails, REDCap, pre screening, R&D costs."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Clinical trial software in Australia splits by who is buying. Sponsors and CROs need to track start up across ethics, governance and the TGA's CTN or CTA schemes, and keep audit trails that satisfy ICH GCP and, for American sponsors, FDA 21 CFR Part 11. Sites need pre screening, finance and document control. Established products such as REDCap, Medidata Rave and Veeva Vault cover data capture and documents; custom software earns its place in start up tracking across a site network, eligibility pre screening, and site finance. ICH E6(R3) took effect in Australia on 13 January 2026, with a transition period to 13 January 2027."
takeaways:
  - "Under the CTN scheme the TGA does not evaluate trial data at notification, but the sponsor needs HREC approval and approval from each site's approving authority, and can't supply the product until the CTN is submitted and the fee paid."
  - "ICH GCP E6(R3) Principles and Annex 1 came into effect on 13 January 2026; until 13 January 2027 trials under the CTN and CTA schemes may comply with either E6(R2) or E6(R3)."
  - "The TGA expects sites to plan their E6(R3) implementation and keep records of how they reviewed the changes and why they made each decision."
  - "FDA 21 CFR Part 11 requires secure, computer generated, time stamped audit trails that don't obscure earlier entries, which matters when an Australian site runs a US sponsored trial."
  - "The Industry Research and Development (Clinical Trials) Determination 2022 can simplify R&D Tax Incentive applications for certain trials of therapeutic goods not yet approved in Australia."
faqs:
  - q: "Should a trial site network build its own CTMS?"
    a: "Usually not a full one. Commercial clinical trial management systems exist and carry validation work you would otherwise repeat. A network often gets more from a focused start up tracker and finance layer that sits beside the sponsor's systems, because those are the parts commercial products and sponsor portals handle least well for Australian ethics and governance steps."
  - q: "Is REDCap good enough for an industry sponsored trial?"
    a: "It depends on the sponsor's requirements, the validation evidence they expect and how your institution has configured REDCap. REDCap is used by thousands of institutions worldwide, but industry sponsors often specify their own EDC, such as Medidata Rave. For investigator initiated trials, REDCap is a common and sensible choice."
  - q: "Can AI decide whether a patient is eligible for a trial?"
    a: "It can suggest likely candidates for a study coordinator to review against the protocol. It shouldn't make the eligibility decision, and investigators remain responsible for enrolment. Pre screening uses health records, so the tool needs ethics approval for that use where required, privacy controls and an audit trail of every suggestion and decision."
  - q: "Do we need Part 11 compliance if the trial runs only in Australia?"
    a: "Part 11 is a US FDA rule. It matters when the data may support a submission to the FDA, which is common when the sponsor is American. Australian trials follow ICH GCP as adopted by the TGA. A system built to Part 11's audit trail and access controls will generally meet GCP expectations for data integrity too, but your sponsor and quality lead decide what evidence they need."
  - q: "Are software costs for a trial eligible for the R&D Tax Incentive?"
    a: "Some may be, as supporting R&D activities directly related to a registered trial, but eligibility depends on the facts. business.gov.au explains how the Clinical Trials Determination works and when advance or overseas findings apply. Talk to a registered R&D tax agent before you budget on it; we can't advise on eligibility."
  - q: "What does a start up tracker for a site network cost?"
    a: "As an indicative planning range, about $40,000 to $120,000 (AUD, ex GST), depending on the number of sites, ethics and governance pathways, document versioning and integrations. It is a range for budgeting, not a quote."
sources:
  - title: "Clinical Trial Notification (CTN) scheme"
    url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/access-pathways/clinical-trials/clinical-trial-notification-ctn-scheme"
    publisher: "Therapeutic Goods Administration"
  - title: "Clinical trials"
    url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/clinical-trials"
    publisher: "Therapeutic Goods Administration"
  - title: "ICH Guideline for Good Clinical Practice"
    url: "https://www.tga.gov.au/resources/publication/corporate-reports/ich-guideline-good-clinical-practice"
    publisher: "Therapeutic Goods Administration"
  - title: "Good Clinical Practice (GCP) Inspection Program"
    url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/access-pathways/clinical-trials/good-clinical-practice-gcp-inspection-program"
    publisher: "Therapeutic Goods Administration"
  - title: "National Clinical Trials Governance Framework"
    url: "https://www.safetyandquality.gov.au/national-standards/national-clinical-trials-governance-framework"
    publisher: "Australian Commission on Safety and Quality in Health Care"
  - title: "21 CFR Part 11: Electronic records; electronic signatures"
    url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11"
    publisher: "US Government (eCFR)"
  - title: "Biotechnology and medical sciences sector guide for the R&D Tax Incentive"
    url: "https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/sector-guides-for-r-and-d-tax-incentive-applicants/biotechnology"
    publisher: "business.gov.au"
  - title: "REDCap"
    url: "https://projectredcap.org/"
    publisher: "Vanderbilt University"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "R&D Tax Incentive for software development"
    href: "/guides/rd-tax-incentive-software-development"
  - title: "AI in healthcare: privacy, TGA rules and My Health Record"
    href: "/solutions/ai-in-healthcare"
  - title: "Specialist medical practice software"
    href: "/solutions/specialist-medical-practice-software"
  - title: "Data engineering"
    href: "/services/data-engineering"
service:
  title: "Data engineering"
  href: "/services/data-engineering"
industry:
  title: "Healthcare"
  href: "/industries/healthcare"
disclaimer: tax
---

## Sponsor, CRO or site: whose problem are you solving?

**The same trial looks like three different software problems depending on where you sit.** A sponsor, often an overseas biotech or device company, owns the protocol, the data and the regulatory submission. A contract research organisation runs the trial on the sponsor's behalf, usually across several sites and countries. A site, whether a hospital research unit or a private trial clinic, recruits patients, delivers the visits and gets paid per milestone.

| Buyer | What hurts | Typical build |
|---|---|---|
| Sponsor or CRO | Start up delays across Australian ethics and governance | Start up tracker across sites with document versions and approvals |
| Sponsor with US plans | Audit evidence for FDA review | Part 11 style audit trail and e signature on custom tools |
| Site network | Finding eligible patients fast enough | Pre screening over clinical system extracts, coordinator review queue |
| Site | Getting paid for completed visits | Visit to invoice reconciliation against the clinical trial agreement |

The data capture itself is rarely the gap. REDCap, which its consortium says is used by more than 8,500 institutions in 167 countries, is common for investigator initiated trials, and industry sponsors often mandate a commercial EDC such as Medidata Rave. Document management often sits in Veeva Vault or a similar product. Custom work goes in between.

## CTN, ethics and governance: tracking the start up path

**Australia's start up path has several independent approvals running in parallel, and a tracker earns its keep by showing them in one view.** Under the TGA's Clinical Trial Notification scheme, the TGA doesn't evaluate any trial data at the time of notification. Alongside the CTN, the sponsor needs approval from a Human Research Ethics Committee and from the institution or organisation where the trial runs, called the approving authority. It is the Australian sponsor's responsibility to have all approvals in place, and the product can't be supplied until the CTN has been submitted and the fee paid. The Clinical Trial Approval scheme still runs on two paper based forms the sponsor completes, and the TGA is reviewing it.

Ethics review is moving too. The Commission notes that the Department of Health, Disability and Ageing now leads the National One Stop Shop and the former National Mutual Acceptance scheme, now called the HREC accreditation scheme. Health services that deliver trials are assessed against the National Clinical Trials Governance Framework, and the Commission is decommissioning its Clinical Trials Portal in November 2026.

A start up tracker for a site network or CRO usually records, per site:

1. Feasibility and site selection outcome.
2. HREC submission, queries and approval, with the approved document versions.
3. Site governance submission and authorisation.
4. CTN or CTA status and fee.
5. Clinical trial agreement and budget sign off.
6. Trial registration on a registry such as ANZCTR before the first participant, which the National Statement requires.
7. Site initiation visit and green light.

Each step needs dates, owners and documents, and the whole thing needs a view that tells a sponsor in another time zone exactly which site is waiting on what.

## ICH GCP E6(R3) and audit trails

**E6(R3) is now in force in Australia, and the transition ends on 13 January 2027.** The TGA says the E6(R3) Principles and Annex 1 came into effect on 13 January 2026, starting a 12 month transition. During that period, trials under the CTN and CTA schemes must comply with either E6(R2) or E6(R3). The TGA asks sites to review E6(R3) against current practice, develop an implementation plan where gaps exist, and keep records of how the review was done, the decisions made and the reasons, including any risk proportionate approaches. The plan doesn't go to the TGA or HREC, but changes to approved study documents follow the normal amendment process. Device trials run to ISO 14155 have their own 12 month transition for the 2026 version of that standard, from 31 March 2026 to 31 March 2027.

For software, the practical upshot is data integrity. Any custom tool that creates or changes trial records should:

- Record who did what and when, in an audit trail users can't edit.
- Never overwrite earlier values; keep the history.
- Control access by role and delegation log.
- Keep validation evidence: requirements, tests and results for each release.

When the sponsor is American, add FDA 21 CFR Part 11. Section 11.10(e) requires secure, computer generated, time stamped audit trails recording operator entries and actions that create, modify or delete electronic records, retained as long as the records themselves, and record changes must not obscure earlier information. Building to that standard from the start is cheaper than retrofitting it when the sponsor's auditor arrives.

## Recruitment and pre screening, with AI where it helps

**Pre screening finds patients who might be eligible so a coordinator can check; it is not enrolment.** Eligibility criteria in a protocol are long and precise, and matching them by hand against clinical records is slow. A pre screening tool reads de identified or consented extracts from the clinical system, applies the structured criteria (age, diagnosis codes, recent results, medications), and uses an AI model to read free text notes for criteria that structured data can't answer. The coordinator sees a ranked list with the evidence for each suggestion and makes the call.

Three design rules keep this safe. Every AI suggestion shows the text it relied on. Investigators remain responsible for enrolment decisions. And the data use is covered by the trial's ethics approval and the institution's privacy obligations, with hosting in an Australian region. Our [AI in healthcare](/solutions/ai-in-healthcare) page explains when software that analyses patient data becomes a medical device.

## Site finances and invoicing sponsors

**Sites lose money when completed visits and procedures don't turn into invoices.** The clinical trial agreement sets payments per visit, per procedure and for screen failures, and the visit data sits in the EDC or the site's own records. A reconciliation tool matches completed visits to the payment schedule, raises invoices or milestone claims, and shows what each sponsor owes. It can connect to Xero or the institution's finance system through our [Xero and MYOB integration](/services/xero-myob-integration) work.

## R&D Tax Incentive treatment of trial costs

**Trial costs can be R&D expenditure, but eligibility is a tax question for your adviser.** business.gov.au's biotechnology sector guide explains that the Industry Research and Development (Clinical Trials) Determination 2022 applies to certain clinical trial activities for therapeutic goods not yet approved in Australia. If your activities meet its requirements, you may only need to show they are covered by the determination rather than explain how they meet every core R&D test. The same guidance covers advance findings and overseas findings, and gives an example of supporting activities around a phase IIa trial. We aren't a registered tax agent and can't advise on eligibility; see our [R&D Tax Incentive for software development](/guides/rd-tax-incentive-software-development) guide and talk to a registered R&D tax agent.

## Indicative costs

**Indicative planning ranges for the Australian market, not quotes.** Conduct's cost guide puts mid sized Australian agencies at roughly $150 to $330 an hour.

| Build | Indicative range (AUD, ex GST) | Main drivers |
|---|---|---|
| Start up tracker for a site network | $40k to $120k | Sites, approval pathways, document versioning, sponsor access |
| Pre screening tool over clinical extracts | $60k to $180k | Data sources, criteria complexity, AI evaluation, validation |
| Site finance reconciliation | $30k to $80k | Payment schedules, EDC data access, finance integration |

Validation documentation adds to each build, and you should budget for it explicitly.

## How AWLabs approaches clinical trial software

We begin with a Development Consult, then a paid Discovery Audit, whose fee is credited in full against the build, to map your approvals, systems and validation expectations. You then choose from a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates arrive every Tuesday and Friday, Sydney time, and code is assigned to you as it is paid for. We haven't yet delivered a clinical trial system, we aren't a CRO, and your quality lead and investigators own every GCP and regulatory decision. The pipelines behind pre screening and reporting sit in our [data engineering](/services/data-engineering) service.
