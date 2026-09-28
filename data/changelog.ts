/**
 * Research changelog for the AI Governance Tracker.
 *
 * Records verified corrections to existing entries (status changes,
 * corrected dates, replaced sources, jurisdiction/type corrections, and
 * significant verification notes) instead of silently overwriting them.
 * See /changelog and /methodology on the site.
 *
 * ─── HOW TO ADD AN ENTRY ────────────────────────────────────────────────
 * Only add a record once a change has actually been made to
 * `data/policies.ts`, backed by a verified source. Do not record
 * speculative or planned changes.
 *
 * 1. Append an object to the array below (any position; the changelog
 *    page sorts by `date` automatically, newest first).
 * 2. `date` is the date the correction was recorded, in ISO form
 *    (YYYY-MM-DD).
 * 3. `instrumentId` should match the entry's `id` in `data/policies.ts`
 *    where the entry still exists, so the changelog can link to it.
 * 4. `field` is a short machine-readable label for what changed, e.g.
 *    "status", "title", "jurisdiction", "instrumentType", "primarySource",
 *    "publicationDate", "adoptionDate", "verificationNote".
 * 5. `previousValue` / `newValue` should be short, human-readable strings
 *    (e.g. "Proposed" → "Adopted"), not full objects.
 * 6. `reason` should explain, in plain language, why the change was made
 *    and what evidence supports it.
 * 7. `sourceUrl` should point to the evidence for the change, if the
 *    reason does not already reference `data/policies.ts`'s updated
 *    `primarySource`/`sourceUrl`.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface ChangelogEntry {
  /** ISO date (YYYY-MM-DD) the correction was recorded */
  date: string;
  /** Matches a PolicyEntry.id in data/policies.ts, where that entry still exists */
  instrumentId: string;
  /** Instrument name at the time of the change, kept even if the entry is later renamed or removed */
  instrumentTitle: string;
  /** Short machine-readable label for what changed, e.g. "status", "jurisdiction", "primarySource" */
  field: string;
  previousValue: string;
  newValue: string;
  /** Plain-language explanation of why the change was made and what evidence supports it */
  reason: string;
  /** Link to the evidence for this specific change, if not already the entry's updated source */
  sourceUrl?: string;
}

