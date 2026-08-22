"use client";

import { motion } from "framer-motion";
import { Play, Heart, MessageCircle, Share2, MoreHorizontal, Music2 } from "lucide-react";
import { useEffect, useState } from "react";

interface VideoCardProps {
  platform?: "tiktok" | "reels" | "shorts";
  delay?: number;
}

export function VideoCard({ platform = "tiktok", delay = 0 }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Different mesh gradients to simulate different "videos"
  const gradients = [
    "radial-gradient(at 0% 0%, hsla(217,100%,70%,0.3) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(204,100%,70%,0.3) 0px, transparent 50%)",
    "radial-gradient(at 100% 0%, hsla(250,100%,70%,0.3) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(204,100%,70%,0.3) 0px, transparent 50%)",
    "radial-gradient(at 50% 0%, hsla(190,100%,70%,0.3) 0px, transparent 50%), radial-gradient(at 50% 100%, hsla(217,100%,70%,0.3) 0px, transparent 50%)"
  ];
  
  // Pick one deterministically based on delay so they look different
  const gradient = gradients[Math.floor(delay * 10) % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-[9/16] bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm group cursor-pointer"
    >
      {/* Animated Mesh Gradient Background (simulating a video playing) */}
      <motion.div 
        className="absolute inset-0 z-0 bg-white"
        animate={{
          background: isHovered 
            ? [
                `radial-gradient(at 0% 0%, hsla(217,100%,80%,0.6) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(204,100%,80%,0.6) 0px, transparent 50%)`,
                `radial-gradient(at 100% 0%, hsla(250,100%,80%,0.6) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(204,100%,80%,0.6) 0px, transparent 50%)`,
                `radial-gradient(at 0% 0%, hsla(217,100%,80%,0.6) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(204,100%,80%,0.6) 0px, transparent 50%)`
              ]
            : gradient
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        style={{ background: gradient }}
      />

      {/* Top Header */}
      <div className="absolute inset-x-4 top-4 flex justify-between items-center z-10">
        <div className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full border border-white/50 text-[10px] font-bold text-[#0F172A] tracking-wider shadow-sm">
          {platform.toUpperCase()}
        </div>
        <MoreHorizontal className="w-5 h-5 text-[#64748B]" />
      </div>

      {/* Center Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div 
          animate={{ scale: isHovered ? 1.1 : 1, opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-white flex items-center justify-center text-[#0F172A] shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        >
          <Play className="w-6 h-6 ml-1" fill="currentColor" />
        </motion.div>
      </div>

      {/* Right Side Actions */}
      <div className="absolute right-3 bottom-24 flex flex-col gap-4 items-center z-10">
        {[
          { icon: Heart, val: "12K" },
          { icon: MessageCircle, val: "248" },
          { icon: Share2, val: "Share" }
        ].map((action, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/50 flex items-center justify-center text-[#475569] shadow-sm hover:bg-white hover:text-[#3B82F6] transition-colors">
              <action.icon className="w-5 h-5" />
            </div>
            <span className="text-[9px] font-semibold text-[#475569]">{action.val}</span>
          </div>
        ))}
      </div>

      {/* Bottom Info Section (Glassmorphic) */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 via-white/80 to-transparent pt-12 pb-4 px-4 z-10 backdrop-blur-[2px]">
        
        {/* User Info */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] p-[2px]">
            <div className="w-full h-full rounded-full border-2 border-white bg-white flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-[#E2E8F0]" />
            </div>
          </div>
          <span className="text-sm font-bold text-[#0F172A]">@creator</span>
          <div className="px-2 py-0.5 rounded border border-[#3B82F6] text-[#3B82F6] text-[9px] font-bold tracking-wider ml-auto">
            FOLLOW
          </div>
        </div>

        {/* Caption */}
        <p className="text-xs text-[#475569] mb-3 line-clamp-2 pr-12">
          This clip went absolutely viral... <span className="font-semibold text-[#0F172A]">#growth #media #viral</span>
        </p>

        {/* Music Ticker */}
        <div className="flex items-center gap-2">
          <Music2 className="w-3.5 h-3.5 text-[#0F172A]" />
          <span className="text-[10px] font-medium text-[#0F172A] w-3/4 truncate">
            Original Sound - UMAV Media Podcast
          </span>
        </div>
      </div>

      {/* Progress Bar (Animated on hover) */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-[#E2E8F0] z-20">
        <motion.div 
          className="h-full bg-[#3B82F6]"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "20%" }}
          transition={{ duration: isHovered ? 10 : 0.3, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
