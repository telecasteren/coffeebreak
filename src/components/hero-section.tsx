"use client";

import Typography from "@mui/material/Typography";

const Hero = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        THE COFFEE NERD
      </Typography>
      <Typography variant="h3" component="h3">
        <span className="highlight">Barista for over a decade.</span> Drinking
        coffee fulltime.
      </Typography>
      <p>Something else about coffee and my journey into tech.</p>
    </>
  );
};

export default Hero;
