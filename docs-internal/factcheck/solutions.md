# Fact-check report: solutions batch

Checked 28 September 2026 against primary sources (APRA, ICA Code PDF, TPB, Xero developer site, legislation.gov.au, TGA, Ahpra, OAIC, VLSB+C, NSW Supreme Court, DTA, ASD, PSPF, HCF, BuyICT, NSW Building Commission, QBCC, WA Gov, Safe Work Australia, NHVR, ACNC, ASQA, DEWR, NCVER, USI Registrar). All 11 files pass `node scripts/check-content.mjs`. No em or en dashes, no github.com links, no invented clients, outcomes, certifications or panel claims found. All pages label costs as typical Australian market ranges, not quotes. `published`/`updated` untouched.

Totals: about 307 claims checked across 11 pages; 21 corrections made (on 9 pages; government and construction needed none). Before -> after, with source, per page below.

## ai-for-financial-services (claims ~32)
- CPG 235 dimensions: added "fitness for use" (takeaway + table). Source: CPG 235 para 16 https://www.apra.gov.au/system/files/CPG-235-Managing-Data-Risk.pdf
- "it names seven areas" -> "Its expectations can be grouped into the seven areas below" (letter has no numbered seven; expectations sit under board + four observation headings). https://www.apra.gov.au/apra-letter-to-industry-on-artificial-intelligence-ai
- CPS 230 source URL redirected to consultation page -> https://www.apra.gov.au/standards/cps-230
- "Azure AI Foundry" -> "Microsoft Foundry (formerly Azure AI Foundry)" (renamed Nov 2025)
- Duration "12 to 24 weeks" -> "13 to 23 weeks" (sum of phase durations 3+6+4 to 5+10+8)
- Truthfulness: "evidence about the system we built" -> "the system we build for you" (avoid implying past delivery in the sector).
- Confirmed: letter date 30 Apr 2026, late 2025 engagement; CPS 234 1 Jul 2019, 72h; CPS 230 1 Jul 2025, pre-existing contracts earlier of renewal or 1 Jul 2026; REP 798 Oct 2024, 23 licensees; ADM 10 Dec 2026; cost phases sum 120k-400k; worked example 90k+72k+25k=187k.

## insurance-claims-automation (claims ~28)
- Code table header: added that a redrafted Code went to public consultation in mid 2026 (submissions 24 Jun to 21 Jul 2026). https://insurancecouncil.com.au/cop/
- Row 1: para 68's 10 business day commitment is conditional; "Within 10 business days of receiving a claim, tell..." -> "Where further information or assessment is needed, within 10 business days..." (Code 2023 para 68) https://insurancecouncil.com.au/wp-content/uploads/2023/11/2023-COP_UPDATE_October_FINAL.pdf
- "Worked example at the midpoint" -> "within the range" ($160k is not the midpoint of $100k to $300k)
- CPS 230 source URL -> https://www.apra.gov.au/standards/cps-230
- Confirmed: Code last updated Oct 2023; paras 70 (20 BD updates), 76 (10 BD after all info), 77 (4 months), 81 to 82 (written reasons, right to info/reports), part 15 investigation standards; phase sums 100k-300k, 12-20 weeks; 81k+54k+25k=160k; ADM 10 Dec 2026.

## ai-for-accounting-firms (claims ~26)
- Xero terms "updated in 2026" -> effective 4 Dec 2025 (new developers) / 2 Mar 2026 (existing) (takeaway and table). https://developer.xero.com/pricing
- 2024 Determination: "ensuring services provided on your behalf are competent" (that is Code item 7, not new) -> "ensuring those who provide services on your behalf have sufficient knowledge and skills". https://www.tpb.gov.au/supervision-competency-and-quality-management
- Cost range: table max is $180k build + $25k discovery, so "6 to 16 weeks, $40k to $180k including discovery" -> "6 to 19 weeks, $40k to $205k including discovery" (body and summary).
- Confirmed: Code item 6 wording; TPB third parties include offsite/cloud storage; Determination dates 1 Jan 2025 / 1 Jul 2025 (100 or fewer employees); Xero tiers on connections and egress from 2 Mar 2026 replacing revenue share; XPM premium with security assessment; TFN Rule 2015; worked example 400 x $170 + $15k = $83k.

