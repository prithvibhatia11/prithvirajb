const items = [
  { stat: "₹300Cr+", label: "Risk identified — Bank Guarantee discrepancy, Western Coalfields Ltd" },
  { stat: "₹70L", label: "D2C revenue — Sort'd Enterprises, built from scratch in under 6 months" },
  { stat: "₹30L", label: "in 24 days — Masters' Union founder challenge, only team to accept and complete" },
  { stat: "1st", label: "Place — Blue Tokai live project, 200+ participants" },
  { stat: "2nd", label: "Runner-up — Samsara Gin market research, 60+ teams" },
  { stat: "CA", label: "Cleared first attempt — November 2023, one of the lowest-passing attempts" },
  { stat: "Rank 1", label: "District PCM — Rajnandgaon, Class 12, 2018" },
  { stat: "10/10", label: "CGPA Class 10 — Top 2% among 16L+ CBSE students, felicitated by Dainik Bhaskar" },
  { stat: "25%", label: "Merit scholarship — Masters' Union PGP TBM" },
  { stat: "5S", label: "Champ — Two consecutive months, Kalpataru Limited, 150+ employees" },
  { stat: "250+", label: "Students — attended voluntary statistics lectures at Masters' Union" },
];

function Pill({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="glass rounded-2xl px-5 py-4 flex items-center gap-4 min-w-[320px]">
      <span className="text-primary font-display font-bold text-2xl whitespace-nowrap">{stat}</span>
      <span className="text-sm text-foreground/80 leading-snug">{label}</span>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 overflow-hidden">
      <div className="container mb-10">
        <p className="label-accent mb-3">Receipts</p>
        <h2 className="font-display font-bold text-4xl md:text-6xl">Achievements</h2>
      </div>
      <div className="hidden md:block group relative">
        <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {[...items, ...items].map((it, i) => <Pill key={i} {...it} />)}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
      <div className="md:hidden container grid gap-4">
        {items.map((it, i) => <Pill key={i} {...it} />)}
      </div>
    </section>
  );
}
