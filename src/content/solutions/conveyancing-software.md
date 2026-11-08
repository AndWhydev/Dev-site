---
title: "Conveyancing software: PEXA integration, identity checks and fraud controls"
metaTitle: "Conveyancing Software Australia: PEXA, VOI and Fraud Controls"
description: "Conveyancing software in Australia: how LEAP, Smokeball and Actionstep work with PEXA and Sympli, ARNECC identity rules, and controls that stop payment fraud."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Conveyancing software in Australia is two layers: a matter system such as LEAP, Smokeball, Actionstep or Triconvey that holds the file, and an electronic lodgment network operator (ELNO), PEXA or Sympli, where the settlement happens. Custom work earns its place in the gaps between them: client status updates, dashboards across many files, document intake from agents and banks, and a fixed call back procedure for any change to bank details. Under ARNECC's Model Participation Rules a subscriber must take reasonable steps to verify identity and keep the evidence, so identity and payment controls deserve the most care. Typical builds sit in the $10,000 to $60,000 (AUD, ex GST) market range, as a range, not a quote."
takeaways:
  - "Keep the matter system and the ELNO. Build what sits between them: client updates, intake, cross matter views and fraud controls."
  - "ARNECC's Model Participation Rules are at Version 7, with Version 8 out as a consultation draft at the time of writing."
  - "The Verification of Identity Standard in Schedule 8 is not mandatory, but applying it properly deems the subscriber to have taken reasonable steps; either way the evidence must be kept."
  - "Payment redirection is the fraud to design against. Scamwatch advises checking any change to payee details by phone, on a number you found independently."
  - "ARNECC paused the national interoperability program in June 2024, so most practices still work inside one ELNO per workspace."
faqs:
  - q: "What is the best conveyancing software in Australia?"
    a: "Most practices choose between LEAP, Smokeball and Actionstep for matter management, or a conveyancing focused system such as Triconvey, with InfoTrack for searches and PEXA or Sympli for settlement. The right choice depends on whether you are a law firm with other practice areas or a specialist conveyancer, the states you work in and how much you want automated. We don't resell any of them."
  - q: "Can our software connect to PEXA?"
    a: "PEXA lists API integration among its products and serves practice management software providers as a customer group, and the major matter systems already connect to it. A custom integration is usually only needed when you want data the existing connector doesn't move, or a dashboard across workspaces. Access is controlled by PEXA, so confirm terms before scoping."
  - q: "Do we have to verify identity face to face?"
    a: "Not necessarily. ARNECC says the Verification of Identity Standard requires a face to face interview, but compliance with the Standard isn't mandatory. A subscriber can verify identity in another way that amounts to reasonable steps, and must retain the evidence supporting those steps. Applying the Standard properly gives you the benefit of being deemed to have taken reasonable steps."
  - q: "How do we stop clients paying scammers?"
    a: "Make it hard for a changed bank account to slip through. Tell clients at engagement that you will never change bank details by email, collect their account details through a secure channel such as PEXA Key, and require a call back on an independently sourced number before any changed payee is used. Software can enforce the call back step so nobody can skip it under deadline pressure."
  - q: "Can AI review a contract for sale?"
    a: "AI can summarise a contract and its attached certificates, flag special conditions and missing documents, and draft requisitions for the conveyancer to check. It shouldn't advise the client or decide whether a term is acceptable. The licensed conveyancer or solicitor reviews every output, and the system records that review."
  - q: "Have you built conveyancing software before?"
    a: "No. We haven't delivered a project for a conveyancing practice, so we won't point to one. We bring integration, document and security engineering; your principal and your professional advisers own the compliance with the participation rules."
sources:
  - title: "Australian Registrars' National Electronic Conveyancing Council"
    url: "https://www.arnecc.gov.au/"
    publisher: "ARNECC"
  - title: "Model Participation Rules Guidance Note 2: Verification of Identity"
    url: "https://arnecc.gov.au/wp-content/uploads/2024/08/MPRGUI2.pdf"
    publisher: "ARNECC"
  - title: "Client authorisation and verification of identity concerns as a result of consular assistance being unavailable"
    url: "https://www.arnecc.gov.au/wp-content/uploads/2026/04/ARNECC_Position-Statement.pdf"
    publisher: "ARNECC"
  - title: "National e-conveyancing reform halted"
    url: "https://www.itnews.com.au/news/national-e-conveyancing-reform-halted-609193"
    publisher: "iTnews"
  - title: "Business email compromise scams"
    url: "https://www.scamwatch.gov.au/types-of-scams/business-email-compromise-scams"
    publisher: "Scamwatch (ACCC)"
  - title: "Conveyancer trust accounts and audit requirements"
    url: "https://www.nsw.gov.au/housing-and-construction/property-professionals/conveyancers/conveyancer-trust-accounts-and-audit-requirements"
    publisher: "NSW Fair Trading"
  - title: "PEXA"
    url: "https://www.pexa.com.au/"
    publisher: "PEXA"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "AI for law firms"
    href: "/solutions/ai-for-law-firms"
  - title: "Notifiable data breaches and software"
    href: "/guides/notifiable-data-breaches-software"
  - title: "Real estate CRM and AI for sales agencies"
    href: "/solutions/real-estate-agency-software"
  - title: "Customer portal development"
    href: "/guides/customer-portal-development"
