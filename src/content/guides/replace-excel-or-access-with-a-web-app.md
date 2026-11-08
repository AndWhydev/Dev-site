---
title: "Replacing Excel or Microsoft Access with a web app: options, costs and how to migrate"
metaTitle: "Replace Excel or Microsoft Access with a Web App (2026)"
description: "What replaced Microsoft Access, when a spreadsheet becomes a risk, and how SaaS, Power Apps and a custom web app compare on cost and fit in Australia."
eyebrow: "Comparison"
category: compare
published: 2026-11-08
updated: 2026-11-08
summary: "There is no single replacement for Microsoft Access or a business critical spreadsheet. You have three realistic options: move to a SaaS product built for your industry, rebuild it on a low-code platform such as Power Apps or Airtable, or have a custom web app built with a proper database behind it. SaaS is cheapest if a product already fits. Low-code suits internal tools for a small number of staff already on Microsoft 365. A custom web app is the right choice when the spreadsheet holds rules that set your business apart, many people or customers need to use it, or it has to connect to other systems. In Australia a custom replacement typically costs $15,000 to $40,000 (AUD, ex GST) for a simple tool and $40,000 to $150,000 for a system with several users, integrations and history to migrate."
takeaways:
  - "Access 2016 and 2019 reached end of support on 14 October 2025 and Access 2021 in October 2026. Access 2024 is supported until October 2029."
  - "A spreadsheet has become a business system when several people depend on it, it holds rules nobody else understands, or a mistake in it costs real money."
  - "SaaS, low-code and custom web apps each win in different situations; the decision table below shows which."
  - "Most of the work in a replacement is extracting the business rules from formulas and macros and migrating the history, not building screens."
  - "Run the old file and the new system side by side for a short period, and freeze the old one to read only before you retire it."
faqs:
  - q: "What replaced Microsoft Access?"
    a: "Nothing replaced it directly, and Microsoft still sells and supports Access 2024. For new business apps, most organisations now choose a web app with a cloud database, a low-code platform such as Power Apps with Dataverse, or a SaaS product for their industry. The right replacement depends on how many people use the database, whether customers need access, and what it connects to."
  - q: "Is Microsoft Access being discontinued?"
    a: "Not at the time of writing. Older versions are retiring on Microsoft's schedule: Access 2016 and 2019 reached end of support on 14 October 2025, and Access 2021 retired in October 2026. Access 2024 is supported until October 2029. The bigger risk is usually the database itself: single file storage, local network dependence and macros only one person understands."
  - q: "Can Power Apps replace an Access database?"
    a: "Often, for internal tools used by staff on Microsoft 365. Power Apps Premium is listed at AU$29.90 per user per month (ex GST, paid yearly) at the time of writing and includes Dataverse storage. It suits forms, approvals and simple records. It fits less well when customers need access, the logic is complex, or you need the software to be portable outside Microsoft's platform."
  - q: "How much does it cost to replace an Access database with a web app?"
    a: "As a guide, Australian market ranges for custom software are $15,000 to $40,000 (AUD, ex GST) for a simple internal tool and $40,000 to $150,000 for a mid complexity system. A small Access database with a few tables and forms sits near the bottom; one with years of history, many users, reports and integrations sits much higher."
  - q: "When should a business stop using spreadsheets?"
    a: "When several people edit the same file and overwrite each other, when the file holds pricing or compliance rules that would be costly to get wrong, when you re-key the same data into other systems, or when only one person understands how it works. Spreadsheets remain the right tool for analysis, one off models and work only one person does."
  - q: "Can we keep using Excel alongside the new system?"
    a: "Yes. A good replacement usually keeps Excel for what it does well: the web app holds the records and rules, and staff export data to Excel for analysis or import price lists from it. What changes is that the spreadsheet is no longer the source of truth."
  - q: "Is this the same as replacing FileMaker?"
    a: "Mostly. FileMaker databases raise the same questions: who uses it, which rules live in scripts, and what history must move. The options and the migration steps on this page apply in the same way."
sources:
  - title: "Ending Support in 2025"
    url: "https://learn.microsoft.com/en-us/lifecycle/end-of-support/end-of-support-2025"
    publisher: "Microsoft Lifecycle"
  - title: "Access 2021 lifecycle"
    url: "https://learn.microsoft.com/en-us/lifecycle/products/access-2021"
    publisher: "Microsoft Lifecycle"
  - title: "Access 2024 lifecycle"
    url: "https://learn.microsoft.com/en-us/lifecycle/products/access-2024"
    publisher: "Microsoft Lifecycle"
  - title: "Power Apps pricing (Australia)"
    url: "https://www.microsoft.com/en-au/power-platform/products/power-apps/pricing"
    publisher: "Microsoft"
  - title: "Airtable pricing"
    url: "https://airtable.com/pricing"
    publisher: "Airtable"
  - title: "How Much Does Custom Software Development Cost in Australia in 2026?"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Technology"
  - title: "Legacy application modernisation approaches and cost in Australia"
    url: "https://xpansionit.com/blogs/legacy-application-modernisation-approaches-cost-australia"
    publisher: "XpansionIT"
