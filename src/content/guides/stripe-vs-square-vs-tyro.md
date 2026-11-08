---
title: "Stripe vs Square vs Tyro vs Adyen for Australian apps and platforms"
metaTitle: "Stripe vs Square vs Tyro vs Adyen in Australia (2026)"
description: "Stripe, Square, Tyro or Adyen for Australian software? Card fees, least cost routing, the 1 October 2026 surcharge ban, platform payouts, PayTo and Xero sync."
eyebrow: "Comparison"
category: compare
published: 2026-11-08
updated: 2026-11-08
summary: "For Australian software that takes payments online, Stripe is usually the default: strong APIs, PayTo and BECS direct debit, and Connect for platforms. Square suits businesses that sell in person and online on one simple flat rate. Tyro suits counter service businesses using an integrated POS, with least cost routing built in. Adyen suits high volume merchants and platforms that want Interchange++ pricing and one provider across countries. Since 1 October 2026, card surcharges on eftpos, Mastercard and Visa are no longer allowed, so the fee rate now comes straight out of your margin."
takeaways:
  - "At the time of writing Stripe AU lists 1.65% + A$0.30 for domestic cards online (fees include GST), Square AU lists 1.6% in person and 2.2% online, and Tyro lists a 1.3% transaction fee plus terminal rental."
  - "Card surcharges on eftpos, Mastercard and Visa ended on 1 October 2026. Domestic interchange caps fell on the same date, and a foreign card cap starts on 1 April 2027."
  - "The RBA estimates the cost of accepting debit cards is nearly 20% lower for merchants with least cost routing. Flat rate plans keep most of that saving with the provider."
  - "For marketplaces, Stripe Connect and Adyen for Platforms are built to onboard sellers, split payments and pay out funds."
  - "Stripe lists PayTo and BECS direct debit at 1% + A$0.30, capped at A$3.50, which suits recurring and high value payments."
faqs:
  - q: "Stripe vs Square: which is cheaper in Australia?"
    a: "For online card payments at the time of writing, Stripe lists 1.65% + A$0.30 for domestic cards and Square lists 2.2%. On a $20 sale Square is cheaper (44c against 63c); on a $100 sale Stripe is cheaper ($1.95 against $2.20). In person, Square's flat 1.6% is simple, while Stripe Terminal lists 1.65% + A$0.10. Volume discounts change both."
  - q: "What is the cheapest payment gateway in Australia?"
    a: "It depends on your average sale, card mix and volume. Small, frequent in person payments favour providers with least cost routing and low per transaction fees; large online payments favour percentage only pricing or bank payments such as PayTo. Above a few hundred thousand dollars a year, ask for custom or Interchange++ pricing; Square, Tyro and Stripe all mention custom pricing for larger volumes."
  - q: "Can I still add a card surcharge?"
    a: "Not on eftpos, Mastercard or Visa from 1 October 2026, and American Express, PayPal and UnionPay also removed surcharging according to the RBA. Weekend, public holiday and service fees that apply regardless of payment method are not card surcharges, but ACCC price display rules still apply to them."
  - q: "Can Xero integrate with Stripe and Square?"
    a: "Yes. The Xero App Store lists a Stripe app built by Xero, mainly for accepting card and wallet payments on Xero invoices, and a Square app built by Square for syncing sales. Check whether the app posts each transaction or daily summaries, and how fees and refunds are recorded, before relying on it for reconciliation."
  - q: "Stripe vs Tyro: which should a hospitality business use?"
    a: "For in person hospitality on an integrated POS, Tyro is designed for that use: it lists integration with more than 580 POS systems, pay at table and least cost routing. For online ordering, bookings and app payments, Stripe is stronger. Many venues use both: Tyro at the counter and Stripe online."
  - q: "Which provider supports PayTo?"
    a: "Stripe lists PayTo on its Australian pricing page, and Adyen documents PayTo as a payment method. Check with Square and Tyro directly for their current support. Our PayTo integration guide covers mandates and design choices."
