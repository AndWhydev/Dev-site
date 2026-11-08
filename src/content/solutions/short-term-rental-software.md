---
title: "Short term rental management software under Australia's state rules"
metaTitle: "Airbnb Property Management Software: Australian Rules Built In"
description: "Short stay software in Australia: Guesty and Hostaway, the NSW STRA register and 180 day limit, Victoria's 7.5% levy, WA's register and custom builds."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Airbnb property management software, such as Guesty, Hostaway, Hospitable or Lodgify, handles channels, calendars, pricing and guest messages well. What it usually doesn't do is Australian compliance: NSW STRA registration numbers and the 180 day limit for non hosted stays in some areas, Victoria's short stay levy of 7.5% of the total booking fee, and WA's STRA register. A short stay manager with a growing portfolio typically adds a compliance tracker, owner statements and cleaner dispatch around the channel manager rather than replacing it. Typical builds sit in the $15,000 to $60,000 (AUD, ex GST) market range, as a range, not a quote."
takeaways:
  - "Keep the channel manager for distribution, pricing and messaging. Build the Australian compliance and owner reporting it lacks."
  - "Every NSW STRA property must be on the government STRA register, with a $65 registration fee and $25 annual renewal; an unrenewed registration is blocked from platform bookings for 3 months, then removed."
  - "NSW applies an annual 180 day limit to non hosted STRA based on location, and bookings of 21 consecutive days or more don't count toward it."
  - "Victoria's short stay levy, in place since 1 January 2025, is 7.5% of the total booking fee for stays under 28 days, including cleaning fees and GST."
  - "WA's Short-Term Rental Accommodation Act 2024 requires all hosted and unhosted STRA to register, and offers an API for booking platform systems."
faqs:
  - q: "What is the best Airbnb property management software in Australia?"
    a: "Guesty, Hostaway, Hospitable and Lodgify are widely used, with PriceLabs for pricing and Breezeway or Turno for cleaning. They are mostly built overseas, so the best one for you is the one that fits your portfolio size and channels, and leaves you a clean way to add Australian compliance and owner statements. We don't resell any of them."
  - q: "How do we track the NSW 180 day limit across many properties?"
    a: "Pull every confirmed booking from the channel manager, classify each property as hosted or non hosted, and count nights per property against the limit that applies to its location, leaving out bookings of 21 consecutive days or more. A dashboard then shows nights used, nights remaining and the date each property will reach its limit at the current booking rate. Check the current planning rules for each council area."
  - q: "Who pays the Victorian short stay levy?"
    a: "The State Revenue Office says the levy is charged on the total booking fee for stays under 28 days and is collected either by the booking platform or by the host, depending on the arrangement. A manager taking direct bookings needs records of every booking fee, including cleaning and other charges, to calculate and lodge returns."
  - q: "Can we keep copies of guests' ID?"
    a: "Only if you genuinely need it. Under the Privacy Act, organisations covered by it may only collect personal information that is reasonably necessary for their functions, and ID documents are high risk if breached. Many platforms already verify guests. If you do collect ID, store it securely, limit who can see it, and delete it on a schedule."
  - q: "Should we build our own channel manager?"
    a: "Almost never. Channel connections to Airbnb, Booking.com and others need partner approval and constant upkeep. Build on top of a channel manager's API instead, for compliance, owner statements and operations."
  - q: "Have you built short term rental software before?"
    a: "No. We haven't delivered a project for a short stay manager, so we won't claim one. We bring integration and reporting engineering; your advisers own the licensing, tax and planning questions for your business."
