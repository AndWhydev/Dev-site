---
title: "How to build internal tools and admin panels for your business"
metaTitle: "How to Build Internal Tools and Admin Panels (Australia)"
description: "How to build internal tools: when Retool or Power Apps fit, when a custom admin pays off, connecting to live data safely, roles, audit logs and AU costs."
eyebrow: "How to guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "Internal tools are the back office apps staff use to run the business: approval queues, operations consoles, customer lookups, admin panels over a product database. Build them on a low code builder such as Retool or Microsoft Power Apps when the logic is simple and the user count is modest, and in custom code when the tool carries real business rules, many users or sensitive data. Either way, the important design work is the same: connect through an API or read replica rather than straight to production, give each role only the access it needs, and log every change. Published Australian ranges put a simple custom internal tool at $15,000 to $40,000 (AUD, ex GST)."
takeaways:
  - "An internal tool is any app built for staff rather than customers. Most businesses already have several, disguised as spreadsheets and shared inboxes."
  - "Low code licences are priced per user. At the time of writing Power Apps Premium is AU$29.90 per user a month (paid yearly, ex GST), and Retool lists its Business plan at $50 per builder and $15 per internal user a month (confirm the currency at checkout)."
  - "Retool's Free and Team plans don't include audit logs at the time of writing, which matters for any tool that changes customer or financial records."
  - "Never give an internal tool the production database's admin password. Use an API or a restricted role, and a read replica for reporting."
  - "Restricting administrative privileges was one of ASD's Essential Eight strategies, and ASD Essentials keeps it under least privilege and secure administration. Internal tools are where that principle is easiest to break."
faqs:
  - q: "What is an internal tool?"
    a: "It is software built for a business's own staff rather than its customers. Examples are an approvals queue for finance, an operations dashboard that lets staff fix orders, a support console that looks up customers, or an admin panel for a SaaS product."
  - q: "Should we use Retool, Power Apps or build custom?"
    a: "Power Apps fits organisations already on Microsoft 365 that want staff to build simple forms and workflows over Microsoft data. Retool fits technical teams that want admin screens over existing databases and APIs quickly. Custom code fits when the tool holds complex business rules, has many users, needs a polished interface or must meet strict security and audit requirements."
  - q: "How much does it cost to build an internal tool?"
    a: "Expeed's published 2026 bands put simple internal tools at $15,000 to $40,000 and mid complexity systems at $40,000 to $150,000 (AUD, ex GST). Low code tools can cost less to build but add per user licences every month, so compare over three years."
  - q: "Is it safe to connect an internal tool directly to our production database?"
    a: "Only with care. A tool connected with an admin login can read or change anything, and a mistaken bulk update has no safety net. Prefer an API that enforces business rules, or a database role limited to the tables and actions the tool needs, and use a read replica for heavy reporting."
  - q: "Who should maintain internal tools?"
    a: "Someone named. Low code tools built by an enthusiastic staff member often stall when that person leaves. Whoever owns it needs access, documentation, a test environment and time set aside to fix and improve it."
  - q: "Can we add AI to an internal tool?"
    a: "Yes. Common uses are summarising a customer's history, drafting replies, classifying incoming requests and answering questions over internal documents. Keep a person approving anything that changes records or goes to a customer, and check where the model processes your data."
sources:
  - title: "ASD Essentials"
    url: "https://www.cyber.gov.au/essentials"
    publisher: "Australian Signals Directorate"
  - title: "Power Apps pricing"
    url: "https://www.microsoft.com/en-au/power-platform/products/power-apps/pricing"
    publisher: "Microsoft"
  - title: "Retool pricing"
    url: "https://retool.com/pricing"
    publisher: "Retool"
  - title: "Essential Eight explained"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-explained"
    publisher: "Australian Signals Directorate"
  - title: "Chapter 11: APP 11 Security of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information"
    publisher: "OAIC"
  - title: "Custom Software Development Cost in Australia (2026)"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed"
  - title: "Row Security Policies"
    url: "https://www.postgresql.org/docs/current/ddl-rowsecurity.html"
    publisher: "PostgreSQL Documentation"
