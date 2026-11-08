---
title: "How to automate a business inbox with AI: sort, extract, draft and route safely"
metaTitle: "How to Automate Email with AI for a Business Inbox"
description: "Use AI to triage a shared inbox: Copilot vs a custom agent, scoped Microsoft 365 access, turning emails into jobs and orders, Privacy Act limits and testing."
eyebrow: "How to guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "AI can safely do four things with a shared business inbox: sort emails by type and urgency, extract the details inside them, draft replies for a person to approve, and route the work into the system that handles it, such as your job, order or CRM software. Copilot in Outlook and Gmail's built in AI help individuals write and summarise; a custom triage agent is what turns a shared inbox of orders, claims or enquiries into records in other systems. Give it the narrowest mailbox access possible, keep a person approving anything sent externally, measure its accuracy on real emails before go live, and meet the Privacy Act's rules on personal information."
takeaways:
  - "Sorting, extracting, drafting and routing are safe AI jobs. Auto sending and final decisions need tighter limits."
  - "Copilot and Gmail's AI help individuals. A custom agent is for shared inboxes that must feed other systems."
  - "In Microsoft 365, RBAC for Applications in Exchange Online lets you limit an app to specific mailboxes; it replaces Application Access Policies."
  - "The OAIC recommends not entering personal information into publicly available generative AI tools."
  - "Measure accuracy on a labelled set of real emails before go live, and keep measuring after."
faqs:
  - q: "Can AI answer my business emails automatically?"
    a: "It can draft them well, and for narrow, low risk cases it can send them, such as acknowledging receipt with a reference number. For anything involving a commitment, a price, a complaint or personal information, the safer design is AI drafts and a person approves. Start with drafting and move individual email types to auto send only once their measured error rate is acceptable."
  - q: "Is Copilot in Outlook enough?"
    a: "For an individual who wants help writing, summarising threads and catching up, often yes. It is less suited to a shared inbox where every email must be classified, have fields extracted and become a record in another system with an audit trail. That is a triage workflow, which is a different job from writing assistance."
  - q: "Can Power Automate read emails with AI?"
    a: "Yes. Power Automate can trigger on new emails in a mailbox and pass content to AI actions, which suits simple classification and extraction for businesses on Microsoft 365. Complex routing, many email types, attachments and strict accuracy targets usually push the work toward a custom agent."
  - q: "Is it safe to give an AI tool access to our mailbox?"
    a: "It can be, with the right limits. Grant access only to the shared mailboxes the agent needs, not every mailbox in the organisation. In Exchange Online, RBAC for Applications can scope an app's permissions to a defined set of mailboxes. Log every action, keep the model provider's data terms appropriate, and treat email content as untrusted input that could contain instructions aimed at the AI."
  - q: "Do automated email replies need an unsubscribe link?"
    a: "If a reply is a commercial electronic message, such as one promoting your goods or services, the ACMA's rules require consent, clear identification of the sender and an easy way to unsubscribe. A plain answer to a customer's own question usually isn't marketing, but adding a promotion to it can change that. Keep automated replies factual."
  - q: "How accurate is AI email classification?"
    a: "It depends on how distinct your email types are and how much real data you test with. Don't accept a vendor's general figure. Label a few hundred of your own emails, run the system against them, and measure accuracy per category and per extracted field. Set a confidence threshold below which emails go to a person."
sources:
  - title: "Role Based Access Control for Applications in Exchange Online"
    url: "https://learn.microsoft.com/en-us/exchange/permissions-exo/application-rbac"
    publisher: "Microsoft Learn"
  - title: "Microsoft Graph permissions reference"
    url: "https://learn.microsoft.com/en-us/graph/permissions-reference"
    publisher: "Microsoft Learn"
  - title: "Guidance on privacy and the use of commercially available AI products"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Consultation on guidance for transparency in automated decision making"
    url: "https://www.oaic.gov.au/engage-with-us/consultations/consultation-on-guidance-for-transparency-in-automated-decision-making"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Avoid sending spam"
    url: "https://www.acma.gov.au/avoid-sending-spam"
    publisher: "Australian Communications and Media Authority"
  - title: "Guide to securing personal information"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/handling-personal-information/guide-to-securing-personal-information"
    publisher: "Office of the Australian Information Commissioner"
related:
  - title: "AI agents vs chatbots vs automation"
    href: "/guides/ai-agents-vs-chatbots-vs-automation"
  - title: "The Privacy Act and AI"
    href: "/guides/privacy-act-and-ai"
  - title: "Prompt injection explained"
    href: "/guides/prompt-injection"
  - title: "How to automate accounts payable invoice processing"
    href: "/guides/how-to-automate-invoice-processing"
  - title: "Privacy Act automated decision making rules"
    href: "/guides/privacy-act-automated-decision-making"
