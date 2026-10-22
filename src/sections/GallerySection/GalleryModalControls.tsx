import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryModalControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  current: number;
  total: number;
  mobile?: boolean;
}

export default function GalleryModalControls({
  onPrevious,
  onNext,
  current,
  total,
  mobile = false,
}: GalleryModalControlsProps) {
  if (mobile) {
    return (
      <div
        className="
          relative
          z-40
          flex
          shrink-0
          items-center
          justify-center
          gap-5
          pb-2
        "
      >
        {total > 1 && (
          <>
            <motion.button
              type="button"
              onClick={onPrevious}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                border
                border-white/15
                bg-white/[0.04]
                text-white
                active:border-[#f3f009]
                active:bg-[#f3f009]
                active:text-black
              "
              whileTap={{ scale: 0.9 }}
              aria-label="Photo précédente"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </motion.button>

            <span
              className="
                min-w-[42px]
                text-center
                text-[8px]
                tracking-[0.2em]
                text-white/35
              "
            >
              {String(current + 1).padStart(2, "0")}
              {" / "}
              {String(total).padStart(2, "0")}
            </span>

            <motion.button
              type="button"
              onClick={onNext}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                border
                border-white/15
                bg-white/[0.04]
                text-white
                active:border-[#f3f009]
                active:bg-[#f3f009]
                active:text-black
              "
              whileTap={{ scale: 0.9 }}
              aria-label="Photo suivante"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </motion.button>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      {total > 1 ? (
        <motion.button
          type="button"
          onClick={onPrevious}
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
          aria-label="Photo précédente"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
        </motion.button>
      ) : (
        <div className="h-11 w-11" />
      )}
    </>
  );
}
