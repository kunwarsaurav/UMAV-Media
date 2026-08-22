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

  // Different mesh gradients as fallback if no image provided
  const gradients = [
    "radial-gradient(at 0% 0%, hsla(217,100%,70%,0.3) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(204,100%,70%,0.3) 0px, transparent 50%)",
    "radial-gradient(at 100% 0%, hsla(250,100%,70%,0.3) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(204,100%,70%,0.3) 0px, transparent 50%)",
    "radial-gradient(at 50% 0%, hsla(190,100%,70%,0.3) 0px, transparent 50%), radial-gradient(at 50% 100%, hsla(217,100%,70%,0.3) 0px, transparent 50%)"
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
      className="relative aspect-[9/16] bg-[#0F172A] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm group cursor-pointer"
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
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      ) : (
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
      )}

      {/* Top Header */}
      <div className="absolute inset-x-4 top-4 flex justify-between items-center z-10">
        <div className={`px-3 py-1 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider shadow-sm ${bgImage ? 'bg-white/20 border border-white/40 text-white' : 'bg-white/60 border border-white/50 text-[#0F172A]'}`}>
          {platform.toUpperCase()}
        </div>
        <MoreHorizontal className={`w-5 h-5 drop-shadow-md ${bgImage ? 'text-white' : 'text-[#64748B]'}`} />
      </div>

      {/* Center Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div 
          animate={{ scale: isHovered ? 1.1 : 1, opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className={`w-14 h-14 rounded-full backdrop-blur-md flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] ${bgImage ? 'bg-white/20 border border-white/50 text-white' : 'bg-white/80 border border-white text-[#0F172A]'}`}
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
            <div className={`w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center shadow-sm transition-colors ${bgImage ? 'bg-white/20 border border-white/40 text-white hover:bg-white/40' : 'bg-white/60 border border-white/50 text-[#475569] hover:bg-white hover:text-[#3B82F6]'}`}>
              <action.icon className="w-5 h-5 drop-shadow-sm" />
            </div>
            <span className={`text-[9px] font-semibold ${bgImage ? 'text-white drop-shadow-md' : 'text-[#475569]'}`}>{action.val}</span>
          </div>
        ))}
      </div>

      {/* Bottom Info Section (Dark Gradient Overlay) */}
      <div className={`absolute inset-x-0 bottom-0 pt-20 pb-4 px-4 z-10 pointer-events-none ${bgImage ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent' : 'bg-gradient-to-t from-white/95 via-white/80 to-transparent'}`}>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] p-[2px] shrink-0">
            <div className={`w-full h-full rounded-full border-[1.5px] flex items-center justify-center overflow-hidden ${bgImage ? 'border-[#0F172A] bg-[#0F172A]' : 'border-white bg-white'}`}>
              <div className="w-full h-full bg-[#E2E8F0] flex items-center justify-center">
                 <span className="text-[11px] font-bold text-[#0F172A] uppercase">
                   {username.charAt(0)}
                 </span>
              </div>
            </div>
          </div>
          <span className={`text-sm font-bold truncate ${bgImage ? 'text-white drop-shadow-md' : 'text-[#0F172A]'}`}>@{username}</span>
          <div className="px-2 py-0.5 rounded border border-[#3B82F6] text-[#3B82F6] text-[9px] font-bold tracking-wider ml-auto bg-white/10 backdrop-blur-sm shrink-0">
            FOLLOW
          </div>
        </div>

        {/* Caption */}
        <p className={`text-xs mb-3 line-clamp-2 pr-12 ${bgImage ? 'text-gray-200' : 'text-[#475569]'}`}>
          {caption.split(' ').map((word, i) => 
            word.startsWith('#') ? <span key={i} className={`font-semibold ${bgImage ? 'text-white' : 'text-[#0F172A]'}`}>{word} </span> : word + ' '
          )}
        </p>

        {/* Music Ticker */}
        <div className="flex items-center gap-2">
          <Music2 className={`w-3.5 h-3.5 ${bgImage ? 'text-white' : 'text-[#0F172A]'}`} />
          <span className={`text-[10px] font-medium w-3/4 truncate ${bgImage ? 'text-white' : 'text-[#0F172A]'}`}>
            Original Sound - {username}
          </span>
        </div>
      </div>

      {/* Progress Bar (Animated on hover) */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 z-20">
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
