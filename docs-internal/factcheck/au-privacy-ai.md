# Fact-check report: au-privacy-ai

Checked 28 September 2026 against primary sources: the Privacy and Other Legislation Amendment Act 2024 as made (the authorised PDF from legislation.gov.au), OAIC guidance pages and the May 2026 ADM issues paper, AGD Citizen Space, industry.gov.au, ai.gov.au (NAIC) and digital.gov.au (DTA policy v2.0 pages). Every source URL on all 7 pages returned HTTP 200 and matched the page described. `node scripts/check-content.mjs` passes on all 7 files. No em or en dashes, no github.com links, no breaches of the company truthfulness rules found.

Totals: about 212 claims checked, 6 edits across 3 pages, 4 pages unchanged.

## 1. privacy-act-automated-decision-making (about 32 claims)

Confirmed: Part 15 commencement (table item 7: the day after 24 months from Royal Assent, 10 December 2026); Royal Assent 10 December 2024; Schedule 1 Parts 1 to 14 on 11 December 2024; Schedule 2 tort by default on 10 June 2025; APP 1.7 to 1.9 wording, including 1.9(d) examples; item 89 application clause; item 87 adds APP 1.7 to s 13K(1)(b)(iia); OAIC APP 1 chapter updated 3 October 2025; issues paper 18 May 2026; consultation closed 15 June 2026; edge cases (generative AI with human oversight, differential pricing, discriminatory targeted job ad); AGD ADM consultation tied to Robodebt Royal Commission recommendation 17.1.

Changes:
- FAQ penalty. Before: "a civil penalty provision with a maximum of 200 penalty units per contravention," After: "... per contravention (up to five times that for a body corporate under the Regulatory Powers Act),". Reason: s 13K(4) sets 200 penalty units, but Regulatory Powers Act s 82(5) allows a body corporate up to 5 times that, so the old line understated the maximum for companies. Source: https://www.legislation.gov.au/C2024A00128/asmade/text (s 13K(4)).
- FAQ guidance timing. Before: "It said it intended to publish that guidance before commencement." After: "Its issues paper said it intended to release that guidance by September 2026, before commencement." Reason: made specific and matched to the source ("The OAIC intends to release guidance by September 2026, prior to commencement"). Source: https://www.oaic.gov.au/__data/assets/pdf_file/0027/263925/ADM-Issues-Paper.pdf

Needs expert review:
- Whether the OAIC's final ADM guidance has come out (it was due by September 2026). Web search was unavailable, so I couldn't confirm it. If it has, update the FAQ and timeline.
- The "Likely in scope?" table is the author's own reading, and the page labels it as illustrative. A privacy lawyer should check it against the final OAIC guidance.

## 2. privacy-act-and-ai (about 26 claims)

Confirmed: both OAIC AI guidance documents published 21 October 2024; the best practice advice against entering personal information into publicly available generative AI tools; inferred, incorrect or generated information (hallucinations, deepfakes) counts as personal information and is a collection under APP 3; the developer guidance says updating a privacy policy alone will generally not be enough to change reasonable expectations; publicly available data isn't automatically usable for training; sensitive information such as images generally needs consent; PIA recommended; the Australian Government Agencies Privacy Code PIA requirement; APP 11.3 from 11 December 2024; s 26GC Children's Online Privacy Code due within 24 months of Royal Assent; tort from 10 June 2025.

Changes: none.

Needs expert review: none specific. At publication the Children's Online Privacy Code still had to be registered by 10 December 2026. Check its status at the next update.

## 3. is-there-an-ai-act-in-australia (about 34 claims)

Confirmed: National AI Plan published 2 December 2025; both quotations match the "Keep Australians safe" chapter word for word; AISI's three goals and its ASD and CSIRO partners; VAISS dated 5 September 2024; Guidance for AI Adoption 21 October 2025; AI Ethics Principles 7 November 2019; DTA v1.1 took effect 1 September 2024 and v2.0 15 December 2025; the NAIC "AI and Australian law" summary, including Fair Work consultation and state workplace surveillance laws; EU AI Act Article 2 scope; EU application dates have been amended (the Explorer shows the amended Article 2 and revised 2027/2028 dates).