related:
  - title: "How much does legacy system modernisation cost in Australia?"
    href: "/guides/legacy-modernisation-cost-australia"
  - title: "Low-code vs custom development"
    href: "/guides/low-code-vs-custom-development"
  - title: "Build vs buy: custom software or off-the-shelf SaaS?"
    href: "/guides/build-vs-buy-software"
  - title: "How much does a custom CRM cost in Australia?"
    href: "/guides/custom-crm-development-cost-australia"
  - title: "Rewrite vs refactor legacy software"
    href: "/guides/rewrite-vs-refactor-legacy-software"
service:
  title: "Legacy modernisation"
  href: "/services/legacy-modernisation"
disclaimer: financial
---

## When has a spreadsheet or Access database become a business system?

**A spreadsheet or Access database has become a business system when the business would stop, or lose money, if it broke.** At that point it deserves the same care as any other system: backups, access control, testing and someone other than its author who understands it.

Work through this checklist. Three or more ticks means it is time to plan a replacement, even if you don't act straight away.

- More than two people edit the file, and changes get overwritten or lost.
- It holds pricing, quoting, payroll, compliance or stock rules that would be costly to get wrong.
- One person built it and is the only one who knows how the formulas or macros work.
- Staff copy data out of it into accounting, CRM or job software by hand.
- It is slow, crashes or corrupts, or has a "do not touch" tab.
- Customers, suppliers or field staff need information from it and get it by email.
- You can't tell who changed a figure, or when.
- It holds personal information about customers or staff, with no access control.

The last point matters more than people expect. If your business is covered by the Privacy Act, you must take reasonable steps to secure personal information, and a shared file on a laptop or network drive is hard to defend.

## What is happening to Microsoft Access?

**Microsoft still sells and supports Access, but older versions are retiring on a fixed schedule.** Microsoft says that once a product retires there are no new security updates, other updates or assisted support.

| Version | Support status at the time of writing (November 2026) |
|---|---|
| Access 2016 | End of support 14 October 2025 |
| Access 2019 | End of support 14 October 2025 |
| Access 2021 | Retired October 2026 (Microsoft lists 14 October 2026, US Pacific time) |
| Access 2024 | Supported until October 2029 (Microsoft lists 10 October 2029) |

If you run Access 2016, 2019 or 2021, you are already on an unsupported version. Upgrading to Access 2024 buys time and is sometimes the right short term move. It doesn't fix the underlying limits: a single file database, dependence on a local network or a shared drive, and Windows only desktop use.

## What are your options: SaaS, low-code or a custom web app?

**Choose SaaS if a product already does the job, low-code for internal tools used by a few staff, and a custom web app when the rules are yours, many people use it or it must connect to other systems.** Many businesses use more than one: SaaS for accounting, a low-code app for a simple approval, custom software for the core workflow.

| Situation | SaaS product | Low-code (Power Apps, Airtable) | Custom web app |
|---|---|---|---|
| A common process: bookkeeping, payroll, rostering | Best fit | Possible | Rarely worth it |
| Internal forms and approvals for under 20 staff on Microsoft 365 | Possible | Best fit | Usually overkill |
| Pricing or quoting rules that set you apart | Rarely fits | Possible if simple | Best fit |
| Customers or suppliers need to log in | Depends on the product | Awkward and licence heavy | Best fit |
| Integration with Xero, MYOB, a CRM or an ERP | Depends on its marketplace | Possible through connectors | Best fit |
| Years of history and reports to keep | Often lost in migration | Possible | Best fit |
| You want to own and move the software freely | No | Tied to the platform | Yes, once paid for |

At the time of writing, Power Apps Premium is listed at AU$29.90 per user per month (ex GST, paid yearly), and Airtable at US$20 a seat per month for Team and US$45 for Business on annual billing, with charges only for users who can edit. Those fees are low for a handful of users and add up as headcount grows. Our [low-code vs custom guide](/guides/low-code-vs-custom-development) compares the platforms in more depth, and the [build vs buy guide](/guides/build-vs-buy-software) covers the SaaS question.

## What does a replacement cost in Australia?

**A custom web app to replace a spreadsheet or Access database typically costs $15,000 to $40,000 (AUD, ex GST) for a simple internal tool and $40,000 to $150,000 for a mid complexity system.** These are Expeed's published 2026 bands for custom software in Australia, and they are market ranges, not quotes. XpansionIT's published modernisation prices start from A$20,000 for a replatform and A$48,000 for a rebuild and migration, which sits inside the same range.

