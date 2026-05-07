import { useEffect, useRef } from "react";

interface Pt { x: number; y: number; t: number; }

const TRAIL_MS = 320;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Pt[]>([]);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      pointsRef.current.push({ x: e.clientX, y: e.clientY, t: now });
      const target = e.target as HTMLElement;
      hoverRef.current = !!target.closest('a, button, [data-hover]');
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%) scale(${hoverRef.current ? 1.8 : 1})`;
      }
    };
    window.addEventListener('mousemove', onMove);

    let raf = 0;
    const loop = () => {
      const now = performance.now();
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      const pts = pointsRef.current.filter(p => now - p.t < TRAIL_MS);
      pointsRef.current = pts;

      if (pts.length >= 2) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        // Glow pass (wider, faded)
        for (let pass = 0; pass < 2; pass++) {
          for (let i = 1; i < pts.length; i++) {
            const a = pts[i - 1];
            const b = pts[i];
            const age = (now - b.t) / TRAIL_MS;
            const alpha = Math.max(0, 1 - age);
            if (alpha <= 0) continue;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            if (pass === 0) {
              ctx.strokeStyle = `rgba(255,107,0,${0.25 * alpha})`;
              ctx.lineWidth = 8;
            } else {
              ctx.strokeStyle = `rgba(255,107,0,${alpha})`;
              ctx.lineWidth = 2.5;
            }
            ctx.stroke();
          }
        }
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
