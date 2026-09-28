---
title: "APRA CPS 230 and AI vendors: what changes when your AI supplier is material"
metaTitle: "APRA CPS 230 and AI Vendors: Material Service Providers"
description: "How APRA's CPS 230 applies to AI vendors and model providers: when they're material service providers, what contracts must say, and the key 2025 and 2026 dates."
eyebrow: "Australian regulation"
category: australia
published: 2026-09-28
updated: 2026-09-28
summary: "CPS 230 is APRA's operational risk standard. It commenced on 1 July 2025, and pre-existing service provider contracts had until the earlier of their next renewal or 1 July 2026 to meet it, so it now applies in full. An AI vendor is a material service provider if the regulated entity relies on it for a critical operation, such as customer enquiries or claims processing, or if it exposes the entity to material operational risk. Material arrangements need due diligence, a formal agreement with minimum terms, APRA access rights, tolerance-level planning, an exit plan and, for material offshoring, notice to APRA before it starts."
takeaways:
  - "CPS 230 commenced on 1 July 2025; the transition for pre-existing service provider contracts ended on 1 July 2026 at the latest."
  - "Customer enquiries are a minimum critical operation for every APRA-regulated entity, and claims processing is one for insurers, which puts many AI projects in scope."
  - "Core technology services are on the minimum list of material service providers unless the entity can justify otherwise."
  - "Model providers behind an AI vendor are fourth parties the entity must manage, and the contract must require the vendor to disclose the providers it materially relies on."
  - "Running a material service offshore, including offshore data or personnel, requires notice to APRA before the arrangement starts."
faqs:
  - q: "Is every AI vendor a material service provider under CPS 230?"
    a: "No. A provider is material if the entity relies on it to undertake a critical operation or it exposes the entity to material operational risk. An AI tool used for internal drafting may not be material. An AI system that answers customer enquiries or processes claims is much more likely to be, and core technology services are on APRA's minimum list unless the entity can justify otherwise."
  - q: "Do CPS 230's contract requirements apply to OpenAI, Anthropic or other model providers directly?"
    a: "If the entity contracts with a model provider directly and the arrangement is material, the formal agreement requirements apply to that arrangement. If the model provider sits behind a vendor, it is a fourth party: the entity must manage the associated risks, and its agreement with the vendor must require notice of material subcontractors and make the vendor liable for their failures."
  - q: "Did the April 2026 amendments exempt cloud or AI providers from the contract rules?"
    a: "No. The targeted amendments that took effect on 1 July 2026 exempt specific categories listed in an attachment to CPS 230, such as government agencies, regulators, central banks, financial market exchanges, clearing and settlement facilities, payment system operators and financial messaging infrastructure. Commercial cloud and AI vendors aren't among those categories."
  - q: "What happens if the AI service goes down?"
    a: "For a critical operation, the entity must set tolerance levels for maximum disruption time, maximum data loss and minimum service levels, and its business continuity plan must show how it stays within them. It must notify APRA within 24 hours of a disruption to a critical operation outside tolerance. AI vendors should design for this with fallbacks and documented recovery."
  - q: "Does CPS 230 replace CPS 234?"
    a: "No. CPS 234 still governs information security. CPS 230 requires the entity to meet CPS 234 when managing technology risk, and an incident notified under CPS 234 doesn't need a second notification under CPS 230."
sources:
  - title: "CPS 230 Operational Risk Management"
    url: "https://www.apra.gov.au/standards/cps-230"
    publisher: "Australian Prudential Regulation Authority"
  - title: "Operational risk management (consultation history and implementation timeline)"
    url: "https://www.apra.gov.au/operational-risk-management"
    publisher: "Australian Prudential Regulation Authority"
  - title: "APRA finalises new prudential standard on operational risk"
    url: "https://www.apra.gov.au/news-and-publications/apra-finalises-new-prudential-standard-on-operational-risk"
    publisher: "Australian Prudential Regulation Authority"
  - title: "APRA finalises targeted amendments to CPS 230 Operational Risk Management"
    url: "https://www.apra.gov.au/news-and-publications/apra-finalises-targeted-amendments-cps-230-operational-risk-management"
    publisher: "Australian Prudential Regulation Authority"
  - title: "Prudential Standard CPS 230 Operational Risk Management (F2026L00475)"
    url: "https://www.legislation.gov.au/F2026L00475/asmade/text"
    publisher: "Federal Register of Legislation"
  - title: "CPS 234 Information Security"
    url: "https://www.apra.gov.au/standards/cps-234"
    publisher: "Australian Prudential Regulation Authority"
