import { useEffect } from 'react';

export function useTiltEffect() {
  useEffect(() => {
    const cards = document.querySelectorAll('.prog-card, .testi-card, .news-card');

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const card = mouseEvent.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = (mouseEvent.clientX - rect.left) / rect.width - 0.5;
      const y = (mouseEvent.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) translateY(-5px)`;
    };

    const handleMouseLeave = (e: Event) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = '';
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
}
