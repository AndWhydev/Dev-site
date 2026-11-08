---
title: "Power Apps vs a custom app: which suits a Microsoft 365 business?"
metaTitle: "Power Apps vs Custom Development: A Microsoft 365 Guide"
description: "Power Apps vs a custom web app for Australian Microsoft 365 businesses: licence maths at 20, 200 and 2,000 users, external access, limits and a scoring table."
eyebrow: "Comparison"
category: compare
published: 2026-11-08
updated: 2026-11-08
summary: "Power Apps is usually the better choice for internal apps used by tens or low hundreds of staff who already sign in with Microsoft 365, especially forms, approvals, inspections and trackers. A custom app usually wins when users number in the thousands, when customers or partners need access, when the logic is complex, or when the experience itself matters to the business. The deciding numbers are licence cost per user over three years against the cost of building and hosting your own."
takeaways:
  - "At the time of writing, Power Apps Premium is listed at AU$29.90 per user per month (ex GST, paid yearly), or AU$18.00 with a 2,000 seat minimum."
  - "Power Apps is licensed per user, so its cost grows in a straight line with headcount. A custom app's cost is mostly the build, with hosting that grows slowly."
  - "External users are a separate product: Power Pages authenticated access is sold in packs of 100 users per site per month."
  - "Delegation limits mean non delegable queries only process the first 500 records by default, up to 10,000, which quietly breaks apps with larger data."
  - "Hybrids work well: a custom API behind Power Apps, or a custom front end over Dataverse."
faqs:
  - q: "How much does Power Apps cost in Australia?"
    a: "At the time of writing, Microsoft's Australian pricing page lists Power Apps Premium at AU$29.90 per user per month, paid yearly, excluding GST. Organisations buying at least 2,000 licences can get AU$18.00 per user per month. A free Developer Plan lets makers build and test, but people using apps in production need a paid licence or the pay as you go option."
  - q: "Can Power Apps be used by customers outside our organisation?"
    a: "Not with standard Power Apps licences in the usual way. Microsoft sells Power Pages for external websites: at the time of writing, authenticated access is AU$299.30 per 100 users per site per month and anonymous access is AU$112.20 per 500 users per site per month, both paid yearly. For a large customer base, a custom portal is often cheaper and gives you full control of the experience."
  - q: "Is Power Apps data stored in Australia?"
    a: "It can be. Microsoft's documentation says environments are bound to the region they're created in, including Dataverse databases, apps and connections. Microsoft notes that creating a Dataverse database in Australia requires an Australian Entra tenant, with an exception process available. Connectors can still send data to services elsewhere, so check what each app connects to."
  - q: "Do we need a Power Apps developer or a software developer?"
    a: "For simple apps, trained staff or a Power Platform specialist is the right fit and cheaper. For apps with complex rules, custom connectors, integrations with systems that have no connector, or code apps built in React, you need someone with software engineering skills as well. Many organisations use both."
  - q: "What is the difference between Power Apps and the Power Platform?"
    a: "Power Apps is one product in the Power Platform. The platform also includes Power Automate for workflows, Power Pages for external sites, Copilot Studio for agents and Dataverse for data. Most real projects use two or three of these together, and licensing differs for each."
  - q: "Can Power Apps work offline?"
    a: "Yes, for canvas apps built on Dataverse. Microsoft documents an offline first mode for those apps. Offline support is weaker for apps built on other data sources, so choose the data source with offline use in mind."
sources:
  - title: "Power Apps pricing (Australia)"
    url: "https://www.microsoft.com/en-au/power-platform/products/power-apps/pricing"
    publisher: "Microsoft"
  - title: "Power Pages pricing (Australia)"
    url: "https://www.microsoft.com/en-au/power-platform/products/power-pages/pricing"
    publisher: "Microsoft"
  - title: "Understand delegation in a canvas app"
    url: "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview"
    publisher: "Microsoft Learn"
  - title: "Choose the region when setting up an environment"
    url: "https://learn.microsoft.com/en-us/power-platform/admin/regions-overview"
    publisher: "Microsoft Learn"
  - title: "Data policies"
    url: "https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention"
    publisher: "Microsoft Learn"
  - title: "Mobile offline for canvas apps overview"
    url: "https://learn.microsoft.com/en-us/power-apps/mobile/canvas-mobile-offline-overview"
    publisher: "Microsoft Learn"
  - title: "Power Apps code apps overview"
    url: "https://learn.microsoft.com/en-us/power-apps/developer/code-apps/overview"
    publisher: "Microsoft Learn"
  - title: "Power Apps and Power Automate licensing FAQ"
    url: "https://learn.microsoft.com/en-us/power-platform/admin/powerapps-flow-licensing-faq"
    publisher: "Microsoft Learn"
