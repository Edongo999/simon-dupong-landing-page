import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const BackToTop = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t("backToTop")}
      className={`
        group
        fixed
        bottom-6
        right-5
        z-30

        flex
        h-11
        w-11
        items-center
        justify-center

        overflow-hidden
        rounded-full

        border
        border-[#f3f009]

        bg-[#f3f009]
        text-black

        shadow-[0_0_0_1px_rgba(243,240,9,0.08),0_8px_30px_rgba(243,240,9,0.18)]

        transition-all
        duration-500
        ease-out

        ${
          isVisible
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-5 scale-90 opacity-0"
        }

        hover:-translate-y-1
        hover:scale-105
        hover:shadow-[0_0_25px_rgba(243,240,9,0.35)]

        active:scale-95

        sm:bottom-7
        sm:right-7
      `}
    >
      {/* Lueur intérieure */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          bg-white/0
          transition-colors
          duration-300
          group-hover:bg-white/15
        "
      />

      {/* Cercle lumineux extérieur */}
      <span
        className="
          pointer-events-none
          absolute
          inset-[3px]
          rounded-full
          border
          border-black/10
        "
      />

      {/* Icône */}
      <ArrowUp
        size={18}
        strokeWidth={2}
        className="
          relative
          z-10
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
        "
      />
    </button>
  );
};

export default BackToTop;
