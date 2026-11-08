---
title: "How to reduce your AWS or Azure bill: a practical guide for Australian businesses"
metaTitle: "How to Reduce AWS and Azure Costs in Australia (2026)"
description: "Practical ways to cut AWS and Azure bills: idle resources, NAT and data transfer, savings plans, serverless vs containers, AI spend and the Sydney premium."
eyebrow: "Cost guide"
category: cost
published: 2026-11-08
updated: 2026-11-08
summary: "Most Australian SMB and mid market cloud bills can be cut by switching off idle and oversized resources, fixing network charges such as NAT gateways and public IP addresses, committing to savings plans or reservations only for steady usage, and controlling AI and token spend. Sydney and Melbourne regions cost more per hour than US East (at the time of writing, about 25% to 31% more for common AWS instances), but moving offshore to save that is rarely worth it if your data or users are in Australia. The changes that last are budgets, alerts and a named owner for the bill."
takeaways:
  - "Idle and oversized resources are the biggest easy win: non production environments left on overnight, servers sized for a peak that never comes, and old snapshots and logs."
  - "Network charges hide in plain sight. In Sydney, a single AWS NAT gateway costs about US$43 a month before any data, plus US$0.059 per GB processed."
  - "Savings plans and reservations cut steady compute costs by up to 66% to 72%, but only commit to what you are sure you will keep running."
  - "AWS lists prices in US dollars, so your AUD bill moves with the exchange rate. AWS Australia charges 10% GST to Australian accounts."
  - "Budgets and alerts don't stop spending on their own. Someone has to own the bill and review it monthly."
faqs:
  - q: "What is the fastest way to reduce an AWS bill?"
    a: "Open Cost Explorer, sort by service and resource, and look for anything running that nobody can explain. Then stop or schedule non production environments, delete unattached volumes and old snapshots, set log retention periods, and release unused public IP addresses. These usually take days, not weeks."
  - q: "Is the Sydney region more expensive than the US?"
    a: "Yes, for most services. At the time of writing, AWS on demand Linux prices for an m7i.large are US$0.126 an hour in Sydney against US$0.1008 in US East (N. Virginia), about 25% more. Melbourne matches Sydney for the instances we checked."
  - q: "Should we move our workloads to a US region to save money?"
    a: "Usually not, if your users or data are in Australia. You save on compute but add latency for Australian users, and you may create privacy, contractual or customer trust issues about where personal information is held. Check your obligations before moving data offshore."
  - q: "Are savings plans worth it for a small business?"
    a: "Only for usage you are confident will run for the whole term. AWS Compute Savings Plans apply across instance families and regions and also to Fargate and Lambda, which makes them safer than locking into one instance type. Start with a one year commitment covering your steady baseline, not your peak."
  - q: "Is serverless cheaper than containers?"
    a: "For spiky or low traffic workloads, serverless functions are often cheaper because you pay per request and duration. For steady, busy workloads, containers or instances with a savings plan usually cost less. Many applications use both."
  - q: "Do we pay GST on AWS and Azure?"
    a: "For AWS, accounts based in Australia buy from AWS Australia, which charges 10% GST on services and issues Australian tax invoices. Check your Microsoft agreement for how Azure is invoiced. Your accountant can advise on claiming GST credits."
sources:
  - title: "Amazon EC2 On-Demand pricing"
    url: "https://aws.amazon.com/ec2/pricing/on-demand/"
    publisher: "Amazon Web Services"
  - title: "Amazon VPC pricing (NAT gateway and public IPv4)"
    url: "https://aws.amazon.com/vpc/pricing/"
    publisher: "Amazon Web Services"
  - title: "Compute Savings Plans pricing"
    url: "https://aws.amazon.com/savingsplans/compute-pricing/"
    publisher: "Amazon Web Services"
  - title: "AWS Fargate pricing"
    url: "https://aws.amazon.com/fargate/pricing/"
    publisher: "Amazon Web Services"
  - title: "AWS Lambda pricing"
    url: "https://aws.amazon.com/lambda/pricing/"
    publisher: "Amazon Web Services"
  - title: "Tax help: Australia"
    url: "https://aws.amazon.com/tax-help/australia/"
    publisher: "Amazon Web Services"
  - title: "Save costs with Azure Reservations"
    url: "https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/save-compute-costs-reservations"
    publisher: "Microsoft Learn"
  - title: "Tutorial: Create and manage budgets"
    url: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets"
    publisher: "Microsoft Learn"
  - title: "Managing your costs with AWS Budgets"
    url: "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"
    publisher: "Amazon Web Services"
