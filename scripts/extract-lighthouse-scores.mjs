import { readdir, mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const lhciDir = ".lighthouseci";
if (!existsSync(lhciDir)) {
  throw new Error("Missing .lighthouseci directory");
}

const files = await readdir(lhciDir);
const reportFiles = files
  .filter(
    (f) =>
      f.endsWith(".report.json") || // LHCI
      /^lhr-.*\.json$/.test(f), // fallback
  )
  .map((f) => path.join(lhciDir, f));

if (!reportFiles.length) {
  throw new Error(`No Lighthouse report JSON files found in ${lhciDir}`);
}

const reports = await Promise.all(
  reportFiles.map(async (file) => JSON.parse(await readFile(file, "utf8"))),
);

const avgPct = (pick) => {
  const values = reports.map((r) => pick(r) ?? 0);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  return Math.round(avg * 100);
};

const scores = {
  performance: avgPct((r) => r.categories?.performance?.score),
  accessibility: avgPct((r) => r.categories?.accessibility?.score),
  bestPractices: avgPct((r) => r.categories?.["best-practices"]?.score),
  seo: avgPct((r) => r.categories?.seo?.score),
};

await mkdir("public/lighthouse", { recursive: true });
await writeFile(
  "public/lighthouse/scores.json",
  JSON.stringify(scores, null, 2) + "\n",
  "utf8",
);

console.log("Updated public/lighthouse/scores.json:", scores);
