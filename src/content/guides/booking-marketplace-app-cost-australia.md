---
title: "How much does it cost to build an app like Uber or Airtasker in Australia?"
metaTitle: "Cost to Build an App Like Uber or Airtasker in Australia"
description: "What booking, marketplace and on-demand apps cost to build in Australia: AUD ranges by app type, what drives cost, running costs and a cheaper first version."
eyebrow: "Cost guide"
category: cost
published: 2026-11-08
updated: 2026-11-08
summary: "Published Australian ranges put a booking system with payments at about $40,000 to $150,000 (AUD, ex GST), a marketplace app like Airtasker or Gumtree at about $90,000 to $180,000, and an on-demand app like Uber, with separate customer and provider apps, live tracking and an admin panel, at about $130,000 to $250,000 for a first version. Those are market ranges, not quotes. The bigger risk is rarely the build: two sided apps also need money to attract both sides, and every transaction carries payment fees from day one."
takeaways:
  - "A booking app serves one business and its customers. A marketplace or on-demand app serves two groups who don't know each other, which roughly doubles the product you're building."
  - "Real time location, payments split between parties, messaging and an admin panel are the components that move an app from the booking band into the on-demand band."
  - "Running costs scale with transactions: at Stripe's listed Australian rate of 1.65% plus A$0.30 per domestic card payment, $50,000 a month in bookings costs roughly $950 a month in card fees alone."
  - "You don't need Uber's dispatch engine to test an Uber style idea. A first version with manual matching, one city and a web app for providers can cost a fraction of the full build."
  - "Check off the shelf booking platforms first. If one handles your workflow, a subscription will beat a custom build for years."
faqs:
  - q: "How much does a booking app cost to build in Australia?"
    a: "Expeed puts a booking system with payment integration in its $40,000 to $150,000 mid complexity band (AUD). The low end is a web booking flow with deposits and an admin calendar; the high end adds native mobile apps, staff scheduling rules, memberships and integrations with accounting or CRM systems."
  - q: "How much does it cost to build an app like Uber?"
    a: "AppGurus puts on-demand service apps, with a customer app, provider app, admin panel, GPS tracking, payments and ratings, at $130,000 to $250,000 AUD. Uber itself is the product of many years and very large engineering teams; nobody is quoting that. The range is for a first version that works in one market."
  - q: "How much does an Airtasker style marketplace cost?"
    a: "AppGurus puts marketplace apps with buyer and seller profiles, listings, split commission payments, messaging and reviews at $90,000 to $180,000 AUD. Add more if you need bidding, identity checks, dispute handling or insurance integrations from the start."
  - q: "Can I build my marketplace with Lovable, Bolt or a no code tool instead?"
    a: "For testing demand, often yes. A prototype built with an AI app builder or a no code platform can show whether customers and providers will sign up. Before you take real payments and personal information at scale, have the code, security, payments flow and data handling reviewed, because those tools make it easy to ship something that works in a demo and fails under real use."
  - q: "Is there an app cost calculator I can use?"
    a: "Calculators give a feel for scale, but they can't see the parts that drive cost in two sided apps, such as matching rules, payment flows between parties and how much admin tooling you need. Use the component table on this page to build a rough range, then get it scoped properly."
  - q: "How do marketplace apps take payments and pay providers?"
    a: "Most use a platform payments product such as Stripe Connect, which collects from the customer, takes the platform's commission and pays the provider. Stripe says Connect is included at no additional charge for businesses on its standard payments pricing. This avoids your business holding other people's money directly, but get legal and accounting advice on your model."
  - q: "How long does it take to build an on-demand app?"
    a: "A focused first version of a booking app can take a few months. An on-demand app with two mobile apps, live tracking and an admin panel usually takes longer, often six months or more including testing and app store review. Phasing the launch, as described below, is the most reliable way to shorten it."
