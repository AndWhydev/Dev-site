---
title: "AWS vs Azure vs Google Cloud in Australia: regions, IRAP, cost and fit"
metaTitle: "AWS vs Azure vs Google Cloud in Australia (2026)"
description: "AWS vs Azure vs Google Cloud in Australia: Sydney, Melbourne and Canberra regions, IRAP scope, onshore AI models, egress pricing and Microsoft 365 fit."
eyebrow: "Comparison"
category: compare
published: 2026-11-08
updated: 2026-11-08
summary: "All three major clouds run regions in Sydney and Melbourne and have IRAP assessments covering services at the PROTECTED level, so for most Australian organisations the choice comes down to fit rather than capability. Azure suits businesses already on Microsoft 365 and Entra ID, and is the only one with Canberra regions built for government. AWS has the broadest service catalogue and, at the time of writing, the widest choice of AI models processed onshore. Google Cloud suits data and analytics heavy teams on Google Workspace or BigQuery."
takeaways:
  - "Each provider has two Australian regions in Sydney and Melbourne, and Azure adds two restricted access regions in Canberra for government and critical infrastructure."
  - "IRAP assessments exist for all three at PROTECTED, but they cover listed services only. Check the specific service against each provider's scope list."
  - "For AI processed in Australia, Amazon Bedrock offers the broadest model choice at the time of writing. Our separate guide compares the three AI platforms in detail."
  - "Internet egress from Australia costs more than from the US: US$0.114 per GB from AWS Sydney and US$0.12 per GB from Azure Australia after the first 100 GB, at the time of writing."
  - "Onshore hosting is residency, not sovereignty. All three are US companies, whichever Australian region you choose."
faqs:
  - q: "Is Azure or AWS better for Australian businesses?"
    a: "Neither is better across the board. Azure is usually the easier choice for businesses already running Microsoft 365, because identity, licensing and support carry over. AWS suits teams building custom software that wants the widest range of managed services and onshore AI models. The cloud your team already knows is often the cheapest one to run."
  - q: "Which cloud is best for Australian government work?"
    a: "All three have IRAP assessments at the PROTECTED level for listed services. Azure is the only one with regions in Canberra designed for government and critical infrastructure. The agency's own risk assessment and authorisation still decide what can be used, so read our IRAP guide before choosing."
  - q: "Does AWS have a Melbourne region?"
    a: "Yes. Asia Pacific (Melbourne), ap-southeast-4, has three availability zones. It is an opt in region, so it must be enabled in your AWS account before use. Asia Pacific (Sydney), ap-southeast-2, is enabled automatically."
  - q: "Can I pay for cloud in Australian dollars?"
    a: "Google Cloud lists AUD as a billing currency for Australia with card payment. AWS prices in US dollars, and Australian accounts are billed by AWS Australia with 10% GST. Azure pricing pages show USD and AUD estimates; your actual currency depends on your Microsoft agreement or partner."
  - q: "Is multi cloud worth it for a mid sized business?"
    a: "Rarely as a deliberate architecture. Running the same system across two clouds doubles the skills, security work and monitoring you need. Using two clouds for different jobs, such as Microsoft 365 with Azure identity and an app on AWS, is common and sensible."
  - q: "Which cloud has the most AI models in Australia?"
    a: "At the time of writing, Amazon Bedrock lists the broadest set of models processed in Australian regions, including several Claude models and many open weight models. Azure OpenAI and Google's Gemini platform have narrower onshore lists. Model availability changes monthly, so check the vendor's page for the exact model."
sources:
  - title: "AWS Regions (code, name, availability zones, opt in status)"
    url: "https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html"
    publisher: "Amazon Web Services"
  - title: "List of Azure regions"
    url: "https://learn.microsoft.com/en-us/azure/reliability/regions-list"
    publisher: "Microsoft Learn"
  - title: "Regions and zones (Compute Engine)"
    url: "https://cloud.google.com/compute/docs/regions-zones"
    publisher: "Google Cloud"
  - title: "Information Security Registered Assessors Program (IRAP)"
    url: "https://aws.amazon.com/compliance/irap/"
    publisher: "Amazon Web Services"
  - title: "Australia IRAP (Azure compliance offering)"
    url: "https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-australia-irap"
    publisher: "Microsoft Learn"
  - title: "IRAP (Google Cloud compliance)"
    url: "https://cloud.google.com/security/compliance/irap"
    publisher: "Google Cloud"
  - title: "Regional availability by models (Amazon Bedrock)"
    url: "https://docs.aws.amazon.com/bedrock/latest/userguide/models-region-compatibility.html"
    publisher: "Amazon Web Services"
  - title: "Amazon EC2 On-Demand pricing (data transfer)"
    url: "https://aws.amazon.com/ec2/pricing/on-demand/"
    publisher: "Amazon Web Services"
  - title: "Bandwidth pricing"
    url: "https://azure.microsoft.com/en-au/pricing/details/bandwidth/"
    publisher: "Microsoft Azure"
  - title: "Local currency pricing and payment"
    url: "https://cloud.google.com/billing/docs/resources/currency"
    publisher: "Google Cloud"
