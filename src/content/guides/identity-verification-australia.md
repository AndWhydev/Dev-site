---
title: "How to verify identity in an Australian app"
metaTitle: "How to Verify Identity in an Australian App (DVS, Digital ID)"
description: "Choosing between the Document Verification Service, accredited Digital ID such as ConnectID, and KYC vendors, with real fees, AML/CTF duties and retention."
eyebrow: "Australian identity"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "Most Australian apps verify identity in one of three ways: checking document details against the issuer's records through the government's Document Verification Service (DVS), usually via a gateway provider; letting the person prove who they are with an accredited Digital ID such as ConnectID, which uses details their bank already holds; or using a commercial KYC vendor that bundles DVS checks, data sources and face liveness. Pick by the assurance you actually need, collect express consent, record the result, and avoid keeping copies of identity documents you do not need."
takeaways:
  - "Decide the assurance level first. Age checks, account recovery, and AML/CTF customer due diligence need very different evidence."
  - "Private businesses reach the DVS through a gateway service provider. Each check costs $0.40 ex GST in government fees, and a direct connection costs over $24,000."
  - "The Digital ID Act 2024 commenced on 30 November 2024. Private sector entities can apply to join the Australian Government Digital ID System from December 2026."
  - "Relying parties do not need accreditation to use an accredited Digital ID provider, but the Privacy Act still applies to what you collect."
  - "Face biometrics used for verification are sensitive information under the Privacy Act, so you need consent and a retention and destruction plan."
  - "From 1 July 2026 real estate professionals, lawyers, conveyancers, accountants and others became AUSTRAC regulated, which brought identity checks into many more apps."
faqs:
  - q: "What is the cheapest way to verify identity online in Australia?"
    a: "A DVS document check through a gateway provider is usually the lowest cost route for a full identity check, because the government fee is $0.40 ex GST per request; the gateway adds its own margin. For lighter needs such as confirming someone is over 18, a Digital ID exchange like ConnectID can share only the attribute you need, which reduces what you collect and store."
  - q: "Do I need to be accredited to accept Digital ID in my app?"
    a: "No. Under the Digital ID system, relying parties do not need accreditation to use an accredited Digital ID provider. Accreditation applies to the identity service providers, attribute service providers and identity exchanges themselves. You still have your normal Privacy Act obligations."
  - q: "Can a private business use myID?"
    a: "myID is used through the Australian Government Digital ID System. From 30 November 2024 government entities could apply to participate, and the Digital ID System site says private sector entities will be able to apply to the Digital ID Regulator from December 2026. Check the current application process before you plan a launch around it."
  - q: "Should we keep a copy of the driver licence after verifying it?"
    a: "Usually not. Record what you checked, when, the method, the result and a reference number, then delete the image unless a law or your AML/CTF program requires you to keep it. Under the Privacy Act you must destroy or deidentify personal information you no longer need for a permitted purpose."
  - q: "How long does it take to get DVS access?"
    a: "As a business user through a gateway provider, the DVS site says you should receive a formal decision within 2 to 3 weeks of applying. Building your own direct gateway connection is a different scale: 4 to 6 weeks for the application decision and 3 to 6 months on average to build."
  - q: "Can AWLabs verify identities for us?"
    a: "No. AWLabs is a software developer, not an accredited Digital ID provider or a DVS gateway. We integrate your app with the provider you choose and build the consent, result recording and retention logic around it."
sources:
  - title: "Digital ID Act 2024"
    url: "https://www.digitalidsystem.gov.au/what-is-digital-id/digital-id-act-2024"
    publisher: "Australia's Digital ID System (Department of Finance)"
  - title: "The Australian Government Digital ID System (AGDIS)"
    url: "https://www.digitalidsystem.gov.au/the-australian-government-digital-id-system-agdis"
    publisher: "Australia's Digital ID System"
  - title: "Using Digital ID for your business or organisation"
    url: "https://www.digitalidsystem.gov.au/using-digital-id-for-your-business-or-organisation"
    publisher: "Australia's Digital ID System"
  - title: "Identity verification services: business users"
    url: "https://www.idmatch.gov.au/organisations/business-user"
    publisher: "IDMatch (Attorney-General's Department)"
  - title: "Gateway service providers"
    url: "https://www.idmatch.gov.au/organisations/gateway-service-provider"
    publisher: "IDMatch"
  - title: "Identity verification services fees"
    url: "https://www.idmatch.gov.au/organisations/identity-verification-services-fees"
    publisher: "IDMatch"
  - title: "ConnectID"
    url: "https://www.auspayplus.com.au/solutions/connectid"
    publisher: "Australian Payments Plus"
  - title: "About the AML/CTF reforms"
    url: "https://www.austrac.gov.au/industry-and-business/about-amlctf-reforms/about-reforms"
    publisher: "AUSTRAC"
  - title: "Initial customer due diligence"
    url: "https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/customer-due-diligence/initial-customer-due-diligence"
    publisher: "AUSTRAC"
  - title: "Facial recognition technology: a guide to assessing the privacy risks"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/facial-recognition-technology-a-guide-to-assessing-the-privacy-risks"
    publisher: "OAIC"
