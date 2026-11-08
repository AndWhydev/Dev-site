---
title: "Food manufacturing software in Australia: traceability, allergen labels and recalls"
metaTitle: "Food Manufacturing Software in Australia: Trace and Recall"
description: "Food manufacturing software in Australia: lot traceability, PEAL allergen labels, country of origin calculations, FSANZ recall plans and DAFF NEXDOC exports."
eyebrow: "Industry solution"
published: 2026-11-08
updated: 2026-11-08
summary: "A food manufacturer's software has to answer one question fast: which batches contain this ingredient, and where did they go? FSANZ Standard 3.2.2 requires manufacturers, wholesale suppliers and importers to have a written recall plan and use it, and the plan needs batch codes, distribution lists and a record of how much food is unaccounted for. Most makers run an ERP or MRP such as Unleashed, Katana, MRPeasy, Business Central or SAP Business One; custom work fills gaps in fast tracing, PEAL label approval and country of origin calculations. Typical builds sit in an indicative $30,000 to $100,000 (AUD, ex GST) market range."
takeaways:
  - "Traceability that takes a day is a recall risk; aim to trace one step back and one step forward from any lot in minutes, and prove it with practice recalls."
  - "PEAL rules have applied since 25 February 2024, and the sell through period for older labels ended on 25 February 2026, so every label in market must now use the required allergen names and format."
  - "Priority foods made in Australia need the kangaroo symbol, a bar chart of Australian ingredients by ingoing weight and, for made in claims, a percentage statement."
  - "DAFF is moving export documentation from EXDOC to NEXDOC commodity by commodity, so third party export software needs a transition plan."
  - "Label checks, spec sheet reading and HACCP record review are good AI tasks, provided a qualified person approves every output."
faqs:
  - q: "What is the best food manufacturing software in Australia?"
    a: "For small and mid sized makers, an inventory and production system such as Unleashed, Katana or MRPeasy with batch tracking is a sensible base; larger plants often run Microsoft Business Central with a food add on, or SAP Business One. Food safety and supplier quality are often handled in a separate tool such as Ideagen Safefood 360. Choose on lot tracking depth, recipe and yield handling, and how easily you can export trace data."
  - q: "How fast should a trace or mock recall be?"
    a: "There is no single legal clock in the Food Standards Code, but FSANZ expects you to be able to stop distribution and sale of unsafe food quickly, and retailer quality schemes often set their own targets. A practical goal is a full one up, one down trace for any lot within an hour, with quantities reconciled. FSANZ recommends checking your recall plan works with a practice recall."
  - q: "Can software check our allergen labels?"
    a: "Software can compare a draft label against the recipe and ingredient specifications, confirm every allergen in the recipe appears with its required name in bold in the ingredients and in a summary statement starting with 'Contains', and flag anything missing. A qualified person should still approve the final artwork. The FSANZ allergen labelling page sets out the required names and format."
  - q: "How is the Australian ingredient percentage calculated?"
    a: "The bar chart and percentage on a priority food made in Australia show the minimum proportion of Australian ingredients by ingoing weight, under the Country of Origin Food Labelling Information Standard 2016. Software can calculate it from the recipe and the origin of each ingredient lot, but origin data has to be captured at receiving, and changes in supply have to trigger a label review."
  - q: "Have you built software for food manufacturers before?"
    a: "No. AWLabs has not delivered a project for a food manufacturer, so we won't claim sector experience. We bring data engineering, document processing and workflow skills, and your food safety and regulatory staff decide what each label and record must contain."
sources:
  - title: "Food recalls: information for food businesses"
    url: "https://www.foodstandards.gov.au/business/food-recalls"
    publisher: "Food Standards Australia New Zealand"
  - title: "Food Industry Recall Protocol"
    url: "https://www.foodstandards.gov.au/food-recalls/firp"
    publisher: "Food Standards Australia New Zealand"
  - title: "Allergen labelling"
    url: "https://www.foodstandards.gov.au/business/labelling/allergen-labelling"
    publisher: "Food Standards Australia New Zealand"
  - title: "Country of origin claims"
    url: "https://www.accc.gov.au/business/advertising-and-promotions/country-of-origin-claims"
    publisher: "ACCC"
  - title: "Country of origin food labelling"
    url: "https://www.accc.gov.au/business/advertising-and-promotions/country-of-origin-claims/country-of-origin-food-labelling"
    publisher: "ACCC"
  - title: "Next Export Documentation System (NEXDOC)"
    url: "https://www.agriculture.gov.au/biosecurity-trade/export/certification/nexdoc"
    publisher: "Department of Agriculture, Fisheries and Forestry"
  - title: "Food and Grocery Code of Conduct"
    url: "https://www.accc.gov.au/business/industry-codes/food-and-grocery-code-of-conduct"
    publisher: "ACCC"
  - title: "Ideagen Safefood 360"
    url: "https://www.safefood360.com/"
    publisher: "Ideagen"
  - title: "Custom software development cost in Australia 2026"
    url: "https://expeed.com.au/articles/custom-software-cost-australia-2026"
    publisher: "Expeed Software"
