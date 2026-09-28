---
title: "What is RAG (retrieval-augmented generation)?"
metaTitle: "What Is RAG in AI? Retrieval-Augmented Generation"
description: "What is RAG in AI? Retrieval-augmented generation lets a model answer from your own documents. How it works, an example, use cases, and RAG vs fine-tuning."
eyebrow: "Explainer"
category: explainer
published: 2026-09-28
updated: 2026-09-28
summary: "RAG, short for retrieval-augmented generation, is a technique in AI where a system first searches a trusted collection of documents for passages relevant to a question, then gives those passages to a large language model so it can write an answer grounded in them, usually with citations. It lets a general model answer accurately about your own, private or recent information without retraining the model."
takeaways:
  - "RAG has two halves: a retriever that finds relevant passages, and a generator (the language model) that writes the answer from them."
  - "The term comes from a 2020 paper by Lewis et al. at Facebook AI Research, University College London and New York University."
  - "Most RAG quality problems are retrieval problems: the right passage was never found, so the model couldn't use it."
  - "RAG adds knowledge; fine-tuning changes behaviour. Most business knowledge assistants need RAG first."
  - "If your whole document set fits comfortably in a model's context window, you may not need RAG at all."
faqs:
  - q: "Is RAG the same as training a model on my documents?"
    a: "No. In RAG the model itself is unchanged. Your documents sit in a searchable index, and relevant passages are inserted into the prompt at question time. Updating the knowledge means updating the index, which takes minutes, not a new training run."
  - q: "Does RAG stop AI hallucinations?"
    a: "It reduces them substantially for questions your documents can answer, because the model is working from supplied text rather than memory. It doesn't eliminate them. The model can still misread a passage, blend two sources, or answer when retrieval found nothing useful, so you still need citations, refusal rules and testing."
  - q: "Do I need a vector database for RAG?"
    a: "Usually some form of vector search, yes, but not necessarily a separate product. Many systems use the pgvector extension inside an existing PostgreSQL database, a managed service such as Amazon Bedrock Knowledge Bases, or plain keyword search for small or highly structured collections."
  - q: "Can a RAG system respect who is allowed to see which document?"
    a: "It can and it should. Access permissions from the source system (SharePoint, Google Drive, a document management system) are stored with each chunk and applied as a filter at retrieval time, so a user's question only ever searches documents that user could already open."
  - q: "How does RAG improve a large language model's answers?"
    a: "It gives the model the relevant facts at the moment it answers, instead of relying on what it memorised in training. That makes answers more specific and current, lets them cover private information the model never saw, and makes each claim traceable to a cited source."
  - q: "How is RAG different from prompt engineering?"
    a: "Prompt engineering is writing better instructions for the model. RAG is a system that automatically finds the right documents and adds them to the prompt for each question. Most RAG systems need good prompt engineering too, for example the instruction to answer only from the supplied sources and cite them."
  - q: "How much does RAG cost?"
    a: "There are two parts: the build (ingestion, retrieval, evaluation, security and interface) and running costs (model tokens, embeddings, hosting and the search index). Our RAG knowledge base cost guide sets out typical Australian ranges and what drives them."
  - q: "How long does it take to build a production RAG system?"
    a: "A working prototype over a clean document set can take days. A production system with permission-aware ingestion from several sources, evaluation, monitoring and security review typically takes weeks to a few months, depending mostly on how messy the source documents are."
sources:
  - title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., NeurIPS 2020)"
    url: "https://arxiv.org/abs/2005.11401"
    publisher: "arXiv"
  - title: "Retrieval-Augmented Generation for Large Language Models: A Survey (Gao et al., 2023)"
    url: "https://arxiv.org/abs/2312.10997"
    publisher: "arXiv"
  - title: "Introducing Contextual Retrieval"
    url: "https://www.anthropic.com/news/contextual-retrieval"
    publisher: "Anthropic"
  - title: "Lost in the Middle: How Language Models Use Long Contexts (Liu et al., 2023)"
    url: "https://arxiv.org/abs/2307.03172"
    publisher: "arXiv"
  - title: "Don't Do RAG: When Cache-Augmented Generation is All You Need for Knowledge Tasks (Chan et al., 2024)"
    url: "https://arxiv.org/abs/2412.15605"
    publisher: "arXiv"
  - title: "Project GraphRAG"
    url: "https://www.microsoft.com/en-us/research/project/graphrag/"
    publisher: "Microsoft Research"
  - title: "Retrieve data and generate AI responses with Amazon Bedrock Knowledge Bases"
    url: "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"
    publisher: "Amazon Web Services"
related:
  - title: "What is a vector database?"
    href: "/guides/what-is-a-vector-database"
  - title: "What are embeddings in AI?"
    href: "/guides/what-are-embeddings"
  - title: "RAG vs fine-tuning: which does your business need?"
    href: "/guides/rag-vs-fine-tuning"
  - title: "How much does a RAG knowledge base cost?"
    href: "/guides/rag-knowledge-base-cost"
