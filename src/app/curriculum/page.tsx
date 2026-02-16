"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Typography from "@mui/material/Typography";
import CurriculumVitae from "@/components/sections/curriculum";
import Contact from "@/components/sections/contact";

export default function Curriculum() {
  return (
    <main>
      <Header />
      <section id="cv">
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: "3rem", mt: 4 }}
        >
          Curriculum Vitae
        </Typography>
        <p>The journey I&apos;ve been on.</p>
        <CurriculumVitae />
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
