import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  backgroundImage?: string;
  icon?: React.ReactNode;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  backgroundImage,
  icon,
}) => {
  return (
    <motion.section
      className="page-hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(90,0,0,0.92) 0%, rgba(139,0,0,0.85) 50%, rgba(90,0,0,0.95) 100%), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="page-hero__grid" />
      <div className="page-hero__glow" />
      <motion.div className="page-hero__breadcrumb" variants={itemVariants}>
        <Link to="/">Home</Link>
        <span className="page-hero__breadcrumb-sep">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
        <span>{eyebrow}</span>
      </motion.div>
      <motion.div className="page-hero__eyebrow" variants={itemVariants}>
        {icon}
        {eyebrow}
      </motion.div>
      <motion.h1 className="page-hero__title" variants={itemVariants}>
        {title}
        {titleAccent && (
          <>
            <br />
            <em>{titleAccent}</em>
          </>
        )}
      </motion.h1>
      {subtitle && (
        <motion.p className="page-hero__subtitle" variants={itemVariants}>
          {subtitle}
        </motion.p>
      )}
    </motion.section>
  );
};
