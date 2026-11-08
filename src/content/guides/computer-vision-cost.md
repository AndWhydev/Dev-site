---
title: "How much does computer vision development cost in Australia? (2026)"
metaTitle: "Computer Vision Development Cost in Australia (2026)"
description: "Computer vision costs in Australia: vision API prices, custom models, labelling, edge hardware, privacy and surveillance law, plus a worked 3 year total."
eyebrow: "Cost guide"
category: cost
published: 2026-11-08
updated: 2026-11-08
summary: "A proof of concept that runs a cloud vision API over existing camera feeds typically works out at about $13,000 to $45,000 (AUD, ex GST). A custom trained detection model deployed on edge hardware at one site is closer to $55,000 to $150,000, and a multi site platform with alerts, dashboards and retraining starts around $200,000. These are worked estimates from an assumed agency day rate, not quotes. Running costs depend on whether images go to the cloud or are processed on site, and privacy and surveillance law applies as soon as cameras capture people or their faces."
takeaways:
  - "Off the shelf vision APIs are cheap per image, but continuous camera feeds turn small per image prices into real monthly bills."
  - "A hosted custom model in Amazon Rekognition Custom Labels is billed at US$4 an hour in Sydney while it runs, about US$2,920 a month if left on."
  - "Collecting and labelling images that represent your real conditions is often the hidden half of the budget."
  - "Edge devices cost a few hundred to a few thousand dollars each and avoid per image cloud fees for always on feeds."
  - "Facial images are sensitive information under the Privacy Act, and NSW requires notice, visible cameras and signs for camera surveillance of employees."
faqs:
  - q: "How much does it cost to build a computer vision system?"
    a: "As worked estimates at an assumed agency rate of $1,100 to $1,500 a day: a proof of concept on cloud APIs is about $13,000 to $45,000 ex GST, a custom model at one site with edge deployment about $55,000 to $150,000, and a multi site platform from about $200,000. Data collection, labelling and integration drive where you land."
  - q: "How much does Amazon Rekognition cost in Australia?"
    a: "At the time of writing, AWS's price list for Sydney shows image analysis at about US$1.20 to US$1.30 per 1,000 images for the first million a month, falling at higher volumes. Custom Labels inference is US$4 an hour while the model is running."
  - q: "What is the difference between a vision API and a custom vision model?"
    a: "A vision API recognises general things it was trained on, such as people, vehicles, text and safety equipment, with no training on your side. A custom model is trained on your own labelled images to recognise things specific to you, such as a defect on your product or a particular part."
  - q: "Do we need consent to use cameras with AI?"
    a: "It depends on what the system captures and who. If it identifies people by their face, the OAIC treats facial images and other biometric information as sensitive information, which generally requires consent. Camera surveillance of employees in NSW also needs written notice, visible cameras and signs. Get legal advice for your situation."
  - q: "How accurate is computer vision?"
    a: "Accuracy depends on your lighting, camera angles and how well training images match real conditions. Agree a target on a held back test set before the build, and measure false alarms as carefully as missed detections."
  - q: "Can computer vision run without the cloud?"
    a: "Yes. Models can run on edge devices on site, such as NVIDIA's Jetson range, sending only alerts and summaries to the cloud. That suits always on feeds, poor connectivity and sites that don't want video leaving the premises."
sources:
  - title: "Amazon Rekognition pricing"
    url: "https://aws.amazon.com/rekognition/pricing/"
    publisher: "Amazon Web Services"
  - title: "AWS Price List: Amazon Rekognition, Asia Pacific (Sydney)"
    url: "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonRekognition/current/ap-southeast-2/index.json"
    publisher: "Amazon Web Services"
  - title: "Jetson Orin Nano Super Developer Kit"
    url: "https://www.nvidia.com/en-au/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/"
    publisher: "NVIDIA"
  - title: "Bunnings breached Australians' privacy with facial recognition tool"
    url: "https://www.oaic.gov.au/news/media-centre/bunnings-breached-australians-privacy-with-facial-recognition-tool"
    publisher: "OAIC"
  - title: "Workplace Surveillance Act 2005 (NSW), section 10: Notice of surveillance required"
    url: "https://www.austlii.edu.au/au/legis/nsw/consol_act/wsa2005245/s10.html"
    publisher: "AustLII"
  - title: "Workplace Surveillance Act 2005 (NSW), section 11: Additional requirements for camera surveillance"
    url: "https://www.austlii.edu.au/au/legis/nsw/consol_act/wsa2005245/s11.html"
    publisher: "AustLII"
  - title: "Tech contractor day rates in Australia: the 2026 guide"
    url: "https://www.resourced.com.au/articles/contractor-day-rates-australia-guide-2026"
    publisher: "Re:Sourced"
  - title: "Exchange rates"
    url: "https://www.rba.gov.au/statistics/frequency/exchange-rates.html"
    publisher: "Reserve Bank of Australia"
