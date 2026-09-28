---
title: "AI and software development for Australian healthcare"
metaTitle: "AI in Healthcare Australia: Healthcare Software Development"
description: "AI in healthcare in Australia: use cases and healthcare software development under the Privacy Act, state health records laws, My Health Record and TGA rules."
eyebrow: "Industry solution"
published: 2026-09-28
updated: 2026-09-28
summary: "AI in healthcare, and healthcare software development generally, is shaped in Australia by five overlapping sets of rules: health information is sensitive information under the Privacy Act, several states add their own health records laws, the My Health Records Act bars certain participants from holding or processing records offshore, the TGA regulates software whose intended purpose is diagnosis, monitoring or treatment, and Ahpra expects practitioners to stay accountable for AI-assisted care. Administrative and documentation tools sit outside TGA regulation; tools that suggest diagnoses or treatments may not. Interoperability runs on HL7 v2 today and FHIR AU increasingly."
takeaways:
  - "All health information is sensitive information under the Privacy Act, and any business providing a health service is covered regardless of turnover."
  - "Whether software is a medical device depends on its intended purpose, not its technology. An AI scribe that only summarises is generally outside TGA regulation; add diagnosis suggestions and it can become a device."
  - "Section 77 of the My Health Records Act prohibits the System Operator, registered repository and portal operators and contracted service providers from holding or processing My Health Record records outside Australia."
  - "NSW, Victoria and the ACT have their own health records legislation on top of the Privacy Act."
  - "AU Core and AU Base are the Australian FHIR implementation guides to design against; most existing clinical systems still exchange HL7 v2 messages."
faqs:
  - q: "Does an AI scribe need TGA approval?"
    a: "It depends on what it does. The TGA's own example says a digital scribe that records and summarises clinician and patient conversations initially doesn't meet the definition of a medical device, but adding a feature that suggests diagnoses or treatments not discussed in the consultation changes its intended purpose and brings it into regulation. Keep the scope to transcription and summarising unless you intend to go through the medical device pathway."
  - q: "Can patient data be processed by an AI model hosted overseas?"
    a: "For most providers the Privacy Act doesn't ban it, but APP 8 makes you accountable for how the overseas recipient handles the data, state laws may add conditions, and My Health Record data is subject to the section 77 onshore rule for the entities it covers. In practice, health clients and patients expect Australian processing, so we design for Australian regions and only go offshore with a documented, approved reason."
  - q: "Do patients need to consent to AI being used in their care?"
    a: "Ahpra's guidance says practitioners should involve patients in decisions to use AI tools that require their personal data, obtain informed consent and ideally record it. It specifically notes that generative AI scribing tools generally require informed consent. The software should make capturing and recording that consent easy."
  - q: "Can you connect to My Health Record?"
    a: "Connecting to the My Health Record system requires registration and conformance processes run by the Australian Digital Health Agency and Services Australia. We can build the software side and support that process, but we don't hold conformance for a product of our own, and passing it is the software owner's responsibility."
  - q: "Which clinical systems can you integrate with?"
    a: "Integration usually goes through the vendor's published API, an HL7 v2 interface engine, a FHIR endpoint or a secure messaging provider. Access terms vary by vendor and often need a partnership agreement, so we confirm access in discovery before quoting the build."
  - q: "Is custom EHR or practice software regulated by the TGA?"
    a: "Electronic health records and clinical workflow management software are among the TGA's exclusion categories, so a records or practice system is generally not a medical device. The exclusion only holds if every function meets it. Add a feature that flags a likely diagnosis or predicts deterioration and that function needs its own assessment."
  - q: "Can AI help with Medicare billing and claims?"
    a: "Yes, on the preparation side. A model can check that the documentation supports the item numbers selected and flag incomplete notes before claims go out, for billing staff to review. The practice and the treating practitioner stay responsible for what is claimed, so the tool should suggest and flag rather than submit on its own."
  - q: "Is de-identified data outside the Privacy Act?"
    a: "Information that is genuinely de-identified is no longer personal information, but free-text clinical notes are hard to de-identify reliably and re-identification risk rises when datasets are combined. Treat de-identification as a risk assessment, not a checkbox, and keep the original data under full protection."
