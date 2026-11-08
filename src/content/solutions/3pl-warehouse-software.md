---
title: "3PL warehouse software in Australia: billing, retailer labels and client portals"
metaTitle: "3PL Warehouse Software in Australia: Billing and Portals"
description: "3PL warehouse software in Australia: activity billing, GS1 SSCC labels and EDI for retailers, ecommerce integrations, ABF licensed warehouses and portals."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "A 3PL's software problem is usually billing and client visibility, not the warehouse floor. 3PL platforms such as CartonCloud already offer rate cards, automated invoicing, customer portals and EDI, so check them before building. Custom work pays where client contracts carry unusual charges, where retailers demand GS1 SSCC labels and EDI despatch advice in their own format, or where bonded stock under an ABF warehouse or depot licence needs separate accounting. Typical builds sit in an indicative $20,000 to $100,000 (AUD, ex GST) market range."
takeaways:
  - "Choose a 3PL platform on its billing engine and client portal first; most WMS products can pick and pack well enough."
  - "GS1 SSCC logistic labels in GS1-128 format identify pallets and cartons, and GS1 maintains the EANCOM and GS1 XML standards used for EDI messages such as despatch advice."
  - "An ABF licensed warehouse holder is liable for unpaid duty if goods are not kept and accounted for, so bonded stock needs its own audit trail."
  - "Depot licences are for short term storage: goods can stay until the end of the month after the month they arrived, unless the ABF grants an extension."
  - "Packing and loading make a 3PL a party in the heavy vehicle Chain of Responsibility, so declared weights and loading times should be recorded."
faqs:
  - q: "What is the best 3PL warehouse management software in Australia?"
    a: "There is no single answer, but shortlist on three tests: can it bill every charge in your client contracts without a spreadsheet, does its client portal show what your clients ask about, and does it already support the EDI and labels your retail clients' customers demand. CartonCloud is built for 3PLs and supports customers in Australia; Mintsoft, Datapel and Logiwa are also used locally, and Manhattan and Körber suit large operations."
  - q: "Why is 3PL billing so hard?"
    a: "Because every client contract is slightly different. Storage might be per pallet per week, per cubic metre or per bin; handling might be per order, per line, per unit or per carton; and accessorials such as relabelling, kitting, urgent dispatch or returns are priced client by client. If the system can't count an activity, it can't bill it, and that leakage is often the largest avoidable loss in a 3PL."
  - q: "Do we need an ABF licence to store imported goods?"
    a: "Only if you hold goods that have not been cleared for home consumption. A licensed warehouse is used for longer term storage that defers duty and taxes; a licensed depot holds goods moved off the wharf or airport for short term storage, unpacking or deconsolidation. If you only store goods after customs clearance, neither licence is needed."
  - q: "Can we give each client their own portal?"
    a: "Yes, and it is one of the most valued features in a 3PL relationship. A good portal shows stock on hand, inbound receipts, order status, dispatches with tracking and the charges building up this month. Many platforms include one; a custom portal makes sense when you want to combine several systems or show charges in the client's own contract terms."
  - q: "Have you built 3PL software before?"
    a: "No. AWLabs has not yet delivered a project for a 3PL, so we won't claim sector experience. We bring billing logic, integration and portal engineering, and we would work from your client contracts, your WMS data and the GS1 and ABF documentation."
sources:
  - title: "CartonCloud logistics software for 3PLs"
    url: "https://www.cartoncloud.com/"
    publisher: "CartonCloud"
  - title: "Logistics Labelling Tool"
    url: "https://www.gs1au.org/services/tools/logistics-labelling-tool"
    publisher: "GS1 Australia"
  - title: "GS1 Electronic Data Interchange (EDI) standards"
    url: "https://www.gs1au.org/standards/gs1-edi"
    publisher: "GS1 Australia"
  - title: "Warehouse licence overview"
    url: "https://www.abf.gov.au/licensing/warehouses/overview"
    publisher: "Australian Border Force"
  - title: "Depot licence overview"
    url: "https://www.abf.gov.au/licensing/depots/overview"
    publisher: "Australian Border Force"
  - title: "Parties in the CoR"
    url: "https://www.nhvr.gov.au/safety-accreditation-compliance/chain-of-responsibility/the-primary-duty/parties-in-the-cor"
    publisher: "National Heavy Vehicle Regulator"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Logistics software for Chain of Responsibility and the HVNL"
    href: "/solutions/logistics-software-development"
  - title: "Wholesale distribution software in Australia"
    href: "/solutions/wholesale-distribution-software"
  - title: "Freight forwarding software in Australia"
    href: "/solutions/freight-forwarder-software"
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
service:
  title: "API development and integrations"
  href: "/services/api-development"
