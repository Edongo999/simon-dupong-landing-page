import { motion, useReducedMotion } from "framer-motion";

const ActionsImpactSymbol = () => {
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
        select-none
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
        {/* ========================================
            CERCLE EXTÉRIEUR
        ======================================== */}

        <motion.circle
          cx="110"
          cy="105"
          r="86"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 8"
          opacity="0.4"
          style={{
            transformOrigin: "110px 105px",
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Cercle intérieur */}
        <circle
          cx="110"
          cy="105"
          r="66"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.18"
        />

        {/* ========================================
            ONDES D'IMPACT
        ======================================== */}

        <motion.circle
          cx="110"
          cy="94"
          r="25"
          stroke="currentColor"
          strokeWidth="1"
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0, 0.35, 0],
                  scale: [0.6, 1.9, 2.3],
                }
          }
          style={{
            transformOrigin: "110px 94px",
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        <motion.circle
          cx="110"
          cy="94"
          r="25"
          stroke="currentColor"
          strokeWidth="1"
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0, 0.25, 0],
                  scale: [0.6, 1.9, 2.3],
                }
          }
          style={{
            transformOrigin: "110px 94px",
          }}
          transition={{
            duration: 4,
            delay: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* ========================================
            RÉSEAU — LIGNES D'IMPACT
        ======================================== */}

        <motion.g
          initial={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 0,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                }
          }
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.25,
          }}
        >
          {/* Haut */}
          <motion.path
            d="M110 91L110 49"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeDasharray="3 5"
            opacity="0.45"
          />

          {/* Haut droite */}
          <motion.path
            d="M119 94L151 65"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeDasharray="3 5"
            opacity="0.4"
          />

          {/* Droite */}
          <motion.path
            d="M124 102L168 102"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeDasharray="3 5"
            opacity="0.45"
          />

          {/* Bas droite */}
          <motion.path
            d="M119 110L150 137"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeDasharray="3 5"
            opacity="0.35"
          />

          {/* Bas gauche */}
          <motion.path
            d="M101 110L70 137"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeDasharray="3 5"
            opacity="0.35"
          />

          {/* Gauche */}
          <motion.path
            d="M96 102L52 102"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeDasharray="3 5"
            opacity="0.45"
          />

          {/* Haut gauche */}
          <motion.path
            d="M101 94L69 65"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeDasharray="3 5"
            opacity="0.4"
          />
        </motion.g>

        {/* ========================================
            PERSONNE CENTRALE
            = ACTION / INITIATIVE
        ======================================== */}

        <motion.g
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -2, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Tête */}
          <motion.circle
            cx="110"
            cy="81"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.65, 1, 0.65],
                  }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Corps */}
          <path
            d="M94 108C96 96 101 91 110 91C119 91 124 96 126 108"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.g>

        {/* ========================================
            BÉNÉFICIAIRES / DOMAINES
        ======================================== */}

        {/* Point haut */}
        <motion.circle
          cx="110"
          cy="44"
          r="5"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.3, 0.9, 0.3],
                  scale: [1, 1.2, 1],
                }
          }
          style={{
            transformOrigin: "110px 44px",
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Haut droite */}
        <motion.circle
          cx="156"
          cy="61"
          r="4"
          fill="currentColor"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.25, 0.75, 0.25],
                  scale: [1, 1.3, 1],
                }
          }
          style={{
            transformOrigin: "156px 61px",
          }}
          transition={{
            duration: 3,
            delay: 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Droite */}
        <motion.circle
          cx="174"
          cy="102"
          r="5"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.3, 0.9, 0.3],
                  scale: [1, 1.2, 1],
                }
          }
          style={{
            transformOrigin: "174px 102px",
          }}
          transition={{
            duration: 3,
            delay: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bas droite */}
        <motion.circle
          cx="155"
          cy="142"
          r="4"
          fill="currentColor"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.25, 0.8, 0.25],
                  scale: [1, 1.3, 1],
                }
          }
          style={{
            transformOrigin: "155px 142px",
          }}
          transition={{
            duration: 3,
            delay: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bas gauche */}
        <motion.circle
          cx="65"
          cy="142"
          r="4"
          fill="currentColor"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.25, 0.8, 0.25],
                  scale: [1, 1.3, 1],
                }
          }
          style={{
            transformOrigin: "65px 142px",
          }}
          transition={{
            duration: 3,
            delay: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gauche */}
        <motion.circle
          cx="46"
          cy="102"
          r="5"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.3, 0.9, 0.3],
                  scale: [1, 1.2, 1],
                }
          }
          style={{
            transformOrigin: "46px 102px",
          }}
          transition={{
            duration: 3,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Haut gauche */}
        <motion.circle
          cx="64"
          cy="61"
          r="4"
          fill="currentColor"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.25, 0.75, 0.25],
                  scale: [1, 1.3, 1],
                }
          }
          style={{
            transformOrigin: "64px 61px",
          }}
          transition={{
            duration: 3,
            delay: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ========================================
            MAIN — ACCOMPAGNEMENT
        ======================================== */}

        <motion.g
          initial={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 0,
                  y: 8,
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
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Paume stylisée */}
          <path
            d="
              M65 157
              C78 153 90 154 101 160
              C106 163 111 163 116 160
              L137 149
              C143 146 149 149 149 154
              C149 157 147 160 144 162
              L118 180
              C111 185 103 186 95 183
              L69 174
            "
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />

          {/* Avant-bras */}
          <path
            d="M43 159L65 157L69 174L48 178"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />

          {/* Petit accent */}
          <motion.path
            d="M91 168C99 171 108 171 116 167"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.2, 0.65, 0.2],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.g>

        {/* ========================================
            REPÈRES TECHNIQUES
        ======================================== */}

        <motion.g
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.3, 0.7, 0.3],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Croix */}
          <path d="M39 54V68" stroke="currentColor" strokeWidth="1.4" />

          <path d="M32 61H46" stroke="currentColor" strokeWidth="1.4" />

          {/* Croix droite */}
          <path d="M181 131V145" stroke="currentColor" strokeWidth="1.4" />

          <path d="M174 138H188" stroke="currentColor" strokeWidth="1.4" />
        </motion.g>

        {/* Point décoratif */}
        <motion.circle
          cx="179"
          cy="70"
          r="2.5"
          fill="currentColor"
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

        {/* Arc décoratif */}
        <path
          d="M158 181C169 174 177 164 181 153"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 5"
          opacity="0.3"
        />
      </svg>
    </motion.div>
  );
};

export default ActionsImpactSymbol;
