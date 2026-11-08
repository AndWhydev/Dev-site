---
title: "Courier and last mile delivery software in Australia: dispatch, driver pay and proof of delivery"
metaTitle: "Courier Software in Australia: Dispatch, Driver Pay and ePOD"
description: "Courier software in Australia: dispatch and ePOD, contractor driver pay under Fair Work regulated worker rules, sender integrations and tracking privacy."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Courier businesses can buy dispatch, routing and proof of delivery from platforms such as Locate2u, Onfleet, Detrack or Track-POD, and should. The custom work is usually driver pay: zone and drop rates, waiting time, deductions and, for app based food and grocery delivery, the Fair Work Commission's minimum standards order that applies from 17 August 2026 with an earnings floor based on engaged time. Parcel couriers are not covered by that order yet, but the Commission is still considering last mile applications. A driver pay engine typically sits in an indicative $25,000 to $70,000 (AUD, ex GST) market range."
takeaways:
  - "The on demand delivery order covers platform workers who mainly deliver food, drinks, alcohol or groceries for immediate delivery, from 17 August 2026; parcel only work is outside it."
  - "Covered platforms must pay at least an earnings floor of engaged time multiplied by an hourly rate, over an earnings period of up to 21 days, and top up any shortfall."
  - "Platform operators must keep records such as worker ABNs, activation and deactivation dates and per period pay and engaged time for 7 years."
  - "Applications for last mile minimum standards orders (MS2024/1 to 3) are still before the Commission, so pay logic should be rules driven, not hard coded."
  - "Proof of delivery photos, GPS points and timestamps are evidence in disputes and personal information about drivers, so retention and access need rules."
faqs:
  - q: "Does the new Fair Work order apply to my parcel courier business?"
    a: "On the Fair Work Ombudsman's published guidance, not if your drivers mainly carry parcels. The interim order covers workers engaged through a digital platform who mainly pick up and deliver food, drinks, alcohol or groceries for immediate delivery, and it excludes vehicles with a carrying capacity over one tonne. The Commission is considering separate applications that would cover last mile delivery work, so check the current position with an employment lawyer before you design pay rules."
  - q: "What is engaged time?"
    a: "Under the order it is the time recorded in the app from when a worker accepts a job until the delivery is completed. It excludes time after a customer cancellation, abandoned jobs, breakdowns and breaks, and time the order treats as non engaged, such as unreasonable delays or being stationary for more than 5 minutes for reasons unrelated to the delivery. Your app has to capture those events accurately for the earnings floor to be right."
  - q: "Can off the shelf courier software pay contractor drivers?"
    a: "Some platforms export completed jobs and driver rates, and a few handle simple settlements. Few handle zone matrices, waiting time, multi drop runs, deductions and an earnings floor test in one place. Many couriers end up with a spreadsheet between dispatch and accounting, which is the part worth replacing."
  - q: "Can we use G-NAF to clean addresses?"
    a: "Yes, with care. The open G-NAF from data.gov.au is licensed under an end user licence based on CC BY 4.0, with a restriction on using it to generate or compile addresses for sending mail unless each address is verified against a secondary source. Read the licence for your use case; many couriers use a commercial address validation service built on the same data."
  - q: "Do we need to tell drivers we track them?"
    a: "For employees, state workplace surveillance laws can require notice, and NSW has a Workplace Surveillance Act 2005. For contractors, privacy law and your contract terms apply. Tell drivers what is collected, when tracking is on, who sees it and how long it is kept, and get advice for each state you operate in."
  - q: "Have you built courier software before?"
    a: "No. AWLabs has not delivered a courier or delivery project, so we won't claim sector experience. We bring mobile app, integration and rules engine engineering, and we would rely on your lawyer and the Fair Work guidance for how the regulated worker rules apply to you."
