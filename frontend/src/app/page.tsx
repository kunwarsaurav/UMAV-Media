"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, 
  Check, 
  Play, 
  ChevronDown, 
  CheckCircle2, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Video, 
  TrendingUp, 
  Award,
  HelpCircle
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { NetworkVisualization } from "@/components/NetworkVisualization";
import { MetricCard } from "@/components/MetricCard";
import { VideoCard } from "@/components/VideoCard";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Interactive Distribution Estimator State
  const [calcHours, setCalcHours] = useState(10);
  const [calcType, setCalcType] = useState("Podcast");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["tiktok", "reels", "shorts"]);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const togglePlatform = (plat: string) => {
    if (selectedPlatforms.includes(plat)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter(p => p !== plat));
      }
    } else {
      setSelectedPlatforms([...selectedPlatforms, plat]);
    }
  };

  // Estimator Logic
  const clipsMultiplier = calcType === "Podcast" ? 6 : calcType === "Stream" ? 4 : calcType === "Interview" ? 5 : 3;
  const estimatedClips = calcHours * clipsMultiplier;
  const activeChannels = Math.min(300, Math.round(estimatedClips * 0.35 + selectedPlatforms.length * 6));
  const viewsPerClip = 45000;
  const projectedViews = (estimatedClips * selectedPlatforms.length * viewsPerClip).toLocaleString();

  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-bg-primary text-text-primary">
        {/* HERO SECTION */}
        <section id="network" className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden border-b border-brand-primary/10 bg-grid-pattern">
          {/* Neon Ambient Gradients */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
          <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl opacity-40 pointer-events-none z-0" />

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 w-full text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-bold text-brand-secondary tracking-widest mb-6 uppercase"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  REVOLUTIONIZING CONTENT SCALE
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-6xl md:text-8xl font-heading font-black tracking-tighter leading-[1.0] mb-8 uppercase text-text-primary"
                >
                  YOUR CONTENT<br />
                  SHOULD BE<br />
                  <span className="bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(139,92,246,0.3)]">
                    EVERYWHERE.
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-text-secondary text-lg md:text-xl max-w-xl mb-12 text-balance leading-relaxed"
                >
                  UMAV turns your best long-form moments into massive, automated short-form campaigns and syndicates them across a decentralized distribution network. We build attention engines, not just editing workflows.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button href="#contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    START A CAMPAIGN
                  </Button>
                  <Button href="#work" variant="outline" size="lg">
                    VIEW OUR RESULTS
                  </Button>
                </motion.div>
              </div>
              
              <div className="flex-1 w-full mt-12 lg:mt-0">
                <NetworkVisualization />
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF / STATS */}
        <section className="py-24 bg-bg-secondary border-b border-brand-primary/10 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">CREDIBILITY PROVEN IN NUMBERS</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-text-primary mt-2 uppercase">
                BUILT FOR ATTENTION AT SCALE.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard value="60M+" label="Total Campaign Views" delay={0.1} />
              <MetricCard value="1,000+" label="Distribution network members" delay={0.2} />
              <MetricCard value="4" label="Major Platforms Synced" delay={0.3} />
              <MetricCard value="Millions" label="Potential Reach" delay={0.4} />
            </div>
          </div>
        </section>

        {/* RESULTS / CASE STUDIES */}
        <section id="work" className="py-32 relative bg-bg-primary overflow-hidden">
          <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-3xl opacity-30 pointer-events-none" />
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-3xl mb-20">
              <span className="text-xs font-bold tracking-widest text-brand-secondary uppercase">CASE STUDIES</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-text-primary mt-2 mb-6 uppercase">
                WE DON'T PROMISE ATTENTION.<br />
                <span className="bg-gradient-to-r from-text-primary to-text-muted bg-clip-text text-transparent">WE SHOW IT.</span>
              </h2>
              <p className="text-text-secondary text-lg">
                See how UMAV takes raw content and converts it into millions of impressions across accounts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  tag: "Creator Campaign",
                  run: "30-Day Run",
                  stat: "8.4M",
                  label: "Verified Views Earned",
                  items: [
                    { name: "Distributed Clips", val: "147 Total" },
                    { name: "Active Channels", val: "32 Accounts" },
                    { name: "Engagements", val: "680K+ Likes/Shares" }
                  ],
                  delay: 0
                },
                {
                  tag: "Podcast Series",
                  run: "60-Day Run",
                  stat: "14.2M",
                  label: "Verified Views Earned",
                  items: [
                    { name: "Distributed Clips", val: "310 Total" },
                    { name: "Active Channels", val: "54 Accounts" },
                    { name: "Engagements", val: "1.2M+ Likes/Shares" }
                  ],
                  delay: 0.1
                },
                {
                  tag: "Gaming Streamer",
                  run: "45-Day Run",
                  stat: "21.8M",
                  label: "Verified Views Earned",
                  items: [
                    { name: "Distributed Clips", val: "480 Total" },
                    { name: "Active Channels", val: "92 Accounts" },
                    { name: "Engagements", val: "1.9M+ Likes/Shares" }
                  ],
                  delay: 0.2
                }
              ].map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: card.delay }}
                  className="glow-card p-8 rounded-3xl flex flex-col justify-between group cursor-default"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full uppercase">
                        {card.tag}
                      </span>
                      <span className="text-xs font-semibold text-text-muted">{card.run}</span>
                    </div>
                    <h3 className="text-6xl font-heading font-black tracking-tight text-text-primary group-hover:text-brand-accent transition-colors duration-300 mb-2">
                      {card.stat}
                    </h3>
                    <p className="text-brand-secondary font-bold text-xs uppercase tracking-wider mb-6">{card.label}</p>
                    <ul className="space-y-3 border-t border-brand-primary/10 pt-6 text-sm text-text-secondary">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex justify-between">
                          <span>{item.name}</span> 
                          <span className="text-text-primary font-bold">{item.val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 pt-4">
                    <span className="text-xs font-bold text-text-primary tracking-widest uppercase group-hover:text-brand-accent transition-colors flex items-center gap-2">
                      VIEW CASE STUDY <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEED WALL SECTION */}
        <section className="py-24 bg-bg-secondary border-y border-brand-primary/10 overflow-hidden relative">
          <div className="container mx-auto px-6 max-w-7xl mb-16 text-center">
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">WATCH THE NETWORK IN ACTION</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-text-primary mt-2 uppercase">
              FEEDS THAT EARN ATTENTION
            </h2>
          </div>
          
          <div className="px-6 flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-thin max-w-7xl mx-auto">
            <div className="snap-start shrink-0 w-[280px]">
              <VideoCard 
                platform="tiktok"
                username="colinandsamir"
                caption="How MrBeast spends $1M a day. 🤯 #creator #business"
                likes="2.4M"
                comments="14K"
                bgImage="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop"
                delay={0.1}
              />
            </div>
            <div className="snap-start shrink-0 w-[280px]">
              <VideoCard 
                platform="reels"
                username="lexfridman"
                caption="This segment on AI and consciousness is mind blowing. #ai #podcast"
                likes="840K"
                comments="8.2K"
                bgImage="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop"
                delay={0.2}
              />
            </div>
            <div className="snap-start shrink-0 w-[280px]">
              <VideoCard 
                platform="shorts"
                username="hubermanlab"
                caption="The optimal morning routine for dopamine. #health #science"
                likes="1.7M"
                comments="11.4K"
                bgImage="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
                delay={0.3}
              />
            </div>
            <div className="snap-start shrink-0 w-[280px]">
              <VideoCard 
                platform="tiktok"
                username="grahamstephan"
                caption="Why real estate is the best tax loophole. 💸 #finance #money"
                likes="650K"
                comments="2.4K"
                bgImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop"
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* UMAV ENGINE PROCESS */}
        <section className="py-32 relative bg-bg-primary overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl opacity-30 pointer-events-none" />
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-xs font-bold tracking-widest text-brand-secondary uppercase">OUR ENGINE</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-text-primary mt-2 mb-6 uppercase">
                ONE VIDEO. SAFE SYNDICATION.
              </h2>
              <p className="text-text-secondary text-lg">
                We turn single productions into high-volume short-form campaigns distributed intelligently across global channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {[
                { step: "01", title: "CONTENT INPUT", desc: "You provide long-form streams, podcast episodes, or raw brand footage." },
                { step: "02", title: "AI IDENTIFICATION", desc: "Our engine parses retention metrics and extracts clips with viral viability." },
                { step: "03", title: "CREATIVE CRAFT", desc: "Specialist editors refine formatting, caption typography, and audio hooks." },
                { step: "04", title: "SYNDICATION", desc: "We deploy content across our aligned network of content hubs and channels." },
                { step: "05", title: "ATTENTION GAIN", desc: "Earned impressions, organic audience growth, and direct traffic capture." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glow-card p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold tracking-widest text-brand-accent font-heading mb-4 block">{item.step}</span>
                    <h3 className="text-base font-bold text-text-primary mb-2 uppercase font-heading">{item.title}</h3>
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed mt-4">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* UMAV VS TRADITIONAL CLIPPING */}
        <section className="py-32 bg-bg-secondary border-y border-brand-primary/10 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">THE UMAV VALUE</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-text-primary mt-2 mb-6 uppercase">
                AN EDITOR MAKES CLIPS.<br />
                <span className="bg-gradient-to-r from-text-primary to-text-muted bg-clip-text text-transparent">WE BUILD DISTRIBUTION.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Traditional */}
              <div className="border border-brand-primary/10 bg-bg-primary/40 backdrop-blur-md p-8 rounded-3xl">
                <h3 className="text-xl font-heading font-bold text-text-muted mb-6 uppercase flex items-center gap-2">
                  Traditional Agency
                </h3>
                <ul className="space-y-4 text-text-secondary text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Single editor limitation (one aesthetic style and pace)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Low clip volume (only 5-15 clips per month)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Single profile uploads (risk of algorithmic blockages)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>No active scaling network or continuous optimization</span>
                  </li>
                </ul>
              </div>

              {/* UMAV */}
              <div className="glow-card border-brand-primary/40 p-8 rounded-3xl relative shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-brand-accent to-brand-primary text-white text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-widest shadow-md">
                  THE ENGINE
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-secondary mb-6 uppercase flex items-center gap-2">
                  UMAV Engine
                </h3>
                <ul className="space-y-4 text-text-primary text-sm">
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-accent shrink-0 w-4 h-4 mt-0.5" />
                    <span>Multi-editor network (varied perspectives and formats)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-accent shrink-0 w-4 h-4 mt-0.5" />
                    <span>High output volumes (up to 150+ clips mapped monthly)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-accent shrink-0 w-4 h-4 mt-0.5" />
                    <span>Decentralized distribution network (syndicated reach)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-accent shrink-0 w-4 h-4 mt-0.5" />
                    <span>Continuous hook, caption, and format A/B testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* VERTICALS SECTION */}
        <section className="py-32 relative bg-bg-primary">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Streamers/Creators Section */}
            <div id="creators" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 scroll-mt-24">
              <div>
                <span className="text-xs font-bold tracking-widest text-brand-secondary uppercase">For Streamers & YouTubers</span>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-text-primary mt-2 mb-6 uppercase">
                  YOU CREATE. WE SYNDICATE.
                </h2>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  Focus entirely on streaming and production. Our networks automatically package your streams into high-retaining short hooks and push them to hundreds of community channels.
                </p>
                <Button href="#contact" variant="outline">SCALE MY CONTENT</Button>
              </div>
              <div className="glow-card p-10 rounded-3xl text-left shadow-lg">
                <span className="text-xs font-bold text-brand-accent uppercase block mb-4">THE STREAM ENDS. THE REACH DOESN'T.</span>
                <h4 className="text-2xl font-bold text-text-primary mb-6 font-heading">Capture Every Highlight</h4>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  We package reactions, fails, clutches, challenges, and guest moments into short-form assets that run 24/7.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-xs font-bold text-brand-secondary">Funny Highlights</div>
                  <div className="px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-xs font-bold text-brand-secondary">Controversial Takeaways</div>
                  <div className="px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-xs font-bold text-brand-secondary">Stream Moments</div>
                </div>
              </div>
            </div>

            {/* Brands/Campaigns Section */}
            <div id="brands" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 scroll-mt-24">
              <div className="lg:order-2">
                <span className="text-xs font-bold tracking-widest text-brand-secondary uppercase">For Brands & Campaigns</span>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-text-primary mt-2 mb-6 uppercase">
                  CONVERT SPONSORSHIPS INTO CULTURE.
                </h2>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  Static integrations are quickly ignored. We turn brand activations, events, and product rollouts into persistent social moments through continuous, network-wide clipping.
                </p>
                <Button href="#contact" variant="outline">BUILD A CAMPAIGN</Button>
              </div>
              <div className="glow-card-cyan p-10 rounded-3xl text-left shadow-lg lg:order-1">
                <span className="text-xs font-bold text-brand-accent uppercase block mb-4">PERMANENT ATTENTION METRICS</span>
                <h4 className="text-2xl font-bold text-text-primary mb-6 font-heading">Multiply Product Impressions</h4>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Distribute branded clip loops to target audiences instead of counting on singular host-read sponsorships.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-lg text-xs font-bold text-brand-accent">Brand Activations</div>
                  <div className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-lg text-xs font-bold text-brand-accent">Integrations</div>
                  <div className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-lg text-xs font-bold text-brand-accent">Demos</div>
                </div>
              </div>
            </div>

            {/* Podcasters Section */}
            <div id="podcast" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 scroll-mt-24">
              <div>
                <span className="text-xs font-bold tracking-widest text-brand-secondary uppercase">For Podcasters & Hosts</span>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-text-primary mt-2 mb-6 uppercase">
                  ONE CONVERSATION. HUNDREDS OF MOMENTS.
                </h2>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  A single two-hour conversation holds valuable stories and clips. We unlock that content potential using automated curation.
                </p>
                <Button href="#contact" variant="outline">GROW MY PODCAST</Button>
              </div>
              <div className="glow-card p-10 rounded-3xl text-left shadow-lg">
                <span className="text-xs font-bold text-brand-accent uppercase block mb-4">EPISODE MULTIPLICATION</span>
                <h4 className="text-2xl font-bold text-text-primary mb-6 font-heading">Continuous Reach Flywheel</h4>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  We generate dozens of optimized clips with kinetic subtitles, graphics overlays, and schedule them on platform feeds.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-xs font-bold text-brand-secondary">Kinetic Subtitles</div>
                  <div className="px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-xs font-bold text-brand-secondary">Hook Optimization</div>
                  <div className="px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-xs font-bold text-brand-secondary">Feed Scheduling</div>
                </div>
              </div>
            </div>

            {/* Global/Regional Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <span className="text-xs font-bold tracking-widest text-brand-secondary uppercase">GLOBAL AND REGIONAL REACH</span>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-text-primary mt-2 mb-6 uppercase">
                  GLOBAL VALUE. LOCALIZED REACH.
                </h2>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  Digital regions are highly fragmented. We specialize in optimizing distribution campaigns for South Asian and Asian hubs to build local traction.
                </p>
                <Button href="#contact" variant="outline">LEARN ABOUT REGIONS</Button>
              </div>
              <div className="glow-card-cyan p-10 rounded-3xl text-left shadow-lg lg:order-1">
                <span className="text-xs font-bold text-brand-accent uppercase block mb-4">REGIONAL CAMPAIGNS</span>
                <h4 className="text-2xl font-bold text-text-primary mb-6 font-heading">Local Attention Flywheels</h4>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Optimize caption layouts, timing, and local channels specifically targeted at South Asian and Asian content spaces.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-lg text-xs font-bold text-brand-accent">Localized Curation</div>
                  <div className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-lg text-xs font-bold text-brand-accent">Regional Hubs</div>
                  <div className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-lg text-xs font-bold text-brand-accent">Asian Markets</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-32 bg-bg-secondary border-y border-brand-primary/10 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">VERIFIED REVIEWS</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-text-primary mt-2 uppercase">
                OUTCOME-ORIENTED PARTNERS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  quote: "UMAV helped us turn content we already had into millions of additional impressions. We didn't need to change our streaming setup; they built the distribution pipeline on top of it.",
                  name: "Marcus Chen",
                  title: "Host, Future Tech Podcast",
                  badge: "+4.2M views"
                },
                {
                  quote: "Traditional editing agencies send you files and expect you to handle publishing. UMAV handles the actual distribution of clips across a massive net of profiles. It's night and day.",
                  name: "Sarah Jenkins",
                  title: "Director of Marketing, Nexa Gaming",
                  badge: "12M+ reach"
                }
              ].map((t, idx) => (
                <div key={idx} className="glow-card p-8 rounded-2xl flex flex-col justify-between">
                  <p className="text-text-secondary text-base leading-relaxed italic mb-8">
                    "{t.quote}"
                  </p>
                  <div>
                    <div className="h-px bg-brand-primary/15 w-full my-4" />
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="text-text-primary font-bold text-sm">{t.name}</h5>
                        <p className="text-xs text-text-muted">{t.title}</p>
                      </div>
                      <span className="text-xs font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded">
                        {t.badge}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT UMAV STORY */}
        <section id="about" className="py-32 relative overflow-hidden bg-bg-primary scroll-mt-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs font-bold tracking-widest text-brand-secondary uppercase">OUR MISSION</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-text-primary mt-4 mb-8 uppercase">
                CONTENT SHOULDN'T DEPEND ON ONE ALGORITHM.
              </h2>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-12">
                The internet doesn't have a content problem. It has a distribution problem. Creators and brands spend hours producing great campaigns, only to have their reach limited by single uploads or profile settings. UMAV exists to unlock that bottleneck by establishing content distribution networks.
              </p>
              <div className="flex justify-center gap-6">
                <Button href="#contact" variant="primary">READ OUR STORY</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-32 bg-bg-secondary border-t border-brand-primary/10">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">OBJECTIONS & DETAILS</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-text-primary mt-2 uppercase">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What exactly does UMAV do?",
                  a: "UMAV Media extracts highlights from your long-form videos, podcasts, and streams, formats them as highly optimized short-form assets, and distributes them across a dedicated network of channels to earn you attention."
                },
                {
                  q: "How is UMAV different from a standard video editing agency?",
                  a: "Standard agencies edit your videos and send them back to you to publish. UMAV owns the distribution engine: we edit, test multiple hooks, and deploy content across a network of channels to target multiple algorithms simultaneously."
                },
                {
                  q: "How many clips do you produce and distribute?",
                  a: "The volume varies depending on the package and monthly content schedule. Typically, UMAV generates and syndicates anywhere from 30 to 150+ clips per month, testing different variations for maximum output."
                },
                {
                  q: "Can we review and approve the content before it goes live?",
                  a: "Yes. In our onboarding and campaign configuration phases, you'll establish approval parameters. High-level branded content is fully signed off, while secondary network-style clippings adhere to brand guidelines."
                },
                {
                  q: "Who owns the generated short-form content?",
                  a: "You retain full ownership of the intellectual property of your raw content. All clips produced explicitly for your main profiles belong to you."
                },
                {
                  q: "What are the typical campaign costs?",
                  a: "Campaign configurations are adapted to monthly output and distribution targets. We establish transparent, outcome-oriented pricing structures during our intake process. Connect with us to get a custom quote."
                }
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-brand-primary/10 pb-4">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center py-4 text-left font-heading font-semibold text-lg text-text-primary hover:text-brand-accent transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-text-muted transition-transform ${activeFaq === idx ? 'rotate-180 text-brand-accent' : ''}`} />
                  </button>
                  {activeFaq === idx && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-text-secondary text-sm leading-relaxed mt-2"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA & ESTIMATE CALCULATOR INTEGRATED */}
        <section id="contact" className="py-40 border-t border-brand-primary/10 relative bg-bg-primary scroll-mt-24 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-stretch">
              
              {/* Left Column: Estimator & Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-4 block">LIVE ESTIMATOR</span>
                  <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-text-primary mb-6 uppercase">
                    YOUR NEXT<br />
                    MILLION VIEWS IS<br />
                    <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(6,182,212,0.15)]">ALREADY RECORDED.</span>
                  </h2>
                  <p className="text-text-secondary text-lg mb-12 max-w-lg leading-relaxed">
                    Adjust the parameters below to compute what UMAV Media can extract and syndicate from your existing monthly assets.
                  </p>
                </div>

                {/* Estimate Dashboard Box */}
                <div className="glow-card p-8 rounded-3xl border-brand-primary/30 bg-bg-secondary/80 shadow-2xl space-y-8">
                  <h4 className="text-xs font-bold tracking-widest text-brand-secondary uppercase">
                    ESTIMATED MONTHLY OUTPUT
                  </h4>

                  {/* Dashboard Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col">
                      <span className="text-text-muted text-[10px] uppercase font-bold tracking-widest">EST. CLIPS</span>
                      <span className="text-3xl font-heading font-black text-brand-accent text-glow-cyan mt-1">
                        {estimatedClips}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-text-muted text-[10px] uppercase font-bold tracking-widest">NET CHANNELS</span>
                      <span className="text-3xl font-heading font-black text-brand-secondary text-glow mt-1">
                        {activeChannels}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-text-muted text-[10px] uppercase font-bold tracking-widest">EST. REACH</span>
                      <span className="text-2xl font-heading font-black text-text-primary mt-2">
                        {projectedViews}+
                      </span>
                    </div>
                  </div>

                  {/* Calculator Sliders and Inputs */}
                  <div className="space-y-6 pt-4 border-t border-brand-primary/10">
                    {/* Content Type Selector */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                        Select Content Format
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {["Podcast", "Stream", "Interview", "Vlog"].map(t => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setCalcType(t)}
                            className={`py-2 px-1 text-center text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                              calcType === t
                                ? "bg-brand-primary/20 border-brand-primary text-text-primary shadow-sm"
                                : "bg-bg-primary/50 border-brand-primary/10 text-text-muted hover:text-text-primary hover:border-brand-primary/30"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Hours Range Slider */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center text-xs font-semibold text-text-secondary uppercase tracking-wider">
                        <span>Content Raw Volume</span>
                        <span className="text-brand-accent font-bold">{calcHours} Hours/Mo</span>
                      </div>
                      <input 
                        type="range" 
                        min="1" 
                        max="50" 
                        value={calcHours}
                        onChange={(e) => setCalcHours(parseInt(e.target.value))}
                        className="w-full h-1 bg-bg-primary rounded-lg appearance-none cursor-pointer accent-brand-accent"
                      />
                    </div>

                    {/* Platforms Selection */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                        Syndication Targets
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {["tiktok", "reels", "shorts", "linkedin", "x"].map(p => {
                          const isActive = selectedPlatforms.includes(p);
                          return (
                            <button
                              key={p}
                              type="button"
                              onClick={() => togglePlatform(p)}
                              className={`px-3 py-1.5 rounded-lg border text-xs font-bold uppercase transition-all cursor-pointer ${
                                isActive 
                                  ? "bg-brand-accent/20 border-brand-accent text-text-primary" 
                                  : "bg-bg-primary/50 border-brand-primary/10 text-text-muted hover:text-text-primary hover:border-brand-primary/30"
                              }`}
                            >
                              {p}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: intake Form */}
              <div className="flex-1 max-w-xl w-full flex flex-col justify-center">
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glow-card p-10 rounded-3xl flex flex-col items-center text-center h-full justify-center shadow-2xl relative"
                  >
                    <CheckCircle2 className="w-16 h-16 text-brand-accent mb-6 animate-pulse" />
                    <h3 className="text-3xl font-heading font-black text-text-primary mb-4">PLAN REQUEST RECEIVED</h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      Our creative distribution directors will evaluate your content and reach out within 24 hours.
                    </p>
                    <a href="mailto:info@umavmedia.com" className="text-brand-accent hover:underline font-bold text-sm tracking-widest">
                      info@umavmedia.com
                    </a>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-6 glow-card p-8 md:p-10 rounded-3xl shadow-2xl"
                  >
                    <h4 className="text-2xl font-black font-heading text-text-primary mb-2 uppercase">
                      BUILD MY CAMPAIGN PLAN
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="landing-name" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Name</label>
                        <input 
                          type="text" 
                          id="landing-name" 
                          required
                          placeholder="Your Name"
                          className="bg-bg-primary border border-brand-primary/20 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-xl px-4 py-3.5 text-text-primary outline-none transition-all placeholder:text-text-muted shadow-sm text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="landing-email" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Email</label>
                        <input 
                          type="email" 
                          id="landing-email" 
                          required
                          placeholder="you@email.com"
                          className="bg-bg-primary border border-brand-primary/20 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-xl px-4 py-3.5 text-text-primary outline-none transition-all placeholder:text-text-muted shadow-sm text-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="landing-company" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Company / Channel</label>
                        <input 
                          type="text" 
                          id="landing-company" 
                          placeholder="Company name / channel link"
                          className="bg-bg-primary border border-brand-primary/20 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-xl px-4 py-3.5 text-text-primary outline-none transition-all placeholder:text-text-muted shadow-sm text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="landing-audience" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Audience Size</label>
                        <select 
                          id="landing-audience"
                          className="bg-bg-primary border border-brand-primary/20 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-xl px-4 py-3.5 text-text-primary outline-none transition-all shadow-sm text-sm"
                        >
                          <option className="bg-bg-primary text-text-primary">Under 50K followers</option>
                          <option className="bg-bg-primary text-text-primary">50K - 250K followers</option>
                          <option className="bg-bg-primary text-text-primary">250K - 1M followers</option>
                          <option className="bg-bg-primary text-text-primary">1M+ followers</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="landing-budget" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Estimated Monthly Budget</label>
                      <select 
                        id="landing-budget"
                        className="bg-bg-primary border border-brand-primary/20 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-xl px-4 py-3.5 text-text-primary outline-none transition-all shadow-sm text-sm"
                      >
                        <option className="bg-bg-primary text-text-primary">$1,500 - $3,000 / mo</option>
                        <option className="bg-bg-primary text-text-primary">$3,000 - $7,500 / mo</option>
                        <option className="bg-bg-primary text-text-primary">$7,500 - $15,000 / mo</option>
                        <option className="bg-bg-primary text-text-primary">$15,000+ / mo</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="landing-message" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Growth Focus</label>
                      <textarea 
                        id="landing-message" 
                        rows={3}
                        placeholder="Tell us about your content formats, targets, and channels..."
                        className="bg-bg-primary border border-brand-primary/20 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-xl px-4 py-3.5 text-text-primary outline-none transition-all resize-none placeholder:text-text-muted shadow-sm text-sm"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="mt-4 bg-gradient-to-r from-brand-accent to-brand-primary text-white font-bold rounded-xl shadow-lg h-14 flex items-center justify-center gap-2 group cursor-pointer text-xs tracking-widest uppercase hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all duration-300"
                    >
                      REQUEST DISTRIBUTION PLAN
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
