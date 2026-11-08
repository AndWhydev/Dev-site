---
title: "Multi tenant SaaS architecture: the tenancy decisions to make early"
metaTitle: "Multi Tenant SaaS Architecture: Decisions to Make Early"
description: "Multi tenant SaaS architecture explained for Australian founders: pool, silo and bridge models, Postgres row level security, enterprise demands and testing."
eyebrow: "Explainer"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "Multi tenant SaaS architecture means one running product serves many customer organisations (tenants) while keeping each tenant's data separate. AWS groups the options into pool (shared resources), silo (dedicated resources per tenant) and bridge (a mix). Most Australian B2B products should start pooled, with a tenant ID on every row enforced by Postgres row level security, and design so a large or regulated customer can later be moved to its own database or region. The decisions that are expensive to change later are how tenant identity flows through the code, how data is isolated, and how you prove isolation works."
takeaways:
  - "A tenant is a customer organisation, not a user. Every request, query, file and background job must know which tenant it belongs to."
  - "Pool, silo and bridge are the three tenancy patterns AWS describes. Even a silo SaaS shares sign up, identity and operations; otherwise it is a managed service."
  - "Postgres row level security is a strong safety net, but table owners, superusers and roles with BYPASSRLS skip it, and in Supabase views and the service role key bypass it by default."
  - "Enterprise and government buyers may ask for their own database, their own region or certified hosting. Plan the escape hatch before the first such deal."
  - "Write automated tests that try to read another tenant's data. Isolation you haven't tested is isolation you're assuming."
faqs:
  - q: "What is multi tenant SaaS?"
    a: "It is a software product where many customer organisations use the same running application, and often the same database, with each organisation's data kept separate by the software. Single tenant means each customer gets their own copy of the application and data."
  - q: "Is multi tenant or single tenant better?"
    a: "Multi tenant is cheaper to run, easier to update and better for self service sales. Single tenant (or a silo per tenant) is easier to sell to buyers who demand isolation, and limits the blast radius of a mistake. Many products end up hybrid: pooled for most customers, siloed for a few large ones."
  - q: "Is row level security enough to keep tenants apart?"
    a: "It is a strong layer, but not the only one you should have. Postgres skips row security for superusers, roles with BYPASSRLS and usually table owners, so the application must connect with a restricted role. Pair it with tenant aware application code and automated cross tenant tests."
  - q: "What does the Privacy Act require for tenant data?"
    a: "APP 11 requires an entity holding personal information to take reasonable steps, including technical and organisational measures, to protect it from misuse, interference, loss and unauthorised access. For a SaaS product, tenant isolation, access controls and audit logs are among the most obvious of those steps."
  - q: "Can I move from single tenant to multi tenant later?"
    a: "Yes, but it touches almost everything: schema, queries, background jobs, file storage, caches and reporting. It is usually done in stages behind a feature flag, tenant by tenant, with data migrated and verified for each one before switching over."
  - q: "How do I bill each tenant fairly in a pooled system?"
    a: "Meter usage per tenant from the start: active users, records, storage, API calls or AI tokens, whichever drives your costs. Those numbers feed plan limits, billing and the conversation with any tenant whose usage is hurting everyone else."
sources:
  - title: "Silo, pool, and bridge models"
    url: "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/silo-pool-and-bridge-models.html"
    publisher: "AWS Well-Architected SaaS Lens"
  - title: "Row Security Policies"
    url: "https://www.postgresql.org/docs/current/ddl-rowsecurity.html"
    publisher: "PostgreSQL Documentation"
  - title: "Row Level Security"
    url: "https://supabase.com/docs/guides/database/postgres/row-level-security"
    publisher: "Supabase Docs"
  - title: "Chapter 11: APP 11 Security of personal information"
    url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information"
    publisher: "OAIC"
  - title: "Hosting Certification Framework"
    url: "https://www.hostingcertification.gov.au/framework"
    publisher: "Australian Government"
  - title: "Available regions"
    url: "https://supabase.com/docs/guides/platform/regions"
    publisher: "Supabase"
related:
  - title: "How much does it cost to build a SaaS product in Australia?"
    href: "/guides/saas-development-cost-australia"
  - title: "How to choose a tech stack"
    href: "/guides/how-to-choose-a-tech-stack"
  - title: "SOC 2 vs ISO 27001 in Australia"
    href: "/guides/soc-2-vs-iso-27001-australia"
  - title: "Expanding an Australian SaaS product to New Zealand"
    href: "/guides/expand-saas-to-new-zealand"
  - title: "Penetration testing cost in Australia"
    href: "/guides/penetration-testing-cost-australia"
