---
title: "What is MCP (Model Context Protocol)?"
metaTitle: "What Is MCP (Model Context Protocol)? Explained"
description: "MCP is an open standard for connecting AI apps to tools and data. Who created it, how hosts, clients and servers work, who supports it, and the security risks."
eyebrow: "Explainer"
category: explainer
published: 2026-09-28
updated: 2026-09-28
summary: "The Model Context Protocol (MCP) is an open standard that defines how AI applications connect to external tools and data sources. A system is wrapped once as an MCP server, exposing tools, resources and prompts, and any MCP-compatible AI application, such as Claude, ChatGPT, Copilot or an in-house agent, can then discover and use it. Anthropic released MCP in November 2024 and donated it to the Linux Foundation's Agentic AI Foundation in December 2025."
takeaways:
  - "MCP replaces one-off integrations between each AI app and each system with a single shared protocol."
  - "There are three roles: the host (the AI application), a client inside the host for each connection, and the server that exposes a system."
  - "Servers offer three kinds of capability: tools (actions the model can call), resources (data for context) and prompts (reusable templates)."
  - "Local servers talk over stdio; remote servers use Streamable HTTP, with OAuth recommended for authorisation."
  - "MCP standardises the connection, not the trust. Permissions, approvals and vetting servers are still your job."
faqs:
  - q: "Who owns MCP?"
    a: "Anthropic created MCP and released it as an open standard on 25 November 2024. On 9 December 2025 Anthropic donated it to the Agentic AI Foundation, a directed fund under the Linux Foundation co-founded by Anthropic, Block and OpenAI, with support from Google, Microsoft, AWS, Cloudflare and Bloomberg. The specification and SDKs are open source."
  - q: "Is MCP only for Claude?"
    a: "No. At the time of the Linux Foundation donation, Anthropic listed ChatGPT, Cursor, Gemini, Microsoft Copilot and Visual Studio Code among the products supporting it. OpenAI's API can call remote MCP servers, and Windows includes an on-device registry for MCP servers. You can also build your own MCP client into an in-house application."
  - q: "What's the difference between MCP and an API?"
    a: "An API is how software talks to your system. MCP sits on top: an MCP server usually calls your existing API, but describes its capabilities in a standard, machine-readable way so AI applications can discover what's available and call it without custom integration code for each one."
  - q: "Is MCP secure?"
    a: "The protocol includes an authorisation model based on OAuth and publishes security best practices, but a connection is only as safe as the server and the permissions behind it. A malicious or careless server can leak data or take harmful actions. Use servers from trusted sources, give each the narrowest access, require approval for consequential tool calls, and log everything."
  - q: "Should we build an MCP server for our product or internal systems?"
    a: "Build one if you want several AI applications, or your customers' AI tools, to use the same system. If a single app needs a couple of functions, ordinary tool calling inside that app is simpler. An MCP server earns its keep through reuse."
sources:
  - title: "Introducing the Model Context Protocol"
    url: "https://www.anthropic.com/news/model-context-protocol"
    publisher: "Anthropic"
  - title: "Donating the Model Context Protocol and establishing the Agentic AI Foundation"
    url: "https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation"
    publisher: "Anthropic"
  - title: "Architecture overview"
    url: "https://modelcontextprotocol.io/docs/learn/architecture"
    publisher: "Model Context Protocol"
  - title: "Understanding MCP servers"
    url: "https://modelcontextprotocol.io/docs/learn/server-concepts"
    publisher: "Model Context Protocol"
  - title: "Security Best Practices"
    url: "https://modelcontextprotocol.io/specification/latest/basic/security_best_practices"
    publisher: "Model Context Protocol"
  - title: "Connectors and MCP servers"
    url: "https://developers.openai.com/api/docs/guides/tools-connectors-mcp"
    publisher: "OpenAI"
  - title: "Model Context Protocol (MCP) on Windows overview"
    url: "https://learn.microsoft.com/en-us/windows/ai/mcp/overview"
    publisher: "Microsoft"
related:
  - title: "What is an AI agent?"
    href: "/guides/what-is-an-ai-agent"
  - title: "AI agent development"
    href: "/services/ai-agent-development"
  - title: "What is prompt injection and how do you defend against it?"
    href: "/guides/prompt-injection"
  - title: "API development services"
    href: "/services/api-development"
service:
  title: "MCP server development"
  href: "/services/mcp-server-development"
disclaimer: none
---

## What problem does MCP solve?

**MCP solves the integration explosion: without a standard, every AI application needs custom code for every system it connects to.** Five AI tools and ten business systems means up to 50 separate integrations, each built and maintained differently. With MCP, each system is wrapped once as a server and each AI application implements the protocol once as a client, so any compatible app can use any server.

When Anthropic announced MCP on 25 November 2024, it described it as "a new standard for connecting AI assistants to the systems where data lives, including content repositories, business tools, and development environments". The first release included the specification, SDKs, local server support in the Claude Desktop apps, and open-source reference servers for systems such as Google Drive, Slack, Git and Postgres. It's often compared to USB-C: one standard plug instead of a drawer of adaptors.

## How does MCP work?

**An AI application (the host) creates one client connection per MCP server; each server tells the client what it can do, and the model uses those capabilities during a conversation.** The official architecture defines three participants:

| Role | What it is | Example |
|---|---|---|
| Host | The AI application the user interacts with; it coordinates one or more clients | Claude Desktop, Claude Code, Visual Studio Code, an in-house assistant |
| Client | A component inside the host that holds one dedicated connection to one server | Created automatically by the host for each server configured |
| Server | A program that exposes a system's capabilities over MCP | A CRM server, a file system server, a database server |

