import Typography from "@mui/material/Typography";
import { InputRange } from "@/components/layout/input-range";
import { frontend, backend, tools } from "@/data/skills/skills";
import { useTranslations } from "next-intl";

const SkillCards = () => {
  const t = useTranslations("about.dev");
  return (
    <>
      <div className="grid-background">
        <div className="skills-container">
          <Typography variant="h2" component="h2">
            {t("experience")}
          </Typography>

          <div className="skills-cards-container">
            <div className="skills-card">
              <p>01</p>
              <Typography variant="h4" component="h4">
                Frontend
              </Typography>

              {frontend.lang.map((skill, index) => (
                <span key={skill.tech}>
                  <a
                    className="skill-item"
                    key={skill.tech}
                    href={skill.url || "#"}
                  >
                    {skill.tech}
                  </a>
                  {index < frontend.lang.length - 1 && ", "}
                </span>
              ))}
              {", "}

              {frontend.frameworks.map((skill, index) => (
                <span key={skill.tech}>
                  <a
                    className="skill-item"
                    key={skill.tech}
                    href={skill.url || "#"}
                  >
                    {skill.tech}
                  </a>
                  {index < frontend.frameworks.length - 1 && ", "}
                </span>
              ))}
              <div className="slider-container">
                <InputRange id="frontend-slider" value={80} />
              </div>
            </div>

            <div className="skills-card">
              <p>02</p>
              <Typography variant="h4" component="h4">
                Backend
              </Typography>

              {backend.lang.map((skill, index) => (
                <span key={skill.tech}>
                  <a
                    className="skill-item"
                    key={skill.tech}
                    href={skill.url || "#"}
                  >
                    {skill.tech}
                  </a>
                  {index < backend.lang.length - 1 && ", "}
                </span>
              ))}
              {", "}

              {backend.frameworks.map((skill, index) => (
                <span key={skill.tech}>
                  <a
                    className="skill-item"
                    key={skill.tech}
                    href={skill.url || "#"}
                  >
                    {skill.tech}
                  </a>
                  {index < backend.frameworks.length - 1 && ", "}
                </span>
              ))}
              <div className="slider-container">
                <InputRange id="backend-slider" value={30} />
              </div>
            </div>

            <div className="skills-card">
              <p>03</p>
              <Typography variant="h4" component="h4">
                Tools and Database
              </Typography>

              {tools.map((skill, index) => (
                <span key={skill.tech}>
                  <a
                    className="skill-item"
                    key={skill.tech}
                    href={skill.url || "#"}
                  >
                    {skill.tech}
                  </a>
                  {index < tools.length - 1 && ", "}
                </span>
              ))}

              <div className="slider-container">
                <InputRange id="tools-slider" value={60} />
              </div>
            </div>

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
                <InputRange id="project-slider" value={90} />
              </div>
            </div>

            <div className="skills-card">
              <p>05</p>
              <Typography variant="h4" component="h4">
                Communication and Leadership
              </Typography>
              <p>
                I view communication as a continuous growth cycle that enables
                me to always become a better person and colleague.
              </p>
              <div className="slider-container">
                <InputRange id="comms-slider" value={90} />
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
                <InputRange id="comms-slider" value={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCards;
