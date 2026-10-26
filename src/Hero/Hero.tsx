import { useEffect, useRef, useState } from "react";
import HeroScene from "./HeroScene";
import HeroName from "./HeroName";
import HeroBackground from "./HeroBackground";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  // Garde en mémoire la dernière valeur réellement appliquée.
  const lastProgressRef = useRef(0);

  // Évite de programmer plusieurs animations simultanément.
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      frameRef.current = null;

      const hero = heroRef.current;

      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const distance = hero.offsetHeight - window.innerHeight;

      if (distance <= 0) {
        if (lastProgressRef.current !== 0) {
          lastProgressRef.current = 0;
          setProgress(0);
        }

        return;
      }

      const value = clamp(-rect.top / distance, 0, 1);

      /*
       * On évite les setState inutiles.
       * Cela empêche React de rentrer dans une boucle
       * de mises à jour lorsque le Hero/Canvas se rerend.
       */
      if (Math.abs(value - lastProgressRef.current) > 0.001) {
        lastProgressRef.current = value;
        setProgress(value);
      }
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(update);
    };

    // Calcul initial.
    scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="accueil"
      className="
        relative
        h-[calc(100svh+10px)]
      
        bg-[#030303]
        sm:h-[180vh]
        md:h-[200vh]
      "
    >
      <div className="sticky top-0 h-svh overflow-hidden sm:h-screen">
        <HeroBackground />
        {/* Fondu inférieur uniquement sur mobile */}
        <div
          aria-hidden="true"
          className="
    pointer-events-none
    absolute
    bottom-0
    left-0
    right-0
    z-20
    h-[35vh]
    bg-gradient-to-t
    from-[#030303]
    via-[#030303]/80
    to-transparent
    sm:hidden
  "
        />

        <HeroScene progress={progress} />

        {/* Dégradé sombre pour améliorer la lisibilité du texte */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-10
            w-full
            bg-gradient-to-r
            from-[#030303]/80
            via-[#030303]/50
            to-transparent
            md:w-[65%]
            md:via-[#030303]/40
            lg:w-[60%]
          "
        />

        {/* TEXTE */}
        <div className="absolute inset-0 z-30 flex items-start md:items-center">
          <div
            className="
              relative
              w-full
              px-6
              pt-24
              pb-6
              md:w-[50%]
              md:px-20
              md:pt-20
              md:pb-0
              lg:w-[52%]
              lg:px-24
              lg:pt-24
              xl:w-[52%]
              xl:px-28
            "
          >
            <HeroName progress={progress} />
          </div>
        </div>

        {/* BARRE DE PROGRESSION */}
      </div>
    </section>
  );
}
