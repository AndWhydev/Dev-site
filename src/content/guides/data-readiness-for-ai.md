---
title: "How to prepare your data for AI: a readiness guide for Australian businesses"
metaTitle: "How to Prepare Your Data for AI: A Readiness Checklist"
description: "How to make business data AI ready: find where knowledge lives, fix permissions before Copilot finds them, clean stale and sensitive files, structure for RAG."
eyebrow: "How to guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "Data is ready for AI when you know where it is, who owns it, who can see it, which version is current, and what must never be used. For most Australian businesses that means four jobs before any model is involved: an inventory of documents and systems with an owner for each, a permissions clean up (assistants such as Microsoft Copilot work within existing permissions, so oversharing becomes visible), removal of stale, duplicate and sensitive content you no longer need under APP 11.2, and enough structure, such as titles, dates, metadata and clean tables, for retrieval and analytics to work."
takeaways:
  - "Start with an inventory: every place knowledge lives, who owns it and how current it is. Most of the work is found here."
  - "Fix permissions before rolling out an AI assistant. Microsoft says Copilot operates within existing permissions, so it can surface whatever users were already allowed to open."
  - "Delete or de-identify personal information you no longer need. APP 11.2 already requires it, and it is cheaper than securing it inside an AI system."
  - "Unstructured documents need titles, dates, owners and a clear current version; structured data needs agreed definitions and one source of truth per measure."
  - "Keep a short list of data that must never reach a model, and enforce it in code rather than in a policy alone."
faqs:
  - q: "What does AI ready data mean?"
    a: "It means data that an AI system can find, is allowed to use, and can trust. In practice: it is inventoried with an owner, permissions match who should see it, the current version is clear, sensitive information is controlled or removed, and documents and tables carry enough structure to be retrieved and interpreted correctly."
  - q: "How long does it take to prepare data for AI?"
    a: "For a single, contained use case such as a policy and procedures assistant for one team, two to six weeks of inventory, clean up and permission fixes is a typical range. A whole of business rollout across years of shared drives can take months, and is best done in stages, one content area at a time. These are typical ranges, not a quote."
  - q: "Do we need a data warehouse before using AI?"
    a: "Not for document based use cases such as search or drafting from your own content; those need a clean document store and a retrieval layer. You need consistent structured data, often a small warehouse, when you want AI to answer questions about numbers across systems, such as sales by region or job margins."
  - q: "Why did Copilot show staff documents they should not see?"
    a: "Because they could already open them. Microsoft states that Copilot operates within existing permissions and access controls, so overshared sites, broad sharing links and old team folders become easy to find through a simple question. The fix is permissions, not the AI."
  - q: "Should we remove personal information before using AI?"
    a: "Remove what you no longer need, because APP 11.2 already requires reasonable steps to destroy or de-identify personal information once it is no longer needed. For the rest, control which AI tools can access it and log that access, under your privacy policy and collection notices."
  - q: "Can we use old emails and documents to train or ground an AI system?"
    a: "Check three things first: whether the use fits the purpose the information was collected for under APP 6, whether the content is current and accurate enough to rely on, and whether contracts or confidentiality obligations restrict it. Grounding an assistant in old, superseded documents is a common source of confidently wrong answers."
sources:
  - title: "Microsoft Copilot security: preventing oversharing"
    url: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-ai-security"
    publisher: "Microsoft Learn"
  - title: "Secure and govern Microsoft Copilot: foundational deployment guidance"
    url: "https://learn.microsoft.com/en-us/sharepoint/get-ready-copilot-sharepoint-advanced-management"
    publisher: "Microsoft Learn"
  - title: "Chapter 11: APP 11 Security of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Guidance on privacy and the use of commercially available AI products"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Guidance for AI adoption: implementation guidance"
    url: "https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-implementation-guidance"
    publisher: "National AI Centre"
