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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col border border-[#151515] bg-[#0A0A0A] p-8 rounded-2xl relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF66]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <h3 className="text-5xl md:text-6xl font-heading font-medium tracking-tighter text-[#ededed] mb-2">
          {value}
        </h3>
        <p className="text-[#a3a3a3] uppercase tracking-widest text-xs font-semibold">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
