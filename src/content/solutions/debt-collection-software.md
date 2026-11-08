---
title: "Debt collection software for Australian agencies and creditors"
metaTitle: "Debt Collection Software Australia: Contact Rules Built In"
description: "Debt collection software in Australia: ACCC and ASIC contact limits, hardship and vulnerability, collector licensing, SMS rules and self service payments."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Debt collection software in Australia has to enforce conduct rules before it sends anything. The ACCC and ASIC debt collection guideline, last revised in April 2021, recommends no more than 3 contacts a week or 10 a month, counts every call, email, SMS and social media message as a contact, and sets calling hours. Credit debts add hardship duties, and collectors need state licences in places such as Queensland. Platforms such as Collect! and InDebted, or CreditorWatch Collect for small business receivables, cover the basics. Custom work pays where contact rules, hardship workflow and self service payment plans must fit your own book, typically $25,000 to $100,000 (AUD, ex GST) as a market range, not a quote."
takeaways:
  - "The guideline treats contact widely: a voicemail, an email and a text on the same day are three separate contacts against the weekly limit of 3."
  - "Recommended phone hours are 7:30 am to 9 pm on weekdays and 9 am to 9 pm on weekends, with no contact on national public holidays."
  - "Automated diallers that return a number to the queue soon after each unanswered call can amount to undue harassment, even without a successful contact."
  - "Moneysmart counted more than 280,000 hardship notices in 2024/25. When a customer asks for help with a credit debt, the lender must consider them for hardship assistance."
  - "From 1 July 2026, branded SMS sender IDs must be registered with the ACMA's SMS Sender ID Register."
faqs:
  - q: "How many times can a debt collector contact someone in Australia?"
    a: "The ACCC and ASIC guideline recommends no more than 3 contacts a week or 10 a month, counting actual contact rather than attempts, and only when necessary. Unreasonably frequent attempts can also amount to undue harassment. The guideline is not law in itself, but it reflects how the regulators apply the Australian Consumer Law and the ASIC Act, so treat it as the baseline your system enforces."
  - q: "Does an email or text count as contact?"
    a: "Yes. The guideline interprets contact widely, including letters, emails, text messages, social media, instant chat and app messages, as well as calls and voicemails. A single email thread can sometimes be treated as one contact, but your system should count each channel against the same limit by default."
  - q: "Do I need a licence to collect debts?"
    a: "It depends on the state and whether you collect for others. Queensland, for example, licenses debt collectors and process servers as commercial agents and sets trust account and claim fund rules. Creditors collecting their own debts are generally treated differently from agencies. Check the rules in each state where you operate with a lawyer."
  - q: "Can AI make collection calls or write collection messages?"
    a: "It can draft messages and help agents, but it is high risk to let it act alone. Messages must not mislead, coerce or take advantage of vulnerability, and an AI system that improvises can do all three. Use approved templates, let AI pick and personalise within them, and send any sign of hardship or vulnerability straight to a person."
  - q: "What software do small businesses use to chase invoices?"
    a: "Most start with reminders in Xero or MYOB, then move to an accounts receivable tool such as CreditorWatch Collect, formerly Debtor Daddy, which runs follow ups by email, SMS and calls and lets customers pay from the reminder. Agency platforms and custom builds suit collectors and larger creditors with regulated debts."
  - q: "Have you built debt collection software before?"
    a: "No. AWLabs has not delivered a collections project, so we won't claim sector experience. We bring workflow, messaging, payments and data engineering, and we rely on your compliance team and lawyers for the conduct rules."
