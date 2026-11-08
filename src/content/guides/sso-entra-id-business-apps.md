---
title: "How to add single sign on to a business app"
metaTitle: "How to Add Single Sign On (SSO) to a Business App"
description: "Adding SSO with Microsoft Entra ID, Google or Okta: SAML vs OIDC, multi tenant SaaS, SCIM provisioning, and the Essential Eight MFA rules buyers now check."
eyebrow: "Explainer"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "To add single sign on, you make your app trust an identity provider such as Microsoft Entra ID, Google Workspace or Okta, using OpenID Connect for modern web and mobile apps or SAML 2.0 where the customer requires it, and you map the identity provider's users and groups to your app's accounts and roles. For a SaaS product, each customer organisation is its own connection. Add SCIM provisioning so accounts are created and removed automatically, and offer phishing resistant MFA, which the Essential Eight expects at Maturity Level Two and above and ASD Essentials, published in October 2026, also calls for."
takeaways:
  - "SSO moves sign in and MFA to the customer's identity provider. Your app still owns accounts, roles and sessions."
  - "Use OpenID Connect by default; support SAML because many enterprise identity teams still prefer it."
  - "For staff apps, register the app in Entra ID. For customer sign in, Azure AD B2C has not been sold to new customers since 1 May 2025, so new builds use Entra External ID or another CIAM platform."
  - "In a multi tenant SaaS, every customer is a separate connection with its own role mapping. Plan the admin screens for it."
  - "SCIM deprovisioning is what removes leavers' access. Without it, SSO only stops new sign ins, not existing sessions or API keys."
faqs:
  - q: "What is the difference between SAML and OpenID Connect?"
    a: "Both let an identity provider tell your app who has signed in. SAML 2.0 is an older XML based standard common in enterprise and government identity teams. OpenID Connect is built on OAuth 2.0 with JSON tokens and is easier to implement in web, mobile and API based apps. Most SaaS products support both, with OIDC as the default."
  - q: "How do I add Microsoft sign in to my app?"
    a: "Register an application in Microsoft Entra ID, configure redirect URIs, and use a Microsoft Authentication Library or any standards compliant OpenID Connect library. For an internal app, restrict it to your own tenant. For SaaS used by many organisations, make it multitenant: sign in goes to the common endpoint and your code must validate tokens from multiple issuers."
  - q: "Do I need SCIM as well as SSO?"
    a: "For enterprise customers, usually yes. SSO controls sign in; SCIM is the standard API that lets the customer's identity provider create, update and deactivate users and groups in your app automatically. Microsoft Entra ID provisions to apps that expose a SCIM 2.0 endpoint."
  - q: "What does the Essential Eight say about MFA?"
    a: "At Maturity Level Two, MFA for users of online services and systems must be phishing resistant, and online customer services must provide a phishing resistant option. At Maturity Level Three, customer MFA must also be phishing resistant, and so must MFA for users of data repositories. These requirements are in ASD's November 2023 maturity model, which contracts still cite. ASD Essentials, published on 15 October 2026 to evolve the Essential Eight, also calls for phishing resistant MFA for users authenticating to systems."
  - q: "How much does it cost to add SSO to an existing app?"
    a: "Indicative build effort for a single identity provider in an internal app is about $5k to $12k (AUD ex GST). Multi tenant SSO with SAML and OIDC, role mapping and SCIM for a SaaS product is typically $20k to $55k. Identity platform subscriptions are extra; Auth0's free plan, for example, now includes one enterprise connection, self service SSO and SCIM, with paid B2B tiers beyond that."
  - q: "Should we build our own login or use an identity platform?"
    a: "Use a platform or a well maintained library. Password storage, MFA, account recovery and federation are security critical and easy to get subtly wrong. Your engineering effort is better spent on account linking, role mapping and session handling inside your own app."
sources:
  - title: "ASD Essentials"
    url: "https://www.cyber.gov.au/essentials"
    publisher: "Australian Signals Directorate"
  - title: "Essential Eight maturity model (November 2023)"
    url: "https://www.cyber.gov.au/publication/essential-eight-maturity-model"
    publisher: "Australian Signals Directorate"
  - title: "What is Azure Active Directory B2C?"
    url: "https://learn.microsoft.com/en-us/azure/active-directory-b2c/overview"
    publisher: "Microsoft Learn"
  - title: "External ID overview"
    url: "https://learn.microsoft.com/en-us/entra/external-id/external-identities-overview"
    publisher: "Microsoft Learn"
  - title: "Convert a single tenant app to multitenant"
    url: "https://learn.microsoft.com/en-us/entra/identity-platform/howto-convert-app-to-be-multi-tenant"
    publisher: "Microsoft Learn"
  - title: "Develop and plan provisioning for a SCIM endpoint in Microsoft Entra ID"
    url: "https://learn.microsoft.com/en-us/entra/identity/app-provisioning/use-scim-to-provision-users-and-groups"
    publisher: "Microsoft Learn"
  - title: "Auth0 pricing"
    url: "https://auth0.com/pricing"
    publisher: "Auth0 by Okta"
