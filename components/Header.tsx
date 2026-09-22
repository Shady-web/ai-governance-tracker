import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-700 text-sm font-bold text-white"
          >
            AI
          </span>
          <span className="text-sm font-semibold leading-tight text-slate-900 sm:text-base">
            Nigeria &amp; Africa{" "}
            <span className="font-normal text-slate-500">
              AI Governance Tracker
            </span>
          </span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:gap-x-6">
            <li>
              <Link
                href="/"
                className="text-slate-600 transition-colors hover:text-brand-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/methodology"
                className="text-slate-600 transition-colors hover:text-brand-700"
              >
                Methodology
              </Link>
            </li>
            <li>
              <Link
                href="/changelog"
                className="text-slate-600 transition-colors hover:text-brand-700"
              >
                Changelog
              </Link>
            </li>
            <li>
              <Link
                href="/policies"
                className="rounded-md bg-brand-700 px-3 py-1.5 font-medium text-white transition-colors hover:bg-brand-800"
              >
                Browse entries
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
