---
title: "How to automate accounts payable invoice processing in Australia"
metaTitle: "How to Automate Accounts Payable Invoice Processing"
description: "Automate supplier invoices from inbox to payment: Dext and ApprovalMax vs a custom pipeline, PO matching, bank detail fraud checks, Xero posting and Peppol."
eyebrow: "How to guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "Automating accounts payable means capturing supplier invoices from email, PDF or Peppol, extracting the data, checking it against purchase orders and receipts, routing it for approval, posting it to Xero or MYOB and producing a payment file, with a person reviewing only the exceptions. For most small businesses, Dext or Hubdoc for capture plus ApprovalMax or the approvals in their accounting software is enough. A custom pipeline pays when you match against purchase orders and jobs, run several entities or deal with suppliers whose invoices tools misread. As an indicative guide, extraction with a review queue posting to Xero runs $20,000 to $50,000 (AUD, ex GST)."
takeaways:
  - "Most AP time goes on three things: getting invoices out of inboxes, keying them, and chasing approvals. Measure each before choosing a fix."
  - "Capture tools such as Dext and Hubdoc plus an approval tool cover most small and mid sized businesses."
  - "Every extracted field needs a confidence score, and low confidence fields go to a review queue rather than straight into the ledger."
  - "Treat any change to supplier bank details as a fraud risk until it is confirmed by phone on a number you already hold."
  - "Peppol e-invoices arrive as structured data, which removes extraction entirely for those suppliers."
faqs:
  - q: "What software automates accounts payable in Australia?"
    a: "Common choices for small and mid sized businesses are Dext and Hubdoc for capturing and extracting invoices, ApprovalMax for approval workflows and purchase order matching, and the built in bill capture in Xero and MYOB. Larger organisations often use AP modules in their ERP. A custom pipeline sits alongside these when the matching or routing rules are specific to the business."
  - q: "How accurate is invoice OCR?"
    a: "Modern extraction reads clean PDFs from regular suppliers well, and struggles more with scanned paper, handwritten dockets, unusual layouts and multi page invoices with many line items. The right question is not the average accuracy but what happens to the fields the system is unsure about. A good pipeline sends those to a person and learns from the corrections."
  - q: "What must a supplier's tax invoice include?"
    a: "For taxable sales under $1,000, the ATO lists seven details: that it is intended to be a tax invoice, the seller's identity and ABN, the date, a description with quantity and price, the GST amount and the extent each sale is taxable. For sales of $1,000 or more it must also show the buyer's identity or ABN. Your pipeline can check these fields before you claim GST credits."
  - q: "How do we stop invoice fraud?"
    a: "Never act on a change of bank details received by email alone. Confirm it by calling the supplier on a number you already hold, require a second person to approve any bank detail change, and have the system flag invoices where the account differs from the supplier master record. The ATO cites National Anti-Scam Centre figures of more than $166 million lost to payment redirection and false billing scams in 2025."
  - q: "Can Xero or MYOB receive bills from another system?"
    a: "Yes. In Xero, supplier bills are invoices of the accounts payable type in the Accounting API, which also supports attaching the source PDF. MYOB's AccountRight API has a Purchase Bill endpoint. Both platforms publish API limits, so a pipeline posting high volumes needs to batch and queue its calls."
  - q: "Do we have to accept e-invoices?"
    a: "Businesses aren't required to use Peppol e-invoicing in Australia. It is voluntary for businesses, and the mandates sit with Commonwealth agencies. Many accounting products can register you to receive e-invoices as part of your subscription, which is a cheap way to remove extraction for suppliers who already send them."
sources:
  - title: "Tax invoices"
    url: "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices"
    publisher: "Australian Taxation Office"
  - title: "About Peppol eInvoicing"
    url: "https://www.ato.gov.au/businesses-and-organisations/einvoicing/about-peppol-einvoicing"
    publisher: "Australian Taxation Office"
  - title: "eInvoicing news and statistics"
    url: "https://www.ato.gov.au/businesses-and-organisations/einvoicing/einvoicing-news-and-statistics"
    publisher: "Australian Taxation Office"
  - title: "Accounting API: Invoices"
    url: "https://developer.xero.com/documentation/api/accounting/invoices"
    publisher: "Xero Developer"
  - title: "OAuth 2.0 API limits"
    url: "https://developer.xero.com/documentation/guides/oauth2/limits/"
    publisher: "Xero Developer"
  - title: "AccountRight API: Purchase Bill"
    url: "https://developer.myob.com/api/accountright/v2/purchase/bill/"
    publisher: "MYOB Developer"
  - title: "Direct Entry (BECS)"
    url: "https://www.auspaynet.com.au/resources/direct-entry"
    publisher: "Australian Payments Network"
  - title: "ApprovalMax pricing and plans (Xero, QuickBooks Online, NetSuite)"
    url: "https://www.approvalmax.com/pricing"
    publisher: "ApprovalMax"
  - title: "Payment Times Reporting Scheme"
    url: "https://paymenttimes.gov.au/"
    publisher: "Payment Times Reporting Regulator"
