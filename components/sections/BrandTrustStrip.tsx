"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50,000+", label: "Sq. Ft. Factory", sub: "Production Capacity" },
  { value: "15+", label: "Years Expertise", sub: "Industry Legacy" },
  { value: "200+", label: "Master Artisans", sub: "Skilled Workforce" },
  { value: "100%", label: "In-House Fabricated", sub: "Quality Controlled" },
];

export function BrandTrustStrip() {
  return (
    <div className="bg-[#0A0F0B] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center px-4 sm:px-8 group"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter transition-transform duration-500 group-hover:scale-110">
                  {stat.value}
                </span>
                <span className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                  {stat.label}
                </span>
                <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white/20">
                  {stat.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
