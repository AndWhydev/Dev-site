---
title: "Membership management software for Australian associations: CPD, elections and member portals"
metaTitle: "Membership Management Software for Australian Associations"
description: "Membership software for Australian associations: grades and renewals, CPD records regulators rely on, online AGMs and ballots, and AI search for members."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Membership management software for an Australian professional association or peak body has to handle more than renewals: member grades with eligibility rules, CPD records that a regulator or registration scheme may rely on, elections and AGMs run under the constitution and either state incorporation law or the Corporations Act, and a library of standards and guidance members want to search. Platforms such as iMIS, Wild Apricot, Novi and Member Jungle cover the basics. Custom work pays off for CPD audit evidence, election workflows and AI search over member resources, in indicative market ranges of about $30,000 to $120,000 (AUD, ex GST), as planning figures, not quotes."
takeaways:
  - "Every registered doctor needs an AMC accredited CPD home each year unless exempt, and CPD homes must give doctors a system for recording CPD, so a medical college's member software is part of the regulatory chain."
  - "Companies limited by guarantee can hold hybrid meetings under the Corporations Act, but virtual only meetings only if the constitution expressly requires or permits them."
  - "NSW incorporated associations must hold their AGM within 6 months of financial year end, and may use technology for meetings and run postal or electronic ballots even if the constitution is silent."
  - "Every commercial email to members needs an unsubscribe option honoured within 5 working days under the Spam Act, so separate member service notices from promotions."
  - "AI search over your standards, guidelines and journal archive is often the member benefit people notice most, provided answers cite the source document."
faqs:
  - q: "What is the best membership management software in Australia?"
    a: "It depends on size. Smaller associations often look at products such as Wild Apricot or Member Jungle; larger professional bodies look at iMIS, Novi, Salesforce based products or similar. Compare on member grades, renewals, CPD, events, payments in AUD with GST and how open the API is. Choose the platform first and build only the gaps."
  - q: "Can we build CPD tracking into our existing membership platform?"
    a: "Often yes. Many platforms record CPD hours, but fewer handle the detail a regulator expects: activity types, evidence uploads, a plan for the year, audits of a random sample, exemptions and an annual statement. A custom CPD module connected to your platform's API can add those without replacing the platform."
  - q: "Can we hold our AGM online?"
    a: "If you are a company limited by guarantee, ASIC says the Corporations Act allows hybrid meetings for all companies, and virtual only meetings if your constitution expressly requires or permits them. NSW incorporated associations may use technology for meetings even if the constitution does not provide for it, as long as members can participate properly. Other states have their own rules. Check your constitution and get advice before changing the format."
  - q: "Is it safe to put our standards and guidance behind an AI chatbot?"
    a: "It can be, if the system answers only from your documents, shows which document and section each answer came from, respects member access levels and says when it does not know. That pattern is called retrieval augmented generation. It should never present itself as professional advice, and copyright in third party standards you license may limit what you can load into it."
  - q: "Do we have to follow the Spam Act for member emails?"
    a: "For commercial messages, yes: consent, accurate sender identification and a working unsubscribe that is honoured within 5 working days. Anything promoting an event, sponsor or product is likely to be commercial. Ask your lawyer which member service notices fall outside the Act, and keep service and marketing lists separate in your platform."
sources:
  - title: "About CPD homes"
    url: "https://www.medicalboard.gov.au/Professional-Performance-Framework/CPD/About-CPD-homes"
    publisher: "Medical Board of Australia"
  - title: "Continuing professional development registration standards"
    url: "https://www.ahpra.gov.au/Registration/Registration-Standards/CPD.aspx"
    publisher: "Ahpra"
  - title: "FAQs: virtual meetings for companies and registered schemes"
    url: "https://www.asic.gov.au/regulatory-resources/corporate-governance/shareholder-engagement/faqs-virtual-meetings-for-companies-and-registered-schemes"
    publisher: "ASIC"
  - title: "Meetings (incorporated associations)"
    url: "https://www.nsw.gov.au/business-and-economy/incorporated-associations/running-an-incorporated-association/meetings"
    publisher: "NSW Fair Trading"
  - title: "Financial reporting requirements for incorporated associations"
    url: "https://www.nsw.gov.au/business-and-economy/incorporated-associations/running-an-incorporated-association/financial-reporting-requirements"
    publisher: "NSW Fair Trading"
  - title: "Avoid sending spam"
    url: "https://www.acma.gov.au/avoid-sending-spam"
    publisher: "ACMA"
  - title: "Member Jungle"
    url: "https://www.memberjungle.com/"
    publisher: "Member Jungle"
  - title: "iMIS association and membership software"
    url: "https://www.imis.com/"
    publisher: "iMIS"
  - title: "How much does software development cost in Australia?"
    url: "https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/"
    publisher: "Conduct"
