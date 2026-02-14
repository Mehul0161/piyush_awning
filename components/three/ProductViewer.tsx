"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type ProductViewerProps = {
  fabricColor?: string;
  frameColor?: string;
};

export function ProductViewer({
  fabricColor = "#8B7355",
  frameColor = "#e8e2db",
}: ProductViewerProps) {
  const roofRef = useRef<THREE.Mesh>(null);
  const postRefs = useRef<(THREE.Mesh | null)[]>([null, null, null, null]);

  useFrame((_, delta) => {
    roofRef.current && (roofRef.current.rotation.y += delta * 0.1);
    postRefs.current.forEach((p) => p && (p.rotation.y += delta * 0.1));
  });

  const posts: [number, number, number][] = [
    [-1, 0.5, -1],
    [1, 0.5, -1],
    [1, 0.5, 1],
    [-1, 0.5, 1],
  ];

  return (
    <>
      <OrbitControls enableZoom enablePan />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={1} />
      <Environment preset="sunset" />
      <mesh ref={roofRef} position={[0, 1.3, 0]} scale={1.2}>
        <planeGeometry args={[2.2, 2.2]} />
        <meshStandardMaterial
          color={fabricColor}
          roughness={0.9}
          metalness={0}
          side={THREE.DoubleSide}
        />
      </mesh>
      {posts.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => {
            postRefs.current[i] = el;
          }}
          position={[pos[0] * 1.2, pos[1], pos[2] * 1.2]}
        >
          <boxGeometry args={[0.08, 1, 0.08]} />
          <meshStandardMaterial
            color={frameColor}
            roughness={0.6}
            metalness={0.2}
          />
        </mesh>
      ))}
    </>
  );
}
