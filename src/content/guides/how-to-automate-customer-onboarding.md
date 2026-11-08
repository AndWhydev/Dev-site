---
title: "How to automate client onboarding in Australia, including AML/CTF tranche 2 checks"
metaTitle: "How to Automate Client Onboarding (AML/CTF Ready)"
description: "Automate client onboarding: forms, portals and e-sign, identity checks without storing ID copies, AML/CTF duties for accountants and lawyers, and Xero setup."
eyebrow: "How to guide"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "Automated onboarding replaces the chain of emails between a new client and your team with one flow: the client fills in a form or portal, uploads documents, has their identity verified, signs the engagement terms, and is then created in your CRM, practice software, Xero and file system at once. For accountants, lawyers, conveyancers and real estate agents it is now also a regulated process, because AUSTRAC began regulating certain services those businesses provide from 1 July 2026. As an indicative guide, a form, e-sign and CRM sync flow runs $10,000 to $30,000 (AUD, ex GST), and a branded portal with document collection and identity verification $40,000 to $90,000."
takeaways:
  - "Onboarding has three jobs: collect information, check it, and create the client in every system. Automate all three, not just the form."
  - "Since 1 July 2026, accountants, lawyers, conveyancers, real estate professionals and trust and company service providers that provide designated services have AML/CTF obligations."
  - "Verify identity through a verification service and keep the result, not a scanned copy of the licence or passport."
  - "The Privacy Act requires reasonable steps to destroy or de-identify personal information once you no longer need it."
  - "Ignition, FuseSign and similar tools cover proposals and signing well. A custom flow pays when you must join several systems and an AML/CTF risk process."
faqs:
  - q: "What should a client onboarding form include?"
    a: "Legal name and trading name, ABN or ACN where relevant, contacts and roles, billing details, the services being engaged, any information needed for conflict or eligibility checks, consent to receive documents electronically, and the documents you need to start work. Ask only for what you will use; every extra field is personal information you have to protect."
  - q: "Do accountants need to do AML/CTF checks now?"
    a: "Accountants that provide designated services are regulated by AUSTRAC from 1 July 2026. Not every accounting service is designated. AUSTRAC explains that a service is designated only if it is provided in the course of carrying on a business and falls within the listed activities, such as assisting with certain transactions or creating entities. Check AUSTRAC's guidance or get advice on which of your services are covered."
  - q: "Can we store copies of client ID documents?"
    a: "You can, but each copy is a breach risk you have to secure and later destroy. Under APP 11.2 you must take reasonable steps to destroy or de-identify personal information once it is no longer needed for a permitted purpose, unless a law requires you to keep it. A safer design records the verification result, the document type and reference, and who checked it, without keeping the image."
  - q: "Do clients have to agree to receive documents electronically?"
    a: "Under the Commonwealth Electronic Transactions Act, consent to electronic communications can be needed when dealing with people outside government, and it can be express or inferred from past dealings. Building an express consent tick box into the onboarding form removes doubt. Some industries have their own disclosure rules, so check yours."
  - q: "What is the best client onboarding software for accountants?"
    a: "Many Australian practices use Ignition for proposals, engagement letters and payment collection, and FuseSign or Annature for signing, connected to their practice management software. These suit standard engagements. A custom flow suits practices that need identity verification, AML/CTF risk scoring, several entities per client group and automatic setup across many systems."
  - q: "How do we measure whether onboarding automation worked?"
    a: "Measure three numbers before and after: elapsed days from first contact to ready to start work, staff minutes per new client, and the share of new clients missing documents at the start of work. The elapsed time usually improves most, because the client no longer waits for someone to send the next email."
sources:
  - title: "About the AML/CTF reforms"
    url: "https://www.austrac.gov.au/industry-and-business/about-amlctf-reforms/about-reforms"
    publisher: "AUSTRAC"
  - title: "Professional designated services (newly regulated entities)"
    url: "https://www.austrac.gov.au/new-austrac/designated-services-newly-regulated-entities/professional-designated-services"
    publisher: "AUSTRAC"
  - title: "Accountants"
    url: "https://www.austrac.gov.au/industry-and-business/your-industry/accountants"
    publisher: "AUSTRAC"
  - title: "Guide to securing personal information"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/handling-personal-information/guide-to-securing-personal-information"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Choice and consent under the ETA"
    url: "https://www.ag.gov.au/legal-system/electronic-signatures-documents-and-transactions/choice-and-consent-under-eta"
    publisher: "Attorney-General's Department"
  - title: "Code of Professional Conduct"
    url: "https://www.tpb.gov.au/code-professional-conduct"
    publisher: "Tax Practitioners Board"
