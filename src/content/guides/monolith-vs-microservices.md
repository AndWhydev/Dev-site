---
title: "Monolith vs microservices: which architecture suits a growing business?"
metaTitle: "Monolith vs Microservices for Growing Businesses"
description: "Monolith vs microservices for SMB and mid market software: why a modular monolith usually wins, what microservices really cost, and how to split one safely."
eyebrow: "Comparison"
category: compare
published: 2026-11-08
updated: 2026-11-08
summary: "For most Australian SMB and mid market software, a well structured modular monolith is the better architecture: one deployable application with clear internal boundaries, one database and one pipeline. Microservices earn their extra cost when separate teams need to release independently, or when parts of the system have very different scaling, reliability or technology needs. Start modular, measure, and split out a service only when a specific pressure justifies it."
takeaways:
  - "A monolith is one deployable application; microservices are many small applications that talk over the network. A modular monolith keeps one deployment but enforces boundaries inside it."
  - "Martin Fowler's 2015 guideline still holds: don't consider microservices unless the system is too complex to manage as a monolith."
  - "Microservices add a premium in infrastructure, observability, testing and people. A managed Kubernetes control plane on Amazon EKS alone is US$0.10 per cluster per hour at the time of writing."
  - "Even large teams move back: in 2023 Prime Video reported cutting one monitoring service's infrastructure cost by 90% by merging its distributed components into a single process."
  - "When you do need to split, extract one service at a time with the strangler fig pattern, starting where the pressure is."
faqs:
  - q: "Are microservices better than a monolith?"
    a: "Not in general. Microservices solve organisational and scaling problems that most businesses don't have yet, and they bring their own costs: network failures, distributed data, more infrastructure and more monitoring. A modular monolith gives most of the structure benefits with far less overhead. Microservices are better when several teams need to ship independently or parts of the system scale very differently."
  - q: "What is a modular monolith?"
    a: "A single application deployed as one unit, but organised into modules with explicit boundaries, such as billing, scheduling and customers. Modules talk through defined interfaces rather than reaching into each other's code or tables. Shopify publicly described moving its large Rails codebase in this direction in 2019."
  - q: "What is a distributed monolith?"
    a: "A system split into services that still have to be changed, tested and deployed together because they share a database or depend tightly on each other. It carries the costs of microservices without the independence. It is the most common result of splitting too early."
  - q: "How many developers do you need before microservices make sense?"
    a: "There is no fixed number. The useful test is whether teams are blocking each other: if separate teams routinely wait on each other's releases, or one change regularly breaks another team's area, independent services start to pay off. One small team rarely benefits."
  - q: "Do microservices cost more to host?"
    a: "Usually, yes. Each service needs its own deployment, scaling, logging and monitoring, and services talking over the network add data transfer and latency. The bigger cost is people: more pipelines to maintain, harder debugging across services and more on call complexity."
  - q: "Can we move from microservices back to a monolith?"
    a: "Yes. Prime Video's 2023 write up described moving a monitoring service from distributed components orchestrated by AWS Step Functions into a single process. Merging services that always change together is a reasonable simplification, not a failure."
sources:
  - title: "Monolith First"
    url: "https://martinfowler.com/bliki/MonolithFirst.html"
    publisher: "Martin Fowler"
  - title: "Microservice Premium"
    url: "https://martinfowler.com/bliki/MicroservicePremium.html"
    publisher: "Martin Fowler"
  - title: "Strangler Fig Application"
    url: "https://martinfowler.com/bliki/StranglerFigApplication.html"
    publisher: "Martin Fowler"
  - title: "Scaling up the Prime Video audio/video monitoring service and reducing costs by 90% (archived copy)"
    url: "https://web.archive.org/web/20231230202019/https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90"
    publisher: "Prime Video Tech"
  - title: "Deconstructing the Monolith: Designing Software that Maximizes Developer Productivity"
    url: "https://shopify.engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity"
    publisher: "Shopify Engineering"
  - title: "Amazon EKS pricing"
    url: "https://aws.amazon.com/eks/pricing/"
    publisher: "Amazon Web Services"
