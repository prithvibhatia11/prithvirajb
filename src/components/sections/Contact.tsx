import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail, Phone, Linkedin } from "lucide-react";

const email = { icon: Mail, label: "tbm26prithviraj.bhatia@mastersunion.org", href: "mailto:tbm26prithviraj.bhatia@mastersunion.org" };
const phone = { icon: Phone, label: "+91 91115 61116", href: "tel:+919111561116" };
const linkedin = { icon: Linkedin, label: "Prithviraj Bhatia", href: "https://www.linkedin.com/in/prithviraj-bhatia/", italic: true };

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
      <div className="container max-w-4xl text-center">
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
        <div className="relative inline-flex flex-col items-center">
          <div className="grid grid-cols-3 items-center gap-8 md:gap-16">
            <div className="flex justify-end min-w-[180px]">
              <AnimatePresence>
                {open && (
                  <motion.a
                    href={linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.08, type: "spring", stiffness: 220, damping: 20 }}
                    className="group inline-flex items-center gap-2 text-foreground/85 hover:text-primary transition-colors"
                  >
                    <linkedin.icon className="h-5 w-5 text-primary" />
                    <span className="italic underline underline-offset-4">{linkedin.label}</span>
                  </motion.a>
                )}
              </AnimatePresence>
            </div>

            <button
              ref={btnRef}
              onClick={handleClick}
              data-hover
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground text-base uppercase tracking-wider font-semibold hover:shadow-[0_15px_40px_-5px_hsl(24_100%_50%/0.6)] transition-shadow whitespace-nowrap"
            >
              Get In Touch
            </button>

            <div className="flex justify-start min-w-[180px]">
              <AnimatePresence>
                {open && (
                  <motion.a
                    href={phone.href}
                    data-hover
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.16, type: "spring", stiffness: 220, damping: 20 }}
                    className="group inline-flex items-center gap-2 text-foreground/85 hover:text-primary transition-colors"
                  >
                    <phone.icon className="h-5 w-5 text-primary" />
                    <span className="underline underline-offset-4">{phone.label}</span>
                  </motion.a>
                )}
              </AnimatePresence>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center gap-3 mt-6"
              >
                <motion.a
                  href={email.href}
                  data-hover
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="group inline-flex items-center gap-2 text-foreground/85 hover:text-primary transition-colors"
                >
                  <email.icon className="h-5 w-5 text-primary" />
                  <span className="underline underline-offset-4">{email.label}</span>
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