related:
  - title: "Peppol e-invoicing in Australia"
    href: "/guides/peppol-e-invoicing-australia"
  - title: "AI for accounting firms"
    href: "/solutions/ai-for-accounting-firms"
  - title: "Bookkeeping software and automation"
    href: "/solutions/bookkeeping-software-automation"
  - title: "How much does workflow automation cost?"
    href: "/guides/workflow-automation-cost"
  - title: "How to automate email with AI"
    href: "/guides/ai-email-inbox-automation"
  - title: "How much does AI document processing cost?"
    href: "/guides/document-processing-cost"
service:
  title: "AI document processing"
  href: "/services/ai-document-processing"
disclaimer: tax
---

## Where does accounts payable time actually go?

**In most finance teams, AP time goes on three things: getting invoices out of inboxes, keying them into the ledger, and chasing people to approve them.** Each has a different fix, so measure before you buy.

Track a fortnight of invoices and note, for each one, how it arrived, how long it took to enter, and how many days it waited for approval. A typical picture looks like this:

| Step | What happens today | Time sink | Automation that fixes it |
|---|---|---|---|
| Receive | Invoices arrive in a shared inbox, personal inboxes, the post and supplier portals | Finding and forwarding | One capture address, inbox rules, Peppol receive |
| Extract | Someone types supplier, date, amounts, GST and lines | Keying and errors | Extraction with confidence scores |
| Code | Choose account, tax code, job or cost centre | Looking up the right code | Supplier defaults and PO based coding |
| Match | Compare to the purchase order and delivery | Paper trails and phone calls | Two and three way matching rules |
| Approve | Email the manager, wait, chase | Days of waiting | Routed approvals with reminders and limits |
| Post and pay | Enter in Xero or MYOB, build the payment batch | Double handling | Automatic posting and payment files |

If approvals are the bottleneck, a capture tool alone won't help. If keying is the bottleneck but you have few suppliers, Peppol may remove most of it for free.

## When are Dext, Hubdoc and ApprovalMax enough?

**For a single entity with mostly regular suppliers and simple approvals, off the shelf tools are usually the right answer.** They are proven, cheap per invoice and already connected to Xero and MYOB.

Use the standard stack when:

- You run one or two entities on Xero or MYOB.
- Most invoices are clean PDFs from repeat suppliers.
- Approvals follow simple rules, such as amount thresholds by manager.
- You don't need to match invoices to jobs or detailed purchase orders.

Dext and Hubdoc capture and extract; ApprovalMax handles multi step approvals and purchase order matching for Xero and some other ledgers; Xero and MYOB also offer their own bill capture. Check each vendor's current pricing, as plans change often.

## When does a custom pipeline pay?

**A custom pipeline pays when your matching, coding or routing rules are specific to your business and the volume is high enough to matter.** These are the patterns that usually push businesses past the standard tools:

1. **Job costing.** Each invoice line must land against a job, stage or project code from your job system, not just a ledger account.
2. **Many entities.** A group with several companies needs invoices routed to the right entity and approver automatically.
3. **Odd suppliers.** Statements with many dockets, freight invoices with surcharges, or overseas invoices in other currencies.
4. **Purchase orders outside the ledger.** The POs live in a job or inventory system the AP tool can't see.
5. **Custom approval logic.** Approvals that depend on the job, the budget remaining or the supplier's risk rating.

A custom pipeline doesn't have to replace your tools. Often it sits in the middle: it receives invoices, extracts and matches them, and posts finished bills into Xero or MYOB. Our [AI document processing service](/services/ai-document-processing) describes how we build the extraction layer.

## How do extraction accuracy and the review queue work?

**Every extracted field should carry a confidence score, and anything below a threshold goes to a person.** That is what makes automation safe: the system handles the easy invoices and shows staff exactly where it is unsure.

Design the review queue around these rules:

- **Field level confidence.** Supplier, ABN, invoice number, date, total and GST are checked individually, not as one score for the whole invoice.
- **Cross checks.** The GST should be about one eleventh of a GST inclusive total for fully taxable invoices; line items should add to the total; the ABN should match the supplier record.
- **Tax invoice checks.** The ATO's rules say a tax invoice for a sale of $1,000 or more must also show the buyer's identity or ABN. Flag invoices missing required fields before GST credits are claimed.
- **Duplicates.** Same supplier, same invoice number or same amount and date within a window goes to review.
- **Learning from corrections.** When staff fix a field, record it, so supplier specific rules improve.

Measure two numbers each month: the share of invoices that pass with no human touch, and the error rate found after posting. The first should rise and the second should stay near zero.

