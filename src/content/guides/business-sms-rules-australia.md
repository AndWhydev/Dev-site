---
title: "Sending business SMS in Australia: the rules for apps and platforms"
metaTitle: "Business SMS Rules in Australia: Sender IDs and Spam Act"
description: "What software that sends SMS must do in Australia: the Sender ID Register from 1 July 2026, Spam Act consent and unsubscribe rules, and provider pricing."
eyebrow: "Australian regulation"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "Since 1 July 2026, any SMS that shows a business name instead of a phone number must use a sender ID registered on the ACMA's SMS Sender ID Register, or it is relabelled 'Unverified' and grouped with likely scams. Marketing messages also need consent, accurate sender identification and a working unsubscribe that is honoured within 5 working days under the Spam Act 2003. Purely transactional messages such as OTPs and appointment reminders are not marketing, but they still need a registered sender ID if they use one."
takeaways:
  - "The SMS Sender ID Register applies to branded sender IDs from 1 July 2026. Messages sent from a phone number do not need registering."
  - "You register through each telco or message provider you send with, not directly with the ACMA alone, and you verify with myID."
  - "Platforms that send SMS under their customers' names are 'entity associates' and need their own approval plus each owner's consent."
  - "Marketing SMS needs consent you can prove, sender identification, and an unsubscribe honoured within 5 working days."
  - "Alphanumeric sender IDs usually cannot receive replies, so 'Reply STOP' needs a number or another working opt out route."
  - "The ACMA is consulting on an annual application fee for sender IDs from 2027 to 2028; submissions close 4 December 2026."
faqs:
  - q: "Do I need to register my SMS sender ID in Australia?"
    a: "Yes, if your messages show your business or brand name at the top instead of a phone number. From 1 July 2026, unregistered sender IDs are replaced with 'Unverified'. If you send only from a phone number, the ACMA says you do not need to do anything."
  - q: "How do I register a sender ID?"
    a: "Contact each telco or message provider you use and give them the sender IDs you want, with evidence that each one matches your organisation. The provider lodges the application, the ACMA checks your organisation and authority, and you verify your identity with myID. Your contact email on the Australian Business Register must be current."
  - q: "Are appointment reminders and OTPs covered by the Spam Act?"
    a: "A message with no commercial purpose, such as a one time passcode or a plain appointment reminder, is not a commercial electronic message, so the consent and unsubscribe rules do not apply. Add a promotion to it and it becomes commercial. The sender ID rules apply to both kinds."
  - q: "How quickly must I process an SMS unsubscribe?"
    a: "Within 5 working days. The unsubscribe must be free beyond the normal cost of a text, work for at least 30 days after the message, and not require the person to log in or create an account."
  - q: "Is Twilio cheaper than ClickSend for Australian SMS?"
    a: "At the time of writing, Twilio lists $0.0515 per outbound segment to Australia in US dollars, and ClickSend lists $0.0720 AUD ex tax on its smallest top up, falling to $0.0570 from $10,000. MessageMedia sells monthly plans with included messages. Compare on your real volume and message length, because every provider charges per segment."
  - q: "What happens if we send spam?"
    a: "The ACMA can issue infringement notices, accept enforceable undertakings and take court action. Recent examples include a $653,400 penalty for SpinTel in November 2026 and more than $2.7 million for TAB in July 2026, which included marketing sent to people who had unsubscribed."
sources:
  - title: "SMS Sender ID Register"
    url: "https://www.acma.gov.au/sms-sender-id-register"
    publisher: "ACMA"
  - title: "Sending text messages with your business or organisation name"
    url: "https://www.acma.gov.au/sending-text-messages-your-business-or-organisation-name"
    publisher: "ACMA"
  - title: "Register a sender ID if you have an ABN"
    url: "https://www.acma.gov.au/register-sender-id-if-you-have-abn"
    publisher: "ACMA"
  - title: "Sending texts for another organisation (entity associates)"
    url: "https://www.acma.gov.au/sending-texts-another-organisation"
    publisher: "ACMA"
  - title: "ACMA consults on cost recovery options for SMS Sender ID Register (4 November 2026)"
    url: "https://www.acma.gov.au/articles/2026-11/acma-consults-cost-recovery-options-sms-sender-id-register"
    publisher: "ACMA"
  - title: "Avoid sending spam"
    url: "https://www.acma.gov.au/avoid-sending-spam"
    publisher: "ACMA"
  - title: "SpinTel pays $653K penalty for spamming former customers"
    url: "https://www.acma.gov.au/articles/2026-11/spintel-pays-653k-penalty-spamming-former-customers"
    publisher: "ACMA"
  - title: "TAB pays $2.7m for telemarketing and spam breaches"
    url: "https://www.acma.gov.au/articles/2026-07/tab-pays-27m-telemarketing-and-spam-breaches"
    publisher: "ACMA"
  - title: "SMS Sender ID Register (Application, Access and Administration) Determination 2025 (F2025L01304)"
    url: "https://www.legislation.gov.au/F2025L01304/latest/text"
    publisher: "Federal Register of Legislation"
  - title: "Spam Act 2003"
    url: "https://www.legislation.gov.au/C2004A01214/latest/text"
    publisher: "Federal Register of Legislation"
  - title: "SMS pricing in Australia"
    url: "https://www.twilio.com/en-us/sms/pricing/au"
    publisher: "Twilio"
  - title: "SMS pricing (Australia)"
    url: "https://www.clicksend.com/au/pricing/au/"
    publisher: "ClickSend"
  - title: "Pricing (Australia)"
    url: "https://messagemedia.com/au/pricing/"
    publisher: "MessageMedia"
