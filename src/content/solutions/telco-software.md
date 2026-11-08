---
title: "Telco billing and compliance software for Australian ISPs and MVNOs"
metaTitle: "Telco Billing Software Australia: ACMA Rules in 2026"
description: "Telco software for Australian ISPs and MVNOs: ACMA hardship and outage standards, identity checks, the new consumer protections standard, NBN and the TIO."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Smaller Australian telcos, ISPs and MVNOs should run billing and provisioning on a specialist platform such as Emersion, and build the compliance workflows and customer portals around it. Those workflows are where the rules have tightened: ACMA's Financial Hardship Standard, the Customer Identity Authentication Determination, the outage communications standard and, from a date still to be set, a new Telecommunications (Consumer Protections) Industry Standard that will replace the TCP Code. Focused builds typically sit between $40,000 and $160,000 (AUD, ex GST) as an indicative planning range, not a quote. This page reflects the rules as at 8 November 2026."
takeaways:
  - "On 27 March 2026 ACMA announced it would replace the TCP Code with an industry standard; consultation on the draft Telecommunications (Consumer Protections) Industry Standard 2026 closes on 10 November 2026, and the 2019 code stays in force until the standard commences."
  - "The Financial Hardship Standard requires a published payment assistance policy, at least 6 assistance options, an outcome within 2 business days of assessment, and disconnection only as a last resort."
  - "Multi factor authentication is mandatory for high risk transactions such as SIM swaps, and records showing compliance must be kept for at least 1 year."
  - "For a major outage, telcos must update affected customers every 6 hours in the first 24 hours, then every 24 hours."
  - "AWLabs is not a carriage service provider and has not yet delivered a project for a telco."
faqs:
  - q: "Is the TCP Code still in force?"
    a: "Yes, for now. ACMA announced on 27 March 2026 that it would replace the code with an industry standard, and the Australian Telecommunications Alliance reports ACMA saying the 2019 code remains in force until the new standard commences. ACMA's consultation on the draft standard closes at 5 pm AEDT on 10 November 2026. Build to the current code and the existing standards now, and design your workflows so the new rules can be added as configuration."
  - q: "Which transactions need multi factor authentication?"
    a: "ACMA lists SIM swaps, postpaid to prepaid transfers, transfers of title, adding services to an account, activating a service for an overseas customer, buying an additional mobile phone, and blocking an IMEI or PEI. You may identify more based on your services. Any verification code or link you send must tell the customer a high risk interaction has started, not to share the code, and what to do if they didn't start it."
  - q: "Should we build our own billing platform?"
    a: "Usually not. Rating, prorating, usage charging, payment collection and NBN provisioning are mature features in platforms such as Emersion. Building them yourself costs more and delays launch. Custom software makes sense for the compliance layer, customer portals, reporting and anything specific to your niche, such as business bundles or regional fixed wireless."
  - q: "Do small ISPs have to join the TIO?"
    a: "Yes. The Telecommunications Industry Ombudsman says phone and internet providers in Australia are required to be members of the TIO scheme, and it publishes a public register of members. Your complaints workflow should track TIO referrals separately and keep the history the TIO will ask for."
  - q: "Can an AI chatbot handle telco support?"
    a: "It can answer plan, usage, billing and outage questions and collect details. It should hand over to a person when a customer mentions difficulty paying, family violence, a complaint, or a high risk transaction, and it must not complete a SIM swap or ownership change on its own. Those paths carry specific standards and need a person and proper authentication."
  - q: "What data must a telco keep?"
    a: "Under the data retention scheme in Part 5-1A of the TIA Act, service providers must collect and retain specified telecommunications data for at least two years, and the OAIC says that data is treated as personal information under the Privacy Act. Separate record keeping applies under Part 13 of the Telecommunications Act and under each ACMA standard. Your lawyers should set the retention schedule; your systems should enforce it."
