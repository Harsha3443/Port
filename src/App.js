import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParallaxSection from "./components/parallax/ParallaxSection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <ParallaxSection id="home" speed={-0.25} className="section">
          <Hero />
        </ParallaxSection>

        <ParallaxSection id="about" speed={-0.18} className="section">
          <About />
        </ParallaxSection>

        <ParallaxSection id="skills" speed={-0.12} className="section">
          <Skills />
        </ParallaxSection>

        <ParallaxSection id="projects" speed={-0.2} className="section">
          <Projects />
        </ParallaxSection>

        <ParallaxSection id="contact" speed={-0.1} className="section">
          <Contact />
        </ParallaxSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