related:
  - title: "AWS Bedrock vs Azure OpenAI vs Vertex AI in Australia"
    href: "/guides/bedrock-vs-azure-openai-vs-vertex-australia"
  - title: "IRAP explained"
    href: "/guides/irap-explained"
  - title: "How to reduce cloud costs"
    href: "/guides/reduce-cloud-costs"
  - title: "Cloud migration cost in Australia"
    href: "/guides/cloud-migration-cost-australia"
  - title: "Data residency vs data sovereignty"
    href: "/guides/data-residency-vs-data-sovereignty"
  - title: "Vercel vs AWS for hosting Next.js apps in Australia"
    href: "/guides/vercel-vs-aws-hosting"
service:
  title: "Cloud infrastructure"
  href: "/services/cloud-infrastructure"
---

## The short version, by situation

**For most Australian organisations, the right cloud is the one that matches what you already run, because all three meet the common Australian requirements.** Here is where each tends to win.

| Your situation | Usually the best fit | Why |
|---|---|---|
| Microsoft 365, Entra ID and Windows servers already in place | Azure | Identity, licensing and support carry over; one vendor relationship |
| Custom software product or SaaS built by a development team | AWS | Broadest managed service catalogue and the largest pool of engineers who know it |
| Data warehouse, analytics or Google Workspace at the centre | Google Cloud | BigQuery and the data tooling are its strongest area |
| Commonwealth or state agency work at PROTECTED | Azure or AWS, then Google Cloud | All three have IRAP scope; Azure adds Canberra regions |
| AI features that must process data in Australia | AWS | Widest onshore model list at the time of writing |
| Small team with one app and modest traffic | Whichever your developer knows best | Skills matter more than the price differences |

The rest of this page explains the detail behind each row, so you can test it against your own case.

## Where are each provider's Australian regions?

**AWS, Azure and Google Cloud each run a Sydney and a Melbourne region; only Azure also has regions in Canberra.** The table reflects each provider's region list at the time of writing.

| Provider | Sydney | Melbourne | Canberra |
|---|---|---|---|
| AWS | Asia Pacific (Sydney), ap-southeast-2, 3 availability zones | Asia Pacific (Melbourne), ap-southeast-4, 3 availability zones, opt in | None |
| Azure | Australia East (New South Wales), 3 availability zones | Australia Southeast (Victoria), no availability zones listed | Australia Central and Australia Central 2, restricted access |
| Google Cloud | australia-southeast1, 3 zones | australia-southeast2, 3 zones | None |

Availability zones matter more than region counts. A region with three zones lets you run a database and application across separate data centres, so one facility failing doesn't take you offline. On Azure, Australia Southeast has no availability zones listed, which makes it a disaster recovery partner for Australia East rather than a first choice for a highly available primary system.

Azure's Canberra regions sit in CDC data centres and Microsoft describes them as designed for government and critical infrastructure. Access is restricted, so most businesses won't use them.

Latency is similar across providers between Sydney and Melbourne. If your users are in Perth, all three serve them from the east coast, and the difference between providers is small next to the distance.

## What does IRAP mean for choosing a cloud?

**All three providers have IRAP assessments covering listed services at the PROTECTED level, so IRAP rarely separates them; the services in scope do.** IRAP is the Australian Signals Directorate's program for independent assessment against the Information Security Manual.

- **AWS** states its IRAP assessment covers in scope services in the Sydney and Melbourne regions, publishes the services list, and provides the PROTECTED report through AWS Artifact.
- **Microsoft** states the IRAP assessment of Azure covers the four Australian regions for data up to and including PROTECTED, and offers an Azure Policy initiative mapped to ISM PROTECTED controls.
- **Google** states an independent assessor found Google Cloud and Google Workspace strongly aligned with PROTECTED level controls, and publishes a products in scope list.

The catch is in the word "listed". A newer managed service, or a feature in preview, may not be in scope yet. Before designing a government system, check every service you plan to use against the scope list, and remember that the agency, not the cloud provider, authorises the system. Our [IRAP explained](/guides/irap-explained) guide covers who decides what.

## Which AI models can you run in Australian regions?