related:
  - title: "Privacy Act and AI"
    href: "/guides/privacy-act-and-ai"
  - title: "Notifiable data breaches for software teams"
    href: "/guides/notifiable-data-breaches-software"
  - title: "Sending business SMS in Australia: the rules"
    href: "/guides/business-sms-rules-australia"
  - title: "Lending software"
    href: "/solutions/lending-software"
  - title: "How to automate client onboarding in Australia"
    href: "/guides/how-to-automate-customer-onboarding"
  - title: "Conveyancing software: PEXA, identity and fraud controls"
    href: "/solutions/conveyancing-software"
service:
  title: "Cybersecurity"
  href: "/services/cybersecurity"
disclaimer: legal
---

## How much identity assurance does your app actually need?

**Start from the decision the check supports, not the technology: confirming someone is an adult, stopping fake accounts, recovering an account and meeting an AML/CTF obligation are four different problems with four different answers.** Over collecting is now a liability in its own right. Every licence image you store is something you must protect, report if breached, and eventually destroy.

| What you need to know | Typical method | What you end up holding |
|---|---|---|
| The person is over 18 | Digital ID attribute sharing (for example ConnectID sharing only an age confirmation) | A yes or no and a reference |
| The person is real and unique, low risk | Phone or email verification, plus device signals | Contact details |
| Identity document is genuine and matches the person | DVS document check, optionally with face liveness | Name, date of birth, document number, result |
| The person is who they claim, with strong assurance | Accredited reusable Digital ID, or DVS plus biometric face match | Verified attributes and a verification record |
| AML/CTF customer due diligence | Your AML/CTF program's procedures, often a KYC vendor | What your program requires you to keep |

If you only need the first two rows, you probably do not need a document check at all.

## How does the Document Verification Service work?

**The DVS lets an organisation, with the person's express consent, check the details from an identity document (such as a passport, driver licence or Medicare card) against the issuer's own record, and get a yes or no back.** It does not return the record or a photo. It is run by the Attorney-General's Department under the Identity Verification Services Act 2023 and an intergovernmental agreement.

Private businesses have two ways in:

- **Business user through a gateway service provider (GSP).** This is the normal route. You nominate an approved GSP, complete the DVS registration form and sign a business user participation agreement. The DVS site says to expect a formal decision in 2 to 3 weeks. All business user connections must go through a GSP, and you may only use results for your own business purposes unless there is a lawful basis, such as express consent, to share them.
- **A direct connection as a gateway.** Built for organisations that will provide DVS access to others. The decision takes 4 to 6 weeks on average and the build 3 to 6 months.

Government fees, as published under the Identity Verification Services Rules 2024 (ex GST):

| Fee | Amount |
|---|---|
| Base connection fee, non government entity | about $24,600 (the IDMatch pages show $24,610.40 and $24,641.40) |
| Each document type on a connection | $454.55 |
| Each verification request by a non government entity | $0.40 |

Most product teams never pay the connection fee; the GSP does, and you pay the GSP per check. In your app, a DVS check is a form that captures the document fields exactly as printed, a consent statement, an API call to the GSP and a stored result. The hard part is data entry quality: names with several parts, fields typed differently from the document, and expired documents can all cause "no match" results, so design a clear retry and manual review path.

## Where does Digital ID fit now?

**Digital ID lets a person prove who they are, or share a single attribute like their age, through an accredited provider instead of sending you a document.** The Digital ID Act 2024 commenced on 30 November 2024, together with its rules and standards. It strengthened the voluntary Accreditation Scheme and gave legislative authority for the Australian Government Digital ID System (AGDIS) to expand. The ACCC is the Digital ID Regulator.

The Act recognises three kinds of accredited service: identity service providers (which verify a person and create a Digital ID, either reusable or for a single transaction), attribute service providers, and identity exchanges that broker information between providers and relying parties. Accredited entities must follow privacy safeguards beyond the Privacy Act, including restrictions on biometrics and a ban on disclosing information for marketing.

