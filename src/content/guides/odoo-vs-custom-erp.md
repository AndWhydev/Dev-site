---
title: "Odoo vs a custom ERP for Australian SMBs"
metaTitle: "Odoo vs Custom ERP: A Guide for Australian SMBs"
description: "Odoo vs a custom ERP for Australian SMBs: Community vs Enterprise, GST, BAS and STP support, customisation and upgrade cost, hosting and a decision table."
eyebrow: "Comparison"
category: compare
published: 2026-11-08
updated: 2026-11-08
summary: "For most Australian SMBs that need accounting, inventory, sales and manufacturing in one system, Odoo is a better starting point than a custom ERP: it is broad, priced per user in AUD, and has Australian localisation for GST, BAS, TPAR and payroll with STP. A custom ERP, or a custom core alongside Xero or MYOB, makes more sense when your operations are unusual enough that Odoo would need heavy custom modules, because those modules create upgrade work every time Odoo moves to a new version."
takeaways:
  - "At the time of writing, Odoo lists Standard at AU$43.00 and Custom at AU$80.00 per user per month on yearly billing, with an introductory discount in the first year. One App Free covers a single app for unlimited users."
  - "Studio, multi company, the external API and custom modules all require the Custom plan, and Odoo.sh hosting for custom code is charged separately."
  - "Odoo's Australian localisation includes GST taxes, BAS and TPAR reports, ABA payment files and Peppol, and its Australian payroll supports STP Phase 2 through an API integration."
  - "Odoo Online can host your database in an Oceania region, but Odoo's SLA says backups are replicated to data centres in Europe and Canada, and that can't be changed."
  - "The real cost of Odoo is customisation and upgrades, not licences. Keep custom modules few and small, or consider a custom core."
faqs:
  - q: "Is Odoo a good ERP for Australian businesses?"
    a: "For many SMBs, yes. It covers accounting, inventory, manufacturing, sales, CRM, projects, HR and a website in one system, with an Australian accounting localisation for GST, BAS and TPAR and Australian payroll with STP. The quality of the outcome depends heavily on the implementation partner and on how much you customise it."
  - q: "What is the difference between Odoo Community and Odoo Enterprise?"
    a: "Community is the open source edition, licensed under LGPL version 3, which you can host yourself without licence fees. Enterprise adds further apps and features under Odoo's own Enterprise Edition licence and is what Odoo's Standard and Custom subscriptions include, along with hosting, support and upgrades. Before choosing Community, check that every Australian localisation and reporting module you need is available in it."
  - q: "Does Odoo payroll support STP Phase 2?"
    a: "Odoo's Australian payroll documentation describes STP and SuperStream reporting through an integration with the Superchoice API, including STP Phase 2 reporting and finalisation. Test it against your awards and pay rules before you switch, and run a parallel pay cycle. Many businesses keep a dedicated payroll product and connect it instead."
  - q: "Should we replace Xero or MYOB with Odoo?"
    a: "Not always. If accounting works well and your pain is in operations, such as inventory, production or job costing, you can run Odoo or a custom operations system alongside Xero or MYOB and sync invoices and payments. Replacing accounting adds migration risk and retraining that may not be needed."
  - q: "How much does a custom ERP cost compared with Odoo?"
    a: "A full custom ERP is a large build, which is why most SMBs shouldn't build one from scratch. A narrower custom core for the processes that make you different, connected to off the shelf accounting, is more common and far cheaper. Our enterprise software cost guide gives typical Australian ranges."
  - q: "Who owns our data on Odoo Online?"
    a: "According to Odoo's SLA, you can download manual backups of your live database at any time, which keeps moving between hosting options, or to a partner's servers, practical. Custom modules you paid a partner to write should be assigned to you in the contract."
sources:
  - title: "Odoo pricing (AUD)"
    url: "https://www.odoo.com/pricing"
    publisher: "Odoo"
  - title: "Australia fiscal localisation (Odoo 19 documentation)"
    url: "https://www.odoo.com/documentation/19.0/applications/finance/fiscal_localizations/australia.html"
    publisher: "Odoo"
  - title: "Australia payroll localisation (Odoo 19 documentation)"
    url: "https://www.odoo.com/documentation/19.0/applications/hr/payroll/payroll_localizations/australia.html"
    publisher: "Odoo"
  - title: "Licenses"
    url: "https://www.odoo.com/documentation/19.0/legal/licenses.html"
    publisher: "Odoo"
  - title: "Odoo Cloud Hosting Service Level Agreement"
    url: "https://www.odoo.com/cloud-sla"
    publisher: "Odoo"
  - title: "Single Touch Payroll Phase 2 employer reporting guidelines"
    url: "https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/single-touch-payroll/in-detail/single-touch-payroll-phase-2-employer-reporting-guidelines"
    publisher: "Australian Taxation Office"
  - title: "Chapter 8: APP 8 Cross-border disclosure of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information"
    publisher: "Office of the Australian Information Commissioner"
