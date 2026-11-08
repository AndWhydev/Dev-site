---
title: "How much does an IoT platform and app cost to build in Australia?"
metaTitle: "IoT Platform and App Development Cost in Australia"
description: "IoT system costs in Australia from sensor to dashboard: LoRaWAN and cellular IoT, AWS IoT Core pricing, the smart device security standard and 3 year totals."
eyebrow: "Cost guide"
category: cost
published: 2026-11-08
updated: 2026-11-08
summary: "A dashboard and alerting app over off the shelf sensors typically costs $15k to $50k (AUD, ex GST) to build in Australia, a custom IoT platform with device management, alerts and a mobile app $80k to $200k, and a multi site industrial system with edge processing and integrations $200k to $600k or more. Cloud ingestion is usually the smallest line: at AWS IoT Core's published rates, a few hundred sensors cost a few dollars a month to connect. Hardware, connectivity, installation and support decide the total. These are market ranges and worked examples at an assumed $1,100 to $1,500 agency day rate, not quotes."
takeaways:
  - "An IoT system has four layers: devices, connectivity, cloud and apps. Price each one, and decide who owns each."
  - "LoRaWAN gear in the 915 to 928 MHz band runs under the ACMA's LIPD class licence, with no application or fee. Cellular IoT suits sites with mobile coverage; satellite fills remote gaps."
  - "Cloud messaging is cheap. Hardware, data plans, installation and field support usually cost far more over three years than the software."
  - "Since 4 March 2026, consumer smart devices supplied in Australia must meet a mandatory security standard. Business devices are outside it, but the same three controls are good practice."
  - "Run a paid field pilot on real sites before committing to hundreds of devices. Coverage and power surprises are cheaper to find early."
faqs:
  - q: "How much does an IoT app cost to develop?"
    a: "As worked examples at an assumed agency rate of $1,100 to $1,500 a day, a dashboard and alerts app over off the shelf sensors is typically $15k to $50k ex GST, a custom IoT platform with device management, alerts and a mobile app $80k to $200k, and a multi site industrial system with edge processing and integrations $200k to $600k or more. Hardware and connectivity are extra."
  - q: "What does AWS IoT Core cost?"
    a: "AWS IoT Core charges separately for connectivity, messaging, device shadows, registry and rules. AWS's published US East example puts 24/7 connectivity at about $0.042 per device per year, and messaging at $1 per million messages for the first billion. Rates differ by region, so check the Sydney rates on the pricing page."
  - q: "Do I need a licence to use LoRaWAN in Australia?"
    a: "Generally no. The ACMA's low interference potential devices class licence covers short range devices on shared frequencies, and the ACMA says you don't need to apply or pay a fee. The 2025 class licence includes the 915 to 928 MHz band used by Australian LoRaWAN equipment, with power limits and conditions that devices must meet."
  - q: "Does the Cyber Security Act smart device standard apply to our sensors?"
    a: "The Cyber Security (Security Standards for Smart Devices) Rules 2025 apply from 4 March 2026 to connectable products intended for personal, domestic or household use and acquired by consumers in Australia. Industrial and business sensors are generally outside that class, but if you sell devices to consumers, they are in scope."
  - q: "Should we build our own IoT platform or use the sensor vendor's?"
    a: "Use the vendor's platform when one vendor supplies all your devices and its dashboards meet your needs. Build when you mix device types, need data in your own systems, need alert rules the vendor cannot express, or are selling the service to your own customers."
sources:
  - title: "AWS IoT Core pricing"
    url: "https://aws.amazon.com/iot-core/pricing/"
    publisher: "Amazon Web Services"
  - title: "Low interference potential devices (LIPD) class licence"
    url: "https://www.acma.gov.au/licences/low-interference-potential-devices-lipd-class-licence"
    publisher: "Australian Communications and Media Authority"
  - title: "Radiocommunications (Low Interference Potential Devices) Class Licence 2025"
    url: "https://www.legislation.gov.au/F2025L01047/latest/text"
    publisher: "Federal Register of Legislation"
  - title: "Cyber Security (Security Standards for Smart Devices) Rules 2025"
    url: "https://www.legislation.gov.au/F2025L00276/latest/text"
    publisher: "Federal Register of Legislation"
  - title: "Cyber Security Act 2024"
    url: "https://www.legislation.gov.au/C2024A00098/latest/text"
    publisher: "Federal Register of Legislation"
  - title: "Internet of things solutions"
    url: "https://www.telstra.com.au/business-enterprise/products/internet-of-things"
    publisher: "Telstra"
  - title: "How much does software development cost in Australia in 2026?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
  - title: "Tech contractor day rates in Australia: the 2026 guide"
    url: "https://www.resourced.com.au/articles/contractor-day-rates-australia-guide-2026"
    publisher: "Re:Sourced"
