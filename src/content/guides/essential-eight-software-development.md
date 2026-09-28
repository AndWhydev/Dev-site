---
title: "The Essential Eight maturity model for custom software projects"
metaTitle: "Essential Eight Maturity Model for Custom Software"
description: "How ASD's Essential Eight (Essential 8) maturity model applies to custom software: maturity levels 1 to 3, patching and MFA rules, and a build checklist."
eyebrow: "Australian regulation"
category: australia
published: 2026-09-28
updated: 2026-09-28
summary: "The Essential Eight (often written Essential 8 or E8) is ASD's baseline of eight mitigation strategies, measured against a maturity model with levels zero to three. It was designed to protect organisations' internet-connected IT networks, not to certify individual applications, so there's no such thing as \"Essential Eight compliant software\". But a custom application becomes one of the client's online services, and several strategies apply to it directly: patching the application and its dependencies on set timelines, multi-factor authentication for staff and customers, restricted administrative privileges, and backups that can be restored. Building those in from the start is far cheaper than retrofitting them."
takeaways:
  - "At the time of writing, the current Essential Eight maturity model is ASD's November 2023 release."
  - "Maturity is assessed for an organisation's systems, not certified for a product; ASD says there's no requirement for independent certification unless a directive, regulator or contract requires assessment."
  - "At Maturity Level One, customer-facing services that hold sensitive customer data must use MFA for customers, and at Level Two they must offer a phishing-resistant option."
  - "Critical vulnerabilities in online services must be patched within 48 hours of release at every maturity level from One upwards."
  - "Patching, MFA, admin privileges and backups map most directly to custom software; application control and Office macros mostly concern workstations."
faqs:
  - q: "Is the Essential Eight mandatory?"
    a: "For Australian Government entities, yes. The Protective Security Policy Framework (PSPF Release 2026) requires each of the eight mitigation strategies to be implemented to Maturity Level Two, and it also reaches service providers where a deed or agreement requires it. For private organisations it's voluntary unless a regulator, directive or contract requires it, which is common in government supply chains."
  - q: "How is an Essential Eight assessment done?"
    a: "ASD's assessment process guide sets four stages: planning and preparation, agreeing the scope and approach, assessing the controls for each strategy, and writing a security assessment report. Assessors rate the quality of evidence, with testing a control by simulated activity rated highest, and a target level can't be claimed if any strategy isn't implemented."
  - q: "What is the difference between the Essential Eight and ISO 27001?"
    a: "The Essential Eight is a set of eight specific technical mitigation strategies from ASD, measured by maturity level. ISO/IEC 27001 is an international standard for an information security management system that an organisation can be certified against. They complement each other: one prescribes particular controls, the other governs how security is managed overall, and holding one doesn't demonstrate the other."
  - q: "Can a software developer make our application Essential Eight compliant?"
    a: "Not on its own. Essential Eight maturity is a property of an organisation's systems and how they're run, including patching, access and backups over time. A developer can build the application so it supports the controls, such as MFA, least privilege, logging and restorable backups, but the organisation's operations determine the maturity level achieved."
  - q: "Which maturity level should we target?"
    a: "ASD says organisations should pick a target maturity level suited to their environment, based on how attractive they are to attackers and the consequences of an incident, and reach the same level across all eight strategies before moving higher. Many organisations start with Maturity Level One across the board, then move to Level Two."
  - q: "Does the Essential Eight apply to SaaS products we use?"
    a: "Partly. The MFA strategy explicitly covers third-party online services that process, store or communicate your sensitive data. Other strategies, such as patching the provider's servers, are the provider's job, which is why you should ask SaaS vendors how they patch and how they protect administrative access."
  - q: "Is the Essential Eight enough on its own?"
    a: "No. ASD describes it as a minimum set of preventative measures that won't mitigate all threats, and says organisations should add further controls from its Strategies to mitigate cyber security incidents and the Information Security Manual where their environment warrants it. For AI and web applications, application-level risks such as injection and broken access control need their own controls."
  - q: "What does ASD mean by a phishing-resistant option for customers?"
    a: "It means offering an MFA method that resists real-time phishing, such as FIDO2 or WebAuthn passkeys and security keys. ASD's November 2023 changes cite FIDO2 and WebAuthn as standards that are becoming business as usual."
sources:
  - title: "Essential Eight"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight"
    publisher: "Australian Signals Directorate"
  - title: "Essential Eight maturity model (November 2023)"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-maturity-model"
    publisher: "Australian Signals Directorate"
  - title: "Essential Eight maturity model changes (November 2023)"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-maturity-model-changes"
    publisher: "Australian Signals Directorate"
  - title: "Essential Eight assessment process guide"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-assessment-process-guide"
    publisher: "Australian Signals Directorate"
  - title: "Essential Eight explained"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-explained"
    publisher: "Australian Signals Directorate"
  - title: "PSPF Release 2026: list of requirements"
    url: "https://www.protectivesecurity.gov.au/publications-library/pspf-release-2026-list-requirements"
    publisher: "Department of Home Affairs (Protective Security Policy Framework)"
  - title: "About the PSPF"
    url: "https://www.protectivesecurity.gov.au/about"
    publisher: "Department of Home Affairs (Protective Security Policy Framework)"
  - title: "Information Security Manual (ISM)"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism"
    publisher: "Australian Signals Directorate"
