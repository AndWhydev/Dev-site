---
title: "How to migrate off a legacy ERP: a plan for Australian businesses"
metaTitle: "How to Migrate Off a Legacy ERP: An Australian Plan"
description: "How to leave MYOB Exo, older Pronto, Attache or a home grown ERP: choosing a path, migrating history, payroll and STP, cutover timing and reconciling."
eyebrow: "How to guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "Migrating off a legacy ERP works best as a staged business project, not a software swap. Decide first whether you are replacing the ERP, extending it, or carving functions off it one at a time. Then find every report, spreadsheet and integration that depends on it, bring across only the history you will actually use, archive the rest in a readable form for at least the ATO's five year period, and cut over at a quiet point in your financial and payroll calendar with a period of parallel running and reconciliation."
takeaways:
  - "Choose one of three paths before choosing a product: replace the ERP outright, extend it with a custom layer, or carve functions off it gradually."
  - "The undocumented parts (custom reports, integrations, macros and side spreadsheets) cause more overruns than the core ledger."
  - "Migrate open transactions, balances and a short window of history; archive the rest read only. The ATO's general rule is to keep business records for five years."
  - "Changing payroll mid year affects Single Touch Payroll. If you move year to date amounts to a new payroll solution, you may need to tell the ATO."
  - "Run old and new systems in parallel for at least one full period close and reconcile them before you switch the old one off."
faqs:
  - q: "How long does an ERP migration take?"
    a: "For a small to mid sized business moving to a cloud ERP with light customisation, three to nine months is common from selection to go live. Multi entity groups, manufacturing and heavy customisation take longer. Data migration and testing usually take more time than configuring the new system."
  - q: "Should we bring all our history into the new ERP?"
    a: "Usually not. Bring opening balances, open transactions and the history you actively use for reporting and comparison, often one to three years. Archive older data in a format you can still search and report on, and keep it for as long as your record keeping obligations require."
  - q: "Is end of financial year a good time to switch ERP?"
    a: "It is the cleanest point for the ledger, but it collides with year end close, payroll finalisation and audit. Many businesses prefer the start of a quarter, such as 1 October, after year end work is done. Talk to your accountant and payroll provider before fixing a date."
  - q: "What happens to Single Touch Payroll if we change systems mid year?"
    a: "Your new payroll solution reports under its own identifiers. If you transfer employees' year to date amounts and those identifiers change, the ATO says you need to tell it, or employees may see duplicate income statements. If you don't transfer year to date amounts, employees will have more than one income statement and each must be finalised."
  - q: "Can we keep our old ERP running read only?"
    a: "Sometimes, if the licence allows it and the server stays supported and secure. Often it is cheaper and safer to export the history to a reporting database or archive and retire the old system, because an unpatched ERP server is a security risk."
  - q: "Do we need a new ERP, or would custom software be better?"
    a: "Most businesses should buy a standard ERP for the ledger, payroll and inventory. Custom software earns its place around the edges: quoting, job costing, customer portals or workflows that set you apart. The strangler fig approach lets you do this gradually."
sources:
  - title: "Overview of record keeping rules for business"
    url: "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/record-keeping-for-business/overview-of-record-keeping-rules-for-business"
    publisher: "Australian Taxation Office"
  - title: "Changing your payroll solution or employees' Payroll IDs"
    url: "https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/single-touch-payroll/in-detail/single-touch-payroll-phase-2-employer-reporting-guidelines/changing-your-payroll-solution-or-employees-payroll-ids"
    publisher: "Australian Taxation Office"
  - title: "MYOB Exo Business"
    url: "https://www.myob.com/au/erp-software/products/myob-exo"
    publisher: "MYOB"
  - title: "MYOB Acumatica"
    url: "https://www.myob.com/au/erp-software/products/myob-acumatica"
    publisher: "MYOB"
  - title: "Chapter 11: APP 11 Security of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information"
    publisher: "OAIC"
  - title: "What is AWS Database Migration Service?"
    url: "https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html"
    publisher: "Amazon Web Services"
