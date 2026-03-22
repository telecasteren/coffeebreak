import Typography from "@mui/material/Typography";
import ProjectCards from "@/components/cards/ProjectCards";
import { Highlight } from "../Highlight";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("projects");
  return (
    <>
      <Typography variant="h2" component="h2">
        <Highlight>{t("title")}.</Highlight>
      </Typography>

      <Typography variant="h4" component="h4">
        <Highlight>{t("tagline")}</Highlight>
        {", "} {t("description")}
      </Typography>

      <Typography variant="h5" component="h5">
        {t("seeMore")}{" "}
        <a
          className="highlight change-highlight"
          href="https://github.com/telecasteren"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("github")}.
        </a>
      </Typography>

      <ProjectCards />
    </>
  );
};

export default Projects;