sources:
  - title: "Stripe pricing (Australia)"
    url: "https://stripe.com/au/pricing"
    publisher: "Stripe"
  - title: "Square pricing (Australia)"
    url: "https://squareup.com/au/en/pricing"
    publisher: "Square"
  - title: "EFTPOS machine costs and merchant fees"
    url: "https://www.tyro.com/pricing/"
    publisher: "Tyro"
  - title: "Adyen pricing"
    url: "https://www.adyen.com/pricing"
    publisher: "Adyen"
  - title: "Adyen for Platforms"
    url: "https://docs.adyen.com/platforms"
    publisher: "Adyen Docs"
  - title: "PayTo"
    url: "https://docs.adyen.com/payment-methods/payto"
    publisher: "Adyen Docs"
  - title: "Review of Merchant Card Payment Costs and Surcharging: Conclusions Paper (media release 2026-10)"
    url: "https://www.rba.gov.au/media-releases/2026/mr-26-10.html"
    publisher: "Reserve Bank of Australia"
  - title: "Frequently asked questions: removal of card payment surcharges from 1 October 2026"
    url: "https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/faqs/"
    publisher: "Reserve Bank of Australia"
  - title: "Backgrounder on least cost routing"
    url: "https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/backgrounders/backgrounder-on-least-cost-routing.html"
    publisher: "Reserve Bank of Australia"
  - title: "Stripe and Square on the Xero App Store"
    url: "https://apps.xero.com/au/app/stripe"
    publisher: "Xero"
related:
  - title: "PayTo integration for Australian apps"
    href: "/guides/payto-integration"
  - title: "How to build a marketplace"
    href: "/guides/how-to-build-a-marketplace"
  - title: "Subscription app development"
    href: "/guides/subscription-app-development"
  - title: "Hospitality software"
    href: "/industries/hospitality"
service:
  title: "API development"
  href: "/services/api-development"
disclaimer: financial
---

## Online, in person, or both: where does the decision start?

**Start with where the money is taken.** If almost all payments happen in a browser or app, choose between Stripe and Adyen on developer fit and volume. If most happen at a counter, choose between Tyro and Square on POS fit and fees. If you need both, decide which channel matters most and whether one provider can do the other well enough.

Prices below are from each provider's Australian pricing page at the time of writing (8 November 2026). Tyro's site blocks automated requests, so we read its pricing page through a rendering service; check it directly before relying on the figures. These are list prices; larger businesses negotiate.

| | Stripe | Square | Tyro | Adyen |
|---|---|---|---|---|
| Best fit | Online apps, subscriptions, platforms | Small businesses selling in person and online | Integrated POS at the counter, hospitality and retail | High volume merchants and platforms across countries |
| Domestic card, online | 1.65% + A$0.30 (includes GST) | 2.2% | Payment Links offered; not compared here | Interchange++ plus a fixed processing fee |
| Domestic card, in person | 1.65% + A$0.10 (Terminal) | 1.6%, any card type | 1.3%, plus terminal rental | Interchange++ plus a fixed processing fee |
| International cards | 3.5% + A$0.30, plus 2% if currency conversion | Not separately listed | Not separately listed | Varies by card and region |
| Least cost routing | Ask Stripe | Flat rate across card types | Tap & Save on dual network debit cards | Ask Adyen |
| Platform payouts | Connect | Not covered here | Not covered here | Adyen for Platforms |

## How do the fees compare on a real sale?

**Fixed fees punish small sales and percentage fees punish large ones, so compare on your own average transaction.** Using the online rates above:

| Sale value | Stripe (1.65% + 30c) | Square online (2.2%) | Sale value | Square in person (1.6%) | Tyro (1.3%) |
|---|---|---|---|---|---|
| $20 | $0.63 | $0.44 | $8 coffee | $0.13 | $0.10 |
| $100 | $1.95 | $2.20 | $45 meal | $0.72 | $0.59 |
| $500 | $8.55 | $11.00 | $250 order | $4.00 | $3.25 |

Tyro adds terminal rental ($19 to $29 a month for its Pro Series terminals, or $0 for its phone app) and was running an introductory 1% rate with free rental until 31 March 2027. Square's 1.6% applies to sellers who signed up on or after 30 May 2024; earlier sellers are on 1.9%. Square and Tyro both mention custom pricing above certain volumes ($250,000 a year for Square, $20,000 a month for Tyro), and Stripe offers custom packages including IC+ pricing.

## What is least cost routing, and who passes on the saving?

**Least cost routing sends a tap on a dual network debit card through whichever network is cheaper, usually eftpos for small amounts.** The RBA estimates the cost of accepting debit cards is nearly 20% lower for merchants with it enabled, though results vary by merchant size and plan.

The RBA describes three versions: binary (all eligible transactions to one network), threshold (small sales one way, large sales the other) and dynamic (the cheapest network chosen per transaction). It is widely available for in person contactless payments and has been extending to online payments since eftpos launched online functionality in 2022.

