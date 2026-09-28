---
title: "AI and software development for Australian government"
metaTitle: "AI in Government Australia: Government Software Development"
description: "AI in government and government software development in Australia: how the DTA AI policy, ISM, PSPF and hosting rules shape a build, with phases and costs."
eyebrow: "Industry solution"
published: 2026-09-28
updated: 2026-09-28
summary: "AI in government, and government software development generally, is shaped less by technology than by the frameworks around them: the DTA Policy for the responsible use of AI in government (version 2.0, with its remaining requirements in force from December 2026), ASD's Information Security Manual, the Protective Security Policy Framework and, for hosting sensitive data, the Hosting Certification Framework. A supplier's job is to build to those requirements and hand the agency the evidence it needs for its own assessments. All Webbed Labs holds no government panel membership, IRAP assessment or security clearances, so we suit OFFICIAL workloads, subcontracting and state or local government work rather than classified systems."
takeaways:
  - "Version 2.0 of the DTA AI policy took effect on 15 December 2025 for non-corporate Commonwealth entities; its first new mandatory requirement began on 15 June 2026 and the rest apply from December 2026."
  - "Every in-scope AI use case now needs an accountable owner, an entry in an internal register and an AI impact assessment before deployment, so suppliers should design systems that make those assessments easy to complete."
  - "The ISM (updated quarterly, latest September 2026) and PSPF Release 2026 set the security controls; PROTECTED systems need IRAP-assessed infrastructure and suppliers with the right clearances."
  - "PSPF directions can rule out specific products outright, such as Direction 001-2025 on DeepSeek, so model and vendor choice is a compliance question, not only a technical one."
  - "All Webbed Labs is not on a BuyICT panel, has no IRAP-assessed system and holds no clearances. We say so up front and scope work where that doesn't matter."
faqs:
  - q: "Is All Webbed Labs on the BuyICT Digital Marketplace Panel?"
    a: "No. We hold no Commonwealth or state panel membership at the time of writing. Agencies can still engage us through a prime contractor that holds panel membership, through an open approach to market, or, for many state and local government bodies, through their own procurement rules. We'll tell you plainly if a panel is the only route your agency can use."
  - q: "Can you build systems that handle PROTECTED or classified information?"
    a: "Not on our own. PROTECTED systems need infrastructure and services assessed through ASD's IRAP program, and personnel with the relevant security clearances. We have neither. We can build OFFICIAL and OFFICIAL: Sensitive workloads in Australian cloud regions, or work under a cleared prime contractor on components that don't need a clearance."
  - q: "What does a supplier have to provide under the DTA AI policy?"
    a: "The policy places obligations on agencies, not suppliers, but agencies can't meet them without supplier input. In practice that means documenting what the AI does, what data it uses, where it runs, how it was tested, its known limits and how incidents are detected, so the agency can complete its AI impact assessment, register entry and transparency statement."
  - q: "Can government use models like Claude or GPT for OFFICIAL data?"
    a: "It can be possible, through enterprise cloud services hosted in Australian regions, subject to their own risk assessment. Availability of specific models in Australian regions changes often, so check the provider's regional availability page at the time you plan the build. Some products are prohibited outright by PSPF direction, as DeepSeek was in February 2025."
  - q: "How long does a government AI pilot take?"
    a: "A contained pilot on OFFICIAL data usually takes 8 to 14 weeks after discovery, including the evidence pack for the AI impact assessment. Security assessment, data access approvals and change advisory boards typically add more calendar time than the build itself, so plan the schedule around them."
  - q: "Is there an AI Act that applies to Australian government?"
    a: "No. At the time of writing there is no standalone AI Act in Australia. Commonwealth agencies are bound by the DTA AI policy and by existing laws such as the Privacy Act, and the Privacy Act's automated decision-making disclosure rules start on 10 December 2026. Our guide to whether there is an AI Act in Australia covers the wider picture."
  - q: "What AI use cases suit local councils?"
    a: "The same low-risk pattern as federal agencies: staff search over the council's own policies and procedures, triage of customer requests to the right team, and drafting help for routine correspondence, each with a person reviewing before anything goes out. Councils work under their state's privacy, records and procurement rules rather than the DTA policy, so discovery starts from those."
  - q: "Do state governments follow the DTA AI policy?"
    a: "The DTA policy applies to non-corporate Commonwealth entities; corporate Commonwealth entities are encouraged to apply it. States and territories set their own AI, privacy and records rules, so a council or state agency project is scoped against its own state framework and privacy law instead."