related:
  - title: "IRAP explained for software buyers and SaaS vendors"
    href: "/guides/irap-explained"
  - title: "APRA CPS 234 and AI systems"
    href: "/guides/apra-cps-234-ai"
  - title: "Software maintenance and support"
    href: "/services/software-maintenance-support"
  - title: "What is prompt injection and how do you defend against it?"
    href: "/guides/prompt-injection"
service:
  title: "Cybersecurity and secure development"
  href: "/services/cybersecurity"
disclaimer: legal
---

## What is the Essential Eight (Essential 8)?

**The Essential Eight is the Australian Signals Directorate's recommended baseline of eight mitigation strategies, drawn from its broader Strategies to mitigate cyber security incidents.** ASD says the baseline "makes it much harder for adversaries to compromise systems". The eight strategies are:

1. Patch applications
2. Patch operating systems
3. Multi-factor authentication
4. Restrict administrative privileges
5. Application control
6. Restrict Microsoft Office macros
7. User application hardening
8. Regular backups

That list is what people usually mean by "the Essential 8 list". ASD's Australian Cyber Security Centre (ACSC) publishes the framework on cyber.gov.au, so it's also called the ACSC Essential Eight.

ASD publishes a maturity model that defines four levels, from Maturity Level Zero (weaknesses present) to Maturity Level Three, each aimed at a higher level of attacker tradecraft and targeting. The model was first published in June 2017 and is updated regularly. At the time of writing (September 2026), the current release is November 2023, and ASD's assessment process guide is written against that release.

## What are Essential Eight maturity levels 1, 2 and 3?

**Each maturity level is defined by the attacker it's meant to stop: Maturity Level One (ML1) targets opportunistic attackers using commodity tools, Maturity Level Two (ML2) targets attackers willing to invest more time and effort, and Maturity Level Three (ML3) targets adaptive attackers who move quickly on new exploits.** Maturity Level Zero means there are weaknesses in the organisation's overall posture.

| Level | Attacker ASD describes | What that means for an application |
|---|---|---|
| ML1 | Uses widely available commodity tradecraft and looks for any victim | Basic patching timelines, MFA where sensitive data is held, backups |
| ML2 | Invests more time in a target, goes after credentials with phishing and tries to get around weak MFA | Phishing-resistant MFA for staff, customer passkey option, logging of authentication events, tighter admin access |
| ML3 | Adapts to the target's specific controls and uses new exploits as soon as they are public | Phishing-resistant MFA for customers too, just-in-time admin, backups even admins can't delete |

ASD says organisations should choose a target level based on their desirability to attackers and the consequences of an incident, and reach that level across all eight strategies before moving up. **Essential Eight Maturity Level Two** carries extra weight because the Protective Security Policy Framework (PSPF) requires Australian Government entities to implement every strategy to ML2. Suppliers into government should expect to be asked how their software supports ML2, even though the obligation sits with the agency.

## Why is the Essential Eight awkward for custom software?

**Because it was designed for organisations' internet-connected IT networks, not for individual applications.** Several strategies are written for Windows workstations and servers: application control, Office macros and PowerShell settings, for example. A custom web or cloud application has none of those, so asking whether an app "meets the Essential Eight" is the wrong question.

The better question is: when this application goes live, it becomes one of the organisation's online services, so which Essential Eight requirements will apply to it, and what must the software do to support them? That shifts the conversation from a badge to engineering requirements, which is where it belongs.

## Which strategies apply to a custom application?

**Patching, multi-factor authentication, restricted administrative privileges and backups apply most directly; the other four mostly concern the devices your developers and users work on.**

| Strategy | Applies to the application itself? | What it means in a custom software project |
|---|---|---|
| Patch applications | Yes | The app, its libraries and its runtime are an online service that needs scanning and patching on ASD's timelines |
| Patch operating systems | Yes, if you run servers or containers | Base images, virtual machines and managed runtimes must be kept current; managed platforms shift some of this to the provider |
| Multi-factor authentication | Yes | Staff and customer sign-in, admin consoles, and the cloud, source control and CI/CD accounts behind the app |
| Restrict administrative privileges | Yes | Separate admin roles, time-limited elevated access, and tight control of production, database and cloud console access |
| Application control | Mostly no | Applies to workstations and servers; relevant to developer machines and any servers you manage |
| Restrict Microsoft Office macros | No | Unless the application generates or processes Office documents with macros |
| User application hardening | Indirectly | Browser hardening is the organisation's job; the app should work without legacy browser features |
| Regular backups | Yes | Data, application and settings backups, restorable to a common point in time, protected from deletion |

## What patching timelines apply?

**For online services, critical vulnerabilities must be patched within 48 hours of release, or when working exploits exist, from Maturity Level One upwards.** Non-critical vulnerabilities in online services get two weeks. The model also sets how often you must scan.

