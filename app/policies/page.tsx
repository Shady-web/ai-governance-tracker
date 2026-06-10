import type { Metadata } from "next";
import PolicyExplorer from "@/components/PolicyExplorer";

export const metadata: Metadata = {
  title: "All entries",
  description:
    "Browse, search, and filter AI-related policies, laws, and guidelines in Nigeria, the African Union, and ECOWAS.",
};

export default function PoliciesPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        All entries
      </h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Filter by type, status, or jurisdiction, or search by name and
        summary.
      </p>
      <div className="mt-8">
        <PolicyExplorer />
      </div>
    </div>
  );
}
