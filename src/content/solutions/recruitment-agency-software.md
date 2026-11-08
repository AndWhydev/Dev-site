---
title: "Recruitment agency software in Australia: JobAdder, Bullhorn and AI shortlisting"
metaTitle: "Recruitment Software Australia: JobAdder, Bullhorn and AI"
description: "Recruitment software for Australian agencies: when JobAdder or Bullhorn is enough, adding AI shortlisting safely, and the privacy rules from December 2026."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "Most Australian recruitment agencies should keep their ATS, usually JobAdder or Bullhorn, and build around it: integrations, temp onboarding, margin reporting and AI that helps consultants shortlist faster. The risk in that AI is legal rather than technical. Screening tools must not discriminate, the Australian Human Rights Commission's checklist expects people to stay in control of hiring decisions, and from 10 December 2026 the Privacy Act requires your privacy policy to describe automated decisions that significantly affect individuals. Indicative market ranges for a focused AI shortlisting assistant with an audit log sit around $30,000 to $90,000 (AUD, ex GST), as a range, not a quote."
takeaways:
  - "Keep the ATS and extend it. JobAdder offers partner API access through OAuth2, and Bullhorn publishes a REST API, so most custom value sits beside the ATS rather than replacing it."
  - "AI should rank and explain, and a consultant should decide. Log every score, the reasons given and the person who made the call."
  - "From 10 December 2026, APP 1.7 to 1.9 require your privacy policy to describe the kinds of personal information used and decisions made by computer programs that significantly affect people."
  - "Build VEVO checks into onboarding as a recorded step with the candidate's permission, the result and the date, and a reminder before any visa expires."
  - "Agency reporting on placements, margin and consultant performance is often the cheapest custom win, because the data already sits in the ATS and payroll."
faqs:
  - q: "What is the best recruitment software in Australia?"
    a: "For most agencies the shortlist is the established ATS and CRM platforms such as JobAdder, Bullhorn, Vincere and Loxo, chosen on desk type, job board integrations, temp support and price. JobAdder is Australian and widely used locally; Bullhorn suits larger and multi country agencies. Run a trial with your own desks and data before you commit. Custom software makes sense for the gaps around the ATS, not usually for the ATS itself."
  - q: "Can we connect our own software to JobAdder?"
    a: "Yes, through JobAdder's partner API. JobAdder's partner guidance says a technology partner registers one developer account, and a client's admin user (or a user with permission to grant API access to integration partners) authorises the connection through the OAuth2 authorisation code flow. Webhooks and partner action buttons can be set up, and should be removed cleanly when the integration is disconnected."
  - q: "Is it legal to use AI to screen candidates in Australia?"
    a: "It can be, but federal and state anti discrimination laws apply to the outcome, whatever tool produced it. A model trained on past hiring can reproduce past bias, for example by penalising career gaps or certain names. Test the tool for unequal outcomes before use, tell candidates you use AI, keep a person responsible for every rejection, and get employment law advice on your specific process."
  - q: "What changes for recruiters on 10 December 2026?"
    a: "The Privacy Act's automated decision making transparency rules start. If a computer program makes, or substantially and directly contributes to, a decision that could reasonably be expected to significantly affect someone's rights or interests, your privacy policy must describe the kinds of personal information used and the kinds of decisions made. Automated rejection of applicants is the obvious example to assess."
  - q: "Can VEVO checks be automated?"
    a: "Home Affairs says registered organisations can use VEVO through an ImmiAccount to see the visa conditions of visa holders who have given them permission. Your onboarding software can manage the request, record the permission, store the result and remind you when a visa is about to expire. Some vendors offer automated checking services; confirm how they access VEVO before relying on one."
  - q: "How long should we keep candidate data?"
    a: "Only as long as you need it for a purpose the candidate would expect, plus any period the law requires. APP 11 requires entities to take reasonable steps to destroy or de identify personal information they no longer need. Set retention rules by record type, ask dormant candidates whether they want to stay in your talent pool, and purge or de identify the rest on a schedule."
