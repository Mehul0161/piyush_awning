"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const testimonials = [
    {
        quote: "Piyush Awning's attention to detail is remarkable. Their structures don't just provide shade; they enhance the architectural vocabulary of our luxury residential projects.",
        author: "Rahul Khanna",
        role: "Principal Architect, RK Designs",
        initials: "RK"
    },
    {
        quote: "The motorized systems are whisper-quiet and incredibly reliable. It's rare to find such high-end European quality manufactured with Indian service agility.",
        author: "Ananya Sharma",
        role: "Luxury Homeowner, Mumbai",
        initials: "AS"
    }
];

export function Testimonials() {
    return (
        <Section title="Architect Approved" subtitle="Preferred by India's top architects for aesthetic integrity and lasting durability." className="bg-stone-50">
            <div className="grid gap-8 md:grid-cols-2">
                {testimonials.map((t, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="flex flex-col rounded-[2.5rem] bg-white p-12 shadow-sm border border-stone-100 hover:shadow-xl transition-shadow duration-500 group relative"
                    >
                        <div className="absolute top-10 right-10 text-stone-100 scale-150 group-hover:text-accent/10 transition-colors">
                            <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V4L14.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 17.2091 21.2261 19 19.017 19H17.017L14.017 21ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V4L1 3H6C8.20914 3 10 4.79086 10 7V15C10 17.2091 8.20914 19 6 19H4L1 21Z" />
                            </svg>
                        </div>

                        <p className="relative z-10 text-xl font-medium leading-relaxed text-sage-800 mb-12">
                            "{t.quote}"
                        </p>

                        <div className="mt-auto flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white font-bold text-lg shadow-lg shadow-accent/20">
                                {t.initials}
                            </div>
                            <div>
                                <h4 className="font-bold text-charcoal">{t.author}</h4>
                                <p className="text-xs font-bold uppercase tracking-widest text-sage-400 mt-1">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
