import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import ScrollReveal from "@/components/animations/ScrollReveal";

import GalleryModalDesktop from "./GalleryModalDesktop";
import GalleryModalMobile from "./GalleryModalMobile";

import type { GalleryModalProps } from "./galleryModal.types";

export default function GalleryModal({ photos }: GalleryModalProps) {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const previousPhoto = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0 ? photos.length - 1 : current - 1;
    });
  };

  const nextPhoto = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === photos.length - 1 ? 0 : current + 1;
    });
  };

  /* ==============================
     CLAVIER + SCROLL
  ============================== */

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        previousPhoto();
      }

      if (event.key === "ArrowRight") {
        nextPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, photos.length]);

  /* ==============================
     MODAL
  ============================== */

  const modal =
    typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            {selectedPhoto && selectedIndex !== null && (
              <motion.div
                className="
                    fixed
                    inset-0
                    z-[99999]
                    h-[100dvh]
                    w-full
                    overflow-hidden
                    bg-[#030303]/95
                    backdrop-blur-md
                  "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                onClick={closeModal}
              >
                {/* FOND DÉCORATIF */}

                <div
                  aria-hidden="true"
                  className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_center,rgba(243,240,9,0.035),transparent_55%)]
                    "
                />

                {/* DESKTOP */}

                <GalleryModalDesktop
                  photos={photos}
                  selectedIndex={selectedIndex}
                  selectedPhoto={selectedPhoto}
                  onClose={closeModal}
                  onPrevious={previousPhoto}
                  onNext={nextPhoto}
                />

                {/* MOBILE */}

                <GalleryModalMobile
                  photos={photos}
                  selectedIndex={selectedIndex}
                  selectedPhoto={selectedPhoto}
                  onClose={closeModal}
                  onPrevious={previousPhoto}
                  onNext={nextPhoto}
                />

                {/* TRAIT JAUNE DU BAS */}

                <div
                  className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      z-[60]
                      h-[2px]
                      w-full
                      bg-white/[0.04]
                    "
                >
                  <motion.div
                    className="
                        h-full
                        bg-[#f3f009]
                      "
                    initial={false}
                    animate={{
                      width: `${((selectedIndex + 1) / photos.length) * 100}%`,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )
      : null;

  /* ==============================
     GALERIE
  ============================== */

  return (
    <>
      <div
        className="
          mt-4
          grid
          auto-rows-[220px]
          grid-flow-dense
          gap-4
          sm:grid-cols-2
          md:auto-rows-[260px]
          md:grid-cols-3
        "
      >
        {photos.map((photo, index) => {
          const fromLeft = index % 2 === 0;

          const isSecondLast = index === photos.length - 2;

          const isLast = index === photos.length - 1;

          let customClass = photo.className;

          if (isSecondLast) {
            customClass = "";
          }

          if (isLast) {
            customClass = "md:col-span-2";
          }

          return (
            <ScrollReveal
              key={`${photo.key}-${index}`}
              direction={fromLeft ? "left" : "right"}
              distance={22}
              delay={index * 0.11}
              duration={1.25}
              amount={0.08}
              scale
              className={customClass}
            >
              <figure
                className="
                  group
                  relative
                  h-full
                  cursor-pointer
                  overflow-hidden
                  rounded-lg
                  bg-white/5
                "
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={photo.src}
                  alt={t(`gallery.photos.${photo.key}.alt`)}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-black/10
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-colors
                    duration-500
                    group-hover:bg-black/10
                  "
                />

                {/* TRAIT JAUNE */}

                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.15,
                    delay: 0.35 + index * 0.11,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    absolute
                    bottom-0
                    left-0
                    z-20
                    h-[2px]
                    w-full
                    origin-left
                    bg-[#f3f009]
                  "
                />

                {/* TITRE */}

                <figcaption
                  className="
                    absolute
                    bottom-0
                    left-0
                    z-20
                    p-5
                    text-sm
                    font-medium
                    tracking-wide
                    text-white
                    transition-transform
                    duration-500
                    group-hover:-translate-y-1
                  "
                >
                  {t(`gallery.photos.${photo.key}.label`)}
                </figcaption>

                {/* CADRE JAUNE GAUCHE */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-4
                    top-4
                    z-20
                    h-7
                    w-7
                    border-l
                    border-t
                    border-[#f3f009]/70
                    opacity-70
                    transition-all
                    duration-500
                    group-hover:h-9
                    group-hover:w-9
                    group-hover:opacity-100
                  "
                />

                {/* CADRE JAUNE DROIT */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    right-4
                    top-4
                    z-20
                    h-7
                    w-7
                    border-r
                    border-t
                    border-[#f3f009]/70
                    opacity-70
                    transition-all
                    duration-500
                    group-hover:h-9
                    group-hover:w-9
                    group-hover:opacity-100
                  "
                />
              </figure>
            </ScrollReveal>
          );
        })}
      </div>

      {modal}
    </>
  );
}
