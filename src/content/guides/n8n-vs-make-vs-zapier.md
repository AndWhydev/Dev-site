---
title: "n8n vs Make vs Zapier: which automation platform fits (and when to go custom)?"
metaTitle: "n8n vs Make vs Zapier (and When to Go Custom)"
description: "n8n, Make and Zapier compared for Australian businesses: pricing models, self-hosting, data residency and limits, plus when custom code beats all three."
eyebrow: "Comparison"
category: compare
published: 2026-09-28
updated: 2026-09-28
summary: "Zapier is the easiest to start with and has the largest app catalogue, but it bills per task and is hosted only in the US. Make is cheaper for multi-step scenarios, bills per credit, and lets you choose a US or EU data centre. n8n is the only one of the three you can self-host, including in an Australian cloud region, and it bills per workflow execution rather than per step. Go custom when volumes, logic or data rules outgrow all three."
takeaways:
  - "Each platform counts usage differently: Zapier per successful action (task), Make per module action (credit), n8n per full workflow run (execution). The same workflow can cost very different amounts."
  - "At the time of writing (September 2026), Zapier is hosted on AWS in the United States and Make offers US or EU data centres. Neither offers an Australian region."
  - "n8n is the only one you can run yourself, on your own server or in AWS Sydney, which is the simplest route to keeping automation data onshore."
  - "Self-hosting n8n means you own patching, backups, uptime and security. The free Community edition also lacks SSO, Git version control and shared credentials."
  - "Custom code wins when workflows are core to your product, run at high volume, need real testing and version control, or handle data you can't send offshore."
faqs:
  - q: "Is n8n free?"
    a: "The self-hosted Community edition is free to use for your own business, under n8n's Sustainable Use License rather than a standard open source licence. You still pay for the server, and you carry the operational work. n8n Cloud and the Business and Enterprise editions are paid, and some features such as SSO, environments and Git version control need a paid licence."
  - q: "Can I keep Zapier or Make data in Australia?"
    a: "Not at the time of writing. Zapier states it is hosted on AWS in the United States, and Make lets each organisation choose a US or EU data centre, fixed when the organisation is created. If data must stay onshore, self-hosted n8n in an Australian region or a custom build are the practical options."
  - q: "Does sending personal information through Zapier breach the Privacy Act?"
    a: "Not automatically. The Privacy Act 1988 doesn't ban overseas disclosure, but APP 8 requires reasonable steps to make sure the overseas recipient handles the information consistently with the APPs, and you generally stay accountable. Record which fields flow through the platform, check the vendor's data processing terms, and mention overseas disclosure in your privacy policy."
  - q: "Which is best for AI workflows?"
    a: "All three now include AI steps and agent features. n8n is popular for AI agents because you can self-host it next to your data and call models in your own cloud account. For anything customer-facing or high-volume, a coded service gives you better evaluation, logging and cost control."
  - q: "When should I move off a no-code platform?"
    a: "Common triggers are a monthly bill that keeps climbing with volume, workflows nobody can safely change, failures that go unnoticed, and a compliance review asking where data goes. Moving the one or two critical workflows to code while leaving the long tail on the platform is often the best split."
sources:
  - title: "n8n plans and pricing"
    url: "https://n8n.io/pricing/"
    publisher: "n8n"
  - title: "Community edition features"
    url: "https://docs.n8n.io/deploy/host-n8n/community-edition-features.md"
    publisher: "n8n Docs"
  - title: "Host n8n"
    url: "https://docs.n8n.io/deploy/host-n8n.md"
    publisher: "n8n Docs"
  - title: "Make pricing"
    url: "https://www.make.com/en/pricing"
    publisher: "Make"
  - title: "Organizations (data center location)"
    url: "https://help.make.com/organizations"
    publisher: "Make Help Center"
  - title: "Zapier pricing"
    url: "https://zapier.com/pricing"
    publisher: "Zapier"
  - title: "Security and compliance"
    url: "https://zapier.com/security-compliance"
    publisher: "Zapier"
  - title: "Australian Privacy Principles, APP 8: Cross-border disclosure of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information"
    publisher: "Office of the Australian Information Commissioner"
related:
  - title: "How much does business process automation cost?"
    href: "/guides/workflow-automation-cost"
  - title: "AI agents vs chatbots vs workflow automation"
    href: "/guides/ai-agents-vs-chatbots-vs-automation"
  - title: "Data residency vs data sovereignty in Australia"
    href: "/guides/data-residency-vs-data-sovereignty"
  - title: "Low-code vs custom development"
    href: "/guides/low-code-vs-custom-development"
