---
title: "Operations software for Australian marketing and creative agencies"
metaTitle: "Software for Marketing Agencies: Retainers, Reports, Rules"
description: "Software for Australian marketing agencies: Streamtime and WorkflowMAX gaps, retainer burn, ad platform API access, Spam Act duties and SMS sender ID rules."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Marketing agency software has to show three things the timesheet alone can't: how fast each retainer is being used, what the client's campaigns delivered across every platform, and that every email or SMS sent for a client was lawful. Most Australian agencies should keep a job management tool such as Streamtime, WorkflowMAX, Productive or Accelo and build around it: retainer burn joined to Xero, client reporting that pulls Google Ads, Meta, GA4 and CRM data, and consent and approval records for client campaigns. Indicative market ranges sit around $15,000 to $50,000 (AUD, ex GST) per build, as planning ranges, not quotes."
takeaways:
  - "Retainers fail quietly. A weekly view of hours used against hours sold, by client and by scope item, catches scope creep while it can still be billed."
  - "Google Ads API developer tokens start at Test access; Explorer allows 2,880 operations a day on production accounts, Basic 15,000 and Standard is unlimited."
  - "A Meta app that reads other businesses' ad accounts needs advanced access to ads_read or ads_management through App Review."
  - "Under the Spam Act, the client must have consent even when the agency sends the message, and every message must identify the business that authorised it and unsubscribe within 5 working days."
  - "From 1 July 2026, an agency can't send SMS under a client's branded sender ID unless it is approved on the ACMA register and the client has confirmed consent."
faqs:
  - q: "What is the best software for a marketing agency in Australia?"
    a: "For job management, timesheets and quoting, the usual shortlist is Streamtime, WorkflowMAX by BlueRock, Productive, Accelo and Function Point. Streamtime is run by Streamtime Australia Pty Ltd and integrates with Xero, QuickBooks and MYOB AccountRight. Trial the two that match your billing model, retainer or project, with a real month of timesheets before choosing."
  - q: "Should an agency build its own reporting dashboard?"
    a: "Only when off the shelf reporting tools can't join the data you need. If clients want ad spend and leads only, Looker Studio or a reporting product is cheaper. A custom build earns its place when reports must combine ad platforms with the client's CRM, sales data or your own retainer and margin figures, or when you want the data in your own warehouse."
  - q: "Who is responsible under the Spam Act when the agency sends the campaign?"
    a: "ACMA says that even if someone else sends marketing messages for you, you must still have consent from each person who receives them, and the message must identify the business that authorised it. In practice both the client and the agency carry risk. Keep consent records with the list, and don't send to a list whose consent source you can't show."
  - q: "Does the Privacy Act apply to a small agency?"
    a: "Businesses with annual turnover of $3 million or less are generally exempt, but OAIC says the Act covers small businesses that trade in personal information, for example by disclosing it for a benefit, and Commonwealth contracted service providers. Clients that are covered may also pass privacy duties to you in their contracts. Get advice on your own position."
  - q: "Do we have to disclose AI generated content in ads?"
    a: "There is no general Australian law requiring an AI label on ads at the time of writing. Existing rules still apply: the AANA Code of Ethics requires advertising to be clearly distinguishable as such, and misleading claims are misleading whether a person or a model wrote them. Record who approved each asset and what it was based on."
  - q: "Is AWLabs the same company as All Webbed Up?"
    a: "No. All Webbed Up is our sister company and a separate business that does websites and marketing. AWLabs builds software and AI systems. This page is about agency operations software, which is AWLabs work."
sources:
  - title: "Avoid sending spam"
    url: "https://www.acma.gov.au/avoid-sending-spam"
    publisher: "Australian Communications and Media Authority"
  - title: "Latitude Finance pays $3.96m for more spam breaches"
    url: "https://www.acma.gov.au/articles/2026-04/latitude-finance-pays-396m-more-spam-breaches"
    publisher: "Australian Communications and Media Authority"
  - title: "SMS Sender ID Register"
    url: "https://www.acma.gov.au/sms-sender-id-register"
    publisher: "Australian Communications and Media Authority"
  - title: "Sending texts for another organisation"
    url: "https://www.acma.gov.au/sending-texts-another-organisation"
    publisher: "Australian Communications and Media Authority"
  - title: "Small business"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Chapter 7: APP 7 Direct marketing"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-7-app-7-direct-marketing"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Access levels and permissible use"
    url: "https://developers.google.com/google-ads/api/docs/api-policy/access-levels"
    publisher: "Google for Developers"
  - title: "Marketing API authorization"
    url: "https://developers.facebook.com/docs/marketing-api/get-started/authorization"
    publisher: "Meta for Developers"
  - title: "AANA Code of Ethics"
    url: "https://aana.com.au/code-of-ethics/"
    publisher: "AANA"
  - title: "Streamtime integrations"
    url: "https://www.streamtime.net/features/integrations"
    publisher: "Streamtime"
  - title: "WorkflowMAX FAQs"
    url: "https://www.workflowmax.com/faqs"
    publisher: "WorkflowMAX by BlueRock"
  - title: "Accelo PSA software"
    url: "https://www.accelo.com/"
    publisher: "Accelo"
  - title: "Function Point agency management software"
    url: "https://functionpoint.com/"
    publisher: "Function Point"
  - title: "Streamtime about"
    url: "https://www.streamtime.net/about"
    publisher: "Streamtime"
