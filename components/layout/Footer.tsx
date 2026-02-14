"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_LINK, COMPANY_NAME, COMPANY_LOCATION, COMPANY_ADDRESS } from "@/lib/constants";
import { submitEnquiry } from "@/lib/integrations";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    const res = await submitEnquiry({
      type: "newsletter",
      email: email,
    });

    if (res.success) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };
  return (
    <footer className="bg-[#0A0F0B] pt-32 pb-12 text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 mb-24">
          {/* Brand Info Col */}
          <div className="lg:col-span-4 space-y-8">
            <p className="text-white/40 text-[13px] leading-relaxed max-w-sm font-medium tracking-wide">
              Crafting architectural shade solutions since 2011. We merge structural precision with the serenity of nature to define the modern luxury landscape.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tighter">15</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Years Exp.</span>
                <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest mt-1">{COMPANY_LOCATION}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-2">
                  Heritage
                </span>
                <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest leading-relaxed">
                  Mastering Sunlight<br />since 2011
                </span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-10">Collections</h4>
              <ul className="space-y-4 text-[13px] font-bold text-white/60">
                <li><Link href="/products" className="hover:text-accent transition-colors">Retractable Awnings</Link></li>
                <li><Link href="/products" className="hover:text-accent transition-colors">Luxury Gazebos</Link></li>
                <li><Link href="/products" className="hover:text-accent transition-colors">Bioclimatic Pergolas</Link></li>
                <li><Link href="/products" className="hover:text-accent transition-colors">Tensile Structures</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-10">Company</h4>
              <ul className="space-y-4 text-[13px] font-bold text-white/60">
                <li><Link href="/about" className="hover:text-accent transition-colors">Our Heritage</Link></li>
                <li><Link href="/manufacturing" className="hover:text-accent transition-colors">Manufacturing</Link></li>
                <li><Link href="/projects" className="hover:text-accent transition-colors">Project Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Expert</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter / Custom Input Section */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-3">Newsletter</h4>
                <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest leading-relaxed">Architectural Insights & Trends</p>
              </div>

              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleNewsletterSubmit}
                className="relative group/form"
              >
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/form:text-accent transition-colors duration-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  required
                  placeholder={status === "success" ? "THANK YOU!" : "EMAIL ADDRESS"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-6 text-[10px] font-black tracking-[0.2em] focus:outline-none focus:border-accent/40 focus:bg-white/[0.07] transition-all duration-500 placeholder:text-white/10"
                />
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="absolute right-2 top-2 bottom-2 bg-white text-charcoal px-8 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-500 active:scale-95 shadow-2xl disabled:opacity-50"
                >
                  {status === "submitting" ? "..." : status === "success" ? "✓" : "Join"}
                </button>
              </motion.form>
            </div>

            <div className="flex items-center gap-8 pt-12">
              {['Instagram', 'Linkedin', 'Pinterest'].map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 cursor-pointer hover:text-accent transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Large Brand Name Section */}
        <div className="border-t border-white/5 pt-20 pb-10">
          <Link href="/" className="block group">
            <span className="font-serif text-[clamp(4rem,20vw,15rem)] leading-[0.8] font-black uppercase tracking-tighter text-white/90 group-hover:text-white transition-colors duration-700 block text-center">
              PIYUSH<br />
              <span className="text-accent italic block ml-[0.1em]">AWNING</span>
            </span>
          </Link>
        </div>

        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
          <p>© {new Date().getFullYear()} PIYUSH AWNING SYSTEMS PVT LTD. REFINED BY DESIGN.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-accent transition-colors">Legal</Link>
            <Link href="#" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