sources:
  - title: "Privacy and Other Legislation Amendment Act 2024 (No. 128, 2024), as made"
    url: "https://www.legislation.gov.au/C2024A00128/asmade/text"
    publisher: "Federal Register of Legislation"
  - title: "APP 1.7 to 1.9 Transparency Obligation: Fact Sheet, September 2026"
    url: "https://www.oaic.gov.au/__data/assets/pdf_file/0021/269013/APP-1.7-1.9-Transparency-Obligation-Fact-Sheet.PDF"
    publisher: "Office of the Australian Information Commissioner"
  - title: "AI and recruitment compliance checklist"
    url: "https://humanrights.gov.au/resource-hub/technology-and-human-rights/ai-and-recruitment-compliance-checklist"
    publisher: "Australian Human Rights Commission"
  - title: "Check visa conditions online (VEVO)"
    url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online"
    publisher: "Department of Home Affairs"
  - title: "Partner Tech Integration"
    url: "https://jobadderapi.zendesk.com/hc/en-us/articles/7040444063503-Partner-Tech-Integration"
    publisher: "JobAdder"
  - title: "Bullhorn recruitment software (AU)"
    url: "https://www.bullhorn.com/au/"
    publisher: "Bullhorn"
  - title: "Chapter 11: APP 11 Security of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Astute Payroll"
    url: "https://www.astutepayroll.com/"
    publisher: "Astute Payroll"
  - title: "RCSA Code of Professional Conduct"
    url: "https://www.rcsa.com.au/code"
    publisher: "Recruitment, Consulting and Staffing Association"
  - title: "Regulated labour hire arrangement orders"
    url: "https://www.fwc.gov.au/work-conditions/labour-hire-employees-protected-rates-pay/regulated-labour-hire-arrangement-orders"
    publisher: "Fair Work Commission"
related:
  - title: "Labour hire software"
    href: "/solutions/labour-hire-software"
  - title: "Privacy Act automated decision making rules"
    href: "/guides/privacy-act-automated-decision-making"
  - title: "AI agents vs chatbots vs automation"
    href: "/guides/ai-agents-vs-chatbots-vs-automation"
  - title: "How much does API integration cost in Australia?"
    href: "/guides/api-integration-cost-australia"
  - title: "How much does a rostering and workforce management system cost?"
    href: "/guides/workforce-management-system-cost"
service:
  title: "AI agent development"
  href: "/services/ai-agent-development"
industry:
  title: "AI & Automation"
  href: "/industries/ai-automation"
disclaimer: legal
---

## Should an agency replace its ATS or build around it?

**Build around it. An agency's ATS and CRM holds candidates, contacts, jobs, placements and the job board feeds, and replacing that is rarely worth the cost or the disruption.** The useful custom work is in what the ATS does badly for your particular desks: shortlisting at volume, onboarding temps, matching timesheets to payroll and reporting margin.

| Your situation | Usually the right move |
|---|---|
| Permanent desks, under 20 consultants, standard workflow | Configure JobAdder, Bullhorn, Vincere or Loxo well; use the marketplace integrations |
| Heavy temp or contract volume | Keep the ATS, add a temp onboarding and timesheet app connected to payroll |
| High application volume per role | Add an AI shortlisting assistant over ATS data, with an audit log |
| Owners can't see margin by client, desk or consultant | Add a reporting layer that joins ATS placements with payroll and invoicing |
| You are building a recruitment product to sell | Build, and expect to become the vendor with everything that implies |

Check API access before any of this. JobAdder's partner guidance describes a single developer account per technology partner, OAuth2 authorisation by a client admin, and webhooks and partner action buttons that must be removed when an integration is disconnected. Bullhorn publishes developer and API documentation for its REST API. If the endpoints you need are missing or rate limited, that changes the design, so confirm them in the Discovery stage. Our [API development](/services/api-development) service and the [API integration cost guide](/guides/api-integration-cost-australia) cover how these projects are priced.

## Where does AI shortlisting go wrong?

**AI goes wrong in recruitment when it decides instead of assists, or when nobody can explain why a candidate scored low.** The technology is good at reading 400 CVs against a brief, pulling out years of experience, licences and location, and producing a ranked list with reasons. It is bad at knowing that a career gap was parental leave, or that a candidate's unusual title means the same thing as yours.

Anti discrimination law applies to the outcome whether a person or a model produced it. Commonwealth laws cover discrimination on grounds such as sex, race, disability and age, and each state has its own Act. A model trained on your past placements can learn the patterns of your past choices, including the ones you would not defend.

The Australian Human Rights Commission, with LexisNexis, publishes an AI and recruitment compliance checklist built around four areas: privacy and data protection, digital robustness and safety, fairness and transparency, and accountability and sustainability. Its framing is that humans stay in control of decisions and candidates can challenge unfair outcomes. In software terms, that becomes a short design brief:

1. **Score against the brief, not against history.** Criteria come from the job's stated requirements, written by the consultant, not inferred from who you placed before.
2. **Strip what shouldn't count.** Names, photos, dates of birth and addresses beyond the commute radius are hidden from the scoring step.
3. **Show the reasons.** Every score comes with the evidence quoted from the CV, so the consultant can check it in seconds.
4. **A person decides every rejection.** The assistant suggests; a named consultant moves candidates forward or out.
5. **Log everything.** Keep the brief, the model version, each score, its reasons and the consultant's decision, so you can answer a complaint months later.
6. **Test before go live.** Run the assistant over past applications and look for unequal outcomes between groups before it touches a live role.

Our [AI agent development](/services/ai-agent-development) work follows this pattern, and our guide to [AI hallucinations](/guides/ai-hallucinations) explains why quoted evidence matters.

## What does 10 December 2026 change for recruiters?

