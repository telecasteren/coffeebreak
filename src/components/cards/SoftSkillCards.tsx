import Typography from "@mui/material/Typography";
import { InputRange } from "@/components/layout/input-range";
import { useTranslations } from "next-intl";

const SoftSkillCards = () => {
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
                Project and Product Management
              </Typography>
              <p>
                Leading small and large projects has made me structured and
                taught me the importance of good planning, architectural
                thinking and design.
              </p>
              <div className="slider-container">
                <InputRange
                  id="project-slider"
                  label="project-slider"
                  value={80}
                />
              </div>
            </div>

            <div className="skills-card">
              <p>05</p>
              <Typography variant="h4" component="h4">
                Communication and Leadership
              </Typography>
              <p>
                I view communication as a continuous growth cycle that enables
                me to always become a better person and colleague,{" "}
                <i>and therefore a better developer</i>.
              </p>
              <div className="slider-container">
                <InputRange id="comms-slider" label="comms-slider" value={80} />
              </div>
            </div>

            <div className="skills-card">
              <p>06</p>
              <Typography variant="h4" component="h4">
                AI and Agentic Programming
              </Typography>
              <p>
                With my project and communication skills, in accordance to my
                technical skills, I&apos;m learning to reap the benefits of AI
                and AI driven development.
              </p>
              <div className="slider-container">
                <InputRange id="ai-slider" label="ai-slider" value={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftSkillCards;
