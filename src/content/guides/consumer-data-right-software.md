---
title: "Consumer Data Right in Australia: what software builders need to know"
metaTitle: "Consumer Data Right (CDR) Australia: A Guide for Builders"
description: "What the Consumer Data Right covers in November 2026 (banking, energy, non-bank lending), the ways to access CDR data, and what an accredited app must build."
eyebrow: "Australian regulation"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "The Consumer Data Right (CDR) is Australia's regulated data sharing scheme: consumers can direct a data holder, such as their bank or energy retailer, to share their data with an accredited data recipient. As at 8 November 2026 it is live in banking and energy, and non-bank lending is joining, with product data sharing from 13 July 2026 and consumer data sharing from 9 November 2026 for the largest lenders. To build on it, you either become accredited by the ACCC, take sponsored accreditation, operate as a CDR representative of an accredited principal, or use CDR insights through someone else."
takeaways:
  - "CDR is live in banking (since 1 July 2020) and energy (since 15 November 2022). Non-bank lenders start consumer data sharing in stages from 9 November 2026."
  - "Most startups don't need their own accreditation. The CDR representative model lets an unaccredited business use CDR data under a written contract with an unrestricted accredited principal, who is liable for it."
  - "Accredited data recipients carry ongoing obligations: consent flows and dashboards, records including a video of the consent process, twice yearly reports, attestation and assurance reports, and minimum security controls."
  - "Product reference data, such as published rates and fees, is available to any business and needs no accreditation."
  - "The ACCC accredits recipients, the OAIC regulates the privacy safeguards, Treasury owns the policy and rules, and the Data Standards Body writes the technical standards."
faqs:
  - q: "What is the Consumer Data Right in simple terms?"
    a: "It is a legal right for Australian consumers, including small businesses, to direct certain businesses that hold data about them to share it securely with another provider they choose. The data moves between providers through standardised APIs, and only providers accredited by the ACCC, or their authorised representatives, can receive it."
  - q: "Which sectors does the Consumer Data Right cover in 2026?"
    a: "Banking and energy are live. The non-bank lenders sector was designated in November 2022, product data sharing obligations started on 13 July 2026, and consumer data sharing starts from 9 November 2026 for initial providers and 10 May 2027 for large providers, according to cdr.gov.au."
  - q: "Do I need CDR accreditation to build a fintech app?"
    a: "Not necessarily. You can operate as a CDR representative of an unrestricted accredited person, take sponsored accreditation through a sponsor, receive CDR insights for limited verification purposes, or use only public product reference data. Full accreditation suits businesses that want direct control and can carry the ongoing compliance."
  - q: "What is the difference between an accredited data recipient and a CDR representative?"
    a: "An accredited data recipient is accredited by the ACCC in its own right and is directly bound by the CDR Rules and privacy safeguards. A CDR representative is unaccredited, receives CDR data only from its single CDR principal under a written contract that meets the CDR Rules, and the principal is liable for its handling of the data."
  - q: "How long does a CDR consent last?"
    a: "The consumer chooses the sharing period, up to a maximum of 12 months, and can withdraw consent at any time. Your app must show active consents in a dashboard and let the consumer withdraw them."
  - q: "Is the Consumer Data Right the same as open banking?"
    a: "Open banking is the banking part of the Consumer Data Right. The CDR framework is designed to work across sectors, which is why energy and non-bank lending use the same accreditation, consent and privacy safeguard framework."
  - q: "Can AWLabs make my app CDR compliant?"
    a: "No developer can make you compliant; that responsibility sits with the accredited person or principal. AWLabs is not an accredited data recipient. We build the application, integrate it with your chosen accredited principal or intermediary, and implement the consent, dashboard and record keeping features that your compliance obligations require."