service:
  title: "AI agent development"
  href: "/services/ai-agent-development"
disclaimer: legal
---

## What can an AI inbox safely do?

**Four jobs: sort, extract, draft and route.** Each carries a different level of risk, so decide separately how much autonomy each one gets.

| Job | Example | Risk if wrong | Sensible autonomy |
|---|---|---|---|
| Sort | Tag an email as order, claim, complaint, supplier invoice or spam; set urgency | Email sits in the wrong queue | Automatic, with a review of low confidence items |
| Extract | Pull the order number, product codes, quantities, address and requested date | Wrong data in a record | Automatic above a confidence threshold; review below it |
| Draft | Write a reply using the order status and your policies | A wrong promise to a customer | Person approves before sending |
| Route | Create the job, ticket, order or CRM record and assign it | Work lost or duplicated | Automatic, with an audit trail and duplicate checks |

What it should not do without a person: agree to refunds or credits, change prices, accept or reject claims, give advice, or respond to complaints and legal correspondence. Those are decisions, and a model's fluent wording doesn't make it right.

Start by counting. Export a month of the shared inbox and label a sample by type. Usually three or four types make up most of the volume, and those are where to begin.

## Copilot, Gmail's AI, help desk AI or a custom triage agent?

**Built in assistants help individuals write and summarise. Help desk AI suits customer service queues. A custom triage agent suits shared inboxes whose emails must become records in your own systems.**

| Option | Good at | Falls short when |
|---|---|---|
| Copilot in Outlook | Drafting, summarising long threads, catching up after leave | Every email must be classified, extracted and written into another system |
| Gmail's built in AI | Drafting and summarising for Google Workspace users | Same as above |
| Help desk AI (Zendesk, Freshdesk and similar) | Ticket tagging, suggested answers from a knowledge base | Work belongs in an ERP, job system or claims system, not a help desk |
| Power Automate or similar with AI actions | Simple classification and extraction on Microsoft 365 | Many email types, attachments, strict accuracy and complex routing |
| Custom triage agent | Classifying, extracting, drafting and routing into your own systems with an audit trail | Volume is low or a built in tool already does the job |

The distinction is the same one our guide to [AI agents vs chatbots vs automation](/guides/ai-agents-vs-chatbots-vs-automation) draws: if the output is a written reply, an assistant may be enough; if the output is an action in another system, you are building an agent.

## How do you connect to Microsoft 365 or Google Workspace without over broad access?

**Give the agent access only to the mailboxes it needs, with the narrowest permissions that do the job.** An app with organisation wide mail access is a serious risk if its credentials leak.

In Microsoft 365, apps read mail through Microsoft Graph permissions such as Mail.Read. Granted as application permissions in Microsoft Entra ID alone, those can reach every mailbox in the organisation. Microsoft's documentation describes RBAC for Applications in Exchange Online, which lets an admin grant an app permissions paired with a resource scope, so it can reach only a defined set of mailboxes. Microsoft states it replaces Application Access Policies. Because the Exchange grants and any Entra ID grants combine, don't also grant the same permission unscoped in Entra ID, or the scoping achieves nothing.

A sensible access pattern:

1. **One shared mailbox per workflow**, such as orders@ or claims@, rather than personal inboxes.
2. **Read permission scoped to those mailboxes**, and send permission only if the agent sends.
3. **Separate credentials per environment**, stored in a secrets manager, rotated on schedule.
4. **Logging of every read, draft, send and record created**, kept with the email ID.
5. **For Google Workspace**, the equivalent principle: limit the service account's access to the specific mailboxes and the narrowest scopes.

## From email to action: creating jobs, tickets, orders and records

**The value is in what happens after the email is read: a correct record in the right system, with the email attached.** This is where most of the build effort goes.

A typical order flow:

1. A customer emails a purchase order PDF to orders@.
2. The agent classifies it as an order and extracts customer, PO number, lines, quantities and delivery date.
3. It matches the customer and products to your records, and flags any it can't match.
4. Above the confidence threshold, it creates a draft sales order in your ERP or job system with the PDF attached.
5. It drafts an acknowledgement with the order number for a person to approve.
6. Anything unmatched or uncertain goes to a review queue with the fields highlighted.

Supplier invoices arriving in the same inbox can be routed to an AP pipeline; our guide to [automating accounts payable](/guides/how-to-automate-invoice-processing) covers that branch. Every email the agent touches should be marked in the mailbox, so staff can see what was handled.

