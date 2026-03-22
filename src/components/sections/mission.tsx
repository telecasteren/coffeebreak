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

      <Typography variant="h4" component="h4" className="mission-text">
        {t("content")} <Highlight>{t("tagline")}</Highlight>
      </Typography>
    </>
  );
};

export default Mission;
