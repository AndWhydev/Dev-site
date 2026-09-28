---
title: "How much does software maintenance cost per year?"
metaTitle: "Software Maintenance Cost Per Year in Australia (2026)"
description: "How much does software maintenance cost per year? Typically 15 to 20% of the build cost. Support retainer and SLA pricing in AUD, and how to reduce the cost."
eyebrow: "Cost guide"
category: cost
published: 2026-09-28
updated: 2026-09-28
summary: "Software maintenance typically costs 15 to 20% of the original build cost per year, and up to 25% for mobile apps, fast-moving products or systems with many integrations. For a $200k system that's $30k to $40k AUD a year (ex GST), usually paid as a monthly retainer, plus hosting and third-party licences. The budget covers security patches, dependency and platform upgrades, bug fixes and small improvements, not major new features."
takeaways:
  - "The 15 to 20% rule of thumb is widely used by Australian providers; treat it as a planning figure, not a law."
  - "Most maintenance is not bug fixing: it's keeping up with changing platforms, dependencies, security fixes and business needs."
  - "Platforms force change on a schedule: Node.js LTS releases get about 30 months of support, and Google Play raises its target API requirement every year."
  - "Retainers with a defined response time suit business-critical systems; ad hoc support suits low-risk internal tools."
  - "Skipping maintenance doesn't save money. It moves the cost to a larger, riskier upgrade or rebuild later."
faqs:
  - q: "Is 15 to 20% a year really normal for software maintenance?"
    a: "Yes, as a planning figure for actively used business software. Australian providers publish similar numbers: VT Digital cites 15 to 20% a year and Aizecs 15 to 25%. Stable internal tools with few integrations can sit below 15%. Mobile apps, products with frequent releases and systems handling sensitive data often sit above 20%."
  - q: "What does a software maintenance retainer include?"
    a: "Typically security patching, dependency and framework upgrades, monitoring and incident response within an agreed response time, bug fixes, small changes, and a monthly report. Major new features are usually quoted separately. Always check what counts as a bug versus a change, and whether unused hours roll over."
  - q: "Do we still need maintenance if the software isn't changing?"
    a: "Yes, if it's in use. The software may not change, but the operating system, runtime, browsers, mobile platforms, third-party APIs and security threats around it do. Software left untouched for a few years usually needs a large catch-up upgrade before any change can be made safely."
  - q: "What is a typical SLA for software support in Australia?"
    a: "Common arrangements respond to critical outages within 1 to 4 business hours, with 24/7 cover available at extra cost, and to minor issues within 1 to 3 business days. Response time is not fix time; check whether the agreement commits to restoration targets as well."
  - q: "How much does a software support retainer cost per month?"
    a: "Typical Australian retainers for business-critical systems run about $1,500 to $15,000 a month ex GST, depending on the hours included and the response times agreed. A managed service with 24/7 cover commonly costs $8,000 to $30,000 or more a month. At a $1,400 day rate, two days a month is $2,800."
  - q: "How much does app maintenance cost per year?"
    a: "Mobile apps sit at the higher end, around 20 to 25% of the build cost a year, because iOS and Android change every year and Google Play raises its target API level requirement annually. For a $300k web and mobile app build, that's $60k to $75k a year, or $5,000 to $6,250 a month."
  - q: "Is hosting included in maintenance?"
    a: "Usually not. Hosting, domains, email services and software licences are normally billed separately, often directly to your own accounts. Some providers bundle them into a managed service fee."
  - q: "Can we maintain the software in-house instead?"
    a: "Yes, if you have developers with the right skills and enough time. One developer can maintain several small systems, but a single person is a continuity risk. Make sure you hold the source code, documentation and all account access, whichever way you go."
sources:
  - title: "Enterprise software development cost in Australia: 2026 guide (12 February 2026)"
    url: "https://vtdigital.com.au/enterprise-software-development-cost-in-australia-2026-guide/"
    publisher: "VT Digital"
  - title: "How much does it cost to build a SaaS app in Australia? (13 March 2026)"
    url: "https://www.aizecs.com/blog/cost-to-build-saas-app-australia"
    publisher: "Aizecs"
  - title: "Node.js releases"
    url: "https://nodejs.org/en/about/previous-releases"
    publisher: "OpenJS Foundation"
  - title: "Meet Google Play's target API level requirement"
    url: "https://developer.android.com/google/play/requirements/target-sdk"
    publisher: "Google"
  - title: "Information Technology: Agencies Need to Plan for Modernizing Critical Decades-Old Legacy Systems (GAO-25-107795)"
    url: "https://www.gao.gov/products/gao-25-107795"
    publisher: "US Government Accountability Office"
  - title: "SWEBOK Guide v4.0a, Chapter 7: Software Maintenance"
    url: "https://www.computer.org/education/bodies-of-knowledge/software-engineering"
    publisher: "IEEE Computer Society"
  - title: "Contractor day rates in Australia: 2026 guide"
    url: "https://www.resourced.com.au/articles/contractor-day-rates-australia-guide-2026"
    publisher: "Re:Sourced"
