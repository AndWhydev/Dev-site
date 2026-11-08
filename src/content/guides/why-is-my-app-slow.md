---
title: "Why is my app slow? A diagnosis guide for business owners"
metaTitle: "Why Is My App Slow? A Diagnosis Guide for Business Owners"
description: "Why custom web and mobile apps slow down: database queries, US hosting for Australian users, heavy front ends, third party calls and AI, and how to diagnose."
eyebrow: "Problem guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "Most slow business apps are slow for one of five reasons: inefficient database queries, servers hosted far from Australian users, a heavy front end, slow third party services, or AI features that wait for a full model response. Each has a different fix, and most can be found with measurement rather than a rewrite. Start by measuring who is slow, on which screens and when, then get a performance review that names the cause with evidence before you pay for structural work."
takeaways:
  - "Measure first: which users, which screens, which times of day. 'The app is slow' is not yet a diagnosis."
  - "Database queries are the most common cause in business apps, and often the cheapest to fix."
  - "Hosting on the US East Coast adds about 200 milliseconds to every round trip from eastern Australia, which multiplies across the many requests a screen makes."
  - "AI features feel slow mainly because users wait for the full answer. Streaming, smaller models and caching help."
  - "A credible diagnosis names the cause with evidence and separates quick fixes from structural ones. Be wary of any recommendation to rewrite that comes without measurements."
faqs:
  - q: "Why is my app slow all of a sudden?"
    a: "A sudden slowdown usually follows a change: a new release, more data or users, a third party service having problems, or a hosting change. Check what changed in the week it started, and look at server and database monitoring for that period."
  - q: "Will moving to a bigger server fix it?"
    a: "Sometimes, briefly. If the cause is a slow database query or a chatty page, a bigger server buys a little time while costs go up. Find the cause first, then decide whether more capacity is the right fix."
  - q: "Does hosting in Australia make an app faster?"
    a: "For Australian users, usually yes, because every request travels a shorter distance. Microsoft's published latency between its East US and Australia East regions is around 200 milliseconds per round trip, and a screen often makes many sequential requests."
  - q: "How do I know if the problem is my phone or the app?"
    a: "Compare across devices and networks. If it is slow for everyone on every device, the cause is usually on the server or in the code. If it is slow only on older phones, the app may be doing too much work on the device."
  - q: "Does a slow app mean it needs rewriting?"
    a: "Rarely on its own. Most performance problems are concentrated in a few queries, screens or integrations. A rewrite is justified when slowness is one symptom among many structural problems, and an audit should show that with evidence."
  - q: "How much does a performance review cost?"
    a: "It depends on the size of the app and access to monitoring, but a focused review is typically a few days to two weeks of senior engineering time. It should produce a ranked list of causes, evidence and estimated fixes."
sources:
  - title: "Azure network round trip latency statistics"
    url: "https://learn.microsoft.com/en-us/azure/networking/azure-network-latency"
    publisher: "Microsoft Learn"
  - title: "Web Vitals"
    url: "https://web.dev/articles/vitals"
    publisher: "Google web.dev"
  - title: "Android vitals"
    url: "https://developer.android.com/topic/performance/vitals"
    publisher: "Android Developers"
  - title: "AWS Regions and Availability Zones"
    url: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"
    publisher: "Amazon Web Services"
related:
  - title: "Is my Lovable app production ready?"
    href: "/guides/make-ai-built-app-production-ready"
  - title: "What does it cost to run an LLM in production?"
    href: "/guides/llm-running-costs"
  - title: "Rewrite vs refactor legacy software"
    href: "/guides/rewrite-vs-refactor-legacy-software"
  - title: "Why a Discovery Audit"
    href: "/why-audit"
service:
  title: "Code audit"
  href: "/services/code-audit"
---

## Slow for whom? Measure before you guess

**Before anyone fixes anything, pin down who is experiencing slowness, on which screens, and when.** "The app is slow" can mean five different problems, and each has a different fix.

Collect this from your team and users:

- [ ] Which screens or actions are slow? Be specific: "opening a job with lots of photos", not "the jobs page".
- [ ] Is it slow for everyone, or some users? Office or field? Desktop or phone? One state or everywhere?
- [ ] Is it slow all the time, or at certain times, such as Monday mornings or month end?
- [ ] When did it start? What changed around then?
- [ ] Roughly how slow? Two seconds and twenty seconds are different problems.

Then look at what the system already records. Hosting platforms and cloud providers show server response times and errors. Databases can log slow queries. For web apps, Google's Core Web Vitals give public benchmarks: a good experience means Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads. If your app has no monitoring at all, adding it is the first fix.

## What usually makes a business app slow?

**In custom business apps, the cause is usually one of five things, and the database is the most common.** Here is how they show up and how they are usually fixed.

| Cause | Typical symptom | Usual fix | Effort |
|---|---|---|---|
| Database queries | Screens get slower as data grows; lists and reports are worst | Indexes, rewriting queries, loading less data per screen, pagination | Often small |
| Hosting far from users | Everything a little slow, worse on poor connections | Host in an Australian region, use a CDN for static files | Moderate |
| Heavy front end | Slow first load, laggy typing and scrolling, worse on older devices | Smaller bundles, lazy loading, fewer re renders, image optimisation | Moderate |
| Third party calls | Specific actions hang: payments, address lookups, sync with Xero or a CRM | Timeouts, background jobs, caching responses | Small to moderate |
| AI features | Long waits for answers, spinner with no feedback | Streaming, smaller models, caching, background processing | Moderate |

