---
title: "What is a vector database?"
metaTitle: "What Is a Vector Database? Explained for Business"
description: "A vector database stores embeddings and finds items by similarity of meaning, not exact words. How it works, when you need one, and when Postgres is enough."
eyebrow: "Explainer"
category: explainer
published: 2026-09-28
updated: 2026-09-28
summary: "A vector database is a database built to store embeddings, lists of numbers that represent the meaning of text, images or other data, and to quickly find the stored items whose embeddings are closest to a query's. It lets software search by similarity of meaning rather than exact keywords, which is why it sits underneath most RAG systems and semantic search features."
takeaways:
  - "A vector database answers one question very fast: which stored items are most similar to this one?"
  - "It uses approximate nearest neighbour indexes such as HNSW, trading a small amount of accuracy for large gains in speed."
  - "The difference between a vector database and a vector index library is everything around the search: updates, metadata filters, backups, access control."
  - "For many business systems, the pgvector extension in an existing PostgreSQL database is enough; a dedicated product earns its place at larger scale or with specialised needs."
  - "Vectors are derived from your documents, so they carry the same privacy and residency obligations as the source data."
faqs:
  - q: "Is a vector database a replacement for my normal database?"
    a: "No. It complements it. Your transactional data, customers and orders stay in a relational database. The vector store holds embeddings plus enough metadata to filter and link back to the source. With pgvector, both can live in the same PostgreSQL instance."
  - q: "Which vector database should we choose?"
    a: "Start from what you already run and your scale. If you use PostgreSQL and have up to a few million vectors, pgvector is usually the simplest choice. Managed services such as Pinecone, or engines such as Qdrant and Weaviate, suit larger scale, heavy filtering or teams that want vector search as a separate service. Our comparison guide covers the trade-offs."
  - q: "Can a vector database be hosted in Australia?"
    a: "Yes. pgvector runs on Amazon RDS and Aurora PostgreSQL, Azure Database for PostgreSQL and Google Cloud SQL in their Australian regions, and open-source engines can be self-hosted in any region. For managed vector services, check the vendor's current region list, as it changes."
  - q: "Can someone reconstruct my documents from the vectors?"
    a: "Treat it as possible. Research has shown that text can be partly recovered from some embeddings, and vector stores usually keep the original chunk text next to each vector anyway. Apply the same encryption, access control and residency rules you apply to the source documents."
  - q: "How big does a vector database get?"
    a: "A rough rule: vectors take dimensions × 4 bytes each when stored as 32-bit floats, plus index overhead and the stored text. One million chunks at 1,536 dimensions is about 6 GB of raw vectors before indexing."
sources:
  - title: "Efficient and robust approximate nearest neighbor search using Hierarchical Navigable Small World graphs (Malkov and Yashunin)"
    url: "https://arxiv.org/abs/1603.09320"
    publisher: "arXiv"
  - title: "Billion-scale similarity search with GPUs (Johnson, Douze and Jégou)"
    url: "https://arxiv.org/abs/1702.08734"
    publisher: "arXiv"
  - title: "What is a Vector Database and How Does it Work?"
    url: "https://www.pinecone.io/learn/vector-database/"
    publisher: "Pinecone"
  - title: "Running pgvector in production on Amazon Aurora PostgreSQL"
    url: "https://aws.amazon.com/blogs/database/running-pgvector-in-production-on-amazon-aurora-postgresql/"
    publisher: "Amazon Web Services"
  - title: "Filtering"
    url: "https://qdrant.tech/documentation/concepts/filtering/"
    publisher: "Qdrant"
related:
  - title: "What are embeddings in AI?"
    href: "/guides/what-are-embeddings"
  - title: "What is RAG (retrieval-augmented generation)?"
    href: "/guides/what-is-rag"
  - title: "pgvector vs Pinecone vs Weaviate vs Qdrant"
    href: "/guides/vector-database-comparison"
  - title: "Database architecture services"
    href: "/services/database-architecture"
service:
  title: "RAG knowledge base development"
  href: "/services/rag-knowledge-base"
disclaimer: none
---

## What problem does a vector database solve?

**A vector database finds things that mean the same, even when they share no words.** A normal database is excellent at exact questions: every invoice over $10,000, every customer in Victoria. It's poor at fuzzy ones: which support tickets describe the same fault as this one, which policy clauses deal with working from home when the clause says "remote arrangements".

The fix is to turn each item into an [embedding](/guides/what-are-embeddings), a list of a few hundred to a few thousand numbers produced by an AI model, where items with similar meaning get similar numbers. Once everything is a point in that numeric space, "find similar items" becomes "find the nearest points". A vector database is the system that stores those points and does that search quickly, at scale, while behaving like a proper database.

## How does a vector database work?

**It stores each vector with an ID and metadata, builds an index that makes nearest-neighbour search fast, and returns the closest matches for a query vector.** In plain steps:

1. **Write.** Your application sends a record: an ID, the vector, and metadata such as source document, date, department and access group. Most systems also store the original text.
2. **Index.** The database organises vectors into a search structure. The most common today is HNSW (Hierarchical Navigable Small World), a layered graph described by Malkov and Yashunin in 2016. A search enters at a sparse top layer and hops towards closer neighbours through denser layers below.
3. **Query.** Your application embeds the user's query with the same model and asks for the top matches, for example the 20 nearest vectors where access group is "finance" and date is after 2024.
4. **Score.** Closeness is measured with a distance function, usually cosine similarity or dot product, and results come back ranked.