related:
  - title: "AI integration"
    href: "/services/ai-integration"
  - title: "How much does AI development cost in Australia?"
    href: "/guides/ai-development-cost-australia"
  - title: "Construction software and AI"
    href: "/solutions/construction-software-and-ai"
  - title: "The Privacy Act and AI"
    href: "/guides/privacy-act-and-ai"
  - title: "From AI pilot to production"
    href: "/guides/ai-pilot-to-production"
service:
  title: "AI integration"
  href: "/services/ai-integration"
disclaimer: financial
---

## How much does a computer vision project cost?

**Most Australian computer vision projects fall into three bands: a proof of concept on cloud APIs, a custom model at one site, and a multi site platform.** We found no published Australian price guide for vision work, so these are worked estimates: typical effort multiplied by an assumed agency day rate of $1,100 to $1,500 ex GST. Re:Sourced's 2026 guide puts senior Sydney contractors at $800 to $1,150 a day depending on discipline, and says specialist AI work currently prices above the software band; an agency day carries management and testing on top.

| Project | Typical use | Typical effort | Worked estimate (AUD, ex GST) |
|---|---|---|---|
| Proof of concept on cloud vision APIs | PPE detection, people counting or text reading on existing camera feeds | 12 to 30 days | $13,200 to $45,000 |
| Custom trained model, one site, edge deployment | Defect inspection on a line, stock counting, a specific part or vehicle type | 50 to 100 days | $55,000 to $150,000 |
| Multi site platform | Several sites with alerts, dashboards, model monitoring and retraining | 180 to 350+ days | $198,000 to $525,000+ |

These are not AWLabs prices. We quote a fixed price after discovery and don't publish day rates.

## Vision API or custom model?

**Use an off the shelf API when the thing you need to see is common; train a custom model when it's specific to your business.** APIs from AWS, Azure and Google detect people, vehicles, text, faces and safety equipment out of the box. Amazon Rekognition, for example, includes a protective equipment detection API. A defect on your product, a particular pallet type or a weed in your crop needs your own labelled images.

| | Vision API | Custom trained model |
|---|---|---|
| Upfront cost | Low: integration and testing only | Higher: data collection, labelling, training, evaluation |
| Time to first result | Days | Weeks to months |
| Recognises | General objects and scenes | What you trained it on |
| Running cost | Per image or per minute of video | Per hour of hosted inference, or edge hardware |
| Best for | Common objects, early proof of concept | Specific defects, parts or conditions |

A sensible path is to try an API first. If it gets close enough, you have saved the cost of a custom model. If it doesn't, the proof of concept has given you the camera positions, sample images and accuracy target the custom build needs.

## Data collection and labelling: the hidden half of the budget

**A custom model is only as good as the images it learns from, and gathering images that represent real conditions takes longer than training.** Night shifts, rain, glare, dust, unusual angles and rare defects all need to be in the training set, or the model will fail on the day they happen.

A worked labelling estimate, with stated assumptions: 10,000 images, drawing boxes around objects at 30 to 90 seconds an image, at a fully loaded cost we assume at $45 an hour, is 83 to 250 hours, or about $3,750 to $11,250 for one pass. Add a second person checking a sample, and a further round when the first model shows what it gets wrong. If defects are rare, you may need to wait weeks to collect enough examples, which is a timeline cost as much as a dollar one.

## Edge hardware or cloud inference?

**For occasional images the cloud is cheapest; for always on camera feeds, processing on site usually wins.** The arithmetic shows why. These figures use AWS's Sydney price list at the time of writing and the RBA's 6 November 2026 rate of US$0.69 per A$1.

**Cloud, per image:** 8 cameras, one frame every 5 seconds, 10 hours a day, 30 days is about 1.73 million images a month. At US$0.0012 per image for the first million and US$0.00096 above that, the bill is about US$1,900, or roughly A$2,750 a month.

