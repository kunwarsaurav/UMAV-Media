"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mic, MonitorPlay, MessageSquare, Play, Smartphone } from "lucide-react";

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

  // Exact vertical center percentages for alignment
  const inputY = [25, 50, 75]; 
  const outputY = [15, 32.5, 50, 67.5, 85];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] font-sans bg-[#FAFAFA] rounded-2xl overflow-x-auto overflow-y-hidden custom-scrollbar">
      <div className="relative min-w-[700px] w-full h-full">
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
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveAspectRatio="none">
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
            d={`M 15% ${inputY[i]}% C 35% ${inputY[i]}%, 35% 50%, 50% 50%`}
            fill="none"
            stroke="url(#flowGradientLeft)"
            strokeWidth="2"
            strokeDasharray="6 6"
            initial={{ strokeDashoffset: 24 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Output Lines */}
        {outputs.map((_, i) => (
          <motion.path
            key={`out-line-${i}`}
            d={`M 50% 50% C 65% 50%, 65% ${outputY[i]}%, 85% ${outputY[i]}%`}
            fill="none"
            stroke="url(#flowGradientRight)"
            strokeWidth="2"
            strokeDasharray="6 6"
            initial={{ strokeDashoffset: 24 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>

      {/* Input Nodes (Left side) */}
      {inputs.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          className="absolute left-[5%] md:left-[8%] z-20"
          style={{ top: `${inputY[i]}%`, transform: "translateY(-50%)" }}
        >
          <div className="flex items-center gap-3 px-3 py-2 md:px-4 md:py-3 bg-white border border-[#E2E8F0] rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] w-[130px] md:w-[150px]">
            <div className="p-1 md:p-2 bg-[#F8FAFC] rounded-lg shrink-0">
              {item.icon}
            </div>
            <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[#475569]">
              {item.label}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Central Node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-28 h-28 md:w-40 md:h-40 rounded-full bg-white border border-[#E2E8F0] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center"
      >
        <div className="absolute inset-1 rounded-full border border-blue-50 opacity-50" />
        <span className="font-heading font-semibold text-lg md:text-2xl text-[#0F172A] tracking-wide">
          UMAV
        </span>
      </motion.div>

      {/* Output Nodes (Right side) */}
      {outputs.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
          className="absolute right-[5%] md:right-[8%] z-20"
          style={{ top: `${outputY[i]}%`, transform: "translateY(-50%)" }}
        >
          <div className="flex items-center justify-between px-3 py-2 md:px-4 md:py-3 bg-white border border-[#E2E8F0] rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] w-[110px] md:w-[140px] group hover:border-[#3B82F6] transition-colors cursor-default">
            <span className="text-[9px] md:text-xs font-semibold tracking-wider text-[#64748B] group-hover:text-[#3B82F6] transition-colors">
              {item.label}
            </span>
            <Play className="w-3 h-3 text-[#CBD5E1] group-hover:text-[#3B82F6] transition-colors shrink-0" />
          </div>
        </motion.div>
      ))}
      </div>
    </div>
  );
}