related:
  - title: "The strangler fig pattern"
    href: "/guides/strangler-fig-pattern"
  - title: "Rewrite vs refactor legacy software"
    href: "/guides/rewrite-vs-refactor-legacy-software"
  - title: "Multi tenant SaaS architecture"
    href: "/guides/multi-tenant-saas-architecture"
  - title: "How to reduce cloud costs"
    href: "/guides/reduce-cloud-costs"
service:
  title: "Legacy modernisation"
  href: "/services/legacy-modernisation"
---

## What do monolith and microservices mean in practice?

**A monolith is one application, deployed as one unit, usually with one database. Microservices split the system into many small applications, each deployed on its own and talking to the others over the network.** Between the two sits the modular monolith, which most growing businesses should aim for.

| | Monolith (unstructured) | Modular monolith | Microservices |
|---|---|---|---|
| Deployments | One | One | One per service |
| Database | One, shared freely | One, with tables owned by modules | Usually one per service |
| How parts talk | Direct function calls, anywhere | Defined interfaces between modules | Network calls and messages |
| Failure modes | A bug can affect everything | A bug can affect everything, but changes are contained | Partial outages, timeouts, retries |
| Team fit | One small team | One or several teams | Several independent teams |
| Operations load | Low | Low | High |

"Monolith" has picked up a bad name, but the problem people describe is usually a tangled monolith with no internal structure, not the single deployment itself.

## Why shouldn't most businesses start with microservices?

**Because microservices solve problems of scale and team independence, and they charge a premium whether or not you have those problems.** Martin Fowler's MonolithFirst observation, from 2015, is that almost all the successful microservice stories he heard started with a monolith that got too big and was broken up, while systems built as microservices from scratch often ended up in serious trouble.

In his related piece on the microservice premium, Fowler's guideline is not to consider microservices unless you have a system too complex to manage as a monolith, and he notes that the majority of software systems should be built as a single application with good internal modularity.

A business with one development team, or a partner like us building for you, gets almost nothing from microservices except the costs. The early years of a product are when requirements change fastest, and moving a boundary inside one codebase is a refactor. Moving it between two services is a migration.

## What does a modular monolith look like?

**One codebase and one deployment, divided into modules that each own their part of the business and their own tables.** A practice management system might have modules for clients, scheduling, billing and documents.

The rules that make it work:

1. **Each module owns its data.** Billing doesn't query the scheduling tables directly; it asks the scheduling module.
2. **Modules expose a small public interface.** Everything else is internal and can change freely.
3. **Boundaries are enforced by tooling,** such as dependency rules checked in the build, not just by good intentions.
4. **Shared code stays small.** A giant "common" module is a tangled monolith in disguise.

Shopify described moving one of the largest Ruby on Rails codebases toward this model in 2019, adding boundaries inside the monolith rather than breaking it into services. The appeal is that a module with clean boundaries can later become a service with little rework, if it ever needs to. If you're building a SaaS product, the same thinking applies to tenant isolation; see [multi tenant SaaS architecture](/guides/multi-tenant-saas-architecture).

## What do microservices really cost?

**The premium falls into three buckets: infrastructure, observability and people. The people cost is the largest and the least visible.**

| Cost area | Modular monolith | Microservices |
|---|---|---|
| Hosting | A few containers or instances behind a load balancer | Many services, often on Kubernetes, each with its own scaling |
| Platform | Simple container service or platform as a service | Cluster management; Amazon EKS charges US$0.10 per cluster per hour for the control plane at the time of writing |
| Networking | Mostly in process calls | Service to service traffic, gateways, retries and data transfer |
| Observability | Logs and metrics from one app | Distributed tracing across services to follow one request |
| Testing | One integration test suite | Contract tests between services plus end to end tests |
| Data | Database transactions | Eventual consistency, sagas and duplicated data |
| People | Generalist developers | Platform or DevOps skills on top of application development |

