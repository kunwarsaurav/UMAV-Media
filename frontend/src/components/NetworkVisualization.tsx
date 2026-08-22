"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function NetworkVisualization() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center font-sans">
      {/* Central Node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute z-20 w-32 h-32 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
      >
        <span className="font-heading font-semibold text-lg text-[#0F172A] tracking-wide">
          UMAV
        </span>
      </motion.div>

      {/* Input Nodes (Left side) */}
      <div className="absolute left-0 md:left-10 flex flex-col gap-10 z-10">
        {["PODCAST", "STREAM", "INTERVIEW"].map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-24 px-3 py-2 bg-white border border-[#E2E8F0] rounded-md shadow-sm text-center text-xs font-semibold tracking-wider text-[#475569]">
              {label}
            </div>
            {/* Connecting Line */}
            <div className="h-[1px] w-12 md:w-24 bg-[#E2E8F0]" />
          </motion.div>
        ))}
      </div>

      {/* Output Nodes (Right side) */}
      <div className="absolute right-0 md:right-10 flex flex-col gap-6 z-10 items-end">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            className="flex items-center gap-4"
          >
            {/* Connecting Line */}
            <div className="h-[1px] w-12 md:w-24 bg-[#E2E8F0]" />
            <div className="w-12 h-16 bg-white border border-[#E2E8F0] rounded-md shadow-sm flex items-center justify-center">
              <div className="w-4 h-4 rounded-sm bg-[#F1F5F9] border border-[#E2E8F0]" />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Background Grid for architectural feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWNDBIMHptMzkuNSAwVjBINFY0MHoiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-50 z-0 mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" style={{ maskImage: "radial-gradient(circle, black, transparent 70%)", WebkitMaskImage: "radial-gradient(circle, black, transparent 70%)" }} />
    </div>
  );
}
