"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/hero";
import Work from "@/components/sections/work";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Dev from "@/components/sections/dev";
import Barista from "@/components/sections/barista";

export default function App() {
  return (
    <main>
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="dev">
        <Dev />
      </section>

      <section id="barista">
        <Barista />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
