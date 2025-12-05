import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = ({ children, speed = -0.2, id, className = "" }) => {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 2000], [0, 2000 * speed]);

  return (
    <motion.section
      id={id}
      className={className}
      style={{
        y,
        willChange: "transform",
      }}
    >
      {children}
    </motion.section>
  );
};

export default ParallaxSection;
