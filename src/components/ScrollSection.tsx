import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  style?: React.CSSProperties;
}

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const itemVariantsLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const itemVariantsRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  className = '',
  id,
  fullHeight = true,
  style,
}) => {
  return (
    <motion.section
      id={id}
      className={`page-section ${fullHeight ? 'page-section--full' : ''} ${className}`}
      style={style}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
};
