"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import productsData from "@/data/products.json";
import { Card } from "@/components/ui/Card";

type Product = {
  slug: string;
  name: string;
  category: string;
  thumbnail: string;
  shortDescription: string;
};

const categoryLabels: Record<string, string> = {
  All: "All Products",
  Awnings: "Awnings",
  Gazebos: "Gazebos",
  Pergolas: "Pergolas",
  "Elite Retractable Series": "Elite Series",
};

const categories = ["All", "Awnings", "Gazebos", "Pergolas", "Elite Retractable Series"];

export function ProductsContent() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && categories.includes(cat)) {
      setCategory(cat);
      // If we have a category in URL, scroll to filters after a short delay
      // to allow the page to settle and images to begin loading
      setTimeout(() => {
        const element = document.getElementById("filter-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [searchParams]);

  const products = useMemo(() => {
    if (category === "All") return productsData as Product[];
    return (productsData as Product[]).filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0A0F0B] flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 grayscale contrast-125">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0B] via-transparent to-transparent z-10" />
          <Image
            src="/assets/images/hero/products-hero.jpeg"
            alt="Products Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl pt-20">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4 block">The Collections</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight [text-shadow:0_4px_24px_rgba(0,0,0,0.6)]">
            Architectural <span className="text-accent italic">Elegance.</span>
          </h1>
          <p className="mt-8 text-lg text-white max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.1em] text-[10px] font-black [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
            Discover our precision-engineered outdoor shading solutions designed for India's finest estates.
          </p>
        </div>
      </section>

      <div id="filter-section" className="mx-auto max-w-7xl px-4 pb-32 pt-24 sm:px-6 lg:px-8">
        {/* Filters & Navigation */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-between items-end gap-8 pb-8 border-b border-stone-100">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Sort By Category</span>
              <div className="flex flex-wrap gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`rounded-full px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${category === cat
                      ? "bg-accent text-white shadow-xl shadow-accent/30 scale-105"
                      : "bg-white border border-stone-100 text-stone-400 hover:border-accent hover:text-accent"
                      }`}
                  >
                    {categoryLabels[cat] ?? cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-300">View Pattern:</span>
              <div className="flex gap-2">
                <div className="h-4 w-4 bg-accent rounded-sm opacity-20" />
                <div className="h-4 w-4 bg-accent rounded-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid - 3 Columns for cleaner look */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              key={p.slug}
              className="group relative"
            >
              <Card
                title={p.name}
                description={p.shortDescription}
                image={p.thumbnail}
                href={`/products/${p.slug}`}
              />
              {idx === 0 && (
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-[#0A0F0B] text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.3em] shadow-2xl border border-white/10">
                    Bestseller
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 rounded-[3.5rem] bg-stone-950 p-6 sm:p-12 md:p-24 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-20 grayscale scale-110 group-hover:scale-100 transition-transform duration-1000">
            <Image fill src="/assets/images/hero/cta-background.jpeg" alt="CTA BG" className="object-cover" />
          </div>
          <div className="relative z-10 border border-white/5 p-8 md:p-20 rounded-[3rem] backdrop-blur-sm bg-white/5">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 block">Ready for your sanctuary?</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">Let's Architect Your <br /><span className="text-accent italic">Solitude Project.</span></h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 bg-white text-stone-950 px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              Book Personal Consultation
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