sources:
  - title: "Artificial intelligence (AI) and medical device software regulation"
    url: "https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation"
    publisher: "Therapeutic Goods Administration"
  - title: "Software-based medical device exclusions"
    url: "https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/overview/software-based-medical-device-exclusions"
    publisher: "Therapeutic Goods Administration"
  - title: "Clinical decision support system exemption amendments"
    url: "https://www.tga.gov.au/news/news-articles/clinical-decision-support-system-exemption-amendments"
    publisher: "Therapeutic Goods Administration"
  - title: "My Health Records Act 2012"
    url: "https://www.legislation.gov.au/C2012A00063/latest/text"
    publisher: "Federal Register of Legislation"
  - title: "APP Guidelines, Chapter B: Key concepts"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-b-key-concepts"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Health Records and Information Privacy Act 2002 (HRIP Act)"
    url: "https://www.ipc.nsw.gov.au/privacy/nsw-privacy-laws/hrip"
    publisher: "Information and Privacy Commission NSW"
  - title: "Meeting your professional obligations when using Artificial Intelligence in healthcare"
    url: "https://www.ahpra.gov.au/Resources/Artificial-Intelligence-in-healthcare.aspx"
    publisher: "Ahpra"
  - title: "AU Core Implementation Guide"
    url: "https://hl7.org.au/fhir/core/"
    publisher: "HL7 Australia"
related:
  - title: "Using personal information in AI systems under the Privacy Act"
    href: "/guides/privacy-act-and-ai"
  - title: "Data residency vs data sovereignty in Australia"
    href: "/guides/data-residency-vs-data-sovereignty"
  - title: "Healthcare software"
    href: "/industries/healthcare"
  - title: "Private LLM deployment"
    href: "/services/private-llm-deployment"
service:
  title: "LLM integration services"
  href: "/services/llm-integration"
industry:
  title: "Healthcare"
  href: "/industries/healthcare"
disclaimer: legal
---

## Why is healthcare software built differently?

**Because the data is among the most sensitive a business can hold, the rules come from several directions at once, and a small change in what the software claims to do can turn it into a regulated medical device.** A booking app, an AI scribe and a deterioration-prediction model can share most of their code and sit under completely different regulatory treatment.

That makes scoping the most important engineering decision on a health project. Before any architecture, we would want the intended purpose written down in one or two sentences, because the TGA, privacy regulators and clinicians will all read the product through that statement.

## Which rules shape a health AI build?

**Five layers apply to most projects, and they stack rather than replace each other.** The table summarises each one and what it changes in the software.

| Rule | What it says in short | What it changes in the build |
|---|---|---|
| Privacy Act 1988 | Health information is sensitive information, with stricter collection, use and disclosure rules. Businesses that provide a health service and hold health information are covered regardless of turnover | Consent capture, purpose limits on reuse (including for model improvement), APP 8 assessment for any offshore processing, breach response under the Notifiable Data Breaches scheme |
| State health records laws | NSW's Health Records and Information Privacy Act 2002 and Victoria's Health Records Act 2001 cover public and private health providers in those states; the ACT has its own health records law | Access and correction workflows, retention rules, state-specific principles in the privacy design |
| My Health Records Act 2012, section 77 | The System Operator, registered repository operators, registered portal operators and registered contracted service providers must not hold records, or process information relating to them, outside Australia | Hard onshore requirement for any component in that role, including model inference and logs |
| Therapeutic Goods Act 1989 (TGA) | Software intended for diagnosis, prevention, monitoring, prediction, prognosis or treatment is a medical device, unless excluded or exempt | Scope boundary: features that cross it trigger the medical device pathway |
| Ahpra professional obligations | Practitioners remain accountable for care, must apply human judgement to AI output, and should obtain informed consent for AI tools that use patient data | Clinician review before anything enters the record, consent recording, clear labelling of AI-generated content |

