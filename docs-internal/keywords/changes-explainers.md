# Keyword changes: explainers batch (2026-09-28)

## /guides/what-is-rag
- Primary query: what is RAG in AI / what is retrieval-augmented generation
- metaTitle: "What Is RAG (Retrieval-Augmented Generation)?" → "What Is RAG in AI? Retrieval-Augmented Generation"
- description: "RAG lets an AI model answer from your own documents by retrieving relevant passages first. How it works, when you need it, pitfalls, and what it costs to run." → "What is RAG in AI? Retrieval-augmented generation lets a model answer from your own documents. How it works, an example, use cases, and RAG vs fine-tuning."
- Added: New H2s "What is RAG in AI, explained simply?" (open-book analogy, full form, variants AI knowledge base / chat with your documents), "RAG example: one question, end to end", "How is RAG different from an LLM, MCP or agentic AI?" (table: RAG vs LLM/ChatGPT/generative AI, semantic search, MCP, agentic RAG, GraphRAG, grounding); comparison H2 renamed "RAG vs fine-tuning vs long prompts" plus cache-augmented generation (CAG) paragraph; "What is RAG used for? Business use cases". FAQs added: how RAG improves LLM answers, RAG vs prompt engineering, RAG cost. Sources added: Chan et al. 2024 (CAG), Microsoft Research GraphRAG. Link added to /guides/what-is-mcp.

## /guides/what-is-a-vector-database
- Primary query: what is a vector database
- metaTitle: "What Is a Vector Database? Explained for Business" → "What Is a Vector Database? Meaning, Uses and Examples"
- description: "A vector database stores embeddings and finds items by similarity of meaning, not exact words. How it works, when you need one, and when Postgres is enough." → "What is a vector database? It stores embeddings and finds data by meaning, not keywords. How it works, examples, uses in AI and RAG, and vs SQL databases."
- Added: H2 renamed "What is a vector database, in simple terms?"; new H2s "What is a vector database used for?" (RAG, semantic search, agent memory, recommendations, dedup, multimodal), "Vector database vs relational (SQL) database" (table, plus graph database / knowledge graph distinction), "Vector database examples" (pgvector on RDS/Aurora/Azure/Cloud SQL/Supabase, Qdrant, Weaviate, Milvus, Pinecone, Elasticsearch/OpenSearch/Azure AI Search, Bedrock Knowledge Bases). FAQs added: how many dimensions, vector database vs vector store, vector database cost (drivers only, no figures).

## /guides/what-are-embeddings
- Primary query: what are embeddings in AI / what is embedding in AI
- metaTitle: "What Are Embeddings in AI? A Plain-English Guide" → "What Are Embeddings in AI? Meaning and Examples"
- description: "Embeddings turn text or images into lists of numbers where similar meanings sit close together. How they work, what businesses use them for, and how to choose." → "What are embeddings in AI? Vector embeddings turn text or images into numbers where similar meanings sit close. How they work, examples, and their use in RAG."
- Added: First H2 renamed "What is an embedding in AI, and what does it look like?"; new H2s "Embeddings vs tokens vs vectors" (table, link to tokens guide) and "How are embeddings used in generative AI?". Variant "vector embeddings" in summary. FAQs added: what is an embedding in RAG, where to get embedding models in Australia (Azure OpenAI, Titan/Cohere on Bedrock, Vertex AI; region availability phrased as check-at-time).

## /guides/what-is-llm-fine-tuning
- Primary query: what is LLM fine-tuning / fine-tuning an LLM
- metaTitle: "What Is LLM Fine-Tuning, and When Don't You Need It?" → "What Is LLM Fine-Tuning? Methods, Examples, vs RAG"
- description: "Fine-tuning retrains a language model on your examples to change how it behaves. How it works, the main methods, and when prompting or RAG is the better choice." → "What is fine-tuning an LLM? It trains a model further on your examples to change how it behaves. How it works, LoRA, examples, and when RAG is better."
- Added: First H2 renamed "What is fine-tuning, and what does it change?"; new H2s "Fine-tuning examples: what is it used for?" and "Fine-tuning vs RAG: the short version" (4-row table). FAQs added: fine-tuning vs prompt engineering, what is LoRA fine-tuning. No keyword file; variants derived from topic.

