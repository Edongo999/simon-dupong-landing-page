import { motion, useReducedMotion } from "framer-motion";

const GalleryMediaSymbol = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 0,
              scale: 0.96,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              scale: 1,
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -5, 0],
            }
      }
      transition={{
        opacity: {
          duration: 0.8,
          ease: "easeOut",
        },
        scale: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
        y: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="
        pointer-events-none
        absolute
        right-[-35px]
        top-[-25px]
        h-50
        w-50
        text-[#f3f009]/10

        sm:right-2
        sm:top-2
        sm:h-44
        sm:w-44

        lg:right-[-80px]
        lg:top-[-70px]
        lg:h-[400px]
        lg:w-[400px]
      "
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* ========================================
            CERCLE EXTÉRIEUR — ROTATION
        ======================================== */}

        <motion.circle
          cx="110"
          cy="110"
          r="88"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 8"
          opacity="0.45"
          style={{
            transformOrigin: "110px 110px",
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ========================================
            CERCLE INTÉRIEUR — RESPIRATION
        ======================================== */}

        <motion.circle
          cx="110"
          cy="110"
          r="68"
          stroke="currentColor"
          strokeWidth="1"
          style={{
            transformOrigin: "110px 110px",
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.025, 1],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ========================================
            APPAREIL PHOTO
        ======================================== */}

        <motion.g
          initial={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 0,
                  scale: 0.92,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  scale: 1,
                }
          }
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "110px 110px",
          }}
        >
          {/* Corps */}
          <rect
            x="55"
            y="72"
            width="110"
            height="78"
            rx="8"
            stroke="currentColor"
            strokeWidth="2"
          />

          {/* Partie supérieure */}
          <path
            d="M75 72L84 58H118L128 72"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* ========================================
              OBJECTIF EXTÉRIEUR
          ======================================== */}

          <motion.circle
            cx="110"
            cy="111"
            r="27"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              transformOrigin: "110px 111px",
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.6, 0.9, 0.6],
                    scale: [1, 1.035, 1],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Objectif intérieur */}
          <motion.circle
            cx="110"
            cy="111"
            r="17"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{
              transformOrigin: "110px 111px",
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.3, 0.65, 0.3],
                    scale: [1, 0.94, 1],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Centre de l'objectif */}
          <motion.circle
            cx="110"
            cy="111"
            r="7"
            fill="currentColor"
            style={{
              transformOrigin: "110px 111px",
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.2, 0.55, 0.2],
                    scale: [0.9, 1.15, 0.9],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ========================================
              REFLET DE L'OBJECTIF
          ======================================== */}

          <motion.circle
            cx="104"
            cy="105"
            r="2.5"
            fill="currentColor"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.05, 0.75, 0.05],
                    x: [-2, 3, -2],
                    y: [-1, 2, -1],
                  }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ========================================
              VOYANT DE L'APPAREIL
          ======================================== */}

          <motion.circle
            cx="146"
            cy="88"
            r="5"
            fill="currentColor"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.15, 1],
                  }
            }
            style={{
              transformOrigin: "146px 88px",
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ========================================
              LIGNES DÉCORATIVES
          ======================================== */}

          <motion.path
            d="M73 132H91"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.2, 0.55, 0.2],
                  }
            }
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.path
            d="M129 132H147"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.2, 0.55, 0.2],
                  }
            }
            transition={{
              duration: 3.5,
              delay: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.g>

        {/* ========================================
            ONDE / MISE AU POINT
        ======================================== */}

        <motion.circle
          cx="110"
          cy="111"
          r="30"
          stroke="currentColor"
          strokeWidth="1"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0, 0.3, 0],
                  scale: [0.8, 1.35, 1.55],
                }
          }
          style={{
            transformOrigin: "110px 111px",
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Deuxième onde décalée */}
        <motion.circle
          cx="110"
          cy="111"
          r="30"
          stroke="currentColor"
          strokeWidth="1"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0, 0.2, 0],
                  scale: [0.8, 1.35, 1.55],
                }
          }
          style={{
            transformOrigin: "110px 111px",
          }}
          transition={{
            duration: 4,
            delay: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* ========================================
            REPÈRES TECHNIQUES
        ======================================== */}

        <motion.g
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.3, 0.75, 0.3],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Haut gauche */}
          <path d="M48 53V68" stroke="currentColor" strokeWidth="1.5" />

          <path d="M40 61H55" stroke="currentColor" strokeWidth="1.5" />

          {/* Bas droite */}
          <path d="M172 153V168" stroke="currentColor" strokeWidth="1.5" />

          <path d="M165 160H180" stroke="currentColor" strokeWidth="1.5" />
        </motion.g>

        {/* ========================================
            PETITS POINTS DÉCORATIFS
        ======================================== */}

        <motion.circle
          cx="172"
          cy="66"
          r="2.5"
          fill="currentColor"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.15, 0.7, 0.15],
                  scale: [1, 1.3, 1],
                }
          }
          style={{
            transformOrigin: "172px 66px",
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.circle
          cx="51"
          cy="153"
          r="2"
          fill="currentColor"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.15, 0.6, 0.15],
                }
          }
          transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
};

export default GalleryMediaSymbol;