related:
  - title: "Low-code vs custom development"
    href: "/guides/low-code-vs-custom-development"
  - title: "Microsoft Copilot vs a custom AI assistant"
    href: "/guides/copilot-vs-custom-ai-assistant"
  - title: "Single sign on with Entra ID for business apps"
    href: "/guides/sso-entra-id-business-apps"
  - title: "Replacing Excel or Access with a web app"
    href: "/guides/replace-excel-or-access-with-a-web-app"
service:
  title: "Custom software and app development"
  href: "/services/custom-app-development"
---

## Power Apps or a custom app: the short version

**If your users are staff, already licensed for Microsoft 365, and number in the tens or low hundreds, start with Power Apps. If they are customers, number in the thousands, or need an experience that sets you apart, build a custom app.** Most Australian organisations that run Microsoft 365 end up with both: Power Apps for the long tail of internal tools, and custom software for the handful of systems the business depends on.

This page compares the two for that buyer. For a broader look at low-code platforms, including Bubble, see [low-code vs custom development](/guides/low-code-vs-custom-development).

## What does Power Apps do well inside Microsoft 365?

**Power Apps is at its best when the identity, data and approvals already live in your Microsoft tenant.** Staff sign in with the accounts they already have. Permissions come from Entra ID groups. Data sits in Dataverse, SharePoint lists or SQL, and Power Automate handles approvals and notifications.

That combination makes a site inspection app, an equipment register, a leave request flow or a capex approval form quick to build and easy to support. Microsoft's documentation also describes an offline first mode for canvas apps built on Dataverse, which suits field staff with patchy coverage.

Developers aren't locked out either. Microsoft's code apps let developers build in React or Vue in their own editor and run the result on the Power Platform, although end users still need a Power Apps Premium licence.

## The licence line most projects cross

**The Premium licence is what gives access to Dataverse, premium and custom connectors, and unlimited apps per user, and most serious apps end up needing it.** Microsoft's Australian pricing page lists Premium as including unlimited apps, prebuilt, custom and on premises connectors, and a Dataverse entitlement of 250 MB database and 2 GB file capacity per licence, pooled across the tenant.

The moment an app needs to talk to Salesforce, a SQL database on your own servers, an industry system through a custom connector, or store its data in Dataverse, every person who uses it needs a paid licence. Microsoft's own pricing FAQ is plain about this: building is free on the Developer Plan, but people running apps in production need Premium or the pay as you go alternative.

## Licence maths at 20, 200 and 2,000 users

**Power Apps costs scale with headcount; a custom app's costs mostly don't.** The table uses Microsoft's Australian list prices at the time of writing (November 2026), excluding GST, paid yearly. Your agreement may differ.

| Users | Licence basis | Per year | Over three years |
|---|---|---|---|
| 20 | 20 × AU$29.90 × 12 | AU$7,176 | AU$21,528 |
| 200 | 200 × AU$29.90 × 12 | AU$71,760 | AU$215,280 |
| 2,000 | 2,000 × AU$18.00 × 12 | AU$432,000 | AU$1,296,000 |

Those figures cover licences only. Add the cost of building the app, whether by staff or a partner, plus any extra Dataverse capacity, which Microsoft lists at AU$59.90 per GB per month.

Against that, a custom internal web app has a build cost, hosting in an Australian cloud region that grows slowly with users, and ongoing maintenance. Our [custom software cost guide](/guides/custom-software-development-cost-australia) gives typical Australian ranges for the build, and our [maintenance cost guide](/guides/software-maintenance-cost) covers the running costs.

The pattern is consistent. At 20 users, Power Apps is almost always cheaper. At 200, it depends on whether your staff already hold Premium licences for other apps; if they do, the extra app costs nothing in licences. At 2,000, licences alone usually exceed the cost of building and running a custom app for three years, unless the licences are already paid for.