sources:
  - title: "Debt collection guideline for collectors and creditors (April 2021)"
    url: "https://www.accc.gov.au/about-us/publications/guideline-on-debt-collection-for-collectors-and-creditors"
    publisher: "ACCC and ASIC"
  - title: "Debt collection rules"
    url: "https://www.accc.gov.au/business/business-operations-and-costs/debt-collection-rules"
    publisher: "ACCC"
  - title: "Debt collection"
    url: "https://asic.gov.au/regulatory-resources/credit/debt-collection"
    publisher: "ASIC"
  - title: "Debt: ACCC action on debt collection"
    url: "https://www.accc.gov.au/business/debt"
    publisher: "ACCC"
  - title: "Financial hardship"
    url: "https://moneysmart.gov.au/managing-debt/financial-hardship"
    publisher: "Moneysmart (ASIC)"
  - title: "Hardship assistance and your credit report"
    url: "https://www.oaic.gov.au/privacy/credit-reporting/hardship-assistance"
    publisher: "OAIC"
  - title: "Debt collecting and process serving industry regulation"
    url: "https://www.qld.gov.au/law/laws-regulated-industries-and-accountability/queensland-laws-and-regulations/regulated-industries-and-licencing/regulated-industries-licencing-and-legislation/debt-collecting-and-process-serving-industry-regulation"
    publisher: "Queensland Government"
  - title: "Avoid sending spam"
    url: "https://www.acma.gov.au/avoid-sending-spam"
    publisher: "ACMA"
  - title: "SMS Sender ID Register"
    url: "https://www.acma.gov.au/sms-sender-id-register"
    publisher: "ACMA"
  - title: "CreditorWatch Collect"
    url: "https://www.debtordaddy.com/"
    publisher: "CreditorWatch"
  - title: "Collect! debt collection software"
    url: "https://www.collect.org/"
    publisher: "Comtech Systems"
  - title: "InDebted collections platform"
    url: "https://www.indebted.co/en-au/"
    publisher: "InDebted"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Loan origination and servicing software for Australian lenders"
    href: "/solutions/lending-software"
  - title: "Privacy Act and AI"
    href: "/guides/privacy-act-and-ai"
  - title: "Workflow automation cost in Australia"
    href: "/guides/workflow-automation-cost"
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
  - title: "How to integrate PayTo into your app or billing system"
    href: "/guides/payto-integration"
  - title: "Sending business SMS in Australia"
    href: "/guides/business-sms-rules-australia"
service:
  title: "Workflow automation"
  href: "/services/workflow-automation"
industry:
  title: "Finance and fintech"
  href: "/industries/finance-fintech"
disclaimer: "legal"
---

## What must a collections platform check before it sends a single message?

**Before any call, email or SMS goes out, a collections system should confirm that the contact is necessary, within the frequency limit, within permitted hours, through an appropriate channel, and not blocked by a hardship request, a dispute or a representative.** Most conduct problems in collections are not one bad message. They are a sequence of individually reasonable messages that add up to harassment.

A pre send check, in order:

1. Is the debt disputed, under a hardship request or subject to a payment arrangement that is being kept?
2. Has the debtor asked you to deal with a representative, such as a financial counsellor or lawyer?
3. How many contacts have been made this week and this month, across every channel?
4. Is it within permitted hours in the debtor's time zone?
5. Is the channel private? A shared email address, a landline or a social media account others can see is a risk.
6. Has the debtor asked not to be contacted by this channel or at work?
7. Is the message an approved template, accurate about the amount and the consequences?

Only if all seven pass should the message send. Everything else waits for a person.

## What do the ACCC and ASIC guideline's contact limits mean in practice?

**The ACCC and ASIC recommend no more than 3 contacts per week, or 10 per month at most, counting contact actually made rather than attempts, and only when necessary.** The guideline was last revised in April 2021 and reflects how both regulators apply the Australian Consumer Law and the ASIC Act. ASIC covers debts arising from financial services such as credit; the ACCC covers other goods and services.

The ACCC's summary of recommended contact times:

| Contact type | Weekdays | Weekends | National public holidays |
|---|---|---|---|
| Telephone | 7:30 am to 9 pm | 9 am to 9 pm | No contact recommended |
| Face to face | 9 am to 9 pm | 9 am to 9 pm | No contact recommended |
| Workplace | Debtor's normal working hours if known, otherwise 9 am to 5 pm on weekdays | | |

Three details change how software must count:

- **Contact is interpreted widely.** It includes letters, emails, texts, social media, instant chat and app messages, plus calls answered or ended, and voicemails. The guideline's own example: a voicemail, an email and a text is three contacts.
- **Attempts matter too.** An automated dialler that puts a number back in the queue shortly after each unanswered call can amount to undue harassment.
- **Records.** The guideline says to keep records of all communications and attempted contacts.

So the contact counter must be shared across every channel and every system that can reach the debtor, including the dialler, the email platform and the SMS gateway. That is the single most important design decision in a collections build.

The regulators do enforce. The ACCC's debt page lists 2026 actions, including infringement notices and a court enforceable undertaking against one collector in August, and court proceedings in June over more than 320,000 allegedly misleading debt notices.

## Who needs a licence to collect?

**Collectors who act for others are licensed at state level, and the rules differ by state.** Queensland, for example, licenses debt collectors and process servers, also known as commercial agents, and sets rules on appointment, place of business, trust accounts, the claim fund and inspections.

