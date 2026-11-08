---
title: "Tracking pixels, analytics and the Privacy Act: what apps and portals can track"
metaTitle: "Tracking Pixels and the Privacy Act: Analytics in Apps"
description: "What Australian apps and portals can track under the Privacy Act and OAIC pixel guidance, what not to send to Meta or Google, and privacy safe analytics."
eyebrow: "Australian regulation"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "The Privacy Act doesn't ban tracking pixels or analytics, but the OAIC's November 2024 guidance makes clear that organisations covered by the Act must configure them to collect the minimum personal information needed, must generally keep sensitive information such as health details away from third party platforms, and must explain the tracking in their privacy policy and collection notices. Logged in pages in apps and portals carry the most risk, because URLs, form fields and events there are easily linked to a real person. Product teams can still measure what they need with first party, minimised analytics and server side controls."
takeaways:
  - "Data from a pixel can be personal information even without a name: an IP address, URL or hashed email can make a person reasonably identifiable when matched with the platform's data."
  - "The OAIC expects pixels to be configured so sensitive information, including health information, isn't disclosed to third party platforms. On some sites, the safest choice is no third party pixel at all."
  - "Logged in pages are the danger zone. Keep advertising pixels off them, and strip identifiers and free text from analytics events."
  - "Privacy respecting analytics tools reduce risk but don't remove your obligations. Hosting location still matters under APP 8."
  - "The statutory privacy tort has applied since 10 June 2025, a Children's Online Privacy Code must be registered by 10 December 2026, and further reforms are in exposure draft."
faqs:
  - q: "Is the Meta pixel legal in Australia?"
    a: "The Privacy Act doesn't prohibit tracking pixels. The OAIC says organisations must use them in a way that complies with the Australian Privacy Principles: minimise what is collected, keep sensitive information out, be transparent in privacy policies and notices, and give people a simple way to opt out of targeted advertising."
  - q: "Is an IP address personal information in Australia?"
    a: "It can be. The OAIC says a person can be reasonably identifiable where information collected through a pixel, such as an IP address, URL information or a hashed email address, can be linked with other information the platform holds."
  - q: "Do we need a cookie banner in Australia?"
    a: "Australian law has no single cookie banner rule like Europe's. But the OAIC's guidance suggests a banner or pop up as one way to give notice of tracking pixels and an opt out from targeted advertising, and you need express consent before sensitive information is collected through a pixel."
  - q: "Is Google Analytics 4 privacy safe?"
    a: "It is safer than older versions in one respect: Google says GA4 does not log or store IP addresses. It still collects page URLs and events you configure, and data is processed by Google offshore. Keep personal and sensitive data out of URLs and events, and disclose its use."
  - q: "Can a health or finance app use analytics at all?"
    a: "Yes, with care. Use first party or self hosted analytics where possible, measure features and outcomes without health or financial details, and keep third party advertising pixels off logged in and condition specific pages."
  - q: "Does this apply to small businesses?"
    a: "Many small businesses with turnover of $3 million or less are exempt from the Privacy Act, but health service providers and some others are covered regardless. The statutory tort can also reach businesses that aren't covered. See our guide to the Privacy Act for small business software."
sources:
  - title: "Tracking pixels and privacy obligations"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/tracking-pixels-and-privacy-obligations"
    publisher: "OAIC"
  - title: "Statutory tort for serious invasions of privacy"
    url: "https://www.oaic.gov.au/privacy/your-privacy-rights/more-privacy-rights/statutory-tort-for-serious-invasions-of-privacy"
    publisher: "OAIC"
  - title: "Children's Online Privacy Code"
    url: "https://www.oaic.gov.au/privacy/privacy-registers/privacy-codes/childrens-online-privacy-code"
    publisher: "OAIC"
  - title: "Privacy reform: Exposure Draft Privacy Amendment (Personal Data Protection) Bill 2026"
    url: "https://consultations.ag.gov.au/rights-and-protections/privacy-reform/"
    publisher: "Attorney-General's Department"
  - title: "IP masking in Universal Analytics (GA4 note)"
    url: "https://support.google.com/analytics/answer/2763052?hl=en"
    publisher: "Google Analytics Help"
  - title: "An introduction to server side tagging"
    url: "https://developers.google.com/tag-platform/tag-manager/server-side/intro"
    publisher: "Google for Developers"
  - title: "Small business"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business"
    publisher: "OAIC"
  - title: "Data policy"
    url: "https://plausible.io/data-policy"
    publisher: "Plausible Analytics"
  - title: "Privacy compliance"
    url: "https://posthog.com/docs/privacy"
    publisher: "PostHog"