## How do two and three way matching work?

**Two way matching checks the invoice against the purchase order; three way matching also checks it against what was actually received.** Matching is what turns "someone checked it" into a rule you can audit.

| Check | Two way | Three way |
|---|---|---|
| Supplier matches the PO | Yes | Yes |
| Prices match the PO within tolerance | Yes | Yes |
| Quantities invoiced match the PO | Yes | Yes |
| Quantities invoiced match goods received | No | Yes |
| Typical use | Services, subscriptions | Stock, materials, freight |

Set tolerances in dollars and percentages, for example within $5 or 1%, and route anything outside them to the buyer who raised the PO. Partial deliveries and backorders need explicit rules, or every one becomes an exception.

## How do you stop invoice fraud and payment redirection?

**Treat any change to a supplier's bank details as a fraud attempt until it is confirmed through a channel you already trust.** Business email compromise works by sending a convincing invoice or email from a real or lookalike supplier address.

The ATO, citing the National Anti-Scam Centre, reports more than $166 million lost to payment redirection and false billing scams in 2025, up from $152 million in 2024. Build these controls into the pipeline:

1. **Bank details live only in the supplier master record**, never read from an invoice and applied automatically.
2. **Any change request** triggers a hold and a call to the supplier on a number already on file, not one from the email.
3. **Two people approve** a bank detail change, and the change is logged.
4. **The system flags** any invoice showing account details that differ from the master record.
5. **New suppliers** are verified before the first payment, including an ABN check.

Peppol helps here too: the ATO notes that e-invoices travel between accredited access points using the buyer's and supplier's ABNs, which lowers the risk of intercepted or fake invoices compared with email. It still recommends applying your normal checks before paying.

## Posting to Xero or MYOB and producing payment files

**Approved invoices should post to the ledger as bills with the source document attached, and payments should go out as a bank file, not retyped.** That removes the last two rounds of double handling.

- **Xero.** Supplier bills are created through the Accounting API's Invoices endpoint as the accounts payable type, with the PDF uploaded as an attachment. Xero publishes per organisation API limits, including lower daily limits for uncertified apps, so high volume pipelines queue and batch their calls.
- **MYOB.** The AccountRight API has a Purchase Bill endpoint for the same job.
- **Payment files.** Australian banks accept bulk payment files in the direct entry (ABA) format used on BECS, which the Australian Payments Network administers. Xero and MYOB can produce these from a payment batch, or a custom pipeline can produce them for approval in your bank portal.

Our [Xero and MYOB integration service](/services/xero-myob-integration) covers the posting side in depth.

## Why Peppol e-invoices remove extraction altogether

**A Peppol e-invoice arrives as structured data, so there is nothing to read or key.** For suppliers who can send them, it is the cleanest input you can get.

The ATO reports more than 430,000 ABNs registered on the network, and many accounting products can register you to receive e-invoices within your existing subscription. The ATO also says an e-invoice issued under the A-NZ specification with all the mandatory data meets the tax invoice requirements. Start by registering to receive, then ask your highest volume suppliers whether they can send. Our guide to [Peppol e-invoicing in Australia](/guides/peppol-e-invoicing-australia) explains how it works.

Large businesses in the Payment Times Reporting Scheme have a further reason: the ATO notes they must now report their e-invoicing policies and practices and flag e-invoices in their payment times reports.

## What does AP automation cost, and how do you start?

**Indicative builds run from about $20,000 for extraction with a review queue to $200,000 for a full AP platform.** These are our estimates of typical Australian market pricing (AUD, ex GST), not quotes.

| Build | What it includes | Indicative range (AUD, ex GST) |
|---|---|---|
| Extraction plus review queue | Capture, field extraction, confidence scores, posting bills to Xero | $20,000 to $50,000 |
| Matching and approvals | Above, plus PO and receipt matching, routed approvals, several entities | $50,000 to $120,000 |
| Full AP platform | Above, plus Peppol receive, payment files, fraud controls, reporting | $90,000 to $200,000 |

**Start with one supplier group.** Pick 10 to 20 suppliers who send the most invoices, run them through the pipeline for a month alongside your current process, and compare touch rates and errors. Expand only when the numbers hold. Our [workflow automation cost guide](/guides/workflow-automation-cost) shows how to work out payback from hours saved.

## How AWLabs approaches AP automation

We start with a sample of your real invoices and your approval rules. In a Development Consult we will tell you if Dext, Hubdoc or ApprovalMax already covers your needs, which is often the case for single entity businesses. Where a custom pipeline is the better fit, a paid Discovery Audit tests extraction on your own suppliers and maps the matching and approval rules; its fee is credited in full against the build. You then receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, and we design the review queue with your finance team, because they are the ones who will live with it. For accounting practices, see [AI for accounting firms](/solutions/ai-for-accounting-firms).
