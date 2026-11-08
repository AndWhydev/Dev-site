---
title: "Fire protection inspection software: AS 1851 schedules, AFSS evidence and defects"
metaTitle: "Fire Protection Inspection Software: AS 1851, AFSS and ESM"
description: "Fire protection inspection software for Australian contractors: AS 1851 routines, NSW annual fire safety statements, Victorian ESM records and defects."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "A fire protection contractor's real product is evidence: AS 1851 routine service records for every measure in a building, which the owner relies on to issue a NSW annual fire safety statement or a Victorian annual essential safety measures report. Purpose built platforms such as Uptick, and general tools such as simPRO and AroFlo, schedule routines and capture results well. Custom work pays where they stop: evidence packs shaped to each state's statement, defect follow up that gets building owners to act, and portfolio views for managers with many sites. Those builds typically sit in the $20,000 to $60,000 (AUD, ex GST) market range."
takeaways:
  - "In NSW, the owner issues the annual fire safety statement, but only an accredited practitioner (fire safety) can assess the measures and exits behind it, and the FPAA scheme was the first approved, in July 2020."
  - "An accredited practitioner who assessed a measure, or their employer or associate, must not make the owner's declaration, so the contractor's software must keep those roles separate."
  - "In Victoria, owners must prepare an annual essential safety measures report within 28 days before each anniversary and produce inspection and maintenance records within 24 hours of a request."
  - "Victoria's Building Regulations 2018 treat compliance with AS 1851-2012 as compliance with older maintenance determinations, which is why AS 1851 drives most contractors' schedules."
  - "Unresolved defects are where risk and revenue meet: the software should move each defect from finding to quote to approval to fix."
faqs:
  - q: "What is the best software for a fire protection business?"
    a: "For a dedicated fire contractor, a purpose built platform such as Uptick is usually the first one to trial, because routine servicing, asset registers, defect quoting and a client portal are its core. Mixed trade businesses that also do electrical or plumbing work often use simPRO or AroFlo. Trial with a real building that has several measure types and outstanding defects."
  - q: "Can software produce the annual fire safety statement?"
    a: "Software can assemble the evidence and prefill the approved form, but in NSW the statement is issued by or on behalf of the owner, and the accredited practitioner who assessed the measures must not make that declaration. The contractor's system should produce a clear evidence pack per measure and per exit inspection, ready for the owner or their agent to sign."
  - q: "Does AS 1851 apply in every state?"
    a: "AS 1851 is the standard most Australian contractors service to, and it is referenced in state frameworks, but how it applies depends on each building's approvals, fire safety schedule or maintenance determination. Your software should store the required standard and frequency per measure, taken from the building's documents, rather than assume one standard for every site."
  - q: "How do we get building owners to fix defects?"
    a: "Make it easy and visible. Report each defect with a photo, location, risk level and a priced quote the owner can approve online; send reminders; and show the manager a portfolio view of open defects by age and building. Purpose built platforms do some of this; custom portals add the views and escalation rules a large manager wants."
  - q: "Have you built fire protection software before?"
    a: "Not yet. AWLabs hasn't delivered a project for a fire protection contractor, and we're not accredited practitioners. We bring software, integration and portal engineering; your accredited staff and each state's regulations decide what the records must contain."
sources:
  - title: "Fire safety certification"
    url: "https://www.planning.nsw.gov.au/the-planning-system/buildings/fire-safety-in-buildings/fire-safety-certification"
    publisher: "NSW Department of Planning, Housing and Infrastructure"
  - title: "Fire safety statements: frequently asked questions"
    url: "https://www.planning.nsw.gov.au/sites/default/files/2023-03/fire-safety-statements-faq.pdf"
    publisher: "NSW Department of Planning and Environment"
  - title: "Building Regulations 2018 (Vic), version 032, Part 15"
    url: "https://www.legislation.vic.gov.au/in-force/statutory-rules/building-regulations-2018"
    publisher: "Victorian Legislation"
  - title: "AS 1851-2012 Routine service of fire protection systems and equipment"
    url: "https://store.standards.org.au/product/as-1851-2012"
    publisher: "Standards Australia"
  - title: "Uptick fire protection software"
    url: "https://www.uptickhq.com/"
    publisher: "Uptick"
  - title: "Simpro pricing and add-ons"
    url: "https://www.simprogroup.com/pricing"
    publisher: "Simpro"
  - title: "AroFlo pricing and features"
    url: "https://aroflo.com/pricing/"
    publisher: "AroFlo"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Software for HVAC and refrigeration businesses"
    href: "/solutions/hvac-business-software"
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
  - title: "Software for trades businesses"
    href: "/solutions/trades-business-software"
  - title: "Build vs buy: custom software or off the shelf?"
    href: "/guides/build-vs-buy-software"
