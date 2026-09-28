---
title: "APRA CPS 234 requirements for AI systems: what vendors need to provide"
metaTitle: "APRA CPS 234 Requirements for AI Systems and Vendors"
description: "APRA CPS 234 requirements explained for AI systems: who the information security standard applies to, what vendors must provide, and a checklist to use."
eyebrow: "Australian regulation"
category: australia
published: 2026-09-28
updated: 2026-09-28
summary: "CPS 234 is APRA's information security standard, and its requirements have applied to banks, insurers, private health insurers and super trustees since 1 July 2019. It covers every information asset, including software and data managed by third parties. An AI system is an information asset, so a regulated entity must classify it, control it, test it and assess the security capability of any vendor that builds or runs it. The vendor doesn't carry the obligation, but it must supply the evidence the entity needs, and must tell the entity about incidents fast enough for the entity to notify APRA within 72 hours."
takeaways:
  - "CPS 234 applies to APRA-regulated entities, not to their vendors, but it reaches every information asset a third party manages for them."
  - "AI models, prompts, retrieved documents, embeddings, logs and the code around them are all information assets under the standard's definition."
  - "The entity must assess a vendor's information security capability, evaluate the design of its controls and check that its testing is adequate."
  - "Material incidents go to APRA within 72 hours; material control weaknesses that can't be fixed in time go within 10 business days."
  - "For AI vendors, the evidence pack should cover data flows, the model provider as a further third party, access control, logging, AI-specific testing and incident notice."
faqs:
  - q: "Does CPS 234 apply directly to software and AI vendors?"
    a: "No. It applies to APRA-regulated entities such as ADIs, insurers, private health insurers and RSE licensees. It does require those entities to assess the information security capability of any third party managing their information assets, and to evaluate the design of that party's controls, so vendors are drawn in through contracts and assessments."
  - q: "Is a vendor that uses a hosted model like Claude or GPT a problem under CPS 234?"
    a: "Not in itself, but the model provider becomes another party handling the entity's information assets. The entity needs to know what data reaches it, where it's processed, whether it's retained or used for training, and what controls apply. If the arrangement supports a critical operation or creates material operational risk, CPS 230's service provider rules also apply."
  - q: "Can a vendor say its AI product is CPS 234 compliant?"
    a: "Be wary of that claim. CPS 234 obligations sit with the regulated entity, and each entity assesses its own assets and risks. A vendor can provide evidence that supports the entity's assessment, such as independent assurance reports, test results and control descriptions, but it can't make the entity compliant."
  - q: "How quickly must an AI vendor report a security incident to its APRA-regulated client?"
    a: "CPS 234 doesn't set a vendor deadline. It requires the entity to notify APRA no later than 72 hours after becoming aware of a material incident. Contracts therefore usually require the vendor to notify the entity well inside that window, often within 24 hours or sooner, so the entity can assess materiality in time."
  - q: "What does CPS 234 stand for?"
    a: "CPS stands for Cross-industry Prudential Standard, APRA's label for standards that apply across banking, insurance and superannuation. CPS 234 is the information security standard in that series. Its companion, CPG 234, is a Cross-industry Prudential Practice Guide: guidance on meeting the standard, not a binding requirement."
  - q: "Is there a CPS 234 compliance deadline?"
    a: "Not a future one. CPS 234 commenced on 1 July 2019, and its requirements for information assets managed by third parties applied from 1 July 2020 or the earlier renewal of the contract. Regulated entities are expected to meet it now, including for any new AI system or vendor they bring in."
  - q: "Does CPS 234 say anything specific about AI?"
    a: "No. The standard is technology neutral and doesn't mention AI. Its requirements apply to AI systems because they are information assets. ASD's guidance on engaging with AI and the OWASP list of LLM risks are useful for working out which AI-specific controls to evaluate."
sources:
  - title: "CPS 234 Information Security"
    url: "https://www.apra.gov.au/standards/cps-234"
    publisher: "Australian Prudential Regulation Authority"
  - title: "Prudential Standard CPS 234 Information Security (F2018L01745)"
    url: "https://www.legislation.gov.au/F2018L01745/asmade/text"
    publisher: "Federal Register of Legislation"
  - title: "CPG 234 Information Security"
    url: "https://www.apra.gov.au/practice-guides/cpg-234"
    publisher: "Australian Prudential Regulation Authority"
  - title: "CPS 230 Operational Risk Management"
    url: "https://www.apra.gov.au/standards/cps-230"
    publisher: "Australian Prudential Regulation Authority"
  - title: "Engaging with artificial intelligence"
    url: "https://www.cyber.gov.au/business-government/secure-design/artificial-intelligence/engaging-with-artificial-intelligence"
    publisher: "Australian Signals Directorate"
  - title: "OWASP Top 10 for LLM Applications"
    url: "https://genai.owasp.org/llm-top-10/"
    publisher: "OWASP"
related:
  - title: "APRA CPS 230 and AI vendors"
    href: "/guides/apra-cps-230-ai-vendors"
  - title: "AI development for APRA-regulated financial services"
    href: "/solutions/ai-for-financial-services"
  - title: "What is prompt injection and how do you defend against it?"
    href: "/guides/prompt-injection"
  - title: "Data residency vs data sovereignty in Australia"
    href: "/guides/data-residency-vs-data-sovereignty"
