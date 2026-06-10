import {
  JURISDICTION_LABELS,
  STATUS_LABELS,
  TYPE_LABELS,
  type Jurisdiction,
  type PolicyStatus,
  type PolicyType,
} from "@/data/types";

const STATUS_STYLES: Record<PolicyStatus, string> = {
  "in-force": "bg-brand-50 text-brand-800 ring-brand-600/20",
  proposed: "bg-amber-50 text-amber-800 ring-amber-600/20",
  draft: "bg-sky-50 text-sky-800 ring-sky-600/20",
  lapsed: "bg-slate-100 text-slate-600 ring-slate-500/20",
};

const base =
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset";

export function StatusBadge({ status }: { status: PolicyStatus }) {
  return (
    <span className={`${base} ${STATUS_STYLES[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}

export function TypeBadge({ type }: { type: PolicyType }) {
  return (
    <span className={`${base} bg-white text-slate-600 ring-slate-300`}>
      {TYPE_LABELS[type]}
    </span>
  );
}

export function JurisdictionBadge({
  jurisdiction,
}: {
  jurisdiction: Jurisdiction;
}) {
  return (
    <span className={`${base} bg-slate-50 text-slate-700 ring-slate-300`}>
      {JURISDICTION_LABELS[jurisdiction]}
    </span>
  );
}