service:
  title: "RAG knowledge base development"
  href: "/services/rag-knowledge-base"
disclaimer: none
---

## What is RAG in AI, explained simply?

**RAG (retrieval-augmented generation) is an open-book exam for an AI model: before answering, the system looks up the relevant pages in your documents and hands them to the model, which writes its answer from those pages and cites them.** Without RAG, a large language model (LLM) answers a closed-book exam from whatever it memorised during training, which is general, frozen at a cut-off date and knows nothing about your business.

The name describes the three moves. **Retrieval**: search a trusted collection for passages relevant to the question. **Augmented**: add those passages to the prompt. **Generation**: the model generates the answer from them. The same idea goes by other names in buyer conversations, such as an AI knowledge base, "chat with your documents" or grounded AI search.

## RAG example: one question, end to end

Here is an illustrative example of a staff assistant built on RAG over a company's HR policies.

1. An employee asks: "Can I work from home three days a week?"
2. The retriever searches the policy index. It finds a passage from the flexible work policy that says "remote arrangements of up to two days per week may be approved by a line manager", even though the question never used the word "remote". It also finds the exception process in the same policy.
3. The system checks the employee can see those documents, then places both passages in the prompt with the instruction to answer only from them.
4. The model replies that the standard limit is two days, that more needs approval through the exception process, and cites the policy name and section.

Without retrieval, the same model would give a generic answer about hybrid work, or worse, invent a policy. That difference is why RAG is the usual first step for AI over company knowledge.

## Where does the term RAG come from?

**RAG was named in a 2020 research paper by Patrick Lewis and colleagues at Facebook AI Research, University College London and New York University.** They combined a language model's built-in "parametric" memory with a separate "non-parametric" memory, a searchable index of Wikipedia, and found the combined system gave more specific and more factual answers than the model alone, with the added benefit that you could see which passages it used.

The idea has since moved well beyond the original architecture. Today "RAG" describes any system that retrieves information at question time and hands it to a model as context. A 2023 survey by Gao et al. groups the field into naive RAG (retrieve, then generate), advanced RAG (better chunking, query rewriting, reranking) and modular RAG (retrieval, routing, memory and other steps built as interchangeable modules).

## How does RAG work, step by step?

**A RAG system prepares your documents once, then runs a short search-and-answer loop for every question.** The preparation is called ingestion; the loop is retrieval and generation.

**Ingestion (run when documents change):**

1. **Collect** documents from their sources: SharePoint, Google Drive, a policy library, a ticketing system, a database.
2. **Parse** them into clean text, including tables and scanned pages, and record metadata such as title, date, owner and access permissions.
3. **Chunk** each document into passages of a few hundred words, ideally along natural boundaries like headings.
4. **Embed** each chunk: an embedding model turns it into a list of numbers that captures its meaning. See [what embeddings are](/guides/what-are-embeddings).
5. **Index** the chunks, their embeddings and metadata in a store that supports similarity search, often a [vector database](/guides/what-is-a-vector-database), and usually a keyword index as well.

**Question time (run on every query):**

1. The user's question is embedded with the same model.
2. The system retrieves the chunks most similar in meaning, filtered to documents the user is allowed to see, and often combines this with keyword search.
3. A reranker optionally re-scores the top results for relevance.
4. The best passages are inserted into the prompt with instructions such as "answer only from these sources and cite them".
5. The model writes the answer, with citations back to the source documents.

## RAG vs fine-tuning vs long prompts

**RAG adds knowledge at question time; fine-tuning changes the model; a long prompt simply includes everything.** These are the three main ways to get a model to use knowledge it wasn't trained on, and they are often confused.

| Approach | What changes | Best for | Updating knowledge |
|---|---|---|---|
| Put everything in the prompt | Nothing; the full text goes in every request | Small, stable document sets | Edit the text |
| RAG | An index sits beside the model | Large, changing or permission-restricted knowledge | Re-ingest changed documents |
| Fine-tuning | The model's weights | Tone, format, specialised tasks | Retrain the model |

Anthropic's own guidance is a useful sanity check: if a knowledge base is smaller than about 200,000 tokens (roughly 500 pages), you can often skip retrieval and include the whole thing in the prompt, using prompt caching to keep it affordable. Beyond that size, or when different users may see different documents, RAG is the practical choice. For the fine-tuning side of the decision, read [RAG vs fine-tuning](/guides/rag-vs-fine-tuning).

The "whole thing in the prompt" approach now has its own name in research: cache-augmented generation (CAG). Chan et al. (2024) showed that for a constrained knowledge base, preloading the documents into a long context window and caching them can match or beat RAG while removing retrieval errors. It's a good fit for small, stable collections, not large or permission-restricted ones.

