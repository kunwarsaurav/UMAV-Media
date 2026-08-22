"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { NetworkVisualization } from "@/components/NetworkVisualization";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 bg-white">
        {/* HERO */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-semibold tracking-tighter leading-[1.1] mb-8 text-[#0F172A]">
                CONTENT SHOULD<br />
                <span className="text-[#3B82F6]">TRAVEL FURTHER.</span>
              </h1>
              <p className="text-[#475569] text-xl md:text-2xl text-balance">
                UMAV Media was built around a simple idea: great content should not depend on one account, one editor, or one algorithm.
              </p>
            </motion.div>
          </div>
        </section>

        {/* NETWORK VISUAL */}
        <section className="py-20 overflow-hidden border-y border-[#E2E8F0] bg-[#FAFAFA]">
          <div className="container mx-auto px-6 max-w-7xl">
            <NetworkVisualization />
          </div>
        </section>

        {/* STORY */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-heading font-semibold mb-6 text-[#0F172A]">The Old Way is Broken</h2>
                <p className="text-[#64748B] text-lg mb-6">
                  Traditionally, creators and brands relied on single editors to produce a few clips, uploading them to one or two main accounts, and hoping the algorithm caught on. It was slow, expensive, and didn't scale.
                </p>
                <p className="text-[#64748B] text-lg">
                  Editing agencies focus entirely on the production side, ignoring the most important factor in modern media: distribution.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-heading font-semibold mb-6 text-[#3B82F6]">The UMAV Network</h2>
                <p className="text-[#64748B] text-lg mb-6">
                  UMAV connects content production directly with distribution. We help creators and brands turn long-form content into scalable short-form reach.
                </p>
                <p className="text-[#64748B] text-lg">
                  By leveraging a vast network of clippers, editors, and distribution channels, UMAV ensures that your content travels further, reaching millions of potential viewers across all major platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-[#E2E8F0] bg-[#FAFAFA] text-center">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-heading font-semibold mb-8 text-[#0F172A]">READY TO SCALE YOUR CONTENT?</h2>
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              JOIN THE NETWORK
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
