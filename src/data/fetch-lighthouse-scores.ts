export type Scores = {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
};

const isScores = (data: unknown): data is Scores => {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.performance === "number" &&
    typeof d.accessibility === "number" &&
    typeof d.bestPractices === "number" &&
    typeof d.seo === "number"
  );
};

export const fetchLighthouseScores = async (): Promise<Scores | null> => {
  try {
    const result = await fetch("/lighthouse/scores.json", {
      cache: "no-store",
    });
    if (!result.ok) throw new Error("Failed to fetch Lighthouse scores");
    const data: unknown = await result.json();
    return isScores(data) ? data : null;
  } catch {
    return null;
  }
};
