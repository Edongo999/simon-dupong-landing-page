import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface EngagementCardsProps {
  shouldReduceMotion: boolean | null;
}

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

export default function EngagementCards({
  shouldReduceMotion,
}: EngagementCardsProps) {
  const { t } = useTranslation();

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
  );
}
