---
title: "Is my Lovable app production ready? Taking an app built with Lovable, Bolt, Replit or v0 to launch"
metaTitle: "Is My Lovable App Production Ready? Vibe Coded App Checklist"
description: "What breaks when an app built with Lovable, Bolt, Replit or v0 goes live: security, data access, scaling and privacy, and what to fix first before you launch."
eyebrow: "Explainer"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "An app built with Lovable, Bolt, Replit, v0 or a similar AI app builder is production ready when its data access rules, authentication, secrets, payments, backups and error monitoring have been checked by someone who understands them, not just when it works in a demo. These tools are excellent for getting a working prototype in days. The gaps show up later: database tables readable by anyone, API keys exposed in the browser, missing server side checks, no backups and no privacy policy. Fix access control and secrets first, then reliability, then everything else."
takeaways:
  - "AI app builders produce working software fast, but working in a demo and safe with real customer data are different standards."
  - "The most serious and most common problem is data access: tables without row level security, or checks done only in the browser."
  - "Lovable's own documentation says its security scans cannot guarantee complete security and that you are responsible for your app's security."
  - "Most AI built apps are worth keeping and hardening; a rebuild is only needed when the data model or architecture is wrong for where the product is going."
  - "Export the code to your own repository early, and check each tool's terms for what you own and what licence the platform keeps over your data."
faqs:
  - q: "Is my Lovable app secure enough to launch?"
    a: "Not until someone has checked it. Lovable runs automatic security scans, but its documentation says they cannot guarantee complete security and recommends a professional review for apps handling sensitive data. Before launch, confirm that row level security is on for every table, no secret keys are in browser code, every sensitive action is checked on the server, and you have backups and error monitoring."
  - q: "What is a vibe coded app?"
    a: "A vibe coded app is one built mainly by describing what you want to an AI tool and accepting the code it writes, often without reading that code closely. Lovable, Bolt, Replit and v0 are common tools for it. The approach is fast and useful for prototypes; the risk is that nobody has reviewed the parts that matter for security and reliability."
  - q: "Can Lovable build mobile apps?"
    a: "Lovable's documentation says it builds web applications, which can be designed to work well on phones, and does not generate React Native projects. If you need an app in the Apple App Store or Google Play, you would wrap the web app, rebuild the front end in a mobile framework, or start with a tool that targets mobile. Our web app vs mobile app guide covers that choice."
  - q: "Can a developer take over my Lovable, Bolt or Replit project?"
    a: "Yes, as long as you can export the code and the database. Lovable supports syncing code to a git repository on all plans and downloading a zip on paid plans, with the database exported separately. A developer can then review the code, set up proper environments and continue the work outside the builder if that makes sense."
  - q: "Do I need to rebuild my AI built app from scratch?"
    a: "Usually not. Most of these apps use mainstream frameworks and a Postgres database, so the usual path is to keep the code, fix the security and reliability gaps, and refactor the weakest parts. A rebuild makes sense when the data model can't support the next stage of the product or the code has become too tangled to change safely."
  - q: "What is Supabase row level security and why does it matter?"
    a: "Row level security is a database rule that decides which rows each user can read or change. Supabase's documentation says a table in an exposed schema without it is readable and writable by any role with a grant on it, and recommends enabling it on every table in an exposed schema. Without it, the public key used in the browser can expose your whole database."
  - q: "Does my app need a privacy policy?"
    a: "If your business is covered by the Privacy Act, APP 1 requires a clearly expressed and up to date privacy policy. Small businesses with annual turnover of $3 million or less are generally exempt, but there are exceptions, such as health service providers and businesses that trade in personal information. Apple also requires apps that let users create an account to offer account deletion within the app."
sources:
  - title: "Security"
    url: "https://docs.lovable.dev/features/security"
    publisher: "Lovable Documentation"
  - title: "FAQ"
    url: "https://docs.lovable.dev/introduction/faq"
    publisher: "Lovable Documentation"
  - title: "Terms of Service"
    url: "https://lovable.dev/terms"
    publisher: "Lovable"
  - title: "Row Level Security"
    url: "https://supabase.com/docs/guides/database/postgres/row-level-security"
    publisher: "Supabase Docs"
  - title: "CVE-2025-48757"
    url: "https://nvd.nist.gov/vuln/detail/CVE-2025-48757"
    publisher: "NIST National Vulnerability Database"
  - title: "OWASP Top 10:2025"
    url: "https://top10.owasp.org/2025"
    publisher: "OWASP Foundation"
  - title: "Replit Deployments"
    url: "https://docs.replit.com/category/replit-deployments"
    publisher: "Replit Docs"
  - title: "Chapter 1: APP 1 Open and transparent management of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Small business"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business"
    publisher: "Office of the Australian Information Commissioner"
  - title: "App Review Guidelines"
    url: "https://developer.apple.com/app-store/review/guidelines/"
    publisher: "Apple Developer"
