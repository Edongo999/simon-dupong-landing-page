import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface EngagementsNetworkProps {
  shouldReduceMotion: boolean | null;
}

export default function EngagementsNetwork({
  shouldReduceMotion,
}: EngagementsNetworkProps) {
  const { t } = useTranslation();

  return (
    <>
      {/* =========================================
          DÉCOR — RÉSEAU DES 7 TERRAINS D’ACTION
      ========================================= */}

      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 0.9,
          rotate: shouldReduceMotion ? 0 : -4,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.1,
          delay: shouldReduceMotion ? 0 : 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          right-5
          top-7
          z-0
          hidden
          h-[170px]
          w-[170px]
          select-none
          sm:block
          lg:right-10
          lg:top-8
          lg:h-[210px]
          lg:w-[210px]
        "
      >
        {/* Halo général */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[80%]
            w-[80%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#f3f009]/[0.025]
            blur-2xl
          "
        />

        {/* Cercle extérieur */}
        <motion.div
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            delay: shouldReduceMotion ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[76%]
            w-[76%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/[0.06]
          "
        />

        {/* Cercle intérieur */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[43%]
            w-[43%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#f3f009]/10
          "
        />

        {/* Verticale */}
        <motion.span
          initial={{ scaleY: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-1/2
            top-[15%]
            h-[70%]
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-[#f3f009]/20
            to-transparent
          "
        />

        {/* Horizontale */}
        <motion.span
          initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-[15%]
            top-1/2
            h-px
            w-[70%]
            -translate-y-1/2
            bg-gradient-to-r
            from-transparent
            via-[#f3f009]/20
            to-transparent
          "
        />

        {/* Diagonale 1 */}
        <motion.span
          initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.55,
          }}
          className="
            absolute
            left-[19%]
            top-1/2
            h-px
            w-[62%]
            origin-center
            rotate-45
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* Diagonale 2 */}
        <motion.span
          initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.6,
          }}
          className="
            absolute
            left-[19%]
            top-1/2
            h-px
            w-[62%]
            origin-center
            -rotate-45
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* Centre — 07 domaines */}
        <motion.div
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-1/2
            top-1/2
            z-10
            flex
            h-14
            w-14
            -translate-x-1/2
            -translate-y-1/2
            flex-col
            items-center
            justify-center
            rounded-full
            border
            border-[#f3f009]/30
            bg-[#111109]
            shadow-[0_0_30px_rgba(243,240,9,0.06)]
            lg:h-16
            lg:w-16
          "
        >
          <span
            className="
              text-lg
              font-light
              leading-none
              tracking-[-0.04em]
              text-[#f3f009]
              lg:text-xl
            "
          >
            {t("engagements.number")}
          </span>

          <span
            className="
              mt-1
              max-w-[48px]
              text-center
              text-[5px]
              font-medium
              uppercase
              leading-[1.4]
              tracking-[0.15em]
              text-white/35
            "
          >
            {t("engagements.domainsCount")}
          </span>
        </motion.div>

        {/* 01 */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.7,
          }}
          className="
            absolute
            left-1/2
            top-[10%]
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-[#f3f009]
            shadow-[0_0_12px_rgba(243,240,9,0.35)]
          "
        />

        {/* 02 */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.78,
          }}
          className="
            absolute
            right-[19%]
            top-[23%]
            h-1.5
            w-1.5
            rounded-full
            border
            border-[#f3f009]/70
            bg-[#111109]
          "
        />

        {/* 03 */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.86,
          }}
          className="
            absolute
            right-[10%]
            top-1/2
            h-2
            w-2
            -translate-y-1/2
            rounded-full
            bg-white/40
          "
        />

        {/* 04 */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.94,
          }}
          className="
            absolute
            bottom-[19%]
            right-[22%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#f3f009]/60
          "
        />

        {/* 05 */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 1.02,
          }}
          className="
            absolute
            bottom-[10%]
            left-1/2
            h-1.5
            w-1.5
            -translate-x-1/2
            rounded-full
            border
            border-white/40
          "
        />

        {/* 06 */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 1.1,
          }}
          className="
            absolute
            bottom-[21%]
            left-[20%]
            h-2
            w-2
            rounded-full
            bg-[#f3f009]/40
          "
        />

        {/* 07 */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 1.18,
          }}
          className="
            absolute
            left-[10%]
            top-1/2
            h-1.5
            w-1.5
            -translate-y-1/2
            rounded-full
            border
            border-[#f3f009]/70
            bg-[#111109]
          "
        />

        {/* Repères techniques */}
        <span className="absolute right-0 top-[17%] h-px w-5 bg-[#f3f009]/30" />
        <span className="absolute right-0 top-[17%] h-5 w-px bg-[#f3f009]/30" />

        <span className="absolute bottom-[12%] left-[4%] h-px w-4 bg-white/15" />

        <span
          className="
            absolute
            right-0
            top-[22%]
            translate-x-1
            text-[6px]
            font-medium
            tracking-[0.2em]
            text-[#f3f009]/35
          "
        >
          03
        </span>
      </motion.div>

      {/* Lumières d'ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-20 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#f3f009]/[0.045] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 bottom-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#f3f009]/[0.025] blur-[130px]"
      />
    </>
  );
}
