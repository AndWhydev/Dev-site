---
title: "Software for multi store retail chains in Australia: transfers, store ops and facial recognition"
metaTitle: "Retail Chain Software Australia: Stock, Store Ops and Privacy"
description: "Retail store software for Australian chains: stock transfers, store ops apps, General Retail Award rosters and facial recognition rules after Bunnings."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "A retail chain of 5 to 200 stores usually already has a POS, an ERP or inventory system and a rostering tool. The custom work that pays is in the gaps between them: replenishment and transfer logic, a store operations app that head office actually controls, and reporting across stores. Loss prevention needs more care than it did: the Privacy Commissioner found Bunnings breached the Privacy Act with facial recognition, the Administrative Review Tribunal confirmed a high bar in 2026, and a Kmart determination is still under review. Indicative market ranges for these builds run from about $40,000 to $130,000 (AUD, ex GST), as planning figures, not quotes."
takeaways:
  - "Data usually stops at the edges of each system: POS knows sales, the ERP knows purchasing, the roster tool knows hours. Store level decisions need all three joined."
  - "Replenishment and inter store transfers are the most common first build, because generic rules move stock by averages, not by what each store sells."
  - "In February 2026 the Administrative Review Tribunal upheld findings that Bunnings failed to notify customers about facial recognition and lacked proper governance, while finding it could rely on a consent exception for a limited purpose."
  - "The OAIC updated its facial recognition guidance for retail on 29 July 2026 and says every deployment needs its own detailed risk assessment."
  - "The General Retail Industry Award sets penalty rates for evenings, weekends and public holidays and requires written notice of permanent roster changes, so rostering logic needs the award built in."
faqs:
  - q: "What retail software do Australian chains typically run?"
    a: "A POS such as Lightspeed Retail, Shopify POS, Square or Retail Express; an ERP or inventory platform such as NetSuite or Pronto Xi for larger chains; a rostering tool such as Deputy; and a checklist or inspection tool such as SafetyCulture. Each is strong in its lane. The gaps are usually between them."
  - q: "Can we use facial recognition in our stores?"
    a: "Possibly, but the bar is high. The OAIC says facial images are sensitive information, that each deployment must be assessed against the Privacy Act, and that a detailed risk assessment is needed first. The Tribunal's Bunnings decision found a limited consent exception applied for serious repeat crime, but still upheld the notice and governance failures. Get legal advice before you buy anything."
  - q: "Should we build our own POS?"
    a: "Almost never. POS platforms carry payments certification, hardware support and tax handling that a chain doesn't want to own. Build around the POS: transfers, reporting, store ops and integrations."
  - q: "Do card surcharges still matter for our pricing systems?"
    a: "They did until 1 October 2026, when the Reserve Bank removed surcharging on eftpos, Mastercard and Visa. If your POS or online checkout added a card fee, it should now be off, and your margin reporting should treat card costs as a cost of sale."
  - q: "Have you built software for a retail chain?"
    a: "No. We haven't delivered a project for a multi store chain, so we won't claim retail chain experience. Our closest work is a website and ordering system for Kawkab, a hair and beauty products supplier, which is on our client stories page. We bring integration and data engineering skills and rely on your merchandise and store teams for how the business runs."
sources:
  - title: "Bunnings breached Australians' privacy with facial recognition tool"
    url: "https://www.oaic.gov.au/news/media-centre/bunnings-breached-australians-privacy-with-facial-recognition-tool"
    publisher: "OAIC"
  - title: "OAIC statement on Administrative Review Tribunal's Bunnings decision"
    url: "https://www.oaic.gov.au/news/media-centre/oaic-statement-on-administrative-review-tribunals-bunnings-decision"
    publisher: "OAIC"
  - title: "Privacy Commissioner statement on Administrative Review Tribunal's Bunnings decision"
    url: "https://www.oaic.gov.au/news/media-centre/privacy-commissioner-statement-on-administrative-review-tribunals-bunnings-decision"
    publisher: "OAIC"
  - title: "Privacy Commissioner publishes updated guidance on facial recognition in retail spaces"
    url: "https://www.oaic.gov.au/news/media-centre/privacy-commissioner-publishes-updated-guidance-on-facial-recognition-in-retail-spaces"
    publisher: "OAIC"
  - title: "Workplace monitoring and surveillance"
    url: "https://www.oaic.gov.au/privacy/your-privacy-rights/surveillance-and-monitoring/workplace-monitoring-and-surveillance"
    publisher: "OAIC"
  - title: "General Retail Industry Award 2020 (MA000004)"
    url: "https://awards.fairwork.gov.au/MA000004.html"
    publisher: "Fair Work Commission"
  - title: "Review of Merchant Card Payment Costs and Surcharging: Conclusions Paper (media release 2026-10)"
    url: "https://www.rba.gov.au/media-releases/2026/mr-26-10.html"
    publisher: "Reserve Bank of Australia"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Franchise management software in Australia"
    href: "/solutions/franchise-management-software"
  - title: "The Privacy Act and AI"
    href: "/guides/privacy-act-and-ai"
  - title: "How much does API integration cost in Australia?"
    href: "/guides/api-integration-cost-australia"
  - title: "Build vs buy: custom software or off the shelf?"
    href: "/guides/build-vs-buy-software"
