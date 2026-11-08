---
title: "Backup and disaster recovery for business software: RPO, RTO and a one page plan"
metaTitle: "Disaster Recovery Plan for Business Software (RPO and RTO)"
description: "Set RPO and RTO for custom apps and SaaS like Microsoft 365 and Xero, test restores, resist ransomware and meet Essential Eight backup controls and CPS 230."
eyebrow: "How to guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "A disaster recovery plan for business software starts with two numbers per system: the recovery point objective (RPO), how much recent data you can afford to lose, and the recovery time objective (RTO), how long you can be without the system. SaaS vendors protect their platform, not necessarily your data against your own mistakes or a compromised account, so back up Microsoft 365 and line of business SaaS separately. For custom apps, use point in time database recovery, copies in a second location, and backups that can't be altered or deleted. Then test restores, because a backup you have never restored is a hope, not a plan."
takeaways:
  - "Set an RPO and RTO for each system based on what an outage or data loss would cost, not on what the technology happens to offer."
  - "SaaS vendors build resilience into their platforms, but their terms often limit what they owe you if your data is lost. Back up what you can't afford to lose."
  - "Ransomware targets backups. Use immutable or offline copies that even an administrator can't delete during the retention period."
  - "The Essential Eight requires restores to be tested as part of disaster recovery exercises at every maturity level."
  - "APRA regulated entities must set tolerance levels for disruption time and data loss for critical operations under CPS 230, in force since 1 July 2025."
faqs:
  - q: "What is the difference between RPO and RTO?"
    a: "RPO (recovery point objective) is how much data you can afford to lose, measured in time: an RPO of one hour means you must be able to restore to within an hour of the failure. RTO (recovery time objective) is how long the system can be unavailable before the impact becomes unacceptable."
  - q: "Does Microsoft back up my Microsoft 365 data?"
    a: "Microsoft builds redundancy into Microsoft 365 and offers recycle bins and retention features. It also notes that most data loss results from customer actions. For protection against mass deletion, ransomware or a compromised admin account, use a backup product, such as Microsoft 365 Backup or a third party service, with its own retention."
  - q: "How often should we test our backups?"
    a: "Test restoring a sample at least quarterly, and run a full disaster recovery exercise at least once a year, or after any major change to the system. Record how long the restore took and compare it with your RTO."
  - q: "What is an immutable backup?"
    a: "A backup that can't be changed or deleted until its retention period ends, even by an administrator. Examples include Amazon S3 Object Lock, which uses a write once read many model, and AWS Backup Vault Lock in compliance mode."
  - q: "Is losing data in an outage a notifiable data breach?"
    a: "It can be. Under the NDB scheme, an eligible data breach includes the loss of personal information that is likely to result in serious harm, where remedial action hasn't prevented that risk. Assess any incident involving personal information quickly."
  - q: "How much does disaster recovery cost?"
    a: "Costs rise as RPO and RTO shrink. Daily backups with a restore within a day are cheap. Near zero data loss with recovery in minutes needs a running standby environment, which can approach the cost of production. Match the investment to the business impact."
sources:
  - title: "Essential Eight Maturity Model"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-maturity-model"
    publisher: "Australian Signals Directorate"
  - title: "Prudential Standard CPS 230 Operational Risk Management"
    url: "https://www.apra.gov.au/standards/cps-230"
    publisher: "APRA"
  - title: "Operational risk management"
    url: "https://www.apra.gov.au/operational-risk-management"
    publisher: "APRA"
  - title: "Data resiliency in Microsoft 365"
    url: "https://learn.microsoft.com/en-us/compliance/assurance/assurance-data-resiliency-overview"
    publisher: "Microsoft Learn"
  - title: "Overview of Microsoft 365 Backup"
    url: "https://learn.microsoft.com/en-us/microsoft-365/backup/backup-overview"
    publisher: "Microsoft Learn"
  - title: "Xero terms of use"
    url: "https://www.xero.com/au/legal/terms/"
    publisher: "Xero"
  - title: "Backup retention period (Amazon RDS)"
    url: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.BackupRetention.html"
    publisher: "Amazon Web Services"
  - title: "Continuous archiving and point in time recovery (PITR)"
    url: "https://www.postgresql.org/docs/current/continuous-archiving.html"
    publisher: "PostgreSQL"
  - title: "Locking objects with Object Lock"
    url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html"
    publisher: "Amazon Web Services"
  - title: "When to report a data breach"
    url: "https://www.oaic.gov.au/privacy/notifiable-data-breaches/when-to-report-a-data-breach"
    publisher: "OAIC"
