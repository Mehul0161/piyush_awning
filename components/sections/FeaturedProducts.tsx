"use client";

import products from "@/data/products.json";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const featured = products.slice(0, 4);

export function FeaturedProducts() {
  return (
    <Section
      title="Architectural Solutions"
      subtitle="Transforming balconies, terraces, and open gardens into year-round luxury retreats."
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {featured.map((p) => (
          <motion.div
            key={p.slug}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <Card
              title={p.name}
              description={p.shortDescription}
              image={p.thumbnail}
              href={`/products/${p.slug}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
