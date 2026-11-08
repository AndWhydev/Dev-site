---
title: "Retool vs custom internal tools: build it in a builder or write the code?"
metaTitle: "Retool vs Custom Internal Tools: Pricing, Hosting, Fit"
description: "Retool, Appsmith and Budibase vs hand coded admin panels: per seat pricing, self hosting in an Australian region, security gating and when each wins."
eyebrow: "Comparison"
category: compare
published: 2026-11-08
updated: 2026-11-08
summary: "An internal tool builder such as Retool, Appsmith or Budibase is usually the right choice for admin panels, support consoles and data editing screens used by a few dozen staff, built by engineers who would otherwise hand code the same tables and forms. A custom internal tool wins when the logic is complex, when external users need access at scale, when per seat costs pass the cost of building, or when you need self hosting and enterprise security without an enterprise contract."
takeaways:
  - "Internal tool builders are developer tools: they save engineering time on screens, not on understanding your data."
  - "At the time of writing, Retool lists Business at $50 per builder and $15 per internal user per month, billed annually. Audit logs start on Business; custom SSO, Git source control and self hosting are Enterprise features."
  - "Appsmith and Budibase both offer open source, self hosted editions, which makes Australian hosting cheaper to achieve."
  - "A tool with write access to your production database is a privileged system. Treat it like one under the Essential Eight."
  - "The tools that outgrow a builder are the ones with complex workflows, heavy business rules or large numbers of external users."
faqs:
  - q: "What is an internal tool builder?"
    a: "It is a platform for building the screens a business uses to run itself: admin panels, approval queues, customer lookups, refund tools and data editors. You connect it to your databases and APIs, drag tables, forms and buttons onto a canvas, and write queries and small pieces of JavaScript to wire them together. Retool, Appsmith and Budibase are common examples."
  - q: "How much does Retool cost?"
    a: "At the time of writing, Retool's pricing page lists a Free plan for up to 5 users, Team at $10 per builder and $5 per internal user per month, and Business at $50 per builder and $15 per internal user per month, all billed annually. Enterprise is quoted. External users are priced separately on Business. The page shows prices in dollars without a currency code; Retool is a US company, so confirm the currency at checkout."
  - q: "Can Retool be self hosted in Australia?"
    a: "Yes, on the Enterprise plan. Retool's documentation describes self hosted deployments on your own infrastructure, either managed by you or deployed and managed by Retool on your AWS account. Running it in the AWS Sydney region keeps the platform and its logs onshore."
  - q: "What are the open source alternatives to Retool?"
    a: "Appsmith describes itself as an open source low code platform, and Budibase offers a free, open source self hosted edition with unlimited users. Both can run on your own servers in an Australian region. Check each licence and which features sit in paid editions before you commit."
  - q: "Is it safe to connect an internal tool builder to our production database?"
    a: "It can be, with care. Use a database account with only the permissions the tool needs, separate read and write resources, require multi factor sign in, keep audit logs, and review who can edit apps as well as who can use them. A builder that can run any query against production is as powerful as a database administrator."
sources:
  - title: "Retool pricing"
    url: "https://retool.com/pricing"
    publisher: "Retool"
  - title: "Self-hosted deployments"
    url: "https://docs.retool.com/self-hosted"
    publisher: "Retool Docs"
  - title: "Retool-hosted organizations"
    url: "https://docs.retool.com/retool-hosted"
    publisher: "Retool Docs"
  - title: "Appsmith pricing"
    url: "https://www.appsmith.com/pricing"
    publisher: "Appsmith"
  - title: "Budibase pricing"
    url: "https://budibase.com/pricing/"
    publisher: "Budibase"
  - title: "Essential Eight explained"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-explained"
    publisher: "Australian Signals Directorate"
