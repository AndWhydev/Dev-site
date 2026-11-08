---
title: "Web app vs mobile app vs PWA: which should your business build?"
metaTitle: "Web App vs Mobile App vs PWA: Which Should You Build? (2026)"
description: "Web app, native mobile app or PWA? What each can do on iPhone and Android in 2026, how cost and app store fees compare, and which suits your business."
eyebrow: "Comparison"
category: compare
published: 2026-11-08
updated: 2026-11-08
summary: "Build a web app when people mainly use your software at a desk, need it on any device without installing anything, or you want one codebase and no app store fees. Build a mobile app when people use it on the move every day and need things the web can't do reliably on iPhone, such as Bluetooth, NFC, background sync or a listing in the App Store. A progressive web app (PWA) sits between the two: a web app that can be installed, work offline and, since iOS 16.4, send push notifications on iPhone once added to the Home Screen. For most Australian businesses the sensible order is web first, then a mobile app when usage proves the need."
takeaways:
  - "A web app runs in the browser on any device; a native or cross platform mobile app is installed from the App Store or Google Play; a PWA is a web app that can be installed and work offline."
  - "PWAs are more capable on iPhone than they used to be: push notifications since iOS 16.4, and in Safari 26 every site added to the Home Screen opens as a web app by default."
  - "PWAs still can't use Bluetooth, NFC or background sync on iPhone at the time of writing, which rules them out for some field and hardware use."
  - "Mobile apps add app store accounts, review and, for digital goods, store commissions. Business apps paid by invoice usually avoid commissions."
  - "Web first is the cheapest way to learn what users need; a cross platform mobile app can follow on the same backend."
faqs:
  - q: "What is the difference between a PWA and a mobile app?"
    a: "A PWA is a web app that can be installed on a phone's home screen, work offline and send notifications, but it runs on the browser engine and is updated like a website. A mobile app is installed from the App Store or Google Play and has full access to the phone's hardware and background features. PWAs are cheaper to build and update; mobile apps can do more, especially on iPhone."
  - q: "React Native vs PWA: which should I choose?"
    a: "Choose a PWA if your users mostly need forms, lists, dashboards and notifications, and you want one codebase with no app store review. Choose React Native, Flutter or another cross platform framework if you need Bluetooth, NFC, reliable background work, deep camera or location use on iPhone, or a presence in the app stores. Both can share a backend with your website."
  - q: "Do I need an app for my business?"
    a: "Usually not as a first step. If your customers visit occasionally, a fast website or web app does the job without asking them to install anything. An app earns its place when the same people use it often, ideally weekly or more, or when staff need offline access and phone hardware in the field."
  - q: "Is it worth building an app for a small business?"
    a: "It is worth it when the app does something repeat customers or staff value enough to install, such as booking, ordering, loyalty or job management, and the cost fits the revenue or time it saves. Published Australian ranges put a standard business app at about $50,000 to $120,000 (AUD, ex GST), so test demand with a website or web app first if you can."
  - q: "What is the difference between a website and a web app?"
    a: "A website mainly presents information: pages people read. A web app lets people do things: log in, enter data, book, pay, manage records. Many businesses need a website for marketing and a web app for customers or staff, and they can live on the same domain."
  - q: "Can a PWA send push notifications on iPhone?"
    a: "Yes, since iOS and iPadOS 16.4, as long as the user has added the web app to their Home Screen and the permission request comes from a direct user action such as tapping a button. Notifications don't work for a site that is only open in a Safari tab."
  - q: "Can I put a PWA in the App Store?"
    a: "You can wrap a web app in a native shell and submit it, but Apple's App Review Guidelines say an app should include features, content and interface that elevate it beyond a repackaged website. A thin wrapper risks rejection, so plan for some genuinely native features if the App Store matters."
sources:
  - title: "Progressive web apps"
    url: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
    publisher: "MDN Web Docs"
  - title: "Web Push for Web Apps on iOS and iPadOS"
    url: "https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/"
    publisher: "WebKit"
  - title: "WebKit Features in Safari 26.0"
    url: "https://webkit.org/blog/17333/webkit-features-in-safari-26-0/"
    publisher: "WebKit"
  - title: "Web Bluetooth API"
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API"
    publisher: "MDN Web Docs"
  - title: "Background Synchronization API"
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API"
    publisher: "MDN Web Docs"
  - title: "App Review Guidelines"
    url: "https://developer.apple.com/app-store/review/guidelines/"
    publisher: "Apple Developer"
  - title: "App Store Small Business Program"
    url: "https://developer.apple.com/app-store/small-business-program/"
    publisher: "Apple Developer"
  - title: "Service fees"
    url: "https://support.google.com/googleplay/android-developer/answer/112622"
    publisher: "Google Play Console Help"
  - title: "Enrol in the Apple Developer Program"
    url: "https://developer.apple.com/programs/enroll/"
    publisher: "Apple Developer"
  - title: "How Much Does an App Cost in Australia?"
    url: "https://www.appgurus.com.au/how-much-does-an-app-cost-in-australia/"
    publisher: "AppGurus"
