---
title: "Rewrite vs refactor: what should you do with legacy software?"
metaTitle: "Rewrite vs Refactor Legacy Software: How to Decide"
description: "Rewrite vs refactor legacy software: when to rebuild from scratch, when to refactor, and the incremental middle path, with a scoring matrix for deciding."
eyebrow: "Comparison"
category: compare
published: 2026-09-28
updated: 2026-09-28
summary: "When deciding whether to rewrite or refactor legacy software, refactor when the system still does its job and the business logic is sound, but the code is hard to change: you keep years of embedded knowledge and ship improvements continuously. Rewrite only when the platform itself is the problem (unsupported technology, no way to host or secure it, or an architecture that can't meet new requirements), and even then replace it piece by piece rather than in one big switch. Sometimes the best answer is neither: buy a product, or leave a stable system alone."
takeaways:
  - "Refactoring changes the structure of code without changing what it does. Rewriting builds a new system to replace the old one."
  - "Big-bang rewrites are risky because the old system keeps changing while the new one is built, and undocumented behaviour gets lost."
  - "The strangler fig approach replaces a system incrementally behind a routing layer, so the business keeps running and each step can be rolled back."
  - "Rewrite signals: unsupported runtime or database, no developers available for the stack, security fixes no longer possible, or an architecture that fundamentally blocks the roadmap."
  - "A stable system that rarely changes may need neither. Spend the money where change is frequent or risk is high."
faqs:
  - q: "How do I know if my legacy system needs replacing?"
    a: "Look at evidence rather than age. Warning signs are an unsupported language, framework or database version, security patches you can't apply, changes that routinely break unrelated features, a shrinking pool of people who can work on it, and hosting you can't move. A code audit gives you these facts in a few weeks."
  - q: "Is it cheaper to rewrite or refactor?"
    a: "Refactoring is usually cheaper in the short and medium term because you keep working software and deliver value along the way. A rewrite can be cheaper over ten years if the old platform is a dead end, but rewrite estimates are notoriously optimistic, because much of the old system's behaviour is undocumented."
  - q: "When should you rewrite software from scratch?"
    a: "Rarely, and only when the system is small, well understood and can be fully respecified in a short project, or when the platform is so far gone that nothing can be kept. For anything large or business-critical, a rewrite should still happen module by module rather than as a single rebuild from scratch."
  - q: "Does refactoring pay down technical debt?"
    a: "Yes, that's its main job. Technical debt is the extra cost of change caused by past shortcuts: tangled modules, missing tests, outdated libraries. Refactoring pays it down gradually, and it pays back fastest in the parts of the code that change most often. Debt in code nobody touches can often be left alone."
  - q: "Can we rewrite without a code freeze?"
    a: "Yes, and you should avoid a long freeze. With an incremental approach, the old system keeps running and receives urgent fixes while new modules take over one at a time. Freezing features for a year or more to finish a big-bang rewrite is one of the most common reasons these projects fail."
  - q: "Should we move to microservices while we're at it?"
    a: "Only if you have a clear reason, such as parts of the system that need to scale or be deployed independently, and a team able to run distributed systems. A well-structured modular monolith is often the better target for a mid-sized business system."
  - q: "What about replacing the system with SaaS?"
    a: "If what the system does is common to your industry, a SaaS product may beat both options. Check how much of your process you'd need to change, how data migrates, and what integrations you'd need. Our build vs buy guide covers the trade-offs."
sources:
  - title: "Strangler Fig Application"
    url: "https://martinfowler.com/bliki/StranglerFigApplication.html"
    publisher: "Martin Fowler"
  - title: "Strangler Fig pattern"
    url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig"
    publisher: "Microsoft Azure Architecture Center"
  - title: "Strangler fig pattern"
    url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/strangler-fig.html"
    publisher: "AWS Prescriptive Guidance"
  - title: "Things You Should Never Do, Part I"
    url: "https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/"
    publisher: "Joel Spolsky"
  - title: "Refactoring: Improving the Design of Existing Code"
    url: "https://martinfowler.com/books/refactoring.html"
    publisher: "Martin Fowler"
  - title: "6 strategies for migrating applications to the cloud"
    url: "https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/"
    publisher: "AWS Enterprise Strategy"
related:
  - title: "How much does legacy system modernisation cost in Australia?"
    href: "/guides/legacy-modernisation-cost-australia"
  - title: "What is the strangler fig pattern?"
    href: "/guides/strangler-fig-pattern"
  - title: "Build vs buy: custom software or off-the-shelf SaaS?"
    href: "/guides/build-vs-buy-software"
  - title: "Why get a code audit"
    href: "/why-audit"
