import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPolicyById, policies } from "@/data/policies";
import { JURISDICTION_LABELS, TYPE_LABELS } from "@/data/types";
import { JurisdictionBadge, StatusBadge, TypeBadge } from "@/components/Badges";

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
          <Field label="Source">
            <a
              href={policy.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all font-medium text-brand-700 underline decoration-brand-700/30 underline-offset-2 hover:text-brand-800"
            >
              {policy.sourceUrl}
            </a>
          </Field>
        </dl>
      </div>
    </div>
  );
}
