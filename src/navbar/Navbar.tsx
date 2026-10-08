import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const menuItems = [
  { key: "home", href: "#accueil" },
  { key: "about", href: "#apropos" },
  { key: "journey", href: "#parcours" },
  { key: "activities", href: "#activites" },
  { key: "vision", href: "#vision" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-[100] w-full">
      <nav className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-16">
        {/* LOGO */}
        <motion.a
          href="#accueil"
          className="group relative flex items-center text-3xl font-semibold tracking-[-0.08em] text-white"
          whileHover={{
            scale: 1.08,
            y: -1,
          }}
          whileTap={{
            scale: 0.94,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 18,
          }}
        >
          <span className="relative">
            S
            <span className="text-[#f3f009] transition-colors duration-300 group-hover:text-white">
              D
            </span>
            <span
              className="
                absolute
                -bottom-1
                left-0
                h-[2px]
                w-0
                bg-[#f3f009]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </span>
        </motion.a>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-7 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                group relative
                text-xs uppercase
                tracking-[0.18em]
                text-white/80
                transition-colors duration-300
                hover:text-white
              "
            >
              {t(`navbar.${item.key}`)}

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-px
                  w-0
                  bg-[#f3f009]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>

        {/* DROITE DESKTOP */}
        <div className="hidden items-center gap-5 md:flex">
          {/* LANGUE */}
          <LanguageSelector />

          {/* CONTACT */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              border border-[#f3f009]
              bg-[#f3f009]
              px-5 py-3
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-black
              transition-all duration-300
              hover:bg-transparent
              hover:text-[#f3f009]
            "
          >
            {t("navbar.contactButton")}
          </motion.a>
        </div>

        {/* MOBILE */}
        <div className="flex items-center gap-4 md:hidden">
          {/* LANGUE */}
          <LanguageSelector />

          {/* MENU BURGER */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`
                h-px w-7 bg-white
                transition-transform duration-300
                ${open ? "translate-y-[4px] rotate-45" : ""}
              `}
            />

            <span
              className={`
                h-px w-7 bg-white
                transition-opacity duration-300
                ${open ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                h-px w-7 bg-white
                transition-transform duration-300
                ${open ? "-translate-y-[4px] -rotate-45" : ""}
              `}
            />
          </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <div
        className={`
          absolute
          left-0
          top-20
          w-full
          border-y border-white/10
          bg-[#030303]/95
          backdrop-blur-xl
          transition-all duration-500
          md:hidden
          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0"
          }
        `}
      >
        <div className="flex flex-col px-8 py-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleClick}
              className="
                border-b border-white/10
                py-5
                text-sm
                uppercase
                tracking-[0.2em]
                text-white/70
                transition-colors
                hover:text-[#f3f009]
              "
            >
              {t(`navbar.${item.key}`)}
            </a>
          ))}

          {/* CONTACT MOBILE */}
          <a
            href="#contact"
            onClick={handleClick}
            className="
              mt-6
              border border-[#f3f009]
              bg-[#f3f009]
              px-5 py-4
              text-center
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-black
              transition-all duration-300
              hover:bg-transparent
              hover:text-[#f3f009]
            "
          >
            {t("navbar.contactButton")}
          </a>
        </div>
      </div>
    </header>
  );
}