service:
  title: "Data analytics"
  href: "/services/data-analytics"
industry:
  title: "Retail and ecommerce"
  href: "/industries/retail-ecommerce"
disclaimer: "legal"
---

## Where does data stop in a retail chain's stack?

**In most chains, every system is good at its own job and blind to the others.** The POS knows what sold, the ERP knows what was bought and where it is, the roster tool knows who worked, and the store checklist tool knows whether the shelves were faced. Head office decisions such as which store should send stock where, or whether a store is short staffed for its trade, need all of them at once.

| Layer | Typical Australian tools | What it rarely does well across stores |
|---|---|---|
| Point of sale | Lightspeed Retail, Shopify POS, Square, Retail Express | Store to store transfer suggestions |
| ERP and inventory | NetSuite, Pronto Xi | Store level forecasting from local sales patterns |
| Rostering | Deputy | Matching hours to forecast trade by store |
| Store operations | SafetyCulture | Linking a failed check to stock or sales impact |

This page is about physical store chains. For online stores and the wider sector, start at our [retail and ecommerce](/industries/retail-ecommerce) page.

## Which build do most chains need first?

**A replenishment and transfer engine, because averages move stock to the wrong places.** Generic reorder rules treat every store the same. A chain with a beach store and a CBD store, or a winter heavy south and a humid north, needs rules that read each store's own sell through.

A useful engine does five things:

1. Pulls daily sales and stock on hand per store from the POS.
2. Forecasts demand per item per store, with seasonality and promotions.
3. Suggests transfers from overstocked to understocked stores before it suggests new purchase orders.
4. Respects minimum display quantities, pack sizes and freight runs.
5. Sends approved transfers back to the POS or ERP so store teams receive them as tasks.

A worked example shows why this matters. Say a chain of 30 stores has 400 units of a winter jacket left in late June. A flat rule sends each store its share of a new order. A transfer engine sees that eight southern stores have sold through and twelve northern stores are sitting on most of the remaining stock, so it proposes moving 150 units south on the next scheduled freight run and holding the purchase order. The chain sells more at full price and marks down less in August.

The forecasting can be simple statistics at first. The value is usually in step 3: moving stock you already own rather than buying more. Our [data analytics service](/services/data-analytics) builds this kind of model and reporting.

## When is SafetyCulture enough for store operations?

**For checklists and audits, often it is. A custom store ops app earns its place when head office wants tasks, planograms and results tied to sales data.** SafetyCulture is strong for inspections and issue reporting. Chains build their own when they want a single store app that combines daily tasks from head office, planogram photos checked against a reference, price change instructions, transfer receipts and a store manager's dashboard, with results visible next to that store's trading figures.

The design choice that matters most is who owns the task list. If area managers can add tasks freely, stores drown in them within a month. A good console lets head office set priorities and due times, groups tasks by store type, and shows completion rates by region so the operations team can see which stores need a visit rather than another reminder.

A store ops app also has to work on cheap shared devices and patchy back room wifi, so offline capture and simple sign in matter more than features.

## What changed for facial recognition after Bunnings?

**The legal bar is high, notice and governance are mandatory, and the OAIC expects a detailed risk assessment before any deployment.** The timeline so far:

