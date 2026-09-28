#!/usr/bin/env node
/**
 * Writes a dated snapshot of data/policies.ts to data/snapshots/YYYY-MM-DD.json
 * so past states of the tracker's dataset can be reconstructed later.
 *
 * Usage:
 *   npm run snapshot                # snapshot for today, refuses to overwrite
 *   npm run snapshot -- --force     # overwrite today's snapshot if it exists
 *   npm run snapshot -- 2026-06-15  # snapshot dated for a specific day
 *   npm run snapshot -- 2026-09-22 --label post-audit
 *
 * Uses the `typescript` package (already a devDependency) to transpile
 * data/policies.ts on the fly, so no build step or extra dependency is
 * required. Snapshots are plain JSON files under data/snapshots/. They are
 * not imported by the app, so they are never bundled into the client.
 */
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import ts from "typescript";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const policiesPath = path.join(root, "data", "policies.ts");
const snapshotsDir = path.join(root, "data", "snapshots");

function loadPolicies() {
  const source = fs.readFileSync(policiesPath, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: "policies.ts",
  });

  const mod = { exports: {} };
  // data/policies.ts only has a type-only import (`import type ... from "./types"`),
  // which transpileModule elides entirely; this stub is just a safety net.
  const requireShim = (id) => {
    throw new Error(`Unexpected require("${id}") while loading policies.ts for snapshot`);
  };
  const fn = new Function("module", "exports", "require", outputText);
  fn(mod, mod.exports, requireShim);

  return mod.exports.policies;
}

function main() {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const dateArg = args.find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a));
  const date = dateArg ?? new Date().toISOString().slice(0, 10);
  const labelFlagIndex = args.indexOf("--label");
  const rawLabel =
    labelFlagIndex >= 0
      ? args[labelFlagIndex + 1]
      : args.find((a) => a.startsWith("--label="))?.slice("--label=".length);

  if (labelFlagIndex >= 0 && (!rawLabel || rawLabel.startsWith("--"))) {
    console.error("Pass a value after --label, e.g. --label post-audit");
    process.exit(1);
  }

  const label = rawLabel
    ? rawLabel
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    : null;

  if (rawLabel && !label) {
    console.error("The snapshot label must contain at least one letter or number.");
    process.exit(1);
  }

  const policies = loadPolicies();
  if (!Array.isArray(policies) || policies.length === 0) {
    console.error("Could not load a non-empty `policies` array from data/policies.ts");
    process.exit(1);
  }

  fs.mkdirSync(snapshotsDir, { recursive: true });
  const filename = `${date}${label ? `-${label}` : ""}.json`;
  const outPath = path.join(snapshotsDir, filename);

  if (fs.existsSync(outPath) && !force) {
    console.error(
      `Snapshot already exists at data/snapshots/${filename}.\n` +
        `Pass --force to overwrite it: npm run snapshot -- --force`
    );
    process.exit(1);
  }

  const snapshot = {
    snapshotDate: date,
    ...(label ? { label } : {}),
    generatedAt: new Date().toISOString(),
    entryCount: policies.length,
    policies,
  };

  fs.writeFileSync(outPath, JSON.stringify(snapshot, null, 2) + "\n");
  console.log(`Wrote data/snapshots/${filename} (${policies.length} entries).`);
}

main();
