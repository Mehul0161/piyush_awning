"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0A0F0B]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero/heroBG.jpeg"
          alt="Luxury Architectural Shading"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay for text readability - strengthened for better contrast on the left */}
      <div className="absolute inset-0 bg-stone-950/40 z-10" />
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 pt-20">
        <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.05] [text-shadow:0_4px_24px_rgba(0,0,0,0.5)]">
              Elevating <br />
              <span className="text-accent italic">Outdoor Living.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg font-medium text-white/90 leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
              Bespoke shading solutions that merge architectural precision with the serenity of nature. Hand-crafted for India's finest estates.
            </p>

            <div className="mt-12 flex flex-wrap gap-6">
              <Button href="/products" variant="primary">Explore Collections</Button>
              <Button href="/projects" variant="outline" className="text-white border-white/20 hover:bg-white/10 [text-shadow:none]">View Portfolio</Button>
            </div>

            <div className="mt-20">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-accent/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                  Mastering Sunlight since 2011
                </span>
              </div>
              <div className="flex items-center gap-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white tracking-tighter">15</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Years Exp.</span>
                </div>
                <div className="h-10 w-[1px] bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white tracking-tighter">5000+</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Installations</span>
                </div>
                <div className="h-10 w-[1px] bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white tracking-tighter">Pan-India</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Service</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Reserved for 3D elements or focal background imagery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="hidden lg:block relative"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white">Explore</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
