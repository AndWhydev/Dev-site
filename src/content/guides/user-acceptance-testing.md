---
title: "How to do user acceptance testing: a buyer's guide with a template"
metaTitle: "How to Do User Acceptance Testing (UAT): A Buyer's Guide"
description: "How to run UAT when you are buying custom software: acceptance criteria, scenarios from real work, defects versus change requests, sign off and warranty."
eyebrow: "How to guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "User acceptance testing (UAT) is the stage where the people who will use new software check that it supports their real work, before the buyer formally accepts it. It is not the vendor's quality assurance. To run it well, agree acceptance criteria in the contract before the build, write test scenarios from real jobs, use realistic test data, log defects with evidence and a severity, settle whether each issue is a defect or a change request against the agreed scope, and tie sign off to the milestone payment and the start of the warranty period."
takeaways:
  - "UAT checks fitness for your business; the vendor's QA checks the software works as built. You need both, and UAT should find few bugs."
  - "Acceptance criteria belong in the contract or Schedule of Work. If they are written after the build, every disagreement becomes a negotiation."
  - "Write scenarios from real jobs, end to end, by the people who do them, using realistic but safe test data."
  - "An issue is a defect if the software fails an agreed requirement; it is a change request if it asks for something that was never agreed."
  - "Sign off usually releases a payment and starts the warranty clock, so don't sign until the agreed criteria are met."
faqs:
  - q: "What is the difference between UAT and QA testing?"
    a: "QA testing is done by the vendor to check the software works as specified: unit tests, integration tests and manual checks. UAT is done by the buyer's own staff to confirm the software supports their real work. A healthy UAT finds few bugs and mostly confirms fit."
  - q: "How long should UAT take?"
    a: "For a business application with a handful of user roles, one to three weeks is common, including a round of fixes and retesting. Allow testers dedicated time; UAT squeezed around a full workload takes much longer and misses things."
  - q: "Who should do user acceptance testing?"
    a: "The people who will use the system daily, plus a business owner with authority to accept it. Include at least one experienced user and one newer user per role, since they find different problems."
  - q: "Can we refuse to sign off?"
    a: "You can refuse if agreed acceptance criteria are not met, and you should state which criteria fail with evidence. You generally can't refuse over requests that were never in scope. Your contract's acceptance clause sets the process and any deemed acceptance period."
  - q: "Do consumer guarantees apply to software bought by a business?"
    a: "They can. The ACCC says a service bought for business use is covered by consumer guarantees if it costs less than $100,000 including GST, among other conditions, and services must be provided with acceptable care and skill. Larger projects rely mainly on the contract. This is general information, not legal advice."
  - q: "How do you do UAT for AI features?"
    a: "Test against a set of real examples with agreed pass criteria, run each several times because outputs vary, and judge the rate of acceptable answers rather than single responses. Agree in advance what accuracy is acceptable and what the system must never do."
sources:
  - title: "Consumer rights and guarantees"
    url: "https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees"
    publisher: "ACCC"
  - title: "Chapter 11: APP 11 Security of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information"
    publisher: "OAIC"
  - title: "Web Vitals"
    url: "https://web.dev/articles/vitals"
    publisher: "Google web.dev"
related:
  - title: "Software development contract checklist"
    href: "/guides/software-development-contract-checklist"
  - title: "Fixed price vs time and materials"
    href: "/guides/fixed-price-vs-time-and-materials"
  - title: "How to evaluate an LLM"
    href: "/guides/llm-evaluation"
  - title: "How to write a software brief"
    href: "/guides/how-to-write-a-software-brief"
service:
  title: "QA and testing"
  href: "/services/qa-testing"
disclaimer: legal
---

## What is UAT for, and what is it not?

**User acceptance testing is the buyer's check that the software supports the work it was bought for, carried out by the people who will use it.** It answers one question: can we run the business on this?

It is not the vendor's quality assurance. Before UAT starts, the vendor should already have tested that features work, that the system handles errors, and that nothing obvious is broken. If testers spend the first day finding crashes, UAT has started too early. Send it back.

| | Vendor QA | User acceptance testing |
|---|---|---|
| Who | Vendor's engineers and testers | Your staff and a business owner |
| Checks | Software works as specified | Software fits real work |
| Data | Test fixtures | Realistic data from your business |
| Finds | Bugs, regressions, edge cases | Gaps in workflow, wrong assumptions, usability problems |
| Outcome | Release to UAT | Formal acceptance, or a list of failed criteria |

The vendor's side is covered in our [QA and testing service](/services/qa-testing). This guide is for the buyer.

## Why must acceptance criteria be agreed before the build?

**Acceptance criteria written before the build are the yardstick; written after it, they become an argument.** Put them in the contract or the Schedule of Work, attached to each milestone.

Good criteria are specific and testable:

- Weak: "The quoting module is easy to use."
- Strong: "An estimator can produce a quote for a standard job with five line items, apply a customer discount and email a PDF in under three minutes without help."
- Weak: "Reports are accurate."
- Strong: "The monthly sales report matches the accounting system's sales total for the same period to the cent."

Include non functional criteria where they matter: page load times for your users, which browsers and devices are supported, accessibility requirements, and how many concurrent users the system must handle. For web apps, Google's Core Web Vitals give useful public targets, such as Largest Contentful Paint within 2.5 seconds. Our [software development contract checklist](/guides/software-development-contract-checklist) covers the acceptance clause itself, and [how to write a software brief](/guides/how-to-write-a-software-brief) helps get requirements clear enough to test.