sources:
  - title: "Minimum standards for on-demand delivery workers"
    url: "https://www.fairwork.gov.au/find-help-for/regulated-workers/minimum-standards-for-on-demand-delivery-workers"
    publisher: "Fair Work Ombudsman"
  - title: "Rules in the on-demand delivery order"
    url: "https://www.fairwork.gov.au/find-help-for/regulated-workers/minimum-standards-for-on-demand-delivery-workers/rules-in-the-on-demand-delivery-order"
    publisher: "Fair Work Ombudsman"
  - title: "Regulated workers in the road transport industry"
    url: "https://www.fairwork.gov.au/find-help-for/regulated-workers/regulated-workers-in-the-road-transport-industry"
    publisher: "Fair Work Ombudsman"
  - title: "Geoscape Geocoded National Address File (G-NAF)"
    url: "https://data.gov.au/data/dataset/geocoded-national-address-file-g-naf"
    publisher: "data.gov.au"
  - title: "Workplace surveillance"
    url: "https://www.ipc.nsw.gov.au/workplace-surveillance"
    publisher: "Information and Privacy Commission NSW"
  - title: "Locate2u delivery management software"
    url: "https://www.locate2u.com/"
    publisher: "Locate2u"
  - title: "Shippit commerce delivery platform"
    url: "https://www.shippit.com/"
    publisher: "Shippit"
  - title: "Sendle parcel delivery for small business"
    url: "https://www.sendle.com/"
    publisher: "Sendle"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Logistics software for Chain of Responsibility and the HVNL"
    href: "/solutions/logistics-software-development"
  - title: "Fleet management software for light vehicle fleets"
    href: "/solutions/fleet-management-software"
  - title: "Labour hire software in Australia"
    href: "/solutions/labour-hire-software"
  - title: "Web app vs mobile app"
    href: "/guides/web-app-vs-mobile-app"
  - title: "Australia Post and StarTrack API integration"
    href: "/guides/shipping-carrier-integration"
  - title: "Freight forwarding software in Australia"
    href: "/solutions/freight-forwarder-software"
service:
  title: "Web and mobile apps"
  href: "/services/web-mobile-apps"
industry:
  title: "Logistics and transport"
  href: "/industries/logistics-transport"
disclaimer: "legal"
---

## What do courier platforms already handle well?

**Dispatch, route planning, live driver tracking and electronic proof of delivery are solved problems you can rent.** Locate2u, built for businesses running their own drivers, covers route optimisation, real time tracking and proof of delivery with signatures and photos. Onfleet, Detrack and Track-POD play in the same space. If you are a small courier still dispatching by text message, start with one of these, not a custom build.

Sender side aggregation is also a market of its own. Shippit connects Australian merchants to a mix of carriers and to shopping carts, order management, ERP and warehouse systems. Sendle offers small business parcel delivery. If you are a courier wanting volume from merchants, being one of the carriers those platforms can book is often worth more than your own booking site.

So where do couriers end up writing software? Almost always in three places: paying contractor drivers, pricing by custom zones, and handling the disputes that follow a missing parcel. The rest of this page is about those.

## Are your contractor drivers now regulated workers?

**Some are. Since 26 August 2024 the Fair Work Act has recognised regulated workers, and the first delivery order to set minimum pay applies from 17 August 2026.** The Fair Work Ombudsman describes two types of regulated worker: employee like workers who get work through a digital labour platform, and regulated road transport contractors. Both remain independent contractors, but the Fair Work Commission can now set minimum standards for them.

The interim order for on demand delivery covers workers engaged through an app or website who, across an earnings period, mainly pick up and deliver food, drinks, alcohol or groceries for immediate delivery. It also covers the platform operators that engage them. It does not cover drivers of vehicles with a carrying capacity over one tonne. The Ombudsman's own example says a driver who only delivers packages through an app is outside the order.

Do not file that as "not our problem" yet. The Commission is still considering the Transport Workers' Union applications (MS2024/1 to 3) that would cover employee like workers and road transport contractors doing last mile delivery, and it has said it will review the food order when it issues a draft for those. Separately, recent reforms introduce a road transport contractor high income threshold, with the amount to be set later by regulation. Rules are moving, which is the strongest argument for keeping pay logic in configurable rules rather than code.

| Courier model | Covered by the on demand delivery order? | What to watch |
|---|---|---|
| App based food, drink or grocery delivery, vehicle up to 1 tonne | Yes, from 17 August 2026 | Earnings floor, records, information statement |
| App based parcel delivery | No, on current guidance | Last mile applications MS2024/1 to 3 |
| Contract owner drivers on regular runs | Not by this order | Regulated road transport contractor rules, contractual chain orders |
| Employee drivers | No, they are employees | Award, payroll and workplace surveillance law |

## What does a driver pay engine have to record?

**For work covered by the order, the system must prove each worker earned at least the earnings floor for every earnings period, and keep the evidence for 7 years.** The Ombudsman sets out the calculation. The platform operator chooses an earnings period of up to 21 days. The earnings floor is the worker's total engaged time multiplied by the hourly rate for their vehicle class. If the worker was paid less, the operator makes a top up payment in the next earnings period or within 7 days after it.

| Vehicle class | Hourly rate, 17 Aug to 31 Dec 2026 | Hourly rate, 2027 |
|---|---|---|
| No vehicle or pedal bicycle | $31.30 | $31.80 |
| Electric bicycle or scooter | $31.30 | $31.80 |
| Combustion motorcycle or scooter | $31.50 | $32.00 |
| Other motor vehicle up to 1 tonne | $32.00 | $32.50 |

