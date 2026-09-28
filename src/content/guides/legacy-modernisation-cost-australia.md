---
title: "How much does legacy system modernisation cost in Australia?"
metaTitle: "Legacy System Modernisation Cost in Australia (2026)"
description: "How much does legacy system modernisation cost in Australia? Typically $40k to $700k+ AUD, from a cloud rehost to a full rebuild. Costs by approach explained."
eyebrow: "Cost guide"
category: cost
published: 2026-09-28
updated: 2026-09-28
summary: "Legacy system modernisation in Australia typically costs $40k to $200k AUD (ex GST) for a single business application moved with modest changes, and $200k to $700k or more if you re-architect or rebuild it. Core or regulated systems regularly pass $1 million. The approach you choose (rehost, replatform, refactor, rebuild or replace) drives the price more than any other factor, and a paid assessment of $10k to $40k is the usual first step."
takeaways:
  - "Approach sets the budget: rehosting a system costs a fraction of rebuilding it, and they solve different problems."
  - "Most of the cost in legacy work is discovery and risk: undocumented logic, unknown integrations and data quality."
  - "Incremental modernisation (one module at a time) spreads cost and risk, and lets you stop when the value runs out."
  - "Budget a 15 to 25% contingency. Legacy estimates run over more often than new builds because the unknowns are in old code."
  - "Doing nothing has a cost too: licences, specialist contractors, security exposure and slower change."
faqs:
  - q: "What is the cheapest way to modernise a legacy system?"
    a: "Usually rehosting it as-is onto supported cloud infrastructure, or retiring it and archiving the data if nobody really needs it. Rehosting is cheap because the code doesn't change, but it also doesn't fix slow change, poor user experience or a shrinking pool of people who understand the code."
  - q: "Is it cheaper to rebuild or refactor?"
    a: "Refactoring is usually cheaper and lower risk when the core design is sound and the business logic is correct. Rebuilding makes sense when the platform itself is the problem (unsupported language, no source code, a design that blocks every change) and the business process has changed enough that you'd rebuild it differently anyway."
  - q: "How long does legacy modernisation take?"
    a: "A rehost of one application can take 6 to 14 weeks. Replatforming and refactoring commonly take 3 to 9 months. Rebuilding a core system incrementally often runs 9 to 24 months, delivered in stages so users see progress along the way."
  - q: "How much does it cost to migrate a legacy application to the cloud?"
    a: "A lift-and-shift rehost of one moderate-sized application typically costs $15k to $80k (AUD, ex GST), and a replatform onto managed cloud services $40k to $200k. The worked example on this page, a .NET app moved to Azure Australia East with a runtime upgrade, comes to a planning budget of $176,400 including contingency."
  - q: "How much does mainframe modernisation cost?"
    a: "Mainframe, AS/400 and 4GL systems sit at the top of the ranges on this page, because the specialists are scarce and the systems are usually core to the business. Core or regulated systems regularly pass $1 million. A paid assessment is essential before anyone quotes."
  - q: "Can AI coding tools reduce the cost of legacy modernisation?"
    a: "They can shorten parts of it, especially reading and documenting old code, writing tests around existing behaviour and translating repetitive code. They don't remove the need for someone to decide what the system should do, verify behaviour against real data, and manage cutover. Treat AI savings as a reduction in engineering days, not in discovery or testing."
  - q: "Should I replace my custom system with off-the-shelf SaaS instead?"
    a: "If a mainstream product covers most of your process, replacing is often the cheapest long-term option, even after data migration and integration. Custom modernisation is worth it when the system encodes how you compete, or when no product fits without heavy customisation."
  - q: "Can legacy modernisation qualify for the R&D Tax Incentive?"
    a: "Routine migration and rewriting usually doesn't, because the outcome can be known in advance by a competent professional. Some projects include genuinely experimental work that might. Ask a registered R&D tax agent before you start, not after."
