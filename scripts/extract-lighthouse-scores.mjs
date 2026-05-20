import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const manifestPath = path.join(".lighthouseci", "manifest.json");

if (!existsSync(manifestPath)) {
  throw new Error("Missing .lighthouseci/manifest.json");
}

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
if (!Array.isArray(manifest) || manifest.length === 0) {
  throw new Error("No Lighthouse runs found in manifest");
}

const reports = await Promise.all(
  manifest.map(async (entry) => {
    const raw = await readFile(entry.jsonPath, "utf8");
    return JSON.parse(raw);
  }),
);

const avgPct = (getScore) => {
  const values = reports.map((r) => getScore(r) ?? 0);
  const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
  return Math.round(avg * 100);
};

const scores = {
  performance: avgPct((r) => r.categories?.performance?.score),
  accessibility: avgPct((r) => r.categories?.accessibility?.score),
  bestPractices: avgPct((r) => r.categories?.["best-practices"]?.score),
  seo: avgPct((r) => r.categories?.seo?.score),
};

const outDir = path.join("public", "lighthouse");
const outFile = path.join(outDir, "scores.json");

await mkdir(outDir, { recursive: true });
await writeFile(outFile, JSON.stringify(scores, null, 2) + "\n", "utf8");

console.log("Updated", outFile, scores);
