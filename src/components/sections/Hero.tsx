import { motion } from "framer-motion";
import avatar from "@/assets/avatar.png";

const badges = [
  { label: "₹300Cr+ Risk Identified", top: "10%", left: "-8%", delay: 0 },
  { label: "₹70L Revenue Built", top: "55%", right: "-6%", delay: 1 },
  { label: "CA - First Attempt", bottom: "8%", left: "-2%", delay: 2 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="container grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="label-accent mb-6"
          >
            CA | PGP TBM 2026, Masters' Union
          </motion.p>
          <h1 className="font-display font-bold text-[56px] md:text-[72px] lg:text-[80px] leading-[1.02] mb-6 overflow-hidden">
            {["Prithviraj", "Bhatia"].map((w, i) => (
              <span key={w} className="inline-block overflow-hidden mr-4">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 100, damping: 16 }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-foreground/80 mb-6 max-w-2xl"
          >
            Trained to read the numbers. Wired to understand the business behind them.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-base text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Chartered Accountant with 3+ years across audits, corporate finance, and compliance, now building the strategic and entrepreneurial layer on top at Masters' Union. I've uncovered ₹300Cr risks, built a ₹70L business from scratch, and won competitions by grounding creative thinking in financial rigour. The numbers are the foundation. This is what I've built on top of them.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#experience"
              data-hover
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium uppercase tracking-wider text-sm hover:bg-primary/90 transition-all hover:shadow-[0_10px_30px_-5px_hsl(24_100%_50%/0.5)]"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download="Prithviraj_Bhatia_Resume.pdf"
              data-hover
              className="px-6 py-3 rounded-full border border-primary text-primary font-medium uppercase tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <div className="relative h-[460px] md:h-[560px]">
          <motion.img
            src={avatar}
            alt="Prithviraj Bhatia"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-contain"
            style={{ mixBlendMode: "luminosity", filter: "contrast(1.1)" }}
          />
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              className="absolute glass rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap"
              style={{ top: b.top, left: b.left, right: b.right, bottom: b.bottom }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: 1 + i * 0.2 },
                scale: { delay: 1 + i * 0.2 },
                y: { repeat: Infinity, duration: 4 + i, ease: "easeInOut", delay: b.delay },
              }}
            >
              <span className="text-primary mr-2">●</span>{b.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