The catch is pricing structure. The RBA notes that for merchants on blended plans, routing lowers the provider's wholesale costs and how much reaches the merchant depends on the provider's pricing and competition. A flat rate across all card types, like Square's, is simple, but the routing saving mostly stays with the provider. Tyro's Tap & Save applies to dual network debit transactions; Tyro states it does not guarantee savings.

## What changed on 1 October 2026?

**Card surcharges on eftpos, Mastercard and Visa ended on 1 October 2026, domestic interchange caps fell on the same day, and a foreign card interchange cap starts on 1 April 2027.** The RBA announced these conclusions on 31 March 2026. Its FAQs add that American Express, PayPal and UnionPay also removed surcharging, and that weekend, public holiday, booking and service fees are not card surcharges.

For software, three things follow:

1. **Remove surcharge logic.** Checkout, invoicing and POS code that adds a card fee must go, and receipts and invoices should be checked for leftover surcharge lines.
2. **Reprice.** Costs that were passed on now sit inside the price. The RBA expects interchange reductions to help, especially small businesses.
3. **Shop around.** The RBA is requiring large acquirers and the card networks to publish fees, which makes comparison easier. Stripe's page already notes lower international pricing from 1 April 2027.

## Which works best for marketplaces and platforms?

**Stripe Connect and Adyen for Platforms are designed for software that takes payments on behalf of other businesses.** Stripe describes Connect as embedded payments for platforms and marketplaces, with tooling for onboarding, risk and tax forms; on standard pricing it is included, with a 0.25% starting fee for platforms that set their own payments pricing. Adyen's platform documentation covers onboarding and verifying users, split payments and payouts.

Square and Tyro suit software that serves their own merchants, such as POS integrations, but we would not start a multi seller marketplace on either. Our guide to [building a marketplace](/guides/how-to-build-a-marketplace) covers the wider design, including who is merchant of record.

## What about PayTo and buy now, pay later?

**For recurring and high value payments, PayTo and direct debit can cost far less than cards.** Stripe lists PayTo and BECS direct debit at 1% + A$0.30, capped at A$3.50, so a $2,000 invoice costs $3.50 instead of $33.30 on a domestic card. Adyen documents PayTo as a real time account to account method on the New Payments Platform, supporting one off and recurring payments. Our [PayTo integration guide](/guides/payto-integration) covers mandates and failure handling, and [subscription app development](/guides/subscription-app-development) covers billing design.

Buy now, pay later is much dearer: Stripe lists Zip at 5.49% + A$0.30, and Square lists Afterpay at 6% + 30c excluding GST. Offer it where it lifts conversion enough to pay for itself.

## How do Xero and MYOB reconciliation compare?

**Reconciliation works best when the provider pays out in batches your accounting app can match line by line, with fees shown separately.** The Xero App Store lists a Stripe app built by Xero, focused on letting customers pay Xero invoices by card and wallet, and a Square app built by Square for syncing sales. Neither replaces a proper design for order level reconciliation in a busy online business.

Questions to answer before go live: does each payout match one bank deposit, are fees and refunds posted to the right accounts, and how are disputes recorded? Where the standard apps fall short, see [Xero and MYOB integration](/services/xero-myob-integration).

## What should you check before switching provider?

**Switching payment provider is a software project, not a form, so test the edges before you move.** Saved cards and subscriptions are the hardest part: ask whether the new provider can import stored card tokens from the old one, or whether customers must enter their details again. Check payout timing against your cash flow, how disputes are evidenced and charged, and whether your POS, booking or ecommerce platform supports the new provider natively. Run a few weeks of transactions in parallel where you can, and reconcile both sets of payouts before you turn the old provider off.

## Which should you choose?

**Pick by business type, then confirm on your own numbers.**

- **SaaS or subscription app:** Stripe, with PayTo or BECS for larger invoices.
- **Marketplace or platform paying out to sellers:** Stripe Connect, or Adyen for Platforms at higher volume or across many countries.
- **Café, bar or quick service venue on an integrated POS:** Tyro at the counter; see [hospitality software](/industries/hospitality).
- **Small retailer selling in store and online with little IT support:** Square.
- **Large retailer or enterprise with high volume:** Adyen or negotiated Interchange++ pricing from any of the four.

## How AWLabs approaches payments

We are not a partner of Stripe, Square, Tyro or Adyen and take no commission. We build payment flows, reconciliation and platform payouts into Australian software, designed around your provider rather than ours. It starts with a 15 minute Development Consult, then a paid Discovery Audit and a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. See [API development](/services/api-development) and our [retail and ecommerce](/industries/retail-ecommerce) work.
