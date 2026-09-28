---
title: "The Notifiable Data Breaches scheme: what it means for software you build"
metaTitle: "Notifiable Data Breaches Scheme: What It Means for Software"
description: "Australia's Notifiable Data Breaches scheme for software teams: the 30 day assessment, who to notify, and the logging and design choices that make it workable."
eyebrow: "Australian regulation"
category: australia
published: 2026-09-28
updated: 2026-09-28
summary: "The Notifiable Data Breaches (NDB) scheme, in Part IIIC of the Privacy Act 1988, has applied since 22 February 2018. If an entity covered by the Privacy Act has reasonable grounds to believe an eligible data breach has occurred, meaning unauthorised access, disclosure or loss of personal information that is likely to cause serious harm and can't be prevented by remedial action, it must notify affected individuals and the OAIC as soon as practicable. If it only suspects a breach, it must take all reasonable steps to assess it within 30 days. Software determines how fast and how accurately you can answer the questions the scheme asks."
takeaways:
  - "The NDB scheme applies to breaches on or after 22 February 2018 and covers APP entities, credit reporting bodies, credit providers and TFN recipients."
  - "A suspected eligible data breach triggers an assessment that must be reasonable and expeditious, with all reasonable steps taken to finish within 30 calendar days (s 26WH)."
  - "Once there are reasonable grounds to believe a breach is eligible, you must notify the OAIC and affected individuals as soon as practicable (ss 26WK and 26WL)."
  - "Quick remedial action that makes serious harm unlikely means the breach is not eligible and needn't be notified, which rewards systems that can revoke access and contain fast."
  - "Since December 2024, a breach statement missing required content can attract an infringement notice under section 13K."
  - "The practical burden falls on engineering: knowing what data you hold, where, who accessed it, and whose records were involved."
faqs:
  - q: "How long do you have to report a data breach in Australia?"
    a: "There is no fixed number of hours under the NDB scheme. If you suspect an eligible data breach, you must take all reasonable steps to complete an assessment within 30 calendar days. Once you have reasonable grounds to believe it is eligible, you must notify the OAIC and affected individuals as soon as practicable. The OAIC treats 30 days as a maximum, not a target. Other regimes, such as APRA's prudential standards, set their own shorter deadlines for regulated entities."
  - q: "What makes a data breach notifiable?"
    a: "Three things: unauthorised access to, or disclosure or loss of, personal information held by the entity; the breach is likely to result in serious harm to any of the individuals involved, judged from a reasonable person's viewpoint; and the entity hasn't been able to prevent the likely risk of serious harm with remedial action."
  - q: "What must a data breach notification include?"
    a: "The entity's identity and contact details, a description of the breach, the kinds of information involved, and recommendations about the steps individuals should take in response (s 26WK(3)). The notification to individuals must include the content of the statement given to the OAIC."
  - q: "Who notifies if a software vendor or cloud provider is breached?"
    a: "Where information is held jointly, only one entity needs to assess and notify, but if none does, all can be in breach. The OAIC suggests the entity with the most direct relationship with the affected individuals is usually best placed to notify. Settle who does what in your contract before an incident."
  - q: "Is encrypted data covered if it's stolen?"
    a: "It depends on the likelihood of serious harm. Strongly encrypted data with keys that weren't compromised may make serious harm unlikely. If the keys were exposed, or the encryption was weak, treat it as readable. Record the encryption details in your assessment."
  - q: "Does the NDB scheme apply to small businesses?"
    a: "It applies to entities covered by the Privacy Act. Most businesses with turnover of $3 million or less are exempt, but some are covered regardless, such as health service providers. The scheme also applies to any entity that holds tax file number information, in relation to that information."
sources:
  - title: "About the Notifiable Data Breaches scheme"
    url: "https://www.oaic.gov.au/privacy/notifiable-data-breaches/about-the-notifiable-data-breaches-scheme"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Data breach preparation and response, Part 4: Notifiable Data Breach (NDB) scheme"
    url: "https://www.oaic.gov.au/privacy/notifiable-data-breaches/preventing-preparing-for-and-responding-to-data-breaches/data-breach-preparation-and-response/part-4-notifiable-data-breach-ndb-scheme"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Data breach preparation and response, Part 3: Responding to data breaches, four key steps"
    url: "https://www.oaic.gov.au/privacy/notifiable-data-breaches/preventing-preparing-for-and-responding-to-data-breaches/data-breach-preparation-and-response/part-3-responding-to-data-breaches-four-key-steps"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Report a data breach"
    url: "https://www.oaic.gov.au/privacy/notifiable-data-breaches/report-a-data-breach"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Notifiable Data Breaches Report: July to December 2024"
    url: "https://www.oaic.gov.au/privacy/notifiable-data-breaches/notifiable-data-breaches-publications/notifiable-data-breaches-report-july-to-december-2024"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Privacy and Other Legislation Amendment Act 2024 (No. 128, 2024), as made"
    url: "https://www.legislation.gov.au/C2024A00128/asmade/text"
    publisher: "Federal Register of Legislation"
