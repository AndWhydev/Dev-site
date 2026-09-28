# Keyword optimisation changes: australia batch (2026-09-28)

All 14 pages pass `node scripts/check-content.mjs`. No prices, dates, `published` or `updated` fields changed. Disclaimers and R&D rules are unchanged: there are no offset percentages or refund promises, and pages still point to a registered R&D tax agent.

## /guides/apra-cps-234-ai
- Primary query: "APRA CPS 234 requirements"
- metaTitle: "APRA CPS 234 and AI Systems: What Vendors Must Provide" → "APRA CPS 234 Requirements for AI Systems and Vendors"
- description: "How APRA's CPS 234 information security standard applies to AI systems, what regulated entities must assess in their vendors, and the evidence to ask for." → "APRA CPS 234 requirements explained for AI systems: who the information security standard applies to, what vendors must provide, and a checklist to use."
- H1 now "APRA CPS 234 requirements for AI systems: what vendors need to provide"; H2s reworded to "What is CPS 234 and who does it apply to?", "What are the APRA CPS 234 requirements, paragraph by paragraph?", "CPS 234 checklist: ...", "CPS 234 vs CPS 230: ...".
- Added: what CPS/CPG stand for and CPS 234 vs CPG 234 (verified on apra.gov.au label definitions); new H2 "Does ISO 27001 certification meet CPS 234?" (legal basis verified in F2018L01745 text; standard has no ISO reference); FAQs "What does CPS 234 stand for?" and "Is there a CPS 234 compliance deadline?" (dates already on page).

