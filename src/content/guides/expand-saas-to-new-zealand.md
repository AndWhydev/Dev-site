---
title: "Expanding an Australian SaaS product to New Zealand"
metaTitle: "Expanding an Australian SaaS Product to New Zealand"
description: "What an Australian SaaS needs for NZ customers: GST on remote services, taxable supply information, Privacy Act 2020 and IPP3A, NZBN, Peppol and localisation."
eyebrow: "Australian guide"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "Most of an Australian SaaS product works in New Zealand unchanged, but five things need attention. NZ GST is 15%, and an overseas business supplying remote services to NZ consumers must register once those supplies pass NZ$60,000 in 12 months, while sales only to GST registered NZ businesses don't require registration. NZ's Privacy Act 2020 applies to overseas businesses carrying on business in New Zealand, and since 1 May 2026 IPP3A requires notice when personal information is collected from someone other than the person. Hosting in Australia is usually workable when you hold data on your customer's behalf. Then add NZBN fields, NZ addresses and holidays, and Peppol eInvoicing."
takeaways:
  - "NZ GST is 15%. Overseas suppliers of remote services, including software and apps, must register once supplies to NZ consumers exceed NZ$60,000 in 12 months; B2B sales to GST registered NZ businesses don't trigger registration."
  - "Treat an NZ customer as unregistered unless they say they are GST registered or give a GST number or NZBN, so capture those at sign up."
  - "The Privacy Act 2020 applies to an overseas agency's actions in the course of carrying on business in New Zealand. IPP3A, in force from 1 May 2026, adds a notice duty for indirect collection."
  - "When your SaaS holds data for an NZ customer, section 11 treats the customer as holding it, so storing it in Australia is not a disclosure, as long as you don't use it for your own purposes."
  - "NZ has its own business number (NZBN), address formats, regional anniversary days and Peppol based eInvoicing. Build them as configuration, not as a fork."
faqs:
  - q: "Does an Australian SaaS company have to register for GST in New Zealand?"
    a: "Only in some cases. If you supply remote services to NZ consumers and those supplies exceed NZ$60,000 in 12 months (or are expected to), you must register and charge NZ GST. If you only supply NZ businesses that are GST registered, for their business use, you don't need to register. Get advice from an adviser who knows both systems."
  - q: "What is IPP3A in the NZ Privacy Act?"
    a: "Information Privacy Principle 3A came into force on 1 May 2026. When an agency collects personal information about someone from another source, it must take reasonable steps to make sure the person knows the information was collected, why, who will receive it, the name and address of the collecting and holding agencies, any law authorising the collection, and their rights of access and correction. It doesn't apply to information collected before 1 May 2026, and there are exceptions."
  - q: "Can we host New Zealand customer data in Australia?"
    a: "Usually, yes. Under section 11 of the Privacy Act 2020, if you hold information for or on behalf of a customer, for example as a processor, the information is treated as held by the customer, and the transfer to you is not a disclosure. That changes if you use the information for your own purposes. Contracts and your privacy terms should make the arrangement clear."
  - q: "Do NZ privacy breaches have to be reported?"
    a: "Yes. If a privacy breach has caused or is likely to cause anyone serious harm, the agency must notify the Privacy Commissioner and affected people as soon as it is practically able. If you also hold Australian data, the Australian Notifiable Data Breaches scheme applies to that separately."
  - q: "What is an NZBN?"
    a: "The New Zealand Business Number is a unique identifier available to every NZ business, under an Act that came into effect in 2016. It links to the business's core details, and it is the identifier used to route eInvoices to the right business. Add it as an optional field next to ABN in your billing and customer records."
  - q: "Do we need a separate NZ version of the product?"
    a: "Rarely. A single product with per tenant settings for country, currency, tax, address format, holidays and identifiers is easier to maintain than a fork. The exceptions are features tied to Australian systems, such as STP payroll or ATO integrations, which need NZ equivalents or need to be hidden."
