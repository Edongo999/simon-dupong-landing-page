import { Canvas } from "@react-three/fiber";
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

          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.07}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene({ progress }: HeroSceneProps) {
  return (
    <>
      {/* PORTRAIT */}
      <PortraitReveal progress={progress} />

      {/* PARTICULES */}
      <Particles progress={progress} />
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
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
      >
        <Scene progress={progress} />
      </Canvas>

      {/* VIGNETTE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_72%_50%,transparent_20%,rgba(3,3,3,0.15)_45%,rgba(3,3,3,0.85)_100%)]
        "
      />

      {/* ASSOMBRISSEMENT CÔTÉ GAUCHE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          w-[60%]
          bg-gradient-to-r
          from-[#030303]
          via-[#030303]/70
          to-transparent
        "
      />

      {/* FONDU BAS — plus léger sur mobile */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-20
          bg-gradient-to-t
          from-[#030303]
          to-transparent
          sm:h-40
        "
      />
    </div>
  );
}
