---
title: "Club management software for registered clubs: membership, gaming, AML/CTF and the NSW reforms"
metaTitle: "Registered Club Software: Members, Gaming and AML/CTF"
description: "Software for NSW registered clubs: visitor sign in, AUSTRAC expectations for gaming, the statewide exclusion register, FRT and joining POS with member data."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "RSL, leagues, bowls and other registered clubs run three regulated systems side by side: membership and visitor sign in under NSW club rules, gaming under state law and AUSTRAC's AML/CTF regime, and hospitality POS. AUSTRAC launched Federal Court proceedings against Mounties in July 2025 and ordered an external audit of Bankstown District Sports Club in May 2026, and NSW plans a statewide exclusion register with mandatory facial recognition at gaming room entries, expected in 2028. The data problem is joining POS, gaming and membership into one member view without breaching privacy. Indicative market ranges run from about $40,000 to $180,000 (AUD, ex GST), as planning figures, not quotes."
takeaways:
  - "Every pub or club with gaming machine entitlements must enrol with AUSTRAC and report suspicious matters; venues licensed for 16 or more machines also lodge threshold transaction and compliance reports."
  - "AUSTRAC's case against Mounties alleges weaknesses in risk assessment, training, transaction monitoring and enhanced due diligence, and says outsourcing parts of a program does not outsource the obligations."
  - "The NSW Gaming Reform Package plans a statewide exclusion register with mandatory facial recognition at gaming room entries, expected in 2028, and a third party exclusion scheme after that."
  - "In 2026 the Administrative Review Tribunal affirmed aspects of the Privacy Commissioner's Bunnings determination, confirming a high bar for facial recognition, and the OAIC updated its guidance in July 2026."
  - "Visitors signing in for temporary membership are asked for photo ID showing their current address, and guests of members must be entered in the register and countersigned."
faqs:
  - q: "Do small clubs have AML/CTF obligations?"
    a: "Yes, but fewer. AUSTRAC's regulatory guide for pubs and clubs with gaming machines says a venue with entitlements for 15 or fewer machines may be exempt from many obligations, but must still enrol with AUSTRAC and submit suspicious matter reports. The obligations depend on entitlements under licence, not the number of machines physically operating."
  - q: "Can our software do AML transaction monitoring for us?"
    a: "Software can surface patterns, such as large cash in with little play, repeated cash redemption terminal use or note refinement, and route them to a trained person to assess. It cannot decide whether to lodge a suspicious matter report; that judgement belongs to your AML/CTF compliance officer and program. AUSTRAC's Mounties case is a reminder that relying on a provider without oversight does not satisfy the obligations."
  - q: "Should we install facial recognition for self exclusion now?"
    a: "Get legal advice first. Liquor and Gaming NSW publishes a voluntary Code of Practice for venues using facial recognition to identify self excluded patrons, covering privacy risk, signage, secure storage, access and staff responses. The OAIC's updated guidance after the Bunnings decision says each deployment must be assessed against the Privacy Act and a precautionary approach is required. The statewide register and mandatory FRT are expected in 2028, so design anything now to fit that."
  - q: "Can we join our POS, gaming and membership data?"
    a: "Usually, through each vendor's reporting exports or APIs, and it is the most valuable data project for most clubs. The care is in the purpose: a joined member view for loyalty and service is different from profiling gaming behaviour for marketing, and the Gaming Reform Package ends VIP programs related to gaming and bans unsolicited direct marketing to potential customers. Design what each team can see around those limits."
  - q: "What about clubs in Queensland or Victoria?"
    a: "The AUSTRAC obligations are national, but gaming and liquor rules are state based. Victoria's gaming venues are regulated by the Victorian Gambling and Casino Control Commission, and Queensland's by its Office of Liquor and Gaming Regulation. A club group across states needs each state's rules as configuration, not a separate system."
