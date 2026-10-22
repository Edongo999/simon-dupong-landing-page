import { useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

import SectionHeading from "@/sections/SectionHeading";
import EngagementsNetwork from "./EngagementsNetwork";
import EngagementCards from "./EngagementCards";
import EngagementSignature from "./EngagementSignature";
import EntrepreneurshipGallery from "./EntrepreneurshipGallery";

export default function EngagementsSection() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="engagements"
      className="relative isolate overflow-hidden bg-[#111109] px-6 py-10 sm:px-10 sm:py-32 lg:px-20 lg:py-12"
    >
      {/* =========================================
          DÉCOR
      ========================================= */}

      <EngagementsNetwork shouldReduceMotion={shouldReduceMotion} />

      <div className="mx-auto max-w-7xl">
        {/* ==============================
            EN-TÊTE
        ============================== */}

        <SectionHeading
          number="03"
          eyebrow={t("engagements.eyebrow")}
          title={t("engagements.title")}
          description={t("engagements.description")}
        />

        {/* ==============================
            INTRODUCTION
        ============================== */}

        <div
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
        </div>

        {/* ==============================
            7 DOMAINES
        ============================== */}
        <EngagementCards shouldReduceMotion={shouldReduceMotion} />

        {/* ==============================
            SOCIÉTÉ NOUVELLE AFRIQUE
        ============================== */}

        <EntrepreneurshipGallery />

        {/* ==============================
            CONCLUSION
        ============================== */}
        <div
          className="
    mt-2   /* réduit la marge en haut */
    flex
    flex-col
    gap-4
    pt-4   /* réduit aussi le padding interne */
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
        </div>

        {/* ==============================
            SIGNATURE VISUELLE
        ============================== */}

        <EngagementSignature shouldReduceMotion={shouldReduceMotion} />
      </div>
    </section>
  );
}
