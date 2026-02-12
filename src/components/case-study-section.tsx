"use client";

import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";

const URL =
  "https://github.com/telecasteren/social-app-noroff/blob/main/ReadMe.md";

const imageStyle = {
  borderRadius: "6px",
  opacity: 0.6,
};

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

      <div className="case-study-image">
        <Image
          src="/foodiegram_lightmode.webp"
          alt="Foodiegram app screenshot"
          className="case-study-img"
          width={1000}
          height={500}
          style={imageStyle}
        />
      </div>

      <p>Something I&apos;ve learned from this project.</p>
    </>
  );
};

export default CaseStudy;
