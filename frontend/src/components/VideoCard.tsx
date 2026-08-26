"use client";

import { motion } from "framer-motion";
import { Play, Heart, MessageCircle, Share2, MoreHorizontal, Music2 } from "lucide-react";
import { useEffect, useState } from "react";

interface VideoCardProps {
  platform?: "tiktok" | "reels" | "shorts";
  delay?: number;
  username?: string;
  caption?: string;
  likes?: string;
  comments?: string;
  bgImage?: string;
}

export function VideoCard({ 
  platform = "tiktok", 
  delay = 0,
  username = "creator",
  caption = "This clip went absolutely viral... #growth #media",
  likes = "12K",
  comments = "248",
  bgImage
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Different purple mesh gradients as fallback if no image provided
  const gradients = [
    "radial-gradient(at 0% 0%, hsla(270,100%,50%,0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(180,100%,50%,0.12) 0px, transparent 50%), #0D0822",
    "radial-gradient(at 100% 0%, hsla(180,100%,50%,0.12) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(270,100%,50%,0.12) 0px, transparent 50%), #0D0822",
    "radial-gradient(at 50% 0%, hsla(290,100%,50%,0.12) 0px, transparent 50%), radial-gradient(at 50% 100%, hsla(240,100%,50%,0.12) 0px, transparent 50%), #0D0822"
  ];
  
  const gradient = gradients[Math.floor(delay * 10) % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-[9/16] bg-bg-secondary rounded-2xl overflow-hidden border border-brand-primary/20 hover:border-brand-primary/50 shadow-[0_0_20px_rgba(139,92,246,0.05)] hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] transition-all duration-300 group cursor-pointer"
    >
      {/* Background Image or Animated Mesh Gradient */}
      {bgImage ? (
        <motion.div 
          className="absolute inset-0 z-0"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img 
            src={bgImage} 
            alt="Video thumbnail" 
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      ) : (
        <motion.div 
          className="absolute inset-0 z-0 bg-bg-secondary"
          animate={{
            background: isHovered 
              ? [
                  `radial-gradient(at 0% 0%, hsla(270,100%,50%,0.2) 0px, transparent 60%), radial-gradient(at 100% 100%, hsla(180,100%,50%,0.2) 0px, transparent 60%), #0D0822`,
                  `radial-gradient(at 100% 0%, hsla(180,100%,50%,0.2) 0px, transparent 60%), radial-gradient(at 0% 100%, hsla(270,100%,50%,0.2) 0px, transparent 60%), #0D0822`,
                  `radial-gradient(at 0% 0%, hsla(270,100%,50%,0.2) 0px, transparent 60%), radial-gradient(at 100% 100%, hsla(180,100%,50%,0.2) 0px, transparent 60%), #0D0822`
                ]
              : gradient
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          style={{ background: gradient }}
        />
      )}

      {/* Top Header */}
      <div className="absolute inset-x-4 top-4 flex justify-between items-center z-10">
        <div className="px-3 py-1 bg-brand-primary/15 backdrop-blur-md border border-brand-primary/20 rounded-full text-[10px] font-bold tracking-widest text-brand-secondary shadow-sm">
          {platform.toUpperCase()}
        </div>
        <MoreHorizontal className="w-5 h-5 drop-shadow-md text-white/60 hover:text-white transition-colors" />
      </div>

      {/* Center Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div 
          animate={{ scale: isHovered ? 1.15 : 1, opacity: isHovered ? 0.3 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
        >
          <Play className="w-6 h-6 ml-1 drop-shadow-sm" fill="currentColor" />
        </motion.div>
      </div>

      {/* Right Side Actions */}
      <div className="absolute right-3 bottom-24 flex flex-col gap-4 items-center z-10">
        {[
          { icon: Heart, val: likes },
          { icon: MessageCircle, val: comments },
          { icon: Share2, val: "Share" }
        ].map((action, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/10 text-white hover:bg-white/25 hover:text-brand-accent flex items-center justify-center shadow-sm transition-all duration-200">
              <action.icon className="w-5 h-5 drop-shadow-sm" />
            </div>
            <span className="text-[9px] font-semibold text-slate-200 drop-shadow-md">{action.val}</span>
          </div>
        ))}
      </div>

      {/* Bottom Info Section (Dark Gradient Overlay) */}
      <div className="absolute inset-x-0 bottom-0 pt-20 pb-4 px-4 z-10 pointer-events-none bg-gradient-to-t from-black/95 via-black/55 to-transparent">
        
        <div className="flex items-center gap-2 mb-2 pointer-events-auto">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-accent to-brand-primary p-[2px] shrink-0">
            <div className="w-full h-full rounded-full border-[1.5px] border-black bg-black flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-[#17112B] flex items-center justify-center">
                 <span className="text-[11px] font-bold text-white uppercase">
                   {username.charAt(0)}
                 </span>
              </div>
            </div>
          </div>
          <span className="text-sm font-bold truncate text-white drop-shadow-md">@{username}</span>
          <div className="px-2 py-0.5 rounded border border-brand-primary/30 text-brand-secondary text-[9px] font-bold tracking-widest ml-auto bg-brand-primary/10 backdrop-blur-sm shrink-0">
            FOLLOW
          </div>
        </div>

        {/* Caption */}
        <p className="text-xs mb-3 line-clamp-2 pr-12 text-slate-200 drop-shadow-md">
          {caption.split(' ').map((word, i) => 
            word.startsWith('#') ? <span key={i} className="font-semibold text-white">{word} </span> : word + ' '
          )}
        </p>

        {/* Music Ticker */}
        <div className="flex items-center gap-2 text-slate-300">
          <Music2 className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-[10px] font-medium w-3/4 truncate text-slate-300">
            Original Sound - {username}
          </span>
        </div>
      </div>

      {/* Progress Bar (Animated on hover) */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 z-20">
        <motion.div 
          className="h-full bg-gradient-to-r from-brand-accent to-brand-primary"
          initial={{ width: "20%" }}
          animate={{ width: isHovered ? "100%" : "20%" }}
          transition={{ duration: isHovered ? 10 : 0.3, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
