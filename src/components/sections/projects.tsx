"use client";

import Typography from "@mui/material/Typography";
import ProjectCards from "@/components/cards/project-cards";
import { Highlight } from "../../components/Highlight";

const Projects = () => {
  return (
    <>
      <Typography variant="h3" component="h3">
        <Highlight>Selected projects.</Highlight>
      </Typography>

      <Typography variant="h5" component="h5">
        Find more on{" "}
        <a
          href="https://github.com/telecasteren"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub.
        </a>
      </Typography>

      <ProjectCards />
    </>
  );
};

export default Projects;
