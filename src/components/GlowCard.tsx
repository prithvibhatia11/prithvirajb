import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}

export default function GlowCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const bg = useMotionTemplate`radial-gradient(220px circle at ${mx}px ${my}px, rgba(255,107,0,0.25), transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      whileHover={{ scale: 1.02, y: -4, boxShadow: "0 20px 40px -10px rgba(255,107,0,0.25)" }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={`group relative rounded-2xl glass overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: bg }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
