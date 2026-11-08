---
title: "Native vs cross platform app development: when do you need Swift and Kotlin?"
metaTitle: "Native vs Cross Platform Apps: When to Go Native"
description: "Native Swift and Kotlin vs cross platform apps for Australian businesses: device features, cost of two codebases, store requirements and when native wins."
eyebrow: "Comparison"
category: compare
published: 2026-11-08
updated: 2026-11-08
summary: "Most business apps should be built cross platform, with one codebase in Flutter or React Native serving iOS and Android. Native development in Swift and Kotlin is worth the extra cost when the app lives on platform features: home screen widgets and watch apps, heavy background work, demanding graphics or camera processing, or hardware integrations where you can't risk a third party plugin lagging behind. Cross platform apps can still call native code for individual features, so the decision is about where most of the app's value sits."
takeaways:
  - "Native means separate Swift (iOS) and Kotlin (Android) apps. Cross platform means one shared codebase, usually Flutter or React Native."
  - "Bluetooth, NFC, HealthKit and background location all work from cross platform apps, through plugins or a small native module. Access alone isn't a reason to go native."
  - "Home screen widgets and similar extensions are written natively even in a Flutter app, so an app built around them leans native."
  - "Published Australian estimates put the cross platform saving at 30 to 40% against two native builds, on the app itself, not the backend."
  - "Both stores keep moving: from 31 August 2026 Google Play requires new apps and updates to target Android 16, and since 28 April 2026 Apple requires builds with Xcode 26."
faqs:
  - q: "Is a native app better than a cross platform app?"
    a: "Not automatically. For forms, lists, bookings, payments, dashboards and messaging, users can't tell the difference in a well built Flutter or React Native app. Native is better when the app depends on platform specific features, very heavy graphics or processing, or the newest operating system features on release day."
  - q: "What is the difference between a native app and a hybrid app?"
    a: "A native app is written in each platform's own language and toolkit. A hybrid app, in the older sense, is a web app running inside a native shell, as with Ionic or Cordova. Flutter and React Native are neither: they compile to native code and render either their own interface (Flutter) or real native components (React Native)."
  - q: "Can Flutter or React Native access HealthKit and NFC?"
    a: "Yes. Both frameworks reach native APIs through plugins, and where no good plugin exists, a developer writes a small native module: a platform channel in Flutter or a Turbo Native Module in React Native. That module is written in Swift and Kotlin, but the rest of the app stays shared."
  - q: "How much more does native cost?"
    a: "Two native apps mean the interface, device code and app tests are built and maintained twice, while design, backend and project management are shared. Published Australian estimates put the cross platform saving at 30 to 40% on the app itself. Our app development cost guide works through an example."
  - q: "Can we start cross platform and go native later?"
    a: "Yes, and it can be done gradually. Flutter and React Native can both be embedded into existing native apps, so a team can rebuild individual screens natively or the other way round. A full rewrite is rarely needed if the backend and API are designed well."
  - q: "Should we build a PWA instead?"
    a: "If users mostly need forms, lists and notifications, a progressive web app may be enough and avoids store review. It has more limits on iPhone than on Android. Our web app vs mobile app vs PWA guide covers that choice in detail."
sources:
  - title: "Target API level requirements for Google Play apps"
    url: "https://support.google.com/googleplay/android-developer/answer/11926878"
    publisher: "Google Play Console Help"
  - title: "Meet Google Play's target API level requirement"
    url: "https://developer.android.com/google/play/requirements/target-sdk"
    publisher: "Android Developers"
  - title: "Upcoming requirements"
    url: "https://developer.apple.com/news/upcoming-requirements/"
    publisher: "Apple Developer"
  - title: "Writing custom platform specific code (platform channels)"
    url: "https://docs.flutter.dev/platform-integration/platform-channels"
    publisher: "Flutter"
  - title: "Turbo Native Modules"
    url: "https://reactnative.dev/docs/turbo-native-modules-introduction"
    publisher: "React Native"
  - title: "Adding a Home Screen widget to your Flutter app"
    url: "https://codelabs.developers.google.com/flutter-home-screen-widgets"
    publisher: "Google Codelabs"
  - title: "Add Flutter to an existing app"
    url: "https://docs.flutter.dev/add-to-app"
    publisher: "Flutter"
  - title: "Integration with existing apps"
    url: "https://reactnative.dev/docs/integration-with-existing-apps"
    publisher: "React Native"
  - title: "App Review Guidelines (4.2 Minimum functionality)"
    url: "https://developer.apple.com/app-store/review/guidelines/"
    publisher: "Apple Developer"
  - title: "Kotlin Multiplatform"
    url: "https://www.jetbrains.com/kotlin-multiplatform/"
    publisher: "JetBrains"
  - title: "How much does an app cost in Australia? (2026)"
    url: "https://www.appgurus.com.au/how-much-does-an-app-cost-in-australia/"
    publisher: "AppGurus"
