---
title: "How to answer an enterprise security questionnaire as an Australian SaaS vendor"
metaTitle: "How to Answer a Vendor Security Questionnaire (Australia)"
description: "For Australian SaaS vendors selling to banks, insurers and government: what security questionnaires ask, how to answer honestly, which fixes pay back first."
eyebrow: "How to guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "Enterprise buyers send security questionnaires because they remain responsible for their data when a vendor holds it: APRA's CPS 234, for example, requires regulated entities to assess the information security capability of third parties that manage their information assets. Answer from evidence, not aspiration. Say yes only where the control exists today, say partial or no with a dated plan where it doesn't, and attach proof. Keep a maintained answer library and a security pack, and fix the controls that appear in nearly every questionnaire first: multi factor authentication everywhere, single sign on for customers, encryption, backups that have been tested, logging, a penetration test and a written incident response plan."
takeaways:
  - "Questionnaires exist because the buyer stays accountable. CPS 234 requires APRA regulated entities to assess the security capability of third parties managing their information assets."
  - "Common formats include the CSA's CAIQ (version 4.1 at the time of writing), the Shared Assessments SIG, and the buyer's own template, often mapped to ISO 27001 or the Essential Eight."
  - "A truthful 'partial, with a remediation date' beats an optimistic 'yes' that fails in the contract or an audit."
  - "A trust page and a security pack answer most questions before they are asked and shorten the review."
  - "The fixes that pay back first are cheap and visible: MFA, SSO, encryption, tested backups, logging, a recent penetration test and an incident plan."
faqs:
  - q: "Do we need SOC 2 or ISO 27001 to sell to Australian enterprises?"
    a: "Not always, but they shorten reviews considerably, and some buyers require one for higher risk services. Some buyers will accept a well evidenced questionnaire, a recent penetration test and a security pack from a smaller vendor, with a commitment to certify later. Our comparison of SOC 2 and ISO 27001 covers which suits which market."
  - q: "What is the CAIQ?"
    a: "The Consensus Assessments Initiative Questionnaire from the Cloud Security Alliance is a set of yes or no questions that documents which security controls exist in an IaaS, PaaS or SaaS service. Version 4.1 was released in January 2026, and completing it is how a provider lists at STAR Level 1. The CSA also publishes an AI-CAIQ for AI services."
  - q: "How long should it take to answer a security questionnaire?"
    a: "The first one can take one to three weeks of a senior person's time because the evidence doesn't exist in one place. With a maintained answer library and security pack, most later questionnaires take one to three days. These are typical ranges for a small SaaS company."
  - q: "Can we answer 'not applicable' to questions?"
    a: "Only when the control genuinely doesn't apply, with a one line reason, for example no physical data centre because hosting is on AWS. Reviewers treat unexplained 'not applicable' answers as a sign the question was dodged."
  - q: "What do government buyers ask for?"
    a: "Federal buyers commonly ask about the Information Security Manual, the Essential Eight, IRAP assessment and hosting arrangements. The Hosting Certification Framework is under reform, and new registrations were paused from 3 November 2025 until the reform is complete, so check the current position with the buying agency."
  - q: "Should AI features change our answers?"
    a: "Yes. Expect questions on which model providers you use, where prompts and outputs are processed, whether customer data is used for training, and how you defend against prompt injection. Answer them in a short AI section of your security pack."
sources:
  - title: "Prudential Standard CPS 234 Information Security"
    url: "https://www.apra.gov.au/standards/cps-234"
    publisher: "APRA"
  - title: "Operational Risk Management (CPS 230)"
    url: "https://www.apra.gov.au/operational-risk-management"
    publisher: "APRA"
  - title: "STAR Level 1: Security Questionnaire (CAIQ v4.1)"
    url: "https://cloudsecurityalliance.org/artifacts/star-level-1-security-questionnaire-caiq-v4"
    publisher: "Cloud Security Alliance"
  - title: "AI Consensus Assessments Initiative Questionnaire (AI-CAIQ) v1.1"
    url: "https://cloudsecurityalliance.org/artifacts/ai-consensus-assessments-initiative-questionnaire-ai-caiq-v1-1"
    publisher: "Cloud Security Alliance"
  - title: "Standardized Information Gathering (SIG) Questionnaire (archived copy)"
    url: "https://web.archive.org/web/2025/https://sharedassessments.org/sig/"
    publisher: "Shared Assessments"
  - title: "Essential Eight maturity model"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-maturity-model"
    publisher: "Australian Signals Directorate"
  - title: "Information Security Manual (ISM)"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism"
    publisher: "Australian Signals Directorate"
  - title: "Hosting Certification Framework"
    url: "https://www.hostingcertification.gov.au/framework"
    publisher: "Department of Finance"