sources:
  - title: "What is Consumer Data Right"
    url: "https://www.cdr.gov.au/what-is-cdr"
    publisher: "cdr.gov.au (Australian Government)"
  - title: "CDR rollout and timeline"
    url: "https://www.cdr.gov.au/rollout"
    publisher: "cdr.gov.au (Australian Government)"
  - title: "CDR in the non-bank lenders sector"
    url: "https://www.cdr.gov.au/rollout/cdr-non-bank-lenders-sector"
    publisher: "cdr.gov.au (Australian Government)"
  - title: "The Consumer Data Right"
    url: "https://www.accc.gov.au/by-industry/banking-and-finance/the-consumer-data-right"
    publisher: "Australian Competition and Consumer Commission"
  - title: "How to become an accredited data recipient"
    url: "https://www.cdr.gov.au/for-providers/become-accredited-data-recipient"
    publisher: "cdr.gov.au (Australian Government)"
  - title: "Legal obligations for accredited data recipients"
    url: "https://www.cdr.gov.au/for-providers/legal-obligations-data-recipients"
    publisher: "cdr.gov.au (Australian Government)"
  - title: "IT requirements for accredited data recipients"
    url: "https://www.cdr.gov.au/for-providers/it-requirements-data-recipients"
    publisher: "cdr.gov.au (Australian Government)"
  - title: "CDR representative model: privacy obligations of a CDR representative"
    url: "https://www.oaic.gov.au/consumer-data-right/consumer-data-right-guidance-for-business/privacy-obligations/cdr-representative-model-privacy-obligations-of-a-cdr-representative"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Sponsored accreditation model: privacy obligations of an affiliate"
    url: "https://www.oaic.gov.au/consumer-data-right/consumer-data-right-guidance-for-business/privacy-obligations/sponsored-accreditation-model-privacy-obligations-of-an-affiliate"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Consumer Data Right insights"
    url: "https://www.oaic.gov.au/consumer-data-right/consumer-data-right-guidance-for-business/privacy-obligations/consumer-data-right-insights"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Trusted advisers in the Consumer Data Right system"
    url: "https://www.oaic.gov.au/consumer-data-right/guidance-and-advice/trusted-advisers-in-the-Consumer-Data-Right-system"
    publisher: "Office of the Australian Information Commissioner"
related:
  - title: "AI for financial services"
    href: "/solutions/ai-for-financial-services"
  - title: "Finance and fintech software"
    href: "/industries/finance-fintech"
  - title: "Notifiable Data Breaches and your software"
    href: "/guides/notifiable-data-breaches-software"
  - title: "APRA CPS 234 and AI"
    href: "/guides/apra-cps-234-ai"
service:
  title: "API development and integration"
  href: "/services/api-development"
disclaimer: legal
---

## What is the Consumer Data Right?

**The Consumer Data Right (CDR) is an Australian Government scheme that lets consumers direct businesses holding their data to share it, securely and in a standard format, with an accredited provider they choose.** It is established by Part IVD of the Competition and Consumer Act 2010, with the detail in the Competition and Consumer (Consumer Data Right) Rules 2020 and the Consumer Data Standards.

For a software builder, three facts shape everything else:

1. **It is consent driven.** Nothing moves unless the consumer asks for it, chooses what to share and for how long, and can withdraw at any time.
2. **Only accredited recipients, or their authorised representatives, can receive consumer data.** The ACCC runs accreditation and the register that controls who can connect.
3. **"Consumer" includes small businesses.** The scheme covers business customers as well as individuals, which matters for accounting, lending and cash flow products.

Four agencies share the work. Treasury is the policy agency and makes the rules. The ACCC accredits data recipients, runs the CDR Register, the accreditation portal and the Conformance Test Suite, and shares compliance and enforcement with the OAIC. The OAIC regulates the 13 privacy safeguards. The Data Standards Body develops the technical, security and consumer experience standards.

## Which sectors are live in November 2026?

**As at 8 November 2026, the CDR is live in banking and energy, and the non-bank lenders sector is phasing in.** cdr.gov.au describes non-bank lending as the third sector. The dates below come from cdr.gov.au and the ACCC.

| Sector | Status at the time of writing | Who must share |
|---|---|---|
| Banking (open banking) | Consumer data sharing live since 1 July 2020, phased by product and bank size to 2022 | All Australian banks, according to the ACCC |
| Energy | Consumer data sharing began 15 November 2022; smaller retailers from November 2023 | National Electricity Market retailers with more than 10,000 customers, plus AEMO for certain data |
| Non-bank lending | Designated 21 November 2022. Product data sharing from 13 July 2026. Consumer data sharing from 9 November 2026 (initial providers) and 10 May 2027 (large providers) | Relevant non-bank lenders that are initial or large providers under the rules; others may join voluntarily |

Two details for the non-bank lending sector are worth knowing before you plan a product around it:

- **Initial providers** are lenders whose combined resident loans and finance leases reported to APRA were over $10 billion, measured around 4 March 2025. **Large providers** have over 1,000 customers and over $1 billion, or are themselves accredited persons.
- **Complex requests are out of scope** in non-bank lending. Data holders don't have to respond to requests made for a secondary user, a consumer with a nominated representative, or a joint or partnership account.

