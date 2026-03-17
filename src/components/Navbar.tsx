import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "Judges", href: "#judges" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      // Updated to the theme's deep purple background and border
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#1a0533]/85 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white font-display">
          {/* Logo matches HackForge's yellow accent */}
          <span className="text-[#f5c842]">Dev</span>cation <span className="text-white/80 font-light">2026</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.85rem] uppercase tracking-wider text-[#b09fcc] hover:text-[#f5c842] transition-colors font-semibold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#idea-generator"
            // Button uses the theme's yellow gradient/solid color
            className="bg-[#f5c842] text-[#1a0533] px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#ffe27a] transition-all transform hover:-translate-y-0.5"
          >
            AI Ideas ✨
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#1a0533] border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#b09fcc] hover:text-[#f5c842]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#idea-generator"
                onClick={() => setIsOpen(false)}
                className="bg-[#f5c842] text-[#1a0533] px-4 py-3 rounded-lg text-center font-bold"
              >
                AI Ideas ✨
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;