---
title: "Peppol e-invoicing in Australia: what is mandatory, what isn't, and how to connect"
metaTitle: "Peppol E-Invoicing in Australia: Rules, Dates and Setup"
description: "Is e-invoicing mandatory in Australia? Government targets for 2026 and 2027, why B2B stays voluntary, how access points work and adding Peppol to software."
eyebrow: "Australian regulation"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "E-invoicing is not mandatory for Australian businesses. The mandates sit with non corporate Commonwealth entities, which must lift e-invoices to 30% of invoices received by 1 July 2026 and be able to process and send e-invoices automatically by December 2026. From 1 January 2027, e-invoicing becomes the default method for Australian Government procurement, with standard payment terms of 10 business days. Businesses connect through an accredited Peppol access point, usually built into their accounting software, rather than joining the network directly. The ATO runs the network rules as the Australian Peppol Authority but cannot see the invoices."
takeaways:
  - "B2B e-invoicing is voluntary. Peppol's own country profile says e-invoicing is not mandatory for Australian businesses."
  - "Commonwealth agencies had a 30% target for e-invoices received by 1 July 2026, and must send and process e-invoices automatically by December 2026."
  - "From 1 January 2027, updated payment rules make e-invoicing the default for Australian Government procurement, with 10 business day payment terms."
  - "Software vendors partner with one of the 53 accredited Peppol service providers rather than becoming an access point themselves."
  - "Invoices use the PINT A-NZ specification, mandatory since 15 November 2024, and businesses are addressed by their ABN."
faqs:
  - q: "Is e-invoicing mandatory in Australia?"
    a: "Not for businesses. Peppol's Australian country profile says e-invoicing is not mandatory for Australian businesses, but there are mandates for government agencies. Non corporate Commonwealth entities must be able to receive e-invoices, had a target of 30% of received invoices by 1 July 2026, and must enable automated processing and sending by December 2026."
  - q: "Does the ATO see my e-invoices?"
    a: "No. The ATO says e-invoicing is not a compliance or revenue measure, that e-invoices don't go through the ATO, and that it can't see any invoice information. Only the supplier, the buyer and their service providers can view them."
  - q: "How do I start e-invoicing as a small business?"
    a: "Check whether your accounting software is eInvoicing Ready. The ATO lists instructions for Xero, MYOB, Reckon, Saasu, SAP, NetSuite, Microsoft Business Central and others. In many cases you register for Peppol inside your existing subscription. If you don't use accounting software, the ATO points to free or low cost web portals on its eInvoicing Ready product register."
  - q: "What is a Peppol ID in Australia?"
    a: "Most Australian businesses use their ABN as their Peppol participant ID, with the ICD code 0151. The full identifier for the ATO, for example, is iso6523-actorid-upis::0151:51824753556. You can look up whether a trading partner can receive e-invoices in the Peppol Directory."
  - q: "Will the government pay e-invoices faster?"
    a: "The Supplier Pay On-Time or Pay Interest Policy has given 5 day payment terms where Peppol e-invoicing capability exists since 1 January 2020. From 1 January 2027, the updated policy introduces standard payment terms of 10 business days and makes e-invoicing the default method of invoicing for Australian Government procurement. Check the policy for which contracts it covers."
  - q: "Does Peppol work with New Zealand?"
    a: "Yes. Australia and New Zealand adopted Peppol together in 2019, share the PINT A-NZ specification and recognise each other's service provider accreditation. Mandated New Zealand government agencies were required to send and receive e-invoices by January 2026 and to pay supplier e-invoices within 5 business days."
  - q: "Is Peppol the same as EDI?"
    a: "No. EDI connections are usually private links between two trading partners or a closed network. Peppol is an open four corner network: you connect once through an access point and can exchange invoices with anyone else on it. The ATO describes Peppol as complementing EDI rather than replacing it."
sources:
  - title: "Australia country profile"
    url: "https://peppol.org/learn-more/country-profiles/australia/"
    publisher: "OpenPeppol"
  - title: "eInvoicing for government"
    url: "https://www.ato.gov.au/businesses-and-organisations/einvoicing/einvoicing-for-government"
    publisher: "Australian Taxation Office"
  - title: "eInvoicing by default guidance"
    url: "https://www.ato.gov.au/businesses-and-organisations/einvoicing/einvoicing-for-government/einvoicing-by-default-guidance"
    publisher: "Australian Taxation Office"
  - title: "eInvoicing news and statistics"
    url: "https://www.ato.gov.au/businesses-and-organisations/einvoicing/einvoicing-news-and-statistics"
    publisher: "Australian Taxation Office"
  - title: "About Peppol eInvoicing"
    url: "https://www.ato.gov.au/businesses-and-organisations/einvoicing/about-peppol-einvoicing"
    publisher: "Australian Taxation Office"
  - title: "Identifying Australian businesses on the Peppol network"
    url: "https://www.ato.gov.au/businesses-and-organisations/einvoicing/about-peppol/identifying-australian-businesses-on-the-peppol-network"
    publisher: "Australian Taxation Office"
  - title: "eInvoicing (software developers)"
    url: "https://softwaredevelopers.ato.gov.au/e-invoicing"
    publisher: "ATO Software Developers"
  - title: "Supplier Pay On-Time or Pay Interest Policy (RMG 417)"
    url: "https://www.finance.gov.au/publications/resource-management-guides/supplier-pay-time-or-pay-interest-policy-rmg-417"
    publisher: "Department of Finance"
  - title: "Advice for government agencies (Wayback Machine copy)"
    url: "https://web.archive.org/web/2026/https://www.einvoicing.govt.nz/get-set-up/advice-for-government-agencies"
    publisher: "New Zealand Government (MBIE)"
