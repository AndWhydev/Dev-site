---
title: "Bubble vs custom code: when does a Bubble app need a real codebase?"
metaTitle: "Bubble vs Custom Code: When to Leave Bubble (AU Guide)"
description: "Bubble vs custom code for Australian founders: workload unit costs, where Bubble hosts data, what you own, and the signals that it is time to move to code."
eyebrow: "Comparison"
category: compare
published: 2026-11-08
updated: 2026-11-08
summary: "Stay on Bubble while you are still finding out what customers want, the app is mostly forms, lists and workflows, and workload costs are predictable. Move to custom code when workload bills climb faster than revenue, you need data hosted in Australia without an Enterprise contract, investors or buyers want a codebase they can inspect, or you are spending more time working around Bubble than building. For most founders the right answer is Bubble first, code once the product has proved itself."
takeaways:
  - "Bubble is a strong choice for validating a web product quickly; many founders should stay on it longer than they think."
  - "Bubble bills on workload units, so cost tracks server activity, not users. Heavy workflows and background jobs can raise the bill even with few users."
  - "Region choice, including Sydney, comes with a dedicated instance on Bubble's Enterprise plan. Bubble's documentation does not name a region for its shared environment."
  - "Bubble says its apps run only on Bubble and cannot be exported as code. Its newer AI assisted export recreates an app in code, with no promise of perfect fidelity."
  - "Leaving Bubble is a rebuild, not a migration. Budget for it like a new build, with the advantage of a working specification."
faqs:
  - q: "Is Bubble good enough for a real SaaS business?"
    a: "It can be. Bubble runs paying products, and its Team and Enterprise plans exist for that reason. The question is not whether Bubble can run a business but whether its cost, hosting and lock in suit yours. If your margins absorb the workload bill and your customers don't ask where their data lives, staying is reasonable."
  - q: "Can I export my Bubble app as code?"
    a: "Not directly. Bubble's ownership page says apps can only run on Bubble and there is no way to export an application as code. Bubble's newer export option lets an AI agent read your app through the Bubble MCP (in beta) and recreate it in a framework you choose, which Bubble describes as a strong starting point rather than a finished app. Your data can be exported as CSV or read through the Data API."
  - q: "Where is my Bubble data stored?"
    a: "On the Enterprise plan with a dedicated instance you can choose an AWS region, and Sydney is on Bubble's list. For apps on the shared environment, Bubble's documentation does not name a region, so ask Bubble in writing and record the answer in your privacy assessment."
  - q: "Should I move from Bubble to FlutterFlow instead of custom code?"
    a: "Only if your main need is a native mobile app and you want to keep building visually. FlutterFlow produces Flutter apps and can push project code to a repository from its Pro plan, which reduces lock in. It does not remove the need for a backend you control, and it is a different visual tool to learn."
  - q: "How long does it take to rebuild a Bubble app in code?"
    a: "A focused rebuild of a typical early stage SaaS app is often a matter of a few months rather than weeks, depending on the number of workflows, integrations and user roles. The working Bubble app shortens discovery because the behaviour is already defined."
  - q: "Do I need to hire Bubble developers or software engineers?"
    a: "If you are staying, a capable Bubble developer is the right hire and usually cheaper. If you are leaving, you need software engineers who can read Bubble's workflows and turn them into a tested codebase. Some teams use both during the transition."
sources:
  - title: "Pricing and plans"
    url: "https://manual.bubble.io/account-and-marketplace/account-and-billing/pricing-plans"
    publisher: "Bubble Manual"
  - title: "FAQ: Pricing and Workload"
    url: "https://manual.bubble.io/account-and-marketplace/account-and-billing/pricing-plans/pricing-faq"
    publisher: "Bubble Manual"
  - title: "Dedicated instance"
    url: "https://manual.bubble.io/help-guides/bubble-for-enterprise/hosting-and-infrastructure/dedicated-instance"
    publisher: "Bubble Manual"
  - title: "Hosting and infrastructure"
    url: "https://manual.bubble.io/help-guides/bubble-for-enterprise/hosting-and-infrastructure"
    publisher: "Bubble Manual"
  - title: "Application and data ownership"
    url: "https://manual.bubble.io/account-and-marketplace/application-and-data-ownership"
    publisher: "Bubble Manual"
  - title: "Exporting your Bubble app"
    url: "https://manual.bubble.io/account-and-marketplace/application-and-data-ownership/exporting-your-bubble-app"
    publisher: "Bubble Manual"
  - title: "What is a native mobile app?"
    url: "https://manual.bubble.io/help-guides/getting-started/building-for.../native-ios-and-android/what-is-a-native-mobile-app"
    publisher: "Bubble Manual"
  - title: "FlutterFlow pricing"
    url: "https://www.flutterflow.io/pricing"
    publisher: "FlutterFlow"
  - title: "Chapter 8: APP 8 Cross-border disclosure of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information"
    publisher: "Office of the Australian Information Commissioner"
