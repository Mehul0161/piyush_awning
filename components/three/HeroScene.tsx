"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function RotatingGazebo() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1;
    }
  });

  const posts: [number, number, number][] = [
    [-1.2, 0, -1.2],
    [1.2, 0, -1.2],
    [1.2, 0, 1.2],
    [-1.2, 0, 1.2],
  ];

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Roof */}
        <mesh position={[0, 2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <coneGeometry args={[2.5, 1, 4]} />
          <meshStandardMaterial
            color="#22C55E"
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>

        {/* Structure */}
        {posts.map((pos, i) => (
          <mesh key={i} position={[pos[0], 1, pos[2]]}>
            <boxGeometry args={[0.1, 2, 0.1]} />
            <meshStandardMaterial color="#0A0F0B" metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

export function HeroScene() {
  return (
    <>
      <color attach="background" args={["#050806"]} />
      <ambientLight intensity={0.1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#22C55E" />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#ffffff" />
      <Environment preset="night" />

      <RotatingGazebo />

      <Sparkles count={30} scale={10} size={1.5} speed={0.3} opacity={0.2} color="#22C55E" />

      <ContactShadows
        position={[0, -1, 0]}
        opacity={0.5}
        scale={20}
        blur={2.5}
        far={4.5}
      />
    </>
  );
}
