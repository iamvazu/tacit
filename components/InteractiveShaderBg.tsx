'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function InteractiveShaderBg() {
  const [hasWebGPU, setHasWebGPU] = useState<boolean | null>(null);
  const [ShaderModule, setShaderModule] = useState<any>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'gpu' in navigator) {
      (navigator as any).gpu?.requestAdapter?.().then((adapter: any) => {
        if (adapter) {
          import('shaders/react')
            .then((mod) => {
              setShaderModule(mod);
              setHasWebGPU(true);
            })
            .catch(() => {
              setHasWebGPU(false);
            });
        } else {
          setHasWebGPU(false);
        }
      }).catch(() => {
        setHasWebGPU(false);
      });
    } else {
      setHasWebGPU(false);
    }
  }, []);

  // Sleek deep obsidian / cyan constellation & wave simulation
  useEffect(() => {
    if (hasWebGPU === false && canvasRef.current) {
      const canvas = canvasRef.current;
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
      const particleCount = Math.min(50, Math.floor(width / 26));

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.5 + 0.8,
          alpha: Math.random() * 0.6 + 0.2,
        });
      }

      let time = 0;
      const render = () => {
        time += 0.006;
        ctx.clearRect(0, 0, width, height);

        // Deep subterranean obsidian & laser cyan radial glows
        const grad = ctx.createRadialGradient(
          width * 0.35 + Math.sin(time) * 80,
          height * 0.45 + Math.cos(time * 0.8) * 40,
          10,
          width * 0.5,
          height * 0.5,
          width * 0.7
        );
        grad.addColorStop(0, 'rgba(0, 242, 254, 0.08)');
        grad.addColorStop(0.4, 'rgba(14, 28, 54, 0.4)');
        grad.addColorStop(1, 'rgba(6, 8, 13, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        // Connect constellation telemetry
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 242, 254, ${p.alpha * 0.7})`;
          ctx.fill();

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 130) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(0, 242, 254, ${(1 - dist / 130) * 0.16})`;
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
    }
  }, [hasWebGPU]);

  if (hasWebGPU && ShaderModule) {
    const { Shader, MeshGradient, SimplexNoise, CursorRipples } = ShaderModule;
    return (
      <div className="shader-container" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'auto', zIndex: 0 }}>
        <Shader style={{ width: '100%', height: '100%', display: 'block' }}>
          <MeshGradient colorA="#06080D" colorB="#0B1626" speed={0.35} />
          <SimplexNoise scale={3.2} opacity={0.06} blendMode="softLight" />
          {CursorRipples && <CursorRipples color="#00f2fe" radius={0.3} speed={0.7} opacity={0.35} />}
        </Shader>
        <div className="shader-grid-overlay" />
      </div>
    );
  }

  return (
    <div className="shader-container" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      <div className="shader-grid-overlay" />
    </div>
  );
}
