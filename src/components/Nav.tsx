import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Foundation", href: "#foundation" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let cur = "";
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && (el as HTMLElement).getBoundingClientRect().top < 120) cur = l.href;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-primary/10" : ""
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <motion.a
          href="#"
          data-hover
          whileHover={{
            scale: 2,
            rotate: [0, -6, 6, -6, 6, 0],
            transition: { rotate: { duration: 0.5, ease: "easeInOut" }, scale: { type: "spring" } },
          }}
          style={{ filter: "drop-shadow(0 0 12px hsl(24 100% 50% / 0.5))" }}
          className="text-2xl font-bold text-primary font-display"
        >
          PB
        </motion.a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <motion.a
                href={l.href}
                data-hover
                whileHover={{
                  scale: 1.5,
                  rotate: [0, -6, 6, -6, 6, 0],
                  transition: { rotate: { duration: 0.5, ease: "easeInOut" }, scale: { type: "spring" } },
                }}
                className={`inline-block text-sm uppercase tracking-wider transition-colors ${
                  active === l.href ? "text-primary" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {l.label}
              </motion.a>
            </li>
          ))}
        </ul>
        <button data-hover className="md:hidden text-foreground" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button data-hover onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
            </div>
            <ul className="flex flex-col items-center justify-center gap-8 flex-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-display font-bold text-foreground hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
