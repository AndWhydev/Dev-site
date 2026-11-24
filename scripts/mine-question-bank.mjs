#!/usr/bin/env node
/**
 * Google autocomplete (en-AU) mining for the question bank.
 * Expands hand-picked query prefixes for topics the existing per-page
 * keyword files (scripts/mine-keywords.mjs) do not cover: timelines, tool
 * integrations and alternatives, Australian rules, AI agents for tasks,
 * and hiring or managing a developer.
 * Polite: one request at a time, ~450ms apart, results cached on disk so a
 * re-run only fetches new prefixes.
 * Output: docs-internal/keywords/question-bank-autocomplete.json
 * Usage: node scripts/mine-question-bank.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = path.join(root, 'docs-internal/keywords/question-bank-autocomplete.json');
const cache = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, 'utf8')).results : {};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function suggest(q) {
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&hl=en-AU&gl=au&q=${encodeURIComponent(q)}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) return (JSON.parse(await res.text())[1] || []).map((s) => s.toLowerCase());
    } catch {}
    await sleep(1500);
  }
  return [];
}

const TOOLS = ['xero', 'myob', 'servicem8', 'simpro', 'jobadder', 'hubspot', 'salesforce', 'shopify', 'microsoft 365', 'sharepoint', 'power automate', 'aroflo', 'tradify', 'cin7', 'deputy', 'employment hero', 'pipedrive', 'monday.com', 'zoho', 'netsuite', 'dynamics 365', 'quickbooks', 'gohighlevel', 'airtable'];
const prefixes = [];
for (const t of TOOLS) prefixes.push(`${t} integration`, `${t} alternative`, `${t} vs`, `${t} api`, `is ${t}`, `can ${t}`);

prefixes.push(
  // timelines
  'how long does it take to build an app', 'how long does it take to build software', 'how long does it take to build a website', 'how long does it take to develop', 'how long does an mvp take', 'how long does it take to build a saas', 'how long does it take to implement', 'how long does a software project', 'how long does ai', 'how long does it take to integrate', 'how long does app store approval', 'how long does it take to migrate',
  // worth it
  'is it worth building an app', 'is custom software worth it', 'is an app worth it for', 'is ai worth it for', 'is it worth hiring', 'should i build an app', 'should i build my own', 'do i need an app for my', 'do i need custom software', 'do small businesses need',
  // choosing and managing
  'how to hire an app developer', 'how to hire a software developer', 'how to find a developer', 'how to brief a developer', 'how to manage a software developer', 'how to manage an offshore', 'what to ask a software developer', 'what to ask an app developer', 'questions to ask a software development company', 'how to choose an app developer', 'how to choose a developer', 'how to check a developer', 'how to write an app idea', 'how to get an app made', 'how to start an app business', 'how to fire a developer', 'what does a software developer need from me', 'what is a statement of work', 'what is a product owner', 'what is a scrum', 'what is agile', 'what is a sprint', 'what is technical debt', 'what is a fractional cto', 'do i need a cto', 'what is a code review', 'how to take over a software project', 'my developer disappeared', 'developer won\'t give me source code', 'app developer scam', 'how to get source code from developer',
  // costs
  'how much does it cost to build a website', 'how much does it cost to make an app in australia', 'how much does a developer cost', 'how much does an ai agent cost', 'how much does chatgpt enterprise cost', 'how much does it cost to maintain an app', 'how much does it cost to host an app', 'how much does an app cost per month', 'how much does it cost to integrate', 'how much does automation cost', 'how much does a crm cost', 'how much does a portal cost', 'how much does a dashboard cost', 'how much does an ai consultant cost', 'how much does an mvp cost', 'how much does software cost', 'app development cost', 'ai chatbot cost', 'cost of ai for business', 'cost to build a booking app', 'cost to build an ecommerce app', 'cost to build a', 'cost of custom software', 'price of app development',
  // AI agents for tasks
  'ai agent for', 'ai agents for', 'ai for small business', 'ai for accounting', 'ai for real estate', 'ai for law firms', 'ai for construction', 'ai for recruitment', 'ai for customer service', 'ai for invoice', 'ai for quoting', 'ai for scheduling', 'ai for bookkeeping', 'ai for hr', 'ai for sales', 'ai for marketing', 'ai for tradies', 'ai for healthcare', 'ai for ndis', 'ai for aged care', 'ai receptionist', 'ai phone answering', 'ai voice agent', 'ai chatbot for website', 'can ai replace', 'can ai do', 'how to use ai in', 'how to automate', 'how to build an ai agent', 'how to train ai on', 'how to use chatgpt for business', 'is chatgpt safe for', 'is copilot safe', 'is it legal to use ai', 'what is agentic ai', 'what is an ai agent', 'what can ai agents do',
  // rules
  'privacy act australia', 'privacy act small business', 'privacy act ai', 'privacy act 2026', 'australian privacy principles', 'r&d tax incentive software', 'r&d tax incentive', 'r&d tax incentive eligibility', 'apra cps 234', 'apra cps 230', 'ndis practice standards', 'ndis software', 'ndis app', 'tga software as a medical device', 'tga ai', 'is my app a medical device', 'aged care act 2024', 'aged care software', 'ato software', 'ato stp', 'ato digital service provider', 'ato dsp operational framework', 'single touch payroll', 'e-invoicing australia', 'payday super', 'my health record', 'healthcare identifiers', 'essential eight', 'notifiable data breach', 'spam act australia', 'australian consumer law software', 'consumer data right', 'aml ctf tranche 2', 'data sovereignty australia', 'accessibility requirements australia', 'wcag australia', 'cyber security act 2024', 'ransomware reporting australia', 'children\'s online privacy code', 'automated decision making australia', 'workplace surveillance nsw', 'ai regulation australia', 'is it legal to scrape', 'gst on software', 'is software development tax deductible', 'can i claim software',
  // compare
  'flutter vs', 'react native vs', 'native vs', 'pwa vs', 'web app vs', 'custom software vs', 'saas vs', 'no code vs', 'bubble vs', 'power apps vs', 'next.js vs', 'astro vs', 'wordpress vs', 'aws vs azure', 'chatgpt vs', 'claude vs', 'copilot vs', 'openai vs', 'agency vs freelancer', 'offshore vs onshore', 'fixed price vs', 'rag vs', 'make vs zapier', 'n8n vs', 'xero vs myob', 'hubspot vs', 'servicem8 vs tradify', 'simpro vs', 'odoo vs', 'shopify vs',
  // SaaS / startup / maintenance / security / data
  'how to build a saas', 'how to start a saas', 'how to launch an app in australia', 'how to fund an app', 'how to validate an app idea', 'how to make money from an app', 'saas pricing', 'saas metrics', 'how to sell saas to enterprise', 'how to get an app on the app store', 'how to maintain software', 'software maintenance', 'app maintenance', 'why does my app', 'how to fix', 'how to update an old app', 'how to secure an app', 'penetration testing', 'how to back up', 'how to migrate data', 'data warehouse vs', 'power bi', 'how to clean data for ai', 'what is a data lake', 'how to connect', 'how to sync', 'how to integrate', 'what is an api', 'how do apis work', 'webhook vs api',
  // industry software
  'software for tradies', 'software for builders', 'software for physio', 'software for dentists', 'software for real estate', 'software for accountants', 'software for lawyers', 'software for ndis', 'software for aged care', 'software for childcare', 'software for gyms', 'software for restaurants', 'software for cafes', 'software for manufacturers', 'software for warehouses', 'software for schools', 'software for not for profits', 'software for councils', 'software for mining', 'software for farms', 'app for tradies', 'app for real estate', 'app for small business', 'app for my business',
);

let fetched = 0;
for (const p of [...new Set(prefixes)]) {
  if (cache[p]) continue;
  cache[p] = await suggest(p);
  fetched++;
  await sleep(450);
  if (fetched % 25 === 0) process.stdout.write(`${fetched} `);
}
fs.writeFileSync(out, JSON.stringify({ generated: new Date().toISOString().slice(0, 10), locale: 'en-AU', note: 'Google autocomplete suggestions keyed by query prefix', results: cache }, null, 1));
console.log(`\n${Object.keys(cache).length} prefixes (${fetched} fetched this run)`);
