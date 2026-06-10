import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;

    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    let frameId: number;
    const animateCursor = () => {
      tx += (mx - tx) * 0.15;
      ty += (my - ty) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
      if (trailRef.current) {
        trailRef.current.style.left = `${tx}px`;
        trailRef.current.style.top = `${ty}px`;
      }
      frameId = requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Hover detection
    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.classList.add('hover');
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.classList.remove('hover');
    };

    // Attach listener dynamically to all matching elements in the DOM
    const attachHoverListeners = () => {
      document.querySelectorAll('a, button, .prog-card, .testi-card, .news-card, .feat-card').forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachHoverListeners();

    // Since React might re-render, we can also observe DOM mutations
    const observer = new MutationObserver(() => {
      attachHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
      observer.disconnect();
      document.querySelectorAll('a, button, .prog-card, .testi-card, .news-card, .feat-card').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
};