sources:
  - title: "How much does an app cost in Australia?"
    url: "https://www.appgurus.com.au/how-much-does-an-app-cost-in-australia/"
    publisher: "AppGurus"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
  - title: "How much does it cost to build an app in Australia?"
    url: "https://wavedigital.com.au/blog/how-much-does-it-cost-to-build-an-app-in-australia/"
    publisher: "Wave Digital"
  - title: "Stripe pricing (Australia)"
    url: "https://stripe.com/au/pricing"
    publisher: "Stripe"
  - title: "Google Maps Platform pricing"
    url: "https://mapsplatform.google.com/pricing/"
    publisher: "Google"
related:
  - title: "How much does it cost to build an app in Australia?"
    href: "/guides/app-development-cost-australia"
  - title: "How much does an MVP cost in Australia?"
    href: "/guides/mvp-development-cost-australia"
  - title: "Software maintenance cost"
    href: "/guides/software-maintenance-cost"
  - title: "How to write a software or app brief"
    href: "/guides/how-to-write-a-software-brief"
  - title: "Flutter vs React Native"
    href: "/guides/flutter-vs-react-native"
service:
  title: "Web and mobile app development"
  href: "/services/web-mobile-apps"
---

## What does a booking, marketplace or on-demand app cost?

**It depends mostly on how many sides the app serves and whether anything happens in real time.** A booking app connects one business with its customers. A marketplace connects strangers on two sides. An on-demand app does that while tracking location and matching people within minutes.

| App type | Examples | What a first version includes | Published range (AUD, ex GST) | Source |
|---|---|---|---|---|
| Booking system | Salon, clinic, gym class, equipment hire | Online booking, payments, admin calendar, reminders | $40,000 to $150,000 | Expeed (booking system with payment integration) |
| Marketplace | Airtasker, Gumtree, Etsy style | Buyer and seller profiles, listings, split commission payments, messaging, reviews | $90,000 to $180,000 | AppGurus |
| On-demand service | Uber, food delivery, cleaning, tradie booking | Customer app, provider app, admin panel, GPS tracking, payments, ratings | $130,000 to $250,000 | AppGurus |

These are third party market ranges for Australian development, not our prices. Wave Digital, writing in July 2026, puts most production ready MVPs from experienced Australian product teams at $125,000 to $250,000 or more, which is consistent with the marketplace and on-demand bands.

For a wider look at app pricing outside these three models, see our [app development cost guide](/guides/app-development-cost-australia).

## Why does a two sided app cost so much more than a booking app?

**Because you are building two products that have to trust each other, plus the tools to run the marketplace between them.** A salon booking app has one business setting the rules. A marketplace has to handle providers who set their own prices and availability, customers who've never met them, and disputes between the two.

Here's what changes as you move from booking to marketplace to on-demand:

| Capability | Booking | Marketplace | On-demand |
|---|---|---|---|
| Who sets availability | The business | Each provider | Each provider, in real time |
| Payments | Business is paid directly | Platform collects, takes a commission, pays sellers | Same, often per trip or job, with tips and adjustments |
| Number of apps | Customer app or web, plus admin | Buyer and seller views, plus admin | Separate customer and provider apps, plus admin |
| Location | Address on the booking | Search by area | Live GPS, routing and arrival estimates |
| Matching | Customer picks a slot | Customer picks or posts and receives offers | System assigns or offers jobs within minutes |
| Trust and safety | Business vets its own staff | Profiles, reviews, identity checks, reporting | All of that, plus live safety features |
| Admin | Calendar and bookings | Approvals, disputes, refunds, payouts | All of that, plus live operations monitoring |

Every row in the right hand columns is more screens, more backend logic and more testing. The admin side is the part founders most often underestimate. Someone has to approve providers, handle refunds, investigate complaints and see what's happening, and they need software to do it.

## Which components drive the cost?

**Payments, maps, messaging and admin tooling are the big line items, but the matching logic that ties them together is where budgets usually move.** AppGurus publishes indicative per feature costs for Australian app builds:

