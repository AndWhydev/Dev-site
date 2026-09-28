---
title: "Privacy Act automated decision-making rules from 10 December 2026: what software teams must change"
metaTitle: "Privacy Act Automated Decision-Making Rules (Dec 2026)"
description: "From 10 December 2026, APP 1.7 to 1.9 require privacy policies to disclose automated decisions. What software teams need to inventory, log and document."
eyebrow: "Australian regulation"
category: australia
published: 2026-09-28
updated: 2026-09-28
summary: "From 10 December 2026, Australian Privacy Principles 1.7 to 1.9 require an APP entity's privacy policy to describe the kinds of personal information used, and the kinds of decisions made, when a computer program makes or substantially and directly contributes to a decision that could reasonably be expected to significantly affect someone's rights or interests. The law is a transparency duty, not a ban on automation. For software teams, the practical work is finding every such decision in your systems, recording how each one works, and keeping that record accurate as the code changes."
takeaways:
  - "The obligation was added by Schedule 1, Part 15 of the Privacy and Other Legislation Amendment Act 2024 and commences on 10 December 2026, 24 months after Royal Assent."
  - "It applies to decisions made after commencement, even if the system was built and the data collected years earlier."
  - "It covers programs that make a decision and programs that do something substantially and directly related to a decision, such as scoring, ranking or flagging for a human."
  - "Refusing or failing to decide counts, and beneficial decisions count as well as adverse ones."
  - "APP 1.7 is listed in section 13K of the Privacy Act, so a deficient privacy policy can attract an infringement notice without proof of a serious interference."
  - "You can't write an accurate privacy policy without an inventory of automated decisions, which is an engineering artefact, not a legal one."
faqs:
  - q: "When do the Privacy Act automated decision-making rules start?"
    a: "10 December 2026. Schedule 1, Part 15 of the Privacy and Other Legislation Amendment Act 2024 commences the day after the end of the 24 month period starting on Royal Assent, which was 10 December 2024. The OAIC's APP 1 guidelines and its May 2026 issues paper both confirm the date."
  - q: "Do the new rules ban automated decisions or require a human in the loop?"
    a: "No. APP 1.7 to 1.9 are transparency obligations. They require your APP privacy policy to describe the kinds of personal information used and the kinds of decisions made or substantially assisted by computer programs. They don't create a right to human review or a right to an explanation of an individual decision, although other laws and codes may."
  - q: "Does an AI tool that only recommends a decision to a staff member count?"
    a: "It can. APP 1.7 covers a program that does a thing substantially and directly related to making a decision, and APP 1.8(c) asks you to disclose those kinds of decisions separately from fully automated ones. Where the line sits for a human reviewing an AI recommendation is one of the questions the OAIC consulted on in 2026, so treat assistive tools as in scope until guidance says otherwise."
  - q: "Does this apply to small businesses?"
    a: "It applies to APP entities. Most businesses with annual turnover of $3 million or less are not APP entities, but some are regardless of turnover, including health service providers and businesses that trade in personal information. Check your status with the OAIC's guidance before assuming you are out of scope."
  - q: "What happens if our privacy policy doesn't cover our automated decisions?"
    a: "APP 1.7 is listed in section 13K of the Privacy Act, a civil penalty provision with a maximum of 200 penalty units per contravention, and the OAIC can issue infringement notices or compliance notices for it. More serious interferences with privacy can also be pursued under sections 13G and 13H."
  - q: "Has the OAIC published final guidance?"
    a: "At the time of writing (September 2026), the OAIC has updated its APP 1 guidelines to cover the new subclauses and ran a consultation on detailed ADM guidance that closed on 15 June 2026. It said it intended to publish that guidance before commencement. Check the OAIC site for the final version."
sources:
  - title: "Privacy and Other Legislation Amendment Act 2024 (No. 128, 2024), as made"
    url: "https://www.legislation.gov.au/C2024A00128/asmade/text"
    publisher: "Federal Register of Legislation"
  - title: "Chapter 1: APP 1 Open and transparent management of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Consultation on Guidance for Transparency in Automated Decision Making"
    url: "https://www.oaic.gov.au/engage-with-us/consultations/consultation-on-guidance-for-transparency-in-automated-decision-making"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Automated Decision-Making Transparency Obligation (APP 1) Issues Paper, May 2026"
    url: "https://www.oaic.gov.au/__data/assets/pdf_file/0027/263925/ADM-Issues-Paper.pdf"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Automated Decision-Making Reform consultation"
    url: "https://consultations.ag.gov.au/integrity/adm/"
    publisher: "Attorney-General's Department"
