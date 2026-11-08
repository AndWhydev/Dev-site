---
title: "How to plan a data migration: steps, template and sign off"
metaTitle: "How to Plan a Data Migration: Steps and a Template"
description: "A plain language data migration plan for moving CRM, ERP or practice data: inventory, field mapping, cleansing, trial runs, reconciliation and old data."
eyebrow: "How to guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "A data migration plan sets out what data you are moving, who decides what it means, how each field maps to the new system, how it will be cleaned, how you will prove it arrived correctly, and what happens to the old system afterwards. The steps are: inventory and ownership, mapping and transformation rules, cleansing before the move, at least two full trial migrations with reconciliation reports, a rehearsed cutover with a rollback point, and a decision to archive, freeze or delete the old data in line with your privacy and record keeping obligations."
takeaways:
  - "Data migrations overrun because old data is messier than anyone admits. Profile the data before you estimate."
  - "Every data set needs a business owner who decides what fields mean and signs off the result. IT can move data; it can't decide what it means."
  - "Clean data in the source or in a staging area before the move, never after it lands in the new system."
  - "Run full trial migrations and reconcile counts, totals and samples each time. The final run should be the boring one."
  - "Old data is still regulated. Under APP 11.2, personal information you no longer need must be destroyed or de-identified unless a law requires you to keep it."
faqs:
  - q: "What are the main steps in a data migration?"
    a: "Inventory the data and assign owners, map fields and define transformation rules, cleanse and deduplicate, build the migration scripts, run trial migrations with reconciliation, rehearse and execute cutover with a rollback point, then archive or retire the old system."
  - q: "How long does a data migration take?"
    a: "Moving one CRM or practice system with a few hundred thousand records typically takes four to ten weeks including trial runs, most of it in mapping, cleansing and testing. Migrations with many sources or poor data quality take longer."
  - q: "What is a reconciliation report?"
    a: "A report that compares the source and the target after a migration run: record counts per entity, financial or quantity totals, and a sample of individual records checked field by field. It is the evidence the business owner signs off."
  - q: "Should we clean the data before or after migrating?"
    a: "Before, or in a staging area during the migration. Cleaning after go live means users work with bad data while you fix it, and the new system's automations may act on it."
  - q: "What should we do with the old system?"
    a: "Decide per data set: archive it in a searchable form, keep the old system read only for a defined period, or delete it. Keep financial records for the ATO's general five year period, and destroy or de-identify personal information you no longer need."
  - q: "Can a tool do the migration for us?"
    a: "Tools such as AWS Database Migration Service and Azure Database Migration Service move data between databases reliably. They don't decide how a status code in the old system maps to the new one, or which duplicate customer is correct. That is the work of the plan."
sources:
  - title: "Chapter 11: APP 11 Security of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information"
    publisher: "OAIC"
  - title: "Overview of record keeping rules for business"
    url: "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/record-keeping-for-business/overview-of-record-keeping-rules-for-business"
    publisher: "Australian Taxation Office"
  - title: "What is AWS Database Migration Service?"
    url: "https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html"
    publisher: "Amazon Web Services"
  - title: "What is Azure Database Migration Service?"
    url: "https://learn.microsoft.com/en-us/azure/dms/dms-overview"
    publisher: "Microsoft Learn"
  - title: "When to report a data breach"
    url: "https://www.oaic.gov.au/privacy/notifiable-data-breaches/when-to-report-a-data-breach"
    publisher: "OAIC"
related:
  - title: "How much does cloud migration cost in Australia?"
    href: "/guides/cloud-migration-cost-australia"
  - title: "Replace Excel or Access with a web app"
    href: "/guides/replace-excel-or-access-with-a-web-app"
  - title: "What is the strangler fig pattern?"
    href: "/guides/strangler-fig-pattern"
  - title: "Database architecture"
    href: "/services/database-architecture"
service:
  title: "Data engineering"
  href: "/services/data-engineering"
---

## Why do data migrations overrun?

**Data migrations overrun because the estimate is based on the data people think they have, not the data that is actually there.** A system that has run for ten years holds duplicates, free text where codes should be, abandoned fields, and records that break rules the screens enforce today.

The typical surprises:

- A "status" field with 40 distinct values where the business believes there are six.
- The same customer entered three times with slightly different names and addresses.
- Dates stored as text in three formats.
- Notes fields holding structured data, such as an account number typed into a comment.
- Records orphaned when their parent was deleted.
- Attachments stored on a file share, with paths in the database that no longer resolve.

The fix is to profile before you estimate. A day or two spent running counts, distinct values and null checks on every table you plan to move turns guesses into a plan. This guide covers moving data between business applications, such as an old CRM to a new one or practice software to a custom platform. For moving whole servers to the cloud, see our [cloud migration cost guide](/guides/cloud-migration-cost-australia).

## Who owns each data set, and what exists?

**Start with an inventory of every data set in scope and name one business owner for each.** The owner decides what fields mean, which records matter and whether the result is right. Without one, every mapping question becomes a meeting.

| Data set | Source system | Records | Owner | In scope? | Notes |
|---|---|---|---|---|---|
| Customers | Old CRM | 48,000 | Sales manager | Yes | Many duplicates |
| Contacts | Old CRM | 112,000 | Sales manager | Yes | Linked to customers |
| Jobs or matters | Practice system | 9,500 | Operations lead | Open plus 3 years | Older to archive |
| Invoices | Accounting | 61,000 | Finance manager | Balances only | History stays in accounting |
| Documents | File share | 300 GB | Operations lead | Linked to open jobs | Rest archived |

The figures above are illustrative; yours come from profiling. The inventory also answers a privacy question early: which data sets hold personal or sensitive information, and does each one need to move at all?

## How do you map fields and transform values?

