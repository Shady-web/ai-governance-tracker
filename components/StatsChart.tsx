import { policies } from "@/data/policies";
import {
  JURISDICTIONS,
  JURISDICTION_LABELS,
  POLICY_STATUSES,
  STATUS_LABELS,
} from "@/data/types";

/**
 * Lightweight visual summary rendered as pure CSS bars, without a chart library.
 * Counts are computed at build time from data/policies.ts.
 */

function BarRow({
  label,
  count,
  max,
  colorClass,
}: {
  label: string;
  count: number;
  max: number;
  colorClass: string;
}) {
  const pct = max === 0 ? 0 : Math.round((count / max) * 100);
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-28 shrink-0 text-slate-600">{label}</span>
      <div
        className="h-5 flex-1 overflow-hidden rounded-sm bg-slate-100"
        role="img"
        aria-label={`${label}: ${count} ${count === 1 ? "entry" : "entries"}`}
      >
        <div
          className={`h-full rounded-sm ${colorClass}`}
          style={{ width: `${pct}%`, minWidth: count > 0 ? "0.5rem" : 0 }}
        />
      </div>
      <span className="w-6 shrink-0 text-right font-medium tabular-nums text-slate-900">
        {count}
      </span>
    </div>
  );
}

export default function StatsChart() {
  const statusCounts = POLICY_STATUSES.map((s) => ({
    key: s,
    label: STATUS_LABELS[s],
    count: policies.filter((p) => p.status === s).length,
  }));
  const jurisdictionCounts = JURISDICTIONS.map((j) => ({
    key: j,
    label: JURISDICTION_LABELS[j],
    count: policies.filter((p) => p.jurisdiction === j).length,
  }));

  const maxStatus = Math.max(...statusCounts.map((d) => d.count));
  const maxJurisdiction = Math.max(...jurisdictionCounts.map((d) => d.count));

  const statusColors: Record<string, string> = {
    proposed: "bg-amber-500",
    adopted: "bg-sky-500",
    implemented: "bg-brand-600",
  };

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <section aria-labelledby="by-status">
        <h3
          id="by-status"
          className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500"
        >
          Entries by status
        </h3>
        <div className="space-y-3">
          {statusCounts.map((d) => (
            <BarRow
              key={d.key}
              label={d.label}
              count={d.count}
              max={maxStatus}
              colorClass={statusColors[d.key]}
            />
          ))}
        </div>
      </section>
      <section aria-labelledby="by-jurisdiction">
        <h3
          id="by-jurisdiction"
          className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500"
        >
          Entries by jurisdiction
        </h3>
        <div className="space-y-3">
          {jurisdictionCounts.map((d) => (
            <BarRow
              key={d.key}
              label={d.label}
              count={d.count}
              max={maxJurisdiction}
              colorClass="bg-brand-700"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
