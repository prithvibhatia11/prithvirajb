import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Item { stat: string; label: string; img?: string; }

// Reordered: 2,3,4,5,6,7,10,1,8,9,11 (push 8/9/11 to end, push 1 to 4th-last)
const items: Item[] = [
  { stat: "₹70L", label: "D2C revenue, Sort'd Enterprises, built from scratch in under 6 months", img: "/achievements/achievement-2.png" },
  { stat: "₹30L", label: "in 24 days, Masters' Union founder challenge, only team to accept and complete", img: "/achievements/achievement-3.png" },
  { stat: "1st", label: "Place, Blue Tokai live project, 200+ participants", img: "/achievements/achievement-4.png" },
  { stat: "2nd", label: "Runner-up, Samsara Gin market research, 60+ teams", img: "/achievements/achievement-5.png" },
  { stat: "CA", label: "Cleared first attempt, November 2023, one of the lowest-passing attempts", img: "/achievements/achievement-6.png" },
  { stat: "Rank 1", label: "District PCM, Rajnandgaon, Class 12, 2018", img: "/achievements/achievement-7.png" },
  { stat: "5S", label: "Champ, Two consecutive months, Kalpataru Limited, 150+ employees", img: "/achievements/achievement-10.png" },
  { stat: "₹300Cr+", label: "Risk identified, Bank Guarantee discrepancy, Western Coalfields Ltd", img: "/achievements/achievement-1.png" },
  { stat: "10/10", label: "CGPA Class 10, Top 2% among 16L+ CBSE students, felicitated by Dainik Bhaskar", img: "/achievements/achievement-9.png" },
  { stat: "25%", label: "Merit scholarship, Masters' Union PGP TBM" },
  { stat: "250+", label: "Students, attended voluntary statistics lectures at Masters' Union" },
];

function Card({ stat, label, img }: Item) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(255,107,0,0.35)" }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className="glass rounded-2xl overflow-hidden flex flex-col w-[300px] shrink-0 border border-transparent hover:border-primary/50"
    >
      {img ? (
        <img src={img} alt="" className="w-full h-[120px] object-cover" loading="lazy" />
      ) : (
        <div className="w-full h-[120px] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <span className="text-primary/60 font-display font-bold text-3xl">{stat}</span>
        </div>
      )}
      <div className="px-5 py-4 flex items-start gap-3">
        <span className="text-primary font-display font-bold text-2xl whitespace-nowrap">{stat}</span>
        <span className="text-sm text-foreground/80 leading-snug">{label}</span>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollBy = (dir: 1 | -1) => {
    setPaused(true);
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="achievements" className="py-14 md:py-16 overflow-hidden">
      <div className="container mb-10">
        <p className="label-accent mb-3">Receipts</p>
        <h2 className="font-display font-bold text-4xl md:text-6xl">Achievements</h2>
      </div>

      <div className="hidden md:block relative group">
        <button
          aria-label="Previous"
          data-hover
          onClick={() => scrollBy(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors backdrop-blur-sm bg-background/40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next"
          data-hover
          onClick={() => scrollBy(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors backdrop-blur-sm bg-background/40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {paused ? (
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto px-12 scroll-smooth no-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {items.map((it, i) => <Card key={i} {...it} />)}
          </div>
        ) : (
          <div onMouseEnter={(e) => (e.currentTarget.firstElementChild as HTMLElement).style.animationPlayState = "paused"}
               onMouseLeave={(e) => (e.currentTarget.firstElementChild as HTMLElement).style.animationPlayState = "running"}>
            <div className="flex gap-4 animate-marquee">
              {[...items, ...items].map((it, i) => <Card key={i} {...it} />)}
            </div>
          </div>
        )}

        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      <div className="md:hidden container grid gap-4">
        {items.map((it, i) => <Card key={i} {...it} />)}
      </div>
    </section>
  );
}