sources:
  - title: "Pubs and clubs with gaming machines: regulatory guide"
    url: "https://www.austrac.gov.au/industry-and-business/education-and-resources/publications-and-resources/regulatory-guide-pubs-and-clubs"
    publisher: "AUSTRAC"
  - title: "AUSTRAC launches civil penalty proceedings against pokies giant Mounties"
    url: "https://www.austrac.gov.au/news-and-media/media-release/austrac-launches-civil-penalty-proceedings-against-pokies-giant-mounties"
    publisher: "AUSTRAC"
  - title: "AUSTRAC steps in over suspected AML weaknesses at NSW club"
    url: "https://www.austrac.gov.au/news-and-media/media-release/austrac-steps-suspected-aml-weaknesses-nsw-club"
    publisher: "AUSTRAC"
  - title: "Gaming Reform Package"
    url: "https://www.nsw.gov.au/business-and-economy/liquor-and-gaming/gaming/gaming-reform-package"
    publisher: "Liquor and Gaming NSW"
  - title: "Code of Practice: Facial Recognition Technology in Hotels and Clubs"
    url: "https://www.nsw.gov.au/business-and-economy/liquor-and-gaming/resources/facial-recognition-technology-hotels-and-clubs"
    publisher: "Liquor and Gaming NSW"
  - title: "Club rules for visitors"
    url: "https://www.nsw.gov.au/business-and-economy/liquor-and-gaming/licensed-venues/club-rules-for-visitors"
    publisher: "Liquor and Gaming NSW"
  - title: "Privacy Commissioner publishes updated guidance on facial recognition in retail spaces"
    url: "https://www.oaic.gov.au/news/media-centre/privacy-commissioner-publishes-updated-guidance-on-facial-recognition-in-retail-spaces"
    publisher: "Office of the Australian Information Commissioner"
  - title: "About ClubGrants"
    url: "https://www.clubgrants.com.au/"
    publisher: "ClubGrants"
  - title: "SwiftPOS"
    url: "https://www.swiftpos.com.au/"
    publisher: "SwiftPOS"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "Hospitality software"
    href: "/industries/hospitality"
  - title: "Sports club management software"
    href: "/solutions/sporting-club-software"
  - title: "Using personal information in AI systems under the Privacy Act"
    href: "/guides/privacy-act-and-ai"
  - title: "Data analytics"
    href: "/services/data-analytics"
service:
  title: "Data engineering"
  href: "/services/data-engineering"
industry:
  title: "Hospitality"
  href: "/industries/hospitality"
disclaimer: legal
---

## Three regulated systems under one roof

**A registered club is a membership organisation, a gaming venue and a hospitality business at once, and each part has its own regulator and its own software.** Membership and visitor sign in follow NSW club rules. Gaming machines sit under state gaming law, Liquor and Gaming NSW's Centralised Monitoring System and AUSTRAC's anti money laundering regime. The bistro, bars and functions run on POS products such as SwiftPOS or Bluize. Each system works. The trouble is that none of them sees the whole member.

| System | Typical source | Regulator or rule | What it knows |
|---|---|---|---|
| Membership and sign in | Membership module, kiosk | NSW club rules for members, temporary members and guests | Who came in, when, as what |
| Gaming | Venue gaming system, CMS | Liquor and Gaming NSW, AUSTRAC | Machine play, payouts, cash redemption |
| POS, bistro and bars | SwiftPOS, Bluize or similar | Liquor licence, RSA | Food and drink spend, loyalty points |
| Functions and events | Booking system | Club functions authorisations | Bookings, guests, minors attending |
| Grants | ClubGrants applications | ClubGrants program | Community contributions |

The custom work this page describes is the joining layer, built carefully because the joined data is sensitive.

## Member sign in, guests and temporary members

**Visitors to a NSW club usually sign in and receive temporary membership on showing photo ID with their current address, while a member's guests are entered in the register and countersigned by the member.** Liquor and Gaming NSW's visitor rules add detail a kiosk has to handle: people attending a sporting event need not sign in, clubs may limit temporary memberships, guests must stay with the member and leave when the member does, and minors must stay with a responsible adult member. Clubs can apply for junior membership, non restricted area and club functions authorisations that change where under 18s may go.

A sign in system that knows these rules can record the right entry type, enforce guest limits and flag when a member has left but their guest has not. It also produces the data a club most often wants and rarely has: how many visitors become members, and how quickly.

## Gaming and AML/CTF: what AUSTRAC expects of club systems

**Every pub and club with gaming machine entitlements must enrol with AUSTRAC and report suspicious matters, and larger venues have more to do.** AUSTRAC's regulatory guide says venues licensed for 16 or more machines also lodge threshold transaction reports and compliance reports, while those with 15 or fewer may be exempt from many obligations. It notes that a threshold transaction report applies to a single cash transaction of $10,000 or more and is not triggered by aggregating smaller payouts.

AUSTRAC is actively enforcing. In July 2025 it launched Federal Court civil penalty proceedings against Mount Pritchard District and Community Club (Mounties), alleging its program lacked an adequate risk assessment, appropriate staff training, risk based transaction monitoring and enhanced customer due diligence controls, and a compliant independent review. AUSTRAC also said aspects of the program were outsourced to a third party provider, and that outsourcing parts of a program does not outsource the obligations. In May 2026 AUSTRAC ordered Bankstown District Sports Club to appoint an external auditor.

The guide lists ways criminals exploit gaming venues, and each is a pattern software can help a trained person notice:

