---
title: "Award interpretation software: building Australian pay rules into rostering and payroll"
metaTitle: "Award Interpretation Software: Build or Buy in Australia"
description: "Why encoding modern awards is hard, the criminal underpayment offence since 2025, Payday Super from July 2026, and when to buy an award engine or build one."
eyebrow: "Australian payroll"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "Award interpretation software turns hours worked into correct pay by applying the modern award or agreement that covers each employee: base rates, penalty rates, overtime, minimum engagements, allowances and break rules. It is hard because the rules interact, change every 1 July after the Annual Wage Review, and differ by award and classification. Since 1 January 2025 intentional underpayment can be a criminal offence, and from 1 July 2026 Payday Super requires super to reach funds within 7 business days of payday, so the pay engine now carries real risk. Most businesses should configure an established award engine; custom builds make sense for unusual agreements or as a rules layer inside a larger workforce system."
takeaways:
  - "Award interpretation is a rules engine problem: many conditions, each small, that interact and change every year."
  - "Intentional underpayment can be a criminal offence from 1 January 2025. Small businesses that comply with the Voluntary Small Business Wage Compliance Code cannot be referred for prosecution by the Fair Work Ombudsman."
  - "Rates change from the first full pay period on or after 1 July. The National Minimum Wage is $26.44 an hour from 1 July 2026."
  - "Under Payday Super, from 1 July 2026, super is 12% of qualifying earnings and must be received by the fund within 7 business days after payday."
  - "Whether you buy or build, the control that matters is a test suite of real rosters with expected pay, rerun after every rate or rule change."
faqs:
  - q: "What is award interpretation?"
    a: "It is the process of working out what an employee must be paid for the hours they worked, by applying the rules in their modern award or enterprise agreement: classification rates, casual loading, penalties for evenings, weekends and public holidays, overtime, minimum engagement periods, allowances and break entitlements. Award interpretation software automates that from rosters and timesheets."
  - q: "Which payroll software handles Australian awards?"
    a: "Several established Australian workforce and payroll platforms include award interpretation, typically with prebuilt award templates you configure. Evaluate them against your own rosters: give each vendor a set of real shifts with the pay you expect, and compare results line by line before you sign."
  - q: "Can award interpretation be fully automated?"
    a: "Most of it can, once the award, classification and any agreement terms are configured correctly. Judgement still sits with people for classification decisions, some allowances that depend on circumstances, and anything the award leaves to agreement between employer and employee. Good software records those decisions so they can be audited."
  - q: "Is underpaying staff a crime in Australia?"
    a: "From 1 January 2025, intentional underpayment of wages or entitlements can be a criminal offence. Honest mistakes are not covered. The Fair Work Ombudsman can refer matters to the Commonwealth Director of Public Prosecutions or the Australian Federal Police, and maximum civil penalties for larger employers also increased."
  - q: "What does Payday Super change for payroll systems?"
    a: "From 1 July 2026, super guarantee contributions must be received by the employee's fund within 7 business days after payday, calculated as 12% of qualifying earnings, and both qualifying earnings and super liability are reported through Single Touch Payroll. Payroll systems need to pay super with every pay run and handle failed or returned contributions quickly."
  - q: "Should we build our own award engine?"
    a: "Usually not, if a mature platform supports your award and your rosters. Build when your enterprise agreement or operating model does not fit the platforms, when award logic must run inside a product you sell, or when you need pay costing at roster time that the platforms cannot provide. Even then, budget for annual maintenance and an independent payroll review."
sources:
  - title: "Criminalising wage underpayments and other issues"
    url: "https://www.fairwork.gov.au/about-us/workplace-laws/legislation-changes/closing-loopholes/criminalising-wage-underpayments-and-other-issues"
    publisher: "Fair Work Ombudsman"
  - title: "Minimum wages"
    url: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages"
    publisher: "Fair Work Ombudsman"
  - title: "Hospitality Industry (General) Award 2020 (MA000009)"
    url: "https://awards.fairwork.gov.au/MA000009.html"
    publisher: "Fair Work Commission"
  - title: "Social, Community, Home Care and Disability Services Industry Award 2010 (MA000100)"
    url: "https://awards.fairwork.gov.au/MA000100.html"
    publisher: "Fair Work Commission"
  - title: "About Payday Super"
    url: "https://www.ato.gov.au/businesses-and-organisations/super-for-employers/about-payday-super"
    publisher: "ATO"
  - title: "Paying super on payday"
    url: "https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-on-payday"
    publisher: "ATO"
  - title: "STP Phase 2 reporting quick reference guide"
    url: "https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/single-touch-payroll/stp-phase-2-reporting-quick-reference-guide"
    publisher: "ATO"
  - title: "DSP Operational Security Framework"
    url: "https://softwaredevelopers.ato.gov.au/operational_framework"
    publisher: "ATO"
