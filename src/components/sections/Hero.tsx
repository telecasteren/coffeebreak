"use client";

import Typography from "@mui/material/Typography";
import { Highlight } from "@/components/Highlight";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <>
      <Typography variant="h1" component="h1">
        {t("title")}
      </Typography>
      <Typography variant="h2" component="h2">
        <Highlight>{t("descStart")}</Highlight> {t("description")}{" "}
        <Highlight>{t("descEnd")}</Highlight>.
      </Typography>
    </>
  );
};

export default Hero;