related:
  - title: "Low code vs custom development"
    href: "/guides/low-code-vs-custom-development"
  - title: "Build vs buy software"
    href: "/guides/build-vs-buy-software"
  - title: "Replace Excel or Access with a web app"
    href: "/guides/replace-excel-or-access-with-a-web-app"
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
  - title: "Essential Eight and ASD Essentials for software development"
    href: "/guides/essential-eight-software-development"
service:
  title: "Custom app development"
  href: "/services/custom-app-development"
disclaimer: none
---

## What counts as an internal tool?

**An internal tool is any app built for your own staff rather than your customers: the screens people use to approve, check, fix, look up and report.** Customers never see them, but they decide how fast the business runs and how many mistakes reach customers.

| Department | Typical internal tools |
|---|---|
| Finance | Purchase approvals, supplier onboarding, refund requests, payment run checks |
| Operations | Order or job console, dispatch board, exception queue for failed orders or bookings |
| Customer support | Customer lookup across systems, account changes, credit notes, case history |
| Sales | Quote builder, pricing approvals, contract status |
| People and HR | Onboarding checklists, equipment requests, leave approvals beyond what payroll handles |
| Product (SaaS) | Admin panel: tenant management, impersonation with consent, feature flags, usage reports |
| Compliance | Incident register, licence and insurance expiry tracking, audit evidence |

If customers or partners need to log in too, that is a portal rather than an internal tool, and our [customer portal guide](/guides/customer-portal-development) covers it.

## When has a spreadsheet or shared inbox become a system?

**When the business would stop if it broke, or when people spend real time working around it.** Most internal tools begin life as a spreadsheet, a shared mailbox, a Teams channel or a form. That is fine until the signs appear:

- [ ] More than one person edits it daily, and versions conflict.
- [ ] Someone's job is copying data between it and another system.
- [ ] It holds personal, financial or health information with no record of who changed what.
- [ ] Approvals happen by email and nobody can find the one that matters.
- [ ] Only one person understands how it works.
- [ ] Errors reach customers or suppliers before anyone notices.

Three or more ticks usually means it is worth building something proper. Our guide to [replacing Excel or Access with a web app](/guides/replace-excel-or-access-with-a-web-app) covers that specific path, including getting rules out of formulas.

## Low code builder, Power Apps or custom code?

**Choose by who builds it, how many people use it, and how much business logic and risk it carries.** All three are legitimate. They fail in different ways.

| | Retool and similar builders | Microsoft Power Apps | Custom code (for example React with a TypeScript API) |
|---|---|---|---|
| Who builds | Developers or technical staff | Business users and Microsoft specialists | Developers |
| Best at | Admin screens over existing databases and APIs | Forms and workflows over Microsoft 365, SharePoint and Dataverse | Complex rules, many users, polished interfaces, strict security |
| Pricing at the time of writing | Listed at $10 per builder and $5 per internal user a month on Team, $50 and $15 on Business, billed annually | Premium AU$29.90 per user a month, paid yearly, ex GST | Build cost plus hosting; no per user licence |
| Audit logs | Business plan and above | Check what your Microsoft licensing and admin settings capture | Built to your requirements |
| Weak point | Per user costs and platform limits as usage grows | Complexity grows fast beyond simple apps | Higher upfront cost; needs a maintainer |

A worked comparison over three years for 40 staff and 3 people building:

- **Retool Business:** 3 builders at $50 plus 40 users at $15 is $750 a month, $9,000 a year, or $27,000 over three years at the listed prices, before build time. Retool is a US company, so confirm whether you are billed in US dollars, which would make this higher in Australian dollars.
- **Power Apps Premium:** 43 licences at AU$29.90 is AU$1,285.70 a month, AU$15,428.40 a year, or about AU$46,285 over three years, before build time and assuming all 43 need Premium.
- **Custom:** a simple internal tool in Expeed's published band of $15,000 to $40,000 (AUD, ex GST) to build, plus hosting and maintenance, with no per user fee.

Licence prices change and these are list prices, so check current pricing and your existing Microsoft agreement. The point is the shape: low code is cheaper to start, and per user fees grow with headcount. Our [low code vs custom development guide](/guides/low-code-vs-custom-development) and [build vs buy guide](/guides/build-vs-buy-software) go deeper on the trade off.

## How do you connect to production data safely?

**Give the tool exactly the access its users need, through a layer that enforces your business rules, and keep heavy reporting off the live database.** Internal tools are dangerous precisely because they are trusted. A bulk update button wired to an admin connection can change every record in seconds.