related:
  - title: "Labour hire software"
    href: "/solutions/labour-hire-software"
  - title: "NDIS provider software"
    href: "/solutions/ndis-provider-software"
  - title: "Restaurant software"
    href: "/solutions/restaurant-software"
  - title: "Build vs buy software"
    href: "/guides/build-vs-buy-software"
  - title: "How much does a rostering and workforce management system cost?"
    href: "/guides/workforce-management-system-cost"
service:
  title: "Custom app development"
  href: "/services/custom-app-development"
disclaimer: legal
---

## What is award interpretation, and why do spreadsheets fail at it?

**Award interpretation is the step between "hours worked" and "amount payable": applying every rule in the employee's modern award or enterprise agreement to their actual shifts.** A spreadsheet can multiply hours by a rate. It struggles the moment the rate depends on the time of day, the day of the week, what happened earlier in the week, how long the break was, and whether the employee is casual, part time or full time.

Take one casual shift under the Hospitality Industry (General) Award: the employee must be engaged and paid for at least 2 consecutive hours, and a casual can be engaged for a maximum of 12 hours a day or per shift. If the manager sends them home after 90 minutes, they are still paid for 2 hours. If the shift runs into the evening, a different penalty applies to part of it. If it is a public holiday, a different one again. Each rule is simple. Together, across hundreds of staff and thousands of shifts, they are not, and every manual override in a spreadsheet is a place an error can hide.

## Which rules cause the most errors?

**The errors cluster where one rule depends on another, or on time worked earlier in the day, week or roster cycle.**

| Rule type | Why it goes wrong | What the engine must know |
|---|---|---|
| Overtime triggers | Daily, weekly and roster cycle thresholds interact; the trigger differs by employment type | All hours in the period, in order, plus the employee's agreed hours |
| Penalty stacking | Evening, weekend and public holiday penalties overlap; awards say which applies or whether they compound | Exact clock times and the award's precedence rules |
| Minimum engagements | Short shifts must be paid up to a minimum; some awards set different minimums by role | Rostered versus actual hours, and the employee's stream |
| Broken shifts and breaks | Spans, unpaid breaks and allowances have their own conditions | Each work period and break within the day |
| Allowances | Some are per shift, some per hour, some per kilometre, some conditional | The facts that trigger them, captured at the time |
| Classification and progression | Pay level changes with time served or qualifications | Start dates, qualifications, and the date of each change |

A concrete example of the interaction problem from the Social, Community, Home Care and Disability Services Industry Award (SCHADS). For social and community services employees doing disability work, and for home care employees, an employer may roster a broken shift of 2 periods of work with 1 unpaid break, or with agreement 3 periods with 2 unpaid breaks, each with its own allowance. The span of a broken shift is up to 12 hours, and all work beyond a 12 hour span is paid at double time. Shift allowances apply only to the periods that meet the afternoon or night shift definitions; the award's own example is a 9.00 am to 11.00 am period and a 5.30 pm to 8.30 pm period, where the afternoon shift allowance applies only to the second. There must be a minimum 10 hour break between broken shifts on successive days. Minimum payment periods also count as time worked when deciding whether a break exists. An engine has to evaluate all of that, in the right order, for every shift.

## Why is getting this wrong a bigger risk now?

**Because from 1 January 2025, intentional underpayment of wages or entitlements can be a criminal offence, and the same package of laws raised maximum civil penalties for underpayment by larger employers.** Honest mistakes are not covered, but the Fair Work Ombudsman can refer suitable matters to the Commonwealth Director of Public Prosecutions or the Australian Federal Police. The offence applies to intentional underpayments after the provisions started, including those that form part of a course of conduct that began earlier.

For small business employers (fewer than 15 employees, counted including associated entities, with casuals counted only if regular and systematic), there is a Voluntary Small Business Wage Compliance Code. The Ombudsman cannot refer a small business for criminal prosecution if it is satisfied the business complied with the Code.

For software, the practical point is evidence. If your system can show which rule produced each line of pay, which award version and rates were applied, and who approved any override, you can demonstrate that an error was a mistake, find every affected employee, and fix it quickly.

## How far do off the shelf award engines go?

**Established Australian workforce and payroll platforms ship award templates and handle the common awards well; the gaps appear with enterprise agreements, unusual rosters and rules that need data the platform does not capture.** For most businesses, configuring one of these is the right answer, and you should start there before considering a build.