related:
  - title: "What is RAG?"
    href: "/guides/what-is-rag"
  - title: "Copilot vs a custom AI assistant"
    href: "/guides/copilot-vs-custom-ai-assistant"
  - title: "Privacy Act and AI: how the APPs apply"
    href: "/guides/privacy-act-and-ai"
  - title: "Data engineering"
    href: "/services/data-engineering"
  - title: "From AI pilot to production"
    href: "/guides/ai-pilot-to-production"
  - title: "How to measure the ROI of an AI project"
    href: "/guides/measure-ai-roi"
  - title: "How much does a data warehouse cost in Australia?"
    href: "/guides/data-warehouse-cost"
service:
  title: "AI readiness assessment"
  href: "/services/ai-readiness-assessment"
---

## What does "AI ready data" mean for a typical business?

**Data is AI ready when an AI system can find it, is permitted to use it, and can trust what it says.** That is less about formats and more about housekeeping: knowing where information lives, who owns it, who can see it, and which version is current.

For a typical Australian business, knowledge is spread across a Microsoft 365 or Google Workspace tenant, a few shared drives, inboxes, a CRM, an accounting system such as Xero or MYOB, and a line of business system for jobs, matters, patients or stock. AI makes all of it easier to search. That is the opportunity, and it is also why messy data becomes visible problems so quickly.

The rest of this guide works through the preparation in order. Each step reduces risk and improves answer quality, and you can stop at the step your first use case needs.

## Step 1: find it, with an inventory of documents, systems and owners

**Start with a simple inventory: every place knowledge lives, what it contains, who owns it, how current it is and how sensitive it is.** A spreadsheet is enough. Most of the surprises in an AI project turn up here.

| Field | Example entry | Why it matters for AI |
|---|---|---|
| Location | SharePoint site "Operations", folder "Procedures" | Defines what the retrieval layer will index |
| Content type | Procedures, templates, policies | Shapes chunking and metadata |
| Owner | Operations manager | Someone must confirm what is current |
| Last meaningful update | Mostly 2021 to 2023 | Stale content produces wrong answers |
| Sensitivity | Internal; some staff personal information | Drives access controls and exclusions |
| Who can access | All staff plus two external guests | Flags oversharing before an assistant finds it |
| Keep, fix or retire | Fix: archive superseded versions | Turns the inventory into a work plan |

Scope it to the first use case. If the first assistant will answer HR and policy questions, inventory the HR and policy content thoroughly and leave the sales archive for later.

## Step 2: fix permissions, because Copilot only exposes what SharePoint already allowed

**Assistants built into Microsoft 365 or Google Workspace answer from content the user can already access, so any oversharing becomes a search away.** Microsoft states that Copilot operates within existing permissions and access controls, and that overshared or poorly governed content can affect results and increase risk.

The usual culprits are sites shared with "everyone", sharing links that grant access to anyone in the organisation, project folders never locked down after the project ended, and guest accounts that were never removed. Microsoft's deployment guidance for Copilot is organised around remediating oversharing, setting guardrails and meeting regulatory obligations, and it notes that SharePoint Advanced Management, which provides tools for managing sharing and access, is included with a Copilot licence. Use those reports, or the equivalent in your platform, before rollout.

The same rule applies to a custom assistant. A well built system retrieves only documents the asking user is entitled to see, enforced at retrieval time. If your assistant indexes everything with one service account, it has bypassed your permissions. Our comparison of [Copilot and a custom AI assistant](/guides/copilot-vs-custom-ai-assistant) covers when each approach fits.

## Step 3: clean it, removing duplicates, stale versions and sensitive information

**Remove what is out of date, duplicated or no longer needed before you index anything, because a retrieval system treats a 2019 draft and the current policy as equally valid.** Cleaning is the step most likely to improve answer quality.