## How is RAG different from an LLM, MCP or agentic AI?

**RAG isn't a model or a product; it's a pattern that wraps a model with search.** The terms people compare it with sit at different layers:

| Comparison | The difference |
|---|---|
| RAG vs LLM (or ChatGPT, generative AI) | The LLM is the generator inside a RAG system. RAG adds the retrieval step so the model answers from your sources, not just its training |
| RAG vs semantic search | Semantic search returns a ranked list of passages. RAG takes those passages and has a model write an answer from them |
| RAG vs MCP | The [Model Context Protocol (MCP)](/guides/what-is-mcp) is a standard way to connect AI apps to tools and data. A RAG search can be one of those tools, so the two work together rather than compete |
| RAG vs agentic AI | Classic RAG retrieves once per question. In agentic RAG, an agent decides when to search, rewrites the query, searches several sources or searches again if the first results are weak |
| RAG vs GraphRAG | GraphRAG, from Microsoft Research, builds a knowledge graph from the documents with an LLM and uses it to answer questions that need connections across many documents, such as "what are the main themes?" |
| RAG vs grounding | Grounding is the goal: tying an answer to trusted sources. RAG is the most common way to achieve it |

## What is RAG used for? Business use cases

**A business needs RAG when people ask questions whose answers live in a large, changing body of your own documents, and the answer has to be traceable to a source.** Typical examples:

- Staff asking questions of policies, procedures, contracts or technical manuals.
- Customer support answers drawn from product documentation and past resolved tickets.
- Professional services teams searching precedents, matter files or prior advice.
- Compliance teams checking what an internal standard says, with the clause cited.

You probably don't need RAG if:

- The documents fit in the prompt and rarely change (use prompt caching instead).
- The answers come from structured data like sales figures or stock levels. That's a job for a database query or an API call, which an [AI agent](/guides/what-is-an-ai-agent) can make.
- You need the model to write in a particular style or follow a strict output format, but not to know new facts. That leans towards prompting or fine-tuning.
- Nobody will check the citations and the stakes are low, in which case a general assistant may be enough.

## Why do RAG systems give bad answers?

**Most bad RAG answers are caused by retrieval, not the model: the passage that holds the answer was never found or never shown to it.** The common failure points, roughly in order of how often they bite:

| Pitfall | What goes wrong | Typical fix |
|---|---|---|
| Poor parsing | Tables, headers and scanned PDFs turn into garbled text | Layout-aware parsing, OCR, manual checks on key documents |
| Chunks lose context | A chunk says "the fee is $500" without saying which product | Add document and section context to each chunk before embedding |
| Semantic search misses exact terms | Part numbers, clause IDs and acronyms don't match on meaning | Hybrid search: vector plus keyword (BM25) |
| Too few or too many results | The answer is ranked 12th, or buried among 50 passages | Retrieve more, then rerank to a focused set |
| Stale or duplicate documents | Three versions of a policy contradict each other | Source-of-truth rules and deduplication in ingestion |
| No refusal path | The model answers anyway when nothing relevant was found | Instruct and test "I couldn't find this in the sources" |
| Permissions ignored | Users see content from documents they can't open | Store access control lists with chunks and filter at query time |

The numbers behind the chunk-context fix are worth knowing. In Anthropic's published tests, adding context to each chunk cut retrieval failures by 35%, adding keyword search on top cut them by 49%, and adding a reranker cut them by 67%. Placement also matters: Liu et al. found models use information at the start and end of a long prompt more reliably than information in the middle, so sending fewer, better passages often beats sending more.

Finally, a RAG system you haven't measured is a RAG system you can't improve. Build a test set of real questions with known answers before launch, and track retrieval accuracy and answer faithfulness separately. Our guide to [evaluating LLM applications](/guides/llm-evaluation) covers how.

## A quick readiness checklist

Before commissioning a RAG build, check you can answer yes to most of these:

- We know which document sources are in scope and who owns each one.
- The documents are mostly current, or we can tell current from superseded versions.
- We can export or connect to them, including their access permissions.
- We have 30 to 100 real questions staff or customers ask, with the correct answers.
- We know where the data must be stored and processed (see [data residency vs sovereignty](/guides/data-residency-vs-data-sovereignty)).
- Someone will own the system after launch and review its failures.

## How All Webbed Labs approaches RAG

We start with the evaluation set and the permission model, then the retrieval pipeline, and only then the chat interface. By default we use hybrid search with reranking, chunk-level context, permission filters applied at retrieval, and citations on every answer, hosted in Australian cloud regions. For many projects PostgreSQL with pgvector is enough and avoids another vendor. Every change is measured against the test set before it ships. See [RAG knowledge base development](/services/rag-knowledge-base), or read what drives the price in [how much a RAG knowledge base costs](/guides/rag-knowledge-base-cost).
