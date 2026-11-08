---
title: "How to integrate PayTo into your app or billing system"
metaTitle: "How to Integrate PayTo: A Guide for Australian Builders"
description: "How PayTo agreements work, which providers offer them by API, the failure states to design for, migrating direct debits, and where the BECS wind down stands."
eyebrow: "Australian payments"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "To integrate PayTo you become a PayTo User through a sponsor (a bank or a payment provider such as Stripe, Adyen, Monoova or Azupay), then use its API to create a payment agreement, wait for the customer to authorise it in their banking app, and debit against it in real time on the New Payments Platform. The engineering work is mostly in the waiting and failure states: pending, declined, paused, cancelled and amended agreements all arrive as events your system must handle. Existing direct debit customers can be moved across with 14 days' notice and no fresh authorisation."
takeaways:
  - "PayTo is a bank account payment method on the NPP. The customer authorises an agreement in their own banking, then you debit within its terms, 24/7."
  - "You never connect to PayTo directly. A sponsor (an NPP Participant or an Identified Institution) gives you access through its own API."
  - "Agreements can be paused, cancelled or declined by the customer at any time, so your product needs states and messages for each."
  - "Direct debits can migrate to PayTo with 14 days' notice to the customer and a 5 day wait before the first debit, with no reauthorisation."
  - "AusPayNet removed its June 2030 target for retiring BECS in December 2025, so direct debit is not disappearing on a fixed date."
faqs:
  - q: "What is PayTo in Australia?"
    a: "PayTo is a way for a business to take payments directly from a customer's bank account over the New Payments Platform, run by Australian Payments Plus. The customer approves a PayTo agreement in their online banking that sets the amount, purpose and frequency, and the business can then debit their account in line with those terms, in real time."
  - q: "How is PayTo different from direct debit?"
    a: "With a direct debit, the customer signs a request with the business and the bank never sees the terms. With PayTo, the agreement lives in the customer's banking app, where they can see, pause or cancel it, and payments settle in near real time instead of over the following business days. PayTo also confirms the account is valid when the agreement is authorised, which removes many failed first debits."
  - q: "Can I take PayTo payments through Stripe?"
    a: "Yes. Stripe supports PayTo for Australian accounts at the time of writing, priced the same as BECS Direct Debit on its Australian pricing page: 1% plus A$0.30, capped at A$3.50, including GST. Stripe applies a default per transaction limit of A$10,000, which can be raised to A$100,000 with approval."
  - q: "Do customers have to reauthorise when we move them from direct debit to PayTo?"
    a: "No. Under the AP+ migration process you give the customer at least 14 days' notice, they can opt out during that time, and the migrated agreement appears in their banking without needing approval. You can start debiting 5 calendar days after the agreement is set up."
  - q: "Can a customer link a card to a PayTo agreement?"
    a: "No. PayTo agreements are created with a PayID (a mobile number or email address registered to the account) or a BSB and account number. Cards stay on the card networks."
  - q: "Is direct debit being switched off in 2030?"
    a: "Not on a fixed date any more. AusPayNet set June 2030 as a target in November 2023, then removed that target in December 2025. The industry is now working to an A2A payments roadmap that follows the vision released in July 2026, so plan for both rails running side by side for some years."
sources:
  - title: "PayTo"
    url: "https://www.auspayplus.com.au/solutions/payto"
    publisher: "Australian Payments Plus"
  - title: "PayTo for businesses"
    url: "https://www.auspayplus.com.au/solutions/payto-for-businesses"
    publisher: "Australian Payments Plus"
  - title: "PayTo FAQs"
    url: "https://www.auspayplus.com.au/solutions/payto-faqs"
    publisher: "Australian Payments Plus"
  - title: "The Future of A2A Payments Program (formerly the BECS Transition Program)"
    url: "https://www.auspaynet.com.au/insights/BECS_Transition"
    publisher: "Australian Payments Network"
  - title: "A2A Payments Roundtable releases vision for account to account payments in Australia (8 July 2026)"
    url: "https://www.rba.gov.au/media-releases/2026/mr-26-18.html"
    publisher: "Reserve Bank of Australia"
  - title: "Review of Merchant Card Payment Costs and Surcharging: Conclusions Paper"
    url: "https://www.rba.gov.au/media-releases/2026/mr-26-10.html"
    publisher: "Reserve Bank of Australia"
  - title: "PayTo payments"
    url: "https://docs.stripe.com/payments/payto"
    publisher: "Stripe"
  - title: "Pricing (Australia)"
    url: "https://stripe.com/au/pricing"
    publisher: "Stripe"
  - title: "PayTo"
    url: "https://docs.adyen.com/payment-methods/payto"
    publisher: "Adyen"
  - title: "PayTo payment solutions"
    url: "https://www.monoova.com/payto"
    publisher: "Monoova"
