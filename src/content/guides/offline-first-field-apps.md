---
title: "Offline first apps for remote and regional Australia"
metaTitle: "Offline First App Development for Regional Australia"
description: "Building offline first field apps for farms, mines, regional roads and basements: local databases, sync, conflict rules, satellite messaging and real testing."
eyebrow: "Explainer"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "An offline first app stores its data on the device and treats the network as optional: people keep working with no signal, and changes sync when a connection returns. It suits Australian field work on farms, mines, regional roads, building sites and basements, where coverage drops for minutes or days. The hard parts are not the local database but the sync engine, the rules for resolving conflicting edits, handling photos and large files, and securing data on lost devices. Satellite messaging on phones helps with safety texts, not with syncing a day of job records."
takeaways:
  - "Offline first means the device is the primary copy for the user, and the server is reconciled later. Offline tolerant means the app survives short drops but expects a connection."
  - "SQLite on the device is the usual foundation. Sync engines such as PowerSync keep it in step with a backend database; MongoDB's Atlas Device Sync reached end of life on 30 September 2025."
  - "Decide conflict rules per field, not per app: last write wins is fine for a note, wrong for a stock count."
  - "Telstra Satellite Messaging sends texts and selected apps outdoors with a clear sky view, and the proposed Universal Outdoor Mobile Obligation would start from 1 December 2027. Neither is a substitute for offline design."
  - "Test in the places users actually work, with real devices, flat batteries and full storage, before rolling out."
faqs:
  - q: "What is an offline first app?"
    a: "It is an app designed so every core task works with no internet connection. Data is read from and written to a database on the device, and a sync process sends changes to the server and pulls down others' changes when a connection is available."
  - q: "Can a web app work offline?"
    a: "Yes. A progressive web app can cache its screens with a service worker and store data in the browser, so forms and lists work offline. On iPhone, though, background sync isn't available to web apps at the time of writing, so changes usually sync only when the user reopens the app. Field apps that need reliable background sync often go native or cross platform."
  - q: "Flutter or React Native for an offline field app?"
    a: "Both work well. Both have mature SQLite libraries and are supported by sync engines such as PowerSync. Choose on your team's skills and the device features you need, such as Bluetooth printers or barcode scanners."
  - q: "What happens if two people edit the same record offline?"
    a: "The app needs a rule for each kind of data. Common choices are last write wins, merging field by field, keeping both versions for a person to resolve, or only allowing certain roles to edit certain fields. The rule should be decided with the people who own the data, not left to a default."
  - q: "Will satellite to phone services fix our coverage problem?"
    a: "They help with safety and messaging. Telstra's service sends texts and selected apps outdoors with a clear view of the sky on compatible devices. That isn't enough bandwidth or reliability to depend on for syncing job data, photos or forms, so the app still needs to work offline."
  - q: "How do we secure data stored on staff phones?"
    a: "Store only what the user needs, encrypt the local database, require device passcodes or biometrics, sign users out remotely when a device is lost, and wipe local data on sign out. Under APP 11, personal information on a device still needs reasonable security steps."
sources:
  - title: "Modernising universal telecommunications services (Universal Outdoor Mobile Obligation)"
    url: "https://www.infrastructure.gov.au/media-communications/modernising-universal-telecommunications-services"
    publisher: "Department of Infrastructure, Transport, Regional Development, Communications, Sport and the Arts"
  - title: "National Audit of Mobile Coverage"
    url: "https://www.infrastructure.gov.au/media-communications/regional-communications-programs/better-connectivity-plan-regional-and-rural-australia/national-audit-mobile-coverage"
    publisher: "Department of Infrastructure, Transport, Regional Development, Communications, Sport and the Arts"
  - title: "Satellite to mobile"
    url: "https://www.telstra.com.au/coverage-networks/mobile-technology/satellite-to-mobile"
    publisher: "Telstra"
  - title: "Device SDKs deprecation"
    url: "https://www.mongodb.com/docs/atlas/device-sdks/deprecation/"
    publisher: "MongoDB Docs"
  - title: "PowerSync overview"
    url: "https://docs.powersync.com/intro/powersync-overview"
    publisher: "PowerSync Docs"
  - title: "Couchbase Lite"
    url: "https://docs.couchbase.com/couchbase-lite/current/index.html"
    publisher: "Couchbase Docs"
  - title: "Appropriate uses for SQLite"
    url: "https://www.sqlite.org/whentouse.html"
    publisher: "SQLite"
  - title: "Chapter 11: APP 11 Security of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information"
    publisher: "OAIC"
  - title: "Background Synchronization API"
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API"
    publisher: "MDN Web Docs"
