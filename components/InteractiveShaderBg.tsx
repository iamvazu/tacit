'use client';

import React, { useEffect, useRef } from 'react';

export default function InteractiveShaderBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 650;
    };
    window.addEventListener('resize', handleResize);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; alpha: number }> = [];
    const particleCount = Math.min(45, Math.floor(width / 28));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let time = 0;
    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Subtle warm sunlit ambient glow
      const grad = ctx.createRadialGradient(
        width * 0.35 + Math.sin(time) * 40,
        height * 0.4 + Math.cos(time * 0.6) * 30,
        20,
        width * 0.45,
        height * 0.45,
        width * 0.6
      );
      grad.addColorStop(0, 'rgba(254, 243, 199, 0.45)');
      grad.addColorStop(0.6, 'rgba(248, 247, 244, 0.15)');
      grad.addColorStop(1, 'rgba(248, 247, 244, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Connect voxel particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw crisp square voxel particle
        const size = p.r * 1.8;
        ctx.fillStyle = i % 2 === 0 ? `rgba(217, 119, 6, ${p.alpha * 0.7})` : `rgba(20, 16, 17, ${p.alpha * 0.4})`;
        ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(20, 16, 17, ${(1 - dist / 115) * 0.08})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="shader-container" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      <div className="shader-grid-overlay" />
    </div>
  );
}
