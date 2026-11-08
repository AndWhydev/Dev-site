---
title: "WCAG and the DDA: accessibility for apps and software in Australia"
metaTitle: "WCAG Compliance in Australia: Apps, Software and the DDA"
description: "What Australian law expects of app and software accessibility: the DDA, WCAG 2.2 Level AA, AS EN 301 549, government rules, testing and audit cost ranges."
eyebrow: "Australian regulation"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "Australia has no single \"WCAG law\", but the Disability Discrimination Act 1992 makes it unlawful to discriminate on the ground of disability when providing goods and services, and the Australian Human Rights Commission says that covers websites, SaaS, mobile apps and other software. The Commission's April 2025 guidelines say organisations should conform with WCAG 2.2 at a minimum of Level AA, and meet AS EN 301 549 for digital products. Australian Government services must meet the latest WCAG under the Digital Service Standard. Build it in from design; retrofitting costs more."
takeaways:
  - "The DDA applies to digital goods and services whether paid or free, including SaaS, mobile apps, AI services, CAPTCHAs and two factor authentication, according to the Australian Human Rights Commission."
  - "WCAG 2.2 Level AA is the practical benchmark. The Commission's 2025 guidelines recommend it as a minimum, and the Australian Government's digital portal standard requires it."
  - "AS EN 301 549:2024 covers ICT beyond websites, including software, documents and hardware, and is applicable to most ICT goods and services the Australian Government procures."
  - "Conforming to a standard is not a legal safe harbour. The Commission's guidelines are not legally binding, and the test under the DDA is whether people with disability are discriminated against."
  - "Automated scanners catch only part of the problem. Plan for manual testing with screen readers and keyboard, and testing with people with disability."
faqs:
  - q: "Is WCAG compliance a legal requirement in Australia?"
    a: "Not as a standalone law for private businesses. The legal obligation comes from the Disability Discrimination Act 1992, which prohibits disability discrimination in providing goods and services, including digital ones. WCAG is the standard the Australian Human Rights Commission points to for meeting that obligation, and Australian Government agencies are required to apply it through the Digital Service Standard and related policies."
  - q: "Which version of WCAG should an Australian business follow?"
    a: "WCAG 2.2 at Level AA. The Australian Human Rights Commission's April 2025 guidelines say organisations should conform with WCAG 2.2 at a minimum Level AA and consider appropriate Level AAA criteria. WCAG 2.2 content also conforms to WCAG 2.1 and 2.0."
  - q: "Does WCAG apply to mobile apps?"
    a: "Yes. The Commission says WCAG applies to apps, software and digital interfaces as well as websites, and W3C publishes WCAG2ICT guidance on applying WCAG to non-web software. AS EN 301 549 also has requirements specifically for software."
  - q: "What is AS EN 301 549?"
    a: "It is the Australian Standard for accessibility requirements for ICT products and services, a direct adoption of the European EN 301 549. The 2024 edition supersedes the 2020 and 2016 versions. It covers web, non-web documents, software and hardware, and incorporates WCAG 2.1, so the Commission suggests using WCAG 2.2 where appropriate instead."
  - q: "How much does an accessibility audit cost?"
    a: "It depends on the number of unique screens, user flows and platforms. Published 2026 price guides from US providers put manual audits of typical sites at around US$5,000 to US$25,000, and native app screens at roughly US$75 to US$125 each per platform. Australian quotes vary, so ask what is in scope, whether retesting is included, and whether fixes are extra."
  - q: "Can an accessibility overlay or widget make my site compliant?"
    a: "An overlay doesn't change the underlying code that screen readers and keyboards rely on, so it can't fix most structural problems. The Commission's test is whether people with disability can complete the full task. Fix the product itself."
  - q: "What happens if someone complains?"
    a: "A person can lodge a complaint with the Australian Human Rights Commission, which tries to resolve it. If it isn't resolved there, it can go to court. The Commission's guidelines describe a complaint about a bank's touchscreen EFTPOS terminal that did not settle at the Commission and later settled in the Federal Court, with the bank agreeing to upgrade the software."
