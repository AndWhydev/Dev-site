---
title: "How to build a subscription app in Australia"
metaTitle: "How to Build a Subscription App in Australia (2026 Rules)"
description: "How to build a subscription app in Australia: App Store and Google Play billing rules, Stripe Billing, GST, and subscription rules starting 1 July 2027."
eyebrow: "Australian guide"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "A subscription app in Australia needs three things designed together: where people pay (web checkout, Apple and Google in app purchase, or both), a single entitlement record that keeps access in sync across them, and sign up, renewal and cancellation flows that meet Australian consumer law. Apple requires in app purchase for digital subscriptions sold inside an iPhone app, with limited exceptions, and Google Play's Australian fees for auto renewing subscriptions are 10% plus a 5% billing fee at the time of writing. From 1 July 2027 the Unfair Trading Practices Act requires clear subscription disclosures and an easy way to cancel, online if people signed up online."
takeaways:
  - "Decide early whether people subscribe on the web, in the app stores or both. It changes fees, refunds, tax handling and how much customer data you hold."
  - "Apple's guideline 3.1.1 requires in app purchase for digital features sold inside an app, but business software sold to organisations, physical goods and services, and some reader apps have exceptions."
  - "Stripe Billing costs 0.7% of billing volume on pay as you go pricing in Australia at the time of writing, on top of payment fees."
  - "The Unfair Trading Practices Act 2026 commences on 1 July 2027: subscription offers must disclose costs, renewal and how to cancel, and the exit must be easy to find and straightforward."
  - "Those subscription rules also protect small businesses (fewer than 100 employees or under $10 million turnover) on standard form contracts, so B2B SaaS is covered too."
faqs:
  - q: "Do I have to use Apple in app purchase for my subscription?"
    a: "If the subscription gives access to digital features or content inside an iPhone app sold to consumers, generally yes, under App Store Review Guideline 3.1.1. Exceptions include apps sold directly to organisations for their staff or students, physical goods or services consumed outside the app, and reader apps for content such as magazines, music or video. Check the current guidelines before you design pricing."
  - q: "Can my app link to my website to subscribe?"
    a: "On the US storefront, Apple says developers don't need an entitlement to include external purchase links. Elsewhere, link out entitlements are limited to specific storefronts; at the time of writing Australia is not among those Apple lists. Google Play's Australian fee schedule does include rates for purchases through external web links on some transaction types."
  - q: "What fees do Apple and Google take on subscriptions?"
    a: "Apple's Small Business Program rate is 15% for developers with up to US$1 million in proceeds in the prior calendar year. Google Play charges 10% plus a 5% billing fee on auto renewing subscriptions in Australia under the structure that took effect on 30 September 2026. Check both companies' current pages before modelling."
  - q: "Do I charge GST on app subscriptions?"
    a: "If you are registered for GST, sales of digital subscriptions to Australian customers generally include 10% GST, and exports of services are generally GST free. Overseas countries may have their own rules: New Zealand, for example, requires overseas suppliers of remote services to register for GST once sales to NZ consumers pass NZ$60,000 in 12 months. Get your accountant to confirm how app store sales are treated in your case."
  - q: "What do I need to change for 1 July 2027?"
    a: "Review your sign up screen (it must say it is a subscription and disclose costs, period, renewal, notice and how to cancel), your cancellation flow (easy to find, straightforward, online if sign up was online) and any design that pressures people. The rules apply to contracts entered or renewed from that date."
  - q: "Should I use RevenueCat or build entitlements myself?"
    a: "RevenueCat suits apps that sell mostly through the app stores and want receipts, entitlements and analytics handled for them; at the time of writing it is free up to US$2,500 in monthly tracked revenue and 1% after that. Building it yourself makes sense when web billing dominates or you already run Stripe Billing as the source of truth."
sources:
  - title: "App Review Guidelines (section 3.1)"
    url: "https://developer.apple.com/app-store/review/guidelines/"
    publisher: "Apple Developer"
  - title: "StoreKit External Purchase Link Entitlement"
    url: "https://developer.apple.com/support/storekit-external-entitlement/"
    publisher: "Apple Developer"
  - title: "App Store Small Business Program"
    url: "https://developer.apple.com/app-store/small-business-program/"
    publisher: "Apple Developer"
  - title: "Service fees"
    url: "https://support.google.com/googleplay/android-developer/answer/112622?hl=en"
    publisher: "Google Play Console Help"
  - title: "Stripe Billing pricing"
    url: "https://stripe.com/au/billing/pricing"
    publisher: "Stripe"
  - title: "RevenueCat pricing"
    url: "https://www.revenuecat.com/pricing/"
    publisher: "RevenueCat"
  - title: "Competition and Consumer Amendment (Unfair Trading Practices) Act 2026"
    url: "https://www.legislation.gov.au/C2026A00064/asmade/text"
    publisher: "Federal Register of Legislation"
  - title: "Unfair contract terms"
    url: "https://www.accc.gov.au/business/selling-products-and-services/unfair-contract-terms"
    publisher: "ACCC"
  - title: "Exports and GST"
    url: "https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/australians-doing-business-overseas/exports-and-gst"
    publisher: "Australian Taxation Office"
  - title: "Supplying remote services into New Zealand"
    url: "https://www.ird.govt.nz/gst/gst-for-overseas-businesses/supplying-remote-services-into-new-zealand"
    publisher: "Inland Revenue NZ"
