# Keyword changes: cloud-vendors batch (28 September 2026)

All vendor facts kept exactly as left by the fact-check (docs-internal/factcheck/cloud-vendors.md). `published` and `updated` unchanged. All ten pages pass `node scripts/check-content.mjs`. FAQ counts kept at 7 or 8 (overlapping FAQs folded into the body where new ones were added).

## data-residency-vs-data-sovereignty
- Primary query: "data residency vs data sovereignty" (secondary: "data sovereignty australia", "data residency australia")
- metaTitle: unchanged ("Data Residency vs Data Sovereignty in Australia")
- description: "Data residency is where your data is stored. Data sovereignty is whose laws can reach it. What the difference means for Australian software and AI projects." → "Data residency vs data sovereignty: residency is where data is stored, sovereignty is whose laws can reach it. What it means for cloud and AI in Australia."
- Summary opens with "The difference between data residency and data sovereignty is location versus law."
- H2s reworded: "What's the difference between data residency and data sovereignty?" (adds data localisation), "What are the data residency requirements in Australia?" (notes there's no single data sovereignty law). Added "in simple terms" and "in cloud computing" phrasing to the sovereignty definition.
- New H2 "Is Indigenous data sovereignty the same thing?" covering a large share of "data sovereignty australia" searches. Verified against Maiam nayri Wingara's MnW Principles page (2018 Indigenous Data Sovereignty Summit communique); source added.
- New FAQs: residency vs sovereignty vs localisation (localization); residency vs retention; why data sovereignty is important.
- Links added to the AI data sovereignty guide and the Bedrock/Azure/Vertex comparison.

## ai-data-sovereignty-australia
- Primary query: "AI data sovereignty Australia" (secondary: "sovereign AI Australia", "claude data sovereignty australia", "aws data sovereignty australia", "microsoft data sovereignty australia")
- metaTitle: "AI Data Sovereignty in Australia: Which Models Run Onshore?" → "AI Data Sovereignty Australia: Which Models Run Onshore?"
- description: "Which AI models can process prompts inside Australia as of September 2026, across Bedrock, Azure, Vertex AI, Claude and OpenAI, and how to verify it yourself." → "AI data sovereignty in Australia: which models process prompts onshore on AWS Bedrock, Azure OpenAI, Vertex AI, Claude and OpenAI, and how to prove it."
- Summary opens with "At the time of writing (September 2026), AI data sovereignty in Australia is achievable".
- New H2 "Why is data sovereignty important for AI in Australia?" (also distinguishes "sovereign AI" in the national sense; links the AI Act guide and RAG service).
- New H3 "Claude data sovereignty in Australia" (Bedrock vs direct API, using fact-checked facts only).
- H2 reworded: "Which AI models can run in Australia today?" (names AWS). Table row now "Microsoft Foundry, formerly Azure AI Foundry".
- New FAQs: what is AI data sovereignty; can Microsoft keep AI data in Australia (Copilot storage vs Azure Australia East processing); does Australian law require onshore AI processing. Removed "How often does this change?" (covered by takeaways and body).

## bedrock-vs-azure-openai-vs-vertex-australia
- Primary query: "AWS Bedrock vs Azure OpenAI vs Vertex AI" (secondary: "aws bedrock australia", "bedrock sydney region", "azure openai australia east", "vertex ai australia region", "aws bedrock models australia")
- metaTitle: "Bedrock vs Azure OpenAI vs Vertex AI: Australian Residency" → "AWS Bedrock vs Azure OpenAI vs Vertex AI in Australia"
- description: "Which cloud AI platform keeps prompts in Australia? Bedrock, Azure OpenAI and Vertex AI compared on onshore models, data use and governance, September 2026." → "AWS Bedrock vs Azure OpenAI vs Vertex AI in Australia: which models run onshore in Bedrock Sydney, Azure OpenAI Australia East and Vertex AI's Sydney region."
- Summary opens with "Comparing AWS Bedrock vs Azure OpenAI vs Google Vertex AI for Australian data residency".
- H2s reworded: "AWS Bedrock vs Azure OpenAI vs Vertex AI: which keeps AI processing in Australia?" (adds "Microsoft Foundry (formerly Azure AI Foundry)"; Vertex rename was already present), "Which AI models are available in Australia on each platform?" (names ap-southeast-2 Sydney, ap-southeast-4 Melbourne, Australia East, australia-southeast1).
- Pricing section: one line that all three price language models per token on pay-as-you-go.
- New FAQs: Sydney or Melbourne for Bedrock (fact-checked model/region facts); what is Azure OpenAI vs Microsoft Foundry; is Azure better than AWS for AI.

## chatgpt-vs-claude-vs-copilot-for-business
- Primary query: "ChatGPT vs Claude vs Copilot for business" (secondary: "chatgpt vs claude", "claude vs copilot", "chatgpt enterprise australia", "is chatgpt safe for business", "microsoft copilot data privacy australia")
- metaTitle: "ChatGPT Enterprise vs Claude vs Copilot for Business (AU)" → "ChatGPT vs Claude vs Copilot for Business in Australia"
- description: "How ChatGPT Enterprise, Claude and Microsoft 365 Copilot compare on data use, Australian residency, admin controls and pricing basis. Checked September 2026." → "ChatGPT vs Claude vs Copilot for business: ChatGPT Enterprise, Claude and Microsoft Copilot compared on data privacy, Australian residency and pricing basis."
- Summary opens with "For business use, ChatGPT Enterprise, Claude and Microsoft Copilot all commit not to train...".
- Rename handled once: "Microsoft 365 Copilot (which Microsoft's licensing and privacy pages now call Microsoft Copilot)".
- Added a paragraph separating Microsoft 365 Copilot from GitHub Copilot and coding tools (Claude Code, Codex), and a pointer for Gemini/Google Workspace.
- H2s reworded: "Is ChatGPT, Claude or Copilot safe for business data?", "Can ChatGPT Enterprise, Claude or Copilot keep data in Australia?", "How much do ChatGPT Enterprise, Claude and Copilot cost?" (still no prices, by design).
- New FAQs: is ChatGPT safe for business use; Claude vs Copilot for work. "Can we buy more than one?" moved into the pricing section.

## copilot-vs-custom-ai-assistant
- Primary query: "Microsoft Copilot vs custom AI assistant" (secondary: "microsoft copilot vs microsoft 365 copilot", "copilot studio vs custom gpt", "copilot vs custom rag", "microsoft copilot data privacy australia")
- metaTitle: "Microsoft 365 Copilot vs a Custom AI Assistant" → "Microsoft Copilot vs a Custom AI Assistant (Australia)" (H1 keeps "Microsoft 365 Copilot", so both names appear)
- description: "When Microsoft 365 Copilot is the right choice, when Copilot Studio is enough, and when a custom AI assistant earns its cost. Australian data and licence notes." → "Microsoft 365 Copilot vs a custom AI assistant: when Copilot or Copilot Studio is enough, when a custom build pays off, and Copilot data privacy in Australia."
- Summary opens with "Choosing between Microsoft 365 Copilot and a custom AI assistant comes down to where the work lives and who uses it."
- H2s reworded: "Microsoft 365 Copilot vs Copilot Studio vs a custom AI assistant", "How private is Microsoft Copilot data in Australia?". Rename noted once in the first section.
- Added: Copilot connectors and custom agents, custom RAG (links the RAG explainer), link to the ChatGPT vs Claude vs Copilot guide.
- New FAQs: Microsoft Copilot vs Microsoft 365 Copilot (naming); do we need Microsoft Copilot; Copilot Studio vs a custom GPT or custom agent. "Is a custom assistant more expensive?" folded into the cost section.

## open-weight-vs-api-llms
- Keyword file has no variants; derived from the brief ("self hosted llm", "open source llm for business") and topic (local LLM, private LLM, on-premises, closed/proprietary models).
- Primary query: "open-weight vs API LLMs" / "self-hosted LLM"
- metaTitle: "Open-Weight vs API LLMs for Australian Enterprises" → "Open-Weight vs API LLMs: When to Self-Host in Australia"
- description: "Open-weight models like Llama, Mistral, Qwen and gpt-oss vs hosted APIs: capability, sovereignty, cost, licences and operations compared for Australian firms." → "Open-weight (open source) LLMs like Llama, Mistral, Qwen and gpt-oss vs API models: when a self-hosted LLM beats an API on sovereignty, cost and control."
- Summary opens with "In the open-weight vs API LLM decision, use a hosted API model by default".
- H2s reworded: "Open-weight vs API LLMs: which should you use?", "When should you use a self-hosted LLM?". Terminology sentence added (open source, self-hosted, local, private LLM; closed or proprietary models).
- New FAQs: best open source LLM for business; open-weight vs open source; running an LLM on-premises or locally. API fine-tuning FAQ folded into the decision section.

## vector-database-comparison
- Primary query: "pgvector vs Pinecone" / "best vector database" (secondary: "vector database comparison", "qdrant vs weaviate", "pinecone alternatives", "open source vector database")
- metaTitle: "pgvector vs Pinecone vs Weaviate vs Qdrant (2026)" → "pgvector vs Pinecone vs Weaviate vs Qdrant: Best Vector DB"
- description: "pgvector, Pinecone, Weaviate and Qdrant compared: hosting, Australian regions, pricing models and scale, plus a guide to which suits your RAG project." → "Vector database comparison: pgvector vs Pinecone vs Weaviate vs Qdrant on hosting, Australian regions, price and scale, and the best vector database for RAG."
- Summary now states "the best vector database is pgvector inside a managed PostgreSQL database in an Australian region".
- H2s reworded: "What is the best vector database for RAG?", "Vector database comparison: pgvector vs Pinecone vs Weaviate vs Qdrant", "pgvector vs Pinecone: when is Pinecone the better choice?", "Qdrant vs Weaviate: when is an open source vector database the better choice?"
- New FAQs: pgvector vs Pinecone; Qdrant vs Weaviate; alternatives to Pinecone (names Milvus, Chroma, OpenSearch, MongoDB Atlas without claims). "Can I switch later?" folded into the first section.

## n8n-vs-make-vs-zapier
- Primary query: "n8n vs Zapier" / "n8n vs Make vs Zapier" (secondary: "n8n vs make vs zapier pricing", "n8n self hosted australia", "is zapier worth it", "why is zapier so expensive", "does zapier cost money", "power automate")
- metaTitle: "n8n vs Make vs Zapier (and When to Go Custom)" → "n8n vs Make vs Zapier: Pricing and Self-Hosting in Australia"
- description: "n8n, Make and Zapier compared for Australian businesses: pricing models, self-hosting, data residency and limits, plus when custom code beats all three." → "n8n vs Zapier vs Make for Australian businesses: pricing models, self-hosted n8n in Australia, data residency and limits, and when custom code beats them."
- Summary opens with "Comparing n8n vs Make vs Zapier".
- H2s reworded: "n8n vs Make vs Zapier: which should you choose?", "n8n vs Make vs Zapier pricing: how do the models change the real cost?", "What does self-hosting n8n in Australia involve?"
- One line on Microsoft Power Automate (not compared; no facts claimed).
- New FAQs: n8n vs Zapier; does Zapier cost money (uses the fact-checked free tier); is Zapier worth it and why it gets expensive. "When should I move off a no-code platform?" folded into the custom section.

## llm-running-costs
- Primary query: "LLM API cost" (secondary: "gpt cost per token", "claude api pricing", "llm cost per token", "how much does 1 token cost", "how does llm api pricing work", "llm cost calculator")
- metaTitle: "LLM Running Costs in Production: Tokens, Caching, Hosting" → "LLM API Cost 2026: Claude and GPT Pricing per Token"
- description: "What an LLM costs to run: token pricing, caching, batch, model tiers, Australian region premiums and self-hosting, with the arithmetic shown step by step." → "LLM API cost in 2026: Claude and GPT pricing per token, caching, batch, Australian region premiums and self-hosting, with the arithmetic shown step by step."
- Summary opens with "For most business applications, the cost of running a large language model in production, mostly LLM API token charges, is...".
- H2s reworded: "How does LLM API pricing work?", "How much does a token cost? Claude and GPT API pricing". Worked example framed as a simple LLM cost calculator.
- New FAQs: how much does 1 token cost (arithmetic from the existing table: US$0.0000001 to US$0.00001 per input token); subscription vs API. "Why is our bill higher than our estimate?" folded into the cost-control list.

## tokens-and-context-windows
- Primary query: "what is a token in AI" (secondary: "context window meaning", "llm tokens", "what does tokens mean", "why are tokens and context windows important", "context length", "token limit")
- metaTitle: "Tokens and Context Windows Explained: Cost and Latency" → "What Is a Token in AI? Tokens and Context Windows Explained"
- description: "A token is the unit of text an AI model reads and bills by. How tokens and context windows work, rough English ratios, and why they drive LLM cost and speed." → "What is a token in AI, and what does context window mean? How LLM tokens and context windows work, rough English ratios, and why they drive cost and speed."
- Summary opens with "In AI, a token is the chunk of text a large language model reads and writes".
- H2s reworded: "What is a token in AI?", "What does context window mean?" (adds context length), "Is a bigger context window better?", "Why are tokens and context windows important for cost?"
- New FAQs: token limit vs context window; what happens if you go over the context window; does a large window mean the model remembers conversations. "Quickest way to reduce token spend" removed (the caching and levers section covers it).
