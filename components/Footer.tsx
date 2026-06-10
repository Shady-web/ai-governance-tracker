export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-content px-4 py-8 text-sm text-slate-500 sm:px-6">
        <p className="max-w-2xl">
          This tracker is an independent reference project. Entries summarise
          public instruments in plain language and link to primary sources;
          they are not legal advice. Statuses reflect the most recent public
          information and may change.
        </p>
        <p className="mt-3">
          © {new Date().getFullYear()} · Nigeria &amp; Africa AI Governance
          Tracker
        </p>
      </div>
    </footer>
  );
}
