"use client";

import { useMemo, useState } from "react";
import { policies } from "@/data/policies";
import {
  JURISDICTIONS,
  JURISDICTION_LABELS,
  POLICY_STATUSES,
  POLICY_TYPES,
  STATUS_LABELS,
  TYPE_LABELS,
} from "@/data/types";
import PolicyCard from "./PolicyCard";

const ALL = "all";

function FilterSelect({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wide text-slate-500"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
      >
        <option value={ALL}>All</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function PolicyExplorer() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<string>(ALL);
  const [status, setStatus] = useState<string>(ALL);
  const [jurisdiction, setJurisdiction] = useState<string>(ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return policies.filter((p) => {
      if (type !== ALL && p.type !== type) return false;
      if (status !== ALL && p.status !== status) return false;
      if (jurisdiction !== ALL && p.jurisdiction !== jurisdiction) return false;
      if (q) {
        const haystack = `${p.name} ${p.summary}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [query, type, status, jurisdiction]);

  const hasActiveFilters =
    query.trim() !== "" || type !== ALL || status !== ALL || jurisdiction !== ALL;

  return (
    <div>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-1 sm:col-span-2 lg:col-span-1">
            <label
              htmlFor="search"
              className="text-xs font-medium uppercase tracking-wide text-slate-500"
            >
              Search
            </label>
            <input
              id="search"
              type="search"
              placeholder="Name or summary…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
            />
          </div>
          <FilterSelect
            id="filter-type"
            label="Type"
            value={type}
            onChange={setType}
            options={POLICY_TYPES.map((t) => ({
              value: t,
              label: TYPE_LABELS[t],
            }))}
          />
          <FilterSelect
            id="filter-status"
            label="Status"
            value={status}
            onChange={setStatus}
            options={POLICY_STATUSES.map((s) => ({
              value: s,
              label: STATUS_LABELS[s],
            }))}
          />
          <FilterSelect
            id="filter-jurisdiction"
            label="Jurisdiction"
            value={jurisdiction}
            onChange={setJurisdiction}
            options={JURISDICTIONS.map((j) => ({
              value: j,
              label: JURISDICTION_LABELS[j],
            }))}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-slate-500" aria-live="polite">
          Showing {filtered.length} of {policies.length}{" "}
          {policies.length === 1 ? "entry" : "entries"}
        </p>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setType(ALL);
              setStatus(ALL);
              setJurisdiction(ALL);
            }}
            className="text-sm font-medium text-brand-700 hover:text-brand-800"
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <ul className="mt-4 grid list-none grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <li key={p.id}>
              <PolicyCard policy={p} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 rounded-lg border border-dashed border-slate-300 p-10 text-center">
          <p className="text-sm text-slate-600">
            No entries match your filters.
          </p>
        </div>
      )}
    </div>
  );
}