### How the scheme got here

| Date | Milestone (from cdr.gov.au) |
|---|---|
| July 2020 | CDR launches with the four major banks |
| November 2022 | Energy consumer data sharing starts; non-bank lending designated |
| August 2024 | Government announces a reset of the CDR to deliver better consumer outcomes |
| March 2025 | Version 8 Rules registered: non-bank lending from July 2026, banking data scope narrowed to reduce compliance costs |
| 13 July 2026 | Non-bank lender product data sharing begins |
| 9 November 2026 | Non-bank lender consumer data sharing begins for initial providers |
| 10 May 2027 | Consumer data sharing begins for large non-bank lenders |

Policy here moves. Check the rollout page on cdr.gov.au before you commit a roadmap to a sector or date.

## What are the ways to get access to CDR data?

**There are five practical routes, and most new products should start with the lightest one that supports the use case.** The models below are set out in the CDR Rules and explained in OAIC and cdr.gov.au guidance.

| Route | Who is accredited | What you can do | Who carries liability | Suits |
|---|---|---|---|---|
| Unrestricted accreditation | You | Collect from data holders directly; act as a principal or sponsor for others | You | Established fintechs and intermediaries that want direct control |
| Sponsored accreditation (affiliate) | You, at the sponsored level | Receive data through your sponsor; can't collect from data holders directly; can have more than one sponsor | Each party in its own right | Businesses wanting accreditation without building direct data holder connections |
| CDR representative | Not you; your principal is unrestricted | Provide CDR goods or services directly to consumers using data from one principal | The CDR principal | Startups and software products that need data but not the compliance burden |
| CDR insights | Not the recipient | Receive a limited insight to verify identity, balance, or credits and debits | The accredited person or representative disclosing it | Lenders, landlords and others who need a yes or no, not raw data |
| Product reference data only | Nobody | Use public, standardised product information such as rates and fees | Not applicable | Comparison tools |

A few constraints from the OAIC guidance catch builders out:

- **A CDR representative can have only one principal**, can only collect CDR data from that principal, and must be entered on the Register of Accredited Persons before it seeks consent.
- **An affiliate can't use an outsourced service provider to collect CDR data** on its behalf, and can't collect from a data holder directly.
- **Insights have hard limits.** They must not include or reveal sensitive information, and where an insight relates to more than one transaction, the amount or date of any individual transaction can't be disclosed.
- **Trusted advisers sit outside the system.** A consumer can consent to their data going to a nominated accountant, lawyer, registered tax or BAS agent, financial counsellor, financial adviser or mortgage broker. Those advisers are not CDR participants, so the data loses CDR protections once it leaves.

## What does an accredited app have to build?

**Accreditation is mostly a product and operations commitment, not a one off API integration.** cdr.gov.au lists the obligations for accredited data recipients. Use this as a build checklist, and note that a CDR representative will usually have equivalent obligations passed down through its contract with the principal.

**Consent and the consumer experience**

- Show your name and accreditation number during consent.
- Let the consumer choose data types and a sharing period of up to 12 months.
- Explain how to withdraw consent, any fees, and the right to have redundant data deleted.
- Disclose any sponsor or affiliate arrangements.
- Issue a CDR receipt naming the data holders the data came from.
- Provide a dashboard in the app or website where consumers can see what was collected, when, and from whom, and withdraw consent.
- Follow the mandatory consumer experience standards, and use the guidelines as the design reference.

**Records and reporting**

- Keep records of consents, amendments and withdrawals, data collected and disclosed, deletion choices, how data was used, complaints, and outsourcing, sponsorship and representative arrangements.
- Keep a video of the consent process as a record.
- Report to the ACCC and OAIC twice a year.
- Provide attestation statements and assurance reports on the cycle cdr.gov.au describes: confirmation statements within three months after the first reporting period and every second period after, and verification reports within three months after the second period and every second period after.

**Security and technical**

- Meet the minimum information security controls in Schedule 2 of the CDR Rules, including multi factor authentication, restricted admin privileges, audit logging, encryption, vulnerability management, secure coding and staff security training.
- Control any use of CDR data in non production environments, and manage CDR data as an information asset across its lifecycle.
- Implement the Consumer Data Standards information security profile and APIs.
- Pass the Conformance Test Suite before activation on the CDR Register.