For software, licensing shows up as:

- Recording which licensed entity and which licensed individual handled each account.
- Trust account handling for money collected on behalf of creditors, kept separate from operating funds.
- Rules that vary by the debtor's state where the law requires.

Ask your lawyer which licences apply in each state you collect in. A creditor collecting its own debts is often treated differently from an agency.

## How should hardship and vulnerability flow through the system?

**Hardship and vulnerability must interrupt the collection process, not run beside it.** For credit debts, Moneysmart says that when a customer asks for help, the lender must consider them for hardship assistance, and it counted more than 280,000 hardship notices across Australia in 2024/25. The guideline also warns against taking unfair advantage of any vulnerability, disability or similar circumstance.

A sound workflow:

1. Detect hardship in any channel: a phone note, an email, a reply to an SMS, a portal form.
2. Pause automated contact on that account immediately.
3. Route to a trained person, with the full history visible.
4. Track information requested, decisions and timeframes.
5. Record any arrangement and feed it correctly to credit reporting where the creditor reports. The OAIC notes that financial hardship information is strictly regulated under the Privacy Act.
6. Watch for complaints that may go to AFCA, and record them against the account.

Detection is where AI can help, by flagging messages that mention illness, job loss, family violence or financial counselling for a person to review.

## Which SMS and email rules apply to collections?

**The ACCC and ASIC guideline governs how often and how you contact debtors, and the ACMA's rules govern how messages are sent.** Two ACMA rules matter most:

- **SMS Sender ID Register.** From 1 July 2026, texts sent with an organisation's name as the sender ID need that branded sender ID registered. Collections messages sent under a brand name must comply.
- **Spam Act.** The ACMA's consent, identification and unsubscribe rules apply to marketing messages. Keep collection messages free of promotional content, and ask your lawyer whether any message type you send could count as commercial.

Beyond the law, privacy matters in the channel itself. Don't put debt details in the preview text of an SMS or email subject that someone else might see.

## How do self service payment arrangements work?

**A self service portal lets the debtor see the balance, propose an arrangement within your rules, pay and get confirmation without a phone call.** Many people prefer it, especially those embarrassed to talk about debt.

What a good portal offers:

- A secure link with verification, never the full account details in a message.
- The debt explained clearly, with original creditor, amount and any fees.
- Arrangement options within limits you set, with an option to request something different.
- Payment by card, PayTo or direct debit, and a schedule the debtor can see.
- An easy route to say "I'm in hardship" or "I dispute this", which pauses collection.

Our [customer portal guide](/guides/customer-portal-development) covers design and security choices.

## Where does AI fit in collections, and what must stay human?

**AI is useful for triage, drafting within approved templates and summarising account history; it should not decide who to pursue, set arrangements or handle vulnerable people unsupervised.** Collections is a setting where tone matters legally: a message that overstates consequences can mislead, and one that pressures can coerce.

Reasonable uses:

- Classifying inbound replies (promise to pay, dispute, hardship, wrong person) for routing.
- Drafting a personalised message from an approved template, checked against rules before send.
- Summarising a long account history for the agent picking it up.

Keep a log of what the AI suggested and what was sent. Our [Privacy Act and AI guide](/guides/privacy-act-and-ai) covers the data side.

## What do typical builds cost?

**These are indicative AUD market ranges, ex GST, not quotes.** Expeed publishes $15,000 to $40,000 for simple internal tools and $40,000 to $150,000 for mid complexity systems.

| Build | Includes | Indicative range |
|---|---|---|
| Contact rules engine with logged communications | Shared counter across channels, hours by time zone, holds, templates, full log | $40,000 to $100,000 |
| Self service payment arrangement portal | Verification, arrangements within rules, payments, hardship and dispute routes | $25,000 to $60,000 |

The main cost driver is the number of systems that can contact a debtor. One gateway for all outbound messages is cheaper and safer than adding checks to each tool. See our [workflow automation cost guide](/guides/workflow-automation-cost) for how these projects are priced.

## How AWLabs approaches collections builds

We start with a Development Consult to hear how your book is worked today. If a build is worth doing, a paid Discovery Audit maps every channel that reaches debtors and your hardship process, then you receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with updates every Tuesday and Friday, Sydney time.

AWLabs has not yet delivered a collections project, and we hold no credit licence. This page is general information, not legal advice. See our [workflow automation service](/services/workflow-automation) and wider [finance and fintech](/industries/finance-fintech) work.
