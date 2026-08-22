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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col border border-[#E2E8F0] bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h3 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-[#0F172A] mb-2">
        {value}
      </h3>
      <p className="text-[#64748B] uppercase tracking-wider text-xs font-medium">
        {label}
      </p>
    </motion.div>
  );
}
