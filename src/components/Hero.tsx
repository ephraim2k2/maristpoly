import React, { useEffect, useRef } from 'react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const dots: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${d.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero">
      {/* Animated particle canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Background pattern layers */}
      <div className="hero-pattern hero-pattern--dots" />
      <div className="hero-pattern hero-pattern--diag" />
      <div className="hero-pattern hero-pattern--orb hero-pattern--orb-tl" />
      <div className="hero-pattern hero-pattern--orb hero-pattern--orb-br" />

      {/* Floating geometric shapes */}
      <div className="hero-geo hero-geo--ring" />
      <div className="hero-geo hero-geo--diamond" />
      <div className="hero-geo hero-geo--circle" />
      <div className="hero-geo hero-geo--cross" />

      <div className="hero-left">
        <div className="photo-card">
          <img src="/img/maristw.png" alt="Graduate" className="loaded" />
        </div>
      </div>
      <div className="hero-center">
        <div className="tagline">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
          knowledge meets innovation
        </div>
        <h1 className="hero-title">
          <span className="title-line1">MARIST</span>
          <span className="title-line2">
            <span className="spin-badge-wrap">
              <svg className="spin-ring" viewBox="0 0 90 90">
                <defs>
                  <path id="ct" d="M 45,45 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                </defs>
                <circle cx="45" cy="45" r="38" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
                <text fontSize="8.5" fill="rgba(255,255,255,0.9)" fontFamily="Inter,sans-serif" letterSpacing="2.8">
                  <textPath href="#ct" startOffset="0%">MARIST · POLYTECHNIC · ENUGU ·</textPath>
                </text>
              </svg>
              <div className="spin-play">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </span>
            POLYTECHNIC
          </span>
        </h1>
        <p className="hero-desc">
          A serene and conducive environment for effective teaching and learning. NBTE-accredited National and Higher National Diploma programs since 2016.
        </p>
        <div className="hero-ctas">
          <a href="#programs" className="btn-hero" onClick={(e) => handleLinkClick(e, 'programs')}>
            Explore Programs{' '}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#admissions" className="btn-gold" onClick={(e) => handleLinkClick(e, 'admissions')}>
            Apply Now{' '}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2a0a00" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="building-card">
          <img src="/img/image 22.png" alt="Campus" className="loaded" />
        </div>
      </div>
      <div className="hero-scroll-hint" onClick={(e) => {
        e.preventDefault();
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }}>
        SCROLL
        <span />
      </div>
    </section>
  );
};
