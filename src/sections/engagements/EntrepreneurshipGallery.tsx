import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const flyers = [
  "/Images/afrique/afrique1.webp",
  "/Images/afrique/afrique2.webp",
  "/Images/afrique/afrique3.webp",
  "/Images/afrique/afrique4.webp",
  "/Images/afrique/afrique5.webp",
];

export default function EntrepreneurshipGallery() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const [current, setCurrent] = useState(0);

  const getIndex = (offset: number) =>
    (current + offset + flyers.length) % flyers.length;

  const previousIndex = getIndex(-1);
  const nextIndex = getIndex(1);

  const next = () => {
    setCurrent((prev) => (prev + 1) % flyers.length);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + flyers.length) % flyers.length);
  };

  useEffect(() => {
    if (shouldReduceMotion || flyers.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % flyers.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-10 border-y border-white/10 py-9 sm:mt-10 sm:py-10"
    >
      {/* =========================================
          EN-TÊTE
      ========================================= */}

      <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f3f009]">
            {t("engagements.societeAfrica.eyebrow")}
          </span>

          <h3 className="mt-3 max-w-2xl text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
            {t("engagements.societeAfrica.title")}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50 sm:text-[15px] sm:leading-7">
            {t("engagements.societeAfrica.description")}
          </p>
        </div>

        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(flyers.length).padStart(2, "0")}
        </span>
      </div>

      {/* =========================================
          GALERIE
      ========================================= */}

      <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.09]">
        {/* =========================================
            MOBILE
        ========================================= */}

        <div className="relative h-[460px] w-full overflow-hidden md:hidden">
          {/* FOND DYNAMIQUE */}

          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={`mobile-background-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <img
                src={flyers[current]}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover object-center blur-2xl"
              />

              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>

          {/* AFFICHE */}

          <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center p-3 sm:p-5">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={`mobile-flyer-${current}`}
                initial={{
                  opacity: 0,
                  scale: shouldReduceMotion ? 1 : 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: shouldReduceMotion ? 1 : 0.97,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-3 flex items-center justify-center sm:inset-5"
              >
                <img
                  src={flyers[current]}
                  alt={`${t("engagements.societeAfrica.title")} ${current + 1}`}
                  className="block h-full w-full object-contain object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* PRÉCÉDENT */}

          <button
            type="button"
            onClick={previous}
            aria-label={t("engagements.societeAfrica.previous")}
            className="
              absolute
              left-3
              top-1/2
              z-30
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/30
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#f3f009]/60
              hover:bg-[#f3f009]
              hover:text-black
            "
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* SUIVANT */}

          <button
            type="button"
            onClick={next}
            aria-label={t("engagements.societeAfrica.next")}
            className="
              absolute
              right-3
              top-1/2
              z-30
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/30
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#f3f009]/60
              hover:bg-[#f3f009]
              hover:text-black
            "
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* =========================================
            DESKTOP — CARROUSEL 3D
        ========================================= */}

        <div
          className="relative hidden h-[580px] w-full overflow-hidden md:block"
          style={{
            perspective: "1500px",
          }}
        >
          {/* =========================================
              FOND DYNAMIQUE
          ========================================= */}

          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={`desktop-background-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <img
                src={flyers[current]}
                alt=""
                aria-hidden="true"
                className="h-full w-full scale-110 object-cover object-center blur-3xl"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />
            </motion.div>
          </AnimatePresence>

          {/* LUMIÈRE CENTRALE */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[480px]
              w-[480px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#f3f009]/[0.04]
              blur-3xl
            "
          />

          {/* =========================================
              AFFICHE GAUCHE
          ========================================= */}

          <motion.button
            type="button"
            onClick={previous}
            animate={{
              x: "-105%",
              y: "-50%",
              scale: 0.78,
              rotateY: shouldReduceMotion ? 0 : 32,
              opacity: 0.6,
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 0.82,
                    opacity: 0.8,
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-1/2
              top-1/2
              z-10
              h-[430px]
              w-[300px]
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-black/20
              shadow-2xl
              outline-none
            "
            style={{
              transformStyle: "preserve-3d",
            }}
            aria-label={t("engagements.societeAfrica.previous")}
          >
            <img
              src={flyers[previousIndex]}
              alt=""
              className="h-full w-full object-contain object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/15" />
          </motion.button>

          {/* =========================================
              AFFICHE CENTRALE
              Transition simultanée
          ========================================= */}

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={`desktop-center-${current}`}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 90,
                        scale: 0.82,
                        rotateY: -28,
                        z: -120,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotateY: 0,
                  z: 0,
                }}
                exit={
                  shouldReduceMotion
                    ? {
                        opacity: 0,
                      }
                    : {
                        opacity: 0,
                        x: -90,
                        scale: 0.82,
                        rotateY: 28,
                        z: -120,
                      }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute h-[510px] w-[360px]"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* OMBRE */}

                <div
                  className="
                    absolute
                    -bottom-7
                    left-1/2
                    h-16
                    w-[80%]
                    -translate-x-1/2
                    rounded-full
                    bg-black/70
                    blur-2xl
                  "
                />

                {/* CARTE */}

                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/20
                    bg-black/20
                    shadow-[0_35px_90px_rgba(0,0,0,0.7)]
                  "
                >
                  <img
                    src={flyers[current]}
                    alt={`${t("engagements.societeAfrica.title")} ${
                      current + 1
                    }`}
                    className="h-full w-full object-contain object-center"
                  />

                  {/* REFLET */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-white/10
                      via-transparent
                      to-transparent
                    "
                  />
                  {/* LIGNE JAUNE */}

                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#f3f009]/80" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =========================================
              AFFICHE DROITE
          ========================================= */}

          <motion.button
            type="button"
            onClick={next}
            animate={{
              x: "5%",
              y: "-50%",
              scale: 0.78,
              rotateY: shouldReduceMotion ? 0 : -32,
              opacity: 0.6,
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 0.82,
                    opacity: 0.8,
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-1/2
              top-1/2
              z-10
              h-[430px]
              w-[300px]
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-black/20
              shadow-2xl
              outline-none
            "
            style={{
              transformStyle: "preserve-3d",
            }}
            aria-label={t("engagements.societeAfrica.next")}
          >
            <img
              src={flyers[nextIndex]}
              alt=""
              className="h-full w-full object-contain object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/15" />
          </motion.button>

          {/* =========================================
              FLÈCHE GAUCHE
          ========================================= */}

          <button
            type="button"
            onClick={previous}
            aria-label={t("engagements.societeAfrica.previous")}
            className="
              absolute
              left-6
              top-1/2
              z-40
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/30
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#f3f009]
              hover:bg-[#f3f009]
              hover:text-black
              lg:left-8
            "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* =========================================
              FLÈCHE DROITE
          ========================================= */}

          <button
            type="button"
            onClick={next}
            aria-label={t("engagements.societeAfrica.next")}
            className="
              absolute
              right-6
              top-1/2
              z-40
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/30
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#f3f009]
              hover:bg-[#f3f009]
              hover:text-black
              lg:right-8
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* =========================================
            INDICATEURS
        ========================================= */}

        <div
          className="
            relative
            z-40
            flex
            items-center
            justify-center
            gap-2
            border-t
            border-white/[0.08]
            bg-[#0a0a0a]
            px-5
            py-4
          "
        >
          {flyers.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`${t("engagements.societeAfrica.goTo")} ${index + 1}`}
              className={`h-[2px] transition-all duration-500 ${
                index === current
                  ? "w-10 bg-[#f3f009]"
                  : "w-4 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
