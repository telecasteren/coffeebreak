"use client";

import Typography from "@mui/material/Typography";
import Link from "next/link";

const URL =
  "https://github.com/telecasteren/social-app-noroff/blob/main/ReadMe.md";

const CaseStudy = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        CASE STUDY
      </Typography>
      <Typography variant="h3" component="h3">
        <span className="highlight">Proof of concept.</span>
      </Typography>

      <Link
        href={URL}
        className="case-study-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        FOODIEGRAM
      </Link>

      <p>Something I&apos;ve learned from this project.</p>
    </>
  );
};

export default CaseStudy;
