---
title: "pgvector vs Pinecone vs Weaviate vs Qdrant: which vector database should you use?"
metaTitle: "pgvector vs Pinecone vs Weaviate vs Qdrant (2026)"
description: "pgvector, Pinecone, Weaviate and Qdrant compared: hosting, Australian regions, pricing models and scale, plus a guide to which suits your RAG project."
eyebrow: "Comparison"
category: compare
published: 2026-09-28
updated: 2026-09-28
summary: "For most business RAG and search projects under tens of millions of vectors, pgvector inside a managed PostgreSQL database in an Australian region is the simplest and cheapest choice. Pinecone is the most hands-off managed service, but at the time of writing (September 2026) it has no Australian region outside its Enterprise bring-your-own-cloud option. Qdrant and Weaviate are open source engines you can self-host anywhere, including Sydney, and suit larger or more demanding workloads with filtering and hybrid search needs."
takeaways:
  - "pgvector adds vector search to PostgreSQL, so vectors sit next to your existing data, permissions and backups, and it runs on AWS, Azure and Google Cloud managed Postgres in Australian regions."
  - "Pinecone serverless runs in US, EU and Singapore regions at the time of writing; keeping data in Australia requires its Enterprise BYOC deployment in your own cloud account."
  - "Qdrant and Weaviate are open source and self-hostable in any Australian region; both also offer managed clouds and customer-environment options."
  - "Pricing models differ: Pinecone bills storage plus read and write units, Weaviate Cloud bills largely on vector dimensions stored, Qdrant Cloud bills on compute, memory and disk, and pgvector costs whatever your Postgres instance costs."
  - "Embeddings are derived from your documents, so treat them with the same privacy and residency rules as the source data."
faqs:
  - q: "Do I need a dedicated vector database for RAG?"
    a: "Usually not at first. If you already run PostgreSQL, pgvector handles millions of vectors with HNSW indexes and keeps your data model simple. Move to a dedicated engine when you hit measured limits: very large collections, high query rates, heavy filtered search or multi-tenant isolation needs that Postgres handles awkwardly."
  - q: "Which vector databases can keep data in Australia?"
    a: "At the time of writing, pgvector on AWS RDS or Aurora, Azure Database for PostgreSQL and Google Cloud SQL or AlloyDB can all run in Australian regions. Qdrant and Weaviate can be self-hosted in an Australian region, and Qdrant Hybrid Cloud and Pinecone BYOC run in your own cloud account. Check each managed service's region list before relying on it, because availability changes."
  - q: "How many vectors can pgvector handle?"
    a: "There isn't one number: it depends on dimensions, index type, memory and query patterns. Millions of vectors on a well-sized instance is routine. pgvector indexes the standard vector type up to 2,000 dimensions and half-precision vectors up to 4,000, which covers common embedding models."
  - q: "Is Pinecone more expensive than self-hosting?"
    a: "At small scale Pinecone can be cheaper once you count engineering time, because there's nothing to operate. At sustained high volume, usage-based read and write units can exceed the cost of a self-managed cluster. Model both against your expected storage and query volume using the vendors' current pricing pages."
  - q: "Can I switch vector databases later?"
    a: "Yes, if you keep your source documents and chunking pipeline. Vectors can be re-embedded or exported and reloaded. Keep the database behind a thin retrieval interface in your code so a switch is a contained change."
sources:
  - title: "Working with PostgreSQL extensions (pgvector versions)"
    url: "https://docs.aws.amazon.com/AmazonRDS/latest/PostgreSQLReleaseNotes/postgresql-extensions.html"
    publisher: "Amazon Web Services"
  - title: "How to enable and use pgvector on Azure Database for PostgreSQL"
    url: "https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector"
    publisher: "Microsoft Learn"
  - title: "Create an index (serverless cloud regions)"
    url: "https://docs.pinecone.io/guides/index-data/create-an-index"
    publisher: "Pinecone"
  - title: "Pinecone pricing"
    url: "https://www.pinecone.io/pricing/"
    publisher: "Pinecone"
  - title: "Bring your own cloud"
    url: "https://docs.pinecone.io/guides/production/bring-your-own-cloud"
    publisher: "Pinecone"
  - title: "Weaviate pricing"
    url: "https://weaviate.io/pricing"
    publisher: "Weaviate"
  - title: "Qdrant pricing"
    url: "https://qdrant.tech/pricing/"
    publisher: "Qdrant"
  - title: "Qdrant Hybrid Cloud"
    url: "https://qdrant.tech/documentation/hybrid-cloud/"
    publisher: "Qdrant"