related:
  - title: "Professional services knowledge base"
    href: "/solutions/professional-services-knowledge-base"
  - title: "What is RAG?"
    href: "/guides/what-is-rag"
  - title: "AI for Australian not-for-profits"
    href: "/solutions/ai-for-not-for-profits"
  - title: "RAG knowledge base cost"
    href: "/guides/rag-knowledge-base-cost"
service:
  title: "RAG knowledge base"
  href: "/services/rag-knowledge-base"
industry:
  title: "AI and automation"
  href: "/industries/ai-automation"
disclaimer: legal
---

## Membership is not a mailing list

**An association's member record carries rules: who qualifies for which grade, what each grade may do, what they owe and when, and what they must keep up to stay a member.** A professional body might have student, graduate, member, fellow and retired grades, each with different fees, voting rights, post nominals and CPD obligations. Moving from graduate to member might need two years of supervised practice and a referee. Lapsing might trigger a grace period and then removal from a public register.

Generic email and CRM tools handle none of that well. Dedicated platforms do much of it, and for most associations one of them is the right core. The questions that separate them for Australian bodies are practical:

| Question | Why it matters |
|---|---|
| Can grades, eligibility and upgrade applications be configured without code? | Grade rules change at AGMs |
| Does renewal handle AUD, GST and tax invoices properly? | Members and employers need valid tax invoices |
| Is there a public register of members, and who controls what it shows? | Some bodies publish it for consumer protection |
| How open is the API? | Every custom piece depends on it |
| Where is member data hosted? | Privacy obligations and member expectations |

Products such as iMIS, Wild Apricot, Novi and Member Jungle cover much of this, and larger bodies also consider Salesforce based products. If a platform answers those questions well, buy it, and spend custom budget only on the gaps below. Our [build vs buy guide](/guides/build-vs-buy-software) explains the general test.

## CPD tracking when a regulator relies on your records

**When your members are registered professionals, your CPD records may be the evidence they use to keep their registration.** That changes the standard the software must meet. It is no longer a member perk; errors can affect someone's right to practise.

The Medical Board of Australia is the clearest example. It says all doctors need a CPD home each year unless exempt, must join an AMC accredited CPD home before starting their CPD for the year, must log activities with that home, and declare it at registration renewal. CPD homes, which can be specialist colleges or other organisations, provide programs, help doctors track their hours with a system for CPD record keeping, and can grant exemptions or variations for continuous absence of six to 12 months for reasons such as parental leave or serious illness. Other National Boards set their own CPD registration standards, published by Ahpra.

Outside health, engineering, accounting, legal and financial advice bodies have their own CPD schemes, set by the body itself or by a regulator.

A CPD module built to that standard usually includes:

1. **An annual plan** per member, where the scheme requires one.
2. **Activity logging** by type and category, with hours or points and evidence uploads.
3. **Provider feeds**, so your own events and courses record attendance automatically.
4. **Audit selection** of a random sample, with requests for evidence and outcomes tracked.
5. **Exemptions and variations** with reasons, approver and dates.
6. **An annual statement** the member can download and, where relevant, data the body reports onward.

Most of this lives beside the membership platform, connected through its API, so renewals and CPD stay in step.

Two design points matter more than features. First, the record must be trustworthy years later: once a member's CPD year closes, its entries should be locked, with any later correction logged against the person who made it and the reason. Second, the rules belong in configuration. CPD schemes change, categories are renamed and point values move, and an association should be able to apply next year's rules without a software release, while last year's statements still show the rules that applied at the time.

## Elections, AGMs and online voting under your constitution

**The rules for meetings and ballots come from your constitution and the law you are incorporated under, and software must follow both.** Two common structures in Australia work differently.

