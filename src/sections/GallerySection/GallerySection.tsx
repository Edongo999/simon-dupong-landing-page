import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import SectionHeading from "../SectionHeading";
import GalleryMediaSymbol from "./GalleryMediaSymbol";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GalleryModal from "./GalleryModal";
const photos = [
  { src: "/Images/simon11.webp", key: "portrait", className: "md:row-span-2" },
  { src: "/Images/simon10.webp", key: "events", className: "" },
  { src: "/Images/awards/simon25.webp", key: "engagements", className: "" },
  {
    src: "/Images/awards/simon22.webp",
    key: "meetings",
    className: "md:col-span-2",
  },
  { src: "/Images/Gallerie/gallerie14.webp", key: "travel", className: "" }, // Voyages
  { src: "/Images/Gallerie/gallerie2.webp", key: "visits", className: "" }, // Visites

  // Ajouts avec tailles variées
  {
    src: "/Images/Gallerie/gallerie39.webp",
    key: "conference",
    className: "md:row-span-2",
  },
  { src: "/Images/Gallerie/gallerie3.webp", key: "innovation", className: "" },
  { src: "/Images/Gallerie/gallerie4.webp", key: "teamwork", className: "" },
  {
    src: "/Images/Gallerie/gallerie34.webp",
    key: "leadership",
    className: "md:col-span-2",
  },
  { src: "/Images/Gallerie/gallerie22.webp", key: "vision", className: "" },
  {
    src: "/Images/Gallerie/gallerie24.webp",
    key: "strategy",
    className: "md:row-span-2",
  },
  { src: "/Images/Gallerie/gallerie17.webp", key: "growth", className: "" },
  { src: "/Images/Gallerie/gallerie18.webp", key: "impact", className: "" },
  {
    src: "/Images/Gallerie/gallerie21.webp",
    key: "future",
    className: "md:col-span-2",
  },
  { src: "/Images/Gallerie/gallerie26.webp", key: "awards", className: "" },
  { src: "/Images/Gallerie/gallerie11.webp", key: "network", className: "" },
  {
    src: "/Images/Gallerie/gallerie23.webp",
    key: "projects",
    className: "md:row-span-2",
  },
  { src: "/Images/Gallerie/gallerie5.webp", key: "success", className: "" },

  // Ajouts supplémentaires jusqu'à 35
  { src: "/Images/simon12.webp", key: "culture", className: "" },

  {
    src: "/Images/Gallerie/gallerie31.webp",
    key: "community",
    className: "md:row-span-2",
  },
  { src: "/Images/Gallerie/gallerie18.webp", key: "education", className: "" },
  { src: "/Images/Gallerie/gallerie1.webp", key: "Amitié", className: "" },
  {
    src: "/Images/Gallerie/gallerie37.webp",
    key: "presence",
    className: "md:col-span-2",
  },
  { src: "/Images/Gallerie/gallerie20.webp", key: "nature", className: "" },
  { src: "/Images/Gallerie/gallerie6.webp", key: "art", className: "" },

  { src: "/Images/Gallerie/festival.webp", key: "festival", className: "" },
  {
    src: "/Images/Gallerie/gallerie25.webp",
    key: "celebration",
    className: "",
  },
  { src: "/Images/Gallerie/gallerie13.webp", key: "journey", className: "" },
  { src: "/Images/Gallerie/gallerie27.webp", key: "memories", className: "" },
  { src: "/Images/Gallerie/gallerie29.webp", key: "russia", className: "" },

  // petite
  {
    src: "/Images/Gallerie/gallerie36.webp",
    key: "speech",
    className: "md:col-span-2",
  }, // grande horizontale
];

export default function GallerySection() {
  const { t } = useTranslation();

  return (
    <section
      id="galerie"
      className="relative overflow-hidden bg-[#030303] px-6 py-8 sm:px-10 lg:px-20 lg:py-12"
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
          className="mt-2 flex justify-end"
        >
          <GalleryMediaSymbol />
        </ScrollReveal>

        {/* Galerie photos */}

        <GalleryModal photos={photos} />

        {/* Galerie photos */}

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