service:
  title: "Cybersecurity and secure development"
  href: "/services/cybersecurity"
disclaimer: legal
---

## What is CPS 234 and who does it apply to?

**Prudential Standard CPS 234 Information Security is APRA's binding standard requiring regulated financial institutions to protect the confidentiality, integrity and availability of their information assets.** It commenced on 1 July 2019 and applies to authorised deposit-taking institutions (ADIs), general insurers, life companies, private health insurers and RSE licensees in superannuation, including the heads of their groups.

CPS stands for Cross-industry Prudential Standard, which is APRA's label for a standard that applies across banking, insurance and superannuation. APRA publishes a companion practice guide, CPG 234, and the two are often searched together as "CPS 234 vs CPG 234": the standard is binding, the guide explains how APRA expects it to be met.

Its stated objective is to minimise the likelihood and impact of information security incidents, "including information assets managed by related parties or third parties". That phrase is why CPS 234 matters to anyone selling software or AI to a bank, insurer or super fund. The obligations sit with the regulated entity, but they follow the entity's data and systems into its vendors.

This page is written for both sides: the regulated entity scoping an AI project, and the vendor working out what it will be asked for.

## Is an AI system an information asset under CPS 234?

**Yes. CPS 234 defines an information asset as "information and information technology, including software, hardware and data", so an AI system and everything it touches is covered.** The standard doesn't mention AI, and it doesn't need to.

For a typical AI application, that means at least these assets need classifying by criticality and sensitivity:

| Component | Why it is an information asset | Typical sensitivity question |
|---|---|---|
| Source documents and databases the AI reads | Data | Does it include customer, member or policyholder information? |
| Prompts and user inputs | Data | Will staff or customers paste personal or confidential details? |
| Embeddings and vector indexes | Data derived from the source documents | Can the source content be inferred or retrieved from them? |
| Model outputs and conversation logs | Data | Are outputs stored, and who can see them? |
| The application code, prompts and orchestration | Software | Can a change alter what data the model sees or what it can do? |
| The model endpoint and hosting | Information technology, often third party | Where is data processed, retained or used for training? |
| Tools and APIs the AI can call | Software with access to other assets | What can the AI change, not just read? |

Classification drives everything else: CPS 234 requires controls commensurate with the criticality and sensitivity of the asset, its threats and vulnerabilities, where it is in its life cycle, and the consequences of an incident.

## What are the APRA CPS 234 requirements, paragraph by paragraph?

**The standard has seven working areas: roles, capability, policy, classification, controls, incident management and testing, plus internal audit and APRA notification.** The table summarises the requirements most relevant to AI projects, with the paragraph numbers from the standard.

| Paragraph | Requirement | What it means for an AI system |
|---|---|---|
| 13 | The Board is ultimately responsible for information security | AI risk decisions need a path to the Board, not only to a product team |
| 15 to 17 | Maintain an information security capability, assess third parties' capability, and keep it current as threats change | New AI threats such as prompt injection must be reflected, and each AI vendor assessed |
| 18 and 19 | Maintain a policy framework giving direction to all parties, including contractors and third parties | AI acceptable use and vendor security requirements belong in the framework |
| 20 | Classify information assets, including those managed by third parties, by criticality and sensitivity | Each AI component above gets a classification |
| 21 and 22 | Implement commensurate controls, and evaluate the design of third parties' controls | Access control, data handling and logging for the AI system; design review of the vendor's controls |
| 23 to 26 | Detect and respond to incidents; keep response plans; review and test them annually | Response plans need AI scenarios, such as data leakage through a model |
| 27 to 31 | Systematic control testing by skilled, functionally independent specialists; assess third-party testing the entity relies on | Penetration testing that covers the AI surface, done independently |
| 32 to 34 | Internal audit reviews control design and operating effectiveness, including third parties' controls | Internal audit may assess a vendor's assurance before relying on it |
| 35 | Notify APRA within 72 hours of a material information security incident | Vendors must alert the entity fast enough for this |
| 36 | Notify APRA within 10 business days of a material control weakness that can't be remediated in time | Known AI weaknesses without a fix become reportable |

APRA's practice guide CPG 234 gives guidance on meeting the standard. It is guidance, not a binding requirement, but it shows where APRA's supervisors continue to find weaknesses.

## What must a regulated entity check in an AI vendor?

**Four CPS 234 requirements point directly at vendors: assess their information security capability (paragraph 16), evaluate the design of their controls (paragraph 22), assess their control testing where the entity relies on it (paragraph 28), and, for internal audit, assess their assurance before relying on it (paragraph 34).** Each footnote in the standard clarifies that these apply to all information assets managed by third parties, not only formally outsourced material activities.

In practice, an AI vendor should expect questions in five areas:

