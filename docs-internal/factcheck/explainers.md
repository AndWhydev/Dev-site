# Fact-check report: explainers batch

Checked 28 September 2026. All 69 source URLs across the 12 pages returned HTTP 200 and were confirmed to be the page described (none dead or wrong). `node scripts/check-content.mjs` passes on all 12 files after edits. Glossary internal links: all 61 resolve to an existing file under `src/content` or `src/pages` (checked strictly, not just against the plan). The glossary has 59 terms, matching its "59 terms" claim.

## what-is-rag (claims checked: 16)
Confirmed: Lewis et al. 2020 (NeurIPS; FAIR, UCL, NYU; Wikipedia dense index; "more specific, diverse and factual"), Anthropic contextual retrieval figures (200,000 tokens / about 500 pages; 35%, 49%, 67% reductions), Liu et al. lost-in-the-middle, Bedrock KB URL.
Changes:
- "modular RAG (retrieval as one tool among many, often inside an agent)" → "modular RAG (retrieval, routing, memory and other steps built as interchangeable modules)". Gao et al. define modular RAG by swappable modules, not agents. https://arxiv.org/abs/2312.10997
- "For many clients PostgreSQL with pgvector is enough" → "For many projects ...". Implied a client base (truthfulness rule).

## what-is-a-vector-database (claims checked: 12)
Confirmed: HNSW (Malkov and Yashunin, arXiv 2016), FAISS (Johnson, Douze, Jégou 2017), AWS blog of 25 June 2026 (ef_search default 40 "often too low for production", 100 as a starting point), pgvector 0.8.0 iterative index scans, storage arithmetic (1,536 x 4 bytes = 6 KB; 400,000 chunks ≈ 2.5 GB; 1M ≈ 6 GB).
Changes: none.

## what-are-embeddings (claims checked: 14)
Confirmed: word2vec (Mikolov et al., Google, 2013), Sentence-BERT (65 hours to about 5 seconds for 10,000 sentences), MTEB (8 tasks, 58 datasets, 112 languages; no single method wins), Anthropic offers no embedding model and points to Voyage AI, 3,072 vs 1,536 storage.
Changes:
- Takeaway "Embeddings are made by a separate, smaller model" → "are usually made by". Several current embedding models are LLM-sized.
- FAQ and pitfall on Morris et al.: added that the 92% exact recovery of 32-token inputs used an iterative method against one open embedding model (GTR). The unqualified version overstated it. https://arxiv.org/abs/2310.06816

## what-is-llm-fine-tuning (claims checked: 13)
Confirmed: InstructGPT 1.3B preferred over 175B GPT-3; LoRA (10,000x fewer trainable parameters, 3x less GPU memory); QLoRA (65B on a single 48 GB GPU); Bedrock billing (tokens x epochs plus monthly storage per model).
Changes:
- **Stale:** "Managed services such as OpenAI's platform and Amazon Bedrock now offer supervised, preference or reinforcement fine-tuning and distillation" → Bedrock offers supervised, reinforcement fine-tuning and distillation; OpenAI says it is winding down its fine-tuning platform and no longer accepts new users. https://developers.openai.com/api/docs/guides/model-optimization and https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html
- FAQ "Can we fine-tune Claude or GPT models?": added the OpenAI wind-down as a dated example.
- Ovadia et al. (takeaway and body): "fine-tuning" → "unsupervised fine-tuning". The paper compared RAG only with unsupervised (continued-pretraining style) fine-tuning. https://arxiv.org/abs/2312.05934

## what-is-an-ai-agent (claims checked: 10)
Confirmed: Anthropic quotes are verbatim ("LLMs using tools based on environmental feedback in a loop", "predefined code paths", "dynamically direct their own processes and tool usage"), the cost and latency trade-off, ReAct, and the three root causes of LLM06:2025.
Changes:
- **Stale:** "OWASP's 2025 Top 10 ... names this excessive agency" → now notes it was LLM06 in 2025 and climbed to third in the August 2026 edition. Added the 2026 OWASP source. https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/ and https://www.helpnetsecurity.com/2026/08/06/owasp-2026-llm-top-10-released/

## what-is-mcp (claims checked: 22)
Confirmed: 25 Nov 2024 launch quote, reference servers and early adopters; the AAIF announcement of 9 Dec 2025 (directed fund under the Linux Foundation; Anthropic, Block and OpenAI co-founders; Google, Microsoft, AWS, Cloudflare and Bloomberg supporting; 10,000+ servers; 97M+ monthly SDK downloads; ChatGPT, Cursor, Gemini, Copilot and VS Code). Current spec version 2026-07-28 is stateless (the latest spec URL redirects there). Also confirmed: stdio and Streamable HTTP transports, the primitives and who controls each, the OpenAI "exfiltrate" quote (verbatim), and the Windows ODR.
Changes:
- "sampling ... is deprecated as of 2026-07-28" → sampling and roots deprecated, along with protocol-level logging (SEP-2577). https://modelcontextprotocol.io/specification/2026-07-28/changelog
- Discovery step "On connecting, the host's client asks ..." → names the `server/discover` call. The initialize handshake was removed in 2026-07-28.
- SSRF bullet: "Clients must validate URLs" → "should validate ... blocking private and internal addresses". The spec uses MUST consider / SHOULD block. https://modelcontextprotocol.io/specification/latest/basic/security_best_practices