| Component | Indicative cost (AUD) | Booking | Marketplace | On-demand |
|---|---|---|---|---|
| User login and authentication | $2,000 to $8,000 | Yes | Yes, two user types | Yes, two user types |
| Payment gateway (Stripe) | $3,000 to $12,000 | Yes | Yes, with split payouts | Yes, with split payouts |
| Maps and GPS tracking | $4,000 to $18,000 | Rarely | Search by area | Live tracking |
| Real time chat and messaging | $6,000 to $25,000 | Rarely | Usually | Usually |
| Admin dashboard or CMS | $5,000 to $20,000 | Yes | Yes, larger | Yes, largest |
| Video calling | $10,000 to $35,000 | Telehealth only | Rarely | Rarely |

Add up the components an on-demand app needs (login, payments, maps, chat and admin) and you get roughly $20,000 to $83,000. The published total for the app type is $130,000 to $250,000. The gap is everything that doesn't fit in a feature list: product design for two audiences, the backend that matches jobs to providers, notifications, ratings, cancellations and refund rules, testing across both apps, and app store release. That gap is why quotes built by adding up features tend to come in low.

Building one codebase for both iOS and Android, with a tool such as Flutter or React Native, keeps the mobile side of these costs down. Our [Flutter vs React Native comparison](/guides/flutter-vs-react-native) covers the trade offs.

## Which decisions move the quote the most?

**Five early decisions change the price of a two sided app more than any feature does.** Settle them before you ask for quotes, or ask each developer to price them as options.

1. **Who does the matching.** Letting customers choose a provider from a list is far simpler than the system assigning jobs automatically. Automatic dispatch needs rules for distance, skills, ratings, fairness between providers and what happens when nobody accepts.
2. **When money moves.** Charging at booking, holding funds until the job is done, and handling partial refunds, tips, cancellations and no shows each add logic and testing. Decide your cancellation policy before the build, because the software has to enforce it.
3. **How much you vet providers.** A simple approval queue is cheap. Identity checks, licence verification, insurance certificates and police checks usually mean integrating third party services, each with its own fees.
4. **Native apps or web first.** Two native apps (customer and provider) double the number of things to design, test and release through the App Store and Google Play. A provider web app is often enough for a first version.
5. **How live it needs to be.** Showing a provider's suburb is cheap. Showing them moving on a map every few seconds means background location on phones, battery considerations, frequent maps calls and handling poor reception.

A developer who quotes without asking about these is guessing. When you compare quotes, check that each one made the same assumptions, and ask what it would cost to change each one later.

## What costs sit outside the build?

**Two sided businesses spend heavily on things that aren't software, and a build budget that ignores them is incomplete.** The biggest is acquiring the first users on both sides. A marketplace with no providers loses customers, and one with no customers loses providers, so most founders end up subsidising one side early, through discounts, guaranteed minimum earnings or free listings.

Plan for these as well:

- **Legal setup.** Terms for customers, terms for providers, a privacy policy and, depending on your model, advice on whether providers are contractors and how consumer law applies to your platform.
- **Support and operations.** Someone has to answer disputes, refund requests and provider questions from the first week, which is why the admin panel matters.
- **App store accounts and review time.** Both stores review apps before release, and rejections cost time.
- **Insurance.** Some service marketplaces need cover for the platform as well as the providers.

None of these change what the software costs, but they decide how long your budget lasts after launch.

## What does it cost to run once it's live?

**Plan for transaction fees, maps and messaging usage, hosting and maintenance, all of which grow with the number of bookings.** Unlike a brochure site, a marketplace's costs rise with its success.

A worked example for an on-demand cleaning marketplace in its first year, using listed prices and stated assumptions. This is an illustration, not a quote.

**Assumptions:** $50,000 a month in bookings, an average booking of $120, all paid by Australian cards through Stripe.

