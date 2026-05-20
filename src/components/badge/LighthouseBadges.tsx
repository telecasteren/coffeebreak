import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { Scores } from "@/data/fetch-lighthouse-scores";
import { getScoreItems } from "./getScoreItems";

const scoreColor = (score: number) => {
  if (score >= 90) return "success";
  if (score >= 70) return "warning";
  return "error";
};

export const LighthouseBadges = ({ scores }: { scores: Scores }) => {
  const scoreItems = getScoreItems(scores);

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
      {scoreItems.map((item) => (
        <Tooltip key={item.key} title={item.label}>
          <Chip
            variant="outlined"
            label={`${item.value}`}
            color={scoreColor(item.value)}
            size="medium"
          />
        </Tooltip>
      ))}
    </Stack>
  );
};
