"use client";

import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY_LOCATION } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Full height with navbar overlay */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0A0F0B]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero/about-hero.jpeg"
            alt="Heritage Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-stone-950/40 z-10" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent z-10" />

        {/* Content Container */}
        <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 pt-20">
          <div className="mx-auto max-w-7xl w-full text-center">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4 block">The Heritage</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight [text-shadow:0_4px_24px_rgba(0,0,0,0.6)]">
              A Journey of <br />
              <span className="text-accent italic">Evolution.</span>
            </h1>
            <p className="mt-8 text-lg text-white max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.1em] text-[10px] font-black [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
              Since 2011, we have been redefining the boundaries of outdoor living through architectural precision.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Section className="py-40 bg-white overflow-hidden">
        <div className="relative mx-auto max-w-6xl">
          {/* Architectural Vertical Axis */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-stone-100 to-transparent -translate-x-1/2 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
          </div>

          <div className="space-y-48">
            {[
              {
                year: "2011",
                title: "The Foundation",
                desc: `Established as a specialized workshop in ${COMPANY_LOCATION}, focusing on bringing European-standard shading craftsmanship to the Indian market.`,
                stat: "First Atelier"
              },
              {
                year: "2018",
                title: "Engineering Peak",
                desc: "Launched our first fully automated manufacturing line and pioneered motorized high-tension fabric systems.",
                stat: "Factory Launch"
              },
              {
                year: "2026",
                title: "Global Horizons",
                desc: "Celebrating 15 years as India's lead architect for bioclimatic pergolas and AI-integrated shading environments.",
                stat: "15Y Anniversary"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-16 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Block */}
                <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="relative group">
                    <div className="space-y-6">
                      <div className={`flex items-center gap-4 mb-2 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">{item.stat}</span>
                        <div className="h-[1px] w-12 bg-accent/20" />
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-lg text-sage-600 max-w-md mx-auto md:mx-0 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>

                    {/* Huge Background Year */}
                    <span className={`absolute -top-16 md:-top-32 font-serif font-black text-[12rem] md:text-[18rem] text-stone-100/40 -z-10 select-none pointer-events-none transition-transform duration-1000 group-hover:scale-110 ${i % 2 === 0 ? '-right-12' : '-left-12'}`}>
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
                  {/* Outer Rings */}
                  <div className="absolute h-full w-full rounded-full border border-stone-100 bg-white/50 backdrop-blur-sm shadow-xl" />
                  <div className="absolute h-16 w-16 rounded-full border border-accent/20 animate-[spin_10s_linear_infinite]" />

                  {/* The Core Node */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A0F0B] shadow-2xl">
                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  </div>

                  {/* Horizontal Connector (Architectural Tie) */}
                  <div className={`absolute top-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent w-32 hidden md:block ${i % 2 === 0 ? 'right-full' : 'left-full'}`} />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <section className="bg-[#0A0F0B] py-32 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4 block">Our Team</span>
              <h2 className="font-serif text-5xl font-bold">The Minds Behind <br />The Mastery.</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-bold uppercase tracking-[0.2em] leading-relaxed">
              Meet the architects and master craftsmen who bring your outdoor visions to life with obsessive detail.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Piyush Patel", role: "Founder & Lead Architect" },
              { name: "Sanjay Mehta", role: "Head of Engineering" },
              { name: "Elena Rossi", role: "Director of Design" },
              { name: "Vikram Shah", role: "Precision Lead" }
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-[3rem] bg-white/5 border border-white/5 mb-8 overflow-hidden relative">
                  <Image
                    src="/assets/images/about/team-placeholder.jpeg"
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0B] via-transparent to-transparent opacity-60" />
                </div>
                <h4 className="text-xl font-bold mb-2 tracking-tight">{member.name}</h4>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section className="bg-stone-50 py-40">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="h-16 w-16 text-accent/20 mx-auto mb-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.19zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.19z" />
          </svg>
          <h2 className="font-serif text-5xl font-bold text-charcoal mb-12 leading-tight tracking-tight">
            "We don't just shield spaces; we curate the atmosphere where your most precious memories are born."
          </h2>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">— Our Philosophy</span>
        </div>
      </Section>
    </div>
  );
}
