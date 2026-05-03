import Typography from "@mui/material/Typography";
import DevSkillCards from "../cards/DevSkillCards";
import { FolderCodeIcon } from "@/components/icons/code-icon";
import { Highlight } from "@/components/Highlight";
import { useTranslations } from "next-intl";

const Dev = () => {
  const t = useTranslations("about.dev");
  return (
    <div className="dev-section">
      <div className="title-container">
        <Typography variant="h1" component="h1" className="title-container">
          {t("devTitle")}
        </Typography>
        <FolderCodeIcon variant="animate" size={110} />
      </div>
      <Typography variant="h2" component="h2">
        <Highlight>{t("devTagline")}</Highlight> {t("devSubtitle")}
      </Typography>
      <p className="paragraph-text">{t("devDescription")}</p>

      <DevSkillCards />
    </div>
  );
};

export default Dev;
