---
title: "Waste management and skip bin software in Australia: bookings, weighbridges and state reporting"
metaTitle: "Waste Management Software in Australia: Levy and Tracking"
description: "Waste and skip bin software in Australia: bookings and dispatch, weighbridge dockets, NSW levy reports and IWTS, Victoria's Waste Tracker and Queensland QWDS."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Skip bin and waste operators can buy booking and dispatch software, but the costly gaps sit where operational data has to become state reporting. In NSW, levy liable facilities report every tonne through a Waste Contribution Monthly Report, the 2026 to 27 levy is $180.20 per tonne in the Metropolitan Levy Area, and asbestos and other trackable wastes move through the Integrated Waste Tracking Solution. Victoria requires reportable priority waste to be recorded in Waste Tracker at each handover, and Queensland levy zone sites report through QWDS. Typical custom builds sit in an indicative $20,000 to $140,000 (AUD, ex GST) market range."
takeaways:
  - "Booking, bin tracking and dispatch are well served by platforms; reporting to EPAs and reconciling weighbridge data are where operators still rekey."
  - "NSW's levy rates for 2026 to 27 are $180.20 per tonne in the Metropolitan Levy Area and $103.80 in the Regional Levy Area, from 1 July 2026."
  - "The IWTS replaced WasteLocate and the Online Waste Tracking system in NSW for asbestos, tyres and other trackable waste; it is run with Queensland."
  - "Victoria's Waste Tracker must be updated by producer, driver and receiver at each change of hands, but EPA Victoria says it does not replace your own commercial and logistics systems."
  - "NSW scheduled waste disposal facilities must keep waste records for at least six years, and the EPA can estimate tonnages where records fall short."
faqs:
  - q: "What is the best skip bin hire software?"
    a: "For a small operator, the best fit is a booking and dispatch platform with online ordering, bin tracking, driver jobs and invoicing. AMCS, which now includes Wastedge, serves larger waste and recycling businesses. Pick on how well it handles your bin sizes, waste types, permits for bins on council land and your weighbridge, then add custom work only for what it can't do."
  - q: "Can our software lodge NSW levy reports automatically?"
    a: "Software can prepare the Waste Contribution Monthly Report from weighbridge and docket data, check it against deductions and exemptions, and present it for sign off. Whether it can submit directly depends on the EPA's current lodgement channels, so confirm that before scoping. Most of the value is in producing an accurate report without rekeying, with an audit trail behind each tonne."
  - q: "Does Victoria's Waste Tracker have an API?"
    a: "EPA Victoria publishes Waste Tracker as an online system and a mobile app for drivers. We did not find published details of a third party integration interface at the time of writing, November 2026, so plan for your system to prepare the data and staff or drivers to complete Waste Tracker steps, and ask EPA Victoria directly about integration options."
  - q: "Do we need to track asbestos loads in NSW?"
    a: "Yes, above the thresholds. The NSW EPA says transporters and receiving facilities must track asbestos waste transported inside NSW weighing 100 kilograms or more, or 10 square metres or more of asbestos sheeting in one load, using the IWTS. Your dispatch system should flag asbestos jobs at booking so the movement is created before pickup."
  - q: "Can AI tell us when a bin is full or contaminated?"
    a: "Fill level sensors and image models can estimate both, with limits. Sensors give a reliable trend for fixed bins; image models can flag likely contamination from driver photos for a person to review. Treat them as prompts for action and evidence, not automatic charges to customers."
  - q: "Have you built waste management software before?"
    a: "No. AWLabs has not delivered a waste or skip bin project, so we won't claim sector experience. We bring booking, dispatch, integration and reporting engineering, and we would rely on your environmental adviser and the EPA guidance for the regulatory detail."
