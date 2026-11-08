---
title: "How much does a penetration test cost in Australia? (2026)"
metaTitle: "Penetration Testing Cost in Australia (2026 Price Guide)"
description: "Penetration testing cost in Australia: published AUD ranges by scope, what drives the price, scans vs manual tests vs red teams, and when you need CREST."
eyebrow: "Cost guide"
category: cost
published: 2026-11-08
updated: 2026-11-08
summary: "Published Australian price guides put most penetration tests between about $8,000 and $55,000 (AUD, ex GST), depending on scope. A small external test with one web application sits around $8,000 to $14,000, an application with several user roles around $16,000 to $30,000, and a multi site internal network around $30,000 to $55,000. Automated scanning packages are cheaper, at roughly $5,000 to $12,000, and full red team engagements run from about $60,000 to $200,000 or more. These are third party market ranges, not quotes."
takeaways:
  - "The price is mostly tester days. One published guide implies roughly $2,000 per tester day across its scopes, so anything that adds days (roles, APIs, hosts, environments) adds cost."
  - "An automated scan, a manual penetration test and a red team are different products. Make sure every quote you compare is for the same one."
  - "Applications with several user roles, payments, SSO or multi tenant data need manual testing, because the serious bugs are in the business logic."
  - "If a customer, insurer or contract requires a CREST accredited tester, check the provider on the CREST Marketplace before you sign."
  - "Testing is only worth paying for once the basics are fixed. Run your own scans first so the testers spend their days on what a scanner can't find."
faqs:
  - q: "How much does a web application penetration test cost in Australia?"
    a: "For a single web application, published Australian guides suggest about $8,000 to $14,000 ex GST for a small app with one user role, and $16,000 to $30,000 for one or two applications with multiple roles. Multi tenant SaaS, payments, SSO and large APIs push it higher."
  - q: "What is the difference between a vulnerability scan and a penetration test?"
    a: "A scan uses automated tools to find known weaknesses, such as outdated software and common misconfigurations. A penetration test has a skilled person try to exploit and chain those weaknesses, including flaws in your business logic that no scanner understands, and show what an attacker could actually achieve."
  - q: "How often should we get a penetration test?"
    a: "Epic IT's October 2026 guide suggests external infrastructure annually, internal networks every 18 to 24 months, and application testing with significant releases plus a fuller annual review. Your contracts, insurer or a framework you report against may set a different cadence."
  - q: "Can penetration testing be fully automated?"
    a: "Automated tools, including AI assisted ones, now find more than they used to and are worth running on every release. They still miss authorisation flaws, multi step business logic abuse and issues that depend on understanding what the application is for. Treat automation as the floor and manual testing as the check."
  - q: "Is a code audit the same as a penetration test?"
    a: "No. A code audit reads the source code and configuration from the inside, which finds problems a tester can't see from outside, such as hard coded secrets or unsafe patterns. A penetration test attacks the running system from the outside. They complement each other."
  - q: "Do we need a CREST accredited tester?"
    a: "Only if someone requires it or you want that assurance. CREST accredits companies against its standards and lists them on the CREST Marketplace. If an enterprise customer, government buyer or insurer asks for CREST, check the contract wording and verify the provider there. If nobody requires it, choose on the tester's experience with your type of system."
  - q: "Is a retest included in the price?"
    a: "Often, but not always. Some Australian providers include a retest within a set window, such as 90 days, after you fix the findings. Ask whether the retest is included, what it covers and how long you have."
sources:
  - title: "Penetration testing cost in Australia"
    url: "https://compliancecouncil.com.au/penetration-testing-cost/"
    publisher: "Compliance Council"
  - title: "Penetration testing for Australian SMBs in 2026: what it costs and what it finds"
    url: "https://www.epicit.com.au/penetration-testing-australian-smb-2026/"
    publisher: "Epic IT"
  - title: "CREST Marketplace: find accredited suppliers"
    url: "https://marketplace.crest.org/"
    publisher: "CREST"
  - title: "CREST accreditation"
    url: "https://www.crest-approved.org/membership/accreditation/"
    publisher: "CREST"
  - title: "OWASP Web Security Testing Guide"
    url: "https://owasp.org/www-project-web-security-testing-guide/"
    publisher: "OWASP Foundation"
  - title: "OWASP Application Security Verification Standard"
    url: "https://asvs.owasp.org/"
    publisher: "OWASP Foundation"
related:
  - title: "Essential Eight for software development"
    href: "/guides/essential-eight-software-development"
  - title: "Notifiable data breaches: what software teams need to know"
    href: "/guides/notifiable-data-breaches-software"
  - title: "Code audit"
    href: "/services/code-audit"
  - title: "QA and testing"
    href: "/services/qa-testing"
service:
  title: "Cybersecurity and secure software development"
  href: "/services/cybersecurity"
---

## How much does a penetration test cost in Australia?

**Most Australian penetration tests cost between about $8,000 and $55,000 ex GST, and the scope decides where you land.** That range comes from Compliance Council's 2026 Australian pricing guide. Epic IT's guide, updated in October 2026, uses three wider bands that separate scanning, manual testing and red teaming.

