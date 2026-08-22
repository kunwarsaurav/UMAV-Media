"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mic, Video, MessageSquare, Play, Smartphone, MonitorPlay } from "lucide-react";

export function NetworkVisualization() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const inputs = [
    { label: "PODCAST", icon: <Mic className="w-4 h-4 text-[#64748B]" /> },
    { label: "STREAM", icon: <MonitorPlay className="w-4 h-4 text-[#64748B]" /> },
    { label: "INTERVIEW", icon: <MessageSquare className="w-4 h-4 text-[#64748B]" /> },
  ];

  const outputs = [
    { label: "TIKTOK" },
    { label: "REELS" },
    { label: "SHORTS" },
    { label: "LINKEDIN" },
    { label: "X / TWITTER" },
  ];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center font-sans overflow-hidden bg-[#FAFAFA] rounded-2xl">
      {/* Elegant Dot Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)"
        }} 
      />
      
      {/* Soft glowing ambient light behind center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-50 rounded-full blur-3xl opacity-60 z-0" />

      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <defs>
          <linearGradient id="flowGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="flowGradientLeft" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0" />
            <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Input Lines */}
        {inputs.map((_, i) => (
          <motion.path
            key={`in-line-${i}`}
            d={`M 20% ${30 + i * 20}% C 40% ${30 + i * 20}%, 40% 50%, 50% 50%`}
            fill="none"
            stroke="url(#flowGradientLeft)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 20 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Output Lines */}
        {outputs.map((_, i) => (
          <motion.path
            key={`out-line-${i}`}
            d={`M 50% 50% C 60% 50%, 60% ${15 + i * 17.5}%, 80% ${15 + i * 17.5}%`}
            fill="none"
            stroke="url(#flowGradientRight)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 20 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>

      {/* Central Node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border border-[#E2E8F0] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center"
      >
        <div className="absolute inset-1 rounded-full border border-blue-50 opacity-50" />
        <span className="font-heading font-semibold text-xl md:text-2xl text-[#0F172A] tracking-wide">
          UMAV
        </span>
      </motion.div>

      {/* Input Nodes (Left side) */}
      <div className="absolute left-[5%] md:left-[10%] flex flex-col gap-10 md:gap-14 z-20 h-full justify-center">
        {inputs.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            className="flex items-center"
          >
            <div className="flex items-center gap-3 px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] w-[140px] md:w-[160px]">
              <div className="p-2 bg-[#F8FAFC] rounded-lg">
                {item.icon}
              </div>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-[#475569]">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Output Nodes (Right side) */}
      <div className="absolute right-[5%] md:right-[10%] flex flex-col gap-4 md:gap-6 z-20 h-full justify-center">
        {outputs.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            className="flex items-center"
          >
            <div className="flex items-center justify-between px-4 py-2 bg-white border border-[#E2E8F0] rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] w-[120px] md:w-[140px] group hover:border-[#3B82F6] transition-colors cursor-default">
              <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[#64748B] group-hover:text-[#3B82F6] transition-colors">
                {item.label}
              </span>
              <Play className="w-3 h-3 text-[#CBD5E1] group-hover:text-[#3B82F6] transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
