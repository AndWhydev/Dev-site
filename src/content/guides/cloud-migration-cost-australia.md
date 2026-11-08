---
title: "How much does cloud migration cost in Australia?"
metaTitle: "Cloud Migration Cost in Australia (2026): AWS, Azure, Google"
description: "Cloud migration cost in Australia by approach: rehost, replatform or refactor, plus run costs, Australian regions, vendor funding programs and FinOps."
eyebrow: "Cost guide"
category: cost
published: 2026-11-08
updated: 2026-11-08
summary: "A cloud migration in Australia typically costs $6k to $30k (AUD, ex GST) for a small business moving a few servers or applications, $12k to $30k to set up a secure landing zone, then roughly $3k to $15k per application to rehost, $11k to $45k to replatform and $45k to $225k or more to refactor. In our worked example, a mid sized estate of a dozen workloads comes to about $130k to $180k. These are ranges built from typical effort at Australian day rates, not quotes. Budget separately for dual running, ongoing cloud bills and cost management after the move."
takeaways:
  - "The approach per application drives cost more than the cloud you choose. Rehosting is cheapest to move; refactoring costs most but can cut run costs and risk."
  - "Migration project cost and monthly run cost are different budgets. Many migrations go over because nobody modelled the cloud bill or the months of running both environments."
  - "AWS, Microsoft and Google all run programs that can fund parts of a migration, usually through partners and credits. Ask before you sign, and read the conditions."
  - "All three major providers have at least two Australian regions, so data residency is achievable for most workloads; check each service you need is offered onshore."
  - "Cost management (FinOps) after the move is where savings are made or lost: rightsizing, commitments, tagging and switching off what isn't used."
faqs:
  - q: "How much does it cost to migrate to the cloud for a small business?"
    a: "For a small business moving a file server, email and one or two line of business applications, typical professional costs range from about $6k to $30k, ex GST, depending on how much is replaced with SaaS and how much is rehosted. Ongoing cloud and licence costs are separate."
  - q: "Is it cheaper to run in the cloud than on premises?"
    a: "Not automatically. A like for like rehost often costs about the same or more to run, because you pay for capacity you previously owned. Savings come from rightsizing, retiring unused systems, commitment discounts and moving to managed services. Model the run cost before deciding."
  - q: "How long does a cloud migration take?"
    a: "A small business migration might take a few weeks. A mid sized estate of 10 to 20 workloads typically takes three to six months including discovery, landing zone, migration waves and cutover. Large programs with refactoring run longer."
  - q: "Can AWS or Microsoft pay for our migration?"
    a: "They can contribute. The AWS Migration Acceleration Program offers investments to offset initial migration costs, and Microsoft's Frontier Accelerate for Azure lists delivery funding through specialised partners and Azure credits. Eligibility, amounts and conditions are set case by case, usually through a partner, so treat them as a discount to negotiate, not a plan to rely on."
  - q: "What are the hidden costs of cloud migration?"
    a: "Running old and new environments in parallel, data transfer during replication, licence changes, retraining staff, refactoring integrations that assumed a local network, security tooling, and the time your own team spends testing and approving cutovers."
  - q: "Should we refactor during the migration?"
    a: "Usually not for most of the estate. AWS's own guidance says refactoring is the most complex strategy and recommends rehosting, relocating or replatforming first, then modernising after the move. Refactor during migration only where the application can't move otherwise or the business case is strong."
  - q: "Can cloud migration costs be capitalised?"
    a: "Some may be, depending on what the spend creates and the accounting and tax rules that apply. Configuration of a cloud service you don't control is often expensed for accounting purposes. Ask your accountant, and see our guide to software development tax deductions for the tax side."
  - q: "How much does it cost to migrate one application to AWS or Azure?"
    a: "Typically $3k to $15k to rehost an application as it is, $11k to $45k to replatform it onto managed services such as a managed database, and $45k to $225k or more to refactor it for the cloud (AUD, ex GST). If it is your first workload, add a landing zone of $12k to $30k. These are market ranges built from typical effort, not quotes."
  - q: "What is a cloud landing zone and do we need one?"
    a: "A landing zone is the secure foundation you set up once before workloads move: accounts, networking, identity, logging, security baselines and backup. Most mid sized migrations need one, and it typically takes 10 to 20 days and costs $12k to $30k (AUD, ex GST). The worked example on this page allows 15 days for a landing zone in an Australian region, so every later workload inherits the same controls."
  - q: "Can our data stay in Australia after a cloud migration?"
    a: "Yes, for most workloads. At the time of writing (November 2026), AWS has Sydney and Melbourne regions, Microsoft Azure has Australia East, Australia Southeast, Australia Central and Australia Central 2, and Google Cloud has Sydney and Melbourne. Check that each service you plan to use, including backup, monitoring and AI services, is offered in your chosen Australian region before you commit."
