---
title: "What is an AI agent? (Agentic AI explained)"
metaTitle: "What Is an AI Agent? Agentic AI Explained"
description: "An AI agent is a language model that uses tools in a loop to reach a goal. How agents work, when a business needs one, the risks, and how to keep control."
eyebrow: "Explainer"
category: explainer
published: 2026-09-28
updated: 2026-09-28
summary: "An AI agent is a software system in which a large language model decides, step by step, which actions to take to reach a goal: it calls tools such as searches, databases or business APIs, looks at the results, and chooses the next step until the task is done or it needs a human. The defining feature is that the model directs its own sequence of actions instead of following a fixed script."
takeaways:
  - "An agent is a model using tools in a loop, guided by the results of each step."
  - "Anthropic distinguishes workflows (predefined code paths) from agents (the model directs its own process). Most business problems need a workflow, not a full agent."
  - "Agents suit open-ended tasks where the steps can't be known in advance; they cost more and errors can compound."
  - "The main risk is excessive agency: too many tools, too much permission or too little human oversight."
  - "Well-designed tools, least-privilege access, human approval for consequential actions and full logging are what make agents safe to deploy."
faqs:
  - q: "What's the difference between an AI agent and a chatbot?"
    a: "A chatbot answers in conversation; it talks. An agent acts: it can look things up, update records, send messages or run code across several steps to finish a task. Many products blur the line, with a chat interface on the front and agent behaviour behind it. Our comparison of agents, chatbots and workflow automation covers when each fits."
  - q: "Is agentic AI safe to connect to our business systems?"
    a: "It can be, if it's designed for it. Give the agent only the tools and permissions the task needs, enforce authorisation in the business systems themselves rather than trusting the model, require human approval for payments, deletions and external messages, and log every action. OWASP lists excessive agency as a top risk for LLM applications for exactly this reason."
  - q: "How is an AI agent different from RPA or Zapier-style automation?"
    a: "Traditional automation follows rules you wrote in advance and breaks when inputs don't match. An agent can read unstructured inputs and decide what to do, which handles variation better but is less predictable. Many good systems combine them: fixed automation for the predictable steps, an agent only for the judgement calls."
  - q: "What does MCP have to do with AI agents?"
    a: "The Model Context Protocol (MCP) is an open standard for connecting AI applications to tools and data. Instead of writing a custom integration for each agent and each system, you expose a system once as an MCP server and any MCP-compatible agent can use it, subject to the permissions you set."
  - q: "Do agents replace staff?"
    a: "In practice they mostly take on bounded, repetitive multi-step work, such as gathering information, drafting, triage and data entry across systems, with a person reviewing the result or approving key actions. Fully unsupervised agents are rare in business settings because the cost of a wrong action is usually higher than the saving."
sources:
  - title: "Building effective agents"
    url: "https://www.anthropic.com/engineering/building-effective-agents"
    publisher: "Anthropic"
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models (Yao et al., 2022)"
    url: "https://arxiv.org/abs/2210.03629"
    publisher: "arXiv"
  - title: "Tool use with Claude"
    url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview"
    publisher: "Anthropic"
  - title: "LLM06:2025 Excessive Agency"
    url: "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/"
    publisher: "OWASP Gen AI Security Project"
related:
  - title: "What is MCP (Model Context Protocol)?"
    href: "/guides/what-is-mcp"
  - title: "AI agents vs chatbots vs workflow automation"
    href: "/guides/ai-agents-vs-chatbots-vs-automation"
  - title: "What is prompt injection and how do you defend against it?"
    href: "/guides/prompt-injection"
  - title: "MCP server development"
    href: "/services/mcp-server-development"
service:
  title: "AI agent development"
  href: "/services/ai-agent-development"
disclaimer: none
---

## How does an AI agent work?

**An agent runs a loop: the model reads the goal and what it knows so far, picks an action, a tool carries it out, and the result goes back to the model to decide the next step.** Anthropic's engineering guidance describes agents as "LLMs using tools based on environmental feedback in a loop", which is as good a one-line definition as exists.

Here is the loop in words, for a request like "Find out why order 48213 hasn't shipped and tell the customer":

1. **Goal in.** The agent receives the request plus its instructions: what it's for, what it may and may not do.
2. **Think.** The model decides it first needs the order status.
3. **Act.** It calls the `get_order` tool with the order number. The application, not the model, runs that call against the order system.
4. **Observe.** The tool returns "awaiting stock, supplier ETA Friday".
5. **Think again.** The model decides to check whether a partial shipment is possible, and calls the inventory tool.
6. **Repeat** until it has enough to act on the goal.
7. **Hand off or finish.** It drafts the customer email and, because external messages need approval in this design, puts it in a queue for a staff member to send.

This pattern of alternating reasoning and action was formalised in the ReAct paper (Yao et al., 2022), which showed that letting a model consult external sources between reasoning steps reduced hallucination on fact-checking and question answering tasks. Modern model APIs build it in as "tool use" or "function calling": the model returns a structured request to call a named tool with specific inputs, your code executes it, and sends back the result.