sources:
  - title: "AI Policy Update: Strengthening responsible use across government"
    url: "https://www.dta.gov.au/articles/ai-policy-update-strengthening-responsible-use-across-government"
    publisher: "Digital Transformation Agency"
  - title: "AI Policy overhauled with new Impact assessment tool and Procurement guidance"
    url: "https://www.dta.gov.au/media-releases/ai-policy-overhauled-new-impact-assessment-tool-and-procurement-guidance"
    publisher: "Digital Transformation Agency"
  - title: "Information security manual (September 2026)"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism"
    publisher: "Australian Signals Directorate"
  - title: "Protective Security Policy Framework: PSPF Release 2026"
    url: "https://www.protectivesecurity.gov.au/"
    publisher: "Department of Home Affairs"
  - title: "Protective security directions under the PSPF"
    url: "https://www.protectivesecurity.gov.au/protective-security-directions-under-pspf"
    publisher: "Department of Home Affairs"
  - title: "Hosting Certification Framework"
    url: "https://www.hostingcertification.gov.au/framework"
    publisher: "Department of Home Affairs"
  - title: "BuyICT whole of government arrangements"
    url: "https://www.dta.gov.au/our-initiatives/buyict"
    publisher: "Digital Transformation Agency"
related:
  - title: "The DTA AI policy: what agencies and suppliers must do"
    href: "/guides/dta-ai-policy-government"
  - title: "IRAP explained for software buyers and SaaS vendors"
    href: "/guides/irap-explained"
  - title: "How to sell software to Australian government"
    href: "/guides/selling-software-to-australian-government"
  - title: "AI and software development for Canberra and federal agencies"
    href: "/locations/canberra"
  - title: "Government and enterprise"
    href: "/industries/government-enterprise"
industry:
  title: "Government"
  href: "/industries/government-enterprise"
service:
  title: "AI governance and responsible AI engineering"
  href: "/services/ai-governance"
disclaimer: legal
---

## Government AI use cases: what are agencies actually building?

**Most government AI work in 2026 is unglamorous: helping staff find, summarise and draft from information the agency already holds, with a human making every decision.** The use cases that get through an impact assessment quickly are the ones where the AI assists and a public servant stays accountable. Use cases where AI output directly affects a person's entitlements, obligations or liberty attract the highest scrutiny, and rightly so.

| Use case | Typical data | Scrutiny level | What makes it hard |
|---|---|---|---|
| Policy and procedure search over internal documents | Internal policies, guidelines, legislation | Lower | Keeping the source library current; citing the exact clause |
| Correspondence and ministerial drafting support | Past correspondence, briefs, templates | Moderate | Personal information in the corpus; tone and accuracy review |
| Freedom of information triage and redaction assistance | Requested records | Moderate to high | Redaction errors are a privacy breach; every suggestion needs review |
| Case notes summarisation for frontline staff | Client records | High | Personal and sensitive information; risk of summary errors influencing decisions |
| Grant application assessment support | Applications, guidelines | High | Fairness and bias; applicants must be treated consistently |
| Legacy system replacement or modernisation | Operational data, often decades old | Varies | Migration, integration with whole of government services, change management |

A useful rule when choosing a first project: pick a use case where a wrong answer is caught by the person using it before it reaches the public. A [RAG knowledge base](/services/rag-knowledge-base) over policy documents, with citations to the source paragraph, is the classic example.

## What does the DTA AI policy require, and when?

**The Policy for the responsible use of AI in government, version 2.0, came into effect on 15 December 2025 and applies to all non-corporate Commonwealth entities, with exceptions for the defence portfolio and the national intelligence community.** Corporate Commonwealth entities are encouraged to apply it but aren't required to.

| Date | What applies |
|---|---|
| 15 December 2025 | Version 2.0 takes effect, replacing the original policy |
| 15 June 2026 | First new mandatory requirement begins |
| December 2026 | All remaining requirements in effect |

The requirements that matter most to anyone building an AI system for an agency:

