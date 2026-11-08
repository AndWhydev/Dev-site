---
title: "How much does a Shopify custom app cost in Australia?"
metaTitle: "Shopify Custom App Development Cost in Australia"
description: "Shopify custom app costs for Australian merchants: Functions and checkout extensions that need Plus, ERP, 3PL and Xero sync, API upkeep and 3 year totals."
eyebrow: "Cost guide"
category: cost
published: 2026-11-08
updated: 2026-11-08
summary: "A single purpose Shopify custom app or Function typically costs $5k to $20k (AUD, ex GST) to build, an ERP or 3PL integration with stock and order sync $20k to $60k, and a custom B2B or subscription layer with checkout extensions and portals $60k to $150k. Check your plan first: Shopify says only Plus stores can use custom apps that contain Function APIs, and checkout UI extensions for the information, shipping and payment steps are Plus only. Shopify also releases a new API version every quarter, so maintenance is a real, recurring cost. These are market ranges and worked examples at an assumed $1,100 to $1,500 agency day rate, not quotes."
takeaways:
  - "Look for an existing app in the Shopify App Store first. A subscription is usually cheaper than a build for common needs."
  - "Custom apps that contain Shopify Functions only run on Shopify Plus, which lists from $3,700 AUD a month. That can change the whole business case."
  - "Integrations with ERP, 3PL, accounting and carriers are where most custom Shopify budgets go."
  - "Shopify releases API versions quarterly, each supported for at least 12 months. Budget yearly upgrade work for every custom app."
  - "Australia Post's shipping API is only available to contract customers, which affects carrier integration plans."
faqs:
  - q: "How much does a Shopify custom app cost?"
    a: "As worked examples at an assumed agency rate of $1,100 to $1,500 a day, a single purpose custom app or Function is typically $5k to $20k ex GST, an ERP or 3PL integration with stock and order sync $20k to $60k, and a custom B2B or subscription layer with checkout extensions and portals $60k to $150k."
  - q: "Do I need Shopify Plus for a custom app?"
    a: "Not for every custom app. Shopify's documentation says stores on any plan can use public apps that contain Functions, but only stores on Shopify Plus can use custom apps that contain Shopify Function APIs. Checkout UI extensions for the information, shipping and payment steps are also limited to Plus."
  - q: "What is the difference between a custom app and a public app?"
    a: "A custom app uses custom distribution: Shopify says it is installed on a single store, on several stores in the same Plus organisation, or on development stores, and cannot charge merchants through Shopify's app billing. A public app is distributed to many merchants, usually through the App Store."
  - q: "How often does a Shopify app need updating?"
    a: "Shopify releases a new API version every three months, and each stable version is supported for at least 12 months. Shopify CLI prevents deploys that target versions older than 12 months, so every custom app needs at least one upgrade review a year, and usually more."
  - q: "How much does a Shopify and Xero integration cost?"
    a: "An existing connector app is usually the cheapest option. A custom sync that handles your tax codes, payouts, refunds and multiple sales channels typically takes 10 to 20 days, about $11k to $30k at the assumed rate. Our Xero and MYOB integration service covers the details."
sources:
  - title: "Shopify pricing (Australia)"
    url: "https://www.shopify.com/au/pricing"
    publisher: "Shopify"
  - title: "About Shopify Functions"
    url: "https://shopify.dev/docs/apps/build/functions"
    publisher: "Shopify"
  - title: "Checkout UI extensions"
    url: "https://shopify.dev/docs/api/checkout-ui-extensions"
    publisher: "Shopify"
  - title: "About app distribution"
    url: "https://shopify.dev/docs/apps/launch/distribution"
    publisher: "Shopify"
  - title: "About Shopify API versioning"
    url: "https://shopify.dev/docs/api/usage/versioning"
    publisher: "Shopify"
  - title: "Shipping and Tracking API: getting started"
    url: "https://developers.auspost.com.au/apis/shipping-and-tracking/getting-started"
    publisher: "Australia Post"
  - title: "Custom software development cost in Australia (2026)"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed"
  - title: "Tech contractor day rates in Australia: the 2026 guide"
    url: "https://www.resourced.com.au/articles/contractor-day-rates-australia-guide-2026"
    publisher: "Re:Sourced"
