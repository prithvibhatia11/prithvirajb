import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail, Phone, Linkedin } from "lucide-react";

const rows = [
  { icon: Mail, label: "tbm26prithviraj.bhatia@mastersunion.org", href: "mailto:tbm26prithviraj.bhatia@mastersunion.org" },
  { icon: Phone, label: "+91 91115 61116", href: "tel:+919111561116" },
  { icon: Linkedin, label: "Prithviraj Bhatia", href: "https://www.linkedin.com/in/prithviraj-bhatia/", italic: true },
];

export default function Contact() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
    const rect = btnRef.current?.getBoundingClientRect();
    const origin = rect
      ? { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight }
      : { x: 0.5, y: 0.7 };
    confetti({
      particleCount: 140,
      spread: 80,
      startVelocity: 55,
      gravity: 1,
      ticks: 220,
      angle: 90,
      origin,
      colors: ["#FF6B00", "#F5F5F5", "#CC5500"],
      scalar: 1,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-20">
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
          Whether it's a role, a collaboration, or just a conversation, I'm always open. Reach out and let's see where it goes.
        </motion.p>
        <button
          ref={btnRef}
          onClick={handleClick}
          data-hover
          className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground text-base uppercase tracking-wider font-semibold hover:shadow-[0_15px_40px_-5px_hsl(24_100%_50%/0.6)] transition-shadow"
        >
          Get In Touch
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col items-center gap-4 mt-10">
                {rows.map(({ icon: Icon, label, href, italic }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    data-hover
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, type: "spring", stiffness: 220, damping: 20 }}
                    className="group inline-flex items-center gap-3 text-foreground/85 hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className={`relative ${italic ? "italic underline" : ""}`}>
                      {label}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary group-hover:w-full transition-[width] duration-300" />
                    </span>
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => setOpen(false)}
                  data-hover
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-3 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground/80 transition-colors"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
