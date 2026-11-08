---
title: "NDIS plan management software: invoice AI, price checks and PACE claiming"
metaTitle: "NDIS Plan Management Software: Invoices, Rules and Claims"
description: "NDIS plan management software: invoice extraction, checks against the 2026-27 pricing schedule and budgets, myplace claiming, participant statements, audits."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "A plan manager is an invoice processing business: it receives provider invoices, checks each one against the participant's plan and the NDIS maximum prices, claims through the myplace provider portal or the NDIA's APIs, and pays providers within days. That makes plan management software a document AI and reconciliation problem, not a rostering one. Established plan management platforms cover the basics; custom work pays off in invoice extraction accuracy, rule checking, duplicate detection and participant statements. Since 24 September 2026, maximum prices come from the NDIS pricing schedules under the Minister's first pricing determination."
takeaways:
  - "The NDIS pricing schedules, effective 24 September 2026, set maximum prices for 2026-27 under the Minister's first pricing determination, and those limits apply to NDIA managed and plan managed participants."
  - "Plan managers must use the myplace provider portal to submit all claims, are generally paid in 2 to 3 business days, and should pay providers within 2 business days of receiving NDIS payment."
  - "Plan managers must give participants a monthly financial statement showing spending, remaining balance and any overspending concerns."
  - "Plan managers can apply to connect directly to the NDIA's APIs through the digital providers questionnaire, or connect through an aggregator that is an existing NDIA digital partner."
  - "Plan management is registration group 0127, which must be registered to serve any participant and is assessed by verification audit."
faqs:
  - q: "Should we buy a plan management platform or build our own?"
    a: "Buy first if you are small or mid sized: several platforms already handle invoice intake, claiming, payments and statements. Build when your volume makes manual invoice checking your largest cost, when your rules and participant experience are your point of difference, or when the platform can't integrate with your accounting and payment systems. A common middle path is a custom invoice intake and checking layer feeding the platform you already use."
  - q: "How accurate is AI at reading provider invoices?"
    a: "Extraction tends to do well on clean, typed invoices from repeat providers and less well on handwritten or unusual layouts, so test it on your own invoices before trusting any vendor figure. The real measure is how many invoices go straight through without a person touching them, at an error rate you accept. Set confidence thresholds per field, send anything below them to a person, and measure both numbers every month."
  - q: "Can our software claim through the NDIA API instead of the portal?"
    a: "Possibly. The NDIA says registered providers, plan managers and aggregators can access its APIs. A plan manager can apply directly by completing the digital providers questionnaire, or connect through an aggregator that is already an NDIA digital partner, which applies to the Digital Partnership Office on the plan manager's behalf. We would build to that route with you; we are not an NDIA digital partner ourselves."
  - q: "Does a participant portal make us an NDIS digital platform?"
    a: "Not usually. The NDIS Commission defines an NDIS digital platform as an online system that acts as an intermediary between participants and people providing supports, and processes payments for those supports using plan funds, with that as its main purpose. A portal showing a participant their own budget and invoices is a different thing. If you plan a marketplace of providers with payments, read the Commission's definition and the mandatory registration rules that apply from 1 July 2026."
  - q: "What happens to invoices when a participant changes plan manager?"
    a: "The NDIA says the previous plan manager should forward outstanding invoices to the new one, and the current plan manager can claim for any period, including supports delivered before they took over. Your software should make handover simple: an export of outstanding invoices and a final statement."
  - q: "What does invoice extraction and rule checking cost?"
    a: "As an indicative planning range, about $40,000 to $120,000 (AUD, ex GST), depending on invoice volume and variety, the rules you check, integration with your platform and accounting, and the review interface. That is a budgeting range, not a quote."
