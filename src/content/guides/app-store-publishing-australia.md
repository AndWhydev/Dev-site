---
title: "How to publish an app on the App Store and Google Play from Australia"
metaTitle: "Publish an App in Australia: App Store and Google Play Guide"
description: "Publishing an app from Australia: developer accounts in your company's name, D-U-N-S numbers, fees, review times, common rejection reasons and private apps."
eyebrow: "Explainer"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "To publish under your business name, enrol your company (not an individual) in the Apple Developer Program, at US$99 a year charged in local currency, and open a Google Play organisation account, with a US$25 one time fee. Both need a D-U-N-S number for the legal entity, which Dun & Bradstreet issues without charge but can take days to weeks. Apple says it typically reviews 50% of submissions within 24 hours and 90% within 48 hours. Google Play reviews can take up to 7 days or longer in some cases. Most rejections come from incomplete apps, missing demo logins and privacy gaps."
takeaways:
  - "Put the developer accounts in your company's name before the first release. The account holder is the legal seller, and moving an app later is possible but fiddly."
  - "Get your D-U-N-S number first. Apple says allow up to 5 business days plus 2 for Apple to receive it; Google says it can take up to 30 days."
  - "Apple says over 40% of unresolved review issues relate to guideline 2.1, App Completeness: crashes, placeholder content and missing information such as demo accounts."
  - "New personal Google Play accounts must run a closed test with at least 12 testers for 14 continuous days before production. The rule applies to personal accounts, not organisation accounts."
  - "Staff and client apps don't need to be public: Apple offers unlisted and custom app distribution, and Google offers private apps through Managed Google Play."
faqs:
  - q: "How much does it cost to publish an app in Australia?"
    a: "The store fees are small: the Apple Developer Program is US$99 per membership year, shown in Australian dollars at enrolment, and Google Play has a US$25 one time registration fee. The real costs are building, testing and maintaining the app. Both stores also take a commission on paid apps and in-app purchases, 15% for eligible small developers under their small business programs."
  - q: "Do I need a D-U-N-S number to publish an app?"
    a: "Only if you publish as an organisation, which we recommend for businesses. Apple requires companies to provide a D-U-N-S Number registered to their legal entity, and Google requires one for organisation accounts. Individuals don't need one. Dun & Bradstreet issues them without charge; Google warns about third parties charging fees for the same thing."
  - q: "Can a sole trader publish an app under a business name?"
    a: "Not on Apple. Apple doesn't accept DBAs, trade names or branches, and a sole proprietorship enrols as an individual, with the personal legal name shown as the seller. If you want your business name on the store listing, publish through a company or another legal entity."
  - q: "How long does Apple app review take?"
    a: "Apple says App Review typically reviews at least 50% of submissions in under 24 hours and 90% in under 48 hours. Incomplete submissions take longer or fail. Plan for at least one round of rejection on a first release."
  - q: "How long does Google Play review take?"
    a: "Often faster than a week, but Google says certain developer accounts get more thorough reviews, which may take up to seven days or longer in exceptional cases. Applications for production access by new personal accounts usually take seven days or less."
  - q: "Who should own the developer account, us or our developer?"
    a: "You. Your organisation should be the Account Holder, with your developer invited as a team member. If the developer's account publishes the app, you'll need a transfer later, and some services such as Apple Pay merchant IDs and Sign in with Apple need extra steps when that happens."
  - q: "Can we transfer an app from our old developer to a new one?"
    a: "Yes, on both stores. Apple keeps the app's reviews, ratings and users through a transfer if the app meets Apple's transfer criteria. Google transfers users, statistics, ratings, reviews and store listing information, but not earnings or payout reports."
