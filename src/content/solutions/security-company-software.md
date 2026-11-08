---
title: "Security guard company software: licences, rosters, patrols and incident reports"
metaTitle: "Security Guard Management Software for Australian Companies"
description: "Software for Australian guarding firms: licence checks per shift, 24/7 rosters under the Security Award, patrol proof, incident reports and subcontractors."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "This page is about manned guarding, patrols and monitoring, not cyber security. Guarding platforms such as Trackforce, Guardhouse, Belfry and Silvertrac handle scheduling, guard tours and reports well, but Australian firms usually need a layer they don't provide out of the box: checking each guard's state licence subclass against each shift, applying the Security Services Industry Award to 24/7 rosters, tracking subcontracting chains under NSW master licence rules, and reporting SLAs to clients. In NSW, both the original master licensee and any subcontracting master licensee must hold a subclass that covers the operatives they supply. Indicative market ranges for a licence compliance layer start around $20,000 to $60,000 (AUD, ex GST), as a range, not a quote."
takeaways:
  - "Check the licence subclass, not just the licence. NSW Class 1A covers unarmed guarding and crowd control; monitoring centres need 1E, guard dog work 1D and armed work 1F."
  - "Every business that supplies guards in NSW, including subcontractors, needs a master licence with a subclass that covers the number of operatives it supplies."
  - "GPS tracking of guards can be tracking surveillance under the NSW Workplace Surveillance Act, which requires written notice at least 14 days before surveillance starts."
  - "Rostering 24/7 sites is an award problem first. Build penalty and overtime logic from the Security Services Industry Award and have your payroll adviser sign it off."
  - "Incident reports are evidence. Time stamps, unedited originals, photos and a clear chain of who saw what matter more than a nice template."
faqs:
  - q: "What is the best security guard management software in Australia?"
    a: "There isn't a single best product. Trackforce, Guardhouse, Belfry and Silvertrac are among the platforms built for guarding firms, and general rostering tools such as Deputy are also used. Compare them on Australian award handling, licence tracking, client portals and API access. Many firms are best served by one of these platforms plus a custom compliance or reporting layer, rather than a full custom build."
  - q: "Do our subcontractors need their own master licence in NSW?"
    a: "Yes. NSW Police's Security Licensing and Enforcement Directorate says any business that provides licensed security operatives to carry on a security activity must have a security licence, and both the original master licensee and the subcontracting master licensee must hold a licence subclass that covers the number of operatives they intend to provide."
  - q: "How do we check a guard's NSW licence?"
    a: "NSW security operative and master licences can be checked on the public register that NSW Police links from its Verify a Security Licence page. Your system should store the licence number, subclasses and expiry, recheck on a schedule, and block rostering when a licence lapses or lacks the subclass a shift needs."
  - q: "Can we track guards with GPS during patrols?"
    a: "Yes, but in NSW tracking surveillance is regulated by the Workplace Surveillance Act 2005. Section 10 requires written notice at least 14 days before surveillance starts, covering the kind of surveillance, how it will be done, when it starts, whether it is continuous or intermittent and whether it is ongoing. Other states have their own surveillance laws, so check each one you operate in."
  - q: "Do licence rules differ in Victoria?"
    a: "Yes. Victoria Police's Licensing and Regulation Division administers the Private Security Act 2004 and lists the activities and security guard sub activities a private security licence allows. Build your licence model so each state's classes map to the shift requirements separately, rather than forcing Victorian licences into NSW categories."
  - q: "Can AI write our incident reports?"
    a: "AI can turn a guard's dictated notes into a structured draft, for the guard to check and sign. It shouldn't invent detail, change times or decide whether police or the client must be notified. Keep the guard's original notes and media unedited beside the draft, so the record holds up if it is challenged."