related:
  - title: "What is the strangler fig pattern?"
    href: "/guides/strangler-fig-pattern"
  - title: "How much does legacy system modernisation cost in Australia?"
    href: "/guides/legacy-modernisation-cost-australia"
  - title: "Rewrite vs refactor legacy software"
    href: "/guides/rewrite-vs-refactor-legacy-software"
  - title: "Build vs buy software"
    href: "/guides/build-vs-buy-software"
  - title: "How to plan a data migration"
    href: "/guides/data-migration-plan"
  - title: "NetSuite vs Business Central vs MYOB Acumatica"
    href: "/guides/netsuite-vs-business-central-vs-acumatica"
service:
  title: "Legacy modernisation"
  href: "/services/legacy-modernisation"
disclaimer: tax
---

## How do you know the ERP has become the bottleneck?

**An ERP becomes the bottleneck when the business works around it more than through it.** The software still runs, but the real process now lives in spreadsheets, email and one or two people's heads.

The common Australian picture is an on premise system such as MYOB Exo (which MYOB still sells as on premise business management software), an older Pronto or Attache install, Sage 300, or a home grown system built in the 2000s. The signs tend to cluster:

- Month end close takes days because figures are exported to Excel and stitched together.
- New staff need weeks of training on screens nobody would design today.
- Integrations with your website, warehouse or bank run through nightly file drops that break silently.
- The server, database or operating system underneath is out of vendor support.
- One consultant or staff member is the only person who can change a report.
- Remote and mobile access depends on a VPN and remote desktop.

None of these alone forces a migration. Three or more, combined with growth plans, usually do.

## Replace, extend or carve off: which migration path fits?

**There are three realistic paths, and choosing between them matters more than choosing a product.** Pick the path first, then the software.

| Path | What it means | Suits | Main risk |
|---|---|---|---|
| Replace | Move the whole business onto a new ERP at one cutover | Businesses whose processes are close to standard, with a clean chart of accounts | A single, large go live; every gap shows up at once |
| Extend | Keep the ERP as the ledger and build a custom layer for quoting, portals or reporting | An ERP that is still supported and accurate, but hard to use | Building more on a platform you may leave in three years |
| Carve off | Move one function at a time (quoting, then jobs, then inventory) and retire the old ERP last | Complex or custom systems where a big bang cutover is too risky | Running two systems longer, with integration work in between |

The carve off path is the [strangler fig pattern](/guides/strangler-fig-pattern) applied to an ERP. It is slower, but each step is small enough to test and roll back. Our guide to [rewrite vs refactor](/guides/rewrite-vs-refactor-legacy-software) covers the same decision for custom systems, and [build vs buy](/guides/build-vs-buy-software) covers whether a function should be custom at all.

## Which target system: a standard ERP or custom?

**For the general ledger, payroll, GST and inventory valuation, buy a standard product; build custom only where your process is the advantage.** Accounting rules, BAS and STP reporting are the same for everyone, and vendors keep them current.

