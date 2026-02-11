"use client";

import CoffeeMug from "@/components/icons/fontawesome-icons";
import Typography from "@mui/material/Typography";

const Landing = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        FRONTEND DEV AND COFFEE NERD
      </Typography>
      <Typography variant="h2" component="h2">
        <span className="highlight">Notoriously curious</span> about everything,
        reaching for fullstack. Looking to improve my skills one coffee at the
        time. All things <span className="highlight">user centric</span>.
      </Typography>

      <a href="#hero" className="start-link">
        Start brewing <CoffeeMug />
      </a>
    </>
  );
};

export default Landing;
