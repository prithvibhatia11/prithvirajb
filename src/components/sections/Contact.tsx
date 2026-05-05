import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const rows = [
  { icon: Mail, label: "tbm26prithviraj.bhatia@mastersunion.org", href: "mailto:tbm26prithviraj.bhatia@mastersunion.org" },
  { icon: Phone, label: "+91 91115 61116", href: "tel:+919111561116" },
  { icon: Linkedin, label: "Prithviraj Bhatia", href: "https://www.linkedin.com/in/prithviraj-bhatia/", italic: true },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="container max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-6xl md:text-8xl mb-6"
        >
          Let's talk.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          Whether it's a role, a collaboration, or just a conversation — I'm always open. Reach out and let's see where it goes.
        </motion.p>
        <div className="flex flex-col items-center gap-4 mb-12">
          {rows.map(({ icon: Icon, label, href, italic }) => (
            <a
              key={label}
              href={href}
              data-hover
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-3 text-foreground/85 hover:text-primary transition-colors"
            >
              <Icon className="h-5 w-5 text-primary" />
              <span className={`relative ${italic ? "italic underline" : ""}`}>
                {label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary group-hover:w-full transition-[width] duration-300" />
              </span>
            </a>
          ))}
        </div>
        <a
          href="mailto:tbm26prithviraj.bhatia@mastersunion.org"
          data-hover
          className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground text-base uppercase tracking-wider font-semibold hover:shadow-[0_15px_40px_-5px_hsl(24_100%_50%/0.6)] transition-shadow"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
