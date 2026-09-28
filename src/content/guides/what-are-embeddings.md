---
title: "What are embeddings in AI?"
metaTitle: "What Are Embeddings in AI? A Plain-English Guide"
description: "Embeddings turn text or images into lists of numbers where similar meanings sit close together. How they work, what businesses use them for, and how to choose."
eyebrow: "Explainer"
category: explainer
published: 2026-09-28
updated: 2026-09-28
summary: "An embedding is a list of numbers, produced by an AI model, that represents the meaning of a piece of content such as a sentence, document or image. Content with similar meaning gets similar numbers, so software can measure how related two things are by comparing their embeddings, which powers semantic search, recommendations, clustering and the retrieval step in RAG."
takeaways:
  - "An embedding places each piece of content as a point in a space with hundreds or thousands of dimensions; nearby points mean similar things."
  - "Embeddings are made by a separate, smaller model than the chatbot model, and they are cheap to generate."
  - "Search is only one use: embeddings also classify, cluster, deduplicate, recommend and flag outliers."
  - "Vectors from different models can't be mixed. Changing embedding model means re-embedding everything."
  - "Embeddings can leak the text they came from, so treat them as sensitive as the source."
faqs:
  - q: "Are embeddings the same as a large language model?"
    a: "No. An embedding model reads text and outputs numbers; it doesn't write anything. Chat models like Claude or GPT generate text. The two are often used together, with embeddings finding relevant content and the chat model writing the answer, but they are different models, usually priced very differently."
  - q: "Which embedding model should we use?"
    a: "Test two or three on your own documents and real queries rather than picking from a leaderboard. The MTEB benchmark found no single model wins across all tasks. Consider language coverage, domain (legal, finance and code models exist), where the model can be hosted, and cost per million tokens."
  - q: "Does Anthropic offer an embedding model for use with Claude?"
    a: "At the time of writing, no. Anthropic's documentation says it doesn't offer its own embedding model and points to Voyage AI as one provider, while recommending you assess several vendors. Claude works with embeddings from any provider."
  - q: "How many dimensions do we need?"
    a: "Common models output 256 to 3,072 dimensions. More dimensions can capture finer distinctions but cost more storage and memory. Several current models let you shorten vectors with modest quality loss, so measure on your data before paying for the largest size."
  - q: "Can embeddings contain personal information?"
    a: "Yes, indirectly. Research at EMNLP 2023 recovered 92% of short 32-token inputs exactly from their embeddings, including full names from clinical notes. If the source contains personal information, handle the embeddings under the same Privacy Act obligations."
sources:
  - title: "Efficient Estimation of Word Representations in Vector Space (Mikolov et al., 2013)"
    url: "https://arxiv.org/abs/1301.3781"
    publisher: "arXiv"
  - title: "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks (Reimers and Gurevych, 2019)"
    url: "https://arxiv.org/abs/1908.10084"
    publisher: "arXiv"
  - title: "MTEB: Massive Text Embedding Benchmark (Muennighoff et al., 2022)"
    url: "https://arxiv.org/abs/2210.07316"
    publisher: "arXiv"
  - title: "Text Embeddings Reveal (Almost) As Much As Text (Morris et al., 2023)"
    url: "https://arxiv.org/abs/2310.06816"
    publisher: "arXiv"
  - title: "Vector embeddings"
    url: "https://developers.openai.com/api/docs/guides/embeddings"
    publisher: "OpenAI"
  - title: "Embeddings"
    url: "https://platform.claude.com/docs/en/build-with-claude/embeddings"
    publisher: "Anthropic"
related:
  - title: "What is a vector database?"
    href: "/guides/what-is-a-vector-database"
  - title: "What is RAG (retrieval-augmented generation)?"
    href: "/guides/what-is-rag"
  - title: "What is LLM fine-tuning?"
    href: "/guides/what-is-llm-fine-tuning"
  - title: "Data residency vs data sovereignty"
    href: "/guides/data-residency-vs-data-sovereignty"
service:
  title: "RAG knowledge base development"
  href: "/services/rag-knowledge-base"
disclaimer: none
---

## What does an embedding actually look like?

**An embedding is just a long list of decimal numbers, such as [0.021, -0.113, 0.087, ...], typically 256 to 3,072 of them.** No single number means anything a person would recognise. Together they position a piece of content in a mathematical space where distance reflects difference in meaning.

A useful picture is a map. On a street map, two cafés near each other are physically close. In an embedding space, "annual leave policy" and "how many holidays do I get" sit close together even though they share no words, while "leave the building" sits somewhere else entirely. The map just has far more than two dimensions, which is what lets it capture topic, tone, intent and many other shades of meaning at once.

## How are embeddings created?

**An embedding model, a neural network trained on very large amounts of text, reads your content and outputs the numbers.** You send text to the model through an API or run it on your own servers, and you get a vector back.

The idea has a short history worth knowing:

