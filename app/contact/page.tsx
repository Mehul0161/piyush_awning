"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { WHATSAPP_NUMBER, MAP_EMBED_URL, COMPANY_ADDRESS, COMPANY_EMAIL, PHONE_NUMBER } from "@/lib/constants";
import { submitEnquiry } from "@/lib/integrations";

function buildWhatsAppMessage(name: string, phone: string, email: string, message: string) {
  const text = `Hi, I'm ${name}. Phone: ${phone}, Email: ${email}. ${message}`;
  return encodeURIComponent(text);
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState("");
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Submit to Google Sheets (Async)
    const msg = product ? `Product of interest: ${product}. ${message}` : message;
    submitEnquiry({
      type: "enquiry",
      name,
      phone,
      email,
      message: msg,
      product,
      location,
    });

    // 2. Clear form and show success
    setIsSubmitting(false);
    setIsSuccess(true);

    // 3. Open WhatsApp as primary CTA
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage(name, phone, email, msg)}`;
    window.open(url, "_blank");

    // Optional: Reset form after delay
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const inputClass =
    "mt-4 w-full rounded-2xl border border-stone-200 bg-white px-8 py-5 text-charcoal placeholder:text-stone-300 transition-all duration-500 focus:border-accent/50 focus:outline-none focus:ring-[12px] focus:ring-accent/5 hover:border-accent/40 text-sm font-medium shadow-sm";
  const labelClass = "text-[10px] font-black uppercase tracking-[0.3em] text-accent ml-4 mb-2 block";

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0A0F0B] flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 grayscale contrast-125">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0B] via-transparent to-transparent z-10" />
          <Image
            src="/assets/images/hero/contact-hero.jpeg"
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl pt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4 block"
          >
            Personal Consultation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight [text-shadow:0_4px_24px_rgba(0,0,0,0.6)]"
          >
            Start Your <br />
            <span className="text-accent italic">Solitude Project.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg text-white max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.1em] text-[10px] font-black [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]"
          >
            Our specialists are ready to architect your perfect outdoor sanctuary.
          </motion.p>
        </div>
      </section>

      <Section className="pb-32 pt-32">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="mb-12 space-y-4 text-center lg:text-left">
              <div className="h-1 w-12 bg-accent mx-auto lg:mx-0" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">Request a Bespoke Quote</h2>
              <p className="text-lg text-sage-600 leading-relaxed font-medium">
                Fill out the details below, and our lead designer will contact you within 24 hours for a private consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 rounded-[3.5rem] bg-stone-50 p-10 lg:p-14 border border-stone-100 shadow-2xl shadow-stone-200/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="relative z-10 space-y-10">
                <div className="grid gap-10 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className={labelClass}>Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className={labelClass}>Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className={labelClass}>Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="product" className={labelClass}>Shading Category</label>
                    <div className="relative">
                      <select
                        id="product"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className={`${inputClass} appearance-none cursor-pointer pr-12`}
                      >
                        <option value="">Select Option...</option>
                        <option value="Retractable Awning">Retractable Awning</option>
                        <option value="Luxury Gazebo">Luxury Gazebo</option>
                        <option value="Bioclimatic Pergola">Bioclimatic Pergola</option>
                        <option value="Tensile Structure">Tensile Structure</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className={labelClass}>Project Site</label>
                    <input
                      id="location"
                      type="text"
                      placeholder="City, Area"
                      className={inputClass}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className={labelClass}>Project Vision</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your architectural goals..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="w-full rounded-2xl bg-[#0A0F0B] py-7 text-[10px] font-black uppercase tracking-[0.4em] text-white shadow-2xl transition-all hover:bg-black hover:-translate-y-1.5 flex items-center justify-center gap-6 group disabled:opacity-50 disabled:translate-y-0"
                  >
                    {isSubmitting ? "Processing..." : isSuccess ? "Inquiry Sent" : "Confirm Inquiry"}
                    {!isSuccess && (
                      <svg className="h-6 w-6 text-accent group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </button>
                  <div className="mt-10 flex items-center justify-center gap-6 p-6 rounded-[2rem] bg-white/50 border border-stone-100 backdrop-blur-sm">
                    <div className="h-3 w-3 rounded-full bg-accent animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Personal Data is encrypted and secure.</p>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            {/* Map Preview - Architectural Presentation */}
            <div className="rounded-[4rem] bg-[#0A0F0B] p-2 border border-white/5 shadow-2xl overflow-hidden group relative">
              <div className="aspect-[4/5] rounded-[3.8rem] overflow-hidden relative border border-white/10">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'saturate(1.2) contrast(1.1) brightness(0.9)' }}
                  allowFullScreen
                  className="transition-all duration-1000 scale-110 group-hover:scale-100 opacity-90 group-hover:opacity-100"
                />

                {/* Architectural Overlays */}
                <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 m-8 rounded-[2.5rem]" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A0F0B] via-transparent to-[#0A0F0B]/40" />

                {/* Decorative Grid/Coordinates */}
                <div className="absolute top-12 left-12 flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/80">Location Hub</span>
                  <span className="text-[8px] font-bold text-white/30 tracking-[0.2em]">28.6859° N, 76.9923° E</span>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[calc(100%-6rem)]">
                  <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 flex items-center justify-between group-hover:bg-white/15 transition-all duration-500">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Main Atelier</span>
                        <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Mundka, Delhi</span>
                      </div>
                    </div>
                    <Link
                      href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_ADDRESS)}`}
                      target="_blank"
                      className="h-10 w-10 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Items */}
            <div className="grid gap-8">
              {[
                {
                  label: "Headquarters",
                  val: COMPANY_ADDRESS,
                  icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"
                },
                {
                  label: "Inquiries",
                  val: `${COMPANY_EMAIL}\n${PHONE_NUMBER}`,
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="flex gap-8 p-10 rounded-[3rem] bg-white border border-stone-100 shadow-xl shadow-stone-200/40 hover:shadow-2xl hover:border-accent/20 transition-all duration-500"
                >
                  <div className="h-16 w-16 shrink-0 rounded-[1.5rem] bg-stone-50 flex items-center justify-center text-accent shadow-inner">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60">{item.label}</p>
                    <p className="text-base font-bold text-charcoal leading-relaxed whitespace-pre-line uppercase tracking-[0.1em]">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
