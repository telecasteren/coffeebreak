import Typography from "@mui/material/Typography";
import { ProjectCards } from "@/components/cards/index";
import { Highlight } from "../Highlight";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("projects");
  return (
    <>
      <Typography variant="h2" component="h2">
        <Highlight>{t("title")}.</Highlight>
      </Typography>

      <p className="paragraph-text">
        {t("seeMore")}{" "}
        <a
          className="highlight change-highlight"
          href="https://github.com/telecasteren"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("github")}.
        </a>
      </p>

      <ProjectCards />
    </>
  );
};

export default Projects;