related:
  - title: "How to verify identity in an Australian app"
    href: "/guides/identity-verification-australia"
  - title: "Privacy Act obligations for small business software"
    href: "/guides/privacy-act-small-business-software"
  - title: "How much does business process automation cost?"
    href: "/guides/workflow-automation-cost"
  - title: "n8n vs Make vs Zapier"
    href: "/guides/n8n-vs-make-vs-zapier"
  - title: "How much does a booking system cost in Australia?"
    href: "/guides/booking-system-cost"
service:
  title: "API development and integration"
  href: "/services/api-development"
disclaimer: legal
---

## Which rules apply to the message you are sending?

**Two separate regimes now apply to business SMS: the SMS Sender ID Register, which is about who the message claims to be from, and the Spam Act 2003, which is about whether you may send marketing at all.** One message can fall under both, either or neither. Start by classifying each template your software sends.

| Message | Shows a brand name as sender? | Commercial purpose? | What applies |
|---|---|---|---|
| One time passcode from "AcmeBank" | Yes | No | Sender ID must be registered |
| Appointment reminder from a mobile number | No | No | Neither regime's core obligations |
| Reminder from "SmileDent" that adds "book a clean and get 10% off" | Yes | Yes | Registered sender ID, plus consent, identification and unsubscribe |
| Weekly promotion from a dedicated number | No | Yes | Spam Act consent, identification and unsubscribe |
| A SaaS platform sending under its customer's brand | Yes | Either | Entity associate approval, the owner's registration and consent |

The commercial test is about purpose, not channel. A receipt or delivery update with no offer in it is not a commercial electronic message. Add an upsell line and it becomes one, and the consent rules come with it.

## What is the SMS Sender ID Register?

**It is a register run by the ACMA under the SMS Sender ID Register (Application, Access and Administration) Determination 2025, and from 1 July 2026 telcos must check branded sender IDs against it.** A sender ID is the name at the top of a message, like "AusPost" or "myGov". If yours is not registered, it is replaced with the word "Unverified", and all Unverified messages are grouped into one thread on the recipient's phone, alongside scam messages.

What builders need to know:

- **You register through your provider.** You contact each telco or message provider you send with and give them your sender IDs. They lodge the application, and the ACMA runs checks on your organisation, your identity and your authority. The person applying verifies with myID.
- **Register with every provider.** Registration also authorises that provider to send with your ID. If you send through two gateways for redundancy, register through both.
- **Keep the ABR current.** For organisations with an ABN, the authorised contact or service of notice email on the Australian Business Register must be up to date.
- **Format limits.** A sender ID must be 2 to 11 characters from printable ASCII, cannot be only numbers, and cannot start or end with a space or underscore. Some terms are restricted.
- **Each ID needs a valid use case.** It must match your identity and be clearly linked to your organisation.
- **Fees are coming.** On 4 November 2026 the ACMA released a consultation proposing an annual application fee per sender ID from the 2027 to 2028 financial year. Submissions close on 4 December 2026. Build your sender ID list with that cost in mind.

Telcos and message providers that do not participate in the register cannot carry sender ID messages at all; the ACMA says their messages will be blocked. Check that your SMS provider is on the ACMA's list of approved telcos and message providers before you rely on it.

### If your platform sends SMS for your customers

**A software platform that sends messages under a customer's brand is an "entity associate", and since 1 July 2026 it needs its own approval to participate in the register plus the sender ID owner's confirmed consent.** The ACMA's examples include an agency running campaigns for a business and a company sending for a bank.

In practice your telco submits two applications: one for you to participate, and one for the owner's sender ID with consent for you to use it. You will need each owner's ABN, website, registered office or principal place of business, a representative's contact details and evidence of the use case. Even if the owner has already registered, you still apply as an entity associate.

For a multi tenant product that means a sender ID onboarding flow: collect those details, track each application's status per tenant, and fall back to a shared number while approval is pending, so no tenant goes out as Unverified.

## What does the Spam Act require for marketing SMS?

**Before you send a commercial message you need consent, and every message must identify you and include a working unsubscribe.** It is up to you to prove consent, and that stays true when a provider or agency sends for you.

The three requirements, as the ACMA states them:

1. **Consent.** Express consent (a form, a ticked box, by phone or in person) or, in limited cases, inferred consent from an existing relationship where the marketing is directly related. You cannot send an SMS asking for consent, because that request is itself a marketing message. Record who consented, when and how.
2. **Identify the sender.** Use your name or business name and correct contact details, which must stay accurate for at least 30 days after sending.
3. **Unsubscribe.** Clear instructions, honoured within 5 working days, no fee beyond a normal text, functional for at least 30 days, and no requirement to log in, create an account or give extra personal information.

