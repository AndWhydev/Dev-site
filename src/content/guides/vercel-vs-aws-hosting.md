---
title: "Vercel vs AWS for hosting Next.js apps in Australia"
metaTitle: "Vercel vs AWS for Next.js Hosting in Australia"
description: "Vercel vs AWS Amplify vs self hosting Next.js on AWS: Sydney function regions, Next.js feature support, usage pricing in syd1 and when to move off Vercel."
eyebrow: "Comparison"
category: compare
published: 2026-11-08
updated: 2026-11-08
summary: "Vercel is the simplest way to run Next.js, with full feature support, preview deployments and a Sydney function region (syd1, which maps to AWS ap-southeast-2). AWS gives you two other paths: Amplify Hosting, which is cheap but at the time of writing supports Next.js only up to version 15 and lacks some features, or self hosting with containers or OpenNext, which gives full control and residency at the cost of running it yourself. Most Australian teams should start on Vercel with functions set to Sydney, and move to AWS when compliance, network or cost requirements justify the operations work."
takeaways:
  - "Vercel Functions run in Washington, D.C. (iad1) unless you change the region. For Australian users and data, set syd1."
  - "Vercel's regions run on AWS infrastructure: syd1 is listed against ap-southeast-2. The difference is the platform on top, not the data centre."
  - "AWS Amplify Hosting supports Next.js 12 to 15 and lists unsupported features, including streaming and on demand ISR. Check that list against your app."
  - "Vercel's Sydney rates are higher than its US rates: at the time of writing, Active CPU is US$0.18 an hour in syd1 against US$0.128 in iad1."
  - "Self hosting on AWS with containers or OpenNext gives full control, private networking and one bill, but your team owns the operations."
faqs:
  - q: "Does Vercel use AWS?"
    a: "Vercel's documentation lists each Vercel region against an AWS region code; Sydney (syd1) corresponds to ap-southeast-2. Vercel adds its own build system, global CDN, firewall, preview deployments and function runtime on top. You pay Vercel, not AWS, and you don't get access to the underlying AWS account."
  - q: "Can Vercel keep my data in Australia?"
    a: "You can run Vercel Functions in Sydney, and if your database is also in an Australian region, the data your server code reads and writes stays onshore. Static files and cached pages are served from Vercel's global network close to each visitor, so don't cache responses that contain personal information. Logs and build data sit with Vercel, so check its data processing terms if residency is contractual."
  - q: "Is AWS Amplify cheaper than Vercel?"
    a: "On list prices for a small app, often yes: Amplify's SSR requests are US$0.30 per million and transfer is US$0.15 per GB, with no seat fee. But Amplify supports fewer Next.js features at the time of writing, so compare after checking your app runs on it. For a business app, developer time spent on workarounds usually costs more than the hosting difference."
  - q: "Can I use Vercel's Hobby plan for a business site?"
    a: "No. Vercel's pricing page says the Hobby plan is for personal, non commercial use. A business site needs Pro, which is US$20 a month per developer seat with US$20 of included usage credit, at the time of writing."
  - q: "What is OpenNext?"
    a: "OpenNext is an open source adapter that converts the Next.js build output into packages you can deploy to AWS Lambda, Cloudflare or a plain Node.js server. Its AWS version is maintained by the SST community. It suits teams who want Next.js features on their own AWS account without Vercel."
  - q: "Should a government or bank project use Vercel?"
    a: "It depends on the buyer's requirements. Vercel publishes a SOC 2 Type 2 attestation and ISO 27001:2022 certification, but its security page doesn't list an IRAP assessment. Projects that need IRAP scope, private networking to internal systems or everything inside the buyer's own cloud account usually self host on AWS or Azure."
sources:
  - title: "Vercel regions"
    url: "https://vercel.com/docs/regions"
    publisher: "Vercel"
  - title: "Configuring regions for Vercel Functions"
    url: "https://vercel.com/docs/functions/configuring-functions/region"
    publisher: "Vercel"
  - title: "Vercel pricing"
    url: "https://vercel.com/pricing"
    publisher: "Vercel"
  - title: "Regional pricing: Sydney (syd1)"
    url: "https://vercel.com/docs/pricing/regional-pricing/syd1"
    publisher: "Vercel"
  - title: "Regional pricing: Washington, D.C. (iad1)"
    url: "https://vercel.com/docs/pricing/regional-pricing/iad1"
    publisher: "Vercel"
  - title: "Vercel security"
    url: "https://vercel.com/security"
    publisher: "Vercel"
  - title: "AWS Amplify pricing"
    url: "https://aws.amazon.com/amplify/pricing/"
    publisher: "Amazon Web Services"
  - title: "Amplify support for Next.js"
    url: "https://docs.aws.amazon.com/amplify/latest/userguide/ssr-amplify-support.html"
    publisher: "Amazon Web Services"
  - title: "OpenNext for AWS"
    url: "https://opennext.js.org/aws"
    publisher: "OpenNext"