related:
  - title: "Build vs buy software"
    href: "/guides/build-vs-buy-software"
  - title: "Enterprise software development cost in Australia"
    href: "/guides/enterprise-software-development-cost-australia"
  - title: "The strangler fig pattern"
    href: "/guides/strangler-fig-pattern"
  - title: "Manufacturing software"
    href: "/industries/manufacturing"
  - title: "NetSuite vs Business Central vs MYOB Acumatica"
    href: "/guides/netsuite-vs-business-central-vs-acumatica"
  - title: "How much does ERP implementation and customisation cost in Australia?"
    href: "/guides/erp-customisation-cost"
service:
  title: "Enterprise software development"
  href: "/services/enterprise-software"
---

## Odoo or a custom ERP: which way should an Australian SMB lean?

**Lean towards Odoo unless your core operations are genuinely unusual.** An ERP has to do a great many ordinary things well: chart of accounts, GST, purchase orders, stock movements, bills of materials, payroll, reporting. Odoo already does them, and paying to rebuild the ordinary parts is rarely good value.

A custom system earns its place in the parts of the business that make you different: a quoting engine, a production scheduling method, a compliance workflow your industry demands. The question is not really Odoo or custom, but how much of Odoo you would have to bend to fit, and what that bending costs over five years.

| | Odoo Standard | Odoo Custom | Custom ERP or custom core |
|---|---|---|---|
| Price basis | AU$43.00 per user per month, yearly | AU$80.00 per user per month, yearly | Build cost, then hosting and maintenance |
| Customisation | Configuration only | Studio, custom modules, external API | Anything you specify |
| Hosting | Odoo Online | Odoo Online, Odoo.sh or on premise | Your choice of Australian cloud region |
| Australian accounting | GST, BAS, TPAR via localisation | Same | Usually via Xero or MYOB integration |
| Upgrade burden | Handled by Odoo | Custom modules must be upgraded | Yours, on your timetable |
| Best for | Standard processes | Standard core, a few unique needs | Unusual operations at the heart of the business |

Prices are from Odoo's Australian pricing page at the time of writing (November 2026), shown in AUD. Monthly billing costs more, and Odoo offers a discount in the first 12 months for initial users.

## Community vs Enterprise: what is free and what is not?

**Odoo Community is open source and free to run yourself; Odoo Enterprise is the paid edition that Odoo's subscriptions include.** Odoo's licence documentation states that Community is licensed under LGPL version 3 and Enterprise under the Odoo Enterprise Edition License.

Odoo's own pricing has three tiers:

- **One App Free:** one app, unlimited users, hosted on Odoo Online.
- **Standard:** all apps, hosted on Odoo Online, with no custom modules.
- **Custom:** all apps plus Studio, multi company, the external API and custom development, hosted on Odoo Online, Odoo.sh or your own servers. Odoo.sh hosting costs extra.

Odoo counts a paying user as anyone with access to the back end to create, view or edit documents. Customers and suppliers using the portal aren't paying users, which helps if you want a customer portal. Odoo also offers a Light User licence, listed at AU$12.90, for staff with limited needs.

The practical catch for Australian businesses: Community saves licence fees but leaves you to host, secure, back up and upgrade it yourself, and not every app or feature in Odoo's subscriptions is part of Community. Check that each Australian localisation and reporting module you need, such as the BAS and TPAR reports, is available before planning a Community deployment.

## What does Odoo do for GST, BAS and STP?

**Odoo's Australian localisation covers the core tax and payment requirements most SMBs need.** According to Odoo's version 19 documentation, the Australian fiscal localisation includes:

- **GST** sales and purchase taxes, including deferred GST.
- **BAS and TPAR reports**, added by the Australian reports module.
- **ABA files** for batch payments and remittance advice.
- **Peppol** for electronic invoicing.
- **Two factor authentication**, which Odoo says users of the Australian localisation can't turn off because it is required by the Australian government.

On payroll, Odoo's Australian payroll documentation describes salary structures, tax rules and leave, and STP and SuperStream reporting through an integration with the Superchoice API. The ATO expanded Single Touch Payroll to Phase 2 from 1 January 2022, and Odoo's documentation covers Phase 2 reporting and finalisation. Odoo's documentation also lists an Employment Hero payroll integration as an alternative.

If your awards are complex, test payroll hardest of all. Our guide to [award interpretation software](/guides/award-interpretation-software) explains why pay rules are often the part of an ERP project that goes wrong.

