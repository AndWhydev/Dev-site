---
title: "The Essential Eight and ASD Essentials for custom software projects"
metaTitle: "Essential Eight and ASD Essentials for Custom Software"
description: "What ASD Essentials changes for custom software, how the Essential Eight maps to it, and what to build when a contract or PSPF still names a maturity level."
eyebrow: "Australian regulation"
category: australia
published: 2026-09-28
updated: 2026-11-08
summary: "On 15 October 2026 the Australian Signals Directorate (ASD) published ASD Essentials, which evolves the Essential Eight into a framework of principles, actions and domains, with chapters for enterprise IT, cloud and operational technology. Every Essential Eight strategy maps to at least one ASD Essentials principle, but maturity levels don't convert into the new effectiveness ratings. The Essential Eight still matters where something requires it: PSPF Release 2026 names Maturity Level Two for each strategy, and many contracts name a level. For a custom application, the engineering work is mostly the same either way: fast patching, strong MFA, controlled admin access, logging and restorable backups. ASD Essentials adds secrets handling, supply chain security and evidence that controls keep working."
takeaways:
  - "ASD published ASD Essentials on 15 October 2026. ASD says it will advise on transition timeframes in due course."
  - "Every Essential Eight strategy maps to at least one ASD Essentials principle, and existing controls often satisfy or contribute to its actions, but maturity levels don't translate into the new ratings."
  - "If a contract, regulator or PSPF still names an Essential Eight maturity level, keep meeting it. ASD says those obligations continue."
  - "For software, the new framework reaches further: secrets kept out of code, legacy authentication removed, time bound admin access and every admin change recorded."
  - "Maturity and effectiveness belong to an organisation's systems, not a product, so there's no such thing as Essential Eight or ASD Essentials compliant software."
faqs:
  - q: "Has the Essential Eight been replaced?"
    a: "ASD published ASD Essentials on 15 October 2026 and describes it as an evolution of the Essential Eight into ASD Essentials for enterprise IT. The Essential Eight pages remain on cyber.gov.au, and ASD's FAQ says it will advise on expectations for the transition in due course. Its transition guidance says organisations should keep meeting any obligations that require Essential Eight implementation or reporting."
  - q: "Is the Essential Eight still mandatory for government?"
    a: "For entities covered by the Protective Security Policy Framework, PSPF Release 2026 still requires each of the eight mitigation strategies to be implemented to Maturity Level Two, and it reaches service providers where a deed or agreement requires it. ASD's transition guidance says organisations with reporting obligations that use Essential Eight terminology should keep meeting them as directed by the relevant authority."
  - q: "Our contract says Essential Eight Maturity Level Two. What do we do?"
    a: "Meet the contract as written, and plan the work so it also counts under ASD Essentials. ASD says not to start work solely to reach a superseded Essential Eight target unless a regulator or other obligation still requires it. A contract that names a level is that kind of obligation. Ask the buyer whether they intend to move the clause to ASD Essentials, and keep evidence that shows the controls working over time, which both frameworks value."
  - q: "How does the Essential Eight map to ASD Essentials?"
    a: "ASD's transition guidance maps each strategy to one or more principles. For example, patching maps to vulnerability management, asset identification and legacy system management; MFA maps to identity, credential and access management; and regular backups maps to regular and proven backups and least privilege access."
  - q: "Do Essential Eight maturity levels carry over?"
    a: "No. ASD says maturity level ratings don't automatically convert into ASD Essentials ratings, because the two measure different things. Each ASD Essentials action is rated not assessed, not effective, partially effective or fully effective for each domain. Existing evidence is the starting point for a gap analysis."
  - q: "Should we stop an Essential Eight uplift that is under way?"
    a: "ASD's FAQ says it doesn't recommend slowing or stopping approved initiatives that will improve security, and that organisations should continue current uplift programs while assessing alignment with the new framework. Map planned work to ASD Essentials before deciding whether it continues unchanged."
  - q: "Can a software developer make our application compliant?"
    a: "Not on its own. Essential Eight maturity and ASD Essentials effectiveness are properties of an organisation's systems and how they're run over time. A developer can build the application so it supports the controls, such as MFA, least privilege, logging and restorable backups, but the organisation's operations decide the result."
  - q: "Which ASD Essentials chapter covers a SaaS or cloud application?"
    a: "ASD says the cloud chapter is the appropriate starting point for organisations that operate mostly platform or software as a service, and the enterprise IT chapter suits on premises, hybrid and infrastructure as a service. It expects most organisations to need both chapters over time."
