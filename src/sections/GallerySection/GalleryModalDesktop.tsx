import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import GalleryModalControls from "./GalleryModalControls";
import GalleryModalImage from "./GalleryModalImage";
import type { Photo } from "./galleryModal.types";

interface GalleryModalDesktopProps {
  photos: Photo[];
  selectedIndex: number;
  selectedPhoto: Photo;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryModalDesktop({
  photos,
  selectedIndex,
  selectedPhoto,
  onClose,
  onPrevious,
  onNext,
}: GalleryModalDesktopProps) {
  const { t } = useTranslation();

  return (
    <div className="hidden h-full w-full sm:flex sm:flex-col">
      {/* HEADER */}

      <div
        className="
          relative
          z-40
          flex
          min-h-16
          shrink-0
          items-center
          justify-between
          border-b
          border-white/[0.07]
          px-6
          sm:min-h-[72px]
          lg:px-8
        "
        style={{
          paddingTop: "env(safe-area-inset-top)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="
              h-[2px]
              w-8
              shrink-0
              bg-[#f3f009]
            "
          />

          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-white/50
            "
          >
            Galerie
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <div className="flex items-baseline gap-1.5">
            <span
              className="
                text-sm
                font-medium
                text-[#f3f009]
              "
            >
              {String(selectedIndex + 1).padStart(2, "0")}
            </span>

            <span className="text-[9px] text-white/25">/</span>

            <span className="text-[10px] text-white/40">
              {String(photos.length).padStart(2, "0")}
            </span>
          </div>

          <span className="h-5 w-px bg-white/10" />

          <motion.button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="
              group
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              border
              border-white/15
              bg-white/[0.04]
              text-white
              transition-colors
              duration-300
              hover:border-[#f3f009]
              hover:bg-[#f3f009]
              hover:text-black
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Fermer l'image"
          >
            <motion.span
              className="flex items-center justify-center"
              whileHover={{ rotate: 90 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* IMAGE */}

      <div
        className="
          relative
          z-20
          flex
          min-h-0
          flex-1
          items-center
          justify-center
          overflow-hidden
          p-4
          md:p-5
          lg:p-6
        "
        onClick={(e) => e.stopPropagation()}
      >
        <GalleryModalImage photo={selectedPhoto} />
      </div>

      {/* FOOTER */}

      <div
        className="
          relative
          z-40
          flex
          shrink-0
          items-center
          justify-between
          border-t
          border-white/[0.07]
          bg-[#030303]/95
          px-5
          py-3
          lg:px-8
        "
        style={{
          paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <GalleryModalControls
          onPrevious={onPrevious}
          onNext={onNext}
          current={selectedIndex}
          total={photos.length}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={`caption-${selectedPhoto.key}`}
            className="
              min-w-0
              flex-1
              px-5
              text-center
            "
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
            transition={{ duration: 0.25 }}
          >
            <span
              className="
                mb-1
                block
                text-[8px]
                uppercase
                tracking-[0.28em]
                text-[#f3f009]/80
              "
            >
              Photo
            </span>

            <p
              className="
                mx-auto
                max-w-xl
                truncate
                text-[10px]
                font-light
                tracking-[0.05em]
                text-white/60
                md:text-xs
              "
            >
              {t(`gallery.photos.${selectedPhoto.key}.label`)}
            </p>
          </motion.div>
        </AnimatePresence>

        {photos.length > 1 ? (
          <motion.button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="
              group
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              border
              border-white/15
              bg-white/[0.04]
              text-white
              transition-colors
              duration-300
              hover:border-[#f3f009]
              hover:bg-[#f3f009]
              hover:text-black
              active:border-[#f3f009]
              active:bg-[#f3f009]
              active:text-black
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Photo suivante"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          </motion.button>
        ) : (
          <div className="h-11 w-11" />
        )}
      </div>
    </div>
  );
}