Engaged time starts when a worker accepts a job and ends when the delivery is completed, with special handling for stacked jobs, cancellations, abandoned jobs, breakdowns and breaks. Time the order treats as non engaged includes unreasonable delays and being stationary for more than 5 minutes for reasons unrelated to the delivery. Every one of those is an event your driver app must log with a timestamp.

The record keeping list is specific: operator and worker names and ABNs, account activation date, service contracts, deactivation date and reasons, and, for each earnings period, gross and net pay, deductions, engaged time and non engaged time. Workers can ask for copies. The order also requires the Gig Worker Information Statement to be sent by email and app notification.

## How should zones, drops and waiting time be priced?

**Treat pay and price as two separate rule sets that share the same job events.** Most courier disputes start because a driver was paid by one rule and the customer was charged by another, and nobody can reconcile them.

A driver pay rule set usually includes:

- Base rate per drop by zone, with a zone map drawn on postcodes or suburb polygons
- Multi drop run rates and minimum run payments
- Waiting time after a free period at pickup or delivery
- Surcharges for bulky items, after hours or tail lift work
- Deductions for agreed items such as uniform or scanner hire, with written consent
- An earnings floor test, where the order applies, run before each settlement

The customer price rule set mirrors it with its own zones and fuel levy. A settlement screen then shows each driver their jobs, how each was paid and any top up, which cuts the number of "why was I paid this" calls sharply.

## Which sender integrations matter?

**Integrate where your volume comes from: direct merchant connections, aggregators and marketplaces.** For merchants on Shopify or WooCommerce, an app or plugin that creates bookings and prints labels is the minimum. For volume through aggregators such as Shippit, you need their carrier integration spec: rate requests, booking, label formats and tracking events pushed back. For business customers, a simple booking portal and a CSV or API upload often matters more than any plugin.

Design these through one internal booking API so each new channel is an adapter, not a new system. Our [API development service](/services/api-development) covers that pattern.

## What makes proof of delivery stand up in a dispute?

**A good proof of delivery record ties a photo, a GPS point, a timestamp and the recipient or safe drop instruction to one parcel scan.** Weak records are a single photo of a door with no parcel visible. Strong ones show the parcel, the house number and the location the customer asked for, captured inside a reasonable radius of the geocoded address.

Rules worth building:

1. Block completion if the GPS point is outside a set distance from the address, unless the driver records a reason.
2. Require a second photo for authority to leave deliveries.
3. Attach the original booking instructions to the record so disputes can compare.
4. Keep the evidence for a set period that matches your claims window, then delete.

## How should driver tracking be handled?

**Track only while a driver is working, tell them clearly, and limit who can see history.** For employee drivers, state workplace surveillance laws can require notice before tracking, and NSW has a Workplace Surveillance Act 2005. For contractors, the Privacy Act and your contract terms apply. Our [logistics software page](/solutions/logistics-software-development) covers telematics privacy for heavy vehicle fleets in more detail; the same principles of retention, role based access and Australian hosting apply to a courier app.

## Where can AI help?

**AI earns its keep on messy inputs: addresses, delivery instructions and exception triage.** Address cleaning matches free text against the national address file. The open G-NAF on data.gov.au carries a licence restriction on compiling addresses for sending mail without secondary verification, so read the licence. Language models can turn "leave with the pharmacy next door if not home" into a structured instruction, and can sort failed delivery notes into categories for the morning team. Route optimisation is better served by proven solvers.

## What do courier builds cost?

**Indicative AUD market ranges, ex GST, not quotes.** They sit within the bands Expeed publishes for Australian custom software of $15,000 to $40,000 for simple tools, $40,000 to $150,000 for mid complexity systems and $150,000 and up for complex ones.

| Build | Scope | Indicative range |
|---|---|---|
| Driver pay engine with zone rules | Job event import, zone and drop rules, waiting time, deductions, earnings floor test, settlement statements | $25,000 to $70,000 |
| Dispatch and ePOD app | Driver mobile app, dispatch board, routing integration, photo and GPS proof, customer notifications | $60,000 to $160,000 |

If an off the shelf platform covers dispatch and ePOD, the pay engine alone is often the best first step. Our guide on [web app vs mobile app](/guides/web-app-vs-mobile-app) helps decide whether drivers need a native app.

## Working with AWLabs on a courier build

It begins with a Development Consult about how drivers are paid today and where the spreadsheets sit. A paid Discovery Audit then confirms which platform data you can access and which pay rules apply, ahead of a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, and you get updates every Tuesday and Friday.

We have not delivered courier software before, and we are not employment lawyers, so pay rules are confirmed with your adviser before they go live. See our [logistics and transport](/industries/logistics-transport) page for related work.
