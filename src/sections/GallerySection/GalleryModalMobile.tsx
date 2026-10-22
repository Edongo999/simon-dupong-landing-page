import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import GalleryModalImage from "./GalleryModalImage";

interface Photo {
  src: string;
  key: string;
  className?: string;
}

interface GalleryModalMobileProps {
  photos: Photo[];
  selectedIndex: number;
  selectedPhoto: Photo;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryModalMobile({
  photos,
  selectedPhoto,
  onClose,
  onPrevious,
  onNext,
}: GalleryModalMobileProps) {
  const hasMultiplePhotos = photos.length > 1;

  return (
    <div
      className="
        relative
        flex
        h-full
        min-h-0
        w-full
        items-center
        justify-center
        sm:hidden
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* =========================
          BOUTON FERMER
          ========================= */}
      <motion.button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        whileHover={{
          scale: 1.08,
          rotate: 90,
        }}
        whileTap={{ scale: 0.9 }}
        className="
          absolute
          right-3
          z-[100]
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/55
          text-white/75
          shadow-lg
          backdrop-blur-md
          transition-colors
          duration-200
          hover:border-[#f3f009]/60
          hover:bg-[#f3f009]
          hover:text-black
        "
        style={{
          top: "max(0.75rem, env(safe-area-inset-top))",
        }}
      >
        <X size={18} strokeWidth={2} />
      </motion.button>

      {/* =========================
          ZONE IMAGE
          ========================= */}
      <div
        className="
          relative
          flex
          h-full
          min-h-0
          w-full
          items-center
          justify-center
        "
      >
        {/* Image */}
        <div
          className="
            relative
            flex
            h-full
            min-h-0
            w-full
            items-center
            justify-center
            px-1
          "
        >
          <GalleryModalImage photo={selectedPhoto} mobile />
        </div>

        {/* =========================
            CADRE JAUNE — HAUT GAUCHE
            ========================= */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[5%]
            top-[12%]
            z-20
            h-8
            w-8
            border-l
            border-t
            border-[#f3f009]/65
          "
        />

        {/* =========================
            CADRE JAUNE — BAS DROITE
            ========================= */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[12%]
            right-[5%]
            z-20
            h-8
            w-8
            border-b
            border-r
            border-[#f3f009]/40
          "
        />

        {/* =========================
            BOUTON PRÉCÉDENT
            ========================= */}
        {hasMultiplePhotos && (
          <motion.button
            type="button"
            onClick={onPrevious}
            aria-label="Photo précédente"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            className="
              absolute
              left-0
              top-1/2
              z-50
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/50
              text-white/70
              shadow-lg
              backdrop-blur-md
              transition-all
              duration-200
              hover:border-[#f3f009]/60
              hover:bg-[#f3f009]
              hover:text-black
              active:bg-[#f3f009]
              active:text-black
            "
          >
            <ChevronLeft size={19} strokeWidth={1.7} />
          </motion.button>
        )}

        {/* =========================
            BOUTON SUIVANT
            ========================= */}
        {hasMultiplePhotos && (
          <motion.button
            type="button"
            onClick={onNext}
            aria-label="Photo suivante"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            className="
              absolute
              right-0
              top-1/2
              z-50
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/50
              text-white/70
              shadow-lg
              backdrop-blur-md
              transition-all
              duration-200
              hover:border-[#f3f009]/60
              hover:bg-[#f3f009]
              hover:text-black
              active:bg-[#f3f009]
              active:text-black
            "
          >
            <ChevronRight size={19} strokeWidth={1.7} />
          </motion.button>
        )}
      </div>
    </div>
  );
}
