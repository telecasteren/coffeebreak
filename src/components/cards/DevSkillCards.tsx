import Typography from "@mui/material/Typography";
import { InputRange } from "@/components/layout/input-range";
import { frontend, backend, tools } from "@/data/skills/skills";
import { useTranslations } from "next-intl";

const DevSkillCards = () => {
  const t = useTranslations("about.dev");
  return (
    <>
      <div className="grid-background">
        <div className="skills-container">
          <Typography variant="h3" component="h3">
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
                  {skill.url ? (
                    <a
                      className="skill-item"
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {skill.tech}
                    </a>
                  ) : (
                    <span className="skill-item">{skill.tech}</span>
                  )}
                  {index < frontend.lang.length - 1 && ", "}
                </span>
              ))}
              {", "}

              {frontend.frameworks.map((skill, index) => (
                <span key={skill.tech}>
                  {skill.url ? (
                    <a
                      className="skill-item"
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {skill.tech}
                    </a>
                  ) : (
                    <span className="skill-item">{skill.tech}</span>
                  )}
                  {index < frontend.frameworks.length - 1 && ", "}
                </span>
              ))}
              <div className="slider-container">
                <InputRange
                  id="frontend-slider"
                  label="frontend-slider"
                  value={80}
                />
              </div>
            </div>

            <div className="skills-card">
              <p>02</p>
              <Typography variant="h4" component="h4">
                Backend
              </Typography>

              {backend.lang.map((skill, index) => (
                <span key={skill.tech}>
                  {skill.url ? (
                    <a
                      className="skill-item"
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {skill.tech}
                    </a>
                  ) : (
                    <span className="skill-item">{skill.tech}</span>
                  )}
                  {index < backend.lang.length - 1 && ", "}
                </span>
              ))}
              {", "}

              {backend.frameworks.map((skill, index) => (
                <span key={skill.tech}>
                  {skill.url ? (
                    <a
                      className="skill-item"
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {skill.tech}
                    </a>
                  ) : (
                    <span className="skill-item">{skill.tech}</span>
                  )}
                  {index < backend.frameworks.length - 1 && ", "}
                </span>
              ))}
              <div className="slider-container">
                <InputRange
                  id="backend-slider"
                  label="backend-slider"
                  value={30}
                />
              </div>
            </div>

            <div className="skills-card">
              <p>03</p>
              <Typography variant="h4" component="h4">
                Tools and Database
              </Typography>

              {tools.map((skill, index) => (
                <span key={skill.tech}>
                  {skill.url ? (
                    <a
                      className="skill-item"
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {skill.tech}
                    </a>
                  ) : (
                    <span className="skill-item">{skill.tech}</span>
                  )}
                  {index < tools.length - 1 && ", "}
                </span>
              ))}

              <div className="slider-container">
                <InputRange id="tools-slider" label="tools-slider" value={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevSkillCards;
