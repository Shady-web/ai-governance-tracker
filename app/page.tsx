import Link from "next/link";
import StatsChart from "@/components/StatsChart";
import { policies } from "@/data/policies";

export default function HomePage() {
  const inForce = policies.filter((p) => p.status === "in-force").length;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            A policy reference tool
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Tracking how Nigeria — and Africa — governs artificial intelligence
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            A curated, plain-language tracker of AI-related laws, bills,
            strategies, guidelines, and frameworks in Nigeria, alongside
            African Union and ECOWAS-level instruments that shape the
            continental context.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/policies"
              className="rounded-md bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800"
            >
              Browse all {policies.length} entries
            </Link>
            <a
              href="#scope"
              className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Scope &amp; method
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        aria-labelledby="at-a-glance"
        className="mx-auto max-w-content px-4 py-14 sm:px-6"
      >
        <h2
          id="at-a-glance"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          At a glance
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          {policies.length} instruments tracked, {inForce} of them currently in
          force. Counts update automatically as entries are added.
        </p>
        <div className="mt-8">
          <StatsChart />
        </div>
      </section>

      {/* Scope */}
      <section
        id="scope"
        aria-labelledby="scope-heading"
        className="border-t border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-content px-4 py-14 sm:px-6">
          <h2
            id="scope-heading"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            Scope &amp; method
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-slate-900">What is tracked</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Laws, bills, strategies, guidelines, and frameworks that
                regulate, enable, or directly affect artificial intelligence —
                including data protection instruments that govern automated
                decision-making and the data AI systems depend on.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Jurisdictions</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Nigeria is the primary focus. African Union and ECOWAS
                instruments are included as a secondary layer because they bind
                or guide Nigerian policy and supply the continental baseline
                for AI governance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">How entries work</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Each entry records the issuing body, year, legal character,
                and current status, with a plain-language summary, a note on
                what the instrument actually says about AI, and a link to the
                primary source.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