industry:
  title: "Logistics and transport"
  href: "/industries/logistics-transport"
disclaimer: "legal"
---

## Do you need a new WMS, or better billing and visibility?

**For most third party logistics providers the warehouse floor works; the money leaks in billing and the client relationship strains on visibility.** That is the test to apply before anyone proposes a new system.

A WMS is built to receive, put away, pick, pack and dispatch. A 3PL platform adds two things a single company warehouse never needs: a way to charge many clients for many kinds of activity, and a way for each client to see its own stock and orders without phoning you. When a 3PL outgrows its software, it is nearly always one of those two that breaks first.

Check what the market already offers. CartonCloud, a platform aimed at 3PLs with support in Australia, describes a billing engine that calculates charges from warehouse and transport activity, rate cards configurable by client, service, pallet, order, distance or custom logic, automated invoices, a customer portal and EDI for larger clients. Mintsoft, Datapel, Logiwa and the enterprise suites from Manhattan and Körber cover overlapping ground. If one of them fits your contracts, buy it.

Custom work fits in a narrower set of cases:

- Your contracts carry charges the platform can't express, so staff still finish invoices in Excel.
- You run more than one WMS or site and want one billing and portal layer across them.
- A retail client's customer imposes label or EDI rules your platform doesn't support.
- Bonded and cleared stock need separate accounting your platform doesn't model.

## How should activity based billing work?

**Every billable event should be captured as data at the moment it happens, priced by the client's own rate card, and reviewable before the invoice goes out.** The common failure is that some activities are recorded only on paper or in a picker's memory, so they never reach the invoice.

Typical charge types in a 3PL contract:

| Charge type | Usual unit | Where the data comes from |
|---|---|---|
| Storage | Pallet per week, cubic metre, bin or shelf | Daily stock snapshot by location type |
| Inbound handling | Per pallet, per carton, per container unpacked | Receipt records, container unpack tasks |
| Pick and pack | Per order, per line, per unit | Order and pick confirmations |
| Outbound | Per carton, per pallet, per consignment | Despatch records and carrier labels |
| Accessorials | Relabelling, kitting, urgent orders, returns, photos | Task records, often the weakest data |
| Minimums and fees | Monthly minimum, account fee | Contract terms |

A worked example with illustrative rates, not market data: a client stores an average of 120 pallets at $4.50 per pallet per week for 4 weeks ($2,160), receives 30 pallets at $9 each ($270), ships 1,800 orders at $2.20 per order plus 2,700 extra lines at $0.40 ($3,960 plus $1,080), and requests 6 hours of relabelling at $65 an hour ($390). The month's invoice is $7,860 ex GST. If the relabelling was never recorded as a task, $390 vanishes, and across 40 clients that adds up quickly.

The billing layer should hold each client's rate card with effective dates, run the calculation daily so charges build up visibly, flag activities with no matching rate, and let an account manager review and adjust before posting to Xero or MYOB. Our [Xero and MYOB integration](/services/xero-myob-integration) service covers the accounting end.

## What do retailers expect on labels and ASNs?

**Retail customers often require pallets and cartons to carry a GS1 logistic label with a Serial Shipping Container Code, and many expect an electronic advance shipping notice before the truck arrives.** GS1 Australia notes that more and more companies require trading partners to use the GS1 logistic label, an SSCC in GS1-128 barcode format, so units can be tracked and traced. It offers a web based labelling tool for small businesses, which has no connection to internal databases.

For a 3PL the challenge is doing this at volume on behalf of clients:

1. Allocate SSCCs from the right GS1 company prefix. Usually that is your client's, not yours.
2. Print labels at the pack station from the WMS, with the SSCC tied to every carton and pallet in the despatch.
3. Send the despatch advice through EDI before arrival, using the format the retailer's EDI provider expects. GS1 maintains two EDI standards, GS1 EANCOM and GS1 XML.
4. Reconcile the retailer's receipt against what was sent, so short delivery claims can be checked.

