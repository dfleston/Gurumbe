import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-xl tracking-[0.2em] font-semibold"
        >
          GURUMBÉ CAPITAL
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {["STRATEGY", "ASSETS", "CORRIDOR", "ABOUT"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[10px] tracking-[0.2em] text-on-background/60 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="btn-outline !py-2 !px-6">
            CONTACT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-outline-variant p-8"
        >
          <div className="flex flex-col space-y-6">
            {["STRATEGY", "ASSETS", "CORRIDOR", "ABOUT"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-xs tracking-[0.2em] text-on-background/60"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-outline text-center"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface-dim border-t border-outline-variant py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <h3 className="font-display text-2xl mb-4 tracking-[0.1em]">GURUMBÉ CAPITAL</h3>
            <p className="font-serif text-on-background/60 max-w-xs">
              Bridging value across the South-to-South corridor. Culturally rooted, technically savvy, and structurally integer.
            </p>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-8 md:justify-end items-start md:mt-2">
            {[
              "INVESTMENT · INVERSIÓN",
              "SOVEREIGNTY · SOBERANÍA",
              "LEGAL · LEGAL",
              "PRIVACY · PRIVACIDAD"
            ].map(link => (
              <a 
                key={link} 
                href="#" 
                className="font-mono text-[10px] tracking-[0.1em] text-on-background/40 hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[9px] tracking-widest text-on-background/30 uppercase">
            © 2024 GURUMBÉ CAPITAL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