related:
  - title: "APRA CPS 234 and AI systems: what vendors need to provide"
    href: "/guides/apra-cps-234-ai"
  - title: "AI claims and document automation for Australian insurers"
    href: "/solutions/insurance-claims-automation"
  - title: "AI development for APRA-regulated financial services"
    href: "/solutions/ai-for-financial-services"
  - title: "What to check before signing a software development contract"
    href: "/guides/software-development-contract-checklist"
service:
  title: "Enterprise software development"
  href: "/services/enterprise-software"
disclaimer: legal
---

## What is CPS 230?

**Prudential Standard CPS 230 Operational Risk Management is APRA's cross-industry standard requiring regulated entities to manage operational risk, keep critical operations running through severe disruption, and manage the risks of using service providers.** It applies to ADIs, general insurers, life companies, private health insurers and RSE licensees.

APRA finalised the standard on 17 July 2023, and it commenced on 1 July 2025. For contracts with service providers that already existed on that date, APRA gave a transition: the service provider requirements applied from the earlier of the next contract renewal or 1 July 2026. That window has closed, so every arrangement now has to meet the standard.

On 30 April 2026 APRA finalised targeted amendments, remaking CPS 230 in a version that commenced on 1 July 2026. The main change is a limited exemption from some contract requirements for listed categories of non-traditional service providers, such as central banks and clearing and settlement facilities, where contractual compliance isn't practicable. It doesn't cover commercial software, cloud or AI vendors.

## Key dates

**The dates below come from APRA's standard, its implementation announcements and its 2026 amendment release.**

| Date | What happened |
|---|---|
| 13 April 2023 | APRA announces a 1 July 2025 start and a transition for pre-existing service provider contracts |
| 17 July 2023 | APRA releases the final CPS 230 |
| 1 July 2025 | CPS 230 commences |
| 30 April 2026 | APRA finalises targeted amendments, including exemptions for listed categories of service providers |
| 1 July 2026 | Transition ends for pre-existing contracts not already renewed; amended CPS 230 and CPG 230 commence |
| Annually | Entities submit their register of material service providers to APRA |

## When is an AI vendor a material service provider?

**An AI vendor is a material service provider if the entity relies on it to undertake a critical operation, or if it exposes the entity to material operational risk.** A provider can become material through one arrangement or several, and it can be a third party, a related party or a connected entity.

Two minimum lists in CPS 230 make this question more pointed for AI than many buyers expect.

The first is critical operations. Unless it can justify otherwise, every APRA-regulated entity must treat customer enquiries, and the systems and infrastructure needed to support critical operations, as critical operations. ADIs must also include payments, deposit-taking and management, custody, settlements and clearing. Insurers must include claims processing. RSE licensees must include investment management and fund administration. An AI assistant answering customer questions, or an AI pipeline triaging claims, sits inside a critical operation.

The second is material service providers. Unless it can justify otherwise, every entity must treat providers of risk management, core technology services and internal audit as material, plus sector-specific services such as claims management for insurers and fund administration for super trustees.

A quick way to sort AI arrangements:

| AI use | Critical operation involved? | Likely materiality |
|---|---|---|
| Staff drafting assistant with no customer data and a manual fallback | Usually not | Often not material, but assess the data risk under CPS 234 |
| Internal knowledge search over policies and procedures | Possibly, if staff depend on it to serve customers | Assess case by case |
| Customer-facing chatbot or voice agent | Customer enquiries | Likely material |
| Claims intake, triage or document extraction | Claims processing (insurers) | Likely material |
| Credit decisioning support | Credit assessment is on the ADI material service provider list | Likely material |
| Fraud or transaction monitoring model | Payments (ADIs) | Likely material |

The entity makes this call, not the vendor. But a vendor that knows which row it sits in can prepare for the questions that follow.

## Where do model providers fit?

**When an AI vendor builds on a hosted model, the model provider is a fourth party: a party the service provider relies on to deliver the service.** CPS 230 requires the entity's service provider management policy to cover how it manages risks from fourth parties that material service providers rely on to deliver a critical operation.