| Requirement (from the November 2023 model) | Level One | Level Two | Level Three |
|---|---|---|---|
| Vulnerability scan of online services | At least daily | At least daily | At least daily |
| Patch online services: critical or working exploit | 48 hours | 48 hours | 48 hours |
| Patch online services: non-critical, no exploit | 2 weeks | 2 weeks | 2 weeks |
| Scan other applications | Not specified | At least fortnightly | At least fortnightly |
| Patch other applications | Not specified | Within one month | Within one month |
| Remove unsupported online services | Required | Required | Required |
| Automated asset discovery | At least fortnightly | At least fortnightly | At least fortnightly |

For a custom application, "patching" includes upgrading vulnerable open-source packages, not just applying vendor updates. That has design consequences. A 48-hour window is only achievable if the application has automated dependency scanning, a test suite you trust, and a deployment pipeline that can ship a patched build the same day. Software without those can't meet the timeline, however willing the team is.

## What must the application do for multi-factor authentication?

**At Maturity Level One, MFA is required for customers of online customer services that process, store or communicate sensitive customer data, and for the organisation's staff using services that hold sensitive data.** ASD's November 2023 changes removed the easy opt-out that let customers fall back to passwords alone, citing ongoing attacks on citizens who rely on passwords.

The model sets out a progression:

| MFA requirement | Level One | Level Two | Level Three |
|---|---|---|---|
| Staff MFA on services holding the organisation's sensitive data | Required | Required | Required |
| Customer MFA on services holding sensitive customer data | Required | Required | Required |
| Factors must include something users have | Required | Required | Required |
| Phishing-resistant MFA for staff using online services | Not required | Required | Required |
| Phishing-resistant MFA for customers | Not required | Must be offered as an option | Must be phishing resistant |
| Successful and failed MFA events centrally logged, logs protected | Not required | Required | Required |

In engineering terms, a customer portal handling personal, health or identity data needs MFA built in from the first release, with passkeys or security keys available as an option if the organisation is aiming for Level Two, and required for customers at Level Three. The app also needs to emit authentication events in a form the organisation's logging platform can collect and protect.

## How should admin access and backups be built?

**Build separate privileged roles into the application, make elevated access auditable and time-limited, and design data so it can be restored to a consistent point in time.** The Level Two requirements include disabling privileged access after 12 months unless revalidated and after 45 days of inactivity. Level Three adds just-in-time administration, and requires that even backup administrators can't modify or delete backups during their retention period.

For a custom system, that usually means:

- An admin role model in the app itself, separate from ordinary user accounts, with every admin action logged.
- No shared production credentials; service account and break glass credentials that are long, unique and managed in a secrets store.
- Cloud console, database and CI/CD access granted per person, reviewed, and removed when no longer needed.
- Backups of the database, file storage and configuration taken together so they restore to a common point, with restore tests as part of disaster recovery exercises.
- Backup storage the application's own accounts can't delete, such as immutable or locked object storage.

## An Essential Eight checklist for your next software project

**Put these in the requirements before development starts, because each one is cheap early and expensive later.**

1. Agree the client's target Essential Eight maturity level and which requirements the application must support.
2. Automated dependency and container scanning on every build, with alerts routed to a named owner.
3. A deployment pipeline that can release a tested patch within 48 hours.
4. A register of every component, library and runtime with its support end date.
5. MFA for all staff and customer accounts where sensitive data is involved, with a phishing-resistant option if the target is Level Two or above.
6. Central logging of authentication events, admin actions and security events, protected from change and deletion.
7. Separate privileged roles, time-limited elevation and access reviews.
8. MFA and least privilege on the cloud, source control and CI/CD accounts behind the application.
9. Backups that restore data, application and settings to a common point in time, tested, and protected from deletion.
10. Written exceptions with compensating controls, approved and reviewed, wherever a requirement can't be met.

ASD's assessment guide notes that for a strategy to count as implemented, every control in it must be effective or covered by an alternate control. One ineffective control means the level isn't met. That is why exceptions need to be deliberate and documented rather than discovered in an assessment.

## Beyond the Essential Eight

**The Essential Eight is a minimum, not a complete security program.** ASD says it won't stop every threat and that organisations should draw on the Information Security Manual for further controls. Application-level risks, such as broken access control, injection and, for AI systems, [prompt injection](/guides/prompt-injection), sit outside the eight strategies altogether. If your buyers are government agencies, the [IRAP guide](/guides/irap-explained) explains how ISM-based assessments work. For APRA-regulated clients, read [CPS 234 and AI systems](/guides/apra-cps-234-ai).

## How All Webbed Labs builds for it

We don't assess or certify Essential Eight maturity, and we don't claim a maturity level for any client. We build software so that the relevant requirements are achievable: dependency scanning and security checks run as quality gates on every change, a pipeline that can ship a patched build quickly, MFA and role-based admin access designed in, authentication and admin events logged, and backups designed for point-in-time restore in Australian regions. Every change also gets a senior engineer's review before deploy.

Keeping the patching timeline over years is an operations commitment, not a one-off build task. See our [cybersecurity](/services/cybersecurity) and [software maintenance and support](/services/software-maintenance-support) services.
