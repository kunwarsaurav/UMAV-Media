"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Smartphone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

export default function BrandsPage() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 bg-[#FAFAFA]">
        {/* HERO */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-semibold tracking-tighter leading-[1.1] mb-8 text-[#0F172A]">
                YOUR BRAND.<br />
                <span className="text-[#3B82F6]">INSIDE THE CONTENT.</span>
              </h1>
              <p className="text-[#475569] text-xl md:text-2xl mb-10 text-balance">
                UMAV helps brands integrate into short-form content and distribute campaigns through a network built around social attention.
              </p>
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                START A CAMPAIGN
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CAMPAIGN VISUAL */}
        <section className="py-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] border border-[#E2E8F0] bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
              
              {/* Elegant Dot Pattern Background */}
              <div 
                className="absolute inset-0 z-0 opacity-40" 
                style={{
                  backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  maskImage: "radial-gradient(circle at center, black 50%, transparent 90%)",
                  WebkitMaskImage: "radial-gradient(circle at center, black 50%, transparent 90%)"
                }} 
              />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl opacity-60 z-0" />

              {/* Animated SVG Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Desktop Lines */}
                <motion.path
                  className="hidden md:block"
                  d="M 30% 50% L 45% 50%"
                  fill="none"
                  stroke="url(#flowGradient)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  initial={{ strokeDashoffset: 24 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.path
                  className="hidden md:block"
                  d="M 55% 50% C 65% 50%, 65% 35%, 75% 35%"
                  fill="none"
                  stroke="url(#flowGradient)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  initial={{ strokeDashoffset: 24 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  className="hidden md:block"
                  d="M 55% 50% L 75% 50%"
                  fill="none"
                  stroke="url(#flowGradient)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  initial={{ strokeDashoffset: 24 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  className="hidden md:block"
                  d="M 55% 50% C 65% 50%, 65% 65%, 75% 65%"
                  fill="none"
                  stroke="url(#flowGradient)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  initial={{ strokeDashoffset: 24 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between w-full max-w-4xl px-8 md:px-0">
                  
                  {/* Brand Node */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#E2E8F0] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-center justify-center md:ml-12 relative">
                    <div className="absolute inset-2 rounded-full border border-gray-50 opacity-50" />
                    <Building2 className="w-6 h-6 text-[#94A3B8] mb-2" />
                    <span className="text-xs md:text-sm font-semibold tracking-wider text-[#0F172A]">BRAND</span>
                  </div>

                  {/* UMAV Node */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-2 border-[#3B82F6] bg-white shadow-[0_8px_30px_rgba(59,130,246,0.15)] flex items-center justify-center relative">
                    <div className="absolute inset-1 rounded-xl border border-blue-50 opacity-50" />
                    <span className="font-heading text-xl md:text-2xl font-bold tracking-wide text-[#3B82F6]">UMAV</span>
                  </div>

                  {/* Output Nodes */}
                  <div className="flex flex-row md:flex-col gap-4 md:mr-12">
                    {["TIKTOK", "REELS", "SHORTS"].map((platform) => (
                      <div key={platform} className="flex items-center gap-3 px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] w-[100px] md:w-[140px]">
                        <Smartphone className="hidden md:block w-4 h-4 text-[#94A3B8]" />
                        <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[#475569]">{platform}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS */}
        <section className="py-32 border-t border-[#E2E8F0] mt-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: "Campaign Concepts", desc: "We design native short-form campaigns that don't feel like ads." },
                { title: "Content Integration", desc: "Seamless logo placement, creator shoutouts, and visual integration." },
                { title: "Distribution Network", desc: "Immediate access to a vast network of short-form distribution channels." },
                { title: "Platforms", desc: "Native formats optimized for TikTok, Instagram Reels, and YouTube Shorts." },
                { title: "Measurement", desc: "Clear reporting on views, engagement, and actual attention." },
                { title: "Scale", desc: "Increase campaign volume without hiring your own editing team." },
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-t border-[#E2E8F0] pt-6"
                >
                  <h3 className="text-2xl font-heading font-medium text-[#0F172A] mb-4">{item.title}</h3>
                  <p className="text-[#64748B]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