**Cloud, hosted custom model:** Rekognition Custom Labels charges US$4 per inference hour in Sydney. Left running all month (730 hours) that is US$2,920, about A$4,230. Running it only for 10 hours on 22 business days is 220 hours, about US$880 or A$1,275.

**Edge:** NVIDIA prices its Jetson Orin Nano Super Developer Kit at US$249 at the time of writing. A developer kit isn't a production unit; enclosures, power, mounting, networking and an industrial module add to that, so budget per site from your own installer's quote. Once installed, there's no per image fee, and video doesn't need to leave the site.

Edge brings its own costs: remote updates, device monitoring, replacing failed units and someone who can attend site. For two or three cameras with intermittent use, the cloud is often simpler. For a line or yard watched all day, the figures above suggest edge hardware costs less than per image cloud fees well within the first year.

## Privacy and surveillance law for cameras in Australia

**Once a camera system captures people, privacy law applies, and once it identifies them by face, it handles sensitive information.** In November 2024 the Privacy Commissioner found Bunnings breached Australians' privacy with a facial recognition system that captured the faces of everyone entering 63 stores in Victoria and New South Wales. The OAIC's announcement says the Privacy Act classes facial images and other biometric information as sensitive information, for which consent is generally required, and the determination also found failures in notice and in the privacy policy. Bunnings had the right to seek review.

Workplace cameras have their own rules. In NSW, the Workplace Surveillance Act 2005 requires written notice to employees at least 14 days before surveillance starts (section 10), unless an employee agrees to less. For camera surveillance, section 11 requires the cameras, or casings that indicate them, to be clearly visible and signs to be clearly visible at each entrance. Other states have their own surveillance laws.

Design choices that reduce both risk and cost:

- Detect objects, not identities, wherever the use case allows it.
- Process on the edge and send counts or alerts rather than video.
- Blur faces and number plates before storing frames for retraining.
- Keep retention short and write it down.
- Do a privacy impact assessment before installation, not after.

Our guide to [the Privacy Act and AI](/guides/privacy-act-and-ai) covers the wider obligations. This is general information; get legal advice for your sites.

## Accuracy, testing and false alarms

**A vision system that cries wolf gets switched off, so agree how you'll measure false alarms before the build.** Set aside a test set of images the model never trains on, captured in the conditions that matter, and report two numbers: how many real events it missed, and how many alerts were wrong. Then decide which error is more expensive. Missing a forklift near a pedestrian is worse than an extra alert; flagging a good product as defective wastes stock.

Plan a supervised trial in production before alerts go live, with a person reviewing every alert for a few weeks. Our guide to [moving an AI pilot into production](/guides/ai-pilot-to-production) covers what that phase needs.

## Ongoing costs and a three year total

**Vision systems drift as lighting, products and camera positions change, so budget for retraining from the start.** A worked three year total for a custom model at one site, with stated assumptions:

| Cost line | Assumption | Three year total (AUD, ex GST) |
|---|---|---|
| Build | 50 to 100 days at $1,100 to $1,500 | $55,000 to $150,000 |
| Edge hardware | Two production devices with enclosures and installation, assumed $3,000 to $8,000 | $3,000 to $8,000 |
| Cloud for alerts, dashboard and storage | Assumed $100 to $400 a month | $3,600 to $14,400 |
| Relabelling and retraining, years 2 and 3 | One round a year: labelling as above plus 5 to 10 engineering days | $18,500 to $52,500 |
| **Total** | | **about $80,000 to $225,000** |

The biggest swing factors are the number of conditions the model must handle, whether the site has reliable power and connectivity, and how many alert types feed other systems. For construction sites, our [construction software and AI page](/solutions/construction-software-and-ai) covers the site specific issues.

## How AWLabs approaches computer vision

We start with your cameras and your images, not a model. A short proof of concept on existing footage tests whether an API is good enough, and gives us the accuracy target and privacy design for anything custom. We prefer detecting objects over identifying people, and processing on site where feeds run all day. Senior engineers lead every build.

The first step is a Development Consult, a 15 minute call. A paid Discovery Audit then tests feasibility on your own footage, and you get a fixed price Schedule of Work with three options: The Minimum, The Recommended and The Complete. Our [AI integration service](/services/ai-integration) and [AI development cost guide](/guides/ai-development-cost-australia) cover the wider picture.