## ai-in-healthcare (claims ~30)
- Duration "12 to 24 weeks" -> "13 to 23 weeks" (sum of phase durations).
- Confirmed: MHR Act s77 entities, offshore hold/process bar, offence 5 years or 300 PU, civil 1,500 PU (compilation 1 Jul 2026) https://www.legislation.gov.au/C2012A00063/latest/text ; TGA scribe scope-creep example, deterioration prediction example, off-label use duty; 15 software exclusion categories, every function must qualify; CDSS exemption amendments effective 1 Nov 2026, no scope change (TGA news 8 Sep 2026); Ahpra informed consent and scribing wording; health service providers covered regardless of turnover; NSW HRIP, Vic HRA, ACT law; AU Core/AU Base; cost phases sum 90k-350k; worked example 75,600+45,000+25,000=145,600.

## ai-for-law-firms (claims ~27)
- Duration "10 to 20 weeks" -> "8 to 20 weeks" (smallest scope: 2 week discovery + 6 week precedent search). Low end of cost is $57k by table; "roughly $60,000" left.
- Confirmed: joint statement 6 Dec 2024 by Law Society of NSW, LPBWA, VLSB+C; ASCR r 9.1, r 4.1.4, rr 4.1.2 to 4.1.3, Uniform Law ss 172 to 173, ASCR r 12.2 as cited in statement; policy and supervision recommendations; billing wording. https://lsbc.vic.gov.au/news-updates/news/statement-use-artificial-intelligence-australian-legal-practice
- Confirmed SC Gen 23: issued 28 Jan 2025, commenced 3 Feb 2025; para 9A conditions, 9B permitted uses, paras 10 to 13 affidavits etc, 16 to 17 verification not solely by Gen AI, 20 leave for expert reports. Evidence Act ss 118 to 119. Worked example 420 x $175 + $18k = $91.5k.

