"use client";

import { LandingTitle, LandingText } from "@/data/texts/landing-text";
import Typography from "@mui/material/Typography";
import { CoffeeIcon } from "@/components/icons/coffee-icon";
import { useState } from "react";

const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
  };

  return (
    <>
      <Typography variant="h1" component="h1">
        {LandingTitle}
      </Typography>
      <Typography variant="h2" component="h2">
        {LandingText}
      </Typography>
      <a
        href="#about"
        className="start-link"
        onMouseEnter={startAnimation}
        onMouseLeave={stopAnimation}
      >
        Start brewing{" "}
        <CoffeeIcon variant={isAnimating ? "animate" : "normal"} />
      </a>
    </>
  );
};

export default Hero;
