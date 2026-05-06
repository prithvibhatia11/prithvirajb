import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface Props {
  src: string | null;
  onClose: () => void;
}

export default function PdfModal({ src, onClose }: Props) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col"
          onClick={onClose}
        >
          <div className="absolute top-5 right-5 z-10 flex gap-2">
            <a
              data-hover
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 h-11 rounded-full border border-primary/40 bg-background/80 text-primary text-sm uppercase tracking-wider font-medium flex items-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Open in new tab
            </a>
            <button
              data-hover
              onClick={onClose}
              aria-label="Close viewer"
              className="h-11 w-11 rounded-full border border-primary/40 bg-background/80 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <motion.div
            initial={{ scale: 0.96, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 20 }}
            className="flex-1 m-4 md:m-10 rounded-lg overflow-hidden border border-primary/20 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <object data={`${src}#toolbar=0&navpanes=0`} type="application/pdf" className="w-full h-full">
              <div className="flex flex-col items-center justify-center h-full text-center p-8 gap-4">
                <p className="text-foreground/80">Your browser blocked the embedded PDF viewer.</p>
                <a
                  data-hover
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-primary text-primary text-sm uppercase tracking-wider font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Open PDF in new tab
                </a>
              </div>
            </object>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
