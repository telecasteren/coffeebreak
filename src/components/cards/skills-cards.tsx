import Typography from "@mui/material/Typography";
import { InputRange } from "@/components/layout/input-range";
import { frontend, backend, tools } from "@/data/skills/skills";

const SkillCards = () => {
  return (
    <>
      <div className="grid-background">
        <div className="skills-container">
          <Typography variant="h2" component="h2">
            Experience and technologies
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
              ))}{" "}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCards;
