import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import sortd from "@/assets/sortd-logo.png";
import bluetokai from "@/assets/bluetokai-logo.png";
import samsara from "@/assets/samsara-logo.png";
import PdfModal from "@/components/PdfModal";

interface ProjectAsset { label: string; src: string; }
interface Project {
  id: string;
  logo: string;
  name: string;
  domain: string;
  duration: string;
  one: string;
  story: string;
  metrics: string[];
  result?: string;
  role: string;
  assets?: ProjectAsset[];
}

const projects: Project[] = [
  {
    id: "sortd",
    logo: sortd,
    name: "Sort'd Enterprises",
    domain: "D2C, E-commerce, Finance",
    duration: "July 2025, February 2026",
    one: "Built a D2C brand from zero, product, website, content, ads, supply chain, and financials, scaled to ₹70 lakhs in revenue.",
    story: "Started with a local market, a ₹800 instant print camera, and an idea: position it as the affordable, retro alternative to the Polaroid InstaX. Built a Shopify store, shot an organic Instagram reel, and ran Meta ads that scaled from ₹1,000/day to ₹35,000/day. Masters' Union's founder challenged the top 5 teams to hit ₹30 lakhs in 30 days. We were the only team to accept, and did it in 24 days.",
    metrics: ["₹70L Revenue", "₹30L in 24 Days", "11x ROAS (peak)", "21M+ Impressions", "₹700 CAC"],
    role: "Operations management, financial statements, unit economics modelling, co-led ad scale decision to ₹35K/day",
  },
  {
    id: "bluetokai",
    logo: bluetokai,
    name: "Blue Tokai Coffee Roasters",
    domain: "Brand Strategy, Research, Finance",
    duration: "October, December 2025",
    one: "1st place among 200+ participants, decoded why Blue Tokai was losing Gen Z and built a strategy to fix it.",
    story: "Blue Tokai had strong millennial loyalty but was invisible to Gen Z. My team went on the ground across Gurugram, interviewing 270+ Gen Z consumers. Finding: high access, low social relevance. Built a two-tier strategy, immediate action levers and long-term structural plays including Blue Tokai 2.0 concept stores. Financial feasibility models made recommendations actionable, not just creative.",
    metrics: ["270+ Interviews", "200+ Participants", "1st Place"],
    result: "🏆 1st Place, Presented to Blue Tokai Leadership",
    role: "Primary research co-lead, brand perception mapping, financial feasibility analysis",
    assets: [{ label: "See the Winning Deck", src: "/decks/bluetokai-deck.pdf" }],
  },
  {
    id: "samsara",
    logo: samsara,
    name: "Samsara Gin",
    domain: "Market Research, GTM, Analytics",
    duration: "January 2026",
    one: "Runner-up among 60+ teams, rigorous market research to crack why Indian consumers default to foreign brands for premium gin.",
    story: "End-to-end research process, secondary research, in-depth interviews, focused group discussions. Built a 5-point interval scale survey with 100+ responses and ran factor analysis, chi-square tests, and cluster analysis to identify super-variables and consumer clusters. Built a full GTM strategy covering digital awareness, on-trade activation, and high-status placements.",
    metrics: ["60+ Teams", "Runner-up"],
    result: "🥈 Runner-up, Certified by Masters' Union",
    role: "End-to-end research, statistical analysis, consumer persona, GTM co-creation",
    assets: [
      { label: "See the Winning Deck", src: "/decks/samsara-deck.pdf" },
      { label: "Certificate", src: "/decks/samsara-certificate.pdf" },
    ],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [pdf, setPdf] = useState<string | null>(null);

  return (
    <section id="projects" className="py-14 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="label-accent mb-3">In The Field</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl">Live Projects</h2>
        </motion.div>

        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {projects.map((p) => {
                if (expanded && expanded !== p.id) {
                  return (
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0, scale: 0.8, width: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="hidden md:block overflow-hidden"
                    />
                  );
                }
                const isExp = expanded === p.id;
                return (
                  <motion.article
                    key={p.id}
                    layout
                    transition={{ layout: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }, default: { duration: 0.4, ease: "easeOut" } }}
                    className={`relative rounded-2xl glass overflow-hidden ${
                      isExp ? "md:col-span-3" : ""
                    }`}
                    whileHover={!isExp ? { scale: 1.02 } : {}}
                  >
                    <img
                      src={p.logo}
                      alt=""
                      aria-hidden
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500"
                      style={{
                        width: isExp ? "45%" : "70%",
                        opacity: p.id === "sortd" ? (isExp ? 0.12 : 0.1) : 0.14,
                        filter: p.id === "sortd" ? undefined : "brightness(1.25)",
                      }}
                    />
                    <div className="relative z-10 p-6 md:p-8">
                      <p className="label-accent mb-3">{p.domain}</p>
                      <p className="text-xs text-muted-foreground mb-4">{p.duration}</p>
                      <h3 className="font-display font-bold text-xl md:text-2xl mb-3">{p.name}</h3>
                      <p className="text-foreground/85 mb-5">{p.one}</p>
                      <AnimatePresence>
                        {isExp && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], opacity: { duration: 0.4, delay: 0.1 } }}
                            className="overflow-hidden"
                          >
                            <p className="text-foreground/80 leading-relaxed mb-5">{p.story}</p>
                            <div className="flex flex-wrap gap-2 mb-5">
                              {p.metrics.map((m) => (
                                <span key={m} className="pill">{m}</span>
                              ))}
                            </div>
                            {p.result && (
                              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-4">
                                {p.result}
                              </div>
                            )}
                            <p className="text-sm text-muted-foreground">
                              <span className="text-foreground font-medium">My Role: </span>{p.role}
                            </p>
                            {p.assets && (
                              <div className="mt-5 flex flex-wrap gap-3">
                                {p.assets.map((a) => (
                                  <button
                                    key={a.label}
                                    data-hover
                                    onClick={() => setPdf(a.src)}
                                    className="px-5 py-2.5 rounded-full border border-primary text-primary text-sm uppercase tracking-wider font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                                  >
                                    {a.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <button
                        data-hover
                        onClick={() => setExpanded(isExp ? null : p.id)}
                        className="mt-5 text-primary text-sm uppercase tracking-wider font-medium hover:opacity-80"
                      >
                        {isExp ? "Show Less ←" : "Read More →"}
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
      <PdfModal src={pdf} onClose={() => setPdf(null)} />
    </section>
  );
}