The key word is *approximate*. Comparing a query against every stored vector gives perfect results but gets slow as the collection grows. Approximate nearest neighbour (ANN) indexes check only a small, well-chosen fraction and usually still find nearly all of the true nearest matches. You tune the trade-off. In pgvector, for example, the `ef_search` setting controls how much of the HNSW graph each query explores: AWS's June 2026 production guidance calls the default of 40 "often too low for production" and suggests 100 as a starting point.

## Vector database vs vector index vs search engine

The terms get blurred. Here is how they differ.

| | Vector index library | Vector database | Keyword search engine |
|---|---|---|---|
| Example | FAISS | pgvector, Pinecone, Qdrant, Weaviate | Elasticsearch, OpenSearch (BM25) |
| Finds matches by | Similarity of vectors | Similarity of vectors, plus filters | Shared words, weighted by rarity |
| Updates and deletes | Limited; often rebuild | Normal inserts, updates, deletes | Normal |
| Metadata filtering | Build it yourself | Built in | Built in |
| Backups, access control, replication | Not included | Included | Included |
| Good at exact codes and names | No | Weak | Strong |

FAISS, released by Facebook AI Research and described by Johnson, Douze and Jégou in 2017, is a library you embed in your own code: very fast, but it leaves storage, updates and security to you. A vector database wraps that kind of index in database features. Many search engines now support vectors too, and many vector databases now support keyword search, which matters because combining both (hybrid search) usually beats either alone.

## Do you need a dedicated vector database?

**Often not at first. If you already run PostgreSQL, the pgvector extension adds vector columns and HNSW indexes to the database you have.** That means one system to back up, secure and host in an Australian region, and the ability to join vector results with your ordinary tables in one query.

A dedicated vector database starts to make sense when:

- You have tens of millions of vectors or more, or very high query volumes.
- Searches combine similarity with heavy, complex filtering and pgvector's performance on your data isn't enough.
- You want vector search managed as its own scalable service, separate from your transactional database.
- You need features a specialist engine does better, such as multi-vector records or built-in hybrid ranking.

A simple decision matrix:

| Your situation | Sensible starting point |
|---|---|
| Already on PostgreSQL, under a few million vectors | pgvector |
| Using a managed AI platform end to end | The platform's built-in store (for example Bedrock Knowledge Bases) |
| Very large scale, small ops team | A managed vector service in a suitable region |
| Strict self-hosting or air-gapped requirement | Self-hosted pgvector or an open-source engine |
| Prototype over a few hundred documents | An in-memory index, or no vector search at all |

For a product-by-product view, see [pgvector vs Pinecone vs Weaviate vs Qdrant](/guides/vector-database-comparison).

## Common pitfalls

**The most expensive mistakes are about data and operations, not the choice of product.**

- **Mixing embedding models.** Vectors from different models, or different versions of one model, aren't comparable. Changing models means re-embedding everything, so record the model name with every vector.
- **Filtering after the search.** If you fetch the top 20 matches and then drop the ones a user can't see, you may return three results or none. Filter inside the search. Engines such as Qdrant are built around this, and pgvector 0.8.0 added iterative index scans to address it.
- **Running out of memory.** HNSW indexes perform well only when they fit in RAM. Once they spill to disk, latency jumps.
- **No deletion path.** When a source document is removed or someone exercises a privacy request, its vectors must go too. Design the link from source to vectors on day one.
- **Treating vectors as anonymous.** They are derived from your content and usually stored beside the original text. Apply the same residency and access rules as the source; see [data residency vs sovereignty](/guides/data-residency-vs-data-sovereignty).

## Worked example: sizing a small knowledge base

Say a firm has 20,000 documents averaging 10 pages, split into chunks of roughly half a page.

1. 20,000 documents × 20 chunks = 400,000 chunks.
2. At 1,536 dimensions stored as 4-byte floats, each vector is about 6 KB.
3. 400,000 × 6 KB ≈ 2.5 GB of raw vectors.
4. Add the HNSW index, metadata and chunk text, and plan for several times that on disk, with the index held in memory.

That comfortably fits a modest managed PostgreSQL instance with pgvector. It's a useful reminder that most business knowledge bases are not "big data" problems.

## Where vector databases fit with RAG and agents

A vector database is one component. In a [RAG system](/guides/what-is-rag) it's the retrieval layer that finds passages for the model to read. In an [AI agent](/guides/what-is-an-ai-agent) it may sit behind a search tool the agent can call. The quality of what comes out still depends on parsing, chunking and the embedding model upstream.

## How All Webbed Labs approaches vector storage

Our default is PostgreSQL with pgvector in an Australian cloud region, with hybrid keyword and vector search, permission filters applied in the query, and the embedding model version stored against every vector. We move to a dedicated engine only when measured load or filtering needs justify the extra system. See our [database architecture](/services/database-architecture) and [RAG knowledge base](/services/rag-knowledge-base) services.
