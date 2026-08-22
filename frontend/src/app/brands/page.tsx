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
            <div className="relative w-full aspect-video md:aspect-[21/9] border border-[#E2E8F0] bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWNDBIMHptMzkuNSAwVjBINFY0MHoiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-50 z-0" />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="flex gap-4 md:gap-8 items-center">
                  <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-[#CBD5E1] bg-white flex items-center justify-center text-[#64748B] shadow-sm font-medium">BRAND</div>
                  <div className="h-[1px] w-12 md:w-24 bg-[#CBD5E1]" />
                  <div className="w-20 h-20 md:w-32 md:h-32 rounded border border-[#3B82F6] bg-white flex items-center justify-center text-[#3B82F6] shadow-sm font-medium">UMAV</div>
                  <div className="h-[1px] w-12 md:w-24 bg-[#CBD5E1]" />
                  <div className="flex flex-col gap-2">
                    <div className="w-16 h-8 md:w-24 md:h-12 border border-[#E2E8F0] bg-white shadow-sm rounded flex items-center justify-center text-xs text-[#475569] font-medium">TIKTOK</div>
                    <div className="w-16 h-8 md:w-24 md:h-12 border border-[#E2E8F0] bg-white shadow-sm rounded flex items-center justify-center text-xs text-[#475569] font-medium">REELS</div>
                    <div className="w-16 h-8 md:w-24 md:h-12 border border-[#E2E8F0] bg-white shadow-sm rounded flex items-center justify-center text-xs text-[#475569] font-medium">SHORTS</div>
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