sources:
  - title: "Class 1 licences"
    url: "https://www.police.nsw.gov.au/online_services/sled/security_licences/class_1_licences"
    publisher: "NSW Police Force"
  - title: "Verify a security licence"
    url: "https://www.police.nsw.gov.au/online_services/sled/security_licences/class_1_licences/verify_a_security_licence"
    publisher: "NSW Police Force"
  - title: "Do I need a master licence if I am subcontracting?"
    url: "https://www.police.nsw.gov.au/online_services/security_licensing_and_enforcement_directorate/security_licences/frequently_asked_questions/master_licence_faqs_contents/q._do_i_need_a_master_licence_if_i_am_subcontracting"
    publisher: "NSW Police Force"
  - title: "Private security"
    url: "https://www.police.vic.gov.au/private-security"
    publisher: "Victoria Police"
  - title: "Security Services Industry Award [MA000016] summary"
    url: "https://www.fairwork.gov.au/employment-conditions/awards/awards-summary/ma000016-summary"
    publisher: "Fair Work Ombudsman"
  - title: "Workplace Surveillance Act 2005, section 10: Notice of surveillance required"
    url: "https://www.austlii.edu.au/au/legis/nsw/consol_act/wsa2005245/s10.html"
    publisher: "AustLII"
  - title: "Workplace Surveillance Act 2005, section 11: Additional requirements for camera surveillance"
    url: "https://www.austlii.edu.au/au/legis/nsw/consol_act/wsa2005245/s11.html"
    publisher: "AustLII"
  - title: "Labour hire law changes 2026"
    url: "https://www.labourhireauthority.vic.gov.au/about-us/labour-hire-law-changes-2026/"
    publisher: "Labour Hire Authority (Vic)"
related:
  - title: "Labour hire software"
    href: "/solutions/labour-hire-software"
  - title: "Facility management software"
    href: "/solutions/facility-management-software"
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
  - title: "Privacy Act rules for small business software"
    href: "/guides/privacy-act-small-business-software"
service:
  title: "Web and mobile apps"
  href: "/services/web-mobile-apps"
industry:
  title: "Real Estate"
  href: "/industries/real-estate"
disclaimer: legal
---

## Can a guard work this shift? Start with the licence

**The first question your software must answer, before anything else, is whether this guard holds the right licence subclass for this shift in this state, today.** Most rostering tools store a licence number and an expiry date. Very few understand subclasses, and in guarding the subclass is what matters.

NSW licences operatives by class. The ones a guarding firm meets most:

| NSW subclass | What it covers | Shift types that need it |
|---|---|---|
| 1A Security Officer | Patrol, protect or guard property while unarmed, static or mobile, and crowd control | Static sites, mobile patrols, venues and events |
| 1B Bodyguard | Bodyguard work | Close protection |
| 1C Cash in Transit Guard | Guarding cash in transit (armed CIT also needs 1F) | CIT runs |
| 1D Guard Dog Handler | Guarding property with a dog | Dog patrols |
| 1E Monitoring Centre Operator | Monitoring alarm activations for property protection | Control room |
| 1F Armed Guard | Guarding approved classes of property while armed, with a firearms licence or permit | Armed posts |

Businesses that supply guards hold a master licence, with subclasses MA to ME on the NSW register. Victoria licenses under the Private Security Act 2004, through Victoria Police's Licensing and Regulation Division, with its own activities and security guard sub activities. Other states differ again.

A licence compliance layer turns this into rules:

1. Each site and post declares the subclasses it needs, per state.
2. Each guard's licences, subclasses, expiries and first aid currency are stored and rechecked against the public register on a schedule.
3. The roster refuses an assignment that doesn't match, and says why.
4. Lapses within 30 days alert the guard and the scheduler.
5. Every shift worked keeps a snapshot of the licence that was valid at the time, so you can prove it a year later.

## How do you roster 24/7 sites under the Security Award?

**Treat the Security Services Industry Award as the specification, because overnight, weekend and public holiday cover is where the money and the risk sit.** The Fair Work Ombudsman's summary notes the award doesn't cover some work, such as most cash in transit, prisons and detention, alarm installation and monitoring system maintenance, and security staff employed by businesses outside the security industry. Classification, shift penalties, overtime and breaks then depend on the award's own clauses.

Generic rostering tools often get the common cases right and the edge cases wrong: a guard covering a no show past their rostered hours, a shift that crosses midnight into a public holiday, or a split between two sites on one night. The design that works is to keep scheduling in your platform, interpret the award in one tested rules engine, and send every unusual shift to a person before pay. Your payroll adviser signs off the interpretation before it is coded.

## How do you prove a patrol happened?

**With independent signals captured at the time: a checkpoint scan, a time, an optional location point and, for exceptions, a photo.** NFC or QR checkpoints on a route are the standard guard tour method. GPS adds a trail but brings legal obligations.

