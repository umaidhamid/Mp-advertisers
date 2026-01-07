// src/components/footer/FooterCanvas.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function FloatingSphere() {
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshStandardMaterial
          color="#2563eb"
          emissive="#1d4ed8"
          emissiveIntensity={0.4}
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function FooterCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 3, 4]} intensity={1} />
      <FloatingSphere />
    </Canvas>
  );
}