related:
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
  - title: "Are electronic signatures legal in Australia?"
    href: "/guides/electronic-signatures-australia"
  - title: "AI for accounting firms"
    href: "/solutions/ai-for-accounting-firms"
  - title: "Real estate agency software"
    href: "/solutions/real-estate-agency-software"
  - title: "Privacy Act obligations for small business software"
    href: "/guides/privacy-act-small-business-software"
  - title: "How to automate document generation"
    href: "/guides/how-to-automate-document-generation"
service:
  title: "Workflow automation"
  href: "/services/workflow-automation"
disclaimer: legal
---

## What does good onboarding have to collect, check and create?

**Onboarding has three jobs: collect what you need from the client, check it, and create the client in every system you use.** Most businesses automate the first, keep doing the second by eye, and retype the third.

| Job | Typical items | What automation looks like |
|---|---|---|
| Collect | Legal name, ABN or ACN, contacts, billing details, documents, signed engagement | One form or portal, saved progress, automatic reminders |
| Check | Identity, entity details, ownership, conflicts, risk, eligibility | ABN lookup, identity verification service, rules that score risk and flag gaps |
| Create | CRM record, practice or matter record, Xero contact, folders, first tasks | One action that creates everything once checks pass |

Before you build, write the current process down step by step, including who sends which email and what they wait for. Most onboarding delays are waits between steps, not the steps themselves.

## Who now has AML/CTF customer due diligence duties?

**Since 1 July 2026, AUSTRAC regulates certain services provided by lawyers, accountants, conveyancers, real estate professionals, trust and company service providers, and dealers in precious stones and metals.** For these businesses, onboarding is now where customer due diligence happens.

AUSTRAC's reform pages set out the timeline:

| Date | Change |
|---|---|
| 7 January 2025 | Financial Transaction Reports Act 1988 repealed |
| 31 March 2025 | Changes to the tipping off offence started |
| 31 March 2026 | Changes for current reporting entities to program and due diligence requirements started, unless deferred under transitional rules |
| 1 July 2026 | Newly regulated entities providing designated services are regulated by AUSTRAC |

The important detail for system design is that obligations attach to designated services, not to professions. AUSTRAC explains that a service is designated only when it is provided in the course of carrying on a business and falls within the listed activities, so a litigation practice, for example, may provide no designated services at all. Your onboarding flow should therefore ask what the client is engaging you for, and trigger due diligence only for the services that need it.

AUSTRAC's guidance covers initial customer due diligence by customer type (individuals, sole traders, companies, trusts and others), delayed initial due diligence, reliance on another party's identification, ongoing monitoring and record keeping. A flow built for these rules needs a branch for each customer type and an audit trail of what was checked, when and by whom. Registered tax agents have a separate layer: the Tax Practitioners Board publishes guidance on letters of engagement under its Code of Professional Conduct, which your engagement template should reflect. Get advice on how the rules apply to your services; this page is general information, not legal advice.

## How do forms, portals and e-signing replace the email chain?

**Give the client one link that leads them through every step in order, saves their progress and tells your team only when something needs a person.** The design matters more than the tool.

1. **Start from the engagement.** The client chooses or confirms the services; that choice drives which questions and checks follow.
2. **Ask once.** Prefill anything you already know and look up the entity from its ABN rather than asking for the address.
3. **Collect documents by type.** A named slot for each document, with a clear list of what is still missing.
4. **Verify identity in the flow** rather than asking for a scan by email.
5. **Sign the engagement** at the end, once the details it refers to are confirmed. Record express consent to electronic communications.
6. **Remind automatically.** A gentle reminder after two days and again after five removes most of the chasing.
7. **Hand over to the team** only when everything is in, or when a check fails.

A simple flow can run on forms, an e-signing service and an automation platform. When clients need to return to see documents, sign later engagements or upload more files, it becomes a portal; our guide to [customer portal development](/guides/customer-portal-development) covers that build, and our guide to [electronic signatures](/guides/electronic-signatures-australia) covers the signing step.

