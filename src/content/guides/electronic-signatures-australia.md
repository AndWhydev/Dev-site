---
title: "Are electronic signatures legal in Australia? The rules for building signing into software"
metaTitle: "Are Electronic Signatures Legal in Australia? (2026)"
description: "Electronic signatures are valid for most Australian documents. The Commonwealth and state Acts, s127 company execution, deeds, stat decs and signing in apps."
eyebrow: "Australian regulation"
category: australia
published: 2026-11-08
updated: 2026-11-08
summary: "Yes. Under the Electronic Transactions Act 1999 and the matching state and territory Acts, an electronic signature is valid for most documents if the method identifies the signer, shows their intention, is as reliable as appropriate for the purpose, and the other party consents to electronic dealings. Companies can execute documents, including deeds, electronically under s127 of the Corporations Act, and directors can sign different copies by different methods. Some documents still have special rules, including wills, many powers of attorney, land dealings and statutory declarations, and those rules differ by state. For software, the practical question is whether to embed a signing service such as DocuSign or build a simpler signing step yourself."
takeaways:
  - "An electronic signature works if it identifies the signer, shows their intention, is reliable enough for the purpose, and the recipient consents to electronic dealings."
  - "The Commonwealth Act covers Commonwealth law only. Each state and territory has its own Act, with its own exemptions."
  - "Companies can execute documents and deeds electronically under s127, without witnesses, and directors can sign separate copies by different methods."
  - "Commonwealth statutory declarations can be witnessed by video link, or made without a witness through myGov with a Digital ID, since 1 January 2024."
  - "The audit trail is what makes a signature defensible: who signed, how they were identified, what they saw and when."
faqs:
  - q: "Is a typed name a legal signature in Australia?"
    a: "It can be. The Attorney-General's Department says the Electronic Transactions Act doesn't require a specific method, and identity could be shown by a typed name, a personal mark, an email or an online ID check. What matters is that the method identifies the person, shows their intention and is reliable enough for the circumstances. For higher value or disputed documents, a signing service with an audit trail is easier to defend."
  - q: "Is DocuSign legally binding in Australia?"
    a: "Signatures made through DocuSign, Adobe Acrobat Sign, FuseSign, Annature and similar services are generally valid for documents the Electronic Transactions Acts cover, because the platforms identify the signer, capture intention and keep an audit trail. They don't change the special rules for documents that must be witnessed or executed in a particular way under state law."
  - q: "Can a deed be signed electronically?"
    a: "A company can execute a deed electronically under s127 of the Corporations Act, without witnessing, and delivery isn't needed. Deeds signed by individuals are governed by state law, and the rules on electronic signing and witnessing of deeds vary between states. Check the law in the relevant state before building a flow for individuals' deeds."
  - q: "Can a will be signed electronically?"
    a: "Generally treat wills as outside a standard e-signing flow. Wills are governed by state succession laws with their own signing and witnessing formalities, and those formalities are not met by a typical electronic signature. Any software touching wills should be designed with a lawyer in the relevant state."
  - q: "What is the difference between an electronic signature and a digital signature?"
    a: "The Attorney-General's Department notes that 'digital signature' is not a term used in the Electronic Transactions Act and can mean different things. Some people mean any e-signature; others mean a signature with extra cryptographic security, such as a certificate that proves the document hasn't changed. If someone asks for a digital signature, ask what they actually require."
  - q: "Do I need the other party's consent to sign electronically?"
    a: "Under the Commonwealth Act, when you deal with someone outside government you may need their consent to use electronic communications, and it can be inferred from past dealings or given expressly. Commonwealth agencies can set their own technical requirements. In software, an express consent step before signing removes the question."
sources:
  - title: "Electronic signatures"
    url: "https://www.ag.gov.au/legal-system/electronic-signatures-documents-and-transactions/electronic-signatures"
    publisher: "Attorney-General's Department"
  - title: "Choice and consent under the ETA"
    url: "https://www.ag.gov.au/legal-system/electronic-signatures-documents-and-transactions/choice-and-consent-under-eta"
    publisher: "Attorney-General's Department"
  - title: "Exemptions to the ETA"
    url: "https://www.ag.gov.au/legal-system/electronic-signatures-documents-and-transactions/exemptions-eta"
    publisher: "Attorney-General's Department"
  - title: "Electronic Transactions Act 1999"
    url: "https://www.legislation.gov.au/C2004A00553/latest/text"
    publisher: "Federal Register of Legislation"
  - title: "Corporations Amendment (Meetings and Documents) Act 2022"
    url: "https://www.legislation.gov.au/C2022A00009/asmade/text"
    publisher: "Federal Register of Legislation"
  - title: "Digital Commonwealth statutory declarations"
    url: "https://www.ag.gov.au/legal-system/statutory-declarations/about-commonwealth-statutory-declarations/digital-commonwealth-statutory-declarations"
    publisher: "Attorney-General's Department"
  - title: "Modernising document execution"
    url: "https://www.ag.gov.au/legal-system/statutory-declarations/modernising-document-execution"
    publisher: "Attorney-General's Department"
  - title: "Australian Registrars' National Electronic Conveyancing Council"
    url: "https://www.arnecc.gov.au/"
    publisher: "ARNECC"
