import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import SectionHeading from "../SectionHeading";
import GalleryMediaSymbol from "./GalleryMediaSymbol";
import ScrollReveal from "@/components/animations/ScrollReveal";

const photos = [
  {
    src: "/Images/simon11.webp",
    key: "portrait",
    className: "md:row-span-2",
  },
  {
    src: "/Images/simon10.webp",
    key: "events",
    className: "",
  },
  {
    src: "/Images/simon12.webp",
    key: "engagements",
    className: "",
  },
  {
    src: "/Images/awards/simon22.webp",
    key: "meetings",
    className: "md:col-span-2",
  },

  {
    src: "/Images/simon15.jpg",
    key: "travel",
    className: "",
  },
  {
    src: "/Images/simon16.jpg",
    key: "trips",
    className: "",
  },
];

export default function GallerySection() {
  const { t } = useTranslation();

  return (
    <section
      id="galerie"
      className="relative overflow-hidden bg-[#030303] px-6 py-24 sm:px-10 lg:px-20 lg:py-12"
    >
      {/* Lumières d'ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#f3f009]/[0.025] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#f3f009]/[0.02] blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* En-tête */}
        <ScrollReveal
          direction="up"
          distance={22}
          duration={1.25}
          amount={0.08}
        >
          <SectionHeading
            number="06"
            eyebrow={t("gallery.eyebrow")}
            title={t("gallery.title")}
            description={t("gallery.description")}
          />
        </ScrollReveal>

        {/* Symbole éditorial */}
        <ScrollReveal
          direction="right"
          distance={22}
          delay={0.1}
          duration={1.2}
          amount={0.08}
          className="mt-8 flex justify-end"
        >
          <GalleryMediaSymbol />
        </ScrollReveal>

        {/* Galerie photos */}
        <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 md:auto-rows-[260px] md:grid-cols-3">
          {photos.map((photo, index) => {
            const fromLeft = index % 2 === 0;

            return (
              <ScrollReveal
                key={photo.src}
                direction={fromLeft ? "left" : "right"}
                distance={22}
                delay={index * 0.11}
                duration={1.25}
                amount={0.08}
                scale
                className={photo.className}
              >
                <figure className="group relative h-full overflow-hidden rounded-lg bg-white/5">
                  <img
                    src={photo.src}
                    alt={t(`gallery.photos.${photo.key}.alt`)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dégradé */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  {/* Ligne jaune */}
                  <motion.span
                    aria-hidden="true"
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.15,
                      delay: 0.35 + index * 0.11,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute bottom-0 left-0 z-20 h-[2px] w-full origin-left bg-[#f3f009]"
                  />

                  {/* Label */}
                  <figcaption className="absolute bottom-0 left-0 z-20 p-5 text-sm font-medium tracking-wide text-white transition-transform duration-500 group-hover:-translate-y-1">
                    {t(`gallery.photos.${photo.key}.label`)}
                  </figcaption>

                  {/* Repère graphique gauche */}
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-4 z-20 h-7 w-7 border-l border-t border-[#f3f009]/70 opacity-70 transition-all duration-500 group-hover:h-9 group-hover:w-9 group-hover:opacity-100"
                  />

                  {/* Repère graphique droit */}
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 z-20 h-7 w-7 border-r border-t border-[#f3f009]/70 opacity-70 transition-all duration-500 group-hover:h-9 group-hover:w-9 group-hover:opacity-100"
                  />
                </figure>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Vidéo */}
        <ScrollReveal
          direction="up"
          distance={26}
          duration={1.3}
          amount={0.08}
          className="mt-16"
        >
          {/* Introduction vidéo */}
          <div className="mb-6 flex items-end justify-between gap-6 border-b border-white/10 pb-4">
            <div>
              <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-[#f3f009]">
                {t("gallery.videoEyebrow")}
              </span>

              <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                {t("gallery.videoTitle")}
              </h3>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-white/30 sm:block">
              {t("gallery.videoLabel")}
            </span>
          </div>

          {/* Conteneur vidéo */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.985,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.4,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#090909]"
          >
            <video
              src="/videos/simon-video.mp4"
              controls
              preload="metadata"
              playsInline
              className="aspect-video w-full object-cover"
            />

            {/* Coin supérieur gauche */}
            <motion.span
              aria-hidden="true"
              initial={{
                opacity: 0,
                x: -10,
                y: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-none absolute left-5 top-5 z-10 h-10 w-10 border-l border-t border-[#f3f009]/70"
            />

            {/* Coin supérieur droit */}
            <motion.span
              aria-hidden="true"
              initial={{
                opacity: 0,
                x: 10,
                y: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-none absolute right-5 top-5 z-10 h-10 w-10 border-r border-t border-[#f3f009]/70"
            />

            {/* Coin inférieur gauche */}
            <motion.span
              aria-hidden="true"
              initial={{
                opacity: 0,
                x: -10,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-none absolute bottom-5 left-5 z-10 h-10 w-10 border-b border-l border-[#f3f009]/40"
            />

            {/* Coin inférieur droit */}
            <motion.span
              aria-hidden="true"
              initial={{
                opacity: 0,
                x: 10,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-none absolute bottom-5 right-5 z-10 h-10 w-10 border-b border-r border-[#f3f009]/40"
            />
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