related:
  - title: "Farm management software"
    href: "/solutions/farm-management-software"
  - title: "Facility management software"
    href: "/solutions/facility-management-software"
  - title: "Food manufacturer software"
    href: "/solutions/food-manufacturer-software"
  - title: "How to reduce cloud costs"
    href: "/guides/reduce-cloud-costs"
service:
  title: "Data engineering"
  href: "/services/data-engineering"
disclaimer: financial
---

## What are the parts of an IoT system, and who builds each?

**Every IoT system has four layers, devices, connectivity, cloud and apps, and most budget mistakes come from pricing only the last one.** Software agencies usually build the cloud and app layers; devices and connectivity come from hardware vendors and carriers.

| Layer | What it includes | Who usually supplies it | Cost shape |
|---|---|---|---|
| Devices | Sensors, gateways, enclosures, batteries or solar, mounting | Hardware vendor or a hardware design firm | Per unit, plus installation and replacement |
| Connectivity | LoRaWAN, cellular IoT (NB-IoT, Cat-M1), satellite, or site Wi-Fi | Carrier, network operator or your own gateways | Per device per month, or gateway capital cost |
| Cloud | Ingestion, device registry, rules, storage, integrations | Software team, on AWS, Azure or Google Cloud | Usage based, usually small; engineering time is the cost |
| Apps | Dashboards, alerts, mobile app, reports, admin | Software team | Build, then maintenance |

Conduct's 2026 guide puts IoT software anywhere from $10,000 to $5,000,000, which shows how widely scope varies. The ranges below are narrower because they cover the cloud and app layers only.

## Which connectivity suits Australian sites?

**Choose connectivity site by site: LoRaWAN where you can place gateways, cellular IoT where there is mobile coverage, and satellite where there is neither.** Australia's distances make this the decision that most often breaks a pilot.

- **LoRaWAN.** Long range, low power, and licence free in practice. The ACMA's LIPD class licence covers short range devices on shared frequencies, and the ACMA says you don't need to apply or pay a fee. The Radiocommunications (Low Interference Potential Devices) Class Licence 2025 includes the 915 to 928 MHz band, with power limits for frequency hopping and digital modulation transmitters. You either install your own gateways or use a network operator's.
- **Cellular IoT.** NB-IoT and Cat-M1 run on mobile networks. Telstra markets cellular low power wide area networks built for scaled IoT deployments. Coverage varies, so check every site address against the carrier's IoT coverage map, then test on site.
- **Satellite.** For remote farms, pipelines and mining services, satellite IoT services cover areas without mobile coverage, at a higher cost per message and with tighter limits on data size.
- **Site networks.** Factories and buildings often use Wi-Fi or wired networks, which brings the site's IT and security team into the project.

Mining operations bring their own site rules; treat them as a specialist case.

## What do cloud ingestion and storage cost?

**At published rates, connecting and messaging a few hundred sensors costs a few dollars a month; storage, dashboards and engineering cost far more.** AWS IoT Core bills separately for connectivity, messaging, device shadows, registry and rules. AWS's own US East example puts 24/7 connectivity at $0.08 per million connection minutes, or about $0.042 per device per year, and messaging at $1 per million messages for the first billion. Regional rates differ, so check the Asia Pacific (Sydney) rates before you commit, and see our guide to [reducing cloud costs](/guides/reduce-cloud-costs).

Worked at those example rates, 300 sensors each sending a reading every five minutes produce about 2.6 million messages a month, roughly US$2.60 in messaging, and about US$1 a month in connectivity. Time series storage, the rules that turn readings into alerts, and the integrations with your other systems are where cloud budgets go, and they are mostly engineering time. Our [data engineering](/services/data-engineering) and [cloud infrastructure](/services/cloud-infrastructure) services cover that layer.

## What do dashboards, alerts and mobile apps involve?

**The app layer must turn a stream of readings into a short list of things a person should act on, with proof that someone did.** Typical components:

1. **Live dashboard** by site and device, with history charts.
2. **Alert rules** with thresholds, durations and quiet hours, so a door opened for 30 seconds does not wake anyone.
3. **Escalation** by SMS, email and push notification, with acknowledgement. Our [business SMS rules guide](/guides/business-sms-rules-australia) covers sender ID requirements.
4. **Device health:** battery, signal, last seen, and alerts when a device goes silent.
5. **Reports** for audits, insurers or customers.
6. **Mobile app** for field staff, often working with poor coverage. See [offline first field apps](/guides/offline-first-field-apps).