sources:
  - title: "Pricing arrangements"
    url: "https://www.ndis.gov.au/providers/pricing-arrangements"
    publisher: "National Disability Insurance Agency"
  - title: "Guide to working as a plan manager"
    url: "https://www.ndis.gov.au/providers/working-participants/plan-managers/guide-working-plan-manager"
    publisher: "National Disability Insurance Agency"
  - title: "How to support participants as a plan manager"
    url: "https://www.ndis.gov.au/providers/working-participants/plan-managers/how-support-participants-plan-manager"
    publisher: "National Disability Insurance Agency"
  - title: "How to connect to our systems"
    url: "https://www.ndis.gov.au/providers/working-provider/using-provider-portals/how-connect-our-systems"
    publisher: "National Disability Insurance Agency"
  - title: "Registration groups or classes of support"
    url: "https://www.ndiscommission.gov.au/provider-registration/apply-registration/registration-groups-or-classes-support"
    publisher: "NDIS Quality and Safeguards Commission"
  - title: "Support coordination and plan management"
    url: "https://www.ndiscommission.gov.au/rules-and-standards/quality-practice/support-coordination-and-plan-management"
    publisher: "NDIS Quality and Safeguards Commission"
  - title: "Mandatory registration"
    url: "https://www.ndiscommission.gov.au/about-us/ndis-commission-reform-hub/mandatory-registration"
    publisher: "NDIS Quality and Safeguards Commission"
  - title: "Small business and the Privacy Act"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business"
    publisher: "OAIC"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "NDIS provider software: build, buy or extend?"
    href: "/solutions/ndis-provider-software"
  - title: "AI for not for profits"
    href: "/solutions/ai-for-not-for-profits"
  - title: "AI document processing"
    href: "/services/ai-document-processing"
  - title: "Workflow automation"
    href: "/services/workflow-automation"
service:
  title: "AI document processing"
  href: "/services/ai-document-processing"
industry:
  title: "Healthcare"
  href: "/industries/healthcare"
disclaimer: legal
---

## What does a plan manager's system actually have to do?

**Take in invoices, check them, claim, pay, and explain every dollar to the participant.** The NDIA describes the job plainly: plan managers keep track of a participant's NDIS spending, process invoices, pay providers and keep records of how funds are spent, and they check claims meet NDIS integrity and compliance requirements. Its guidance adds that plan managers must ask participants for authorisation when managing claims and paying providers.

Multiply that by hundreds or thousands of participants, each with their own providers, budgets and preferences, and the business is an invoice factory. Much of the cost sits in the minutes a staff member spends reading, keying and checking each invoice. That is why the software decisions that matter most for a plan manager are about intake and checking, not calendars or rosters. If you also deliver supports, the [NDIS provider software](/solutions/ndis-provider-software) page covers that side.

## Checking invoices against the pricing schedule and the plan

**Every invoice line should be checked against two things: the maximum price for that support item and what is left in the participant's budget.** On pricing, the rules changed this year. The NDIA's pricing page says the Minister for the NDIS has made his first pricing determination, which sets maximum prices for 2026-27 through the NDIS pricing schedules, effective 24 September 2026. Those limits apply only to NDIA managed and plan managed participants. The NDIA can't pay a claim above the limit, providers can't charge more, and participants aren't entitled to a payment above it. The Agency says updated pricing and claiming guidance documents will follow shortly, so check which document governs each claiming rule in the meantime.

A rule engine for a plan manager typically checks:

| Check | Source of truth | On failure |
|---|---|---|
| Support item exists and was valid on the service date | Current and past pricing schedules | Hold for review |
| Unit price at or below the maximum for the participant's location | Pricing schedule, national, remote and very remote prices | Hold, contact provider |
| Funding available in the right budget | Participant's plan via the provider portals or API | Hold, tell participant |
| Service dates inside the plan period | Plan dates | Hold |
| Provider details and ABN valid | Provider record | Hold |
| Participant has authorised the claim | Participant approval record | Ask participant |
| Not a duplicate | Prior invoices | Hold, flag |

Two points make the engine maintainable. Price limits and rules must be data, loaded per schedule with effective dates, so a mid year change is an upload, not a release. And every decision needs a reason a staff member can read and a participant can understand.

## Claiming and reconciling payments

**Plan managers must use the myplace provider portal to submit all claims, and the my NDIS provider portal to see plans and budgets, unless they claim through the NDIA's APIs.** The NDIA says plan managers can only claim once they are connected to the participant and recorded in its system as their plan manager, and must be recorded as a my provider to be paid. Once recorded, they can claim for any period in the plan, provided integrity and compliance requirements are met. Plan managers listed as my providers will generally be paid in 2 to 3 business days, and should pay providers or reimburse participants within 2 business days of receiving NDIS payment.

API access is open to plan managers. The NDIA describes direct integration, where a registered provider, plan manager or aggregator connects to its APIs after completing the digital providers questionnaire, and indirect integration through an aggregator that is already an NDIA digital partner. Reconciliation is the step that most often goes wrong: matching each NDIA payment to the claims it covers and to the provider payments that follow, then clearing the exceptions. A reconciliation module that does this daily, with the accounting entries flowing to Xero, saves the end of month scramble. Our [Xero and MYOB integration](/services/xero-myob-integration) work covers the accounting side.

