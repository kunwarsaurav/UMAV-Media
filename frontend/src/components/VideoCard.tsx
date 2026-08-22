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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative aspect-[9/16] bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm group"
    >
      {/* Abstract Content */}
      <div className="absolute inset-x-4 top-4 flex justify-between items-center opacity-50">
        <div className="w-8 h-8 rounded-full bg-[#E2E8F0]" />
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
          <div className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
          <div className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] transition-colors group-hover:bg-[#3B82F6] group-hover:text-white group-hover:border-[#3B82F6]">
          <Play className="w-5 h-5 ml-1" fill="currentColor" />
        </div>
      </div>

      {/* UI Elements overlay */}
      <div className="absolute bottom-4 inset-x-4 flex flex-col gap-3">
        <div className="h-4 w-3/4 bg-[#F1F5F9] rounded-sm" />
        <div className="h-3 w-1/2 bg-[#F1F5F9] rounded-sm" />
        
        <div className="flex justify-between items-end mt-2">
          <div className="h-8 w-20 bg-[#F1F5F9] rounded-sm" />
          
          <div className="flex flex-col gap-2 opacity-80">
            <div className="w-8 h-8 rounded-full bg-[#F1F5F9]" />
            <div className="w-8 h-8 rounded-full bg-[#F1F5F9]" />
            <div className="w-8 h-8 rounded-full bg-[#F1F5F9]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