## How do you verify identity without storing licences and passports?

**Use a verification service that checks the document details and returns a result, and store the result instead of the image.** That meets the purpose of the check while shrinking what you would lose in a breach. Our guide to [verifying identity in an Australian app](/guides/identity-verification-australia) compares the services.

The OAIC's guide to securing personal information explains APP 11.2: organisations must take reasonable steps to destroy or de-identify personal information once it is no longer needed for a permitted purpose, unless a law or court order requires them to keep it. A scanned licence sitting in an email thread or a shared folder for years is exactly what that rule targets.

A safer record of each check holds:

- The client and the person verified.
- The method (document verification, digital identity, or in person sighting).
- The document type and the last few characters of its number, not the full image.
- The result, the date and time, and the staff member or service that performed it.
- The retention date, after which the record is reviewed or deleted.

Where a law requires you to keep certain records, such as the AML/CTF record keeping rules, keep exactly what is required for the required period, encrypted and access controlled, and delete it on schedule.

## How do you create the client everywhere at once?

**Once checks pass, one action should create the client in your CRM, practice or matter system, accounting software and document store, with the same identifiers in each.** Retyping a new client four times is where errors start.

A typical sequence for an accounting practice:

1. Create or update the client group and entities in the practice management system.
2. Create the contact in Xero or MYOB with the legal name, ABN and billing details.
3. Create the client folder structure in SharePoint or your document system and file the signed engagement.
4. Create the first tasks: a welcome call, data requests and the first job.
5. Write the client's IDs from each system back to the CRM record so future automations can find them.

Our [CRM integration service](/services/crm-integration) and [Xero and MYOB integration](/services/xero-myob-integration) cover these connections.

## Where does AI help in onboarding?

**AI is useful for reading the documents clients send, chasing what is missing in plain language, and summarising risk for a person to decide.** It should not make the due diligence decision on its own.

- **Reading documents.** Extract entity names, ABNs, trustees and dates from trust deeds, company extracts and prior returns, and compare them with what the client entered. See our [AI document processing service](/services/ai-document-processing).
- **Chasing gaps.** Draft a reminder that lists exactly what is missing and why it is needed.
- **Summarising risk.** Pull the relevant facts into a one page summary for the person who approves the client, with links to the evidence.

Keep a person accountable for accepting a client, and keep personal information out of public AI tools. Our guide to the [Privacy Act and AI](/guides/privacy-act-and-ai) explains why.

## Ignition, FuseSign and other tools, or a custom flow?

**Use the tools when your engagements are standard and you have one or two systems to connect. Build a flow when onboarding spans many systems, entity structures and an AML/CTF risk process.**

| Need | Off the shelf tools | Custom flow |
|---|---|---|
| Proposals, engagement letters and payment collection | Ignition and similar tools fit well | Only if tightly tied to other rules |
| Signing | FuseSign, Annature, DocuSign | Embedded signing through their APIs |
| Identity verification | Some tools include it or integrate it | Chosen verification service, results stored your way |
| AML/CTF customer type branches and risk scoring | Limited | Built to your program |
| Client groups with many entities | Varies | Modelled properly |
| Creating records in four or more systems | Partial | Full |

## What does onboarding automation cost?

**Indicative builds run from about $10,000 for a form, e-sign and CRM sync flow to $140,000 for an AML/CTF risk workflow with an audit trail.** These are our estimates of typical Australian market pricing (AUD, ex GST), not quotes.

| Build | Indicative range (AUD, ex GST) |
|---|---|
| Form, e-sign and CRM sync flow | $10,000 to $30,000 |
| Branded onboarding portal with document collection and identity verification | $40,000 to $90,000 |
| AML/CTF risk assessment workflow with audit trail | $60,000 to $140,000 |

Verification services, e-signing and hosting carry their own per check or monthly fees on top.

## How AWLabs approaches onboarding automation

We start by mapping your current onboarding from first enquiry to first piece of work, with the waits marked. In the Development Consult we will tell you if Ignition, an e-signing tool and a few automations will do the job. Where a custom flow is needed, a paid Discovery Audit maps the steps, the systems and the checks your services require; its fee is credited in full against the build. You then get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. We build to the requirements you and your advisers set; your AML/CTF program and compliance remain your responsibility. See our [workflow automation service](/services/workflow-automation).