related:
  - title: "Low-code vs custom development"
    href: "/guides/low-code-vs-custom-development"
  - title: "Essential Eight for software development"
    href: "/guides/essential-eight-software-development"
  - title: "Backend development"
    href: "/services/backend-development"
  - title: "Build vs buy software"
    href: "/guides/build-vs-buy-software"
  - title: "How to build internal tools and admin panels for your business"
    href: "/guides/internal-tools-development"
  - title: "Power Apps vs a custom app"
    href: "/guides/power-apps-vs-custom-app"
service:
  title: "Custom software and app development"
  href: "/services/custom-app-development"
---

## Who should use an internal tool builder?

**Engineering and operations teams who need admin screens over data they already have, and who would rather not hand code the hundredth table with a search box and an edit form.** That's the job internal tool builders do well. They are developer tools first: you still write queries, understand the schema and handle errors. What they remove is the front end work.

Typical uses are support consoles that look up a customer and issue a refund, operations queues that approve or reject records, finance screens that reconcile payments, and data editors for content the product team manages. In each case the users are staff, the screens are functional rather than beautiful, and speed of delivery matters more than polish.

If your team has no engineers and the users are office staff on Microsoft 365, compare [low-code platforms such as Power Apps](/guides/low-code-vs-custom-development) instead; that's a different buyer and a different tool.

## Retool, Appsmith and Budibase: pricing and hosting compared

**The three differ most in how they charge and whether you can run them yourself without an enterprise contract.** Figures below are from each vendor's pricing page at the time of writing (November 2026). The pages show dollars without a currency code, so confirm the currency at checkout.

| | Retool | Appsmith | Budibase |
|---|---|---|---|
| Free tier | Up to 5 users, cloud only | Up to 5 users on cloud | Self hosted Community edition, unlimited users |
| Paid entry | Team: $10 per builder, $5 per internal user per month | Business: $15 per user per month, up to 99 users | Cloud from $299 per month, with 2 creators and 20 end users |
| Mid tier | Business: $50 per builder, $15 per internal user | Enterprise: $2,500 per month for 100 users | Extra creators $50, extra end users $5 per month (annual) |
| External users | Business: first 50 free, then $8 to $4 each per month by volume | Public apps on all plans | Counted as end users |
| Self hosting | Enterprise only | Available | Free Community edition |
| Open source edition | No | Yes | Yes |
| Audit logs | Business and Enterprise | Business and Enterprise | Extended audit logs on Enterprise |
| Custom SAML or OIDC SSO | Enterprise | Enterprise | Enterprise identity controls |

Retool charges builders and users differently: a builder is anyone who created or edited an app in that billing cycle, and an internal user is an employee who uses apps. Appsmith charges every member the same and doesn't charge extra for builders.

## Can you self host in an Australian region?

**Yes, with all three, but the cost of getting there differs a lot.** Retool's documentation describes self hosted deployments on your own infrastructure, either managed by your team or deployed by Retool on your AWS account and managed for you. Its pricing page lists self hosted and air gapped deployment under Enterprise.

Appsmith and Budibase both offer self hosted editions. Budibase's Community edition is free for unlimited users on infrastructure you control.

Self hosting in AWS Sydney (ap-southeast-2) or Azure Australia East means:

1. **Running the platform as a service you own:** containers or Kubernetes, a metadata database, backups and upgrades.
2. **Keeping it patched.** A tool builder with credentials to every database is a high value target. Updates can't wait for a quiet month.
3. **Monitoring and logs** in your own account, which is often the point: query logs and audit trails stay onshore.

For many teams the real question is not where the builder runs, but where the data it touches lives. If the tool reads from a database in Sydney and the builder is hosted overseas, query results pass through the builder's servers. Our [data residency guide](/guides/data-residency-vs-data-sovereignty) explains why that processing location matters.

## When does per seat pricing beat a custom build?

**Per seat pricing wins for small teams and loses as user numbers grow.** A worked example using Retool's Business list prices:

| Scenario | Monthly | Yearly |
|---|---|---|
| 3 builders, 40 internal users | 3 × $50 + 40 × $15 = $750 | $9,000 |
| 3 builders, 200 internal users | 3 × $50 + 200 × $15 = $3,150 | $37,800 |
| 3 builders, 200 users, SSO and self hosting | Enterprise, quoted | Quoted |