Inferred consent is thinner than many teams assume. In November 2026 SpinTel paid $653,400 after emailing former customers, some of whom had left up to 13 years earlier; the ACMA said a past relationship did not automatically give consent, and it also found messages sent more than 5 business days after an unsubscribe. The same logic applies to SMS.

## How do you keep OTPs and reminders deliverable?

**Keep them free of marketing, send them from a registered sender ID or a stable number, and make the content obviously yours.** People now treat Unverified and unfamiliar senders as scams, so consistency is the deliverability strategy.

- Use one registered sender ID per brand for transactional messages and tell customers which one it is.
- Do not put links in OTP messages. A code and a short context line is enough.
- Keep messages within one segment where possible: 160 characters with the standard GSM character set, or 70 if you include an emoji or other Unicode character. Longer messages are split into 153 or 67 character segments, each billed separately.
- Remember the ACMA's own tip: alphanumeric sender IDs are generally not able to receive replies. If a message invites a reply, or uses "Reply STOP" as its opt out, send it from a number that can receive one.

## Which provider and number type should you choose?

**For most Australian products the choice is between a global API provider and an Australian focused SMS platform, and both work under the register.** The deciding factors are price at your volume, whether you need two way messaging and an inbox, and support for multi tenant sender IDs.

Published prices at the time of writing (check the linked pages, carrier fees can apply on top):

| Provider | Published Australian pricing | Notes |
|---|---|---|
| Twilio | $0.0515 per outbound SMS segment, $0.0075 inbound, listed in US dollars; Australian mobile numbers $8.25 a month; alphanumeric sender ID no monthly charge | Developer API first; a $0.001 fee applies to failed messages |
| ClickSend | $0.0720 AUD per SMS from a $20 top up, falling to $0.0570 from $10,000; dedicated number $19 a month | Prepaid, inbound SMS free, prices ex tax |
| MessageMedia | Plans from $99 a month with 3,000 SMS, to $2,399 a month with 150,000; additional SMS from $0.0330 down to $0.0160 on annual plans | Inbox, automation and two way tools included; prices ex tax |

Number types: an **alphanumeric sender ID** is best for one way alerts and OTPs, a **dedicated mobile number** suits two way conversations and opt out by reply, and a **short code** is for high volume campaigns where a memorable number matters. Many products use two: a registered sender ID for alerts and a number for conversations.

If you want to compare platforms for the automation around SMS rather than the API itself, our [n8n vs Make vs Zapier guide](/guides/n8n-vs-make-vs-zapier) covers the workflow side.

## How should SMS be built into an app?

**Treat SMS as a small subsystem with its own data, not a function call.** The pieces that keep you inside the rules:

- **Consent ledger.** Store consent per person per channel with timestamp, source, wording shown and IP or staff member. Make it queryable for a complaint.
- **Template registry.** Tag every template as transactional or commercial, and block a commercial template from sending to anyone without consent.
- **Opt out sync.** Receive STOP replies and provider opt out webhooks, apply them across every system that sends (CRM, marketing tool, your app) within hours, not days. The TAB matter involved more than 217,000 messages sent to people who had unsubscribed from those channels.
- **Sender ID per tenant.** For platforms, store each tenant's registered IDs and their approval status, and route accordingly.
- **Quiet hours and rate limits.** The Spam Act sets no sending hours for SMS, but customers complain about 6am promotions, and complaints trigger investigations.
- **Delivery receipts.** Record status callbacks so support can see what was delivered.

Indicative build effort, AUD ex GST, at typical agency rates (ranges, not quotes): adding a provider with templates and delivery receipts to an existing app is about $4k to $10k; a full consent ledger, opt out sync across systems and per tenant sender ID management is about $12k to $35k. Our [workflow automation](/services/workflow-automation) and [API development](/services/api-development) teams build both.

## A compliance checklist for product teams

1. List every sender ID you use, including those in old campaigns and third party tools.
2. Confirm each SMS provider participates in the register, and register each ID through each one.
3. If you send for customers, apply as an entity associate and collect owner consent.
4. Classify every template as transactional or commercial.
5. Prove consent for every commercial recipient, with records you can retrieve.
6. Check every commercial template identifies you and has a working unsubscribe.
7. Test that an unsubscribe reaches every sending system within 5 working days, ideally same day.
8. Make sure any "Reply STOP" message is sent from a number that can receive the reply.
9. Watch the ACMA fee consultation and budget per sender ID.

## How AWLabs approaches SMS features

We map every message your systems send, classify them, and build the consent, opt out and sender ID handling into the product so it does not depend on someone remembering. Senior engineers lead every build. We are developers, not lawyers, so we build to the rules as your legal adviser confirms them. If your SMS is part of a retail or ecommerce stack, see our [retail and ecommerce](/industries/retail-ecommerce) page, or book a Development Consult through [API development and integration](/services/api-development).