## Drafting replies a person approves, and when auto send is acceptable

**Default to drafts that a person approves. Allow auto send only for narrow email types with a measured, acceptable error rate.**

Good drafts are grounded. The agent should write from facts it looked up, such as the order status, the delivery date or your returns policy, and cite them in the approval screen so the reviewer can check quickly. A draft that invents a delivery date is worse than no draft. Our guide to [AI hallucinations](/guides/ai-hallucinations) explains why grounding matters.

Auto send is reasonable for acknowledgements with a reference number, routine status updates read straight from your system, and requests for a missing document. Keep it off for complaints, refunds, legal or regulatory correspondence, anything involving health or financial hardship, and new customers.

If an automated reply promotes your goods or services, the Spam Act may apply. The ACMA's guidance sets three requirements for commercial messages: consent, clear identification of the sender, and an easy way to unsubscribe. Keep automated replies factual and leave the marketing out.

Email is also an attack surface. Anyone can send your inbox text written to manipulate an AI, such as instructions to forward data or approve a refund. Treat every email as untrusted input, never let email content change the agent's permissions, and read our guide to [prompt injection](/guides/prompt-injection) before building.

## What does the Privacy Act expect when AI reads the inbox?

**Business inboxes are full of personal information, and the Privacy Act applies to how an AI system uses it just as it applies to staff.** Three points matter most.

- **Choose the AI service carefully.** The OAIC's October 2024 guidance on commercially available AI products recommends, as best practice, that organisations don't enter personal information, especially sensitive information, into publicly available generative AI tools. Use an enterprise model service with data terms that suit your obligations, and check where data is processed and stored.
- **Use it for the purpose it was collected for.** Using a customer's email to process their order is expected; using inbox content to train a model or build marketing profiles is a different purpose that needs separate thought.
- **Keep it secure, then delete it.** Under APP 11 you must protect personal information and take reasonable steps to destroy or de-identify it once it is no longer needed. Don't let the agent build a second copy of the inbox that nobody deletes.

From 10 December 2026, the Privacy and Other Legislation Amendment Act 2024 requires organisations that use personal information in automated decisions with the potential to affect someone's rights or interests to explain this in their privacy policy. A triage agent that only sorts and drafts is unlikely to be making those decisions, but one that accepts or declines claims could be. See our guides to [automated decision making](/guides/privacy-act-automated-decision-making) and the [Privacy Act and AI](/guides/privacy-act-and-ai). This is general information, not legal advice.

## How do you measure accuracy before and after go live?

**Build a labelled test set from your own emails, measure per category and per field, and keep measuring in production.** A single headline accuracy figure hides the errors that matter.

1. **Label 300 to 500 real emails** across the types you will handle, with the correct category and the correct extracted fields.
2. **Run the system against them** and record accuracy per category, per field, and how often it is confidently wrong.
3. **Set thresholds.** Choose the confidence below which an email goes to a person, aiming for a low confidently wrong rate.
4. **Shadow mode.** For a week or two, run the agent alongside staff without acting, and compare.
5. **In production, sample weekly.** Review a random sample of handled emails and every one a customer replied to with a correction.

Our guide to [LLM evaluation](/guides/llm-evaluation) goes deeper on test design.

## What does it cost, and what does a two week pilot look like?

**Indicative ranges run from about $8,000 for a pilot on one email type to $120,000 for a multi inbox agent integrated with several systems.** These are our estimates of typical Australian market pricing (AUD, ex GST), not quotes. Model usage and hosting are extra.

| Build | Indicative range (AUD, ex GST) |
|---|---|
| Two week pilot: one inbox, one or two email types, shadow mode and an accuracy report | $8,000 to $20,000 |
| Triage agent for one inbox feeding one system, with review queue and drafting | $25,000 to $60,000 |
| Multi inbox agent with several systems, auto send rules and monitoring | $60,000 to $120,000 |

**A two week pilot:** in week one, label emails, connect to the shared mailbox with scoped access, and build classification and extraction for the top email type. In week two, run in shadow mode, measure against the labelled set and staff decisions, and report accuracy, time saved per email and the cases it got wrong. Decide on the full build with real numbers.

## How AWLabs approaches inbox automation

We start with a month of your shared inbox, not a demo. In a Development Consult we will tell you if Copilot, your help desk's AI or a Power Automate flow will do the job. Where a custom agent fits, a paid Discovery Audit labels a sample of your emails, maps the systems the work should land in and sets the accuracy targets; its fee is credited in full against the build. You then receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with scoped mailbox access and human approval designed in from the start. See our [AI agent development service](/services/ai-agent-development).
