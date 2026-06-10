import { useEffect } from 'react';

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxImgs = document.querySelectorAll('.about-img-side img, .mosaic-cell img');
      parallaxImgs.forEach((el) => {
        const img = el as HTMLImageElement;
        if (!img.parentElement) return;
        const rect = img.parentElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const speed = 0.05;
          const offset = (window.innerHeight - rect.top) * speed;
          img.style.transform = `translateY(${offset}px) scale(1.05)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
