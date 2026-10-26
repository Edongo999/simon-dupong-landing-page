import { useEffect, useMemo, useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface PortraitRevealProps {
  progress: number;
}

interface FragmentData {
  texture: THREE.Texture;
  x: number;
  y: number;
  width: number;
  height: number;
  startX: number;
  startY: number;
  startZ: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  delay: number;
  duration: number;
}

const IMAGE_WIDTH = 3.5;
const IMAGE_HEIGHT = 4.95;

const COLUMNS = 7;
const ROWS = 9;

const MAX_DELAY = 0.42;
const ANIMATION_DURATION = 1.3;
const FRAGMENT_OVERLAP = 0.004;

function randomValue(seed: number): number {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453123;
  return value - Math.floor(value);
}

function easeOutQuint(value: number): number {
  return 1 - Math.pow(1 - value, 5);
}

function easeOutCubic(value: number): number {
  return 1 - Math.pow(1 - value, 3);
}

function createBoundaries(count: number, seed: number): number[] {
  const weights = Array.from({ length: count }, (_, index) => {
    return 0.68 + randomValue(seed + index * 17) * 0.64;
  });

  const total = weights.reduce((sum, weight) => sum + weight, 0);
  const boundaries = [0];

  let accumulated = 0;

  for (const weight of weights) {
    accumulated += weight / total;
    boundaries.push(accumulated);
  }

  boundaries[boundaries.length - 1] = 1;

  return boundaries;
}

export default function PortraitReveal({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  progress: _progress,
}: PortraitRevealProps) {
  const { viewport } = useThree();

  const groupRef = useRef<THREE.Group>(null);
  const startTimeRef = useRef<number | null>(null);
  const animationFinishedRef = useRef(false);

  /*
   * Texture principale
   * public/Images/simon5.png
   */
  const texture = useLoader(THREE.TextureLoader, "/Images/simon5.webp");

  const isMobile = viewport.width < 6;

  /*
   * Position du portrait
   */
  const positionX = isMobile ? 0.4 : 2.45;
  const positionY = isMobile ? 0.4 : -0.2;

  const portraitScale = isMobile ? 0.88 : 1.2;

  /*
   * Configuration de la texture principale
   */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    texture.colorSpace = THREE.SRGBColorSpace;

    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;

    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    texture.generateMipmaps = false;

    texture.needsUpdate = true;
  }, [texture]);

  /*
   * Création des fragments
   */
  const fragments = useMemo<FragmentData[]>(() => {
    const pieces: FragmentData[] = [];

    const columnBounds = createBoundaries(COLUMNS, 23);
    const rowBounds = createBoundaries(ROWS, 91);

    const spread = isMobile ? 2.7 : 3.8;
    const jitter = isMobile ? 0.22 : 0.35;

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLUMNS; col++) {
        const index = row * COLUMNS + col;

        const left = columnBounds[col];
        const right = columnBounds[col + 1];

        const top = rowBounds[row];
        const bottom = rowBounds[row + 1];

        const widthRatio = right - left;
        const heightRatio = bottom - top;

        const width = IMAGE_WIDTH * widthRatio;
        const height = IMAGE_HEIGHT * heightRatio;

        /*
         * Texture propre à chaque fragment
         */
        const fragmentTexture = texture.clone();

        fragmentTexture.wrapS = THREE.ClampToEdgeWrapping;
        fragmentTexture.wrapT = THREE.ClampToEdgeWrapping;

        fragmentTexture.repeat.set(widthRatio, heightRatio);

        fragmentTexture.offset.set(left, 1 - bottom);

        fragmentTexture.colorSpace = THREE.SRGBColorSpace;

        fragmentTexture.minFilter = THREE.LinearFilter;
        fragmentTexture.magFilter = THREE.LinearFilter;

        fragmentTexture.generateMipmaps = false;

        fragmentTexture.needsUpdate = true;

        /*
         * Centre du fragment
         */
        const centerX = (left + right) / 2;
        const centerY = (top + bottom) / 2;

        /*
         * Position finale
         */
        const x = -IMAGE_WIDTH / 2 + IMAGE_WIDTH * centerX;

        const y = IMAGE_HEIGHT / 2 - IMAGE_HEIGHT * centerY;

        /*
         * Direction de départ
         */
        const directionX = centerX - 0.5;
        const directionY = 0.5 - centerY;

        const length =
          Math.sqrt(directionX * directionX + directionY * directionY) || 1;

        const normalizedX = directionX / length;

        const normalizedY = directionY / length;

        /*
         * Position initiale du fragment
         */
        const startX =
          x + normalizedX * spread + (randomValue(index + 100) - 0.5) * jitter;

        const startY =
          y + normalizedY * spread + (randomValue(index + 200) - 0.5) * jitter;

        const startZ = 0.35 + randomValue(index + 300) * 1.1;

        /*
         * Rotation initiale
         */
        const rotationX = (randomValue(index + 400) - 0.5) * 0.55;

        const rotationY = (randomValue(index + 500) - 0.5) * 0.55;

        const rotationZ = (randomValue(index + 600) - 0.5) * 0.85;

        /*
         * Distance du centre
         */
        const distanceFromCenter =
          Math.sqrt(Math.pow(centerX - 0.5, 2) + Math.pow(centerY - 0.5, 2)) /
          Math.sqrt(0.5);

        /*
         * Délai du fragment
         */
        const delay =
          distanceFromCenter * MAX_DELAY + randomValue(index + 700) * 0.07;

        /*
         * Durée du fragment
         */
        const duration = ANIMATION_DURATION + randomValue(index + 800) * 0.2;

        pieces.push({
          texture: fragmentTexture,

          x,
          y,

          width,
          height,

          startX,
          startY,
          startZ,

          rotationX,
          rotationY,
          rotationZ,

          delay,
          duration,
        });
      }
    }

    return pieces;
  }, [texture, isMobile]);

  /*
   * Si les fragments changent (par exemple passage
   * desktop/mobile), l'animation recommence proprement.
   */
  useEffect(() => {
    startTimeRef.current = null;
    animationFinishedRef.current = false;
  }, [fragments]);

  /*
   * Nettoyage des textures clonées
   */
  useEffect(() => {
    return () => {
      fragments.forEach((fragment) => {
        fragment.texture.dispose();
      });
    };
  }, [fragments]);

  /*
   * Animation
   */
  useFrame((state) => {
    const group = groupRef.current;

    if (!group) return;

    /*
     * Une fois l'animation terminée,
     * on ne recalcule plus les 63 fragments.
     */
    if (animationFinishedRef.current) {
      return;
    }

    if (startTimeRef.current === null) {
      startTimeRef.current = state.clock.elapsedTime;
    }

    const elapsed = state.clock.elapsedTime - startTimeRef.current;

    let allFinished = true;

    group.children.forEach((child, index) => {
      const fragment = fragments[index];

      if (!fragment) return;

      const localTime = elapsed - fragment.delay;

      const rawProgress = THREE.MathUtils.clamp(
        localTime / fragment.duration,
        0,
        1,
      );

      if (rawProgress < 1) {
        allFinished = false;
      }

      const movement = easeOutCubic(rawProgress);

      const rotationProgress = easeOutQuint(rawProgress);

      /*
       * POSITION
       */
      child.position.x = THREE.MathUtils.lerp(
        fragment.startX,
        fragment.x,
        movement,
      );

      child.position.y = THREE.MathUtils.lerp(
        fragment.startY,
        fragment.y,
        movement,
      );

      child.position.z = THREE.MathUtils.lerp(fragment.startZ, 0, movement);

      /*
       * ROTATION
       */
      child.rotation.x = fragment.rotationX * (1 - rotationProgress);

      child.rotation.y = fragment.rotationY * (1 - rotationProgress);

      child.rotation.z = fragment.rotationZ * (1 - rotationProgress);

      /*
       * OPACITÉ
       */
      const fadeProgress = THREE.MathUtils.clamp(localTime / 0.3, 0, 1);

      const mesh = child as THREE.Mesh;

      const material = mesh.material as THREE.MeshBasicMaterial;

      material.opacity = easeOutQuint(fadeProgress);

      /*
       * SCALE
       */
      const fragmentScale = THREE.MathUtils.lerp(0.94, 1, movement);

      child.scale.setScalar(fragmentScale);
    });

    /*
     * On verrouille l'état final.
     */
    if (allFinished) {
      animationFinishedRef.current = true;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[positionX, positionY, -0.5]}
      scale={[portraitScale, portraitScale, 1]}
      renderOrder={2}
    >
      {fragments.map((fragment, index) => (
        <mesh
          key={index}
          position={[fragment.startX, fragment.startY, fragment.startZ]}
          rotation={[
            fragment.rotationX,
            fragment.rotationY,
            fragment.rotationZ,
          ]}
          renderOrder={2}
        >
          <planeGeometry
            args={[
              fragment.width + FRAGMENT_OVERLAP,
              fragment.height + FRAGMENT_OVERLAP,
            ]}
          />

          <meshBasicMaterial
            map={fragment.texture}
            transparent
            opacity={0}
            side={THREE.DoubleSide}
            toneMapped={false}
            depthTest={false}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
