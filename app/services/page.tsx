import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const services = [
  {
    id: "site-visit",
    title: "Site Consultation",
    description:
      "We provide expert site evaluations to measure dimensions, analyze sunlight patterns, and recommend the optimal shading architecture for your specific environment.",
    cta: "Schedule Consultation",
    image: "/assets/images/hero/service-consultation.jpeg"
  },
  {
    id: "custom",
    title: "Bespoke Engineering",
    description:
      "Every piece is engineered to order in our local facility. We tailor frame structures, fabric tensions, and automation systems to your precise aesthetic vision.",
    cta: "Start Your Design",
    image: "/assets/images/hero/service-engineering.jpeg"
  },
  {
    id: "installation",
    title: "Precision Mounting",
    description:
      "Our specialized White-Glove team handles the entire installation process, ensuring structural integrity and flawless aesthetic integration with your property.",
    cta: "See Our Process",
    image: "/assets/images/hero/service-installation.jpeg"
  },
  {
    id: "support",
    title: "Legacy Support",
    description:
      "Our relationship continues long after installation. We offer comprehensive maintenance programs and technical audits to preserve your system's longevity.",
    cta: "Contact Support",
    image: "/assets/images/hero/service-support.jpeg"
  },
];


export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0A0F0B] flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 grayscale contrast-125">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0B] via-transparent to-transparent z-10" />
          <Image
            src="/assets/images/hero/services-hero.jpeg"
            alt="Services Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl pt-20">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4 block">End-To-End Mastery</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Our <br />
            <span className="text-accent italic">Solitude Services.</span>
          </h1>
          <p className="mt-8 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.1em] text-[10px] font-black">
            From initial sketch to final installation, we manage the entire lifecycle of your architectural shade.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {services.map((s, idx) => (
            <div key={s.id} className="group relative flex flex-col gap-8 rounded-[3rem] bg-stone-50 p-8 border border-stone-100 hover:shadow-2xl hover:bg-white transition-all duration-500 overflow-hidden">
              <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden">
                <Image src={s.image} alt={s.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black text-accent/40 tracking-widest uppercase italic">Service 0{idx + 1}</span>
                  <div className="h-px flex-1 bg-stone-200" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-charcoal">{s.title}</h3>
                <p className="text-lg text-sage-600 leading-relaxed font-medium">
                  {s.description}
                </p>
                <Button href="/contact" variant="primary" className="rounded-full px-10">
                  {s.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
