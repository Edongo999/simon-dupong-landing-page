import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

import SectionHeading from "@/sections/SectionHeading";
import EngagementsNetwork from "./EngagementsNetwork";
import EngagementCards from "./EngagementCards";
import EngagementSignature from "./EngagementSignature";
import EntrepreneurshipGallery from "./EntrepreneurshipGallery";

export default function EngagementsSection() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const revealUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const revealFromLeft = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -35,
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
      x: shouldReduceMotion ? 0 : 35,
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
      className="relative isolate overflow-hidden -mt-10 bg-[#111109] px-6 py-10 sm:px-10 sm:py-32 lg:px-20 lg:py-12"
    >
      {/* =========================================
          DÉCOR
      ========================================= */}

      <EngagementsNetwork shouldReduceMotion={shouldReduceMotion} />

      <div className="mx-auto max-w-7xl">
        {/* ==============================
            EN-TÊTE
        ============================== */}

        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
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
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.15,
          }}
          className="
            mb-12
            mt-8
            flex
            flex-col
            gap-4
            border-b
            border-white/10
            pb-7
            sm:mb-10
            sm:mt-10
            sm:flex-row
            sm:items-end
            sm:justify-between
            sm:gap-6
            sm:pb-8
          "
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
            7 DOMAINES
        ============================== */}

        <EngagementCards shouldReduceMotion={shouldReduceMotion} />

        {/* ==============================
            SOCIÉTÉ NOUVELLE AFRIQUE
        ============================== */}

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
            amount: 0.15,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: "easeOut",
          }}
        >
          <EntrepreneurshipGallery />
        </motion.div>

        {/* ==============================
            CONCLUSION
        ============================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={revealFromLeft}
          className="
            mt-2
            flex
            flex-col
            gap-4
            pt-4
            sm:mt-2
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-6
            sm:pt-5
          "
        >
          <p className="max-w-2xl text-sm leading-6 text-white/40 sm:leading-7">
            {t("engagements.conclusion")}
          </p>

          <span className="text-[10px] uppercase tracking-[0.17em] text-[#f3f009]/80 sm:text-[11px] sm:tracking-[0.2em]">
            {t("engagements.footerLabel")}
          </span>
        </motion.div>

        {/* ==============================
            SIGNATURE VISUELLE
        ============================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={revealFromRight}
        >
          <EngagementSignature shouldReduceMotion={shouldReduceMotion} />
        </motion.div>
      </div>
    </section>
  );
}