sources:
  - title: "Short-term rental accommodation"
    url: "https://www.planning.nsw.gov.au/policy-and-legislation/housing/short-term-rental-accommodation"
    publisher: "NSW Department of Planning, Housing and Infrastructure"
  - title: "Short-term rental accommodation"
    url: "https://www.fairtrading.nsw.gov.au/housing-and-property/short-term-rental-accommodation"
    publisher: "NSW Fair Trading"
  - title: "Understanding the short stay levy"
    url: "https://www.sro.vic.gov.au/understanding-short-stay-levy"
    publisher: "State Revenue Office Victoria"
  - title: "Short stay levy"
    url: "https://www.sro.vic.gov.au/short-stay-levy"
    publisher: "State Revenue Office Victoria"
  - title: "Short-Term Rental Accommodation Register"
    url: "https://www.wa.gov.au/organisation/department-of-energy-mines-industry-regulation-and-safety/short-term-rental-accommodation-register"
    publisher: "Government of Western Australia"
  - title: "APP Guidelines, Chapter 3: Collection of solicited personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-3-app-3-collection-of-solicited-personal-information"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Property management software and AI"
    href: "/solutions/property-management-software"
  - title: "Hospitality software"
    href: "/industries/hospitality"
  - title: "Privacy Act for small business software"
    href: "/guides/privacy-act-small-business-software"
  - title: "API integration cost in Australia"
    href: "/guides/api-integration-cost-australia"
  - title: "Strata management software for Australian strata managers"
    href: "/solutions/strata-management-software"
service:
  title: "API development and integrations"
  href: "/services/api-development"
industry:
  title: "Real estate"
  href: "/industries/real-estate"
disclaimer: legal
---

## What does a short stay manager actually run?

**A short stay management business runs five loops at once: distribution across channels, pricing, the clean between every checkout, guest communication and owner reporting.** Each one has software, and most of that software was built for the United States or Europe. It handles the loops well. It handles Australian state rules, owner trust handling and local cleaning networks less well.

| Loop | Usual tools | What they do well | What they miss |
|---|---|---|---|
| Distribution and calendar | Guesty, Hostaway, Hospitable, Lodgify | Channel sync, unified inbox, reservations | State registration numbers, night caps, levy reports |
| Pricing | PriceLabs and similar | Dynamic rates from market data | Day limits that make some nights worth more than others |
| Turnovers | Breezeway, Turno | Task lists, photos, checklists | Local subcontractor payments and availability |
| Guests | Channel manager messaging | Templates, automation | Your own house rules and escalation paths |
| Owners | Basic owner statements | Booking summaries | Trust account reconciliation, Australian GST treatment, levy deductions |

## NSW: the STRA register and day limits

**In NSW every short term rental property must be on the government STRA register, and non hosted stays are subject to an annual 180 day limit in locations where it applies.** The NSW Government describes a state wide framework made up of a planning policy, fire safety standards for STRA dwellings, a government run register and a mandatory code of conduct that applies to booking platforms, hosts, guests and letting agents.

The parts that matter for software:

- **Registration.** A $65 fee for new registrations and a $25 annual renewal from the original registration date. Reminders go out at 45, 30 and 7 days. If a registration isn't renewed, it is held for 3 months during which it can't accept bookings from online platforms, then automatically deregistered, and a new registration is needed.
- **Day limits.** An annual 180 day limit for non hosted STRA, based on location. Bookings of 21 consecutive days or more are exempt from the limit.
- **Fire safety.** Each dwelling must meet the STRA fire safety standard before registering.
- **Transfers.** A registration doesn't pass to a new owner; the old one is deregistered and a new one created.

The NSW Government is also reviewing the STRA framework after consultation in 2024, so the rules may change. A property register that stores each registration number, its renewal date, the hosted or non hosted status, the applicable limit and nights used so far is the single most useful custom tool for a NSW portfolio.

The limit also changes pricing. Once a non hosted property in a capped area has used most of its 180 days, each remaining night is scarce, and a dynamic pricing tool that doesn't know that will sell the last nights as cheaply as any other. Feeding nights remaining into your pricing rules, or switching a property to stays of 21 nights or more when it nears the limit, keeps revenue up without breaching the cap.

## Victoria: the short stay levy

**Victoria charges a short stay levy of 7.5% of the total booking fee on stays under 28 days, in place since 1 January 2025.** The State Revenue Office says the booking fee includes the nightly rate, cleaning fees, GST and charges such as late checkout, and excludes credit card and payment processing fees. The levy is collected by booking platforms or by hosts depending on the arrangement, and one quarter of the revenue is directed to regional Victoria.