sources:
  - title: "Supplying remote services into New Zealand"
    url: "https://www.ird.govt.nz/gst/gst-for-overseas-businesses/supplying-remote-services-into-new-zealand"
    publisher: "Inland Revenue NZ"
  - title: "GST for overseas businesses"
    url: "https://www.ird.govt.nz/gst/gst-for-overseas-businesses"
    publisher: "Inland Revenue NZ"
  - title: "How taxable supply information for GST works"
    url: "https://www.ird.govt.nz/gst/tax-invoices-for-gst/how-tax-invoices-for-gst-work"
    publisher: "Inland Revenue NZ"
  - title: "Principle 3A: Collection of information from another source"
    url: "https://www.privacy.org.nz/privacy-principles/3a/"
    publisher: "Office of the Privacy Commissioner (NZ)"
  - title: "Principle 12: Disclosure outside New Zealand"
    url: "https://www.privacy.org.nz/privacy-principles/12/"
    publisher: "Office of the Privacy Commissioner (NZ)"
  - title: "Privacy breaches"
    url: "https://www.privacy.org.nz/responsibilities/privacy-breaches/"
    publisher: "Office of the Privacy Commissioner (NZ)"
  - title: "Privacy Act 2020 (sections 4, 11 and 25A)"
    url: "https://www.legislation.govt.nz/act/public/2020/0031/latest/LMS23227.html"
    publisher: "New Zealand Legislation"
  - title: "About the NZBN"
    url: "https://www.nzbn.govt.nz/whats-an-nzbn/about/"
    publisher: "NZBN, MBIE"
  - title: "eInvoicing and the NZBN"
    url: "https://www.nzbn.govt.nz/using-the-nzbn/einvoicing/"
    publisher: "NZBN, MBIE"
  - title: "Public holidays and anniversary dates"
    url: "https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates"
    publisher: "Employment New Zealand"
related:
  - title: "Multi tenant SaaS architecture"
    href: "/guides/multi-tenant-saas-architecture"
  - title: "How much does it cost to build SaaS in Australia?"
    href: "/guides/saas-development-cost-australia"
  - title: "Data residency vs data sovereignty"
    href: "/guides/data-residency-vs-data-sovereignty"
  - title: "How to build a subscription app in Australia"
    href: "/guides/subscription-app-development"
  - title: "Australia wide delivery"
    href: "/locations/australia-wide"
service:
  title: "SaaS development"
  href: "/services/saas-development"
disclaimer: legal
---

## What actually differs for New Zealand customers?

**Less than most founders fear: the product, the hosting and the language mostly carry over, and the work sits in tax, privacy notices, identifiers and local formats.** This table is the short version; the sections below explain each row.

| Area | Australia | New Zealand | Product change |
|---|---|---|---|
| Consumption tax | GST 10% | GST 15% | Tax rate per tenant country; NZ GST registration logic |
| Business identifier | ABN | NZBN (and GST number) | Optional NZBN and GST number fields |
| Tax documents | Tax invoices | Taxable supply information, which can be held across records | Invoice template per country |
| Privacy law | Privacy Act 1988 and APPs | Privacy Act 2020 and IPPs, including IPP3A from 1 May 2026 | NZ privacy terms; notice flows for indirect collection |
| Breach reporting | Notifiable Data Breaches scheme | Notify the Privacy Commissioner and affected people for serious harm breaches | Incident process covers both regulators |
| eInvoicing | Peppol | Peppol, routed by NZBN | Peppol identifiers per country |
| Calendar | State public holidays | National holidays plus regional anniversary days | Holiday calendars per region |
| Language and addresses | Australian English, states and postcodes | NZ English with macrons in te reo Māori words, regions, suburbs and four digit postcodes | Unicode safe fields, NZ address format |

If your product already handles per tenant settings well, most of this is configuration. If country assumptions are scattered through the code, fix that first; our [multi tenant SaaS architecture guide](/guides/multi-tenant-saas-architecture) covers how to model tenant level settings.

## How does NZ GST apply to an Australian SaaS business?

**It depends on whether your NZ customers are consumers or GST registered businesses, and on how much you sell to consumers.** NZ GST is 15%. Inland Revenue treats software, apps and software maintenance supplied from outside New Zealand as remote services.

Work through it in order:

