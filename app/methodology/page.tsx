import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How entries are selected, sourced, classified, and verified in the Nigeria & Africa AI Governance Tracker.",
};

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-slate-200 py-10 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function MethodologyPage() {
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
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Methodology
        </h1>
        <p className="mt-3 text-slate-600">
          How entries are selected, sourced, classified, and kept up to date.
        </p>
      </header>

      <div className="mt-4">
        <Section title="Purpose">
          <p>
            The Nigeria &amp; Africa AI Governance Tracker records
            AI-related laws, bills, strategies, policies and regulatory
            guidance relevant to Nigeria and selected African regional
            institutions.
          </p>
          <p>
            Its purpose is not to list every document that mentions
            artificial intelligence. It is intended to make changes in the
            governance landscape easier to verify, compare and follow over
            time.
          </p>
        </Section>

        <Section title="Scope and inclusion">
          <p>An instrument qualifies for inclusion where:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              it has a clear connection to the governance, regulation,
              development or public oversight of artificial intelligence or
              closely related automated decision systems; and
            </li>
            <li>
              there is enough evidence to establish who issued or proposed
              it, what type of instrument it is and its current status.
            </li>
          </ol>
          <p>Eligible materials may include:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>legislation;</li>
            <li>bills;</li>
            <li>national or regional AI strategies;</li>
            <li>regulatory guidance;</li>
            <li>formal policy documents;</li>
            <li>
              other official instruments that materially affect AI
              governance.
            </li>
          </ul>
          <p>
            A document is not treated as eligible merely because it
            discusses digital transformation, data or emerging technology
            in general. There must be a sufficiently direct connection to
            AI governance or a clearly relevant area such as automated
            decision-making.
          </p>
        </Section>

        <Section title="Source standard">
          <p>Primary institutional sources are preferred.</p>
          <p>For national instruments, preferred sources include:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>legislation;</li>
            <li>parliamentary records;</li>
            <li>official gazettes;</li>
            <li>government publications;</li>
            <li>regulator websites;</li>
            <li>ministry or agency publications.</li>
          </ul>
          <p>
            For regional instruments, official sources from bodies such as
            the African Union or ECOWAS are preferred.
          </p>
          <p>Secondary reporting may be used:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>to discover an instrument;</li>
            <li>to identify a possible change;</li>
            <li>to provide context.</li>
          </ul>
          <p>
            Secondary reporting should not normally be the sole basis for
            adding an instrument or assigning its legal or implementation
            status when an authoritative primary source is available.
          </p>
          <p>
            Where an official source cannot be located, the entry is either
            withheld pending verification or clearly marked to indicate
            that the evidence is limited.
          </p>
        </Section>

        <Section id="status-definitions" title="Status definitions">
          <p>The public tracker uses these primary statuses:</p>
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold text-slate-900">Proposed</dt>
              <dd className="mt-1">
                The instrument has been announced, drafted, introduced for
                consultation or formally introduced as a bill, but has not
                yet received the approval required to take effect in its
                intended form.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Adopted</dt>
              <dd className="mt-1">
                The responsible authority has formally approved, enacted or
                published the instrument. This does not by itself mean that
                every institution, programme or mechanism described in it
                is operating.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Implemented</dt>
              <dd className="mt-1">
                There is separate evidence that the main governance
                mechanism or institutional arrangement being tracked has
                moved into operation rather than existing only on paper.
              </dd>
            </div>
          </dl>
          <p>
            Where implementation is partial or uncertain, the more
            conservative status is used until stronger evidence is
            available. Publication or adoption alone does not by itself
            produce an &ldquo;Implemented&rdquo; status.
          </p>
          <p>
            Publication, adoption and commencement are recorded separately
            where the available evidence allows. These dates describe
            different stages in the life of an instrument and should not be
            treated as interchangeable.
          </p>
        </Section>

        <Section title="Conflicting evidence">
          <p>Where sources disagree:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              greater weight is given to the source with direct legal or
              institutional authority;
            </li>
            <li>newer authoritative evidence is preferred where the position has changed;</li>
            <li>
              current parliamentary records are used over older media
              reports for bill status;
            </li>
            <li>
              later regulator notices are used over older announcements
              where enforcement conditions have changed;
            </li>
            <li>
              the more conservative classification is used where credible
              sources cannot yet be reconciled.
            </li>
          </ul>
        </Section>

        <Section title="Verification dates">
          <p>
            Each policy/instrument entry supports a <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.85em]">lastVerified</code> field.
          </p>
          <p>
            This is the date on which the source links and current status
            were checked. It is not the publication date, adoption date or
            commencement date of the instrument.
          </p>
          <p>It is displayed to users as:</p>
          <p className="rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800">
            Last verified: DD Month YYYY
          </p>
          <p>
            Entries that have not yet been through a verification pass show{" "}
            <span className="font-medium">&ldquo;Verification date pending&rdquo;</span>{" "}
            instead of a fabricated or default date — including the
            deployment date or today&rsquo;s date.
          </p>
        </Section>

        <Section title="Research limitations">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              The tracker relies mainly on publicly available information.
            </li>
            <li>
              Governments and regional institutions may not publish
              implementation information consistently.
            </li>
            <li>
              Absence of public implementation evidence does not prove that
              no implementation activity exists.
            </li>
            <li>
              Classifications reflect the strongest position supported by
              evidence available at the time of verification.
            </li>
            <li>
              Entries may be revised when stronger or newer evidence
              becomes available — see the{" "}
              <Link href="/changelog" className="font-medium text-brand-700 underline hover:text-brand-800">
                changelog
              </Link>
              .
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}