## How do you write test scenarios from real jobs?

**Write each scenario as a real piece of work, end to end, in the words of the person who does it.** Scenarios built from screens test screens; scenarios built from jobs test the business.

Collect them by asking each role, "Walk me through a normal Tuesday, and then through the worst job you had last month." The second question gives you the edge cases.

A template that works:

| Field | Example |
|---|---|
| ID | QT-07 |
| Role | Estimator |
| Scenario | Quote a repeat customer's job with a variation, after a price list change |
| Preconditions | Customer exists with a 10% discount; new price list active from today |
| Steps | 1. Open customer. 2. Copy last quote. 3. Add variation line. 4. Apply discount. 5. Email PDF |
| Expected result | New prices used; discount applied to all lines except freight; PDF shows ABN and GST |
| Acceptance criterion | AC-3.2 |
| Result | Pass / Fail |
| Evidence | Screenshot or recording; defect ID if failed |

Aim for complete coverage of the work that matters most, not of every button. Twenty well chosen scenarios usually beat two hundred thin ones.

## Who tests, for how long, and with what data?

**Testers are the real users, given protected time, working with realistic data that is safe to use.** UAT done in spare moments finds problems late or not at all.

- **People.** At least one experienced and one newer user per role, plus a business owner who can accept. Experienced users find missing rules; newer users find confusing screens.
- **Time.** Block it in calendars. For a typical business application, plan one to three weeks, including a fix and retest round.
- **Environment.** A dedicated UAT environment that matches production settings and integrations as closely as possible.
- **Data.** Realistic volumes and messy real cases. If you use copies of production data, remember it still contains personal information: APP 11 requires reasonable steps to protect it, so restrict access and remove it when testing ends. Masked or synthetic data is often safer.

## How should defects be logged so they get fixed?

**Log every issue with what you did, what you expected, what happened, evidence, and a severity, in one shared tracker.** Issues raised in emails and meetings get lost.

| Severity | Meaning | Example | Blocks acceptance? |
|---|---|---|---|
| 1 Critical | Can't do essential work; data loss or wrong money | Invoices calculate GST incorrectly | Yes |
| 2 Major | Essential work possible only with an awkward workaround | Can't attach photos on mobile; must use desktop | Usually |
| 3 Minor | Works, but wrong or inconvenient | Sort order of a list is wrong | No, fix in warranty |
| 4 Cosmetic | Appearance only | Misaligned label | No |

Agree the severity definitions in the contract. Each defect should link to the scenario and acceptance criterion it fails. That link is what turns "we don't like this" into "this fails AC-3.2".

## Is it a defect or a change request?

**It is a defect if the software doesn't do what was agreed; it is a change request if it asks for something that wasn't agreed.** Most UAT disputes come from issues that are genuinely somewhere in between.

A practical way to settle each one:

1. **Find the requirement.** Is there a written criterion, user story or design that covers it?
2. **If yes and it fails,** it is a defect. The vendor fixes it within the agreed price.
3. **If no requirement covers it,** it is a change request. It gets estimated and approved before work starts.
4. **If the requirement is ambiguous,** look at what a competent vendor should reasonably have understood, and agree a fair split. Ambiguity is shared work.
5. **Record the decision** against the issue so it isn't relitigated later.

The commercial model affects this. Under a fixed price contract, the boundary of scope matters more; under time and materials, everything is paid either way. Our comparison of [fixed price vs time and materials](/guides/fixed-price-vs-time-and-materials) explains the trade offs.

Australian Consumer Law can also apply. The ACCC says a service bought for business use is covered by consumer guarantees if, among other conditions, it costs less than $100,000 including GST, and that services must be provided with acceptable care and skill. Above that threshold, the contract does most of the work.

## How do sign off, payments and warranty fit together?

**Sign off is a formal acceptance that usually releases a milestone payment and starts the warranty period, so it should happen only when the agreed criteria are met.** Treat it as a contractual act, not a courtesy.

Before signing, check:

- [ ] All severity 1 and 2 defects are fixed and retested.
- [ ] Remaining minor issues are listed, with a date to fix them under warranty.
- [ ] Data migration, if any, has been reconciled.
- [ ] Documentation and admin training are delivered.
- [ ] You know who to call after go live, and what the response times are.

Watch for deemed acceptance clauses: some contracts treat the software as accepted if you don't respond within a set number of days, or as soon as you use it in production. Know your dates.

## How do you test AI features when outputs vary?

**Test AI features against a fixed set of real examples with agreed pass criteria, and judge the pass rate across repeated runs, not individual answers.** The same input can produce a different output each time, so a single pass proves little.

Build an evaluation set of 50 to 200 real cases, including hard and adversarial ones. Agree three things up front: the acceptable rate of correct or usable outputs, what the system must never do (invent a price, give legal advice, reveal another customer's data), and what happens when it is unsure, such as handing over to a person. Run the set several times and review failures by category. Our guide to [LLM evaluation](/guides/llm-evaluation) explains the method in depth.

## How AWLabs handles acceptance

We write acceptance criteria into the fixed price Schedule of Work, which comes in three options: The Minimum, The Recommended and The Complete. Our own QA runs before anything reaches your testers, you see progress in updates every Tuesday and Friday, and each build comes with a 30 day warranty, then a Care Plan. Senior engineers lead every build. The first step is a Development Consult. See [QA and testing](/services/qa-testing).
