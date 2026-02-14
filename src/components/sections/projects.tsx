"use client";

import Typography from "@mui/material/Typography";
import ProjectCards from "@/components/cards/project-cards";

const Projects = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        PROJECTS
      </Typography>
      <Typography variant="h3" component="h3">
        <span className="highlight">Proof of concept.</span>
      </Typography>

      <ProjectCards />
    </>
  );
};

export default Projects;