related:
  - title: "How to choose a tech stack"
    href: "/guides/how-to-choose-a-tech-stack"
  - title: "How to reduce cloud costs"
    href: "/guides/reduce-cloud-costs"
  - title: "Why is my app slow?"
    href: "/guides/why-is-my-app-slow"
  - title: "React and Next.js development"
    href: "/services/react-nextjs"
service:
  title: "Deployment and DevOps"
  href: "/services/deployment"
---

## Which three options are you really choosing between?

**For a Next.js app, the real choice is between Vercel, AWS Amplify Hosting and running Next.js yourself on AWS.** All three can serve Australian users from Sydney. They differ in how much of the platform you operate and how much of Next.js works without workarounds.

| | Vercel | AWS Amplify Hosting | Self hosted on AWS (containers or OpenNext) |
|---|---|---|---|
| Who runs the platform | Vercel | AWS, as a managed service | Your team |
| Next.js support | Full, from the framework's own maintainer | Versions 12 to 15, with listed unsupported features | Full with containers; close to full with OpenNext |
| Sydney compute | syd1, set per project or per function | Amplify apps deploy to the AWS region you choose | Any AWS region, including Sydney and Melbourne |
| Preview deployments | Built in for every branch and pull request | Branch deployments | You build them |
| Pricing | Seats plus usage, billed in USD | Usage only, billed by AWS | Underlying AWS resources only |
| Private networking to your systems | Limited; enterprise features | Limited | Full VPC control |

This site, awlabs.com.au, deploys on Vercel, so the trade offs below are ones we deal with ourselves as well as on client work.

## What does Vercel add on top of the cloud underneath?

**Vercel adds the developer workflow: push code, get a preview URL, merge, and it's live, with the CDN, firewall and functions configured for you.** Its region list maps each Vercel region to an AWS region code, so syd1 runs in ap-southeast-2. You're paying for the platform, not a different data centre.

What you get for that:

- Builds and deployments with no infrastructure code.
- A preview deployment for every branch, which makes client and stakeholder review far quicker.
- Next.js features working on release day, including streaming, middleware and incremental static regeneration.
- A web application firewall, DDoS mitigation and spend controls.

What you give up is control. You can't put Vercel Functions inside your own VPC the way you would an AWS service, you work within Vercel's limits and runtimes, and the bill arrives from a second vendor.

## How do you run functions in Sydney on each platform?

**On Vercel you must change the default region, because new projects run functions in Washington, D.C. (iad1).** Vercel's documentation says the default suits data sources on the US east coast. For an Australian app with an Australian database, that default means every server request crosses the Pacific twice, adding latency to every page that renders on the server.

Set it once in the project's Functions settings, or in vercel.json with `"regions": ["syd1"]`. Pro and Enterprise teams can deploy to more than one region, and Enterprise can set failover regions, which matters if an outage in Sydney would be serious for you. Static files are served from Vercel's global network regardless of the function region.

On Amplify, the app runs in the AWS region you create it in, so pick Asia Pacific (Sydney). When self hosting, you choose the region directly, including Melbourne (ap-southeast-4) if you want a second Australian region for disaster recovery.

The rule that matters most: **put the functions in the same region as the database.** A Sydney function calling a US database is as slow as the reverse. Our guide to [why apps are slow](/guides/why-is-my-app-slow) shows how quickly these round trips add up.

## How do the bills compare, and which ones surprise people?

**At small and medium scale all three are cheap; surprises come from usage spikes, image optimisation, data transfer and seats.** Prices below are list prices at the time of writing, in USD.

| Charge | Vercel Pro (syd1) | Vercel Pro (iad1, for comparison) | AWS Amplify Hosting |
|---|---|---|---|
| Base fee | US$20 a month per developer seat, with US$20 usage credit | Same | None |
| Compute | Active CPU US$0.18 an hour; memory US$0.0149 per GB hour | US$0.128 an hour; US$0.0106 per GB hour | SSR duration US$0.20 per GB hour after 100 GB hours a month |
| Requests | Function invocations from US$0.60 per million after 1 million | Same starting rate | SSR requests US$0.30 per million after 500,000 |
| Data transfer | Pro lists CDN requests and Fast Data Transfer as included in its Flat Rate CDN; Sydney list rate US$0.16 per GB | US$0.15 per GB list rate | US$0.15 per GB after 15 GB |
| Builds | Included in plan | Same | US$0.01 per build minute after 1,000 minutes |