1. **Do you sell only to NZ businesses that are GST registered, for their business use?** Then you don't need to register for NZ GST. Inland Revenue says to treat NZ customers as not registered unless they state they are GST registered, or give their GST number or an NZBN.
2. **Do you sell to NZ consumers?** You must register and charge NZ GST when your supplies to NZ customers were more than NZ$60,000 in the last 12 months, or are expected to be more than NZ$60,000 in the next 12 months.
3. **How do you know a customer is in New Zealand?** Inland Revenue asks for 2 non conflicting pieces of evidence, such as billing address, IP address or geolocation, bank details, or the mobile country code of the SIM.
4. **Do you sell through an app store?** Inland Revenue notes that a marketplace, such as an app store, may be required to return GST on supplies made through it instead of the underlying supplier.

What this means for the product: capture country, business or consumer status, GST number and NZBN at sign up; store two pieces of location evidence; and apply the right rate per customer. Exports of services from Australia are generally GST free on the Australian side, but have your accountant confirm the treatment for your model on both sides of the Tasman.

## What invoicing rules apply in New Zealand?

**New Zealand replaced the single tax invoice with "taxable supply information", which can be spread across several records, and requires you to provide it to GST registered buyers on request for supplies over NZ$200.** Inland Revenue says the information must be provided within 28 days of a request, or by an agreed alternative date. Invoices, bank statements, agreements and contracts can be used alone or in combination to support GST figures.

The practical build items:

- an NZ invoice template showing the details Inland Revenue requires for the value band of the supply;
- your NZ GST number on invoices once registered;
- the buyer's details for higher value supplies;
- the ability to send invoices automatically through Peppol eInvoicing, which Inland Revenue lists as an acceptable way to provide taxable supply information.

## What does the NZ Privacy Act 2020 require, including IPP3A?

**The Privacy Act 2020 applies to an overseas agency in relation to its actions in the course of carrying on business in New Zealand, so an Australian SaaS with NZ customers should assume it is covered.** Section 4 sets out that reach. The Act's information privacy principles broadly resemble the Australian Privacy Principles, with differences in detail.

The newest is IPP3A, in force since 1 May 2026. When an agency collects personal information about a person from someone other than that person, it must take reasonable steps to make sure the person is aware of:

- [ ] the fact that the information has been collected;
- [ ] the purpose of the collection;
- [ ] the intended recipients;
- [ ] the name and address of the agency that collected it and the agency holding it;
- [ ] any law under which the collection is authorised or required;
- [ ] their rights to access and correct the information.

The steps must be taken as soon as reasonably practicable after collection. Section 25A says IPP3A doesn't apply to information collected before 1 May 2026, and there are exceptions, including where the person already knows, where the information is publicly available, or where compliance isn't reasonably practicable.

For a SaaS business, IPP3A matters in two ways:

- **Your own indirect collection.** Leads bought from a list provider, data enriched from a third party, referrals, or contacts imported by a user about other people may need a notice from you.
- **Your customers' indirect collection.** If your product collects information about people from someone else (reference checks, tenant applications, incident reports about third parties, contacts uploaded in bulk), your NZ customers carry the duty. A product that makes the notice easy to send, record and evidence is a selling point.

Breach reporting also differs. If a privacy breach has caused or is likely to cause anyone serious harm, you must notify the Privacy Commissioner and affected people as soon as you are practically able. Our guide to [notifiable data breaches for software](/guides/notifiable-data-breaches-software) covers the Australian side.

## Can New Zealand customer data stay in Australia?

**In most SaaS arrangements, yes, because you hold the data on your customer's behalf.** Section 11 of the Privacy Act 2020 says that if one agency holds information for or on behalf of another, for example for safe custody or processing, the information is treated as held by the customer, and the transfer to the provider is not a use or disclosure. It doesn't matter that the provider or the data is outside New Zealand. The protection falls away if the provider uses or discloses the information for its own purposes.

That is why IPP12, which limits disclosures outside New Zealand, often isn't triggered by ordinary SaaS hosting. IPP12 does apply when information is genuinely disclosed overseas, and then the discloser needs a basis such as the recipient being subject to the NZ Act, comparable privacy laws, or an agreement requiring comparable safeguards. The Privacy Commissioner suggests model contract clauses as one way.

