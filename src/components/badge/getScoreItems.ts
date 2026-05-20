import { Scores } from "@/data/fetch-lighthouse-scores";

export const getScoreItems = (scores: Scores) => {
  const scoreItems = [
    { key: "performance", label: "Performance", value: scores.performance },
    {
      key: "accessibility",
      label: "Accessibility",
      value: scores.accessibility,
    },
    {
      key: "bestPractices",
      label: "Best Practices",
      value: scores.bestPractices,
    },
    { key: "seo", label: "SEO", value: scores.seo },
  ] as const;
  return scoreItems;
};