**Privacy**

- Comply with the 13 privacy safeguards, including rules on use and disclosure, direct marketing, overseas disclosure, and deletion or de-identification of redundant data.
- Publish a CDR policy that consumers can easily find and understand.

Accreditation itself requires showing you are a fit and proper person, protect data adequately, have internal and external dispute resolution, hold adequate insurance, and have an Australian address for service. The ACCC may accredit, accredit with conditions or refuse.

## How should you design the software around CDR?

**Treat CDR data as a separately governed data set from the start, because the obligations attach to the data, not to your app.** Practical patterns we'd recommend:

1. **Keep CDR data in its own store.** Tag every record with the consent it was collected under, so withdrawal and deletion are queries, not investigations.
2. **Model consent as a first class object.** Scope, duration, data holders, status and history, with events for every change. Your dashboard, receipts and records all read from it.
3. **Build deletion and de-identification paths early.** When a consent ends, you need to know every derived copy, including analytics tables, caches and search indexes.
4. **Log for the auditor.** Assurance reports need evidence. Access logs, admin actions and change history should exist before you go live, not after.
5. **Watch AI features.** If you send CDR data to an AI model for categorisation or advice, that is a use of CDR data, may be an overseas disclosure, and must fit the consent. Read our guide on [Notifiable Data Breaches and your software](/guides/notifiable-data-breaches-software) alongside the CDR rules, since CDR data about individuals is usually personal information as well.
6. **Design for intermediaries changing.** If you are a representative, isolate the principal's API behind your own interface so a change of principal doesn't mean a rebuild. Our [API integration cost guide](/guides/api-integration-cost-australia) covers the effort and running costs of integrations like this.

If your organisation is also APRA regulated, CPS 234 obligations sit on top; see [APRA CPS 234 and AI](/guides/apra-cps-234-ai). For the wider industry context, see [finance and fintech software](/industries/finance-fintech) and [AI for financial services](/solutions/ai-for-financial-services).

## What does it cost and how long does it take?

**The biggest cost and time difference is between holding accreditation yourself and building under someone else's.** We haven't found reliable published figures for the all in cost of accreditation, so treat any number you're quoted as specific to that provider and ask what it includes. The cost drivers are clear from the obligations:

| Cost driver | Own accreditation | CDR representative |
|---|---|---|
| Accreditation application and assessment | Your team's time preparing evidence, policies and declarations | Not required; principal onboarding instead |
| Insurance adequate to compensate consumers | Yours to hold | Usually set by the principal's contract |
| Security controls to Schedule 2 | You implement and evidence them | Usually required by contract, often with less formal evidence |
| Attestation and assurance reports | Ongoing, on the reporting cycle | Generally the principal's obligation |
| Conformance testing and register onboarding | Yours | The principal's |
| Principal or intermediary fees | None | Ongoing commercial fees |
| App features: consent, dashboard, records | Yes | Yes, as required by the contract |

On timeline, the application flow on cdr.gov.au runs from portal account, to application, completeness check, assessment and decision, then onboarding and conformance testing before activation. Plan the product build in parallel, not after. Under the representative model, the gating items are usually the commercial agreement with the principal, the principal entering you on the register, and your consent and dashboard features passing the principal's review.

## Is CDR the right choice for your product?

**Use CDR when you need ongoing, consented access to detailed account data and the consumer value justifies the consent step.** Consider alternatives when:

- **You only need a fact, not the data.** Insights can verify identity, a balance or income credits without your business holding raw transactions.
- **You only need public product information.** Product reference data needs no accreditation.
- **The data sits in a sector that isn't designated.** CDR can't help with data holders outside banking, energy and non-bank lending.
- **The consumer will upload a document anyway.** For a one off check, a statement upload may be simpler, but it brings its own privacy and fraud risks under the Privacy Act.

## How AWLabs approaches CDR projects

AWLabs is not an accredited data recipient and doesn't hold CDR accreditation of any kind. Our role is the software: product design, the consent and dashboard experience against the Consumer Data Standards, integration with your accredited principal or intermediary through our [API development](/services/api-development) work, and the data model, logging and deletion paths your compliance team and assurance provider will need. Your organisation, or your principal, remains responsible for compliance. Engagements start with a Development Consult, then a paid Discovery Audit (credited in full against the build) that maps the access model and obligations, followed by a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build.