- Inserting large amounts of cash into machines with little or no play before cashing out.
- Using multiple cashiers, or only cash redemption terminals, to avoid staff.
- Exchanging lower denomination notes for higher ones.
- Buying a legitimate player's winning ticket or credits for cash.

A monitoring report that pulls gaming system and cash data, highlights these patterns daily and records what the AML officer decided is a defensible build. It supports your program; it does not replace your compliance officer, your risk assessment or your independent review.

## Self exclusion and the NSW gaming reforms

**NSW plans a statewide exclusion register with mandatory facial recognition at gaming room entries, expected in 2028, followed by a third party exclusion scheme.** The Gaming Reform Package says the register will let people exclude themselves from gaming venues across NSW once, bringing existing and future exclusions onto one secure platform. Third party exclusion will allow police, venue, family and friends initiated exclusions once the register has operated for a period. The package also ends VIP programs related to gaming, bans unsolicited direct marketing to potential customers, raises the gaming machine entitlement forfeiture rate to 1 in 2 from 1 in 3, and upgrades the Centralised Monitoring System to a two way protocol over two years so venues can later offer account based play.

For a club planning software now, the lesson is to avoid building a private exclusion system the state register will replace. Build workflows that can switch to the register when it arrives: staff responses to a match, incident records and reporting. And review member marketing now against the direct marketing and VIP changes.

## ClubGrants and community contribution reporting

**ClubGrants distributes more than $100 million a year to NSW charities, sporting groups and community organisations, and clubs need tidy records of what they contributed.** The program has moved applications online through ClubGrants Online. Inside the club, the reporting problem is usually a spreadsheet that tracks committee decisions, payments and acquittals across categories.

A small reporting tool can record each application, decision and payment, link it to the general ledger, and produce the annual summary the board signs off. It is a modest build and a common quick win.

## Facial recognition and privacy: where venues have been caught out

**Facial recognition collects biometric information, which is sensitive information under the Privacy Act, and the bar for using it without consent is high.** The OAIC's July 2026 guidance update followed the Administrative Review Tribunal's 2026 decision affirming aspects of the Privacy Commissioner's November 2024 determination against Bunnings over its use of facial recognition in 62 stores. A separate August 2025 determination against Kmart remains under review, with hearings scheduled for early 2027. The OAIC says each deployment must be assessed against the Act and a precautionary approach is required.

For clubs, Liquor and Gaming NSW's voluntary Code of Practice covers facial recognition used to identify self excluded patrons: privacy risk identification, hardware, signage, secure storage, data access and use, system performance and staff responses. It does not cover facial recognition for AML, security or staff sign in. Our [Privacy Act and AI guide](/guides/privacy-act-and-ai) covers the wider principles.

## Joining POS, membership and gaming data

**A joined member view is the most valuable data project for most clubs, and the hardest to get right on privacy.** The useful version answers service questions: which members use the bistro but never the functions room, whether a new member offer converts, how visit frequency changes after a renovation. That draws on membership and POS data, and it is standard [data engineering](/services/data-engineering) work.

The risky version profiles gaming behaviour for marketing. With VIP gaming programs ending and unsolicited direct marketing banned under the reform package, a club should separate gaming data from marketing data by design: different access roles, no gaming spend in marketing segments, and a clear record of who can see what. The AML team needs gaming data; the marketing team does not.

## What do these builds cost?

**Indicative market ranges run from about $40,000 for AML monitoring reports to $180,000 for a member data platform joining POS and gaming (AUD, ex GST).** Conduct's guide puts mid sized Australian agencies at roughly $150 to $330 an hour, which is the basis for these planning figures.

| Build | Indicative range (AUD, ex GST) | Main cost drivers |
|---|---|---|
| ClubGrants and community contribution reporting | $15k to $35k | Ledger integration, approval workflow |
| AML transaction monitoring reports with decision log | $40k to $120k | Gaming system data access, number of venues, rules |
| Member data platform joining POS, membership and gaming | $60k to $180k | Vendor exports and APIs, venues, access design |

These are ranges for planning, not quotes. Vendor data access fees and hosting sit on top. Reporting on top of the platform is covered by our [data analytics](/services/data-analytics) service.

## How AWLabs would approach a club project

We have not yet built software for a registered club. We would start with a 15 minute Development Consult and then a Discovery Audit that maps your membership, gaming and POS vendors and what data each will release, reviews your AML/CTF program's reporting needs with your compliance officer, and checks the privacy design with your lawyer. The audit fee is credited in full against the build. You receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates arrive every Tuesday and Friday, and code and IP are assigned to you as they are paid for. For community sport run by the club, see our [sports club software](/solutions/sporting-club-software) page, and the [hospitality](/industries/hospitality) page for the wider sector.