1. **2013, word vectors.** Mikolov and colleagues at Google published word2vec, which learned a vector per word from how words appear together. It showed that meaning could be captured as geometry.
2. **2019, sentence embeddings.** Reimers and Gurevych's Sentence-BERT produced one vector per sentence that could be compared with a simple calculation. Finding the most similar pair among 10,000 sentences dropped from about 65 hours with standard BERT to about 5 seconds.
3. **Today, commercial embedding models** from OpenAI, Voyage AI, Cohere, Google, Amazon and open-weight providers embed passages of thousands of tokens, in many languages, and some handle images and video.

The model is trained so that texts which mean similar things end up close together and unrelated texts end up far apart. Comparing two embeddings is then a quick calculation, usually cosine similarity, which scores how closely two vectors point in the same direction.

## A worked example

Suppose an insurer embeds three help articles and one customer question. The similarity scores below are illustrative, on a scale where higher means more related:

| Compared with the question "My windscreen cracked, am I covered?" | Illustrative similarity |
|---|---|
| "Glass damage claims for comprehensive car policies" | 0.82 |
| "How to make a claim for storm damage to your home" | 0.51 |
| "Updating your payment details" | 0.18 |

Notice that the best match shares no key word with the question: "windscreen" and "glass" never appear together, and "covered" isn't in the article title. Keyword search would struggle here. The embedding model knows a windscreen is glass on a car.

The same example shows a limit. If the customer typed a policy number, embeddings would be poor at matching it exactly. That's why production systems pair embeddings with keyword search.

## What do businesses use embeddings for?

**Anywhere you need to measure "how similar is this to that" across unstructured content.** Search is the best-known use, but not the only one.

| Use | What it does | Example |
|---|---|---|
| Semantic search | Finds content by meaning, not wording | Staff search the intranet in their own words |
| Retrieval for AI answers | Supplies relevant passages to a language model | The retrieval step in [RAG](/guides/what-is-rag) |
| Classification | Assigns a category by closeness to labelled examples | Route incoming emails to the right team |
| Clustering | Groups similar items with no labels | Find the ten themes in 5,000 survey comments |
| Deduplication | Flags near-identical records | Spot duplicate supplier invoices or tickets |
| Recommendations | Suggests related items | "Similar products" or related knowledge articles |
| Anomaly detection | Flags items unlike the rest | An unusual contract clause or transaction note |

Many of these need no chat model at all, which makes them fast and cheap. Classifying tickets by embedding similarity can cost a fraction of asking a large model to read each one.

## Where are embeddings stored?

**Once created, embeddings are stored so they can be searched later, usually in a vector database or a vector column in an ordinary database.** A [vector database](/guides/what-is-a-vector-database) indexes them so that finding the nearest matches among millions takes milliseconds. You embed your content once (and again when it changes), then embed each new query at the moment it's asked.

## How do you choose an embedding model?

**Test candidates on your own content with real queries; benchmark rankings are a starting point, not an answer.** The MTEB benchmark, which covers 8 task types across 58 datasets and 112 languages, found that no single embedding method dominates across all tasks.

Criteria that matter in practice:

- **Retrieval quality on your data.** Build 50 to 100 real questions with known correct documents and measure how often each model finds them.
- **Language and domain.** Specialist legal, finance and code models exist. Multilingual models matter if customers write in languages other than English.
- **Hosting and residency.** Can the model run in an Australian cloud region or on your own infrastructure? Every document and query passes through it.
- **Dimensions and storage.** A 3,072-dimension vector takes twice the space of a 1,536 one. Several current models let you shorten vectors or store them at lower precision to cut memory.
- **Maximum input length.** This limits how large each chunk can be.
- **Cost.** Embedding is usually cheap per token, but re-embedding a large archive adds up.

## Common pitfalls

**Most embedding problems come from treating the model as a permanent, interchangeable part. It isn't.**

- **Mixing models.** Vectors from two different models live in unrelated spaces. Comparing them gives nonsense. Store the model name and version with every vector.
- **Forgetting the re-embedding cost.** Upgrading models means re-processing the whole archive. Budget for it and keep the source text so you can.
- **Embedding the wrong unit.** A whole 80-page contract squeezed into one vector blurs everything together. Chunk sensibly.
- **Expecting exact matching.** Codes, names and numbers need keyword or structured search alongside.
- **Assuming vectors are anonymous.** Morris et al. (EMNLP 2023) reconstructed 92% of short text inputs exactly from their embeddings. Apply the same access control and residency rules as the original content; see [data residency vs data sovereignty](/guides/data-residency-vs-data-sovereignty).

## Embeddings vs fine-tuning

People sometimes ask whether they should "train the AI on our documents" or "embed our documents". Embedding doesn't change any model; it indexes your content so it can be found. [Fine-tuning](/guides/what-is-llm-fine-tuning) changes a model's weights to alter how it behaves. For making company knowledge available to an assistant, embeddings plus retrieval are almost always the first step. The trade-off is covered in [RAG vs fine-tuning](/guides/rag-vs-fine-tuning).

## How All Webbed Labs works with embeddings

We shortlist embedding models that can run where your data is allowed to go, test them against a question set built from your own documents, and keep the source text and model version with every vector so re-embedding is a routine job, not a migration. The vectors usually live in PostgreSQL with pgvector in an Australian region. This work sits inside our [RAG knowledge base development](/services/rag-knowledge-base) service.