sources:
  - title: "ASD Essentials"
    url: "https://www.cyber.gov.au/essentials"
    publisher: "Australian Signals Directorate"
  - title: "Transitioning from the Essential Eight"
    url: "https://www.cyber.gov.au/publication/transitioning-from-the-essential-eight"
    publisher: "Australian Signals Directorate"
  - title: "ASD Essentials: frequently asked questions"
    url: "https://www.cyber.gov.au/publication/frequently-asked-questions"
    publisher: "Australian Signals Directorate"
  - title: "What is the Essentials?"
    url: "https://www.cyber.gov.au/publication/what-is-the-essentials"
    publisher: "Australian Signals Directorate"
  - title: "ASD Essentials for enterprise IT"
    url: "https://www.cyber.gov.au/essentials/essentials-for-enterprise-it"
    publisher: "Australian Signals Directorate"
  - title: "Which chapter should I start with?"
    url: "https://www.cyber.gov.au/publication/which-chapter-should-i-start-with"
    publisher: "Australian Signals Directorate"
  - title: "Essential Eight"
    url: "https://www.cyber.gov.au/essential-eight"
    publisher: "Australian Signals Directorate"
  - title: "Essential Eight maturity model (November 2023)"
    url: "https://www.cyber.gov.au/publication/essential-eight-maturity-model"
    publisher: "Australian Signals Directorate"
  - title: "Essential Eight assessment process guide"
    url: "https://www.cyber.gov.au/publication/essential-eight-assessment-process-guide"
    publisher: "Australian Signals Directorate"
  - title: "PSPF Release 2026: list of requirements"
    url: "https://www.protectivesecurity.gov.au/publications-library/pspf-release-2026-list-requirements"
    publisher: "Department of Home Affairs (Protective Security Policy Framework)"
related:
  - title: "How much does an Essential Eight uplift cost?"
    href: "/guides/essential-eight-uplift-cost"
  - title: "IRAP explained for software buyers and SaaS vendors"
    href: "/guides/irap-explained"
  - title: "APRA CPS 234 and AI systems"
    href: "/guides/apra-cps-234-ai"
  - title: "Software maintenance and support"
    href: "/services/software-maintenance-support"
  - title: "What is prompt injection and how do you defend against it?"
    href: "/guides/prompt-injection"
  - title: "Penetration testing costs in Australia"
    href: "/guides/penetration-testing-cost-australia"
  - title: "Backup and disaster recovery for business software"
    href: "/guides/saas-backup-disaster-recovery"
  - title: "How to add single sign on to a business app"
    href: "/guides/sso-entra-id-business-apps"
service:
  title: "Cybersecurity and secure development"
  href: "/services/cybersecurity"
disclaimer: legal
---

## What changed in October 2026?

**ASD published ASD Essentials on 15 October 2026, evolving the Essential Eight into a framework built on principles, actions and domains.** Principles describe the security outcome, actions describe what to do to achieve it, and domains describe the business functions and assets the actions apply to. There are chapters for enterprise IT, cloud and operational technology, plus guides for implementation planning, assessment and moving across from the Essential Eight.

The Essential Eight itself was eight mitigation strategies measured against a maturity model. ASD first published that model in June 2017 and last revised it in November 2023. The eight strategies were:

1. Patch applications
2. Patch operating systems
3. Multi factor authentication
4. Restrict administrative privileges
5. Application control
6. Restrict Microsoft Office macros
7. User application hardening
8. Regular backups

ASD's FAQ explains the shift in three parts: maturity levels give way to priority phases, a list of prescriptive requirements gives way to principles and actions that test whether outcomes are achieved, and domains let organisations focus on their critical business functions and systems. ASD says ASD Essentials is written mainly for Commonwealth entities, critical infrastructure and large organisations, while smaller businesses can still use it where relevant.

On timing, ASD says it has been talking to regulators and will advise on transition expectations in due course. Until it does, both frameworks are in play.

## How do the old strategies map to ASD Essentials?

**ASD's transition guidance says every Essential Eight strategy maps to at least one ASD Essentials principle, and existing controls will often satisfy or contribute to its actions.** The differences are scope, the broader outcomes some controls now feed, and the evidence needed to show an action works.

