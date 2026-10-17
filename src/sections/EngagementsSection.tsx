import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const engagements = [
  {
    key: "entrepreneurship",
    number: "01",
    size: "lg:col-span-7",
    accent: true,
  },
  {
    key: "civilSociety",
    number: "02",
    size: "lg:col-span-5",
    accent: false,
  },
  {
    key: "culture",
    number: "03",
    size: "lg:col-span-5",
    accent: false,
  },
  {
    key: "media",
    number: "04",
    size: "lg:col-span-7",
    accent: true,
  },
  {
    key: "sport",
    number: "05",
    size: "lg:col-span-7",
    accent: false,
  },
  {
    key: "international",
    number: "06",
    size: "lg:col-span-5",
    accent: false,
  },
  {
    key: "tradition",
    number: "07",
    size: "lg:col-span-12",
    accent: false,
  },
];

const signatureImages = [
  "/Images/simon15.jpg",
  "/Images/simon16.jpg",
  "/Images/simon17.png",
];

export default function EngagementsSection() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const [signatureIndex, setSignatureIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setSignatureIndex((current) => (current + 1) % signatureImages.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  const revealFromLeft = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const revealFromRight = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="engagements"
      className="relative isolate overflow-hidden bg-[#111109] px-6 py-10 sm:px-10 sm:py-32 lg:px-20 lg:py-12"
    >
      {/* =========================================
    DÉCOR — RÉSEAU DES 7 TERRAINS D’ACTION
========================================= */}

      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 0.9,
          rotate: shouldReduceMotion ? 0 : -4,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.1,
          delay: shouldReduceMotion ? 0 : 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
    pointer-events-none
    absolute
    right-5
    top-7
    z-0
    hidden
    h-[170px]
    w-[170px]
    select-none

    sm:block

    lg:right-10
    lg:top-8
    lg:h-[210px]
    lg:w-[210px]
  "
      >
        {/* Halo général */}
        <div
          className="
      absolute
      left-1/2
      top-1/2
      h-[80%]
      w-[80%]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#f3f009]/[0.025]
      blur-2xl
    "
        />

        {/* Cercle extérieur */}
        <motion.div
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            delay: shouldReduceMotion ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
      absolute
      left-1/2
      top-1/2
      h-[76%]
      w-[76%]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-white/[0.06]
    "
        />

        {/* Cercle intérieur */}
        <div
          className="
      absolute
      left-1/2
      top-1/2
      h-[43%]
      w-[43%]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-[#f3f009]/10
    "
        />

        {/* =====================================
      LIGNES QUI RELIENT LES DOMAINES
  ====================================== */}

        {/* Verticale */}
        <motion.span
          initial={{ scaleY: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
      absolute
      left-1/2
      top-[15%]
      h-[70%]
      w-px
      -translate-x-1/2
      bg-gradient-to-b
      from-transparent
      via-[#f3f009]/20
      to-transparent
    "
        />

        {/* Horizontale */}
        <motion.span
          initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
      absolute
      left-[15%]
      top-1/2
      h-px
      w-[70%]
      -translate-y-1/2
      bg-gradient-to-r
      from-transparent
      via-[#f3f009]/20
      to-transparent
    "
        />

        {/* Diagonale 1 */}
        <motion.span
          initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.55,
          }}
          className="
      absolute
      left-[19%]
      top-1/2
      h-px
      w-[62%]
      origin-center
      rotate-45
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
    "
        />

        {/* Diagonale 2 */}
        <motion.span
          initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.6,
          }}
          className="
      absolute
      left-[19%]
      top-1/2
      h-px
      w-[62%]
      origin-center
      -rotate-45
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
    "
        />

        {/* =====================================
      CENTRE — 07 DOMAINES
  ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
      absolute
      left-1/2
      top-1/2
      z-10
      flex
      h-14
      w-14
      -translate-x-1/2
      -translate-y-1/2
      flex-col
      items-center
      justify-center
      rounded-full
      border
      border-[#f3f009]/30
      bg-[#111109]
      shadow-[0_0_30px_rgba(243,240,9,0.06)]

      lg:h-16
      lg:w-16
    "
        >
          <span
            className="
    text-lg
    font-light
    leading-none
    tracking-[-0.04em]
    text-[#f3f009]
    lg:text-xl
  "
          >
            {t("engagements.number")}
          </span>

          <span
            className="
    mt-1
    max-w-[48px]
    text-center
    text-[5px]
    font-medium
    uppercase
    leading-[1.4]
    tracking-[0.15em]
    text-white/35
  "
          >
            {t("engagements.domainsCount")}
          </span>
        </motion.div>

        {/* =====================================
      7 POINTS = 7 TERRAINS D’ACTION
  ====================================== */}

        {/* 01 — Haut */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.7,
          }}
          className="
      absolute
      left-1/2
      top-[10%]
      h-2
      w-2
      -translate-x-1/2
      rounded-full
      bg-[#f3f009]
      shadow-[0_0_12px_rgba(243,240,9,0.35)]
    "
        />

        {/* 02 — Haut droite */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.78,
          }}
          className="
      absolute
      right-[19%]
      top-[23%]
      h-1.5
      w-1.5
      rounded-full
      border
      border-[#f3f009]/70
      bg-[#111109]
    "
        />

        {/* 03 — Droite */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.86,
          }}
          className="
      absolute
      right-[10%]
      top-1/2
      h-2
      w-2
      -translate-y-1/2
      rounded-full
      bg-white/40
    "
        />

        {/* 04 — Bas droite */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.94,
          }}
          className="
      absolute
      bottom-[19%]
      right-[22%]
      h-1.5
      w-1.5
      rounded-full
      bg-[#f3f009]/60
    "
        />

        {/* 05 — Bas */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 1.02,
          }}
          className="
      absolute
      bottom-[10%]
      left-1/2
      h-1.5
      w-1.5
      -translate-x-1/2
      rounded-full
      border
      border-white/40
    "
        />

        {/* 06 — Bas gauche */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 1.1,
          }}
          className="
      absolute
      bottom-[21%]
      left-[20%]
      h-2
      w-2
      rounded-full
      bg-[#f3f009]/40
    "
        />

        {/* 07 — Gauche */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 1.18,
          }}
          className="
      absolute
      left-[10%]
      top-1/2
      h-1.5
      w-1.5
      -translate-y-1/2
      rounded-full
      border
      border-[#f3f009]/70
      bg-[#111109]
    "
        />

        {/* =====================================
      PETITS REPÈRES TECHNIQUES
  ====================================== */}

        <span className="absolute right-0 top-[17%] h-px w-5 bg-[#f3f009]/30" />
        <span className="absolute right-0 top-[17%] h-5 w-px bg-[#f3f009]/30" />

        <span className="absolute bottom-[12%] left-[4%] h-px w-4 bg-white/15" />

        {/* Petit numéro décoratif */}
        <span
          className="
      absolute
      right-0
      top-[22%]
      translate-x-1
      text-[6px]
      font-medium
      tracking-[0.2em]
      text-[#f3f009]/35
    "
        >
          03
        </span>
      </motion.div>
      {/* Lumières d'ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-20 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#f3f009]/[0.045] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 bottom-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#f3f009]/[0.025] blur-[130px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* ==============================
            EN-TÊTE
        ============================== */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: "easeOut",
          }}
        >
          <SectionHeading
            number="03"
            eyebrow={t("engagements.eyebrow")}
            title={t("engagements.title")}
            description={t("engagements.description")}
          />
        </motion.div>

        {/* ==============================
            INTRODUCTION
        ============================== */}

        <motion.div
          variants={revealFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-7 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:pb-8"
        >
          <p
            className="
              w-full
              max-w-2xl
              text-justify
              text-sm
              leading-relaxed
              tracking-normal
              text-white/55
              hyphens-auto
              [overflow-wrap:break-word]
              px-0
              sm:text-base
              sm:leading-7
              md:max-w-lg
            "
          >
            {t("engagements.introduction")}
          </p>

          <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-[#f3f009]/80 sm:text-[11px] sm:tracking-[0.22em]">
            {t("engagements.domainsCount")}
          </span>
        </motion.div>

        {/* ==============================
            GRILLE DES ENGAGEMENTS
        ============================== */}

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">
          {engagements.map((item, index) => (
            <motion.article
              key={item.key}
              variants={index % 2 === 0 ? revealFromLeft : revealFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: shouldReduceMotion ? 0 : index * 0.12,
              }}
              className={`group relative isolate flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0a0a0a] p-5 transition-colors duration-500 hover:border-[#f3f009]/35 sm:min-h-[340px] sm:p-7 lg:min-h-[350px] lg:p-8 ${item.size}`}
            >
              {/* Halo */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full bg-[#f3f009]/[0.045] blur-[80px] transition-all duration-700 group-hover:scale-150 group-hover:bg-[#f3f009]/[0.11]"
              />

              {/* Numéro décoratif */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-8 -z-10 select-none text-[7rem] font-black leading-none tracking-tighter text-white/[0.025] transition-colors duration-700 group-hover:text-[#f3f009]/[0.07] sm:text-[9rem] lg:text-[11rem]"
              >
                {item.number}
              </span>

              <div>
                {/* Catégorie */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[#f3f009] sm:text-[11px] sm:tracking-[0.2em]">
                    {t(`engagements.items.${item.key}.category`)}
                  </span>

                  <span className="shrink-0 text-xs tabular-nums text-white/30 sm:text-sm">
                    / {item.number}
                  </span>
                </div>

                {/* Ligne jaune */}
                <div className="mb-5 mt-7 h-px w-10 bg-[#f3f009]/60 transition-all duration-500 group-hover:w-20 sm:mb-6 sm:mt-8" />

                {/* Titre */}
                <h3
                  className={`max-w-xl font-medium leading-snug tracking-tight text-white ${
                    item.accent
                      ? "text-2xl sm:text-3xl lg:text-4xl"
                      : "text-xl sm:text-2xl lg:text-3xl"
                  }`}
                >
                  {t(`engagements.items.${item.key}.title`)}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4
                    w-full
                    max-w-2xl
                    text-justify
                    text-sm
                    leading-6
                    tracking-normal
                    text-white/55
                    hyphens-auto
                    [overflow-wrap:break-word]
                    px-0
                    sm:text-[15px]
                    sm:leading-7
                    md:max-w-lg
                    transition-colors
                    duration-300
                    group-hover:text-white/70
                  "
                >
                  {t(`engagements.items.${item.key}.description`)}
                </p>
              </div>

              {/* Pied de carte */}
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/[0.09] pt-4 sm:mt-9 sm:pt-5">
                <span className="text-[10px] uppercase leading-5 tracking-[0.12em] text-white/35 sm:text-[11px] sm:tracking-[0.15em]">
                  {t(`engagements.items.${item.key}.detail`)}
                </span>

                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/45 transition-all duration-500 group-hover:border-[#f3f009]/60 group-hover:bg-[#f3f009] group-hover:text-black sm:h-10 sm:w-10"
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ==============================
            CONCLUSION
        ============================== */}

        <motion.div
          variants={revealFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-8"
        >
          <p className="max-w-2xl text-sm leading-6 text-white/40 sm:leading-7">
            {t("engagements.conclusion")}
          </p>

          <span className="text-[10px] uppercase tracking-[0.17em] text-[#f3f009]/80 sm:text-[11px] sm:tracking-[0.2em]">
            {t("engagements.footerLabel")}
          </span>
        </motion.div>

        {/* ═══════════════════════════════════════════
            SIGNATURE VISUELLE
        ═══════════════════════════════════════════ */}

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
          className="relative mt-14 overflow-hidden border-y border-white/1 sm:mt-10"
        >
          {/* ==========================
              CARROUSEL D'IMAGES
          ========================== */}

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
            <div className="absolute inset-0 bg-gradient-to-r from-[#111109]/65  via-[#111109]/15 to-[#111109]/40" />
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

          {/* ==========================
              CONTENU
          ========================== */}

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

            {/* ==========================
    SIGNATURE DROITE
========================== */}

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
                  {/* TEXTE PRINCIPAL */}
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

          {/* ==========================
              INDICATEURS
          ========================== */}

          <div
            aria-hidden="true"
            className="absolute bottom-4 right-5 z-20 flex items-center gap-1.5"
          >
            {signatureImages.map((_, index) => (
              <span
                key={index}
                className={`h-[2px] transition-all duration-700 ${
                  index === signatureIndex
                    ? "w-7 bg-[#f3f009]"
                    : "w-3 bg-white/25"
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
      </div>
    </section>
  );
}