**From 10 December 2026, Australian Privacy Principles 1.7 to 1.9 require an APP entity's privacy policy to describe automated decisions that could reasonably be expected to significantly affect an individual's rights or interests.** The duty covers decisions a computer program makes, and decisions where it substantially and directly contributes. The policy must describe the kinds of personal information used and the kinds of decisions made.

For an agency, a knockout question that silently rejects applicants is the clearest case to assess. A ranked list a consultant reviews is less clear, which is exactly why you want the record of who decided. Many agencies will be APP entities because they exceed the small business turnover threshold or handle certain kinds of information; confirm your position with your adviser.

A practical inventory looks like this:

| Question for each tool in your stack | Why it matters |
|---|---|
| Does it reject, rank, or filter candidates without a person looking? | That is the decision most likely to be in scope |
| What personal information feeds it? | The policy must describe the kinds used |
| Who owns the configuration, and when did it last change? | Your description must stay accurate as rules change |
| Can you show a candidate how a decision was reached? | Complaints and access requests will ask |

Our [Privacy Act automated decision making guide](/guides/privacy-act-automated-decision-making) covers the rule in detail.

## How should right to work checks fit onboarding?

**Make the work rights check a step the system won't let anyone skip, with the evidence stored against the placement.** Home Affairs says registered organisations can use VEVO, through an ImmiAccount, to see the visa conditions of visa holders who have given them permission. VEVO can't confirm Australian citizenship, so citizens need a different document, such as a passport or citizenship certificate.

A good onboarding flow for temps and contractors captures, in order: identity, work rights with the permission recorded, the VEVO result and its date, visa expiry and conditions such as work limits, licences and tickets, super and tax details, and the induction for the host site. The system then reminds the team before a visa or licence expires and stops the worker being booked if one lapses.

## What about temps, timesheets and payroll?

**For temp desks the money is made or lost between the timesheet and the pay run.** Payroll tools built for recruitment and labour hire, such as Astute Payroll, let you configure award and enterprise agreement rules with timesheets and invoicing, and general platforms such as Employment Hero handle pay for direct staff. The custom work is usually the gap: a mobile timesheet that the host supervisor approves on the spot, rates that follow the right award or agreement for that client and role, and an exceptions queue for anything unusual.

If you supply workers into larger hosts, check whether a Fair Work Commission regulated labour hire arrangement order covers any of them. Those orders can require labour hire employees to be paid at least the host's enterprise agreement rate. Our [labour hire software](/solutions/labour-hire-software) page covers licensing and Same Job Same Pay in detail.

## How clean is your talent pool?

**Most agency databases hold years of candidates who never agreed to stay that long.** APP 11 requires reasonable steps to destroy or de identify personal information an entity no longer needs, and stale data is also breach exposure. The RCSA Code of Professional Conduct sets professional standards for its members on top of the law.

A hygiene job usually means three things: retention rules by record type, a consent refresh that asks dormant candidates whether they want to stay, and an automated purge or de identification of everyone else. Doing this before you point an AI assistant at the database also improves its results.

## Which reports do agency owners actually want?

**Margin by client, by desk and by consultant, and the pipeline that will produce next quarter's margin.** ATS dashboards show activity; payroll shows cost; invoicing shows revenue. Owners want them joined:

- Gross margin per placement and per hour for temps, by client and consultant.
- Time to fill and submittal to interview ratio by desk.
- Revenue at risk from contracts ending in the next 60 days.
- Consultant activity against outcomes, so coaching is based on evidence.

This is a [data analytics](/services/data-analytics) project rather than an AI one, and it is often the quickest return.

## What does it cost?

**Indicative Australian market ranges, AUD ex GST, for builds around an existing ATS.** These assume agency rates in the ranges in our [developer rates guide](/guides/software-developer-rates-australia); roughly $1,000 to $1,600 a day for a mixed team means a $40,000 build is about 25 to 40 days of work.

| Build | Indicative range |
|---|---|
| AI shortlisting assistant over ATS data, with audit log and bias testing | $30k to $90k |
| Temp onboarding and timesheet app connected to payroll | $50k to $150k |
| Margin and performance reporting across ATS, payroll and accounting | $25k to $70k |
| Talent pool retention and consent workflow | $15k to $40k |

Running costs include hosting, model usage for the AI parts and maintenance, usually budgeted at 15 to 20% of build cost a year. These are ranges, not quotes.

## How AWLabs approaches recruitment software

AWLabs hasn't yet delivered a project for a recruitment agency, so we don't claim sector experience we don't have. We bring integration, data and AI engineering, and your employment lawyer and privacy adviser own the legal interpretation. The first step is a Development Consult. If custom work makes sense, our paid Discovery Audit maps your ATS, payroll and reporting and confirms the API access, with the fee credited in full against the build. You then receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, updates arrive every Tuesday and Friday, Sydney time, and the code and IP are assigned to you as they are paid for.
