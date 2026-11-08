---
title: "Australia Post and StarTrack API integration: a practical guide"
metaTitle: "Australia Post API Integration: StarTrack, Labels, Tracking"
description: "How to integrate the Australia Post Shipping and Tracking API and StarTrack, or go through Shippit or Starshipit: the workflow, rate limits and test steps."
eyebrow: "Integration guide"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "Australia Post's Shipping and Tracking API is only available to eParcel and StarTrack contract customers. You register on the Developer Centre, build against a test bed, send Australia Post a sample PDF label and order summary, and then get production access. The workflow is shipments, then labels, then one order per pickup with a signed order summary (manifest). Smaller senders without a contract usually integrate through an aggregator such as Shippit or Starshipit instead, which also gives one API across several carriers."
takeaways:
  - "No eParcel or StarTrack contract means no direct Shipping and Tracking API. Use an aggregator or a platform partner instead."
  - "Australia Post expects one order per pickup per merchant, so batch the day's shipments into one order before collection."
  - "Track Items is limited to 10 requests per minute with up to 10 tracking IDs each, so poll in batches or use an aggregator's webhooks."
  - "Production access is granted after Australia Post validates a test bed label and order summary, and printed labels if you make your own."
  - "Dangerous goods need item level flags and declarations, with different fields for StarTrack, Parcel Post and Express Post by air."
faqs:
  - q: "How do I get an Australia Post API key?"
    a: "For postcode lookups and standard postage calculation, register for a PAC and Postcode Search API key on the Australia Post Developer Centre and it is emailed to you. For the Shipping and Tracking API you need an eParcel or StarTrack contract; you register your interest with your account numbers and Australia Post contacts you about eligibility, test bed credentials and production access."
  - q: "Can I use the Australia Post API with MyPost Business?"
    a: "The Shipping and Tracking API is limited to eParcel and StarTrack contract customers. MyPost Business senders typically connect through an ecommerce platform or a shipping aggregator that supports it. Check the current Developer Centre and your aggregator's carrier list, because options change."
  - q: "Do I need a developer to connect Shopify to Australia Post?"
    a: "Usually not. Shopify and WooCommerce stores can use an Australia Post eCommerce partner or an aggregator app. Custom development makes sense when orders come from an ERP, a B2B portal or several channels, or when you need rules the apps cannot express."
  - q: "How often can I call the Australia Post tracking API?"
    a: "The Track Items API is rate limited to 10 requests per minute, with up to 10 tracking IDs per request. Exceeding a limit returns HTTP 429 for the rest of the window. Design tracking as a batched background job, not a call per page view."
  - q: "Is StarTrack a separate API?"
    a: "StarTrack Premium and Express shipments go through the same Australia Post Shipping and Tracking API, using your StarTrack account number and StarTrack specific fields such as packaging type. StarTrack shipments are consolidated by default unless you set the consolidate field to false."
  - q: "What does an aggregator like Starshipit cost in API terms?"
    a: "Starshipit's API documentation lists a developer subscription at two requests per second and a production subscription, which requires approval, at twenty per second. Pricing for the platform itself is on its website; check it against your monthly order volume."
sources:
  - title: "Australia Post Developer Centre: APIs"
    url: "https://developers.auspost.com.au/apis"
    publisher: "Australia Post"
  - title: "Shipping and Tracking API: getting started"
    url: "https://developers.auspost.com.au/apis/shipping-and-tracking/getting-started"
    publisher: "Australia Post"
  - title: "Shipping and Tracking API: integration workflows"
    url: "https://developers.auspost.com.au/apis/shipping-and-tracking/info/integration/workflows"
    publisher: "Australia Post"
  - title: "Shipping and Tracking API: tracking"
    url: "https://developers.auspost.com.au/apis/shipping-and-tracking/info/api-resources/tracking"
    publisher: "Australia Post"
  - title: "Shipping and Tracking API: FAQ"
    url: "https://developers.auspost.com.au/apis/shipping-and-tracking/info/api-resources/faq"
    publisher: "Australia Post"
  - title: "StarTrack specifics"
    url: "https://developers.auspost.com.au/apis/shipping-and-tracking/info/product-business-rules/startrack-specifics"
    publisher: "Australia Post"
  - title: "Dangerous goods declaration"
    url: "https://developers.auspost.com.au/apis/shipping-and-tracking/info/product-business-rules/dangerous-goods-declaration"
    publisher: "Australia Post"
  - title: "Backoff policy recommendations"
    url: "https://developers.auspost.com.au/apis/shipping-and-tracking/info/technical-notes/backoff-policy-recommendations"
    publisher: "Australia Post"
  - title: "Starshipit API documentation"
    url: "https://api-docs.starshipit.com/"
    publisher: "Starshipit"
  - title: "Shippit Developer Centre"
    url: "https://developer.shippit.com/"
    publisher: "Shippit"
