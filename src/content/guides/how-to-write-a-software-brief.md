---
title: "How to write a software or app brief (with a template you can copy)"
metaTitle: "How to Write an App or Software Brief (With Template)"
description: "How to write a brief for an app or software developer: what to include, what to leave out, a worked example and a one page template you can copy and send."
eyebrow: "How to"
category: explainer
published: 2026-11-08
updated: 2026-11-08
summary: "A good software brief fits on one or two pages and answers six things: the problem and who has it, the one workflow that matters most, the systems it must connect to, what must be in version one versus later, any rules it has to follow (privacy, accessibility, industry regulation), and an honest budget range and deadline. You don't need technical specifications, screen designs or a feature list copied from a competitor. A developer needs enough to judge whether the project is feasible, roughly what it costs, and what to ask you next."
takeaways:
  - "Describe the problem and the people who have it before you describe any feature. Features are the developer's job to propose; the problem is yours to explain."
  - "Pick the one workflow that has to work on day one and describe it step by step. That paragraph is worth more than a list of 40 features."
  - "List every system the software must read from or write to. Integrations change cost more than screens do."
  - "Split must have from later. A version one that does one job well ships sooner and costs less."
  - "State a budget range and the reason behind your deadline. A developer who knows the constraint can design to it; one who doesn't will guess."
  - "Leave out passwords, customer data and anything you'd regret forwarding. Send it after an NDA if the idea is sensitive."
faqs:
  - q: "How long should a software brief be?"
    a: "One to two pages is enough for a first conversation. Longer briefs often bury the important parts. The detail comes later, in a scoping or discovery step, where the developer asks questions and writes the full scope with you."
  - q: "Do I need wireframes or designs before talking to a developer?"
    a: "No. Rough sketches or screenshots of tools you like can help explain what you mean, but polished designs before scoping often lock in decisions that should have been tested. A photo of a whiteboard sketch is fine."
  - q: "Should I include a budget in my app brief?"
    a: "Yes, as a range. Developers can propose very different solutions for $30,000 and $300,000, and without a range they'll either guess or ask. Stating it doesn't mean you'll be charged all of it; it lets the developer tell you early what is realistic."
  - q: "What is the difference between a brief and a scope of work?"
    a: "A brief is what you write to start the conversation: the problem, users, constraints and goals. A scope of work is what the developer writes after investigating: the features, integrations, assumptions, exclusions, milestones and price. The brief should be yours; the scope should be agreed by both of you."
  - q: "Should I sign an NDA before sending my brief?"
    a: "If the brief contains genuinely confidential information, such as a novel method, pricing or customer data, ask for one first. Many developers, including AWLabs, will sign a mutual NDA before the details are shared. A brief that only describes the problem and goals usually doesn't need one."
  - q: "Can I just send a list of features from an app I like?"
    a: "You can, but it's the weakest kind of brief. A competitor's features reflect their customers, their scale and years of iteration. Say which parts of that app matter to you and why, and the developer can work out what your version needs."
  - q: "What if I don't know which systems we use?"
    a: "Write down the names of every tool your team logs into for this work, even spreadsheets and email inboxes. The developer can work out which matter. Missing an integration until late in a project is one of the most common reasons costs move."
sources:
  - title: "Digital Service Standard"
    url: "https://www.digital.gov.au/policy/digital-experience/digital-service-standard"
    publisher: "Digital Transformation Agency"
  - title: "User stories with examples and a template"
    url: "https://www.atlassian.com/agile/project-management/user-stories"
    publisher: "Atlassian"
  - title: "Privacy impact assessments"
    url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/privacy-impact-assessments"
    publisher: "Office of the Australian Information Commissioner"
  - title: "Web Content Accessibility Guidelines (WCAG) 2.2"
    url: "https://www.w3.org/TR/WCAG22/"
    publisher: "W3C"
related:
  - title: "What is a software discovery phase?"
    href: "/guides/software-discovery-phase"
  - title: "How to protect an app idea in Australia"
    href: "/guides/how-to-protect-an-app-idea"
  - title: "How to choose a software development company"
    href: "/guides/how-to-choose-a-software-development-company"
  - title: "Software development contract checklist"
    href: "/guides/software-development-contract-checklist"
  - title: "Startup MVP development"
    href: "/startup-mvp"
  - title: "Is my app quote reasonable? How to compare software development quotes"
    href: "/guides/how-to-compare-software-quotes"