Underneath, MCP has two layers. The **data layer** uses JSON-RPC 2.0 messages for discovery and for the primitives described below. The **transport layer** carries those messages and handles authorisation. The specification is versioned by date; at the time of writing (September 2026) the current version is 2026-07-28, which made the protocol stateless, with each request carrying its own version and capability information.

Here is what happens when a user asks an MCP-enabled assistant, "Which of my open deals close this month?":

1. **Discover.** On connecting, the host's client asks the CRM server what it supports and lists its tools, such as `search_deals` with a defined input schema.
2. **Offer.** The host adds those tool descriptions to what the model can see.
3. **Decide.** The model decides to call `search_deals` with status "open" and a date range.
4. **Approve (optional).** The host can ask the user to approve the call before it runs.
5. **Execute.** The client sends a `tools/call` request; the server queries the CRM with the user's credentials and returns results.
6. **Answer.** The model reads the results and replies.

MCP deliberately stops at the connection. It doesn't dictate which model you use or how the application manages context. That's what makes it vendor-neutral.

## What can an MCP server expose?

**Servers offer three building blocks, each controlled by a different party: tools by the model, resources by the application, and prompts by the user.**

| Primitive | What it is | Who decides when it's used | Example |
|---|---|---|---|
| Tools | Functions that perform actions or queries | The model, based on the request | Create a ticket, search flights, run a database query |
| Resources | Read-only data provided as context, each with a URI | The application | A file, a database schema, a knowledge base article |
| Prompts | Reusable instruction templates with arguments | The user, explicitly (for example a slash command) | "Summarise this account's last quarter" |

Clients can offer capabilities back to servers too. The main one is **elicitation**, which lets a server ask the user for more information or confirmation mid-task. An older client feature, sampling (letting a server borrow the host's model), is deprecated as of the 2026-07-28 version.

## Local and remote servers

**MCP defines two transports: stdio for servers running on the same machine, and Streamable HTTP for servers reached over a network.**

- **stdio.** The host launches the server as a local process and talks to it through standard input and output. There's no network overhead. Typical for developer tools and desktop file access.
- **Streamable HTTP.** The client sends HTTP POST requests, with optional server-sent events for streaming. This is how remote, hosted servers work, typically serving many users. The specification recommends OAuth for obtaining access tokens.

For businesses, remote servers are the more important pattern: a single, centrally managed server for a system such as your CRM or document store, with proper authentication, that any approved AI tool in the company can use.

## Who supports MCP?

**MCP moved from one vendor's proposal to a cross-industry standard within about a year.**

| Date | Milestone |
|---|---|
| 25 November 2024 | Anthropic releases MCP with early adopters including Block and Apollo, and developer tools Zed, Replit, Codeium and Sourcegraph |
| 2025 | Support spreads across major AI products and developer tools |
| 9 December 2025 | Anthropic donates MCP to the Agentic AI Foundation under the Linux Foundation, co-founded with Block and OpenAI; Anthropic reports over 10,000 active public MCP servers and more than 97 million monthly SDK downloads |
| At the time of writing | OpenAI's Responses API connects to remote MCP servers; Windows provides an on-device agent registry for MCP servers with admin controls |

## Is MCP safe to use in a business?

**MCP is a plumbing standard; it makes connections easier, which makes getting permissions right more important.** A server can read data and take actions, and anything it returns goes into the model's context. OpenAI's documentation puts it bluntly: a malicious server "can exfiltrate sensitive data from anything that enters the model's context".

The MCP specification's own security best practices cover risks including:

- **Token passthrough.** Servers must not accept access tokens that weren't issued specifically for them, and must not simply forward a client's token to downstream APIs.
- **Confused deputy.** Proxy servers that sit in front of third-party APIs must get per-client user consent, or an attacker can obtain access without the user's approval.
- **Local server compromise.** A one-click local server install runs code on the user's machine. Clients must show the exact command and get consent; servers should run sandboxed.
- **Scope minimisation.** Start with minimal permissions and step up only when a privileged operation is needed, rather than requesting everything up front.
- **Server-side request forgery.** Clients must validate URLs a server supplies during authorisation, so a malicious server can't point them at internal systems.

Add to that the risks every agent faces: a tool result or document containing hidden instructions (see [prompt injection](/guides/prompt-injection)), and tools with more power than the task needs. The practical rules: use servers from trusted sources, run actions with the user's own identity, enforce authorisation in the underlying system, require approval for consequential tools, and log every call.

## When should you build an MCP server?

**Build one when a system will be used by more than one AI application, or when you want your customers' AI tools to work with your product.** Examples:

- An internal system (CRM, ticketing, document management) that staff want to use from Claude, Copilot and an in-house [AI agent](/guides/what-is-an-ai-agent).
- A SaaS product whose customers increasingly work inside AI assistants.
- A governed gateway to company knowledge, pairing MCP with a [RAG knowledge base](/services/rag-knowledge-base) so every AI tool retrieves from the same permission-aware index.

Skip it when a single application needs one or two functions. Plain tool calling inside that app is simpler, and you can wrap it as an MCP server later. And if the underlying system has no usable API, that's the first job: see [API development](/services/api-development).

## How All Webbed Labs builds MCP servers

We build remote MCP servers over your existing APIs with OAuth, per-user permissions enforced by the underlying system, narrow tools with validated inputs, read-only defaults, and full call logging, hosted in Australian cloud regions. We test them with the AI applications your staff actually use. See [MCP server development](/services/mcp-server-development), and [AI agent development](/services/ai-agent-development) for the agents that use them.