related:
  - title: "Wholesale distribution software in Australia"
    href: "/solutions/wholesale-distribution-software"
  - title: "3PL warehouse software in Australia"
    href: "/solutions/3pl-warehouse-software"
  - title: "Replace Excel or Access with a web app"
    href: "/guides/replace-excel-or-access-with-a-web-app"
  - title: "Build vs buy: custom software or off the shelf?"
    href: "/guides/build-vs-buy-software"
service:
  title: "Data engineering"
  href: "/services/data-engineering"
industry:
  title: "Manufacturing"
  href: "/industries/manufacturing"
disclaimer: "legal"
---

## Which systems does a food plant actually run?

**A typical food plant runs three kinds of system: an ERP or MRP for stock, recipes and production; a quality and food safety system; and a growing pile of spreadsheets for labels, specs and audits.** The first two are well served by products. The third is where traceability breaks down.

| System | Typical products | What it should own |
|---|---|---|
| ERP or MRP | Unleashed, Katana, MRPeasy, Business Central with a food add on, SAP Business One | Ingredients and lots, recipes, batches, stock, sales and despatch |
| Food safety and quality | Ideagen Safefood 360, scheme specific tools | HACCP plans, monitoring records, supplier approval, audits |
| Labels and specs | Often Word, Excel and email | Artwork versions, allergen and origin data, customer specifications |

The questions to ask before buying or building are concrete. Can you scan a finished goods lot and see every ingredient lot inside it? Can you scan an ingredient lot and see every customer who received product made with it? Is the allergen list on the label generated from the recipe, or typed by someone? If any answer is "we'd have to check the spreadsheet", that's the gap.

## Can you trace one step back and one step forward in minutes?

**Fast traceability depends on capturing lot numbers at three moments: receiving, production and despatch.** Everything else is reporting. Plants that struggle usually record lots at receiving and despatch but not at the weigh station, so the link between ingredient and batch is missing exactly when it matters.

A traceability build typically adds:

1. **Scanning at the point of use.** Operators scan each ingredient lot as it is added, with weights, on a tablet at the mixer or line.
2. **Rework and carry over.** Rework added to a later batch is a lot like any other and must be traced the same way.
3. **Trace queries.** A single screen that runs forward and backward from any lot, showing quantities produced, despatched, on hand and unaccounted for.
4. **Mock recall reports.** A timed trace with a reconciliation, saved as evidence for audits.

Most of this reads from and writes to the ERP; it doesn't replace it. Our [data engineering](/services/data-engineering) service covers the data model that keeps lot links intact across systems.

## What do PEAL allergen labels require from your data?

**Plain English Allergen Labelling requires every allergen to be declared using a required name, in bold, in the ingredients list and again in a separate summary statement that begins with "Contains".** FSANZ notes the new requirements came into force on 25 February 2024. Food packaged and labelled before that date under the old rules could be sold until 25 February 2026, so that window has now closed.

Details that change what software must hold:

- Required names are set out in the Food Standards Code, and individual tree nuts, molluscs and individual cereals must each be declared separately.
- Wheat must be declared as "wheat", and where gluten is present "gluten" must also appear in the summary statement.
- The bold allergen names in the ingredients list must be in a font size no smaller than other ingredients.
- The summary statement sits in the same field of view, directly next to the statement of ingredients.

That means allergen data has to be held at the level of each ingredient specification, using the required names, so a recipe change automatically shows which labels need review. A label approval workflow then routes each change through regulatory, quality and marketing sign off, stores every artwork version, and blocks a production run if the active label doesn't match the current recipe.

## How are country of origin labels calculated?

**Most food for retail sale in Australia must carry country of origin information under the Country of Origin Food Labelling Information Standard 2016, and the format depends on whether it is a priority or non priority food.** The ACCC's guidance explains that non priority foods need only a text statement. Priority foods grown, produced or made in Australia need a graphic and text label with the kangaroo in a triangle, a shaded bar chart showing the minimum proportion of Australian ingredients by ingoing weight, and a statement of whether the food was grown, produced or made here, with the percentage of Australian ingredients for made in claims.

The definitions matter. "Grown in" and "produced in" generally mean all the main ingredients come from that country and almost all processing happened there. "Made in" generally means the last substantial step in making the product happened there and changed it fundamentally from its imported inputs. A food that can't meet any of those can only claim "packed in".

