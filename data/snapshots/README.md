# Dataset snapshots

Each file here is a dated, point-in-time copy of `data/policies.ts`, so a
past state of the tracker can be reconstructed later even after entries are
edited or corrected.

- Filename: `YYYY-MM-DD.json`
- Created with: `npm run snapshot` (see the root README for details)
- Not imported by the app — these are plain JSON on disk, not part of the
  client bundle.

Do not hand-edit snapshot files. They're a record of what the dataset
looked like on that date, not a place to make corrections — corrections
belong in `data/policies.ts`, with a matching entry in `data/changelog.ts`.
