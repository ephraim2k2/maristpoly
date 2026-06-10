import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Programs } from '../components/Programs';
import { Tvet } from '../components/Tvet';
import { Campus } from '../components/Campus';
import { Admissions } from '../components/Admissions';
import { Testimonials } from '../components/Testimonials';
import { News } from '../components/News';
import { Contact } from '../components/Contact';

import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';
import { useMagneticEffect } from '../hooks/useMagneticEffect';
import { useTiltEffect } from '../hooks/useTiltEffect';

export const HomePage: React.FC = () => {
  // Initialize custom effects hooks
  useScrollReveal();
  useParallax();
  useMagneticEffect();
  useTiltEffect();

  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Tvet />
      <Campus />
      <Admissions />
      <Testimonials />
      <News />
      <Contact />
    </>
  );
};
