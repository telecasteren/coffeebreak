import {
  ArrowBackIosNewIcon,
  ArrowForwardIosIcon,
} from "@/components/icons/mui-icons";
import Button from "@mui/material/Button";
import type { ControllersProps } from "./types";

export const Controllers = ({
  onClick,
  direction,
  disabled,
}: ControllersProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      size="small"
      variant="outlined"
      sx={{
        maxWidth: "fit-content",
        color: "var(--controller)",
        borderColor: "var(--controller-border)",
        "&:hover": {
          borderColor: "var(--controller-hover)",
          color: "var(--controller-hover)",
        },
        // Add more custom styles here
      }}
    >
      {direction === "prev" ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
    </Button>
  );
};
