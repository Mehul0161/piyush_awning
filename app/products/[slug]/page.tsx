"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import productsData from "@/data/products.json";
import { getImagePath } from "@/lib/imageUtils";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";


type Product = {
  slug: string;
  name: string;
  category: string;
  thumbnail: string;
  shortDescription: string;
  specs: Record<string, string>;
  keySpecs?: Record<string, string>;
  features?: string[];
  fabricColors?: string[];
  frameColors?: string[];
  frameOptions?: { name: string; color: string }[];
  fabricCount?: number;
  relatedSlugs?: string[];
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";

  const product = useMemo(() => {
    return (productsData as unknown as Product[]).find((p) => p.slug === slug) ?? null;
  }, [slug]);

  const [fabricColor, setFabricColor] = useState("#1e3a5f");
  const [frameOption, setFrameOption] = useState("MATTE BLACK");

  const relatedProducts = useMemo(() => {
    const slugs = product?.relatedSlugs ?? [];
    const all = productsData as unknown as Product[];
    return slugs
      .map((s) => all.find((p) => p.slug === s))
      .filter((p): p is Product => !!p)
      .slice(0, 3);
  }, [product?.relatedSlugs]);

  if (!product) return null;

  const fabricColors = product.fabricColors || ["#1e3a5f", "#8B4513", "#ffffff", "#1a1a1a", "#e8e2db", "#2c3e2c"];
  const frameOptions = product.frameOptions || [
    { name: "MATTE BLACK", color: "#1a1a1a" },
    { name: "URBAN GREY", color: "#4a4a4a" },
    { name: "POLAR WHITE", color: "#f5f5f5" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-stone-50 border-b border-stone-100">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-3 text-stone-200">/</span>
            <Link href="/products" className="hover:text-accent transition-colors">Awnings</Link>
            <span className="mx-3 text-stone-200">/</span>
            <span className="text-charcoal font-black">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left: Product visual & Options */}
          <div className="space-y-12">
            <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-[3rem] bg-[#F1F3F1] border border-black/5 shadow-2xl">
              <Image
                src={getImagePath(product.thumbnail)}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={product.thumbnail?.includes("unsplash")}
              />

              {/* Float buttons to match reference */}
              <div className="absolute bottom-8 left-8 flex gap-3">
                <button className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-charcoal hover:bg-accent hover:text-white transition-all">
                  <span className="text-[10px] font-black uppercase tracking-widest">3D</span>
                </button>
                <button className="h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal hover:scale-110 transition-transform">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal hover:scale-110 transition-transform">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/40">Fabric Selection</h4>
                <div className="flex flex-wrap gap-3">
                  {fabricColors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setFabricColor(c)}
                      className={`h-10 w-10 rounded-full border-4 transition-all hover:scale-110 ${fabricColor === c ? "border-accent ring-4 ring-accent/10" : "border-stone-100"}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">8 of 42 patterns shown. <Link href="/gallery" className="text-accent hover:underline">View all fabrics</Link></p>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/40">Frame Finish</h4>
                <div className="flex gap-4">
                  {frameOptions.map((opt) => (
                    <button
                      key={opt.name}
                      onClick={() => setFrameOption(opt.name)}
                      className={`group flex flex-col items-center gap-2`}
                    >
                      <div
                        className={`h-12 w-12 rounded-full border-4 transition-all ${frameOption === opt.name ? "border-accent ring-4 ring-accent/10" : "border-stone-100"}`}
                        style={{ backgroundColor: opt.color }}
                      />
                      <span className={`text-[8px] font-black uppercase tracking-widest ${frameOption === opt.name ? "text-charcoal" : "text-stone-300"}`}>{opt.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info & Form */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">Precision Engineering</span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-charcoal tracking-tight leading-[1.05]">
                {product.name}
              </h1>
              <p className="text-lg text-sage-600 leading-relaxed font-medium">
                {product.shortDescription}
              </p>

              <div className="space-y-4 pt-4">
                {product.features?.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white group-hover:scale-110 transition-transform">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-charcoal/80 tracking-tight">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-stone-50 p-10 border border-stone-100 shadow-xl shadow-stone-200/50">
              <div className="mb-8">
                <h3 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-2">Build Your Own</h3>
                <h2 className="text-2xl font-bold text-charcoal">Quick Quote Request</h2>
              </div>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Width (M)</label>
                    <input type="text" placeholder="4.5" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Projection (M)</label>
                    <input type="text" placeholder="3.0" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Your Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent" />
                </div>
                <button className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-accent/30 text-sm uppercase tracking-[0.2em] group">
                  Request Pricing
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
                <p className="text-center text-[10px] font-bold text-stone-400 tracking-widest">Instant estimate will be sent to your inbox.</p>
              </form>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-accent/5 border border-accent/10">
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-accent uppercase tracking-widest">Expert Advice</p>
                <p className="text-sm font-bold text-charcoal">Speak to a design consultant now.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-40">
          <div className="mb-12">
            <h2 className="font-serif text-4xl font-bold text-charcoal">Technical Specifications</h2>
          </div>

          <div className="grid gap-px bg-stone-200 overflow-hidden rounded-[2rem] border border-stone-200 shadow-xl lg:grid-cols-4">
            {product.keySpecs ? Object.entries(product.keySpecs).map(([key, val], i) => (
              <div key={i} className="bg-white p-10 group hover:bg-stone-50 transition-colors">
                <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">{key.replace(/([A-Z])/g, ' $1')}</p>
                <p className="text-3xl font-bold text-charcoal group-hover:scale-105 transition-transform origin-left">{val}</p>
              </div>
            )) : null}
          </div>

          <div className="mt-12 space-y-4">
            {product.specs ? Object.entries(product.specs).map(([key, val], i) => (
              <div key={i} className="flex justify-between py-6 border-b border-stone-100 items-center">
                <span className="text-sm font-bold text-stone-400 uppercase tracking-widest">{key}</span>
                <span className="text-sm font-black text-charcoal">{val}</span>
              </div>
            )) : null}
          </div>
        </div>

        {/* Related Designs */}
        {relatedProducts.length > 0 && (
          <div className="mt-40">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h4 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-2">Explore Options</h4>
                <h2 className="font-serif text-5xl font-bold text-charcoal">Related Designs</h2>
              </div>
              <div className="flex gap-4">
                <button className="h-12 w-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-accent hover:text-white transition-all">←</button>
                <button className="h-12 w-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-accent hover:text-white transition-all">→</button>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedProducts.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="group">
                  <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6">
                    <Image src={getImagePath(p.thumbnail)} alt={p.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" unoptimized={p.thumbnail.includes("unsplash")} />
                  </div>
                  <h4 className="text-xl font-bold text-charcoal group-hover:text-accent transition-colors">{p.name}</h4>
                  <p className="text-sm text-sage-500 mt-2 line-clamp-2">{p.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
