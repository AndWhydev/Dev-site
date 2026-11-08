---
title: "Veterinary clinic software: wellness plans, pet insurance claiming and group reporting"
metaTitle: "Veterinary Practice Management Software in Australia"
description: "Vet practice software in Australia: board record rules, S8 registers under NSW's new poisons law, GapOnly claiming, wellness plans, AI notes and reporting."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "A vet clinic should run a proper practice management system such as ezyVet or Provet, and build only what it can't do. The custom work that pays off is usually wellness plan subscriptions with fair billing and cancellation, reporting across a group of clinics, client apps, and AI note taking that follows the state board's record rules. Vets answer to state veterinary boards rather than AHPRA, keep drug registers under state poisons laws (NSW's changed on 5 November 2026), and sell subscriptions covered by the Australian Consumer Law's unfair contract terms rules."
takeaways:
  - "In NSW, the Veterinary Practice Regulation 2013 requires a detailed, legible record made as soon as practicable, detailed enough for another vet to continue treatment, and kept for at least 3 years."
  - "The NSW Veterinary Practitioners Board's AI record keeping guideline (GR15, November 2025) says vets remain accountable for AI generated content, must tell clients and get consent, and should label AI generated records."
  - "From 5 November 2026, NSW's Medicines, Poisons and Therapeutic Goods Act 2022 replaced the old law, changing how practices store and record Schedule 8 quantities."
  - "Since 9 November 2023, proposing, using or relying on unfair terms in standard form consumer contracts is banned and penalties apply, which covers wellness plan terms."
  - "The AVA's telemedicine policy says the treating vet must be registered where the animal is located, or have that registration recognised."
faqs:
  - q: "Is ezyVet or Provet better for an Australian clinic?"
    a: "It depends on your size, workflows and integrations, and we don't resell either. ezyVet is part of IDEXX's ecosystem, which suits clinics using IDEXX diagnostics. Provet positions itself on native AI tools and now publishes an MCP skills library for connecting AI assistants. Trial both with your own appointment types, inventory and reporting needs before deciding."
  - q: "Can we use an AI scribe for consult notes?"
    a: "In NSW, yes, under the Board's GR15 guideline: tell the client and get consent before recording, check every AI generated record for accuracy, label AI generated records, know where the data is stored and whether it trains the vendor's model, and train staff on the tool. Other states' boards may set different expectations, so check yours."
  - q: "Can we build our own wellness plan billing instead of using the PMS module?"
    a: "You can, and it makes sense when plans span several clinics, include benefits the PMS can't track, or need payment flexibility the PMS module lacks. Whatever you build has to make the price, inclusions, renewal and cancellation terms clear before sign up and avoid terms a court could find unfair."
  - q: "How does on the spot pet insurance claiming work?"
    a: "GapOnly, powered by PetSure, lets clients claim at the counter with participating insurers so they pay only the gap. Your PMS and front desk process need to support it. A custom tool can track claim outcomes and unpaid gaps across clinics, but the claim itself goes through GapOnly's process."
  - q: "Does the Privacy Act apply to a vet clinic?"
    a: "It depends. Businesses with annual turnover of $3 million or less are generally exempt unless another trigger applies, so many single clinics are outside it, while larger groups are inside it. Treat client details carefully either way: the NSW Board's AI guideline expects vets to know where AI notes are stored and to protect client confidentiality."
  - q: "What does a client app for a vet group cost?"
    a: "As an indicative planning range, about $50,000 to $150,000 (AUD, ex GST), depending on PMS integration, bookings, wellness plan features and payments. That is a budgeting range, not a quote."
