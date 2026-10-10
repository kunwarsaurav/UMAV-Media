"use client";

import { motion } from "framer-motion";

interface MetricCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function MetricCard({ value, label, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glow-card p-8 rounded-2xl flex flex-col items-center text-center justify-center"
    >
      <h3 className="text-4xl md:text-5xl font-heading font-black bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary bg-clip-text text-transparent mb-3 drop-shadow-[0_2px_10px_rgba(6,182,212,0.15)]">
        {value}
      </h3>
      <p className="text-text-secondary uppercase tracking-widest text-xs font-semibold">
        {label}
      </p>
    </motion.div>
  );
}
