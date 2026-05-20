import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Scores } from "@/data/fetch-lighthouse-scores";

const scoreColor = (score: number) => {
  if (score >= 90) return "success";
  if (score >= 70) return "warning";
  return "error";
};

export const LighthouseBadges = ({ scores }: { scores: Scores }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      flexWrap="wrap"
      useFlexGap
      sx={{
        justifySelf: "center",
        marginTop: "40px",
      }}
    >
      <Chip
        variant="outlined"
        label={`${scores.performance}`}
        color={scoreColor(scores.performance)}
        size="medium"
      />
      <Chip
        variant="outlined"
        label={`${scores.accessibility}`}
        color={scoreColor(scores.accessibility)}
        size="medium"
      />
      <Chip
        variant="outlined"
        label={`${scores.bestPractices}`}
        color={scoreColor(scores.bestPractices)}
        size="medium"
      />
      <Chip
        variant="outlined"
        label={`${scores.seo}`}
        color={scoreColor(scores.seo)}
        size="medium"
      />
    </Stack>
  );
};