related:
  - title: "How much does cloud migration cost in Australia?"
    href: "/guides/cloud-migration-cost-australia"
  - title: "What does it cost to run an LLM in production?"
    href: "/guides/llm-running-costs"
  - title: "Data residency vs data sovereignty"
    href: "/guides/data-residency-vs-data-sovereignty"
  - title: "Software maintenance cost per year"
    href: "/guides/software-maintenance-cost"
service:
  title: "Cloud infrastructure"
  href: "/services/cloud-infrastructure"
disclaimer: financial
---

## Where does the money go in an SMB cloud bill?

**In most small and mid sized accounts, compute, databases, storage and network charges make up the bulk of the bill, and a surprising share of each is waste.** Before cutting anything, find out what you are paying for and who owns it.

Open AWS Cost Explorer or Azure Cost Management, group by service for the last three months, then by resource or tag. Typical findings in an account nobody has reviewed for a year:

- Development and test environments running 24 hours a day, seven days a week.
- Servers and databases sized for a launch peak that never returned.
- Snapshots, backups and disk volumes left behind when servers were deleted.
- Logs kept forever because no retention period was set.
- NAT gateways and load balancers for environments nobody uses.
- AI API spend growing quietly inside a feature that ships every request to the largest model.

This guide is about running costs. If you are still planning a move, our [cloud migration cost guide](/guides/cloud-migration-cost-australia) covers the project budget.

## Which quick wins should you do first?

**Switch off what isn't needed, shrink what is oversized, and delete what is left over.** These changes take days and carry little risk when done with care.

| Quick win | How | Typical saving | Risk |
|---|---|---|---|
| Schedule non production environments | Stop dev and test outside business hours | Up to about 70% of their compute cost if they run only 50 hours of a 168 hour week | Low |
| Rightsize instances and databases | Use 30 days of CPU and memory data; drop a size where usage stays low | Dropping one size within a family roughly halves that resource's hourly price | Low to medium; test first |
| Delete unattached volumes and old snapshots | Review by age; keep what your backup policy requires | Varies; can be large on old accounts | Low if checked against backup policy |
| Set log retention | Choose 30 to 90 days for most application logs; archive what must be kept | Often substantial on busy apps | Low |
| Move old objects to cheaper storage tiers | Lifecycle rules for files rarely read | Depends on volume | Low |
| Release unused public IPv4 addresses | AWS charges for every public IPv4 address, in use or idle | US$0.005 an hour each, about US$3.65 a month | Low |

The scheduling figure is simple arithmetic: 50 running hours out of 168 is about 30%, so the saving on those resources approaches 70%. Instance sizes within a family step up in doubles, which is why one size down saves about half; whether you can drop a size depends on measured usage.

## Why are NAT gateway and data transfer charges so high?

**Network charges are billed by the hour and by the gigabyte, so a design that routes traffic the long way pays twice.** They rarely show up as one big line, which is why they are missed.

At the time of writing, an AWS NAT gateway in Sydney costs US$0.059 an hour plus US$0.059 per GB processed (US East is US$0.045 for each). One NAT gateway left running for a month is about US$43 before any data. An architecture with one per availability zone across three environments can carry several hundred US dollars a month in NAT charges alone.

Ways to reduce them:

- Use VPC gateway endpoints for S3 and DynamoDB, so that traffic doesn't pass through the NAT gateway.
- Remove NAT gateways from environments that don't need outbound internet access.
- Keep chatty services in the same availability zone where resilience allows.
- Put a CDN in front of public files and images, so fewer requests reach your servers.
- Check that backups and replication aren't crossing regions unless that is the intent.

## How do you use savings plans and reservations without locking in mistakes?

**Commit only to the baseline you are confident will run for the whole term, after rightsizing, never before.** Committing first locks in the waste.

AWS says Compute Savings Plans reduce costs by up to 66% and apply regardless of instance family, size, region or operating system, and also to Fargate and Lambda. EC2 Instance Savings Plans go up to 72% but tie you to one instance family in one region. Microsoft says Azure Reservations can reduce resource costs by up to 72% from pay as you go prices, and allows exchanges and refunds up to US$50,000 in a rolling 12 month window.

A sensible sequence:

1. Rightsize first and let usage settle for a month.
2. Look at the lowest steady hourly spend over the last 60 to 90 days. That is your baseline.
3. Commit to most of the baseline, not all of it, with the flexible option and a one year term.
4. Review every quarter and add commitments as the baseline grows.