related:
  - title: "How to automate accounts payable invoice processing"
    href: "/guides/how-to-automate-invoice-processing"
  - title: "Selling software to Australian government"
    href: "/guides/selling-software-to-australian-government"
  - title: "AI for accounting firms"
    href: "/solutions/ai-for-accounting-firms"
  - title: "Xero and MYOB integration"
    href: "/services/xero-myob-integration"
service:
  title: "API development and integration"
  href: "/services/api-development"
disclaimer: tax
---

## Is e-invoicing mandatory in Australia?

**No, not for businesses.** OpenPeppol's country profile for Australia states it plainly: e-invoicing is not mandatory for Australian businesses, but there are some mandates for government agencies. Business to business e-invoicing is voluntary, and the ATO notes that e-invoicing doesn't apply to business to consumer transactions at all.

The mandates that do exist apply to the Commonwealth, and they matter to anyone who supplies it:

| Date | What applies | Who |
|---|---|---|
| 1 January 2020 | 5 day payment terms where Peppol e-invoicing capability exists | Non corporate Commonwealth entities (NCEs) |
| 2022 | Mandate for NCEs to be able to receive e-invoices | NCEs |
| July 2024 | NCEs begin reporting e-invoice volumes to the ATO | NCEs |
| 1 July 2026 | Target of 30% of all invoices received as e-invoices | NCEs |
| December 2026 | Automated processing and sending of e-invoices | NCEs |
| 1 January 2027 | E-invoicing becomes the default for Australian Government procurement; standard payment terms of 10 business days | Australian Government procurement under the updated RMG 417 |

Corporate Commonwealth entities and Commonwealth companies aren't currently in scope, though the ATO encourages them to adopt it. State governments run their own programs: the ATO says all New South Wales, South Australian and ACT Government agencies can receive e-invoices, most Tasmanian agencies can, and many Queensland agencies can both send and receive.

This page is dated 8 November 2026. Dates in this area move, so check the sources before you rely on them.

## What is Peppol, and what does the ATO actually do?

**Peppol is an international framework for exchanging invoices and other procurement documents between business software, run by the not for profit OpenPeppol.** The ATO became the Australian Peppol Authority on 31 October 2019.

Peppol uses a four corner model:

1. **Corner 1:** the supplier creates the invoice in its software.
2. **Corner 2:** the supplier's access point validates it, looks up the buyer's address and sends it across the network.
3. **Corner 3:** the buyer's access point receives and validates it.
4. **Corner 4:** the buyer receives it in its software.

As the Peppol Authority, the ATO defines the Australian requirements, accredits service providers and promotes adoption. It is explicit about what it doesn't do: e-invoicing is not a compliance or revenue measure, e-invoices don't pass through the ATO, and it cannot see their contents.

The network is growing quickly. The ATO reports 436,371 ABNs on the network in August 2026, more than 6 million e-invoices transmitted by the end of that month, 53 accredited service providers and 48 registered eInvoicing Ready products. Registered government receivers include 128 Australian Government agencies, 314 state and territory agencies and 34 local councils.

## Why should suppliers to government care about the 2026 and 2027 changes?

**Because the agencies you invoice are now measured on how many e-invoices they receive, and from 2027 e-invoicing becomes their default.** Expect procurement contracts and renewals to ask for it.

The ATO's guidance tells agencies to identify high volume suppliers and raise e-invoicing at contract renewals, to incorporate e-invoicing by default into contracts as templates are updated, and to replace interim fixes that convert e-invoices into PDFs or emails for manual handling. If a supplier can't or won't send e-invoices, agencies should agree an alternative arrangement and keep encouraging the switch.

Payment terms are the practical incentive. The current policy has offered 5 day terms where e-invoicing capability exists since 2020. The Department of Finance's updated policy from 1 January 2027 introduces standard terms of 10 business days with e-invoicing as the default method. For a small supplier, being paid in two weeks rather than chasing a paper invoice is a cash flow benefit. If you sell software or services to government, our guide to [selling software to Australian government](/guides/selling-software-to-australian-government) covers the procurement side.

## Why connect to an access point instead of becoming one?

**Because accreditation is a significant compliance project, and partnering with an accredited provider gets you onto the network in weeks.** Almost every software vendor takes the partner route.

