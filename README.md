# Nigeria & Africa AI Governance Tracker

A public-facing reference tool that aggregates and visualizes AI-related policies, laws, and guidelines in Nigeria, with a secondary layer for African Union and ECOWAS-level instruments.

Built with Next.js (App Router), React, TypeScript, and Tailwind CSS. All data lives in typed local files — no database, no backend API.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks every entry)
```

Deploy by pushing the repo to GitHub and importing it on [Vercel](https://vercel.com) — no configuration needed.

## Folder structure

```
app/
  page.tsx                 Landing page: purpose, scope, visual summary
  policies/page.tsx        Searchable, filterable grid of all entries
  policies/[id]/page.tsx   Detail view for one entry (statically generated)
  layout.tsx               Shared shell (header, footer, fonts, metadata)
  globals.css              Tailwind entry point
  not-found.tsx            404 page
components/
  Header.tsx, Footer.tsx   Site chrome
  PolicyCard.tsx           Card used in the grid
  PolicyExplorer.tsx       Client component: search box + three filters
  Badges.tsx               Status / type / jurisdiction badges
  StatsChart.tsx           Pure-CSS bar charts on the landing page
data/
  types.ts                 The data model (enums + PolicyEntry interface)
  policies.ts              ← THE ONLY FILE YOU EDIT TO ADD ENTRIES
```

## Adding a new policy entry

Open `data/policies.ts`, copy any existing object, and append it to the array:

```ts
{
  id: "my-new-entry",            // unique kebab-case slug → URL /policies/my-new-entry
  name: "Official Name of the Instrument",
  issuingBody: "Who issued or sponsors it",
  year: 2026,
  type: "guideline",             // law | guideline | strategy | bill | framework
  status: "draft",               // in-force | proposed | draft | lapsed
  jurisdiction: "Nigeria",       // Nigeria | AU | ECOWAS
  summary: "2–3 plain-language sentences on what it is and why it matters.",
  aiProvisions: "What the instrument actually says about AI.",
  sourceUrl: "https://example.gov.ng/primary-source",
},
```

That's it. The list page, the detail page, and the landing-page charts all derive from this array, so everything updates automatically. If you mistype an enum value (e.g. `"inforce"`), TypeScript and `npm run build` will fail with a clear error pointing at the entry.

To change the allowed values for `type`, `status`, or `jurisdiction`, edit the arrays at the top of `data/types.ts` — labels and badge colors are in `data/types.ts` and `components/Badges.tsx`.

## Data notes

The 12 starter entries were compiled from public sources in June 2026. Statuses change quickly in this space (several Nigerian AI bills are mid-consolidation), so verify against the linked source before citing. Where no stable primary URL exists, entries link to an authoritative secondary tracker — replace these with primary sources as they become available.