sources:
  - title: "About the migration strategies (the 7 Rs)"
    url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html"
    publisher: "AWS Prescriptive Guidance"
  - title: "Information Technology: Agencies Need to Plan for Modernizing Critical Decades-Old Legacy Systems (GAO-25-107795)"
    url: "https://www.gao.gov/products/gao-25-107795"
    publisher: "US Government Accountability Office"
  - title: "Legacy application modernisation approaches and cost in Australia (25 August 2026)"
    url: "https://xpansionit.com/blogs/legacy-application-modernisation-approaches-cost-australia"
    publisher: "XpansionIT"
  - title: "Legacy system modernisation in Australia (18 September 2026)"
    url: "https://appinventiv.com/blog/legacy-system-modernisation-in-australia/"
    publisher: "Appinventiv"
  - title: "Salary Guide 2026, Australia (mid-year edition)"
    url: "https://www.robertwalters.com.au/content/dam/robert-walters-redesign/country/australia/files/salary-survey/Salary-Guide-2026-AU-V10-mid-year.pdf"
    publisher: "Robert Walters"
  - title: "Contractor day rates in Australia: 2026 guide"
    url: "https://www.resourced.com.au/articles/contractor-day-rates-australia-guide-2026"
    publisher: "Re:Sourced"
related:
  - title: "Rewrite vs refactor: what to do with legacy software"
    href: "/guides/rewrite-vs-refactor-legacy-software"
  - title: "What is the strangler fig pattern?"
    href: "/guides/strangler-fig-pattern"
  - title: "How much does software maintenance cost per year?"
    href: "/guides/software-maintenance-cost"
  - title: "Build vs buy: custom software or off-the-shelf SaaS?"
    href: "/guides/build-vs-buy-software"
service:
  title: "Legacy system modernisation"
  href: "/services/legacy-modernisation"
disclaimer: financial
---

## How much does legacy modernisation cost, by approach?

**The approach you choose is the single biggest cost driver, so pick the approach first and the budget follows.** That applies whether you call it legacy system modernisation, application modernisation (modernization, in US usage), a cloud migration or a system replacement. AWS groups migration options into the "7 Rs" (retire, retain, rehost, relocate, repurchase, replatform, refactor). For custom business software, the useful set is below, plus a full rebuild, which AWS doesn't list because it isn't a migration.

These are typical Australian market ranges for one business application of moderate size (tens of screens, a handful of integrations, one main database), in AUD, ex GST, covering engineering, testing, data migration and cutover. They are ranges, not quotes.

| Approach | What changes | Typical cost (one application) | Typical timeline |
|---|---|---|---|
| Retire and archive | System switched off; data exported to a searchable archive | $5k to $40k | 2 to 8 weeks |
| Rehost (lift and shift) | Same code, moved to supported infrastructure | $15k to $80k | 6 to 14 weeks |
| Replatform | Small changes to use managed services: database, containers, newer runtime | $40k to $200k | 3 to 8 months |
| Refactor or re-architect | Code restructured, often split into services, with tests added | $150k to $500k+ | 4 to 12 months |
| Rebuild (incremental) | New system replaces the old one module by module | $200k to $1M+ | 9 to 24 months |
| Replace with SaaS | Buy a product; migrate data and integrate it | $30k to $300k, plus subscriptions | 3 to 9 months |

Australian providers that publish figures land in a similar place: XpansionIT gives $70k to $700k for mid-size businesses, with enterprise systems regularly above $1 million, and Appinventiv bands contained systems at $70k to $200k and core regulated platforms at $400k to $700k or more. AWS's own guidance calls refactoring "the most complex and costly" strategy, which is why it recommends moving first and modernising after for large estates.

## Where do those numbers come from?

**Legacy work is priced in senior engineering days, and most of those days go on understanding the old system rather than writing new code.** Legacy projects need experienced people: someone who can read a 15-year-old codebase, spot the business rule hidden in a stored procedure, and plan a cutover that doesn't lose data.