service:
  title: "Custom software development"
  href: "/services/custom-app-development"
---

## What does a good software brief contain?

**A good brief tells a developer what problem you're solving, for whom, under what constraints, and what success looks like, in plain language and on one or two pages.** It is the document that starts a conversation, not the contract that ends one.

The test of a brief is whether two different developers who read it would ask you broadly the same follow up questions. If they'd ask completely different things, something important is missing or ambiguous.

Here is what belongs in it, and roughly how much space each part deserves:

| Section | What it answers | Length |
|---|---|---|
| The problem | What is going wrong or missing today, and what it costs you | One paragraph |
| Who it's for | The people who will use it, and how many | A short list |
| The main workflow | The one journey that must work on day one, step by step | 5 to 10 steps |
| Systems | What it must connect to, read from or write to | A list |
| Version one vs later | What must ship first, and what can wait | Two short lists |
| Rules and risks | Privacy, accessibility, industry rules, security needs | A few lines |
| Budget and timing | An honest range, a date, and why that date | Two lines |
| Success | How you'll know it worked in six months | Two or three measures |

The Australian Government's Digital Service Standard opens with two criteria that make a good starting point for any brief, government or not: "Have a clear intent" and "Know your user". If your brief does those two well, the rest is detail.

## How do you describe the users and the job they need done?

**Name each type of user, say what they're trying to achieve, and describe their situation, not your solution.** "Our field staff" is a start. "Six field technicians who are on roofs most of the day, use their phones with gloves on, and currently text photos to the office" is a brief.

For each user type, write one line covering:

- Who they are and how many of them there are
- What they're trying to get done
- Where and on what device they'll use it
- What they use today, and what annoys them about it

User stories are a handy format if you like structure. Atlassian describes them as persona plus need plus purpose, as in "As a site supervisor, I want to sign off a job from my phone, so the office can invoice the same day." You don't need dozens. Five good ones beat fifty vague ones.

## Which workflow matters most?

**Pick the single journey that, if it worked perfectly, would make the project worth paying for, and write it as numbered steps.** Everything else in the brief is secondary to this.

A worked example, for a mobile dog grooming business:

1. A customer books online, choosing a service, a dog size and a time window.
2. The system checks which groomer covers that suburb and has a free slot.
3. The customer pays a deposit by card.
4. The groomer sees the booking in their day list with the address and dog notes.
5. On the day, the customer gets an SMS when the groomer is on the way.
6. The groomer marks the job done and adds photos.
7. The balance is charged automatically and a receipt is sent.
8. The booking and payment flow into Xero.

Those eight lines tell a developer about online booking, scheduling by area, payments, a staff mobile view, SMS, photo storage and an accounting integration. They are far more useful than "we want an app like Uber for dog grooming".

If you're building something new, the main workflow is usually the smallest thing that proves people will pay. Our guide to [MVP development costs](/guides/mvp-development-cost-australia) explains why cutting to that workflow often halves the budget.

## Which systems must it connect to?

**List every system involved, whether the new software needs to read from it, write to it or both, and who controls it.** Integrations are among the biggest drivers of cost and risk, and they're the thing most often missing from briefs.

| System | Read, write or both? | Who manages it | Notes |
|---|---|---|---|
| Xero | Write invoices, read payments | Our bookkeeper | We use tracking categories by region |
| Website (WordPress) | Embed booking form | Our web agency | |
| Stripe | Take payments | Us | Already have an account |
| Google Calendar | Read groomer availability | Each groomer | Personal calendars, not shared |
| Customer spreadsheet | One time import | Us | About 2,400 customers |

Include the awkward ones: the spreadsheet everyone relies on, the shared inbox, the old system nobody wants to touch. A developer would much rather know now. If an old system is the heart of the problem, say so; our guide to [replacing or rebuilding legacy systems](/guides/rewrite-vs-refactor-legacy-software) covers the options.

## What is a must have, and what can wait?

**Sort features into must have for version one, and later, and be ruthless about the first list.** A useful test for each item: if version one shipped without this, would anyone refuse to use it? If not, it's later.

| Must have for version one | Later |
|---|---|
| Online booking with deposit | Loyalty points |
| Groomer day list on mobile | Customer app (web booking is enough to start) |
| SMS on the way | Live map tracking |
| Xero invoices | Detailed reporting dashboard |
| Admin can move bookings | Automated rebooking reminders |

