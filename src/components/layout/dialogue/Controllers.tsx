import {
  ArrowBackIosNewIcon,
  ArrowForwardIosIcon,
} from "@/components/icons/index";
import Button from "@mui/material/Button";
import type { ControllersProps } from "./index";

export const Controllers = ({
  onClick,
  direction,
  disabled,
  label,
}: ControllersProps) => {
  return (
    <Button
      aria-label={label}
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
