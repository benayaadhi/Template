"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { scrollStore } from "@/lib/scrollStore";

function Knot() {
  const ref = useRef<THREE.Mesh>(null);
  const target = useRef({ x: 0, y: 0, z: 0, scale: 1, px: 0 });

  useFrame((_, dt) => {
    if (!ref.current) return;
    const p = scrollStore.get();

    // Animation script driven by overall scroll progress (0..1).
    // 0.00 - 0.20 : hero, idle rotation, centered, large
    // 0.20 - 0.50 : drift right and shrink as features grid passes
    // 0.50 - 0.85 : drift left, tilt back (story section)
    // 0.85 - 1.00 : recenter and pulse for CTA
    let tx = 0,
      ty = 0,
      tz = 0,
      ts = 1.2;

    if (p < 0.2) {
      const k = p / 0.2;
      tx = 0;
      ty = -k * 0.3;
      tz = 0;
      ts = 1.2 - k * 0.1;
    } else if (p < 0.5) {
      const k = (p - 0.2) / 0.3;
      tx = 1.6 * k;
      ty = -0.3 - k * 0.2;
      tz = -k * 0.5;
      ts = 1.1 - k * 0.25;
    } else if (p < 0.85) {
      const k = (p - 0.5) / 0.35;
      tx = 1.6 - 3.2 * k;
      ty = -0.5 + k * 0.2;
      tz = -0.5 - k * 0.3;
      ts = 0.85 + k * 0.1;
    } else {
      const k = (p - 0.85) / 0.15;
      tx = -1.6 + 1.6 * k;
      ty = -0.3 + k * 0.3;
      tz = -0.8 + k * 0.8;
      ts = 0.95 + Math.sin(k * Math.PI) * 0.25;
    }

    target.current.x = tx;
    target.current.y = ty;
    target.current.z = tz;
    target.current.scale = ts;
    target.current.px = p;

    // Lerp to target for buttery smooth motion
    const lerp = 1 - Math.pow(0.001, dt);
    ref.current.position.x += (tx - ref.current.position.x) * lerp;
    ref.current.position.y += (ty - ref.current.position.y) * lerp;
    ref.current.position.z += (tz - ref.current.position.z) * lerp;
    const s = ref.current.scale.x + (ts - ref.current.scale.x) * lerp;
    ref.current.scale.setScalar(s);

    // Continuous rotation, accelerated by scroll velocity
    ref.current.rotation.x += dt * 0.15 + p * dt * 0.4;
    ref.current.rotation.y += dt * 0.25 + p * dt * 0.6;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <torusKnotGeometry args={[1, 0.32, 220, 32]} />
      <MeshDistortMaterial
        color="#d6ff3d"
        emissive="#1a2400"
        roughness={0.18}
        metalness={0.9}
        distort={0.32}
        speed={1.4}
      />
    </mesh>
  );
}

function Particles({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
  }

  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.03;
    const p = scrollStore.get();
    ref.current.rotation.x = p * Math.PI * 0.2;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene() {
  return (
    <div className="canvas-fixed">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0a0a0a"]} />
        <fog attach="fog" args={["#0a0a0a", 6, 14]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -2, -3]} intensity={0.6} color="#d6ff3d" />
        <Suspense fallback={null}>
          <Knot />
          <Particles />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
