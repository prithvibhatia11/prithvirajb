import { motion, type Variants } from "framer-motion";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container relative">
        <h2
          className="absolute -top-4 left-0 font-display font-bold text-[180px] md:text-[280px] leading-none pointer-events-none select-none"
          style={{ color: "hsl(24 100% 50% / 0.14)" }}
        >
          About
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          <div className="hidden lg:block" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-foreground/85 text-lg leading-relaxed"
          >
            <motion.p variants={item}>
              I'm a Chartered Accountant who qualified in his first attempt, spent three years of articleship auditing listed companies and PSUs across India, and then deliberately chose to expand beyond the numbers. I grew up in Rajnandgaon, Chhattisgarh, where resources were limited but ambition wasn't. I topped my district in mathematics, earned merit scholarships, and eventually found my way into finance through a single conversation that made accounting click.
            </motion.p>
            <motion.p variants={item}>
              Today, I'm a PGP TBM student at Masters' Union on a 25% merit scholarship, building the strategic and entrepreneurial thinking that sits on top of my financial foundation. I've co-built a D2C brand that crossed ₹70 lakhs in revenue. I've won live project competitions. And I'm just getting started. I'm looking for roles at the intersection of finance and strategy, Founder's Office, Venture Capital, or anywhere that rewards someone who can both read a balance sheet and build a business.
            </motion.p>
            <motion.p variants={item} className="italic text-muted-foreground">
              When I'm not in a spreadsheet, I'm on a cricket pitch, a badminton court, or convincing my friends that my version of the plan is better than theirs. (It usually is.)
            </motion.p>
            <motion.p variants={item} className="italic text-muted-foreground">
              I also believe in giving back, I've run rural education outreach in Naxal-affected areas, reaching 100+ students across Zila Parishad schools.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