The penalties are serious enough to design around. A contravention of section 77 carries a civil penalty of up to 1,500 penalty units, and the fault-based offence up to 5 years' imprisonment.

Public hospitals and state health departments add their own procurement security and data requirements on top, which vary by state.

## Is your software a medical device?

**It is if its intended purpose is medical, whatever technology it uses.** The TGA regulates software, including large language models and other AI, when it is intended for diagnosis, prevention, monitoring, prediction, prognosis or treatment of disease or injury, among other purposes. We can explain where the boundary sits; deciding which side a product falls on is for the manufacturer, ideally with regulatory advice.

A practical way to test a feature:

1. **Write the intended purpose** as it would appear in marketing, instructions and the user interface. The TGA reads all three.
2. **Ask whether it informs a clinical decision about a specific patient.** Scheduling, billing and transcription generally don't; flagging a likely diagnosis does.
3. **Check the 15 exclusion categories** in the Therapeutic Goods (Excluded Goods) Determination 2018. They include electronic health records, clinical workflow management, communications, middleware, and health facility management software. Every function must meet the exclusion for the product to be excluded.
4. **Check the clinical decision support system (CDSS) exemption.** Some lower-risk decision support is exempt from ARTG inclusion if it meets all the criteria. The TGA has amended the exemption's wording for clarity from 1 November 2026, without changing its scope.
5. **Plan for scope creep.** The TGA gives the example of a scribe that becomes a device once it suggests diagnoses or treatments not discussed in the consultation. Features added later need the same test.

| Feature | Likely treatment | Why |
|---|---|---|
| Consultation transcription and note drafting | Generally not a device | Records and summarises; clinician decides |
| Referral letter drafting from the clinician's notes | Generally not a device | Communication of the clinician's decisions |
| Appointment triage by urgency keywords for reception staff | Needs careful review | Can drift into clinical prioritisation |
| Suggesting diagnoses from symptoms | Likely a device | Intended for diagnosis |
| Predicting patient deterioration | Likely a device | The TGA lists this as an example |
| General health chatbot that users treat as a doctor | Can become a device through off-label use | The TGA expects manufacturers to prevent or address that use |

We don't act as a TGA sponsor or manufacturer's regulatory representative. Where a project crosses the line, the product owner needs regulatory advice and a quality management system, and the build plan changes accordingly.

## Which AI use cases in healthcare are realistic without crossing that line?

**Most of the near-term value of AI in healthcare is administrative and documentary, which is also where healthcare automation has always paid off first, and it stays on the non-device side when designed carefully.**

- **Clinical documentation support:** transcription and draft notes that the clinician edits and approves, with consent captured first.
- **Referral and correspondence processing:** reading incoming referrals, extracting patient and referrer details, and matching them to the patient record for staff to confirm, a standard [AI document processing](/services/ai-document-processing) pattern.
- **Staff policy assistant:** answering questions from the organisation's own procedures, infection control manuals and HR policies, with citations. Our [RAG knowledge base service](/services/rag-knowledge-base) covers the retrieval design.
- **Revenue cycle and claims:** checking item numbers and documentation completeness before claims are submitted, for billing staff to review.
- **Patient communications:** appointment reminders, preparation instructions and plain-language versions of approved information, never individual clinical advice.

## How does it exchange data with clinical systems?

**Most Australian clinical systems, from GP practice software to hospital EMRs and EHRs, still exchange HL7 v2 messages, while new national work is built on FHIR, so a realistic build handles both.** HL7 Australia publishes AU Base, which defines Australian concepts such as Medicare numbers, and AU Core, which sets minimum expectations for FHIR resources and API interactions. The Sparked program, a community of government, clinicians and vendors, develops AU Core and related Australian data sets.

| System type | Examples | Typical integration path |
|---|---|---|
| General practice clinical software | Best Practice, MedicalDirector | Vendor API or partner program, where available |
| Hospital EMR | Epic, Oracle Health, InterSystems TrakCare | Interface engine (HL7 v2), FHIR APIs where enabled |
| Pathology and radiology results | Laboratory and imaging providers | HL7 v2 result messages |
| Secure clinical messaging | HealthLink, Medical Objects | Messaging provider integration |
| National identifiers | Healthcare Identifiers Service (IHI, HPI-I, HPI-O) | Services Australia conformance process |
| My Health Record | National system | Conformance and registration through the Australian Digital Health Agency and Services Australia |