sources:
  - title: "GR15 AI Based Record Keeping and Note Taking"
    url: "https://big-charity-233c476a87.media.strapiapp.com/GR_15_AI_Based_Record_Keeping_and_Note_Taking_c52b1c608b.pdf"
    publisher: "Veterinary Practitioners Board of NSW"
  - title: "New Medicines, Poisons and Therapeutic Goods Laws"
    url: "https://www.vpb.nsw.gov.au/news/news-24"
    publisher: "Veterinary Practitioners Board of NSW"
  - title: "Telemedicine practice policy"
    url: "https://www.ava.com.au/policy/telemedicine-practice"
    publisher: "Australian Veterinary Association"
  - title: "Contracts and unfair contract terms"
    url: "https://www.accc.gov.au/business/selling-products-and-services/contracts"
    publisher: "ACCC"
  - title: "Small business and the Privacy Act"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business"
    publisher: "OAIC"
  - title: "GapOnly: how it works"
    url: "https://www.gaponly.com.au/"
    publisher: "GapOnly (PetSure)"
  - title: "ezyVet"
    url: "https://www.ezyvet.com/"
    publisher: "IDEXX"
  - title: "Provet veterinary practice management software"
    url: "https://www.provet.cloud/"
    publisher: "Provet"
  - title: "Vetstoria"
    url: "https://www.vetstoria.com/"
    publisher: "Vetstoria"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "Healthcare software"
    href: "/industries/healthcare"
  - title: "Cosmetic and medispa clinic software"
    href: "/solutions/cosmetic-clinic-software"
  - title: "Physiotherapy clinic software"
    href: "/solutions/physiotherapy-clinic-software"
  - title: "Data analytics"
    href: "/services/data-analytics"
service:
  title: "Web and mobile apps"
  href: "/services/web-mobile-apps"
industry:
  title: "Healthcare"
  href: "/industries/healthcare"
disclaimer: legal
---

## Why isn't vet software just human health software for animals?

**Because the regulator, the payer and the business model are all different.** Vets are registered by state and territory veterinary boards, not AHPRA. There is no Medicare: clients pay at the counter, and insured clients claim from their pet insurer. And many clinics sell wellness plans, a monthly subscription for vaccinations, parasite control and checkups, which makes a vet clinic part subscription business.

So the build list looks nothing like a GP's. It includes subscription billing that stands up to consumer law, insurance claim tracking, drug register reconciliation under state poisons laws, and reporting for groups that have bought several clinics and now run three different systems.

## Records under a state board, and what that means for software

**Your records have to satisfy the board in the state where you practise, and those rules are specific.** In NSW, the Veterinary Practice Regulation 2013 requires a detailed, legible record of consultations and treatments, made as soon as practicable, in enough detail for another vet to continue treatment, and kept for at least 3 years. When another vet takes over an animal's care and asks for the history, copies or originals of relevant case histories go directly to that vet.

For software, that means:

- Records must be exportable as a complete, readable case history, not just a screen view.
- Retention settings need to keep at least the minimum period, with longer periods where the practice chooses.
- Edits should be tracked, so the record shows what was written at the time.

Groups operating in several states should check each board's rules and store them as configuration per clinic.

## AI notes and the NSW Board's GR15 guideline

**The NSW Board has published a specific AI rule for vets: GR15, AI Based Record Keeping and Note Taking, issued November 2025.** Its policy points are short:

1. Vets remain legally accountable for all AI assisted or generated content.
2. AI must not perform or replace restricted acts of veterinary science.
3. All AI generated records must be verified for accuracy and relevance.
4. Client and patient data must be stored and handled under the Privacy Act where it applies.
5. Vets must inform the client when AI is used and obtain consent.
6. Vets need to understand the tool's intended use and limits.

The guideline adds that AI generated records should be clearly identifiable and labelled, and that vets should know where the data is located and whether it is used to train the vendor's model.

That reads like a specification. An AI note tool built to it asks for and records consent at the start of the consult, drafts the note, requires the vet to review and approve it, tags the saved record as AI assisted, and keeps the audio and text in an Australian region with no model training on clinic data. Provet already markets native AI tools, so check what your PMS offers before building. For a group that wants its own templates or one tool across clinics on different systems, our [AI integration](/services/ai-integration) service covers the build.

## Schedule 4 and 8 registers under NSW's new poisons law

**From 5 November 2026, the Medicines, Poisons and Therapeutic Goods Act 2022 and its Regulation replaced NSW's previous medicines and poisons legislation.** NSW Health's notice through the Veterinary Practitioners Board says the changes affect how vets store and record Schedule 8 medicine quantities, store pentobarbital and obtain unregistered goods for urgent use. Most changes aim to add flexibility and clarify requirements rather than add controls, and a separate pentobarbital log is not required for vet practices.