## Document AI for provider invoices

**Document AI reads the invoice; your rules decide whether to trust it.** Provider invoices arrive as PDFs, photos and emails in every layout imaginable. An extraction model pulls out provider name, ABN, invoice number, participant, service dates, support item numbers, quantities and amounts, and gives a confidence score per field.

A workable pipeline looks like this:

1. Invoices arrive by a dedicated email address, provider upload or participant app.
2. The model extracts fields and matches the participant and provider.
3. The rule engine checks every line.
4. Invoices with high confidence and no rule failures go straight to approval and claiming.
5. Everything else goes to a review queue with the invoice image beside the extracted fields.
6. Corrections are logged and fed back to improve extraction.

Measure two numbers monthly: the share of invoices processed with no human touch, and the error rate in those. Set confidence thresholds per field (a low confidence amount matters more than a low confidence address) and tune them against real error data rather than a vendor's demo. This is core [AI document processing](/services/ai-document-processing) work, and our [workflow automation](/services/workflow-automation) service covers the routing and approvals around it.

## Participant and nominee portals

**Participants should be able to see where their money went without ringing you.** The NDIA requires plan managers to give participants a monthly financial statement covering how much of the plan has been spent, whether that is consistent with expectations for the funding period, components and total funding, the remaining balance, and any concerns about overspending. A portal turns that monthly document into a live view.

Useful features, roughly in order of value: current balance per budget category, invoices paid and pending with the original invoice attached, a simple approve or query button for invoices waiting on authorisation, alerts when spending is running ahead of the plan, and secure messaging with the plan manager. Nominees and family members need their own access with only the rights the participant has granted. The NDIA notes that claims can't exceed the plan's total funding and that unused funding doesn't roll over, so a forecast of how long each budget will last is worth more than another chart.

## Duplicate and fraudulent invoices

**Duplicate detection should be fuzzy, because duplicates rarely arrive identical.** The same service may come in as a PDF from the provider and a photo from the participant, with different invoice numbers or a slightly different total. Matching on participant, provider, service date, support item and amount within a tolerance catches many of them.

Beyond duplicates, rules can flag patterns worth a second look: a provider whose prices sit at the maximum on every line, a sudden jump in hours for one participant, or a new provider whose ABN details don't match its name. Flags go to a person, never to an automatic rejection, and every decision is recorded. The NDIS Commission's inquiry into support coordination and plan management noted complaints and reportable incidents about some plan managers, which is a reminder that good checking protects participants as well as funds.

## Registration and audit evidence

**Plan management is registration group 0127, Management of funding for supports in participant plans, and it must be registered to deliver to any participant.** The NDIS Commission lists the Verification module of the Practice Standards for this group, assessed by a verification audit when applying or renewing. It also says there are no changes to requirements for plan managers following its 2025 decision to pause mandatory registration work for support coordinators.

Software helps an audit by producing evidence on request: service agreements, authorisations, complaints, incidents, staff screening and the trail behind any invoice decision. If you build a participant facing marketplace that processes payments from plan funds, check the Commission's definition of an NDIS digital platform, which must register from 1 July 2026.

Participant invoices reveal disability and health details. The Privacy Act's small business exemption for turnover of $3 million or less has exceptions, so get advice on whether it applies to you, and treat the data as sensitive either way: Australian hosting, access by role and an audit log.

## Indicative costs

**Indicative planning ranges for the Australian market, not quotes.** Conduct's cost guide puts mid sized Australian agencies at roughly $150 to $330 an hour.

| Build | Indicative range (AUD, ex GST) | Main drivers |
|---|---|---|
| Invoice extraction and rule checking | $40k to $120k | Invoice variety, rule set, review interface, platform integration |
| Participant and nominee budget portal | $40k to $100k | Data sources, permissions, messaging, mobile support |
| Payment reconciliation with accounting sync | $25k to $70k | Claiming route, accounting system, exception handling |

## How AWLabs would approach a plan management project

We start with a Development Consult, then a paid Discovery Audit (credited in full against the build) in which we measure your current invoice volumes and error rates, and check what your platform and the NDIA route allow. You then get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates come every Tuesday and Friday, and code is assigned to you as it is paid for. We aren't a registered NDIS provider or an NDIA digital partner, and we haven't yet delivered a plan management project. Your compliance lead owns the NDIS interpretation; we build the system to it. Not for profit plan managers may also find [AI for not for profits](/solutions/ai-for-not-for-profits) useful.