## /guides/apra-cps-230-ai-vendors
- Primary query: "APRA CPS 230 requirements" (secondary: "CPS 230 material service provider")
- metaTitle: "APRA CPS 230 and AI Vendors: Material Service Providers" → "APRA CPS 230 Requirements for AI Vendors and Model Providers"
- description: "How APRA's CPS 230 applies to AI vendors and model providers: when they're material service providers, what contracts must say, and the key 2025 and 2026 dates." → "APRA CPS 230 requirements for AI vendors: when an AI supplier is a material service provider, what the contract must say, and the notification deadlines."
- H1 now "APRA CPS 230 requirements for AI vendors: ..."; H2s reworded to "What is CPS 230 and who does it apply to?", "CPS 230 key dates and deadlines", "CPS 230 contract checklist: ...", "CPS 230 notification requirements: ...".
- Added: what CPS stands for and "operational resilience" framing; APRA's electronic notification forms released 27 June 2025 (verified on apra.gov.au/operational-risk-management, already a listed source); new H2 "CPS 230 vs CPS 234: which applies to an AI vendor?" with comparison table (facts already on both pages); FAQs "What does CPS 230 stand for?", "Is there a CPS 230 notification form?".
- Not added: "what did CPS 230 replace" (could not confirm the list of superseded standards on apra.gov.au or the standard's text).

## /guides/essential-eight-software-development
- Primary query: "Essential Eight maturity model" (variants: Essential 8, E8, ACSC/ASD Essential Eight, ML1/ML2/ML3)
- metaTitle: "The Essential Eight for Custom Software Projects" → "Essential Eight Maturity Model for Custom Software"
- description: "How ASD's Essential Eight maturity model applies to custom software: what maps to a web or cloud app, patching timelines, MFA rules and a build checklist." → "How ASD's Essential Eight (Essential 8) maturity model applies to custom software: maturity levels 1 to 3, patching and MFA rules, and a build checklist."
- H1 now "The Essential Eight maturity model for custom software projects"; H2s "What is the Essential Eight (Essential 8)?", "An Essential Eight checklist for your next software project".
- Added: new H2 "What are Essential Eight maturity levels 1, 2 and 3?" with ML table (attacker descriptions verified in ASD maturity model); PSPF Release 2026 requires all eight strategies at ML2 for Australian Government entities and reaches service providers via deeds (verified in PSPF 2026 list of requirements PDF and protectivesecurity.gov.au/about, both added as sources); FAQs "Is the Essential Eight mandatory?", "How is an Essential Eight assessment done?" (four stages and evidence quality verified in ASD assessment process guide), "Essential Eight vs ISO 27001".

## /guides/irap-explained
- Primary query: "IRAP assessment" (secondary: "IRAP assessment cost", "IRAP certification")
- metaTitle: "IRAP Explained for Software Buyers and SaaS Vendors" → "IRAP Assessment Explained: Process, Cost and Who Needs It"
- description: "What an IRAP assessment is, what it isn't, how the four stages work, and how SaaS vendors prepare to sell to Australian government under ASD's ISM." → "What an IRAP assessment is, why there's no IRAP certification, how the four stage process works, what drives the cost, and how SaaS vendors prepare."
- H1 now "IRAP assessments explained for software buyers and SaaS vendors"; summary opens with a definition of an IRAP assessment; H2s "Is there an IRAP certification?", "What is the IRAP assessment process?".
- Added: new H2 "What drives IRAP assessment cost?" (no prices; drivers reorganised from verified page content and ASD's three-quotes advice); "IRAP compliant" row in the claims table; FAQ "How do I find an IRAP assessor?" (ASD assessor list, no recommendations, scam warning verified on cyber.gov.au IRAP page and consumer guide).
- Not added: vendor-specific IRAP status (e.g. "AWS Sydney IRAP"), not verified.

## /guides/rd-tax-incentive-software-development
- Primary query: "R&D tax incentive software development" (variants: RDTI software, R&D tax incentive eligibility, R&D tax credit / rebate / offset, internal use software)
- metaTitle: "R&D Tax Incentive for Software Development: What Qualifies" → "R&D Tax Incentive for Software: What Qualifies in Australia"
- description: "How the Australian R&D Tax Incentive treats software: core vs supporting activities, the internal administration exclusion, the 10 month deadline and records." → "R&D Tax Incentive (RDTI) eligibility for software development in Australia: core vs supporting activities, the internal software exclusion and the deadline."
- H2s reworded: "Who is eligible for the R&D Tax Incentive?", "What is the R&D Tax Incentive deadline, and how do you apply?".
- Added: new H2 "Is the R&D Tax Incentive a tax credit or a rebate?" (refundable under $20m aggregated turnover, non-refundable at $20m+, verified on business.gov.au overview; deliberately no offset percentages or refund promises, points to a registered R&D tax agent); four-step process and R&DTI customer portal plus the department's application questions guidance (verified on business.gov.au apply page); note that "internal use software" is the US term for the internal administration exclusion; FAQ "Is there an R&D Tax Incentive application form?".

## /guides/rd-tax-incentive-ai-projects
- Primary query: "R&D tax incentive AI" (variants: R&D tax credit for AI, RDTI, R&D tax incentive rate, R&D tax incentive Australia example)
- metaTitle: "R&D Tax Incentive for AI and Machine Learning Projects" → "R&D Tax Incentive for AI Projects in Australia"
- description: "When AI and machine learning work can be R&D under Australia's R&D Tax Incentive, what the official AI guidance rules out, and how to record experiments." → "Can AI projects qualify for the R&D Tax Incentive (RDTI) in Australia? What the official AI guidance rules out, a worked RAG example and how to keep records."
- H1 adds "in Australia"; summary opens "AI projects can qualify for the Australian R&D Tax Incentive (RDTI)"; worked-example H2 renamed "An R&D Tax Incentive example for AI: ...".
- Added: FAQ "Is there a special R&D tax credit or rate for AI in Australia?" (tax offset, refundable/non-refundable split by $20m turnover verified on business.gov.au overview, added as source; no rate quoted); entity mentions of LLMs, machine learning, computer vision.

## /guides/notifiable-data-breaches-software
- Primary query: "Notifiable Data Breaches scheme" (variants: NDB scheme, notifiable data breaches scheme Australia, report a data breach, penalties)
- metaTitle: "Notifiable Data Breaches Scheme: What It Means for Software" → "Notifiable Data Breaches (NDB) Scheme: A Software Guide"
- description: "Australia's Notifiable Data Breaches scheme for software teams: the 30 day assessment, who to notify, and the logging and design choices that make it workable." → "The Notifiable Data Breaches (NDB) scheme in Australia for software teams: who it applies to, the 30 day deadline, penalties and a readiness checklist."
- H1 adds "(NDB)"; H2s "What are the NDB scheme deadlines?", "NDB scheme checklist for software teams".
- Added: new H2 "Who does the NDB scheme apply to?" (moved from the small business FAQ, facts already on page); FAQ "How do you report a data breach to the OAIC?" (online Notifiable Data Breach form, verified on oaic.gov.au); FAQ "What are the penalties under the NDB scheme?" (OAIC enforcement role verified on oaic.gov.au; s 13K already on page; no dollar figures added).

## /guides/is-there-an-ai-act-in-australia
- Primary query: "AI regulation Australia 2026" (variants: AI laws in Australia, AI act Australia, AI legislation Australia, EU AI Act Australia, AI deepfake laws Australia, AI copyright laws Australia)
- metaTitle: "Is There an AI Act in Australia? AI Regulation in 2026" → "AI Regulation in Australia 2026: Is There an AI Act?"
- description: "Australia has no standalone AI Act. How AI is regulated in 2026 through existing laws, the National AI Plan, privacy reform and voluntary guidance." → "Australia has no standalone AI Act. How AI regulation in Australia works in 2026: the AI laws that already apply, the National AI Plan and the EU AI Act."
- Summary first sentence now includes "AI regulation in Australia"; H2 "Which existing laws apply to AI?" → "What AI laws apply in Australia right now?".
- Added: new H2 "Are there Australian laws on deepfakes and AI copyright?" (Criminal Code Amendment (Deepfake Sexual Material) Act 2024, s 474.17A, material "created, or altered in any way, using technology", verified on legislation.gov.au and added as source; Copyright Act 1968 title verified; copyright reform framed only as National AI Plan work already cited on page).
- Not added: Canada's AIDA (off-topic for Australian intent).

## /guides/guidance-for-ai-adoption
- Primary query: "Guidance for AI Adoption" (variants: AI6, Voluntary AI Safety Standard, VAISS, voluntary AI guardrails, NAIC, Department of Industry, Science and Resources)
- metaTitle: "Guidance for AI Adoption: The 6 Essential Practices" → "Guidance for AI Adoption (AI6): The 6 Essential Practices"
- description: "Australia's Guidance for AI Adoption replaced the Voluntary AI Safety Standard in October 2025. The six practices and what each means for software teams." → "Australia's Guidance for AI Adoption replaced the Voluntary AI Safety Standard (VAISS) in October 2025. The six essential practices and what each one means."
- H2 "How it evolved" → "What happened to the Voluntary AI Safety Standard?" with an answer-first paragraph (VAISS abbreviation and "10 voluntary AI guardrails" verified on industry.gov.au); "Where the 10 guardrails went" → "Voluntary AI Safety Standard guardrails mapped to the six practices".
- Added: "AI6" as shorthand in the intro; FAQs "What is AI6?" and "Who publishes the Guidance for AI Adoption?" (NAIC is part of DISR, verified on industry.gov.au NAIC page).
- Not added: download links or file formats (not confirmed on ai.gov.au). "AI6" is described as shorthand only; it does not appear as an official title on the ai.gov.au pages checked.

## /guides/australian-ai-ethics-principles
- Primary query: "AI ethics principles Australia" (variants: Australian Government AI ethics principles, principles of AI ethics, ethical principles in AI deployment, what is ethics in AI)
- metaTitle: "Australia's AI Ethics Principles in Practice (2026)" → "Australia's 8 AI Ethics Principles in Practice (2026)"
- description: "Australia's 8 AI Ethics Principles turned into engineering controls and evidence: fairness tests, explanations, contest flows, logging and human oversight." → "The Australian Government's 8 AI Ethics Principles turned into engineering controls: fairness tests, explanations, contest flows and human oversight."
- H2 "The three principles engineers underestimate" → "The three AI ethics principles engineers underestimate at deployment"; intro sentence tying the 8 principles to procurement questionnaires about ethical principles.
- Added: FAQ "What is ethics in AI?" (definitional, no new legal facts).

## /guides/dta-ai-policy-government
- Primary query: "DTA policy for responsible use of AI in government" (variants: DTA AI policy v2.0, responsible use of AI in government, responsible use of AI in the public service, DTA requirements)
- metaTitle: "DTA AI Policy v2.0: What Agencies and Suppliers Must Do" → "DTA Policy for Responsible Use of AI in Government v2.0"
- description: "The DTA's Policy for the responsible use of AI in government v2.0 took effect 15 December 2025. The deadlines, requirements and what suppliers should prepare." → "The DTA policy for the responsible use of AI in government v2.0 took effect 15 December 2025. Who it applies to, the requirements and what suppliers need."
- H2s "What are the DTA AI policy v2.0 deadlines?", "What are the DTA AI policy requirements for agencies?".
- Added: policy purpose paragraph and list of companion DTA resources (verified on digital.gov.au policy page); new H2 "What does responsible use of generative AI in government look like?" (five-step workflow from the policy's existing requirements, plus staff guidance on public generative AI: OFFICIAL ok subject to agency policy, no OFFICIAL: Sensitive or personal information, gen AI must not make final decisions; verified on digital.gov.au and added as source); FAQ "Why does the government promote responsible use of AI?".

## /guides/selling-software-to-australian-government
- Primary query: "sell software to government" (variants: how to sell software to the Australian government, companies that sell software to the government, government supplier registration, requirements, checklist)
- metaTitle: "How to Sell Software to Australian Government (2026)" → "How to Sell Software to the Australian Government (2026)"
- description: "How software companies sell to Australian government: BuyICT and DTA panels, the 2025 Commonwealth Procurement Rules, NSW and Victorian schemes, and security." → "How to sell software to the Australian government: BuyICT panels, AusTender, the 2025 Commonwealth Procurement Rules, state schemes and security requirements."
- H1 now "How to sell software to the Australian government"; summary opens with the primary query; steps H2 → "How to sell software to government: a step-by-step checklist".
- Added: new H2 "What are the requirements to sell software to government?" (five-row table reorganising facts already on the page); FAQ "How do I register as a government supplier in Australia?" (facts already on page).

## /guides/privacy-act-automated-decision-making
- Primary query: "automated decision making privacy act" (variants: Privacy Act December 2026, what is automated decision making, automated decision making examples, Privacy Act reform/amendment automated decision making, APP automated decision making)
- metaTitle: "Privacy Act Automated Decision-Making Rules (Dec 2026)" → "Privacy Act Automated Decision-Making Rules: December 2026"
- description: "From 10 December 2026, APP 1.7 to 1.9 require privacy policies to disclose automated decisions. What software teams need to inventory, log and document." → "The Privacy Act automated decision-making rules start 10 December 2026. What APP 1.7 to 1.9 require, examples of systems in scope and what teams must change."
- Summary opens with "the Privacy Act's automated decision-making rules"; H2s "When do the Privacy Act ADM changes start?", "Automated decision-making examples: which systems are likely in scope?".
- Added: new opening H2 "What is automated decision-making under the Privacy Act?" (definition and examples drawn from verified content already on the page).
- Not added: GDPR Article 22 comparison ("what is automated decision making gdpr"); EUR-Lex blocked automated fetches so it could not be verified on the primary source.

## /guides/privacy-act-and-ai
- Primary query: "using personal information in AI" (variants: Privacy Act and AI, AI privacy laws Australia, using personal AI for work)
- metaTitle: "Privacy Act and AI: Using Personal Information in AI" → "Privacy Act and AI: Using Personal Information in AI Systems"
- description: "How the Australian Privacy Principles apply to AI prompts, outputs, RAG and model training, based on OAIC guidance, with a checklist for software teams." → "Using personal information in AI under Australia's Privacy Act: how the APPs apply to prompts, RAG, outputs and model training, based on OAIC guidance."
- Summary opens with "Using personal information in AI systems is governed by the Privacy Act 1988"; H2 "How does each principle translate into engineering work?" → "How do the Australian Privacy Principles apply to AI?"; one sentence framing the Privacy Act as Australia's AI privacy law.
- Added: FAQ "Can staff use their own personal AI accounts for work?" (OAIC best practice already on page; DTA staff guidance verified on digital.gov.au and added as source).