service:
  title: "Custom app development"
  href: "/services/custom-app-development"
industry:
  title: "Construction and trades"
  href: "/industries/construction-trades"
disclaimer: "legal"
---

## Who relies on a fire contractor's records?

**At least four parties rely on your records, and each needs them in a different shape.** That is the starting point for fire protection software, because the work itself (testing a hydrant, inspecting a fire door, servicing an extinguisher) is only half the job. The other half is proving it, to people who weren't there.

| Who | What they need from you | When |
|---|---|---|
| Building owner or strata | Evidence that each measure was assessed and performs to standard, plus the defects list | Before they issue the annual statement or report |
| Building or facility manager | What is due, what failed, what it will cost to fix | Every visit, and monthly across a portfolio |
| Council and fire authority | The owner's statement or report, backed by your records | Annually, and on request |
| Your own business | Proof of what was done, by whom, to which standard | If anything goes wrong years later |

A system built only around your jobs will serve the last row. The commercial value is in serving the first two well, because that is what keeps contracts.

## How does AS 1851 become a scheduling engine?

**AS 1851 sets routine service activities at set frequencies for each type of fire protection system and equipment, so a building's schedule is the sum of the routines for every measure in it.** A mid sized commercial building might have sprinklers, hydrants, hose reels, a detection and alarm system, emergency lighting, extinguishers, fire doors and smoke control, each with its own routines.

Victoria's Building Regulations 2018 show how central the standard is: where a maintenance determination specifies the older AS 1851-2005 or an equivalent earlier standard, compliance with AS 1851-2012 is taken to be compliance, and an owner who switches must keep complying with the 2012 edition.

For software, the useful model is:

1. **Building, then measure.** Every measure on the fire safety schedule or maintenance determination, with its required standard and performance level from the building's own documents.
2. **Routine library.** Each routine defined once per measure type and frequency, with its checklist.
3. **Due date engine.** Routines fall due from the last completed date, grouped into visits so technicians do monthly, six monthly and annual work together where they coincide.
4. **Result capture.** Pass, fail or not tested, with readings and photos, offline in basements and plant rooms.
5. **Defects.** Every failure becomes a defect with location, severity and a recommended fix.

One planning note: Standards Australia lists AS 1851-2012 as pending revision at the time of writing (November 2026). Keep routines as editable data rather than code, so a new edition means updating a library, not rebuilding the system.

If your current platform does this cleanly, the gap is probably elsewhere on this page.

## What do NSW annual fire safety statements require?

**The owner issues the statement; an accredited practitioner (fire safety) does the assessment behind it, and the two roles must stay separate.** The NSW Environmental Planning and Assessment (Development Certification and Fire Safety) Regulation 2021 sets the rules. From the NSW planning department's guidance:

- An annual fire safety statement must be issued each year and covers every essential fire safety measure in the building, plus an accredited practitioner's inspection of the exit systems.
- Supplementary fire safety statements cover critical fire safety measures, at the shorter intervals set in the building's fire safety schedule.
- The owner must give a copy of the annual statement to the local council and the Commissioner of Fire and Rescue NSW.
- Statements must use the approved template form, and new fire safety schedules have used a government template since 1 August 2023.
- The practitioner who assessed a measure or inspected the exits, or their employer, employee or direct associate, must not make the owner's declaration.
- The government approved the Fire Protection Association Australia (FPAA) accreditation scheme in July 2020, the first industry scheme approved. For some functions there are no FPAA accredited practitioners yet, and the owner or certifier decides who qualifies.

Translated into software requirements: store each technician's accreditation and what it covers; block a routine from counting toward the statement if the person who did it isn't accredited for that measure; produce an evidence pack per measure that the owner can rely on; and never generate a declaration under the contractor's name. Track supplementary statement dates separately, because critical measures run on a different clock.

