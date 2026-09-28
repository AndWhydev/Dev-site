---
title: "What is the strangler fig pattern?"
metaTitle: "What Is the Strangler Fig Pattern? Meaning and Example"
description: "What is the strangler fig pattern? A way to replace legacy software piece by piece behind a routing layer. How it works, an example, and microservices use."
eyebrow: "Explainer"
category: explainer
published: 2026-09-28
updated: 2026-09-28
summary: "The strangler fig pattern is a way to modernise legacy software gradually: you put a routing layer in front of the old system, build replacement features one at a time in a new system, and redirect traffic to each new piece as it's ready, until nothing is left in the old system and it can be switched off. Martin Fowler named it after the strangler figs he saw in Queensland rainforest, which grow around a host tree and eventually replace it."
takeaways:
  - "Martin Fowler coined the term after seeing strangler figs in Queensland rainforests in 2001; he renamed his original \"Strangler Application\" post to \"Strangler Fig Application\"."
  - "The mechanics are a facade or proxy that routes each request to either the legacy system or the new one, shifting traffic feature by feature."
  - "It trades one large, risky cutover for many small ones, each of which can be tested, released and rolled back on its own."
  - "Shared data is the hardest part: both systems often need the same records during the transition."
  - "It isn't the right choice for small systems, systems you can't intercept or modify, or when the old system must be retired quickly."
faqs:
  - q: "Is the strangler fig pattern the same as a rewrite?"
    a: "No. A rewrite builds a complete replacement and switches over in one go. The strangler fig approach also ends with new code replacing old, but it does so in slices, with the old system running and earning its keep the whole time. Users move to new features as each one is ready."
  - q: "How long does a strangler fig migration take?"
    a: "It depends on the size of the system and how cleanly it can be split. Small slices can go live in weeks, while retiring a large core system can take one to several years. The advantage is that value arrives throughout, not only at the end."
  - q: "Can we add new features during the migration?"
    a: "Yes, and that's one of the main reasons to choose it. AWS's guidance recommends building new features in the new system rather than the legacy one, while continuing to fix bugs in the old system for stability."
  - q: "What if we don't have the legacy source code?"
    a: "You can still intercept traffic at the network or API level, but options narrow. Microsoft's guidance lists lack of source access as a reason the pattern may not suit, because you often need small changes inside the old system to redirect internal calls."
  - q: "Is the strangler pattern the same as the strangler fig pattern?"
    a: "Yes. \"Strangler pattern\", \"strangler application\" and \"strangler fig pattern\" all describe the same approach. Martin Fowler's current name is Strangler Fig, and Microsoft and AWS both document it as the strangler fig pattern."
  - q: "Does the strangler fig pattern only apply to microservices?"
    a: "No. It's often used to break a monolith into microservices, but the new system can equally be a single modern application, a SaaS product or a set of serverless functions. The pattern is about how you migrate, not what you migrate to."
  - q: "Does the routing layer stay forever?"
    a: "Usually not. Once every feature has moved, the facade is typically removed and clients talk to the new system directly. Some teams keep it as an adapter for older clients that can't be updated."
sources:
  - title: "Strangler Fig"
    url: "https://martinfowler.com/bliki/StranglerFigApplication.html"
    publisher: "Martin Fowler"
  - title: "Patterns of Legacy Displacement"
    url: "https://martinfowler.com/articles/patterns-legacy-displacement/"
    publisher: "Ian Cartwright, Rob Horn and James Lewis, martinfowler.com"
  - title: "Strangler Fig pattern"
    url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig"
    publisher: "Microsoft Azure Architecture Center"
  - title: "Strangler fig pattern"
    url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/strangler-fig.html"
    publisher: "AWS Prescriptive Guidance"
  - title: "Anti-corruption Layer pattern"
    url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer"
    publisher: "Microsoft Azure Architecture Center"
related:
  - title: "Rewrite vs refactor: what to do with legacy software"
    href: "/guides/rewrite-vs-refactor-legacy-software"
  - title: "How much does legacy system modernisation cost in Australia?"
    href: "/guides/legacy-modernisation-cost-australia"
  - title: "Code audit and technical due diligence"
    href: "/services/code-audit"
  - title: "What is a discovery phase in software development?"
    href: "/guides/software-discovery-phase"
service:
  title: "Legacy system modernisation"
  href: "/services/legacy-modernisation"
disclaimer: none
---

## What is the strangler fig pattern? Meaning in software