related:
  - title: "Essential Eight and ASD Essentials for software development"
    href: "/guides/essential-eight-software-development"
  - title: "SaaS development cost in Australia"
    href: "/guides/saas-development-cost-australia"
  - title: "IRAP explained"
    href: "/guides/irap-explained"
  - title: "SOC 2 vs ISO 27001 in Australia"
    href: "/guides/soc-2-vs-iso-27001-australia"
  - title: "How much does an intranet cost in Australia?"
    href: "/guides/intranet-cost"
  - title: "SharePoint intranet vs a custom intranet or staff portal"
    href: "/guides/sharepoint-intranet-vs-custom"
service:
  title: "Cybersecurity"
  href: "/services/cybersecurity"
---

## Why do enterprise customers ask for SSO before they sign?

**Because SSO lets their IT team control who can reach your app, enforce their own MFA, and cut access the day someone leaves, without touching your system.** For the buyer, an app without SSO is another set of passwords to manage and another account to forget when an employee departs. It often shows up as a hard requirement in procurement and security questionnaires.

There is also an Australian assurance angle. Government agencies and many enterprises have measured themselves against ASD's Essential Eight, which ASD evolved into ASD Essentials on 15 October 2026, and the MFA strategy in the maturity model explicitly covers online services, including third party services that hold the organisation's data. If your app is one of those services, the buyer needs to know how your sign in meets their target. Our [Essential Eight and ASD Essentials guide](/guides/essential-eight-software-development) covers the wider framework.

What SSO does not do is remove your responsibilities. Your app still creates accounts, assigns roles, manages sessions and protects its own API keys. SSO replaces the password check, not the access model.

## SAML or OpenID Connect: which should you use?

**Default to OpenID Connect (OIDC), and support SAML 2.0 as well if you sell to enterprises or government, because many identity teams still configure SAML first.**

| | OpenID Connect | SAML 2.0 |
|---|---|---|
| Built on | OAuth 2.0, JSON Web Tokens | XML assertions, signed |
| Best for | Web apps, single page apps, mobile, APIs | Browser based enterprise apps |
| Setup for the customer | Client ID, secret or certificate, redirect URI | Metadata exchange, certificates, attribute mapping |
| Common pain points | Token validation across issuers, refresh handling | Certificate rollover, clock skew, attribute naming |
| Mobile friendliness | Good | Poor |

Both Entra ID and Okta support both, and Microsoft's identity platform works across OpenID Connect, OAuth 2.0, SAML 2.0 and WS-Federation. Use a maintained library or identity platform for either protocol. Hand rolled XML signature validation is a classic source of serious vulnerabilities.

## Staff apps versus customer apps: which Microsoft product?

**For an internal app used by your own staff, register it in your Microsoft Entra ID tenant. For an app your customers sign in to, you need a customer identity (CIAM) platform, and on Microsoft that now means Entra External ID rather than Azure AD B2C.** Microsoft's documentation states that from 1 May 2025, Azure AD B2C is no longer available to purchase for new customers.

The options in practice:

- **Workforce app (your staff).** Entra ID app registration, single tenant. Group claims or app roles drive permissions. Conditional Access in the tenant enforces MFA and device rules.
- **Business partners and guests.** Entra External ID B2B collaboration, where guests use their own organisation's identity to reach your tenant's apps.
- **Consumer or customer app.** Entra External ID in an external tenant, which Microsoft positions as its CIAM solution, kept separate from your workforce tenant. Auth0, Okta Customer Identity, AWS Cognito or a similar platform are alternatives, especially if your stack is not Microsoft based.
- **SaaS sold to other businesses.** Your own user store or CIAM platform, plus a federation connection to each customer's identity provider. This is the multi tenant case below.

## How does multi tenant SSO work in a SaaS product?

**Each customer organisation gets its own SSO connection, with its own identity provider settings, allowed email domains and role mapping, and your app decides which connection to use at sign in.**

Two common designs:

1. **Multitenant app registration in Entra ID.** Microsoft supports converting an app to multitenant so users in any Entra tenant can sign in after consent. Requests go to the common endpoint, which discovers the user's tenant, and your code must accept and validate tokens from multiple issuers. You then map each tenant ID to a customer account in your app, and reject tenants you have not onboarded.
2. **Per customer connections through an identity platform.** Each customer gets a SAML or OIDC connection, configured by their admin through a self service screen. This handles Entra, Okta, Google Workspace and others the same way. Auth0's pricing page, for example, lists self service SSO and SCIM in its plans, with one enterprise connection on the free plan at the time of writing.

Either way, design these pieces up front:

