"use client";

import React, { useEffect, useState } from "react";

export function HeroCanvasClient() {
  const [Canvas, setCanvas] = useState<any>(null);
  const [HeroScene, setHeroScene] = useState<any>(null);

  useEffect(() => {
    // Load R3F only on client side after mount
    Promise.all([
      import("@react-three/fiber").then((mod) => mod.Canvas),
      import("./HeroScene").then((mod) => mod.HeroScene),
    ]).then(([CanvasComponent, SceneComponent]) => {
      setCanvas(() => CanvasComponent);
      setHeroScene(() => SceneComponent);
    });
  }, []);

  if (!Canvas || !HeroScene) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-stone-100 to-sage-100" />
    );
  }

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="absolute inset-0"
    >
      <HeroScene />
    </Canvas>
  );
}