service:
  title: "Legacy system modernisation"
  href: "/services/legacy-modernisation"
---

## Should you rewrite or refactor legacy software?

**Refactor by default, and rewrite only when the underlying platform can't take you where the business needs to go.** Even then, replace the system in stages rather than all at once. Most legacy systems that feel beyond saving are actually carrying valuable, hard-won business rules inside messy code, and that knowledge is the expensive part to recreate.

The two terms get used loosely, so it helps to be precise:

- **Refactoring** means restructuring existing code without changing its external behaviour: renaming, splitting large modules, removing duplication, adding tests, upgrading libraries. Martin Fowler's book of the same name defines the discipline. Done steadily, it keeps a system healthy while features continue to ship.
- **Rewriting** means building a new system to replace the old one, often on a new language, framework or architecture. It can be done in one cutover (a big-bang rewrite) or incrementally.

| | Refactor | Incremental rewrite | Big-bang rewrite |
|---|---|---|---|
| What changes | Code structure, dependencies, tests | Modules replaced one by one behind a routing layer | Whole system replaced in one cutover |
| Business keeps shipping features? | Yes | Yes, with some coordination | Usually frozen or duplicated |
| Time to first value | Weeks | A few months (first module live) | Often a year or more |
| Risk of losing hidden behaviour | Low | Medium, found module by module | High, found after go-live |
| Rollback | Per change | Per module | Hard once cut over |
| Can escape a dead platform? | Only partly | Yes | Yes |
| Typical cost profile | Steady, ongoing | Higher, spread over time | Highest, concentrated, often overruns |

## How do rewrite and refactor fit with other legacy modernisation options?

**Rewrite and refactor are two of several legacy modernisation (or "modernization", in US usage) strategies, and cloud vendors use some of the same words differently.** AWS's widely used list of six migration strategies is a helpful map:

| Strategy | What it means | Closest option on this page |
|---|---|---|
| Rehost | Move the system to new infrastructure unchanged ("lift and shift") | Leave it alone, on supported hosting |
| Replatform | Move with small changes, such as a managed database | Light refactoring |
| Repurchase | Move to a different product, often SaaS | Replace with SaaS |
| Refactor / re-architect | Rework how the application is built, typically using cloud-native features | Incremental rewrite |
| Retire | Switch it off | Decommission |
| Retain | Keep it as is for now and revisit later | Retain and stabilise |

Note the clash in vocabulary. In AWS's list, "refactor" means re-architecting the system, which is closer to a rewrite. In everyday engineering, and in this guide, refactoring means improving code structure without changing behaviour. When a proposal says "refactor", ask which one it means, because the cost difference is large.

## Why do big-bang rewrites so often go wrong?

**Because a rewrite has to hit a moving target while rediscovering years of undocumented behaviour, and it delivers nothing until the very end.** Joel Spolsky's much-cited essay on Netscape's browser rewrite makes the point: when you throw away working code, you throw away all the bug fixes and edge cases it absorbed over the years. Fowler makes a similar argument for incremental replacement: a serious system takes a long time to replace, and users can't wait for new features in the meantime.

The typical failure pattern looks like this:

1. The team estimates the rewrite from the visible features, missing the invisible ones: odd tax rules, special customer arrangements, workarounds for a partner's broken file format.
2. The old system can't stop changing. Regulatory updates and urgent requests land on it, so the new system chases a target that keeps moving.
3. Features are frozen to catch up, and the business grows impatient.
4. Cutover day reveals the missing behaviours, all at once, in production.

None of this means rewrites never work. It means the one-cutover version carries concentrated risk, and there's almost always a way to break it into smaller steps.

## What is the middle path?

**Replace the system incrementally: put a routing layer in front of it, build new modules one at a time, and switch traffic over as each is proven.** This is the strangler fig pattern, named by Fowler after the vines he saw in Queensland rainforest that grow around a host tree until they replace it.

Microsoft's architecture guidance describes the mechanics: a facade intercepts requests and routes each to either the legacy system or the new service. Over time, more routes point to the new system, until the old one can be decommissioned and the facade removed. Data is handled the same way, extracting one domain at a time with synchronisation between old and new until each cutover is validated.

It's not free. You run two systems in parallel, you need an integration layer between them, and the routing layer itself must be reliable. Microsoft's guidance also lists when it doesn't fit: when requests can't be intercepted, when you can't modify the legacy source code, when the system is small enough to replace simply, or when the old system has to be switched off quickly. Our explainer on the [strangler fig pattern](/guides/strangler-fig-pattern) goes deeper on the mechanics.