service:
  title: "Cybersecurity"
  href: "/services/cybersecurity"
industry:
  title: "Real estate"
  href: "/industries/real-estate"
disclaimer: legal
---

## How does a file move from contract to settlement?

**In electronic conveyancing the file lives in your matter system, and the settlement lives in an ELNO workspace. Most of the manual effort is moving information between the two and keeping the client informed.** A typical purchase file looks like this:

1. **Engagement.** Costs agreement, client authorisation and verification of identity.
2. **Contract review.** The contract and its certificates are read, special conditions noted and the client advised.
3. **Searches and enquiries.** Ordered through InfoTrack or similar, results attached to the matter.
4. **Exchange.** Deposit arrangements confirmed, cooling off tracked where it applies.
5. **Pre settlement.** Requisitions, finance approval, the incoming mortgagee's requirements and the settlement statement.
6. **Workspace.** The matter is opened in PEXA or Sympli, the parties join, figures are balanced and documents signed.
7. **Settlement and after.** Lodgment, notices to authorities and the client's final report.

Each step generates messages: "has the bank sent the approval?", "when is settlement?", "what do you still need from me?" Answering those by hand on 60 open files is where hours go.

## Matter system, searches and ELNO: who does what?

**The matter system is the record, the search provider supplies the documents, and the ELNO runs the settlement. Custom software should connect them, not replace any of them.**

| Layer | Typical products | What it does well | Where the gaps are |
|---|---|---|---|
| Matter management | LEAP, Smokeball, Actionstep, Triconvey | Precedents, time, trust accounting, document storage | Client facing updates, views across all files, intake from third parties |
| Searches | InfoTrack | Title, planning and other searches into the matter | Summarising what the searches mean |
| Settlement | PEXA, Sympli | Workspaces, financial settlement, lodgment, PEXA Key for client bank details | Linking workspace status back to client communications |

On interoperability: ARNECC worked for several years on letting ELNOs interoperate, so that parties on different networks could settle together. iTnews reported in June 2024 that ARNECC had paused the program because its financial services aspects were beyond the states' remit, with PEXA holding about 90% of the market at the time. At the time of writing, ARNECC also notes that IPART has published a draft report on ELNO service fees. In practice, a single workspace still sits on one ELNO, and your systems should expect that.

## Verification of identity under the participation rules

**ARNECC's Model Participation Rules require a subscriber to take reasonable steps to verify the identity of clients, mortgagors and signers, and to retain the evidence of those steps.** At the time of writing the current version is Version 7, and a Version 8 consultation draft has been released.

The rules give two routes:

- **Apply the Verification of Identity Standard** in Schedule 8. It requires a face to face interview and set document checks. ARNECC says it isn't mandatory, but if it is properly carried out, the subscriber is deemed to have taken reasonable steps.
- **Verify identity some other way** that constitutes reasonable steps. ARNECC's April 2026 guidance on clients overseas lists options such as consular services, electronic verification of Australian documents and checking foreign documents against the issuing government's website.

Guidance Note 2 also covers identity agents (who must apply the Standard if appointed as an Identity Agent) and when a previous verification within two years can be relied on.

What this means for software:

| Requirement | Software feature |
|---|---|
| Record which route was used | A VOI record per person per matter, with the method chosen |
| Retain supporting evidence | Document copies, verification results and the interviewer's notes stored against the record |
| Use of identity agents | Agent name, instructions given and the Standard applied |
| Reliance on an earlier verification | Date of the previous check and the steps taken to confirm it is the same person |
| Audit by the registrar | An export of every VOI record for a period |

## Payment redirection: controls software should enforce