Contracts carry this through. The formal agreement with a material service provider must require the provider to notify the entity of other material service providers it materially relies on, through subcontracting or otherwise, and must make the provider responsible for any subcontractor's failure. Before entering the arrangement, the entity must also assess risks from the geographic location or concentration of the provider or the parties it relies on.

For AI, that means an entity should know which model, from which provider, in which region, and what happens if that provider changes terms, deprecates the model or has an outage. Many AI products depend on a small number of model providers, so concentration risk is a real question, not a formality.

## What must a material AI vendor agreement contain?

**Every material arrangement needs a formal, legally binding agreement with minimum terms set by CPS 230, including APRA's own access rights.** Use this checklist against a draft contract:

1. The services covered and their service levels
2. Each party's rights and responsibilities, including ownership of assets, ownership and control of data, dispute resolution, audit access, liability and indemnity
3. Provisions that let the entity meet its legal and compliance obligations
4. Notice from the vendor of other material service providers it relies on, such as model and cloud providers
5. Vendor liability for any subcontractor's failure
6. A force majeure clause stating which parts of the contract continue during a force majeure event
7. Termination rights over the whole arrangement or parts of it (for RSE licensees, including where continuing would be inconsistent with the best financial interests duty)
8. APRA access to documentation, data and other information about the service
9. APRA's right to visit the service provider on site
10. The vendor's agreement not to impede APRA in its duties

Before signing or materially changing the arrangement, the entity must do due diligence, including an assessment of the vendor's ability to provide the service on an ongoing basis. For AI vendors, ask specifically about model deprecation, price changes by the model provider, and how quickly the system can move to another model. Our [software development contract checklist](/guides/software-development-contract-checklist) covers the commercial terms that sit alongside these.

## What does APRA need to be told, and when?

**CPS 230 has four notification triggers relevant to AI vendors: offshoring, new or changed critical arrangements, material incidents and disruptions outside tolerance.**

| Trigger | Deadline |
|---|---|
| Entering a material offshoring arrangement, or a significant change to one, including where data or personnel for the service will be offshore | Before entering or changing it |
| Entering or materially changing an agreement for a service the entity relies on for a critical operation | As soon as possible, and within 20 business days |
| An operational risk incident likely to have a material financial impact or a material impact on critical operations | As soon as possible, and within 72 hours |
| A disruption to a critical operation outside tolerance | As soon as possible, and within 24 hours |

The offshoring trigger matters for AI. CPS 230 defines offshoring by where the service is physically performed, not where the provider is incorporated. If a material AI service sends data to a model running outside Australia, the entity may need to notify APRA before it starts. Keeping inference and storage in Australian regions, where the model is available there, avoids that question. See [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty).

## Designing an AI service for tolerance levels and exit

**For each critical operation, the entity must set tolerance levels for the maximum disruption time, the maximum data loss and the minimum service level during disruption, and it must be able to exit a material arrangement in an orderly way.** An AI vendor that supports a critical operation should design for both from the start:

- **Model outage.** Define what happens when the model provider is unavailable: a second model, a degraded mode, or a clean hand-off to people.
- **Data loss.** Back up conversation records, extracted data and indexes to match the entity's data loss tolerance.
- **Minimum service.** Agree what "minimum service" means for an AI function, such as routing all enquiries to staff within a set time.
- **Testing.** CPS 230 requires business continuity testing with severe but plausible scenarios, including disruption to material service providers. Expect to take part.
- **Exit.** Keep prompts, configuration, evaluation sets and source data in forms the entity can take to another provider, and make sure indexes can be rebuilt from source.

## How All Webbed Labs approaches CPS 230 work

We don't certify anyone as meeting CPS 230, and the materiality assessment belongs to the regulated entity. Our part is engineering and documentation: a named list of every third and fourth party the system relies on, Australian hosting regions by default, designs that can switch models without a rewrite, documented fallback behaviour for model outages, and source code in the client's own repository from day one, which makes exit a practical option rather than a clause.

Read how we'd approach this for banks, insurers and super funds in [AI for APRA-regulated financial services](/solutions/ai-for-financial-services) and [insurance claims automation](/solutions/insurance-claims-automation), or see our [enterprise software](/services/enterprise-software) service. For the information security side, read [APRA CPS 234 and AI systems](/guides/apra-cps-234-ai).
