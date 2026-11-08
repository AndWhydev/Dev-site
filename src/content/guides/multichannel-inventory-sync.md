---
title: "How to sync inventory across sales channels without overselling"
metaTitle: "How to Sync Inventory Across Channels (Without Overselling)"
description: "A guide to multichannel inventory sync for Australian sellers: source of truth, Shopify and Amazon API limits, buffers, bundles and the nightly check."
eyebrow: "Technical guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "To sync inventory across Shopify, Amazon, eBay, wholesale and retail POS, pick one system as the source of truth for available stock, push changes to every channel as events (not on a slow polling schedule), hold a safety buffer per channel, and run a full reconciliation every night. Overselling comes from delay and race conditions, so the details that matter are each channel's rate limits, using conditional updates where the API supports them, and treating bundles and multi warehouse stock as calculated values, not stored ones."
takeaways:
  - "Overselling is a timing problem. The gap between a sale on one channel and the update on the others is where it happens."
  - "Choose one source of truth for available stock and make every other channel a subscriber to it."
  - "Shopify's REST Admin API has been legacy since October 2024; new public apps must use GraphQL, which supports compare and swap inventory updates."
  - "Amazon's Listings Items API allows about 5 requests per second per seller and app pair, so large catalogues need batching and queues."
  - "Calculate bundle and kit availability from components, and keep per channel buffers for slow or unreliable channels."
  - "Under the Australian Consumer Law, offering goods you know you cannot supply, or misstating stock, can be misleading."
faqs:
  - q: "What is the best way to sync inventory between Shopify and Amazon?"
    a: "Make one system the source of truth, usually your inventory system or ERP, and have it push available quantities to both channels when stock changes. Use Shopify's GraphQL Admin API inventory mutations and Amazon's Listings Items or feeds APIs within their rate limits, and run a nightly full comparison to catch anything missed."
  - q: "How often should inventory sync?"
    a: "On every change, as close to real time as the channel allows, with a scheduled full reconciliation at least daily. A sync every 15 or 30 minutes is where most overselling comes from during busy periods."
  - q: "Do I need custom software, or will Cin7 or Linnworks do it?"
    a: "For most sellers with standard products, an off the shelf tool is cheaper and faster. Custom sync is justified when your products, channels or rules do not fit the tool, for example made to order components, complex bundles, wholesale allocations, or a channel the tool does not support."
  - q: "What is a stock buffer?"
    a: "A buffer is a number of units you hold back from a channel's available quantity, so that delays on that channel do not lead to overselling. A product with 10 units might show 10 on your own site and 8 on a marketplace."
  - q: "What should we do when we oversell?"
    a: "Tell the customer promptly, give them the option of a refund or a realistic new date, and fix the cause. Under the Australian Consumer Law, offering goods you know you cannot supply, or misstating stock or delivery times, can be misleading, and you should keep customers updated if timeframes change."
sources:
  - title: "Shopify API rate limits"
    url: "https://shopify.dev/docs/api/usage/rate-limits"
    publisher: "Shopify"
  - title: "REST Admin API reference (legacy notice)"
    url: "https://shopify.dev/docs/api/admin-rest"
    publisher: "Shopify"
  - title: "inventorySetQuantities mutation"
    url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities"
    publisher: "Shopify"
  - title: "Listings Items API rate limits"
    url: "https://developer-docs.amazon.com/sp-api/docs/listings-items-api-rate-limits"
    publisher: "Amazon Selling Partner API"
  - title: "Marketplace IDs"
    url: "https://developer-docs.amazon.com/sp-api/docs/marketplace-ids"
    publisher: "Amazon Selling Partner API"
  - title: "API call limits"
    url: "https://developer.ebay.com/develop/get-started/api-call-limits"
    publisher: "eBay Developers Program"
  - title: "False or misleading claims"
    url: "https://www.accc.gov.au/business/advertising-and-promotions/false-or-misleading-claims"
    publisher: "ACCC"
related:
  - title: "How much does API integration cost in Australia?"
    href: "/guides/api-integration-cost-australia"
  - title: "Australia Post and StarTrack API integration"
    href: "/guides/shipping-carrier-integration"
  - title: "Retail chain software"
    href: "/solutions/retail-chain-software"
  - title: "Build vs buy software"
    href: "/guides/build-vs-buy-software"