Four patterns, safest first:

1. **Through your own API.** The tool calls the same API your product uses, so validation, permissions and logging already apply. This is the best default for anything that changes data.
2. **Through a restricted database role.** If the tool must query the database, connect with a role that can see only the tables and columns it needs. PostgreSQL's row level security can limit rows further; note that superusers, roles with BYPASSRLS and usually table owners bypass it, so the tool must not use those.
3. **Through a read replica for reporting.** Dashboards and exports run against a copy that lags slightly behind, so they can't slow or damage production.
4. **Never with the admin password.** No shared superuser credentials in a low code connector, a spreadsheet macro or a developer's laptop.

Under APP 11, an organisation holding personal information must take reasonable steps, including technical and organisational measures, to protect it from unauthorised access, modification and disclosure. Internal tools that expose customer records to every staff member by default are hard to square with that.

## How should roles, audit logs and approvals work?

**Every action in an internal tool should be tied to a named person, allowed by their role and recorded.** That is good security and it is what makes the tool trustworthy when something goes wrong.

- **Roles.** Define a small set (viewer, operator, approver, admin) and map people to them. Restricting administrative privileges is one of the mitigation strategies in ASD's Essential Eight, and ASD Essentials, published on 15 October 2026 to evolve it, asks for access privileges to be reviewed periodically against current roles; give admin only to people who need it, and review it regularly.
- **Single sign on.** Staff log in with their work account (often Microsoft Entra ID or Google Workspace), so leavers lose access when their account is disabled. Check which plan includes SSO; on Retool, for example, it sits in the Enterprise plan at the time of writing.
- **Audit logs.** Record who did what, to which record, when, and the before and after values for sensitive fields. Make the log read only to everyone except a security role.
- **Approvals.** For refunds, credit notes, price overrides and bulk changes, require a second person above a threshold. Build the approval into the tool rather than relying on an email.
- **Safe bulk actions.** Preview what will change, require confirmation, and keep an undo or a reversal record.

Our [Essential Eight and ASD Essentials guide](/guides/essential-eight-software-development) covers how the other controls apply to software you build.

## How can AI assistants help in internal tools?

**AI is most useful inside internal tools for reading and drafting, and least safe when it changes records without a person checking.** Good fits:

- summarising a customer's history across orders, tickets and emails before a call;
- drafting replies, credit note reasons or incident summaries for a person to edit;
- classifying incoming requests and routing them to the right queue;
- answering staff questions over internal policies and procedures, with citations.

Keep a person approving anything that touches money, customer records or external messages, log what the AI suggested and what the person did, and check where the model provider processes your data. Our [AI integration service](/services/ai-integration) covers how we add these features to existing systems.

## Who maintains it after launch?

**Name an owner before you build, and give them time, access and documentation.** Internal tools rot quietly. The API changes, a field is renamed, the person who built the Power App moves on, and staff drift back to spreadsheets.

A maintenance plan covers:

- an owner and a backup person, with admin access to the platform or the code;
- a test environment, so changes aren't made live;
- documentation of data sources, roles and any automated jobs;
- a small monthly budget for fixes and improvements, rather than waiting for a crisis;
- an annual review of who has access and whether the tool still matches how the team works.

## What do internal tools cost?

**Published Australian ranges put a simple custom internal tool at $15,000 to $40,000 and a mid complexity system at $40,000 to $150,000 (AUD, ex GST).** Those are Expeed's 2026 bands, not quotes. A single workflow tool such as an approvals queue sits at the lower end. A console used by several teams, with roles, audit logs, approvals and integrations, moves into the middle band. A platform that replaces several existing tools is a larger project, best delivered in phases.

Low code tools can reduce build cost, but add per user licences every month, so compare total cost over three years as in the worked example above.

## How AWLabs approaches internal tools

We often build internal tools as a React front end over a TypeScript or Python API, with single sign on, roles and audit logs from the start, and we'll say so when Power Apps or Retool is the better fit for your team. Where the tool sits on top of a product database, it uses the product's own API or a restricted role, never an admin connection.

It starts with a Development Consult, a 15 minute call or a Zoom with Andy. The paid Discovery Audit then maps users, roles and data sources, and its fee is credited in full against the build. The Schedule of Work offers three fixed price options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. See [custom app development](/services/custom-app-development).