Changes:
- FAQ "Which laws apply". Before: "directors' duties and sector rules such as APRA's prudential standards and the Security of Critical Infrastructure Act." After: "directors' duties, competition and criminal law, and sector rules such as financial services laws and the Security of Critical Infrastructure Act." Reason: the answer is framed as "the government's own summary lists", and that summary names "sector specific laws (e.g. financial services)", not APRA prudential standards. It also lists competition and criminal law. Source: https://www.ai.gov.au/staying-safe-and-responsible/ai-and-australian-law

Needs expert review: none.

## 4. guidance-for-ai-adoption (about 30 claims)

Confirmed: published 21 October 2025; it "evolves" the VAISS and the 8 Ethics Principles (DISR wording); the six practice names; the audiences for the foundations and implementation versions; the DEV, DEP and GPAI tags; action numbers and content for 1.2.2, 2.2.2, 3.1.3, 4.1.1 (register fields), 4.3, 5.1.5, 5.4 (Essential Eight), 6.1.2 and 6.2 (including 6.2.4 alternative pathways); the implementation guidance shows "Published 05 May 2026"; the AI policy, risk screening and AI register templates; the marketing email vs job application example; all 10 VAISS guardrail names.

Changes (the National AI Plan doesn't "name" the guidance as the government's framework; it says the six practices "will underpin new tools and resources, offering a coherent framework"). Source: https://www.industry.gov.au/publications/national-ai-plan/keep-australians-safe
- Takeaway. Before: "the National AI Plan names it as the government's framework for responsible AI adoption" After: "the National AI Plan says its six practices will underpin the government's new responsible AI tools and resources".
- Body. Before: "then named it as the government's framework for encouraging responsible adoption, and said the six practices will underpin new NAIC tools and resources." After: "then said the six practices will underpin new NAIC tools and resources, describing them as a coherent framework adaptable to different audiences."
- Timeline row. Before: "National AI Plan names the guidance as the framework for responsible adoption" After: "National AI Plan says the six practices will underpin new NAIC tools and resources".

Needs expert review: the guardrail to practice mapping is the author's own and is labelled "not an official crosswalk". No action needed.

## 5. australian-ai-ethics-principles (about 22 claims)

Confirmed: 8 principles and their names, published 7 November 2019 (page updated 2 December 2025); the page carries the 21 October 2025 "evolves" notice; the one-line summaries and the detail on fairness groups, transparency (two parts), contestability (access to the information and inferences used) and accountability; the essential practices "align with Australia's AI Ethics Principles"; DTA preparedness requirement "a way to inform staff who are designing and implementing AI use cases about Australia's AI Ethics Principles"; the NAIC law summary points.

Changes: none.

Needs expert review: none.

## 6. dta-ai-policy-government (about 38 claims)

Confirmed against the DTA v2.0 pages: effective 15 December 2025, replacing v1.1 of 1 September 2024; applies to NCEs under the PGPA Act, corporate entities encouraged; defence portfolio and NIC carve-outs; 6-month strategic position; 12-month requirements (use case owners, register, operationalising, training, beginning assessments); register shared with the DTA every 6 months; existing use cases by 30 April 2027, with the "where practicable, implement ahead of deadlines" wording; impact assessment tool or an equivalent internal process; high-risk requirements and 12-month review; asking vendors for update information through contracts; accountable official requirement first took effect 30 November 2024 (v1.0); transparency statements first required 28 February 2025; transparency statement contents and annual review; the five Appendix C criteria, the careful-attention areas, the incidental use (grammar checks) and early experimentation exclusions; minimum register fields; technical standard and procurement guidance "strongly recommended".

Changes: none.

Needs expert review: none. The dates "about 15 June 2026" and "about 15 December 2026" are the author's own calculations from the effective date, and the page says so.

## 7. notifiable-data-breaches-software (about 30 claims)

Confirmed: 1,113 notifications in 2024 (518 + 595) from the July to December 2024 report; Part IIIC; the 22 February 2018 start; s 26WE eligibility limbs; "likely" means more probable than not, judged by a reasonable person in the entity's position; the wrong-recipient remedial action example; s 26WC deemed holding after APP 8.1 disclosure; s 26WH 30-day assessment; the Commissioner treats 30 days as a maximum; s 26WK(3) contents; s 26WL notification options; published statement generally available for at least 6 months; the entity with the most direct relationship should notify; coverage of CRBs, credit providers and TFN recipients; s 13K(2) and infringement notices; eligible data breach declarations (ss 26X to 26XH) and APP 11.3 both commenced 11 December 2024.

Changes: none.

Needs expert review: none.
