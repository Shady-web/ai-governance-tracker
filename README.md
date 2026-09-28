# Nigeria & Africa AI Governance Tracker

A public-facing reference tool for an evidence-based selection of AI-related policies, laws, strategies, and regulatory instruments in Nigeria, with a secondary layer for African Union and ECOWAS-level instruments. The active dataset contains 10 core instruments; it is not intended to be exhaustive.

Built with Next.js (App Router), React, TypeScript, and Tailwind CSS. All data lives in typed local files, with no database or backend API.

The tracker follows an explicit research methodology, published at `/methodology`:

- **Inclusion criteria:** what qualifies an instrument for a listing, and what doesn't (see [Scope and inclusion](app/methodology/page.tsx)).
- **A primary-source hierarchy:** official/institutional sources are preferred; secondary reporting is used to discover entries or add context, not as the sole basis for a legal or implementation claim.
- **Defined status classifications:** *Proposed / Adopted / Implemented*, each with a specific evidentiary bar. Adoption is explicitly separated from implementation (see `/methodology#status-definitions`).
- **Verification dates:** a `lastVerified` field per entry records when its status and links were last checked, separate from the instrument's own publication/adoption date. Entries that haven't been checked yet show "Verification date pending" rather than a guessed date.
- **Change records:** corrections to existing entries (status changes, corrected dates, replaced sources, etc.) are logged at `/changelog` instead of being silently overwritten.
- **Dated data snapshots:** point-in-time copies of the dataset under `data/snapshots/`, so significant research states can be reconstructed without overwriting earlier states.

The first methodology audit was completed on 22 September 2026. It migrated the active dataset to the Proposed / Adopted / Implemented framework, added structured primary institutional sources and verification details, and reduced the core dataset from 12 to 10 entries under the tightened inclusion criteria.

## Data notes

The original 12-entry state is preserved at `data/snapshots/2026-09-22.json`. The first audited 10-entry state is preserved separately at `data/snapshots/2026-09-22-post-audit.json`. Significant corrections are recorded in `data/changelog.ts` rather than silently overwritten. Inclusion remains evidence-based rather than exhaustive, and primary institutional sources are preferred.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks every entry)
npm run lint      # ESLint
```

## Adding a new policy entry

1. Open [`data/policies.ts`](data/policies.ts).
2. Copy any existing object and paste it at the end of the array.
3. Give it a unique kebab-case `id`. This becomes the URL slug (`/policies/<id>`).
4. Fill in every required field. `type`, `status`, and `jurisdiction` must be one of the allowed values in [`data/types.ts`](data/types.ts); TypeScript will flag anything else at `npm run build`.
5. Optionally fill in the audit fields (`publicationDate`, `adoptionDate`, `effectiveDate`, `primarySource`, `supplementalSources`, `lastVerified`, `verificationNote`), but only with information you've actually verified. Leave them unset otherwise; the UI handles missing values gracefully.
6. Save. The list page, detail page, and landing-page chart all update automatically, and no other file needs to change.

## Updating an existing entry

1. Edit the entry's object in [`data/policies.ts`](data/policies.ts) directly.
2. If the change is a correction to something already published (a status, a date, a source, a jurisdiction/type classification, or a similar factual detail) rather than a typo fix, also add a record to [`data/changelog.ts`](data/changelog.ts), as described below.
3. Update `lastVerified` to the date you checked the sources, if this edit was the result of a verification pass.

## Recording a changelog entry

1. Open [`data/changelog.ts`](data/changelog.ts).
2. Append an object to the `changelog` array (see the file's header comment for the full field list: `date`, `instrumentId`, `instrumentTitle`, `field`, `previousValue`, `newValue`, `reason`, and optional `sourceUrl`).
3. Only add a record for a change that has actually been made in `data/policies.ts`, backed by a verified source, never a planned or speculative change.
4. Save. `/changelog` sorts and displays records automatically, newest first.

## Creating a snapshot

```bash
npm run snapshot                # snapshot today's dataset, refuses to overwrite an existing one
npm run snapshot -- --force     # overwrite today's snapshot
npm run snapshot -- 2026-06-15  # snapshot dated for a specific day
npm run snapshot -- 2026-09-22 --label post-audit  # preserve a named research state
```

This writes `data/snapshots/YYYY-MM-DD.json`, or `data/snapshots/YYYY-MM-DD-label.json` when a label is supplied. Labels are sanitised to lowercase kebab-case. Snapshots are plain JSON on disk; they are not imported anywhere in the app, so they're never bundled into the client. See [`data/snapshots/README.md`](data/snapshots/README.md).
