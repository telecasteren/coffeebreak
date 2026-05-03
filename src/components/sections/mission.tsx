import Typography from "@mui/material/Typography";
import { WifiIcon } from "@/components/icons/wifi-icon";
import { Highlight } from "@/components/Highlight";
import { useTranslations } from "next-intl";

const Mission = () => {
  const t = useTranslations("mission");
  return (
    <>
      <div className="title-container">
        <Typography variant="h1" component="h1">
          {t("title")}
        </Typography>
        <WifiIcon size={88} />
      </div>

      <Typography variant="h2" component="h2">
        <Highlight>{t("tagline1")}</Highlight>
        {", "} {t("description")}
      </Typography>

      <p className="paragraph-text">
        {t("content")} <Highlight>{t("tagline2")}</Highlight>
      </p>
    </>
  );
};

export default Mission;