service:
  title: "SaaS development"
  href: "/services/saas-development"
disclaimer: none
---

## What does multi tenant actually mean?

**Multi tenant means one running product serves many customer organisations, called tenants, while each tenant sees only its own data.** A tenant is the business that signs up and pays, not an individual user. A tenant has users, roles, settings, records, files and a bill.

The opposite is single tenant: each customer gets its own copy of the application and data, deployed and upgraded separately. That is closer to a managed service than SaaS, and it gets expensive to run past a handful of customers.

This guide is about the architecture decisions. For what tenancy adds to a SaaS budget, see our [SaaS development cost guide](/guides/saas-development-cost-australia).

## Pool, silo or bridge: which tenancy model fits?

**AWS's SaaS guidance groups tenancy into three patterns: pool (tenants share resources), silo (a tenant gets dedicated resources) and bridge (a mix of both).** AWS makes an important point: even a silo SaaS still shares identity, onboarding and operations across all tenants. If each customer has separate onboarding and management too, it has become a managed service.

| Model | What is shared | Good for | Watch out for |
|---|---|---|---|
| Pool | Application, database and infrastructure; rows carry a tenant ID | Self service products, many small and medium customers | One bug can expose many tenants; noisy neighbours |
| Silo | Identity, onboarding and operations; each tenant has its own database or stack | Regulated or very large customers who require isolation | Cost per tenant, upgrades across many databases, reporting across tenants |
| Bridge | Some layers pooled, some siloed (for example a shared app with a database per tenant) | Products with a mix of small and enterprise customers | Two code paths to keep correct |

Within the data layer, the three practical options are a shared database with a tenant column, a schema per tenant in one database, or a database per tenant. Schema per tenant sits awkwardly between the others: it gives some separation, but migrations have to run across hundreds of schemas and connection pooling gets harder. Most new products choose a shared database with a tenant column, plus the ability to give selected tenants their own database later.

## How does row level security work in Postgres?

**Row level security (RLS) lets the database itself filter rows by policy, so a query that forgets its tenant filter still can't return another tenant's rows.** You enable it per table and write policies such as "a row is visible when its tenant ID matches the tenant set for this session".

Two behaviours from the PostgreSQL documentation make it a good safety net:

- If RLS is enabled on a table and no policy exists, a default deny applies: no rows are visible or can be changed.
- Policies apply to every query from an affected role, including ones written in a hurry at 5pm on a Friday.

A typical pattern is for the application to set the current tenant at the start of each request or transaction, and for every policy to compare the row's tenant ID against that setting. Supabase builds the same idea around the signed in user's token.

## How does row level security fail?

**RLS fails quietly, which is why it needs to be understood rather than just switched on.** These are the gaps the documentation itself warns about:

| Failure | Why it happens | Prevention |
|---|---|---|
| The app connects as a superuser or a role with BYPASSRLS | PostgreSQL says these roles always bypass row security | Connect with a restricted application role; keep admin roles for migrations |
| The app connects as the table owner | Table owners normally bypass RLS | Use FORCE ROW LEVEL SECURITY, or make sure the app role doesn't own the tables |
| A table was added without RLS | Supabase notes a table in an exposed schema without RLS is readable and writable by any role with a grant on it | Enable RLS on every table in an exposed schema; check it in CI |
| Views return everything | Supabase notes views bypass RLS by default because they are usually created by the postgres user | Create views with security_invoker, or keep them out of exposed schemas |
| The service role key leaks to the browser | Supabase's service_role has full access and bypasses RLS | Keep it server side only |
| Background jobs run with no tenant context | Jobs often use a privileged connection | Pass tenant ID explicitly and use the same restricted role |
| Slow queries under load | Policies are evaluated per candidate row; Supabase recommends an index on every column policies filter on | Index tenant ID, usually as the first column of composite indexes |

RLS also doesn't cover anything outside the database: file storage, search indexes, caches, analytics exports, emails and AI vector stores. Each of those needs its own tenant boundary, such as a tenant prefix on file paths and a tenant filter on every vector search.

## What happens when enterprise or government customers want their own instance?

**Expect it, and design so a single tenant can be moved to its own database, and possibly its own region, without forking the code.** Large Australian buyers commonly ask where data is stored, who can access it and whether they can have dedicated infrastructure. Australian Government buyers may also refer to the Hosting Certification Framework, which guides agencies towards hosting that meets sovereignty and security requirements; note that new certification registrations were paused from 3 November 2025 while the framework is reformed.

