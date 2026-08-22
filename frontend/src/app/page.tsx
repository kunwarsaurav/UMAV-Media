"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { NetworkVisualization } from "@/components/NetworkVisualization";
import { MetricCard } from "@/components/MetricCard";
import { VideoCard } from "@/components/VideoCard";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-[#FAFAFA]">
        {/* HERO SECTION */}
        <section id="network" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-[#E2E8F0]">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 w-full">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-6xl md:text-8xl font-heading font-semibold tracking-tighter leading-[1.0] mb-8 text-[#0F172A]"
                >
                  TURN<br />
                  <span className="text-[#3B82F6]">ATTENTION</span><br />
                  INTO REACH.
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-[#475569] text-xl md:text-2xl max-w-xl mb-10 text-balance"
                >
                  We turn long-form content into short-form media and distribute it across a network built for scale.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    START A CAMPAIGN
                  </Button>
                  <Button href="#explore" variant="outline" size="lg">
                    EXPLORE UMAV
                  </Button>
                </motion.div>
              </div>
              <div className="flex-1 w-full mt-12 md:mt-0 bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden">
                <NetworkVisualization />
              </div>
            </div>
          </div>
        </section>

        {/* CORE STATEMENT */}
        <section id="explore" className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-heading font-semibold tracking-tight mb-8 text-[#0F172A]"
              >
                ONE PIECE OF CONTENT.<br />
                <span className="text-[#94A3B8]">A NETWORK OF POSSIBILITIES.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#475569] text-xl md:text-2xl"
              >
                A podcast episode can become dozens of clips. A stream can become hundreds of moments. UMAV connects content production with distribution so those moments can travel further.
              </motion.p>
            </div>
          </div>
        </section>

        {/* NUMBERS / CREDIBILITY */}
        <section className="py-20 bg-[#FAFAFA] border-y border-[#E2E8F0]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard value="1,000+" label="Network Members" delay={0.1} />
              <MetricCard value="20+" label="Distribution Channels" delay={0.2} />
              <MetricCard value="4" label="Major Platforms" delay={0.3} />
              <MetricCard value="Millions" label="Potential Reach" delay={0.4} />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="work" className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-semibold mb-16 text-[#0F172A]"
            >
              FROM CONTENT<br />
              TO DISTRIBUTION.
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-16">
              {[
                { num: "01", title: "CLIP", desc: "Find the moments worth watching." },
                { num: "02", title: "CREATE", desc: "Turn those moments into native short-form content." },
                { num: "03", title: "DISTRIBUTE", desc: "Move content across a network of channels and platforms." },
                { num: "04", title: "MEASURE", desc: "Understand what earns attention and what performs." }
              ].map((feature, i) => (
                <motion.div 
                  key={feature.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-t border-[#E2E8F0] pt-6 group"
                >
                  <span className="text-[#3B82F6] font-heading font-medium tracking-widest text-sm mb-4 block">
                    {feature.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-medium mb-4 text-[#0F172A]">{feature.title}</h3>
                  <p className="text-[#64748B] text-lg">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CREATORS */}
        <section className="py-32 bg-[#F8FAFC] border-y border-[#E2E8F0]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-heading font-semibold leading-tight mb-8 text-[#0F172A]">
                  YOUR CONTENT<br />
                  SHOULDN'T LIVE ONCE.
                </h2>
                <p className="text-[#475569] text-xl mb-10 max-w-lg">
                  Turn podcasts, streams, interviews, and long-form videos into a constant stream of short-form content.
                </p>
                <Button href="/creators" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  GROW WITH UMAV
                </Button>
              </div>
              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                <VideoCard 
                  platform="tiktok"
                  username="lexfridman"
                  caption="This segment on AI and consciousness is mind blowing. #ai #podcast #tech"
                  likes="145K"
                  comments="3.2K"
                  bgImage="https://loremflickr.com/600/1000/podcast,microphone/all"
                  delay={0.1} 
                />
                <div className="mt-8">
                  <VideoCard 
                    platform="reels"
                    username="colinandsamir"
                    caption="How MrBeast spends $1M a day. 🤯 #creator #business"
                    likes="89K"
                    comments="1.1K"
                    bgImage="https://loremflickr.com/600/1000/studio,camera/all"
                    delay={0.2} 
                  />
                </div>
                <div className="hidden md:block">
                  <VideoCard 
                    platform="shorts"
                    username="hubermanlab"
                    caption="The optimal morning routine for dopamine. #health #science #huberman"
                    likes="210K"
                    comments="5.4K"
                    bgImage="https://loremflickr.com/600/1000/fitness,morning/all"
                    delay={0.3} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-heading font-semibold leading-tight mb-8 text-[#0F172A]">
                  PUT YOUR BRAND<br />
                  INSIDE THE CONVERSATION.
                </h2>
                <p className="text-[#475569] text-xl mb-10 max-w-lg">
                  UMAV helps brands integrate into short-form content and distribute campaigns through a network built around social attention.
                </p>
                <Button href="/brands" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  LAUNCH A CAMPAIGN
                </Button>
              </div>
              <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] border border-[#E2E8F0] bg-[#FAFAFA] rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                
                {/* Elegant Dot Pattern */}
                <div 
                  className="absolute inset-0 z-0 opacity-40" 
                  style={{
                    backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }} 
                />
                
                {/* Dashboard Card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 w-[90%] md:w-[85%] bg-white rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-[#E2E8F0] overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="px-5 py-4 md:px-6 md:py-5 border-b border-[#E2E8F0] flex justify-between items-center bg-[#F8FAFC]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0F172A] to-[#334155] flex items-center justify-center shadow-sm">
                         <span className="text-white font-bold text-xs uppercase">B</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F172A]">BRAND CAMPAIGN</div>
                        <div className="text-[9px] md:text-[10px] text-[#64748B]">Active • Q3 Distribution</div>
                      </div>
                    </div>
                    <div className="px-2 py-1 md:px-3 bg-green-50 border border-green-200 text-green-700 text-[8px] md:text-[9px] font-bold tracking-wider rounded-full">
                      PERFORMING
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="p-5 md:p-6">
                    <div className="text-xs md:text-sm font-semibold text-[#64748B] mb-1">Total Network Reach</div>
                    <div className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] mb-4 tracking-tight">14.2M</div>
                    
                    {/* Animated Line Chart SVG */}
                    <div className="w-full h-20 md:h-24 relative mt-4 md:mt-6 border-b border-dashed border-[#E2E8F0]">
                       <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                         <defs>
                           <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                             <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                             <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                           </linearGradient>
                         </defs>
                         {/* Fill */}
                         <motion.path 
                           d="M0,100 L0,80 Q20,60 40,70 T80,30 T100,10 L100,100 Z"
                           fill="url(#chartGradient)"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 1, delay: 0.2 }}
                         />
                         {/* Line */}
                         <motion.path 
                           d="M0,80 Q20,60 40,70 T80,30 T100,10"
                           fill="none"
                           stroke="#3B82F6"
                           strokeWidth="3"
                           initial={{ pathLength: 0 }}
                           whileInView={{ pathLength: 1 }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                         />
                         {/* End Point */}
                         <motion.circle 
                           cx="100" cy="10" r="4" 
                           fill="#fff" stroke="#3B82F6" strokeWidth="2"
                           initial={{ scale: 0 }}
                           whileInView={{ scale: 1 }}
                           transition={{ duration: 0.3, delay: 1.5 }}
                         />
                       </svg>
                    </div>

                    <div className="grid grid-cols-3 gap-2 md:gap-4 mt-6">
                      <div>
                        <div className="text-[9px] md:text-[10px] text-[#64748B] font-semibold uppercase">Clips</div>
                        <div className="text-base md:text-lg font-bold text-[#0F172A]">240</div>
                      </div>
                      <div>
                        <div className="text-[9px] md:text-[10px] text-[#64748B] font-semibold uppercase">Engagement</div>
                        <div className="text-base md:text-lg font-bold text-[#0F172A]">8.4%</div>
                      </div>
                      <div>
                        <div className="text-[9px] md:text-[10px] text-[#64748B] font-semibold uppercase">Conversion</div>
                        <div className="text-base md:text-lg font-bold text-[#3B82F6]">+12%</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute right-2 md:right-4 top-1/4 px-3 py-1.5 md:px-4 md:py-2 bg-white/80 backdrop-blur-md rounded-xl border border-[#E2E8F0] shadow-sm flex items-center gap-2 z-20"
                >
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#3B82F6] animate-pulse" />
                  <span className="text-[9px] md:text-[10px] font-bold text-[#0F172A] tracking-wider">TIKTOK SYNC</span>
                </motion.div>
                
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="absolute left-2 md:left-4 bottom-1/4 px-3 py-1.5 md:px-4 md:py-2 bg-white/80 backdrop-blur-md rounded-xl border border-[#E2E8F0] shadow-sm flex items-center gap-2 z-20"
                >
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-[9px] md:text-[10px] font-bold text-[#0F172A] tracking-wider">REELS SYNC</span>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* WHY UMAV */}
        <section className="py-32 border-t border-[#E2E8F0] bg-[#1E293B] text-white">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-4 text-white"
            >
              WE DON'T THINK LIKE<br />
              AN EDITING AGENCY.
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-heading font-medium text-[#94A3B8]"
            >
              WE THINK LIKE A MEDIA NETWORK.
            </motion.h3>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-40 bg-[#FAFAFA] border-t border-[#E2E8F0]">
          <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
            <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter mb-6 text-[#0F172A]">
              YOU HAVE THE CONTENT.<br />
              <span className="text-[#94A3B8]">WE HAVE THE NETWORK.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-[#3B82F6] font-heading font-medium tracking-tight mb-12">
              LET'S MAKE IT TRAVEL.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                START A CAMPAIGN
              </Button>
              <a href="mailto:info@umavmedia.com" className="text-[#64748B] hover:text-[#0F172A] transition-colors border-b border-transparent hover:border-[#0F172A]">
                info@umavmedia.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