In NSW, the Workplace Surveillance Act 2005 regulates camera, computer and tracking surveillance of employees. Section 10 requires written notice at least 14 days before surveillance starts, unless the employee agrees to less, and the notice must say what kind of surveillance it is, how it will be carried out, when it will start, whether it is continuous or intermittent and whether it is for a limited period or ongoing. Email counts as written notice. Section 11 adds that camera surveillance needs visible cameras and signs at each entrance. A guard tour app that tracks location should capture only what the patrol needs, tell the guard when it is on, and keep that notice on file.

## What makes an incident report hold up?

**A report holds up when it is made quickly, by the person who saw it, with the original evidence preserved and every later change recorded.** Clients forward reports to insurers; police may rely on them; lawyers may test them in court months later.

What the app should enforce:

- The report starts on the guard's phone at the scene, with the time and site filled automatically.
- Who, what, where and when are separate fields, not one free text box.
- Photos and video attach to the report with their original metadata, unedited.
- Edits after submission create a new version; the first version is never overwritten.
- Supervisor review is recorded with name and time.
- Notifications to police, the client or an insurer are logged against the report.

AI can help here, carefully. It can turn a guard's dictated account into a clear draft, for the guard to check and sign. It shouldn't add detail, smooth over inconsistencies or decide whether something is reportable.

## How do you manage subcontracting chains?

**Know every business between your client and the guard on the post, and prove each one is licensed for what it supplies.** NSW Police says both the original master licensee and the subcontracting master licensee must hold a licence subclass covering the number of operatives they intend to provide. Labour hire regulators watch the same thing: Victoria's Labour Hire Authority lists security as a high risk industry and its standard licence conditions there restrict cash payments and the use of independent contractors and subcontractors, with reporting on subcontractor use.

A subcontractor register in your system should hold each subcontractor's master licence and subclasses, insurance certificates, the guards they supply and those guards' own licences, plus the sites they cover. When a subcontractor's licence or insurance lapses, the shifts they cover should turn red on the roster. Our [labour hire software page](/solutions/labour-hire-software) covers the licensing side in more detail.

Two checks are worth automating at onboarding of any new subcontractor: look up its master licence and subclasses on the NSW public register, and confirm its insurance certificates are current and name the right activities. Then repeat both on a schedule, because a subcontractor whose licence is suspended mid contract leaves you supplying unlicensed guards without knowing it.

## What do clients want from a portal?

**Proof the contract is being delivered, without phoning the operations manager.** Facility managers and property owners buying guarding care about a short list:

| Client question | Portal feature |
|---|---|
| Was the post covered every hour? | Shift coverage against contracted hours, with gaps flagged |
| Were patrols done on time? | Checkpoint completion by route and night |
| What happened last night? | Incident and activity feed, with reports attached |
| Are your guards licensed? | Licence status for each guard on their site |
| Are you meeting the SLA? | Monthly SLA report, generated, not handmade |

If you serve facility managers, our [facility management software page](/solutions/facility-management-software) explains what they track on their side. Portal design is covered in our [customer portal guide](/guides/customer-portal-development).

## Where does video analytics fit in a monitoring centre?

**Video analytics helps a monitoring operator see the alarm that matters sooner; it doesn't replace the operator.** Typical uses are filtering false alarms from wind, animals and headlights, flagging a person in a closed area after hours, and summarising an overnight event for the morning report. The same surveillance laws apply to cameras at the client's site, and personal information captured in footage is covered by the Privacy Act if your business is an APP entity. Keep footage retention short and purpose bound, and keep the decision to dispatch with a licensed 1E operator.

## What does guarding software cost?

**Indicative Australian market ranges, AUD ex GST, for builds that extend an existing guarding or rostering platform.**

| Build | Indicative range |
|---|---|
| Licence compliance layer on a rostering tool | $20k to $60k |
| Guard tour and incident app, with offline support | $40k to $120k |
| Client portal with SLA reporting | $30k to $90k |
| Award rules engine and payroll integration | $30k to $80k |

The basis is Australian agency rates for design, build, testing and launch, with maintenance of 15 to 20% a year on top. These are ranges, not quotes.

## How AWLabs approaches security company software

AWLabs hasn't yet delivered a project for a guarding company, and we don't hold a security licence. We bring the [web and mobile app](/services/web-mobile-apps) and [workflow automation](/services/workflow-automation) engineering; your compliance manager and advisers own the licensing and award interpretation. It starts with a Development Consult. A paid Discovery Audit then maps your platform, licences, rosters and client reporting, with the fee credited in full against the build, and you get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates arrive every Tuesday and Friday, Sydney time, and the code and IP are assigned to you as they are paid for.
