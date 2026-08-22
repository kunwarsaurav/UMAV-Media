"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { VideoCard } from "@/components/VideoCard";

export default function CreatorsPage() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        {/* HERO */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-[1.1] mb-8">
                TURN YOUR LONG-FORM<br />
                INTO A CONSTANT<br />
                <span className="text-[#00FF66]">STREAM OF SHORT-FORM.</span>
              </h1>
              <p className="text-[#a3a3a3] text-xl md:text-2xl max-w-2xl mb-10 text-balance">
                Podcasts, streams, interviews, and long-form videos shouldn't just live once. We extract the best moments and distribute them across a network built for scale.
              </p>
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                WORK WITH UMAV
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CONTENT TYPES */}
        <section className="py-20 border-t border-[#151515] bg-[#0A0A0A]">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-sm font-bold tracking-widest text-[#a3a3a3] uppercase mb-12">Who It's For</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Podcasts", "Streams", "Interviews", "YouTube Videos", "Events", "Conversations"].map((type, i) => (
                <motion.div 
                  key={type}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-[#151515] bg-[#050505] p-6 text-center rounded-xl text-[#ededed] font-medium"
                >
                  {type}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="py-32">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-8">
                  WE BUILD THE CLIPS.<br />
                  YOU GET THE REACH.
                </h2>
                <div className="space-y-8 mt-12">
                  {[
                    { num: "01", title: "Share Your Content", desc: "Send us your long-form videos or streams." },
                    { num: "02", title: "We Extract", desc: "Our network identifies the moments that will perform." },
                    { num: "03", title: "We Edit", desc: "Content is turned into platform-native short-form." },
                    { num: "04", title: "We Distribute", desc: "Clips are pushed across multiple channels." },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-6">
                      <div className="text-[#00FF66] font-heading font-medium mt-1">{step.num}</div>
                      <div>
                        <h4 className="text-xl font-heading font-medium text-[#ededed] mb-1">{step.title}</h4>
                        <p className="text-[#a3a3a3]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                <VideoCard delay={0.2} />
                <div className="mt-12">
                  <VideoCard delay={0.4} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
