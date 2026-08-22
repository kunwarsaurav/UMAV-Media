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

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="network" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 w-full">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-6xl md:text-8xl font-heading font-bold tracking-tighter leading-[0.9] mb-8"
                >
                  TURN<br />
                  <span className="text-[#00FF66]">ATTENTION</span><br />
                  INTO REACH.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-[#a3a3a3] text-xl md:text-2xl max-w-xl mb-10 text-balance"
                >
                  We turn long-form content into short-form media and distribute it across a network built for scale.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    START A CAMPAIGN
                  </Button>
                  <Button href="#explore" variant="outline" size="lg">
                    EXPLORE UMAV ↓
                  </Button>
                </motion.div>
              </div>
              <div className="flex-1 w-full mt-12 md:mt-0">
                <NetworkVisualization />
              </div>
            </div>
          </div>
        </section>

        {/* CORE STATEMENT */}
        <section id="explore" className="py-32 border-t border-[#151515]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-8"
              >
                ONE PIECE OF CONTENT.<br />
                <span className="text-[#a3a3a3]">A NETWORK OF POSSIBILITIES.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#525252] text-xl md:text-2xl"
              >
                A podcast episode can become dozens of clips. A stream can become hundreds of moments. UMAV connects content production with distribution so those moments can travel further.
              </motion.p>
            </div>
          </div>
        </section>

        {/* NUMBERS / CREDIBILITY */}
        <section className="py-20">
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
        <section id="work" className="py-32 border-t border-[#151515]">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-medium mb-16"
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-t border-[#333333] pt-6 group"
                >
                  <span className="text-[#00FF66] font-heading font-medium tracking-widest text-sm mb-4 block">
                    {feature.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading mb-4 group-hover:text-[#00FF66] transition-colors">{feature.title}</h3>
                  <p className="text-[#a3a3a3] text-lg">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CREATORS */}
        <section className="py-32 bg-[#0A0A0A] border-y border-[#151515]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-6xl font-heading font-medium leading-tight mb-8">
                  YOUR CONTENT<br />
                  SHOULDN'T LIVE ONCE.
                </h2>
                <p className="text-[#a3a3a3] text-xl mb-10 max-w-lg">
                  Turn podcasts, streams, interviews, and long-form videos into a constant stream of short-form content.
                </p>
                <Button href="/creators" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  GROW WITH UMAV
                </Button>
              </div>
              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                <VideoCard delay={0.1} />
                <div className="mt-8">
                  <VideoCard delay={0.2} />
                </div>
                <div className="hidden md:block">
                  <VideoCard delay={0.3} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section className="py-32">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-6xl font-heading font-medium leading-tight mb-8">
                  PUT YOUR BRAND<br />
                  INSIDE THE CONVERSATION.
                </h2>
                <p className="text-[#a3a3a3] text-xl mb-10 max-w-lg">
                  UMAV helps brands integrate into short-form content and distribute campaigns through a network built around social attention.
                </p>
                <Button href="/brands" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  LAUNCH A CAMPAIGN
                </Button>
              </div>
              <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] border border-[#151515] bg-[#0A0A0A] rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 noise-bg" />
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10 w-2/3 h-2/3 border border-[#333333] rounded-xl flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] to-[#101010]" />
                  <span className="relative z-10 font-heading font-medium tracking-widest text-[#525252]">BRAND CAMPAIGN</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY UMAV */}
        <section className="py-32 border-t border-[#151515] bg-[#00FF66] text-[#050505]">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-heading font-bold tracking-tighter mb-4"
            >
              WE DON'T THINK LIKE<br />
              AN EDITING AGENCY.
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-heading font-medium text-[#050505]/70"
            >
              WE THINK LIKE A MEDIA NETWORK.
            </motion.h3>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-40 relative overflow-hidden">
          <div className="absolute inset-0 noise-bg opacity-10" />
          <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-6">
              YOU HAVE THE CONTENT.<br />
              <span className="text-[#a3a3a3]">WE HAVE THE NETWORK.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-[#00FF66] font-heading font-medium tracking-tight mb-12">
              LET'S MAKE IT TRAVEL.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                START A CAMPAIGN
              </Button>
              <a href="mailto:info@umavmedia.com" className="text-[#a3a3a3] hover:text-[#ededed] transition-colors border-b border-transparent hover:border-[#ededed]">
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
