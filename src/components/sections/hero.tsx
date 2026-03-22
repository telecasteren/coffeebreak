"use client";

import Typography from "@mui/material/Typography";
import Link from "next/link";
import { CoffeeIcon } from "@/components/icons/coffee-icon";
import { useState } from "react";
import { Highlight } from "@/components/Highlight";
import { useTranslations } from "next-intl";

const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const t = useTranslations("hero");

  const startAnimation = () => {
    setIsAnimating(true);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
  };

  return (
    <>
      <Typography variant="h1" component="h1">
        {t("title")}
      </Typography>
      <Typography variant="h2" component="h2">
        <Highlight>{t("descStart")}</Highlight> {t("description")}{" "}
        <Highlight>{t("descEnd")}</Highlight>.
      </Typography>
      <Link
        href="#mission"
        className="start-link"
        onMouseEnter={startAnimation}
        onMouseLeave={stopAnimation}
      >
        {t("link")} <CoffeeIcon variant={isAnimating ? "animate" : "normal"} />
      </Link>
    </>
  );
};

export default Hero;
