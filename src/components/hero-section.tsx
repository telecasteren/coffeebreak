"use client";

import Typography from "@mui/material/Typography";
import { HeroText, HeroSubTitle, HeroTitle } from "../data/texts/hero-text";

const Hero = () => {
  return (
    <>
      <Typography variant="h1" component="h1" className="hero-title-container">
        {HeroTitle}
      </Typography>

      <Typography variant="h3" component="h3">
        {HeroSubTitle}
      </Typography>
      <p className="hero-text">{HeroText}</p>
    </>
  );
};

export default Hero;