At 40 users, $9,000 a year buys a lot of engineering time saved. At 200 users, the subscription over three years starts to rival the cost of building and maintaining a focused admin app in your own stack. And if you need custom SSO, Git based change control or self hosting, the comparison is against an Enterprise quote, not the list price.

A custom internal tool built in your existing stack, such as a React front end over your own API, has no per seat fee. Its costs are the build, a small amount of hosting and ongoing maintenance. Our [build vs buy guide](/guides/build-vs-buy-software) walks through total cost of ownership.

## Security: credentials, audit logs and SSO

**An internal tool that can write to production is a privileged system and deserves the controls you would put on database administrator access.** The Australian Signals Directorate's Essential Eight lists restricting administrative privileges and multi factor authentication among its eight mitigation strategies, and both apply directly here.

Checklist for any builder or custom admin tool:

- **Least privilege database accounts.** Separate read only and write resources. Never connect with a superuser.
- **SSO and multi factor sign in** for every user, tied to your identity provider so leavers lose access the day they leave. On Retool, custom SSO is an Enterprise feature.
- **Audit logs** of who ran which query and changed which record. On Retool, these start on Business.
- **Change control** for the apps themselves. Who can edit a refund tool matters as much as who can use it. Retool's Git source control is Enterprise only.
- **Secrets management**, so database passwords and API keys aren't visible to app builders.

Our guide to the [Essential Eight in software development](/guides/essential-eight-software-development) covers the wider controls.

## Which internal tools outgrow a builder?

**Tools outgrow a builder when they stop being screens over data and start being software with rules.** The signs:

1. **Complex workflows** with several steps, approvals, retries and states, written as chains of event handlers that only one person understands.
2. **Business rules that need tests**, such as pricing, eligibility or payroll calculations, where a mistake costs money.
3. **External users at scale**, such as a supplier or customer portal, where per user fees and the builder's look become a problem.
4. **Performance on large datasets**, where pagination, caching and background jobs need proper engineering.
5. **Several teams editing the same app**, which needs branching, review and release management.

When that happens, the usual move is to put the logic into a tested [backend service](/services/backend-development) and either keep the builder as a thin front end over it or replace the front end as well.

## What does a custom internal tool involve?

**A custom internal tool is a small web application: an API with the business rules, a front end with the screens, and the same sign in, logging and deployment as the rest of your software.** For an engineering team that already runs a product, it is usually built in the stack they know, deployed through the same pipeline, and tested like everything else.

That brings advantages a builder can't match. The rules live in code with tests, so a change to refund eligibility is reviewed and proven before it ships. The tool shares your design system, so staff move between it and the product without friction. And there is no vendor roadmap to track: no plan changes, no repricing, no features moving between tiers.

The costs are real too. Someone has to build and maintain the screens that a builder gives you for free, and early versions take longer. The honest middle ground for many teams is to start in a builder, learn which screens people actually use, and rebuild only those in code once they have proved their value.

## Decision table

| Situation | Best fit |
|---|---|
| Engineers need admin screens fast, under 50 users | Retool Team or Business, or Appsmith |
| Data must stay onshore, budget is tight | Self hosted Budibase or Appsmith in an Australian region |
| Enterprise SSO, audit and self hosting on Retool | Retool Enterprise, compared against a custom build |
| Complex rules, hundreds of users, or customers | Custom internal tool or portal |
| No engineers, Microsoft 365 office staff | Power Apps or similar low-code platform |

## How AWLabs approaches internal tools

If a builder fits, we'll say so, and we can help set it up safely against your data. When a custom tool is the better choice, we start with a 15 minute Development Consult, then a paid Discovery Audit, with the fee credited in full against the build. You get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, and code is assigned to you as you pay for it. See [custom app development](/services/custom-app-development).