related:
  - title: "How much does API integration cost in Australia?"
    href: "/guides/api-integration-cost-australia"
  - title: "SaaS development cost in Australia"
    href: "/guides/saas-development-cost-australia"
  - title: "Consumer Data Right software"
    href: "/guides/consumer-data-right-software"
  - title: "Fintech startup development"
    href: "/solutions/fintech-startup-development"
  - title: "Stripe vs Square vs Tyro vs Adyen for Australian apps and platforms"
    href: "/guides/stripe-vs-square-vs-tyro"
  - title: "How to build a subscription app in Australia"
    href: "/guides/subscription-app-development"
service:
  title: "API development and integration"
  href: "/services/api-development"
disclaimer: financial
---

## What is PayTo, and how is it different from direct debit and cards?

**PayTo is a bank account payment method on the New Payments Platform (NPP): the customer authorises a payment agreement inside their own online banking, and the business then debits their account within those terms, in real time, any hour of the day.** It is run by Australian Payments Plus (AP+), the body that also operates BPAY, eftpos, PayID and the NPP.

For a product team, the important differences sit in three places: where the authority lives, how fast money moves, and who can stop it.

| | BECS direct debit | PayTo | Card on file |
|---|---|---|---|
| Where the customer authorises | A direct debit request with you (form or web page) | Their banking app, as a PayTo agreement | Your checkout or the card network's authentication |
| Account checked at sign up | No, errors show up on the first debit | Yes, the agreement can only be authorised on a real account | Card is authorised at checkout |
| Settlement | Batched, over business days | Near real time, 24/7 (some payments held for checks) | Card scheme settlement to your acquirer |
| Customer can pause or cancel | Through you or their bank | Directly in their banking, at any time | Through you or their card issuer |
| Status events you receive | Dishonour files, days later | Agreement and payment events as they happen | Authorisation and dispute events |

PayTo agreements cover single payments, ad hoc payments and recurring schedules. They are created with either a PayID (a mobile number or email address registered to the account) or a BSB and account number. Customers cannot attach a card to a PayTo agreement, so PayTo replaces direct debit and some card on file use, not cards generally.

The card side matters for the business case too. The RBA's Payments System Board concluded its review of card costs with a package that removed surcharging on eftpos, Mastercard and Visa cards and lowered domestic interchange caps, with most changes taking effect on 1 October 2026. With surcharges gone, the cost of card acceptance is now absorbed in your prices, which makes a cheaper bank account option more attractive for large or recurring amounts.

## How does a PayTo agreement move from creation to cancellation?

**Every agreement follows the same lifecycle: you create it through your sponsor's API, the customer authorises or declines it in their banking, and from then on either party can change its status, with each change arriving as a notification you must act on.** AP+ says the form of that notification is set by your sponsor, so in practice it is a webhook or a polled status from the provider you chose.

1. **Create.** Your system sends the payer's PayID or BSB and account number with the terms: amount (or maximum), frequency, purpose and validity period. Some businesses accept only certain PayID types.
2. **Authorise.** The customer's bank prompts them, typically by push notification or email, and they approve or decline in their banking app. This can take seconds or days.
3. **Debit.** Once authorised you can initiate payments within the terms, 24/7. If funds are short the debit fails; AP+ notes you may be able to retry at least once, depending on your sponsor.
4. **Amend.** Changing the amount or frequency means sending an amended agreement, and the customer must approve it before you can debit at the new terms.
5. **Pause, resume or cancel.** The customer can do any of these in their banking. Pausing or cancelling does not end their contract with you, but you cannot debit while it applies.

Stripe's documentation adds practical detail from its implementation: it recommends the least permissive mandate terms that will work, warns that several banks reject mandates with no amount set, notes that some banks reject mandates above A$25,000, and says PayTo performs best for recurring payments and amounts under A$1,000. It also notes that business bank account coverage is lower than personal account coverage, which matters for B2B billing.

## Who do you connect through?

**You need a PayTo Sponsor, which is either an NPP Participant (a bank connected to the platform) or an Identified Institution, and you access PayTo through that sponsor's own channels, usually an API.** Commercial terms are negotiated with the sponsor, not AP+.

At the time of writing, these providers publish PayTo documentation or product pages:

| Route | What you get | Best fit |
|---|---|---|
| Stripe | PayTo as a payment method alongside cards and BECS; mandates, refunds and disputes in one API. A$10,000 default per transaction limit, up to A$100,000 with approval | SaaS and ecommerce already on Stripe |
| Adyen | PayTo in its online payments integration, enabled through its Management API or Customer Area | Larger merchants on Adyen for cards |
| Monoova | PayTo by API or client portal, with a scheduler for recurring payments | Collections, payouts and reconciliation heavy businesses |
| Azupay | PayTo agreements with recurring schedules, reporting and webhooks | Bill payments, rent and instalment collection |
| Your bank directly | Bank specific APIs or file channels where offered | High volume billers with an existing treasury integration |

The decision is rarely about PayTo alone. If you already run cards and subscriptions on one provider, adding PayTo there keeps one customer record, one webhook stream and one reconciliation feed. A specialist account to account provider makes more sense when bank payments are the main event, for example in lending, rent or utilities.

## What should the customer flow look like?

