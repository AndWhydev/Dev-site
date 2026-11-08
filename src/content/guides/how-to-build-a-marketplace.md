---
title: "How to build a marketplace platform in Australia"
metaTitle: "How to Build a Marketplace Platform in Australia (2026)"
description: "How to build a marketplace in Australia: the cold start, split payments and holding funds, ATO sharing economy reporting, GST, consumer law and reviews."
eyebrow: "Australian guide"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "To build a marketplace platform in Australia, solve liquidity first (enough supply in one niche and one area that buyers find what they want), then build the parts Australian rules require from day one: a payment flow where a licensed provider such as Stripe Connect holds and splits the money, the seller data the ATO's Sharing Economy Reporting Regime needs twice a year, GST handled correctly for registered and unregistered sellers, seller terms that avoid unfair contract terms, and reviews you never edit or suppress. Off the shelf marketplace software can test the idea; custom code earns its place once you know the model works."
takeaways:
  - "Marketplaces fail on liquidity far more often than on features. Start narrow: one category, one city, hand recruited supply."
  - "Platforms where payments flow from customers to sellers through the platform must report seller details and transactions to the ATO by 31 January and 31 July each year under the SERR."
  - "Holding and passing on other people's money can raise financial services licensing questions. Most platforms use a provider such as Stripe Connect, and still get legal advice on the exact flow."
  - "The ACCC treats editing, suppressing or removing genuine negative reviews as potentially misleading. Service Seeking was ordered to pay $600,000 over reviews businesses drafted themselves."
  - "From 1 July 2027 the Unfair Trading Practices Act adds rules on manipulative design and on displaying per transaction fees next to the base price, which affects marketplace checkouts."
faqs:
  - q: "Do I need an AFSL to run a marketplace that takes payments?"
    a: "Not necessarily, but you need to check. A facility through which people make non cash payments can be a financial product under the Corporations Act, and ASIC's RG 185 explains its approach and the relief available. Most marketplaces avoid holding funds themselves by using a payment provider's platform product, such as Stripe Connect. Get legal advice on your exact money flow before launch."
  - q: "What does the Sharing Economy Reporting Regime require?"
    a: "If you operate an electronic distribution platform and payments flow from customers to sellers through it, you must report seller details (names or ABNs, contact details, bank details) and transaction details (amounts, GST, fees and commissions) to the ATO twice a year. Reporting started on 1 July 2023 for ride sourcing and short term accommodation and expanded to all other reportable transactions on 1 July 2024."
  - q: "Do marketplace sellers need an ABN or GST registration?"
    a: "Sellers running a business generally need an ABN, and must register for GST once their GST turnover reaches $75,000 a year. Ride sourcing and taxi drivers must register regardless of turnover. Your platform should collect ABNs and GST status so invoices, payouts and SERR reports are right."
  - q: "Who is responsible if a seller on my marketplace doesn't deliver?"
    a: "The seller is generally the supplier who owes the consumer guarantees. The platform is responsible for its own conduct, including what it says about sellers, how it presents reviews and how it handles refunds it controls. Clear terms, a dispute process and the ability to refund through your payment provider reduce the damage either way."
  - q: "Should I use Sharetribe or build a custom marketplace?"
    a: "Use marketplace software when you are still testing whether buyers and sellers will transact, and the standard flow (list, book or buy, pay, review) fits. Build custom when your matching, pricing, compliance or payment flow is the product, or when platform fees and limits start to cost more than ownership."
  - q: "How much does it cost to build a marketplace app in Australia?"
    a: "Published Australian ranges put a marketplace first version at about $90,000 to $180,000 (AUD, ex GST), with on demand apps higher. Our booking and marketplace cost guide breaks down the components and running costs."
sources:
  - title: "What is the SERR?"
    url: "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/third-party-reporting/sharing-economy-reporting-regime/what-is-the-serr"
    publisher: "Australian Taxation Office"
  - title: "What you need to include in your SERR report"
    url: "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/third-party-reporting/sharing-economy-reporting-regime/how-and-when-to-report-under-the-serr/what-you-need-to-include-in-your-serr-report"
    publisher: "Australian Taxation Office"
  - title: "Who needs to report under the SERR?"
    url: "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/third-party-reporting/sharing-economy-reporting-regime/who-needs-to-report-under-the-serr"
    publisher: "Australian Taxation Office"
  - title: "Registering for GST"
    url: "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst"
    publisher: "Australian Taxation Office"
  - title: "How to charge GST (non resident businesses and EDP operators)"
    url: "https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-for-non-resident-businesses/how-to-charge-gst"
    publisher: "Australian Taxation Office"
  - title: "RG 185 Non-cash payment facilities"
    url: "https://asic.gov.au/regulatory-resources/find-a-document/regulatory-guides/rg-185-non-cash-payment-facilities/"
    publisher: "ASIC"
  - title: "Payments overview"
    url: "https://www.sharetribe.com/docs/concepts/payments/payments-overview/"
    publisher: "Sharetribe Docs"
  - title: "Connect charge types"
    url: "https://docs.stripe.com/connect/charges"
    publisher: "Stripe Docs"
  - title: "Using manual payouts"
    url: "https://docs.stripe.com/connect/manual-payouts"
    publisher: "Stripe Docs"
  - title: "Online reviews for product and services"
    url: "https://www.accc.gov.au/business/advertising-and-promotions/online-reviews-for-product-and-services"
    publisher: "ACCC"
  - title: "Competition and Consumer Amendment (Unfair Trading Practices) Act 2026"
    url: "https://www.legislation.gov.au/C2026A00064/asmade/text"
    publisher: "Federal Register of Legislation"
