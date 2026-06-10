import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .campus-item, .contact-info-item');
    elements.forEach((el) => obs.observe(el));

    return () => {
      obs.disconnect();
    };
  }, []);
}