sources:
  - title: "Become a member (enrolment requirements and fees)"
    url: "https://developer.apple.com/programs/enroll/"
    publisher: "Apple Developer"
  - title: "D-U-N-S Number"
    url: "https://developer.apple.com/support/D-U-N-S/"
    publisher: "Apple Developer"
  - title: "App Review"
    url: "https://developer.apple.com/distribute/app-review/"
    publisher: "Apple Developer"
  - title: "App Review Guidelines"
    url: "https://developer.apple.com/app-store/review/guidelines/"
    publisher: "Apple Developer"
  - title: "App privacy details on the App Store"
    url: "https://developer.apple.com/app-store/app-privacy-details/"
    publisher: "Apple Developer"
  - title: "Unlisted app distribution"
    url: "https://developer.apple.com/support/unlisted-app-distribution/"
    publisher: "Apple Developer"
  - title: "Apple Developer Enterprise Program"
    url: "https://developer.apple.com/programs/enterprise/"
    publisher: "Apple Developer"
  - title: "Overview of app transfer"
    url: "https://developer.apple.com/help/app-store-connect/transfer-an-app/overview-of-app-transfer"
    publisher: "Apple Developer"
  - title: "Get started with Play Console"
    url: "https://support.google.com/googleplay/android-developer/answer/6112435?hl=en"
    publisher: "Google Play Console Help"
  - title: "Required information to create a Play Console developer account"
    url: "https://support.google.com/googleplay/android-developer/answer/13628312?hl=en"
    publisher: "Google Play Console Help"
  - title: "App testing requirements for new personal developer accounts"
    url: "https://support.google.com/googleplay/android-developer/answer/14151465?hl=en"
    publisher: "Google Play Console Help"
  - title: "Publish your app"
    url: "https://support.google.com/googleplay/android-developer/answer/9859751?hl=en"
    publisher: "Google Play Console Help"
  - title: "Provide information for Google Play's Data safety section"
    url: "https://support.google.com/googleplay/android-developer/answer/10787469?hl=en"
    publisher: "Google Play Console Help"
  - title: "Understanding Google Play's app account deletion requirements"
    url: "https://support.google.com/googleplay/android-developer/answer/13327111?hl=en"
    publisher: "Google Play Console Help"
  - title: "Transfer apps to a different developer account"
    url: "https://support.google.com/googleplay/android-developer/answer/6230247?hl=en"
    publisher: "Google Play Console Help"
related:
  - title: "How much does app development cost in Australia?"
    href: "/guides/app-development-cost-australia"
  - title: "Flutter vs React Native"
    href: "/guides/flutter-vs-react-native"
  - title: "Software development contract checklist"
    href: "/guides/software-development-contract-checklist"
  - title: "Software project rescue and takeover"
    href: "/services/software-project-rescue"
service:
  title: "Flutter app development"
  href: "/services/flutter-development"
---

## What do you need before you publish?

**You need a developer account on each store, in the name of the legal entity that will sell the app, plus a privacy policy, store listing assets and a build that is finished.** For an Australian business, the order of operations that avoids most delays is:

1. **Decide the publishing entity.** Usually your Pty Ltd company. This name appears as the seller on the App Store.
2. **Get or confirm a D-U-N-S number** for that entity from Dun & Bradstreet.
3. **Set up a company domain email and a working website.** Apple checks both for organisation enrolments.
4. **Enrol in the Apple Developer Program as an organisation** and **create a Google Play organisation account.**
5. **Invite your developer** to both accounts with a role that lets them upload builds, rather than letting them publish under their own account.
6. **Prepare listings, privacy disclosures and review notes** while the build is in testing.

Store fees at the time of writing (November 2026):

| | Apple App Store | Google Play |
|---|---|---|
| Account fee | US$99 per membership year, shown in local currency at enrolment | US$25, one time |
| Enterprise or private option | Apple Developer Enterprise Program, US$299 a year, for organisations with 100 or more employees and specific internal use cases | Private apps through Managed Google Play, using a standard developer account |
| Fee waivers | Available to eligible nonprofits, accredited educational institutions and government entities | No equivalent listed in Google's help |
| Commission for small developers | 15% on paid apps and in-app purchases under the App Store Small Business Program, for developers under US$1 million in proceeds | 15% on the first US$1 million in earnings each year for enrolled developers; 15% on auto-renewing subscriptions |