For software, the calculation is simple once the data exists: recipe quantities by ingoing weight multiplied by the origin of each ingredient lot. The hard part is capturing origin at receiving and noticing when a supplier change shifts the percentage. A build that recalculates per batch and alerts when a product drops below the figure on its label is a common, valuable piece.

## What does FSANZ expect of your recall process?

**Under Standard 3.2.2, food manufacturers, wholesale suppliers and importers must be able to recall unsafe food, which means a written recall plan, using it when needed, and showing it to an authorised officer on request.** FSANZ's guidance lists what the plan should include:

| Recall plan element (FSANZ) | Where the data should come from |
|---|---|
| Who will recall your food and their responsibilities | Contact and role register |
| Who to contact, including the enforcement agency for your head office and FSANZ | Maintained contact list |
| Contact details of everyone the product has been sent to | Customer and despatch records |
| Product name, date mark, batch code and other identifiers | Production and labelling records |
| Arrangements for telling customers and the public, and a contact for questions | Communication templates |
| Arrangements to retrieve food returned to supermarkets or other outlets | Returns process |
| A system to record how much food was distributed and how much is unaccounted for | Traceability and stock records |

The Food Industry Recall Protocol, last revised in September 2024, adds the roles of business and government, recall classification and a decision flow for recall versus withdrawal. FSANZ also suggests a practice recall to test the plan. A software recall module that pulls the distribution list, quantities and identifiers for a lot in one action, and records every step with a timestamp, turns that test into a routine.

## What do retailer quality schemes and supplier audits add?

**Retailers and food service customers usually require certification to a recognised food safety scheme plus their own approved supplier requirements, and each audit asks for records you already hold in pieces.** The software opportunity is an audit pack: HACCP monitoring records, corrective actions, supplier approvals with certificate expiry dates, allergen controls and the latest mock recall, assembled from source systems rather than collected by hand the week before. Grocery suppliers should also keep their supply agreement records in order, since the mandatory Food and Grocery Code governs how large grocery businesses deal with them; our [wholesale distribution page](/solutions/wholesale-distribution-software) covers that.

## How do export certificates fit in?

**Export permits and certificates for prescribed goods go through DAFF systems, which are moving from EXDOC to NEXDOC one commodity at a time.** DAFF describes NEXDOC as supporting export permits required under the Export Control Act, certificates required by importing country authorities, and supporting certificates, with features such as a unique QR code on each certificate. Access is through DAFF's online portal or third party software, and DAFF tells exporters using third party software to discuss the transition with their provider. Exporters also need the right registered establishment arrangements for their commodity.

If your export paperwork is assembled from the ERP by hand, an integration that prepares certificate data from batch and shipment records, ready for the portal or your provider, removes a lot of retyping.

## Where does AI help a food manufacturer?

**AI is useful for reading and checking documents; it should never be the final approver on safety or labelling.**

- **Supplier spec sheets.** Extract allergens, origin and composition from supplier PDFs into ingredient records, with low confidence fields flagged.
- **Label checks.** Compare artwork text against the recipe and required allergen names before a human review.
- **HACCP records.** Read handwritten or scanned monitoring sheets, flag out of limit readings without a corrective action, and summarise trends.
- **Customer specs.** Match retailer specification requests against your current product data and highlight differences.

Our [AI document processing](/services/ai-document-processing) service explains how we measure extraction accuracy on your own documents first.

## What do food manufacturing builds cost?

**Indicative AUD market ranges, ex GST, not quotes.** They sit within the band Expeed publishes for Australian mid complexity custom software of $40,000 to $150,000, with smaller modules near the top of its $15,000 to $40,000 simple tool band.

| Build | Scope | Indicative range |
|---|---|---|
| Traceability and mock recall tool on ERP data | Point of use scanning, lot genealogy, forward and back trace, timed mock recall reports | $30,000 to $90,000 |
| Label and spec approval workflow with AI checks | Ingredient spec extraction, allergen and origin data, label versions, approvals, recipe change alerts | $40,000 to $100,000 |

Cost moves with how much lot data your ERP already holds, the number of production lines needing scanning, and how many label formats you manage. If the starting point is a set of spreadsheets, our guide on [replacing Excel with a web app](/guides/replace-excel-or-access-with-a-web-app) helps frame it.

## How AWLabs would work with a food manufacturer

First comes a Development Consult, often about how long your last mock recall took and where the data came from. A paid Discovery Audit then walks your receiving, production and despatch records and your label process, and you get a fixed price Schedule of Work in three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build, with updates every Tuesday and Friday.

We have not built software for a food manufacturer before, and we don't make food safety decisions; your quality and regulatory staff own them. Related reading is on our [manufacturing](/industries/manufacturing) page.