related:
  - title: "The Privacy Act and AI"
    href: "/guides/privacy-act-and-ai"
  - title: "Does the Privacy Act apply to small business software?"
    href: "/guides/privacy-act-small-business-software"
  - title: "Notifiable Data Breaches scheme for software"
    href: "/guides/notifiable-data-breaches-software"
  - title: "AI in healthcare"
    href: "/solutions/ai-in-healthcare"
service:
  title: "Data analytics"
  href: "/services/data-analytics"
disclaimer: legal
---

## Why did pixels on logged in pages become a regulatory problem?

**Because a pixel on a logged in page can send a third party platform information that is tied to a real, identifiable person, often including what they are doing and why.** On a public marketing page, a pixel mostly learns that someone visited. Inside an app or portal, it can learn which condition someone is booking for, which loan they applied for, or what they typed into a form.

The OAIC published guidance on tracking pixels and privacy obligations on 4 November 2024. It describes how a pixel loads on a page and sends data such as form inputs, IP address, geolocation, items viewed and URL information to the provider's server, where the platform can match it to its own users. Its key points: the Privacy Act doesn't prohibit pixels, but organisations must do their own due diligence, configure pixels to collect the minimum necessary, keep sensitive information out, and be transparent. The OAIC also notes that many pixel providers' terms place responsibility for compliance on the customer, meaning you.

The guidance focuses on websites, but a footnote says pixels are also used in apps, emails and other channels and that organisations should consider the guidance there too. For product teams, that covers in app analytics SDKs as well.

## When is analytics data personal information?

**Analytics data is personal information when it is about a person who is identified or reasonably identifiable, and that bar is lower than many teams assume.** A person doesn't need to be named.

The OAIC says an individual can be reasonably identifiable where information collected through a pixel, such as an IP address, URL information or a hashed email address, can be linked or matched with other information held by the third party platform. In that case both your organisation and the platform have obligations. Where it is unclear, the OAIC encourages organisations to err on the side of caution and comply.

Common ways analytics leaks identity in apps:

- User IDs, email addresses or phone numbers sent as event properties.
- URLs that contain names, record numbers or search terms, such as `/patients/1234/notes` or `?q=bankruptcy+advice`.
- Form field values captured automatically by "autocapture" or session recording features.
- Hashed emails sent for ad matching. Hashing doesn't make the data anonymous if the platform holds the same hash.

## What should health, finance and other sensitive pages never send to Meta or Google?

**Sensitive information should not reach third party advertising platforms through pixels, and on some sites even a page view reveals it.** Sensitive information under the Privacy Act includes health information and information about racial or ethnic origin, political opinions, religious beliefs and other categories.

The OAIC's guidance is direct. Sensitive information can only be collected with consent; organisations should generally seek express opt in consent if it is likely to be collected and disclosed through a pixel; and pixels should generally be configured to prevent its collection and disclosure. It gives the example of a flight booking where a special assistance request reveals a hearing impairment, and notes that merely visiting a mental health or counselling site can reveal sensitive information. In those cases, it says avoiding third party pixels may be preferable.

| Page or event | Advertising pixel? | Product analytics? |
|---|---|---|
| Public marketing pages | Possible, minimised, disclosed | Yes |
| Sign up started or completed | Possibly a conversion event with no personal data | Yes |
| Logged in dashboard | No | Yes, without identifiers in URLs or events |
| Condition, diagnosis or treatment pages | No | Aggregate only, no condition detail in events |
| Loan, hardship or debt pages | No | Aggregate only |
| Forms with free text | No | Never capture field values |

## How do server side tagging, consent and minimisation help?

**Server side tagging moves the decision about what each vendor receives from the visitor's browser to a server you control.** That makes minimisation enforceable rather than hopeful.

Google describes server side tagging in Tag Manager as processing data on a server you control rather than in the user's browser, with clients that receive data and transform it into events before tags send it on. In practice, the browser sends one first party request; your server strips IP addresses, user IDs, query strings and anything else not needed, and forwards only approved fields to each vendor. A browser pixel, by contrast, sends whatever the vendor's script collects.

Server side tagging doesn't make tracking lawful on its own. You still need to:

1. **Minimise.** Send only the fields each purpose needs. The OAIC suggests considering deploying pixels only on certain pages rather than the whole site.
2. **Get consent where it is required,** especially before any sensitive information is involved.
3. **Offer an opt out** from targeted advertising. APP 7 applies to targeted online ads using personal information, and the OAIC gives a banner or pop up on first visit as one way to provide notice and an opt out.
4. **Consider overseas disclosure.** If the vendor sends data offshore, APP 8 requires reasonable steps to ensure the recipient doesn't breach the APPs.

