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
    >
      {direction === "prev" ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
    </Button>
  );
};