related:
  - title: "APRA CPS 234 and AI"
    href: "/guides/apra-cps-234-ai"
  - title: "SOC 2 vs ISO 27001 in Australia"
    href: "/guides/soc-2-vs-iso-27001-australia"
  - title: "Essential Eight for software development"
    href: "/guides/essential-eight-software-development"
  - title: "Trust and security at AWLabs"
    href: "/trust"
service:
  title: "Cybersecurity"
  href: "/services/cybersecurity"
---

## Why enterprise buyers send questionnaires, and who reads them

**Enterprise buyers send security questionnaires because they stay responsible for their data after a vendor starts holding it, and the questionnaire is how they show they checked.** For Australian banks, insurers and super funds this is a regulatory requirement, not a preference.

APRA's Prudential Standard CPS 234, in force since 1 July 2019, requires an APRA regulated entity whose information assets are managed by a third party to assess that party's information security capability, in proportion to the consequences of an incident. It must also evaluate the design of the third party's controls that protect its information. Your questionnaire answers become part of that assessment, and they are often attached to the contract.

The readers are usually a third party risk analyst who scores the answers, a security engineer who checks the evidence, and a procurement or legal person who turns gaps into contract clauses. Write for all three: short, specific answers, with the proof attached.

## The common formats: CAIQ, SIG, bank and government templates

**Most questionnaires are either a standard framework or the buyer's own template mapped to one, so a single well kept answer library covers most of them.**

| Format | Who uses it | What to know |
|---|---|---|
| CAIQ (Cloud Security Alliance) | Cloud and SaaS buyers worldwide | Version 4.1 was released in January 2026; yes or no questions mapped to the Cloud Controls Matrix; completing it lists you at STAR Level 1 |
| AI-CAIQ (Cloud Security Alliance) | Buyers assessing AI services | Version 1.1 covers AI specific controls |
| SIG (Shared Assessments) | Banks, insurers, large enterprises | Comes in Lite and Core scopes, chosen by the vendor's risk rating |
| Bank and insurer templates | APRA regulated entities | Built around CPS 234, CPS 230 and the buyer's policies; often long |
| Government templates | Federal and state agencies | Reference the ISM, Essential Eight, IRAP and data hosting rules |

Publishing a completed CAIQ can head off some custom questionnaires, because many analysts accept it as a starting point.

## Questions on hosting, data residency and subprocessors

**Expect precise questions about where data is stored, processed, backed up and supported from, and which subprocessors touch it.** Answer region by region and service by service, not with "hosted in Australia".

A complete answer names the cloud provider and region for production data, backups, logs and disaster recovery, lists every subprocessor (email, support desk, error monitoring, analytics, AI model providers) with its processing location, and says who can access production and from where. If any support or engineering staff work offshore, say so. Our guide to [data residency and data sovereignty](/guides/data-residency-vs-data-sovereignty) explains the distinction buyers are probing.

## Identity, MFA and Essential Eight questions

**Identity questions are the ones most often failed, and the easiest to fix.** Buyers ask whether every staff account uses multi factor authentication, whether admin access is separate and limited, whether customers can sign in with their own identity provider, and how quickly access is removed when someone leaves.

Australian buyers frequently ask you to state a maturity level against the Essential Eight, ASD's eight mitigation strategies. The maturity model, last updated in November 2023, defines levels from basic to stronger protection against advanced threats, and ASD recommends reaching the same level across all eight strategies. ASD says the Essential Eight was designed to protect organisations' internet connected IT networks, so a cloud SaaS product only partly maps to it; describe your equivalent controls and the gaps honestly. Our guide to the [Essential Eight in software development](/guides/essential-eight-software-development) shows how to map a cloud product to it.

## CPS 234 and CPS 230 flow down clauses for APRA regulated buyers

**Banks, insurers and super funds push their prudential obligations down to vendors through contract clauses, so read the questionnaire and the draft contract together.**

