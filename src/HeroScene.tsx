import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import PortraitReveal from "./PortraitReveal";
import * as THREE from "three";

interface HeroSceneProps {
  progress: number;
}

function Particles({ progress }: { progress: number }) {
  const particles = Array.from({ length: 65 }, (_, index) => {
    const angle = (index / 65) * Math.PI * 2;

    const radius = 3.2 + (index % 5) * 0.35;

    return {
      x: Math.cos(angle) * radius,
      y: ((index % 13) - 6) * 0.45,
      z: Math.sin(angle) * radius,
    };
  });

  return (
    <group rotation={[0, progress * 0.2, 0]}>
      {particles.map((particle, index) => (
        <mesh
          key={index}
          position={[particle.x, particle.y, particle.z]}
          scale={0.006 + (index % 3) * 0.003}
        >
          <sphereGeometry args={[1, 6, 6]} />

          <meshBasicMaterial color="#ffffff" transparent opacity={0.07} />
        </mesh>
      ))}
    </group>
  );
}

function Scene({ progress }: HeroSceneProps) {
  return (
    <>
      <ambientLight intensity={0.45} />

      <directionalLight position={[4, 5, 6]} intensity={2.2} />

      <directionalLight position={[-3, 2, 3]} intensity={0.8} color="#f3f009" />

      <PortraitReveal progress={progress} />

      <Particles progress={progress} />

      <Environment preset="city" />
    </>
  );
}

export default function HeroScene({ progress }: HeroSceneProps) {
  return (
    <div className="absolute inset-0 z-10">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 40,
        }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        dpr={[1, 2]}
      >
        <Scene progress={progress} />
      </Canvas>

      {/* VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,transparent_20%,rgba(3,3,3,0.15)_45%,rgba(3,3,3,0.85)_100%)]" />

      {/* ASSOMBRISSEMENT CÔTÉ GAUCHE */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-[#030303] via-[#030303]/70 to-transparent" />

      {/* FONDU BAS */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030303] to-transparent" />
    </div>
  );
}