related:
  - title: "What is a vector database?"
    href: "/guides/what-is-a-vector-database"
  - title: "What are embeddings in AI?"
    href: "/guides/what-are-embeddings"
  - title: "How much does a RAG knowledge base cost?"
    href: "/guides/rag-knowledge-base-cost"
  - title: "Database architecture"
    href: "/services/database-architecture"
service:
  title: "RAG knowledge base development"
  href: "/services/rag-knowledge-base"
---

## Which vector database should you choose?

**Start with pgvector if you already use PostgreSQL and your collection is in the millions of vectors, not billions; choose a dedicated engine when you have measured a need for one.** The vector database is rarely what makes a RAG system good or bad. Chunking, retrieval strategy, access control and evaluation matter more. But the choice does fix your hosting, residency and running cost for years.

If you're new to the concept, our explainer on [what a vector database is](/guides/what-is-a-vector-database) covers the basics, and [what embeddings are](/guides/what-are-embeddings) explains what gets stored.

## How do they compare side by side?

**pgvector is a PostgreSQL extension; Pinecone is a managed-only service; Qdrant and Weaviate are open source engines with managed clouds.** The table reflects each vendor's documentation and pricing pages as at 28 September 2026. We link live pricing in the sources rather than quoting figures that change.

| | pgvector | Pinecone | Weaviate | Qdrant |
|---|---|---|---|---|
| What it is | Extension adding vector types and indexes to PostgreSQL | Proprietary managed vector database | Open source vector database with managed cloud | Open source vector search engine with managed cloud |
| Self-host | Yes, anywhere Postgres runs | No (BYOC on Enterprise runs in your cloud account) | Yes | Yes |
| Managed options | AWS RDS and Aurora, Azure Database for PostgreSQL, Google Cloud SQL and AlloyDB, and others | Serverless (Starter, Builder, Standard, Enterprise), BYOC | Serverless and Dedicated Cloud | Managed Cloud (Standard, Premium), Hybrid Cloud, Private Cloud |
| Australian region at the time of writing | Yes, through managed Postgres in Sydney and Melbourne regions | Not in serverless (US, EU, Singapore); yes through BYOC in your own account | Self-host or dedicated deployments; confirm managed region availability with the vendor | Self-host or Hybrid Cloud; confirm managed region availability in the console |
| Pricing model | The cost of your Postgres instance and storage | Storage plus read and write units, with plan minimums | Based on vector dimensions stored, plus storage | Compute, memory, disk and backups |
| Index types | HNSW, IVFFlat | Managed (not exposed) | HNSW, flat, dynamic | HNSW |
| Hybrid (keyword plus vector) search | With Postgres full-text search, assembled in SQL | Sparse-dense vectors | Built in | Built in (sparse vectors) |
| Filtering on metadata | Standard SQL, very flexible | Metadata filters | Built in | Strong filtered search, a core design goal |
| Best fit | Most business RAG, search inside existing apps | Teams wanting zero operations, residency not a constraint | Hybrid search, built-in vectorisation modules | Large collections, heavy filtering, cost-efficient self-hosting |

## Why is pgvector the default for most projects?

**Because it keeps vectors in the same database as the rest of your data, so joins, permissions, backups and transactions all just work.** A document's embedding sits beside its title, owner, access rules and last-modified date, and one SQL query can filter by user permission and rank by similarity.

It also solves Australian residency cheaply. At the time of writing, AWS RDS for PostgreSQL supports pgvector (version 0.8.2 on current PostgreSQL 17 and 18 releases), as do Azure Database for PostgreSQL and Google Cloud SQL, all of which run in Sydney and Melbourne regions. You don't add a new vendor, sub-processor or security review.

The limits are real but further out than people expect. pgvector indexes standard vectors up to 2,000 dimensions and half-precision vectors up to 4,000. HNSW indexes need memory, so very large collections need a large instance. Query rates in the thousands per second, or collections in the hundreds of millions, are where dedicated engines start to justify themselves. Upgrades also need care: AWS notes the extension doesn't automatically upgrade with the database engine.

## When is Pinecone the better choice?

**Pinecone suits teams that want no infrastructure to manage and don't have a requirement to keep data in Australia.** You create an index and send vectors; scaling, replication and index tuning are Pinecone's problem.

