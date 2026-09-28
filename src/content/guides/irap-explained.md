---
title: "IRAP assessments explained for software buyers and SaaS vendors"
metaTitle: "IRAP Assessment Explained: Process, Cost and Who Needs It"
description: "What an IRAP assessment is, why there's no IRAP certification, how the four stage process works, what drives the cost, and how SaaS vendors prepare."
eyebrow: "Australian regulation"
category: australia
published: 2026-09-28
updated: 2026-09-28
summary: "An IRAP assessment is an independent security assessment of a system or cloud service by an assessor endorsed under IRAP, the Infosec Registered Assessors Program run by the Australian Signals Directorate (ASD). Assessors test controls, generally from ASD's Information Security Manual, for systems up to SECRET. The assessment produces a report and control matrix; it isn't a certification, and IRAP assessors don't accredit or approve systems. The buying organisation's authorising officer reads the report and decides whether to accept the risk. There's no such thing as being \"IRAP certified\"."
takeaways:
  - "IRAP endorses assessors, not products: ASD says assessors don't accredit, certify, endorse or register systems."
  - "An IRAP report records how well controls from ASD's Information Security Manual are implemented, without rating the risk or deciding if the system is acceptable."
  - "The authorising officer in the buying agency makes the risk decision, using the report and its scope."
  - "Security assessments of outsourced cloud services and gateways must be done by an IRAP assessor; any organisation, not only government, can engage one."
  - "ASD's cloud certification program and certified cloud services list ended in 2020, so claims of ASD-certified cloud are out of date."
faqs:
  - q: "Is IRAP a certification?"
    a: "No. ASD states that IRAP assessors do not accredit, certify, endorse or register systems on its behalf, and that a completed assessment doesn't imply a system is compliant with the tested controls. The correct description is that a system or service has been IRAP assessed, against a stated scope and classification, on a stated date."
  - q: "Do I need an IRAP assessment to sell SaaS to government?"
    a: "Not always. Whether an agency asks for one depends on the data the service will handle, the agency's risk appetite and its procurement requirements. Agencies are most likely to ask for one where a cloud service will hold sensitive or classified information. ASD's consumer guide says security assessments of outsourced cloud service providers and their cloud services must be undertaken by an IRAP assessor."
  - q: "If we host on an IRAP-assessed cloud, is our application IRAP assessed?"
    a: "No. Your application can inherit some controls from the cloud platform under a shared responsibility model, but the controls you configure and build are yours, and they sit outside the platform's assessment. ASD's cloud controls matrix is designed to show which controls a consumer inherits and which it must implement."
  - q: "How much does an IRAP assessment cost?"
    a: "It depends on the scope, the classification level, the number of systems and how ready you are. ASD doesn't publish prices, and it recommends getting at least three quotes and not limiting yourself to assessors close by. Preparation, such as fixing control gaps and writing documentation, is often a bigger cost than the assessment itself."
  - q: "How do I find an IRAP assessor?"
    a: "ASD publishes a list of endorsed IRAP assessors on cyber.gov.au. ASD doesn't recommend specific assessors or help choose one for a particular job, so shortlist from the list, get at least three quotes, and check each assessor's experience with your type of system and classification level. ASD also warns that an unsolicited caller claiming to be an IRAP assessor may be a scammer."
  - q: "Is All Webbed Labs an IRAP assessor?"
    a: "No. All Webbed Labs is not an IRAP assessor, isn't endorsed by ASD, and doesn't operate any IRAP-assessed system. We can build software to ISM-informed requirements and prepare documentation, but an assessment must be done by an independent, endorsed assessor."
sources:
  - title: "Infosec Registered Assessors Program (IRAP)"
    url: "https://www.cyber.gov.au/business-government/protecting-devices-systems/assessment-evaluation-programs/irap"
    publisher: "Australian Signals Directorate"
  - title: "IRAP consumer guide"
    url: "https://www.cyber.gov.au/business-government/protecting-devices-systems/assessment-evaluation-programs/irap/irap-consumer-guide"
    publisher: "Australian Signals Directorate"
  - title: "IRAP common assessment framework"
    url: "https://www.cyber.gov.au/sites/default/files/2025-04/IRAP%20common%20assessment%20framework.pdf"
    publisher: "Australian Signals Directorate"
  - title: "IRAP: cloud services"
    url: "https://www.cyber.gov.au/business-government/protecting-devices-systems/assessment-evaluation-programs/irap/cloud-services"
    publisher: "Australian Signals Directorate"
  - title: "Information Security Manual (ISM)"
    url: "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism"
    publisher: "Australian Signals Directorate"
  - title: "Hosting Certification Framework"
    url: "https://www.hostingcertification.gov.au/framework"
    publisher: "Australian Government"
