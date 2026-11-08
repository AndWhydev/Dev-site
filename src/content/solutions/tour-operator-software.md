---
title: "Tour operator software in Australia: manifests, Reef charges, waivers and channels"
metaTitle: "Tour Operator Software Australia: Beyond Rezdy"
description: "Tour operator software in Australia: joining Rezdy or FareHarbor with OTAs and agents, Reef EMC logbooks, waivers under s139A and what custom tools cost."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Tour operators in Australia mostly sell through a booking platform such as Rezdy, FareHarbor, Bookeo or Checkfront, plus OTAs like Viator, GetYourGuide and Klook and inbound agents. The booking platform is rarely the problem. The gaps are the work around it: one accurate manifest per departure across every channel, Great Barrier Reef environmental management charge logbooks, waivers and medical declarations, weather cancellations and agent commission statements. Those are usually small custom builds on the platform's API, in the indicative range of $10,000 to $40,000 (AUD, ex GST), with a full booking and manifest system for a multi vessel operator costing more."
takeaways:
  - "Reef permit holders collect the EMC from visitors and remit it quarterly through EMC Online, with logbooks due 30 April, 31 July, 31 October and 31 January, including nil returns."
  - "At the time of writing the EMC is $8.50 per full day passenger and $4.25 per part day passenger, rising to $9.00 and $4.50 from 1 April 2027."
  - "A waiver for recreational services can only limit liability for death or personal injury under section 139A of the Competition and Consumer Act, and not for significant injury caused by reckless conduct."
  - "Since 1 June 2025 every domestic commercial vessel must have a safety management system under AMSA's updated requirements."
  - "Rezdy publishes a REST API and a separate Agent API, which is what most custom reporting and manifest tools are built on."
faqs:
  - q: "What is the best booking software for tour operators in Australia?"
    a: "Rezdy, FareHarbor, Bookeo and Checkfront are the common choices, with TourPlan used by inbound operators and wholesalers. Pick on channel connections (Viator, GetYourGuide, Klook and agents), resource scheduling for vessels, vehicles and guides, payment fees, and the API. If you hold a Reef permit, ask each vendor how you would produce EMC logbook figures from its data."
  - q: "Can my booking system calculate and report the Reef EMC?"
    a: "It can calculate the charge per passenger if you set it up as a separate line, but logbooks are lodged through GBRMPA's EMC Online. A small custom report can turn each quarter's departures into the passenger counts by category that you enter, flag crew who travelled off duty as visitors, and keep the evidence behind each figure."
  - q: "Does a signed waiver protect us if a guest is hurt?"
    a: "Only partly. Section 139A lets a supplier of recreational services exclude the consumer guarantees for death and personal injury, not for other losses, and not for significant injury caused by reckless conduct. State laws and insurance terms add their own rules. Your software should capture and version waivers properly, but the wording must come from your lawyer."
  - q: "How do we handle weather cancellations across Viator, our website and agents?"
    a: "Centrally. When a departure is cancelled, one action in your system should notify every guest on the manifest, offer rebooking dates, trigger refunds through each channel's rules, and record why. Without that, staff end up working through each OTA extranet by hand while guests wait at the wharf."
  - q: "Should we use AI to answer guest questions in other languages?"
    a: "It works well for logistics questions (pickup points, what to bring, how long the trip is) when the AI answers only from your own information and hands safety and medical questions to staff. Test it with real questions in each language before going live."
  - q: "Have you worked with tour operators before?"
    a: "No. AWLabs hasn't delivered a project for a tour or charter operator, so we won't claim tourism experience. We bring API integration, mobile development and automation skills and would rely on your permits, your safety management system and your lawyer for the operating rules."