related:
  - title: "Low-code vs custom development"
    href: "/guides/low-code-vs-custom-development"
  - title: "Who owns the source code in Australia?"
    href: "/guides/who-owns-the-source-code-australia"
  - title: "How much does an MVP cost in Australia?"
    href: "/guides/mvp-development-cost-australia"
  - title: "Rewrite vs refactor legacy software"
    href: "/guides/rewrite-vs-refactor-legacy-software"
  - title: "Web app vs mobile app vs PWA"
    href: "/guides/web-app-vs-mobile-app"
service:
  title: "Code audit"
  href: "/services/code-audit"
disclaimer: legal
---

## What do Lovable, Bolt, Replit and v0 do well?

**AI app builders turn a description into working software in hours, which makes them very good for prototypes, internal tools and testing an idea with real users.** For a founder, that changes the economics of the first version: you can show investors and customers something real before spending on a full build.

They are strongest at:

- **Interfaces.** Screens, forms, dashboards and layouts come out clean and modern.
- **Standard patterns.** Sign up, login, lists, detail pages and simple create, edit and delete flows.
- **Speed of change.** Trying three versions of a feature in an afternoon.
- **Mainstream stacks.** Lovable's documentation says new apps use TanStack Start, older ones React with Vite, with a Postgres database through its built in backend or Supabase. That means a professional developer can read and extend the code.

What they don't do on their own is decide what is safe. The tool writes the code you asked for. It doesn't know that a table holds customers' health details, that a discount must never go below cost, or that your business needs a backup it can restore.

## What breaks when an AI built app goes into production?

**The problems are rarely in what you can see; they are in what happens when someone uses the app in a way you didn't intend, or when the app gets real traffic.** These are the gaps that appear most often.

| Area | What often goes wrong | What to check |
|---|---|---|
| Data access | Database tables without row level security, so the public key in the browser can read or change any row | Every table in an exposed schema has RLS enabled and a policy that matches who should see it |
| Secrets | Service keys, payment keys or third party API keys in front end code | No secret key appears in the browser bundle; secrets live on the server |
| Authorisation | Checks such as "only admins can delete" done in the browser only | Every sensitive action is checked on the server or by the database |
| Payments | Prices taken from the browser, webhooks that aren't verified | Prices are set server side and payment webhooks are signature checked |
| Input handling | User input passed straight into queries or prompts | Validation on the server, and injection risks reviewed |
| Dependencies | Old packages with known vulnerabilities | A dependency audit and a plan to keep packages updated |
| Errors | Failures that show a blank screen and leave no record | Error monitoring and logs you can search |
| Data safety | No backups, or backups never tested | Automated backups and one test restore |
| Environments | One database for testing and live use | Separate development and production, with real data only in production |
| Privacy | No privacy policy, no way to delete an account | A privacy policy that matches what the app collects; account deletion if required |

The pattern is consistent with the OWASP Top 10:2025, which lists broken access control first, followed by security misconfiguration and software supply chain failures.

This isn't hypothetical. In 2025 a vulnerability was published in the US National Vulnerability Database (CVE-2025-48757) describing insufficient row level security in apps generated by Lovable that let unauthenticated attackers read or write database tables. Lovable disputes it, on the basis that each customer is responsible for protecting their own application's data. Both points lead to the same conclusion: someone on your side has to check.

## Which security problems should you fix first?

**Fix whatever lets a stranger read or change your data, then whatever exposes your keys, then everything else.** Here is the order we would work in.

1. **Turn on row level security everywhere.** Supabase's documentation says a table in an exposed schema without RLS is readable and writable by any role with a grant on it, and recommends enabling it on every table in an exposed schema. Then write policies table by table: who can read, who can insert, who can update.
2. **Move secrets out of the browser.** Supabase's docs say never to use a secret key in the browser or expose it to customers, because the service role bypasses RLS. Rotate any key that has ever been in front end code.
3. **Check authorisation on the server.** Try each sensitive action as a logged out user and as an ordinary user. If it works when it shouldn't, the check is in the wrong place.
4. **Verify payments.** Recalculate prices on the server and verify webhook signatures.
5. **Run the builder's own scans, then a human review.** Lovable's docs describe a quick scan at publish and a deeper on demand scan, and say plainly that these tools help identify common issues but cannot guarantee complete security, and that you are responsible for the security of your app. They also recommend a professional security review for apps handling sensitive data.

