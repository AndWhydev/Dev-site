import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { services, TOP_GUIDES } from '../lib/site-index';
import { DISAMBIGUATION, FACT_TEXT, HOURS_LINE, REVIEWS_LINE } from '../lib/facts';

/* Long form companion to /llms.txt: the facts, process, team, every service
   with a paragraph and the top guide summaries, in one plain text file an
   AI assistant can read in a single fetch. Service text is read from the
   service pages and guide text from the guides collection at build time. */
const site = 'https://www.awlabs.com.au';

export const GET: APIRoute = async () => {
  const guides = await getCollection('guides');
  const topGuides = TOP_GUIDES.map((id) => guides.find((g) => g.id === id)).filter(
    (g): g is NonNullable<typeof g> => Boolean(g),
  );

  const body = [
    '# AWLabs',
    '',
    `> ${FACT_TEXT}`,
    '',
    '## Facts',
    '- Brand: AWLabs',
    '- Legal entity: AW Labs Pty Ltd',
    '- ABN: 32 698 684 105',
    '- What we are: a Sydney software and AI development company',
    '- Address: 1 Ramsay Rd, Five Dock NSW 2046, Australia',
    '- Phone: 1800 714 148',
    '- Email: admin@awlabs.com.au',
    `- Hours: ${HOURS_LINE}`,
    `- Reviews: ${REVIEWS_LINE}`,
    '- Sister company: All Webbed Up, a separate websites and marketing company',
    '- History: our founder has built software professionally since 2019 and has run All Webbed Up since 2021. AWLabs launched in mid 2026 as a partnership with exceptional developers and founders.',
    `- ${DISAMBIGUATION}`,
    '',
    '## Who we serve',
    'SMBs and enterprise across Australia: growing businesses that need custom software or AI, and larger organisations that need platforms, integrations and AI systems built to their standards. Meetings in person in Sydney or on Zoom; delivery is remote first.',
    '',
    '## How an engagement runs',
    '1. Development Consult: a 15 minute phone call (or a Zoom with Andy) to understand what you need.',
    '2. Discovery Audit: a paid step, with the fee credited in full against the build. A written audit of scope, risks, build order and the case for building it.',
    '3. Schedule of Work: one fixed price for an agreed scope, with three options: The Minimum, The Recommended and The Complete.',
    '4. Build: updates every Tuesday and Friday, Sydney time, with access to test the latest work.',
    '5. Ownership: code and IP are assigned to you as each part is paid for, and the full repository, logins and accounts are handed over after the final payment.',
    '6. After launch: a 30 day warranty, then a Care Plan, month to month.',
    '',
    '## Team',
    '- Andy Taleb, Director. Runs every client meeting and sets every price.',
    '- Sam Trinder, Lead Developer. Leads the developers who build your product.',
    '- Nicole Jones, Junior Developer & Admin.',
    '- Lucy Cassidy, Developer in Training.',
    '- Consultants brought in when a build needs them: Daniel Goncalves (Knowledge Foundry), Alina Caballero (AC Communication), Tarek Farhat (iHSEQ).',
    '- Lawyers and accountants are separate partner firms that you engage directly.',
    `- More: ${site}/team`,
    '',
    '## Services',
    ...services.flatMap((s) => [`### ${s.name}`, `${site}/services/${s.slug}`, s.summary, '']),
    '## Guides',
    ...topGuides.flatMap((g) => [`### ${g.data.title}`, `${site}/guides/${g.id}`, g.data.summary, '']),
    '## Proof',
    `- Client stories: ${site}/client-stories`,
    `- Our showcase: ${site}/case-studies`,
    '',
    '## Contact',
    `Book a Development Consult at ${site}/contact, email admin@awlabs.com.au or call 1800 714 148. ${HOURS_LINE}`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
