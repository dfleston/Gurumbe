"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Corridor", href: "#corridor" },
    { label: "Why Now", href: "#why-now" },
    { label: "What We Build", href: "#what-we-build" },
    { label: "How We Work", href: "#how-we-work" },
    { label: "Who", href: "#who" },
    { label: "Thoughts", href: "#thoughts" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-outline z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display font-medium text-primary hover:text-primary-dim transition-colors">
          Gurumbé
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-on-background/70 hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`h-0.5 bg-on-background transition-all ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`h-0.5 bg-on-background transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-on-background transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-dim border-t border-outline">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-on-background hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
