import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HeroNameProps {
  progress: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HeroName({ progress: _progress }: HeroNameProps) {
  const { t } = useTranslation();

  const [started, setStarted] = useState(false);
  const [professionIndex, setProfessionIndex] = useState(0);

  const professions = t("hero.professions", {
    returnObjects: true,
  }) as string[];

  // Animation d'entrée générale du Hero
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setStarted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  // Alternance des professions
  useEffect(() => {
    if (!Array.isArray(professions) || professions.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setProfessionIndex((current) => (current + 1) % professions.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [professions.length]);

  const renderWord = (word: string, wordIndex: number) => (
    <div className="flex whitespace-nowrap" key={`${word}-${wordIndex}`}>
      {word.split("").map((letter, index) => {
        const globalIndex = wordIndex === 0 ? index : 5 + index;
        const delay = 180 + globalIndex * 55;

        return (
          <span
            key={`${word}-${index}`}
            className="
              inline-block
              font-sans
              text-[14vw]
              font-semibold
              leading-[0.88]
              tracking-[-0.075em]
              text-white
              sm:text-[16vw]
              md:text-[clamp(3.8rem,7.2vw,6.8rem)]
              lg:text-[clamp(4.2rem,6.2vw,6.8rem)]
              xl:text-[clamp(4.8rem,6vw,7.2rem)]
            "
            style={{
              opacity: started ? 1 : 0,
              transform: started
                ? "translate3d(0, 0, 0)"
                : "translate3d(0, 24px, 0)",
              filter: started ? "blur(0)" : "blur(4px)",
              transition: [
                `opacity 650ms ease ${delay}ms`,
                `transform 750ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
                `filter 650ms ease ${delay}ms`,
              ].join(", "),
            }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );

  return (
    <div
      className="
        w-full
        max-w-[540px]
        py-10
        sm:py-6
        md:max-w-[560px]
        md:py-0
        lg:max-w-[600px]
        lg:py-4
        xl:max-w-[640px]
      "
    >
      {/* PROFESSION */}
      <div
        className="mb-4 flex items-center gap-3 sm:mb-6 md:mb-8 lg:mb-9"
        style={{
          opacity: started ? 1 : 0,
          transform: started ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 600ms ease 100ms, transform 700ms ease 100ms",
        }}
      >
        {/* LIGNE JAUNE ANIMÉE */}
        <motion.span
          key={`line-${professionIndex}`}
          className="h-px shrink-0 bg-[#f3f009]"
          initial={{ width: 32 }}
          animate={{
            width: [32, 58, 32],
            opacity: [0.75, 1, 0.85],
          }}
          transition={{
            duration: 0.9,
            times: [0, 0.45, 1],
            ease: [0.76, 0, 0.24, 1],
          }}
        />

        {/* PROFESSION */}
        <div className="relative h-4 min-w-[190px] overflow-hidden md:min-w-[230px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={professionIndex}
              initial={{
                clipPath: "inset(0 100% 0 0)",
                opacity: 0,
              }}
              animate={{
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
              }}
              exit={{
                clipPath: "inset(0 0 0 100%)",
                opacity: 0,
              }}
              transition={{
                clipPath: {
                  duration: 0.65,
                  ease: [0.76, 0, 0.24, 1],
                },
                opacity: {
                  duration: 0.35,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                left-0
                top-0
                whitespace-nowrap
                text-[9px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-white/75
                md:text-[10px]
                md:tracking-[0.32em]
              "
            >
              {Array.isArray(professions) ? professions[professionIndex] : ""}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* NOM */}
      <div className="relative w-full">
        {renderWord("Simon", 0)}

        <div className="relative mt-4 sm:mt-2 md:mt-2">
          {renderWord("DUPONG", 1)}

          <div
            className="mt-6 h-px bg-[#f3f009] sm:mt-6 md:mt-8"
            style={{
              width: started ? "100px" : "0px",
              opacity: started ? 1 : 0,
              transition: "width 800ms ease 1050ms, opacity 500ms ease 1050ms",
            }}
          />
        </div>
      </div>

      {/* SLOGAN */}
      <div
        className="mt-8 sm:mt-5 md:mt-7 lg:mt-8"
        style={{
          opacity: started ? 1 : 0,
          transform: started ? "translateY(0)" : "translateY(18px)",
          filter: started ? "blur(0)" : "blur(2px)",
          transition:
            "opacity 750ms ease 1200ms, transform 750ms ease 1200ms, filter 750ms ease 1200ms",
        }}
      >
        <h2 className="flex flex-col items-start gap-1 font-serif text-2xl italic leading-tight md:flex-row md:items-baseline md:gap-x-4 md:gap-y-0 md:text-[clamp(1.35rem,2.1vw,2rem)] lg:gap-x-5">
          <span className="text-white">{t("hero.sloganLine1")}</span>

          <span className="text-white/65">{t("hero.sloganLine2")}</span>

          <span className="text-white">{t("hero.sloganLine3")}</span>
        </h2>

        <p className="mt-3 max-w-[370px] text-xs leading-6 tracking-wide text-white/70 md:mt-5 md:text-sm md:leading-7">
          {t("hero.description")}
        </p>

        <p className="mt-2 text-[10px] tracking-wide text-white/55 md:mt-3 md:text-xs">
          {t("hero.birthInfo")}
        </p>
      </div>

      {/* BOUTON */}
      <div
        className="mt-4 sm:mt-6 md:mt-7 lg:mt-8"
        style={{
          opacity: started ? 1 : 0,
          transform: started ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 700ms ease 1500ms, transform 700ms ease 1500ms",
        }}
      >
        <a
          href="#biographie"
          className="
            group
            inline-flex
            items-center
            gap-3
            text-[10px]
            font-medium
            uppercase
            tracking-[0.16em]
            text-white/80
            md:gap-4
            md:text-xs
            md:tracking-[0.2em]
          "
        >
          <span
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#f3f009]
              bg-[#f3f009]
              text-black
              transition-all
              duration-300
              group-hover:bg-transparent
              group-hover:text-[#f3f009]
              md:h-11
              md:w-11
            "
          >
            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </span>

          <span className="transition-colors group-hover:text-white">
            {t("hero.cta")}
          </span>
        </a>
      </div>
    </div>
  );
}