service:
  title: "API development and integration"
  href: "/services/api-development"
---

## Why does overselling happen?

**Overselling happens in the gap between a sale on one channel and the stock update reaching every other channel.** If that gap is 15 minutes and you sell the last unit on Amazon, your website and eBay keep offering it for 15 minutes. On a quiet Tuesday that rarely matters. During a sale or a marketplace promotion, it is where the refunds and bad reviews come from.

Three mechanisms cause nearly all of it:

1. **Polling delay.** A connector checks each channel for orders every few minutes, then updates stock. Every minute of interval is a minute of exposure.
2. **Race conditions.** Two orders for the last unit arrive on different channels within seconds. Both systems read "1 available", both accept, and both write "0".
3. **Lost updates.** A channel API times out or throttles a stock update, the connector does not retry, and that channel stays wrong until someone notices.

Good sync design attacks each one: events instead of polling, conditional writes instead of blind overwrites, and queues with retries plus a nightly true up.

## Which system should be the source of truth?

**One system owns the available quantity, and every channel reads from it; the right owner is whichever system already knows about every unit that comes in and goes out.**

| Business shape | Usual source of truth | Why |
|---|---|---|
| Online only, one warehouse, mostly Shopify | Shopify, with marketplaces as subscribers | It already holds orders and stock; simplest to run |
| Several channels plus wholesale | Inventory management system (for example Cin7, Unleashed or Linnworks) | Built to allocate stock across channels and price lists |
| Manufacturing, assembly or many locations | ERP | Only the ERP knows about work orders, receipts and transfers |
| Retail stores plus online | POS platform or ERP, depending on which records store sales first | Store sales must reduce online availability immediately |

Two rules apply whatever you choose. Channels never write stock back to the source except through orders and returns. And every adjustment (receipt, stocktake, damage, transfer) is recorded in the source, not edited directly on a channel.

## When is off the shelf sync enough?

**For most sellers with standard products and mainstream channels, a dedicated inventory or listing tool is the cheaper answer, and you should start there.** These tools already maintain connectors to Shopify, Amazon, eBay and the large marketplaces, and they absorb the work when those APIs change.

Their limits show up in predictable places:

- Bundles built from components with their own stock, or products made to order from parts.
- Allocation rules, for example reserving stock for wholesale accounts or a key retailer.
- A channel or B2B portal the tool does not connect to.
- Sync frequency on lower tiers that is too slow for your sales velocity.
- Business logic that lives in another system, such as an ERP that must approve allocations.

If two or more of those apply, a small custom service alongside the tool often costs less than forcing the tool to fit. Our [build vs buy guide](/guides/build-vs-buy-software) covers that decision more generally.

## How should bundles, variants and multiple warehouses work?

**Store stock only for physical units at physical locations, and calculate everything else.** A bundle of three items is available in the quantity of its scarcest component, divided by how many of that component the bundle uses. If you store a separate stock number for the bundle, it will drift.

Worked example: a gift pack contains 2 candles and 1 diffuser. You have 9 candles and 6 diffusers. Pack availability is the lower of 9 ÷ 2 (4, rounded down) and 6 ÷ 1 (6), so 4 packs. Selling one candle on its own leaves 8 candles, so still 4 packs; selling a second leaves 7, which drops packs to 3. Your sync service must recalculate and push the pack quantity whenever any component changes.

For multiple warehouses, decide per channel which locations can fulfil it. Shopify models locations natively; marketplaces usually want a single number per listing, so you send the sum of the eligible locations minus the buffer.

**Buffers.** Hold back a few units per channel where updates are slow or the cost of overselling is high, such as marketplaces that penalise cancellations. Show the full quantity on your own site, where you control the checkout.

## What are the channel specifics to design around?

**Each channel has its own API style, limits and penalties, so the sync service needs a small adapter per channel rather than one generic connector.** At the time of writing:

