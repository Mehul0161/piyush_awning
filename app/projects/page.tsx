"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "@/data/projects.json";
import { Section } from "@/components/ui/Section";
import { getImagePath, isPlaceholderImage } from "@/lib/imageUtils";

type Project = {
  id: string;
  title: string;
  type: string;
  location: string;
  image: string;
  description: string;
};

const types = ["All", ...new Set(projectsData.map((p) => p.type))];

export default function ProjectsPage() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const projects = useMemo(() => {
    if (typeFilter === "All") return projectsData as Project[];
    return (projectsData as Project[]).filter((p) => p.type === typeFilter);
  }, [typeFilter]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden bg-[#0A0F0B] flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 grayscale contrast-125">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0B] via-transparent to-transparent z-10" />
          <Image
            src="/heroBG.jpeg"
            alt="Architecture Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl pt-20">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4 block">The Portfolio</span>
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-white tracking-tight leading-tight [text-shadow:0_4px_24px_rgba(0,0,0,0.6)]">
            Our <span className="text-accent italic">Masterpieces.</span>
          </h1>
          <p className="mt-8 text-lg text-white max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.1em] text-[10px] font-black [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
            A curated showcase of architectural shading installations across India's most prestigious estates.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-24 flex flex-wrap justify-center gap-4">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`rounded-full px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all ${typeFilter === t
                ? "bg-accent text-white shadow-xl shadow-accent/30"
                : "bg-white border border-stone-100 text-sage-500 hover:border-accent hover:text-accent"
                }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Masonry Grid Mockup */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Architectural Quote Card */}
          <div className="hidden lg:flex lg:col-span-1 bg-stone-50 rounded-[3rem] p-16 flex-col justify-center border border-stone-100">
            <svg className="h-12 w-12 text-accent/20 mb-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V4L14.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 17.2091 21.2261 19 19.017 19H17.017L14.017 21ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V4L1 3H6C8.20914 3 10 4.79086 10 7V15C10 17.2091 8.20914 19 6 19H4L1 21Z" />
            </svg>
            <p className="text-3xl font-serif text-charcoal leading-tight mb-10 tracking-tight italic">
              "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
            </p>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">— Le Corbusier</span>
          </div>

          <AnimatePresence mode="popLayout">
            {projects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative cursor-pointer"
                onClick={() => setLightbox(p)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-stone-100 shadow-xl hover:shadow-2xl transition-all duration-700">
                  <Image
                    src={getImagePath(p.image)}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized={isPlaceholderImage(p.image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0B]/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-x-0 bottom-0 p-12 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-3 block">{p.type}</span>
                    <h3 className="font-serif text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">{p.location}</p>
                    <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-charcoal opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100 shadow-xl">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0F0B]/95 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-h-[90vh] max-w-6xl w-full overflow-hidden rounded-[3rem] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid lg:grid-cols-2 h-full">
                <div className="relative aspect-square lg:aspect-auto w-full bg-stone-100">
                  <Image
                    src={getImagePath(lightbox.image)}
                    alt={lightbox.title}
                    fill
                    className="object-cover"
                    unoptimized={isPlaceholderImage(lightbox.image)}
                  />
                </div>
                <div className="p-16 lg:p-24 flex flex-col justify-center bg-white">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 block">{lightbox.type}</span>
                  <h2 className="font-serif text-5xl lg:text-7xl font-bold text-charcoal mb-8 leading-tight tracking-tighter">
                    {lightbox.title}
                  </h2>
                  <p className="text-xl text-sage-600 leading-relaxed mb-12 font-medium">{lightbox.description}</p>
                  <div className="flex items-center gap-6 p-6 border border-stone-100 rounded-2xl w-fit">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Installation Site</p>
                      <p className="text-sm font-bold text-charcoal uppercase tracking-widest">{lightbox.location}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setLightbox(null)}
                    className="mt-16 w-fit rounded-full bg-charcoal px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:bg-black transition-all shadow-xl hover:-translate-y-1"
                  >
                    Return To Portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
