/**
 * Core data model for the AI Governance Tracker.
 *
 * To add a new entry, you only need to edit `data/policies.ts`.
 * TypeScript will flag any field that doesn't match these types.
 */

export const POLICY_TYPES = [
  "law",
  "guideline",
  "strategy",
  "bill",
  "framework",
  "directive",
  "treaty",
] as const;

export const POLICY_STATUSES = ["proposed", "adopted", "implemented"] as const;

export const JURISDICTIONS = ["Nigeria", "AU", "ECOWAS"] as const;

export type PolicyType = (typeof POLICY_TYPES)[number];
export type PolicyStatus = (typeof POLICY_STATUSES)[number];
export type Jurisdiction = (typeof JURISDICTIONS)[number];

/** A cited source: a specific document, page, or record, not just a bare URL. */
export interface PolicySource {
  /** Title of the cited document or page */
  title: string;
  url: string;
  /** Publishing institution, e.g. "National Assembly of Nigeria" */
  publisher?: string;
}

export interface PolicyEntry {
  /** Unique kebab-case slug. Used in the URL: /policies/<id> */
  id: string;
  /** Official name of the instrument */
  name: string;
  /** Institution that issued or is sponsoring the instrument */
  issuingBody: string;
  /** Year of adoption, publication, or introduction */
  year: number;
  /** Optional display text replacing `year`, e.g. "Developed 2024, published 2025" */
  yearLabel?: string;
  /** Legal character of the instrument */
  type: PolicyType;
  /** Current status */
  status: PolicyStatus;
  /** Issuing jurisdiction */
  jurisdiction: Jurisdiction;
  /** Plain-language summary, 2 to 3 sentences */
  summary: string;
  /** What the instrument actually says about AI */
  aiProvisions: string;
  /**
   * Link to the primary source or an authoritative tracker.
   * Kept for backward compatibility; `primarySource` below is preferred
   * once an entry has been through methodology-based verification.
   */
  sourceUrl: string;

  // ─── Methodology / audit fields (optional, see /methodology) ──────────
  // These support the tracker's research methodology and are populated
  // only as entries go through verification. They are intentionally
  // optional so existing entries keep working, unfilled, until reviewed.

  /** ISO date (YYYY-MM-DD) the instrument was published, if distinct from `year` and known precisely. */
  publicationDate?: string | null;
  /** ISO date (YYYY-MM-DD) the instrument was formally adopted or enacted, if known precisely. */
  adoptionDate?: string | null;
  /** ISO date (YYYY-MM-DD) the instrument commenced or entered into force, if known precisely. */
  effectiveDate?: string | null;
  /**
   * The preferred, authoritative citation for this entry (see Source standard
   * in /methodology). Falls back to `sourceUrl` in the UI when absent.
   */
  primarySource?: PolicySource | null;
  /** Secondary reporting used to discover the instrument or add context, not the basis for status/legal claims. */
  supplementalSources?: PolicySource[];
  /**
   * ISO date (YYYY-MM-DD) this entry's status and source links were last
   * checked against sources. NOT the same as `publicationDate`/`adoptionDate`.
   * Leave unset until an entry has actually been reviewed; the UI shows
   * "Verification date pending" rather than guessing a date.
   */
  lastVerified?: string | null;
  /** Free-text note on evidence limitations, conflicting sources, or verification caveats specific to this entry. */
  verificationNote?: string | null;
}

/** Human-readable labels used across the UI */
export const STATUS_LABELS: Record<PolicyStatus, string> = {
  proposed: "Proposed",
  adopted: "Adopted",
  implemented: "Implemented",
};

export const TYPE_LABELS: Record<PolicyType, string> = {
  law: "Law",
  guideline: "Guideline",
  strategy: "Strategy",
  bill: "Bill",
  framework: "Framework",
  directive: "Directive",
  treaty: "Treaty",
};

export const JURISDICTION_LABELS: Record<Jurisdiction, string> = {
  Nigeria: "Nigeria",
  AU: "African Union",
  ECOWAS: "ECOWAS",
};