- **Home realm discovery.** Ask for an email, look up the domain, and route to the right connection.
- **Domain verification.** Prove a customer owns a domain before their connection can claim those users.
- **Role mapping.** Map the customer's groups to your roles per connection, with a safe default (least privilege) for unmapped users.
- **Account linking.** Decide what happens to users who had passwords before SSO was turned on.
- **Enforcement.** Let customer admins make SSO mandatory, and stop password sign in for their domain when they do.

## Why does SCIM matter when staff leave?

**SSO stops a leaver signing in again; SCIM removes or deactivates their account in your app, which also stops sessions, tokens and scheduled jobs tied to it.** Without provisioning, a departed employee's account sits in your app with its data and permissions until someone remembers to delete it.

SCIM 2.0 is the standard for this. It defines core endpoints such as `/Users` and `/Groups` and a common schema, so the customer's identity provider can create, update and deactivate users through your API. Microsoft Entra ID's provisioning service works with apps that expose a SCIM 2.0 endpoint, and other major identity providers support it too.

What to build:

1. A SCIM endpoint per customer, authenticated with a token the customer's admin generates in your app.
2. Create, update, deactivate and group membership operations, mapped to your user and role model.
3. Immediate effect on deactivation: revoke sessions, refresh tokens and personal API keys.
4. An audit log of every provisioning change, visible to the customer's admin.

## What MFA does the Essential Eight expect?

**At Maturity Level Two, MFA for users of online services and systems must be phishing resistant, and online customer services must offer a phishing resistant option; at Maturity Level Three, customers' MFA must be phishing resistant too, along with MFA for users of data repositories.** At Maturity Level One, MFA is required for online services that hold the organisation's sensitive data, without the phishing resistant condition.

| Who is signing in | Maturity Level One | Maturity Level Two | Maturity Level Three |
|---|---|---|---|
| Staff using online services with sensitive data | MFA | Phishing resistant MFA | Phishing resistant MFA |
| Customers of online customer services | MFA for sensitive customer data | A phishing resistant option must be provided | Phishing resistant MFA |
| Staff using systems and data repositories | Not specified at this level | Phishing resistant for systems | Phishing resistant for systems and data repositories |

Phishing resistant generally means methods bound to the real site, such as passkeys, FIDO2 security keys or platform authenticators, rather than SMS codes or push approvals. With SSO, staff MFA is enforced by the customer's identity provider, which is usually what they want. For customer sign in on your own platform, offer passkeys so customers who need Maturity Level Two or Three can use them.

ASD Essentials widens this. Its identity, credential and access management principle keeps phishing resistant MFA and adds actions to disable or restrict legacy authentication protocols, store keys, secrets and tokens in approved secure repositories, and keep credentials unique per system or account. Contracts and PSPF Release 2026 still name Essential Eight maturity levels, so the table above remains the one to meet when a clause names a level.

## What mistakes cause SSO problems after launch?

**Most incidents come from sessions, mappings and recovery paths rather than the protocol itself.**

- **Session lifetimes.** An eight hour app session outlives a disabled account. Keep sessions short, revalidate on sensitive actions, and honour SCIM deactivation immediately.
- **Role mapping by display name.** Group names change; map by immutable group ID.
- **Trusting email alone.** Use the identity provider's stable subject and tenant identifiers, not the email claim, to identify a user.
- **No break glass account.** If a customer's identity provider is down or misconfigured, someone must still be able to get in. Keep a tightly controlled emergency account per customer, with strong MFA and alerting.
- **Certificate expiry.** SAML signing certificates expire. Track expiry dates per connection and warn admins well ahead.
- **Forgotten API access.** Service accounts and API keys bypass SSO. Give them owners, scopes and expiry.

## What does it take to add SSO to an existing app?

**Indicative ranges, AUD ex GST, at typical agency rates of about $1,100 to $1,500 a day. These are ranges, not quotes, and exclude identity platform subscriptions.**

| Scope | Typical effort | Indicative range |
|---|---|---|
| Internal app, one Entra ID tenant, OIDC, group based roles | 4 to 8 days | $5k to $12k |
| Customer facing app moving to a CIAM platform with passkeys | 10 to 20 days | $11k to $30k |
| Multi tenant SaaS: SAML and OIDC per customer, self service setup, role mapping, SCIM | 18 to 36 days | $20k to $55k |

The biggest variable is the existing user model. If your app already separates organisations, users and roles cleanly, SSO is mostly configuration and integration. If roles are hard coded or users are shared across organisations, budget for that rework first. Our [SaaS development cost guide](/guides/saas-development-cost-australia) covers how this fits a wider product budget.

## How AWLabs approaches SSO projects

We start with your user and role model, then pick the identity platform and protocols that fit your customers, rather than the other way round. Senior engineers lead every build, and we test sign in, provisioning and deprovisioning against real Entra ID and Okta tenants before launch. We do not certify your app against the Essential Eight or ASD Essentials; we build so you can show assessors how sign in works. See our [cybersecurity](/services/cybersecurity) and [SaaS development](/services/saas-development) pages to start a Development Consult.
