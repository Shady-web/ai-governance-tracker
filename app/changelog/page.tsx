import type { Metadata } from "next";
import Link from "next/link";
import { changelog } from "@/data/changelog";
import { getPolicyById } from "@/data/policies";
import { formatDate } from "@/lib/dates";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "A dated record of research corrections to the AI Governance Tracker — status changes, corrected dates, replaced sources, and other verified updates.",
};

function ChangelogRow({
  entry,
}: {
  entry: (typeof changelog)[number];
}) {
  const linkedPolicy = getPolicyById(entry.instrumentId);
  const displayDate = formatDate(entry.date) ?? entry.date;

  return (
    <li className="rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <time dateTime={entry.date} className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {displayDate}
        </time>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-300">
          {entry.field}
        </span>
      </div>

      <h3 className="mt-2 text-base font-semibold text-slate-900">
        {linkedPolicy ? (
          <Link
            href={`/policies/${linkedPolicy.id}`}
            className="text-brand-700 hover:text-brand-800 hover:underline"
          >
            {entry.instrumentTitle}
          </Link>
        ) : (
          entry.instrumentTitle
        )}
      </h3>

      <p className="mt-2 text-sm text-slate-700">
        <span className="rounded bg-slate-50 px-1.5 py-0.5 text-slate-500 ring-1 ring-inset ring-slate-200">
          {entry.previousValue}
        </span>
        <span className="mx-2 text-slate-400" aria-hidden="true">
          →
        </span>
        <span className="rounded bg-brand-50 px-1.5 py-0.5 font-medium text-brand-800 ring-1 ring-inset ring-brand-600/20">
          {entry.newValue}
        </span>
      </p>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{entry.reason}</p>

      {entry.sourceUrl && (
        <a
          href={entry.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block break-all text-sm font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-2 hover:text-brand-800"
        >
          Evidence for this change →
        </a>
      )}
    </li>
  );
}

export default function ChangelogPage() {
  const sorted = [...changelog].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Changelog
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Significant research corrections — status changes, corrected dates,
        replaced sources, and similar updates — are recorded here rather
        than silently overwritten. See the{" "}
        <Link href="/methodology" className="font-medium text-brand-700 underline hover:text-brand-800">
          methodology
        </Link>{" "}
        for how entries are verified.
      </p>

      <div className="mt-8">
        {sorted.length > 0 ? (
          <ul className="list-none space-y-4">
            {sorted.map((entry, i) => (
              <ChangelogRow key={`${entry.instrumentId}-${entry.date}-${i}`} entry={entry} />
            ))}
          </ul>
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 p-10 text-center">
            <p className="text-sm text-slate-600">
              No changes have been recorded yet. This page will list status
              corrections, source updates, and other verified changes to
              tracker entries as they happen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
