---
title: "How much does AI document processing cost? Australian prices per page and per build (2026)"
metaTitle: "AI Document Processing Cost in Australia (2026 Guide)"
description: "AI document processing costs in Australia: per page prices for Textract, Azure and Google, LLM extraction, human review, build ranges and payback maths."
eyebrow: "Cost guide"
category: cost
published: 2026-11-08
updated: 2026-11-08
summary: "For common document types, cloud OCR and extraction services charge from well under a cent to about 7 cents (US) a page at the time of writing, depending on what you extract. Building a production pipeline is the bigger cost: Sandlabs, a Sydney AI firm, publishes $15,000 to $30,000 for one document type, $30,000 to $60,000 for three to five types with classification, and $60,000 to $120,000 for an enterprise platform. These are market figures, not our prices. In most workloads the largest running cost is not the AI at all but the people who review uncertain results."
takeaways:
  - "Per page AI costs are small: Azure lists its prebuilt invoice and form models at about AU$14 per 1,000 pages in Australia East, and Textract's expense analysis is US$10 per 1,000 pages in Sydney."
  - "Human review of low confidence results usually costs more each month than the AI services combined."
  - "Custom extraction models cost about three times the prebuilt price per page in Azure, so use prebuilt models where they fit."
  - "An LLM pass for checking or extracting fields adds a few dollars per 1,000 pages on a small model."
  - "Payback depends on whether saved hours are actually redeployed, not on the per page price."
faqs:
  - q: "How much does AI document processing cost per page?"
    a: "At the time of writing, plain text OCR is about US$1.50 per 1,000 pages on Amazon Textract in Sydney and AU$2.13 on Azure Document Intelligence in Australia East. Prebuilt invoice and form models are about US$10 to AU$14 per 1,000 pages, and custom extraction about AU$43 per 1,000 pages on Azure. Prices change, so check each vendor's page."
  - q: "How much does it cost to build an AI document processing system?"
    a: "Sandlabs publishes $15,000 to $30,000 for a production pipeline handling one document type, $30,000 to $60,000 for three to five types with classification, and $60,000 to $120,000 for an enterprise platform with monitoring. Integration into your systems and the review interface drive where you land."
  - q: "What is the best AI for invoice processing?"
    a: "For standard Australian tax invoices, the prebuilt invoice or expense models from Azure, AWS or Google are a sensible starting point and are cheap per page. Add a language model when layouts vary widely or you need judgement, such as matching lines to purchase orders. Test on a sample of your own invoices before choosing."
  - q: "Can document AI run in Australia?"
    a: "Textract has Sydney region pricing and Azure Document Intelligence is priced in Australia East at the time of writing. You must choose those regions when you set up, and check where any language model in the pipeline processes data."
  - q: "How accurate is AI document extraction?"
    a: "It depends on your documents. Clean, typed invoices extract very reliably; handwriting, poor scans and unusual layouts do not. Measure field level accuracy on a labelled sample of your own files, then set confidence thresholds that send uncertain fields to a person."
  - q: "Is Microsoft's document AI the same as Copilot?"
    a: "No. Azure AI Document Intelligence is a developer service that extracts structured data from documents, billed per page. Microsoft 365 Copilot is a per user assistant inside Office apps. A processing pipeline that writes to your systems normally uses the developer service."
sources:
  - title: "Amazon Textract pricing"
    url: "https://aws.amazon.com/textract/pricing/"
    publisher: "Amazon Web Services"
  - title: "AWS Price List: Amazon Textract, Asia Pacific (Sydney)"
    url: "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonTextract/current/ap-southeast-2/index.json"
    publisher: "Amazon Web Services"
  - title: "Azure AI Document Intelligence pricing"
    url: "https://azure.microsoft.com/en-au/pricing/details/ai-document-intelligence/"
    publisher: "Microsoft Azure"
  - title: "Azure Retail Prices API (Document Intelligence, Australia East)"
    url: "https://prices.azure.com/api/retail/prices"
    publisher: "Microsoft Azure"
  - title: "Document AI pricing"
    url: "https://cloud.google.com/document-ai/pricing"
    publisher: "Google Cloud"
  - title: "Pricing"
    url: "https://platform.claude.com/docs/en/about-claude/pricing"
    publisher: "Anthropic"
  - title: "Intelligent document processing"
    url: "https://sandlabs.com.au/blog/intelligent-document-processing"
    publisher: "Sandlabs"
  - title: "Chapter 11: APP 11 Security of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information"
    publisher: "OAIC"
  - title: "Exchange rates"
    url: "https://www.rba.gov.au/statistics/frequency/exchange-rates.html"
    publisher: "Reserve Bank of Australia"