related:
  - title: "Low-code vs custom development"
    href: "/guides/low-code-vs-custom-development"
  - title: "How much does an MVP cost in Australia?"
    href: "/guides/mvp-development-cost-australia"
  - title: "Is my Lovable app production ready?"
    href: "/guides/make-ai-built-app-production-ready"
  - title: "Who owns the source code?"
    href: "/guides/who-owns-the-source-code-australia"
service:
  title: "Startup MVP development"
  href: "/startup-mvp"
---

## Should you stay on Bubble or move to custom code?

**Most founders on Bubble should stay until a specific, measurable problem forces the move.** A working product that customers pay for is worth more than a clean codebase nobody uses. Bubble earns its place by letting a non technical founder ship a real web app, with a database, user accounts and payments, in weeks.

This guide is for founders who already have a Bubble app and are asking whether it is time to leave. It is a decision guide, not a general essay on no-code; for the wider picture, see our comparison of [low-code and custom development](/guides/low-code-vs-custom-development).

## What is Bubble genuinely good at?

**Bubble is good at data driven web apps with clear workflows: marketplaces, booking tools, client portals, internal dashboards and early SaaS products.** You design pages visually, define data types, and wire up logic as workflows. Hosting, backups, user accounts and security patches are handled for you.

That last point is easy to undervalue. Bubble's own guide to leaving lists hosting, a database, authentication, file storage, domains, monitoring and backups as things you set up and run yourself once you move. Those are real costs in a custom build, and Bubble absorbs them in the plan price.

Bubble now builds native mobile apps too. Its manual describes mobile plans that build iOS and Android apps for the App Store and Google Play, sharing a database and backend workflows with the web app, though mobile screens must be designed separately from web pages.

## How do workload units change what Bubble costs?

**Bubble charges a plan fee plus server usage measured in workload units, so your bill follows how hard the app works, not how many people use it.** Every search, workflow step, API call and page load adds to the monthly count.

At the time of writing (November 2026), Bubble's manual lists these monthly prices for web only plans. The manual shows them in dollars without a currency code; Bubble is a US company, so read them as US dollars and confirm at checkout.

| Plan | Paid annually | Paid monthly | Bandwidth |
|---|---|---|---|
| Starter | $32 | $39 | 100 GB |
| Growth | $119 | $134 | 500 GB |
| Team | $349 | $399 | 1 TB |
| Enterprise | Quoted | Quoted | Quoted |

Each plan includes an allowance of workload units. Above it, you either buy a workload tier or pay overages, which Bubble's pricing FAQ lists at $0.30 per 1,000 units for apps without a tier. If you disable overages and hit the limit, Bubble takes the app offline until the next billing period or until you enable them. Bubble emails you at 75% and 100% of your allowance.

The practical effect: a Bubble app with modest traffic but heavy scheduled jobs, large searches or chatty API integrations can cost more than one with many light users. Bubble provides workload charts in the Logs tab, and an afternoon spent optimising the worst workflows often cuts the bill more cheaply than any rebuild.

## Where is your Bubble data hosted, and does it matter?

**If you need personal information stored in Australia, you need Bubble's Enterprise plan with a dedicated instance, or a different platform.** Bubble's documentation describes two hosting options for Enterprise customers: stay on the shared environment, or move to a dedicated instance on a Bubble managed AWS server with a choice of region. Sydney is on its list of regions.

For the shared environment, Bubble's documentation does not name a hosting region. Ask Bubble directly and keep the written answer.

Under the Privacy Act, APP 8 requires an organisation that discloses personal information to an overseas recipient to take reasonable steps to ensure the recipient doesn't breach the APPs, and it remains accountable for the recipient's handling. The OAIC's guidance notes that giving data to an overseas cloud provider purely for storage, under a contract that keeps you in effective control, may count as a use rather than a disclosure. That's a legal judgment about your contract, not something the platform decides for you. If you sell to health, finance, government or enterprise buyers, expect them to ask where data lives in their security questionnaire. Our guide to [data residency and data sovereignty](/guides/data-residency-vs-data-sovereignty) explains what those buyers usually mean.

Not every business is covered by the Privacy Act; see [the small business rules](/guides/privacy-act-small-business-software) before assuming it applies to you.

