"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only prototype
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex-1">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-[1.1] mb-6"
                >
                  LET'S MAKE SOMETHING<br />
                  <span className="text-[#00FF66]">TRAVEL.</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-[#a3a3a3] text-xl mb-12 max-w-lg"
                >
                  Ready to turn your content into reach? Tell us about your goals and our team will get back to you.
                </motion.p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold tracking-wider text-[#a3a3a3] uppercase mb-2">Direct Contact</h4>
                    <a href="mailto:info@umavmedia.com" className="text-2xl font-heading text-[#ededed] hover:text-[#00FF66] transition-colors">
                      hello@umavmedia.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex-1 max-w-xl w-full">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="border border-[#151515] bg-[#0A0A0A] p-10 rounded-2xl flex flex-col items-center text-center h-full justify-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-[#00FF66] mb-6" />
                    <h3 className="text-3xl font-heading font-medium mb-4">Request Received</h3>
                    <p className="text-[#a3a3a3] mb-2">
                      This is a frontend prototype. No data was actually sent.
                    </p>
                    <p className="text-[#a3a3a3]">
                      In a production environment, this would connect to our CRM. For now, please email us directly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm text-[#00FF66] hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 border border-[#151515] bg-[#0A0A0A] p-8 md:p-10 rounded-2xl"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm text-[#a3a3a3]">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          className="bg-[#050505] border border-[#333333] focus:border-[#00FF66] rounded-lg px-4 py-3 text-[#ededed] outline-none transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm text-[#a3a3a3]">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          className="bg-[#050505] border border-[#333333] focus:border-[#00FF66] rounded-lg px-4 py-3 text-[#ededed] outline-none transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-sm text-[#a3a3a3]">Company / Channel</label>
                        <input 
                          type="text" 
                          id="company" 
                          className="bg-[#050505] border border-[#333333] focus:border-[#00FF66] rounded-lg px-4 py-3 text-[#ededed] outline-none transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="website" className="text-sm text-[#a3a3a3]">Website / Social Link</label>
                        <input 
                          type="url" 
                          id="website" 
                          className="bg-[#050505] border border-[#333333] focus:border-[#00FF66] rounded-lg px-4 py-3 text-[#ededed] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="interest" className="text-sm text-[#a3a3a3]">What are you looking to promote?</label>
                      <select 
                        id="interest"
                        className="bg-[#050505] border border-[#333333] focus:border-[#00FF66] rounded-lg px-4 py-3 text-[#ededed] outline-none transition-colors appearance-none"
                      >
                        <option>Podcasts</option>
                        <option>Streams</option>
                        <option>Brand Campaigns</option>
                        <option>Other Long-form Content</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm text-[#a3a3a3]">Message</label>
                      <textarea 
                        id="message" 
                        rows={4}
                        className="bg-[#050505] border border-[#333333] focus:border-[#00FF66] rounded-lg px-4 py-3 text-[#ededed] outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="mt-4 bg-[#00FF66] text-[#050505] hover:bg-[#00e65c] transition-colors font-medium rounded-lg h-14 flex items-center justify-center gap-2 group"
                    >
                      START THE CONVERSATION
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