1. **Data flows.** Exactly what data leaves the entity, where it goes, where it is processed and stored, and for how long.
2. **Further third parties.** Which model provider, cloud and other services sit behind the vendor, and what their data use and retention terms are.
3. **Access.** Who at the vendor can see production data or prompts, how access is granted, logged and removed.
4. **Testing.** What independent testing has been done, when, by whom, and whether it covered AI-specific attacks.
5. **Incidents.** How and how fast the vendor will tell the entity about an incident or control weakness.

## Which AI-specific risks should the controls address?

**The core AI risks are prompt injection, data leakage through prompts or outputs, poisoned training or retrieval data, and an AI that can take actions beyond what its users are allowed to do.** ASD's guidance on engaging with AI describes data poisoning, input manipulation attacks including prompt injection, and privacy and intellectual property concerns. The OWASP Top 10 for LLM Applications is a widely used checklist for the same ground.

Controls that map to CPS 234's requirements for AI systems include:

- Enforcing the user's own permissions when the AI retrieves documents, so it can't reveal something the user couldn't open themselves.
- Treating all retrieved content and user input as untrusted, and limiting what tools the model can call and with what authority.
- Keeping prompts, outputs and tool calls in tamper-resistant logs, with retention and access rules to match their sensitivity.
- Confirming contractually and technically that the model provider doesn't retain or train on the entity's data beyond what's agreed.
- Versioning prompts, models and retrieval settings so that a change is reviewed like any other code change.
- Including AI attack scenarios in penetration tests and red-team exercises.

Our guide to [prompt injection](/guides/prompt-injection) covers the defences in more detail, and [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty) covers the location questions.

## CPS 234 checklist: what should be in an AI vendor's evidence pack?

**A useful evidence pack lets the entity complete its paragraph 16, 22 and 28 assessments without weeks of back and forth.** Use this as a checklist, whether you are asking for it or preparing it:

1. Architecture and data flow diagram showing every component, region and third party
2. Data inventory: what categories of information the system processes and stores
3. List of sub-processors, including the model provider, with their data use, retention and training terms
4. Hosting regions for storage, inference and logs, dated, with links to the provider's documentation
5. Access control description: roles, privileged access, multi-factor authentication, joiner and leaver process
6. Encryption in transit and at rest, and who holds the keys
7. Logging and monitoring: what is logged, where, for how long, and who reviews it
8. Secure development practices: code review, dependency scanning, secrets management, change approval
9. Most recent independent penetration test summary, its scope (including AI attack surface) and remediation status
10. Any independent assurance reports the vendor holds, with scope and date
11. Incident response plan summary and the notification commitment to the entity
12. Business continuity and exit arrangements, which also feed into CPS 230

## Does ISO 27001 certification meet CPS 234?

**Not on its own. CPS 234 is a prudential standard made by APRA under the Banking Act 1959, the Insurance Act 1973 and related Acts, and it binds the regulated entity; ISO/IEC 27001 is an international management system standard an organisation chooses to be certified against.** CPS 234 doesn't mention ISO 27001 or any other certification.

A vendor's ISO 27001 certificate is still useful evidence. It can feed the entity's assessment of the vendor's information security capability and control design. What it can't do is replace that assessment, because CPS 234 asks the entity itself to classify its assets, judge whether controls are commensurate with them, and check that testing covers them. A certificate's scope may also exclude the AI components the entity cares about, so check what it covers before relying on it.

The practical answer to "CPS 234 vs ISO 27001" is that they overlap in subject matter but answer to different people: ISO 27001 to a certification body, CPS 234 to APRA.

## CPS 234 vs CPS 230: how do they fit together?

**CPS 234 governs the security of information assets; CPS 230 governs operational risk, critical operations and service providers more broadly.** CPS 230 requires entities to meet CPS 234's information security requirements as part of managing technology risk, and says an incident already notified under CPS 234 doesn't need to be reported again under CPS 230.

| Date | Event |
|---|---|
| 1 July 2019 | CPS 234 commences |
| 1 July 2020 | CPS 234 applies to information assets managed by third parties from this date, or the earlier contract renewal |
| 1 July 2025 | CPS 230 Operational Risk Management commences |
| 1 July 2026 | CPS 230 applies to pre-existing service provider contracts from this date, or the earlier renewal; APRA's targeted amendments to CPS 230 take effect |

If an AI vendor supports a critical operation or creates material operational risk, it may be a material service provider under CPS 230, which brings contract, register and notification requirements. See [APRA CPS 230 and AI vendors](/guides/apra-cps-230-ai-vendors).

## How All Webbed Labs works with APRA-regulated clients

We don't make anyone compliant with CPS 234, and we hold no certification that would stand in for the entity's own assessment. What we do is build AI systems so the evidence the entity needs exists from the start: data flow diagrams, Australian hosting regions by default, permission-aware retrieval, logged model calls, versioned prompts, and a written list of every third party the system touches. Every change passes automated type checks and security scans and a senior engineer's review before deploy, and we support the entity's independent testers rather than marking our own homework.

For how this applies to banks, insurers and super funds, see [AI development for APRA-regulated financial services](/solutions/ai-for-financial-services), our [cybersecurity](/services/cybersecurity) service, or our [trust and security](/trust) page.