**Business email compromise is the fraud that turns a settlement into a loss: a scammer inside an inbox, or impersonating one, sends "updated" bank details just before money moves.** Scamwatch's advice is to stop and check any change to payee details, and to contact the business by phone on a number you sourced independently, not one from the email.

Good intentions fail at 4pm on settlement day, so the controls belong in the workflow:

- Clients are told in the engagement letter and every key email that you will never change bank details by email.
- Client bank details are collected through a secure channel such as PEXA Key, not email or PDF.
- Any change to a payee, from any party, locks the payment until a call back is recorded.
- The call back number comes from the matter record or an independent source, never the email requesting the change.
- The person who records the call back is not the person who requested the change.
- Multi factor authentication on email, the matter system and the ELNO for every user.
- An incident path that calls the bank immediately and assesses whether a notifiable data breach has occurred.

Our [cybersecurity](/services/cybersecurity) service covers email and account hardening, and the [notifiable data breaches guide](/guides/notifiable-data-breaches-software) explains what to do if personal information is exposed.

## What does a practice running many files need to see?

**A principal running 50 to 200 open files needs one screen that answers three questions: what settles this week, what is blocking each file, and who is waiting on whom.** Matter systems show one file at a time very well. They are weaker at the view across all of them, because the blocking information often sits outside the matter: a workspace that hasn't been balanced, a bank that hasn't confirmed its figures, an agent who hasn't sent the deposit receipt.

A cross matter dashboard pulls those signals together. For each file it shows the settlement date, the days remaining, the outstanding items and the party responsible for each, and it sorts the list by risk rather than by matter number. Files with a changed payee awaiting call back, a missing VOI record or an unbalanced workspace within two days of settlement go to the top.

Document intake feeds the same view. Banks, agents and other practitioners send approvals, discharge authorities and receipts by email in many formats. Reading each one, matching it to the right matter and ticking off the outstanding item is routine work that software can do reliably, with exceptions sent to a person. The aim is that nobody on the team has to open an inbox to know where a file stands, and that the client update goes out when the item arrives, not when someone remembers.

## Apportionments and settlement statements

**Adjustments are arithmetic with many inputs: rates, water, strata levies and other outgoings, apportioned to the settlement date.** Matter systems already calculate the common ones. Custom work helps when inputs arrive in many formats, for example reading council rates notices and strata certificates into structured figures, then flagging any figure that doesn't match the workspace. Trust money still moves only through your trust account; in NSW the Conveyancers Licensing Act 2003 requires an annual audit for the year to 30 June, submitted by 30 September.

## Where AI helps on a conveyancing file

**AI is useful for reading and summarising volume, and for keeping clients informed, with the conveyancer reviewing anything that affects advice.**

| Use | What it does | Review needed |
|---|---|---|
| Contract and certificate summary | Lists parties, dates, special conditions, attached certificates and anything missing | Conveyancer checks before advising |
| Requisitions draft | Produces standard requisitions plus ones prompted by the contract | Conveyancer edits and sends |
| Document intake | Reads bank approvals, discharge authorities and agent emails into the matter | Spot checks, exceptions to staff |
| Client updates | Sends milestone messages from matter and workspace status | Templates approved once, then automatic |

These are standard [AI document processing](/services/ai-document-processing) patterns. Our [AI for law firms](/solutions/ai-for-law-firms) page covers privilege and confidentiality controls for firms that also run other practice areas.

## Typical builds and indicative costs

**Most conveyancing builds are small to mid sized tools around the matter system.** Expeed's 2026 survey puts simple internal tools at $15,000 to $40,000 and mid complexity systems at $40,000 to $150,000 in Australia.

| Build | Indicative range (AUD, ex GST) | Main drivers |
|---|---|---|
| Client update portal and automated milestone messages | $15k to $45k | Matter system API, channels (email, SMS), portal logins |
| AI contract and certificate summariser with human review | $25k to $60k | States covered, document types, accuracy testing |
| Bank detail verification and call back workflow | $10k to $30k | Integration with the matter system and payments process |

These are market ranges, not quotes. For portal costs in more depth, see the [customer portal guide](/guides/customer-portal-development).

## How AWLabs approaches conveyancing projects

We start with your matter system and ELNO and check what their existing connectors already do. Every build starts with our Discovery Audit, a paid step credited in full against the build, followed by a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates come every Tuesday and Friday in Sydney business hours, and the code and IP are assigned to you as they are paid for. We haven't yet delivered a project for a conveyancing practice, and we are not a subscriber or an ELNO; your principal owns compliance with the participation rules. Start with a Development Consult, or see our [API development](/services/api-development) service for integration work.