## What do you actually own on Bubble?

**You own your data and your app's design; Bubble owns the code that runs it.** Bubble's ownership page says its apps can only run on the Bubble platform and there is no way to export an application as code. Data comes out as CSV files or through the Bubble API.

Bubble has since added a second route. Its newer export page describes connecting an AI agent through the Bubble MCP, currently in beta, which reads your data types, pages, workflows and privacy rules and recreates the app in a framework you choose. Bubble is candid that this won't always reproduce the app exactly and gives you a starting point, not a finished app. Either way, what you can take with you is a description of your app plus your data, not running code.

Bubble also states that if it ever shut down, it would release its source code under an open source licence so apps could run on self hosted Bubble servers. That's a meaningful commitment, but it's a fallback for the platform failing, not a way to leave by choice. For how ownership works in a custom build, see [who owns the source code](/guides/who-owns-the-source-code-australia).

## Where do Bubble apps hit limits first?

**The first limits most founders hit are page speed on data heavy screens, search engine visibility for content pages, and the effort of testing changes safely.** None of these is a hard wall. Each is a cost that grows with the app.

- **Performance.** Pages that load many records or run nested searches feel slow and burn workload units. Careful data design helps a lot.
- **SEO.** Bubble pages can rank, but marketing content usually does better on a separate site built for it, with the app on a subdomain.
- **Testing and teamwork.** Bubble has development and live versions, but automated tests, code review and branching are weaker than in a normal engineering workflow. With two or three builders, changes start to collide.
- **Mobile.** Bubble's native mobile apps are real store apps, but each web page must be rebuilt as a mobile view. If mobile is your main product, compare this with a dedicated mobile stack; our [web app vs mobile app guide](/guides/web-app-vs-mobile-app) covers that choice.

## Five signals it is time to leave Bubble

1. **Workload costs grow faster than revenue** for three months running, after you have already optimised the heaviest workflows.
2. **A customer or regulator needs onshore hosting**, and an Enterprise contract costs more than a rebuild over the next three years.
3. **Investors or acquirers are doing technical due diligence** and want a codebase, tests and infrastructure they can inspect.
4. **Your builders spend more time on workarounds than features**, such as plugins stacked to fake functionality or logic split across dozens of workflows nobody fully understands.
5. **The product needs something Bubble can't do well**, such as heavy real time processing, complex calculations on large datasets, or deep integration with systems that have no API.

One signal is a warning. Two or more, sustained, usually means start planning.

## Custom build, FlutterFlow or staying put?

| | Stay on Bubble | Move to FlutterFlow | Custom code |
|---|---|---|---|
| Best when | Still validating, costs predictable | Mobile app is the core product | Product is proven and growing |
| What you own | Data and design | Project code you can push to a repository on Pro and higher plans | Everything, once assigned to you |
| Australian hosting | Enterprise dedicated instance | Depends on the backend you choose | Any Australian cloud region |
| Who builds | Bubble developers | FlutterFlow developers | Software engineers |
| Effort to switch | None | Rebuild of screens and logic | Rebuild of screens and logic |
| Running cost basis | Plan plus workload units | Plan plus your backend | Hosting plus maintenance |

FlutterFlow's pricing page, at the time of writing, includes pushing project code to a repository from its Pro plan, listed at $80 a month or $60 a month billed yearly. That reduces lock in compared with Bubble, but you still need a backend, such as Supabase or Firebase, and a team comfortable with Flutter.

## What does moving to custom code cost and how long does it take?

**Treat leaving Bubble as a new build with an unusually good specification.** The Bubble app tells engineers exactly how the product behaves, which removes much of the uncertainty that makes early builds expensive. As a guide, typical Australian market ranges for a coded MVP sit in the tens of thousands of dollars and rise with workflows, roles and integrations; our [MVP cost guide](/guides/mvp-development-cost-australia) sets out the ranges and what drives them.

The cost most founders forget is running two systems during the switch. Plan for both to operate for a period, with data synchronised or a clean cutover date, and for user passwords that usually can't be carried across, which means a reset flow for every user.

## How AWLabs approaches a Bubble decision

We'll tell you if staying on Bubble is the better call, and often it is. When it isn't, we start with a 15 minute Development Consult, then a paid Discovery Audit that maps your Bubble data types, workflows and integrations into a written specification; the audit fee is credited in full against the build. You then get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, the code is visible while it's written, and it is assigned to you as you pay for it. See our [startup MVP service](/startup-mvp) or [custom app development](/services/custom-app-development).