## What about scaling and reliability?

**Most AI built apps handle early traffic fine; what fails first is usually the database, background work, or the lack of anyone watching.** A few hundred users rarely stress a modern stack. Slow queries, missing indexes and work done in the browser that should run on a server do.

Check these before you market the app:

- **Database indexes** on the columns you filter and sort by.
- **Long tasks**, such as sending emails, generating PDFs or calling an AI model, run in the background, not while the user waits.
- **Rate limits** on login, sign up and any endpoint that costs you money per call.
- **Hosting choice.** Replit, for example, offers autoscale, reserved VM, static and scheduled deployments. Pick the one that matches how your app is used, and know what it costs at ten times today's traffic.
- **Monitoring and alerts**, so you hear about an outage before your customers tell you.

## A launch checklist for AI built apps

**Use this table as a go or no go check. Everything marked "before launch" should be done before real customer data goes in.**

| Check | When | Done |
|---|---|---|
| Code exported to a repository you control | Before launch | |
| Row level security on every table, with policies reviewed | Before launch | |
| No secret keys in front end code; exposed keys rotated | Before launch | |
| Sensitive actions checked on the server | Before launch | |
| Payment prices set server side; webhooks verified | Before launch | |
| Separate development and production environments | Before launch | |
| Automated backups, with one test restore | Before launch | |
| Error monitoring and alerts set up | Before launch | |
| Privacy policy that matches what you collect | Before launch | |
| Account deletion in the app, if listed on the App Store | Before launch | |
| Dependency audit and update plan | First month | |
| Rate limits on login, sign up and costly endpoints | First month | |
| Database indexes and background jobs reviewed | First month | |
| Automated tests for the main user journeys | First quarter | |
| Independent penetration test, if you hold sensitive data | Before scaling | |

## Should you keep, refactor or rebuild an AI built app?

**Keep and harden it in most cases; rebuild only when the foundations are wrong for where the product is going.** The code from these tools is usually ordinary, readable framework code. The question is whether its structure will carry the next two years.

| Signal | Keep and harden | Refactor the weak parts | Rebuild |
|---|---|---|---|
| Data model | Fits the product | Some tables need reshaping | Core entities are wrong or duplicated |
| Code structure | Readable, consistent | Large files, repeated logic | Changes in one place break unrelated features |
| Security gaps | Fixable with policies and config | Logic needs moving to the server | Security was never designed in and touches everything |
| Next stage | More of the same features | New user types or integrations | A different product, platform or scale |

Our [rewrite vs refactor guide](/guides/rewrite-vs-refactor-legacy-software) explains the same decision for older systems, and the logic carries over.

## Who owns the code these tools generate?

**Check each tool's terms, because they differ on what the platform keeps.** Lovable's FAQ says your apps, code and content are yours, subject to third party rights such as open source licences. Its terms (last updated 28 August 2026 at the time of writing) also give Lovable a worldwide, perpetual, royalty free licence to use your customer data for purposes that include training its models, with an opt out for future use.

Under Australian law there is a further question: copyright protects works with a human author, so code generated with little human input may have thinner protection than code a person wrote. Our guide to [who owns the source code in Australia](/guides/who-owns-the-source-code-australia) covers this, along with what to put in a contract if a developer continues the work.

Practical steps either way:

- **Sync the code to your own repository** now, not when you need it. Lovable supports git sync on all plans.
- **Export the database regularly.** Lovable's export doesn't include stored files, edge function code or secrets, so record those separately.
- **Keep the accounts in your name**: domain, hosting, database, payment provider and app store.

## How AWLabs audits and hardens AI built apps

We review apps built with Lovable, Bolt, Replit, v0 and similar tools in the same way as any codebase we didn't write. Start with a Development Consult, a 15 minute call or a Zoom with Andy, to talk through what you've built and where you want to take it. A paid Discovery Audit then reviews data access, secrets, authorisation, payments, dependencies and hosting, and tells you whether to keep, refactor or rebuild, with the fee credited in full against any work that follows. The Schedule of Work sets out three fixed price options, The Minimum, The Recommended and The Complete, so you can choose between fixing only what blocks launch and a full hardening. Senior engineers lead the work, and the code is assigned to you as each part is paid for. See our [code audit service](/services/code-audit), [cybersecurity service](/services/cybersecurity) and [startup MVP](/startup-mvp) page.