related:
  - title: "The Essential Eight for custom software projects"
    href: "/guides/essential-eight-software-development"
  - title: "How to sell software to Australian government"
    href: "/guides/selling-software-to-australian-government"
  - title: "AI and software development for Australian government"
    href: "/solutions/government-ai-and-software"
  - title: "Data residency vs data sovereignty in Australia"
    href: "/guides/data-residency-vs-data-sovereignty"
service:
  title: "Cybersecurity and secure development"
  href: "/services/cybersecurity"
disclaimer: legal
---

## What is IRAP?

**IRAP, the Infosec Registered Assessors Program, is the Australian Signals Directorate's program for endorsing individual cyber security professionals to carry out independent security assessments.** ASD describes its purpose as giving organisations access to high-quality, independent security assessment services. Endorsed assessors can assess ICT systems, cloud services, gateways and GovLink at SECRET and below.

The assessments are based mainly on ASD's Information Security Manual (ISM), the government's cyber security control framework, along with the Protective Security Policy Framework and other government security guidance. The ISM is updated regularly; at the time of writing (September 2026) the current edition is the September 2026 ISM.

Any organisation can engage an IRAP assessor. It is most common among cloud and software providers that want to sell to Australian government agencies, and among agencies assessing their own systems.

## Is there an IRAP certification?

**No. IRAP is not a certification, an accreditation or an approved products list.** ASD is explicit: "IRAP Assessors do not accredit, certify, endorse or register systems on behalf of ASD." It adds that an assessment generally won't cover every ISM control, and that a completed assessment doesn't in itself mean a system complies with the controls tested.

That makes a lot of marketing language inaccurate. A quick guide to what you'll hear:

| What people say | What's actually true |
|---|---|
| "We're IRAP certified" | There is no IRAP certification. A service can be IRAP assessed, against a scope, at a level, on a date |
| "We're IRAP compliant" | ASD says a completed assessment doesn't in itself mean a system complies with the controls tested. Ask for the report or letter of completion and its scope |
| "ASD approved our platform" | ASD doesn't approve systems through IRAP. It endorses the assessors |
| "We're on ASD's certified cloud list" | ASD ended its Cloud Services Certification Program on 2 March 2020 and the Certified Cloud Services List on 27 July 2020. Those certifications are void |
| "Our host is IRAP assessed, so our app is too" | Only the controls inherited from the host are covered. Your application's controls need their own assessment |
| "IRAP means we're cleared for PROTECTED" | The agency's authorising officer decides whether to authorise a system, after reading the report |

## What is the IRAP assessment process?

**ASD's IRAP Common Assessment Framework sets out four stages that assessors must follow: plan and prepare, define the assessment boundary, assess the controls, and produce the report.**

1. **Plan and prepare.** The assessor sets objectives, forms the team and identifies information sources. Before starting, the assessor must notify ASD's IRAP administration team and submit a conflict of interest declaration.
2. **Define the assessment boundary.** The assessor and the organisation agree what is in scope: systems, components, locations and, for a service provider, possibly its corporate network depending on how administration is secured. Anything out of scope must be justified in the report.
3. **Assess the controls.** The assessor tests implemented controls against the ISM, gathering evidence for each.
4. **Produce the report.** The report and control matrix record how each control is implemented, whether it is effective, ineffective, an alternate control, not implemented, not assessed, not applicable, or could not be verified ("no visibility"), the evidence and how it was tested, security weaknesses, and recommendations.

One detail surprises many buyers. IRAP assessors don't give risk ratings. The framework says they describe weaknesses and potential impacts "so that the consumer of the report can undertake their own assessment of the risks", because risk is a business decision for the authorising officer.

## What drives IRAP assessment cost?

**ASD doesn't publish IRAP assessment prices, because the cost depends on the scope, the classification level, the number of systems and components in the boundary, and how ready the system is when the assessor arrives.** Assessors quote their own fees, and ASD recommends getting at least three quotes and not limiting the search to assessors located nearby.

The factors that move the price:

| Cost driver | Why it matters |
|---|---|
| Assessment boundary | More components, regions, third parties and admin paths mean more controls to test |
| Classification level | ISM control applicability depends on it, so a higher classification usually brings more controls into scope |
| Readiness | Missing documentation or unimplemented controls lengthen the assessment and the findings list |
| Evidence access | Assessors need access to people, systems and records; delays add days |
| Re-assessment | A lapsing assessment has to be redone in time, and a changed system may need a wider scope |

