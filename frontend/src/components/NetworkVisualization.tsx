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
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Central Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="absolute z-20 w-32 h-32 rounded-full bg-[#050505] border border-[#00FF66] shadow-[0_0_30px_rgba(0,255,102,0.2)] flex items-center justify-center"
      >
        <span className="font-heading font-bold text-xl text-[#00FF66] tracking-widest">
          UMAV
        </span>
      </motion.div>

      {/* Input Nodes (Left side) */}
      <div className="absolute left-0 md:left-10 flex flex-col gap-12 z-10">
        {["PODCAST", "STREAM", "INTERVIEW"].map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-24 px-3 py-2 border border-[#151515] bg-[#0A0A0A] rounded-lg text-center text-xs font-semibold tracking-widest text-[#a3a3a3]">
              {label}
            </div>
            {/* Connecting Line */}
            <motion.div 
              className="h-[1px] bg-gradient-to-r from-[#151515] to-[#333333]"
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Output Nodes (Right side) */}
      <div className="absolute right-0 md:right-10 flex flex-col gap-6 z-10 items-end">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
            className="flex items-center gap-4"
          >
            {/* Connecting Line */}
            <motion.div 
              className="h-[1px] bg-gradient-to-l from-[#151515] to-[#00FF66]/50"
              initial={{ width: 0 }}
              animate={{ width: 80 + Math.random() * 40 }}
              transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
            />
            <div className="w-8 h-12 border border-[#151515] bg-[#0A0A0A] rounded flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#00FF66]/50" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Particles/Data flow */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-[#00FF66]"
          initial={{ 
            opacity: 0,
            x: -150, 
            y: (Math.random() - 0.5) * 200 
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            x: 150,
            y: 0
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