related:
  - title: "ABN Lookup, address validation and other Australian data APIs"
    href: "/guides/australian-business-data-apis"
  - title: "Courier software"
    href: "/solutions/courier-software"
  - title: "3PL warehouse software"
    href: "/solutions/3pl-warehouse-software"
  - title: "How much does API integration cost in Australia?"
    href: "/guides/api-integration-cost-australia"
service:
  title: "API development and integration"
  href: "/services/api-development"
---

## Which Australia Post APIs can you actually use?

**It depends on your account: the Shipping and Tracking API (labels, orders, manifests, tracking, contract rates) is only available to eParcel and StarTrack contract customers, while the PAC and Postcode Search API is open to anyone who registers for a key.** Australia Post's FAQ states you need either an eParcel contract or a StarTrack contract with Premium and/or Express products. The Delivery Choices API, which lets customers choose delivery speed, location or time in a cart, requires you to meet eParcel contract minimums.

| Your situation | Realistic route |
|---|---|
| Small store, no contract, a few hundred parcels a month | Ecommerce app or aggregator; no direct API |
| eParcel or StarTrack contract, orders in Shopify or WooCommerce | An Australia Post eCommerce partner or an aggregator |
| Contract account, orders in an ERP, WMS or custom portal | Direct Shipping and Tracking API integration |
| Several carriers, with rules on which carrier ships what | Aggregator API, or a custom rate shopping layer over direct APIs |
| You need postcode or suburb validation and retail postage quotes | PAC and Postcode Search API |

If you are a developer building for a client, Australia Post asks that the customer completes the registration form, because the key is tied to their account numbers.

## Should you go direct or use an aggregator?

**Go direct when you have a contract, ship mostly with Australia Post or StarTrack, and need the integration inside your own system; use an aggregator when you ship with several carriers or do not want to own carrier specific code.** Aggregators such as Shippit, Starshipit, Sendle and Machship put one API over many carriers.

What each layer gives you, based on their published documentation at the time of writing:

- **Australia Post direct.** Full control, your contract rates, StarTrack in the same API. You own the workflow, rate limits and changes.
- **Shippit.** Quote, order, label, book, track (including tracking webhooks), returns and merchant settings APIs.
- **Starshipit.** Create order and create label print APIs, webhooks for tracking numbers, and published rate limits of two requests per second on a developer subscription and twenty on an approved production subscription.
- **Machship.** A freight management platform with a developer API, aimed at businesses booking across many freight carriers.

The trade off is control against maintenance. An aggregator absorbs carrier API changes and gives you multi carrier rate shopping, but you inherit its data model, its pricing and its outage. A direct integration is cheaper per parcel at scale and keeps the data in your system, but every new carrier is another project.

## What is the order of operations for a direct integration?

**Create shipments as orders are packed, generate labels, combine the day's shipments into one order before pickup, then print and sign the order summary.** Australia Post's systems accept one order per pickup from each merchant, and the documentation recommends printing labels before creating the order.

The standard workflow maps to these calls on the Shipping and Tracking API:

1. **Check the account.** `GET /shipping/v1/accounts/{account_number}` confirms the products and features your contract allows. Cache the result.
2. **Price (optional).** Get item or shipment prices to show the customer, or to choose between services.
3. **Create shipments.** `POST /shipping/v1/shipments` with sender, receiver, items, dimensions, product code and references. Create them throughout the day as parcels are packed.
4. **Create labels.** `POST /shipping/v1/labels` returns label files. You can also create labels in your own system, but Australia Post then needs a printed sample to check against its processing machinery.
5. **Create the order.** `POST /shipping/v1/orders` with the array of shipment IDs, once per pickup.
6. **Get the order summary.** `GET /shipping/v1/orders/{order_id}/summary` returns a PDF. The physical document must be signed and handed over when you lodge parcels.

Australia Post also supports variations, such as creating all shipments in one bulk transaction and printing labels as a batch, and recommends that shipping platforms build for all of them.

