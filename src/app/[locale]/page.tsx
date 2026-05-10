import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Dev from "@/components/sections/Dev";
import Barista from "@/components/sections/Barista";

export default async function App() {
  return (
    <main>
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="dev">
        <Dev />
      </section>

      <section id="barista">
        <Barista />
      </section>

      <section id="mission">
        <Mission />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
