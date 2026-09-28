---
title: "What is the strangler fig pattern?"
metaTitle: "What Is the Strangler Fig Pattern? Legacy Modernisation"
description: "The strangler fig pattern replaces a legacy system piece by piece behind a routing layer until the old one can be retired. How it works and when it fits."
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

## What does "strangler fig" mean in software?

**The strangler fig pattern is an incremental way to replace a legacy system: new code grows around the old system, takes over its jobs one at a time, and the old system is retired once nothing depends on it.** Users keep working throughout, often without noticing which parts have moved.

The name comes from Martin Fowler. On a holiday in the rainforests of Queensland in 2001 he saw strangler figs, vines that germinate in a nook of a host tree, grow down to the ground and up to the canopy, and can eventually leave the host dead with "the fig as an echo of its shape." A couple of years later he wrote a short post comparing this to how his colleagues modernised old systems. The original title was "Strangler Application"; he later changed it to "Strangler Fig Application" because people had forgotten the botanical origin and the word "strangler" on its own carried connotations of violence. He published a fuller rewrite in August 2024.

## Why not just rebuild the whole thing?

**Because full replacements of serious systems usually take longer than planned, and users can't wait years for new features.** Fowler writes that he has seen the "simple-sounding plan" of building a like-for-like replacement "go down in flames most of the time." Three reasons recur:

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