sources:
  - title: "Environmental management charge"
    url: "https://www2.gbrmpa.gov.au/access/environmental-management-charge"
    publisher: "Great Barrier Reef Marine Park Authority"
  - title: "What are the charges"
    url: "https://www2.gbrmpa.gov.au/access/environmental-management-charge/what-are-charges"
    publisher: "Great Barrier Reef Marine Park Authority"
  - title: "Competition and Consumer Act 2010, Compilation No. 167, Volume 3 (section 139A)"
    url: "https://www.legislation.gov.au/C2004A00109/latest/text"
    publisher: "Federal Register of Legislation"
  - title: "Safety management systems"
    url: "https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/safety-management-systems"
    publisher: "Australian Maritime Safety Authority"
  - title: "Distributors: access Australian tourism content with one API"
    url: "https://www.atdw.com.au/distributors/"
    publisher: "Australian Tourism Data Warehouse"
  - title: "Price displays"
    url: "https://www.accc.gov.au/business/pricing/price-displays"
    publisher: "ACCC"
  - title: "Competition and Consumer Amendment (Unfair Trading Practices) Act 2026"
    url: "https://www.legislation.gov.au/C2026A00064/asmade/text"
    publisher: "Federal Register of Legislation"
  - title: "About Rezdy"
    url: "https://rezdy.com/about-us/"
    publisher: "Rezdy"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Event management software and apps in Australia"
    href: "/solutions/event-management-software"
  - title: "Hotel software and AI in Australia"
    href: "/solutions/hotel-software"
  - title: "How much does workflow automation cost?"
    href: "/guides/workflow-automation-cost"
  - title: "AI agents vs chatbots vs automation"
    href: "/guides/ai-agents-vs-chatbots-vs-automation"
service:
  title: "Workflow automation"
  href: "/services/workflow-automation"
industry:
  title: "Hospitality"
  href: "/industries/hospitality"
disclaimer: "legal"
---

## What does a tour operator's software actually need to produce?

**A correct manifest for every departure, a clean record of who paid what through which channel, and the regulatory paperwork that follows from both.** The booking itself is the easy part. A reef or wildlife operator might take bookings from its own site, three OTAs, a hotel concierge desk and a dozen inbound agents. On the morning of the trip, the skipper needs one list: names, pickup points, dietary and medical notes, waiver status and passenger category.

Most platforms produce that list well when every booking comes through them. Trouble starts when an agent emails a booking, a channel's sync fails, or a group splits across two vessels. Everything this page describes hangs off the manifest being right.

## How should bookings from every channel reach one manifest?

**Every channel should write into the booking platform, and the manifest should be generated from it, never assembled by hand.** In practice:

1. **Your website** uses the platform's own booking widget or a custom front end on its API.
2. **OTAs** such as Viator, GetYourGuide and Klook connect through the platform's channel manager, so availability updates both ways.
3. **Inbound agents and wholesalers** either book through an agent portal or are keyed in by staff. Rezdy, for example, publishes an Agent API alongside its REST API, which lets larger agents book directly.
4. **Walk ups and phone bookings** go into the same system on the day.

Once everything lands in one place, a small service can produce the manifest per vessel or vehicle, flag missing waivers, and push the list to crew tablets that work offline. This is the most common first build, and it usually reveals which channel connections are unreliable.

## How does the Great Barrier Reef charge work in your systems?

**Reef permit holders collect the environmental management charge (EMC) from each visitor, then report visitation and remit the money to the Reef Authority every quarter.** GBRMPA sets the rates and the timetable. At the time of writing (November 2026):

| Passenger category | Charge | From 1 April 2027 |
|---|---|---|
| Full day (trip of three hours or more in the Marine Park, among other triggers) | $8.50 per day | $9.00 |
| Part day (less than three hours, among other triggers) | $4.25 per visit | $4.50 |
| Non tourist charter passengers | $2 per person, first day only | Fixed, no change |

| Quarter | Logbook and payment due |
|---|---|
| 1 January to 31 March | 30 April |
| 1 April to 30 June | 31 July |
| 1 July to 30 September | 31 October |
| 1 October to 31 December | 31 January |

Details that matter for software:

- **Crew aren't visitors, unless they're off duty.** GBRMPA says off duty staff taking part in the program count, so the manifest needs a crew status field.
- **Extended charters follow day rules.** The first three days are charged as full days, so multiday trips need their own logic.
- **Nil returns are still required.** A quarter without trips still needs a lodgement.
- **Advertising must show the EMC correctly.** GBRMPA asks operators to show either a total price including the EMC or the total with the EMC amount stated, consistent across websites, brochures and invoices. It also notes that no GST is payable on the EMC collected.

That last point lines up with the ACCC's general rule that advertised prices must be a single total including unavoidable charges. From 1 July 2027, the Unfair Trading Practices Act 2026 also requires any mandatory per transaction charge, such as a booking fee, to be shown next to the base price. A booking flow that adds the EMC or a fee only at checkout should be redesigned.

A custom EMC report reads each quarter's departures and passengers from the booking platform, classifies them, and produces the figures to enter in EMC Online, with the underlying records kept for audit.

## What can a waiver actually do under Australian law?

