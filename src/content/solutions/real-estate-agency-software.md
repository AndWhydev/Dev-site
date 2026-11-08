---
title: "Real estate CRM and AI for Australian sales agencies"
metaTitle: "Real Estate CRM Australia: Extend VaultRE, Rex or AgentBox"
description: "Real estate CRM in Australia: where VaultRE, Rex and AgentBox stop, how portal feeds work, underquoting rules software must respect, and where AI helps agents."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Most Australian sales agencies should keep their real estate CRM (VaultRE, Rex, AgentBox or Box+Dice) as the system of record and build around it. Custom work pays off in three places: vendor reports that join CRM, portal and campaign data; buyer enquiry triage and follow up, including after hours; and listing tools that keep advertised prices inside the agent's estimate. Underquoting law in NSW and Victoria means any software that touches price guides must never publish a figure below the agent's current estimate. Typical builds sit in the $10,000 to $70,000 (AUD, ex GST) market range depending on scope, as a range, not a quote."
takeaways:
  - "Keep the CRM as the record of listings, contacts and appraisals. Build reporting, triage and automation on top through its API and the portals' APIs."
  - "realestate.com.au accepts listings through REAXML or its Listing Upload API, and Domain's Listings Management API is free for developers and the agencies they work with, so portal data can be joined to CRM data."
  - "In NSW an agent's advertised price can never be below the estimated selling price in the agency agreement, and a range can be no wider than 10%."
  - "In Victoria the Statement of Information became the Property Price Statement, and from 1 October 2026 agents must disclose the seller's reserve 7 days before an auction or fixed date sale."
  - "AI can triage and draft, but price, property condition and legal answers to buyers stay with the licensed agent."
faqs:
  - q: "What is the best real estate CRM in Australia?"
    a: "For most residential sales agencies the choice is between VaultRE, Rex, AgentBox and Box+Dice, and each has loyal users. Choose on how well it handles your appraisal and listing workflow, portal uploads, trust accounting links if you also run a rent roll, and how open its API is. We don't resell any of them, and we would rather extend the one your team already knows than move you."
  - q: "Should an agency build its own CRM?"
    a: "Rarely. The established CRMs already handle portal feeds, contact databases, appraisals and e-marketing for a monthly fee no custom build can match. A custom CRM only makes sense for a large group whose structure, reporting or commission model genuinely doesn't fit, and even then it usually starts as a reporting and workflow layer over the existing CRM."
  - q: "Can AI answer buyer enquiries for us?"
    a: "It can acknowledge every enquiry within minutes, answer factual questions from the listing, book inspections and qualify buyers, then hand the conversation to the agent. It shouldn't quote prices beyond the published guide, comment on the property's condition or answer legal questions about the contract. Those answers need the licensed agent, and the system should log what was said."
  - q: "Can software stop our agents underquoting?"
    a: "Software can make underquoting much harder. It can store the current estimated selling price from the agency agreement, block any advertised figure or range below it, flag ranges wider than 10%, and prompt the agent to update the agreement and adverts when the estimate changes. The legal responsibility stays with the agent and the licensee."
  - q: "How do we get portal statistics into our vendor reports?"
    a: "Domain's Listings Management API returns agency statistics and enquiries once the agency authorises access, and REA's Partner Platform offers lead and performance APIs to approved partners. A reporting layer pulls those, plus CRM activity and campaign spend, into one report per listing. Access terms vary, so confirm them before scoping."
  - q: "Have you built software for real estate agencies before?"
    a: "Not yet. We haven't delivered a project for a real estate agency, so we won't point to one. We bring software, integration and AI engineering; your licensee in charge and advisers own the interpretation of the agency rules."