| Structure | Online meetings | Ballots | Key source |
|---|---|---|---|
| Company limited by guarantee | Hybrid allowed for all companies; virtual only if the constitution expressly requires or permits it | As the constitution and Corporations Act allow | ASIC virtual meetings FAQ |
| NSW incorporated association | Technology may be used for committee and general meetings even if the constitution is silent, if members can participate properly | Postal or electronic ballots allowed even if the constitution is silent, following Schedule 2 of the Associations Incorporation Regulation 2022 | NSW Fair Trading |

ASIC also says members attending virtually must, as a whole, be able to ask questions and make comments orally and in writing. NSW incorporated associations must hold their AGM within 6 months after financial year end, and lodge annual financial summaries within one month of the AGM. Associations in other states follow their own Associations Incorporation Acts.

An election workflow for a council or board typically handles the call for nominations, eligibility checks against member grade and financial status, candidate statements, the ballot itself with one vote per eligible member, a returning officer's view, and a result record kept with the minutes. Specialist election providers exist and many associations use them for contested ballots; a custom workflow suits bodies that run frequent elections for branches or chapters.

## Events, conferences and sponsorship

**The annual conference often carries an association's budget, and it usually runs in a separate events tool.** Registrations, member pricing, sessions, CPD points per session, exhibitor packages and sponsor deliverables all live there, then someone exports attendance into the membership platform by hand.

The useful integration is straightforward: member pricing checked live against the membership record, CPD points posted automatically from session attendance, and sponsor packages tracked with their deliverables. Marketing emails about the conference are commercial messages under the Spam Act, which the ACMA says need consent, accurate sender identification and an unsubscribe that is honoured within 5 working days and does not require a login. Keep promotional lists separate from member service notices.

## Member portals and AI search over your standards and resources

**For many associations the most valued member benefit is finding the right guidance quickly, and that is where AI search helps most.** A body might hold decades of position statements, practice guidelines, journal articles, webinar recordings and FAQ answers. Members search for them with a keyword box that rarely finds the right one.

Retrieval augmented generation (RAG) changes that. The system indexes your documents, finds the passages most relevant to a member's question, and has a language model answer from those passages only, citing the document and section. Our explainer on [what RAG is](/guides/what-is-rag) covers how it works.

Design rules we would hold to for an association:

- **Answers come only from your content**, with links to the source, and the system says when it cannot find an answer.
- **Access follows membership.** A student member sees what students may see; public visitors see only public content.
- **Licensed standards stay protected.** Third party standards you license may not permit loading into an AI system; check the licence first.
- **No professional advice.** The tool points members to guidance; it does not tell them what to do in their case.
- **Australian hosting** where member data or questions are stored.

The [professional services knowledge base](/solutions/professional-services-knowledge-base) page covers similar work for firms, and the [RAG knowledge base cost guide](/guides/rag-knowledge-base-cost) explains what drives the budget.

## What do these builds cost?

**Indicative market ranges run from about $30,000 for AI search over member resources to $120,000 for a CPD tracker with a member portal (AUD, ex GST).** Conduct's guide puts mid sized Australian agencies at roughly $150 to $330 an hour, which underpins these planning figures.

| Build | Indicative range (AUD, ex GST) | Main cost drivers |
|---|---|---|
| AI search over member resources, with citations and access levels | $30k to $90k | Volume and format of content, access rules, evaluation |
| CPD tracker and member portal on top of your platform | $40k to $120k | CPD scheme rules, audits, provider feeds, API quality |
| Election and ballot workflow for branches and council | $20k to $50k | Constitution rules, number of ballots, returning officer needs |

These are planning ranges, not quotes. Language model usage, hosting and platform licences sit on top.

## How AWLabs would approach an association project

We have not yet built a membership system for an association, but CPD records, member portals and RAG search are the kinds of work our team builds. We would start with a 15 minute Development Consult, then a Discovery Audit that reads your constitution, maps your platform's API, reviews your CPD scheme and samples your content library, with the fee credited in full against the build. You receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates arrive every Tuesday and Friday, and code and IP are assigned to you as they are paid for. See our [RAG knowledge base](/services/rag-knowledge-base) and [CRM integration](/services/crm-integration) services, and the [AI for not-for-profits](/solutions/ai-for-not-for-profits) page if your association is a charity.