## Why should the developer account be in your company's name?

**Because the account holder is the legal seller, owns the app record and controls every future release.** Apple displays your organisation's name as the seller and requires the person enrolling to have legal authority to bind the organisation. If an app is published under your developer's personal or agency account, you don't control it, and getting it back means a formal transfer.

Apple is strict about what counts as an organisation:

- It must be a legal entity that can enter contracts. Apple does not accept DBAs, fictitious business names, trade names or branches.
- If D-U-N-S lists your business as a sole proprietorship, Apple tells you to enrol as an individual, which puts your personal legal name on the store.
- The work email must use your organisation's domain, and the website must be live and associated with the organisation. Social media pages or parked domains aren't accepted.

Google's organisation account asks for a D-U-N-S number, and the legal name and address in your Google payments profile must match your Dun & Bradstreet profile. Mismatches are a common cause of verification problems.

### How do you get a D-U-N-S number in Australia?

**Look up your company on Dun & Bradstreet's site first; many Australian companies already have one.** If not, request one through the lookup flows Apple and Google link to. Both stores stress that D&B doesn't charge for it, and Google warns about third parties charging administrative fees for the same request. Timing differs by source: Apple says allow up to 5 business days for D&B, then up to 2 business days for Apple to receive the record; Google says the process can take up to 30 days. Start this before development finishes, not the week of launch.

## How long does app review take?

**Apple typically reviews half of submissions within a day and 90% within two days; Google Play is often quick but can take up to a week or longer for some accounts.** Specifics from each store:

- **Apple:** App Review works around the clock, typically reviewing at least 50% of submissions in less than 24 hours and 90% in less than 48 hours. Incomplete submissions are delayed or fail.
- **Google Play:** For certain developer accounts, Google takes more time to review, which may mean up to seven days or longer in exceptional cases. That applies to updates too, unless you use managed publishing to control when an approved update goes live.
- **New personal Google Play accounts:** Accounts created after 13 November 2023 must run a closed test with at least 12 testers opted in continuously for 14 days, then apply for production access. Google says that application review usually takes seven days or less. This is another reason to publish as an organisation.

A realistic plan for a first release allows a week for each store, including one rejection and resubmission.

## What are the most common rejection reasons?

**On Apple, the biggest single cause is guideline 2.1, App Completeness, which Apple says accounts for over 40% of unresolved issues.** The table pulls together the issues both stores call out most, and how to prevent them.

| Rejection reason | Store and guideline | How to prevent it |
|---|---|---|
| Crashes, bugs or placeholder content | Apple 2.1 | Test on current OS versions and real devices; remove lorem ipsum and test data |
| No demo account or instructions | Apple 2.1; Google sign in details | Provide working reviewer credentials and notes for anything behind a login, hardware or a specific setup |
| Broken links, missing support or privacy policy link | Apple 2.1 and 5.1 | Check every link; include a support contact and privacy policy in the app and listing |
| Vague permission prompts | Apple 5.1 | Write purpose strings that say exactly why you need camera, location or contacts access, with an example |
| No in-app account deletion | Apple 5.1.1(v); Google User Data policy | If users can create an account in the app, let them delete it; Google also requires a web link for deletion requests |
| Just a website in a wrapper | Apple 4.2 | Use native capabilities and design for the device; a thin web view is likely to be rejected |
| Several near identical apps | Apple 4.3 | Combine variants into one app with configuration, rather than one app per client or location |
| Wrong entity for a regulated service | Apple 3 and 5.1.1 | Banking, financial services, crypto, healthcare and gambling apps must come from the entity providing the service |
| Inaccurate privacy disclosures | Apple privacy details; Google Data safety | Inventory what your code and every SDK collects before filling in the forms |

