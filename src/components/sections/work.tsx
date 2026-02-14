"use client";

import Typography from "@mui/material/Typography";
import { WorkSubtitle, WorkText, WorkTitle } from "@/data/texts/work-text";

const Work = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        {WorkTitle}
      </Typography>
      <Typography variant="h3" component="h3">
        {WorkSubtitle}
      </Typography>
      <p className="work-text">{WorkText}</p>
    </>
  );
};

export default Work;
