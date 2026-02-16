"use client";

import Typography from "@mui/material/Typography";
import { ContactText, ContactTitle } from "@/data/sections/contact-text";

const Contact = () => {
  return (
    <>
      <div className="contact-title-wrapper">
        <span className="hire-me">HIRE ME</span>
        <Typography variant="h2" component="h2">
          {ContactTitle}
        </Typography>
      </div>

      <p className="contact-text">{ContactText}</p>
    </>
  );
};

export default Contact;
