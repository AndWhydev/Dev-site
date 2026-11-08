---
title: "Customer portal development: what it involves and what it costs"
metaTitle: "Customer Portal Development in Australia: Features and Cost"
description: "How to build a customer or client portal in Australia: core features, off the shelf vs custom, typical cost ranges, security and Privacy Act duties."
eyebrow: "Cost guide"
category: cost
published: 2026-11-08
updated: 2026-11-08
summary: "A customer portal is a secure, logged in area where your customers see their own information and do business with you: view documents, track jobs or orders, pay invoices, raise requests and message your team. In Australia, configuring an off the shelf portal typically costs $3k to $20k (AUD, ex GST) plus subscriptions. A custom portal typically costs $22k to $60k for a simple version, $45k to $120k with payments, roles and integrations, and $90k to $270k or more for complex B2B or multi tenant portals. These are market ranges from typical effort, not quotes."
takeaways:
  - "Start with the three or four jobs customers most often call or email you about. A portal that removes those calls pays for itself; one that mirrors your whole back office rarely does."
  - "Off the shelf portals are cheaper and faster when your process fits them. Custom earns its place when the portal is part of how you compete, or must sit on top of your own systems."
  - "Integrations are usually the largest single cost driver, because a portal is only useful if the data in it is current."
  - "A portal concentrates personal information behind one login, so security, access control and logging are core features, not extras."
  - "Budget for running costs: hosting, email and SMS, payment fees, support and roughly 15 to 20% of build a year for maintenance."
faqs:
  - q: "How much does it cost to build a customer portal?"
    a: "Typical Australian ranges, ex GST, are $22k to $60k for a simple custom portal with login, documents, status tracking and messages; $45k to $120k with payments, multiple roles, notifications and two or three integrations; and $90k to $270k or more for complex B2B or multi tenant portals. Configuring an off the shelf portal product is usually $3k to $20k plus its subscription."
  - q: "How long does it take to build a client portal?"
    a: "A configured off the shelf portal can be live in a few weeks. A simple custom portal typically takes two to three months from discovery to launch, and a portal with several integrations and payments three to six months. Getting access to the systems you integrate with is often the longest wait."
  - q: "Should we build a portal or buy one?"
    a: "Buy when your process is standard and a product covers it, such as document exchange and e-signing for a professional practice. Build when the portal needs to show data from your own systems in a way products don't support, when it is part of what you sell, or when per user licensing gets expensive at your customer numbers. Many businesses start with a product and build later."
  - q: "What features should a customer portal have?"
    a: "At minimum: secure login with multi factor authentication, a dashboard of the customer's current items, documents, status tracking, and a way to contact you. Most add payments, notifications, self service updates to details, and an admin area for staff. Add features only when they replace a real manual task."
  - q: "Can a portal connect to Xero, MYOB or our CRM?"
    a: "Usually yes, through the platform's API. The cost depends on whether data flows one way into the portal or both ways, and on the API's limits and fees. Our API integration cost guide covers the ranges and Xero's 2026 developer pricing."
  - q: "Does the Privacy Act apply to our customer portal?"
    a: "If your business is covered by the Privacy Act 1988, APP 11 requires reasonable steps to protect the personal information the portal holds, including technical and organisational measures, and to destroy or de-identify it when no longer needed. Most businesses with turnover of $3 million or less are exempt, but some, such as health service providers, are covered regardless of size."
sources:
  - title: "Power Pages pricing (Australia)"
    url: "https://www.microsoft.com/en-au/power-platform/products/power-pages/pricing"
    publisher: "Microsoft"
  - title: "SuiteDash pricing"
    url: "https://suitedash.com/pricing/"
    publisher: "SuiteDash"
  - title: "Stripe pricing (Australia)"
    url: "https://stripe.com/au/pricing"
    publisher: "Stripe"
  - title: "APP Guidelines, Chapter 11: APP 11 Security of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Small business and the Privacy Act"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Contractor day rates in Australia: 2026 guide (July 2026)"
    url: "https://www.resourced.com.au/articles/contractor-day-rates-australia-guide-2026"
    publisher: "Re:Sourced"
related:
  - title: "Build vs buy software"
    href: "/guides/build-vs-buy-software"
  - title: "How much does API integration cost in Australia?"
    href: "/guides/api-integration-cost-australia"
  - title: "Notifiable Data Breaches and your software"
    href: "/guides/notifiable-data-breaches-software"
  - title: "Custom software development cost in Australia"
    href: "/guides/custom-software-development-cost-australia"
service:
  title: "Web and mobile app development"
  href: "/services/web-mobile-apps"
disclaimer: financial
---

## What is a customer portal?

**A customer portal (or client portal) is a secure, logged in area of your website or app where each customer sees their own information and completes tasks with you without calling or emailing.** Typical tasks are downloading documents, checking the status of a job or order, paying an invoice, approving a quote, uploading files and sending a message to the right person.

The business case is nearly always the same: fewer "where is my..." calls and emails, faster payment, fewer documents lost in inboxes, and a better impression on customers who expect to self serve. It's worth stating that case in numbers before you scope anything, because it decides how much portal you should build.