related:
  - title: "Using personal information in AI systems under the Privacy Act"
    href: "/guides/privacy-act-and-ai"
  - title: "Australia's AI Ethics Principles in practice"
    href: "/guides/australian-ai-ethics-principles"
  - title: "Is there an AI Act in Australia?"
    href: "/guides/is-there-an-ai-act-in-australia"
  - title: "How to evaluate an LLM application before launch"
    href: "/guides/llm-evaluation"
service:
  title: "AI governance and responsible AI engineering"
  href: "/services/ai-governance"
disclaimer: legal
---

## What does the new automated decision-making rule require?

**From 10 December 2026, an APP entity's privacy policy must describe its use of computer programs in decisions that could significantly affect individuals.** The rule sits in three new subclauses of Australian Privacy Principle 1, inserted by Schedule 1, Part 15 of the Privacy and Other Legislation Amendment Act 2024.

APP 1.7 sets the trigger. The disclosure is required if all three of these are true:

1. the entity has arranged for a computer program to make a decision, or to do a thing that is substantially and directly related to making a decision;
2. the decision could reasonably be expected to significantly affect the rights or interests of an individual; and
3. personal information about that individual is used in the operation of the program.

APP 1.8 sets what the policy must contain:

- the kinds of personal information used in the operation of those programs;
- the kinds of decisions made solely by the program; and
- the kinds of decisions where the program does a thing substantially and directly related to the decision, such as producing a score a person then acts on.

APP 1.9 widens the net. Refusing or failing to decide counts as deciding. A decision can affect someone beneficially as well as adversely. The Act gives three examples of decisions that may affect rights or interests: granting or refusing a benefit under legislation, a decision affecting rights under a contract, and a decision affecting access to a significant service or support.

## Key dates

**The obligation is fixed in the Act and doesn't need a proclamation.** Part 15 commences the day after the end of 24 months starting on Royal Assent.

| Date | What happened or happens | Source |
|---|---|---|
| 10 December 2024 | Privacy and Other Legislation Amendment Act 2024 receives Royal Assent | Act, section 2 |
| 11 December 2024 | Most of Schedule 1 commences, including APP 11.3 (security includes technical and organisational measures) and the new penalty tiers | Act, section 2 |
| 10 June 2025 | Statutory tort for serious invasions of privacy (Schedule 2) commences | Act, section 2; DISR |
| 3 October 2025 | OAIC updates its APP 1 guidelines to cover APP 1.7 to 1.9 | OAIC |
| 18 May 2026 | OAIC publishes its ADM transparency issues paper | OAIC |
| 15 June 2026 | Consultation on the OAIC's ADM guidance closes | OAIC |
| 10 December 2026 | APP 1.7 to 1.9 commence and apply to decisions made from this date | Act, section 2 and Schedule 1 item 89 |

The application clause matters for existing systems. Item 89 says the rule applies to decisions made after commencement, whether the program was arranged, and the data acquired, before or after that date. A credit rules engine written in 2019 is in scope on 10 December 2026 if it is still making decisions.

## Which systems are likely in scope?

**Anything that uses personal information to decide, score, rank, approve, refuse or route people in a way that materially affects them.** It doesn't matter whether the logic is a machine learning model, a large language model, or a hand-written `if` statement. "Computer program" is not limited to AI.

| System | Likely in scope? | Why |
|---|---|---|
| Automated loan, credit limit or buy now pay later approval | Yes | Affects contractual rights and access to credit |
| Insurance claim triage that auto-approves small claims and flags others | Yes | Solely automated approvals, plus substantially related flagging |
| CV screening that filters out applicants before a recruiter sees them | Yes | Refusing to progress an application is a decision |
| Fraud model that freezes an account pending review | Yes | Affects access to a service under contract |
| Tenant or customer risk scoring shown to a staff member | Probably | Doing a thing substantially and directly related to a decision |
| Personalised pricing or eligibility for offers | Possibly | Depends on significance; the OAIC used differential pricing as an edge case |
| Product recommendations on a retail site | Unlikely | Rarely significant enough, but document your reasoning |
| Spam filtering of inbound email | Unlikely | Usually not about an individual's rights or interests |

These are illustrations, not legal conclusions. The significance test depends on context, and the OAIC's 2026 issues paper specifically asked for views on generative AI with human oversight, differential pricing and targeted job ads, which tells you where the grey areas are.

## What does engineering have to build?

**Five things: an inventory, a data map per decision, decision logs, a change trigger, and a link from the code to the privacy policy.** The legal duty is to publish a description. The engineering duty is to make sure the description is true and stays true.

### 1. An automated decision inventory

Your privacy officer can't describe decisions nobody has listed. Build a register with one row per decision type. For each, record the system and service that makes it, the owner, whether it is solely automated or assistive, the population affected, the outcome options (including "no decision" and timeouts), and the date it was last reviewed. Keep it in version control next to the code, or in your governance tool, not in someone's inbox.

