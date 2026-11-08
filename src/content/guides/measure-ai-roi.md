---
title: "How to measure the ROI of an AI project"
metaTitle: "How to Measure AI ROI: A Method You Can Actually Run"
description: "A practical method for measuring AI ROI in an Australian business: baseline the task, count every cost in AUD, separate time saved from money saved."
eyebrow: "How to guide"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "Measure the ROI of an AI project the same way you would measure any process change: record how long the task takes and how often it goes wrong before AI touches it, run the AI version on the same work, and compare. Count every cost in AUD, including the staff time spent checking outputs and the monthly running costs, not just the build. Then convert time saved into money only when the freed hours are actually redeployed or a cost actually falls. A result that cannot be traced back to a baseline is a claim, not a return."
takeaways:
  - "Measure the baseline first: volume, time per item, error rate and cycle time for one workflow, recorded before the pilot starts."
  - "Count review time as a cost. A tool that drafts in seconds but needs five minutes of checking has not saved five minutes."
  - "Time saved is not money saved. Hours only become dollars when they are redeployed to paid work or a real cost goes away."
  - "Run the pilot as an experiment, with a comparison group or a before and after period on the same kind of work."
  - "Report a range to the board, with the assumptions written down, rather than a single headline multiple."
faqs:
  - q: "What is a good ROI for an AI project?"
    a: "There is no reliable benchmark, because published AI ROI figures rarely state their baseline or method. A better test is whether the project pays back its build cost within a period your business accepts for other investments, often 12 to 24 months, under conservative assumptions about how much freed time is actually redeployed."
  - q: "How do you calculate AI ROI?"
    a: "ROI is net benefit divided by total cost over a stated period. Net benefit is the measured improvement against the baseline, converted to dollars, minus the total cost. Total cost includes build, licences, model usage, hosting, staff review time, training and ongoing maintenance."
  - q: "How long should an AI pilot run before we measure ROI?"
    a: "Long enough to cover normal variation in the work, which for most business processes means four to eight weeks of real volume. Exclude the first week or two, when staff are still learning the tool, from the steady state figures but include its cost."
  - q: "Should we include the R&D Tax Incentive in the business case?"
    a: "Only as a separate, conditional line. Some AI projects involve genuine experimental work that may be eligible, but eligibility depends on the activities and records, and the government has announced program changes from 1 July 2028. Ask a registered R&D tax agent before relying on it."
  - q: "Is there an AI ROI calculator we can use?"
    a: "A spreadsheet with the inputs on this page works better than a generic calculator: monthly volume, minutes per item before and after, review minutes, error rates, loaded hourly cost, redeployment percentage, build cost and monthly running costs. Generic calculators usually assume all saved time becomes money, which overstates the return."
  - q: "What if the benefit is quality or risk rather than time?"
    a: "Measure it directly: errors per hundred items, rework hours, complaints, missed deadlines or compliance exceptions. Put a dollar value on each only where you can trace the cost, such as rework hours or penalty fees, and report the rest as measured but unpriced."
sources:
  - title: "Harnessing data and digital technology: final inquiry report"
    url: "https://www.pc.gov.au/inquiries-and-research/data-digital/report/"
    publisher: "Productivity Commission"
  - title: "Australian AI Adoption Tracker report shows business harnessing AI"
    url: "https://www.minister.industry.gov.au/t-ayres/media/australian-ai-adoption-tracker-report-shows-business-harnessing-ai"
    publisher: "Minister for Industry and Innovation"
  - title: "REP 798 Beware the gap: Governance arrangements in the face of AI innovation"
    url: "https://www.asic.gov.au/regulatory-resources/find-a-document/reports/rep-798-beware-the-gap-governance-arrangements-in-the-face-of-ai-innovation/"
    publisher: "ASIC"
  - title: "Guidance for AI adoption: implementation guidance"
    url: "https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-implementation-guidance"
    publisher: "National AI Centre"
  - title: "Research and Development Tax Incentive"
    url: "https://business.gov.au/grants-and-programs/research-and-development-tax-incentive"
    publisher: "business.gov.au"
  - title: "Tax reform: better targeting the Research and Development Tax Incentive"
    url: "https://www.ato.gov.au/about-ato/new-legislation/in-detail/businesses/tax-reform-better-targeting-the-research-and-development-tax-incentive"
    publisher: "Australian Taxation Office"
