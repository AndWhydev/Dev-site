---
title: "ABN Lookup, address validation and other Australian business data APIs"
metaTitle: "ABN Lookup API Integration and Australian Data APIs"
description: "How to integrate ABN Lookup web services, ASIC company data, G-NAF address data and Australia Post APIs, with the licence terms, fees and caching rules."
eyebrow: "Integration reference"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "ABN Lookup web services are free: you register, accept the web services agreement and receive a GUID that authenticates SOAP, HTTP or limited JSON calls to search by ABN, ACN or name, including GST registration status. Pair it with G-NAF (open, updated quarterly) or a commercial address service for address entry, ASIC Connect for company details (basic data free, extracts from $10), and Australia Post's APIs for postcodes and shipping. Validate at the point of entry, store the source and the date you checked, and refresh on a schedule."
takeaways:
  - "ABN Lookup web services cost nothing. You need a GUID, which the ABR emails after you accept the agreement."
  - "Check the ABN's checksum locally first. It is a modulus 89 calculation, so typos never need an API call."
  - "An active ABN does not mean the business is registered for GST. Read the GST field, which ABN Lookup returns."
  - "G-NAF is free under an open licence with one notable restriction: you cannot use it alone to compile addresses for sending mail."
  - "If the ABR tells you information has been withdrawn, the agreement requires you to delete your copies, so design your cache for it."
faqs:
  - q: "Is the ABN Lookup API free?"
    a: "Yes. The ABR states that access to the ABN Lookup web services is free of charge. You register, accept the ABN Lookup Web Services Agreement, and the ABR emails you a GUID to include in each request."
  - q: "What are the ABN Lookup API rate limits?"
    a: "The ABR does not publish a numeric rate limit on its web services page. The agreement allows it to suspend access to protect its interests or while investigating a possible breach, so treat it as a shared public service: validate the checksum locally, cache results, and use the weekly bulk extract or the ABN refresh tool for large lists."
  - q: "Can I check whether a supplier is registered for GST?"
    a: "Yes. ABN Lookup results include GST registration status and the date GST registration started, where the entity is registered. Check that field rather than assuming an active ABN means GST registered, especially before accepting a tax invoice that charges GST."
  - q: "Is there a JSON version of ABN Lookup?"
    a: "There is limited JSON support for ABN, ACN and name searching, using endpoints such as AbnDetails.aspx with a callback and your GUID. The full set of methods is SOAP or HTTP GET and POST, described in the WSDL."
  - q: "What is the best address autocomplete for Australian forms?"
    a: "For most business apps, a service built on G-NAF gives the most reliable Australian results, either Geoscape's own APIs or a commercial provider that licenses G-NAF. A global maps autocomplete is quicker to set up but check its terms on storing results. Whatever you choose, store the structured fields, not just one text line."
  - q: "Do we need to become a Digital Service Provider to lodge with the ATO?"
    a: "If your software will use ATO APIs or digital services, such as lodging tax or payroll data, you must meet the DSP Operational Security Framework, which starts with a security questionnaire submitted to the ATO's Digital Partnership Office. Simply reading public ABN Lookup data does not require it."
sources:
  - title: "ABN Lookup web services"
    url: "https://abr.business.gov.au/Tools/WebServices"
    publisher: "Australian Business Register"
  - title: "Web services methods"
    url: "https://abr.business.gov.au/Documentation/WebServiceMethods"
    publisher: "Australian Business Register"
  - title: "ABN Lookup Web Services Agreement"
    url: "https://abr.business.gov.au/Tools/WebServicesAgreement"
    publisher: "Australian Business Register"
  - title: "ABN format and check digit"
    url: "https://abr.business.gov.au/Help/AbnFormat"
    publisher: "Australian Business Register"
  - title: "ABN bulk extract"
    url: "https://abr.business.gov.au/Tools/BulkExtract"
    publisher: "Australian Business Register"
  - title: "Company and organisation registers"
    url: "https://www.asic.gov.au/online-services/search-asic-registers/company-and-organisation-registers"
    publisher: "ASIC"
  - title: "Geoscape Geocoded National Address File (G-NAF)"
    url: "https://data.gov.au/data/dataset/geocoded-national-address-file-g-naf"
    publisher: "data.gov.au"
  - title: "Open G-NAF End User Licence Agreement"
    url: "https://data.gov.au/data/dataset/19432f89-dc3a-4ef3-b943-5326ef1dbecc/resource/09f74802-08b1-4214-a6ea-3591b2753d30/download/20160226-eula-open-g-naf.pdf"
    publisher: "Geoscape Australia"
  - title: "G-NAF"
    url: "https://geoscape.com.au/data/g-naf/"
    publisher: "Geoscape Australia"
  - title: "DSP Operational Security Framework"
    url: "https://softwaredevelopers.ato.gov.au/operational_framework"
    publisher: "ATO"