| Date | What happened |
|---|---|
| November 2024 | The Privacy Commissioner found Bunnings breached the Privacy Act by collecting faces of people entering 63 stores in Victoria and NSW between November 2018 and November 2021, without consent, without adequate notice and without the required governance |
| August 2025 | The Commissioner issued a separate determination against Kmart over its use of facial recognition |
| February 2026 | The Administrative Review Tribunal upheld the findings that Bunnings breached APP 1 and APP 5 and should have done a formal, structured and documented risk assessment, but found Bunnings could rely on a consent exception for the limited purpose of combating serious retail crime |
| March 2026 | The Commissioner said she would not appeal, and called the decision a case study, not a green light |
| 29 July 2026 | The OAIC published updated guidance for facial recognition in retail spaces; the Kmart matter remains under Tribunal review with hearings scheduled for early 2027 |

Two points matter for software teams. First, the Tribunal and OAIC confirm that even momentary collection, such as a face scanned and discarded in milliseconds, is a collection under the Privacy Act. Second, the burden is on the retailer to show necessity, proportionality and that less intrusive options were considered. If a vendor pitches camera analytics, ask what it collects, where it is processed and how long it keeps anything, and record the answers in your risk assessment. Our guide to [the Privacy Act and AI](/guides/privacy-act-and-ai) covers the wider rules.

## What about cameras that watch staff?

**State law governs most workplace camera use, and some states have specific workplace surveillance Acts.** The OAIC notes that the Privacy Act doesn't specifically cover workplace surveillance, that state laws generally cover CCTV, and that some states have dedicated workplace surveillance laws. NSW, for example, has the Workplace Surveillance Act 2005, so a NSW store needs its notice requirements checked by an employment lawyer before cameras or tracking go live. A chain across states should build each state's notice and signage rules into the rollout checklist for any new camera or tracking system, and keep a record of when each store's notices were given.

## How should rostering handle the General Retail Award?

**Rostering logic needs the award's penalty rates and roster change rules built in, or forecasts will understate labour cost.** The General Retail Industry Award 2020, consolidated to 1 July 2026, sets these penalty rates for ordinary hours:

| When | Full time and part time | Casual (includes loading) |
|---|---|---|
| Monday to Friday after 6.00 pm | 125% | 150% |
| Saturday | 125% | 150% |
| Sunday | 150% | 175% |
| Public holiday | 225% | 250% |

The award also requires the roster to be available to staff, written notice of at least 7 days for permanent roster changes for employees other than part time staff, extended to 14 days if the employee disagrees, and bans changing a roster to avoid penalty rates. A custom tool that sets staffing levels from forecast trade can push draft rosters into Deputy, which then handles award interpretation and timesheets.

## Payments after 1 October 2026

**Surcharges on eftpos, Mastercard and Visa are gone, so card costs now sit inside margin.** The Reserve Bank's Payments System Board removed surcharging on those networks from 1 October 2026 and lowered interchange caps on domestic cards. For chains, the system change is in reporting: card fees should be visible by store and payment type, so merchandise and finance teams can see true margin.

## Where AI works in retail today

**Forecasting, product content and customer service replies are where AI is useful now.** Machine learning models improve the forecasts in a replenishment engine. Language models draft product descriptions and attributes from supplier data, with a person checking claims for accuracy under the Australian Consumer Law. A customer service assistant can answer stock and order questions from your own data. Facial recognition and emotion analytics are where AI carries the most legal risk, as above.

## What do chain retail builds cost?

**These are indicative AUD market ranges, ex GST, for planning, not quotes.** They sit in the mid complexity band Expeed publishes for Australian custom software, $40,000 to $150,000.

| Build | Indicative range |
|---|---|
| Replenishment and transfer engine | $40,000 to $120,000 |
| Store ops app with head office console | $50,000 to $130,000 |
| Cross store reporting warehouse | $40,000 to $100,000 |

Costs rise with the number of systems to integrate and how clean your product and store master data is. Our [API integration cost guide](/guides/api-integration-cost-australia) explains the integration side.

## How AWLabs would approach a retail chain project

We start with a Development Consult to hear where stock, labour or store execution goes wrong. A paid Discovery Audit then maps your POS, ERP and roster data and tests what their APIs allow, and you get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with updates every Tuesday and Friday during Sydney business hours.

We haven't built for a retail chain before. The nearest work is a website and ordering system for Kawkab, a hair and beauty products supplier, on our [client stories page](/client-stories). This page is general information, not legal advice.
