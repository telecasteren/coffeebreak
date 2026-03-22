import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Hero from "@/components/sections/hero";
import Mission from "@/components/sections/mission";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Dev from "@/components/sections/dev";
import Barista from "@/components/sections/barista";

export default async function App() {
  return (
    <main>
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="mission">
        <Mission />
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

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
