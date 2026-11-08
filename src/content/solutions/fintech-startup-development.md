---
title: "Fintech app development in Australia: licences, sandbox and build"
metaTitle: "Fintech Software Development Australia: Licence, Then Build"
description: "Fintech software development in Australia: AFSL, ACL or sandbox first, payments licensing drafts, AML/CTF from 2026, scams rules, CDR access and MVP costs."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "A fintech product in Australia is shaped by its regulatory path before its architecture. Founders choose between their own AFS or credit licence, operating as an authorised representative of someone else's licence, or testing under ASIC's enhanced regulatory sandbox for up to 24 months, then pick partners for banking, payments, identity and data. That choice decides what the first release must log, report and evidence. With AML/CTF changes from 31 March 2026, the Scams Prevention Framework's sectors designated in 2026 and payments licensing still in draft, a fintech MVP built for these obligations, with KYC and a payments partner typically costs $120,000 to $300,000 (AUD, ex GST) as a market range, not a quote."
takeaways:
  - "Work out the licence path first: own AFSL or ACL, authorised representative, or the enhanced regulatory sandbox. It changes your obligations, your partners' due diligence and your data model."
  - "The sandbox allows testing for up to 24 months without a licence, with a $10,000 limit per retail client for certain products, a $5 million total exposure limit, AFCA membership and usually PI insurance."
  - "Treasury has released draft legislation to regulate payment service providers in tranches. Build wallets and stored value with that change in mind."
  - "The Scams Prevention Framework Act 2025 is law, and banking, telecommunications and digital platforms were designated as regulated sectors in May 2026."
  - "AWLabs holds no AFSL, credit licence or CDR accreditation. We build software; your lawyers and licensee settle the regulatory path."
faqs:
  - q: "Do I need an AFSL before I build my fintech app?"
    a: "Not before you build, but before you offer a regulated financial service or credit activity to the public, unless an exemption such as the enhanced regulatory sandbox applies, or you operate as an authorised representative of a licensee. Most founders build an MVP while the licensing or partner arrangement is being settled, so the product can launch when it is."
  - q: "What is the enhanced regulatory sandbox?"
    a: "An exemption, introduced on 1 September 2020, that lets eligible businesses test certain innovative financial services or credit activities for up to 24 months without an AFS or credit licence. You must pass a net public benefit test and an innovation test, notify ASIC in the prescribed form, join AFCA, usually hold PI insurance, and stay within exposure limits."
  - q: "How do fintechs get bank data?"
    a: "Through the Consumer Data Right, either by becoming an accredited data recipient through the ACCC, or more commonly by working through a CDR provider such as Basiq or Adatree under a CDR representative or similar arrangement. Our CDR guide compares the pathways in detail."
  - q: "Which partners does a typical Australian fintech need?"
    a: "Usually a bank or banking as a service partner for accounts or cards, a payments provider for PayTo, NPP or card acquiring, an identity verification provider for KYC, and sometimes a CDR data provider. Cuscal, for example, provides payments and regulated data services to fintechs, and Zepto offers PayTo and NPP payments. Each partner will run due diligence on your controls."
  - q: "How long does a fintech MVP take to build?"
    a: "The software is often not the longest part. A focused MVP with onboarding, KYC, a payments integration and an admin console takes several months of engineering, but partner onboarding, security reviews and licensing can take as long or longer. Plan them in parallel."
  - q: "Have you built fintech products before?"
    a: "AWLabs has not delivered a regulated fintech product for a client, so we won't claim one. We bring payments, identity, data and AI integration engineering, and we work alongside your lawyers and compliance advisers on the regulatory side. We hold no AFSL, credit licence or CDR accreditation."
