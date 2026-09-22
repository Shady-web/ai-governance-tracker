import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPolicyById, policies } from "@/data/policies";
import { JURISDICTION_LABELS, TYPE_LABELS } from "@/data/types";
import { JurisdictionBadge, StatusBadge, TypeBadge } from "@/components/Badges";
import { formatDate } from "@/lib/dates";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return policies.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const policy = getPolicyById(params.id);
  if (!policy) return { title: "Entry not found" };
  return {
    title: policy.name,
    description: policy.summary,
  };
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-4 sm:grid sm:grid-cols-4 sm:gap-4">
      <dt className="text-sm font-medium text-slate-500">{label}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-slate-800 sm:col-span-3 sm:mt-0">
        {children}
      </dd>
    </div>
  );
}

export default function PolicyDetailPage({ params }: Props) {
  const policy = getPolicyById(params.id);
  if (!policy) notFound();

  const publicationDate = formatDate(policy.publicationDate);
  const adoptionDate = formatDate(policy.adoptionDate);
  const effectiveDate = formatDate(policy.effectiveDate);
  const lastVerified = formatDate(policy.lastVerified);

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm">
        <Link
          href="/policies"
          className="font-medium text-brand-700 hover:text-brand-800"
        >
          ← All entries
        </Link>
      </nav>

      <header className="mt-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={policy.status} />
          <TypeBadge type={policy.type} />
          <JurisdictionBadge jurisdiction={policy.jurisdiction} />
        </div>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {policy.name}
        </h1>
        <p className="mt-2 text-slate-500">
          {policy.issuingBody} · {policy.yearLabel ?? policy.year}
        </p>
      </header>

      <div className="mt-8 max-w-3xl">
        <dl className="divide-y divide-slate-200 border-y border-slate-200">
          <Field label="Summary">{policy.summary}</Field>
          <Field label="AI provisions">{policy.aiProvisions}</Field>
          <Field label="Type">{TYPE_LABELS[policy.type]}</Field>
          <Field label="Jurisdiction">
            {JURISDICTION_LABELS[policy.jurisdiction]}
          </Field>
          <Field label="Issuing body">{policy.issuingBody}</Field>
          <Field label="Year">{policy.yearLabel ?? policy.year}</Field>
          {publicationDate && (
            <Field label="Publication date">{publicationDate}</Field>
          )}
          {adoptionDate && <Field label="Adoption date">{adoptionDate}</Field>}
          {effectiveDate && (
            <Field label="Effective / commencement date">{effectiveDate}</Field>
          )}
          <Field label="Primary source">
            {policy.primarySource ? (
              <>
                <a
                  href={policy.primarySource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-2 hover:text-brand-800"
                >
                  {policy.primarySource.title}
                </a>
                {policy.primarySource.publisher && (
                  <span className="ml-2 text-slate-500">
                    · {policy.primarySource.publisher}
                  </span>
                )}
              </>
            ) : (
              <a
                href={policy.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-2 hover:text-brand-800"
              >
                {policy.sourceUrl}
              </a>
            )}
          </Field>
          {policy.supplementalSources && policy.supplementalSources.length > 0 && (
            <Field label="Supplemental sources">
              <ul className="list-none space-y-1.5">
                {policy.supplementalSources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-slate-600 underline decoration-slate-400/40 underline-offset-2 hover:text-slate-900"
                    >
                      {s.title}
                    </a>
                    {s.publisher && (
                      <span className="ml-2 text-slate-400">
                        · {s.publisher}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Field>
          )}
        </dl>

        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Verification
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Last verified:{" "}
            <span className={lastVerified ? "font-medium text-slate-900" : "italic text-slate-500"}>
              {lastVerified ?? "Verification date pending"}
            </span>
          </p>
          {policy.verificationNote && (
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {policy.verificationNote}
            </p>
          )}
          <p className="mt-3 text-xs text-slate-500">
            See the{" "}
            <Link href="/methodology" className="font-medium underline hover:text-slate-700">
              methodology
            </Link>{" "}
            for what this means and how entries are checked.
          </p>
        </div>
      </div>
    </div>
  );
}