The classic database problem is the "N plus 1" pattern: a list of 100 jobs that makes one query for the list and then 100 more, one per job, to fetch each customer. With ten jobs nobody notices; with a thousand, the screen crawls. Fixing it is usually a few hours of work once found.

## How much does hosting in the US cost Australian users?

**Every request from an Australian user to a US server pays a round trip of around 200 milliseconds before any work is done.** Microsoft's published network latency between its East US and Australia East regions is around 200 milliseconds, and its West US regions sit at around 140 to 160 milliseconds.

That sounds small, but a screen rarely makes one request. A page that loads data in five sequential steps spends a second in transit alone. Add a database in one region and an application server in another, and every query crosses the Pacific.

Why apps end up in the US: it was the default region in a tutorial, a no code platform hosts there, or a US service was cheaper. AWS, Azure and Google Cloud all offer Sydney and Melbourne regions, so moving is usually possible. Australian regions cost a little more per hour; our [cloud infrastructure service](/services/cloud-infrastructure) covers that trade off. Moving also matters for data residency, which may be a reason on its own.

## Why are AI features slow, and what helps?

**AI features feel slow mainly because the user waits for the model to finish its whole answer before seeing anything.** Large models can take many seconds to produce a long response.

What helps, in order of effort:

1. **Stream the response** so words appear as they are generated. The total time is the same, but the wait feels much shorter.
2. **Use a smaller, faster model** for simple steps such as classifying a request or extracting fields, and keep the large model for the hard part.
3. **Cache** answers to repeated questions and reuse unchanged context where the provider supports prompt caching.
4. **Move work to the background.** If an AI step summarises a document, do it when the document is uploaded, not when someone opens it.
5. **Send less.** Long prompts and large retrieved documents take longer to process.

Model choice and caching also drive cost; our guide to [LLM running costs](/guides/llm-running-costs) covers the numbers.

## What makes mobile apps slow?

**Mobile slowness usually comes from doing too much work on the device, loading too much over the network, or freezing the main thread.** Older Android phones expose these problems first.

Google Play tracks this. Its Android vitals set bad behaviour thresholds for user perceived ANRs ("app not responding" freezes) at 0.47% overall and crashes at 1.09% overall, and says staying under them helps your app's visibility on Google Play. If your Play Console shows you above them, that is evidence of a real problem, not a perception.

Common fixes: load lists in pages rather than all at once, resize images on the server, cache data for offline use, and move heavy processing off the main thread.

## Quick fixes or structural fixes?

**Quick fixes remove a specific bottleneck; structural fixes change how the system is built.** Most apps need a few quick fixes and, sometimes, one structural change.

| Quick fixes (days) | Structural fixes (weeks or more) |
|---|---|
| Add missing database indexes | Redesign the data model |
| Fix N plus 1 queries | Split a monolith or move to background processing |
| Add caching for slow third party calls | Move hosting region, with data migration |
| Compress and resize images | Rebuild a front end that renders everything at once |
| Stream AI responses | Replace a platform that can't be tuned |

Ask any team proposing work which column it belongs in, and what measurement shows it will help.

## When does slowness mean the codebase needs an audit?

**Slowness justifies an audit when it comes with other symptoms: frequent bugs, fear of releasing, rising hosting bills, and nobody confident about how the system works.** At that point speed is a symptom of a deeper problem.

An audit should give you a ranked list of causes with evidence, not opinions. It should separate what to fix now from what to plan, and it should say plainly if the app is worth keeping. Often it is. Dave, a construction business owner, came to us after a platform another company built for him left him worse off. In his words: "If you ever left with a mess and you think like you had to start over again, talk to Andy and the team first. There might be a lot more worth saving than what you think." His full story is on our [client stories](/client-stories) page.

If your app was generated with an AI builder, the same diagnosis applies, with a few extra checks; see [is my AI built app production ready](/guides/make-ai-built-app-production-ready). For the wider keep or rebuild question, see [rewrite vs refactor](/guides/rewrite-vs-refactor-legacy-software).

## What does a performance review cost?

**A focused performance review is typically a few days to two weeks of senior engineering time, depending on the size of the app and whether monitoring already exists.** The output should be a written report: what is slow, why, the evidence, the fix and an estimate for each.

You can lower the cost by preparing: give access to hosting and monitoring dashboards, a copy of the database or a staging environment, the code repository, and the list of slow screens from the first section.

## How AWLabs diagnoses slow apps

We start with a Development Consult to hear what is slow and for whom, then a paid Discovery Audit, credited in full against any work that follows, that measures the app and names the causes with evidence. Fixes are priced as a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. See our [code audit service](/services/code-audit), [why we start with an audit](/why-audit), [software project rescue](/services/software-project-rescue) and [maintenance and support](/services/software-maintenance-support).
