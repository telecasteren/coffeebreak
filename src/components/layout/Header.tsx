"use client";

import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <header>
      <Typography variant="h1" component="h1">
        FRONTEND DEV AND COFFEE NERD
      </Typography>
      <Typography variant="h2" component="h2">
        <span className="highlight">Notoriously curious</span> about everything,
        reaching for fullstack. Looking to improve my skills one coffee at the
        time. All things user centric.
      </Typography>
    </header>
  );
};

export default Header;