## /guides/what-is-an-ai-agent
- Primary query: what is an AI agent / what is agentic AI
- metaTitle: "What Is an AI Agent? Agentic AI Explained" → "What Is an AI Agent? Agentic AI Explained, With Examples"
- description: "An AI agent is a language model that uses tools in a loop to reach a goal. How agents work, when a business needs one, the risks, and how to keep control." → "What is an AI agent? A language model that uses tools in a loop to reach a goal. How agentic AI works, examples, agentic vs generative AI, risks, use cases."
- Added: New H2s "What is an AI agent, in simple words?" (AI agent vs agentic AI), "AI agent examples" (6-row table, illustrative), "Agentic AI vs generative AI, LLMs and AI assistants" (table incl. agent vs LLM, assistant, chatbot, workflow); paragraph defining the agent harness from ASD (Sept 2026). FAQs added: what is an AI agent harness, how much does an AI agent cost (drivers, no figures). Source added: ASD "Agentic AI harnesses".

## /guides/what-is-mcp
- Primary query: what is MCP / what is an MCP server / model context protocol
- metaTitle: "What Is MCP (Model Context Protocol)? Explained" → "What Is MCP? Model Context Protocol and MCP Servers"
- description: "MCP is an open standard for connecting AI apps to tools and data. Who created it, how hosts, clients and servers work, who supports it, and the security risks." → "What is MCP in AI? The Model Context Protocol is an open standard that connects AI apps to tools and data. How MCP servers work, examples, and MCP vs API."
- Added: New H2s "What is MCP in AI, in simple terms?", "What is an MCP server?" (with examples, what it is used for), "MCP vs API, RAG, function calling and A2A" (table incl. agent skills, AI agent). FAQs added: how much does MCP cost, MCP server vs client. Sources added: A2A project "A2A and MCP" (quoted), Anthropic "Introducing Agent Skills". Removed two later duplicate links so each target is linked once.

## /guides/ai-hallucinations
- Primary query: what are AI hallucinations / why AI hallucinates
- metaTitle: "Why AI Hallucinates and How to Reduce It" → "What Are AI Hallucinations? Why They Happen, Fixes"
- description: "AI hallucinations are confident but false outputs. Why language models make things up, the main types, and the layered controls that reduce them at work." → "What are AI hallucinations? Confident but false AI outputs. Why language models make things up, examples, and how to prevent or reduce hallucinations at work."
- Added: New opening H2 "What is an AI hallucination? Meaning and examples" (5 illustrative examples); H2 renamed "How do you prevent or reduce AI hallucinations in a business system?". FAQs added: why does ChatGPT hallucinate, hallucination vs AI bias. No keyword file. Did not add named real-world cases (Mata v Avianca, Air Canada) because primary sources could not be fetched (403).

## /guides/prompt-injection
- Primary query: what is prompt injection (and how to prevent it)
- metaTitle: "What Is Prompt Injection? Attacks and Defences Explained" → "What Is Prompt Injection? How It Works and Prevention"
- description: "Prompt injection is text that tricks an AI model into ignoring its instructions. How direct and indirect attacks work, and the layered defences that limit harm." → "What is prompt injection? Text that tricks an AI model into ignoring its instructions. How direct and indirect attacks work, examples, and how to prevent it."
- Added: H2 renamed "How does prompt injection work?"; new H2s "Prompt injection vs SQL injection and code injection" (table, ties to NCSC source) and "Prompt injection examples" (incl. document prompt injection); defence H2 renamed "How do you prevent and defend against prompt injection?".

## /guides/llm-evaluation
- Primary query: what is LLM evaluation / LLM evals
- metaTitle: "LLM Evaluation: How to Test an AI App Before Launch" → "What Is LLM Evaluation? Metrics and How to Test an AI App"
- description: "LLM evaluation measures whether an AI app gives correct, grounded, safe answers. How to build an eval set, pick metrics, use LLM judges and catch regressions." → "What is LLM evaluation? How to test an AI app before launch: building an eval set, RAG and generation metrics, LLM-as-a-judge, tools and regression testing."
- Added: Opening definition now includes "LLM evals"; new H2s "LLM evaluation vs model benchmarks" (table) and "What tools are used for LLM evaluation?" (Ragas, promptfoo, DeepEval, OpenAI evals, Langfuse, LangSmith). FAQs added: LLM evaluation vs normal software testing, what is RAG evaluation. No keyword file.

