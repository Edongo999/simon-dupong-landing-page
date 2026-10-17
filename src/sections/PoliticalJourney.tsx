import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

const milestones = [
  {
    date: "2014",
    title: "politicalJourney.milestones.2014.title",
    description: "politicalJourney.milestones.2014.description",
  },
  {
    date: "2018",
    title: "politicalJourney.milestones.2018.title",
    description: "politicalJourney.milestones.2018.description",
  },
  {
    date: "Après 2018",
    title: "politicalJourney.milestones.after2018.title",
    description: "politicalJourney.milestones.after2018.description",
  },
  {
    date: "6 années",
    title: "politicalJourney.milestones.sixYears.title",
    description: "politicalJourney.milestones.sixYears.description",
  },
  {
    date: "2026",
    title: "politicalJourney.milestones.2026.title",
    description: "politicalJourney.milestones.2026.description",
  },
];

export default function PoliticalJourney() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="parcours-politique"
      className="bg-[#080808] px-6 py-10 sm:px-10 lg:px-20 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* ------------------------------------------------------------------ */}
        {/* HEADING                                                            */}
        {/* ------------------------------------------------------------------ */}

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
            number="02"
            eyebrow={t("politicalJourney.eyebrow")}
            title={t("politicalJourney.title")}
            description={t("politicalJourney.description")}
          />
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/* TIMELINE                                                           */}
        {/* ------------------------------------------------------------------ */}

        <div className="relative mt-6">
          {/* Ligne verticale */}

          <motion.div
            className="
              absolute
              bottom-0
              left-[18px]
              top-0
              w-px
              origin-top
              bg-gradient-to-b
              from-[#f3f009]/70
              via-white/15
              to-transparent
              sm:left-[150px]
            "
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.2,
              ease: "easeOut",
            }}
          />

          <div>
            {milestones.map((item, index) => (
              <article
                key={`${item.date}-${index}`}
                className="
                  group
                  relative
                  grid
                  grid-cols-[38px_1fr]
                  gap-x-6
                  border-b
                  border-white/[0.08]
                  py-10
                  first:pt-4
                  last:border-b-0
                  sm:grid-cols-[150px_1fr]
                  sm:gap-x-12
                  sm:py-12
                "
              >
                {/* ========================================================== */}
                {/* ANNÉE                                                       */}
                {/* ========================================================== */}

                <div className="relative">
                  {/* Date desktop */}

                  <span
                    className="
                      hidden
                      text-sm
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-[#f3f009]
                      sm:block
                    "
                  >
                    {t(item.date)}
                  </span>

                  {/* Point desktop */}

                  <span
                    className="
                      absolute
                      right-[-49px]
                      top-[5px]
                      hidden
                      h-[9px]
                      w-[9px]
                      rounded-full
                      border-2
                      border-[#f3f009]
                      bg-[#080808]
                      transition-all
                      duration-500
                      group-hover:scale-150
                      group-hover:bg-[#f3f009]
                      sm:block
                    "
                  />

                  {/* Point mobile */}

                  <motion.span
                    className="
                      absolute
                      left-[14px]
                      top-[5px]
                      h-[9px]
                      w-[9px]
                      rounded-full
                      border-2
                      border-[#f3f009]
                      bg-[#080808]
                      sm:hidden
                    "
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.35,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.55,
                      ease: "easeOut",
                    }}
                  />
                </div>

                {/* ========================================================== */}
                {/* CONTENU                                                     */}
                {/* ========================================================== */}

                <div className="max-w-3xl">
                  {/* Date mobile */}

                  <motion.span
                    className="
                      mb-3
                      block
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-[#f3f009]
                      sm:hidden
                    "
                    initial={{
                      opacity: 0,
                      x: shouldReduceMotion ? 0 : -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.35,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.8,
                      ease: "easeOut",
                    }}
                  >
                    {t(item.date)}
                  </motion.span>

                  <div className="flex items-start gap-4">
                    {/* Petite ligne desktop */}

                    <span
                      className="
                        mt-[10px]
                        hidden
                        h-px
                        w-0
                        shrink-0
                        bg-[#f3f009]
                        transition-all
                        duration-500
                        group-hover:w-8
                        sm:block
                      "
                    />

                    {/* Contenu */}

                    <motion.div
                      className="w-full"
                      initial={{
                        opacity: 0,
                        x: shouldReduceMotion ? 0 : 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.35,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.85,
                        delay: shouldReduceMotion ? 0 : 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <h3
                        className="
                          text-xl
                          font-medium
                          leading-tight
                          tracking-tight
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-[#f3f009]
                          sm:text-2xl
                          lg:text-[1.7rem]
                        "
                      >
                        {t(item.title)}
                      </h3>

                      <p
                        className="
                          mt-4
                          w-full
                          max-w-2xl
                          text-justify
                          text-sm
                          leading-7
                          tracking-normal
                          text-white/55
                          transition-colors
                          duration-300
                          group-hover:text-white/70
                          hyphens-auto
                          [overflow-wrap:break-word]
                          px-0
                          sm:text-[15px]
                          md:max-w-lg
                        "
                      >
                        {t(item.description)}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* ========================================================== */}
                {/* NUMÉRO DÉCORATIF                                            */}
                {/* ========================================================== */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-1/2
                    hidden
                    -translate-y-1/2
                    select-none
                    text-7xl
                    font-semibold
                    leading-none
                    text-white/[0.025]
                    transition-all
                    duration-500
                    group-hover:text-[#f3f009]/[0.05]
                    lg:block
                  "
                >
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