Each retailer publishes its own supplier requirements through its supplier portal, so collect the current documents from your clients before any build. Our [wholesale distribution software page](/solutions/wholesale-distribution-software) covers the supplier side of the same EDI exchange.

## Which ecommerce integrations do 3PL clients expect?

**Shopify first, then marketplaces and whatever order management system the client already runs.** An ecommerce client wants orders to flow in automatically, stock levels to flow back to the store, and tracking numbers to reach the customer without anyone touching a spreadsheet.

Points that often get missed: stock sync must allow for stock reserved by open orders, marketplaces have their own dispatch deadlines that should drive pick priority, and returns need a path back into available stock. Build each connection as an adapter to one internal order model, so adding a channel doesn't mean touching the warehouse logic.

## What changes when you hold goods under bond?

**An ABF licence makes you accountable for duty on goods you store, so the system must track bonded stock separately and precisely.** The ABF describes two licence types relevant to a 3PL.

- **Licensed warehouses** store goods not yet cleared for home consumption, often for longer periods, so importers can defer duty and taxes. The ABF says the licence holder is responsible for safe custody and accounting of the goods, and failure makes the holder liable for any unpaid duty. Warehouses storing excise equivalent goods generally also need an ATO licence.
- **Licensed depots** hold goods moved away from the wharf or airport for short term storage, unpacking or deconsolidation. Goods under customs control may stay until the end of the month after the month they arrived, and the ABF may allow a further month under section 77P of the Customs Act 1901.

Software implications are clear: a status on every stock unit showing whether it is under customs control, the date it arrived and the date it must leave, movement records the ABF could audit, and alerts before a depot holding period runs out. This is general information, not legal advice, and your licence conditions decide the detail.

## Where does Chain of Responsibility reach into the warehouse?

**If your team packs or loads goods onto heavy vehicles, the business is a party in the Chain of Responsibility, and the NHVR expects you to manage that risk.** The NHVR notes that even a driver who performs a loading function becomes a loader for CoR purposes. For a 3PL, the useful records are declared weights per consignment, load plans, loading times and how long trucks waited at the dock. Our [logistics software page](/solutions/logistics-software-development) covers CoR duties and the HVNL in depth, so this page won't repeat it.

## Where does AI help a 3PL?

**AI helps most with forecasting labour, suggesting slotting changes and triaging exceptions; it should not replace the WMS's core logic.**

- **Labour planning.** Forecast tomorrow's picks by client from order history, promotions and day of week, then roster to it.
- **Slotting.** Suggest moving fast movers closer to the pack area based on recent pick frequency, with a supervisor approving each move.
- **Exceptions.** Read client emails asking for changes, cancellations or urgent orders and turn them into tasks with a priority.
- **Billing review.** Flag invoices that differ sharply from the client's usual month before they go out.

## What do 3PL builds cost?

**Indicative AUD market ranges, ex GST, not quotes.** They sit inside the bands Expeed publishes for Australian custom software of $15,000 to $40,000 for simple tools and $40,000 to $150,000 for mid complexity systems.

| Build | Scope | Indicative range |
|---|---|---|
| Billing engine on WMS data | Activity capture, rate cards with effective dates, daily accruals, review, accounting export | $25,000 to $70,000 |
| Client portal | Stock, receipts, orders, despatches, documents, charges to date, client user management | $40,000 to $100,000 |
| EDI and ASN integration | SSCC allocation, label printing, despatch advice to one or more retailers, receipt reconciliation | $20,000 to $60,000 |

Costs rise with the number of WMS sources, the number of retailer formats and how many charge types need new data capture on the floor. Our [customer portal guide](/guides/customer-portal-development) explains the portal choices in more detail.

## How AWLabs would approach a 3PL project

We start with a Development Consult, usually about the invoice that takes longest to finish each month. A paid Discovery Audit then goes through your client contracts, WMS data and retailer requirements, and you receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, and updates land every Tuesday and Friday.

AWLabs has not worked with a 3PL before. If your current platform can bill your contracts with better configuration, we will tell you. Related work sits under [logistics and transport](/industries/logistics-transport) and our [API development](/services/api-development) service.
