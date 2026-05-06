import { motion } from "framer-motion";
import GlowCard from "@/components/GlowCard";

const education = [
  {
    school: "Masters' Union",
    period: "PGP TBM · 2025–Present",
    meta: "Gurugram · 25% merit scholarship",
    note: "A programme where revenue determines grades, not just exams.",
  },
  {
    school: "ICAI",
    period: "Chartered Accountancy · 2021–2024",
    meta: "Cleared first attempt",
    note: "Cleared both groups simultaneously, November 2023, exemptions in 4 subjects in Inter and 2 in Foundation.",
  },
  {
    school: "Dr. Ambedkar Institute, Nagpur University",
    period: "BBA Finance · 2018–2021",
    meta: "CGPA 8.46/10",
    note: "Top 10% in university.",
  },
  {
    school: "Yugantar Public School (CBSE)",
    period: "Class 12: 94% · District Rank 1 PCM",
    meta: "Class 10: CGPA 10/10 · 50% merit scholarship",
    note: "Felicitated by Dainik Bhaskar.",
  },
];

const skills = [
  {
    label: "Strategy & Finance",
    tags: ["Capital Allocation", "Financial Reporting (IND AS)", "Revenue Recognition", "Risk Mitigation", "Cost Control", "Audit & Compliance", "Unit Economics", "Due Diligence"],
  },
  { label: "Tools", tags: ["Microsoft Excel (Advanced)", "SAP ERP", "Tally", "Shopify", "PowerPoint"] },
  { label: "Soft Skills", tags: ["Team Leadership", "Structured Communication", "Teaching & Simplification", "Organised Execution"] },
];

export default function Foundation() {
  return (
    <section id="foundation" className="py-14 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="label-accent mb-3">The Base</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl">Foundation</h2>
        </motion.div>

        <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlowCard className="p-6 h-full border-l-2 border-l-primary">
                <h4 className="font-display font-bold text-lg mb-2">{e.school}</h4>
                <p className="text-primary text-xs uppercase tracking-wider mb-2">{e.period}</p>
                <p className="text-foreground/85 text-sm mb-3">{e.meta}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{e.note}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">Skills</h3>
        <div className="space-y-6">
          {skills.map((s) => (
            <div key={s.label}>
              <p className="text-foreground/70 text-sm mb-3">{s.label}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full border border-primary/40 text-sm text-foreground/85 hover:bg-primary/10 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