related:
  - title: "How much does custom software cost in Australia?"
    href: "/guides/custom-software-development-cost-australia"
  - title: "How much does legacy system modernisation cost in Australia?"
    href: "/guides/legacy-modernisation-cost-australia"
  - title: "Code audit and technical due diligence"
    href: "/services/code-audit"
  - title: "Freelancer vs agency vs in-house developers"
    href: "/guides/freelancer-vs-agency-vs-in-house"
service:
  title: "Software maintenance and support"
  href: "/services/software-maintenance-support"
disclaimer: financial
---

## How much does software maintenance cost per year?

**Plan on 15 to 20% of the original build cost per year for software that's actively used, and up to 25% for mobile apps and fast-moving products.** It's a rule of thumb rather than a law, but it's consistent across Australian providers: VT Digital's 2026 guide cites 15 to 20% a year, and Aizecs cites 15 to 25%.

Here's what that looks like in AUD, ex GST, for common system types, per year and as a monthly maintenance fee. These are typical planning ranges, not quotes, and exclude hosting and licences.

| System | Illustrative build cost | Typical rate | Annual maintenance | Monthly equivalent |
|---|---|---|---|---|
| Stable internal tool, few integrations | $80k | 12 to 15% | $9.6k to $12k | $800 to $1,000 |
| Business web app with integrations | $150k | 15 to 20% | $22.5k to $30k | $1,875 to $2,500 |
| Commercial SaaS product | $250k | 18 to 25% | $45k to $62.5k | $3,750 to $5,200 |
| Web plus iOS and Android apps | $300k | 20 to 25% | $60k to $75k | $5,000 to $6,250 |
| Enterprise platform | $600k | 15 to 20% | $90k to $120k | $7,500 to $10,000 |

Why a percentage of build cost? Because the build cost is a decent proxy for how much code, how many integrations and how much complexity there is to keep working. A bigger, more connected system has more that can break and more that needs updating.

## Why does software need maintenance if nothing is broken?

**Because the world around the software keeps changing, even when the code doesn't.** The IEEE's Software Engineering Body of Knowledge (SWEBOK) treats maintenance as its own discipline, and the international standard for it, ISO/IEC/IEEE 14764, classifies the work into categories. The four classic ones are:

| Type | What it means | Examples |
|---|---|---|
| Corrective | Fixing faults found in use | A report shows wrong totals for a date range |
| Adaptive | Keeping the software working in a changed environment | Runtime upgrades, new OS versions, a partner's API change |
| Perfective | Improving it for users or performance | A faster search, a clearer form, a new export |
| Preventive | Fixing latent problems before they cause failures | Replacing a deprecated library, adding tests, tightening security |

Most of the effort goes into adaptive and perfective work, not bug fixes. The environment moves on a published schedule:

- **Runtimes.** Node.js ships a new major version every year, and its long-term support releases receive critical fixes for about 30 months. A backend built today will need at least one major runtime upgrade within three years.
- **Mobile platforms.** From 31 August 2026, new apps and updates on Google Play must target Android 16 (API level 36) or higher, and that requirement advances each year. An Android app that isn't updated can't ship fixes.
- **Security vulnerabilities.** New vulnerabilities are found in popular libraries constantly. Each needs assessing and, where relevant, patching.
- **Third-party APIs.** Payment, accounting, mapping and AI providers version and retire their APIs, sometimes with only months of notice.

## What does a maintenance budget actually buy?

**A good maintenance arrangement keeps the system secure, current and working, with a small allowance for improvements.** Typical inclusions, and what's normally excluded:

| Usually included | Usually excluded (quoted separately) |
|---|---|
| Security patches and dependency updates | Major new features or modules |
| Runtime, framework and OS upgrades within a version family | Full redesigns or platform migrations |
| Monitoring, alerting and incident response | Hosting, domains and third-party licences |
| Bug fixes | Work caused by changes you make outside the agreement |
| Small changes and content updates within the hours allowance | Data fixes caused by user error beyond a set allowance |
| Backup checks and restore testing | Out-of-hours cover, unless purchased |
| Monthly report on work done and risks | Penetration testing by an independent firm |

The right-hand column is where the hidden costs of maintenance usually sit, so ask any provider for this list in writing. The most common dispute in support arrangements is whether something is a bug (covered) or a change (billable).

## Which support model suits you, and what does it cost?

**Match the model to the cost of the system being down.** An internal tool used weekly doesn't need the same arrangement as a customer-facing platform that takes payments.

| Model | How it works | Typical cost (AUD, ex GST) | Suits |
|---|---|---|---|
| Ad hoc, time and materials | Pay per request at an hourly or daily rate, no commitment | Hourly or daily rates, no minimum | Low-risk internal tools |
| Prepaid block of hours | Buy hours in advance at a discount; draw down as needed | $5k to $20k blocks | Systems with irregular change |
| Monthly retainer | Fixed monthly fee for a set number of hours, maintenance tasks and business-hours response | $1,500 to $15,000 a month | Most business-critical systems |
| Managed service with 24/7 SLA | Retainer plus on-call cover, restoration targets and reporting | $8,000 to $30,000+ a month | Revenue-critical or public-facing platforms |