**Design for the gap between "agreement sent" and "agreement authorised", because the customer has to leave your app, open their banking and approve something, and some will not finish.** That gap is the biggest UX difference from a card form.

A flow that holds up in practice:

- Show the exact terms before you send them: amount or maximum, frequency, the name the customer will see, and what the payment is for. If the agreement in their banking looks unfamiliar, a careful customer will decline it, which is what AP+'s scam guidance tells them to do.
- After submission, show a waiting screen that tells the customer to open their banking app now, with a timeout and a "resend" or "pay another way" option.
- Listen for the authorisation event rather than asking the customer to confirm, and only then switch on the service or take the first payment.
- Keep a card or manual bank transfer fallback for customers whose bank or account type does not support PayTo yet.

## Which failure states do you need to handle?

**Each of these arrives as an event from your sponsor, and each needs a clear next step in your product and your billing records.**

| Event | What it means | What your system should do |
|---|---|---|
| Declined | Customer rejected the agreement | Flag the account, prompt them to check details or choose another method |
| Not authorised in time | Customer never completed the approval | Send a reminder, then expire and offer another method |
| Paused | No debits allowed until resumed | Stop scheduled debits, notify your team, keep the debt on the account |
| Cancelled | Agreement ended by the customer | Treat as a payment method loss, start dunning or offboarding |
| Amendment pending | You changed terms, approval not yet given | Keep debiting at the old terms only if still valid, chase approval |
| Payment failed | Usually insufficient funds | Retry within your sponsor's rules, then notify |
| Dispute | Customer disputes a debit with their bank | Record it; on Stripe, PayTo disputes are final with no evidence process |

Reconciliation is easier than with direct debit because you can carry more reference data in the agreement and payment, which AP+ positions as a reconciliation benefit. Refunds go back through the provider; Stripe allows full and partial PayTo refunds for up to two years after the payment. If you sync payments into accounting, map PayTo settlements like any other provider payout; our [Xero and MYOB integration](/services/xero-myob-integration) work covers that step.

## How do you move existing direct debit customers to PayTo?

**You can migrate a direct debit request into a PayTo agreement without the customer reauthorising it, provided you follow the notice process and work through your sponsor.**

The published sequence is:

1. Give each customer at least 14 days' advance notice of the move.
2. During those 14 days the customer may opt out and stay on the existing direct debit.
3. Your sponsor creates the migrated agreement. It appears in the customer's banking without needing approval, and their bank may contact them to confirm they recognise it.
4. Wait 5 calendar days after the agreement is set up before initiating payments.

Build the migration as a batch job with a status per customer (notified, opted out, migrated, first debit succeeded), so finance can see progress and support can answer calls. Stripe documents a specific path for using existing AU BECS customer details to set up PayTo agreements, which is worth reading even if you use another provider.

## What does PayTo cost, and when is it worth it?

**Provider fees vary by sponsor and volume, and build effort depends mostly on how many failure states and migrations you need to handle.** At the time of writing, Stripe's Australian pricing lists PayTo at 1% plus A$0.30, capped at A$3.50 per transaction including GST, the same as its BECS Direct Debit price. Specialist providers usually quote on application.

Indicative build ranges, AUD ex GST, assuming an existing billing system and an agency rate of about $1,100 to $1,500 a day (see our [API integration cost guide](/guides/api-integration-cost-australia) for how those rates are set). These are ranges, not quotes.

| Scope | Typical effort | Indicative range |
|---|---|---|
| PayTo as an extra method on an existing provider, single payments only | 4 to 8 days | $5k to $12k |
| Recurring agreements with full event handling and dunning | 10 to 20 days | $11k to $30k |
| Migrating an existing direct debit base, with notices and reporting | add 6 to 15 days | $7k to $22k |

PayTo tends to pay off when transaction values are large enough that card fees hurt, when failed direct debits are costing you money, or when customers want visibility of what they have authorised. It is less compelling for small, one tap consumer purchases, where cards and wallets still convert better.

## What does the BECS wind down mean for your roadmap?

**Direct debit on BECS is not being switched off on a fixed date, so build PayTo as an addition, not an emergency replacement.** AusPayNet announced June 2030 as the target end date for decommissioning the BECS framework in November 2023, then removed that target in December 2025, citing the need for a shared vision, the adoption of alternatives for direct debits and bulk payment files, and resilience concerns. The A2A Payments Roundtable (AusPayNet, AP+, the RBA and Treasury) released its vision in July 2026, and the next step is a roadmap with timelines.

For most products that means supporting both rails for some years, defaulting new customers to PayTo where their bank supports it, and keeping your payment layer behind one internal interface so the switch is a configuration change later.

## How AWLabs approaches PayTo projects

We start by mapping your current billing states and payment events, then choose the sponsor that fits your existing stack. Senior engineers lead every build, and we deliver the agreement lifecycle, webhooks, retries and reconciliation as one tested module. After a short Development Consult and a paid Discovery Audit, you get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. If you are building a payments product rather than adding PayTo to one, see our [finance and fintech](/industries/finance-fintech) and [SaaS development](/services/saas-development) pages, or start with [API development and integration](/services/api-development).
