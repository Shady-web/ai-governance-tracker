/**
 * Research changelog for the AI Governance Tracker.
 *
 * Records verified corrections to existing entries — status changes,
 * corrected dates, replaced sources, jurisdiction/type corrections, and
 * significant verification notes — instead of silently overwriting them.
 * See /changelog and /methodology on the site.
 *
 * ─── HOW TO ADD AN ENTRY ────────────────────────────────────────────────
 * Only add a record once a change has actually been made to
 * `data/policies.ts`, backed by a verified source. Do not record
 * speculative or planned changes.
 *
 * 1. Append an object to the array below (any position — the changelog
 *    page sorts by `date` automatically, newest first).
 * 2. `date` is the date the correction was recorded, in ISO form
 *    (YYYY-MM-DD).
 * 3. `instrumentId` should match the entry's `id` in `data/policies.ts`
 *    where the entry still exists, so the changelog can link to it.
 * 4. `field` is a short machine-readable label for what changed, e.g.
 *    "status", "title", "jurisdiction", "instrumentType", "primarySource",
 *    "publicationDate", "adoptionDate", "verificationNote".
 * 5. `previousValue` / `newValue` should be short, human-readable strings
 *    (e.g. "Proposed" → "Adopted"), not full objects.
 * 6. `reason` should explain, in plain language, why the change was made
 *    and what evidence supports it.
 * 7. `sourceUrl` should point to the evidence for the change, if the
 *    reason does not already reference `data/policies.ts`'s updated
 *    `primarySource`/`sourceUrl`.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface ChangelogEntry {
  /** ISO date (YYYY-MM-DD) the correction was recorded */
  date: string;
  /** Matches a PolicyEntry.id in data/policies.ts, where that entry still exists */
  instrumentId: string;
  /** Instrument name at the time of the change, kept even if the entry is later renamed or removed */
  instrumentTitle: string;
  /** Short machine-readable label for what changed, e.g. "status", "jurisdiction", "primarySource" */
  field: string;
  previousValue: string;
  newValue: string;
  /** Plain-language explanation of why the change was made and what evidence supports it */
  reason: string;
  /** Link to the evidence for this specific change, if not already the entry's updated source */
  sourceUrl?: string;
}

/**
 * No corrections have been recorded yet. This starts empty — do not
 * backfill invented historical entries. The first records will be added
 * once the verification audit produces confirmed changes.
 */
export const changelog: ChangelogEntry[] = [];