related:
  - title: "AI development cost in Australia"
    href: "/guides/ai-development-cost-australia"
  - title: "LLM running costs explained"
    href: "/guides/llm-running-costs"
  - title: "How to evaluate an LLM application before launch"
    href: "/guides/llm-evaluation"
  - title: "R&D Tax Incentive for AI projects"
    href: "/guides/rd-tax-incentive-ai-projects"
  - title: "From AI pilot to production"
    href: "/guides/ai-pilot-to-production"
service:
  title: "AI readiness assessment"
  href: "/services/ai-readiness-assessment"
---

## Why most AI ROI claims cannot be checked

**Most AI ROI figures cannot be checked because they have no baseline: nobody recorded how long the work took, or how often it went wrong, before the AI arrived.** Without that number, "saves 10 hours a week" is an estimate from the people who bought the tool.

The macro picture is genuinely positive, which is part of the problem. The Productivity Commission's final report on data and digital technology, released in December 2025, considers labour productivity growth of about 4.3% over the next decade likely from AI, roughly $116 billion of extra GDP, while stressing considerable uncertainty about the size. The National AI Centre's AI Adoption Tracker reported in June 2025 that 41% of small and medium enterprises were adopting AI. Neither figure tells you whether *your* project will pay. That needs a measurement you run yourself.

Regulators see the same gap from the governance side. ASIC's REP 798 reviewed 624 AI use cases across 23 financial services licensees and found that 57% were less than two years old or still in development, and that in some cases governance lagged adoption. Projects that move fast without measurement are hard to defend later, to a board or to a regulator.

## Step 1: pick one workflow and measure it before you change it

**Choose a single, repeated task with a clear start and end, and measure it for two to four weeks before the pilot begins.** Good candidates have high volume, consistent inputs and an existing quality check: invoice coding, enquiry triage, first drafts of quotes, document summaries, claims intake.

Record five numbers for the baseline:

1. **Volume:** items per week or month.
2. **Handling time:** minutes of staff time per item, from a sample or system timestamps, not from memory.
3. **Cycle time:** elapsed time from arrival to completion, which is what customers feel.
4. **Error rate:** items that needed rework, were wrong when checked, or caused a complaint.
5. **Cost per hour:** a loaded hourly cost for the people doing the work, covering wages, super, payroll tax and overheads. Write the assumption down.

If you can't measure the baseline, you have learned something useful: the workflow is not yet defined well enough for AI, and the first job is to define it.

## Step 2: decide which benefits count

**Count only benefits you can measure against the baseline, and keep them in separate columns.** Mixing them hides which one is doing the work.

| Benefit type | How to measure it | When it becomes dollars |
|---|---|---|
| Staff hours | Handling minutes per item, before and after | When hours are redeployed or a cost (overtime, temp staff, a hire) is avoided |
| Errors and rework | Errors per 100 items; rework minutes | When rework hours or error costs (credits, penalties) fall |
| Speed | Cycle time, response time | When faster turnaround wins work or reduces churn you can trace |
| Revenue | Conversion rate on the affected step | Only with a comparison group; otherwise report as unpriced |
| Risk | Exceptions, near misses, audit findings | Rarely priced; report as a measured change |

Speed and revenue benefits are real but the easiest to overclaim. If quotes go out in one hour instead of one day, track the win rate for the AI period against the same months last year, and say plainly if the sample is too small to be sure.

## Step 3: count all the costs

**A full cost line includes the build, every monthly running cost, and the staff time spent checking the AI's work.** Review time is the cost most business cases leave out, and it is often the largest.

- **Build or setup:** development, integration with your systems, testing. See [AI development cost in Australia](/guides/ai-development-cost-australia) for typical ranges.
- **Model usage:** tokens or per call fees, which scale with volume and prompt size. [LLM running costs explained](/guides/llm-running-costs) shows how to estimate them.
- **Licences and hosting:** seats, vector databases, logging, cloud hosting.
- **Review time:** minutes per item a person spends checking or correcting output. Measure it in the pilot; don't assume it.
- **Change management:** training, updated procedures, the productivity dip in the first weeks.
- **Maintenance:** prompt and model updates, evaluation reruns, fixes when an upstream system changes. Budget it monthly.

## Step 4: separate time saved from money saved

**Time saved becomes money only when the freed hours are used for paid work or a cost actually disappears.** If a team saves 100 hours a month and spends them on slightly longer lunches, the business saved nothing.

