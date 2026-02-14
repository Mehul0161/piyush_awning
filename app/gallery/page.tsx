"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import galleryData from "@/data/gallery.json";
import { Section } from "@/components/ui/Section";
import { getImagePath, isPlaceholderImage } from "@/lib/imageUtils";

type GalleryItem = { id: string; src: string; tags: string[] };

export default function GalleryPage() {
  const [tag, setTag] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const items = useMemo(() => {
    const list = galleryData as GalleryItem[];
    if (tag === "All") return list;
    return list.filter((item) => item.tags.includes(tag));
  }, [tag]);

  const availableTags = useMemo(() => {
    const all = (galleryData as GalleryItem[]).flatMap((i) => i.tags);
    return ["All", ...new Set(all)];
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0A0F0B] flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 grayscale contrast-125">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0B] via-transparent to-transparent z-10" />
          <Image
            src="/assets/images/hero/gallery-hero.jpeg"
            alt="Gallery Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl pt-20">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4 block">The Gallery</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight [text-shadow:0_4px_24px_rgba(0,0,0,0.6)]">
            Textures of <br />
            <span className="text-accent italic">Elegance.</span>
          </h1>
          <p className="mt-8 text-lg text-white max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.1em] text-[10px] font-black [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
            A visual journal of light, shadow, and architectural harmony in India’s finest spaces.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-20 flex flex-wrap justify-center gap-4">
          {availableTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`rounded-full px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all ${tag === t
                ? "bg-accent text-white shadow-xl shadow-accent/30"
                : "bg-white border border-stone-100 text-sage-500 hover:border-accent hover:text-accent"
                }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-[2rem] bg-stone-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => setLightbox(item)}
              >
                <Image
                  src={getImagePath(item.src)}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  unoptimized={isPlaceholderImage(item.src)}
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white text-charcoal flex items-center justify-center scale-50 group-hover:scale-100 transition-transform shadow-xl">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
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
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[90vh] max-w-4xl w-full overflow-hidden rounded-[3rem] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full bg-stone-50">
                <Image
                  src={getImagePath(lightbox.src)}
                  alt=""
                  fill
                  className="object-contain p-8"
                  unoptimized={isPlaceholderImage(lightbox.src)}
                />
              </div>
              <div className="p-8 border-t border-stone-100 bg-white flex justify-between items-center">
                <div className="flex gap-2">
                  {lightbox.tags.map(t => (
                    <span key={t} className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal hover:text-accent transition-colors"
                >
                  Close View
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
