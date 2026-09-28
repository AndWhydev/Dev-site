---
title: "Fixed price vs time and materials: which software contract should you sign?"
metaTitle: "Fixed Price vs Time and Materials Software Contracts"
description: "Fixed price or time and materials? How each software contract model shares risk, what it really costs, the hybrid options, and how to choose for your project."
eyebrow: "Comparison"
category: compare
published: 2026-09-28
updated: 2026-09-28
summary: "A fixed price contract puts the risk of overruns on the vendor, so it suits work whose scope can be defined before the build starts. Time and materials puts that risk on you but lets the scope change freely, so it suits work where you'll learn as you go. Most sensible projects mix the two: a short paid discovery on time and materials or a small fixed fee, then a fixed price for each clearly defined phase, with a written change process for anything new."
takeaways:
  - "The difference is who carries the risk of the estimate being wrong: the vendor under fixed price, you under time and materials."
  - "Fixed price costs more per hour of work, because a competent vendor prices in contingency. You're buying certainty."
  - "Fixed price only works when the scope is precise enough that both sides agree what 'done' means. A vague scope turns into padding or disputes over variations."
  - "Time and materials is cheaper when the scope will change, provided you manage it actively: weekly budget reports, a cap, and the right to stop."
  - "Paid discovery followed by fixed price per phase gets most of the benefits of both, and is the model many Australian agencies now offer."
faqs:
  - q: "Is fixed price always more expensive?"
    a: "Per unit of work, usually yes, because the vendor carries the risk and prices it in. In total, not necessarily: fixed price creates pressure on both sides to keep scope tight, and a loosely managed time and materials project can easily cost more than the fixed quote would have."
  - q: "What is a capped time and materials contract?"
    a: "You pay for actual hours at agreed rates, up to a ceiling. Below the cap you get the savings; above it the vendor either absorbs the cost or stops and asks for approval, depending on the contract. Check which, because 'cap' means different things in different contracts."
  - q: "How are changes handled in a fixed price contract?"
    a: "Through a written variation or change request process: the change is described, estimated and approved before work starts, and the price and timeline adjust. Insist that no variation is billable without your written approval."
  - q: "Do Australian Consumer Law protections apply to software contracts?"
    a: "They can. The consumer guarantees cover services costing less than $100,000, including services a business buys, and require them to be supplied with due care and skill, fit for any stated purpose and within a reasonable time if no timeframe is agreed. Unfair contract term protections also apply to standard form contracts with small businesses. Get legal advice on your specific contract."
  - q: "Which model does an agile team use?"
    a: "Agile teams usually work on time and materials or on a fixed budget per iteration, where the price and duration are fixed and the scope is prioritised within them. That's a legitimate form of fixed price: you fix cost and time, and let scope flex."
sources:
  - title: "Fixed Price"
    url: "https://martinfowler.com/bliki/FixedPrice.html"
    publisher: "Martin Fowler"
  - title: "Fixed Scope Mirage"
    url: "https://martinfowler.com/bliki/FixedScopeMirage.html"
    publisher: "Martin Fowler"
  - title: "Manifesto for Agile Software Development"
    url: "https://agilemanifesto.org/"
    publisher: "Agile Manifesto authors"
  - title: "Australian Consumer Law and your business"
    url: "https://business.gov.au/legal/fair-trading/australian-consumer-law-and-your-business"
    publisher: "business.gov.au"
  - title: "How much does software development cost in Australia? (2026 rates)"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "What is a discovery phase in software development?"
    href: "/guides/software-discovery-phase"
  - title: "What to check before signing a software development contract"
    href: "/guides/software-development-contract-checklist"
  - title: "How much does custom software cost in Australia?"
    href: "/guides/custom-software-development-cost-australia"
  - title: "How we work"
    href: "/methodology"
service:
  title: "Custom software and app development"
  href: "/services/custom-app-development"
disclaimer: legal
---

## What's the difference between fixed price and time and materials?

**Under a fixed price contract you agree the total cost for a defined scope up front; under time and materials (T&M) you pay for the hours actually worked at agreed rates.** Everything else follows from one question: who pays when the estimate turns out to be wrong?

Every software estimate is a guess about the future. Under fixed price the vendor owns that guess. If the work takes longer, the vendor absorbs it; if it's quicker, the vendor keeps the margin. Under T&M you own it. You pay for overruns and you keep any savings.

| | Fixed price | Time and materials |
|---|---|---|
| What's agreed up front | Scope, price and usually timeline | Rates, team and a way of working |
| Who carries estimate risk | Vendor | You |
| Cost per unit of work | Higher: includes contingency | Lower: no risk premium |
| Flexibility to change scope | Low: changes go through variations | High: reprioritise any week |
| Budget certainty | High, if scope holds | Low, unless capped |
| Management effort for you | Front-loaded: specify carefully, then accept deliverables | Ongoing: review progress and spend weekly |
| Main failure mode | Padding, disputes over what's "in scope", corner-cutting | Drifting scope, slow burn of budget |
| Best for | Well-understood, well-specified work | Exploratory work, evolving products, ongoing development |

## Why does fixed price cost more per hour?

**Because a competent vendor adds contingency for the risk it's taking on, and you pay for that certainty.** A vendor quoting fixed price on a 700-hour estimate might price 800 to 900 hours, depending on how well understood the work is. That margin is the premium on an insurance policy against overruns.

The size of the premium tracks how clear the scope is. On a crisp scope with known integrations, contingency can be small. On a vague brief, a careful vendor pads heavily, and a careless or aggressive one quotes low and plans to recover the difference through variations. Martin Fowler calls this the fixed scope mirage: a fixed scope contract is only fixed if the vendor really understands the requirements, and that is rare before anyone has looked closely.