related:
  - title: "Multichannel inventory sync"
    href: "/guides/multichannel-inventory-sync"
  - title: "Shipping carrier integration"
    href: "/guides/shipping-carrier-integration"
  - title: "How much does API integration cost in Australia?"
    href: "/guides/api-integration-cost-australia"
  - title: "Retail and ecommerce software"
    href: "/industries/retail-ecommerce"
  - title: "Shopify vs custom ecommerce in Australia"
    href: "/guides/shopify-vs-custom-ecommerce"
service:
  title: "API development"
  href: "/services/api-development"
disclaimer: financial
---

## Do you need a custom app, a public app or an App Store subscription?

**Most Shopify merchants should use an existing App Store app; a custom app earns its cost when your rules are specific to your business or no app connects the systems you rely on.** The three options:

| Option | What it is | Cost shape | Best for |
|---|---|---|---|
| App Store subscription | An existing public app installed on your store | Monthly fee, set up in hours or days | Common needs: reviews, bundles, subscriptions, standard connectors |
| Custom app | An app built for your store, using custom distribution | Build cost, then hosting and maintenance | Your own pricing or fulfilment rules, private integrations, internal tools |
| Public app | An app you build and list for many merchants | Build plus App Store requirements and support | Software companies selling to merchants |

Shopify's documentation says custom distribution installs an app on a single store, on several stores in the same Plus organisation, or on development stores, and that custom apps cannot charge merchants through Shopify's app billing. The older way of creating custom apps directly in the Shopify admin is no longer available for new apps, although existing ones keep working.

## What needs Shopify Plus, and why does it matter for cost?

**Two common custom features only work on Shopify Plus: custom apps that contain Shopify Functions, and checkout UI extensions on the information, shipping and payment steps.** This is the single most important scoping check. Shopify says stores on any plan can use public apps from the App Store that contain Functions, but only Plus stores can use custom apps that contain Function APIs, and some Function capabilities are Plus only.

Functions are how you change Shopify's own logic: discounts, delivery options, payment method rules, cart validation. Checkout UI extensions add your own fields, messages or offers inside checkout.

Shopify's Australian pricing at the time of writing:

| Plan | Price per month, yearly billing (AUD) | Online card rate from |
|---|---|---|
| Basic | $42 ($56 on monthly billing) | 1.7% + 30c |
| Grow | $114 | 1.55% + 30c |
| Advanced | $431 | 1.35% + 30c |
| Plus | From $3,700 | 1.15% + 30c |

A merchant on Advanced who wants custom discount logic as a Function in a custom app faces a choice: move to Plus at a much higher platform fee, find a public app that does the job, or build the logic outside checkout. That decision is often worth more than the build itself.

## What do typical Shopify custom builds cost?

**Worked at an assumed agency rate of $1,100 to $1,500 a day, Shopify custom work ranges from about $5k for a single purpose app to $150k for a B2B or subscription layer.** The rate assumption reflects Re:Sourced's July 2026 guide, which lists Sydney senior software contractors at $800 to $1,100 a day ex GST, before agency overheads. Expeed's 2026 guide puts integrated business software at $40k to $150k, which brackets the larger builds.

| Build | Typical scope | Effort | Cost range (AUD, ex GST) |
|---|---|---|---|
| Single purpose app or Function | Discount or shipping logic, metafield tools, an admin screen for staff | 5 to 15 days | $5k to $20k |
| Back office integration | Two way sync of orders, stock and fulfilment with an ERP or 3PL; accounting sync | 18 to 45 days | $20k to $60k |
| B2B or subscription layer | Account pricing, approval flows, checkout extensions, customer portal, ERP integration | 50 to 110 days | $60k to $150k |

## What do integrations with Australian systems involve?

**Integrations with ERP, 3PL, accounting and carriers are where most custom Shopify budgets go, because each system has its own data model, limits and failure modes.**

- **ERP and inventory.** Stock levels, product data and orders flow between Shopify and systems such as Cin7, Unleashed, NetSuite or Dynamics. The work is mostly about which system is the source of truth for each field. See our guide to [multichannel inventory sync](/guides/multichannel-inventory-sync).
- **3PL.** Orders out to the warehouse, tracking and stock back. Most Australian 3PLs have an API or file exchange, and quality varies.
- **Accounting.** Payouts, fees, refunds and GST codes into Xero or MYOB so the books reconcile. Our [Xero and MYOB integration](/services/xero-myob-integration) service covers this.
- **Carriers.** Australia Post says its Shipping and Tracking API is only available to contract customers, so you need a parcel contract with Australia Post or StarTrack and a MyPost account. Our [shipping carrier integration guide](/guides/shipping-carrier-integration) compares the options.

