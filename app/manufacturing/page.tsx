"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { COMPANY_ADDRESS } from "@/lib/constants";

const steps = [
  {
    title: "Design & consultation",
    description:
      "We visit your site, understand your needs, and propose the right product and dimensions. Custom designs are drawn and approved before fabrication.",
    step: "1",
  },
  {
    title: "Cutting & preparation",
    description:
      "Materials are cut to size in our factory. We use quality steel, aluminium, and fabric, and maintain strict tolerances for a perfect fit.",
    step: "2",
  },
  {
    title: "Assembly",
    description:
      "Frames are assembled and powder-coated or finished. Fabric is cut and hemmed. Every component is checked before final assembly.",
    step: "3",
  },
  {
    title: "Quality check",
    description:
      "Each product undergoes a final quality check. We ensure structural integrity, finish, and operation before dispatch.",
    step: "4",
  },
  {
    title: "Delivery & installation",
    description:
      "We deliver and install at your site. Our team handles everything so you get a ready-to-use awning or gazebo with no hassle.",
    step: "5",
  },
];

function TimelineStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative flex gap-6 pb-12 last:pb-0 md:gap-10"
    >
      <div className="flex flex-shrink-0 flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white">
          {step.step}
        </div>
        {index < steps.length - 1 && (
          <div className="mt-2 h-full w-0.5 flex-1 bg-sage-200" />
        )}
      </div>
      <div className="flex-1 rounded-xl glass-card p-6 pb-12">
        <h3 className="font-serif text-xl font-semibold text-sage-800">
          {step.title}
        </h3>
        <p className="mt-3 text-sage-600">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function ManufacturingPage() {
  return (
    <>
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0A0F0B] flex items-center justify-center">
        {/* Cinematic Industrial Background */}
        <div className="absolute inset-0 opacity-40 grayscale contrast-125">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0B] via-transparent to-transparent z-10" />
          <Image
            src="/assets/images/hero/manufacturing-hero.jpeg"
            alt="Manufacturing Heritage"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl pt-20">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4 block">Inside The Foundry</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Crafting Shade, <br />
            Engineering <span className="text-accent italic">Solitude.</span>
          </h1>
          <p className="mt-8 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.1em] text-[10px] font-black">
            Step into the heart of our operations where industrial precision meets architectural vision.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Button variant="primary" className="rounded-full px-10">Explore Our Units</Button>
            <Button variant="outline" className="rounded-full px-10 text-white border-white/20 hover:bg-white/10 backdrop-blur-sm">Factory Reel</Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-bold shadow-lg shadow-accent/20">
                    {step.step}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-charcoal">{step.title}</h3>
                </div>
                <p className="text-lg text-sage-600 leading-relaxed max-w-lg">
                  {step.description}
                </p>
                <div className="flex justify-center md:justify-start gap-8 pt-4">
                  <div className="space-y-1">
                    <div className="h-1 w-8 bg-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-sage-400">Spec Check</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 w-8 bg-accent/20" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-sage-400">Durability</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full max-w-xl">
                <div className="aspect-[16/10] rounded-[2.5rem] bg-[#F1F3F1] border border-black/5 shadow-2xl overflow-hidden relative group">
                  <Image
                    src="/assets/images/hero/manufacturing-precision.jpeg"
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
            {[
              { val: "50,000+", label: "Sq. Ft. Factory" },
              { val: "15+", label: "Years Expertise" },
              { val: "200+", label: "Master Artisans" },
              { val: "100%", label: "In-house Fabricated" }
            ].map((stat, i) => (stat.label !== undefined &&
              <div key={i} className="text-center space-y-2">
                <div className="text-4xl font-bold text-accent font-serif">{stat.val}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-sage-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section className="bg-[#EDF1EF]">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Visit Us</span>
              <h2 className="font-serif text-5xl font-bold text-charcoal">Witness the Quality <br />Yourself.</h2>
            </div>
            <p className="text-lg text-sage-600 leading-relaxed font-medium">
              We believe in transparency. Book a private tour of our manufacturing facility to see our processes, touch the materials, and meet the craftsmen behind your shades.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-sm font-bold text-charcoal">
                <div className="h-2 w-2 rounded-full bg-accent" />
                {COMPANY_ADDRESS}
              </div>
              <div className="flex items-center gap-4 text-sm font-bold text-charcoal">
                <div className="h-2 w-2 rounded-full bg-accent" />
                Mon - Sat: 09:00 AM - 07:00 PM
              </div>
            </div>
            <Button variant="primary" className="rounded-full px-10 py-4 shadow-xl shadow-accent/20">Request Factory Tour</Button>
          </div>
          <div className="aspect-[4/3] rounded-[3rem] bg-white shadow-2xl border border-black/5 overflow-hidden relative group">
            <Image
              src="/assets/images/hero/factory-interior.jpeg"
              alt="Factory Interior"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </Section>
    </>
  );
}