## ai-hallucinations (claims checked: 11)
Confirmed: Kalai et al. quote (verbatim), Huang et al. split between factuality and faithfulness, Anthropic "can drastically reduce false information" (verbatim), OAIC guidance of 21 October 2024 quote (verbatim), APP 10.
Changes:
- Takeaway "a built-in property ... not a bug that a future update will fully remove" → "follows from how language models are trained and generate text; every current model does it, and no routine update will fully remove it". The page's own source (Kalai et al.) argues hallucination is not strictly inevitable, because models can abstain.

## prompt-injection (claims checked: 13)
Confirmed: OWASP 2026 published 3 Aug 2026 with Prompt Injection at number 1, Excessive Agency climbing to 3rd, and the LLM01 definition quote and "jailbreaking is a form of prompt injection" (both verbatim). NCSC post title confirmed. ASD "Agentic AI harnesses" first published 11 Sep 2026, both quotes verbatim, logging advice present. OWASP mitigation list confirmed.
Changes: none.

## llm-evaluation (claims checked: 12)
Confirmed: Zheng et al. (over 80% agreement; position, verbosity and self-enhancement bias), OpenAI "vibe-based evals" anti-pattern and "better at discriminating between options", the Anthropic edge-case list, different grader model, and volume over quality, plus the Ragas metric names.
Changes: none.

## strangler-fig-pattern (claims checked: 16)
Confirmed: Fowler's page (Queensland 2001, "echo of its shape", rename and connotations of violence, rewrite dated 22 Aug 2024, "go down in flames", four activities from Cartwright, Horn and Lewis, "on top of, yet separate to"). Also Microsoft's four phases, "not suitable" list, anti-corruption layer, facade as a single point of failure and final-step table removal, and AWS guidance (new features in the new system, bug fixes in the old, "tactical" sync, premature decomposition).
Changes:
- "Fowler writes that he has seen" → "he and his colleagues have seen". The source says "we've seen".

## software-discovery-phase (claims checked: 14)
Confirmed: GDS "around 4 to 8 weeks is typical", "You should not start building your service in discovery", stopping is not a failure; DTA "usually takes between 6 and 8 weeks, depending on the size and complexity", prototyping in Alpha. Also confirmed VT Digital ($15,000 to $25,000 discovery), Re:Sourced (Sydney senior software $800 to $1,100 a day ex GST) and Robert Walters mid-2026 (NSW Senior Front End/Full Stack contract $800 to $1,000). Cost table arithmetic rechecked (12 to 14, 20 to 25 and 45 to 60 days at $900 to $1,300 give the ranges shown), as was 10% of $150k.
Changes: none.

## software-and-ai-glossary (claims checked: 30)
Confirmed: context window includes the response and is called "working memory" (Anthropic); the Essential Eight list; ADM transparency from 10 Dec 2026; CPS 230 from 1 Jul 2025; OWASP name; the NDB serious harm test; R&DTI joint administration; the IRAP description; HCF under the DTA. Definitions are consistent with the explainer pages: RAG, embeddings, vector database, fine-tuning, agent, MCP, hallucination, prompt injection (top in 2026), evals, strangler fig and discovery.
Changes:
- APP 8: "take reasonable steps to protect it" → "take reasonable steps to ensure the overseas recipient doesn't breach the APPs", keeping s 16C accountability. https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information
- Technical uncertainty: "only through experiment" → "can only be determined by a systematic progression of work based on experiment", matching the core R&D activity wording. https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/check-if-you-are-eligible-for-the-randd-tax-incentive/conducting-core-activities

## Needs expert review
- **OWASP 2026 IDs:** the prompt-injection page and glossary call Prompt Injection "LLM01" in the 2026 edition. The rank (number 1) is confirmed, but the 2026 entry IDs are only in the downloadable PDF, which I could not extract. Check against the PDF. The same applies to "third place" for Excessive Agency, which is confirmed only via Help Net Security's summary of OWASP's comparison chart.
- **Robert Walters PDF:** the table heading reads "Contract (per hour)", but the $800 to $1,000 figures are clearly day rates. The page reports them as day rates, which is correct in substance, but someone should confirm.
- **Discovery cost range** ($10k to $25k) is a synthesis of one vendor blog and day-rate data, labelled as a range. It is acceptable under SOP section 3, but the evidence is thin.
- **Windows ODR** is documented by Microsoft as prerelease. The MCP page presents it as available; consider adding "in preview".