related:
  - title: "Cybersecurity services"
    href: "/services/cybersecurity"
  - title: "The Essential Eight for custom software projects"
    href: "/guides/essential-eight-software-development"
  - title: "APRA CPS 234 and AI systems: what vendors need to provide"
    href: "/guides/apra-cps-234-ai"
  - title: "Using personal information in AI systems under the Privacy Act"
    href: "/guides/privacy-act-and-ai"
service:
  title: "Cybersecurity services"
  href: "/services/cybersecurity"
disclaimer: legal
---

## What is the Notifiable Data Breaches scheme?

**The Notifiable Data Breaches (NDB) scheme is the part of the Privacy Act 1988 that requires covered organisations and agencies to notify affected individuals and the OAIC when a data breach is likely to result in serious harm.** It sits in Part IIIC of the Act and applies to breaches that occurred on or after 22 February 2018.

It is not a niche obligation. In calendar year 2024 the OAIC received 1,113 notifications under the scheme, according to its July to December 2024 report. Every one of those started as a technical event: a compromised credential, a misconfigured bucket, an email to the wrong person, a stolen laptop. How your software is built decides how quickly you can see that event, contain it, and answer the questions the law asks.

## What counts as an eligible data breach?

**A breach is eligible, and therefore notifiable, when all three of these are true.** The test comes from section 26WE and the OAIC's guidance.

1. **There is unauthorised access to, or unauthorised disclosure of, personal information the entity holds, or information is lost in circumstances where that is likely.** Access by an employee or contractor beyond their permission counts, not just external attackers.
2. **It is likely to result in serious harm to any of the individuals involved.** "Likely" means more probable than not, judged from the viewpoint of a reasonable person in the entity's position. Serious harm can be physical, psychological, emotional, financial or reputational.
3. **The entity hasn't been able to prevent the likely risk of serious harm through remedial action.**

The third limb matters for engineers. If you act fast enough that serious harm is no longer likely, the breach isn't eligible and needn't be notified. The OAIC's example is a file sent to the wrong recipient, who confirms it wasn't accessed and deletes it. Systems that let you revoke tokens, rotate keys, recall shared links and confirm what was actually read give you that option. Systems that can't, don't.

Information you've sent overseas can still count. If you disclose personal information to an overseas recipient under APP 8.1, you are generally treated as still holding it for NDB purposes (s 26WC), so a breach at your offshore vendor can be your breach.

## What are the deadlines?

**Thirty days to assess a suspected breach, and "as soon as practicable" to notify once you believe it is eligible.**

| Stage | Requirement | Provision |
|---|---|---|
| Suspicion | Aware of reasonable grounds to suspect an eligible data breach: an assessment is triggered | s 26WH(1) |
| Assessment | Carry out a reasonable and expeditious assessment; take all reasonable steps to finish within 30 calendar days of becoming aware | s 26WH(2) |
| Belief | Reasonable grounds to believe an eligible data breach occurred, during or after assessment | s 26WK |
| Notify OAIC | Prepare a statement for the Commissioner as soon as practicable | s 26WK |
| Notify individuals | Notify all affected individuals, or only those at risk, or if neither is practicable, publish the statement and publicise it | s 26WL |
| Keep published statement up | The OAIC generally expects a published statement to stay available for at least 6 months | OAIC guidance |

The OAIC's position is that 30 days is a maximum, and that entities should aim to finish much faster because the risk of harm often grows with time. If you can't finish within 30 days, document why and what you did.

Other regimes may apply in parallel and move faster, such as APRA's prudential standards for banks, insurers and super funds, and incident reporting obligations for critical infrastructure. Map all of them in one runbook.

## What changed with the 2024 reforms?

**The Privacy and Other Legislation Amendment Act 2024 made the scheme easier to enforce and added a way to share information after a major breach.** Both parts commenced on 11 December 2024.

- **Infringement notices for defective statements.** Section 13K(2) makes it a civil penalty provision to prepare a breach statement that doesn't meet the content requirements of section 26WK(3), and the OAIC can issue infringement notices for it. A sloppy notification is now a contravention in itself.
- **Eligible data breach declarations.** The Minister can declare a breach so that specified entities can collect, use and disclose specified personal information to reduce the risk of harm, for example letting banks and government agencies act on a list of compromised identity documents (new ss 26X to 26XH).
- **Security includes technical and organisational measures.** New APP 11.3 makes explicit that reasonable steps to protect personal information include technical and organisational measures, which is the standard a breach investigation will measure you against.

## What does your software need to answer?

**Every breach assessment asks the same questions, and the answers live in your systems, not in a policy binder.** If the software can't answer them, the assessment takes longer, the notification is vaguer and the scope is usually wider than it needed to be.