**A mapping specification lists every target field, where its value comes from, and the rule that converts it.** It is the core document of the migration, and the business owner signs it.

| Target field | Source field | Rule | Example |
|---|---|---|---|
| customer.name | CUST_NAME | Trim spaces; title case | "ACME PTY LTD " to "Acme Pty Ltd" |
| customer.abn | CUST_ABN or notes | Digits only; validate checksum; else blank and flag | "12 345 678 901" |
| customer.status | STATUS_CD | Lookup table: 40 old codes to 5 new | "A2", "ACT" to "Active" |
| customer.created_at | DATE_ENT | Parse three formats; Sydney time to UTC | "3/7/14" to 2014-07-03 |
| job.owner_id | ASSIGNED_TO | Match staff by email; unmatched to a holding user | |

Write lookup tables as data, not code, so the owner can review them in a spreadsheet. Note every field you deliberately don't migrate, and why. That list is often as useful as the mapping.

## When and how should you cleanse the data?

**Cleanse in the source system or in a staging area before the final load, never in the new system after go live.** Once users and automations start working with bad records, every fix becomes harder.

A practical order:

1. **Remove what no one needs.** Test records, records for long closed accounts, and abandoned fields.
2. **Standardise formats.** Phone numbers, addresses, dates, ABNs, units of measure.
3. **Deduplicate.** Match on several fields (name, email, ABN, phone), have the owner confirm the rules, and decide which record survives and what merges into it.
4. **Fill or flag gaps.** Where a required field in the new system is empty, choose a default or flag the record for manual review.
5. **Validate relationships.** Every contact belongs to a customer; every job has an owner.

Some cleansing is a business decision dressed up as a technical one. Merging two customers changes reporting history, so the owner decides.

## How do trial migrations and reconciliation work?

**Run the full migration at least twice into a test copy of the new system, and reconcile each run against the source.** The first trial finds the problems; the second proves the fixes; the final run on cutover day should hold no surprises.

Each reconciliation report should cover:

- [ ] Record counts per entity, source against target, with every difference explained.
- [ ] Totals that matter to the business: balances, quantities, hours, amounts.
- [ ] A random sample of 50 to 100 records checked field by field by the owner.
- [ ] Every record that failed validation, with the reason and what will happen to it.
- [ ] Relationship checks: no orphans in the target.
- [ ] Run time, so you know how long the cutover window needs to be.

Users should test the migrated data in the new system too, using their real daily tasks. That often finds mapping problems no count would catch, like a status that is technically correct but appears in the wrong queue.

## What goes in the cutover and rollback plan?

**The cutover plan is a timed checklist for the day, with a named go or no go decision and a way back.** Write it as a runbook, then rehearse it during the final trial.

1. Announce a freeze: no changes in the old system from a set time.
2. Take a full backup of source and target.
3. Run the final extract, transform and load.
4. Run the reconciliation report and have the owners sign off.
5. Go or no go decision at a fixed time by a named person.
6. Switch users, integrations and any scheduled jobs to the new system.
7. Set the old system to read only.
8. Hold a support window for the first days of real use.

The rollback point is the moment after which going back means losing new work. Before it, rollback is simple: users return to the old system. After it, plan for forward fixes instead. Our guide to the [strangler fig pattern](/guides/strangler-fig-pattern) explains how to shrink cutover risk by moving one area at a time.

## What should you do with the old system and its data?

**Decide, data set by data set, whether to archive, keep read only for a defined period, or delete, and write the decision down.** Leaving the old system running indefinitely "just in case" keeps paying for licences and leaves an unpatched copy of your data in place.

Two Australian obligations shape the decision:

- **Record keeping.** The ATO describes a general five year retention period for business records, with some records kept longer. Financial history you are not migrating needs to stay accessible, usually as an archive you can search and export.
- **Privacy.** Under APP 11.2, an organisation covered by the Privacy Act must take reasonable steps to destroy or de-identify personal information it no longer needs, unless an Australian law or a court order requires it to be kept. A forgotten copy of an old database is also a breach risk: if it is lost or accessed without authorisation and that is likely to cause serious harm, it can become a notifiable data breach.

Destroy deliberately: delete the data, its backups and test copies, and keep a record of what was destroyed and when.

## A data migration plan template you can copy

Use these headings for your plan. Each section is short; the mapping specification and reconciliation reports are attachments.

1. **Scope.** Systems, data sets, what is out of scope and why.
2. **Owners.** Business owner and technical lead per data set.
3. **Profiling results.** Counts, quality issues found, and their impact.
4. **Mapping specification.** Attached, signed by owners.
5. **Cleansing rules.** Including deduplication rules and who approved them.
6. **Trial schedule.** Dates of each trial and who tests.
7. **Reconciliation criteria.** What must match, tolerances, sign off.
8. **Cutover runbook.** Timed steps, go or no go, rollback point.
9. **Old data decision.** Archive, read only or delete, per data set, with retention period.
10. **Risks and contingencies.**

As a guide to effort, a single source migration with moderate data quality usually spends about a quarter of its time on profiling and mapping, a quarter on cleansing, a third on trials and reconciliation, and the rest on cutover and closing out. Costs follow effort; the cost guides for [replacing Excel or Access](/guides/replace-excel-or-access-with-a-web-app) and legacy systems show how migration fits into a wider build.

## How AWLabs approaches data migrations

We start with a Development Consult, then a paid Discovery Audit, credited in full against the build, in which we profile the source data so the estimate is based on facts. The migration is priced as a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. We write the mapping, build repeatable scripts, run trials with reconciliation reports your owners sign, and plan what happens to the old data. Senior engineers lead every build. See [data engineering](/services/data-engineering), [database architecture](/services/database-architecture) and [legacy modernisation](/services/legacy-modernisation).
