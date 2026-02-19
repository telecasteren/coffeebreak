import Typography from "@mui/material/Typography";
import { InputRange } from "@/components/layout/input-range";

const SkillCards = () => {
  return (
    <>
      <div className="grid-background">
        <div className="skills-container">
          <Typography variant="h2" component="h2">
            Skills and technologies
          </Typography>

          <div className="skills-cards-container">
            <div className="skills-card">
              <p>01</p>
              <Typography variant="h4" component="h4">
                Frontend
              </Typography>
              <p>React, Next.js, TypeScript, HTML, CSS, Tailwind CSS, MUI</p>

              <div className="slider-container">
                <InputRange id="frontend-slider" value={80} />
              </div>
            </div>

            <div className="skills-card">
              <p>02</p>
              <Typography variant="h4" component="h4">
                Backend
              </Typography>
              <p>
                Node.js, Express, SQL, <i>Rust</i>, <i>C#</i>
              </p>

              <div className="slider-container">
                <InputRange id="backend-slider" value={30} />
              </div>
            </div>

            <div className="skills-card">
              <p>03</p>
              <Typography variant="h4" component="h4">
                Tools & AI
              </Typography>
              <p>
                Git, Docker, Neon, Prisma ORM, Bunny Storage, VS Code, Cursor,
                Copilot, Claude
              </p>

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