For any integration touching national infrastructure, conformance testing belongs to the software owner. We build to the specifications and support the process; we don't claim conformance on anyone's behalf.

## Where should health data and models live?

**Onshore, by default and in most cases by requirement.** Any component acting for a My Health Record participant covered by section 77 must keep records and processing in Australia, and that includes AI inference and logs, not just the database. Outside that rule, APP 8 and state law make offshore processing possible but accountable, and patients and health services generally expect Australian handling.

At the time of writing (September 2026), some commercial models are offered in Australian regions of the major clouds, but availability varies by model. Where the right model isn't available onshore, an open-weight model in the client's own Australian cloud account is the fallback; our [private LLM deployment service](/services/private-llm-deployment) covers that option. The [data residency explainer](/guides/data-residency-vs-data-sovereignty) explains why residency and sovereignty aren't the same thing.

## What are the clinical risks, and how are they controlled?

**The biggest risk in health AI isn't a data breach, it's plausible but wrong content entering a patient record.** A drafted note that records a medication the patient never mentioned, or a summary that drops an allergy, can cause harm long after the consultation ends. The controls below are what we would expect before go-live.

- **Clinician sign-off before anything enters the record.** AI drafts are labelled as drafts, and the approving clinician is recorded.
- **Source linking.** Every statement in a summary links back to the transcript segment or document it came from, so the reviewer can check quickly.
- **Omission testing.** Evaluation sets include consultations with allergies, medications and red-flag symptoms, and the test fails if the summary drops them.
- **Consent gating.** Recording doesn't start until consent is captured, and the consent is written to the record.
- **No silent training.** Patient data isn't used to improve models unless that use has been assessed, disclosed and approved.
- **Scope guardrails.** Prompts and output checks stop the tool from volunteering diagnoses or treatment suggestions, which also protects the TGA boundary described above.

Our [guide to reducing AI hallucinations](/guides/ai-hallucinations) goes into the evaluation techniques in more depth.

## What does an engagement look like, and what does it cost?

**A first health AI system on the non-device side typically takes 13 to 23 weeks and costs roughly $90,000 to $350,000 (AUD, ex GST) including discovery.** These are typical Australian market ranges for senior onshore teams, not a quote. Integration access and privacy assessment usually drive the timeline more than the engineering.

| Phase | Duration | Typical range (AUD, ex GST) | Output |
|---|---|---|---|
| Discovery | 3 to 5 weeks | $15,000 to $40,000 | Intended purpose statement, TGA boundary analysis for your advisers, privacy impact assessment inputs, integration access plan, fixed price |
| Pilot | 6 to 10 weeks | $50,000 to $160,000 | Working system with a small clinical or admin group, evaluation on real (approved) data |
| Production | 4 to 8 weeks | $25,000 to $150,000 | Monitoring, security testing, consent and audit features, handover |

Worked example: a referral processing tool of about 420 hours at a blended $180 an hour is $75,600, plus 250 hours of integration and hardening at the same rate ($45,000) and $25,000 of discovery, for $145,600 ex GST. A product that crosses into medical device territory costs considerably more because of the quality management system, clinical evidence and regulatory work involved.

## How All Webbed Labs approaches health projects

We start every health engagement by writing down the intended purpose and mapping it against the TGA boundary and privacy obligations with your advisers, before choosing architecture. Data, vector indexes and, where possible, model inference stay in Australian regions. Every change passes automated quality gates and a senior engineer's review, and code lives in your repository from day one. We don't hold ADHA conformance, TGA registrations or healthcare-specific certifications; we build to your requirements and provide the evidence your clinical governance, privacy and regulatory teams need. See [LLM integration](/services/llm-integration) and our [healthcare](/industries/healthcare) page.