| What you're replacing | Typical approach | Indicative market range (AUD, ex GST) |
|---|---|---|
| A tracker or register used by one team | Low-code app, or a small custom tool | Platform fees only if you build it yourself; $15,000 to $40,000 custom |
| An Access database with 10 to 30 tables, forms and reports | Custom web app with a cloud database | $30,000 to $90,000 |
| A quoting or job system with pricing rules and an accounting integration | Custom web app | $60,000 to $150,000 |
| Several linked files and databases running core operations | Phased replacement, one module at a time | $150,000 and up |

The middle two rows are our reading of where those projects usually land within the published bands, not separate market figures. What moves a project up a row is mostly the same each time: how many hidden rules the file holds, how much history must move, how many people with different permissions will use it, and whether it must connect to other systems. Our [legacy modernisation cost guide](/guides/legacy-modernisation-cost-australia) covers larger replacements.

## How do you get the business rules out of formulas and macros?

**Treat the spreadsheet as a specification written by the business, and read it carefully before anyone writes code.** The rules in it are often the most valuable thing you own, and some of them are wrong.

1. **List every sheet, table, form, query and macro**, and who uses each one.
2. **Trace each important number back to its inputs.** Write the rule in plain English: "freight is 8% of the order, minimum $45, free over $2,000."
3. **Find the hidden rules.** Hard coded values in formulas, conditional formatting that staff treat as an instruction, and VBA macros that run on save.
4. **Ask the people who use it** what they do when the file gives the wrong answer. Those workarounds are rules too.
5. **Decide which rules to keep, fix or drop.** Replacement is the cheapest moment to remove a rule nobody needs.
6. **Turn each kept rule into a test case** with real examples, so the new system can be checked against the old file.

This step is where a paid discovery earns its fee. A vendor that quotes a fixed price without looking inside the file is guessing.

## How do you migrate the data and history safely?

**Clean the data in the old system first, migrate in trial runs, and keep the old file read only for a while after go live.** Data migration is where replacement projects most often run late.

- **Profile the data.** Count rows, find duplicates, blank fields and inconsistent spellings of the same customer.
- **Map every column** to a field in the new database, including the ones you decide to drop.
- **Decide how much history to bring.** Everything is safest; sometimes five years is enough and older records stay in an archive.
- **Run a trial migration** and check a sample by hand against the old file, using the rule test cases from the step above.
- **Plan a short parallel run**, a week or two where both systems are used and results are compared.
- **Freeze the old file** to read only on cut over day, and keep a dated copy.

## A worked example: a quoting spreadsheet becomes a web app

**This is a hypothetical business with illustrative figures inside the published ranges.** A 12 person fabrication business quotes every job from a 14 tab spreadsheet with VBA macros. Three estimators edit copies of it, accepted quotes are re-keyed into the accounting system, and the person who built it has left.

1. **Estimate hours by feature.** Extracting and documenting the rules 40 hours; data model 30; quote builder screens 90; pricing rules engine 70; PDF quote output 40; customer and job records 50; user roles 25; sending accepted quotes to the accounting system 60; importing six years of past quotes 45; automated testing against the old spreadsheet's results 70; deployment 20; project management 40. Total: 580 hours.
2. **Apply an assumed market blended rate** of $165 an hour (not our rate): 580 × $165 = $95,700 ex GST.
3. **Add running costs.** Maintenance at 15% of the build is $14,355 a year, and hosting with backups at an assumed $200 a month is $2,400. Total: $16,755 a year.
4. **Compare with low-code.** Twelve Power Apps Premium licences at AU$29.90 a month cost $4,305.60 a year before anyone builds the app. That is cheaper to run, and the right choice if the pricing rules are simple enough to model there. Here they aren't: the rules engine and the accounting integration are most of the value, so custom wins on fit.

## When should you keep the spreadsheet?

**Keep the spreadsheet when one person uses it, the stakes of an error are low, or the work is analysis rather than record keeping.** Replacing a working tool costs money and disrupts the team, so it should solve a real problem.

Spreadsheets remain the right tool for financial models, one off analysis, budgets that change every week and anything only one person touches. A simple improvement, such as moving the file to shared cloud storage with version history and restricting who can edit it, may be enough for now.

## How AWLabs approaches spreadsheet and Access replacement

We start with the file, not a quote. In the Development Consult we ask what the spreadsheet or database does and who depends on it, and we'll say so if Power Apps, an existing SaaS product or a tidy up is the better answer. If a custom build makes sense, a paid Discovery Audit extracts the rules, profiles the data and maps the integrations; its fee is credited in full against the build. The Schedule of Work then gives three fixed price options, The Minimum, The Recommended and The Complete, often with a smaller first release that replaces the riskiest part of the file. Senior engineers lead every build, the new system is hosted in an Australian cloud region by default, and the code is assigned to you as each part is paid for, with the repository and accounts handed over after final payment. See our [legacy modernisation service](/services/legacy-modernisation) and [custom software development](/services/custom-app-development).