The design that makes this possible:

1. **A tenant directory** that records, for each tenant, which database (and region) holds its data.
2. **Connection routing** that looks up the tenant and connects to the right place on each request.
3. **Identical schemas** in every database, with migrations that run against all of them.
4. **Tooling to move one tenant**: export, import, verify row counts and checksums, switch the directory entry.

Data residency questions also arise when you expand overseas. Our guide to [expanding an Australian SaaS product to New Zealand](/guides/expand-saas-to-new-zealand) covers what NZ customers and their privacy law expect when data is hosted in Australia.

## How should auth, roles and SSO work across tenants?

**Identity should be tenant aware from the first line of code: every session knows the user and the tenant they are acting in.** Several design choices follow:

- **Users can belong to more than one tenant.** Accountants, consultants and franchise managers often do. Model membership as a separate table with a role per tenant, not a single tenant ID on the user.
- **Roles are per tenant.** Someone can be an admin in one tenant and a viewer in another.
- **SSO is per tenant.** Enterprise tenants will want their own identity provider (often Microsoft Entra ID or Okta) and to enforce it for their email domain. Smaller tenants keep email and password or social login.
- **Support access is explicit.** When your staff need to see a tenant's data, it should be time limited, logged and ideally approved by the tenant.
- **Audit logs record the tenant.** Every sensitive action should log who, which tenant, what and when.

APP 11 requires reasonable steps, including technical and organisational measures, to protect personal information from unauthorised access. In a SaaS product, these identity and audit controls are among the most visible of those steps.

## How do you stop noisy neighbours and bill fairly?

**Meter each tenant's usage from the start, then use those numbers for limits, billing and capacity planning.** In a pooled system, one tenant running a giant import or a runaway integration can slow everyone else.

Practical controls:

- **Rate limits per tenant** on the API and on expensive operations such as exports and AI calls.
- **Queues with per tenant fairness**, so one tenant's backlog doesn't starve the others.
- **Quotas tied to plans**: users, records, storage, API calls or AI tokens.
- **Per tenant cost visibility**, so you know which plans are profitable and when a tenant has outgrown pooled hosting.

## How do you move from single tenant to multi tenant without downtime?

**Move in stages, one tenant at a time, with both paths running until each tenant is verified.** A common sequence:

1. Add a tenant ID column to every table and backfill it in the existing single tenant databases.
2. Make every query, job and file path tenant aware, and turn on RLS in the new shared database.
3. Build migration tooling that copies one tenant into the shared database and verifies counts and checksums.
4. Route that tenant to the shared database behind a feature flag; keep the old database read only as a fallback.
5. Repeat tenant by tenant, starting with internal or friendly customers.
6. Retire the old databases once every tenant has run cleanly for an agreed period.

The same tooling then works in reverse when a big customer later asks for their own database.

## How do you test that tenants can't see each other's data?

**Write tests whose whole job is to break isolation, and run them on every change.** A minimal suite:

- [ ] Create two tenants with similar data; sign in as tenant A and request every list, detail, search and export endpoint with tenant B's IDs. Every request must fail or return nothing.
- [ ] Repeat at the database layer using the application role, with no tenant set; expect no rows.
- [ ] Check every table in exposed schemas has RLS enabled, and fail the build if one doesn't.
- [ ] Try file downloads, signed URLs and search results across tenants.
- [ ] Run background jobs and confirm their output lands only in the right tenant.
- [ ] Include cross tenant access in your [penetration test](/guides/penetration-testing-cost-australia) scope.

Enterprise buyers will often ask how you test isolation in their security questionnaire. A clear answer here also helps with [SOC 2 or ISO 27001](/guides/soc-2-vs-iso-27001-australia) evidence if you go down that path.

## How AWLabs approaches tenancy

We usually start Australian B2B products pooled, in PostgreSQL with RLS and a restricted application role, hosted in an Australian region, with a tenant directory so selected tenants can be moved to their own database later. Cross tenant tests are part of the build, not an afterthought.

The tenancy model is settled in the paid Discovery Audit, whose fee is credited in full against the build, after a Development Consult (a 15 minute call or a Zoom with Andy). The Schedule of Work then gives three fixed price options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. See our [SaaS development service](/services/saas-development) and [database architecture](/services/database-architecture) pages.