related:
  - title: "Web app vs mobile app vs PWA"
    href: "/guides/web-app-vs-mobile-app"
  - title: "Flutter vs React Native"
    href: "/guides/flutter-vs-react-native"
  - title: "Construction software and AI"
    href: "/solutions/construction-software-and-ai"
  - title: "How to choose a tech stack"
    href: "/guides/how-to-choose-a-tech-stack"
  - title: "How much does it cost to build an app in Australia?"
    href: "/guides/app-development-cost-australia"
service:
  title: "Flutter development"
  href: "/services/flutter-development"
disclaimer: none
---

## Where do Australian field apps lose signal?

**Anywhere work happens away from towns and main roads, and in plenty of places inside cities: farms, mine sites, national parks, regional highways, plant rooms, car parks, lift shafts and new buildings with no fit out yet.** The coverage map on a carrier's website is drawn for outdoor phones, often at ground level near towers. A technician in a concrete basement or a ranger in a gully gets something different.

The Federal Government's National Audit of Mobile Coverage, which runs until 30 June 2027, combines drive testing, static testing and crowd sourced data, and publishes it through a Mobile Audit Visualisation Tool. It is a useful starting point for planning, but your own users' experience matters more.

What users do when an app fails without signal is predictable. They write on paper, take photos with the camera app, and enter everything later from memory. The data arrives late, incomplete or not at all, and the app gets the blame. Offline design is about making the app the easiest place to record work, wherever the work is.

## Offline first or offline tolerant: which level do you need?

**Offline first means the app works fully with no connection and syncs later; offline tolerant means it survives short drops but assumes a connection most of the time.** The right level depends on how long people are without signal and what they need to do in that time.

| Level | What works without signal | Suits | Build effort |
|---|---|---|---|
| Online only, with clear errors | Nothing; the app says so and keeps unsent input | Office staff, sales reps in town | Low |
| Offline tolerant | Viewing recently loaded data; queuing simple submissions | Couriers and city trades with brief dead spots | Moderate |
| Offline first | Every core task: look up jobs, fill forms, take photos, capture signatures, create records | Farm, mining, regional and infrastructure work, inspections in basements | Highest |

Most regional field apps need offline first for the core job and can stay online only for rare tasks such as account settings. Write down which tasks must work offline. That list drives the data model, the sync design and the testing.

## Which local databases and sync engines work?

**SQLite on the device is the usual foundation, with a sync engine or a custom sync service to reconcile it with the server database.** SQLite is a small, self contained database that runs inside the app; its own documentation notes that because it needs no administration, it works well in devices that must operate without expert human support.

The real decision is the sync layer:

- **PowerSync** keeps an in app SQLite database synced with a backend database, so apps keep working offline and update across users and devices when connected. It works with Flutter, React Native and web clients.
- **Couchbase Lite with Sync Gateway** offers a document database with built in sync, suited to teams already on Couchbase.
- **A custom sync service** over your own API gives full control and suits simple, mostly one way flows, such as technicians submitting completed jobs. It gets hard quickly once many people edit the same records.
- **MongoDB Realm and Atlas Device Sync**, once a common choice, are no longer an option for new builds. MongoDB deprecated the Atlas Device SDKs in September 2024, and they reached end of life on 30 September 2025. The on device database continues as an open source project, but the sync service is gone, so apps that relied on it have had to migrate.

That last point is a lesson in itself: choose a sync approach you could replace, and keep your server database as a standard, portable system such as PostgreSQL.

On the web, a progressive web app can store data in the browser and cache its screens, but background sync isn't available on iPhone at the time of writing, so changes sync only when the app is open. Our [web app vs mobile app vs PWA guide](/guides/web-app-vs-mobile-app) covers those limits.

## How do you resolve conflicts when two people edit the same record?

**Decide a rule for each kind of data, with the people who own it, before you build.** Conflicts are rare in some apps and constant in others. A crew of three updating the same job card in a paddock will create them daily.

| Data | Sensible rule | Why |
|---|---|---|
| Free text notes | Keep both, append with author and time | Losing someone's note is worse than a long note |
| Status fields (job started, completed) | Allow only forward moves; latest valid status wins | A job shouldn't go from completed back to started by accident |
| Quantities and stock counts | Record changes as movements (minus 3, plus 10), not totals | Movements from two devices add up correctly; totals overwrite each other |
| Signatures, photos, readings | Never overwrite; store each as a new record | They are evidence |
| Customer details | Last write wins, with history kept | Low risk and easy to correct |
| Safety or compliance answers | Flag conflicts for a supervisor to review | A wrong answer has consequences |