related:
  - title: "How much does API integration cost in Australia?"
    href: "/guides/api-integration-cost-australia"
  - title: "Selling software to Australian government"
    href: "/guides/selling-software-to-australian-government"
  - title: "Australia Post and StarTrack API integration"
    href: "/guides/shipping-carrier-integration"
  - title: "How to verify identity in an Australian app"
    href: "/guides/identity-verification-australia"
service:
  title: "API development and integration"
  href: "/services/api-development"
---

## Why validate ABNs and addresses when they are entered?

**Because every bad ABN or address that gets into your system turns into a manual fix later: a supplier paid against the wrong entity, a tax invoice from a business not registered for GST, a parcel returned, or a duplicate customer record.** Checking at entry costs milliseconds. Cleaning up after a migration or an audit costs days.

The public data available to Australian software is unusually good. The Australian Business Register publishes ABN details by API at no charge, ASIC offers basic company data for free, and the national address file, G-NAF, is open data. Most onboarding and supplier forms can be built so that a user types a few characters and the rest is filled in from a source of record.

## How do the ABN Lookup web services work?

**You register for access, accept the ABN Lookup Web Services Agreement, and the ABR emails you an authentication GUID that you pass with every request.** Access is free of charge. The services support SOAP and HTTP GET or POST, described by a WSDL, plus limited JSON support for ABN, ACN and name searches.

The main method families at the time of writing (web services version 9.9.7):

| Method | Use it for | Notes |
|---|---|---|
| SearchByABN (latest SearchByABNv202001) | Validating an ABN and pulling entity name, status, entity type, GST status, business names | Earlier versions omit registered business names; use the latest |
| SearchByASIC (latest SearchByASICv201408) | Looking up by ACN, ARBN, ARSN or ARFN | Returns the ABN and the same detail set |
| Name search, with filters | Autocomplete when a user types a business name | Returns candidate matches; confirm the chosen one by ABN |
| JSON endpoints (AbnDetails, AcnDetails, MatchingNames) | Lightweight browser or serverless calls | Uses a callback parameter, so wrap it server side |

The ABR versions its methods by adding new ones rather than changing old ones, and recommends the latest version for new integrations. Pin the method name in your code and review the release notes once a year.

**Do the checksum locally first.** An ABN is 11 digits: a 9 digit identifier with two leading check digits derived by a modulus 89 calculation. Subtract 1 from the first digit, multiply each digit by its position weight, sum, and divide by 89. A remainder of zero means the format is valid. This rejects most typos before any network call.

**Rate limits are not published.** The ABR's web services page does not state a numeric limit, and the agreement lets the ABR suspend access while it investigates a possible breach or to protect its interests. In practice, validate locally, call once per entry, cache the result, and do not hammer the service in loops. For large lists use the tools built for it: the ABN refresh tool (up to 50 ABNs at a time) or the weekly bulk extract, published in XML with current details including GST status.

## What ASIC company data is free, and what costs money?

**Basic company and business name details are free to search on ASIC's registers; officeholder and history information comes in paid extracts.** On ASIC's company and organisation register page at the time of writing, a current company extract is $10, a current and historical extract $20, and a roles and relationship extract $23. Officeholder addresses are not included in the ASIC extract.

ASIC also publishes datasets from its business registers on data.gov.au for download. For most apps, ABN Lookup already returns the ACN, registered business names and entity type, so you only need ASIC directly when you must know directors, shareholders or document history, for example in credit, onboarding a high value trade account, or due diligence.

## Which address source should you use?

**For Australian addresses, use something built on G-NAF wherever accuracy matters, and treat a global maps autocomplete as a convenience rather than a source of record.**

| Source | What it is | Cost model | Best fit |
|---|---|---|---|
| G-NAF (open, from data.gov.au) | The national geocoded address file, about 15.9 million addresses, updated quarterly | Free under the open G-NAF EULA | Self hosted autocomplete and validation, analytics |
| Geoscape APIs and G-NAF Live | Geoscape's commercial services, with some states updated daily or weekly | Commercial licence | Apps needing fresher data or a hosted API |
| Commercial address vendors | Autocomplete and validation APIs built on licensed G-NAF and postal data | Per lookup or subscription | Forms where you want a hosted, supported service |
| Australia Post APIs | Postcode search and postage calculation (PAC); shipping APIs for contract customers | Free key for PAC; account for shipping | Postcode and suburb checks, postage quotes |
| Global maps autocomplete | Worldwide place search | Per request, with storage terms | Consumer apps that need international addresses too |