sources:
  - title: "Migration strategies (the 7 Rs)"
    url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html"
    publisher: "AWS Prescriptive Guidance"
  - title: "AWS Migration Acceleration Program"
    url: "https://aws.amazon.com/migration-acceleration-program/"
    publisher: "Amazon Web Services"
  - title: "AWS Transform MGN (Application Migration Service) pricing"
    url: "https://aws.amazon.com/application-migration-service/pricing/"
    publisher: "Amazon Web Services"
  - title: "Frontier Accelerate for Azure"
    url: "https://azure.microsoft.com/en-au/solutions/azure-accelerate/"
    publisher: "Microsoft"
  - title: "Rapid Migration and Modernization Program (RaMP)"
    url: "https://cloud.google.com/solutions/cloud-migration-program"
    publisher: "Google Cloud"
  - title: "AWS Regions and Availability Zones"
    url: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"
    publisher: "Amazon Web Services"
  - title: "Azure regions list"
    url: "https://learn.microsoft.com/en-us/azure/reliability/regions-list"
    publisher: "Microsoft Learn"
  - title: "Google Cloud regions and zones"
    url: "https://cloud.google.com/compute/docs/regions-zones"
    publisher: "Google Cloud"
  - title: "What is FinOps?"
    url: "https://www.finops.org/introduction/what-is-finops/"
    publisher: "FinOps Foundation"
  - title: "Contractor day rates in Australia: 2026 guide (July 2026)"
    url: "https://www.resourced.com.au/articles/contractor-day-rates-australia-guide-2026"
    publisher: "Re:Sourced"
related:
  - title: "Legacy modernisation cost in Australia"
    href: "/guides/legacy-modernisation-cost-australia"
  - title: "Data residency vs data sovereignty"
    href: "/guides/data-residency-vs-data-sovereignty"
  - title: "Rewrite vs refactor legacy software"
    href: "/guides/rewrite-vs-refactor-legacy-software"
  - title: "Digital transformation"
    href: "/digital-transformation"
service:
  title: "Cloud infrastructure"
  href: "/services/cloud-infrastructure"
disclaimer: financial
---

## How much does cloud migration cost by approach?

**The cost of moving each application depends on how much you change it on the way: moving it as is (rehost) is cheapest, adjusting it to use managed services (replatform) costs more, and redesigning it for the cloud (refactor) costs most.** AWS's prescriptive guidance lists seven strategies, the "7 Rs": retire, retain, rehost, relocate, repurchase, replatform and refactor or re-architect. Most estates use several.

These are typical Australian market ranges for professional migration work, in AUD, ex GST. They cover planning, build, testing and cutover, not your ongoing cloud bill.

| Approach | What it means | Typical effort | Cost range |
|---|---|---|---|
| Retire | Switch off an application nobody needs | Under 1 to 2 days, mostly confirming and archiving | Under $3k |
| Repurchase | Replace with a SaaS product, such as moving a file server to Microsoft 365 or an on premises CRM to a hosted one | 3 to 20 days, mostly data migration and setup | $3k to $30k plus subscriptions |
| Rehost (lift and shift) | Move servers as they are to cloud virtual machines | 2 to 10 days per application | $3k to $15k per application |
| Relocate | Move a virtualised platform as a whole, for example VMware workloads to a cloud hosted VMware service | Varies by estate size | Quote based |
| Replatform | Small changes to use managed services, such as a managed database or containers | 10 to 30 days per application | $11k to $45k per application |
| Refactor or re-architect | Redesign for the cloud: serverless, microservices, event driven | 40 to 150+ days per application | $45k to $225k+ per application |
| Landing zone | Accounts, networking, identity, logging, security baselines and backup, set up once | 10 to 20 days | $12k to $30k |
| Small business migration | A few servers, email and files, one or two apps | 5 to 20 days | $6k to $30k |

**How the ranges are worked out.** Effort is converted at an assumed blended agency rate of $1,100 to $1,500 a day. Re:Sourced's July 2026 guide puts senior cloud and SRE contractor rates in Sydney at $900 to $1,200 a day ex GST, with architects up to $1,400; agencies typically charge more to cover project management, testing and support.