| Essential Eight strategy | ASD Essentials principles it maps to | What it means for a custom application |
|---|---|---|
| Patch applications and patch operating systems | Vulnerability management, asset identification, legacy system management | Scan and patch the app, its libraries and runtime; keep an inventory; manage anything you can't yet replace |
| Multi factor authentication | Identity, credential and access management | Phishing resistant MFA, plus secrets storage, unique credentials and removing legacy sign in protocols |
| Restrict administrative privileges | Identity, credential and access management; least privilege access; secure administration; network segmentation and segregation | Separate admin roles, time bound elevation, every admin change recorded, service accounts held to least privilege |
| Application control | Trustworthy software; secure configuration management | Mainly servers and devices, but administrative tooling must also be approved and controlled |
| Restrict Microsoft Office macros | Trustworthy software; secure configuration management | Rarely relevant unless the app produces or handles Office documents |
| User application hardening | Secure configuration management; content filtering | Configuration baselines for the environments you run, and limits on outbound connections |
| Regular backups | Regular and proven backups; least privilege access | Encrypted, isolated backups and restore tests that prove your recovery time and recovery point objectives |

ASD also lists principles with no direct Essential Eight equivalent, including content filtering, cyber security awareness training and cyber supply chain security, and a Governance and culture domain covering areas such as supplier assurance, artificial intelligence accountability and legacy system management.

## Do maturity levels still count?

**Not as a rating under the new framework.** ASD says Essential Eight maturity levels don't automatically convert, because the old model measured implementation of specific controls against increasing attacker tradecraft, while ASD Essentials measures whether each action achieves its outcome for the assets in each domain.

Each action is rated not assessed, not effective, partially effective or fully effective, and a principle takes the lowest rating of its applicable actions in that domain. Priority phases set the order of work, not a level of assurance:

| Priority phase | Domains | Where a custom application usually sits |
|---|---|---|
| Phase 1 | Boundary services, identity services | An internet facing customer app and its sign in |
| Phase 2 | Critical processes and services, privileged environments | Core systems the business depends on, and admin access to them |
| Phase 3 | Business systems, user devices | Internal line of business apps and staff endpoints |
| All phases | Governance and culture, visibility and response | Ownership, risk decisions, logging and incident response |

ASD's FAQ gives a direct example: an internet facing customer application in an enterprise IT environment may be addressed under boundary services in phase 1 and critical processes and services in phase 2. The same controls are still implemented only once.

For organisations that reached Maturity Level Two, ASD expects many controls to feed the early phases, naming phishing resistant MFA, patching internet facing services, privileged access, application control and central logging. It also warns that Level Two doesn't mean an action will be fully effective in every domain.

## What if a contract or PSPF still names a maturity level?

**Keep meeting it, and build the evidence so the same work counts under ASD Essentials.** ASD's transition guidance says organisations should continue to meet regulatory, contractual or other obligations that require Essential Eight implementation or reporting, and should report as directed by the relevant authority where Essential Eight terminology is still required.

PSPF Release 2026 still requires covered Commonwealth entities to implement each of the eight strategies to Maturity Level Two, and that requirement reaches suppliers where a deed or agreement says so. Insurers, government panels and enterprise security schedules may also still ask for a level.

In practice:

1. **Read the clause.** Note the level, the scope and whether self assessment is accepted. That is your obligation until the clause changes.
2. **Don't start work only to hit a superseded target.** ASD advises against it unless a regulator or other obligation still requires it, or the work still addresses material cyber security risk.
3. **Map planned work to ASD Essentials first.** ASD recommends this before deciding whether planned work continues unchanged.
4. **Keep evidence of operation, not just deployment.** ASD says configuration records show what was deployed, but ratings under the new framework draw on validation results, monitoring records, restore tests and similar proof over time.
5. **Ask the buyer about the transition.** Whether a panel or contract will move to ASD Essentials is the buyer's decision, and ASD hasn't yet set the timeframes.

## What patching timelines apply?

**Under the Essential Eight maturity model, critical vulnerabilities in online services must be patched within 48 hours of release, or when working exploits exist, from Maturity Level One upwards.** These are still the numbers a contract naming a level will test.

| Requirement (November 2023 model) | Level One | Level Two | Level Three |
|---|---|---|---|
| Vulnerability scan of online services | At least daily | At least daily | At least daily |
| Patch online services: critical or working exploit | 48 hours | 48 hours | 48 hours |
| Patch online services: other vulnerabilities | 2 weeks | 2 weeks | 2 weeks |
| Scan other applications | Not specified | At least fortnightly | At least fortnightly |
| Patch other applications | Not specified | Within one month | Within one month |
| Remove unsupported online services | Required | Required | Required |

