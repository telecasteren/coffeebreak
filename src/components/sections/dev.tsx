"use client";

import Typography from "@mui/material/Typography";
import { title, subtitle, paragraph } from "@/data/texts/dev-text";
import SkillCards from "../cards/skills-cards";

const Dev = () => {
  return (
    <>
      <div className="dev-section">
        <Typography variant="h1" component="h1" className="title-container">
          {title}
        </Typography>
        <Typography variant="h3" component="h3">
          {subtitle}
        </Typography>
        <p className="paragraph-text">{paragraph}</p>

        <SkillCards />
      </div>
    </>
  );
};

export default Dev;