sources:
  - title: "TCP Code Review 2024 to 2025"
    url: "https://www.commsalliance.com.au/hot-topics/tcp-code-review"
    publisher: "Australian Telecommunications Alliance"
  - title: "Proposal to make the Telecommunications (Consumer Protections) Industry Standard"
    url: "https://www.acma.gov.au/consultations/2026-09/proposal-make-telecommunications-consumer-protections-industry-standard"
    publisher: "ACMA"
  - title: "Stronger penalty options to lift telco consumer protections (15 October 2026)"
    url: "https://www.acma.gov.au/articles/2026-10/stronger-penalty-options-lift-telco-consumer-protections"
    publisher: "ACMA"
  - title: "Register of telco industry codes and standards"
    url: "https://www.acma.gov.au/register-telco-industry-codes-and-standards"
    publisher: "ACMA"
  - title: "Rules to protect customers in financial hardship"
    url: "https://www.acma.gov.au/rules-protect-customers-financial-hardship-0"
    publisher: "ACMA"
  - title: "Customer identity authentication rules"
    url: "https://www.acma.gov.au/customer-identity-authentication-rules"
    publisher: "ACMA"
  - title: "Rules for significant and major outages"
    url: "https://www.acma.gov.au/rules-significant-and-major-outages"
    publisher: "ACMA"
  - title: "TIO scheme members"
    url: "https://www.tio.com.au/members"
    publisher: "Telecommunications Industry Ombudsman"
  - title: "Telecommunications and privacy"
    url: "https://www.oaic.gov.au/privacy/privacy-legislation/related-legislation/telecommunications"
    publisher: "OAIC"
  - title: "Become an nbn provider"
    url: "https://www.nbnco.com.au/rsps/become-an-nbn-provider"
    publisher: "NBN Co"
  - title: "Emersion billing and service management"
    url: "https://www.emersion.com/"
    publisher: "Emersion"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "AI chatbot development"
    href: "/services/ai-chatbot"
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
  - title: "The Notifiable Data Breaches scheme for software"
    href: "/guides/notifiable-data-breaches-software"
  - title: "Enterprise software"
    href: "/services/enterprise-software"
service:
  title: "Enterprise software"
  href: "/services/enterprise-software"
industry:
  title: "Government and enterprise"
  href: "/industries/government-enterprise"
disclaimer: "legal"
---

## What does a small telco's stack look like?

**A small telco runs on four systems: billing and rating, provisioning to its wholesale suppliers, a CRM or ticketing tool, and customer channels.** The first two are usually one specialist platform. The rest is often a mix of a help desk product, a website and a lot of spreadsheets.

| Function | Typical approach | Gap that drives custom work |
|---|---|---|
| Billing and rating | Emersion or a wholesaler platform | Hardship arrangements, compliance records |
| Provisioning | NBN through a wholesaler or directly, mobile through an MVNE | Exception handling across suppliers |
| CRM and support | Salesforce, a help desk tool or the billing platform's CRM | Authentication steps, outage messages, TIO case tracking |
| Customer channels | Website, portal, app | Self service that respects the standards |

Emersion describes itself as a billing, service management and automation platform for telcos, ISPs and wholesalers, with NBN provisioning and usage rating. For most providers, configuring a platform like this is the right base. The compliance workflows around it are where providers differ and where regulators look.

## Which ACMA standards shape your systems?

**Since 2024 ACMA has moved key consumer protections from industry codes into enforceable standards, and three of them drive most system design: financial hardship, complaints handling and outage communications.** ACMA's register lists the Telecommunications (Financial Hardship) Industry Standard 2024 (made 1 February 2024), the Consumer Complaints Handling Standard 2018 as amended in April 2025, the Customer Communications for Outages Standard 2024 as varied in April 2025, and the Domestic, Family and Sexual Violence Consumer Protections Standard 2025 (made 6 June 2025).

The Financial Hardship Standard, which replaced the hardship chapter of the TCP Code, is the most workflow heavy. ACMA says telcos must:

1. Publish a payment assistance policy, linked from the homepage and summarised where customers apply.
2. Proactively identify customers who are, or may be, in financial hardship.
3. Train customer facing staff on the standard, the policy and the procedures.
4. Offer at least 6 assistance options, including compulsory options to defer payment and to set up a payment plan the customer can afford.
5. Tell the customer the outcome within 2 business days, with assessment still within 5 business days.
6. Use suspension or disconnection only as a last resort.
7. Keep records that show compliance.

For outages, ACMA says that during a major outage telcos must send update notifications to affected customers every 6 hours in the first 24 hours, then once every 24 hours, and publish current information on their website. From 30 June 2026, carriers must also publish outage registers.

A compliance layer turns each of these into a workflow with timers, templates and an audit trail rather than a training slide.

## How should you authenticate customers before high risk transactions?

**The Telecommunications Service Provider (Customer Identity Authentication) Determination 2022 requires multi factor authentication for all high risk customer transactions.** ACMA's list includes SIM swaps, postpaid to prepaid transfers, transfers of title, adding services to an account, activating a service for an overseas customer, buying an additional phone, and blocking an IMEI or PEI.

ACMA gives examples. When a customer starts the transaction: a username and password plus a unique code or secure link sent to their mobile number or validated app. When the telco starts it: calling the number on the account and asking the customer to confirm their name. Any code or link must say a high risk interaction has started, warn the customer not to share it, and explain what to do if they didn't start it.

In software terms:

- one authentication service used by every channel (web, app, call centre, retail)
- a list of high risk transaction types held as configuration
- customer level fraud protections: account flags, change notifications, restricted channels, paused transactions
- logs of every authentication attempt, kept for at least 1 year as ACMA requires

