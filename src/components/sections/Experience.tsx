import { motion } from "framer-motion";
import GlowCard from "@/components/GlowCard";
import kalpataru from "@/assets/kalpataru-logo.png";
import pgjoshi from "@/assets/pgjoshi-logo.png";

const cards = [
  {
    logo: kalpataru,
    company: "Kalpataru Limited",
    role: "CA Trainee, Finance & Accounts",
    meta: "March – August 2024 · Mumbai",
    one: "My first corporate role post-CA, handled standalone financials of a listed real estate company within weeks and delivered them audited ahead of historical deadlines.",
    bullets: [
      "Prepared standalone financial statements of Kalpataru Limited and 3 group entities including Schedule III disclosure notes, presented to board and statutory auditors",
      "Flagged 15% cost variance across major projects through budget reconciliation, triggered revenue reversal and reallocation to higher ROI initiatives",
      "Managed RERA-compliant quarterly filings for 3 projects governing ₹200Cr+ customer escrow accounts",
      "Mapped related-party transactions across 80+ group entities, reduced compliance issues by 10%",
    ],
    badge: "Delivered year-end financials ahead of historical deadlines, 2 months post-joining",
    award: "🏆 5S Champ, Two consecutive months | Featured in Kalpataru internal magazine",
  },
  {
    logo: pgjoshi,
    company: "P.G. Joshi & Co.",
    role: "Articled Assistant",
    meta: "March 2021 – March 2024 · Nagpur",
    one: "Three years across statutory audit, internal audit, and taxation, PSUs, listed companies, international subsidiaries, and an IPO. Where financial rigour met finding what matters.",
    bullets: [
      "Discovered ₹300Cr+ in unverified Bank Guarantees at Western Coalfields Limited, triggered systemic control overhaul at the PSU",
      "Redesigned cash flow statement format for a BSE-listed company, adopted by management, reduced reporting time by 30%",
      "Verified Dutch GAAP to IND AS conversion for BPRL International BV, Netherlands-based petroleum subsidiary of BPCL",
      "Assisted in Independent CA Certification for Blue Jet Healthcare Limited DRHP, SEBI ICDR 2018 and LODR 2015 compliance",
      "Led team of 8 for ₹125Cr+ stock audit of Mahagenco's Koradi Thermal Power Station, promoted to lead on merit",
      "Senior audit lead for CIAN Agro & Infra Limited across 8 consecutive quarters, grew from junior to team lead in 3 quarters",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="label-accent mb-3">Where I've Built</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl">Experience</h2>
        </motion.div>
        <div className="space-y-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <GlowCard className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-5 opacity-40 group-hover:opacity-100 transition-opacity duration-200">
                  <img src={c.logo} alt={c.company} className="h-9 w-9 object-contain rounded" />
                  <h3 className="font-display font-bold text-2xl md:text-3xl">{c.company}</h3>
                </div>
                <p className="text-primary text-sm uppercase tracking-wider mb-1">{c.role}</p>
                <p className="text-muted-foreground text-sm mb-5">{c.meta}</p>
                <p className="text-foreground/85 text-lg mb-6 italic">{c.one}</p>
                <ul className="space-y-3 mb-6">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-foreground/80">
                      <span className="text-primary mt-2 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {c.badge && (
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
                    {c.badge}
                  </div>
                )}
                {c.award && <p className="mt-4 text-sm text-foreground/75">{c.award}</p>}
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
