"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Site visit",
    description: "Free site visit and measurement. We assess your space and recommend the best solution.",
    href: "/services#site-visit",
  },
  {
    title: "Custom fabrication",
    description: "In-house factory manufacturing lets us build to your exact requirements and design.",
    href: "/services#custom",
  },
  {
    title: "Installation",
    description: "Professional installation by our trained team. We ensure a perfect fit and finish.",
    href: "/services#installation",
  },
  {
    title: "Support",
    description: "Ongoing support and warranty. We stand behind every product we deliver.",
    href: "/services#support",
  },
];

export function ServiceHighlights() {
  return (
    <Section
      title="Our services"
      subtitle="From consultation to installation, we are with you at every step."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Card key={s.title} title={s.title} description={s.description}>
            <Button href={s.href} variant="outline" className="mt-3">
              Learn more
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