The "wrong entity" row catches Australian startups and agencies alike. If a fintech, health or lending app is submitted from a development agency's account, Apple may reject it until it comes from the regulated business, with partnership documents attached if needed.

## How do privacy labels and the Data safety form work?

**Both stores require you to declare what data your app, and every third party SDK in it, collects and why.** You're responsible for accuracy, and both can act on discrepancies.

- **Apple privacy details (privacy nutrition labels):** required to submit new apps and updates. You must identify all data you or your third party partners collect, unless it meets every criterion for optional disclosure. Data collected only for app functionality must still be declared. You can update the answers without a new app version.
- **Google Play Data safety section:** all developers with a published app must complete it, including apps only on testing tracks, and even apps that collect nothing must complete it and link a privacy policy. It includes questions on deletion practices and the deletion web link.

The practical step is an SDK inventory. Analytics, crash reporting, advertising, chat and payments libraries each collect data. List them, check each vendor's own disclosure, and record what your backend stores. The same inventory feeds your Privacy Act privacy policy.

## How do you distribute a staff or client app without making it public?

**Use the private channels the stores provide, rather than a public listing with a login wall.** The right option depends on whose devices the app runs on.

| Situation | Apple option | Google option |
|---|---|---|
| Staff on company managed devices | Custom app through Apple Business, distributed by MDM or redemption codes | Private app published to your organisation through Managed Google Play |
| A client organisation's staff | Custom app made visible to that organisation's Apple Business account | Private app restricted to the client's organisation |
| Partners, franchisees or staff on personal devices | Unlisted app: on the App Store but only reachable by direct link | Closed testing track or a private app, depending on device management |
| Large organisation with needs the above don't meet | Apple Developer Enterprise Program (100 or more employees, verification interview) | Not applicable |
| Beta testing | TestFlight | Internal, closed and open testing tracks |

Two catches. Apple's custom app option has to be chosen before the app is approved. And unlisted apps are available to anyone with the link, so Apple recommends building a mechanism in the app to prevent unauthorised use.

## How do you move an app from one developer to another?

**Both stores support transferring an app between accounts while keeping its users and reviews, but you need to prepare.** This comes up when a business changes development company or takes over an app that was published under an agency's account. A transfer is a routine step when we take over a project through our [software project rescue](/services/software-project-rescue) service.

**On Apple**, the app must have at least one version released on the App Store and must not be in review, pending release or on pre-order. The account holder initiates the transfer and the receiving account holder accepts. Plan for these follow ups:

- Auto-renewable subscriptions need an app specific shared secret shared before the transfer.
- TestFlight builds and testers, and any Xcode Cloud data, must be removed first.
- Apple Pay merchant IDs don't transfer; the recipient creates a new one for the next update.
- Sign in with Apple needs transfer identifiers generated for each user.
- Keychain sharing works only until the next update, so users may need to sign in again once.

**On Google Play**, both accounts must be registered and active, and the request needs the registration transaction ID for each. Users, download statistics, ratings, reviews, content ratings and store listing information transfer; earnings, payout and bulk export reports don't, so download them first.

The easiest transfer is the one you never need. Write account ownership into your [development contract](/guides/software-development-contract-checklist) so the app is published from your accounts from the first release.

## How AWLabs handles publishing

We publish from the client's own developer accounts. During the build we help set up the Apple and Google organisation accounts and the D-U-N-S number, take a team role on each account, and prepare the store listings, review notes, demo credentials, privacy labels and Data safety answers from an SDK inventory. Our [Flutter development](/services/flutter-development) work targets both stores from one codebase, with release testing on real devices before submission. Store submission and the first round of review responses are listed in the Schedule of Work, which comes in three fixed price options: The Minimum, The Recommended and The Complete. For broader budgeting, see [how much app development costs in Australia](/guides/app-development-cost-australia) and [how software spend is treated for tax](/guides/software-development-tax-deductions), and for accessibility requirements on mobile, see our [accessibility guide](/guides/app-accessibility-australia).