related:
  - title: "AI document processing"
    href: "/services/ai-document-processing"
  - title: "How to automate invoice processing"
    href: "/guides/how-to-automate-invoice-processing"
  - title: "How much does AI development cost in Australia?"
    href: "/guides/ai-development-cost-australia"
  - title: "What does it cost to run an LLM in production?"
    href: "/guides/llm-running-costs"
  - title: "How to digitise paper forms"
    href: "/guides/how-to-digitise-paper-forms"
service:
  title: "AI document processing"
  href: "/services/ai-document-processing"
disclaimer: financial
---

## What does document AI cost per page?

**For the common extraction types, the cloud services that read documents cost between about 0.15 and 7 US cents a page at the time of writing, and the price depends on what you ask them to extract.** Reading plain text is cheapest; pulling tables, form fields and answers to specific questions costs more. Prices below are list prices for the first million pages a month, ex GST.

| What you extract | Amazon Textract, Sydney (USD per 1,000 pages) | Azure Document Intelligence, Australia East (AUD per 1,000 pages) | Google Document AI (USD per 1,000 pages) |
|---|---|---|---|
| Plain text (OCR) | $1.50 | $2.13 | $1.50 (Enterprise OCR, after 1,000 free) |
| Layout (text plus structure) | $4.00 | $14.21 | $10.00 (Layout Parser) |
| Tables | $15.00 | See layout | See Form Parser |
| Form fields (key and value pairs) | $50.00 | $14.21 (prebuilt models) | $30.00 (Form Parser) |
| Invoices and receipts | $10.00 (Analyze Expense) | $14.21 (prebuilt invoice and receipt) | $0.10 per document of up to 10 pages (invoice parser) |
| Forms, tables and queries together | $70.00 | Not a single tier | Not a single tier |
| Custom extraction | $25.00 (custom queries) | $42.63 | $30.00 (custom extractor) |
| Document classification | Not a single tier | $4.26 | $5.00 (custom classifier) |

Textract's Sydney prices come from AWS's published price list for the ap-southeast-2 region; Azure's come from Microsoft's retail price list for Australia East in AUD. Google lists prices in USD without a regional split on its pricing page. Volume discounts apply above a million pages a month on all three.

## What does "document processing" mean now?

**Modern document processing combines three steps: reading the page (OCR), working out what kind of document it is (classification), and pulling the fields you need into a system (extraction).** Five years ago, extraction meant templates that broke whenever a supplier changed its invoice layout. Today, prebuilt models handle common documents, and a language model can extract fields from layouts it has never seen.

A language model pass costs little on a small model. At the time of writing, Anthropic lists Claude Haiku 4.5 at US$1 per million input tokens and US$5 per million output tokens, and Claude Sonnet 5 at US$2 and US$10. If a page is about 2,000 input tokens (the OCR text plus instructions) and 300 output tokens, Haiku costs about US$3.50 per 1,000 pages and Sonnet 5 about US$7. Images sent directly to a model use more tokens, so measure on your own files. Our [LLM running costs guide](/guides/llm-running-costs) covers the arithmetic.

## Which documents are expensive to automate?

**The documents that cost most to automate are the ones people find hard to read too.** A typed supplier invoice from an accounting package is cheap: prebuilt models handle it, and validation against the supplier list catches most errors. Costs rise with:

- **Handwriting**, such as completed paper forms, delivery dockets and clinical notes, which pushes up review rates.
- **Poor scans and phone photos**, where skew, shadows and low resolution reduce confidence on every field.
- **Many layouts for the same document type**, such as referrals from hundreds of practices, which favour a language model over templates.
- **Multi page bundles** that must be split into separate documents before extraction.
- **Fields that need judgement**, such as whether a clause is unusual or a referral is urgent, which need a model, rules and a person.

If most of your volume falls into the first category, start there and leave the hard documents to a person until the pipeline has proved itself.

## Worked examples at 1,000, 20,000 and 200,000 pages a month

**At every volume, the AI line is small and the review line is what you manage.** These examples use list prices converted at the RBA's 6 November 2026 rate of US$0.69 per A$1, and a fully loaded staff cost we assume at $45 an hour. Review rates and minutes per document are assumptions; your own pilot will give real figures.

| | Invoices, 1,000 pages | Application forms, 20,000 pages (5,000 forms) | Medical referrals, 200,000 pages (100,000 referrals) |
|---|---|---|---|
| Extraction service | Azure prebuilt invoice: about $14 | Azure custom extraction: about $853 | Textract layout: US$800, about $1,159 |
| Language model pass | Haiku 4.5 check: about $5 | Sonnet 5 extraction: about $203 | Haiku 4.5 extraction: about $1,014 |
| Human review (assumed) | 15% of invoices × 2 minutes: $225 | 10% of forms × 6 minutes: $2,250 | 8% of referrals × 2 minutes: $12,000 |
| Monthly running total (AUD, ex GST, before hosting) | about $244 | about $3,306 | about $14,173 |
| Manual baseline (assumed) | 4 minutes an invoice: $3,000 | 8 minutes a form: $30,000 | 3 minutes a referral: $225,000 |