sources:
  - title: "Underquoting guidance for property professionals"
    url: "https://www.nsw.gov.au/housing-and-construction/property-professionals/working-as-an-agent/underquoting-guidance"
    publisher: "NSW Fair Trading"
  - title: "Underquoting (selling a property)"
    url: "https://www.fairtrading.nsw.gov.au/housing-and-property/buying-and-selling-property/selling-a-property/underquoting"
    publisher: "NSW Fair Trading"
  - title: "Understanding property prices and underquoting"
    url: "https://www.consumer.vic.gov.au/housing/buying-and-selling-property/understanding-property-prices-and-underquoting-for-buyers"
    publisher: "Consumer Affairs Victoria"
  - title: "False or misleading claims"
    url: "https://www.accc.gov.au/business/advertising-and-promotions/false-or-misleading-claims"
    publisher: "ACCC"
  - title: "REA Partner Platform"
    url: "https://partner.realestate.com.au/"
    publisher: "REA Group"
  - title: "Listings Management API"
    url: "https://developer.domain.com.au/docs/latest/apis/pkg_listing_management"
    publisher: "Domain"
  - title: "Renters get landmark protections against privacy breaches and misleading rental ads"
    url: "https://www.nsw.gov.au/ministerial-releases/renters-get-landmark-protections-against-privacy-breaches-and-misleading-rental-ads"
    publisher: "NSW Government"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Property management software and AI"
    href: "/solutions/property-management-software"
  - title: "Real estate software"
    href: "/industries/real-estate"
  - title: "Custom CRM development cost in Australia"
    href: "/guides/custom-crm-development-cost-australia"
  - title: "Build vs buy software"
    href: "/guides/build-vs-buy-software"
  - title: "Conveyancing software: PEXA, identity and fraud controls"
    href: "/solutions/conveyancing-software"
service:
  title: "CRM integration"
  href: "/services/crm-integration"
industry:
  title: "Real estate"
  href: "/industries/real-estate"
disclaimer: legal
---

## Where do agent hours go, and which of them can software take?

**In a sales agency the hours that leak are rarely the listing itself. They go on chasing buyer enquiries, rebuilding the same vendor report every week, and retyping data between the CRM, the portals and the campaign platform.** Those are the jobs worth automating. Appraising, negotiating and the vendor relationship are not.

| Task | Typical pain | What software can do |
|---|---|---|
| Buyer enquiries from portals | Dozens per listing, many outside business hours, follow up uneven | Acknowledge instantly, answer listing facts, book inspections, qualify, route to the agent |
| Inspection attendance | Paper or tablet sign in, then manual entry | Capture once, sync to the CRM, trigger follow up sequences |
| Weekly vendor report | Copying portal views, enquiries and spend into a template | Generate per listing from CRM, portal and campaign data |
| Price guide changes | Agreement, adverts and portal copy drift apart | Store the current estimate and block adverts below it |
| Listing copy | Written fresh for each property | Draft from the appraisal and agent notes for the agent to edit |
| Office and group reporting | Each office exports differently | One dashboard across offices and agents |

## VaultRE, Rex, AgentBox or Box+Dice: where is the ceiling?

**These CRMs do the core well: contacts, appraisals, listings, portal uploads, e-marketing and, for some, rent roll links. The ceiling is usually reporting and joining data across systems, not the core features.** An agency hits it when the principal wants a view the CRM's reports won't produce, such as enquiry to inspection to offer conversion by agent across three offices, with campaign spend beside it.

Paid advertising platforms such as Campaign Agent and Realhub hold vendor spend in their own silo. Reviews sit in RateMyAgent. Signed agency agreements and forms from REINSW or REIV templates sit in DocuSign or a forms platform. None of this is wrong, but it means every serious report is a copy and paste exercise.

Our advice is to keep the CRM and build around it. Replacing it means rebuilding portal feeds, e-marketing and years of contact history, and few agencies get a return on that. Our [build vs buy guide](/guides/build-vs-buy-software) explains the trade off in general terms, and the [custom CRM cost guide](/guides/custom-crm-development-cost-australia) covers what a full replacement would involve.

## How do listings reach realestate.com.au and Domain?

**Your CRM pushes each listing to the portals as a registered uploader, using REA's REAXML format or its Listing Upload API, and Domain's Listings Management API.** At the time of writing, REA's Partner Platform describes a Listing Upload API that supports both REAXML and API based approaches, plus a Leads API for real time enquiries. Domain says its Listings Management API is free to developers and any agency they work with, covers listing upload, enquiries and statistics, and is authorised by the agent logging in with their Domain credentials.

That matters for custom work in two ways:

1. **You rarely need to touch uploads.** The CRM already does them. Building your own feed duplicates a solved problem.
2. **The read side is where the value is.** Enquiries and statistics from the portals can be joined to CRM activity, which is what vendor reports and agent dashboards need.

Portal data goes stale when the CRM and portal disagree, for example after a price change that was made on one but not the other. A nightly reconciliation that compares the CRM record with what each portal is showing catches those before a buyer or the regulator does.

## What must software never get wrong on price guides?

**In NSW, an agent must not advertise or state a price below the estimated selling price in the agency agreement, and in Victoria an advertised price below the seller's reserve, an offer the seller has rejected or the agent's current estimated selling price is underquoting.** Any software that writes, publishes or suggests price guides has to be built around those rules.