| Scope | Typical range (AUD, ex GST) | Effort | Source |
|---|---|---|---|
| Automated vulnerability scanning with a report | $5,000 to $12,000 | 2 to 5 days | Epic IT |
| Small external footprint: up to 20 hosts, one web app, one user role | $8,000 to $14,000 | 4 to 6 tester days | Compliance Council |
| One or two applications with multiple user roles | $16,000 to $30,000 | 8 to 14 tester days | Compliance Council |
| Manual external and internal testing for an SMB | $18,000 to $45,000 | 2 to 4 weeks | Epic IT |
| Focused external plus Microsoft 365 engagement | $20,000 to $30,000 | Not stated | Epic IT |
| Internal network across several sites, several hundred hosts, Active Directory | $30,000 to $55,000 | 15 to 25 tester days | Compliance Council |
| Full red team engagement | $60,000 to $200,000+ | 6 to 12 weeks | Epic IT |

These are published third party figures, not our prices. AWLabs doesn't sell standalone penetration tests. The ranges are useful for checking whether a quote is in the normal band for its scope.

Epic IT also puts a typical annual testing program for a 50 person SMB at $30,000 to $50,000 a year, once you add up the different tests on their recommended cadence.

## What drives the price of a pen test?

**Tester days drive the price, and scope drives the days.** Compliance Council's bands imply a fairly steady rate: $8,000 over 4 days and $14,000 over 6 days are both around $2,000 to $2,300 a day, and $16,000 over 8 days to $30,000 over 14 days works out at about $2,000 to $2,150 a day. Any requirement that adds days adds roughly that much.

The things that add days:

| Driver | Why it adds time |
|---|---|
| Number of user roles | Each role needs testing for what it can see and do, and whether it can reach another role's data |
| Multi tenant data | Testers have to prove one customer can't read or change another's records |
| APIs | Every endpoint is an entry point; large or undocumented APIs take longer |
| Payments, SSO and integrations | More flows to abuse, more trust boundaries to check |
| Mobile apps | The app, its local storage and its API calls are tested separately |
| Hosts and sites | Internal network tests scale with the number of hosts, sites and the Active Directory setup |
| Cloud environments | Reviewing identity, storage and network configuration in AWS, Azure or Google Cloud |
| Reporting and retest | A board ready report and a retest after fixes are sometimes priced separately |
| Testing windows | After hours testing against production, or tight deadlines, can cost more |

The cheapest way to lower the price is to give testers what they need on day one: working test accounts for every role, API documentation, an architecture diagram and a named contact who can unblock them. Days lost waiting for access are days you still pay for.

## Scan, pen test or red team: which one do you need?

**Buy the smallest test that answers your actual question.** The three products answer different questions, and quotes that look wildly different are often for different products.

| | Automated scan | Manual penetration test | Red team |
|---|---|---|---|
| Question it answers | Do we have known, common weaknesses? | Can an attacker get in and what could they do? | Would we detect and stop a determined attacker? |
| Who does it | Tools, with a person reviewing output | Skilled testers, assisted by tools | A team simulating a real adversary over weeks |
| Finds business logic flaws | Rarely | Yes | Yes, plus people and process weaknesses |
| Typical use | Every release, monthly or quarterly | Before launch, after major change, annually | Mature organisations with a security team |
| Published range | $5,000 to $12,000 | $8,000 to $55,000 | $60,000 to $200,000+ |

A word of caution on "penetration tests" at scan prices. Epic IT distinguishes automated scanning with reporting from genuine manual testing, and says the deliverable should be a narrative of what an attacker could actually achieve, with documented proof of impact. If a quote is for a few days of effort, ask how much of it is a person testing by hand.

For an application with logins, the serious problems are usually authorisation flaws: a user changing an ID in a request and seeing someone else's invoice, or a standard user calling an admin endpoint. Scanners don't know what each role should be allowed to do. A person working from a method like the OWASP Web Security Testing Guide does.

## When do you need a CREST accredited tester?

**You need a CREST accredited provider when a customer, insurer or regulator you answer to asks for one; otherwise it's one quality signal among several.** CREST is an international body that accredits security testing companies against its standards. Its directory of accredited suppliers now sits on the CREST Marketplace, so check a provider there rather than relying on a logo on their website.

Common reasons to insist on CREST:

- An enterprise or government customer's contract or security questionnaire asks for it.
- Your cyber insurer or a regulator you report to expects it.
- You want a recognised external standard to point to in a tender or due diligence.

AWLabs is not CREST accredited, and we don't offer independent penetration testing as a service. When a client needs an independent test, we help them scope it and work with the tester, and we refer the testing itself to a specialist firm. That separation is also good practice: the people who built the software shouldn't be the only ones who tested it.

If nobody requires CREST, ask any provider: who will do the testing, what they've tested that resembles your system, whether the test is manual, what the report looks like (ask for a redacted sample), and whether a retest is included.

## How often should you test?