## Customising Odoo: modules, Studio and the upgrade cost

**Every customisation you add to Odoo is something that must be checked, and often rewritten, when you move to a new Odoo version.** That's the cost most buyers underestimate.

There are three levels:

1. **Configuration.** Settings, workflows, approval rules, reports. Safe, and survives upgrades.
2. **Studio.** Odoo's visual tool for adding fields, screens and automations. Quick, and fine for small changes, but heavy Studio work becomes hard to manage and still needs checking on upgrade.
3. **Custom modules in Python.** Real code written by a partner or developer. Powerful, and the main source of upgrade debt. Odoo publishes guidance on upgrading a customised database because it isn't automatic.

A sensible rule is to keep custom modules few, small and well documented, and to ask any partner how they will handle the next two version upgrades and what that will cost. If the list of custom modules keeps growing, that's a signal the core of your business may not fit Odoo, and a custom core for those processes, connected to Odoo or to your accounting system, could be cheaper over time.

## Where does a custom ERP make more sense?

**A custom system makes sense when the way you operate is your advantage, and an off the shelf ERP would force you to change it.** Common examples:

- **Make to order manufacturing** with configurable products, unusual costing or scheduling that standard modules can't express. See our [manufacturing industry page](/industries/manufacturing).
- **Service businesses with complex job costing**, compliance records or field workflows that go well beyond standard projects.
- **Businesses whose ERP is also a customer product**, such as a portal or marketplace that must perform and look like your brand.

Even then, building an entire ERP is rarely wise. The usual approach is a custom core for the distinctive processes, with standard accounting in Xero or MYOB and integrations between them. For replacing an old system piece by piece, the [strangler fig pattern](/guides/strangler-fig-pattern) explains how to do it without a big bang cutover.

## Running Odoo alongside Xero or MYOB

**You don't have to replace your accounting system to use Odoo or a custom operations system.** If your bookkeeper and accountant are happy with Xero or MYOB, keep it, and run inventory, manufacturing or jobs in the operations system, syncing invoices, bills and payments across. That reduces risk and avoids retraining the finance team. Our [Xero and MYOB integration service](/services/xero-myob-integration) covers how those syncs are built.

## Hosting, partners and where your data lives

**Odoo Online lets you choose a hosting region, including Oceania, but backups leave the region.** Odoo's Cloud Hosting SLA lists Europe, Americas, Asia Pacific, Middle East and Northern Asia, and Oceania as hosting regions. The same SLA says backups are replicated on at least three machines in data centres in Europe and Canada, and that it isn't possible to choose or restrict backup regions.

For a business holding personal information under the Privacy Act, that matters for your APP 8 assessment. If backups must stay onshore, Odoo.sh or self hosting through a partner on Australian infrastructure are the routes to look at. Our [data residency guide](/guides/data-residency-vs-data-sovereignty) explains the distinction between storage and processing location.

Choose an implementation partner as carefully as the software. Ask for Australian references in your industry, who will do the payroll and tax setup, and how they handle upgrades.

## Three year cost comparison

**Licences are the smallest part of an Odoo budget; implementation and customisation are the largest.** Licence cost alone at Odoo's yearly list prices, before the first year discount:

| Users | Standard, three years | Custom, three years |
|---|---|---|
| 10 | AU$15,480 | AU$28,800 |
| 25 | AU$38,700 | AU$72,000 |
| 60 | AU$92,880 | AU$172,800 |

Add implementation partner fees, data migration, training, Odoo.sh or other hosting for custom code, and the upgrade work on custom modules. For a custom core, the costs are mostly the build plus hosting and maintenance; our [enterprise software cost guide](/guides/enterprise-software-development-cost-australia) gives typical ranges, and our [build vs buy guide](/guides/build-vs-buy-software) shows how to compare over five years.

## Decision table by business type

| Business | Likely best fit |
|---|---|
| Wholesale or distribution with standard processes | Odoo Standard, possibly alongside Xero |
| Light manufacturing with standard bills of materials | Odoo Custom with few modules |
| Make to order manufacturer with unusual costing | Custom core plus Xero or MYOB, or Odoo with a custom module set kept small |
| Service business with complex job and compliance records | Custom core plus accounting system |
| Business needing all data and backups onshore | Odoo on Australian hosting via Odoo.sh or a partner, or custom |

## How AWLabs approaches ERP decisions

We'll say so if Odoo or another ERP is the better fit. Where a custom core or integration is the right answer, we start with a 15 minute Development Consult, then a paid Discovery Audit that maps your processes and systems, with the fee credited in full against the build. You get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. See [enterprise software development](/services/enterprise-software).
