import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { services } from '../lib/site-index';
import { DISAMBIGUATION, HOURS_LINE, REVIEWS_LINE } from '../lib/facts';
import { BRAND } from '../config/brand';

/* Plain text site summary for LLM tools (llmstxt.org). Low impact per our
   research (SEO-SOP.md section 1.8) but cheap to keep current. The longer
   version with full service and guide text is /llms-full.txt. */
const site = 'https://www.awlabs.com.au';

export const GET: APIRoute = async () => {
  const [guides, solutions, locations] = await Promise.all([
    getCollection('guides', (e) => !e.data.noindex),
    getCollection('solutions', (e) => !e.data.noindex),
    getCollection('locations', (e) => !e.data.noindex),
  ]);
  const line = (title: string, href: string, desc: string) => `- [${title}](${site}${href}): ${desc}`;
  const byTitle = <T extends { data: { title: string } }>(a: T, b: T) => a.data.title.localeCompare(b.data.title);

  const body = [
    '# AWLabs',
    '',
    `> ${BRAND.name} (${BRAND.legalName}, ABN ${BRAND.abn}) is a Sydney based AI and software development company for SMBs and enterprise across Australia. Every engagement starts with a 15 minute Development Consult, then a Discovery Audit (a paid step, credited in full against the build), then one fixed price Schedule of Work for an agreed scope with three options (The Minimum, The Recommended, The Complete). Updates every Tuesday and Friday, Sydney time. Code is assigned to the client as it is paid for, with a 30 day warranty and then a Care Plan. Founder ${BRAND.founder.name} has built software professionally since ${BRAND.founder.buildingSince} and has run sister company ${BRAND.sisterCompany.name} since ${BRAND.sisterCompany.since}; ${BRAND.name} launched in ${BRAND.founded} as a partnership with a group of developers and founders.`,
    '',
    `- Reviews: ${REVIEWS_LINE}`,
    `- Hours: ${HOURS_LINE}`,
    `- Contact: ${BRAND.email}, ${BRAND.phone.display}, ${BRAND.addressLine}`,
    `- ${DISAMBIGUATION}`,
    `- Full text version: ${site}/llms-full.txt`,
    '',
    '## Company',
    line('About', '/about', 'Team, history and how we work'),
    line('Our journey', '/our-journey', 'From freelance in 2019 to All Webbed Up in 2021 and AWLabs in 2026'),
    line('How we work', '/how-we-work', 'Every step from the Development Consult to launch'),
    line('How we deliver', '/methodology', 'Phases, quality gates and cadence'),
    line('Discovery Audit', '/why-audit', 'What the Discovery Audit covers and why every build starts with it'),
    line('Trust and compliance', '/trust', 'IP ownership, security, data handling, company details'),
    line('Editorial policy', '/editorial-policy', 'How we research, write and correct our guides'),
    line('Press kit', '/press', 'Company descriptions, key facts, founder bio, logos and media contact'),
    line('Services', '/services', 'All software and AI services'),
    line('AI consulting', '/ai-consulting', 'AI strategy, development and deployment'),
    line('Startup MVP', '/startup-mvp', 'MVP development for Australian founders'),
    line('Staff augmentation', '/staff-augmentation', 'Experienced engineers embedded in your team'),
    line('Digital transformation', '/digital-transformation', 'Legacy modernisation, cloud migration and process automation'),
    line('Industries', '/industries', 'The industries we build for'),
    line('Contact', '/contact', `Book a Development Consult: ${BRAND.email}, ${BRAND.phone.display}`),
    '',
    '## Services',
    ...services.map((s) => line(s.name, `/services/${s.slug}`, s.description)),
    '',
    '## Proof',
    line('Client stories', '/client-stories', 'Video testimonials and named references from clients'),
    line('Our showcase', '/case-studies', 'A selection of products we built or helped build, grouped by industry'),
    '',
    '## Team',
    line('Our team', '/team', 'The developers who build your product, and the specialists we work with'),
    line('Andy Taleb', '/team/andy-taleb', 'Director and founder of AWLabs'),
    '',
    '## Guides',
    ...guides.sort(byTitle).map((g) => line(g.data.title, `/guides/${g.id}`, g.data.description)),
    '',
    '## Industry solutions',
    ...solutions.filter((g) => !g.data.noindex).sort(byTitle).map((g) => line(g.data.title, `/solutions/${g.id}`, g.data.description)),
    '',
    '## Locations',
    ...locations.sort(byTitle).map((g) => line(g.data.title, `/locations/${g.id}`, g.data.description)),
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