1. **Internal register.** Agencies must keep an internal register of all in-scope AI use cases.
2. **Accountable owner.** Each use case needs a named accountable owner.
3. **AI impact assessment before deployment.** Assessments consider impacts on fairness, safety, privacy, transparency, security and human-centred values, supported by the DTA's AI impact assessment tool.
4. **Lifecycle oversight and incidents.** Agencies need processes to assess, approve and oversee AI use cases across their lifecycle, handle AI incidents, and give staff and the public a way to report safety concerns.
5. **Training and transparency.** Foundational AI training is mandatory for all APS staff, and agencies publish AI transparency statements.

None of this is addressed to suppliers directly. But an agency can't complete an impact assessment for a system it doesn't understand, so in practice the supplier provides most of the raw material. Our [DTA AI policy guide](/guides/dta-ai-policy-government) covers the policy in more depth, and our explainer on [whether Australia has an AI Act](/guides/is-there-an-ai-act-in-australia) covers the laws around it.

### The evidence pack a supplier should hand over

- A plain English description of what the system does and does not do.
- The model or models used, where inference runs, and what the provider does with prompts and outputs.
- The data sources, their classification, and how access is controlled.
- Test results: accuracy on a representative evaluation set, known failure modes, and how hallucinations are mitigated.
- Where the human sits in the loop and what they approve.
- Logging, monitoring and how an incident would be detected and rolled back.

## Which security frameworks shape the build?

**Four frameworks set the security bar for most federal work: ASD's Information Security Manual, the Protective Security Policy Framework, the Essential Eight, and the Hosting Certification Framework for where sensitive data lives.** Which controls apply depends on the system's classification and the agency's own risk assessment.

| Framework | Owner | What it means for the build |
|---|---|---|
| Information Security Manual (ISM) | Australian Signals Directorate | The control catalogue. Updated regularly; the current release at the time of writing is September 2026, with a cloud security controls matrix template. Your system security plan maps to it. |
| Protective Security Policy Framework (PSPF) | Department of Home Affairs | What entities must do to protect people, information and resources. PSPF Release 2026 is current. Directions issued under it are binding on accountable authorities. |
| Essential Eight | Australian Signals Directorate | Baseline mitigation strategies such as patching, application control and multi-factor authentication. Shapes how systems are deployed and administered; see our [Essential Eight guide](/guides/essential-eight-software-development). |
| Hosting Certification Framework (HCF) | Department of Home Affairs | Applies when procuring hosting for sensitive government data, whole of government systems and PROTECTED systems. Certification levels include Strategic and Assured. |

Two details catch teams out. First, PSPF directions can prohibit specific products: Direction 001-2025 (February 2025) requires entities to prevent the use of DeepSeek products, applications and web services, and Direction 001-2024 requires entities to identify and manage foreign ownership, control or influence risk in technology assets. Your model and library choices need to survive that review. Second, the HCF is under reform: new certification registrations were paused from 3 November 2025 until reforms are complete, though existing certified providers are unaffected. Check its status before assuming a hosting provider can be certified in time for your project.

## How should an agency choose models and hosting for OFFICIAL data?

**Start from where the data may go, then pick the model, not the other way round.** For most OFFICIAL workloads the practical pattern is an enterprise model service consumed through an Australian cloud region, with the agency's own tenancy, logging and keys, and no training on prompts or outputs.

Work through these questions in order during discovery:

1. **Classification and caveats.** What is the highest classification of any document the system will see, including attachments and scanned records? A single PROTECTED file in the corpus changes every answer below.
2. **Inference location.** Is the model you want offered in an Australian region at the time of writing? Availability differs by model and by cloud, and changes often, so confirm on the vendor's regional availability page and record the date you checked.
3. **Retention and abuse monitoring.** Does the provider keep prompts or outputs, for how long, and where? Some services retain samples for human review unless an exemption applies.
4. **Prohibited products.** Check current PSPF directions and your agency's own list before any library, model or tool is adopted.
5. **Exit.** Could you move to a different model within weeks if policy or pricing changed? Keeping prompts, evaluation sets and retrieval logic independent of any one vendor makes the answer yes.

