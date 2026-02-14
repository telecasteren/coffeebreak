//  https://lucide-animated.com

"use client";

import type { Variants } from "motion/react";
import type { HTMLAttributes } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FolderCodeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  variant?: "normal" | "animate";
}

const CODE_VARIANTS: Variants = {
  normal: { x: 0, rotate: 0, opacity: 1 },
  animate: (direction: number) => ({
    x: [0, direction * 2, 0],
    rotate: [0, direction * -8, 0],
    opacity: 1,
    transition: {
      // repeat: Number.POSITIVE_INFINITY,
      repeat: 2,
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.2 * direction,
    },
  }),
};

const FolderCodeIcon = ({
  className,
  size = 28,
  variant = "normal",
  ...props
}: FolderCodeIconProps) => {
  return (
    <div className={cn(className)} {...props}>
      <svg
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
        <motion.path
          animate={variant}
          custom={-1}
          d="M10 10.5 8 13l2 2.5"
          initial="normal"
          variants={CODE_VARIANTS}
        />
        <motion.path
          animate={variant}
          custom={1}
          d="m14 10.5 2 2.5-2 2.5"
          initial="normal"
          variants={CODE_VARIANTS}
        />
      </svg>
    </div>
  );
};

FolderCodeIcon.displayName = "FolderCodeIcon";

export { FolderCodeIcon };
