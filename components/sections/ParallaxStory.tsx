"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ParallaxStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-40 overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:gap-24 md:grid-cols-2">
          {/* Image Side */}
          <motion.div style={{ y }} className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group order-2 md:order-1">
            <Image
              src="/heroBG.jpeg"
              alt="Luxury Architectural Shade"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 p-6 glass-card rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm font-bold text-charcoal uppercase tracking-widest text-center">Hand-Crafted in India</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center text-center md:text-left items-center md:items-start order-1 md:order-2"
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6 block">
              The Piyush Legacy
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-tight">
              15 Years of Crafting <br />
              <span className="text-accent italic">Shadow & Soul.</span>
            </h2>

            <div className="mt-8 space-y-6 text-lg text-sage-600 leading-relaxed font-medium">
              <p>
                Founded in 2011, Piyush Awning has evolved from a boutique manufacturer to India's leading name in luxury shading. We believe that a home doesn't end at its walls—it extends into the nature that surrounds it.
              </p>

              <div className="pt-4 space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/20 transition-transform group-hover:scale-110">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-charcoal">Unmatched Quality</h4>
                    <p className="text-sm text-sage-500 mt-1">UV-resistant, waterproof fabrics imported from Italy and Germany.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-200 text-sage-400 transition-transform group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-charcoal">Next-Gen Automation</h4>
                    <p className="text-sm text-sage-500 mt-1">Fully integrated smart home systems with rain and wind sensors.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button className="text-xs font-bold uppercase tracking-widest text-accent border-b-2 border-accent pb-1 hover:text-charcoal hover:border-charcoal transition-all">
                Our Journey
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
