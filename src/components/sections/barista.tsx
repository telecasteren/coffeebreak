"use client";

import Typography from "@mui/material/Typography";
import { title, subtitle, paragraph } from "@/data/sections/barista-text";

const Barista = () => {
  return (
    <>
      <Typography variant="h1" component="h1" className="title-container">
        {title}
      </Typography>
      <Typography variant="h3" component="h3">
        {subtitle}
      </Typography>
      <p className="paragraph-text">{paragraph}</p>
    </>
  );
};

export default Barista;