The shortlist for Australian mid market businesses usually includes Microsoft Dynamics 365 Business Central, Oracle NetSuite, MYOB Acumatica (MYOB's cloud ERP) and Odoo, with Xero plus add ons for smaller operations. Evaluate them with your own scenarios, not a vendor demo: give each one a real order, a return, a stock transfer and a month end, and watch who drives the keyboard.

Custom software makes sense around the ERP: a quoting engine with your pricing rules, a job costing app for site crews, a customer or supplier portal, or reporting that joins ERP data with other systems. These connect to the ERP through its API, so the ledger stays standard.

## What did the old ERP do that nobody wrote down?

**The hidden scope in an ERP migration is everything built around the core: reports, integrations, scheduled jobs and side spreadsheets.** This is where most projects find their overrun, usually during testing.

Before choosing a go live date, build an inventory:

- [ ] Every report and who uses it. Ask finance, operations and sales separately.
- [ ] Every integration: bank feeds, EDI with customers, ecommerce, warehouse, freight, payroll, CRM.
- [ ] Scheduled jobs, triggers and stored procedures in the database.
- [ ] Custom fields and what they mean (field "User 3" on the customer record often holds something important).
- [ ] Spreadsheets that take an export, add logic, and feed a decision or another system.
- [ ] Documents the ERP produces: invoices, picking slips, statements, remittances, and their layouts.
- [ ] Approval rules and user permissions.

For each item, decide: rebuild in the new ERP, replace with a standard feature, rebuild as custom, or retire. Retiring is often the right answer for a third of the reports.

## How much history should you migrate?

**Migrate what you need to operate and compare; archive the rest in a readable form.** Pulling ten years of transactions into a new ERP is slow, expensive and rarely used.

| Data | Typical approach |
|---|---|
| Customers, suppliers, items, price lists | Migrate after cleansing and deduplication |
| Chart of accounts | Redesign if needed, then map old accounts to new |
| Opening balances (GL, debtors, creditors, stock) | Migrate at cutover and reconcile to the cent |
| Open orders, invoices, purchase orders | Migrate as open documents |
| Closed transactions, last one to three years | Migrate summarised, or in detail if used for reporting |
| Older closed transactions | Archive to a reporting database or files you can search |
| Employee and payroll history | Follow payroll provider and STP guidance; see below |

The ATO describes a general five year retention period for business records, with some records kept longer, so the archive has to stay accessible for at least that long. If the archive holds personal information about customers or staff, APP 11 still applies: protect it, and once no longer needed and no law requires you to keep it, take reasonable steps to destroy or de-identify it. Our [data engineering](/services/data-engineering) work follows the same mapping, cleansing and reconciliation steps whatever the source.

Tools help with the mechanics. AWS Database Migration Service, for example, can move data between many database engines, but it does not decide what the data means. Mapping old codes to new ones is a business task.

## When should you cut over in Australia?

**Pick a date that avoids year end close, BAS deadlines and payroll finalisation, and give yourself room after it.** The cleanest ledger date is 1 July, but that is when your finance team is busiest with end of financial year.

Things to weigh:

1. **Financial year.** Cutting over at the start of a period means opening balances are clean. Mid month cutovers create split periods to reconcile.
2. **BAS.** Avoid going live in the week a BAS is due. You want the first BAS from the new system to be prepared calmly, with the old system still available to check.
3. **Single Touch Payroll.** If payroll moves too, the ATO's guidance is specific: if you transfer employees' year to date amounts to a new payroll solution and the reporting identifiers change, you need to tell the ATO, otherwise employees can see duplicate income statements and your reported withholding looks inflated. If you don't transfer year to date amounts, employees will have more than one income statement, and you must finalise each one.
4. **Seasonal peaks.** A retailer should not go live in November; a builder may prefer the Christmas shutdown.

Many businesses land on the start of a quarter after year end work is done, such as 1 October. Confirm the date with your accountant and payroll provider.

## How do you run parallel and reconcile?

**Run both systems for at least one full period close, and reconcile the outputs before you switch off the old one.** Parallel running is tedious, which is exactly why it catches errors.

A practical reconciliation set:

- Trial balance from both systems, compared account by account at cutover and after the first month.
- Aged debtors and creditors totals, and a sample of individual balances.
- Stock quantity and value by location.
- GST collected and paid for the period.
- A sample of 20 to 50 real transactions traced end to end in both systems.

Agree tolerances in advance (to the cent for balances) and who signs off. Then freeze the old system to read only for a defined period before retiring it.

## What do ERP migrations cost, and where do they go wrong?

**Costs vary with the target system, licence model and customisation, so treat any early figure as a range to refine in discovery.** The items people forget to budget are data cleansing, report rebuilding, integration work, parallel running and staff time away from their normal jobs.

The usual failure points are predictable: a go live date set before the inventory is done, history migrated without cleansing, integrations tested only with sample data, and no time allowed for staff training. For custom work around the ERP, our [legacy modernisation cost guide](/guides/legacy-modernisation-cost-australia) gives typical Australian ranges.

## How AWLabs approaches ERP migrations

We usually come in where the ERP meets everything else: the inventory of reports and integrations, data mapping and reconciliation, integrations between the new ERP and your other systems, and the custom applications that should sit around it rather than inside it. We start with a Development Consult, then a paid Discovery Audit, credited in full against the build, that maps what the old ERP really does. The work is priced as a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, and we will tell you when a standard ERP feature beats custom code. See [legacy modernisation](/services/legacy-modernisation).