related:
  - title: "Privacy Act for small business software"
    href: "/guides/privacy-act-small-business-software"
  - title: "How much does API integration cost in Australia?"
    href: "/guides/api-integration-cost-australia"
  - title: "Custom CRM development cost"
    href: "/guides/custom-crm-development-cost-australia"
  - title: "Architecture practice software"
    href: "/solutions/architecture-practice-software"
service:
  title: "Data analytics"
  href: "/services/data-analytics"
industry:
  title: "AI & Automation"
  href: "/industries/ai-automation"
disclaimer: legal
---

## Where does an agency's margin actually leak?

**Agency margin leaks between what was sold and what was delivered: retainer hours used on work outside scope, revisions nobody priced and senior time booked to the wrong job.** The timesheet records the hours. It rarely tells an account director, on a Tuesday, that a client's monthly retainer is 70% used with ten days to go, or that half of that time went on a deliverable the client never ordered.

An agency's operating model has three moving parts that software must hold together:

- **Jobs and quotes.** Project work is quoted, approved, scheduled and invoiced, often with deposits.
- **Retainers.** A fixed monthly fee buys a bucket of hours or a set of deliverables, and the bucket has rules: rollover or not, what counts as in scope, when overs are billed.
- **Proof of results.** Clients keep paying when they can see what their spend achieved, which means reporting across ad platforms, analytics and their own sales data.

## Streamtime, WorkflowMAX, Productive or Accelo?

**Choose the job tool on how you bill, retainer or project, and on its accounting link; then build only the views it can't give you.** None of these products is a bad choice, and replacing them with custom software is rarely sensible.

| Tool | Strong at | Where agencies tend to add custom work |
|---|---|---|
| Streamtime | Studio planning, timesheets, quoting, Xero, QuickBooks and MYOB AccountRight integration, public API | Retainer rules by scope item, multi platform client reporting |
| WorkflowMAX by BlueRock | Quoting, jobs, timesheets and purchase orders with two way Xero or QuickBooks sync | Retainer burn views, approvals |
| Productive | Budgeting, resourcing and profitability for agencies and consultancies | Australian ad platform and CRM reporting |
| Accelo or Function Point | Professional services automation (Accelo) and creative agency management (Function Point) | Local integrations, client reporting |

WorkflowMAX's FAQ notes the product was once part of Xero, and was acquired and rebuilt by BlueRock in 2024. If you moved across, check that retainer history and job codes came with you before trusting old reports.

## Making retainer burn visible

**Retainer burn is hours or value used divided by hours or value sold, tracked weekly by client and by scope item, with the agreed rules applied.** Most job tools can show hours against a budget. What they don't hold well is the retainer contract: which deliverables are in, whether unused hours roll over, and what rate applies to overs.

An illustrative example. A client pays for 60 hours a month across social content, paid media management and reporting. By day 18, the dashboard shows:

| Scope item | Sold (hours) | Used (hours) | Note |
|---|---|---|---|
| Social content | 30 | 26 | On track |
| Paid media | 20 | 12 | On track |
| Reporting | 10 | 4 | On track |
| Out of scope (website copy) | 0 | 11 | Unapproved |

Total use is 53 of 60 hours, which looks fine at a glance. The out of scope line is the real story: 11 hours of work the client didn't buy. The tool's job is to raise that on day 18, when the account director can still call the client and agree a variation, not on day 31.

The build is modest. It reads timesheets and job codes from the job tool's API, holds retainer rules in a small table, and shows burn by client and scope item, with alerts when out of scope time appears or a bucket passes a set level. Joining it to Xero adds billed and paid figures, which turns burn into margin.

## Client reporting across Google Ads, Meta, GA4 and the CRM

**A useful client report joins ad spend to the client's own leads and sales, which means pulling data from several platforms under each platform's access rules.** Looker Studio handles a lot of this for simple cases. A custom pipeline earns its place when you need CRM or sales data in the same view, consistent definitions across clients, or the data stored in your own warehouse.

