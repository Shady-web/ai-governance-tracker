import type { PolicyEntry } from "./types";

/**
 * ─── HOW TO ADD A NEW ENTRY ────────────────────────────────────────────────
 * 1. Copy any object below and paste it at the end of the array.
 * 2. Give it a unique kebab-case `id` (this becomes the URL slug).
 * 3. Fill in every field. `type`, `status`, and `jurisdiction` must be one of
 *    the allowed values in data/types.ts; TypeScript will warn you if not.
 * 4. Save. The list page, detail page, and landing-page chart all update
 *    automatically. No other file needs to change.
 * ───────────────────────────────────────────────────────────────────────────
 */

export const policies: PolicyEntry[] = [
  // ─── Nigeria ───────────────────────────────────────────────────────────
  {
    id: "nigeria-data-protection-act-2023",
    name: "Nigeria Data Protection Act, 2023",
    issuingBody:
      "National Assembly of Nigeria / Nigeria Data Protection Commission (NDPC)",
    year: 2023,
    type: "law",
    status: "implemented",
    jurisdiction: "Nigeria",
    summary:
      "Nigeria's principal data-protection statute. The Act establishes the Nigeria Data Protection Commission and creates enforceable rights and obligations governing personal-data processing, including provisions relevant to automated decision-making.",
    aiProvisions:
      "Section 37 restricts decisions based solely on automated processing (including profiling) that produce legal or similarly significant effects, permitting them only with consent, under legal authorisation, or where necessary for a contract, subject to safeguards such as human review. Section 34(1)(a)(viii) requires data subjects to be informed of the existence and consequences of automated decision-making, and high-risk processing such as large-scale profiling triggers a Data Protection Impact Assessment.",
    sourceUrl:
      "https://ndpc.gov.ng/wp-content/uploads/2024/03/Nigeria_Data_Protection_Act_2023.pdf",
    publicationDate: "2023-07-01",
    adoptionDate: "2023-06-12",
    effectiveDate: "2023-06-12",
    primarySource: {
      title: "Nigeria Data Protection Act, 2023",
      url: "https://ndpc.gov.ng/wp-content/uploads/2024/03/Nigeria_Data_Protection_Act_2023.pdf",
      publisher: "Nigeria Data Protection Commission",
    },
    lastVerified: "2026-09-22",
    verificationNote:
      "The Act commenced on 12 June 2023 and was published in the Official Gazette on 1 July 2023. The Nigeria Data Protection Commission is operational and administers and enforces the Act.",
  },
  {
    id: "national-ai-strategy-nais",
    name: "National Artificial Intelligence Strategy (NAIS)",
    issuingBody:
      "Federal Ministry of Communications, Innovation and Digital Economy (FMCIDE)",
    year: 2025,
    yearLabel:
      "Formally launched April 2025; final strategy published September 2025",
    type: "strategy",
    status: "adopted",
    jurisdiction: "Nigeria",
    summary:
      "Nigeria's national AI strategy, developed through a multi-stakeholder co-creation process and published by FMCIDE with NITDA as a key implementing body. It sets a five-year vision (2025 to 2029) to position Nigeria as a leader in ethical and inclusive AI innovation.",
    aiProvisions:
      "Organised around pillars covering AI infrastructure, a thriving AI ecosystem, AI adoption across sectors, responsible and ethical AI governance, and talent development. Sets measurable targets, including equipping at least 70% of young Nigerians (aged 16 to 35) with AI-related skills, and proposes a dedicated AI governance body to oversee implementation.",
    sourceUrl:
      "https://ncair.nitda.gov.ng/wp-content/uploads/2025/09/National-Artificial-Intelligence-Strategy-19092025.pdf",
    publicationDate: null,
    adoptionDate: null,
    effectiveDate: null,
    primarySource: {
      title: "National Artificial Intelligence Strategy",
      url: "https://ncair.nitda.gov.ng/wp-content/uploads/2025/09/National-Artificial-Intelligence-Strategy-19092025.pdf",
      publisher:
        "Federal Ministry of Communications, Innovation and Digital Economy / NCAIR",
    },
    supplementalSources: [
      {
        title:
          "FMCIDE Week in Review: Formal launch of the National AI Strategy",
        url: "https://fmcide.gov.ng/weekinreview-full-week-recap-of-activities-of-the-honourable-minister-dr-bosun-tijani-vol-82/",
        publisher:
          "Federal Ministry of Communications, Innovation and Digital Economy",
      },
    ],
    lastVerified: "2026-09-22",
    verificationNote:
      "FMCIDE records the formal launch of the National Artificial Intelligence Strategy in April 2025, while the final official strategy document is dated September 2025. The strategy proposes governance institutions and mechanisms, but publication does not establish that all of them are operational.",
  },
  {
    id: "nitda-ai-code-of-practice",
    name: "NITDA Code of Practice for Artificial Intelligence",
    issuingBody: "National Information Technology Development Agency (NITDA)",
    year: 2025,
    type: "guideline",
    status: "proposed",
    jurisdiction: "Nigeria",
    summary:
      "A NITDA-led regulatory instrument intended to provide sector-agnostic standards for the development, deployment, and use of AI systems in Nigeria. As of mid-2026 the code remains in draft and has not been finalised.",
    aiProvisions:
      "The proposed code is intended to provide an AI-specific governance framework. Official NCAIR/NITDA material identifies it as a draft or proposed instrument. Detailed compliance requirements should not be treated as final until the draft or an adopted text can be verified.",
    sourceUrl:
      "https://ncair.nitda.gov.ng/wp-content/uploads/2026/04/29042026-NAIS-%40-2-Years-Impact-Story-Ecosystem-Compilation-copy.pdf",
    publicationDate: null,
    adoptionDate: null,
    effectiveDate: null,
    primarySource: {
      title:
        "Two Years of Nigeria's National AI Strategy: A Compilation of Ecosystem Impact",
      url: "https://ncair.nitda.gov.ng/wp-content/uploads/2026/04/29042026-NAIS-%40-2-Years-Impact-Story-Ecosystem-Compilation-copy.pdf",
      publisher: "NCAIR / NITDA",
    },
    lastVerified: "2026-09-22",
    verificationNote:
      "An official 2026 NCAIR/NITDA publication continues to describe the instrument as the Draft Code of Practice for Artificial Intelligence and as a proposed NITDA code. No final adopted version was located in the official NITDA or NCAIR sources reviewed during this verification.",
  },
  {
    id: "ndpa-gaid-2025",
    name: "NDPA General Application and Implementation Directive (GAID), 2025",
    issuingBody: "Nigeria Data Protection Commission (NDPC)",
    year: 2025,
    type: "directive",
    status: "implemented",
    jurisdiction: "Nigeria",
    summary:
      "An implementation directive issued by the NDPC in March 2025 (effective 19 September 2025) that operationalises the Nigeria Data Protection Act. It details registration duties for data controllers of major importance and mandatory annual compliance audits.",
    aiProvisions:
      "Elaborates how the NDPA's automated decision-making and profiling restrictions apply in practice, including audit and impact-assessment expectations for organisations deploying AI systems that process personal data at scale.",
    sourceUrl:
      "https://ndpc.gov.ng/wp-content/uploads/2025/07/NDP-ACT-GAID-2025-MARCH-20TH.pdf",
    publicationDate: "2025-03-20",
    adoptionDate: "2025-03-20",
    effectiveDate: "2025-09-19",
    primarySource: {
      title: "NDP Act General Application and Implementation Directive 2025",
      url: "https://ndpc.gov.ng/wp-content/uploads/2025/07/NDP-ACT-GAID-2025-MARCH-20TH.pdf",
      publisher: "Nigeria Data Protection Commission",
    },
    supplementalSources: [
      {
        title: "Nigeria Data Protection Commission Annual Report 2025",
        url: "https://ndpc.gov.ng/wp-content/uploads/2026/02/Print_NDPC-Annual-Report-2025-1.pdf",
        publisher: "Nigeria Data Protection Commission",
      },
    ],
    lastVerified: "2026-09-22",
    verificationNote:
      "The Nigeria Data Protection Commission formally issued GAID on 20 March 2025. Following a six-month preparation period, it came into force on 19 September 2025. The Commission subsequently reported implementation and enforcement activity under the directive.",
  },
  {
    id: "national-ai-commission-bill",
    name: "National Artificial Intelligence Commission (Establishment) Bill",
    issuingBody: "Senate, National Assembly of Nigeria",
    year: 2025,
    type: "bill",
    status: "proposed",
    jurisdiction: "Nigeria",
    summary:
      "A Senate bill proposing the establishment of a National Artificial Intelligence Commission. The official Senate progression record shows that SB.731 received its first reading on 25 February 2025.",
    aiProvisions:
      "The bill proposes a dedicated national institution for artificial intelligence. Detailed powers, licensing requirements or risk-control obligations are not stated here because the full bill text has not yet been verified against an authoritative parliamentary copy.",
    sourceUrl: "https://nass.gov.ng/documents/billdownload/11207.pdf",
    publicationDate: null,
    adoptionDate: null,
    effectiveDate: null,
    primarySource: {
      title:
        "Senate Bills Progression Chart (June 2023-June 2027), as at 10 July 2025",
      url: "https://nass.gov.ng/documents/billdownload/11207.pdf",
      publisher: "National Assembly of Nigeria",
    },
    lastVerified: "2026-09-22",
    verificationNote:
      "The latest official Senate progression chart located during verification records first reading on 25 February 2025 and does not record a second reading, committee referral, report or third reading for SB.731.",
  },
  {
    id: "ai-robotics-institute-bill",
    name: "Consolidated Artificial Intelligence and Robotics Regulation Bill (HBs. 143, 601, 942 & 1810)",
    issuingBody: "House of Representatives, National Assembly of Nigeria",
    year: 2024,
    type: "bill",
    status: "proposed",
    jurisdiction: "Nigeria",
    summary:
      "A House of Representatives legislative proposal bringing HBs. 143, 601, 942 and 1810 together in a single second-reading item. The proposal combines the establishment of an AI and robotics institution with regulation of the development, deployment and use of artificial intelligence in Nigeria.",
    aiProvisions:
      "The official parliamentary record supports broad aims involving institutional oversight and regulation of AI development, deployment and use. More detailed compliance requirements should not be attributed to the proposal until the underlying bill text is verified.",
    sourceUrl: "https://nass.gov.ng/documents/download/11167",
    publicationDate: null,
    adoptionDate: null,
    effectiveDate: null,
    primarySource: {
      title: "House of Representatives Order Paper, 3 December 2024",
      url: "https://nass.gov.ng/documents/download/11167",
      publisher: "National Assembly of Nigeria",
    },
    lastVerified: "2026-09-22",
    verificationNote:
      "The official House Order Paper of 3 December 2024 lists HBs. 143, 601, 942 and 1810 together as a single second-reading item concerning an AI and robotics institution and regulation of AI development, deployment and use. No evidence of enactment was identified in the official records reviewed.",
  },
  // ─── African Union ─────────────────────────────────────────────────────
  {
    id: "au-continental-ai-strategy",
    name: "Continental Artificial Intelligence Strategy",
    issuingBody: "African Union Executive Council",
    year: 2024,
    yearLabel: "Endorsed by the AU Executive Council, 18 and 19 July 2024",
    type: "strategy",
    status: "implemented",
    jurisdiction: "AU",
    summary:
      "The African Union's continent-wide AI strategy, adopted by the AU Executive Council at its 45th Ordinary Session in Accra in July 2024. It commits member states to an Africa-centric, development-focused, and inclusive approach to AI, with implementation running from 2025 to 2030.",
    aiProvisions:
      "Built on five focus areas: harnessing AI's benefits, building AI capabilities, minimising risks, stimulating investment, and fostering cooperation. Calls on member states to adopt unified national AI approaches and strengthen regional and global cooperation on AI governance.",
    sourceUrl:
      "https://au.int/en/documents/20240809/continental-artificial-intelligence-strategy",
    publicationDate: "2024-08-09",
    adoptionDate: null,
    effectiveDate: null,
    primarySource: {
      title: "Continental Artificial Intelligence Strategy",
      url: "https://au.int/en/documents/20240809/continental-artificial-intelligence-strategy",
      publisher: "African Union",
    },
    supplementalSources: [
      {
        title:
          "Communiqué of the High Level Policy Dialogue on the Development and Regulation of AI in Africa",
        url: "https://au.int/en/pressreleases/20250517/communique-hlp-dialogue-development-and-regulation-ai-africa",
        publisher: "African Union",
      },
    ],
    lastVerified: "2026-09-22",
    verificationNote:
      "The AU Executive Council endorsed the strategy during its 45th Ordinary Session on 18 and 19 July 2024. The strategy sets an implementation period of 2025 to 2030, and subsequent African Union activity provides separate evidence that implementation is underway. The Implemented classification does not imply that all strategy actions have been completed.",
  },
  {
    id: "malabo-convention",
    name: "AU Convention on Cyber Security and Personal Data Protection (Malabo Convention)",
    issuingBody: "African Union",
    year: 2014,
    type: "treaty",
    status: "implemented",
    jurisdiction: "AU",
    summary:
      "A binding African Union treaty covering cybersecurity, cybercrime, electronic transactions and personal-data protection. Adopted in 2014, it entered into force on 8 June 2023 and applies as a treaty obligation to states that have ratified or acceded to it.",
    aiProvisions:
      "The Convention predates the current wave of AI regulation and contains no dedicated AI governance regime. Its personal-data protection, cybersecurity and electronic-transactions rules form part of the legal environment within which AI systems operate in states parties.",
    sourceUrl:
      "https://www.au.int/en/treaties/african-union-convention-cyber-security-and-personal-data-protection",
    publicationDate: null,
    adoptionDate: "2014-06-27",
    effectiveDate: "2023-06-08",
    primarySource: {
      title:
        "African Union Convention on Cyber Security and Personal Data Protection",
      url: "https://www.au.int/en/treaties/african-union-convention-cyber-security-and-personal-data-protection",
      publisher: "African Union",
    },
    supplementalSources: [
      {
        title: "AU holds a workshop on Cyber Diplomacy",
        url: "https://static.au.int/en/pressreleases/20240416/au-holds-workshop-cyber-diplomacy",
        publisher: "African Union",
      },
    ],
    lastVerified: "2026-09-22",
    verificationNote:
      "The Convention was adopted on 27 June 2014 and entered into force on 8 June 2023 after the required ratification threshold was met. It is binding on states parties; participation is not universal across African Union Member States.",
  },
  {
    id: "au-data-policy-framework",
    name: "AU Data Policy Framework",
    issuingBody: "African Union Commission",
    year: 2022,
    yearLabel: "Endorsed by the AU Executive Council, February 2022",
    type: "framework",
    status: "implemented",
    jurisdiction: "AU",
    summary:
      "A continental framework endorsed by the AU in 2022 to guide member states in creating enabling data governance environments. It promotes harmonised data regulation to support the African digital single market.",
    aiProvisions:
      "The Framework is a data-governance instrument rather than an AI-specific policy. It is relevant because AI development and deployment depend on data governance, cross-border data flows, rights protection and institutional data-management capacity.",
    sourceUrl:
      "https://www.au.int/en/documents/20220728/au-data-policy-framework",
    publicationDate: "2022-07-28",
    adoptionDate: null,
    effectiveDate: null,
    primarySource: {
      title: "AU Data Policy Framework",
      url: "https://www.au.int/en/documents/20220728/au-data-policy-framework",
      publisher: "African Union",
    },
    supplementalSources: [
      {
        title:
          "AU Commences Validation of Data Governance Frameworks to Accelerate Digital Single Market by 2030",
        url: "https://www.au.int/en/pressreleases/20251202/validation-data-governance-frameworks-accelerate-digital-single-market",
        publisher: "African Union",
      },
    ],
    lastVerified: "2026-09-22",
    verificationNote:
      "The Framework was endorsed by the African Union in February 2022. Subsequent AU implementation work includes continental data-governance initiatives, supporting frameworks and a 2025 validation process explicitly described by the AU as implementation of the Data Policy Framework.",
  },
  // ─── ECOWAS ────────────────────────────────────────────────────────────
  {
    id: "ecowas-supplementary-act-data-protection",
    name: "Supplementary Act A/SA.1/01/10 on Personal Data Protection within ECOWAS",
    issuingBody: "ECOWAS Authority of Heads of State and Government",
    year: 2010,
    type: "law",
    status: "implemented",
    jurisdiction: "ECOWAS",
    summary:
      "A binding ECOWAS Supplementary Act establishing a regional framework for personal-data protection. It applies through the ECOWAS legal regime to Member States and remains the operative regional instrument while a revised text proceeds through the Community's formal adoption process.",
    aiProvisions:
      "The Act predates current AI regulation and does not create an AI-specific regime. It is relevant because it governs personal-data processing, including automated processing, and forms part of the regional legal environment for data-intensive and AI systems.",
    sourceUrl:
      "https://www.ecodob.ecowas.int/legal_texts/journal_en/SIGNED_Data_Protection_Act.pdf",
    publicationDate: null,
    adoptionDate: "2010-02-16",
    effectiveDate: null,
    primarySource: {
      title:
        "Supplementary Act A/SA.1/01/10 on Personal Data Protection within ECOWAS",
      url: "https://www.ecodob.ecowas.int/legal_texts/journal_en/SIGNED_Data_Protection_Act.pdf",
      publisher: "ECOWAS",
    },
    supplementalSources: [
      {
        title:
          "Member States Experts Validate the Revised Supplementary Act A/SA.1/01/10 on Personal Data Protection Within ECOWAS",
        url: "https://www.ecowas.int/member-states-experts-validate-the-revised-supplementary-act-a-sa-1-01-10-on-personal-data-protection-within-ecowas/",
        publisher: "ECOWAS",
      },
      {
        title:
          "ECOWAS Convenes Experts in Preparation for the 20th Meeting of Ministers in Charge of Telecommunications, ICT and Digitalisation in Freetown",
        url: "https://www.ecowas.int/ecowas-convenes-experts-in-preparation-for-the-20th-meeting-of-ministers-in-charge-of-telecommunications-ict-and-digitalisation-in-freetown/",
        publisher: "ECOWAS",
      },
    ],
    lastVerified: "2026-09-22",
    verificationNote:
      "The 2010 Supplementary Act remains the official ECOWAS legal instrument listed in the Community Legal Journal. ECOWAS has been revising it, but the 2026 sources reviewed still describe the revised text as proceeding through the formal adoption process. The tracker therefore records the 2010 Act as the operative instrument.",
  },
];

/** Look up a single entry by its id (used by the detail page). */
export function getPolicyById(id: string): PolicyEntry | undefined {
  return policies.find((p) => p.id === id);
}
