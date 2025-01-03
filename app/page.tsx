import React from 'react';
import Home from "./home/page";
import About from "./about/page";
import Resume from "./resume/page";
import Skill from "./skills/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import { Footer } from "./components/molecules/Footer";

export default function App() {
  return (
    <div className="flex w-full justify-center min-h-screen bg-background">
    <main className="font-ubuntulight w-full max-w-screen-2xl mx-auto">
      {/* Section - Home */}
      <section id="home">
        <Home />
      </section>

      {/* Section - About */}
      <section id="about">
        <About />
      </section>

      {/* Section - Resume */}
      <section id="resume">
        <Resume />
      </section>

      {/* Section - Skills */}
      <section id="skills">
        <Skill />
      </section>

      {/* Section - Portfolio */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Section - Contact */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
      </main>
    </div>
  );
}