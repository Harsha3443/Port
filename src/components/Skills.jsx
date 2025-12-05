import React from "react";
import FadeIn from "./animations/FadeIn"

const skills = [
  { name: "Python", level: "Primary language for ML & scripting" },
  { name: "Machine Learning", level: "Regression · Classification · Clustering" },
  { name: "Deep Learning", level: "CNNs · basic NLP · Keras / PyTorch" },
  { name: "Data Handling", level: "NumPy · Pandas · data preprocessing" },
  { name: "Web Development", level: "React basics" },
  { name: "Tools", level: "Git · VS Code · Jupyter · Google Colab . Pycharm" },
];

const Skills = () => {
  return (
    <FadeIn delay={0.2}>
    <>
      <div className="section-header">
        <div className="section-kicker">Skills</div>
        <h2 className="section-title">Tech I work with</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">{skill.level}</div>
          </div>
        ))}
      </div>
    </>
    </FadeIn>
  );
};

export default Skills;