The Robert Walters 2026 salary guide puts NSW senior backend contractors at $800 to $1,000 a day, and solution architects at $900 to $1,100. Re:Sourced reports senior engineer day rates in Sydney of $800 to $1,100 ex GST. Agencies charge more than a contractor's rate because they carry project management, QA, tooling and warranty; $1,200 to $1,600 a day blended is a reasonable planning figure for a senior Australian team. See [software developer rates in Australia](/guides/software-developer-rates-australia) for the full breakdown.

At $1,400 a day, $100k buys about 71 engineer-days, or roughly one senior engineer for three and a half months. That puts the ranges above in perspective: a $300k refactor is about 214 engineer-days of work.

## A worked example: replatforming a line-of-business app

**Here is how a mid-range estimate adds up for a realistic, illustrative project.** The system: a 12-year-old .NET Framework web application with about 60 screens, a SQL Server database on an office server, nightly file exports to the accounting system, and 80 internal users. The goal is to move it to Azure Australia East, upgrade the runtime to modern .NET, and replace the file export with an API integration.

| Work package | Engineer-days | Cost at $1,400/day |
|---|---|---|
| Assessment: code review, dependency map, data profiling | 12 | $16,800 |
| Automated tests around current behaviour (the safety net) | 18 | $25,200 |
| Runtime upgrade and code changes | 35 | $49,000 |
| Database move to Azure SQL, with rehearsal migrations | 12 | $16,800 |
| Accounting API integration to replace the file export | 10 | $14,000 |
| Infrastructure as code, monitoring, backups | 8 | $11,200 |
| User acceptance testing support, cutover, hypercare | 10 | $14,000 |
| **Subtotal** | **105** | **$147,000** |
| Contingency at 20% | | $29,400 |
| **Planning budget** | | **$176,400 ex GST** |

The same system rehosted as-is onto a cloud virtual machine might cost $25k to $45k. Rebuilt from scratch with a redesigned interface, it would more likely sit between $250k and $400k. The question is which problem you're paying to solve.

## What makes legacy modernisation more expensive?

**Uncertainty drives cost. Every unknown in the old system becomes engineering time, contingency, or both.** These are the drivers that move a project from the bottom of its range to the top:

