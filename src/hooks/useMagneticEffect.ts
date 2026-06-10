import { useEffect } from 'react';

export function useMagneticEffect() {
  useEffect(() => {
    const btns = document.querySelectorAll('.btn-crimson, .btn-hero, .btn-gold, .btn-outline, .nav-cta, .form-submit');
    
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const btn = mouseEvent.currentTarget as HTMLElement;
      const rect = btn.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const handleMouseLeave = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      btn.style.transform = '';
    };

    btns.forEach((btn) => {
      btn.classList.add('btn-magnetic');
      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      btns.forEach((btn) => {
        btn.removeEventListener('mousemove', handleMouseMove);
        btn.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
}