1. **Retire superseded versions.** Archive old drafts and copies such as "final v3", or exclude them from indexing.
2. **Mark the current version.** One authoritative copy per document, with an owner and a review date.
3. **Delete what you don't need.** APP 11.2 requires reasonable steps to destroy or de-identify personal information once it is no longer needed for any permitted purpose, unless a law or court order requires you to keep it. Old applicant files, scanned identity documents and customer exports on shared drives are common examples.
4. **Find sensitive content.** Search for health information, tax file numbers, bank details and identity documents, and either move them to controlled locations or exclude them from AI access.

## Step 4: structure documents with metadata, chunking and clean tables

**Retrieval works best on documents with clear titles, headings, dates, owners and a stated document type.** You don't need to rewrite your content, but you do need to make it legible to a machine.

- **Metadata:** title, document type, owner, effective date, review date, audience. Even three or four fields let a [RAG system](/guides/what-is-rag) filter to the current, relevant documents before it searches.
- **Headings:** documents with real heading structure split into sensible chunks; long unformatted text and scanned images do not.
- **Tables:** tables pasted as images or built with spaces are unreadable to most pipelines. Convert key tables, such as price lists or rate cards, into real tables or a structured source.
- **Scans:** run text recognition on scanned PDFs you want included, and check a sample, because handwriting and stamps often fail.

## Step 5: structured data needs definitions and one source of truth

**For AI that answers questions about numbers, the hard part is agreeing what each number means and which system holds the official figure.** Ask "what was our revenue last quarter?" and the CRM, the accounting system and the board pack may each give a different answer.

Write a short data dictionary for the measures your first use case needs: the definition, the source system, the owner and known quirks. Where figures come from several systems, a small warehouse or reporting layer that reconciles them is usually the right foundation, and it is what our [data engineering](/services/data-engineering) work typically builds before any AI sits on top. Check quality on the fields that matter: missing values, duplicate customers, inconsistent codes and dates in mixed formats.

## Step 6: privacy and retention, and what should never go near a model

**Keep a short written list of data classes that must never reach an AI model, and enforce it in the system, not just in a policy.** For most businesses the list includes credentials, payment card details, tax file numbers, government identifiers and, unless the use case specifically needs it and has the right basis, health information.

The OAIC's guidance adds two points to keep in mind. Privacy obligations apply to personal information going into an AI system and to outputs that contain it, and information an AI system generates or infers about an identifiable person, even if wrong, is personal information that must be handled under the APPs. So your preparation should cover outputs too: where answers are logged, who can see the logs and how long they are kept. Our guide to the [Privacy Act and AI](/guides/privacy-act-and-ai) covers the APPs in detail, and APP 11 itself expects technical and organisational measures for security and for destroying information you no longer need.

## A readiness checklist and typical effort

**Use the checklist below for your first use case, not the whole business.** The effort figures are typical ranges for a single, contained use case and assume someone in the business can confirm what is current.

- [ ] Inventory completed for the content in scope, with an owner for each location.
- [ ] Oversharing report run; broad links, "everyone" access and stale guests removed.
- [ ] Superseded versions archived or excluded; current versions marked.
- [ ] Personal information no longer needed destroyed or de-identified.
- [ ] Sensitive data classes found and excluded or controlled.
- [ ] Minimum metadata applied: title, type, owner, effective date.
- [ ] Key tables converted to real tables or a structured source.
- [ ] Data dictionary written for the measures the use case needs.
- [ ] Never send list agreed and enforced in the pipeline.
- [ ] Logging and retention set for AI inputs and outputs.

| Scope | Typical effort |
|---|---|
| One team's procedures and policies (a few hundred documents) | 2 to 6 weeks |
| One department across several systems | 6 to 12 weeks |
| Whole of business, years of shared drives | Months, in stages |

## How AWLabs approaches this

Data readiness is the first workstream in our [AI readiness assessment](/services/ai-readiness-assessment), which is the Discovery Audit for AI work: we inventory the content for the first use case, run the permission and sensitivity checks, and turn the findings into a clean up plan the business can own. The build that follows is set out in a fixed price Schedule of Work with three options, and permission aware retrieval is built in rather than added later. If a use case isn't ready yet, the assessment says so and lists what needs to happen first.
