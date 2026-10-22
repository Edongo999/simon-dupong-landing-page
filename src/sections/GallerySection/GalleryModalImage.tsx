import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import type { Photo } from "./galleryModal.types";

interface GalleryModalImageProps {
  photo: Photo;
  mobile?: boolean;
}

export default function GalleryModalImage({
  photo,
  mobile = false,
}: GalleryModalImageProps) {
  const { t } = useTranslation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={photo.src}
        className={
          mobile
            ? `
              relative
              z-10
              flex
              h-full
              w-full
              items-center
              justify-center
              py-3
            `
            : `
              relative
              flex
              h-full
              w-full
              min-h-0
              items-center
              justify-center
              overflow-hidden
            `
        }
        initial={
          mobile
            ? {
                opacity: 0,
                scale: 0.96,
              }
            : {
                opacity: 0,
                scale: 0.97,
                y: 8,
              }
        }
        animate={
          mobile
            ? {
                opacity: 1,
                scale: 1,
              }
            : {
                opacity: 1,
                scale: 1,
                y: 0,
              }
        }
        exit={
          mobile
            ? {
                opacity: 0,
                scale: 0.98,
              }
            : {
                opacity: 0,
                scale: 0.98,
              }
        }
        transition={{
          duration: mobile ? 0.35 : 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <img
          src={photo.src}
          alt={t(`gallery.photos.${photo.key}.alt`)}
          className={
            mobile
              ? `
                block
                max-h-full
                max-w-full
                select-none
                object-contain
                shadow-[0_20px_55px_rgba(0,0,0,0.6)]
              `
              : `
                block
                max-h-full
                max-w-full
                select-none
                object-contain
                shadow-[0_20px_70px_rgba(0,0,0,0.55)]
              `
          }
          draggable={false}
        />

        {!mobile && (
          <>
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1
                top-1
                hidden
                h-8
                w-8
                border-l
                border-t
                border-[#f3f009]/50
                lg:block
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-1
                right-1
                hidden
                h-8
                w-8
                border-b
                border-r
                border-[#f3f009]/50
                lg:block
              "
            />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
