import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface ImageLightboxProps {
  image: string | null;
  alt?: string;
  onClose: () => void;
}

const ImageLightbox = ({
  image,
  alt = "Image agrandie",
  onClose,
}: ImageLightboxProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : {
                  opacity: 0,
                  backdropFilter: "blur(0px)",
                }
          }
          animate={{
            opacity: 1,
            backdropFilter: "blur(14px)",
          }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  backdropFilter: "blur(0px)",
                }
          }
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-black/90
            p-4
            sm:p-8
            lg:p-12
          "
          onClick={onClose}
        >
          {/* Halo décoratif */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#f3f009]/[0.035]
              blur-[140px]
            "
          />

          {/* Ligne supérieure */}
          <motion.div
            aria-hidden="true"
            initial={
              shouldReduceMotion
                ? undefined
                : {
                    scaleX: 0,
                    opacity: 0,
                  }
            }
            animate={{
              scaleX: 1,
              opacity: 1,
            }}
            exit={{
              scaleX: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-0
              top-0
              h-px
              w-full
              origin-left
              bg-gradient-to-r
              from-transparent
              via-[#f3f009]/30
              to-transparent
            "
          />

          {/* =====================================
              BOUTON FERMER
          ====================================== */}

          <motion.button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            initial={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 0,
                    scale: 0.7,
                    rotate: -45,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              rotate: 45,
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: 90,
                    scale: 1.08,
                  }
            }
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              absolute
              right-5
              top-5
              z-30
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/30
              text-white/70
              shadow-lg
              backdrop-blur-md
              transition-colors
              duration-300

              hover:border-[#f3f009]/50
              hover:bg-[#f3f009]/10
              hover:text-[#f3f009]

              sm:right-8
              sm:top-8
              sm:h-14
              sm:w-14
            "
            aria-label="Fermer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
            >
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />

              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>

          {/* =====================================
              IMAGE
          ====================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 0,
                    scale: 0.92,
                    y: 25,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 10,
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              z-10
              flex
              max-h-[88vh]
              max-w-6xl
              items-center
              justify-center
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* Cadre */}
            <div
              className="
                relative
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                p-1
                shadow-2xl
              "
            >
              <motion.img
                src={image}
                alt={alt}
                draggable={false}
                initial={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                      }
                }
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  max-h-[84vh]
                  max-w-full
                  rounded-lg
                  object-contain
                "
              />

              {/* Reflet subtil */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-tr
                  from-transparent
                  via-white/[0.015]
                  to-white/[0.04]
                "
              />
            </div>
          </motion.div>

          {/* Petit indicateur bas */}
          <motion.div
            initial={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 0,
                    y: 8,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 8,
            }}
            transition={{
              delay: 0.35,
              duration: 0.5,
            }}
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              text-[10px]
              uppercase
              tracking-[0.28em]
              text-white/25
              sm:bottom-7
            "
          >
            Cliquez à l’extérieur pour fermer
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