**StarTrack differences.** StarTrack shipments need a packaging type (StarTrack's unit type), and the consolidate field defaults to true, meaning a new shipment that matches an open one on the matching rules is merged into it rather than created separately. If your system expects one shipment ID per order, set consolidate to false explicitly, or design for consolidation.

### Getting to production

You build against the test bed with credentials Australia Post provides, passing your account number as a header. To move to production you send a PDF label and a PDF order summary generated through the test bed; if you print your own labels, a printed sample too. Australia Post validates them and then enables production access. Allow for that round trip in your launch plan.

## How should tracking and notifications work?

**Poll tracking in batches on a schedule, store every event, and drive customer notifications from your own event table, not from live calls.** The Track Items API is limited to 10 requests per minute with up to 10 tracking IDs per request; going over returns HTTP 429 for the rest of the window. That is up to 100 items a minute per set of credentials, which is fine for a nightly or hourly job and hopeless for a "where is my order" page that calls the API on every view.

If you update order status in an ecommerce platform, Australia Post recommends showing the tracking number on the order and linking to its tracking page. For branded tracking pages and SMS updates, aggregators with tracking webhooks save a lot of polling code; if you send SMS updates, our [business SMS rules guide](/guides/business-sms-rules-australia) covers sender IDs and consent.

For outages, Australia Post's backoff guidance is specific: if you see elevated 5xx errors for more than 5 minutes, drop to no more than one request a minute; if it persists after an hour, check its API status page or contact support; resume normal calls after 5 minutes without errors. Build that into a retry queue rather than letting a packing station hang.

## Address quality, PO boxes and parcel lockers

**Most failed labels and returned parcels trace back to address data, so validate addresses at checkout and keep them structured.** Use postcode and suburb validation from the PAC and Postcode Search API, or a G-NAF based autocomplete, and store unit, street number, street, suburb, state and postcode separately. Our [Australian data APIs guide](/guides/australian-business-data-apis) compares the address sources.

Then add business rules your carrier will not apply for you: flag PO Box and parcel locker addresses for services that cannot deliver to them, block dangerous goods to destinations or services that cannot carry them, and keep a delivery instructions field short enough to fit on the label.

## Dangerous goods, international shipments and customs data

**Dangerous goods need item level data, and the fields differ by service.** From the Australia Post documentation:

- **StarTrack Premium and Road Express** require full dangerous goods details in the shipment's `dangerous_goods` block.
- **Australia Post Parcel Post** needs each affected item flagged with `contains_dangerous_goods`, whether or not it travels by air.
- **Express Post** also needs `transportable_by_air` and a `dangerous_goods_declaration` code from a fixed list, for example lithium ion batteries contained in equipment (UN3481) or dry ice (UN1845). Some of those, including lithium batteries in equipment, cannot be returned by Express Post and must come back by Parcel Post.

Store the UN number and classification on the product record, not the order, so packing staff never have to decide. International shipments add customs data (description, tariff code, value, origin) per item; keep it on the product too, and check the international export rules in the Developer Centre before you go live.

## Shopify, WooCommerce and ERP integrations

**For a single storefront, an app or aggregator is usually the right answer; custom work pays off when orders come from several systems or need rules.** Typical reasons to build:

- Orders come from an ERP, a B2B ordering portal and a marketplace, and must be shipped from one screen.
- Carrier choice depends on weight, cubic size, destination zone, stock location or customer contract.
- Shipping costs must post back to accounting against each order, through our [Xero and MYOB integration](/services/xero-myob-integration) work or your ERP.
- A warehouse runs its own pick, pack and dispatch flow, as in [3PL warehouse software](/solutions/3pl-warehouse-software).

## What does it cost, and what breaks most often?

**Indicative build ranges, AUD ex GST at typical agency rates of about $1,100 to $1,500 a day. These are ranges, not quotes.**

| Scope | Typical effort | Indicative range |
|---|---|---|
| Aggregator API connected to one order system, labels and tracking webhooks | 4 to 8 days | $5k to $12k |
| Direct Australia Post and StarTrack integration, full workflow and test bed sign off | 10 to 20 days | $11k to $30k |
| Multi carrier rate shopping with rules, dangerous goods and returns | 20 to 40 days | $22k to $60k |

The usual failure points, and how to prevent them:

| Problem | Typical cause | Prevention |
|---|---|---|
| Labels rejected at creation | Missing dimensions, product not on the contract, address fields too long | Check account features, validate before calling |
| Duplicate or merged StarTrack shipments | Consolidation on by default | Set consolidate explicitly |
| Tracking stops updating | Rate limit hit, 429 ignored | Batch polling, back off on 429 |
| Pickup refused or delayed | Order not created or summary not printed | Automate end of day order creation |
| Integration fails after a carrier change | Field, product or contract changes | Monitor errors, read release notes |

## How AWLabs approaches carrier integrations

We map your order sources, carriers and packing process first, then choose between an aggregator and direct APIs on cost and control rather than habit. Senior engineers lead every build, and the integration ships with retry queues, monitoring and an end of day job. For logistics heavy operations see [logistics software development](/solutions/logistics-software-development) and our [retail and ecommerce](/industries/retail-ecommerce) page, or start with [API development and integration](/services/api-development).
