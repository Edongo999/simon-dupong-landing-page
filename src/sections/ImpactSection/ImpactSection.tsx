import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  HeartHandshake,
  Building2,
  ArrowUpRight,
} from "lucide-react";

import SectionHeading from "@/sections/SectionHeading";
import AnimatedCounter from "@/sections/AnimatedCounter";
import ActionsImpactSymbol from "./ActionsImpactSymbol";

const impactStats = [
  {
    key: "pregnantWomen",
    value: 50,
  },
  {
    key: "children",
    value: 200,
  },
  {
    key: "lighting",
    value: 100,
  },
  {
    key: "masks",
    value: 10000,
  },
];

const institutionalItems = ["customs", "forests", "police"];

export default function ImpactSection() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  /*
   * Éléments qui arrivent depuis la gauche.
   */
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

  /*
   * Éléments qui arrivent depuis la droite.
   */
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
      id="impact"
      className="relative isolate overflow-hidden bg-[#030303] px-6 py-12 sm:px-10 sm:py-32 lg:px-20 lg:py-12"
    >
      {/* =========================================
              SYMBOLE — IMPACT
          ========================================== */}

      <ActionsImpactSymbol />
      {/* =========================
          DÉCORATION DE FOND
      ========================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-[#f3f009]/30 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-1/3 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#f3f009]/[0.035] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-white/[0.025] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* =========================
            EN-TÊTE
        ========================== */}
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
            number="04"
            eyebrow={t("impact.eyebrow")}
            title={t("impact.title")}
            description={t("impact.description")}
          />
        </motion.div>

        {/* =========================
            ACTIONS SOCIALES
        ========================== */}
        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-12 lg:gap-14 lg:pt-14">
          {/* Partie gauche */}
          <motion.div
            variants={revealFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f3f009]/25 bg-[#f3f009]/[0.06] text-[#f3f009]">
                <HeartHandshake className="h-5 w-5" strokeWidth={1.5} />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f3f009] sm:text-[11px]">
                {t("impact.social.eyebrow")}
              </span>
            </div>

            <h3 className="mt-7 max-w-lg text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
              {t("impact.social.title")}
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
              {t("impact.social.description")}
            </p>

            <div className="mt-8 h-px w-16 bg-[#f3f009]/70" />
          </motion.div>

          {/* =========================
              CHIFFRES
          ========================== */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:col-span-7">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.key}
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
                className="group relative min-h-[180px] bg-[#080808] p-5 transition-colors duration-500 hover:bg-[#0d0d0a] sm:min-h-[210px] sm:p-7"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix="+"
                  duration={1.8}
                  className="block text-3xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#f3f009] sm:text-4xl lg:text-5xl"
                />

                <div className="mt-5 h-px w-7 bg-[#f3f009]/50 transition-all duration-500 group-hover:w-12" />

                <p className="mt-4 max-w-[15rem] text-xs leading-6 text-white/45 sm:text-sm">
                  {t(`impact.stats.${stat.key}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================
            PARTENARIATS INSTITUTIONNELS
        ========================== */}
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
            amount: 0.15,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: "easeOut",
          }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#090909] p-6 sm:mt-8 sm:p-9 lg:p-12"
        >
          <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Présentation */}
            <motion.div
              variants={revealFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-3">
                <Building2
                  className="h-5 w-5 text-[#f3f009]"
                  strokeWidth={1.5}
                />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f3f009] sm:text-[11px]">
                  {t("impact.institutional.eyebrow")}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                {t("impact.institutional.title")}
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/50">
                {t("impact.institutional.description")}
              </p>
            </motion.div>

            {/* Liste */}
            <div className="lg:col-span-7">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {institutionalItems.map((key, index) => (
                  <motion.div
                    key={key}
                    variants={revealFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : index * 0.12,
                    }}
                    className="group flex items-start gap-4 py-5 sm:items-center sm:gap-6 sm:py-6"
                  >
                    <AnimatedCounter
                      value={index + 1}
                      padStart={2}
                      separator={false}
                      duration={0.7}
                      className="mt-0.5 shrink-0 text-xs tabular-nums text-[#f3f009]/70 sm:mt-0"
                    />

                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white sm:text-base">
                        {t(`impact.institutional.items.${key}.title`)}
                      </h4>

                      <p className="mt-1.5 text-xs leading-6 text-white/40 sm:text-sm">
                        {t(`impact.institutional.items.${key}.description`)}
                      </p>
                    </div>

                    <ArrowUpRight
                      aria-hidden="true"
                      className="hidden h-4 w-4 shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f3f009] sm:block"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================
            PROJET STRUCTURANT
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.85,
            ease: "easeOut",
          }}
          className="relative mt-6 overflow-hidden rounded-3xl border border-[#f3f009]/20 bg-[#f3f009] p-6 text-black sm:mt-8 sm:p-9 lg:p-12"
        >
          {/* Décoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-black/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-black/10"
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <motion.div
              variants={revealFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6" strokeWidth={1.5} />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 sm:text-[11px]">
                  {t("impact.project.eyebrow")}
                </span>
              </div>

              <h3 className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                {t("impact.project.title")}
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
                {t("impact.project.description")}
              </p>
            </motion.div>

            {/* Statistiques */}
            <motion.div
              variants={revealFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="grid grid-cols-2 gap-3 lg:col-span-5"
            >
              <div className="rounded-2xl border border-black/10 bg-black/[0.06] p-5 sm:p-6">
                <AnimatedCounter
                  value={3000}
                  suffix="+"
                  duration={2}
                  className="block text-3xl font-semibold tracking-tight sm:text-4xl"
                />

                <span className="mt-2 block text-[10px] uppercase leading-5 tracking-[0.14em] text-black/55 sm:text-[11px]">
                  {t("impact.project.capacity")}
                </span>
              </div>

              <div className="rounded-2xl border border-black/10 bg-black/[0.06] p-5 sm:p-6">
                <AnimatedCounter
                  value={100}
                  suffix="+"
                  duration={1.6}
                  className="block text-3xl font-semibold tracking-tight sm:text-4xl"
                />

                <span className="mt-2 block text-[10px] uppercase leading-5 tracking-[0.14em] text-black/55 sm:text-[11px]">
                  {t("impact.project.programs")}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
