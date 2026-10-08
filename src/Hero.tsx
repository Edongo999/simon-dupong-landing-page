import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroScene from "./HeroScene";
import HeroName from "./HeroName";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      const distance = heroRef.current.offsetHeight - window.innerHeight;

      if (distance <= 0) return;

      const value = clamp(-rect.top / distance, 0, 1);

      setProgress(value);
    };

    const handleScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="accueil"
      className="relative h-[200vh] bg-[#030303]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <HeroScene progress={progress} />

        {/* TEXTE */}
        <div className="absolute inset-0 z-30 flex items-start md:items-center">
          <div
            className="
              w-full
              px-6
              pt-28

              md:w-[50%]
              md:px-20
              md:pt-20

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

        {/* SCROLL */}
        <div
          className="
            absolute
            bottom-8
            left-6
            z-40
            flex
            items-center
            gap-4
            md:left-12
            lg:left-16
          "
          style={{
            opacity: Math.max(0, 1 - progress * 4),
          }}
        >
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
            {t("hero.scroll")}
          </span>

          <div className="h-px w-12 bg-white/30" />

          <span className="text-[9px] text-white/30">01</span>
        </div>

        {/* PROGRESSION */}
        <div className="absolute bottom-0 left-0 z-50 h-[2px] w-full">
          <div
            className="h-full bg-[#f3f009]"
            style={{
              width: `${progress * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