Add hosting for the pipeline, the review screen and storage. Sandlabs puts infrastructure at $100 to $500 a month for its builds, with AI API spend of $200 to $2,000 a month depending on volume.

## Human review: the cost that decides accuracy

**Every production pipeline needs a rule for what a person checks, and that rule sets both your accuracy and your running cost.** Extraction services return a confidence score for each field. Set the threshold high and more fields go to a person; set it low and more errors reach your accounting or case system.

Ways to cut review cost without cutting accuracy:

1. Validate against data you already hold: ABN lookup, supplier master, purchase order totals, Medicare provider numbers.
2. Review only the uncertain field, not the whole document.
3. Route by document type, so simple documents pass straight through and complex ones get a closer look.
4. Feed corrections back into a test set, and re measure accuracy every month.
5. Track review rate as a headline metric next to cost per document.

For a step by step version of this for supplier bills, see our guide to [automating invoice processing](/guides/how-to-automate-invoice-processing).

## What does it cost to build?

**Build cost is set by the number of document types, the integrations and the review interface, not by the AI service.** Sandlabs publishes these 2026 ranges for its own document processing work (currency not stated; presented as Australian pricing):

| Engagement | What's included | Published cost | Timeline |
|---|---|---|---|
| Discovery sprint | Assess documents, design the pipeline, build a proof of concept | $5K to $15K | 1 to 2 weeks |
| Single document type | Production pipeline for one document category | $15K to $30K | 2 to 4 weeks |
| Multi document system | Three to five document types with classification | $30K to $60K | 4 to 8 weeks |
| Enterprise platform | Full document processing platform with monitoring | $60K to $120K | 2 to 4 months |

Sandlabs also puts maintenance at 15% to 20% of the build each year. Pipelines spanning several business units, with audit trails, records retention and many downstream systems, can go well beyond these ranges; at an assumed agency day rate of $1,100 to $1,500, 120 to 260 days of work is $132,000 to $390,000. Our [AI development cost guide](/guides/ai-development-cost-australia) covers how those day rate assumptions are set.

## Three year cost of the application forms example

**Over three years the build is a minority of the cost, and the saving depends on what happens to the freed hours.** Using the 20,000 page example above:

| Cost line | Assumption | Three year total (AUD, ex GST) |
|---|---|---|
| Build | Multi document system, $30K to $60K | $30,000 to $60,000 |
| Extraction and model usage | About $1,056 a month | about $38,000 |
| Hosting | $100 to $500 a month | $3,600 to $18,000 |
| Human review | $2,250 a month | $81,000 |
| Maintenance, years 2 and 3 | 15% to 20% of build a year | $9,000 to $24,000 |
| **Total** | | **about $162,000 to $221,000** |

The manual baseline in the same example is $30,000 a month, or about $1.08 million over three years. That gap only becomes a real saving if the hours are moved to other work or not rehired. If the same people keep doing the same job with a new screen, the business has paid for a pipeline and kept the cost. Our guide to [measuring AI ROI](/guides/measure-ai-roi) sets out how to measure it honestly.

## Australian hosting for sensitive documents

**Document AI services can run in Australian regions, but only if you choose them, and every step in the pipeline needs checking.** Textract has Sydney region pricing and Azure Document Intelligence is priced in Australia East at the time of writing. A language model step, a logging tool or a review app hosted elsewhere can still move data offshore.

Scanned application forms and medical referrals contain personal and often health information. The OAIC's guidance on APP 11 says it requires an entity to take active measures to keep personal information secure and to actively consider whether it still needs to keep it. For a document pipeline that means access controls on the review queue, deleting source images once they are no longer needed, and logging who viewed what. Our [model hosting comparison](/guides/bedrock-vs-azure-openai-vs-vertex-australia) covers which language models can run in Australian regions.

## How AWLabs approaches document processing

We start with a labelled sample of your real documents and measure accuracy on it before anything goes to production. We use prebuilt models where they are good enough, add a language model only where layouts vary or judgement is needed, and design the review queue as carefully as the extraction. Documents and data stay in your cloud account, in the region you choose. Senior engineers lead every build.

The first step is a Development Consult, a 15 minute call. A paid Discovery Audit then measures your documents and volumes, and you get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Our [AI document processing service](/services/ai-document-processing) has the detail.
