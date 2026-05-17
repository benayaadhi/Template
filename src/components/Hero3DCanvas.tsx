"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/* Entremet — a stack of layered cylinders + a small dome on top.     */
/* Abstract enough that it doubles as the brand mark in motion.       */
/* ------------------------------------------------------------------ */

const PALETTE = {
  cream:    "#F2EAD5",
  light:    "#F5E6C8",
  caramel:  "#A87545",
  cocoa:    "#4A2618",
  burnt:    "#B85C2C",
  gold:     "#C9A961",
  espresso: "#201410",
};

interface EntremetProps {
  mouse: { x: number; y: number };
}

function Entremet({ mouse }: EntremetProps) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    if (!group.current) return;
    // 0.2 rad/s as specified in tokens
    group.current.rotation.y += dt * 0.2;
    // mouse parallax — 15% strength
    const targetX = mouse.y * 0.15;
    const targetY = mouse.x * 0.15;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
    group.current.position.x += (targetY * 0.3 - group.current.position.x) * 0.04;
  });

  // material helpers
  const makeMat = (color: string, roughness = 0.65, metalness = 0.05) =>
    new THREE.MeshStandardMaterial({ color, roughness, metalness });

  return (
    <group ref={group} position={[0, -0.2, 0]} scale={1.1}>
      {/* base sablé — wider, shortest */}
      <mesh position={[0, -0.95, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.25, 1.3, 0.18, 64]} />
        <primitive object={makeMat(PALETTE.caramel, 0.85)} attach="material" />
      </mesh>

      {/* dark stratum — chocolate ganache */}
      <mesh position={[0, -0.78, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1.22, 0.12, 64]} />
        <primitive object={makeMat(PALETTE.cocoa, 0.55, 0.1)} attach="material" />
      </mesh>

      {/* main mousse body */}
      <mesh position={[0, -0.35, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.15, 1.18, 0.7, 64]} />
        <primitive object={makeMat(PALETTE.cream, 0.7)} attach="material" />
      </mesh>

      {/* burnt caramel band */}
      <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.12, 1.15, 0.06, 64]} />
        <primitive object={makeMat(PALETTE.burnt, 0.5, 0.1)} attach="material" />
      </mesh>

      {/* upper cream */}
      <mesh position={[0, 0.32, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.08, 1.12, 0.46, 64]} />
        <primitive object={makeMat(PALETTE.light, 0.72)} attach="material" />
      </mesh>

      {/* glaze top */}
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.05, 1.08, 0.08, 64]} />
        <primitive object={makeMat(PALETTE.gold, 0.4, 0.3)} attach="material" />
      </mesh>

      {/* dome on top */}
      <mesh position={[0, 0.78, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.55, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <primitive object={makeMat(PALETTE.cream, 0.6)} attach="material" />
      </mesh>

      {/* dome glaze cap */}
      <mesh position={[0, 1.06, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.18, 32, 16]} />
        <primitive object={makeMat(PALETTE.burnt, 0.45, 0.2)} attach="material" />
      </mesh>
    </group>
  );
}

function GroundShadow() {
  // a soft, ~circular shadow disc so the cake sits on a plane
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.06, 0]}>
      <circleGeometry args={[2, 64]} />
      <meshBasicMaterial color="#000000" transparent opacity={0.04} />
    </mesh>
  );
}

export default function Hero3DCanvas() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.4, 4.2], fov: 35 }}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
      shadows
      style={{ background: "transparent" }}
    >
      {/* lighting — warm key from upper left, soft fill */}
      <ambientLight intensity={0.55} color="#F5E6C8" />
      <directionalLight
        position={[-3, 4, 3]}
        intensity={1.1}
        color="#F2EAD5"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[3, 1.5, -2]} intensity={0.35} color="#C9A961" />
      <pointLight position={[0, -1, 3]} intensity={0.25} color="#B85C2C" />

      <Suspense fallback={null}>
        <Entremet mouse={mouse} />
        <GroundShadow />
        <Environment preset="apartment" />
      </Suspense>
    </Canvas>
  );
}