## What does a portal need?

**Every portal needs secure access, a clear view of the customer's own data, and a way to act on it; everything else should earn its place.** This table separates the core from the common additions and the features that usually add significant cost.

| Area | Core | Common additions | Adds significant cost |
|---|---|---|---|
| Access | Email login, multi factor authentication, password reset | Magic links, social login | Single sign on with customers' own identity providers; delegated access for agents or advisers |
| Roles | Customer and staff admin | Several users per customer account with different permissions | Complex hierarchies, such as head office, branches and sites |
| Data | Dashboard of current items; status tracking | Search, filters, history | Real time updates from several back office systems |
| Documents | Download statements, reports, contracts | Uploads from customers; e-signing | Version control, approvals workflows, document generation |
| Payments | Links to pay invoices | Card payments in the portal, saved cards | Subscriptions, payment plans, direct debit, multi currency |
| Communication | Contact form or message thread | Email and SMS notifications | Live chat, in app messaging with attachments, AI assistant |
| Integrations | One system feeding the portal | Two or three systems, such as accounting and CRM | Two way sync with several systems; legacy systems without an API |
| Admin | Staff manage users and content | Reporting on portal use | Configurable workflows and forms without developer help |
| Channels | Responsive web | Installable web app | Native iOS and Android apps (see [publishing to the App Store and Google Play](/guides/app-store-publishing-australia)) |

The most common scoping mistake is putting everything in the middle and right columns into version one. Launch with the core plus the two or three additions that remove the most manual work, measure use, then extend.

## Should you use an off the shelf portal or build a custom one?

**Use an off the shelf portal when your process fits a product and your customer numbers keep licensing affordable; build custom when the portal must present data from your own systems, is part of your offer, or outgrows per user pricing.** Prices below are as published at the time of writing (November 2026).

| Option | Typical published pricing | Good for | Watch for |
|---|---|---|---|
| All in one client portal products (for example SuiteDash) | From US$19 a month on the entry plan, with US$49 and US$99 plans, unlimited users | Small service businesses wanting CRM, projects, invoices and a portal in one | Fixed data model; limited integration depth; data stored on the vendor's servers |
| Low code portal platforms (for example Microsoft Power Pages) | AU$299.30 a month per website for a pack of 100 authenticated users, paid yearly, ex GST | Organisations already on Microsoft 365 and Dataverse | Licensing scales with users; specialised skills still needed for anything complex |
| Portals built into your CRM, practice or job management system | Often included in a higher plan tier | Businesses whose data already lives in that system | Locked to that vendor's features and branding |
| Custom portal | Build cost, then hosting and maintenance | Portals that combine several systems, are customer facing products, or need unusual workflows | Higher upfront cost; you own maintenance |

There is no shame in buying. If a practice management product already has a portal your customers can use, configuring it is almost always the right first step. Our [build vs buy guide](/guides/build-vs-buy-software) sets out how to decide.

## How much does a custom portal cost?

**A custom customer portal in Australia typically costs $22k to $120k for most small and mid sized businesses, with complex B2B and multi tenant portals costing more.** These are typical market ranges in AUD, ex GST, covering design, build, testing and launch. They are ranges, not quotes.

| Portal type | Typical scope | Typical effort | Cost range |
|---|---|---|---|
| Configured off the shelf portal | Setup, branding, user import, one integration | 3 to 15 days | $3k to $20k plus subscription |
| Simple custom portal | Login with MFA, dashboard, documents, status tracking, messages; data from one system | 20 to 40 days | $22k to $60k |
| Mid range custom portal | Several roles, payments, notifications, uploads, admin area, two or three integrations | 40 to 80 days | $45k to $120k |
| Complex portal | B2B ordering and approvals, account hierarchies, single sign on, many integrations, or a native app | 80 to 180+ days | $90k to $270k+ |

**How the ranges are worked out.** Effort is converted at an assumed blended agency rate of $1,100 to $1,500 a day. For context, Re:Sourced's July 2026 guide puts senior software engineer contractor rates in Sydney at $800 to $1,100 a day ex GST; agencies charge more to cover design, project management, testing and support.

### Running costs to budget for

- **Hosting, database and file storage** in an Australian region: typically tens to a few hundred dollars a month for a small to mid sized portal.
- **Email and SMS notifications:** usage based.
- **Payment fees:** for example, Stripe's Australian pricing lists 1.65% + A$0.30 for domestic cards and 3.5% + A$0.30 for international cards, including GST, at the time of writing.
- **Platform API fees** where a connected system charges for API access.
- **Maintenance:** roughly 15 to 20% of build cost a year for security updates, fixes and small changes.

A custom portal you own is generally treated by the ATO as in-house software rather than an expense; see [software development tax deductions](/guides/software-development-tax-deductions) and ask your accountant.

## A worked example: a portal for an accounting practice

**This is a hypothetical scope to show how the effort adds up, not a real project.** An accounting practice with about 400 client entities wants clients to stop emailing documents and asking for status updates.