related:
  - title: "The Essential Eight for custom software"
    href: "/guides/essential-eight-software-development"
  - title: "APRA CPS 230 and AI vendors"
    href: "/guides/apra-cps-230-ai-vendors"
  - title: "Notifiable Data Breaches scheme for software"
    href: "/guides/notifiable-data-breaches-software"
  - title: "Software maintenance cost per year"
    href: "/guides/software-maintenance-cost"
service:
  title: "Cloud infrastructure"
  href: "/services/cloud-infrastructure"
disclaimer: legal
---

## What do RPO and RTO mean in practice?

**RPO is how much recent data you can afford to lose; RTO is how long you can afford to be without the system.** Both are business decisions expressed in time, and they drive every technical choice that follows.

| System | Example RPO | Example RTO | Why |
|---|---|---|---|
| Online booking and payments | 5 minutes | 1 hour | Every lost booking is lost revenue and an angry customer |
| Job management app for field crews | 1 hour | 4 hours | Crews can work from paper for a morning, not a week |
| Accounting (SaaS) | 24 hours | 1 business day | Entries can be re keyed from source documents |
| Shared files and email | 24 hours | 4 hours | Staff can't work without them |
| Internal reporting dashboard | 24 hours | 1 week | Inconvenient, not critical |

These are illustrative. To set yours, ask the owner of each system two questions: "If we lost the last X hours of data, what would it cost to recreate, and could we?" and "If this was down for Y hours, what would stop?" The answers usually show that a handful of systems need tight targets and the rest don't.

Tighter targets cost more. Daily backups restored within a day are cheap. Near zero data loss with recovery in minutes needs continuous replication and a standby environment, which can approach the cost of running production twice.

## Do SaaS vendors back up your data?

**SaaS vendors design their platforms to survive their own failures; they don't necessarily protect you from yours, and their contracts often say so.** Read the terms before assuming.

Microsoft describes its Microsoft 365 design principles in detail, including keeping copies across separate fault zones, and notes plainly that most data loss results from customer actions, which is why it gives users tools to restore deleted items themselves. Check how far back those tools reach for your plan and settings.

Xero's Australian terms of use are a useful example of how contracts handle it: for loss or corruption of your data, Xero's liability is limited to taking reasonable steps to try to recover the data from its available backups. That is a reasonable position for a vendor, and it means the risk of a mass deletion, a compromised login or a bad integration overwriting records sits largely with you.

The risks a vendor's platform resilience doesn't cover:

- A staff member or integration deleting or overwriting data.
- Ransomware syncing encrypted files into OneDrive or SharePoint.
- A compromised administrator account deleting mailboxes or sites.
- An account closed by mistake or for non payment.
- Data you need after it passes the vendor's retention window.

## How should you back up Microsoft 365 and line of business SaaS?

**Use a backup that sits outside the reach of the account it protects, with its own retention and its own administrators.** That is the point of a backup: an attacker or mistake that hits the source shouldn't also hit the copy.

For Microsoft 365, Microsoft now offers Microsoft 365 Backup, which can back up SharePoint sites, OneDrive accounts and Exchange mailboxes. Third party backup services are the other common choice, and the same reasoning applies to Google Workspace. Whichever you use, check where backup data is stored if residency matters to you, and protect the backup console with separate, phishing resistant sign in.

For line of business SaaS (accounting, CRM, practice software), check what each vendor provides:

- [ ] Can you export all your data, including attachments, in a usable format?
- [ ] Is there an API that a scheduled job can use to take regular exports?
- [ ] How far back can the vendor restore, and on what terms?
- [ ] What happens to your data if you stop paying or the vendor closes?

Where a vendor offers no backup option, a scheduled export to storage you control is better than nothing.

## How do you protect a custom app's data?

**For a custom application, combine point in time database recovery, regular snapshots, copies in a second location, and backups of everything else the app depends on.** The database is the heart of it, but not the whole.

- **Point in time recovery.** PostgreSQL supports continuous archiving of its write ahead log, which lets you restore the database to its state at any time since a base backup. Managed services wrap this up: Amazon RDS automated backups let you restore to any point within the retention period, which you can set from 0 to 35 days (the default is seven; 0 disables automated backups).
- **Longer term copies.** Point in time windows are short. Keep daily or weekly snapshots for longer, according to your retention needs.
- **A second location.** Copy backups to a different region or account. For Australian data, a second Australian region (Sydney and Melbourne for AWS) keeps copies onshore.
- **Everything else.** Uploaded files, configuration, secrets, infrastructure definitions and the code itself. A database restored into an environment nobody can rebuild doesn't help.