A small worked example of the platform line alone: one EKS cluster each for production and staging costs about US$146 a month in control plane fees (two clusters at 730 hours and US$0.10 an hour), before any servers, load balancers or monitoring. That's small next to salaries, but it illustrates how each layer adds a fixed cost that a single application doesn't need.

Prime Video's 2023 engineering write up is a useful reality check. The team reported that its stream monitoring service, built from distributed components orchestrated by AWS Step Functions with frames passed through Amazon S3, became cheaper and more scalable when they moved the components into a single process, cutting infrastructure cost by 90%. It was one service inside a huge organisation, not a verdict on microservices, but it shows the network between components has a real price. For general cloud bill control, see [how to reduce cloud costs](/guides/reduce-cloud-costs).

## What are the signs you have outgrown a monolith?

**You've outgrown it when specific, measurable pressures appear, not when the codebase feels big.** Look for these:

- **Teams block each other.** Releases queue behind other teams' changes, or one team's change regularly breaks another's area.
- **One part needs very different scaling.** A reporting engine or file processor needs heavy compute in bursts while the rest of the app is quiet.
- **One part needs a different reliability level.** Payments or bookings must stay up even if reporting falls over.
- **One part needs different technology.** A machine learning component is far easier in Python than in the main application's language.
- **Deploys are slow and risky** even after investing in tests and pipeline speed.

If only "the code is messy" is true, the fix is modularising the monolith, not splitting it. A messy monolith split into services becomes a messy distributed system, often a distributed monolith that must still be deployed together.

## How do you split a monolith safely?

**Extract one service at a time, at the boundary where the pressure is, and keep the old system running until the new piece has proven itself.** That approach is the strangler fig pattern. Martin Fowler named it after the strangler figs he saw in Queensland's rainforests in 2001: vines that grow around a host tree until they can stand on their own.

A typical sequence:

1. Modularise first, so the piece you want to extract already has a clean interface and owns its data.
2. Put a routing layer in front, so calls can go to the old code or the new service.
3. Build the new service and move traffic over gradually, starting with a small share.
4. Move the data the service owns, with a plan for the period when both copies exist.
5. Remove the old code once the new service carries all the traffic.

Our [strangler fig pattern](/guides/strangler-fig-pattern) guide covers the steps in more detail, and [rewrite vs refactor](/guides/rewrite-vs-refactor-legacy-software) helps if you're weighing a bigger change.

## Where do serverless functions fit?

**Serverless functions are a hosting choice, not an architecture, and they work with either approach.** A modular monolith can run its main application in a container and push occasional jobs, such as PDF generation, image resizing or webhook handling, into functions that scale on demand. That gives you the cost benefits of serverless for spiky work without turning the core of the system into dozens of services.

The trap is the opposite: building every endpoint as a separate function from day one. That produces a microservice system by accident, with all the deployment, monitoring and data consistency questions, but none of the deliberate boundaries. Our guide to [reducing cloud costs](/guides/reduce-cloud-costs) compares serverless and containers on cost for typical workloads.

## Decision checklist

Stay with a modular monolith if:

- [ ] One team, or one development partner, builds and maintains the system
- [ ] Most changes touch several areas of the business at once
- [ ] Load is moderate and fairly even across features
- [ ] You don't have dedicated platform or DevOps engineers

Consider extracting a service if:

- [ ] Separate teams need to release on their own schedules
- [ ] One component needs very different scaling or uptime
- [ ] One component needs a different language or runtime
- [ ] That component already has a clean boundary and owns its data

If you tick boxes in both lists, extract only the component that triggers the second list and leave the rest as a monolith.

## How AWLabs approaches architecture

We usually start custom systems as a modular monolith with clear module boundaries, and recommend separate services only where a specific need in the Schedule of Work calls for one, such as a background processing worker or an AI component in Python. When modernising an existing system, we work out where the pressure actually is before splitting anything. Senior engineers lead every build, and architecture decisions are written down for whoever maintains the system next. See [legacy modernisation](/services/legacy-modernisation) and [backend development](/services/backend-development).