## What do Victoria and other states add?

**Victoria puts the duty on the owner through an annual essential safety measures report, and gives inspectors a 24 hour window to see the records.** Under Part 15 of the Building Regulations 2018, as in force at the time of writing:

- The owner must ensure an annual essential safety measures report is prepared within 28 days before each anniversary of the relevant date, which is usually the first occupancy permit or maintenance determination requiring the measures.
- The report must be in the form approved by the Authority and signed by the owner or their agent.
- Within 24 hours of a request from the municipal building surveyor or chief officer, the owner must make available, at the building, annual reports from the past 10 years, maintenance schedules and determinations, and records of all inspection, testing and maintenance, including repairs.

That last point is a strong argument for a client portal. If a facilities manager can pull ten years of records for a building in a minute, your contract is much harder to replace.

Queensland, Western Australia, South Australia and the territories each run their own owner obligations and forms. A contractor working in more than one state needs the statement or report output as a per state template over one evidence model, not separate systems.

## How do you get building owners to fix defects?

**Defects are where fire safety risk, the owner's legal exposure and your remedial revenue all sit, so the software should push each one to a decision.** A defect workflow that works:

1. Technician records the defect with photo, location and severity on site.
2. The office, or a rule, prices it from your schedule of rates the same day.
3. The owner or manager receives the quote with the photo and can approve online.
4. Reminders go out on a timetable that matches severity.
5. Approved defects become jobs; declined ones are recorded as declined, with the date and the person.
6. The building's open defects list is always current in the portal and in the evidence pack.

Step 5 matters more than it looks. A record that the owner was told, priced and declined protects your business.

## Uptick, simPRO and others: where does custom fit?

**Start with a purpose built platform; build only for the gaps.** Uptick, which has an Australian office in Melbourne, describes itself as software built for fire protection businesses, with digital inspection forms, asset registers, routine servicing, automatic defect quoting, a client portal, an offline mobile app, scheduling and accounting integrations including Xero and MYOB. simPRO sells Digital Forms and Maintenance Planner add-ons, and AroFlo lists fire protection among its industries along with assets and maintenance features.

Custom work tends to earn its place in three situations:

- **State statement packs.** Producing an evidence pack that maps exactly to the NSW AFSS or Victorian ESM report structure for each building, if your platform's reports don't.
- **Large manager portals.** A portfolio view across hundreds of buildings, with defect ageing, cost to close and statement due dates, often joined with the manager's own systems.
- **Integrations.** Pulling fire safety schedules or measure lists from a client's facilities system, or pushing results into it.

Our [customer portal guide](/guides/customer-portal-development) covers the portal option, and our [build vs buy guide](/guides/build-vs-buy-software) helps if you're unsure whether to build at all.

## Typical builds and indicative costs

**Both common builds sit beside your platform and read from it.** Figures are indicative AUD market ranges, ex GST, not quotes, and fall within the bands Expeed publishes for Australian custom software: $15,000 to $40,000 for simple internal tools and $40,000 to $150,000 for mid complexity systems.

| Build | Includes | Indicative range |
|---|---|---|
| AFSS and ESM evidence pack generator | Reads routines and results from your platform, maps to measures, checks practitioner accreditation, produces per state packs | $20,000 to $50,000 |
| Building manager defect portal | Portfolio view, defect ageing, online quote approval, reminders, 10 year record retrieval | $25,000 to $60,000 |

Expeed puts annual maintenance at 15% to 20% of the build. The main cost drivers are how open your platform's API is, the number of states you cover and how consistent your measure data is across buildings.

## How AWLabs would approach a fire protection build

We'd begin with a Development Consult on where your reporting and defect follow up break down. If custom work makes sense, a paid Discovery Audit tests your platform's API and a sample of your building data, then you get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with updates every Tuesday and Friday, Sydney time.

We haven't delivered a fire protection project yet, and we aren't accredited practitioners, so the compliance content comes from your accredited staff and the regulations. See our [custom app development](/services/custom-app-development) and [workflow automation](/services/workflow-automation) services, the [HVAC software page](/solutions/hvac-business-software) for mechanical services, and our [construction and trades](/industries/construction-trades) overview. This is general information, not legal advice.