You'll often find the "later" list is longer. That's normal, and it's useful: it tells the developer how to design version one so the later features fit without a rebuild.

## What rules and risks should the brief mention?

**Flag any legal, regulatory or security requirement you already know about, even if you're not sure of the detail.** A developer can't design for a requirement they don't know exists.

Worth mentioning if they apply:

- **Personal information.** What you'll collect about customers or staff, especially health, financial or children's information. The OAIC recommends a privacy impact assessment for projects with significant privacy implications.
- **Accessibility.** If your users include the public, government or people with disability, say so. WCAG 2.2 is the current W3C accessibility guideline.
- **Industry rules.** Health records, financial services, NDIS, education, construction payment rules or anything your regulator checks.
- **Where data lives.** Whether customers or contracts require Australian hosting.
- **Customer requirements.** Any security questionnaire or standard a big customer has asked you to meet.

You don't need the answers. "We think the Privacy Act applies but aren't sure how" is a perfectly good line in a brief.

## How should you state budget and deadline?

**Give a budget range, the date that matters and the reason it matters.** "$60,000 to $90,000, live by 1 March because that's when our busy season starts" lets a developer propose a version one that fits. "ASAP, as cheap as possible" forces them to guess.

If you genuinely have no idea what software costs, read a market guide first, such as our [custom software cost guide](/guides/custom-software-development-cost-australia) or [app development cost guide](/guides/app-development-cost-australia), and pick the band that matches your ambition. Say whether the budget includes ongoing costs like hosting and maintenance, or only the build.

Also say how decisions will be made: who signs off, how quickly you can answer questions, and who the developer should talk to day to day. Slow decisions cost more time than most technical problems.

## What should you leave out of a brief?

**Leave out anything that is either a solution in disguise or a security risk.** Specifically:

- **Technology choices you don't have a reason for.** "Must be built in React Native" is fine if your team already maintains React Native apps. If it's from a blog post, leave it to the developer and ask them to justify their choice.
- **Detailed screen designs.** Rough sketches help; finished designs lock in decisions before anyone has tested them.
- **Passwords, API keys and real customer data.** Never in a brief. Share access later, securely, once you've engaged someone.
- **A competitor's feature list pasted wholesale.** Say what you like about it and why instead.
- **Genuinely confidential detail before an NDA.** Describe the problem first. Our guide on [how to protect an app idea](/guides/how-to-protect-an-app-idea) covers what an NDA does and doesn't protect.

## A one page software brief template you can copy

Copy this into a document, fill in what you can, and leave blanks where you don't know. Blanks are useful too: they tell the developer what to ask.

```
SOFTWARE BRIEF
Business:                     Contact:                    Date:

1. THE PROBLEM
What is going wrong or missing today?
What does it cost us (time, money, missed work, risk)?

2. WHO IT'S FOR
User type | How many | What they need to get done | Device and setting
          |          |                            |

3. THE MAIN WORKFLOW (the one that must work on day one)
1.
2.
3.
4.
5.

4. SYSTEMS IT MUST CONNECT TO
System | Read / write / both | Who manages it | Notes

5. VERSION ONE vs LATER
Must have for version one:
Later:

6. RULES AND RISKS WE KNOW ABOUT
Personal information collected:
Accessibility needs:
Industry rules or regulator:
Hosting or data location requirements:
Customer security requirements:

7. BUDGET AND TIMING
Budget range (ex GST):          Includes ongoing costs? Yes / No
Key date:                       Why that date matters:

8. HOW WE'LL KNOW IT WORKED (in six months)
1.
2.

9. PEOPLE
Decision maker:                 Day to day contact:
How fast we can answer questions:

10. ANYTHING ELSE
Tools we like and why / things we've tried / known constraints
```

## What happens after you send it?

**A good developer will reply with questions, not a price.** A fixed price from a one page brief is either padded to cover the unknowns or likely to change later. Expect a conversation first, then a paid scoping step that turns your brief into a proper scope.

At AWLabs, the first step is a Development Consult, a short call to talk through the brief, test whether the project makes sense and say what we'd need to know. If it does, a paid Discovery Audit investigates the systems, workflows and risks in your brief and produces a written scope; the fee is credited in full against the build. You then receive a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. Our guide to the [software discovery phase](/guides/software-discovery-phase) explains what that step produces, or you can [send us your brief](/contact) and we'll reply within one business day.