sources:
  - title: "Waste levy"
    url: "https://www.epa.nsw.gov.au/Your-environment/Waste/waste-levy"
    publisher: "NSW Environment Protection Authority"
  - title: "Levy regulated area and levy rates"
    url: "https://www.epa.nsw.gov.au/Your-environment/Waste/waste-levy/levy-regulated-area-and-levy-rates"
    publisher: "NSW Environment Protection Authority"
  - title: "Scheduled waste facility records"
    url: "https://www.epa.nsw.gov.au/Your-environment/Waste/waste-facilities/scheduled-waste-facility-records"
    publisher: "NSW Environment Protection Authority"
  - title: "Integrated Waste Tracking Solution"
    url: "https://www.epa.nsw.gov.au/your-environment/waste/integrated-waste-tracking-solution"
    publisher: "NSW Environment Protection Authority"
  - title: "Tracking asbestos waste using the IWTS"
    url: "https://www.epa.nsw.gov.au/Your-environment/Waste/transporting-asbestos-waste-tyres/tracking-asbestos-waste-with-iwts"
    publisher: "NSW Environment Protection Authority"
  - title: "Tracking waste from the Metropolitan Levy Area"
    url: "https://www.epa.nsw.gov.au/Your-environment/Waste/tracking-waste-mla"
    publisher: "NSW Environment Protection Authority"
  - title: "Waste Tracker"
    url: "https://www.epa.vic.gov.au/waste-tracker"
    publisher: "EPA Victoria"
  - title: "Requirements for operators in the levy zone"
    url: "https://www.qld.gov.au/environment/waste-reduction-recycling/disposal-levy/operators/levy-zone"
    publisher: "Queensland Government"
  - title: "Wastedge: software for waste and recycling companies"
    url: "https://www.amcsgroup.com/"
    publisher: "AMCS"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Logistics software for Chain of Responsibility and the HVNL"
    href: "/solutions/logistics-software-development"
  - title: "Fleet management software for light vehicle fleets"
    href: "/solutions/fleet-management-software"
  - title: "How much does workflow automation cost?"
    href: "/guides/workflow-automation-cost"
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
service:
  title: "Workflow automation"
  href: "/services/workflow-automation"
industry:
  title: "Logistics and transport"
  href: "/industries/logistics-transport"
disclaimer: "legal"
---

## What do skip bin and waste platforms already cover?

**Online booking, bin inventory, driver jobs and invoicing are standard features; state reporting and weighbridge reconciliation usually aren't.** A customer picks a bin size and waste type, pays, and a job lands on a driver's phone. Platforms built for skip hire handle that well, and AMCS, which now includes Wastedge, serves larger waste and recycling operators with fleet, facility and billing modules.

The trouble starts after the bin is lifted. The load crosses a weighbridge, the docket has to match the booking, the waste type may change on inspection, the tonnes feed a levy return, and some loads trigger a tracking obligation that has its own system. Operators often run three or four systems and a spreadsheet to tie them together. That join is where custom software makes sense.

## How should weighbridge data flow into the business?

**Every weighbridge ticket should match one booking, one vehicle and one waste classification automatically, with exceptions sent to a person.** Weighbridge software records gross, tare and net weight with a timestamp and plate. On its own, that ticket knows nothing about the customer or the job.

A good integration does four things:

1. Reads each ticket as it is created, by API, database link or file drop.
2. Matches it to the open job by vehicle and time window, or by a docket number the driver keys in.
3. Applies the waste classification from the booking, overridden by the gatehouse if inspection finds something different, with the reason recorded.
4. Prices the job by tonne where the contract says so, and holds the record for levy reporting.

The NSW EPA publishes weighbridge requirements for levy liable waste facilities, so check which apply to your site before deciding what the software must record.

## What does NSW require for levy returns and records?

**Levy liable facilities in NSW report every tonne received through a Waste Contribution Monthly Report, and the levy is calculated from that report.** The waste levy is a contribution under the Protection of the Environment Operations Act 1997 that certain licensed facilities pay for each tonne received. It applies in the Metropolitan Levy Area and the Regional Levy Area, which together cover Sydney, the Illawarra, the Hunter, the Central and North Coast to the Queensland border, and the Blue Mountains, Wingecarribee and Wollondilly local government areas.

| NSW levy rate, from 1 July 2026 | Per tonne |
|---|---|
| Metropolitan Levy Area, standard | $180.20 |
| Regional Levy Area, standard | $103.80 |
| Trackable liquid waste | $96.50 |

Concessional and special rates also apply to some wastes. The software lesson is that the rate is a variable with an effective date, not a constant: the rates rise each year with CPI under the Waste Regulation.

Record keeping matters as much as the return. The EPA says scheduled waste disposal facilities must keep records of all waste received for at least six years, that Waste Levy Guideline 2 sets the format, and that records must be produced on request. Where records are inadequate, the EPA can estimate the tonnage and use that estimate to set levy liability. Deductions and exemptions claimed on the return depend on the same records.

There is also a cross border rule. Waste generated in the Metropolitan Levy Area and transported out of NSW in loads of 10 tonnes or more must be tracked, within three days after transport begins, subject to legislated exclusions.

## What is the IWTS, and what replaced WasteLocate?

**The Integrated Waste Tracking Solution is the NSW EPA's system for tracking hazardous and other regulated waste, delivered with Queensland and built on KPMG's Origins platform.** It replaced WasteLocate for waste tyres on 19 September 2023, and replaced WasteLocate for asbestos and the Online Waste Tracking system for trackable waste on 28 February 2024. Older guides and software that still mention WasteLocate are out of date.

