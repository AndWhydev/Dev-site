import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

/* Plain-text site summary for LLM tools (llmstxt.org). Low impact per our
   research (SEO-SOP.md section 1.8) but free to keep current. */
const site = 'https://www.awlabs.com.au';

export const GET: APIRoute = async () => {
  const [guides, solutions, locations] = await Promise.all([
    getCollection('guides'),
    getCollection('solutions'),
    getCollection('locations'),
  ]);
  const line = (title: string, href: string, desc: string) => `- [${title}](${site}${href}): ${desc}`;
  const byTitle = <T extends { data: { title: string } }>(a: T, b: T) => a.data.title.localeCompare(b.data.title);

  const body = [
    '# AWLabs',
    '',
    '> AWLabs (AW Labs Pty Ltd, ABN 32 698 684 105) is a Sydney based enterprise AI and software development company. Every build starts with a Discovery Audit ($750 plus GST, credited in full against the build), then one fixed price for an agreed scope, paid in three payments: a deposit on signing, a second payment on acceptance of the first stage and the final payment before handover. Code is assigned to the client on payment, and the hosting region is agreed in the Schedule of Work. Founder Andy Taleb has built software professionally since 2019 and has run sister agency All Webbed Up since 2021; AWLabs launched in mid 2026 as a partnership with a group of developers and founders.',
    '',
    '## Company',
    line('About', '/about', 'Team, history and how we work'),
    line('How we deliver', '/methodology', 'Phases, quality gates and cadence'),
    line('Trust and compliance', '/trust', 'IP ownership, security, data handling, company details'),
    line('Services', '/services', 'All software and AI services'),
    line('Contact', '/contact', 'Book a call: admin@awlabs.com.au, 1800 714 148'),
    '',
    '## Guides',
    ...guides.sort(byTitle).map((g) => line(g.data.title, `/guides/${g.id}`, g.data.description)),
    '',
    '## Industry solutions',
    ...solutions.sort(byTitle).map((g) => line(g.data.title, `/solutions/${g.id}`, g.data.description)),
    '',
    '## Locations',
    ...locations.sort(byTitle).map((g) => line(g.data.title, `/locations/${g.id}`, g.data.description)),
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
