// Builds the email signature banners and signature HTML in public/email/.
//
//   node scripts/email-banners/build.mjs
//
// Banners are 1200 x 300 JPGs (shown at 600 x 150 in mail clients, so they stay
// sharp on retina). JPG, not WebP, because Outlook cannot display WebP.
// Text is drawn with the site's own fonts (Sora, DM Sans), bundled in ./fonts
// so the output is identical on any machine. Edit PEOPLE below and rerun.

import { mkdtempSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const outDir = join(root, 'public', 'email');
const SITE = 'https://www.awlabs.com.au';

// Point fontconfig at the bundled fonts before sharp (librsvg/pango) loads.
const confDir = mkdtempSync(join(tmpdir(), 'awl-fonts-'));
const conf = join(confDir, 'fonts.conf');
writeFileSync(conf, `<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig><dir>${join(here, 'fonts')}</dir><cachedir>${confDir}</cachedir></fontconfig>`);
process.env.FONTCONFIG_FILE = conf;
const { default: sharp } = await import('sharp');

// Names and titles as shown on /team (src/components/TeamSection.astro).
const PEOPLE = [
  { slug: 'andy-taleb', name: 'Andy Taleb', title: 'Founder & Developer', email: 'andy@awlabs.com.au' },
  { slug: 'nicole-castillo', name: 'Nicole Castillo', title: 'Admin & Operations', email: 'admin@awlabs.com.au' },
  { slug: 'sam-trinder', name: 'Sam Trinder', title: 'Senior Developer', email: 'admin@awlabs.com.au' },
  { slug: 'hyacinth-soriano', name: 'Hyacinth Soriano', title: 'Brand & Design', email: 'admin@awlabs.com.au' },
];
const TAGLINE = 'Custom platforms, integrations and AI systems for Australian business.';

const W = 1200, H = 300;
const C = { bg: '#0a0f0e', surface: '#0f1614', accent: '#0d9373', text: '#ffffff', muted: '#9fb3ad', line: '#1c2a26' };
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const mark = (x, y, size) => `
  <g transform="translate(${x} ${y}) scale(${size / 36})">
    <rect width="36" height="36" rx="9" fill="${C.accent}"/>
    <path d="M8 27L18 9L28 27" stroke="#fff" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M11.5 21.5H24.5" stroke="#fff" stroke-width="2.8" stroke-linecap="round" fill="none"/>
  </g>`;

// "All Webbed" (white) + "Labs" (accent), Sora 700, as in the site header.
// The word gap is an explicit dx because SVG collapses trailing spaces.
const wordmarkText = (x, y, fs) => `<text x="${x}" y="${y}" font-family="Sora" font-weight="700" font-size="${fs}" letter-spacing="${fs * -0.01}">
    <tspan fill="${C.text}">All Webbed</tspan><tspan dx="${fs * 0.28}" fill="${C.accent}" letter-spacing="${fs * 0.05}">Labs</tspan></text>`;

// Mark + wordmark on a transparent canvas, trimmed to its real width so it can
// be right aligned exactly.
async function wordmarkPng(size) {
  const fs = size * 0.62;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size * 12}" height="${size}">
    ${mark(0, 0, size)}${wordmarkText(size * 1.33, size / 2 + fs * 0.36, fs)}</svg>`;
  return sharp(Buffer.from(svg)).trim({ threshold: 0 }).png().toBuffer({ resolveWithObject: true });
}

const background = (glowX) => `
  <defs>
    <radialGradient id="glow" cx="${glowX}" cy="150" r="420" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${C.accent}" stop-opacity="0.22"/>
      <stop offset="1" stop-color="${C.accent}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.035" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="${C.bg}"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0" y="${H - 4}" width="${W}" height="4" fill="${C.accent}"/>`;

const personSvg = (p) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  ${background(150)}
  <circle cx="150" cy="148" r="106" fill="none" stroke="${C.accent}" stroke-opacity="0.25" stroke-width="10"/>
  <circle cx="150" cy="148" r="101" fill="none" stroke="${C.accent}" stroke-width="3"/>
  <text x="300" y="128" font-family="Sora" font-weight="700" font-size="54" letter-spacing="-1" fill="${C.text}">${esc(p.name)}</text>
  <text x="302" y="174" font-family="DM Sans" font-weight="500" font-size="28" fill="${C.muted}">${esc(p.title)}</text>
  <rect x="302" y="204" width="56" height="3" rx="1.5" fill="${C.accent}"/>
  <text x="302" y="248" font-family="DM Sans" font-weight="600" font-size="26" fill="${C.accent}">awlabs.com.au</text>
</svg>`;

const genericSvg = () => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  ${background(150)}
  ${mark(70, 70, 150)}
  ${wordmarkText(282, 124, 60)}
  <text x="284" y="174" font-family="DM Sans" font-weight="500" font-size="25" fill="${C.muted}">${esc(TAGLINE)}</text>
  <rect x="284" y="204" width="56" height="3" rx="1.5" fill="${C.accent}"/>
  <text x="284" y="248" font-family="DM Sans" font-weight="600" font-size="26" fill="${C.accent}">awlabs.com.au</text>
</svg>`;

// Encode as JPG, stepping quality down until it is under 100 KB.
async function toJpg(pipeline, file) {
  const png = await pipeline.png().toBuffer();
  for (let q = 90; q >= 50; q -= 5) {
    const buf = await sharp(png).jpeg({ quality: q, mozjpeg: true, chromaSubsampling: '4:4:4' }).toBuffer();
    if (buf.length < 100 * 1024 || q === 50) {
      writeFileSync(file, buf);
      return { q, kb: (buf.length / 1024).toFixed(1) };
    }
  }
}

const signatureHtml = (p) => `<!-- ${p.name}, All Webbed Labs email signature. Built by scripts/email-banners/build.mjs -->
<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;">
  <tr>
    <td style="padding:0 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;color:#0a0f0e;">${esc(p.name)}</td>
  </tr>
  <tr>
    <td style="padding:0 0 10px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#0d9373;">${esc(p.title)}, All Webbed Labs</td>
  </tr>
  <tr>
    <td style="padding:0 0 2px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#1a1a1a;">Mobile: 04XX XXX XXX</td>
  </tr>
  <tr>
    <td style="padding:0 0 2px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#1a1a1a;">Email: <a href="mailto:${p.email}" style="color:#1a1a1a;text-decoration:none;">${p.email}</a></td>
  </tr>
  <tr>
    <td style="padding:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#1a1a1a;">Web: <a href="${SITE}" style="color:#0d9373;text-decoration:none;">awlabs.com.au</a></td>
  </tr>
  <tr>
    <td style="padding:0;">
      <a href="${SITE}" style="text-decoration:none;"><img src="${SITE}/email/${p.slug}.jpg" width="600" height="150" alt="${esc(p.name)}, ${esc(p.title)}, All Webbed Labs. awlabs.com.au" style="display:block;width:600px;height:150px;border:0;outline:none;" /></a>
    </td>
  </tr>
</table>
`;

mkdirSync(outDir, { recursive: true });

const wm = await wordmarkPng(40);

for (const p of PEOPLE) {
  const photo = await sharp(join(root, 'public', 'team', `${p.slug}.webp`))
    .resize(196, 196, { fit: 'cover' })
    .composite([{ input: Buffer.from('<svg width="196" height="196"><circle cx="98" cy="98" r="98"/></svg>'), blend: 'dest-in' }])
    .png()
    .toBuffer();
  const banner = sharp(Buffer.from(personSvg(p))).composite([
    { input: photo, left: 52, top: 50 },
    { input: wm.data, left: W - 50 - wm.info.width, top: 44 },
  ]);
  const r = await toJpg(banner, join(outDir, `${p.slug}.jpg`));
  writeFileSync(join(outDir, `${p.slug}-signature.html`), signatureHtml(p));
  console.log(`${p.slug}.jpg  q${r.q}  ${r.kb} KB`);
}

const r = await toJpg(sharp(Buffer.from(genericSvg())), join(outDir, 'awlabs.jpg'));
console.log(`awlabs.jpg  q${r.q}  ${r.kb} KB`);
