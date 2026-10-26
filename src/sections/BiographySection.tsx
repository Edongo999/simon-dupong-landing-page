import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "lucide-react";

const highlights = [
  "entrepreneurship",
  "politics",
  "civilSociety",
  "media",
  "culture",
  "sport",
];

export default function BiographySection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["5%", "-5%"],
  );

  const portraitRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [1.5, 0, -1.5],
  );

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="biographie"
      className="relative isolate overflow-hidden bg-[#0C0C0C] -mt-17 sm:mt-0 px-6 py-8 sm:px-10 sm:py-28 lg:px-20 lg:py-12"
    >
      {/* Lumières d'ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#f3f009]/[0.045] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#f3f009]/[0.035] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* En-tête */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading
            number="01"
            eyebrow={t("biography.eyebrow")}
            title={t("biography.title")}
            description={t("biography.description")}
          />
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Portrait et informations associées */}
          <div className="mx-auto w-full max-w-[480px] lg:mx-0">
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : { y: portraitY, rotate: portraitRotate }
              }
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1,
                ease: "easeOut",
              }}
              className="group relative"
            >
              {/* Grand numéro décoratif */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-5 -top-16 z-0 select-none text-[150px] font-black leading-none tracking-tighter text-white/[0.035] sm:-left-10 sm:text-[210px]"
              >
                01
              </span>

              {/* Halo lumineux */}
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2px] bg-[#f3f009]/[0.06] blur-2xl"
              />

              {/* Cadre extérieur */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-full w-full border border-[#f3f009]/40 transition-transform duration-700 group-hover:translate-x-1"
              />

              {/* Image */}
              <div className="group relative z-10 overflow-hidden border border-white/10 bg-[#101010]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-transparent to-black/10" />

                <img
                  src="/Images/simon1.webp"
                  alt={t("biography.portraitAlt")}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top grayscale-[15%] transition duration-1000 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                />

                {/* Ligne lumineuse décorative */}
                <motion.div
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1.2,
                    delay: 0.3,
                  }}
                  className="absolute bottom-0 left-0 z-20 h-[3px] w-full origin-left bg-[#f3f009]"
                />

                {/* Identité sur le portrait */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8">
                  <span className="mb-3 block text-[10px] uppercase tracking-[0.35em] text-[#f3f009] sm:text-xs">
                    {t("biography.presentation")}
                  </span>

                  <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Simon <span className="text-[#f3f009]">DUPONG</span>
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/65 sm:text-sm">
                    {t("biography.portraitRoles")}
                  </p>
                </div>

                {/* Repères graphiques */}
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-4 z-20 h-8 w-8 border-l border-t border-[#f3f009]/80"
                />

                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 z-20 h-8 w-8 border-r border-t border-[#f3f009]/80"
                />
              </div>
            </motion.div>

            {/* Informations sous le portrait */}
            <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div className="min-w-0">
                <span className="mb-1 block text-[9px] uppercase tracking-[0.25em] text-[#f3f009]/70">
                  {t("biography.originLabel")}
                </span>

                <span className="block text-sm font-medium tracking-wide text-white/80 sm:text-base">
                  {t("biography.origin")}
                </span>
              </div>

              <span className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-white/35 sm:text-xs">
                {t("biography.country")}
              </span>
            </div>
          </div>

          {/* Contenu biographique */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.85,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative"
          >
            <span className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#f3f009]">
              <span className="h-px w-8 bg-[#f3f009]" />
              {t("biography.introEyebrow")}
            </span>

            <h3 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t("biography.headlineBefore")}{" "}
              <span className="text-[#f3f009]">
                {t("biography.headlineHighlight")}
              </span>
            </h3>

            {/* Description biographique */}
            <div
              className="
                mt-8
                w-full
                max-w-2xl
                space-y-5
                text-justify
                text-base
                leading-relaxed
                tracking-normal
                text-white/65
                hyphens-auto
                [overflow-wrap:break-word]
                px-0
                sm:text-base
                sm:leading-7
                md:max-w-lg
              "
            >
              <p>
                {t("biography.paragraph1.beforeDate")}{" "}
                <strong className="font-medium text-white">
                  {t("biography.birthDate")}
                </strong>{" "}
                {t("biography.paragraph1.afterDate")}
              </p>

              <p>{t("biography.paragraph2")}</p>

              <p>{t("biography.paragraph3")}</p>
            </div>

            {/* Domaines d'activité */}
            <div className="mt-9 flex flex-wrap gap-2.5">
              {highlights.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 12,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.4,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  className="border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-white/65 transition-colors duration-300 hover:border-[#f3f009]/50 hover:text-[#f3f009] sm:text-sm"
                >
                  {t(`biography.highlights.${item}`)}
                </motion.span>
              ))}
            </div>

            {/* Appel à l'action */}
            <motion.a
              href="#parcours-politique"
              whileHover={shouldReduceMotion ? undefined : { x: 6 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="group mt-10 inline-flex items-center gap-4 border-b border-[#f3f009]/60 pb-3 text-sm font-medium text-[#f3f009] transition-colors duration-300 hover:border-[#f3f009] hover:text-white"
            >
              <span>{t("biography.cta")}</span>

              <ArrowRight
                size={18}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