The ATO's software developer site sets out what accreditation requires: OpenPeppol membership, a signed legal agreement, the Peppol Authority's due diligence checks, security requirements and solution testing. That bar is rising. Under new OpenPeppol rules, every accredited service provider worldwide will need ISO/IEC 27001 certification, or an approved equivalent, by 1 October 2027.

| Route | Who it suits | What you take on |
|---|---|---|
| Use eInvoicing Ready accounting software | Most businesses | Registering in your existing product |
| Use a provider's web portal | Low volume senders with no accounting software | Manual entry in the portal |
| Integrate your software with an accredited access point's API | Software vendors, ERPs, custom systems | Building send, receive and status handling |
| Become an accredited access point | Specialist providers whose core business is the network | Membership, legal agreement, security certification, testing, ongoing operations |

For software vendors there is a middle step. The ATO's eInvoicing Ready register lists products that have shown they can send or receive a valid e-invoice through an accredited Australian or New Zealand provider and register a business on the network.

## How do you add Peppol send and receive to your own software?

**You build against your chosen access point's API: create the invoice in the standard format, send it, and handle what comes back.** The work usually breaks into these pieces:

1. **Choose an access point** whose API, pricing and support suit your volume. Check it is on the ATO's Australian Peppol service provider register.
2. **Register your customers** as Peppol participants, usually by ABN, through the provider. Publishing receiver details to the Peppol Directory is mandatory in Australia.
3. **Look up the recipient** before sending, to confirm they can receive the document type.
4. **Map your invoice data** to PINT A-NZ: parties, ABNs, line items, GST categories, totals and payment details.
5. **Validate before sending.** The ATO provides a validation testbed; run every outbound invoice through validation in your own pipeline too.
6. **Handle responses.** Delivery confirmations, rejections and validation errors need to reach the person who can fix them.
7. **Receive.** Inbound e-invoices arrive as structured data; route them into your bills workflow with attachments.

Our [API development service](/services/api-development) and [Xero and MYOB integration](/services/xero-myob-integration) cover this kind of build.

## What are PINT A-NZ, participant IDs and validation errors?

**PINT A-NZ is the invoice specification Australia and New Zealand use on Peppol, mandatory since 15 November 2024 when it replaced A-NZ Peppol BIS Billing.** The ATO says the shared specifications are updated twice a year, so build for change.

A few details trip up most first implementations:

- **Participant IDs.** Australian businesses typically use their ABN with ICD 0151. The ATO's own ID is iso6523-actorid-upis::0151:51824753556. Some businesses that trade overseas use a different scheme.
- **Tax invoice status.** The ATO says an e-invoice issued under the A-NZ specification with all mandatory data satisfies the requirement that a document is intended to be a tax invoice, even without the words "tax invoice".
- **Self billing.** An optional A-NZ self billing specification exists for recipient created tax invoices. The ATO describes the market as not yet mature enough for widespread use.
- **Attachments.** Timesheets and supporting schedules travel as attachments to the e-invoice; the A-NZ industry practice statement covers how.
- **Typical causes of validation errors.** Missing or malformed ABNs, GST category codes that don't match the amounts and totals that don't add up after rounding.

## What changes for AP and AR teams?

**Invoices stop being documents to read and become data to check.** That moves effort from keying to exception handling.

For accounts payable, e-invoices remove extraction, reduce keying errors and make matching against purchase orders easier. The ATO estimates paper and PDF invoices generally cost $27 to $30 to process and says e-invoicing can bring that below $10. Existing checks still apply: the ATO recommends running your normal assurance before paying e-invoices, and confirming the identity of any new trading partner regardless of their Peppol registration. Our guide to [automating accounts payable](/guides/how-to-automate-invoice-processing) covers the full process.

For accounts receivable, the main tasks are keeping customer ABNs accurate, checking which customers can receive, and switching your highest volume customers first. The ATO's onboarding guidance suggests starting with a few trading partners and expanding.

## What does New Zealand's approach mean for trans Tasman businesses?

**Australia and New Zealand use the same network and the same PINT A-NZ specification, so one connection can serve both.** The two countries adopted Peppol together in 2019 and recognise each other's service provider accreditation.

New Zealand has moved faster on government: its procurement rules required mandated agencies to send and receive e-invoices by January 2026 and to pay supplier e-invoices within 5 business days. The ATO reports New Zealand passing 110,000 registered businesses. A business that invoices government agencies in both countries has a strong reason to be on the network now.

## How AWLabs approaches Peppol work

Most businesses don't need us for this: if your accounting software is eInvoicing Ready, register through it. We help when Peppol has to work inside custom software, an ERP or a product you sell. In a Development Consult we look at your invoicing volumes and systems and tell you which route fits. For a build, a paid Discovery Audit maps your invoice data to PINT A-NZ and shortlists accredited access points; the fee is credited in full against the build. The fixed price Schedule of Work then offers three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. See our [API development service](/services/api-development). This page is general information, not tax or legal advice.
