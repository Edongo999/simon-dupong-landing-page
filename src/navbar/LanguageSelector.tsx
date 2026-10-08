import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLanguage = i18n.language?.startsWith("en") ? "en" : "fr";

  const languages = {
    fr: {
      label: "Français",
      short: "FR",
      flag: "https://flagcdn.com/fr.svg",
    },
    en: {
      label: "English",
      short: "EN",
      flag: "https://flagcdn.com/gb.svg",
    },
  };

  const changeLanguage = (language: "fr" | "en") => {
    i18n.changeLanguage(language);
    setOpen(false);
  };

  const current = languages[currentLanguage];

  return (
    <div className="relative">
      {/* BOUTON PRINCIPAL */}
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.96 }}
        className="
          flex items-center gap-2.5
          rounded-full
          border border-white/10
          bg-white/[0.04]
          px-3.5 py-2
          backdrop-blur-xl
          transition-all duration-300
          hover:border-white/20
          hover:bg-white/[0.07]
        "
      >
        {/* DRAPEAU */}
        <img
          src={current.flag}
          alt={current.label}
          className="h-4 w-6 rounded-[2px] object-cover"
        />

        {/* CODE LANGUE */}
        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/90">
          {current.short}
        </span>

        {/* FLECHE */}
        <span
          className={`
            text-[9px] text-white/40
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
        >
          ↓
        </span>
      </motion.button>

      {/* MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -6,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -6,
              scale: 0.96,
            }}
            transition={{ duration: 0.18 }}
            className="
              absolute
              right-0
              top-[calc(100%+10px)]
              w-36
              overflow-hidden
              rounded-2xl
              border border-white/10
              bg-[#080808]/95
              p-1.5
              shadow-2xl
              backdrop-blur-xl
            "
          >
            {(Object.keys(languages) as Array<"fr" | "en">).map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => changeLanguage(language)}
                className={`
                    flex w-full items-center gap-3
                    rounded-xl
                    px-3 py-2.5
                    text-left
                    transition-all duration-200
                    ${
                      currentLanguage === language
                        ? "bg-[#f3f009] text-black"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }
                  `}
              >
                {/* DRAPEAU */}
                <img
                  src={languages[language].flag}
                  alt={languages[language].label}
                  className="h-4 w-6 rounded-[2px] object-cover"
                />

                {/* NOM */}
                <span className="text-[9px] uppercase tracking-[0.12em]">
                  {languages[language].label}
                </span>

                {/* CHECK */}
                {currentLanguage === language && (
                  <span className="ml-auto text-[10px]">✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
