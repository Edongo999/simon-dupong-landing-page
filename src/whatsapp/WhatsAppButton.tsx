import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "237697475573";

  const message = encodeURIComponent(
    "Bonjour Simon, je souhaite échanger avec vous.",
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Simon sur WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-[100]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        shadow-black/30
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-[#25D366]/30
        md:bottom-8
        md:right-8
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
