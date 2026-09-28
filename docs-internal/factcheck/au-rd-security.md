# Fact-check report: au-rd-security

Checked 28 September 2026. All nine pages pass `node scripts/check-content.mjs`. The remaining "!" flags are fine in context: "case study" is the title of a department source, and "compliant" and "certified" appear only in text warning readers about those claims. No em or en dashes, no github.com links, no invented clients, certifications or panel memberships, no promised refund and no headline offset percentage. business.gov.au and legislation.gov.au pages were read with curl. APRA and ATO PDFs and pages were read directly. The legislation.gov.au text viewer needs JavaScript, so instrument IDs were confirmed through the Register API and the text through the APRA copies.

## 2026-27 Budget consistency (R&D pages)
Primary source: ATO, "Tax Reform: better targeting the Research and Development Tax Incentive", published 12 May 2026 (https://www.ato.gov.au/about-ato/new-legislation/in-detail/businesses/tax-reform-better-targeting-the-research-and-development-tax-incentive). The ATO says the measure is not yet law, sets out 7 changes and says all of them take effect from 1 July 2028. business.gov.au confirms the program runs under current rules until then. The cost page already had it right. The other three pages now carry a matching sentence and cite the ATO source.

## rd-tax-incentive-software-development-cost (34 claims checked)
Everything checked was confirmed: the Budget table, the rates (18.5 / 8.5 / 16.5 points, 2%, $150m), the 25% base rate entity rate for 2025-26, the $20k threshold and its exceptions, the 10 month registration window, the entity rules, the internal administration exclusion, the 5 year record keeping rule and "backdated or non-specific". The worked example arithmetic is correct ($34,800, $20,000, $14,800).
- Changed: "the refund arrives after the return is lodged and processed" → "any refund would arrive only after the return is lodged and processed" (so it can't be read as a promised refund).

## rd-tax-incentive-software-development (30 claims checked)
- "registration confirms your application was received, not that your activities are eligible" → "registration confirms your activities have been registered, not that they are eligible" (business.gov.au overview wording: https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/overview-of-rd-tax-incentive).
- Added the Budget sentence and ATO source.
- Overseas finding timeline cell: added "the application must be made before the end of the income year in which the overseas work is done" (https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/apply-for-an-overseas-finding; late applications are not accepted).
- Source URL: `.../apply-to-register-with-the-randd-tax-incentive` (redirect) → `.../apply-for-the-randd-tax-incentive`.
- Source URL: the malformed ATO records path → `https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/incentives-and-concessions/research-and-development-tax-incentive/keeping-records-and-calculating-your-notional-deductions`.

## rd-tax-incentive-ai-projects (24 claims checked)
Everything was confirmed against the business.gov.au AI guidance: the list of 6 AI activities, the 5 "unlikely" activities, the 2 core R&D examples, RAG examples 1 to 3 including the metrics and the internal chat detail, and the quote "do not depend on the technology used".
- Added the Budget sentence and ATO source.
- Source URL for the apply page: same redirect fix as above.

## technical-uncertainty-rd-tax-incentive (26 claims checked)
The s355-25(1) block quote is verbatim (ATO legal database). s355-25(2)(g) and (h) are correctly lettered. Also confirmed: the "trial and error" quote, the note that you don't need a positive outcome, the advance finding (legally binding, up to 3 years, doesn't cover expenditure) and the competent professional test.
- Takeaway: "changes ... start from 1 July 2028" → "would start from 1 July 2028 (not yet law)".
- Body: added the main announced changes and the ATO's "not yet law" note. Added the ATO source.

## apra-cps-234-ai (28 claims checked)
Checked against the CPS 234 PDF (https://www.apra.gov.au/sites/default/files/cps_234_july_2019_for_public_release.pdf). The APRA page shows no later version. Confirmed: every paragraph number from 13 to 36, 72 hours, 10 business days, the information asset definition, the objective quote, the third-party footnotes, the 1 July 2020 transition, the CPS 230 cross-references and the ASD AI guidance content.
- "It is guidance, not binding, but assessors use it" (can't be verified) → "It is guidance, not a binding requirement, but it shows where APRA's supervisors continue to find weaknesses" (CPG 234 introduction).

## apra-cps-230-ai-vendors (32 claims checked)
Checked against the current CPS 230 (made 23 April 2026, F2026L00475, in force 1 July 2026), the APRA 30 April 2026 media release, and the consultation page (the 13 April 2023 timeline and the 17 July 2023 final release). Confirmed: the critical operations and material service provider minimum lists, the 3 tolerance limits, fourth parties, the formal agreement terms, the offshoring definition, the 20 business day, 72 hour and 24 hour notices, and the annual register.
- FAQ: "exempt specific categories listed in an attachment" → now says the exemption covers only some contract requirements, and only where the provider is in a listed category AND the arrangement uses standardised terms or has no formal agreement (CPS 230, exemption paragraph and Attachment).
- Neither APRA page refers to an APRA AI letter of 30 April 2026. The 30 April 2026 date on this page is the date of the CPS 230 amendment release, which is correct.

## irap-explained (27 claims checked)
Confirmed against ASD's IRAP page, the consumer guide, the cloud services page, the IRAP Common Assessment Framework PDF (April 2025), the ISM page (the September 2026 edition is current) and the Hosting Certification Framework (registration paused from 3 November 2025).
- Control outcome list: "not visible" → the CAF's actual terms, adding "not assessed" and "no visibility".

## essential-eight-software-development (30 claims checked)
The November 2023 maturity model is still current, and ASD's assessment guide (October 2024) is written against it. Confirmed: the patch timings and scan frequencies, all MFA requirements by level, the 12 month and 45 day privileged access rules, just-in-time administration, backup rules, the "no requirement for independent certification" statement, the "makes it much harder for adversaries" quote, FIDO2/WebAuthn, the removed customer opt-out, and the effective or alternate control rule. No changes.

## selling-software-to-australian-government (36 claims checked)
Checked against CPRs 17 November 2025 (PDF): $125k / $400k thresholds, GST inclusive, paras 5.4 and 5.5, Appendix A item 17 ($500k SME), 25% and 40% SME targets, 42 day reporting, 25 and 10 day time limits, the Australian business and SME definitions, and "first time in 20 years". NSW ICT Services Scheme: PBD-2021-04, always open, Core& up to $1m, MICTA/ICTA. Victoria's Digital Marketplace: only buyers can create accounts.
- BuyICT table, Digital Marketplace Panel 2: "Module 2 is opt-in for ..." → "Opt-in for ..." (the DTA lists the whole panel as opt-in: https://www.dta.gov.au/our-initiatives/buyict).
- AusTender returned 403 to the bot. The URL is correct.

## Needs expert review
1. R&D cost page worked example: it uses the 2025-26 base rate entity rate for work done in the 2026-27 income year, and it assumes the company is a profitable base rate entity. A registered R&D tax agent should confirm the framing (for example, the loss-company trade-off paragraph).
2. R&D pages: the claim that "most trusts" can't be R&D entities, and the treatment of mixed-purpose software under the internal administration exclusion, are simplified. A tax agent should confirm.
3. R&D pages: the announced 2028 changes may be amended when legislation is introduced. Re-check once a bill is released.
4. CPS 230 page: the AI use materiality table (for example, fraud monitoring mapped to payments) is editorial judgement, not APRA text. An APRA specialist should review it.
5. CPS 234 page: the contract practice of vendor notice "often within 24 hours" is market practice, not a rule.
6. Selling to government page: the listed panels and their mandates change when panels are refreshed. Re-check BuyICT before each update.
