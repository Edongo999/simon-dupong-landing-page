import { motion, useReducedMotion } from "framer-motion";

const AwardsPublicationsSymbol = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 0,
              scale: 0.94,
              rotate: -3,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              scale: 1,
              rotate: 0,
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
          duration: 0.9,
          ease: "easeOut",
        },
        scale: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        },
        rotate: {
          duration: 0.9,
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

        lg:right-[-10px]
        lg:top-[0px]
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
        {/* =========================================
            CERCLE EXTÉRIEUR — ROTATION TRÈS LENTE
        ========================================== */}
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
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Cercle intérieur — respiration */}
        <motion.circle
          cx="110"
          cy="110"
          r="69"
          stroke="currentColor"
          strokeWidth="1"
          style={{
            transformOrigin: "110px 110px",
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.18, 0.4, 0.18],
                  scale: [1, 1.025, 1],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =========================================
            MÉDAILLE
        ========================================== */}

        <motion.g
          style={{
            transformOrigin: "105px 85px",
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -2.5, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Ruban gauche */}
          <path
            d="M91 52L101 79L111 69L101 43Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            opacity="0.7"
          />

          {/* Ruban droit */}
          <path
            d="M119 52L109 79L99 69L109 43Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            opacity="0.7"
          />

          {/* Corps médaille */}
          <circle
            cx="105"
            cy="85"
            r="25"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.9"
          />

          <circle
            cx="105"
            cy="85"
            r="18"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />

          {/* Étoile centrale — pulsation */}
          <motion.path
            d="
              M105 72
              L108.8 80.2
              L118 81.2
              L111.2 87.4
              L113.1 96
              L105 91.5
              L96.9 96
              L98.8 87.4
              L92 81.2
              L101.2 80.2
              Z
            "
            fill="currentColor"
            style={{
              transformOrigin: "105px 85px",
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.35, 0.85, 0.35],
                    scale: [1, 1.12, 1],
                  }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.g>

        {/* =========================================
            LIAISON
        ========================================== */}

        <motion.path
          d="M105 111V120"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 4"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.2, 0.8, 0.2],
                }
          }
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =========================================
            LIVRE OUVERT
        ========================================== */}

        <motion.g
          initial={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 0,
                  y: 6,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Page gauche */}
          <path
            d="
              M52 125
              C70 119 88 121 105 133
              V169
              C88 157 70 154 52 159
              Z
            "
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            opacity="0.8"
          />

          {/* Page droite */}
          <path
            d="
              M158 125
              C140 119 122 121 105 133
              V169
              C122 157 140 154 158 159
              Z
            "
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            opacity="0.8"
          />

          {/* Reliure */}
          <path
            d="M105 133V169"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.6"
          />

          {/* Lignes page gauche */}
          <motion.path
            d="M64 135C76 132 87 134 97 139"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.2, 0.5, 0.2],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <path
            d="M64 143C76 140 87 142 97 147"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.3"
          />

          {/* Lignes page droite */}
          <path
            d="M146 135C134 132 123 134 113 139"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.3"
          />

          <motion.path
            d="M146 143C134 140 123 142 113 147"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.2, 0.5, 0.2],
                  }
            }
            transition={{
              duration: 3,
              delay: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.g>

        {/* =========================================
            REPÈRES DÉCORATIFS
        ========================================== */}

        <motion.g
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.35, 0.8, 0.35],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Croix gauche */}
          <path d="M47 62V77" stroke="currentColor" strokeWidth="1.5" />

          <path d="M39.5 69.5H54.5" stroke="currentColor" strokeWidth="1.5" />

          {/* Croix droite */}
          <path d="M174 111V126" stroke="currentColor" strokeWidth="1.5" />

          <path
            d="M166.5 118.5H181.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </motion.g>

        {/* Point lumineux */}
        <motion.circle
          cx="163"
          cy="67"
          r="4"
          fill="currentColor"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.25, 0.9, 0.25],
                  scale: [1, 1.35, 1],
                }
          }
          style={{
            transformOrigin: "163px 67px",
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Arc décoratif */}
        <path
          d="M155 171C162 166 168 159 171 151"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 5"
          opacity="0.35"
        />
      </svg>
    </motion.div>
  );
};

export default AwardsPublicationsSymbol;