This is why fixed price quotes for the same brief can vary so widely. Our [custom software cost guide](/guides/custom-software-development-cost-australia) covers how to compare quotes like with like.

## A worked example: the same project under three models

**Here is an illustrative comparison for a customer portal estimated at 600 to 900 hours, at a blended $165 an hour (AUD, ex GST).** The numbers are examples to show the mechanics, not a quote.

| Model | How it's priced | If the work takes 650 hours | If it takes 900 hours | If you add a feature mid-build (+80 hours) |
|---|---|---|---|---|
| Fixed price on the initial brief | Vendor prices 950 hours for risk: $156,750 | You pay $156,750 | You pay $156,750 | Variation, say $13,200; total $169,950 |
| Pure T&M | Hours × $165 | You pay $107,250 | You pay $148,500 | +$13,200 on top of actual hours |
| Paid discovery, then fixed price | Discovery $12,000; clearer scope lets vendor price 780 hours: $128,700 | You pay $140,700 | You pay $140,700 | Variation $13,200; total $153,900 |

Three things stand out. Pure T&M is cheapest if the work goes well, and exposed if it doesn't. Fixed price on a vague brief is the most expensive in the good case, because you paid for risk that didn't happen. Discovery shrinks the contingency by shrinking the unknowns, so the fixed price that follows is closer to the true cost.

## What hybrid models exist?

**Most real contracts sit between the two extremes, and the hybrids are often the best choice.** The common ones:

1. **Paid discovery, then fixed price.** A short discovery phase (usually two to six weeks) produces workflows, integration details, acceptance criteria and an architecture. The build is then quoted as a fixed price, often per phase. See [what a discovery phase involves](/guides/software-discovery-phase).
2. **Fixed price per phase or milestone.** Large projects are split into phases, each priced once the previous one has reduced the unknowns. You can stop after any phase.
3. **Capped T&M.** Hourly billing with a ceiling. Check whether the cap is a hard limit the vendor absorbs, or a trigger to stop and ask for more budget.
4. **Fixed budget, flexible scope.** Price and time are fixed; the team delivers the highest-priority features that fit. This is how Fowler describes fixed price working with agile teams, and it suits products where learning changes priorities.
5. **Retainer.** A fixed monthly amount for a set capacity, common for maintenance and continuous improvement after launch.

## When is time and materials the better choice?

**Choose T&M when you can't define the scope well enough to fix a price without paying a large risk premium, and you're able to manage the work closely.** It is the right model more often than buyers expect.

T&M fits when:

- You're building a new product and expect what you learn from users to change the plan.
- The work is research-heavy: an AI prototype, a data quality investigation, performance tuning.
- The work is continuous, such as ongoing product development or maintenance.
- You have a product owner with time to review progress and reprioritise each week.
- You trust the vendor, or have worked with them before.

Protect yourself with weekly timesheets tied to tasks, a monthly budget cap that needs your approval to exceed, a right to stop at short notice with code handed over, and regular demos of working software.

## When is fixed price the better choice?

**Choose fixed price when the scope is clear, the outcome is well understood, and budget certainty matters more to you than flexibility.** Boards, grant budgets and government funding rounds often need a firm number, and fixed price gives it.

Fixed price fits when:

- A discovery phase has already produced a precise scope and acceptance criteria.
- The work is similar to things the vendor has built many times.
- You don't have time to manage the work week by week.
- Your approval process needs a single approved figure.

It fits badly when the brief is a paragraph, when integrations haven't been investigated, or when you already know priorities will shift. In those cases, fixing the price means paying for contingency or arguing about variations.

## What should the contract say, whichever model you pick?

**Both models need the same basic protections: clear deliverables, a written change process, acceptance testing, and your right to walk away with the code.** A checklist:

1. **Scope and acceptance criteria.** For fixed price, specific enough that a third party could tell whether a feature is done.
2. **Change control.** Every variation is written, estimated and approved by you before work starts.
3. **Reporting.** Weekly progress and, for T&M, hours by task.
4. **Payment tied to milestones** for fixed price, and to approved timesheets for T&M. Avoid large up-front payments beyond a reasonable deposit.
5. **Acceptance testing period** and a warranty period for defects.
6. **IP assignment and source code access** from day one, so you're never locked in.
7. **Termination for convenience**, with payment for work done and handover of everything built.
8. **GST.** Business quotes are usually ex GST; confirm, and add 10%.

Australian law adds a floor. Under the Australian Consumer Law, services costing less than $100,000, including those bought by a business, come with guarantees that they're supplied with due care and skill, fit for any stated purpose, and within a reasonable time if no timeframe was agreed. Standard form contracts with small businesses are also covered by unfair contract term protections: a term letting only one party vary the price, for example, can be found unfair and void. Our [contract checklist](/guides/software-development-contract-checklist) goes through these clauses in detail.

## A decision guide

| Your situation | Suggested model |
|---|---|
| Clear scope from a completed discovery, need a firm number | Fixed price |
| Only a brief, but you need a number for approval | Paid discovery, then fixed price |
| New product, priorities will change with user feedback | T&M or fixed budget, flexible scope |
| Large program over many months | Fixed price per phase |
| Research, prototype or AI proof of concept | Capped T&M |
| Ongoing improvements after launch | Retainer or T&M |

## How All Webbed Labs prices work

We run a paid discovery first, then quote a fixed price for the agreed scope, usually per phase. That's one option among several above, and we use it because it gives you a firm number without paying for contingency on unknowns. Where work is genuinely exploratory, such as an AI proof of concept, we'll suggest capped T&M instead and say why. Changes are always written and approved before they're billed, and the code is in your repository from day one. Read more about [how we work](/methodology) or our [custom software service](/services/custom-app-development).
