import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface EngagementSignatureProps {
  shouldReduceMotion: boolean | null;
}

const signatureImages = [
  "/Images/simon15.webp",
  "/Images/simon16.webp",
  "/Images/simon17.webp",
];

export default function EngagementSignature({
  shouldReduceMotion,
}: EngagementSignatureProps) {
  const { t } = useTranslation();

  const [signatureIndex, setSignatureIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setSignatureIndex((current) => (current + 1) % signatureImages.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mt-9 overflow-hidden border-y border-white/1 sm:mt-8"
    >
      {/* CARROUSEL D'IMAGES */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={signatureIndex}
            src={signatureImages[signatureIndex]}
            alt=""
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 1.04,
            }}
            animate={{
              opacity: 0.58,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              opacity: {
                duration: shouldReduceMotion ? 0 : 1.2,
                ease: "easeInOut",
              },
              scale: {
                duration: shouldReduceMotion ? 0 : 6.5,
                ease: "linear",
              },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Voile sombre */}
        <div className="absolute inset-0 bg-[#111109]/35" />

        {/* Dégradé */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111109]/65 via-[#111109]/15 to-[#111109]/40" />
      </div>

      {/* Bordures verticales */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-px bg-[#f3f009]/50"
      />

      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-px bg-[#f3f009]/50"
      />

      {/* CONTENU */}

      <div className="relative grid min-h-[250px] gap-10 px-6 py-10 sm:min-h-[280px] sm:px-10 lg:grid-cols-[0.8fr_2fr] lg:items-center lg:gap-16 lg:py-14">
        {/* GAUCHE */}

        <motion.div
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f3f009]">
            {t("engagements.footerLabel")}
          </span>

          <div className="flex items-center gap-3">
            <span className="text-5xl font-light tracking-[-0.05em] text-white sm:text-6xl">
              {t("engagements.number")}
            </span>

            <span className="max-w-[100px] text-[10px] uppercase leading-5 tracking-[0.18em] text-white/70">
              {t("engagements.domainsCount")}
            </span>
          </div>
        </motion.div>

        {/* SIGNATURE DROITE */}

        <motion.div
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-w-4xl"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={signatureIndex}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : -8,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              <p
                className="
                  w-full
                  max-w-3xl
                  text-[17px]
                  font-medium
                  leading-[1.35]
                  tracking-[-0.015em]
                  text-white
                  min-[400px]:text-[18px]
                  sm:text-2xl
                  sm:leading-[1.3]
                  md:text-3xl
                  lg:text-4xl
                  lg:leading-tight
                  lg:tracking-[-0.02em]
                "
              >
                {t(`engagements.signatures.${signatureIndex}.text`)}
              </p>

              {/* SLOGAN */}
              <div className="mt-5 flex w-full items-center gap-2 sm:mt-7 sm:gap-3">
                <span className="h-px w-6 shrink-0 bg-[#f3f009] sm:w-12" />

                <span
                  className="
                    min-w-0
                    text-[7px]
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-white/70
                    min-[400px]:text-[8px]
                    sm:text-[9px]
                    sm:tracking-[0.25em]
                  "
                >
                  {t(`engagements.signatures.${signatureIndex}.slogan`)}
                </span>

                <span className="h-px w-6 shrink-0 bg-[#f3f009] sm:w-12" />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* INDICATEURS */}

      <div
        aria-hidden="true"
        className="absolute bottom-4 right-5 z-20 flex items-center gap-1.5"
      >
        {signatureImages.map((_, index) => (
          <span
            key={index}
            className={`h-[2px] transition-all duration-700 ${
              index === signatureIndex ? "w-7 bg-[#f3f009]" : "w-3 bg-white/25"
            }`}
          />
        ))}
      </div>

      {/* Accent inférieur */}

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-24 bg-[#f3f009] sm:w-40"
      />
    </motion.div>
  );
}