ASD Essentials phrases this differently: apply patches within defined risk based timeframes, or automatically where operational impact is low, and remediate vulnerabilities above a risk threshold based on exploitation, exposure, criticality, impact and compensating controls. ASD notes that ISM, regulatory and other mandatory timeframes continue to apply, and that a suitable timeframe can differ between domains.

For a custom application, patching includes upgrading vulnerable open source packages. A two day turnaround is only realistic with automated dependency scanning, a test suite you trust and a pipeline that can ship a patched build the same day.

## What must the application do for MFA and credentials?

**Under the Essential Eight, online customer services holding sensitive customer data need MFA for customers from Maturity Level One, with a phishing resistant option at Level Two and phishing resistant MFA required at Level Three.** Staff using online services need phishing resistant MFA from Level Two, which also requires successful and failed MFA events to be centrally logged.

ASD Essentials keeps phishing resistant MFA and widens the principle. Its identity actions also ask organisations to:

- store keys, secrets and tokens in approved secure repositories with access controls, including MFA
- regularly scan codebases, configuration files, file shares and collaboration platforms for unsecured secrets
- disable legacy authentication protocols, or restrict, monitor and plan to retire them
- keep user, machine, system and service account credentials unique per system or account
- remove default and unused accounts on a regular basis

Most of that is engineering work inside the product and its pipeline, so it belongs in the first release, not a later uplift.

## How should admin access, logging and backups be built?

**Build separate privileged roles, grant elevated access for a set time, record every change, and make backups that can be restored and can't be quietly deleted.** The Essential Eight's Level Two disables privileged access after 12 months unless revalidated and after 45 days of inactivity; Level Three adds just in time administration and backups even backup administrators can't change during retention.

ASD Essentials adds actions that land directly on a custom system:

- explicit session controls before privileged actions, including time bound privilege grants
- a record of every administrative change to systems, configuration or controls, with the user, time and target
- least privilege for service and other non person accounts, not just people
- backups on a defined schedule to encrypted storage protected by immutable, offline or logically isolated controls, kept apart from production
- restore tests that show recovery time and recovery point objectives can be met
- security relevant logs forwarded to a central capability that can correlate events across systems

## A checklist for your next software project

**Put these into the requirements before development starts; each is cheap early and expensive later.**

1. Record any obligation that names an Essential Eight level, and agree which ASD Essentials chapter and domains the system falls under.
2. Automated dependency and container scanning on every build, routed to a named owner.
3. A pipeline that can release a tested patch within 48 hours.
4. A register of components, libraries, runtimes, identities and data stores, with support end dates.
5. Phishing resistant MFA for staff and admins, and for customers where sensitive data is held or the contract asks for it.
6. Secrets in a managed store, secret scanning on the codebase, and no legacy sign in protocols.
7. Separate admin roles with time bound elevation, and a log of every admin change.
8. Central, protected logging of authentication, admin and security events.
9. Encrypted, isolated backups with scheduled restore tests against agreed recovery objectives.
10. Written exceptions with compensating controls, approved, time bound and reviewed.

## Beyond either framework

**Both frameworks set a floor for an organisation, not a full application security program.** Application risks such as broken access control, injection and, for AI systems, [prompt injection](/guides/prompt-injection) need their own controls. ASD's FAQ says ASD Essentials treats AI as another asset to include in scoping. If your buyers are agencies, the [IRAP guide](/guides/irap-explained) explains assessments against the ISM. For APRA regulated clients, read [CPS 234 and AI systems](/guides/apra-cps-234-ai). For budgets, see [what an Essential Eight uplift costs](/guides/essential-eight-uplift-cost).

One point matters for suppliers. ASD says outsourcing a service doesn't transfer accountability for its security outcomes, and a domain shouldn't be treated as effective just because a third party is responsible for it. Expect buyers to ask you for current evidence, not a one off assurance.

## How AWLabs builds for it

We don't assess or certify Essential Eight maturity or ASD Essentials effectiveness, we don't claim a level or rating for any client, and AWLabs is not CREST accredited and holds no certification. We build software so the relevant controls are achievable and the evidence exists: dependency and secret scanning as quality gates on every change, a pipeline that can ship a patched build quickly, MFA and role based admin access designed in, admin and authentication events logged, and backups designed for restore, in Australian regions where that is written into your Schedule of Work. Senior engineers lead every build.

The first call is a Development Consult, held in Sydney business hours, where we look at what your contract or buyer actually asks for. Scoped work then comes as a fixed price Schedule of Work with three options. Keeping patch timelines over years is an operations commitment, so see our [cybersecurity](/services/cybersecurity) and [software maintenance and support](/services/software-maintenance-support) services.
