import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-4 py-24 text-center sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Entry not found</h1>
      <p className="mt-2 text-slate-600">
        The page or policy entry you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/policies"
        className="mt-6 inline-block rounded-md bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
      >
        Browse all entries
      </Link>
    </div>
  );
}