Two G-NAF details matter. First, the August 2026 release reported 15,949,543 addresses, and Geoscape publishes updates quarterly, so a self hosted copy needs a quarterly import job. Second, the open licence carries a use restriction: you must not use G-NAF to generate or compile addresses for sending mail unless you have verified each address can receive mail against a secondary source. That rarely affects a checkout form, but it does affect a direct mail tool.

Store addresses as structured fields (unit, number, street, suburb, state, postcode) plus the G-NAF persistent identifier where you have it. That makes deduplication and later revalidation possible. Our [shipping carrier integration guide](/guides/shipping-carrier-integration) covers how address quality affects labels and parcel lockers.

## Why is ABN status alone not enough for GST?

**An ABN can be active while the entity is not registered for GST, and only GST registered businesses should charge GST on a tax invoice.** ABN Lookup returns GST registration with a start date where it applies. Accounts payable software should check that field before accepting an invoice that includes GST, and recheck periodically, because registrations can be cancelled.

A practical rule set for supplier onboarding:

1. Reject an ABN that fails the checksum.
2. Reject or flag a cancelled ABN.
3. Compare the entity name or a registered business name with the name on the invoice.
4. If the invoice charges GST, confirm GST registration covers the invoice date.
5. Save the response, the method version and the date of the check with the supplier record.

If those suppliers then flow into Xero or MYOB, our [Xero and MYOB integration](/services/xero-myob-integration) work covers keeping contact records consistent across both.

## When does your software need ATO Digital Service Provider status?

**When it uses ATO APIs or digital services, for example lodging tax, payroll or superannuation data, rather than just reading public registers.** The ATO's DSP Operational Security Framework sets minimum security requirements for providers that access its digital services, to protect taxation, accounting, payroll, business registry and superannuation data. You start by completing the DSP OSF security questionnaire and working with the ATO's Digital Partnership Office.

Reading ABN Lookup does not make you a DSP. Building payroll that reports through Single Touch Payroll, or practice software that lodges returns, does, and the security work should be planned from the start of the project, not bolted on before launch. Our guide to [selling software to Australian government](/guides/selling-software-to-australian-government) covers related assurance expectations.

## Caching, licensing and keeping the data current

**Cache what you looked up, record when, and build a way to refresh and to delete.** Three obligations and habits shape the design:

- **Withdrawal.** The ABN Lookup agreement says details may be withdrawn from the ABN Lookup database, for example to protect an individual's privacy, and if you are notified you must take reasonable action to delete all copies. Keep ABR data in identifiable fields, not pasted into free text, so you can find and purge it.
- **No implied endorsement.** You must not suggest the Commonwealth endorses your product.
- **Freshness.** Entities change names, cancel ABNs and deregister for GST. Revalidate active suppliers and customers on a schedule, monthly or quarterly depending on risk, and on every change to bank details.

## A reference architecture for onboarding and supplier forms

1. **Form.** Business name or ABN field with type ahead; address field with G-NAF based autocomplete.
2. **Edge validation.** Checksum the ABN in the browser and on the server.
3. **Lookup service.** A small backend service holds the ABR GUID and address API keys, calls the sources, normalises results and caches them with a timestamp. Never put the GUID in browser code.
4. **Decision rules.** Status, name match and GST rules as above, returning pass, fail or review.
5. **Storage.** Structured entity and address fields, source, method version and checked date.
6. **Refresh job.** Scheduled revalidation, with alerts for status changes.
7. **Purge path.** A way to remove withdrawn data on request.

Indicative effort, AUD ex GST at typical agency rates (ranges, not quotes): ABN and address validation added to one existing form is about $3k to $8k; a shared lookup service used by several systems, with scheduled refresh and review queues, is about $10k to $25k. Our [API integration cost guide](/guides/api-integration-cost-australia) explains how those ranges are built.

## How AWLabs approaches data integrations

We treat public data sources as dependencies with terms, versions and outages, not as free text boxes. Senior engineers lead every build, and the lookup layer is built once and reused across your forms, CRM and accounting. If your data then needs to land in a warehouse or reporting stack, our [data engineering](/services/data-engineering) team picks it up from there. Start with a Development Consult through [API development and integration](/services/api-development).
