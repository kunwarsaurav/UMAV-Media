"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoCardProps {
  platform?: "tiktok" | "reels" | "shorts";
  delay?: number;
}

export function VideoCard({ platform = "tiktok", delay = 0 }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="relative aspect-[9/16] bg-[#101010] rounded-2xl overflow-hidden border border-[#1a1a1a] group"
    >
      {/* Placeholder Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151515] to-[#0a0a0a] opacity-80" />
      <div className="absolute inset-0 noise-bg" />

      {/* Abstract Content */}
      <div className="absolute inset-x-4 top-4 flex justify-between items-center opacity-30">
        <div className="w-8 h-8 rounded-full bg-white/20" />
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-white/40" />
          <div className="w-1 h-1 rounded-full bg-white/40" />
          <div className="w-1 h-1 rounded-full bg-white/40" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/50 border border-white/10 group-hover:bg-[#00FF66]/20 group-hover:text-[#00FF66] transition-colors"
        >
          <Play className="w-5 h-5 ml-1" fill="currentColor" />
        </motion.div>
      </div>

      {/* UI Elements overlay */}
      <div className="absolute bottom-4 inset-x-4 flex flex-col gap-3">
        <div className="h-4 w-3/4 bg-white/10 rounded-full" />
        <div className="h-3 w-1/2 bg-white/10 rounded-full" />
        
        <div className="flex justify-between items-end mt-2">
          <div className="h-8 w-24 bg-white/10 rounded-full" />
          
          <div className="flex flex-col gap-2 opacity-40">
            <div className="w-8 h-8 rounded-full bg-white/20" />
            <div className="w-8 h-8 rounded-full bg-white/20" />
            <div className="w-8 h-8 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