### 2. A data map for each decision

APP 1.8(a) asks for the kinds of personal information used. Trace every input feature, prompt field, retrieved document and third-party enrichment call back to a category of personal information. This is where teams get caught out: a model that uses postcode, device fingerprint or inferred income uses personal information even if name and email never touch it. For LLM features, include the context you inject from retrieval and conversation history.

### 3. Decision logs you can query

The Act doesn't mandate logs, but you can't describe or defend a decision system you can't observe, and complaints, OAIC inquiries and the statutory tort all turn on facts. A useful decision record captures:

| Field | Purpose |
|---|---|
| Decision ID and timestamp | Trace a complaint to a single event |
| Subject reference (pseudonymous) | Link to the person without copying their data into logs |
| Decision type (from the inventory) | Tie each event to what the policy discloses |
| Model or rules version, prompt version | Reproduce what the system did on that day |
| Input categories used | Prove which personal information was used |
| Output, score and threshold | Show why the outcome followed |
| Human reviewer and action, if any | Distinguish solely automated from assisted decisions |

Apply the same retention and access controls to these logs as to the source data. Under APP 11 they are personal information too.

### 4. A change trigger

Every new model, feature, data source or threshold change can alter what the policy must say. Add a pull request check or release checklist item: "Does this change add, remove or alter an entry in the automated decision inventory?" If yes, the privacy officer is notified before release, not after.

### 5. A traceable link to the privacy policy

Give each inventory entry an ID and reference it in the privacy policy drafting notes. When the policy is reviewed, anyone can check each disclosed kind of decision against the systems that actually make it.

## How should the privacy policy wording be approached?

**At the level of "kinds", not individual algorithms.** APP 1.8 asks for the kinds of personal information and the kinds of decisions, split between solely automated and substantially assisted. You don't have to publish model weights or thresholds. You do have to be specific enough that a reader can understand which of their dealings with you involve automation.

A workable pattern, subject to your lawyers' review:

- a short section headed plainly, such as "Automated decisions";
- a list of decision types in customer language ("whether to approve an application for a credit limit increase");
- for each, whether it is made automatically or with automated assistance to a staff member;
- the kinds of personal information used ("your transaction history, income details you provide and your repayment history with us"); and
- how to contact you about a decision.

Engineering's role is supplying accurate raw material. The words, and the judgement on significance, belong to your privacy and legal advisers.

## Readiness checklist for software teams

Use this in the weeks before and after 10 December 2026.

- [ ] Every system that uses personal information to decide, score, rank, flag or route people is listed in an inventory with an owner.
- [ ] Each entry is classified as solely automated or assistive, with a note on why.
- [ ] Each entry has a data map of the personal information categories it uses, including inferred data and LLM context.
- [ ] Decision events are logged with model or rules version and input categories, under the same access controls as source data.
- [ ] Third-party decision services (credit bureaus, fraud vendors, AI APIs) are in the inventory, since the obligation covers programs you have "arranged for".
- [ ] A release checklist item flags changes that affect the inventory.
- [ ] Privacy officer and engineering have reviewed the draft policy section together against the inventory.
- [ ] Customer service has a route to identify which system made a decision when someone asks.
- [ ] The inventory has a review date, at least annually and on every major release.

## What this rule does not do

**It doesn't require a human in the loop, a right to explanation, or an impact assessment.** The Privacy Act Review proposed further ADM rights, and the Attorney-General's Department consulted separately on a framework for automated decision-making in government services, responding to the Robodebt Royal Commission. At the time of writing those remain proposals. Build your inventory and logs so they can support individual explanations later, because the direction of travel is clear.

Other obligations still apply alongside the new rule: APP 3 on collection, APP 6 on use for the purpose of collection, APP 10 on accuracy and APP 11 on security. Those are covered in our guide to [using personal information in AI systems](/guides/privacy-act-and-ai). If a breach exposes decision logs or training data, the [Notifiable Data Breaches scheme](/guides/notifiable-data-breaches-software) applies. The broader picture of AI regulation is in [is there an AI Act in Australia](/guides/is-there-an-ai-act-in-australia).

## How All Webbed Labs approaches this

We treat the automated decision inventory as a deliverable of the build, not a legal afterthought. On systems we design, decision logging, version tagging and a data map per decision are part of the architecture from discovery onwards, and on existing systems we can audit the code to find decisions nobody wrote down. We supply the engineering evidence; your privacy officer and lawyers decide what the policy says and whether it meets the law. See our [AI governance and responsible AI engineering](/services/ai-governance) service, our approach to [evaluating AI systems before launch](/guides/llm-evaluation), and the [code audit](/services/code-audit) we use to map existing systems.