## /guides/strangler-fig-pattern
- Primary query: what is the strangler fig pattern
- metaTitle: "What Is the Strangler Fig Pattern? Legacy Modernisation" → "What Is the Strangler Fig Pattern? Meaning and Example"
- description: "The strangler fig pattern replaces a legacy system piece by piece behind a routing layer until the old one can be retired. How it works and when it fits." → "What is the strangler fig pattern? A way to replace legacy software piece by piece behind a routing layer. How it works, an example, and microservices use."
- Added: First H2 renamed "What is the strangler fig pattern? Meaning in software"; new H2s "Strangler fig pattern example" (illustrative .NET monolith walk-through), "Strangler fig pattern and microservices", "Strangler fig vs big bang, branch by abstraction and blue-green" (table incl. parallel run, replace with SaaS; link to build vs buy guide). FAQs added: strangler pattern vs strangler fig pattern, microservices only?

## /guides/software-discovery-phase
- Primary query: what is the discovery phase in software development
- metaTitle: "What Is a Discovery Phase in Software Development?" → "What Is a Discovery Phase in Software Development?"
- description: "A discovery phase is short, paid work that turns an idea into a defined scope, design and plan. What it produces, how long it takes and what it costs." → "What is the discovery phase in software development? Short, paid work that turns an idea into a scope, design and plan. The process, outputs, timing and cost."
- Added: Opening now names synonyms (scoping, inception); new H2s "What happens during the discovery process?" (7 steps) and "What comes after the discovery phase?" (DTA alpha stage, verified on digital.gov.au; commercial next-steps table). FAQ added: discovery vs scoping phase vs product discovery. metaTitle unchanged (already optimal).

## /guides/technical-uncertainty-rd-tax-incentive
- Primary query: what is technical uncertainty (R&D Tax Incentive)
- metaTitle: "Technical Uncertainty and the R&D Tax Incentive" → "What Is Technical Uncertainty? R&D Tax Incentive Guide"
- description: "For the R&D Tax Incentive, an outcome must be unknowable in advance from current knowledge. What that test means for software and AI work, with examples." → "What is technical uncertainty for the R&D Tax Incentive? An outcome that can't be known in advance from current knowledge. What it means for software."
- Added: Noted business.gov.au uses the term; new H2 "Technical uncertainty vs difficulty, novelty and commercial risk" with verified business.gov.au software-guide quote and table. FAQs added: example of technical uncertainty in software (illustrative), is commercial uncertainty enough. Tax disclaimer, s355-25 rules, self-assessment, registered-agent and 2026 to 27 Budget text all kept unchanged.

## /guides/software-and-ai-glossary
- Primary query: software and AI glossary / AI terms explained
- metaTitle: "Software and AI Glossary for Non-Technical Buyers" → "Software and AI Glossary: Terms Explained in Plain English"
- description: "Plain-English definitions of 59 software and AI terms buyers meet in proposals and contracts, from RAG and tokens to fixed price, IRAP and the Essential Eight." → "A software and AI glossary for buyers: plain-English meanings of over 60 terms, from RAG, AI agents and MCP to fixed price, IRAP and the Essential Eight."
- Added: Every entry rewritten to open with a quotable "X is ..." definition using search phrasing (e.g. "RAG (retrieval-augmented generation)", "Embeddings (vector embeddings)", "AI agent (agentic AI)", "MCP (Model Context Protocol) and MCP server", "LLM evaluation (evals)", "AI hallucination"). New entries: generative AI, semantic search, AI chatbot, guardrails, low-code and no-code, workflow automation, monolith and microservices, onshore and offshore development, jailbreak (each linked to its page where one exists). Confused-pairs table: added generative vs agentic AI, RAG vs MCP, strangler fig vs big bang. FAQ added: most important AI terms. Count changed from "59" to "more than 60" (entries now 68).