1. **Missing knowledge.** No documentation, no tests, and the original developers have left. Someone has to reverse-engineer what the system actually does.
2. **Business logic in odd places.** Rules buried in stored procedures, spreadsheet macros, database triggers or scheduled scripts are easy to miss and expensive to find late.
3. **Integrations.** Each connection to another system (accounting, payroll, a government portal, a partner's file drop) needs to be found, understood, rebuilt and tested.
4. **Data quality.** Twenty years of data has duplicates, orphans and fields used for three different purposes. Cleaning it is often the most underestimated work package.
5. **Uptime requirements.** A system that can't go down for a weekend needs parallel running, synchronisation and staged cutover, which can add 20 to 40% to the migration effort.
6. **Regulation and audit.** Financial, health and government systems need evidence of data integrity and access controls through the migration, and often a formal security review.
7. **Platform age.** Mainframes, AS/400 and obscure 4GL languages need specialists who are scarce and expensive. AWS lists mainframe and mid-range systems among those needing "careful assessment and planning" before any move.

## What are the hidden costs of legacy modernisation?

**The hidden costs are usually in the exclusions, so check them before you compare quotes, because two numbers that look different may cover different work.** Commonly excluded:

- New cloud hosting and licence costs (these replace your current costs, so compare net)
- Third-party SaaS subscriptions if you replace part of the system
- Your own staff's time for testing, training and data sign-off
- Parallel running of the old system during transition
- Decommissioning old servers and archiving records you must keep under retention rules
- New features beyond like-for-like behaviour

## How can you reduce the cost?

**The most reliable saving is to modernise less: retire what nobody uses, and change only the parts that are holding you back.** Practical levers:

- **Retire first.** Usage data often shows modules, reports and whole applications nobody opens. Removing them before migration shrinks every later phase.
- **Go incremental.** The [strangler fig pattern](/guides/strangler-fig-pattern) replaces one module at a time behind a routing layer. You pay as you go and can stop when the remaining legacy is cheap enough to leave.
- **Move, then improve.** For a group of systems, rehost or replatform first and refactor later, as AWS recommends. You get off unsupported infrastructure quickly and spread the larger spend.
- **Buy where the process is standard.** If your legacy app mostly does what a mainstream product does, replacing it can be cheaper than modernising. Our [build vs buy guide](/guides/build-vs-buy-software) covers that decision.
- **Pay for discovery.** A $10k to $40k assessment that maps code, data and integrations (more than a typical new-build discovery, because the old system has to be understood as well as the new one planned) is the best defence against a mid-project blowout. See [what a discovery phase covers](/guides/software-discovery-phase).
- **Use AI tools for the reading, not the deciding.** AI-assisted code analysis and test generation can cut engineering days on documentation and repetitive translation. Keep humans on business rules, data checks and cutover.

## Is legacy modernisation worth the cost? Compare it with keeping the old system

**Modernisation is worth it when the old system costs more to keep, in money, risk and lost change, than the project costs to deliver: the running cost of standing still is the number to compare a modernisation budget against.** The US Government Accountability Office reported in 2025 that federal agencies typically spend about 80% of their IT budgets operating and maintaining existing systems, legacy ones included, leaving little for improvement. Australian organisations face the same dynamic at smaller scale.

Add up the real annual cost of standing still:

| Cost of keeping it | Where to find the number |
|---|---|
| Specialist contractor or vendor support | Last 12 months of invoices |
| Extended support or licences for old platforms | Vendor renewals |
| On-premises servers, backups and power | IT budget |
| Staff workarounds (manual re-keying, exports) | Hours per week × loaded hourly cost |
| Security exposure on unsupported software | Cyber insurance questionnaire and audit findings |
| Changes you can't make, or that take months | Backlog of rejected requests |

If a system costs $120k a year to keep and a $180k replatform cuts that to $40k, the project pays back in a little over two years before counting any new capability.

## What are the ongoing costs after modernisation?

**Plan for hosting plus maintenance of roughly 15 to 20% of the build cost each year.** A modernised system still needs dependency updates, security patches, monitoring and small changes. Cloud hosting for a typical internal business app in an Australian region often runs from a few hundred to a few thousand dollars a month, depending on database size, redundancy and traffic. Our [software maintenance cost guide](/guides/software-maintenance-cost) explains what a support retainer should include.

## How do you build a first budget estimate yourself?

**You can get to a defensible order of magnitude in an afternoon by counting what the system does and what it touches.** It won't replace an assessment, but it tells you whether you're in a $50k conversation or a $500k one.

1. **List the modules and screens** users actually open. Check access logs if you have them; the real number is usually smaller than the menu suggests.
2. **List every integration**, including file drops, scheduled exports and anything a person copies by hand between systems.
3. **Measure the data**: number of tables, total size, and how far back records go. Note which records you must keep for legal retention.
4. **Record the constraints**: allowable downtime, who must sign off, and any regulator, auditor or contract with a say.
5. **Pick a candidate approach per system** from the table at the top of this page, then place it low, middle or high in the range based on how many of the cost drivers apply.
6. **Add 15 to 25% contingency** and a separate line for your own staff's testing and training time.

If the result surprises you, that's useful information in itself. It's the moment to ask whether part of the system can be retired or replaced instead.

## How All Webbed Labs approaches legacy modernisation

We start with a paid assessment that maps the code, the data and every integration, then recommend an approach per system, including retiring or buying where that's the better answer. After that we quote a fixed price for the first phase. Work is incremental by default, with automated tests written around current behaviour before anything changes, and the full source code in your repository from day one. Senior engineers do the work, and our delivery pipeline runs AI coding agents under type checks, visual tests, security scans and senior review, which helps most on the documentation and test-writing that legacy projects need. Read more about our [legacy modernisation service](/services/legacy-modernisation), or the trade-offs in [rewrite vs refactor](/guides/rewrite-vs-refactor-legacy-software).