So add one more assumption to the model: the **redeployment rate**, the share of saved hours that turns into value. Base it on a named plan. For example, the accounts team will absorb 20% more volume without the planned hire, or the two hours a day saved on triage go to outbound follow up with a target attached. Without a plan, use a low rate, and report the full time saving separately as capacity.

## Step 5: run the pilot as an experiment

**Treat the pilot as a test with a hypothesis, a measurement period and a decision rule set in advance.** The Guidance for AI Adoption makes the same point from the governance side: define acceptance criteria before deployment, test against them, and monitor performance afterwards.

- Write the hypothesis: "AI drafting cuts handling time per enquiry from 9 minutes to 4, with no rise in error rate."
- Use the same kind of work as the baseline, ideally with a comparison group still doing it the old way.
- Exclude the first one or two weeks from the steady state numbers, while still counting their cost.
- Check quality on a sample with someone who didn't do the work, using an [evaluation set](/guides/llm-evaluation) where the output can be scored.
- Decide beforehand what result means scale, adjust or stop.

## A worked business case

**The example below is hypothetical, with round numbers chosen to show the arithmetic.** It is not a client result or a quote. All figures are AUD, ex GST.

A business processes 1,500 supplier invoices a month. The baseline shows 6 minutes of handling per invoice, or 150 hours a month, at a loaded cost of $55 an hour. In the pilot, AI extracts and codes each invoice, and staff review it in 2 minutes. That is 50 hours, a saving of 100 hours a month, worth $5,500 if all of it is redeployed.

| Line | Year 1 | Year 2 |
|---|---|---|
| Hours saved (months 1 and 2 at half rate) | 1,100 | 1,200 |
| Benefit at $55/hour, 100% redeployed | $60,500 | $66,000 |
| Build and integration | $40,000 | $0 |
| Model usage, hosting and maintenance ($1,200/month) | $14,400 | $14,400 |
| Training and procedure updates | $3,000 | $0 |
| **Total cost** | **$57,400** | **$14,400** |
| **Net benefit, 100% redeployed** | **$3,100** | **$51,600** |
| Net benefit, 60% redeployed | ($21,100) | $25,200 |

At full redeployment, the project roughly pays back in the first year and returns about 76% on its two year cost of $71,800. At 60% redeployment, year 1 is negative and the two year net is about $4,100: still positive, but thin. The redeployment assumption, not the AI, decides whether this is a good investment. That is why it belongs in front of the board, not in a footnote.

Two further checks make the case honest. Run a sensitivity line on review time: if checking takes 3 minutes instead of 2, the saving falls by a quarter. And if the error rate also fell, show the rework hours saved as a separate line rather than folding them into the headline.

## The R&D Tax Incentive belongs in a separate line

**Show any R&D Tax Incentive benefit as a conditional line below the main case, never inside it.** The incentive offsets some costs of eligible research and development, but routine integration of an existing AI service is unlikely to qualify, and eligibility depends on the activities and the records kept. The government also announced changes in the 2026 to 27 Budget that take effect from 1 July 2028, including removing supporting R&D activities and raising the minimum expenditure from $20,000 to $50,000. Our guide to the [R&D Tax Incentive for AI projects](/guides/rd-tax-incentive-ai-projects) explains the test; a registered R&D tax agent should confirm any claim.

## Reporting results to a board

**Give the board one page: the baseline, the measured change, the full cost, the redeployment assumption and a range.** A single headline multiple invites the question you can't answer.

1. The workflow, its baseline numbers and the measurement period.
2. Measured results: handling time, review time, error rate, cycle time.
3. Total cost to date and the monthly run rate.
4. Net benefit at a conservative and an expected redeployment rate.
5. Quality and risk observations, including incidents and complaints.
6. The decision requested: scale, adjust or stop, with the next measurement date.

## How AWLabs approaches this

When a business asks us to build an AI feature, the Discovery Audit for AI work, our [AI readiness assessment](/services/ai-readiness-assessment), starts by choosing the workflow and agreeing how the baseline will be measured. That baseline then shapes the Schedule of Work, which sets a fixed price with three options (The Minimum, The Recommended and The Complete), so the cost side of the business case is known before the build starts. We build logging into the feature so handling and review time can be measured in production rather than estimated. If the numbers don't support a build, we say so. For the overall cost of a project, see [AI development cost in Australia](/guides/ai-development-cost-australia), and for a quick start without a custom build, [AI for small business in Australia](/guides/ai-for-small-business-australia).