sources:
  - title: "Guidelines on equal access to digital goods and services (April 2025)"
    url: "https://humanrights.gov.au/resource-hub/resources-for-organisations-businesses/disability-resources-employers/guidelines-equal-access-digital-goods-and-services"
    publisher: "Australian Human Rights Commission"
  - title: "Web Content Accessibility Guidelines (WCAG) 2.2"
    url: "https://www.w3.org/TR/WCAG22/"
    publisher: "W3C"
  - title: "Guidance on Applying WCAG 2 to Non-Web ICT (WCAG2ICT)"
    url: "https://www.w3.org/TR/wcag2ict-22/"
    publisher: "W3C"
  - title: "Digital Service Standard, Criterion 3: Leave no one behind"
    url: "https://www.digital.gov.au/policy/digital-experience/digital-service-standard/criterion-3"
    publisher: "Digital Transformation Agency"
  - title: "Digital Inclusion Standard, Criterion 4: Make it accessible"
    url: "https://www.digital.gov.au/policy/digital-experience/digital-inclusion-standard/dis-criterion-4-make-it-accessible"
    publisher: "Digital Transformation Agency"
  - title: "Digital portal standard"
    url: "https://architecture.digital.gov.au/standard/digital-portal-standard"
    publisher: "Australian Government Architecture"
  - title: "Make apps more accessible"
    url: "https://developer.android.com/guide/topics/ui/accessibility/apps"
    publisher: "Android Developers"
  - title: "How much does a digital accessibility audit cost? (June 2026)"
    url: "https://accessible.org/how-much-digital-accessibility-audit-cost/"
    publisher: "Accessible.org"
  - title: "WCAG audit cost: a 2026 budgeting guide (July 2026)"
    url: "https://www.webability.io/blog/wcag-audit-cost"
    publisher: "WebAbility"
related:
  - title: "Selling software to the Australian Government"
    href: "/guides/selling-software-to-australian-government"
  - title: "Flutter vs React Native"
    href: "/guides/flutter-vs-react-native"
  - title: "QA and testing"
    href: "/services/qa-testing"
  - title: "Web and mobile app development"
    href: "/services/web-mobile-apps"
service:
  title: "UI and UX design"
  href: "/services/ui-ux-design"
disclaimer: legal
---

## Is accessibility a legal requirement for apps in Australia?

**Yes, in effect: the Disability Discrimination Act 1992 (DDA) makes disability discrimination in providing goods and services unlawful, and that includes digital products.** Section 24 covers the provision of goods, services and facilities, whether paid for or free, including the terms and the way they are provided. The Australian Human Rights Commission's 2025 guidelines list what that covers in digital form, including:

- Software as a Service and Platform as a Service
- software, including mobile applications and games
- AI generated services, including the AI platform itself
- CAPTCHAs and two factor authentication used to access online services
- chatbots and automated response systems
- digital interfaces to physical objects, from EFTPOS terminals to household appliances

There is no Australian statute that says "you must meet WCAG". What the law asks is whether the way you provide a service discriminates against people because of disability, and what you have done to eliminate that. WCAG and AS EN 301 549 are the standards the Commission points to as the way to show you've done it.

The leading early decision is Maguire v Sydney Organising Committee for the Olympic Games (2000). The then Human Rights and Equal Opportunity Commission found that information on a website is a service under the DDA, that an inaccessible website directly discriminated against a blind user, and that the organiser's claim of unjustifiable hardship failed. The Commission's 2025 guidelines still cite it.

### What is unjustifiable hardship?

**It is the main limit on the duty to make reasonable adjustments, and the organisation claiming it has to prove it.** Section 11 of the DDA requires all relevant circumstances to be considered, including the benefit or detriment to everyone involved, the effect of the disability, and the availability of financial and other assistance. The Commission notes that, for digital services, standards have existed and been updated since 1999 and practical advice is widely available, which makes the argument harder for software than many organisations assume.

## What standards apply, and which version?

**The practical target for Australian software in 2026 is WCAG 2.2 Level AA, plus AS EN 301 549 for anything that isn't a web page.** This table maps the standards the Commission and the Australian Government reference.