Register keeping itself usually sits in the PMS or a paper register, depending on what the rules allow. What a group can sensibly build is oversight: reconciliation tasks scheduled per clinic, discrepancies flagged to the clinical director, and evidence of each check kept in one place. Before configuring any of it, read NSW Health's factsheet for veterinary practitioners, and check the equivalent rules in each other state you operate in.

## Wellness plans that stay on the right side of consumer law

**A wellness plan is a consumer subscription, and its terms are a standard form consumer contract.** The ACCC says changes that came into effect on 9 November 2023 ban proposing, using or relying on unfair terms in standard form contracts, with penalties for breaches. Terms that let the clinic change prices without notice, lock clients in with no way out, or make cancellation hard are exactly the kind of terms to avoid.

| Design choice | Lower risk approach |
|---|---|
| Sign up | Price, inclusions, minimum term and renewal shown before payment |
| Price changes | Advance notice with the option to cancel |
| Cancellation | Online, as easy as signing up, with any exit fee explained up front |
| Unused inclusions | Clear rule on whether they roll over or lapse |
| Pet dies or is rehomed | A compassionate, documented exit path |

Billing is the technical core: direct debit or card schedules, failed payment retries, pro rata changes when a pet moves to a different plan, and a ledger that tells the front desk exactly what a pet is entitled to today. If the PMS module can't do that across several clinics, a custom billing layer can. Your lawyer should review the terms; we build the system to match them.

## Pet insurance at the counter

**On the spot claiming means the client pays only the gap, and the clinic waits for the insurer to pay the rest.** GapOnly, powered by PetSure, offers this in Australia through a list of participating insurance partners. Clinics need a front desk process that checks eligibility before treatment and a way to follow up claims that are delayed or declined.

The gap a group usually feels is visibility. Which clinics have the most declined claims? How much is waiting on insurers this month? Which treatment types get queried most? A small reporting tool that matches PMS invoices to claim outcomes answers those questions without changing the claim process itself.

## Reminders, recalls and the client app

**Vaccination reminders are the vet equivalent of a GP recall: they bring revenue and protect animals, and practice management systems already include them.** Custom work starts when a group wants reminders tied to wellness plan entitlements ("your plan covers this, book now"), sent in the client's preferred channel, and measured from send to booking.

A client app adds booking (Vetstoria and PMS booking modules already cover this), plan balance, reminders, pet records and payment. Build it only if your brand and plan program justify a product clients will install. The [web and mobile apps](/services/web-mobile-apps) service covers the build.

## Telehealth across state lines

**The AVA's telemedicine policy says the treating vet must be registered in the state or territory where the animal is located, or have that registration recognised there, and generally needs a bona fide veterinarian, client and patient relationship.** Tele triage in emergencies is the main exception. The NSW Board also publishes a guideline on technology based patient consultations.

A telehealth tool therefore needs to capture where the animal is, check the vet's registration covers that location, record whether a prior relationship exists, and produce the same complete record as an in person consult.

## Indicative costs

**Indicative planning ranges for the Australian market, not quotes.** Conduct's cost guide puts mid sized Australian agencies at roughly $150 to $330 an hour.

| Build | Indicative range (AUD, ex GST) | Main drivers |
|---|---|---|
| Wellness plan billing with direct debit | $25k to $70k | Plan rules, payment provider, PMS sync, number of clinics |
| Group reporting across clinics | $30k to $90k | Number of PMS products, data quality, measures |
| Client app | $50k to $150k | Booking, plan features, payments, PMS integration |

## How AWLabs would approach a vet project

After a Development Consult, a paid Discovery Audit (credited in full against the build) checks what your PMS exposes and whether its own modules already solve the problem. You then get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates come every Tuesday and Friday, and code is assigned to you as it is paid for. We haven't yet built software for a veterinary practice, so we lean on your clinical director and practice manager for the clinical and regulatory calls. For reporting work, see [data analytics](/services/data-analytics).
