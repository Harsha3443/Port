import React from "react";
import FadeIn from "./animations/FadeIn";

const About = () => {
  return (
    <FadeIn delay={0.2}>
        <>
      <div className="section-header">
        <div className="section-kicker">About</div>
        <h2 className="section-title">Who I am</h2>
      </div>
      <div className="about-grid">
        <div>
          <p>
            I'm an AIML developer and student, currently exploring machine learning,
            deep learning and how to ship real-world AI projects. I enjoy combining
            clean web interfaces with intelligent backends so people can actually use
            the models I build.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            My interests include computer vision, NLP, MLOps pipelines, and turning
            research ideas into simple apps. I like documenting my learning, building
            projects, and improving my portfolio step by step.
          </p>
        </div>
        
        <div className="about-card">
          <h3 style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>Quick snapshot</h3>
          <ul className="about-list">
            <li>🎓 AIML / Data Science track</li>
            <li>⚙️ Comfortable with Python & ML libraries</li>
            <li>🧱 Learning React + backend integration</li>
            <li>🚀 Goal: Strong ML engineer with solid dev skills</li>
          </ul>
        </div>
      </div>
      </>
    </FadeIn>
  );
};

export default About;