| Channel | Inventory API facts that shape the design |
|---|---|
| Shopify | The REST Admin API has been legacy since 1 October 2024, and new public apps must use the GraphQL Admin API since 1 April 2025. Most limits use a leaky bucket; on a throttle, back off (Shopify recommends one second). The `inventorySetQuantities` mutation supports compare and swap through `changeFromQuantity`, and from API version 2026-04 requires an idempotency key. |
| Amazon (Australian marketplace ID A39IBJ37TRP1C6) | The Listings Items API v2021-08-01 allows 5 requests per second per seller and application pair for `patchListingsItem`, with a burst of 5. A catalogue of 20,000 SKUs therefore takes over an hour to update one by one, so use batched feeds for bulk changes and the Listings API for urgent single SKU updates. |
| eBay | The Inventory API has a default limit of 2 million calls per day per application. Daily limits are generous; the issue is usually keeping offers and inventory items aligned. |
| Your own site or B2B portal | Read stock from the source of truth at checkout and reserve it on order creation, so your own checkout never oversells. |

Note the Shopify detail, because it solves the race condition. With compare and swap you send the quantity you expect to be there; if another update got in first, Shopify rejects the write and you read the quantity again and retry, instead of silently overwriting a newer value.

## How do you build a custom sync service?

**Model it as an event pipeline: every stock change becomes an event, a queue delivers it to each channel adapter, and each adapter retries until the channel confirms.**

1. **Capture events.** Orders, cancellations, returns, receipts and adjustments from the source of truth, by webhook where available.
2. **Recalculate.** For each affected SKU, compute available quantity per channel: on hand, minus reserved, minus buffer, with bundles derived from components.
3. **Queue per channel.** One queue per channel so a slow marketplace never delays your website.
4. **Write conditionally.** Use compare and swap or version checks where supported; include idempotency keys so retries do not double apply.
5. **Respect limits.** Rate limit each adapter to the channel's published limits and back off on throttling responses.
6. **Record outcomes.** Store the last confirmed quantity per SKU per channel, with a timestamp.

Hosting is modest: a small backend service, a managed queue and a database. Our [backend development](/services/backend-development) team builds these on AWS, Azure or Google Cloud in Australian regions.

## What should monitoring and the nightly true up do?

**Every night, compare the source of truth with every channel's actual listed quantity, fix differences, and report them.** Real time sync will miss things: a webhook that never fired, an update dropped during a channel outage, a manual edit on a marketplace. The true up is your safety net.

A useful daily report lists SKUs that differed, by channel, with the size of the difference. A handful is normal. A steady pattern on one channel points to a bug in that adapter. Alert immediately, not nightly, when a queue backs up, when a channel returns errors for more than a few minutes, or when a SKU's listed quantity on any channel is higher than total stock on hand.

## What should happen when you oversell anyway?

**Treat it as a customer service event with a legal edge, and build the handling into the order flow rather than leaving it to whoever notices.** The ACCC lists offering goods you know you cannot supply, and making false or misleading claims about whether goods are in stock or when they will be supplied, among the conduct businesses must avoid. It also expects businesses to keep consumers updated when a promised timeframe changes.

In software terms, that means three things. Flag any order that takes a SKU below zero the moment it happens, not at picking time. Give staff a one click path to contact the customer with a refund or a realistic new date. And record the cause against the channel, so the nightly report shows whether one adapter is responsible.

## What does it cost, and when is custom justified?

**Indicative ranges, AUD ex GST, at typical agency rates of about $1,100 to $1,500 a day. These are ranges, not quotes.**

| Scope | Typical effort | Indicative range |
|---|---|---|
| Configure an off the shelf tool, plus one custom connector | 5 to 10 days | $6k to $15k |
| Custom sync service for 2 to 3 channels, with buffers, queues and nightly true up | 15 to 30 days | $17k to $45k |
| Multi warehouse, bundles from components, wholesale allocation and B2B portal | 30 to 60 days | $33k to $90k |

Custom is justified when overselling or manual stock work is costing more than the build, or when your rules simply cannot be expressed in the tool. If you are not there yet, use the tool and revisit later. Our [API integration cost guide](/guides/api-integration-cost-australia) explains how integration ranges are built.

## How AWLabs approaches inventory sync

We start with your stock flows: where units come in, where they go out, and which system sees each movement first. Then we decide whether a tool, a custom service or both is the right answer, and say so if the tool is enough. Senior engineers lead every build, and every sync service ships with the nightly true up and alerting. See our [retail and ecommerce](/industries/retail-ecommerce) page, or start with [API development and integration](/services/api-development).