export const changelog: ChangelogEntry[] = [
  {
    date: "2026-09-22",
    instrumentId: "nigeria-data-protection-act-2023",
    instrumentTitle: "Nigeria Data Protection Act, 2023",
    field: "methodology audit",
    previousValue: "In force",
    newValue: "Implemented",
    reason:
      "Reclassified under the methodology after verification of commencement and operational administration and enforcement. Official publication, adoption and commencement dates and the primary source were also recorded.",
    sourceUrl:
      "https://ndpc.gov.ng/wp-content/uploads/2024/03/Nigeria_Data_Protection_Act_2023.pdf",
  },
  {
    date: "2026-09-22",
    instrumentId: "national-ai-strategy-nais",
    instrumentTitle: "National Artificial Intelligence Strategy (NAIS)",
    field: "methodology audit",
    previousValue: "In force",
    newValue: "Adopted",
    reason:
      "Reclassified under the methodology to distinguish formal launch and publication from evidence that all proposed governance mechanisms are operational. The instrument year, display label and official sources were corrected.",
    sourceUrl:
      "https://ncair.nitda.gov.ng/wp-content/uploads/2025/09/National-Artificial-Intelligence-Strategy-19092025.pdf",
  },
  {
    date: "2026-09-22",
    instrumentId: "nitda-ai-code-of-practice",
    instrumentTitle: "NITDA Code of Practice for Artificial Intelligence",
    field: "methodology audit",
    previousValue: "Draft",
    newValue: "Proposed",
    reason:
      "Migrated from the legacy Draft label to Proposed under the methodology. The source and description of the instrument's unfinalised provisions were corrected using official NCAIR/NITDA material.",
    sourceUrl:
      "https://ncair.nitda.gov.ng/wp-content/uploads/2026/04/29042026-NAIS-%40-2-Years-Impact-Story-Ecosystem-Compilation-copy.pdf",
  },
  {
    date: "2026-09-22",
    instrumentId: "ndpa-gaid-2025",
    instrumentTitle:
      "NDPA General Application and Implementation Directive (GAID), 2025",
    field: "methodology audit",
    previousValue: "In force",
    newValue: "Implemented",
    reason:
      "Reclassified under the methodology after verification of issuance, commencement and subsequent implementation and enforcement activity. The type was corrected to Directive and official dates and sources were recorded.",
    sourceUrl:
      "https://ndpc.gov.ng/wp-content/uploads/2025/07/NDP-ACT-GAID-2025-MARCH-20TH.pdf",
  },
  {
    date: "2026-09-22",
    instrumentId: "national-ai-commission-bill",
    instrumentTitle:
      "National Artificial Intelligence Commission (Establishment) Bill",
    field: "methodology audit",
    previousValue: "Proposed",
    newValue: "Proposed",
    reason:
      "Status remains Proposed. The issuing body and source were corrected to the official Senate progression record, and unsupported claims about detailed powers and legislative progression were removed.",
    sourceUrl: "https://nass.gov.ng/documents/billdownload/11207.pdf",
  },
  {
    date: "2026-09-22",
    instrumentId: "ai-robotics-institute-bill",
    instrumentTitle:
      "Consolidated Artificial Intelligence and Robotics Regulation Bill (HBs. 143, 601, 942 & 1810)",
    field: "methodology audit",
    previousValue: "Proposed",
    newValue: "Proposed",
    reason:
      "Status remains Proposed. The display title, source and description were corrected to reflect the consolidated second-reading item in the official House Order Paper without attributing unverified detailed requirements.",
    sourceUrl: "https://nass.gov.ng/documents/download/11167",
  },
  {
    date: "2026-09-22",
    instrumentId: "au-continental-ai-strategy",
    instrumentTitle: "Continental Artificial Intelligence Strategy",
    field: "methodology audit",
    previousValue: "In force",
    newValue: "Implemented",
    reason:
      "Reclassified under the methodology after verification of endorsement and separate evidence that implementation activity is underway. The session date range, publication date and official sources were recorded.",
    sourceUrl:
      "https://au.int/en/documents/20240809/continental-artificial-intelligence-strategy",
  },
  {
    date: "2026-09-22",
    instrumentId: "malabo-convention",
    instrumentTitle:
      "AU Convention on Cyber Security and Personal Data Protection (Malabo Convention)",
    field: "methodology audit",
    previousValue: "In force",
    newValue: "Implemented",
    reason:
      "Reclassified under the methodology after verification of entry into force. The type was corrected to Treaty, dates and official sources were recorded, and unsupported comparative claims were removed.",
    sourceUrl:
      "https://www.au.int/en/treaties/african-union-convention-cyber-security-and-personal-data-protection",
  },
  {
    date: "2026-09-22",
    instrumentId: "au-data-policy-framework",
    instrumentTitle: "AU Data Policy Framework",
    field: "methodology audit",
    previousValue: "In force",
    newValue: "Implemented",
    reason:
      "Reclassified under the methodology after verification of subsequent AU implementation work. The endorsement period, publication date, AI relevance and official sources were clarified.",
    sourceUrl:
      "https://www.au.int/en/documents/20220728/au-data-policy-framework",
  },
  {
    date: "2026-09-22",
    instrumentId: "ecowas-supplementary-act-data-protection",
    instrumentTitle:
      "Supplementary Act A/SA.1/01/10 on Personal Data Protection within ECOWAS",
    field: "methodology audit",
    previousValue: "In force",
    newValue: "Implemented",
    reason:
      "Reclassified under the methodology as the operative regional instrument. Its adoption date, official source, AI relevance and account of the ongoing revision process were corrected.",
    sourceUrl:
      "https://www.ecodob.ecowas.int/legal_texts/journal_en/SIGNED_Data_Protection_Act.pdf",
  },
  {
    date: "2026-09-22",
    instrumentId: "ndeps-2020-2030",
    instrumentTitle:
      "National Digital Economy Policy and Strategy (NDEPS) 2020-2030",
    field: "inclusion",
    previousValue: "Core tracker entry",
    newValue: "Removed from core tracker",
    reason:
      "Removed following methodology review. NDEPS is an important digital-economy strategy and includes AI within a broader emerging-technology programme, but it does not meet the tracker's tightened requirement for a sufficiently direct connection to AI governance or automated decision-making.",
    sourceUrl:
      "https://nitda.gov.ng/wp-content/uploads/2020/06/National-Digital-Economy-Policy-and-Strategy.pdf",
  },
  {
    date: "2026-09-22",
    instrumentId: "west-african-pact-ethical-ai",
    instrumentTitle: "West African Pact on Ethical AI and Digital Education",
    field: "inclusion",
    previousValue: "Core tracker entry",
    newValue: "Removed from core tracker",
    reason:
      "Removed following methodology review. The available evidence supported discussion of a regional ethical-AI and digital-education framework, but a formal ECOWAS instrument under this title could not be verified from an authoritative institutional source.",
    sourceUrl:
      "https://www.wearetech.africa/en/fils-uk/news/tech/ecowas-lawmakers-push-for-regional-pact-on-ethical-ai-and-digital-education",
  },
];
