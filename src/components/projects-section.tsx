"use client";

import Typography from "@mui/material/Typography";

const Projects = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        MY WORK
      </Typography>
      <Typography variant="h3" component="h3">
        <span className="highlight">Everything is simple</span>, a bold
        accusation and one of my main goals when building. I want to create
        things that are simple to use, intuitive and{" "}
        <span className="highlight">solve problems</span>.
      </Typography>
      <p>Something else about my projects.</p>
    </>
  );
};

export default Projects;
