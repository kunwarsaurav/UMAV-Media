"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mic, MonitorPlay, MessageSquare, Play } from "lucide-react";

export function NetworkVisualization() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const inputs = [
    { label: "PODCAST", icon: <Mic className="w-4 h-4 text-brand-accent" /> },
    { label: "STREAM", icon: <MonitorPlay className="w-4 h-4 text-brand-accent" /> },
    { label: "INTERVIEW", icon: <MessageSquare className="w-4 h-4 text-brand-accent" /> },
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
    <div className="relative w-full h-[500px] md:h-[600px] font-sans bg-bg-secondary border border-brand-primary/15 rounded-2xl overflow-hidden shadow-[inset_0_0_30px_rgba(139,92,246,0.06)]">
      <div className="relative w-full h-full">
        {/* Elegant Dot Pattern Background */}
        <div 
          className="absolute inset-0 z-0 opacity-30" 
          style={{
            backgroundImage: "radial-gradient(rgba(6,182,212,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(circle at center, black 45%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 45%, transparent 85%)"
          }} 
        />
      
      {/* Soft glowing ambient light behind center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-primary/10 rounded-full blur-3xl opacity-70 z-0 pointer-events-none" />

      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flowGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6,182,212,0.1)" />
            <stop offset="50%" stopColor="rgba(139,92,246,0.4)" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="flowGradientLeft" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(6,182,212,0.1)" />
            <stop offset="50%" stopColor="rgba(139,92,246,0.4)" />
            <stop offset="100%" stopColor="#06B6D4" />
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
          className="absolute left-[3%] sm:left-[5%] md:left-[8%] z-20"
          style={{ top: `${inputY[i]}%`, transform: "translateY(-50%)" }}
        >
          <div className="flex items-center gap-1.5 sm:gap-3 px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-bg-tertiary/80 border border-brand-accent/20 rounded-xl shadow-lg shadow-black/40 w-[95px] sm:w-[130px] md:w-[155px] backdrop-blur-md hover:border-brand-accent hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300">
            <div className="p-0.5 sm:p-1 md:p-2 bg-brand-accent/10 rounded-lg shrink-0">
              {item.icon}
            </div>
            <span className="text-[8px] sm:text-[10px] md:text-xs font-bold tracking-wider text-text-primary">
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-brand-accent via-brand-primary to-brand-pink border border-white/20 shadow-[0_0_50px_rgba(139,92,246,0.35)] flex items-center justify-center backdrop-blur-lg overflow-hidden p-2 md:p-3"
      >
        <div className="absolute inset-1 rounded-full border border-white/10 animate-ping opacity-30 pointer-events-none" />
        <img 
          src="/logo.png" 
          alt="UMAV Central Node" 
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" 
        />
      </motion.div>

      {/* Output Nodes (Right side) */}
      {outputs.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
          className="absolute right-[3%] sm:right-[5%] md:right-[8%] z-20"
          style={{ top: `${outputY[i]}%`, transform: "translateY(-50%)" }}
        >
          <div className="flex items-center justify-between px-1.5 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-bg-tertiary/80 border border-brand-primary/20 rounded-xl shadow-lg shadow-black/40 w-[80px] sm:w-[110px] md:w-[145px] group hover:border-brand-primary hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 cursor-default backdrop-blur-md">
            <span className="text-[7px] sm:text-[9px] md:text-xs font-bold tracking-wider text-text-secondary group-hover:text-brand-accent transition-colors">
              {item.label}
            </span>
            <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-text-muted group-hover:text-brand-primary transition-colors shrink-0" />
          </div>
        </motion.div>
      ))}
      </div>
    </div>
  );
}
