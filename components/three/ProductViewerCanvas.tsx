"use client";

import { useEffect, useState } from "react";

type ProductViewerCanvasProps = {
  fabricColor?: string;
  frameColor?: string;
};

export function ProductViewerCanvas({
  fabricColor,
  frameColor,
}: ProductViewerCanvasProps) {
  const [Canvas, setCanvas] = useState<any>(null);
  const [ProductViewer, setProductViewer] = useState<any>(null);

  useEffect(() => {
    // Load R3F only on client side after mount
    Promise.all([
      import("@react-three/fiber").then((mod) => mod.Canvas),
      import("./ProductViewer").then((mod) => mod.ProductViewer),
    ]).then(([CanvasComponent, ViewerComponent]) => {
      setCanvas(() => CanvasComponent);
      setProductViewer(() => ViewerComponent);
    });
  }, []);

  if (!Canvas || !ProductViewer) {
    return (
      <div className="aspect-square w-full max-w-lg rounded-xl bg-sage-100/50 animate-pulse" />
    );
  }

  return (
    <div className="aspect-square w-full max-w-lg rounded-xl overflow-hidden bg-sage-100/50">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
        className="w-full h-full"
      >
        <ProductViewer
          fabricColor={fabricColor}
          frameColor={frameColor}
        />
      </Canvas>
    </div>
  );
}
