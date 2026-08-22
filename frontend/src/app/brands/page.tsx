"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

export default function BrandsPage() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        {/* HERO */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-[1.1] mb-8">
                YOUR BRAND.<br />
                <span className="text-[#00FF66]">INSIDE THE CONTENT.</span>
              </h1>
              <p className="text-[#a3a3a3] text-xl md:text-2xl mb-10 text-balance">
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
            <div className="relative w-full aspect-video md:aspect-[21/9] border border-[#151515] bg-[#0A0A0A] rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 noise-bg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-4 md:gap-8 items-center opacity-60">
                  <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-[#333333] flex items-center justify-center">BRAND</div>
                  <div className="h-[1px] w-12 md:w-24 bg-[#333333]" />
                  <div className="w-20 h-20 md:w-32 md:h-32 rounded border border-[#00FF66] flex items-center justify-center text-[#00FF66]">UMAV</div>
                  <div className="h-[1px] w-12 md:w-24 bg-[#333333]" />
                  <div className="flex flex-col gap-2">
                    <div className="w-16 h-8 md:w-24 md:h-12 border border-[#333333] rounded flex items-center justify-center text-xs">TIKTOK</div>
                    <div className="w-16 h-8 md:w-24 md:h-12 border border-[#333333] rounded flex items-center justify-center text-xs">REELS</div>
                    <div className="w-16 h-8 md:w-24 md:h-12 border border-[#333333] rounded flex items-center justify-center text-xs">SHORTS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS */}
        <section className="py-32 border-t border-[#151515] mt-20">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-t border-[#151515] pt-6"
                >
                  <h3 className="text-2xl font-heading font-medium text-[#ededed] mb-4">{item.title}</h3>
                  <p className="text-[#a3a3a3]">{item.desc}</p>
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