related:
  - title: "App Store and Google Play publishing in Australia"
    href: "/guides/app-store-publishing-australia"
  - title: "How much does it cost to build an app in Australia?"
    href: "/guides/app-development-cost-australia"
  - title: "Web app vs mobile app vs PWA"
    href: "/guides/web-app-vs-mobile-app"
  - title: "How much does it cost to build a SaaS product?"
    href: "/guides/saas-development-cost-australia"
  - title: "How to build a marketplace platform in Australia"
    href: "/guides/how-to-build-a-marketplace"
service:
  title: "SaaS development"
  href: "/services/saas-development"
disclaimer: legal
---

## Web subscriptions, in app purchases or both?

**Pick the payment channel before you design the app, because it decides your fees, who owns the customer relationship and how refunds work.** There are three common setups:

| Setup | How people subscribe | Fees at the time of writing | Best for |
|---|---|---|---|
| Web only | A checkout on your website, often with Stripe Billing | Card processing plus 0.7% of billing volume for Stripe Billing pay as you go | B2B software, web apps, PWAs, products sold by invoice |
| App store only | Apple and Google in app purchase inside the mobile app | Apple 15% under the Small Business Program; Google Play 10% plus a 5% billing fee for auto renewing subscriptions in Australia | Consumer apps where most sign ups happen on the phone |
| Both | Web checkout plus in app purchase, one account across both | Each channel's fees on its own sales | Consumer products with a strong website and app |

Selling through the stores is less work at checkout: the store handles card details, receipts, refunds and family sharing. The cost is the commission, and the store, not you, holds the payment relationship. Web billing keeps more revenue and data with you, but you take on payment failures, tax and cancellation flows yourself.

Before choosing, read our guide to [web app vs mobile app vs PWA](/guides/web-app-vs-mobile-app). If the product is mainly used at a desk, web billing usually wins.

## What do Apple and Google require?

**Apple requires in app purchase for digital features sold inside an app, with defined exceptions; Google Play has its own billing rules and a fee schedule that changed for Australia on 30 September 2026.**

Apple's App Store Review Guideline 3.1.1 says apps that sell access to features or functionality within the app, including subscriptions and premium content, must use in app purchase. Guideline 3.1.2 adds that an auto renewable subscription must provide ongoing value, last at least seven days and be available across all of the user's devices. SaaS and cloud support are listed as appropriate uses.

The exceptions that matter for Australian businesses:

- **Enterprise services (3.1.3(c)).** If the app is only sold directly to organisations or groups for their employees or students, users can access what the organisation bought elsewhere. Consumer, single user and family sales must still use in app purchase.
- **Physical goods and services (3.1.3(e)).** If people buy something consumed outside the app, such as a cleaning service, a delivery or a gym class, you must use other payment methods.
- **Multiplatform services (3.1.3(b)).** People can use a subscription bought on your website, provided it is also available as an in app purchase.
- **Reader apps (3.1.3(a)).** Apps for previously purchased magazines, newspapers, books, audio, music and video can let people use subscriptions bought elsewhere.

On linking out to your website: Apple's guidelines say developers don't need an entitlement to include external purchase links on the US storefront. Elsewhere, Apple offers link out entitlements only in specific storefronts, and at the time of writing Australia is not among those it lists. Google's Australian fee table includes rates for purchases through external web links on some transaction types, alongside Google Play Billing.

App review and rejections are covered in our [App Store publishing guide](/guides/app-store-publishing-australia).

## Which billing engine should you use?

**Use the app stores' own systems for in app purchases, a billing engine such as Stripe Billing or Chargebee for the web, and a single entitlement service that both report into.**

- **Stripe Billing** runs plans, trials, proration, invoices and dunning for web subscriptions. At the time of writing its Australian pay as you go price is 0.7% of billing volume, on top of Stripe's payment processing fees.
- **Chargebee** sits on top of a payment gateway and adds more revenue operations tooling, which suits more complex B2B pricing.
- **RevenueCat** wraps Apple and Google in app purchases, validates receipts and exposes one entitlement API. At the time of writing it is free up to US$2,500 in monthly tracked revenue and 1% after that.

For a B2B SaaS sold by seat or by site, Stripe Billing alone is often enough. For a consumer app selling mainly in the stores, RevenueCat plus a small backend is often the fastest route.

## How do you design trials, price changes and cancellation under Australian law?

**Treat the subscription screens as legal documents: what you show at sign up, what happens at renewal and how people leave are all regulated, and more so from 1 July 2027.**