## What is happening with the TCP Code?

**The TCP Code (C628:2019, incorporating Variation No.1/2022) is still the registered code, but ACMA is replacing it with a standard.** The Australian Telecommunications Alliance, formerly Communications Alliance, reports that ACMA announced on 27 March 2026 that it would replace the code with an industry standard under section 125 of the Telecommunications Act, and that the 2019 code remains in force until the standard commences.

ACMA opened consultation on the draft Telecommunications (Consumer Protections) Industry Standard 2026 on 29 September 2026, closing on 10 November 2026. ACMA says the proposed standard would require telcos to have systems, processes, training and accountability to deliver fair outcomes; to sell responsibly and remedy mis selling; to follow rules on sales incentive payments; to let customers cancel simply; to give clear billing and flexible payment options; and to disconnect only as a last resort.

Separately, ACMA said on 15 October 2026 that new laws substantially increase maximum penalties for breaches of codes and standards, make registered codes directly enforceable, and create a telco registration scheme that can keep providers with serious compliance failures out of the market. ACMA will publish implementation details before the scheme commences.

What to build for now: workflows driven by configurable rules, with evidence captured at each step, so the commencement of the new standard is a settings change and a test cycle rather than a rebuild. Check ACMA's site before you scope, because these dates are moving.

## How do NBN and wholesale integrations work?

**Most small providers buy NBN access through a wholesaler or white label provider rather than direct from NBN Co, and that choice decides which integrations you get.** NBN Co says access to tools and information varies with how you choose to sell, and that different wholesale or white label providers offer different options. Direct providers connect to NBN's points of interconnect under the Wholesale Broadband Agreement.

Custom integration work usually covers:

- order and service qualification lookups from your sign up flow
- fault and appointment status shown in your portal
- exception queues for stalled orders across more than one wholesaler
- reconciliation between wholesale invoices and your own billing

## What data retention and IPND obligations apply?

**Service providers must keep specified telecommunications data for at least two years under the data retention scheme, which started on 13 October 2015.** The OAIC says the scheme sits in Part 5-1A of the TIA Act, that retained data is treated as personal information under the Privacy Act, and that Part 13 of the Telecommunications Act separately requires records of certain disclosures.

The Integrated Public Number Database is governed by industry code C555:2024, registered on 9 December 2024, which sets rules for providing accurate information to the IPND. Your systems need an IPND feed that updates when customers join, move or leave, and a check that the data is right.

A data breach of customer identity or metadata also brings Privacy Act notification duties. Our [Notifiable Data Breaches guide](/guides/notifiable-data-breaches-software) covers what software needs for that.

## What can AI do in telco support, and what needs a person?

**AI can handle routine questions and paperwork; anything touching hardship, family violence, complaints or high risk transactions needs a trained person and proper authentication.** A useful split:

| Task | AI suitable? | Why |
|---|---|---|
| Plan, usage and bill questions | Yes | Answers from the customer's own data |
| Outage status | Yes | Pulls from the outage register and network status |
| Summarising a case for an agent | Yes | Saves handle time, a person decides |
| Detecting hardship or vulnerability signals | As a flag only | The standard expects proactive identification; staff must act |
| Hardship arrangements | No | Must be tailored by trained staff |
| SIM swap, ownership change | No | High risk transaction under the determination |
| Complaint resolution | Assist only | Standard sets handling and timeframes |

Our [AI chatbot service](/services/ai-chatbot) describes how we design handover rules.

## What do telco builds cost?

**These are indicative AUD planning ranges, ex GST, not quotes.** Expeed publishes $40,000 to $150,000 for mid complexity custom software in Australia.

| Build | Includes | Indicative range |
|---|---|---|
| Hardship and authentication workflow | Hardship cases, timers, options, MFA service, fraud flags, audit logs | $40,000 to $110,000 |
| Customer self service portal | Account, usage, bills, payments, outage status, support, hardship entry point | $60,000 to $160,000 |
| Outage communications module | Register, customer targeting, scheduled updates, website status | $25,000 to $60,000 |

The main drivers are the billing platform's API, the number of wholesale suppliers and how many channels must share one authentication service. Our [customer portal guide](/guides/customer-portal-development) covers portal scoping in general.

## How AWLabs approaches telco software

AWLabs is not a carriage service provider and has not yet delivered a project for a telco, so we won't claim sector experience. We bring integration, workflow, authentication and AI engineering, and we build to your compliance team's reading of the standards. Each engagement starts with a Development Consult, then a paid Discovery Audit that maps your platform and the evidence each standard expects. You receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with updates every Tuesday and Friday, Sydney business hours. See our [enterprise software service](/services/enterprise-software).

This page is general information, not legal advice, and reflects the rules as at 8 November 2026.