related:
  - title: "How much does it cost to build an app like Uber or Airtasker?"
    href: "/guides/booking-marketplace-app-cost-australia"
  - title: "How much does an MVP cost in Australia?"
    href: "/guides/mvp-development-cost-australia"
  - title: "PayTo integration for Australian businesses"
    href: "/guides/payto-integration"
  - title: "How to build a subscription app in Australia"
    href: "/guides/subscription-app-development"
  - title: "Client stories"
    href: "/client-stories"
service:
  title: "Startup MVP development"
  href: "/startup-mvp"
disclaimer: legal
---

## Why should you start with liquidity, not features?

**A marketplace works when a buyer who arrives finds what they want, and a seller who lists gets enough work to stay. That is liquidity, and no feature list fixes its absence.** Every two sided platform starts with an empty room: buyers won't come without sellers, and sellers won't stay without buyers.

The marketplaces that get past this usually:

- **Pick one category and one area.** Dog groomers in the inner west of Sydney, not "pet services Australia".
- **Recruit supply by hand.** Phone calls, visits, onboarding sellers yourself, even entering their listings for them.
- **Seed demand from somewhere you already have it:** an existing business, a community, a mailing list, a partner.
- **Do things that don't scale.** Match the first hundred jobs manually if you have to, and only automate what you've done enough times to understand.
- **Measure the right thing.** The share of buyer searches that end in a transaction, and the share of sellers who earn in their first month, matter more than sign ups.

This shapes the build. The first version needs to support manual operations well (an admin console to match, refund, edit and contact) more than it needs clever algorithms.

## Off the shelf marketplace software or custom?

**Use marketplace software while you're testing whether people will transact; build custom when the marketplace's distinctive part can't be configured.** Tools such as Sharetribe give you listings, search, booking or checkout, payments through Stripe, messaging and reviews without code or with light customisation.

They are the better choice when your flow is the standard one and you want to find out cheaply whether anyone will use it. Custom earns its place when:

- your matching, quoting or pricing logic is the product;
- your payment flow is unusual (deposits, milestones, variable final amounts, multiple payees per job);
- you need industry checks such as licences, insurance or Working With Children Checks built into onboarding;
- you need data structured for SERR reporting, GST and accounting exports in a way the platform can't produce;
- platform fees, limits or lock in now cost more than owning the code.

Our [booking and marketplace cost guide](/guides/booking-marketplace-app-cost-australia) covers what each path costs.

## How should the money move?

**Let a payment provider built for platforms collect from the buyer, take your commission and pay the seller, rather than holding other people's money in your own account.** This is where new marketplaces most often get into trouble without realising it.

Stripe Connect, which is available in Australia, describes three charge types:

| Charge type | How the money flows | Suits |
|---|---|---|
| Direct charges | The buyer pays the seller's connected account directly; the platform takes an application fee | Sellers who are established businesses and own the customer relationship |
| Destination charges | The buyer pays the platform, and funds are transferred to one seller | Most single seller marketplaces |
| Separate charges and transfers | The platform charges the buyer, then transfers funds to one or more sellers later | Jobs split between several providers, or payouts released on completion |

Holding funds until a job is done is a common need. Stripe's manual payouts let a platform keep funds in a seller's balance until it releases them, but in Australia (as in most countries outside the US and Thailand) they must be paid out within 90 days at the time of writing.

The legal question sits underneath. Under the Corporations Act, a facility through which people make non cash payments can be a financial product, and ASIC's RG 185 sets out how it regulates those facilities and the relief it grants. Whether your flow raises a licensing question depends on who holds the money, for how long and on whose behalf. This is not a box to tick at the end.

Scott, who runs an online marketplace, found this out before launch. In his words: "They found an issue with how we were handling other people's money that could have resulted in our payment provider freezing their account. There was also a licensing and classification issue I didn't even know existed." His full story is on our [client stories page](/client-stories).

If buyers pay by bank transfer rather than card, our [PayTo integration guide](/guides/payto-integration) covers the account to account option.

## What does the Sharing Economy Reporting Regime require?

**If payments flow from customers to sellers through your platform, the ATO expects you to report who the sellers are and what they earned, twice a year.** The SERR applies to operators of electronic distribution platforms. Reporting started on 1 July 2023 for taxi and ride sourcing services and short term accommodation, and expanded to all other reportable transactions from 1 July 2024.