The Competition and Consumer Amendment (Unfair Trading Practices) Act 2026 commences on 1 July 2027. Its subscription provisions cover contracts that renew automatically, run indefinitely, or start with a free or discounted period before charging, or charging more. For those contracts:

| Requirement | What it means for the app |
|---|---|
| Disclose that it is a subscription | Say so at the point of sign up |
| Disclose the key terms | What people will pay, the period, renewal or extension, any notice needed to cancel, and how to cancel |
| Make the disclosure prominent | Legible, prominent and unambiguous, in close proximity to where people agree (or spoken clearly before they agree) |
| Provide an easy exit | Easy to find, straightforward, and only the steps reasonably necessary |
| Allow online cancellation | Required if the person signed up online, or if you offer online sign up for the same kind of service |
| Ongoing information | Further information at times set by regulations, for prescribed kinds of subscription |

The protections apply to consumers and to small businesses (fewer than 100 employees or turnover under $10 million) on standard form contracts, so B2B SaaS on click through terms is in scope. They apply to contracts entered from 1 July 2027, and to existing contracts once they renew or are varied after that date. The same Act separately bans unfair trading practices towards consumers, including design elements in digital interfaces that pressure or obstruct people.

Unfair contract terms rules already apply. Since 9 November 2023, unfair terms in standard form contracts are banned with penalties. The ACCC's own example is relevant to subscriptions: a term letting a business change the price during a contract, with no right for the customer to leave, is likely to be unfair; the same term balanced by a right to exit without penalty is likely not to be.

A practical checklist for the screens:

- [ ] The sign up screen says "subscription", the price, the billing period and when the first charge happens.
- [ ] Free trials state when they end and what will be charged.
- [ ] Price increases are notified in advance with a clear way to cancel.
- [ ] Cancel is reachable from account settings in two or three taps, with no forced phone call.
- [ ] Retention offers are optional and don't block the cancel button.
- [ ] App store subscriptions explain how to cancel through Apple or Google.

## How does GST apply to digital subscriptions?

**If you're registered for GST, digital subscriptions sold to Australian customers generally include 10% GST, while exports of services from Australia are generally GST free.** Two complications come up often:

- **Overseas customers may bring overseas tax.** New Zealand, for example, requires overseas businesses supplying remote services, including apps and software, to register for NZ GST once supplies to NZ consumers exceed NZ$60,000 in 12 months. Our guide to [expanding a SaaS product to New Zealand](/guides/expand-saas-to-new-zealand) covers that case.
- **App store sales are reported differently from web sales.** You receive net proceeds from Apple and Google, not individual customer payments, so your accountant needs to decide how those sales and fees are recorded.

Build the billing data so tax can be calculated by customer country and customer type (business or consumer), even if you only sell in Australia today.

## How do you reduce failed payments and involuntary churn?

**Plan for cards to fail: expired cards, insufficient funds and bank declines quietly cancel a share of subscriptions every month unless you recover them.** Good dunning includes:

1. **Automatic retries** spaced over several days.
2. **Card updater services** where the payment provider supports them.
3. **Clear emails and in app notices** with a one tap link to update payment details.
4. **A grace period** where access continues while payment is retried, rather than an instant lockout.
5. **A defined end point** after which the subscription is cancelled and the customer told.

The app stores run their own billing retry and grace periods for in app purchases; your app should listen for those status changes rather than assuming.

## How do you keep access in sync across web and mobile?

**Store one entitlement record per customer that every channel updates, and have the app check that record rather than each store directly.** The entitlement says what the customer can use, until when, and which channel they paid through.

- **Web purchases** update the record from Stripe webhooks.
- **Apple and Google purchases** update it from server notifications, directly or via RevenueCat.
- **Restore purchases** must work, as Apple's guidelines expect for restorable purchases.
- **Cancellation instructions** depend on the channel: a store subscription can only be cancelled in the store.
- **Avoid double billing** by checking the entitlement before showing a purchase option.

## What does it cost to build?

**The subscription layer itself is usually a modest share of an app budget, but it touches sign up, accounts, billing, notifications and support tools.** Our [app development cost guide](/guides/app-development-cost-australia) and [SaaS cost guide](/guides/saas-development-cost-australia) give Australian ranges for the whole product. Running costs to model separately: store commissions or Stripe fees, RevenueCat or Chargebee fees, and GST.

## How AWLabs approaches subscription products

We design the payment channels, entitlement record and cancellation flows together, and we build the July 2027 subscription rules into the screens now rather than retrofitting them. Legal sign off on your terms and disclosures comes from your lawyer; we build to it.

It starts with a Development Consult, a 15 minute call or a Zoom with Andy. The paid Discovery Audit then settles channels, billing engine and entitlements, and its fee is credited in full against the build. The Schedule of Work offers three fixed price options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. See our [SaaS development](/services/saas-development) and [web and mobile app](/services/web-mobile-apps) services.