**At the time of writing, AWS offers the most AI models processed onshore, through Amazon Bedrock's Sydney and Melbourne regions.** Bedrock's regional availability list includes several Claude models and many open weight models in Australia. Azure OpenAI and Google's Gemini platform each keep processing onshore for a narrower set of models.

This changes month to month, and the newest models usually launch on global routing first. We keep the detail in a dedicated guide, [Bedrock vs Azure OpenAI vs Vertex AI in Australia](/guides/bedrock-vs-azure-openai-vs-vertex-australia), rather than repeat it here. If onshore AI processing is a hard requirement, check that guide and the vendor's page before choosing a cloud for the rest of the system.

## Which price differences actually matter?

**List prices for compute are close enough that they rarely decide the choice; egress, support plans, commitment discounts and currency do.**

| Cost item | AWS | Azure | Google Cloud |
|---|---|---|---|
| Internet egress from Australia | US$0.114 per GB for the first 10 TB from Sydney | First 100 GB a month free, then US$0.12 per GB (Microsoft network) | Check the network pricing page for your tier |
| Transfer between Australian regions | US$0.08 per GB Sydney to Melbourne | US$0.08 per GB between Oceania regions | Check the network pricing page |
| Billing currency | USD, billed by AWS Australia with GST | Depends on your agreement or partner | AUD available for Australian accounts |
| Commitment discounts | Savings Plans and Reserved Instances | Reservations and savings plans | Committed use discounts |

Prices are at the time of writing and change; confirm on the linked pages. Support is the other line people forget: production systems usually need a paid support plan with a response time target, and its price is often a percentage of monthly spend. The practical lessons:

1. **Egress adds up for media and data heavy apps.** An app serving 5 TB a month of files from Sydney pays around US$570 in AWS internet egress alone, before a CDN.
2. **Replication across regions costs money every month.** A Sydney primary with a Melbourne disaster recovery copy pays transfer on every change.
3. **USD billing moves with the exchange rate.** Budget a buffer, or prefer AUD billing where it is offered.
4. **Commit only after the workload settles.** Our guide to [reducing cloud costs](/guides/reduce-cloud-costs) explains how to size commitments without locking in waste, and covers serverless versus containers.

## How much does Microsoft 365 or Google Workspace tip the decision?

**A lot, because identity is the hardest thing to run twice.** If your staff already sign in with Entra ID, Azure uses the same accounts, groups and conditional access policies, and your Microsoft agreement may already include Azure credits or support.

That doesn't force everything onto Azure. AWS and Google Cloud both accept Entra ID as an identity provider through single sign on, so a Microsoft 365 business can run a custom app on AWS without a second set of staff passwords. See our guide to [SSO with Entra ID for business apps](/guides/sso-entra-id-business-apps).

Google Workspace works the same way in the other direction. A business that runs on Workspace and keeps its reporting in BigQuery will find Google Cloud's identity and data tools familiar, while still being free to host an individual app elsewhere.

Skills count as much as licences. If your internal IT team knows Azure and your developer knows AWS, decide who will support the system in year three, not who builds it in month one.

## Does an Australian region make your data sovereign?

**No. Choosing Sydney or Melbourne gives you data residency, meaning the data is stored in Australia; it doesn't change who owns the provider.** AWS, Microsoft and Google are all US headquartered, so foreign laws can apply to them whichever region you choose.

For most businesses, residency plus encryption, access logging and contract terms is enough. For some government, defence and critical infrastructure work, buyers ask about sovereignty directly. Our guide to [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty) explains the difference and what Australian buyers typically require.

## When is multi cloud worth the overhead?

**Multi cloud is worth it when each cloud does a different job, and rarely when the same system is spread across two.**

Sensible patterns:

- Microsoft 365 and Entra ID for staff, with the product on AWS or Google Cloud.
- BigQuery for analytics while the operational app runs elsewhere.
- One cloud's AI models called from an app hosted on another, where onshore model availability requires it.

Patterns to avoid at SMB and mid market scale: running the same database across two providers for resilience, or building everything with lowest common denominator tools to keep the option of moving. Both double the security, monitoring and skills you need, and a second region with the same provider usually gives better resilience for less effort.

## How AWLabs approaches cloud choice

We build on AWS, Azure and Google Cloud and hold no partner status with any of them, so the recommendation follows your systems and team. We use Australian regions where data needs to stay onshore, as agreed in the Schedule of Work, and list any service that sits outside that boundary. Senior engineers lead every build, and the infrastructure is written as code so it can be reviewed and handed over. See [cloud infrastructure](/services/cloud-infrastructure) and our [cloud migration cost guide](/guides/cloud-migration-cost-australia).
