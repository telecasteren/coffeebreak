"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Landing from "@/components/landing-section";
import Hero from "@/components/hero-section";
import Projects from "@/components/projects-section";
import CaseStudy from "@/components/case-study-section";
import Contact from "@/components/contact-section";

export default function App() {
  return (
    <main>
      <Header />

      <section id="landing">
        <Landing />
      </section>

      <section id="hero">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="case-studies">
        <CaseStudy />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