For most vendors, preparation is the bigger cost: fixing control gaps, writing the system security plan and running a penetration test first. The readiness checklist below is where that money goes.

## Who decides whether a system can be used?

**The authorising officer in the organisation that wants to use the system decides, not the assessor and not ASD.** The IRAP report is an input. The authorising officer reads it, checks the scope and findings against the agency's needs and risk appetite, and decides whether to authorise the system for use.

This is why scope matters so much. The framework notes that an authorising officer can authorise fewer services than were assessed, but the authorisation boundary shouldn't be larger than the assessment boundary. If a vendor's report covers its core platform but not the AI feature or integration an agency wants, that gap is the agency's problem to weigh.

## Does a buyer need to ask for IRAP?

**A buyer should ask for an IRAP report when the system will handle sensitive or classified government information, or when its own policies require one.** For commercial buyers, IRAP is one form of independent assurance among several, useful where you want an ISM-based view.

| Your situation | Is IRAP relevant? |
|---|---|
| Australian government agency buying a cloud service for OFFICIAL: Sensitive or PROTECTED data | Usually yes. ASD says assessments of outsourced cloud services must be done by an IRAP assessor |
| Agency building its own system on an IRAP-assessed cloud | Yes, for the parts the agency builds and configures, as well as the inherited controls |
| State government buyer | Depends on the state's own security policy; many reference the ISM or accept IRAP reports |
| Private company handling sensitive data | Optional. IRAP, other independent audits or targeted penetration tests may fit better |
| Startup selling to government for the first time | Worth planning for early if target agencies will hold sensitive data |

For the hosting side, federal agencies procuring hosting for sensitive data, whole-of-government systems and PROTECTED systems also deal with the Hosting Certification Framework, which covers sovereignty, ownership and supply chain for data centre and cloud providers. At the time of writing its registration of new providers is paused while the framework is reformed.

## How should a SaaS vendor prepare?

**Preparation is mostly engineering and documentation: implement the relevant ISM controls, document them, and make sure the evidence exists before the assessor arrives.** Assessments of unprepared systems tend to produce long findings lists, and remediation then re-assessment costs time.

A readiness checklist for a SaaS product aiming at government buyers:

1. Decide the classification level and data types you are targeting, because ISM control applicability depends on it.
2. Host on a cloud platform with its own IRAP assessment at that level, and use its cloud controls matrix to map which controls you inherit.
3. Draw a clear system boundary: every component, region, third party and administrative path.
4. Write the system security plan, using ASD's system security plan annex template for the current ISM.
5. Implement the ISM controls that apply, starting with the Essential Eight mitigations that apply to your environment, such as multi-factor authentication, patching and restricted admin privileges.
6. Build in logging and monitoring that meets ISM event logging expectations, with retention and protection of logs.
7. Keep data in Australia where your buyers need it, including backups, logs and any AI model inference.
8. Document incident response, business continuity and personnel security arrangements.
9. Commission a penetration test and fix the findings before the IRAP assessment.
10. Get at least three quotes from endorsed assessors, as ASD recommends, and agree scope and deliverables in writing. Don't try to define favourable outcomes; ASD warns this jeopardises the assessment's integrity.
11. Plan re-assessment. The consumer guide advises allowing enough time to complete a re-assessment before the current assessment expires.

The [Essential Eight guide](/guides/essential-eight-software-development) covers the baseline controls in engineering terms, and [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty) covers the location questions.

## Where does AI fit into an IRAP assessment?

**An AI feature is part of the system, so it belongs inside the assessment boundary like any other component.** In practice that means the model endpoint, its region, the data sent to it, logging of prompts and outputs, and any third-party model provider should all appear in the boundary diagram and the system security plan. A vendor whose IRAP report predates its AI features should expect agencies to ask whether those features were assessed.

## How All Webbed Labs relates to IRAP

To be clear: All Webbed Labs is not an IRAP assessor, isn't endorsed by ASD, and doesn't operate any IRAP-assessed system. We don't hold security clearances and we aren't on any government panel.

What we can do is engineering. We build software on cloud platforms in Australian regions, can design to the ISM controls a client specifies, document system boundaries and data flows, and produce the technical material a system security plan draws on. The assessment itself must come from an independent, endorsed IRAP assessor chosen by the client. If you are preparing a product for government, see our [cybersecurity](/services/cybersecurity) service, [AI and software for government](/solutions/government-ai-and-software), and [how to sell software to Australian government](/guides/selling-software-to-australian-government).