## How do you make backups survive ransomware?

**Assume an attacker who gets in will look for your backups first, and make sure they can't change or delete them.** Immutability and separation are the two defences.

- **Immutable storage.** Amazon S3 Object Lock stores objects on a write once read many model for a set retention period. AWS Backup Vault Lock in compliance mode goes further: once its grace period expires, the vault can't be deleted while it holds recovery points.
- **Separate accounts and credentials.** Keep backups in an account the production administrators can't reach with their everyday credentials.
- **An offline or offsite copy** for the systems that matter most.
- **Monitoring** for mass deletion or encryption events and for changes to backup policies.

## What does the Essential Eight require for backups?

**The Essential Eight's "regular backups" strategy is the same core at every maturity level, with access to backups tightened as the level rises.** Here is the summary from ASD's maturity model.

| Requirement | Level 1 | Level 2 | Level 3 |
|---|---|---|---|
| Backups of data, applications and settings performed and retained per business criticality and continuity requirements | Yes | Yes | Yes |
| Backups synchronised to restore to a common point in time | Yes | Yes | Yes |
| Retained in a secure and resilient manner | Yes | Yes | Yes |
| Restoration to a common point in time tested as part of disaster recovery exercises | Yes | Yes | Yes |
| Unprivileged users can't access other users' backups, or modify or delete backups | Yes | Yes | Yes |
| Privileged users (other than backup administrators) can't access other users' backups, or modify or delete backups | | Yes | Yes |
| Unprivileged and privileged users can't access their own backups | | | Yes |
| Backup administrators can't modify or delete backups during their retention period | | | Yes |

Level 3 effectively requires immutable backups. For how the other strategies apply to custom software, see our [Essential Eight guide](/guides/essential-eight-software-development).

## What do CPS 230 and the NDB scheme add?

**APRA regulated entities must plan to stay within defined limits for disruption and data loss; any organisation covered by the Privacy Act must assess whether lost data is a notifiable breach.**

APRA's CPS 230 Operational Risk Management commenced on 1 July 2025. For each critical operation, an entity must set tolerance levels for the maximum period of disruption it would tolerate, the maximum extent of data loss it would accept, and the minimum service levels it would maintain under alternative arrangements. Those map closely to RTO and RPO, and they extend to material service providers. Our guide to [CPS 230 for AI vendors](/guides/apra-cps-230-ai-vendors) covers the service provider side.

Separately, under the Notifiable Data Breaches scheme, an eligible data breach includes a loss of personal information likely to result in serious harm that remedial action hasn't prevented. Restoring promptly from a good backup may be part of that remedial action, but the assessment still has to be done. See our [NDB guide](/guides/notifiable-data-breaches-software).

## How do you test restores and run a tabletop exercise?

**Test restores on a schedule and time them; run a tabletop exercise once a year to test the people and decisions.**

1. **Monthly or quarterly:** restore a sample, such as a database into a test environment or a deleted mailbox, and check the data is complete and usable.
2. **Annually:** a full restore of a critical system into a clean environment, timed against its RTO.
3. **Annually:** a tabletop exercise. Gather the people who would respond and walk through a scenario ("ransomware has encrypted the file server and the accounting sync, 8am Monday"). Who decides? Who calls customers? Where are the passwords to the backup console?

Write down what took longer than expected, fix it, and update the plan.

## A one page disaster recovery plan template

Keep it short enough that people will read it on a bad day. Print a copy.

1. **Scope:** systems covered, with owner, RPO and RTO for each.
2. **Backups:** what is backed up, how often, where, retention, and who can access the copies.
3. **Contacts:** internal responders, vendors' support lines, insurer, IT provider.
4. **Decision rights:** who declares a disaster and who approves restoring.
5. **Recovery steps:** for each critical system, the order of restore and where the runbook lives.
6. **Communication:** templates for staff and customers; when to assess for a notifiable breach.
7. **Testing:** dates of the last restore test and exercise, and the next ones.

## How AWLabs builds recovery into software

For the custom apps we build and support, we set RPO and RTO with you during discovery and design backups to match: point in time database recovery, copies in a second Australian region, immutable storage where the risk warrants it, and documented, tested restores. We start with a Development Consult, then a paid Discovery Audit, credited in full against the build, and price the work as a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. See [cloud infrastructure](/services/cloud-infrastructure) and [software maintenance and support](/services/software-maintenance-support).
