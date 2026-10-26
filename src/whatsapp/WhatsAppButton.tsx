import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "237697475573";

  const message = encodeURIComponent(
    "Bonjour Simon, je souhaite échanger avec vous.",
  );

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Simon sur WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -3, 0],
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.94,
      }}
      className="
        fixed
        bottom-5
        left-5
        z-30
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_8px_25px_rgba(0,0,0,0.25)]
        transition-shadow
        duration-300
        hover:shadow-[0_10px_30px_rgba(37,211,102,0.28)]
        md:bottom-7
        md:left-7
        md:h-[52px]
        md:w-[52px]
      "
    >
      <motion.span
        animate={{ rotate: [0, -4, 4, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
      >
        <FaWhatsapp className="text-[24px] md:text-[26px]" />
      </motion.span>
    </motion.a>
  );
}
