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
    { name: "Creators", href: "/creators" },
    { name: "Brands", href: "/brands" },
    { name: "Network", href: "/#network" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-[#E2E8F0] py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] flex items-center justify-center shadow-[0_2px_10px_rgba(59,130,246,0.3)] group-hover:shadow-[0_4px_15px_rgba(59,130,246,0.4)] transition-all duration-300 group-hover:scale-105">
              <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tighter text-[#0F172A] group-hover:text-[#3B82F6] transition-colors">
              UMAV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#475569] hover:text-[#0F172A] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              START A CAMPAIGN
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#0F172A] p-2 -mr-2"
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
            className="fixed inset-0 z-40 bg-[#FAFAFA] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-heading text-[#0F172A] border-b border-[#E2E8F0] pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg" className="w-full">
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