| Standard | What it covers | Status for Australian builders |
|---|---|---|
| WCAG 2.2 (W3C, first published October 2023, current version dated 12 December 2024) | Web content, and by extension apps and documents | The Commission says organisations should conform at a minimum of Level AA |
| WCAG2ICT (W3C Group Note, December 2025) | How to apply WCAG to non-web software and documents | Guidance, not a separate standard; useful for native apps and desktop software |
| AS EN 301 549:2024 | ICT products and services: web, documents, software, hardware, relay and emergency access | Supersedes the 2020 and 2016 editions; applicable to most ICT the Australian Government procures |
| AS ISO 14289.1:2017 (PDF/UA) | Accessible PDF documents | The Commission recommends it where PDFs are provided |
| ATAG 2.0 | Authoring tools, such as CMSs and anything that lets users create content | Recommended where your product lets users publish |

AS EN 301 549 references WCAG 2.1. The Commission's advice is to use WCAG 2.2 where appropriate instead, so a product built to WCAG 2.2 AA plus the non-web parts of AS EN 301 549 covers both.

### What changed in WCAG 2.2?

**WCAG 2.2 added nine success criteria, six of them at Level A or AA, and removed 4.1.1 Parsing.** These are the six that change how apps get built:

| Criterion | Level | What it means in practice |
|---|---|---|
| 2.4.11 Focus Not Obscured (Minimum) | AA | Sticky headers, cookie banners and chat widgets must not completely hide the element that has keyboard focus |
| 2.5.7 Dragging Movements | AA | Anything done by dragging, such as reordering a list or moving a slider, also works with a single tap or click |
| 2.5.8 Target Size (Minimum) | AA | Pointer targets are at least 24 by 24 CSS pixels, or spaced so they don't crowd each other |
| 3.2.6 Consistent Help | A | Help options, such as contact details or a chat button, appear in the same relative place across screens |
| 3.3.7 Redundant Entry | A | Don't make people type the same information twice in one process; auto fill it or let them select it |
| 3.3.8 Accessible Authentication (Minimum) | AA | Login can't depend on a memory or puzzle test unless there's an alternative or assistance, such as allowing password managers and paste |

The authentication criterion matters for almost every product with a login. Blocking paste into password fields, or relying on a puzzle CAPTCHA, is now a failure at Level AA unless an alternative is provided.

## What does the Australian Government require?

**Australian Government agencies must meet the latest version of WCAG under the Digital Service Standard, and the Australian Government Architecture's digital portal standard specifies WCAG 2.2 Level AA.** Criterion 3 of the Digital Service Standard, "Leave no one behind", requires agencies to comply with the DDA, the latest version of WCAG and the Australian Government Style Manual, and to provide a feedback mechanism. The Digital Inclusion Standard extends it, including a requirement to consider accessibility in procurement and contract renewals.

For suppliers, that flows straight into contracts. If you sell software to an agency, expect accessibility requirements in the tender, a request for evidence such as an accessibility conformance report, and acceptance testing against WCAG 2.2 AA. Our guide to [selling software to the Australian Government](/guides/selling-software-to-australian-government) covers the procurement side. State governments run their own policies; check the relevant state's digital standard for state work.

## Are apps different from websites?

**The principles are the same, but native apps are tested against platform accessibility services rather than browsers, and some WCAG criteria need interpreting.** The W3C's WCAG2ICT note explains how each criterion applies to non-web software, and AS EN 301 549 has a dedicated chapter for software.

| Area | Website or web app | Native iOS or Android app |
|---|---|---|
| Screen reader | NVDA, JAWS, VoiceOver on macOS and iOS Safari, TalkBack on Chrome | VoiceOver on iOS, TalkBack on Android |
| Semantics | HTML elements and ARIA | Platform accessibility labels, roles and traits |
| Text resizing | Browser zoom and reflow at 400% | iOS Dynamic Type and Android font scaling |
| Target size | WCAG 2.5.8: 24 by 24 CSS pixels minimum | Android guidance: at least 48dp by 48dp |
| Orientation | Content works in portrait and landscape | Same, unless orientation is essential |
| Automated testing | axe, Lighthouse, WAVE in CI | Android Accessibility Scanner, Xcode Accessibility Inspector, platform test APIs |

Cross platform frameworks need specific attention. Flutter draws its own interface, so accessibility depends on the semantics information the app supplies to the platform, and custom widgets need labels added deliberately. React Native maps to native controls more directly but has its own gaps with custom components. Either can be made accessible; neither does it automatically. Passing store review is not evidence that an app is accessible; our guide to [publishing on the App Store and Google Play](/guides/app-store-publishing-australia) covers what review does check. Our [Flutter vs React Native comparison](/guides/flutter-vs-react-native) covers the wider trade-off.

