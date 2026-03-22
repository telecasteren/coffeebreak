import Typography from "@mui/material/Typography";
import { Highlight } from "@/components/Highlight";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <>
      <div className="contact-title-wrapper">
        <span className="hire-me">{t("tagline")}</span>
        <Typography variant="h2" component="h2">
          {t("title")}
        </Typography>
      </div>

      <p className="contact-text">
        {t("descPart1")} <Highlight>{t("highlightDescLine")}</Highlight>{" "}
        {t("descPart2")}{" "}
        <a href={t("mailto")} className="mailto-link">
          {t("email")}
        </a>
      </p>
    </>
  );
};

export default Contact;