| Reporting period | Due |
|---|---|
| 1 July to 31 December | 31 January |
| 1 January to 30 June | 31 July |

What the ATO's guidance says you must report, which means what your platform must collect at onboarding:

- [ ] **Platform details:** your ABN and contact details, and any intermediary that reports for you.
- [ ] **Individual sellers:** first name, surname, date of birth, address, email, phone and bank account details.
- [ ] **Business sellers:** ABN, ARN or TIN, business or trading name, address, email, phone and bank account details.
- [ ] **Activity details:** start and end dates and an activity code (ride sourcing, short term accommodation, movable asset, food delivery, fixed location asset, service, other).
- [ ] **Transactions:** amounts paid, GST, fees and commissions.
- [ ] **Property details** for short term accommodation and fixed location assets.

Reports go to the ATO in an XML format it specifies, so this is a build item, not a spreadsheet. There are exemptions, including where another platform in the chain reports the same transaction, but you need to confirm and notify before relying on them.

## How does GST work when some sellers aren't registered?

**Your commission is your own sale, and each seller's sale is theirs; the platform needs to know which sellers are registered for GST to get invoices, payouts and SERR reports right.** A seller must register for GST once their GST turnover reaches $75,000 a year. Taxi and ride sourcing drivers must register regardless of turnover.

Practical consequences for the build:

- **Collect ABN and GST status at onboarding**, and let sellers update it.
- **Show prices correctly.** A registered seller's price includes GST; an unregistered seller's price has none.
- **Issue the right documents:** tax invoices for registered sellers' sales where needed, and a tax invoice to each seller for your commission.
- **Watch offshore sellers.** For imported digital products and low value imported goods sold through an electronic distribution platform, the ATO can make the platform operator responsible for the GST instead of the seller.

Get an accountant to sign off the model. The cost of getting it right at design time is small compared with reworking invoices and reports later.

## Who is responsible when a seller fails?

**The seller generally owes the consumer guarantees for what they supply, but the platform answers for its own conduct, and buyers will blame the platform whatever the law says.** That conduct includes how you describe sellers ("verified", "licensed", "insured"), how you present prices and reviews, and what your terms promise.

Three areas to design deliberately:

- **Seller terms.** Your seller agreement is almost certainly a standard form contract. Since 9 November 2023 unfair contract terms in standard form contracts are banned with penalties, and the protection covers small businesses with fewer than 100 employees or under $10 million turnover. One sided rights to change commission or delist without notice deserve a lawyer's eye.
- **Checkout design.** The Unfair Trading Practices Act 2026 commences on 1 July 2027. It prohibits conduct that manipulates consumers or unreasonably distorts their decision environment, including through design elements in digital interfaces. It also requires that where a base price is displayed, any per transaction charge (such as a booking or service fee) is shown with it, prominently and in close proximity.
- **Disputes and refunds.** A written process, time limits, evidence upload and the ability to refund through your payment provider.

## How do you build trust without breaking review rules?

**Collect reviews only from real transactions, publish them as written, and never let sellers draft or curate their own.** The ACCC says it is against the law to create or arrange fake or misleading reviews, and that suppressing, editing or removing genuine negative reviews may mislead consumers.

The ACCC's own example is a marketplace. Service Seeking, an online tasking platform, let businesses draft their own reviews and star ratings, which were published automatically if the customer didn't respond within 3 days. The Federal Court ordered it to pay $600,000 in penalties.

Trust features worth building:

- reviews tied to a completed, paid transaction;
- identity and ABN checks for sellers, and licence or insurance checks where the category needs them;
- a clear label on any paid placement or sponsored listing;
- a moderation policy that removes reviews only for published reasons (abuse, privacy, irrelevance), applied the same way to positive and negative reviews.

## How should you phase the build?

**Build in three stages, each gated by evidence from the one before.**

1. **Prove liquidity.** Marketplace software or a lean custom MVP, manual operations behind it, payments through a platform provider, SERR fields collected from day one.
2. **Build the distinctive part.** Custom matching, pricing or workflow, an admin console your operations team can live in, automated SERR and accounting exports.
3. **Scale trust and supply.** Mobile apps if usage justifies them, verification tooling, dispute handling, seller analytics.

Our [MVP cost guide](/guides/mvp-development-cost-australia) covers stage one budgets.

## How AWLabs approaches marketplace builds

We start with the money and the rules, because they're the expensive things to change later: how funds move through Stripe Connect or a similar provider, what the SERR report needs, how GST is handled per seller, and what the checkout must show from July 2027. Lawyers and accountants make the legal and tax calls; we build to them.

After a Development Consult (a 15 minute call or a Zoom with Andy), the paid Discovery Audit maps your payment flow and obligations, and its fee is credited in full against the build. The Schedule of Work then offers three fixed price options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. See our [startup MVP](/startup-mvp) and [web and mobile app](/services/web-mobile-apps) pages.