- Number of bookings: $50,000 ÷ $120 ≈ 417 a month
- Percentage fee: $50,000 × 1.65% = $825
- Fixed fee: 417 × A$0.30 ≈ $125
- **Card fees: about $950 a month**, or about $11,400 a year (Stripe's listed fees include GST)

Other running costs to budget for:

| Cost | How it's charged | What to expect |
|---|---|---|
| Card payments | Stripe lists 1.65% + A$0.30 for domestic cards and 3.5% + A$0.30 for international cards | Rises with every booking |
| Marketplace payouts | Stripe Connect is included at no additional charge on standard pricing; a 0.25% starting fee applies if the platform sets its own pricing to earn revenue on transactions | Check which model fits |
| Maps and routing | Google Maps Platform gives a monthly allowance of free calls per product, then charges per use, or by subscription from US$100 a month (Starter) and US$275 a month (Essentials, 100,000 calls) | Live tracking uses far more calls than search by area |
| SMS and push notifications | Per message from your SMS provider; push is usually low cost | Confirmations and reminders add up |
| Maintenance | Commonly 15% to 20% of the build each year, more for mobile apps | See our [maintenance cost guide](/guides/software-maintenance-cost) |

At those volumes, a 15% commission would earn the platform $7,500 a month before costs. Card fees take about 13% of that ($950 ÷ $7,500). That's why marketplaces think carefully about who pays the card fee, minimum booking values and whether to pass on international card surcharges.

## Can you test an Uber style idea for much less?

**Yes, and you usually should: build only what proves both sides will turn up, and do the rest by hand.** Most of the cost of an on-demand app is automation that only pays off at volume. Early on, a person can do the matching.

A phased approach:

| Phase | What you build | What you do manually |
|---|---|---|
| 1. Prove demand | A web booking form, payment and a simple admin list | Match each job to a provider by phone or message |
| 2. Prove supply | A provider web app to accept jobs, see the address and mark them done | Vet providers, handle disputes, run payouts |
| 3. Automate the bottleneck | Whichever manual step is now limiting growth: matching, payouts or scheduling | Everything that still works by hand |
| 4. Go native | Customer and provider mobile apps, live tracking, ratings | Edge cases and exceptions |

Phases 1 and 2 often fit in the simple to booking app band. Our [MVP cost guide](/guides/mvp-development-cost-australia) covers that range. If the numbers in phase 2 show providers won't stick around or customers won't pay enough, you've learned it for a fraction of the full build.

Also launch in one city, or one suburb cluster. A marketplace is only useful when both sides are dense enough to find each other, and that's far cheaper to achieve in one area than nationally.

## When is an off the shelf platform the better choice?

**When you're one business taking bookings for your own services, an existing booking platform will almost always be cheaper than building.** Salons, clinics, gyms and tradies have mature, subscription priced tools for exactly this.

Build custom when:

- You're creating a marketplace or on-demand service as the business itself, not adding booking to an existing one.
- Your scheduling, pricing or matching rules are what makes you different, and the platforms can't express them.
- You need the booking flow inside your own app or brand in a way the platforms don't allow.
- You've outgrown a platform's fees at your volume, and the arithmetic shows a custom build pays back.

If none of those apply, choose a platform and spend the difference on marketing. Our [build vs buy guide](/guides/build-vs-buy-software) walks through the decision.

## How AWLabs approaches booking and marketplace apps

We start by asking which side of your marketplace is harder to attract, because that usually decides what version one needs. The first conversation is a Development Consult. If the project makes sense, a paid Discovery Audit maps the booking or matching rules, payment flow, admin needs and integrations, and the fee is credited in full against the build. You then get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete, which for a marketplace is often the difference between a phase 1 test and native apps.

Senior engineers lead every build, and you get progress updates every Tuesday and Friday, Sydney time. If an existing platform would serve you better, we'll say so. See our [web and mobile app development service](/services/web-mobile-apps), or start with [how to write a brief](/guides/how-to-write-a-software-brief) so the first conversation is productive.