Asbestos is the case most skip bin businesses meet. The EPA says transporters and receiving facilities must track asbestos transported inside NSW weighing 100 kilograms or more, or 10 square metres or more of sheeting in one load. The transporter creates the movement, tracks it and gives the receiver what it needs to confirm the load was tracked. The IWTS runs in a browser and supports creating movements on a tablet or phone.

For your own system, the practical design is to flag regulated waste at booking, block dispatch until the IWTS movement exists, and store the movement reference against the job so the docket, invoice and tracking record line up.

## How does Victoria's Waste Tracker change the job flow?

**In Victoria every change of hands for reportable priority waste has to be recorded in Waste Tracker, by the producer, the transporter and the receiver, at the time it happens.** EPA Victoria describes the duty to notify each transaction, with the information listed in Schedule 7 of the Environment Protection Regulations 2021.

The sequence matters for dispatch:

- The producer, or an accredited consigner or transporter on its behalf, creates a waste record before the waste is transported.
- The transporter administrator assigns the record to a driver before collection.
- The driver enters information at pickup and again at drop off, using the Waste Tracker app or the online system.
- The receiver updates the record on delivery, and can accept a grouped waste record when a driver has collected several loads on one run.

EPA Victoria is explicit that Waste Tracker does not replace your commercial transaction records, logistics or inventory systems. So your own system still needs the job, the load and the record number, and it should prompt drivers at each step so the two never drift apart.

## What about Queensland and other states?

**Queensland levy zone operators report waste data monthly through the Queensland Waste Data System, with weighbridge and survey requirements depending on the site.** The Queensland Government lists, for operators in the levy zone, weighbridge requirements and measurement of waste, a monthly summary and detailed data return, and an annual volumetric survey. Queensland is also the NSW EPA's partner on the IWTS. Other states run their own levy and tracking rules, so a multi state operator needs reporting modules per state over one shared job record.

| State | Main reporting channel | What your system should prepare |
|---|---|---|
| NSW | Waste Contribution Monthly Report; IWTS for trackable waste | Tonnes by waste type and source, deductions, movement references |
| Victoria | Waste Tracker for reportable priority waste | Waste record numbers, driver prompts at pickup and drop off |
| Queensland | QWDS monthly returns | Summary and detailed tonnage data, weighbridge records |

## Do commercial customers need a portal?

**Yes, for businesses with regular collections, a portal cuts calls and gives them the reports their own auditors ask for.** Councils, builders and facility managers want to see services booked, missed lifts, weights collected by site and waste stream, and diversion from landfill for their sustainability reporting. A portal that reads the same job and weighbridge records you report to the EPA gives them consistent numbers. Our guide to [customer portal development](/guides/customer-portal-development) covers the build options.

## Where does AI fit in waste operations?

**Useful today: fill level prediction, contamination flags from photos and route planning; risky: automatic charges based on a model's guess.**

- **Fill prediction.** Sensor readings or past collection weights predict when a bin needs a lift, so routes stop visiting half empty bins.
- **Contamination images.** Drivers photograph the load; an image model flags likely contamination or prohibited items for review, with the photo kept as evidence.
- **Route planning.** Proven routing solvers, not language models, handle mixed fleets of hook lifts, skip trucks and front lifts with time windows.
- **Docket reading.** Paper dockets from third party tips can be read into structured records, then matched to jobs.

## What do waste software builds cost?

**Indicative AUD market ranges, ex GST, not quotes.** They fall inside the bands Expeed publishes for Australian custom software of $15,000 to $40,000 for simple tools, $40,000 to $150,000 for mid complexity systems and more for complex platforms.

| Build | Scope | Indicative range |
|---|---|---|
| Levy and tracking report automation | Weighbridge and docket matching, waste classification, monthly report preparation, tracking references, audit trail | $20,000 to $60,000 |
| Booking and dispatch system | Online booking and payment, bin inventory, driver app with photos, mixed fleet dispatch, invoicing | $50,000 to $140,000 |
| Commercial customer portal | Services, lifts, weights by site and stream, documents, reports | $30,000 to $80,000 |

Costs rise with the number of weighbridge sites, states and fleet types. For pricing patterns on the automation side, see our [workflow automation cost guide](/guides/workflow-automation-cost).

## How AWLabs would approach a waste project

A Development Consult is the first step, normally about where tonnes get retyped between the gatehouse, dispatch and the monthly return. A paid Discovery Audit then maps your weighbridge, booking and accounting systems and each state's reporting channel, before a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, and updates arrive every Tuesday and Friday.

We haven't delivered software for a waste operator yet. If your current platform can produce your reports with better setup, that is what we will recommend. More context sits on our [logistics and transport](/industries/logistics-transport) page and our [workflow automation](/services/workflow-automation) service.