Two design habits reduce conflicts. Give each record a clear owner, so only the assigned technician edits the job while others add notes. And record events rather than overwriting state where you can, because events from two devices can usually be merged.

## How do you handle photos, large files and battery?

**Treat photos and files separately from records: save them locally first, upload them in the background when there's a good connection, and never let a pending upload block the user.** Field apps often capture dozens of photos a day, and a weak connection that can sync small records may fail repeatedly on large files.

Practical rules:

- **Compress on the device** to a size that still serves the purpose (an inspection photo rarely needs full camera resolution).
- **Queue uploads** with retry and resume, and show the user what is still waiting.
- **Prefer Wi Fi or strong signal** for large uploads where the business allows it.
- **Watch storage.** Clear synced files from the device after an agreed period.
- **Be gentle on battery.** Constant GPS tracking and aggressive sync retries drain phones in a long day. Sync on change and on reconnect, not every few seconds.

## What do satellite and direct to cell services change?

**They help people send messages and call for help where there is no mobile coverage; they don't yet replace a normal data connection for field apps.** Telstra Satellite Messaging lets eligible customers with compatible devices send and receive text messages, plus selected apps in approved categories such as safety, navigation, messaging and weather, when they're outdoors with a clear view of the sky.

The Federal Government has also introduced the Universal Outdoor Mobile Obligation Bill. Under the proposed legislation, from 1 December 2027 Optus, Telstra and TPG Telecom would have to provide reasonable and equitable access to baseline outdoor mobile coverage across Australia, using their networks and direct to device satellite services.

For app design, the takeaways are:

- Outdoor, clear sky and baseline mean many work locations (sheds, pits, basements, dense bush) still won't have a usable data link.
- Low bandwidth links reward apps that sync small changes, not whole datasets.
- Safety features such as check ins can be designed around SMS as a fallback, separate from the main sync.

Offline first design remains the dependable answer.

## How do you secure data stored on the device?

**Store only what the user needs offline, encrypt it, and be able to remove it remotely.** A phone left on a ute dashboard carries everything in its local database. Under APP 11, an organisation holding personal information must take reasonable steps, including technical and organisational measures, to protect it from misuse, loss and unauthorised access. That includes copies on staff devices.

- [ ] Sync only the jobs, customers and records assigned to that user, for a limited period.
- [ ] Encrypt the local database and files, with keys held in the platform's secure storage.
- [ ] Require a device passcode or biometrics, and use the company's device management where available.
- [ ] Support remote sign out, and wipe local data on sign out or after a long offline period.
- [ ] Log which device synced what, so a lost device can be assessed quickly.

## How do you test in real conditions, and what does it cost?

**Test where people work, on the devices they carry, before any wide rollout.** Emulators and office Wi Fi won't show you a sync that silently fails at 2% battery in a cold shed.

A field test plan:

1. **Pick three to five real locations** with known bad coverage, including indoors.
2. **Use the actual devices** staff carry, including older phones and rugged handsets.
3. **Script a full day**: download jobs at the depot, work offline for hours, capture photos, return to coverage.
4. **Break things on purpose**: airplane mode mid save, full storage, flat battery, two people editing one record.
5. **Check the server** afterwards: every record, photo and signature arrived once, in the right place.
6. **Pilot with a small crew** for two to four weeks before rolling out.

Offline first adds real cost compared with an online app, mostly in sync design, conflict handling and testing. Our [app development cost guide](/guides/app-development-cost-australia) gives Australian ranges for mobile builds, and the offline layer is something to price explicitly rather than assume. For trade and building site use cases, see [construction software and AI](/solutions/construction-software-and-ai).

## How AWLabs approaches offline field apps

We build field apps in Flutter with SQLite on the device and PostgreSQL on the server, using a sync engine or a custom sync service depending on how many people edit the same records. Conflict rules are agreed with the people who own the data, and we test on site before rollout.

After a Development Consult (a 15 minute call or a Zoom with Andy), the paid Discovery Audit maps which tasks must work offline and how sync should behave; its fee is credited in full against the build. The Schedule of Work then offers three fixed price options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. See [Flutter development](/services/flutter-development) and [web and mobile apps](/services/web-mobile-apps).