related:
  - title: "Flutter vs React Native in 2026"
    href: "/guides/flutter-vs-react-native"
  - title: "Web app vs mobile app vs PWA"
    href: "/guides/web-app-vs-mobile-app"
  - title: "App development cost in Australia"
    href: "/guides/app-development-cost-australia"
  - title: "Publishing to the App Store and Google Play from Australia"
    href: "/guides/app-store-publishing-australia"
service:
  title: "Web and mobile app development"
  href: "/services/web-mobile-apps"
---

## What are the options, exactly?

**Native development means building a separate app for each platform in its own language: Swift for iOS and Kotlin for Android. Cross platform development means one shared codebase that ships to both.** The terms get blurred, so it helps to pin them down.

| Approach | What you build | Typical tools | Interface |
|---|---|---|---|
| Native | Two apps, two codebases | Swift with SwiftUI; Kotlin with Jetpack Compose | Each platform's own components |
| Cross platform | One app, one codebase | Flutter, React Native | Flutter draws its own; React Native uses native components |
| Shared logic, native interface | One shared core, two interfaces | Kotlin Multiplatform | Native on each, or shared with Compose Multiplatform |
| Hybrid (web in a shell) | A web app packaged as an app | Ionic, Capacitor, Cordova | Web pages in a web view |

This page is about the first decision: native or one of the shared approaches. If you have already decided on cross platform, our [Flutter vs React Native](/guides/flutter-vs-react-native) guide picks between the two main frameworks. If you're not yet sure you need an installed app at all, start with [web app vs mobile app vs PWA](/guides/web-app-vs-mobile-app).

## What does native still do better in 2026?

**Native is better at things that sit outside the main app screen, things that push the hardware hard, and things that are brand new on the platform.** Inside an ordinary screen of forms, lists and buttons, modern cross platform apps are as fast and smooth as native for practical purposes.

Native keeps a real edge in four areas:

1. **Extensions outside the app.** Home screen widgets, watch apps, lock screen features and similar extensions are built with each platform's own frameworks. Google's Flutter codelab on home screen widgets says you can't draw a widget's interface with Flutter and instead adds widgets built in SwiftUI or Jetpack Compose. If the app's value is mostly in those surfaces, much of the code ends up native anyway.
2. **Heavy processing and graphics.** Real time camera processing, augmented reality, audio work and large 3D scenes benefit from direct access to the platform's graphics and machine learning frameworks.
3. **New platform features on day one.** Apple and Google release new APIs each year. Native teams can adopt them immediately; cross platform teams wait for plugin support or write the bridge themselves.
4. **Platform feel.** Apps that need to look and behave exactly like the platform's own apps, including every system gesture and accessibility behaviour, get there more easily natively.

## Do device features force you to go native?

**Usually not. Cross platform apps can reach almost every device feature, either through a plugin or a small piece of native code.** Flutter uses platform channels to call Swift and Kotlin code, and React Native uses Turbo Native Modules for the same job. The rest of the app stays shared.

| Feature | Cross platform reality | When it pushes you native |
|---|---|---|
| Bluetooth Low Energy (scanners, sensors, scales) | Plugins exist and work well for standard devices | Custom protocols, many simultaneous devices or tight timing |
| NFC (tags, access cards) | Plugins cover reading and writing common tag types | Payment style card emulation or unusual tag formats |
| HealthKit and Health Connect | Plugins cover common data types | Clinical grade data, many data types or background sync of health data |
| Background location | Plugins handle tracking with the right permissions | All day tracking where battery life is critical |
| Camera and scanning | Plugins for capture and barcode scanning | Real time image processing or custom camera pipelines |
| Push notifications | Mature, standard support | Rich interactive notifications with custom interfaces |

The risk to manage is plugin quality, not access. Before committing, list every device feature in the brief, check that a maintained plugin exists for each, and budget for native modules where one doesn't. For apps used in the field without signal, our [offline first field apps](/guides/offline-first-field-apps) guide covers storage and sync, which matter more than the framework.

## How do cost and timeline compare?

