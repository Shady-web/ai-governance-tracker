/**
 * Formats an ISO date string (YYYY-MM-DD) as "DD Month YYYY", e.g. "22 September 2026".
 * Returns null for missing/invalid input so callers can supply their own
 * neutral fallback (e.g. "Verification date pending") instead of showing
 * a wrong or misleading date.
 */
export function formatDate(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