## What are the parts of an agent?

**Every agent has a model, a set of tools, instructions, and a runtime that enforces limits.** Most of the engineering effort goes into the last three.

| Component | What it is | What good looks like |
|---|---|---|
| Model | The LLM that decides each step | Strong enough for the judgement required; cheaper models for simple sub-steps |
| Tools | Functions the agent can call: search, read a record, create a ticket, send an email | Narrow, clearly described, with validated inputs |
| Instructions | The system prompt: role, goals, rules, when to stop or escalate | Specific, tested against real cases |
| Context and memory | What the agent can see: conversation, retrieved documents, notes from earlier steps | Only what's relevant; retrieved through [RAG](/guides/what-is-rag) where knowledge is large |
| Runtime and guardrails | The code running the loop: step limits, permissions, approvals, logging | Hard limits enforced outside the model |

Anthropic's advice is to invest in tool design with the same care you'd give a user interface, because a vague tool description is the agent equivalent of a confusing button. Tools are also where standards help: the [Model Context Protocol](/guides/what-is-mcp) lets you expose a system once and use it from any compatible agent.

## Workflow or agent: which do you actually need?

**Most business processes are better served by a workflow, where your code fixes the sequence of steps and the model handles the judgement inside each one.** Anthropic draws this line explicitly: workflows follow "predefined code paths"; agents "dynamically direct their own processes and tool usage". Its guidance is to start simple and add agentic behaviour only when simpler solutions fall short.

| Level | Who decides the steps | Example | Predictability |
|---|---|---|---|
| Single model call | Nobody; one step | Summarise this email | High |
| Workflow | Your code | Classify the email, extract fields, route to the right queue | High |
| Agent with approval gates | The model, with a human approving key actions | Investigate a delayed order and draft a reply for sign-off | Medium |
| Autonomous agent | The model, end to end | Research, decide and act without review | Lower |

A workflow is the better choice when the steps are known, the process is audited, or errors are costly. An agent earns its place when the path genuinely varies case by case: investigations, research across many systems, support cases that could need any of twenty lookups, or software tasks. For a fuller comparison with chatbots and rules-based automation, see [AI agents vs chatbots vs workflow automation](/guides/ai-agents-vs-chatbots-vs-automation), and for predictable processes our [workflow automation](/services/workflow-automation) service may be enough.

## When does a business need an AI agent?

**When a task involves several steps across systems, the right steps depend on what's found along the way, and a person currently spends time gathering and stitching information together.** Good candidates:

- Customer or IT support cases that need lookups in several systems before a response.
- Back-office investigations: reconciling a payment, chasing a missing document, checking a claim.
- Research and drafting that pulls from internal knowledge plus live data.
- Internal assistants that can take actions, such as booking, updating a CRM record or raising a ticket, not just answer questions.

Signs you don't need one yet:

- The process is the same every time. Use a workflow.
- There's only one data source to query. A RAG assistant or a report may do.
- Nobody can say what a correct outcome looks like, so you can't test it.
- The systems it would touch have no API and no safe way to limit access.

## What are the risks of AI agents?

**The distinctive risk is an agent doing the wrong thing with real permissions, whether through a mistake, a manipulated input, or simply too much freedom.** OWASP's 2025 Top 10 for LLM applications names this "excessive agency" and traces it to three causes: excessive functionality (tools that can do more than needed), excessive permissions (tools running with broad access instead of the user's own), and excessive autonomy (high-impact actions without human confirmation).

Other pitfalls to plan for:

- **Prompt injection.** Content the agent reads, such as an email, web page or document, can contain instructions that try to hijack it. See [prompt injection](/guides/prompt-injection).
- **Compounding errors.** A small misreading at step two can snowball over ten steps. Step limits and checkpoints help.
- **Cost and latency.** Every loop is another model call. Anthropic notes agents trade higher cost and latency for better task performance, which is only worth it for tasks that need it.
- **Opaque behaviour.** Without logs of every thought, tool call and result, you can't debug or audit it.
- **Untested edge cases.** Agents need scenario-based evaluation, not a demo. See [how to evaluate an LLM application](/guides/llm-evaluation).

## A deployment checklist

Before an agent touches production systems, check that:

- Each tool does one thing, with the narrowest permission that works.
- Actions run with the requesting user's identity and access, not a shared admin account.
- Authorisation is enforced by the target system, never left to the model's judgement.
- Payments, deletions, external emails and record changes above a threshold need human approval.
- There's a maximum number of steps and a maximum spend per task.
- Every step is logged with inputs, outputs and the tool results.
- A test suite of realistic scenarios, including hostile inputs, passes before each release.

## How All Webbed Labs approaches agents

We usually start by mapping the process and building the predictable parts as a workflow, then add agent behaviour only where the path genuinely varies. Tools are narrow and permissioned per user, consequential actions go through approval, and every step is logged. Where the agent needs to reach several systems, we often expose them as MCP servers so the integrations can be reused. See [AI agent development](/services/ai-agent-development) and [MCP server development](/services/mcp-server-development).
