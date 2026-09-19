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
] as const;

export const POLICY_STATUSES = [
  "in-force",
  "proposed",
  "draft",
  "lapsed",
] as const;

export const JURISDICTIONS = ["Nigeria", "AU", "ECOWAS"] as const;

export type PolicyType = (typeof POLICY_TYPES)[number];
export type PolicyStatus = (typeof POLICY_STATUSES)[number];
export type Jurisdiction = (typeof JURISDICTIONS)[number];

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
  /** Plain-language summary, 2–3 sentences */
  summary: string;
  /** What the instrument actually says about AI */
  aiProvisions: string;
  /** Link to the primary source or an authoritative tracker */
  sourceUrl: string;
}

/** Human-readable labels used across the UI */
export const STATUS_LABELS: Record<PolicyStatus, string> = {
  "in-force": "In force",
  proposed: "Proposed",
  draft: "Draft",
  lapsed: "Lapsed",
};

export const TYPE_LABELS: Record<PolicyType, string> = {
  law: "Law",
  guideline: "Guideline",
  strategy: "Strategy",
  bill: "Bill",
  framework: "Framework",
};

export const JURISDICTION_LABELS: Record<Jurisdiction, string> = {
  Nigeria: "Nigeria",
  AU: "African Union",
  ECOWAS: "ECOWAS",
};