At the time of writing, Pinecone serverless indexes can be created in AWS `us-east-1`, `us-west-2`, `eu-west-1`, `eu-central-1` and `ap-southeast-1` (Singapore), GCP `us-central1` and `europe-west4`, and Azure `eastus2`. The free Starter plan is limited to `us-east-1`, and an index's cloud and region can't be changed after creation. For Australian residency, Pinecone's answer is BYOC: an Enterprise-only deployment in your own AWS, GCP or Azure account, where vectors, metadata and queries stay in your environment and only operational metrics go back to Pinecone.

Pricing is usage-based: storage per GB plus read units and write units, with monthly minimums on paid plans. That's efficient for spiky, modest workloads and can become expensive for sustained, high query volumes. For overseas hosting of personal information, remember APP 8 of the Privacy Act: you remain accountable for how an overseas recipient handles it.

## When are Qdrant or Weaviate the better choice?

**Choose one of the open source engines when you need more scale or search features than pgvector gives you comfortably, and want control over where it runs.** Both can be self-hosted in an Australian region on your own infrastructure, which keeps residency simple.

**Qdrant** is built around fast filtered vector search, which matters when every query must be restricted by tenant, permission or document type. Its managed cloud bills on compute, memory, disk and backups across AWS, GCP and Azure. Qdrant Hybrid Cloud, on the Enterprise plan, runs the database inside your own Kubernetes cluster while Qdrant manages it; its documentation states that only telemetry and status information leave your environment, not user data.

**Weaviate** has strong built-in hybrid search (keyword and vector combined) and modules that generate embeddings for you. Weaviate Cloud offers serverless and dedicated deployments, billed largely on the number of vector dimensions stored plus storage. Its pricing page lists a limited set of regions on lower tiers and a broad set across AWS, GCP and Azure on Premium, so confirm Australian availability directly if you want managed hosting onshore.

The trade-off with both is operations. Self-hosting means you run upgrades, backups, monitoring and capacity planning, which is a genuine ongoing cost.

## What will it cost to run?

**For a typical internal knowledge base, the vector store is a small line item next to model usage and engineering time.** A worked illustration: 20,000 documents chunked into 400,000 passages, embedded at 1,536 dimensions.

| Item | Arithmetic | Result |
|---|---|---|
| Raw vector size | 400,000 × 1,536 dimensions × 4 bytes | About 2.5 GB |
| With HNSW index and metadata overhead (assume roughly 2x) | 2.5 GB × 2 | About 5 GB |
| Half-precision vectors instead (`halfvec`) | Half the raw size | About 1.2 GB raw |

At that size, pgvector fits comfortably on a modest managed Postgres instance, Pinecone's storage cost is small but read units depend on query volume, and a small Qdrant or Weaviate cluster would do. Plug your own document count, chunk size and query rate into the vendors' pricing pages. Our [RAG knowledge base cost guide](/guides/rag-knowledge-base-cost) puts these costs in the context of the whole system.

## A decision guide

1. **You run PostgreSQL, have under tens of millions of vectors, and need data in Australia:** pgvector on managed Postgres in Sydney or Melbourne.
2. **You want zero operations and overseas hosting is acceptable:** Pinecone serverless.
3. **You need Pinecone's service with Australian residency and have an Enterprise budget:** Pinecone BYOC in your own account.
4. **Heavy filtered search, multi-tenant isolation or very large collections, and you can run infrastructure:** self-hosted Qdrant, or Qdrant Hybrid Cloud.
5. **Hybrid keyword and vector search is central and you want built-in vectorisation:** Weaviate, self-hosted or managed.

## What should you check before committing?

**Test with your own data and queries, and check residency for every component, not just the database.**

- Region availability for the managed service, and whether backups and logs stay in the same region.
- Where embeddings are generated: an embedding API in another country processes your documents there. See [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty).
- Access control: can the store enforce per-user or per-tenant filtering, and is it applied in every query?
- Recall and latency on a sample of real queries at your expected scale.
- Export and migration paths, so you can move later.
- Deletion: when a source document is removed or a person asks for their information to be deleted, can you find and remove every chunk and vector derived from it?
- Who operates it: if you self-host, name the person or team responsible for upgrades, backups and on-call, before launch rather than after the first outage.

## How All Webbed Labs approaches vector storage

We default to PostgreSQL with pgvector in an Australian region, because it keeps permissions, audit and backups in one place, and we move to Qdrant, Weaviate or Pinecone when a project's scale or search needs have been measured and justify it. Retrieval sits behind a small interface in your codebase so the store can change later. See our [RAG knowledge base service](/services/rag-knowledge-base) or [database architecture](/services/database-architecture) work.