Open-weight models hosted inside the agency's own cloud account are worth considering where retention terms are unacceptable or the workload must avoid third-party model APIs. They cost more to run and maintain, and capability can trail the best hosted models, so they suit narrow, high-volume tasks better than open-ended drafting. Our [private LLM deployment](/services/private-llm-deployment) page explains that trade-off.

## Where All Webbed Labs fits, and where it doesn't

**We hold no BuyICT or state panel membership, no IRAP-assessed system, and no security clearances. That rules us out of some government work, and it's better you hear it on this page than in week three of a procurement.** Here is how we think about fit.

| Situation | Are we a sensible choice? | Better option if not |
|---|---|---|
| OFFICIAL workload in an Australian cloud region, agency can procure through an open approach | Yes | |
| Subcontracted component under a prime that holds panel membership | Yes, where the component needs no clearance | |
| State agency or local council project under state procurement rules | Often, depending on the state's panel requirements | A state panel supplier if the panel is mandatory |
| PROTECTED system or data | No | IRAP-assessed provider with cleared staff |
| Work requiring baseline or higher clearances | No | Cleared supplier |
| Agency required to buy through a specific BuyICT panel | Not directly | A panel member, possibly with us as subcontractor |

BuyICT hosts the DTA's whole of government arrangements, including the Digital Marketplace Panel 2 (ICT labour hire, and professional and consultancy services) and the Cloud Marketplace Panel. If you are weighing us against other suppliers, our guide on [how to choose an AI development company](/guides/how-to-choose-an-ai-development-company) sets out the questions to ask. Some arrangements are mandated for non-corporate Commonwealth entities for particular categories, such as data centre services. Our guide to [selling software to government](/guides/selling-software-to-australian-government) walks through the channels.

## What does a realistic engagement look like?

**A typical government AI engagement runs in three phases over four to seven months, with calendar time dominated by approvals rather than code.** The ranges below are typical Australian market ranges for an onshore senior team at agency rates of roughly $120 to $250 an hour, labelled as ranges, not quotes. The basis is set out in our [custom software cost guide](/guides/custom-software-development-cost-australia).

| Phase | Duration | What's produced | Typical range (AUD, ex GST) |
|---|---|---|---|
| Discovery and assessment support | 3 to 5 weeks | Use case definition, data and classification review, architecture, draft evidence pack for the AI impact assessment, fixed price for the build | $15,000 to $40,000 |
| Pilot build | 8 to 14 weeks | Working system on OFFICIAL data in an Australian region, evaluation set and results, system security plan inputs, runbook | $80,000 to $200,000 |
| Production hardening and handover | 6 to 12 weeks | Integration with agency identity and logging, performance and security testing, training material, incident process | $60,000 to $180,000 |

The arithmetic behind the pilot band: two senior engineers plus part-time design and testing for 8 to 14 weeks is roughly 500 to 1,100 hours; at $150 to $190 an hour blended, that lands between about $75,000 and $210,000. Legacy replacement projects sit well above these ranges and are scoped separately; see [legacy modernisation](/services/legacy-modernisation).

## What goes wrong on government AI projects?

**The common failures are governance ones: a pilot that works but can't pass assessment, or a system nobody owns once the vendor leaves.**

- **Evidence produced after the fact.** Reconstructing test results and design decisions for an impact assessment is slow and unconvincing. Build the evidence as you go.
- **Unclear accountable owner.** The policy requires one per use case. If nobody senior will own it, the project isn't ready.
- **Model lock-in.** A model that's permitted today may be restricted tomorrow. Keep the model behind an interface so it can be swapped.
- **Offshore data flows nobody noticed.** Telemetry, error tracking and support tools can send data overseas. Inventory every service.
- **Records obligations.** AI outputs used in decisions may be Commonwealth records. Decide retention with the records team early.

## How All Webbed Labs approaches government work

We run a paid discovery first, then build at a fixed price, with full source code in the agency's own repository from day one. We deploy to Australian cloud regions by default, document each architectural decision in a form an assessor can use, and put every change through automated quality gates (type checks, visual tests, security scans) and a senior engineer's review before release. Andy Taleb has been building software professionally since 2019 and ran All Webbed Up from 2021; All Webbed Labs launched in mid 2026 as a partnership with a group of developers and founders. If your agency needs help producing the evidence the DTA policy asks for, see our [AI governance](/services/ai-governance) service.
