import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HighlightProps = {
  children: ReactNode;
  className?: string;
};

export const Highlight = ({
  children,
  className,
}: HighlightProps): ReactNode => {
  return <span className={cn("highlight", className)}>{children}</span>;
};