service:
  title: "Workflow automation"
  href: "/services/workflow-automation"
---

## Which should you choose: n8n, Make or Zapier?

**Choose Zapier for fast, simple automations across popular SaaS apps; Make for visual multi-step scenarios at lower cost per step; and n8n when you need self-hosting, onshore data or developer-level control.** All three are good products. The wrong choice usually shows up six months in, as a bill that scales badly or a compliance question nobody can answer.

The table below reflects each vendor's own pages as at 28 September 2026. Prices change often, so we describe the pricing model and link the live pricing pages in the sources rather than quoting dollar figures.

| | Zapier | Make | n8n |
|---|---|---|---|
| What you pay for | Tasks: each successful action step. Triggers, filters, paths and the Formatter don't count | Credits: each module action in a scenario counts as one | Executions: one full workflow run, however many steps it has |
| Plans | Free, Professional, Team, Enterprise | Free, Make plan, Enterprise | Cloud Starter, Pro, Enterprise; self-hosted Community (free), Business, Enterprise |
| Free tier | 100 tasks a month, two-step Zaps only | 1,000 credits a month | Self-hosted Community edition (you pay for hosting) |
| App catalogue | 9,000+ apps | 3,000+ apps | Smaller catalogue, plus generic HTTP and code nodes for anything with an API |
| Where it runs | AWS in the United States | AWS, US or EU data centre chosen per organisation | n8n Cloud in the EU (Frankfurt), or anywhere you self-host |
| Australian region | No | No | Yes, if you self-host in AWS, Azure or Google Cloud Australian regions |
| Self-hosting | No | No (an on-prem agent can reach internal systems) | Yes: Docker, Docker Compose, npm, or a cloud provider |
| Custom code | Code steps in JavaScript or Python | Custom functions on Enterprise | JavaScript and Python code nodes, custom nodes |
| Best at | Breadth, ease, non-technical teams | Complex branching at a moderate price | Control, data location, AI agents, high step counts |

## How do the pricing models change the real cost?

**The counting unit matters more than the headline price.** A workflow with many steps is cheap on n8n (one execution) and expensive on Zapier (one task per action). A workflow with one step that runs thousands of times a day costs about the same unit count everywhere, so plan price per unit decides it.

Take one illustrative workflow: a new order arrives, the customer is looked up in the CRM, the order is written to the accounting system, a Slack message goes to the warehouse, and a confirmation email is sent. That is one trigger and four actions.

| Monthly volume | Zapier tasks (4 per run) | Make credits (about 5 per run, trigger included) | n8n executions (1 per run) |
|---|---|---|---|
| 500 orders | 2,000 | about 2,500 | 500 |
| 5,000 orders | 20,000 | about 25,000 | 5,000 |
| 50,000 orders | 200,000 | about 250,000 | 50,000 |

Plug those unit counts into each vendor's current pricing page to compare. Two things to watch. First, Make counts the polling trigger module too, and scheduled scenarios that check for new data every few minutes use credits even when nothing has changed. Second, error retries and loops multiply units on Zapier and Make, but not on n8n.

At low volume, the difference is small and ease of use should decide. At high volume, the per-step models can cost several times more than a per-execution model, which is when teams start looking at n8n or custom code. Our [workflow automation cost guide](/guides/workflow-automation-cost) covers the full cost, including the build and maintenance time these subscriptions don't include.

## Where does your data go, and does that matter in Australia?

**At the time of writing, none of the three hosted services runs in Australia, so every record that passes through Zapier or Make, and n8n Cloud, is processed overseas.** Zapier states it is hosted on AWS in the United States. Make lets you choose a US or EU data centre when you create an organisation, and you can't change it later. n8n Cloud runs in Frankfurt.

For many workflows that is fine. The Privacy Act 1988 doesn't prohibit overseas processing. But APP 8 makes you responsible for taking reasonable steps so the overseas recipient handles personal information consistently with the Australian Privacy Principles, and you generally remain accountable for its mistakes. Automation platforms also keep execution logs, which may contain full copies of the data that passed through each step.

It matters more when:

- The data is health, financial or children's information, or covered by a contract requiring onshore storage (common in government, health and financial services work).
- You're an APRA-regulated entity and the platform becomes part of a critical operation.
- Your security review asks where logs are retained and who can read them.