sources:
  - title: "ASD Essentials"
    url: "https://www.cyber.gov.au/essentials"
    publisher: "Australian Signals Directorate"
  - title: "Enhanced regulatory sandbox (ERS)"
    url: "https://asic.gov.au/for-business/innovation-hub/enhanced-regulatory-sandbox/"
    publisher: "ASIC"
  - title: "INFO 248 Enhanced regulatory sandbox"
    url: "https://asic.gov.au/for-business-and-companies/innovation-hub/enhanced-regulatory-sandbox-ers/info-248-enhanced-regulatory-sandbox"
    publisher: "ASIC"
  - title: "Regulation of Payment Service Providers: Tranche 1 draft legislation"
    url: "https://treasury.gov.au/consultation/c2026-746108"
    publisher: "Treasury"
  - title: "Regulation of Payment Service Providers: Tranche 1a draft legislation"
    url: "https://treasury.gov.au/consultation/c2025-700532"
    publisher: "Treasury"
  - title: "Treasury Laws Amendment (Payments System Modernisation) Act 2025"
    url: "https://www.legislation.gov.au/C2025A00046/asmade"
    publisher: "Federal Register of Legislation"
  - title: "Scams Prevention Framework Act 2025"
    url: "https://www.legislation.gov.au/C2025A00015/asmade"
    publisher: "Federal Register of Legislation"
  - title: "Competition and Consumer (Scams Prevention Framework: Regulated Sectors) Designation 2026"
    url: "https://www.legislation.gov.au/F2026L00627/asmade/text"
    publisher: "Federal Register of Legislation"
  - title: "About the AML/CTF reforms"
    url: "https://www.austrac.gov.au/industry-and-business/about-amlctf-reforms/about-reforms"
    publisher: "AUSTRAC"
  - title: "Become an accredited data recipient"
    url: "https://www.cdr.gov.au/for-providers/become-accredited-data-recipient"
    publisher: "Consumer Data Right"
  - title: "Basiq open banking platform"
    url: "https://www.basiq.io/"
    publisher: "Basiq"
  - title: "Adatree: simplifying access to the Consumer Data Right"
    url: "https://www.adatree.com.au/"
    publisher: "Adatree"
  - title: "Zepto account to account payments"
    url: "https://www.zepto.com.au/"
    publisher: "Zepto"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "MVP development cost in Australia"
    href: "/guides/mvp-development-cost-australia"
  - title: "Consumer Data Right software"
    href: "/guides/consumer-data-right-software"
  - title: "Startup MVP development"
    href: "/startup-mvp"
  - title: "Essential Eight and ASD Essentials for software development"
    href: "/guides/essential-eight-software-development"
  - title: "Loan origination and servicing software for Australian lenders"
    href: "/solutions/lending-software"
  - title: "How to integrate PayTo into your app or billing system"
    href: "/guides/payto-integration"
service:
  title: "Custom app development"
  href: "/services/custom-app-development"
industry:
  title: "Finance and fintech"
  href: "/industries/finance-fintech"
disclaimer: "legal"
---

## Why does the licence decision come before the architecture?

**In Australian fintech, the regulatory path decides who your customer legally deals with, what you must record and which partners will work with you, so it has to be settled before the system design is.** A budgeting app, a lending product, a wallet and an investment adviser each touch different laws, and the same product can be built three ways depending on whose licence it runs under.

The main options:

| Path | What it means | Best for | Watch out for |
|---|---|---|---|
| Your own AFSL or Australian credit licence | You are the licensee and carry the obligations directly | Founders with capital, compliance staff and a long runway | Time to grant, responsible manager requirements, ongoing obligations |
| Authorised representative or credit representative | You operate under another licensee's authorisation | Fast launch with a partner who already holds the licence | The licensee controls key decisions and will audit you |
| ASIC enhanced regulatory sandbox | Time limited exemption to test eligible services | Testing a genuinely new service with limited exposure | Exposure caps, eligibility tests, a hard 24 month limit |
| Partner led model | A bank or licensed partner provides the regulated product; you provide the interface | Cards, accounts and payments through banking as a service | Heavy due diligence and contractual controls |

The choice is a legal one for your lawyers. What the software team needs to know is which entity owns the customer relationship, who performs KYC, who handles complaints and who reports to which regulator. Those answers become the data model.

## How does the enhanced regulatory sandbox work?

**The enhanced regulatory sandbox, introduced on 1 September 2020, lets eligible businesses test certain financial services or credit activities for up to 24 months without first holding an AFS or credit licence.** ASIC's INFO 248 sets out the conditions.

- **Eligibility.** You must pass a net public benefit test and an innovation test, and notify ASIC in the prescribed form.
- **Limits.** Each retail client can commit at most $10,000 in certain financial products, and an aggregate $5 million exposure limit applies across all clients and services, including past sandbox use.
- **Credit.** Eligible credit contracts must run no more than four years, with a credit limit above $2,000 and below $25,000, and exclude reverse mortgages and small amount credit contracts.
- **Ongoing conditions.** Conduct and disclosure obligations, AFCA membership and, ordinarily, adequate PI insurance.

ASIC publishes current users. Recent entries include a PayTo based multi merchant payment service, a stablecoin and fiat payments interface, and an AI investment plan app, which shows the range of models being tested. For software, the sandbox means exposure tracking is a feature from day one: the system must know each retail client's committed value and the running total against $5 million.

## What do the payments licensing reforms mean for wallets and stored value?

**Treasury is moving payment service providers into a licensing regime in stages, and at the time of writing the provider rules are still draft legislation.** Treasury's consultation list shows Regulation of Payment Service Providers draft legislation released as Tranche 1a in 2025 and Tranche 1 in 2026. Separately, the Treasury Laws Amendment (Payments System Modernisation) Act 2025 updated the Payment Systems (Regulation) Act 1998.

If your product holds customer money, issues stored value, or initiates payments for others, design so the regulated parts can be moved or reinforced later:

- Keep customer funds logic, ledgers and reconciliation in a separate service with its own audit trail.
- Record which licensed partner holds funds at each moment.
- Make terms, disclosures and limits configuration rather than code.