| Rule | NSW | Victoria |
|---|---|---|
| Where the estimate lives | Estimated selling price in the agency agreement, with evidence given to the seller | Estimated selling price based on comparable sales research |
| Range width | No wider than 10% | Single figure or a range of up to 10% |
| Banned forms | Phrases such as "offers over" or "$500,000+" that obscure the estimate | Qualifying terms such as "from" or "offers above" |
| Disclosure document | Agency agreement and evidence of the estimate | Property Price Statement (replaced the Statement of Information), shown with the online advert |
| When the estimate changes | Revise it, notify the seller, amend the agreement, withdraw outdated adverts | Update the price information during the campaign |
| Reserve | Not set by these rules | From 1 October 2026, disclose the reserve 7 days before an auction or fixed date sale |

NSW Fair Trading lists a penalty notice of $2,200, court fines of up to $22,000 and loss of commission for underquoting. Consumer Affairs Victoria also requires the Property Price Statement within 2 business days of a buyer's request and the final sale price to stay online for at least 18 months once the sale is unconditional.

A price guard in software is simple to describe and worth building carefully:

- Store the current estimate, with its date and evidence, against the listing.
- Reject any advert, portal price or AI drafted copy whose figure or range falls below it.
- Flag ranges wider than 10% and banned phrases before publishing.
- When the estimate is revised, list every live advert and document that now needs updating.
- In Victoria, track the reserve deadline for each auction and fixed date sale.

## Where does AI help with buyer enquiries, and where does it create risk?

**An AI assistant is good at speed and consistency: replying to every enquiry within minutes, answering factual questions from the listing, booking inspections and summarising each buyer for the agent.** It becomes a risk when it starts saying things only a licensed agent should say.

Good uses, all logged in the CRM:

- Replying to portal and website enquiries at 10pm with inspection times and the contract request process.
- Qualifying buyers (finance, timing, other properties) and tagging them.
- Drafting the agent's follow up after an open home from the sign in data.
- Answering calls when the agent is in an appraisal, through an [AI voice agent](/services/ai-voice-agents) that books callbacks.

Red lines: quoting any price other than the published guide, describing the property's condition beyond the listing, answering questions about the contract or special conditions, and making promises about the vendor's position. The Australian Consumer Law prohibits misleading or deceptive conduct whether or not a business meant to mislead, so an assistant that improvises is a liability. Our [AI chatbot](/services/ai-chatbot) work keeps answers grounded in the listing record and hands off anything outside it.

## Listing copy and edited photos

**AI drafted listing copy is fine as a first draft for the agent, provided it is checked against the property and contains nothing the agent can't substantiate.** Edited and virtually staged photos carry the same misleading conduct risk in sales as anywhere else. For rentals, NSW has passed a specific disclosure rule for digitally altered or AI generated images, which the NSW Government says starts in early 2027; we cover it on the [property management software](/solutions/property-management-software) page because it applies to rental advertising.

## What do typical builds cost?

**Most agency builds are focused layers over the CRM, and they sit in the lower half of the mid complexity range for Australian custom software.** Expeed's 2026 survey of Australian costs puts mid complexity systems at $40,000 to $150,000 and simple internal tools at $15,000 to $40,000; agency work is usually smaller because the CRM carries the core.

| Build | Indicative range (AUD, ex GST) | Main cost drivers |
|---|---|---|
| Vendor reporting dashboard joining CRM, portal and campaign data | $20k to $50k | Number of data sources, office structure, report formats |
| AI enquiry triage and follow up assistant on the CRM | $25k to $70k | Channels (portal, web, SMS, voice), CRM API depth, handoff rules |
| Listing copy and price guide checker | $10k to $30k | Rule set per state, approval workflow |

These are market ranges, not quotes. Ongoing costs include hosting, model usage for AI features and maintenance, typically 15 to 20% of the build a year.

## How AWLabs works with agencies

We start with the CRM you already run, check what its API and the portal APIs expose, and tell you if configuration alone would solve the problem. If custom work is needed, it starts with our Discovery Audit, a paid step credited in full against the build, followed by a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, you get updates every Tuesday and Friday in Sydney business hours, and the code and IP are assigned to you as they are paid for. We haven't yet delivered a project for a real estate agency, and we don't hold any real estate licence; your licensee in charge owns the regulatory calls. The first step is a Development Consult. See our [CRM integration](/services/crm-integration) and [data analytics](/services/data-analytics) services, or the [real estate industry](/industries/real-estate) page.