related:
  - title: "Flutter vs React Native"
    href: "/guides/flutter-vs-react-native"
  - title: "How much does it cost to build an app in Australia?"
    href: "/guides/app-development-cost-australia"
  - title: "How much does an MVP cost in Australia?"
    href: "/guides/mvp-development-cost-australia"
  - title: "Is my Lovable app production ready?"
    href: "/guides/make-ai-built-app-production-ready"
  - title: "How to compare software quotes"
    href: "/guides/how-to-compare-software-quotes"
service:
  title: "Web and mobile app development"
  href: "/services/web-mobile-apps"
disclaimer: none
---

## Web app, mobile app or PWA: the short answer by situation

**Pick the option that matches how often people will use it, where they'll be, and what the phone has to do.** Most decisions come down to those three questions.

| Your situation | Best starting point | Why |
|---|---|---|
| Staff use it at a desk: admin, reporting, approvals | Web app | Big screens, no install, one codebase |
| Customers use it occasionally: quotes, bookings, account details | Web app or PWA | Nobody installs an app for a twice a year task |
| Repeat customers use it weekly: ordering, loyalty, bookings | PWA first, mobile app when usage proves it | Install and notifications without app store costs at first |
| Field staff need it offline in places with poor coverage | PWA or mobile app | Both can work offline; choose an app if they need phone hardware |
| It must talk to Bluetooth or NFC devices | Mobile app | iPhone browsers don't support these web features |
| Being found in the App Store or Google Play matters | Mobile app | A listing needs a real app, not a wrapped website |
| You're testing an idea on a small budget | Web app or PWA | Cheapest to build and change |

If you need both a customer app and staff tools, the common pattern is a mobile app for customers and a web app for staff, sharing one backend.

## What is the difference between a web app, a mobile app and a PWA?

**A web app runs in a browser, a mobile app is installed from an app store, and a PWA is a web app that can be installed and behave like an app.**

- **Web app.** Software you use through a browser: log in, enter data, book, pay. It works on any device with a browser and updates the moment you deploy. A website mainly presents information; a web app lets people do things.
- **Mobile app.** An app installed from the Apple App Store or Google Play. It can be fully native (Swift for iOS, Kotlin for Android) or cross platform, built once with a framework such as Flutter or React Native. Our [Flutter vs React Native guide](/guides/flutter-vs-react-native) compares the two main frameworks.
- **Progressive web app.** MDN defines a PWA as an app built using web platform technologies that provides a user experience like that of a platform specific app. It can be installed on the device, work offline and do some work in the background.

## What can a PWA do on iPhone and Android in 2026?

**On Android a PWA can do most of what a business app needs; on iPhone it now handles install, offline and push notifications, but not Bluetooth, NFC or background sync.** This is the table that decides most PWA questions. It reflects browser support at the time of writing (November 2026), drawn from WebKit's announcements and MDN's compatibility data.

| Capability | iPhone (Safari and Home Screen web apps) | Android (Chrome) |
|---|---|---|
| Install to home screen | Yes. In Safari 26, every site added to the Home Screen opens as a web app by default | Yes, with an install prompt |
| Work offline | Yes, with a service worker | Yes |
| Push notifications | Yes since iOS 16.4, once added to the Home Screen and after the user taps to allow | Yes |
| App icon badge counts | Yes since iOS 16.4 for Home Screen web apps | Yes |
| Background sync after the app closes | No | Yes |
| Bluetooth devices | No | Yes |
| NFC tags | No | Yes |
| Camera, photos and location while open | Yes | Yes |
| App store listing | Only by wrapping it as an app | Only by wrapping it as an app |

Two practical consequences. First, iPhone users must add the PWA to their Home Screen before notifications work, so you need to show them how. Second, if your field staff scan NFC tags, connect to Bluetooth printers or need data to sync after they close the app, a PWA won't do on iPhone, and a mobile app is the safer choice.

Browser features change every year, so recheck this table before you commit.

## How do cost and time compare?

**A web app or PWA is usually the cheapest option, a cross platform mobile app costs more, and two separate native apps cost the most.** In all three, the backend, integrations and admin tools often cost as much as the part users see.