**The strangler fig pattern is an incremental way to replace a legacy system: new code grows around the old system, takes over its jobs one at a time, and the old system is retired once nothing depends on it.** Users keep working throughout, often without noticing which parts have moved.

The name comes from Martin Fowler. On a holiday in the rainforests of Queensland in 2001 he saw strangler figs, vines that germinate in a nook of a host tree, grow down to the ground and up to the canopy, and can eventually leave the host dead with "the fig as an echo of its shape." A couple of years later he wrote a short post comparing this to how his colleagues modernised old systems. The original title was "Strangler Application"; he later changed it to "Strangler Fig Application" because people had forgotten the botanical origin and the word "strangler" on its own carried connotations of violence. He published a fuller rewrite in August 2024.

## Why not just rebuild the whole thing?

**Because full replacements of serious systems usually take longer than planned, and users can't wait years for new features.** Fowler writes that he and his colleagues have seen the "simple-sounding plan" of building a like-for-like replacement "go down in flames most of the time." Three reasons recur:

- **Hidden behaviour.** Nobody fully knows what a 15-year-old system does until they try to copy it. Edge cases live in code, not documents.
- **Wasted effort.** Much of the old behaviour is no longer wanted, but a like-for-like rebuild recreates it anyway.
- **Frozen business.** While the rebuild runs, the old system still needs changes, so teams either maintain two systems or refuse new work.

The strangler fig approach avoids a single high-stakes switch-over. Each slice is small enough to test properly, release on its own and roll back if something goes wrong. Our comparison of [rewriting vs refactoring legacy software](/guides/rewrite-vs-refactor-legacy-software) covers when a clean rewrite is still the better call.

## How does it work, step by step?

**A routing layer sits in front of the old system and sends each request to whichever system currently owns that feature.** Microsoft's Azure Architecture Center describes four phases, and AWS's prescriptive guidance describes the same shape.

1. **Insert the facade.** Put a proxy, API gateway or routing layer between users and the legacy system. At first it sends everything to the old system, so nothing changes for users.
2. **Carve off a slice.** Pick one capability with clear boundaries, such as customer notifications or quote generation. Build it in the new system.
3. **Redirect traffic.** Change the routing so requests for that capability go to the new system. Keep the old path available for rollback until the new one is proven.
4. **Repeat.** Move the next slice, and the next. Build any new features in the new system rather than adding to the old one.
5. **Retire.** When the legacy system no longer handles any requests and nothing calls it, decommission it and, usually, remove the facade.

Where parts of the old system need to call features that have already moved, both Microsoft and AWS recommend an anti-corruption layer: an adapter that translates between the old system's conventions and the new design, so the new code doesn't inherit legacy quirks.

## Strangler fig pattern example

Here is an illustrative example. A distributor runs a 15-year-old .NET monolith that handles quotes, orders, inventory, invoicing and reporting. Changes are slow and risky, and the vendor of one of its libraries no longer supports it.

1. **Facade.** The team puts an API gateway in front of the monolith. Every request still goes to the old system, and users notice nothing.
2. **First slice: quote PDFs.** A new service generates quote documents. The gateway routes "create quote PDF" requests to it. The old code path stays in place for a fortnight as a fallback, then is switched off.
3. **New feature in the new system.** A customer portal for order tracking is built entirely in the new stack, reading order data through an adapter over the legacy database.
4. **Notifications, then reporting.** Each moves in turn, with change data capture keeping a new reporting database in step with the old one.
5. **The hard core.** Pricing, then orders and invoicing, move last, each with its own data cutover once the new service has run in parallel and matched results.
6. **Retire.** With nothing left routed to it, the monolith is decommissioned.

At every point the business keeps trading on a working system, and each step can be rolled back on its own.

## What gets moved first?

**Start with a slice that's valuable, well bounded and low risk, so the team proves the routing and release process before tackling the core.** Fowler, drawing on Ian Cartwright, Rob Horn and James Lewis, frames the work as four activities: understand the outcomes you want, break the problem into smaller parts, deliver the parts, and change the organisation so this can continue.

A simple way to rank candidate slices:

| Candidate slice | Business value | Coupling to the rest | Data complexity | Good first slice? |
|---|---|---|---|---|
| New customer portal feature | High | Low (new) | Low | Yes: builds on top, moves nothing yet |
| PDF quote generation | Medium | Low | Low | Yes: clear inputs and outputs |
| Email and SMS notifications | Medium | Low to medium | Low | Yes |
| Reporting and exports | High | Medium | Medium (reads everything) | Often second or third |
| Pricing engine | High | High | High | Later, once patterns are proven |
| Core ledger or order records | Very high | Very high | Very high | Last |