## What happens when customers or partners need access?

**External access means Power Pages, which is priced per website per month in capacity packs.** At the time of writing, Microsoft's Australian page lists authenticated users at AU$299.30 per 100 users per site per month and anonymous users at AU$112.20 per 500 users per site per month, both paid yearly. Capacity gives access to one site for a calendar month; people who use two sites count twice.

For a supplier portal with 80 regular users, that's reasonable. For a customer portal with 5,000 logged in users, it's 50 packs a month, every month. That's where a [custom customer portal](/guides/customer-portal-development) usually makes more sense, with your own design, your own sign in options and no per user platform fee.

## Where Power Apps breaks down

**The common failure points are delegation limits, complex logic, user experience and integration with systems that have no connector.**

- **Delegation.** Microsoft's documentation explains that when a query can't be delegated to the data source, Power Apps retrieves only the first 500 records by default, adjustable to 10,000, and runs the formula on those. An app that works in testing with 300 rows can give wrong answers in production with 30,000, without an error.
- **Complex logic.** Pricing engines, scheduling with many constraints, or rules that change monthly become long Power Fx formulas spread across screens. They're hard to test and hard to hand over.
- **User experience.** Canvas apps look like Power Apps. For internal tools that's fine. For a product customers judge you on, it often isn't.
- **Integration depth.** Standard connectors are excellent. Large data syncs, unusual APIs and careful error handling are where custom code earns its cost.

## Governance: environments, data policies and sprawl

**Power Apps succeeds or fails on governance, not features.** Microsoft's data policies let administrators group connectors and block combinations, so a maker can't, for example, pull customer data from Dataverse and post it to a personal cloud drive. Use them from day one.

Environments matter for data residency as well as discipline. Microsoft's documentation says an environment is bound to its region, including its Dataverse database, apps, connections and custom connectors. It also notes that tax rules prevent creating a Dataverse database in Australia unless your Entra tenant is Australian, with an exception available. Check where your environments actually are, and what each connector sends offshore. Our [data residency guide](/guides/data-residency-vs-data-sovereignty) covers why processing location matters too.

The biggest risk is quiet sprawl: hundreds of apps built by staff who have since left, holding personal information nobody tracked. An inventory with an owner per app solves most of it.

## Hybrid options: the middle path

**You don't have to choose all or nothing.** Two hybrid patterns work well:

1. **A custom API behind Power Apps.** Engineers build the complex logic, integrations and data handling as a tested API in Azure, exposed to Power Apps through a custom connector. Staff get a familiar app; the hard parts live in code.
2. **A custom front end over Dataverse.** Keep Dataverse as the data store and security model, but build the user interface in React, either as a code app or a separate web app. Useful when the experience matters but the data already lives in Dataverse.

For either pattern, [single sign on with Entra ID](/guides/sso-entra-id-business-apps) keeps the login experience the same as the rest of Microsoft 365.

## How to decide: a scoring table

Score each row for your app. Mostly left column, choose Power Apps; mostly right, go custom; a mix suggests a hybrid.

| Question | Points to Power Apps | Points to custom |
|---|---|---|
| Who uses it? | Staff with Microsoft 365 accounts | Customers, partners or the public |
| How many users? | Under about 200 | Thousands |
| Do users already hold Premium? | Yes | No |
| How complex is the logic? | Forms, lists, approvals | Calculations, scheduling, pricing |
| How much data per query? | Under 500 to 2,000 rows | Tens of thousands of rows and up |
| Does the experience differentiate you? | No | Yes |
| Systems to connect | Covered by standard connectors | No connector, or heavy sync |
| Who maintains it? | Trained staff with IT oversight | An engineering team or partner |

If an AI assistant is also on your list, our comparison of [Microsoft Copilot and a custom AI assistant](/guides/copilot-vs-custom-ai-assistant) applies the same thinking.

## How AWLabs approaches Power Apps decisions

We'll recommend Power Apps when it fits, including when that means you don't need us for the build. When custom software or a hybrid is the better answer, we start with a 15 minute Development Consult, then a paid Discovery Audit, with the fee credited in full against the build. You get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, and we usually deploy to an Australian Azure or AWS region. See our [custom software service](/services/custom-app-development) or [enterprise software](/services/enterprise-software).
