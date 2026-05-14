import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";
import { InputRange } from "@/components/layout/InputRange";

export const SoftSkillCards = () => {
  const t = useTranslations("about.coffee");
  return (
    <>
      <div className="grid-background">
        <div className="skills-container">
          <Typography variant="h3" component="h3">
            {t("experience")}
          </Typography>

          <div className="skills-cards-container">
            <div className="skills-card">
              <p>04</p>
              <Typography variant="h4" component="h4">
                Customer Relations
              </Typography>
              <p>
                Proactive communication, understanding customer experience and
                needs, building my curiosity in &quot;how people work&quot;.
              </p>
              <div className="slider-container">
                <InputRange id="ai-slider" label="ai-slider" value={60} />
              </div>
            </div>

            <div className="skills-card">
              <p>05</p>
              <Typography variant="h4" component="h4">
                Project and Product Management
              </Typography>
              <p>Structure, planning, architectural thinking and design.</p>
              <div className="slider-container">
                <InputRange
                  id="project-slider"
                  label="project-slider"
                  value={80}
                />
              </div>
            </div>

            <div className="skills-card">
              <p>06</p>
              <Typography variant="h4" component="h4">
                Communication and Leadership
              </Typography>
              <p>
                Confidence in leading projects and teams, continuously investing
                in personal growth.
              </p>
              <div className="slider-container">
                <InputRange id="comms-slider" label="comms-slider" value={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