## Which AML/CTF obligations apply from 2026?

**AUSTRAC says changes for current reporting entities, including AML/CTF program requirements and customer due diligence, started on 31 March 2026 unless deferred under the transitional rules, and newly regulated services join from 1 July 2026.** If your product provides a designated service, such as a loan, an account, remittance or certain virtual asset services, you are likely a reporting entity in your own right, not just your partner's customer.

What the systems need:

1. Customer due diligence at onboarding, with results stored against the customer.
2. Ongoing monitoring rules and alerts, with a case management screen.
3. Escalation and reporting workflows controlled by your AML/CTF compliance officer.
4. Record retention that matches your program.

Transaction monitoring and case management is often a separate build after the MVP, but its data must be captured from the first transaction.

## Does the Scams Prevention Framework apply to you?

**The Scams Prevention Framework Act 2025 received Royal Assent on 20 February 2025, and a designation instrument made in May 2026 names banking, telecommunications and digital platforms as the first regulated sectors.** The digital platforms sector covers designated social media, internet search and instant messaging services. Rules followed in August 2026, with transitional provisions for each sector.

A fintech outside those sectors may still feel the framework through its partners. A bank partner subject to the framework will expect you to help it detect, disrupt and report scams, for example by passing payee details, flagging unusual payment patterns and supporting confirmation of payee checks. Ask your bank partner what it will require before you design payment flows.

## How do you get open banking data through CDR?

**Most fintechs access Consumer Data Right data through an accredited provider rather than becoming accredited themselves, because accreditation requires an ACCC assessment, information security controls and conformance testing before activation on the CDR Register.** Providers such as Basiq and Adatree offer CDR access as a service; confirm each provider's accreditation on the CDR Register before you sign. Our [Consumer Data Right guide](/guides/consumer-data-right-software) explains the accreditation, CDR representative and sponsored models and their trade-offs.

## What will banking and payments partners ask about?

**Every partner runs due diligence, and the questions are predictable: security controls, data location, access control, incident response, change management and evidence of each.** Building those in from the start costs far less than retrofitting them before a partner's security review.

Expect to answer:

- Where is customer data stored and processed, and in which cloud region?
- How are production access and secrets controlled and logged?
- How do you detect and respond to incidents, and how fast will you notify us?
- How are changes reviewed, tested and deployed?
- What penetration testing has been done, and by whom?

Australian cloud regions such as AWS ap-southeast-2 (Sydney) make data location straightforward. Our guide to the [Essential Eight and ASD Essentials in software development](/guides/essential-eight-software-development) covers the controls partners often map to, and what changed when ASD published ASD Essentials on 15 October 2026.

## Which architecture choices matter most early?

**Three decisions are expensive to change later: how money is recorded, how events are logged and how customer data is separated.** Get these right in the MVP even if everything else is basic.

- **A double entry ledger.** Record every movement of value as balanced entries with immutable history, rather than updating a balance field. Reconciliation with your partner's statements depends on it.
- **Idempotent payment calls.** Networks and partner APIs retry. Every payment instruction needs a unique key so a retry never pays twice.
- **An append only audit log.** Who did what, when, from where, for staff and customers alike. Partners, auditors and AUSTRAC obligations all lean on it.
- **Data separation by sensitivity.** Identity documents, credit data and payment credentials each get their own storage, encryption keys and access roles.

None of these are regulatory requirements in themselves, but each makes the regulatory evidence far easier to produce.

## What does a fintech MVP cost?

**These are indicative AUD market ranges, ex GST, not quotes.** Expeed publishes $40,000 to $150,000 for mid complexity systems and $150,000 to $500,000 or more for enterprise and industry specific systems. A regulated fintech MVP usually lands across the boundary.

| Build | Includes | Indicative range |
|---|---|---|
| Fintech MVP with KYC and payments partner | Mobile or web app, onboarding, identity verification, payments integration, ledger, admin console, audit logs | $120,000 to $300,000 |
| Transaction monitoring and case management | Rules, alerts, case screens, reporting workflow | $60,000 to $150,000 |
| CDR data integration through a provider | Consent flows, data retrieval, categorisation, consent records | $30,000 to $80,000 |

Partner fees, licensing costs, legal advice and penetration testing sit on top. Our [MVP cost guide](/guides/mvp-development-cost-australia) explains how scope drives these numbers.

## How AWLabs works with fintech founders

We start with a Development Consult to understand the product and the regulatory path you are considering. A paid Discovery Audit then maps partner requirements, data flows and what the first release must evidence, and you receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with updates every Tuesday and Friday, Sydney time.

AWLabs has not yet delivered a regulated fintech product for a client, and we hold no AFSL, credit licence or CDR accreditation. This page is general information, not legal or financial advice. See our [startup MVP offer](/startup-mvp) and wider [finance and fintech](/industries/finance-fintech) work.
