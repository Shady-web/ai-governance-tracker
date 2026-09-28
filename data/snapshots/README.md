# Dataset snapshots

Each file here is a dated, point-in-time copy of `data/policies.ts`, so a
past state of the tracker can be reconstructed later even after entries are
edited or corrected.

- Filename: `YYYY-MM-DD.json`, or `YYYY-MM-DD-label.json` for a labelled
  research state
- Created with: `npm run snapshot` (see the root README for details)
- Not imported by the app. These are plain JSON on disk, not part of the
client bundle.

## Preserved audit states

- `2026-09-22.json` is the pre-methodology-audit baseline containing 12
  entries.
- `2026-09-22-post-audit.json` is the first methodology-audited dataset,
  containing 10 active entries.

Future snapshots should preserve significant research states with labels
rather than overwrite earlier snapshots. For example:

```bash
npm run snapshot -- 2026-09-22 --label post-audit
```

Do not hand-edit snapshot files. They're a record of what the dataset
looked like on that date, not a place to make corrections. Corrections
belong in `data/policies.ts`, with a matching entry in `data/changelog.ts`.