**A waiver for recreational services can exclude the consumer guarantees only for death and personal injury, and never for significant injury caused by reckless conduct.** Section 139A of the Competition and Consumer Act 2010 defines recreational services as participation in a sporting activity or similar leisure pursuit, or another activity involving significant physical exertion or risk, done for recreation. A term in the contract can limit liability for death, physical or mental injury and some related conditions. It can't limit other guarantees, such as the service being delivered with due care for things other than injury.

For software, that means:

- Present the waiver and medical declaration before payment or at check in, with the version number stored against each booking.
- Capture each participant individually, including minors and the guardian who signed for them.
- Block boarding on the manifest if a required declaration is missing.
- Keep signed versions for as long as your lawyer and insurer advise.

The wording itself is a legal question. State civil liability laws and your insurer's conditions also apply, and we'd expect your lawyer to supply the text.

## How should weather cancellations and refunds be automated?

**Make cancellation one action that notifies guests, offers new dates and triggers refunds through each channel's own process.** Your terms and the consumer guarantees decide who gets what. The system's job is to apply that consistently and fast:

1. The operations manager cancels a departure with a reason code (weather, mechanical, minimum numbers).
2. Every guest on the manifest gets an SMS and email in their booking language, with rebooking options.
3. Direct bookings are refunded or moved through the payment provider; OTA bookings are cancelled through the channel so the OTA refunds its customer.
4. Agent bookings generate a credit or refund note on the agent's statement.
5. The reason code feeds a report, which helps if a guest disputes the decision later.

## Where do Rezdy, FareHarbor and similar platforms stop?

**At resource scheduling across vessels and crew, complex multiday itineraries, agent commission statements and regulatory reports.** These platforms are built for selling and managing bookings across many kinds of operators, so they treat specialist needs generically. Typical gaps operators describe:

- **Crew and vessel scheduling** with qualifications, rest periods and maintenance windows.
- **Agent statements** that reconcile commission, net rates and payments per agent per month into Xero.
- **Permit and levy reporting** such as the EMC, national park permits and council fees.
- **Safety records.** AMSA introduced new safety management system requirements on 1 June 2025 that affect all domestic commercial vessels. Departure checklists, headcounts and incident records captured on the day can feed the evidence your system describes.

Each of these is a contained build on the platform's API, which keeps your booking platform as the system of record.

## Should you use ATDW and other distribution feeds?

**Usually yes, because one ATDW profile reaches many distributors that would otherwise need separate listings.** ATDW describes itself as offering distributors one API over more than 50,000 business and event profiles, in 11 languages. For an operator, the practical job is keeping that profile, OTA listings and your own site consistent on product names, durations and inclusions. A small sync or checking tool helps when you run dozens of products across several channels.

## Where does AI help a tour operator?

**Answering repeat guest questions in many languages, and turning trip data into reports, with staff handling anything about safety.** International visitors ask the same things: where pickup is, what to bring, whether seasickness tablets are sold onboard. An assistant that answers only from your own approved information, and hands medical, safety and refund questions to a person, takes much of that load. Our guide to [AI agents, chatbots and automation](/guides/ai-agents-vs-chatbots-vs-automation) explains which approach suits which job, and the [AI chatbot service](/services/ai-chatbot) covers how we build and test them.

## What does custom tour software cost?

**Reporting and automation on top of an existing platform is the affordable end; replacing the platform is rarely worth it.** These are indicative AUD market ranges, ex GST, not quotes, in line with the bands Expeed publishes for Australian custom software.

| Build | Indicative range |
|---|---|
| EMC and permit reporting from booking platform data | $10,000 to $30,000 |
| Manifest app for crew with offline mode and waiver checks | $20,000 to $45,000 |
| Agent commission statements and Xero reconciliation | $15,000 to $35,000 |
| Custom booking and manifest system for a multi vessel operator | $60,000 to $160,000 |

Our [workflow automation cost guide](/guides/workflow-automation-cost) explains how the smaller automation jobs are priced.

## How AWLabs works with tour operators

We'd start with a Development Consult about where your bookings, manifests and reports break down. If a build looks worthwhile, a paid Discovery Audit tests your booking platform's API and channel connections; the fee is credited in full against the work. Then you get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, and we're available in Sydney business hours, which suits operators along the east coast. We haven't worked with a tour operator before, and we'll say so if your platform already covers what you need. Most of this work falls under our [workflow automation](/services/workflow-automation) service. This page is general information, not legal advice.