| Option | What you build | Relative cost | Published reference points (AUD, ex GST) |
|---|---|---|---|
| Web app or PWA | One front end and a backend | Lowest | Mid complexity business systems from $40,000 to $150,000 in Expeed's bands; see our [custom software cost guide](/guides/custom-software-development-cost-australia) |
| Cross platform mobile app | One Flutter or React Native app for iOS and Android, plus backend and admin tools | Higher | Standard business apps $50,000 to $120,000 (AppGurus) |
| Two native apps | Separate iOS and Android apps, plus backend and admin tools | Highest | AppGurus says cross platform development saves 30 to 40% compared with two native builds |

These are market ranges, not quotes. A PWA adds a little to a web app for the offline and notification work, far less than a mobile app adds. Mobile apps also carry ongoing costs a web app doesn't: developer accounts, app store review on every release, and updates as iOS and Android change. Our [app development cost guide](/guides/app-development-cost-australia) breaks those down.

## Which app store rules and fees change the maths?

**App stores add account fees, review and, for digital goods sold inside the app, a commission. Many business apps avoid the commission because customers pay by invoice or for physical goods and services.**

At the time of writing:

- **Developer accounts.** Apple charges US$99 per membership year, billed in local currency, and Google Play a one time US$25 registration fee.
- **Apple commission.** Under the App Store Small Business Program, Apple takes 15% on paid apps and in app purchases for developers with up to US$1 million in proceeds in the prior calendar year, and new developers. Larger developers pay a higher standard rate.
- **Google Play fees.** Google introduced a new service fee structure for Australia from 30 September 2026. For example, auto renewing subscriptions bought through Google Play Billing carry a 10% service fee plus a 5% billing fee. Check Google's current service fee page for your case.
- **Review rules.** Apple's guidelines say an app should include features, content and interface that elevate it beyond a repackaged website, and that apps which support account creation must offer account deletion within the app.

A web app or PWA avoids all of these: no store review, no commission, and you can release a fix the same day. The trade off is discoverability and some device features.

## Which questions should you answer before deciding?

**Answer these with real numbers or real users, not guesses, and the choice usually makes itself.**

- **How often will one person use it?** Daily or weekly use supports an app; monthly or less usually doesn't.
- **Where will they be?** At a desk, on a phone in a shop, or in a basement plant room with no signal?
- **What must the phone do?** Camera and location work on the web. Bluetooth, NFC and work that continues after the app closes point to a mobile app on iPhone.
- **Do they need notifications?** If yes, can you get iPhone users to add a PWA to their Home Screen, or would an app be easier for them?
- **Will customers search an app store for you?** Only a listing in the stores helps with that.
- **Are you selling digital goods inside the app?** If so, factor in store commissions; if customers pay by invoice or for physical goods and services, it usually matters less.
- **Who keeps it running?** A mobile app needs updates for new iOS and Android versions every year; a web app needs fewer.
- **What is the budget for year two?** The build is the first cost, not the last.

## When is a website enough?

**A website is enough when people mainly need information from you and a way to contact you or book.** Adding forms, a booking tool and a payment link to a good website covers a lot of small business needs without building an app at all.

Move to a web app when people need to log in and manage something over time: their orders, jobs, documents, appointments or account. Move to a mobile app only when that use is frequent and on the move.

## Should you start with a web app and add a mobile app later?

**For most businesses, yes: build the backend and a web app first, learn how people use it, then add a mobile app on the same backend if the numbers justify it.** Nothing in the web first path is wasted if it is designed with that in mind.

1. **Design the backend and API for more than one front end** from the start.
2. **Launch the web app or PWA** to customers or staff.
3. **Measure**: how often people return, which features they use on phones, where the web falls short.
4. **Add a cross platform mobile app** for the features that need it, reusing the backend, business rules and design system.
5. **Keep the web app** for desktop users and staff tools.

If you already have a prototype built with an AI app builder, the same thinking applies. Most of those tools produce web apps, so check our guide to [making an AI built app production ready](/guides/make-ai-built-app-production-ready) before deciding whether to add mobile.

## How AWLabs approaches the choice

We build web apps and cross platform mobile apps with Flutter, so we don't need to push you towards one. In the Development Consult, a 15 minute call or a Zoom with Andy, we ask who will use it, how often and where, and what the phone has to do. If you go further, the paid Discovery Audit tests those questions against your users and budget, and its fee is credited in full against the build. The Schedule of Work then gives three fixed price options, The Minimum, The Recommended and The Complete; often the first is a web app and the last adds the mobile app. Senior engineers lead every build, and the code is assigned to you as each part is paid for. See our [web and mobile app service](/services/web-mobile-apps), [Flutter development](/services/flutter-development) and [startup MVP](/startup-mvp) pages.
