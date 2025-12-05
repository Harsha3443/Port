import React, { useState, useEffect, useRef } from "react";
import FadeIn from "./animations/FadeIn";
import SlideLeft from "./animations/SlideLeft";
import SlideRight from "./animations/SlideRight";
import { motion } from "framer-motion";

const handle3DTilt = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;

  card.style.transform = `
    perspective(900px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.05)
  `;
  card.style.boxShadow = `
    ${-rotateY * 2}px ${rotateX * 2}px 30px rgba(0,0,0,0.35)
  `;
};

const reset3DTilt = (e) => {
  const card = e.currentTarget;
  card.style.transform =
    "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  card.style.boxShadow = "none";
};

const SlideUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const projects = [
  {
    title: "Fashion MNIST Classifier",
    description: "CNN-based Fashion MNIST image classifier.",
    tags: ["CNN", "TensorFlow", "React"],
    github: "https://github.com/Harsha3443/PixeLook-",
    live: "https://pixelook.streamlit.app/",
  },
  {
    title: "GenoMatch – Genetic Trait Predictor",
    description:
      "Predicts hereditary traits and disease risk based on parent genotypes.",
    tags: ["Deep Learning", "Streamlit", "Python"],
    github: "https://github.com/Harsha3443/GenoMatch",
    live: "https://genomatch.streamlit.app/",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const total = projects.length;
  const autoplayRef = useRef(null);

  const nextProject = () => {
    setIndex((i) => (i + 1) % total);
  };

  const prevProject = () => {
    setIndex((i) => (i - 1 + total) % total);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayRef.current);
  };

  // AUTO SLIDE EVERY 4 SECONDS
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4000);

    return () => clearInterval(autoplayRef.current);
  }, [total]);

  const project = projects[index];

  return (
    <>
      <div className="section-header">
        <SlideLeft>
          <div className="section-kicker">Projects</div>
        </SlideLeft>
        <SlideRight>
          <h2 className="section-title">Things I've built</h2>
        </SlideRight>
      </div>

      <div className="projects-wrapper" onMouseEnter={stopAutoplay}>
        <button className="arrow-btn" onClick={() => { stopAutoplay(); prevProject(); }}>
          ❮
        </button>

        <FadeIn delay={0.05}>
          <SlideUp delay={0.1}>
            <article
              className="project-card project-3d"
              onMouseMove={(e) => { stopAutoplay(); handle3DTilt(e); }}
              onMouseLeave={(e) => { reset3DTilt(e); }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub →
                </a>

                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          </SlideUp>
        </FadeIn>

        <button className="arrow-btn" onClick={() => { stopAutoplay(); nextProject(); }}>
          ❯
        </button>
      </div>

      {/* PROJECT COUNT INDICATOR */}
      <div style={{ textAlign: "center", marginTop: "1rem", opacity: 0.8 }}>
        {index + 1} / {total}
      </div>
    </>
  );
};

export default Projects;