## How do you decide? A scoring matrix

**Score your system on the factors below. Mostly left-column answers point to refactoring; mostly right-column answers point to an incremental rewrite.** A mix usually means refactor now, and rewrite the one or two modules that are genuinely stuck.

| Factor | Points to refactor | Points to rewrite |
|---|---|---|
| Runtime, framework, database | Supported, or upgradeable in steps | End of life, no security patches, no upgrade path |
| Business logic | Correct and still what you need | Wrong, or the business has changed shape |
| Test coverage | Some tests, or behaviour can be captured with tests | Untestable without major surgery |
| People | Developers available for the stack | Skills scarce and getting scarcer |
| Architecture | Can support the roadmap with restructuring | Fundamentally blocks a key requirement (multi-tenancy, real-time, mobile, scale) |
| Rate of change | Frequent small changes | Needs large new capabilities |
| Hosting and security | Can move to supported infrastructure | Can't be hosted or secured to current requirements |
| Documentation of behaviour | Known, or recoverable from code | Unknown and the system is small enough to respecify |

Two practical notes. First, "the code is ugly" isn't on the list. Ugly code that works and rarely changes is often best left alone. Second, answer honestly about the people factor: in Australia's market, finding senior engineers for older stacks can be slow and expensive, and that's a real input.

## When is leaving it alone the right answer?

**If the system is stable, rarely changes, runs on supported infrastructure and isn't a security risk, the cheapest good option may be to do almost nothing.** Put it on supported hosting (a rehost, in the AWS migration vocabulary), patch it, document it, add monitoring, and spend your modernisation budget where change is frequent.

The reverse is also true: a system that changes weekly, underpins revenue and breaks often is where refactoring pays back fastest.

And if the system does something common, like payroll, CRM, rostering or accounting, the right move might be to retire it and buy a product. That's a replacement, not a rewrite, and our [build vs buy guide](/guides/build-vs-buy-software) covers how to compare total cost.

## What does a sensible first step look like?

**Start with evidence: a short code and architecture audit that tells you what you actually have.** Rewrite and refactor decisions made from frustration tend to be expensive.

A useful first phase covers:

1. **Inventory.** Languages, frameworks, databases, versions and their support status.
2. **Risk scan.** Known vulnerabilities, unpatched dependencies, secrets in code, backup and recovery.
3. **Change hotspots.** Which parts of the code change most often and break most often (version history tells you this).
4. **Behaviour capture.** Characterisation tests around critical flows, so any change, refactor or rewrite, can be checked against current behaviour.
5. **Data review.** Quality, ownership, where personal information lives, and any obligations such as onshore storage under your contracts or the Privacy Act.
6. **Options with costs.** Refactor, incremental rewrite, replace or retain, each with a rough range and risks.

Our [legacy modernisation cost guide](/guides/legacy-modernisation-cost-australia) gives Australian ranges for each approach, and [why a code audit comes first](/why-audit) explains what an audit should deliver.

## What changes during a migration for Australian organisations?

**Running old and new systems side by side temporarily doubles the places your data lives, so privacy and residency need planning before the first module moves.** Under the Privacy Act 1988, personal information in the new system, the old one, and any synchronisation layer or test copy all needs the same protection, and old copies should be destroyed or de-identified once they're no longer needed. If your contracts require onshore storage, check that the new services, logging and any migration tooling run in Australian regions too. Regulated organisations, such as APRA-regulated entities, will also want the migration covered in their risk and change management records.

## Rewrite, refactor, replace or retain? A decision guide

- **Refactor** if the logic is right, the platform is supported and the pain is mainly slow, risky change.
- **Incremental rewrite** if the platform is a dead end or the architecture blocks the roadmap, and the system is too important to switch over in one go.
- **Big-bang rewrite** only if the system is small, well understood, and can be respecified completely in a short project.
- **Replace with SaaS** if the function is common and your process can adapt.
- **Retain and stabilise** if it's stable, rarely changes and can be hosted and secured properly.

## How All Webbed Labs approaches legacy decisions

We start with an audit and characterisation tests, then recommend whichever option the evidence supports, including leaving a system alone or buying a product when that's cheaper. Where replacement is justified, we do it incrementally behind a routing layer so the business keeps running and each step can be rolled back. New code lives in your repository from day one. See our [legacy modernisation service](/services/legacy-modernisation).