**Native means building and maintaining the app's interface, device code and tests twice, while design, backend and management are shared.** Published Australian estimates, such as AppGurus' 2026 cost guide, put the cross platform saving at 30 to 40% on the app compared with two native builds.

That saving applies to the mobile app, not the whole project. The backend, admin portal, integrations and data cost the same either way. Our [app development cost guide](/guides/app-development-cost-australia) works through an example where moving a Flutter app to native adds about $25,800 to a project.

Timeline follows the same pattern. Two native teams can work in parallel, so native doesn't have to take twice as long, but it needs twice the mobile engineers to keep pace, and keeping both apps in step needs more coordination.

## What does each cost to maintain?

**Native doubles the ongoing work on the app itself: two sets of operating system updates, two sets of dependencies and two specialist skill sets.** Cross platform puts most of that work in one place, with framework upgrades added on top.

Both stores raise their requirements every year whatever you build with. At the time of writing:

- Google Play requires new apps and app updates to target Android 16 (API level 36) from 31 August 2026, with extensions available to 1 November 2026.
- Apple has required apps uploaded to App Store Connect to be built with Xcode 26 and the iOS 26 SDK since 28 April 2026.

These deadlines are routine for an app under a support plan and painful for an app nobody has touched in two years. Team skills matter too: a native app needs someone who knows Swift and someone who knows Kotlin, or one rare person who knows both. Our guide to [publishing on the App Store and Google Play](/guides/app-store-publishing-australia) covers the account and review side.

## Where does native win, and where doesn't it?

**Native tends to win when the product is defined by the device; cross platform wins when the product is defined by the business process.** Some illustrative patterns:

Native is usually the better spend for:

- A fitness or health product centred on a watch app and widgets.
- A camera app doing real time measurement or inspection with augmented reality.
- An app driving custom Bluetooth hardware with strict timing, such as industrial equipment.
- A consumer app competing on platform polish against well funded rivals.

Cross platform is usually the better spend for:

- A booking, ordering or loyalty app for a hospitality or service business.
- A field service app for technicians with forms, photos, signatures and offline sync.
- A member or customer portal with payments and notifications.
- An internal app for staff on company phones.

A middle path works well when one feature needs native depth: build the app cross platform and write that one feature as a native module. Both Flutter and React Native can also be embedded in existing native apps, so a mixed approach can change over time.

## Is Kotlin Multiplatform a middle ground?

**Yes, for teams that want native interfaces without writing the business logic twice.** Kotlin Multiplatform shares code such as data models, networking and business rules across Android and iOS, while each platform keeps its own interface. JetBrains also offers Compose Multiplatform, which it describes as stable for Android, iOS and desktop, for teams that want to share the interface too.

It suits organisations that already have Android engineers working in Kotlin and want an iOS app without a full second team. It's less common than Flutter or React Native, so hiring and plugin choice are narrower, and iOS engineers still need to know Swift for the native layer.

## Where do hybrid apps and PWAs fit?

**Hybrid apps and progressive web apps are web technology, so they're the cheapest route when the app is mostly content and forms.** A hybrid app wraps web pages in a native shell for the stores; a PWA is installed straight from the browser with no store at all. Both give up some device access and polish, especially on iPhone, and Apple's review guidelines push back on apps that are little more than a repackaged website. If that trade looks acceptable, [web app vs mobile app vs PWA](/guides/web-app-vs-mobile-app) is the better guide to read next.

## Decision table

| Question | If yes | If no |
|---|---|---|
| Is the app's main value in widgets, a watch app or other extensions? | Lean native | Cross platform |
| Does it process camera, audio or sensor data in real time? | Lean native | Cross platform |
| Must it adopt new iOS and Android features on release day? | Native | Cross platform |
| Is every device feature covered by a maintained plugin? | Cross platform | Budget native modules, or native |
| Will one small team maintain it for years? | Cross platform | Either |
| Do you already have Swift and Kotlin engineers in house? | Native is realistic | Cross platform |

If most answers point to cross platform, the next question is Flutter or React Native; see [Flutter vs React Native](/guides/flutter-vs-react-native).

## How AWLabs approaches the choice

We build cross platform business apps in Flutter, and recommend native when the brief is dominated by platform features rather than business workflow. Either way, we list the device features up front and confirm plugin support before the Schedule of Work is fixed, so there are no surprises mid build. Senior engineers lead every build. See [Flutter development](/services/flutter-development) and [web and mobile app development](/services/web-mobile-apps).
