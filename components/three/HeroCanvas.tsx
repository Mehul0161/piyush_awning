"use client";

import dynamic from "next/dynamic";

const HeroCanvasClient = dynamic(
  () => import("./HeroCanvasClient").then((m) => m.HeroCanvasClient),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-stone-100 to-sage-100" />
    ),
  }
);

export function HeroCanvas() {
  return (
    <div className="absolute inset-0">
      <HeroCanvasClient />
    </div>
  );
}
