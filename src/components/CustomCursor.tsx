import { useEffect, useRef } from "react";

interface Particle { x: number; y: number; life: number; size: number; }

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -100, y: -100, hover: false });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let lastSpawn = 0;
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%) scale(${mouseRef.current.hover ? 1.8 : 1})`;
      }
      const now = performance.now();
      if (now - lastSpawn > 16) {
        particlesRef.current.push({ x: e.clientX, y: e.clientY, life: 1, size: 6 + Math.random() * 4 });
        lastSpawn = now;
      }
      const target = e.target as HTMLElement;
      const hover = !!target.closest('a, button, [data-hover]');
      mouseRef.current.hover = hover;
    };
    window.addEventListener('mousemove', onMove);

    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const arr = particlesRef.current;
      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i];
        p.life -= 0.035;
        if (p.life <= 0) { arr.splice(i, 1); continue; }
        const r = p.size * p.life;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3);
        grad.addColorStop(0, `rgba(255,107,0,${0.55 * p.life})`);
        grad.addColorStop(1, 'rgba(255,107,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[100] hidden md:block" />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[101] hidden md:block h-2.5 w-2.5 rounded-full bg-primary transition-transform duration-150 ease-out"
        style={{ boxShadow: '0 0 12px hsl(24 100% 50% / 0.8)' }}
      />
    </>
  );
}
