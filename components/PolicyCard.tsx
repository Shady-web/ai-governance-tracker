import Link from "next/link";
import type { PolicyEntry } from "@/data/types";
import { JurisdictionBadge, StatusBadge, TypeBadge } from "./Badges";

export default function PolicyCard({ policy }: { policy: PolicyEntry }) {
  return (
    <article className="group relative flex flex-col rounded-lg border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-brand-600">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge status={policy.status} />
        <TypeBadge type={policy.type} />
        <JurisdictionBadge jurisdiction={policy.jurisdiction} />
      </div>
      <h3 className="mt-3 text-base font-semibold leading-snug text-slate-900">
        <Link
          href={`/policies/${policy.id}`}
          className="focus:outline-none after:absolute after:inset-0"
        >
          {policy.name}
        </Link>
      </h3>
      <p className="mt-1 text-xs text-slate-500">
        {policy.issuingBody} · {policy.yearLabel ?? policy.year}
      </p>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
        {policy.summary}
      </p>
      <span className="mt-4 text-sm font-medium text-brand-700 transition-colors group-hover:text-brand-800">
        View details →
      </span>
    </article>
  );
}