related:
  - title: "How to automate document generation"
    href: "/guides/how-to-automate-document-generation"
  - title: "How to automate client onboarding"
    href: "/guides/how-to-automate-customer-onboarding"
  - title: "What to check before signing a software development contract"
    href: "/guides/software-development-contract-checklist"
  - title: "AI for law firms"
    href: "/solutions/ai-for-law-firms"
  - title: "Conveyancing software"
    href: "/solutions/conveyancing-software"
service:
  title: "API development and integration"
  href: "/services/api-development"
disclaimer: legal
---

## Are electronic signatures legally binding in Australia?

**Yes, for most documents.** The Attorney-General's Department explains that the Electronic Transactions Act 1999 makes electronic signatures as valid as wet ink signatures for most Commonwealth processes, and every state and territory has its own Act to the same effect for state law.

The Act doesn't prescribe a technology. A method of electronic signing satisfies it when:

1. **It identifies the signer.** A typed name, a personal mark, an email from a known address or an online identity check can all do this, depending on the context.
2. **It shows their intention** to approve the content: clicking "I accept", signing on a line, or a clear statement of agreement.
3. **It is reliable enough.** The method must be as reliable as appropriate for the purpose, in light of all the circumstances, or be proven in fact to have identified the person and their intention.
4. **The other party consents** to dealing electronically, where consent is required.

So a drawn signature on a tablet, an "I agree" checkbox, an emailed acceptance and a signing platform can all be valid. The higher the stakes, the more you should invest in proving points 1 and 2.

## Why do both the Commonwealth and state Acts matter?

**The Commonwealth Act applies only to processes under Commonwealth law. Contracts, deeds, land and most everyday documents fall under state law, where the state Act and the state's exemptions apply.** A product used nationally has to respect all of them.

The Attorney-General's Department notes that the state and territory Acts are generally very similar to the Commonwealth Act but can differ and carry different exemptions. Exemptions also exist at Commonwealth level: the Electronic Transactions Regulations 2020 list legislation excluded from parts of the Act, including parts of the Corporations Act, which has its own signing rules instead.

An exemption doesn't always mean paper. The department points out that the Statutory Declarations Act is exempt from the Act's signature provisions, yet e-signatures can still be used under that Act's own rules. The practical test for any document type is: which law requires the signature, and what does that law, or its exemption, allow?

Parties to a contract can also agree on how signing will work. If your terms say acceptance happens by clicking a button, that agreement is part of the evidence.

## Which documents still need special handling?

**Wills, powers of attorney, land dealings, statutory declarations and deeds signed by individuals each have their own rules.** Treat each as its own design question, not part of a general signing flow.

| Document | Who sets the rules | What to check before automating |
|---|---|---|
| Company contracts and deeds | Corporations Act s127 and the company's constitution | Usually suitable for e-signing; see the next section |
| Ordinary commercial contracts | State Electronic Transactions Acts and contract law | Usually suitable, with consent and an audit trail |
| Deeds signed by individuals | State property and conveyancing laws | Rules on electronic signing and witnessing differ by state |
| Wills | State succession laws | Signing and witnessing formalities; generally outside standard e-signing |
| Powers of attorney | State powers of attorney laws | Witness types, certificates and signing methods vary by state |
| Land transfers and mortgages | State land titles law and the Electronic Conveyancing National Law | Lodged electronically by subscribers under ARNECC's participation rules, not by a generic signing tool |
| Commonwealth statutory declarations | Statutory Declarations Act 1959 | Witness by video link, or a digital declaration through myGov |
| State statutory declarations | State oaths and declarations laws | Rules differ from the Commonwealth's |

For land, the Australian Registrars' National Electronic Conveyancing Council maintains the Model Participation Rules and Model Operating Requirements under the Electronic Conveyancing National Law. In practice, conveyancers and lawyers sign and lodge land dealings inside an electronic lodgment network, so software for that market integrates with those networks rather than replacing them. See [conveyancing software](/solutions/conveyancing-software).

## How do companies sign electronically under s127?

**Since 23 February 2022, the Corporations Act has permanently allowed companies to execute documents, including deeds, electronically.** The Corporations Amendment (Meetings and Documents) Act 2022 made the pandemic era relief permanent and technology neutral.

