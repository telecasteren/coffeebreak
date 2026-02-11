"use client";

import Typography from "@mui/material/Typography";

const Contact = () => {
  return (
    <>
      <Typography variant="h2" component="h2">
        REACH OUT
      </Typography>
      <p className="contact-text">
        I&apos;m always open to{" "}
        <span className="highlight">new opportunities</span> and collaborations.
        Feel free to reach out to me via email at{" "}
        <a href="mailto:nilsen.tele@proton.me" className="mailto-link">
          nilsen.tele@proton.me
        </a>
        .
      </p>
    </>
  );
};

export default Contact;