Two practical routes for a business app:

1. **A private accredited exchange.** ConnectID, run by Australian Payments Plus, is accredited as an identity exchange. A customer picks their bank, authenticates in the bank's app and consents to share specific details with you. At the time of writing it works for customers of CommBank, NAB, ANZ Plus and Westpac. ConnectID itself does not see or store the data.
2. **The government system (AGDIS), which includes myID.** Government entities have been able to apply since 30 November 2024. The Digital ID System site states private sector entities will be able to apply to the Digital ID Regulator from December 2026, after registering interest and completing testing with the System Administrator.

You do not need accreditation to be a relying party. Your existing privacy obligations still apply to everything you receive. Before integrating, check the provider on the accredited entities register maintained by the ACCC.

## What do commercial KYC vendors add?

**Vendors bundle the pieces you would otherwise integrate one by one: DVS checks through their own gateway, credit bureau and other data source matches, document image capture with fraud detection, face liveness and match, watchlist screening for AML/CTF, and a case management screen for manual review.** That bundling is worth paying for when you need several of those, or when you operate in more than one country.

What to compare when choosing one:

- Which Australian documents and data sources are covered, and whether DVS is included.
- Where images and biometric templates are processed and stored, and for how long by default.
- Whether you can turn off image retention and keep only the result.
- Liveness approach and published accuracy testing, including across age and skin tone.
- Webhook events for pending, manual review and final outcomes.
- Per check pricing at your volume, minimums and charges for retries.

Vendors generally quote per check on application, so get pricing in writing for your expected volume and retry rate.

## Biometrics, consent and keeping as little as possible

**If you use face matching, you are collecting sensitive information under the Privacy Act, so you need consent, a clear purpose, accuracy and bias controls, and a plan to destroy it.** The OAIC's guidance on facial recognition states that biometric templates and biometric information, including facial images used for automated verification or identification, are sensitive information. It expects a lawful basis for collection, steps to address bias, a retention and destruction protocol, and a privacy policy that names the technology specifically.

The design pattern that keeps risk low:

1. Show a plain consent screen that says what will be checked, by whom and why.
2. Send the document details or images straight to the provider, not through your own storage.
3. Store the outcome: method, provider reference, date and time, result and which attributes were confirmed.
4. Delete images and templates as soon as the result is final, unless a legal obligation requires retention.
5. Log who viewed any manual review case.

This is the approach that makes a breach survivable. Our [notifiable data breaches guide](/guides/notifiable-data-breaches-software) and [Privacy Act and AI guide](/guides/privacy-act-and-ai) cover the obligations on the data you do keep.

## Are you now an AML/CTF reporting entity?

**Possibly, if you provide designated services: from 1 July 2026 AUSTRAC regulates real estate professionals, lawyers, conveyancers, accountants, trust and company service providers, dealers in precious stones and metals, and more virtual asset services.** Changes for existing reporting entities started on 31 March 2026, unless deferred under transitional rules.

For software, this means identity checks are no longer only a fintech feature. A conveyancing or property platform may now need initial customer due diligence built into onboarding. AUSTRAC's guidance on initial customer due diligence sets out what to collect and verify by customer type, and includes procedures for people who do not have standard ID, including alternative ID for First Nations peoples. Your AML/CTF program decides what you collect and keep; the software should make that program easy to follow and to evidence. Our [finance and fintech](/industries/finance-fintech) page covers related builds.

## What does it cost to add identity verification?

**Running costs are per check; build costs depend on how many routes and edge cases you support.** Indicative build ranges, AUD ex GST, at typical agency rates of about $1,100 to $1,500 a day. These are ranges, not quotes.

| Scope | Typical effort | Indicative range |
|---|---|---|
| One provider's hosted flow, result stored, basic webhooks | 3 to 6 days | $4k to $9k |
| Native flow with DVS via a gateway, retries, manual review queue | 8 to 15 days | $9k to $23k |
| Several methods (Digital ID plus document plus liveness) with AML/CTF evidence records | 15 to 30 days | $17k to $45k |

Per check, the floor is the $0.40 government DVS fee plus your gateway or vendor's margin, with liveness and watchlist screening on top.

## How AWLabs approaches identity projects

We are a development company, not an accredited Digital ID provider, a DVS gateway or an AML/CTF adviser. We help you pick the lightest method that meets your obligation, integrate the provider, and build consent, result records and deletion so the system holds as little as possible. Senior engineers lead every build, with security reviewed as part of our [cybersecurity](/services/cybersecurity) practice. After a Development Consult and a paid Discovery Audit, you receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete.