From CPS 234, expect clauses on notifying the buyer of security incidents promptly, allowing security testing or audit, maintaining specified controls, and classifying and protecting their information. From CPS 230 Operational Risk Management, expect clauses on business continuity, service levels, subcontracting and exit support if you are a material service provider. APRA released final targeted amendments to CPS 230 on 30 April 2026, introducing limited exemptions from some contractual requirements for certain categories of service provider. Our guides to [CPS 234](/guides/apra-cps-234-ai) and [CPS 230 for AI vendors](/guides/apra-cps-230-ai-vendors) go into detail.

## Answering honestly when a control is missing

**When you don't have a control, say so, describe what you do instead, and give a realistic date for closing the gap.** An inflated "yes" is the expensive answer: it gets copied into the contract as a warranty, and it is found in the next audit or after an incident.

Use four answer types consistently:

1. **Yes**, with evidence attached or available on request.
2. **Partial**, stating exactly what is in place and what isn't.
3. **No, planned**, with the compensating control and a target date.
4. **Not applicable**, with a one line reason.

Have one person approve every answer before it leaves the company, and record what you told each customer, because commitments differ between questionnaires and you must honour all of them.

## Building an answer library you can reuse

**Treat questionnaire answers as a maintained product document, not a one off reply.** The first questionnaire is slow because the evidence is scattered; every later one should mostly be copy, check and attach.

Keep the library in one place, with each entry holding the standard question wording, your approved answer, the evidence that proves it, the owner who keeps it true and the date it was last checked. Organise it by control area (identity, encryption, logging, backups, incident response, people security, vendor management, AI) rather than by customer, and map each entry to the CAIQ question it answers, because many custom templates are loosely based on it.

Review the library whenever the system changes, and at least every quarter. An answer about backups written before you moved regions, or about access control before you added a support contractor, is now a misstatement. When a buyer asks something new, write the answer once, get it approved, and add it to the library so the next team member finds it.

Finally, decide who may send answers. Sales teams under deadline pressure tend to say yes; the approval step protects them as well as the company.

## A trust page and security pack that shortcut the process

**A public trust page and a security pack shared under NDA answer most questions before they are asked.** Analysts then confirm rather than interrogate, which shortens the review.

The trust page covers hosting regions, encryption, access control, testing, certifications held (only those genuinely held), subprocessors and a security contact. Our own [trust page](/trust) is an example of the format. The security pack adds documents: an architecture and data flow diagram, information security policy, incident response plan, business continuity summary, latest penetration test summary with remediation status, a completed CAIQ, and, if relevant, your [SOC 2 or ISO 27001](/guides/soc-2-vs-iso-27001-australia) report or certificate. Add a one page AI section if your product uses AI models: providers, processing regions, training use and safeguards.

For government work, also prepare for questions about the ISM and IRAP. The [IRAP explainer](/guides/irap-explained) covers what an assessment involves.

## The fixes that pay back first, with effort estimates

**Fix the controls that appear in nearly every questionnaire before chasing certification.** The estimates below are typical ranges for a small SaaS team on a modern cloud platform, not quotes.

| Fix | Typical effort | Why it pays back |
|---|---|---|
| MFA on every staff, cloud, code and admin account | Days | The most common failed question |
| SSO for customers (SAML or OIDC) | 1 to 3 weeks | Enterprise buyers often require it |
| Encryption at rest and in transit, documented | Days to 1 week | Usually already in place; needs evidence |
| Backups with a tested restore, documented | 1 week | Restore evidence is regularly requested |
| Centralised logging and alerting | 1 to 3 weeks | Required for incident questions |
| Independent penetration test and fixes | 2 to 6 weeks | Asked for by most buyers, usually annually |
| Written incident response plan with a tabletop exercise | 1 to 2 weeks | Needed for CPS 234 notification clauses |
| Subprocessor list and data flow diagram | Days | Answers a whole section at once |
| Trust page and security pack | 1 to 2 weeks | Shortens every later review |

## How AWLabs approaches this

When we build or maintain SaaS products, we build these controls in and produce the evidence as we go, so the security pack reflects how the system actually works. For an existing product, our [cybersecurity](/services/cybersecurity) work starts with the last two or three questionnaires you struggled with, maps the gaps, and sets out the fixes in a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. We don't hold SOC 2, ISO 27001 or IRAP status ourselves and can't certify you; we help you meet the controls and gather evidence for your auditor.