**Test before launch, after significant change, and on a regular cycle that matches your risk.** Epic IT suggests this cadence for SMBs:

| What | Suggested frequency |
|---|---|
| External infrastructure | Annually |
| Internal network | Every 18 to 24 months |
| Cloud and Microsoft 365 | Annually, or every 2 years with Conditional Access in place |
| Applications | With significant releases, plus a comprehensive review annually |

Your own trigger list matters more than the calendar. Retest when you add payments, open an API to third parties, add a new user role, move hosting, or take on a customer whose contract demands it. Between tests, run automated scanning on every release.

## Worked example: scoping a test for a small SaaS product

**Working out tester days from your own scope gives you a sanity check before quotes arrive.** This is an illustration using the published day rate implied above, not a quote.

**The scenario:** a booking platform for allied health clinics. It has a web app, a REST API used by a mobile app, three roles (clinic admin, practitioner, patient), Stripe payments and data for many clinics in one database.

| Item | Estimated tester days | Reasoning |
|---|---|---|
| Web application, three roles | 4 | Each role tested for what it can see and change |
| Tenant isolation between clinics | 2 | Two clinic accounts, checking every record type for cross access |
| REST API (about 60 endpoints) | 3 | Authorisation on each endpoint, input handling, rate limits |
| Mobile app (iOS and Android builds) | 2 | Local storage, certificate handling, API calls from the app |
| Payments and booking logic | 1 | Price tampering, booking without paying, refund abuse |
| Report and debrief | 1 | Written findings, severity ratings, walkthrough |
| **Total** | **13 days** | |

At about $2,000 to $2,150 a day, 13 days is roughly $26,000 to $28,000 ex GST, plus GST of 10%. That sits inside Compliance Council's $16,000 to $30,000 band for applications with multiple roles, so a quote in that range would be normal for this scope. A quote at $6,000 for the same scope is almost certainly mostly automated; a quote at $60,000 is either including something extra (a red team, cloud review or several retests) or worth questioning.

Dropping the mobile app from scope, because it only calls the same API, would save about 2 days, or around $4,000. Testing in a staging environment instead of after hours on production can also remove a premium.

## How do you compare penetration testing quotes?

**Line the quotes up by tester days and method, not by headline price.** Ask every provider the same questions:

1. How many tester days are in the quote, and how many are manual testing by a person?
2. Who exactly will test, and what similar systems have they tested?
3. Which methodology do you follow (for example the OWASP Web Security Testing Guide for web apps)?
4. Is the retest included, and within what window?
5. Can we see a redacted sample report?
6. What do you need from us before day one, and what happens if access isn't ready?
7. Are you CREST accredited, and for which services? (Only matters if someone requires it.)
8. Is the price ex GST, and is anything charged separately, such as reporting or after hours work?

## How do you prepare your app so the test is worth the money?

**Fix what a scanner can find before you pay a person to find it.** Testers billed at around $2,000 a day shouldn't spend day one reporting an outdated library.

A preparation checklist:

1. Run dependency, container and static analysis scans, and fix the high and critical findings.
2. Remove test accounts, debug endpoints and default credentials from the target environment.
3. Decide on scope in writing: URLs, API base paths, mobile builds, IP ranges, and what is out of bounds.
4. Choose the environment. A production like staging environment with realistic data is often safer than production.
5. Create test accounts for every role, including two separate customer accounts to test tenant isolation.
6. Share API documentation, an architecture diagram and any known weak spots.
7. Agree testing windows, a contact during testing and what happens if something critical is found mid test.
8. Book time after the report to fix findings, then schedule the retest.

If you're building to a recognised standard, the OWASP Application Security Verification Standard (version 5.0.0 at the time of writing) is a useful checklist of controls to have in place before testing starts. For government facing software, our [Essential Eight guide](/guides/essential-eight-software-development) explains how those controls relate to the software you build.

## What do the findings cost to fix?

**Budget for remediation separately, because the test only tells you what's wrong.** Most reports rank findings by severity. Critical and high findings usually need fixing before launch or within days; medium findings within a planned release; low findings when convenient.

Remediation cost depends on who built the system and how. A finding in code your team understands might be a few hours. The same finding in an unfamiliar or poorly structured codebase can take days, which is why some clients commission a [code audit](/services/code-audit) first. If personal information was exposed in a way a real attacker could have used, check your obligations under the [Notifiable Data Breaches scheme](/guides/notifiable-data-breaches-software).

## How AWLabs approaches security testing

We build security testing into the software we build, rather than selling penetration tests. Static analysis, dependency scanning and container scanning run on every change, a person reviews the code before it ships, and before launch we run automated penetration testing against the release and fix what it finds. Senior engineers lead every build.

What we refer out: independent manual penetration testing and red teaming, and anything that needs a CREST accredited provider. If you want one, we help you scope it, give the testers what they need, and fix the findings in the software we built. Our [cybersecurity service](/services/cybersecurity) explains the controls we build in, and our [QA and testing service](/services/qa-testing) covers the wider test approach. Your auditor or compliance adviser, not us, confirms whether the result meets a particular framework.
