import { useFrame, useLoader, useThree } from "@react-three/fiber";

import { useRef } from "react";
import * as THREE from "three";

interface PortraitRevealProps {
  progress: number;
}

export default function PortraitReveal({ progress }: PortraitRevealProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { viewport } = useThree();

  const texture = useLoader(THREE.TextureLoader, "/Images/simon2.png");

  const isMobile = viewport.width < 6;

  /*
   * POSITION
   * -------------------------
   * DESKTOP :
   * Le portrait reste à droite.
   *
   * MOBILE :
   * Le portrait commence sous le texte
   * puis remonte progressivement dans
   * la zone visible pendant le scroll.
   */
  const positionX = isMobile ? 0 : 2.25;

  const positionY = isMobile ? -1.1 + progress * 1.15 : -0.15;

  /*
   * TAILLE
   * -------------------------
   * Le portrait est légèrement plus grand
   * sur mobile pour être bien visible.
   */
  const portraitScale = isMobile
    ? 0.82 + progress * 0.06
    : 1.0 + progress * 0.04;

  /*
   * ANIMATION EXISTANTE
   * -------------------------
   * On conserve exactement ton
   * fonctionnement actuel.
   */
  useFrame((state) => {
    if (!materialRef.current) return;

    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

    materialRef.current.uniforms.uProgress.value = progress;
  });

  return (
    <mesh
      position={[positionX, positionY, 0]}
      rotation={[0, -0.06, 0]}
      scale={[portraitScale, portraitScale, 1]}
    >
      <planeGeometry args={[3.5, 4.95, 128, 128]} />

      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        uniforms={{
          uTexture: {
            value: texture,
          },

          uProgress: {
            value: 0,
          },

          uTime: {
            value: 0,
          },
        }}
        vertexShader={`
          uniform float uProgress;
          uniform float uTime;

          varying vec2 vUv;

          void main() {
            vUv = uv;

            vec3 pos = position;

            float scroll = uProgress;

            float wave =
              sin(
                uv.y * 13.0 +
                uTime * 1.2
              ) *
              0.035 *
              (1.0 - scroll);

            pos.x += wave;

            pos.z +=
              sin(
                uv.x * 8.0 +
                uTime
              ) *
              0.04;

            pos.z +=
              scroll * 0.35;

            pos.y +=
              sin(
                uv.x * 4.0
              ) *
              scroll *
              0.04;

            gl_Position =
              projectionMatrix *
              modelViewMatrix *
              vec4(
                pos,
                1.0
              );
          }
        `}
        fragmentShader={`
          uniform sampler2D uTexture;
          uniform float uProgress;
          uniform float uTime;

          varying vec2 vUv;

          float random(vec2 st) {
            return fract(
              sin(
                dot(
                  st,
                  vec2(
                    12.9898,
                    78.233
                  )
                )
              )
              *
              43758.5453123
            );
          }

          void main() {
            vec4 image =
              texture2D(
                uTexture,
                vUv
              );

            float noise =
              random(
                floor(
                  vUv * 32.0
                )
              );

            float baseVisibility =
              0.72;

            float scrollVisibility =
              uProgress * 0.28;

            float alpha =
              baseVisibility +
              scrollVisibility;

            float lightPosition =
              1.0 -
              uProgress;

            float distanceToLight =
              abs(
                vUv.y -
                lightPosition
              );

            float light =
              1.0 -
              smoothstep(
                0.0,
                0.12,
                distanceToLight
              );

            vec3 finalColor =
              image.rgb;

            finalColor +=
              vec3(
                0.35,
                0.32,
                0.0
              )
              *
              light
              *
              0.18;

            finalColor +=
              vec3(
                noise * 0.015
              );

            gl_FragColor =
              vec4(
                finalColor,
                image.a * alpha
              );
          }
        `}
      />
    </mesh>
  );
}