What the amended Act allows:

- **Electronic signing.** A director or company secretary can sign an electronic form of the document by electronic means, if the method identifies them, shows their intention and is reliable as appropriate or proven in fact.
- **Split execution.** Signers don't have to sign the same form of the document, the same page or use the same method. The Act's own example is one director signing on paper by hand and another signing electronically.
- **Deeds without witnesses.** A company can execute a document as a deed under s127(1) without the execution being witnessed, whether the document is physical or electronic, and delivery is not necessary.
- **Sole director companies.** A proprietary company with a sole director can execute through that director if they are also the sole secretary, or the company has no secretary.
- **Seals.** Fixing a common seal can be witnessed by electronic means, as long as a method shows the witness observed it.

For software, that means a generated contract can go to two directors through a signing service and be treated as executed by the company once both sign. Store the evidence that each signer held the role at the time. Our guide to [automating document generation](/guides/how-to-automate-document-generation) covers the generation side.

## What makes an electronic signature defensible?

**The audit trail.** If a signature is challenged, you need to show who signed, how you knew it was them, what they saw, that they intended to sign, and that nothing changed afterwards.

A defensible signing record captures:

- **Identity evidence:** the email or mobile number used, any one time code, and any identity verification result for higher risk documents.
- **Intention:** the exact action taken (typed name, drawn signature, checkbox) and the wording next to it.
- **Consent:** a record that the signer agreed to sign and receive documents electronically.
- **The document:** a hash or fingerprint of the exact file signed, so later changes are detectable.
- **Timing and context:** timestamps for opened, viewed and signed, plus IP address and device details.
- **The sequence:** for multi party documents, who signed in what order and when the document became complete.

Keep the signed file and the audit record together for as long as the underlying document must be kept.

## Should you embed DocuSign or build your own signing step?

**Embed an established signing service for contracts, deeds and anything likely to be disputed. A simple in app acceptance step is enough for low risk agreements such as terms of service or job sign offs.**

| Factor | Embed DocuSign, Adobe Acrobat Sign, FuseSign, Annature or SignNow | Build a simple signing step |
|---|---|---|
| Legal evidence | Mature audit trails and certificates | Only as good as what you log |
| Experience | Can redirect users or be embedded through the vendor's API | Fully inside your workflow |
| Cost at volume | Per envelope or per user fees add up | Build cost, then low running cost |
| Multi party and sequential signing | Built in | You build it |
| Best for | Contracts, deeds, finance, HR documents | Click through acceptance, delivery dockets, inspection sign offs |

Many products use both: a built in acceptance for routine sign offs, and an embedded signing service for formal agreements. Our [API development service](/services/api-development) covers either build.

## How do remote witnessing rules work after the pandemic?

**Remote witnessing is now permanent for Commonwealth statutory declarations, and the position for state documents depends on the state and the document type.** Check the current law in each state before building a video witnessing step.

At Commonwealth level, the Statutory Declarations Amendment Act 2023 took effect on 1 January 2024. It made video link witnessing permanent and added a way to make a declaration without a witness through an approved platform. myGov with myID is currently the only approved platform, and the Digital ID must be at least standard strength. The approved platform may not keep copies of declarations, and each one carries a QR code that anyone can scan with the myGov app to check it is genuine.

For state documents such as affidavits, powers of attorney and deeds, each state has its own rules, and they can differ between document types within the same state. We have not summarised them here because they change; check the current law for each state and document. A national product needs a rules table by state and document type, maintained by someone who checks it.

## A checklist for adding signing to your app

1. List every document type users will sign, and which law governs each.
2. Mark the ones with special rules (wills, powers of attorney, land, statutory declarations, individuals' deeds) and design those separately or exclude them.
3. Decide per document type: built in acceptance or an embedded signing service.
4. Add an express consent step for electronic dealings.
5. Choose the identity check per risk level: email, mobile code or full identity verification.
6. Log the full audit trail and fingerprint the signed file.
7. For companies, capture each signer's role and support split execution.
8. Set retention per document type and keep the audit record with the document.
9. Have a lawyer review the flow for any document with special rules.

## How AWLabs approaches signing in software

We design the signing step around the documents your users actually sign. In a Development Consult we look at those document types and tell you where an embedded service is the sensible choice. For a build, a paid Discovery Audit maps each document to its signing rules with your lawyers and specifies the audit trail; its fee is credited in full against the build. The fixed price Schedule of Work sets out three options: The Minimum, The Recommended and The Complete. Senior engineers lead every build. We build to the requirements you and your legal advisers set, and the legal position remains yours to confirm. See our [API development service](/services/api-development) and, for legal workflows, [AI for law firms](/solutions/ai-for-law-firms).