AWS's guidance is blunt about refactoring: it is the most complex strategy and is "not recommended for large migrations". Its recommendation is to rehost, relocate or replatform first, then modernise after the move. For applications that genuinely need rebuilding, our [legacy modernisation cost guide](/guides/legacy-modernisation-cost-australia) and [rewrite vs refactor](/guides/rewrite-vs-refactor-legacy-software) go deeper.

## A worked example: a mid sized estate of 12 workloads

**A business with a dozen workloads, migrating mostly by rehost and replatform, is looking at roughly $130k to $180k of project cost on these assumptions.** This example is illustrative. It uses the effort assumptions above at $1,100 to $1,500 a day.

| Work package | Effort |
|---|---|
| Discovery and migration plan (inventory, dependencies, 7 Rs decision per workload) | 10 days |
| Landing zone in an Australian region | 15 days |
| 1 workload retired | 1 day |
| 7 workloads rehosted at about 4 days each | 28 days |
| 3 workloads replatformed to managed databases or containers at about 15 days each | 45 days |
| 1 workload repurchased as SaaS, with data migration | 5 days |
| Testing, cutover rehearsals and go live support across waves | 15 days |
| **Total** | **119 days** |

At $1,100 a day that's $130,900; at $1,500 a day, $178,500. Trimming discovery and cutover rehearsals would lower it, but those are the steps that prevent failed cutovers, so we wouldn't recommend cutting them.

What's not in that figure: the cloud bill during and after migration, any software licence changes, the months both environments run side by side, and your own team's time for testing and approvals. How the project spend is treated for tax is a question for your accountant; our guide to [software development tax deductions](/guides/software-development-tax-deductions) explains the ATO rules for software.

## How is migration cost different from run cost?

**The migration project is a one off cost; the cloud bill is permanent, and it is the number most often underestimated.** Plan both, separately.

| Budget | What's in it | How to estimate |
|---|---|---|
| Migration project | Discovery, landing zone, migration work, testing, cutover, training | Effort by workload, as above |
| Dual running | Old and new environments running in parallel during waves | Months of overlap × current hosting cost plus new cloud cost |
| Replication and transfer | Tooling and data transfer while copying servers and data | Vendor pricing for the tools and data volumes |
| Ongoing run cost | Compute, storage, databases, networking, backup, monitoring, security tools, support plans | The provider's pricing calculator, from measured utilisation, not current server sizes |
| Cost management | Ongoing rightsizing, commitments, tagging, reporting | A few days a month, or tooling |

Some tooling costs less than people expect. For example, at the time of writing AWS's server replication service, AWS Transform MGN (formerly Application Migration Service), lists no service charge for the first 90 days of replication per server, then about US$30 a month per server. AWS notes you still pay for the infrastructure it provisions during replication and for test and cutover instances.

The run cost trap is sizing cloud servers to match on premises hardware. On premises servers are usually bought for peak load plus growth. In the cloud you pay for what you provision every hour, so measure actual CPU, memory and storage use for a few weeks before sizing.

## What about Australian regions and data residency?

**AWS, Microsoft Azure and Google Cloud all operate at least two Australian regions, so most workloads can stay onshore.** At the time of writing (November 2026), from each provider's region list:

| Provider | Australian regions |
|---|---|
| AWS | Asia Pacific (Sydney) `ap-southeast-2`, Asia Pacific (Melbourne) `ap-southeast-4` |
| Microsoft Azure | Australia East (New South Wales), Australia Southeast (Victoria), Australia Central and Australia Central 2 |
| Google Cloud | `australia-southeast1` (Sydney), `australia-southeast2` (Melbourne) |

Residency is decided service by service, not just region by region. Some managed services, AI models and global features process or store data outside the region you select. Check the provider's regional availability for each service in your design before you commit, and keep backups and disaster recovery copies onshore if your obligations require it. Our guide to [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty) explains the difference and why it matters for contracts and regulators.

## Can a cloud vendor fund part of the migration?

**Yes, sometimes. All three major providers run migration programs that combine methodology, partner support and funding or credits, but the terms are set case by case.** As described on each provider's site at the time of writing:

- **AWS Migration Acceleration Program (MAP):** a three phase framework (Assess, Mobilize, Migrate and Modernize) with tools, training, AWS Migration Competency Partners and "financial investments" to offset initial migration costs.
- **Microsoft Frontier Accelerate for Azure:** Microsoft's current program page lists delivery funding through specialised Azure partners, Azure credits to offset costs, and deployment assistance from its Cloud Accelerate Factory. Microsoft's older Azure Migrate and Modernize page now leads to it.
- **Google Cloud Rapid Migration and Modernization Program (RaMP):** data driven discovery of your environment, total cost of ownership analysis and a migration plan, with Google and partner support.

