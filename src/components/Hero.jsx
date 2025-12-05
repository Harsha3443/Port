import React from "react";
import FadeIn from "./animations/FadeIn";

const Hero = () => {
  return (
    <FadeIn delay={0.1}>
    <div className="hero">
      <div className="hero-left">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          Open to Job · AIML
        </div>
        <h1 className="hero-title">
          Hi, I'm Harsha Vardhan Sai
          <br />
          AIML Developer & Web Builder
        </h1>
        <p className="hero-subtitle">
          I design and build intelligent systems using Machine Learning and Deep Learning,
          and craft modern web interfaces to showcase them. Currently focused on
          applied AI, ML, DL and full-stack prototypes.
        </p>
        <div className="hero-actions">
          <a href="#projects">
            <button className="btn-primary">View Projects</button>
          </a>
          <a href="#contact">
            <button className="btn-secondary">Contact Me</button>
          </a>
        </div>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <span>ML / DL</span>
            CNN · Python
          </div>
          <div className="hero-meta-item">
            <span>Web</span>
            React (basics) · Streamlit
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-card">
          <div className="hero-avatar">H</div>
          <div className="hero-role">
            AI / ML Developer · Student  
            <br />
            Based in India
          </div>
          <div className="hero-highlight">
            Building intelligent systems that are practical, explainable, and easy to use.
            Currently exploring  cloud ML, and production-ready AI workflows.
          </div>
          <div className="hero-chips">
            <span className="chip">Python</span>
            <span className="chip">TensorFlow / PyTorch</span>
            <span className="chip">React</span>
          </div>
        </div>
      </div>
    </div>
    </FadeIn>
  );
};

export default Hero;