Fowler notes that the first additions are often new features built on top of, yet separate to, the legacy code, which gives quick value without touching risky code.

## Why is data the hardest part?

**Because during the transition, both systems often need to read and write the same records, and they must stay consistent.** Code is easy to route; data is shared.

Common approaches, roughly from simplest to most thorough:

| Approach | How it works | Trade-off |
|---|---|---|
| New system uses the legacy database | New code reads and writes the old tables directly | Fast to start, but ties the new design to old structures |
| Synchronise with events | The new system owns its data and sends changes to update the old database | Two copies, eventually consistent; AWS calls this a tactical step |
| Change data capture | Changes in the legacy database stream into the new domain database | Keeps both in step with little legacy code change |
| Domain cutover | After validation, the new database becomes the system of record and old tables are removed | Final step; rolling back afterwards is costly |

Microsoft's guidance is explicit that removing legacy tables should be a deliberate final step per domain, taken only after validation, because rolling back after that point means restoring objects and replaying data changes.

## Strangler fig pattern and microservices

**The strangler fig is the most common way to move from a monolith to microservices, because it lets you extract one service at a time.** Each slice carved off the old system becomes a service with its own code, deployment and, eventually, its own data. The facade becomes the API gateway that fronts the services.

Two cautions. First, microservices aren't the goal in themselves: a well-structured modular application is often easier to run for a mid-sized business. Second, AWS's warning about premature decomposition applies strongly here, because service boundaries drawn before the domain is understood are expensive to redraw. The same pattern works in Java, .NET, PHP or any other stack; it depends on routing, not language.

## Strangler fig vs big bang, branch by abstraction and blue-green

**The strangler fig is a migration strategy; some of the terms it's compared with are techniques you might use inside it.**

| Approach | What it is | How it relates |
|---|---|---|
| Big bang rewrite | Build the full replacement, then switch everyone over at once | The alternative the strangler fig exists to avoid; still sensible for small systems |
| Branch by abstraction | Introduce an abstraction layer inside the codebase, build the new implementation behind it, then switch over | Works inside one codebase where a network-level facade can't intercept the calls; often combined with a strangler fig |
| Blue-green deployment | Run two identical production environments and switch traffic from one to the other | A release technique for cutting over safely, not a modernisation strategy; useful for each slice |
| Parallel run | Run old and new side by side on the same inputs and compare results | A way to validate each slice before moving traffic |
| Replace with SaaS | Retire the custom system in favour of a product | Sometimes better than any rebuild; see our [build vs buy guide](/guides/build-vs-buy-software) |

## When is the strangler fig the wrong choice?

**When the system is small, can't be intercepted, or has to be switched off quickly.** Microsoft lists these situations where the pattern may not suit:

- requests to the old system can't be intercepted
- you can't access or change the legacy source code
- the system is small and replacing it outright is simple
- the original solution must be fully decommissioned quickly

AWS adds that premature decomposition is costly when the business domain isn't well understood, because it's easy to draw the boundaries in the wrong place. And the facade itself needs care: both vendors warn it must not become a single point of failure or a performance bottleneck.

There's also a cost of running two systems in parallel, sometimes for years. For a small internal tool, a planned rewrite over a few months is usually cheaper and simpler.

## Readiness checklist

- [ ] Clear, agreed outcomes for the modernisation, beyond "new technology"
- [ ] Traffic can be routed at a single point (web, API or message layer)
- [ ] Source code access, or at least control of the integration points
- [ ] An inventory of the system's capabilities and who uses each one
- [ ] Automated tests or monitoring that show when behaviour changes
- [ ] A plan for shared data during the transition
- [ ] Budget and patience to run both systems for a period
- [ ] Someone accountable for actually retiring each old piece

## How All Webbed Labs approaches this

We start legacy work with a paid discovery and, where the code is available, an audit, to map capabilities, data flows and seams before committing to an approach. When the strangler fig fits, we propose the first slices as fixed-price stages, each ending with traffic moved and the old path retired, not just new code written. When a rewrite or a SaaS replacement is the better option, we say so. See our [legacy modernisation](/services/legacy-modernisation) and [code audit](/services/code-audit) services, or the [legacy modernisation cost guide](/guides/legacy-modernisation-cost-australia) for typical ranges, and how a [discovery phase](/guides/software-discovery-phase) sets up a fixed price.