Plan for platform access early, because it decides what you can build and how fast:

- **Google Ads API.** A developer token starts at Test access, which only works against test accounts. Explorer access, usually approved automatically, allows up to 2,880 operations a day against production accounts. Basic access allows 15,000 a day and Standard is unlimited, and each carries a permissible use such as reporting.
- **Meta Marketing API.** Business apps get Standard access automatically, but an app that manages or reads other businesses' ad accounts needs advanced access to the ads_read or ads_management permissions through App Review, and business verification where sensitive data is involved. Meta says apps must keep that status with at least 500 successful Marketing API calls in 15 days and an error rate under 15%.
- **GA4 and CRMs.** Each client's analytics property and CRM needs its own authorised connection, and the client should be able to revoke it.

Our [data analytics](/services/data-analytics) service covers the warehouse and dashboard side, and the [API integration cost guide](/guides/api-integration-cost-australia) explains what drives integration budgets.

## Sending email and SMS for clients: what the law asks

**When an agency sends marketing for a client, the Spam Act's consent, identification and unsubscribe rules still apply in full, and ACMA is enforcing them hard.** ACMA's guidance says that even if someone else sends your marketing messages, you must have consent from each recipient, and the message must identify the business that authorised it. Every commercial message needs an unsubscribe that is honoured within 5 working days and keeps working for at least 30 days after sending. Whoever relies on consent has to prove it, so record who gave it, when and how.

The penalties are real. In April 2026, Latitude Finance paid $3.96 million after ACMA found more than 2.3 million marketing messages without accurate contact information, 344,416 of which also lacked a working unsubscribe. Recipients were told to reply STOP, but many messages couldn't receive replies. ACMA said businesses had paid over $10.6 million in spam penalties in the previous 18 months.

SMS has a new layer. From 1 July 2026, texts sent with a branded sender ID must use a registered sender ID. ACMA names advertising and marketing agencies as an example of an entity associate, and an agency can't use a client's sender ID unless it is approved to participate in the register, the sender ID is registered and the client has confirmed its consent.

Privacy rules sit alongside. OAIC says businesses with annual turnover of $3 million or less are generally exempt, but not if they trade in personal information. Your clients may be covered regardless, and APP 7 lets individuals ask where an organisation got their details for direct marketing. The [Privacy Act for small business software](/guides/privacy-act-small-business-software) guide covers this in more depth.

A campaign compliance layer in your sending stack would:

1. Store consent source, date and method with every contact imported for a client.
2. Block sends to lists without a recorded consent source.
3. Check each template for sender identification, contact details and a working unsubscribe link.
4. Check that SMS sends use a sender ID registered for that client with your agency approved.
5. Sync unsubscribes across every platform within the 5 working day window, and log them.

## AI in the studio: approvals and disclosure

**AI speeds up drafting and resizing, and it makes the approval trail more important, not less.** At the time of writing there is no general Australian law requiring AI labels on ads. The AANA Code of Ethics still requires advertising to be clearly distinguishable as advertising, which matters for AI generated influencer style content, and a misleading claim is misleading whoever wrote it.

An approval workflow for AI assisted work records the brief, the model and prompt used, the claims made and their evidence, who reviewed the asset and who approved it on the client side. When a claim is challenged, that record answers the question in minutes.

## Typical builds and indicative costs

**Most agency builds are small, well defined tools over data you already have.**

| Build | Indicative range (AUD, ex GST) | Main drivers |
|---|---|---|
| Client reporting over ad platforms and CRM | $15k to $45k | Platforms, client count, warehouse or not |
| Retainer burn and resourcing over Xero and timesheets | $20k to $50k | Retainer rules, job tool API, margin reporting |
| AI content approval workflow with audit trail | $20k to $50k | Asset types, client approvals, integrations |
| Campaign consent and unsubscribe layer | $15k to $40k | Sending platforms, list volume, SMS sender IDs |

These are planning ranges, not quotes, and exclude licences, hosting, API fees and model usage. If a CRM rebuild is on the table, see the [custom CRM cost guide](/guides/custom-crm-development-cost-australia).

## How AWLabs works with agencies

Our founder has run All Webbed Up, our sister company that does websites and marketing, since 2021, so retainers, reporting and client lists are familiar problems. All Webbed Up is a separate business; AWLabs builds the software. We haven't yet delivered an operations build for an outside agency. Every project starts with a Development Consult, then a paid Discovery Audit credited in full against the build, then a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with updates every Tuesday and Friday in Sydney business hours, and the code is assigned to you as it is paid for.