## How do you test for accessibility?

**Use three layers: automated checks in every build, manual expert testing before release, and testing with people with disability for key journeys.** No single layer is enough.

1. **Automated scanning in CI.** Catches missing labels, contrast failures, duplicate IDs and missing alternative text on every pull request. Cheap and fast, but it can't judge whether a label makes sense or whether a flow can be completed.
2. **Manual keyboard and screen reader testing.** An engineer or tester works through each user journey with only a keyboard, then with VoiceOver and TalkBack or NVDA, checking focus order, announcements, error messages and dialogs.
3. **Zoom, reflow and display settings.** Test at 200% and 400% zoom, with large system fonts, high contrast and reduced motion turned on.
4. **Testing with users with disability.** The Digital Service Standard asks agencies to evaluate services with people who depend on assistive technology. For private products it is the best way to find what checklists miss.
5. **Conformance reporting.** For enterprise and government buyers, document results against each WCAG criterion in an accessibility conformance report.

### What does an audit cost?

**Audit pricing is mostly driven by the number of unique screens and user journeys, and the number of platforms.** Australian providers rarely publish prices, so the figures below come from US providers' published 2026 guides, in US dollars, at the time of writing. They are market indications, not quotes, and exclude fixing the issues.

| Audit scope | Published range (USD) | Source |
|---|---|---|
| Per standard web page or screen, manual | $100 to $250 | Accessible.org, June 2026 |
| Per native iOS app screen, manual | $75 to $125 (Android adds about 30%) | Accessible.org, June 2026 |
| Hybrid audit (automated plus targeted manual) | $1,500 to $8,000 | WebAbility, July 2026 |
| Full manual audit, typical site | $5,000 to $25,000 | WebAbility, July 2026 |
| Large SaaS platforms | $5,000 to $30,000, reaching $75,000 or more | WebAbility, July 2026 |

Ask any auditor what is in scope (logged in areas, PDFs, native apps, third party widgets), whether a retest is included, and whether the report maps issues to WCAG criteria with remediation advice.

## How do you build accessibility in from the start?

**Accessibility is cheapest in design and component code, and most expensive after launch.** A missing label on a shared button component is one fix; the same problem copied across 200 screens is a project. This checklist covers the decisions that matter most:

**Design**

- Colour contrast checked in the design system for text, icons and focus states, in light and dark themes.
- Visible focus styles designed, not left to defaults.
- Touch targets sized to the platform guidance and at least the WCAG 2.5.8 minimum.
- Error states that use text, not colour alone.
- Help and contact placed consistently across screens.

**Components**

- One accessible component library: buttons, inputs, dialogs, menus, tabs, date pickers and data tables built and tested once, then reused.
- Every interactive element has an accessible name, role and state.
- Dialogs trap and return focus correctly.
- Drag interactions have a tap or button alternative.

**Flows**

- Login allows paste and password managers; any CAPTCHA has an accessible alternative.
- Forms keep entered data, explain errors in text and don't ask twice for the same information.
- Timeouts warn the user and allow more time.
- Media has captions and transcripts.

**Process**

- Accessibility acceptance criteria on every user story.
- Automated checks fail the build for new issues.
- A manual screen reader pass before each release.
- An accessibility statement and a feedback route for users who hit a barrier.

If you're adding accessibility to an existing product, start with the journeys that matter most (sign up, login, payment, core tasks), fix shared components first, then work outward. For logged in products such as a [customer portal](/guides/customer-portal-development), the login and first activation flow is usually where the worst barriers are.

## How AWLabs approaches accessibility

We design and build to WCAG 2.2 Level AA by default, using a shared component library so accessibility is solved once and reused. Our [UI and UX design](/services/ui-ux-design) work includes contrast, focus and target sizing in the design system, and our [QA and testing](/services/qa-testing) includes automated accessibility checks in the build pipeline plus manual keyboard and screen reader passes on key journeys. Where a client needs an independent audit or a formal conformance report, we recommend a specialist auditor and fix what they find. Accessibility obligations sit with the organisation providing the service; we build to the agreed standard and provide the test evidence. Every engagement starts with a Development Consult, then a paid Discovery Audit that is credited in full against the build, and a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. See our [web and mobile app development](/services/web-mobile-apps) service for how we build.