Practical advice: ask about funding before you sign anything, because programs often need to be engaged at the assessment stage. Read the conditions, which commonly involve committed spend or migrating a minimum workload. And don't let funding pick your cloud. A credit that covers part of the migration is small next to years of running costs on a platform that suits you less well.

## What makes a migration cost more?

**Unknowns in the estate, not the cloud work itself, cause most overruns.** These are the factors that push a workload to the top of its range:

- **Undocumented dependencies.** An application that quietly reads a share on another server, or a nightly job nobody remembers, breaks at cutover. Dependency mapping during discovery is cheaper than finding them in production.
- **Old operating systems and databases.** Versions that are out of support may not be accepted by migration tools or may need upgrading first, which turns a rehost into a replatform.
- **Licensing.** Some commercial software licences are tied to physical hardware or restrict cloud use. Check before you plan, because a licence change can cost more than the migration work.
- **Data volume and change rate.** Terabytes of data, or databases with heavy writes, need longer replication windows and more careful cutovers.
- **Integrations that assume a local network.** Systems that connect by IP address, local file paths or on premises identity need rework.
- **Downtime tolerance.** A system that can be offline for a weekend is far cheaper to move than one that needs near zero downtime.
- **Security and compliance requirements.** Regulated data may need encryption with keys you manage, specific logging, network isolation and evidence for auditors. If certification is on your roadmap, see [SOC 2 vs ISO 27001](/guides/soc-2-vs-iso-27001-australia).
- **Staff readiness.** Your team will operate the new environment. Training and runbooks are part of the cost, not an extra.

## What are the stages of a cloud migration?

**Most migrations follow the same five stages, whatever the provider, and the first two decide whether the rest goes to plan.**

1. **Discover and assess.** Inventory servers, applications, databases and integrations; measure real utilisation; map dependencies; decide one of the 7 Rs for each workload; model run costs. This is also the point to engage the provider's migration program.
2. **Build the landing zone.** Set up the account structure, networking, identity and single sign on, logging, backup, guardrails and cost reporting in your chosen Australian region, ideally as infrastructure as code so it is repeatable and auditable.
3. **Pilot.** Move one or two low risk workloads end to end, including cutover and rollback, to prove the method and the tooling.
4. **Migrate in waves.** Group workloads by dependency and risk, rehearse each cutover, then move them in planned windows with a rollback plan.
5. **Optimise and decommission.** Rightsize, switch on cost controls, hand over runbooks, then switch off and dispose of the old environment so you stop paying for it.

Skipping the decommission step is common and expensive: the old data centre contract or servers keep costing money long after the last workload has moved.

## How do you keep the cloud bill under control after migration?

**Treat cost as an engineering metric from the first month, which is what the FinOps discipline is about.** The FinOps Foundation describes FinOps as an operational framework and cultural practice that creates financial accountability through collaboration between engineering, finance and business teams. In practice, for a small or mid sized business:

1. **Tag everything** by application, environment and owner, so the bill can be read.
2. **Set budgets and alerts** per account or project, so surprises are caught in days, not at quarter end.
3. **Rightsize after 30 to 60 days** of real usage data. Most rehosted servers are oversized.
4. **Switch off non production environments** out of hours.
5. **Commit once usage is stable.** Savings plans, reserved capacity and committed use discounts reduce the price of steady workloads in exchange for a term commitment.
6. **Use storage tiers and lifecycle rules** for logs, backups and old files.
7. **Review monthly.** A short meeting between whoever owns the bill and whoever owns the architecture.

A migration that skips this step often costs more to run than the data centre it replaced.

## How AWLabs approaches cloud migration

We start with a Development Consult, then a paid Discovery Audit, credited in full against the build, that inventories your workloads, measures utilisation, decides a migration strategy per workload and models both the project and the ongoing run cost. The work is then priced as a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. We build landing zones in Australian regions wherever your data needs to stay onshore, as infrastructure as code, with logging, backup and security baselines, and we tell you when a workload should be retired or replaced with SaaS rather than migrated. Senior engineers lead every build. See our [cloud infrastructure service](/services/cloud-infrastructure), or [digital transformation](/digital-transformation) if migration is part of a wider change program.
