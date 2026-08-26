import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  phase: number;
  hue: number;
  alpha: number;
}

/**
 * Brasas subindo — canvas leve, com "lighter blend" para o brilho de fogo.
 */
export default function Embers({
  density = 55,
  className = "",
}: {
  density?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let particles: Particle[] = [];

    const spawn = (anywhere = false): Particle => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + 12,
      r: 0.6 + Math.random() * 2.1,
      speed: 0.35 + Math.random() * 0.95,
      drift: (Math.random() - 0.5) * 0.7,
      phase: Math.random() * Math.PI * 2,
      hue: 8 + Math.random() * 30,
      alpha: 0.25 + Math.random() * 0.55,
    });

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: density }, () => spawn(true));
    };

    let t = 0;
    const tick = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speed;
        p.x += p.drift + Math.sin((t + p.phase * 60) / 46) * 0.35;

        if (p.y < -14 || p.x < -14 || p.x > w + 14) {
          particles[i] = spawn();
          continue;
        }

        const flick = 0.55 + 0.45 * Math.sin(t / 7 + p.phase * 10);
        const fade = Math.min(1, p.y / (h * 0.22)); // some suave no topo
        const a = p.alpha * flick * fade;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, 58%, ${a})`;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 55%, ${a})`;
        ctx.shadowBlur = 9;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full mix-blend-screen ${className}`}
    />
  );
}