### Worked example: a 3PL and Xero integration for a homewares brand

A hypothetical brand on Shopify Grow sends orders to a Melbourne 3PL and reconciles in Xero. Scope: discovery and field mapping (4 days), order export to the 3PL with retries and error alerts (7 days), stock and tracking import from the 3PL (6 days), Xero sync of payouts, fees, refunds and GST (8 days), an admin screen showing failed syncs (3 days), testing with real orders and launch (4 days). Total 32 days, or $35,200 to $48,000 ex GST. Because none of this touches checkout, it does not need Plus.

## What does it cost to keep a custom app working?

**Shopify releases a new API version every quarter and supports each for at least 12 months, so every custom app needs planned upgrade work, not just bug fixes.** Shopify says new versions are released every three months at 5pm UTC on the first day of the quarter, each stable version is supported for a minimum of 12 months, and consecutive versions overlap by at least nine months. Shopify CLI prevents deploys that target versions older than 12 months.

In practice, budget for:

1. **An upgrade review each quarter** to read the release notes and check what your app uses.
2. **At least one upgrade a year** to a newer version, with testing against real orders.
3. **Monitoring and alerts** for failed webhooks and syncs, because silent failures cost more than outages.
4. **Hosting** for the app's server and database, usually modest for a single store.

As a planning assumption, maintenance runs at 15% to 20% of the build cost a year. Our [software maintenance cost guide](/guides/software-maintenance-cost) explains where that figure comes from, and our [software maintenance and support](/services/software-maintenance-support) service covers how we handle it.

## How can you keep the scope and the risk down?

**The cheapest custom app is the one that does one job well, stores as little customer data as possible and stays out of checkout unless it has to be there.** Practical ways to keep the build small:

- **Keep logic outside checkout where you can.** Validating an order after it is placed, or adjusting it in the back office, avoids the Plus requirement and the checkout design rules.
- **Read data from Shopify rather than copying it.** Every customer record your app stores in its own database is personal information you must secure, and if your business is covered by the Privacy Act, protect under APP 11. Our guide to [the Privacy Act for small business software](/guides/privacy-act-small-business-software) explains when it applies.
- **Use webhooks with retries and a dead letter queue** rather than frequent polling, so failures are visible and recoverable.
- **Ship one integration at a time.** Stock sync first, then orders, then accounting. Each stage proves the data mapping before the next one depends on it.
- **Write down the source of truth for each field**, such as price in the ERP and stock in the 3PL, before any code is written.

## What will it cost over three years?

**For a common need, App Store connectors are usually cheaper over three years; a custom integration wins when connectors cannot handle your rules and staff time is being spent fixing the gaps.** Assumptions, not quotes: the 3PL and Xero integration above; connector apps at an assumed $150 to $400 a month combined, plus 2 to 5 days of setup; custom hosting at $1.2k to $3.6k a year; maintenance at 15% to 20% of build from year 2. Staff time is left out, and it is often the deciding factor.

| Option | Year 1 | Years 2 and 3 | 3 year total |
|---|---|---|---|
| App Store connectors | $4k to $12.3k | $3.6k to $9.6k | $7.6k to $21.9k |
| Custom integration | $36.4k to $51.6k | $13k to $26.4k | $49.4k to $78k |

If connectors leave someone fixing orders or reconciling payouts by hand for five hours a week, that is about 780 hours over three years. At an assumed $50 an hour, roughly $39,000, which closes much of the gap. Count your own hours before deciding.

## How AWLabs approaches Shopify custom apps

We start with a Development Consult, then a paid Discovery Audit, credited in full against the build, that checks your plan, the App Store options and the systems involved, so you do not build what an existing app already does. If custom is justified, you receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. See our [API development](/services/api-development) service, our [retail and ecommerce](/industries/retail-ecommerce) page and our [API integration cost guide](/guides/api-integration-cost-australia).