| Work package | Effort |
|---|---|
| Discovery, user flows and design of core screens | 6 days |
| Login with MFA, client accounts with several users each, staff admin | 6 days |
| Secure document exchange: uploads from clients, downloads of returns and reports, virus scanning | 7 days |
| Job status tracking from the practice management system (one way, scheduled) | 8 days |
| Message threads per job with email notifications | 5 days |
| Invoice list with card payment | 5 days |
| Audit logging, security testing and fixes | 5 days |
| Testing, launch, staff training and handover | 6 days |
| **Total** | **48 days** |

At $1,100 a day that's $52,800; at $1,500 a day, $72,000, ex GST. Adding e-signing through a third party service, or a two way sync with the practice management system, would move it toward the top of the mid range band. For AI features that suit practices, such as document classification, see [AI for accounting firms](/solutions/ai-for-accounting-firms).

## What security and privacy duties come with a portal?

**A portal puts many customers' personal and financial information behind one login, so treat access control and logging as the core of the build.** If your business is covered by the Privacy Act 1988, APP 11 requires you to take reasonable steps to protect personal information from misuse, interference and loss, and from unauthorised access, modification or disclosure. The OAIC's guidelines say reasonable steps include technical and organisational measures, and APP 11 also requires you to destroy or de-identify personal information once it is no longer needed, subject to legal retention requirements.

A practical security checklist for any portal:

1. **Multi factor authentication** for all staff and offered to all customers, required for high risk actions.
2. **Authorisation checks on every request,** so a customer can never reach another customer's record by changing an ID in the address bar. It is one of the most common serious flaws in portals and web apps.
3. **Least privilege for staff:** roles that limit who can see which customers.
4. **Encryption in transit and at rest,** with keys managed in your cloud account.
5. **Audit logs** of logins, document downloads, changes and admin actions, kept long enough to investigate an incident.
6. **Secure file handling:** type and size limits, malware scanning, and private storage with expiring links.
7. **Retention rules** that delete or de-identify old documents and closed accounts.
8. **Independent security testing** before launch and after major changes.

If something goes wrong, the Notifiable Data Breaches scheme may require you to notify affected customers and the OAIC. Our guide to [Notifiable Data Breaches and your software](/guides/notifiable-data-breaches-software) explains what a portal must be able to answer in an investigation.

## How do you plan a portal so customers actually use it?

**Portals succeed when they are the easiest way for a customer to get something done, and fail when they are an extra login for information customers can get faster by email.** Plan with that test in mind.

1. **Count the requests.** For a month, tally the calls and emails a portal could answer: document requests, status checks, invoice copies, address changes. The biggest categories are your version one scope.
2. **Decide the source of truth for each item.** If job status lives in your job management system, the portal reads it from there. Don't create a second copy staff must update by hand, or it will be out of date within a week.
3. **Design the first login.** Invitations, account activation and multi factor setup are where most customers give up. Keep them short and test them with real customers, including less confident ones. Accessibility matters here too; see our [accessibility guide](/guides/app-accessibility-australia).
4. **Change staff habits.** If staff keep emailing documents, customers keep expecting email. Agree that new documents go to the portal, with an email notification that links to it.
5. **Launch in stages.** Start with a group of friendly customers, fix what confuses them, then roll out.
6. **Measure.** Track activated accounts, monthly active customers, documents exchanged through the portal and the drop in the request categories you counted in step 1.

If adoption stalls, the cause is usually one of three things: the information customers want isn't there, it isn't current, or logging in is harder than asking.

## Examples of portals by industry

**These are hypothetical examples of what a portal typically does in each industry, to help you scope your own.**

- **Accounting and bookkeeping:** document requests and exchange, tax return approvals, e-signing, job status, invoice payment.
- **Real estate and property management:** owner statements, maintenance requests with photos, inspection reports, tenant applications. See [real estate software](/industries/real-estate).
- **Construction and trades:** project progress with photos, variations to approve, progress claims and payments, defect reporting. See [construction software and AI](/solutions/construction-software-and-ai).
- **Healthcare and allied health:** appointment history, forms before visits, documents and invoices. Health service providers are covered by the Privacy Act regardless of turnover, according to the OAIC, and health information needs particular care. See [healthcare](/industries/healthcare).
- **Wholesale and B2B suppliers:** reorders from account specific price lists, order tracking, invoices and statements, credit applications.
- **Professional services:** matter or project updates, secure document sharing, approvals, time and billing summaries.

## How AWLabs approaches portal projects

We start with a Development Consult, then a paid Discovery Audit, credited in full against the build, that identifies the customer tasks worth moving online, the systems the portal must draw on, and whether an off the shelf product would do the job. If one would, we'll tell you. If custom is the better fit, the work is priced as a fixed price Schedule of Work with three options, The Minimum, The Recommended and The Complete, so you can choose how much to launch with. Portals are built with multi factor authentication, per request authorisation checks and audit logging as standard, hosted in an Australian cloud region wherever the services you need are offered onshore. Senior engineers lead every build. See our [web and mobile app development](/services/web-mobile-apps) and [custom app development](/services/custom-app-development) services, and our [API integration cost guide](/guides/api-integration-cost-australia) for the integration side.