Questions that separate a good fit from a poor one:

1. Does it support your awards and the classifications you actually use, not just the award name?
2. Can it model your enterprise agreement's differences from the award, including any better off overall terms?
3. Does it handle your edge cases: broken shifts, sleepovers, on call, travel time, split locations?
4. Who updates rates after the Annual Wage Review, and how quickly?
5. Can you export the calculation trail for an audit?
6. Does it report to Single Touch Payroll and support Payday Super?

Bring a set of real rosters with the pay you expect, and make each vendor run them before you choose.

## When should you build a custom rules engine?

**Build when the rules must live inside your own product, when your agreements do not fit any platform, or when you need award costing at the point of rostering that platforms cannot supply.** Typical cases are a labour hire or care provider whose rostering system is its core product, or a software company selling a rostering app to an industry.

If you build, design for change from the start:

- **Versioned rules and rates.** Every rule and rate has an effective date. Pay for a shift in June uses June's rates even if it is processed in July. Most award rate changes start from the first full pay period on or after 1 July, after the Fair Work Commission's Annual Wage Review; from 1 July 2026 the National Minimum Wage is $26.44 an hour, or $1,004.90 a week.
- **Rules as data, not code paths.** Represent penalties, thresholds and allowances in configuration that can be reviewed by someone who knows the award, with code only for the evaluation logic.
- **A test suite of real scenarios.** Hundreds of shifts with hand checked expected pay, covering each rule and each interaction. Rerun it on every change.
- **An explanation for every line.** Each pay line records the clause, rate version and inputs that produced it.

## How do rostering, timesheets, payroll and STP connect?

**Rostering predicts cost, timesheets record what happened, the award engine turns that into pay lines, and payroll pays them and reports through Single Touch Payroll.** Errors usually appear at the handoffs: a shift edited after approval, a break not recorded, an allowance claimed outside the system.

STP Phase 2 requires pay to be reported in categories rather than as one gross amount. The ATO's quick reference maps each payment type to a reporting category, for example separate paid leave types and allowance types, so your pay lines need to carry that classification. If your software lodges with the ATO itself, rather than through a payroll platform, it must meet the ATO's DSP Operational Security Framework. Our [workflow automation](/services/workflow-automation) work often covers the approvals and handoffs between these systems.

## What changes from 1 July 2026 with Payday Super?

**Super must now be paid with wages, not quarterly.** From 1 July 2026, the ATO says super guarantee contributions must be received by employees' funds within 7 business days after paying employees, with enough information to allocate them. The super guarantee is 12% of qualifying earnings, a new term that brings together ordinary time earnings and other payments, and employers report both qualifying earnings and super liability through STP. The Small Business Superannuation Clearing House has closed.

For a pay engine, that means calculating qualifying earnings per pay line, triggering a super payment with every pay run, and tracking whether each contribution reached the fund in time, because the super guarantee charge now applies when amounts are not received within 7 business days of payday.

## How should you test and audit pay outcomes?

**Test before every rate change, reconcile after every pay run, and audit a sample independently each year.**

1. Keep a regression suite of real shifts with expected pay, signed off by someone who knows the award.
2. After the Annual Wage Review, load the new rates with their effective date and rerun the suite.
3. After each pay run, compare paid hours with timesheet hours and flag any employee paid below the minimum for their classification.
4. Review overrides weekly: who changed what, and why.
5. Once a year, have a payroll specialist or employment lawyer check a sample against the award.

## What does it cost to build or integrate award interpretation?

**Indicative ranges, AUD ex GST, at typical agency rates of about $1,100 to $1,500 a day. These are ranges, not quotes, and exclude platform subscriptions.**

| Scope | Typical effort | Indicative range |
|---|---|---|
| Integrate an award platform with your rostering or job system, timesheets in and pay out | 10 to 20 days | $11k to $30k |
| Custom rules engine for one award, with versioned rates and a regression suite | 30 to 60 days | $33k to $90k |
| Multi award engine inside a rostering product, with costing and STP output | 60 to 120+ days | $66k to $180k+ |

Plan for ongoing work every year after the Annual Wage Review and whenever an award is varied.

## How AWLabs approaches award interpretation projects

We build and integrate software; we are not payroll specialists or employment lawyers, and the award interpretation itself should be confirmed by one. What we bring is the engineering: versioned rules, regression suites, explainable pay lines and clean integrations between rostering, timesheets and payroll. Senior engineers lead every build. For care and hospitality operators see our [hospitality](/industries/hospitality) page, or start with [custom app development](/services/custom-app-development).