Self-hosting n8n in AWS Sydney (`ap-southeast-2`), Azure Australia East or Google `australia-southeast1` is the most direct way to keep automation data onshore without writing everything from scratch. Our [data residency explainer](/guides/data-residency-vs-data-sovereignty) covers the difference between keeping data onshore and keeping it out of foreign legal reach.

## What does self-hosting n8n actually involve?

**Self-hosting gives you control over location and cost, and hands you every operational job the vendor used to do.** n8n's documentation offers Docker Compose for production, a one-line setup for quick starts, npm, and guides for AWS, Azure, Google Cloud and DigitalOcean.

What you take on:

1. **A server and a database.** A small container plus PostgreSQL for production, sized for your concurrency.
2. **Patching.** n8n releases frequently. Someone has to upgrade it and test workflows afterwards.
3. **Backups and recovery.** Workflows, credentials and execution history all need backing up, and restoring needs rehearsing.
4. **Security.** TLS, access control, secrets handling, and keeping the editor off the open internet.
5. **Monitoring.** Alerts when workflows fail or the queue backs up.
6. **Licence choices.** The free Community edition excludes SSO (SAML, LDAP), environments, external secrets, log streaming, projects, workflow and credential sharing, and Git version control. Those need a Business or Enterprise licence. The Community edition is licensed under n8n's Sustainable Use License, which permits internal business use but isn't an OSI open source licence, so read it before building a product on top.

If nobody on your team is comfortable with those six items, n8n Cloud or Make will be cheaper in practice than a self-hosted instance that quietly stops working.

## When is Zapier or Make the better choice?

**For most small teams automating SaaS tools, a hosted platform is the right answer, and paying a developer would be a waste.** Choose Zapier or Make if:

- The workflows connect mainstream SaaS apps (CRM, email, forms, accounting, Slack) and move modest volumes.
- A non-technical person needs to build and change them without a developer.
- Nobody wants to run infrastructure.
- The data isn't sensitive, or overseas processing has been assessed and accepted.

Zapier edges it for breadth and ease; with 9,000+ apps, it probably has a connector for the obscure tool your team uses. Make is the better fit once scenarios branch, loop and transform data, and its visual editor makes complex flows easier to follow.

## When should you go custom instead?

**Write code when the workflow is part of your product, carries real volume or risk, or needs engineering discipline that no-code tools make hard.** The signals:

| Signal | Why it points to custom |
|---|---|
| Monthly platform bill grows faster than revenue | Unit pricing on per-step models scales linearly with volume; compute for a coded service barely moves |
| The workflow is customer-facing or revenue-critical | You need automated tests, staged releases and rollback |
| Several people edit workflows and things break | Code gets version control, review and a history of who changed what |
| Data must stay in Australia under a contract or regulation | Runs wherever you deploy it, with logging you control |
| Complex logic, long-running jobs or heavy data processing | Platforms impose timeouts and step limits; code doesn't |
| AI steps that need evaluation and cost tracking | A coded service can log prompts, score outputs and cap spend |

Custom doesn't have to mean all or nothing. A common pattern is to move the two or three critical, high-volume flows to a small coded service in your own cloud account and leave the long tail of internal automations on Zapier or Make, where non-technical staff can keep maintaining them. If you're weighing AI steps, our comparison of [AI agents, chatbots and workflow automation](/guides/ai-agents-vs-chatbots-vs-automation) explains which problems need which tool.

## A quick decision guide

1. **Just starting, a handful of simple automations, no sensitive data:** Zapier.
2. **Multi-step scenarios with branching, cost-conscious, EU hosting acceptable:** Make.
3. **Data must stay onshore, or you have a technical team and high step counts:** self-hosted n8n in an Australian region.
4. **Want n8n's model without running it:** n8n Cloud, accepting EU hosting.
5. **Workflow is core to the business, high volume, or needs testing and audit trails:** custom code, possibly alongside one of the above.

## How All Webbed Labs approaches automation

We start by listing every workflow, its volume, the data it touches and what happens when it fails. That inventory usually shows that most flows belong on an off-the-shelf platform and only a few justify code. Where they do, we build them as small services in your own cloud account, in an Australian region by default, with tests, monitoring and the source in your repository. We also deploy and harden self-hosted n8n when that's the better fit. See our [workflow automation service](/services/workflow-automation), or compare the broader trade-off in [low-code vs custom development](/guides/low-code-vs-custom-development).