## What do typical IoT builds cost?

**Worked at an assumed agency rate of $1,100 to $1,500 a day, the software for an IoT system ranges from about $15k for dashboards over vendor sensors to $600k or more for multi site industrial systems.** The rate reflects Re:Sourced's July 2026 guide, which lists Sydney senior software contractors at $800 to $1,100 a day and data engineers at $850 to $1,150, ex GST, before agency overheads.

| Build | Typical scope | Cost range (AUD, ex GST) |
|---|---|---|
| Dashboard and alerts over off the shelf sensors | Data from the vendor's cloud or API, dashboard, alert rules, SMS and email | $15k to $50k |
| Custom IoT platform | Own ingestion, device registry and provisioning, alerts with escalation, mobile app, reports | $80k to $200k |
| Multi site industrial IoT | Edge processing, several device types, integration with ERP or maintenance systems, role based access across sites | $200k to $600k+ |

### Worked example: cold chain monitoring for a food distributor

A hypothetical distributor monitors 300 cellular temperature sensors across 40 cool rooms and trucks. Scope: discovery and design (8 days), ingestion on AWS IoT Core with per device certificates (8 days), device registry and provisioning (8 days), alert rules, escalation and acknowledgement (10 days), dashboard and history (12 days), mobile app for alerts (15 days), temperature reports for the food safety program (6 days), firmware update support and security hardening (10 days), field pilot and launch (12 days). Total 89 days, or $97,900 to $133,500 ex GST. Our [food manufacturer software page](/solutions/food-manufacturer-software) covers the records side.

## What security rules apply to connected devices?

**Since 4 March 2026, consumer smart devices supplied in Australia must meet a mandatory security standard under the Cyber Security Act 2024; business and industrial devices are outside that class, but the same controls are worth building in.** The Cyber Security (Security Standards for Smart Devices) Rules 2025 were registered on 4 March 2025, and the security standard took effect 12 months later, on 4 March 2026. It applies to connectable products intended for personal, domestic or household use and acquired by consumers in Australia, excluding desktops, laptops, tablets, smartphones, therapeutic goods and road vehicles.

The standard's three core requirements:

| Requirement | What the device maker must do | Cost for a product team |
|---|---|---|
| Passwords | No universal default passwords; passwords unique per product and not derived from serial numbers, or set by the user | Provisioning process and factory tooling |
| Reporting security issues | Publish a point of contact for security reports, and when reporters will get an acknowledgement and updates | A published policy and someone to triage reports |
| Support period | Publish the defined support period for security updates | Commitment to ship updates for that period, plus the update mechanism |

Manufacturers must also supply a statement of compliance. If you sell devices to households, budget for these from the start. For business fleets, ask your hardware vendor how it handles all three, and add per device certificates and remote updates to your own platform. This is general information, not legal advice.

## What will it cost over three years?

**Over three years, hardware and connectivity usually cost as much as or more than the software, so compare whole system totals, not build quotes.** Assumptions, not quotes, for the 300 sensor example: sensors at $250 each installed ($75k); cellular data at $5 per sensor a month ($18k a year); a vendor platform at an assumed $12 per sensor a month including data; custom hosting at $3k to $8k a year; maintenance at 15% to 20% of build from year 2. Get real hardware and data quotes before relying on any of these.

| Option | Hardware | Software and data, 3 years | 3 year total |
|---|---|---|---|
| Vendor platform with the vendor's sensors | $75k | $129.6k subscription | $204.6k |
| Custom dashboard over vendor sensors ($15k to $50k build, $5 data, $2k to $5k hosting) | $75k | $15k to $50k build, $54k data, $6k to $15k hosting, $4.5k to $20k maintenance | $154.5k to $214k |
| Custom platform from the worked example | $75k | $97.9k to $133.5k build, $54k data, $9k to $24k hosting, $29.4k to $53.4k maintenance | $265.3k to $339.9k |

The custom platform costs more here. It earns its place when you sell monitoring to your own customers, mix device types, or need alerts and reports tied to your own operations systems, as in [facility management](/solutions/facility-management-software) or [manufacturing](/industries/manufacturing).

## How AWLabs approaches IoT projects

We start with a Development Consult, then a paid Discovery Audit, credited in full against the build, that maps your sites, devices and coverage, and checks whether a vendor platform already does the job. If custom is justified, you receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete, usually starting with a field pilot. Senior engineers lead every build, and we work in Sydney business hours. We build the cloud and app layers and work with your hardware vendor and carrier on the rest.