Product and contract changes that support this position:

- a data processing clause saying you process NZ customer data only on their instructions;
- no use of customer data for your own analytics, model training or marketing without a separate basis;
- a list of subprocessors, with where each one processes data;
- clear answers on where backups and logs are kept.

Some NZ public sector and health buyers set their own hosting rules beyond the Act. Ask early. Our guide to [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty) explains the questions to expect.

## What changes for NZBN, addresses and payments?

**Add the NZBN as a first class identifier, support NZ address formats, and confirm your payment provider settles in NZ dollars.**

- **NZBN.** The New Zealand Business Number is a globally unique identifier available to every NZ business, enabled by an Act that came into effect in 2016. It links to the business's primary details. Store it alongside the ABN field, not instead of it.
- **Addresses.** NZ addresses use suburb, town or city and a four digit postcode, with no states. Don't force a state dropdown.
- **Currency.** Price in NZD for NZ customers, display GST inclusive prices to consumers, and keep the currency on every invoice and ledger entry.
- **Payments.** Card payments through a provider that supports New Zealand, such as Stripe, are the simplest start; NZ customers paying invoices may expect direct bank transfer details for an NZ account.

## How do Peppol and NZ eInvoicing work?

**New Zealand uses the same Peppol network as Australia, and the NZBN is the identifier that gets an eInvoice to the right business.** NZBN guidance says recording the NZBN for each buyer ensures eInvoices reach them, and its Business Match service helps match contacts to NZBNs.

If your product already sends or receives Peppol eInvoices in Australia, NZ support is largely a matter of identifiers and invoice content. If it doesn't, building Peppol once through an access point provider covers both countries.

## What localisation does New Zealand need?

**Mostly small things that are noticed when they are wrong.**

- **Macrons.** Te reo Māori words and place names use macrons (Māori, Ōtautahi, Tāmaki Makaurau). Make sure every field, search index, PDF template and email accepts and displays them, and that search matches with or without them.
- **Spelling and terms.** NZ English is close to Australian English, but terms differ: IRD rather than ATO, KiwiSaver rather than super, regions rather than states.
- **Public holidays.** NZ has national public holidays, including Matariki, plus regional anniversary days. Employment New Zealand notes each region has its own anniversary day, usually observed on the nearest Monday, and Waitangi Day and Anzac Day are moved to the Monday when they fall on a weekend for employees who wouldn't otherwise have worked that day. Scheduling, rostering and SLA timers need region aware calendars.
- **Time zone.** New Zealand runs ahead of the eastern Australian states, with daylight saving dates that differ. Store times in UTC and display them in the user's zone.

## A launch checklist for New Zealand

**Use this as the scope for an NZ release.**

- [ ] Country, currency and tax settings per tenant, with NZ GST at 15%.
- [ ] GST registration decision documented; if consumer sales may pass NZ$60,000, registration planned.
- [ ] Sign up captures business or consumer status, GST number and NZBN.
- [ ] Two pieces of location evidence stored for consumer sales.
- [ ] NZ invoice template and taxable supply information on request.
- [ ] NZ privacy terms, a data processing clause and a subprocessor list.
- [ ] IPP3A notices for your own indirect collection, and features for customers' notices.
- [ ] Breach response plan covering both the OAIC and the NZ Privacy Commissioner.
- [ ] NZ addresses, macrons, regional holidays and time zones tested.
- [ ] Peppol identifiers for NZ if you offer eInvoicing.

## How AWLabs approaches an NZ launch

We treat New Zealand as configuration in one product: per tenant country settings, tax rules, identifiers, calendars and templates, rather than a separate version. We build to the tax and privacy positions your accountant and lawyer set, and we deliver remotely from Sydney during Sydney business hours, as described on our [Australia wide delivery page](/locations/australia-wide).

It starts with a Development Consult, a 15 minute call or a Zoom with Andy. The paid Discovery Audit then scopes the NZ changes against your codebase, and its fee is credited in full against the build. The Schedule of Work offers three fixed price options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. See our [SaaS development service](/services/saas-development).