Three things to watch:

1. **Sydney costs more than the US on Vercel.** Active CPU is about 40% higher in syd1 than iad1, and Fast Origin Transfer is US$0.29 per GB in Sydney against US$0.06 in iad1. It is still usually small money for business apps, but it shows up on data heavy ones.
2. **Image optimisation is billed per transformation.** A catalogue with thousands of product images can run up charges; resize at upload instead.
3. **Seats grow with the team.** Each developer who deploys is a paid seat on Vercel. Viewer seats are free.

Vercel sets a default on demand budget of US$200 for new teams with alerts, and can pause projects at a hard limit. Turn that on before launch. Amplify and self hosting rely on AWS Budgets alerts, which won't stop spend by themselves. For general cloud bill control, see [how to reduce cloud costs](/guides/reduce-cloud-costs).

## Amplify Hosting or OpenNext: which AWS route?

**Amplify is the managed AWS route; OpenNext and containers are the do it yourself routes.**

Amplify Hosting is simple and cheap, but AWS's own documentation lists support for Next.js 12 to 15, with unsupported features including edge API routes, on demand incremental static regeneration and streaming. Next.js 16 apps, or apps relying on those features, need checking before you commit.

OpenNext converts the Next.js build output so it runs on AWS Lambda, with caching and image optimisation pieces wired to other AWS services. Its AWS version is maintained by the SST community. It gives near Vercel behaviour inside your own account, but you depend on an open source project keeping pace with each Next.js release.

The plainest route is a container. Next.js can run as a Node.js server in a Docker image on ECS Fargate behind CloudFront. Every feature works, you get full VPC networking, and the cost is predictable, but you build and maintain the deployment pipeline, preview environments and scaling yourself.

## Which compliance and enterprise requirements tip the decision?

**For most businesses, Vercel's attestations are enough; for government, banking and some health work, the buyer's requirements push you into your own AWS account.**

Vercel's security page lists a SOC 2 Type 2 attestation and ISO 27001:2022 certification, plus PCI DSS and HIPAA information. Those satisfy many enterprise security questionnaires. Requirements that usually favour self hosting:

- IRAP assessed services for Australian government systems.
- Private connectivity to internal systems, such as a database that must not have a public endpoint.
- A contract that requires all processing inside the buyer's own cloud account.
- Centralised logging into the buyer's own security tools.

A hybrid is common: the public marketing site on Vercel, and the authenticated app with personal data on AWS in Sydney.

## When should you move off Vercel, and when not?

**Move when you have a specific requirement Vercel can't meet or a bill that has clearly outgrown the convenience; don't move just because AWS looks cheaper per unit.**

Signals it's time to move:

- A compliance requirement from the list above.
- Your monthly Vercel bill is large and steady, and your team already runs AWS well.
- Long running or heavy background work that fits better in containers or queues.

Signals to stay:

- A small team without dedicated operations skills.
- Frequent releases where preview deployments save review time.
- Heavy use of newer Next.js features.

Moving off Vercel costs engineering time: a pipeline, preview environments, monitoring and on call. For many teams that costs more each year than the hosting saving.

## Decision table

| Your situation | Recommended |
|---|---|
| Marketing site or small business app, Next.js | Vercel Pro, functions in syd1 |
| SaaS product with a small team shipping weekly | Vercel Pro, database in Sydney |
| Next.js 15 app with simple needs and an AWS account already | Amplify Hosting in Sydney |
| Government, bank or private network requirements | Containers on AWS in Sydney, with Melbourne for recovery |
| Large, steady traffic and a strong AWS team | Containers or OpenNext on AWS |

## How AWLabs approaches hosting

We deploy Next.js on Vercel and on AWS, and choose per project based on the requirements in the Schedule of Work. We use Australian regions where data needs to stay onshore, as agreed in the Schedule of Work, which on Vercel means setting syd1 and an Australian database. Senior engineers lead every build, and the deployment setup is handed over with the code. See [deployment and DevOps](/services/deployment), [React and Next.js development](/services/react-nextjs) and [cloud infrastructure](/services/cloud-infrastructure), or the wider decision in [how to choose a tech stack](/guides/how-to-choose-a-tech-stack).