| Question the assessment asks | Engineering capability that answers it |
|---|---|
| What personal information was involved? | A data inventory mapping tables, buckets, indexes and logs to categories of personal information |
| Whose records were involved? | The ability to list affected individuals from access logs or query history |
| When did it start and stop? | Tamper-resistant, time-synchronised logs retained long enough to cover detection lag |
| Who accessed it, and what did they see? | Per-record or per-query access logging for sensitive data, not just login events |
| Was it readable? | Documented encryption at rest, key management and whether keys were exposed |
| Can we stop further harm? | Session and token revocation, key rotation, link expiry, account lockdown |
| Which vendors hold copies? | A sub-processor register including AI providers, analytics and support tools |
| Can we contact the people affected? | Current contact details and a bulk notification capability |

AI systems widen the surface. Prompts, retrieved documents, conversation histories, embeddings and evaluation datasets can all contain personal information, often copied into places the original data inventory never listed. Our guide to [using personal information in AI systems](/guides/privacy-act-and-ai) covers where it flows, and [prompt injection](/guides/prompt-injection) is a newer route to unauthorised disclosure worth designing against.

## Design choices that shrink a breach before it happens

**The cheapest breach to handle is the one that exposes less, is seen sooner and can be contained in minutes.**

- **Collect and keep less.** Data you don't hold can't be breached. Set retention periods and actually delete, including in backups, logs and analytics copies.
- **Segment by sensitivity.** Keep identity documents, health information and financial details in separate stores with separate credentials, so one compromised service doesn't expose everything.
- **Tokenise or pseudonymise.** Replace direct identifiers in analytics, test and AI pipelines with tokens that are useless without a separately protected lookup.
- **Never use production data in test.** Test environments are routinely less protected.
- **Encrypt with keys you control, and log key use.** It turns "was it readable?" into a question with an evidence-based answer.
- **Least privilege for people and services.** Most breaches involve credentials. Short-lived tokens, MFA and scoped service accounts limit the blast radius. The ASD's [Essential Eight](/guides/essential-eight-software-development) is the practical baseline.
- **Alert on unusual access.** Bulk exports, access from new locations and queries outside normal patterns should page someone.

## Worked example: a leaked API key

A SaaS platform for physiotherapy clinics finds that a developer accidentally committed an API key to a public code repository. The key had read access to the appointments database.

1. **Contain (hour 1).** The key is revoked and rotated. A new key is issued to the legitimate service.
2. **Scope (day 1).** Access logs show the key was used from an unfamiliar IP address twice, 36 hours after it was exposed. Query logs show which tables and rows those requests read: 4,200 appointment records including names, phone numbers and treatment types across 11 clinics.
3. **Assess (days 1 to 5).** Treatment types are health information, so serious harm is plausibly likely. The data can't be recovered. The platform concludes, with legal advice, that it has reasonable grounds to believe an eligible data breach occurred.
4. **Decide who notifies.** The clinics have the direct relationship with patients. The contract says the platform prepares the statement and the clinics send it. The OAIC is notified with a copy of the template notification.
5. **Notify (day 6).** Affected patients are told what happened, what information was involved and what to watch for.
6. **Review.** Secret scanning is added to the CI pipeline, keys become short-lived, and the database role is narrowed to the columns the service actually needs.

Without per-query logs, step 2 would have had to assume every record in the database was read, and the notification would have gone to every patient of every clinic on the platform.

## NDB readiness checklist for software teams

- [ ] A data inventory maps every store, index and log to the categories of personal information it holds.
- [ ] Access to sensitive records is logged at record or query level, with time-synchronised, tamper-resistant logs.
- [ ] Logs are retained long enough to cover realistic detection delays.
- [ ] Credentials, tokens and keys can be revoked and rotated within minutes, and this has been tested.
- [ ] Encryption at rest uses keys you control, with key access logged.
- [ ] Production data is not used in test or development environments.
- [ ] Secret scanning runs on every commit.
- [ ] A sub-processor register lists every vendor holding personal information, including AI providers.
- [ ] Contracts say who assesses and who notifies when information is held jointly.
- [ ] A runbook covers the NDB 30 day assessment and any faster sector deadlines.
- [ ] You can generate a list of affected individuals and send notifications in bulk.
- [ ] A tabletop exercise has been run in the last 12 months.

## How All Webbed Labs approaches this

We build access logging, key management, revocation paths, data inventories and least-privilege roles into the software we deliver, and we can review an existing codebase for the gaps that make breach assessments slow. We don't assess or notify breaches on your behalf, and whether a breach is eligible is a decision for you and your legal advisers. See our [cybersecurity](/services/cybersecurity) and [software maintenance and support](/services/software-maintenance-support) services, and how we handle security in our own work on the [trust](/trust) page.