## Serverless or containers: which costs less?

**Serverless is usually cheaper for spiky, low or unpredictable traffic; containers or instances are usually cheaper for steady, busy workloads.** The crossover depends on traffic shape more than technology.

| Workload | Usually cheapest | Why |
|---|---|---|
| Internal tool used in business hours | Serverless functions, or containers scaled to zero | Pay nothing when nobody is using it |
| Webhooks, scheduled jobs, file processing | Serverless functions | Billed per request and duration |
| Customer facing app with steady daytime traffic | Containers (for example Fargate) with a savings plan | Predictable usage benefits from commitment |
| Busy API running all day | Containers or instances with a savings plan | Per request pricing adds up at volume |
| Interruptible batch work | Fargate Spot or spot instances | AWS says Fargate Spot runs at up to 70% off the regular Fargate price |

Lambda is billed per request and by duration and memory. Fargate is billed for the vCPU, memory and storage your tasks use from the time the image starts downloading until the task stops. Both can be covered by Compute Savings Plans. Architecture affects cost far more than this choice, so measure before rebuilding anything to switch.

## How do you control AI and GPU costs?

**AI spend is driven by tokens, model choice and how often you call the model, and it grows with usage in a way fixed servers don't.** Treat it as a separate line in the budget with its own alerts.

The main levers: route simple steps to smaller, cheaper models; cache repeated prompts and answers; trim the context you send; batch work that doesn't need an instant answer; and set per feature spending limits. Self hosting an open weight model on GPUs only pays off at sustained high volume, because GPU instances cost money every hour whether or not they are busy. Our guide to [LLM running costs](/guides/llm-running-costs) has the worked numbers.

## Is the Sydney premium worth paying?

**Australian regions cost more per hour, but for most Australian businesses the premium is worth it.** At the time of writing, AWS on demand Linux prices compare like this:

| Instance | Sydney (ap-southeast-2) | Melbourne (ap-southeast-4) | US East (us-east-1) | Sydney premium |
|---|---|---|---|---|
| t3.medium | US$0.0528/hr | US$0.0528/hr | US$0.0416/hr | 27% |
| m7i.large | US$0.126/hr | US$0.126/hr | US$0.1008/hr | 25% |
| c7i.large | US$0.11655/hr | US$0.11655/hr | US$0.08925/hr | 31% |

For one m7i.large running all month, that is about US$92 in Sydney against US$74 in US East: a difference of roughly US$18. Against that, hosting offshore adds latency for every Australian user and moves data out of the country, which can create privacy, contract and customer trust problems. Our guide to [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty) explains what onshore hosting does and doesn't achieve. Keep production and personal data onshore; consider cheaper regions only for workloads with no Australian data or latency need, such as some batch processing.

## What about paying in US dollars and GST?

**AWS publishes its prices in US dollars, so an Australian business carries exchange rate risk on every invoice.** When the Australian dollar falls, your cloud bill rises with no change in usage.

AWS says accounts based in Australia have bought AWS services from AWS Australia since 1 November 2021, are charged 10% GST, and receive Australian GST compliant tax invoices. For Azure, check the currency and billing entity in your Microsoft agreement or partner arrangement. Build a currency buffer into budgets, and model commitments in AUD at a conservative exchange rate. Your accountant can advise on GST credits.

## How do you keep costs down once they are down?

**Costs creep back unless someone owns the bill, budgets have alerts, and changes are reviewed.** Tools help, but ownership is what works.

- [ ] Tag every resource with application, environment and owner, and enforce tags on creation.
- [ ] Set monthly budgets per account or project, with alerts on actual and forecast spend. AWS Budgets supports both; Microsoft notes Azure budgets alert but don't stop resources or consumption.
- [ ] Add anomaly alerts so a runaway job is caught in a day, not at month end.
- [ ] Name one person who reviews the bill monthly with whoever owns the architecture.
- [ ] Include a cost estimate in every significant change or new feature.
- [ ] Review commitments and rightsizing every quarter.

Cloud cost is one part of total cost of ownership; our [software maintenance cost guide](/guides/software-maintenance-cost) covers the rest.

## How AWLabs approaches cloud cost reduction

We start with a Development Consult, then a paid Discovery Audit, credited in full against the build, that reviews your bill, architecture and usage and ranks savings by effort and risk. Changes are priced as a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Where your data needs to stay in Australia, we keep it there, and we won't recommend moving it offshore to save a few dollars. Senior engineers lead every build. See [cloud infrastructure](/services/cloud-infrastructure).