These ranges follow from day rates. At the time of writing, Re:Sourced reports senior engineer contractor day rates in Sydney of $800 to $1,100, and agencies charge more to cover continuity, tooling and cover for leave. A retainer of two days a month at $1,400 is $2,800 a month; five days is $7,000. Round-the-clock on-call cover adds cost because someone has to be available, whether or not anything breaks.

A typical severity scheme looks like this, though targets vary by agreement:

| Severity | Example | Typical response target |
|---|---|---|
| Critical | System down or data at risk for all users | 1 to 4 business hours, or 1 hour on 24/7 plans |
| High | Major feature broken, no workaround | 4 to 8 business hours |
| Medium | Feature impaired, workaround exists | 1 to 2 business days |
| Low | Cosmetic issue or question | 3 to 5 business days |

## A worked example: maintaining a $200k business application

**Here's how a maintenance budget breaks down for an illustrative system.** The system: a customer portal and internal admin app built for $200k, with a Node.js backend, PostgreSQL database, integrations with Xero and a CRM, hosted in AWS Sydney. At 15 to 20%, the annual budget is $30k to $40k. Here's how a provider might plan a year at $1,400 a day:

| Activity | Days per year | Cost |
|---|---|---|
| Monthly dependency and security updates (0.5 day a month) | 6 | $8,400 |
| One major runtime or framework upgrade | 4 | $5,600 |
| Bug fixes and incident response | 6 | $8,400 |
| Integration changes (API version updates from Xero or the CRM) | 3 | $4,200 |
| Small improvements requested by users | 6 | $8,400 |
| Monitoring review, backup restore tests, monthly reporting | 2 | $2,800 |
| **Total** | **27** | **$37,800** |

That's 18.9% of the build cost, or $3,150 a month as a retainer. On top of that sits hosting, which for a system like this in an Australian AWS region might run a few hundred to a couple of thousand dollars a month depending on size and redundancy.

If the business wanted a significant new module during the year, that would be quoted as a separate project, not squeezed into maintenance hours.

## Is software maintenance worth the cost? What happens if you skip it

**Maintenance is worth paying for on any system your business relies on, because skipped maintenance doesn't disappear; it accumulates, and it gets more expensive the longer you wait.** The US Government Accountability Office reported in 2025 that federal agencies typically spend about 80% of their IT budgets operating and maintaining existing systems, much of it on legacy systems that became expensive precisely because they fell behind.

The pattern at smaller scale is familiar:

1. Updates are deferred to save money.
2. Dependencies fall several major versions behind; some reach end of life.
3. A security issue, a platform deadline or a needed change forces action.
4. The catch-up upgrade now touches everything at once, costs several years of maintenance in one go, and carries real risk.

At that point the conversation often shifts to modernisation. Our [legacy modernisation cost guide](/guides/legacy-modernisation-cost-australia) covers what that costs.

## How can you reduce maintenance cost?

**The biggest savings are designed in during the build, not negotiated afterwards.** Levers that work:

- **Choose mainstream, well-supported technology.** Popular frameworks get security fixes quickly and have large pools of developers.
- **Keep dependencies lean.** Every library is something to update. Fewer, better-maintained ones reduce the monthly load.
- **Insist on automated tests.** Tests make upgrades fast and safe; without them every update needs manual checking.
- **Automate updates.** Tooling that proposes dependency updates and runs tests on them turns a monthly chore into a quick review.
- **Update little and often.** Monthly small updates cost less over a year than one large catch-up.
- **Retire what nobody uses.** Unused features still need maintaining. Usage data shows what can go.
- **Keep ownership clean.** Hold the source code, documentation and every account in your organisation's name so you can change providers without a costly handover.

Not sure what state your current system is in? A [code audit](/services/code-audit) gives an independent view of dependency age, test coverage and risk, which is also the best basis for a maintenance quote.

## How does maintenance fit into total cost of ownership?

**Over five years, maintenance and hosting often cost as much as the original build.** A $200k system at 18% a year costs $36k annually, or $180k over five years, before hosting. That's why build and maintenance should be priced together when you compare options. It's also a key input when weighing custom software against a SaaS subscription; see [how much custom software costs](/guides/custom-software-development-cost-australia) for the build side, and [freelancer vs agency vs in-house](/guides/freelancer-vs-agency-vs-in-house) for who should do the maintaining.

## How All Webbed Labs approaches maintenance

We offer maintenance as a monthly retainer with a written list of what's included, an agreed response time for each severity level, and a monthly report of work done and upcoming risks such as runtime end-of-life dates. We work in your repository and your cloud accounts, so you keep full ownership and can move providers at any time. For systems we didn't build, we start with a short code audit so the retainer is priced on evidence. Read more about our [software maintenance and support service](/services/software-maintenance-support).
