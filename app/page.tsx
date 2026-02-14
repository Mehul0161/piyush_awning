import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { ParallaxStory } from "@/components/sections/ParallaxStory";
import { BrandTrustStrip } from "@/components/sections/BrandTrustStrip";
import { ServiceHighlights } from "@/components/sections/ServiceHighlights";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <ParallaxStory />
      <BrandTrustStrip />
      <ServiceHighlights />
      <Testimonials />
    </>
  );
}
