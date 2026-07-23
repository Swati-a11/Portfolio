import React from 'react';
import { motion } from 'framer-motion';

export const sectionBlurVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(20px)',
    scale: 0.95,
    y: 40,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const childItemVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const BlurRevealSection = ({ children, className = '', id, style }) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionBlurVariants}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
};

export default BlurRevealSection;
