"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Play } from "lucide-react";
import { Button } from "./Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "Creators", href: "/#creators" },
    { name: "Brands", href: "/#brands" },
    { name: "Network", href: "/#network" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-lg border-b border-brand-primary/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="UMAV Logo" 
                className="w-full h-full object-contain transition-transform duration-350 group-hover:scale-110 filter drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]" 
              />
            </div>
            <span className="font-heading font-black text-xl md:text-2xl tracking-[0.2em] text-text-primary uppercase mt-0.5 bg-gradient-to-r from-text-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
              UMAV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-text-secondary hover:text-brand-accent transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-brand-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/#contact" variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              START A CAMPAIGN
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-primary p-2 -mr-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-2xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-heading text-text-primary border-b border-brand-primary/10 pb-4 hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8">
                <Button href="/#contact" variant="primary" size="lg" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  START A CAMPAIGN
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
