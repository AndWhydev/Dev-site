import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/* Shared shape for long-form search pages. See SEO-SOP.md section 5 for how
   each field is used on the page. */
const link = z.object({ title: z.string(), href: z.string() });

const base = z.object({
  /** On-page H1, phrased the way a buyer searches. */
  title: z.string(),
  /** <title> tag. Aim for 60 characters or fewer. */
  metaTitle: z.string().max(70),
  /** Meta description, 140 to 158 characters. */
  description: z.string().min(110).max(165),
  /** Eyebrow label above the H1. */
  eyebrow: z.string(),
  published: z.coerce.date(),
  updated: z.coerce.date(),
  /** "The short answer" box. Quotable on its own. */
  summary: z.string(),
  takeaways: z.array(z.string()).min(3).max(6),
  faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  sources: z
    .array(z.object({ title: z.string(), url: z.string().url(), publisher: z.string().optional() }))
    .default([]),
  related: z.array(link).default([]),
  /** The service this page most supports; drives the closing CTA. */
  service: link.optional(),
  /** Adds a general-information disclaimer. */
  disclaimer: z.enum(['none', 'legal', 'tax', 'financial']).default('none'),
  /** true = robots noindex, and left out of the sitemap, listings and llms.txt. */
  noindex: z.boolean().default(false),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: base
    .extend({
      category: z.enum(['cost', 'compare', 'explainer', 'australia']),
      /** 'answer' = question page (AnswerLayout): the H1 is the question and
          `summary` is the 40 to 60 word direct answer. */
      layout: z.enum(['longform', 'answer']).default('longform'),
      /** Answer pages: the "How we worked this out" steps. */
      method: z.array(z.string()).default([]),
      takeaways: z.array(z.string()).max(6).default([]),
    })
    .superRefine((d, ctx) => {
      const fail = (message: string) => ctx.addIssue({ code: 'custom', message });
      if (d.layout === 'longform' && d.takeaways.length < 3) fail('Long-form guides need at least 3 takeaways.');
      // An answer page can only be indexable once every placeholder is filled.
      // Answer length and the method section are checked as build warnings
      // in AnswerLayout, so existing guides can move over without new copy.
      if (d.layout === 'answer' && !d.noindex) {
        if (!d.sources.length) fail('Answer pages need sources.');
        if (!d.faqs.length) fail('Answer pages need FAQs.');
        if (/\bTODO\b/.test(JSON.stringify(d))) fail('Answer page still has TODO placeholders; keep noindex: true until they are filled.');
      }
    }),
});

const solutions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/solutions' }),
  schema: base.extend({
    industry: link,
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: base.extend({
    city: z.string(),
    state: z.string(),
  }),
});

export const collections = { guides, solutions, locations };
