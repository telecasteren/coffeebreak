"use client";

import type { CSSProperties } from "react";

type CoffeeMugProps = {
  className?: string;
  style?: CSSProperties;
};

const CoffeeMug = ({ className = "", style }: CoffeeMugProps) => {
  return (
    <i
      className={`fa-solid fa-mug-hot ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

export default CoffeeMug;