## Which privacy respecting product analytics tools fit?

**First party and privacy focused tools reduce what leaves your control, but you still decide what you collect, and the obligations remain yours.**

| Option | How it limits personal data | What to check |
|---|---|---|
| Plausible | Says it uses no cookies or persistent identifiers, counts unique visitors with a daily rotating salted hash, and doesn't store raw IP addresses | Hosted in the EU, so data goes offshore; custom properties you add can still carry personal data |
| PostHog Cloud | Provides controls over collection, processing and storage; offers an EU cloud in Frankfurt | Its docs say deciding what you collect is your responsibility; review autocapture and session recording settings |
| Self hosted analytics | Data stays in infrastructure you choose, which can be an Australian region | You operate, secure and back it up |
| Google Analytics 4 | Google says GA4 doesn't log or store IP addresses | Event and URL data is still processed by Google; keep personal data out of both |

For most apps, the useful questions are about features and funnels, not individuals: which screens are used, where people drop out, how long tasks take. Those can be answered with events that carry no personal information at all. Our [data analytics service](/services/data-analytics) builds measurement on that basis.

## What do the statutory tort, the children's code and further reforms change?

**They raise the stakes for careless tracking without changing the core rules above.**

- **Statutory tort.** The OAIC confirms changes introducing a statutory tort for serious invasions of privacy commenced on 10 June 2025. It allows individuals to sue, and it isn't limited to organisations covered by the APPs.
- **Children's Online Privacy Code.** The OAIC says the code must be finalised and registered by 10 December 2026. It consulted on a draft from 31 March to 5 June 2026. Apps and services likely to be accessed by children should expect stricter rules on tracking and profiling.
- **Further reform.** The Attorney-General's Department released an Exposure Draft Privacy Amendment (Personal Data Protection) Bill 2026, with submissions closing on 18 September 2026. The department says the Bill remains subject to further consideration by government, so treat its content as a direction of travel, not law.

Community expectations point the same way. The OAIC cites its 2023 community attitudes survey, in which 84% of Australians saw targeted advertising based on sensitive information as unfair and unreasonable.

For the AI side of the Privacy Act, see [the Privacy Act and AI](/guides/privacy-act-and-ai). For coverage questions, see [does the Privacy Act apply to small business software](/guides/privacy-act-small-business-software).

## What should your privacy policy and collection notices say?

**Your privacy policy must clearly disclose your use of third party tracking pixels, and your collection notices must tell people at or before the time of collection.** The OAIC treats these as separate obligations under APP 1 and APP 5.

Cover, in plain language: which tracking and analytics tools you use, what kinds of personal information they collect, why, which providers receive it, whether it goes overseas and to which countries, and how to opt out of targeted advertising. Update it whenever you add a tool, and make sure the in app notice matches what the code actually does.

## An audit checklist for an existing app

Run this with a developer, a product owner and someone who owns privacy.

- [ ] List every pixel, tag, SDK and analytics script in the web app and mobile apps, including those added through a tag manager.
- [ ] Record which pages and screens each one loads on.
- [ ] Capture the actual network requests each sends, using browser developer tools or a proxy, on public and logged in pages.
- [ ] Look for personal information in URLs, page titles, event names and properties.
- [ ] Check whether autocapture or session recording captures form inputs.
- [ ] Remove advertising pixels from logged in and sensitive pages.
- [ ] Confirm consent and opt out flows work, and that tags respect them.
- [ ] Check where each vendor stores data and whether APP 8 steps are documented.
- [ ] Review each vendor's terms for who carries compliance responsibility.
- [ ] Update the privacy policy and collection notices to match.
- [ ] Set a review date. The OAIC says due diligence shouldn't be "set and forget".

If the audit finds personal information has gone somewhere it shouldn't, assess it against the [Notifiable Data Breaches scheme](/guides/notifiable-data-breaches-software).

## How AWLabs approaches analytics in apps

We design analytics into the apps and portals we build from the start: first party events with no personal information by default, server side forwarding where third party tools are needed, no advertising pixels on logged in pages, and Australian hosting where the data warrants it. We can also audit an existing app against the checklist above. We start with a Development Consult, then a paid Discovery Audit, credited in full against the build, and price the work as a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. We build to your requirements and provide evidence; your compliance remains yours, and this page is general information, not legal advice. See [data analytics](/services/data-analytics).