## government-ai-and-software (claims ~34)
- No changes needed.
- Confirmed: DTA policy Version 2.0 effective 15 Dec 2025, NCEs with defence/NIC exceptions, CCEs encouraged; first new mandatory requirement 15 Jun 2026, rest Dec 2026; register, accountable owner, impact assessment, lifecycle/incident/reporting practices, mandatory foundational training (https://www.dta.gov.au/articles/ai-policy-update-strengthening-responsible-use-across-government); ISM September 2026 with cloud controls matrix template; PSPF Release 2026; Direction 001-2025 DeepSeek (4 Feb 2025), Direction 001-2024 FOCI; HCF pause from 3 Nov 2025, Strategic and Assured levels, scope (sensitive data, WofG, PROTECTED); BuyICT DMP2 modules, Cloud Marketplace Panel, Data Centre Panel 3 mandated for NCEs. Phases 155k to 420k over 17 to 31 weeks (4 to 7 months); pilot arithmetic 500 x $150 = $75k, 1,100 x $190 = $209k.

## construction-software-and-ai (claims ~26)
- No changes needed.
- Confirmed: NSW SOP 10 BD schedule, 15/20 BD payment, contracts from 21 Oct 2019 monthly claims, supporting statements, retention trust on projects over $20m (NSW Building Commission pages); Qld 15 BD schedule or earlier per contract, PTA/RTA eligibility; WA 2021 Act for contracts on/after 1 Aug 2022; model WHS laws everywhere but Vic; SWMS HRCW (falls over 2 m, load-bearing demolition), White Card. Worked example sums 12 to 20 weeks, $78k to $165k.
- Minor note (not changed): summary's "$40k to $150k focused module" range sits below the worked example's upper bound of $165k; both are labelled market ranges.

## logistics-software-development (claims ~28)
- "integration core and dashboards would sit around $60,000 to $165,000" -> "$67,000 to $165,000 including discovery" (12k+40k+15k = 67k; 25k+100k+40k = 165k).
- Confirmed: 2025 Amendment Package passed Qld Parliament 18 Nov 2025, amended HVNL commenced 1 Aug 2026, change areas (HVA/SMS, unfit to drive, work diaries, MDL, Euro VI) https://www.nhvr.gov.au/law-policies/hvnl-reform-implementation ; work diary transitional arrangements; 100 km standard hours rule, BFM/AFM/ACH/exemption any distance, local area record, 160 km primary produce exemption; 10 CoR functions, "more than half" and "sends or receives" rule of thumb; EWD Gen 2.0 framework with TCA, existing approvals remain; HVNL not commenced in WA/NT but applies to their vehicles in HVNL states; Privacy Act $3m threshold and employee records exemption.

## professional-services-knowledge-base (claims ~18)
- Summary "$60,000 to $180,000" -> "$75,000 to $195,000 ... including discovery" (phase table: 10k+35k+30k = 75k; 25k+80k+90k = 195k).
- Confirmed: OAIC AI products guidance (obligations on inputs and outputs, inferred/incorrect info is personal information, best practice not to enter personal/sensitive info into public gen AI tools); $3m small business threshold; APP 8; APP 1.7 to 1.9 from 10 Dec 2026. Source URLs resolve.

## ai-for-not-for-profits (claims ~24)
- Coverage table: "Related to a larger body covered by the Act, such as part of a global network" -> "A related body corporate of a larger organisation with turnover over $3 million" (OAIC wording is related bodies corporate; "global network" overstated it). https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/privacy-for-not-for-profits,-including-charities
- Summary range "$15,000 to $60,000" -> "$5,000 to $90,000" to match the cost ladder (rungs 2 to 4).
- Confirmed: $3m threshold and turnover definition; health service incl. club injury example; CSP; trading; opt in; coverage changes; funding risk; OAIC AI guidance; ACNC standards are principles, vulnerable beneficiaries extra steps, Standard 5 care and diligence; records seven years; ADM 10 Dec 2026.

## education-rto-software (claims ~34)
- Timeline row "10 July 2026 | NCVER announces..." -> "July 2026 | New Data Provision Requirements published, alongside the launch of NCVER's VET Information Standard website" (NCVER news says July 2026; specific day not verifiable). https://vetinformationstandard.ncver.edu.au/news-new-data-reporting-requirements-published
- DEWR source URL redirected; updated to https://www.dewr.gov.au/reporting-under-vet-information-standard
- Confirmed: DPR Amendment (Data Streamlining) Instrument 2026 commences 1 Oct 2026 (ASQA); VET data system requirement; quarterly due dates 30 Apr/31 Jul/31 Oct/31 Jan; direct (ACT, NSW, NT, SA, fee for service) vs indirect (Qld, Tas, Vic, WA) pathways (DEWR); 3 month notice, sample enrolment form, M2M/CIE/use-case testing (NCVER); 2025 Standards from 1 Jul 2025 with three components; USI verification for reporting and conferral, name + DOB, DPO kit before USI kit, RAM + standard myID, TSC v5.0 July 2022, STS, check character, mock data; PRISMS data items; National Code Std 8; 20 hours/week, two thirds face to face; ASQA 5 AI principles and multiple choice automation example.

## Needs expert review

- **ai-for-financial-services:** Whether a given LLM or AI platform provider is a material service provider under CPS 230, and what CPS 230 notification applies to a specific offshore or new arrangement, needs a prudential compliance call. The page already says so.
- **insurance-claims-automation:** ICA consulted on a redrafted General Insurance Code (24 June to 21 July 2026). Once the new Code is published, recheck the timeframe table (paras 68, 70, 76, 77, 81, 82 of the October 2023 Code) and the vulnerability and investigation rows.
- **ai-for-accounting-firms:** The TPB has no AI-specific guidance. The page applies its cloud and outsourcing guidance to AI providers by analogy. A tax practitioner or the TPB should confirm that approach is reasonable.
- **ai-in-healthcare:** Which feature sits on which side of the medical device line (the "likely treatment" table) is general guidance. Classifying a real product needs regulatory advice. s77 of the My Health Records Act also binds vendors acting for a covered entity (s77(1)(c) "cause or permit"), and the exact scope for a given architecture is a legal question.
- **ai-for-law-firms:** There is no Australian authority on whether processing through an enterprise AI tool keeps privilege intact. Only NSW SC Gen 23 was checked. Other courts (Federal Court, Vic Supreme Court and others) have their own notes, which the page mentions without detail.
- **construction-software-and-ai:** Only the NSW, Qld and WA details were verified. The Vic, SA, Tas, ACT and NT rows are generic by design. Check whether any NSW security of payment amendments pending in 2026 change the 10/15/20 business day figures.
- **logistics-software-development:** The fatigue record rules (100 km and 160 km) match NHVR's current pages, but those pages carry transitional notes for the amended HVNL. An NHVR or transport law expert should confirm the thresholds and local area record rules are unchanged after 1 August 2026. Workplace surveillance notice rules differ by state.
- **education-rto-software:** How transition timing interacts with state training authority requirements on the indirect pathway (Qld, Tas, Vic, WA) should be confirmed with each STA. Also confirm the National Code 2018 is still the operative instrument.
- **government-ai-and-software:** The HCF reform outcome is pending. Recheck when the registration pause lifts.
