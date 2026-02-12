"use client";

import CoffeeMug from "@/components/icons/fontawesome-icons";
import { LandingTitle, LandingText } from "@/data/texts/landing-text";
import Typography from "@mui/material/Typography";

const Landing = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        {LandingTitle}
      </Typography>
      <Typography variant="h2" component="h2">
        {LandingText}
      </Typography>
      <a href="#hero" className="start-link">
        Start brewing <CoffeeMug />
      </a>
    </>
  );
};

export default Landing;
