"use client";

import faqData from "@/data/faq.json";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import Image from "next/image";

type FaqItem = { id: string; question: string; answer: string };

export default function FAQPage() {
  const items = (faqData as FaqItem[]).map(({ id, question, answer }) => ({
    id,
    question,
    answer,
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0A0F0B] flex items-center justify-center">
        <div className="absolute inset-0 opacity-30 grayscale contrast-125">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0B] via-transparent to-transparent z-10" />
          <Image
            src="/assets/images/hero/faq-hero.jpeg"
            alt="FAQ Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl pt-20">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4 block">Concierge & Knowledge</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight [text-shadow:0_4px_24px_rgba(0,0,0,0.6)]">
            Clarity in <br />
            <span className="text-accent italic">Detail.</span>
          </h1>
          <p className="mt-8 text-lg text-white max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.1em] text-[10px] font-black [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
            Explore our meticulous approach to shading, automation, and long-term terrace maintenance.
          </p>
        </div>
      </section>

      <Section className="pb-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="h-1 w-12 bg-accent mb-6" />
            <h2 className="font-serif text-3xl font-bold text-charcoal">General Questions</h2>
          </div>
          <Accordion items={items} allowMultiple={false} />

          <div className="mt-24 rounded-[3rem] bg-stone-50 border border-stone-100 p-12 text-center">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">Still have questions?</h3>
            <p className="text-sage-600 mb-8 max-w-md mx-auto">Our specialists are available for private consultations to discuss your specific architectural needs.</p>
            <a
              href="/contact"
              className="inline-block bg-accent text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-accent/20 hover:scale-105 transition-transform"
            >
              Contact Specialist
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