For a manager the practical question is which bookings you collect the levy on yourself, usually direct bookings, and whether your records can produce the return. That means every booking fee component stored per stay, the platform responsible for each booking, and a report that reconciles levy collected with levy lodged.

## Western Australia and other councils

**WA requires every hosted and unhosted STRA provider to register under the Short-Term Rental Accommodation Act 2024.** The WA Government's register site also covers advertising requirements, booking reports and a registration check, and says booking platform systems may be able to use its API to integrate with the register. That makes WA the state where an automated link is most realistic at the time of writing.

Elsewhere, councils run their own rules, and they change. Rather than hard coding any one council's regime, a good compliance tracker stores the rule per property (cap, register, levy) as data, so a new rule is a configuration change rather than a rebuild.

## Turnovers: cleaning and maintenance between checkouts

**The clean is the operational heart of short stay, and it is where local knowledge beats a generic app.** Same day turnovers leave a few hours between checkout and check in. A dispatch tool built around your cleaners can:

1. Create the job automatically from each checkout in the channel manager.
2. Offer it to the cleaners who cover that area, in priority order, and confirm acceptance.
3. Give a checklist per property with photo evidence for each room and linen counts.
4. Raise a maintenance job from any reported damage, with photos attached to the property record.
5. Calculate cleaner pay per job and export it to payroll or accounts.

Breezeway and Turno cover much of this. Custom work makes sense when your cleaners are subcontractors paid per job, you run several areas with different teams, or you want maintenance and owner approvals in the same flow.

## Owner statements and trust handling

**Owners want a monthly statement that reconciles to the cent: bookings, platform fees, cleaning, levy, management fee, GST and the amount paid.** Channel managers produce booking summaries, but owner statements that match your trust account and accounting system are a common custom build. Whether you need a real estate licence and a trust account to hold guest money for owners depends on your state and arrangement, so confirm that with your adviser before designing the money flow; the software should follow the structure your adviser approves. Our [property management software](/solutions/property-management-software) page covers trust accounting for long term rentals, where the same separation of ledger and workflow applies.

## Guest messaging with AI, and the line on ID checks

**AI can answer most guest questions from the property's own guide, at any hour, in the guest's language.** Wifi details, parking, check in steps, bin night and local recommendations are ideal. It should hand over to a person for complaints, refunds, damage claims and anything about safety.

On ID, collect less. The Privacy Act requires organisations it covers to collect only personal information reasonably necessary for their functions, and stored passports and licences are an attractive target. Many platforms already verify guests. If you have a real need, store ID securely, restrict access and delete it on schedule. Our [Privacy Act for small business guide](/guides/privacy-act-small-business-software) explains when the Act applies to a smaller operator.

## Typical builds and indicative costs

**Short stay builds are integration heavy and usually modest in size.** Expeed's 2026 survey of Australian costs puts simple internal tools at $15,000 to $40,000 and mid complexity systems at $40,000 to $150,000.

| Build | Indicative range (AUD, ex GST) | Main drivers |
|---|---|---|
| Night count and compliance register linked to the channel manager | $15k to $40k | Channel manager API, states covered, rule types |
| Owner portal and monthly statements | $25k to $60k | Fee structures, accounting integration, trust reconciliation |
| Cleaner dispatch app | $20k to $50k | Offline use, pay rules, maintenance flow |

These are market ranges, not quotes. The [API integration cost guide](/guides/api-integration-cost-australia) explains how sync complexity drives price.

## How AWLabs approaches short stay projects

We start with your channel manager's API and work out what it can give us before designing anything. Every build starts with our Discovery Audit, a paid step credited in full against the build, then a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates come every Tuesday and Friday in Sydney business hours, and the code and IP are assigned to you as they are paid for. We haven't yet delivered a project for a short stay manager. Book a Development Consult, read about our [API development](/services/api-development) and [workflow automation](/services/workflow-automation) services, or see the [hospitality industry](/industries/hospitality) page.
