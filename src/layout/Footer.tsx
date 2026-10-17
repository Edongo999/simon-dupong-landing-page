import { useTranslation } from "react-i18next";
import { Facebook, Linkedin } from "lucide-react";

import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Footer() {
  const { t } = useTranslation();

  const navigation = [
    { label: t("footer.navigation.home"), href: "#accueil" },
    { label: t("footer.navigation.biography"), href: "#biographie" },
    { label: t("footer.navigation.journey"), href: "#engagements" },
    { label: t("footer.navigation.engagements"), href: "#engagements" },
    { label: t("footer.navigation.impact"), href: "#impact" },
    { label: t("footer.navigation.awards"), href: "#awards" },
    { label: t("footer.navigation.gallery"), href: "#galerie" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#f3f009] px-6 py-8 text-black sm:px-10 lg:px-20 lg:py-10">
      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal direction="up" distance={16} duration={1.1} amount={0.05}>
          {/* Partie principale */}
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            {/* Identité */}
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/25">
                <span className="text-xs font-bold tracking-[-0.03em]">SD</span>
              </div>

              <div>
                <h2 className="text-lg font-semibold tracking-[-0.02em]">
                  {t("footer.name")}
                </h2>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-black/45">
                  {t("footer.identity")}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav
              aria-label={t("footer.navigationAriaLabel")}
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:justify-start"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-black/60 transition-colors duration-300 hover:text-black"
                >
                  {item.label}

                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Réseaux */}
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label={t("footer.facebookLabel")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20 transition-all duration-300 hover:bg-black hover:text-[#f3f009]"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <div className="mx-1 h-6 w-px bg-black/15" />

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label={t("footer.linkedinLabel")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20 transition-all duration-300 hover:bg-black hover:text-[#f3f009]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Bas du footer */}
          <div className="mt-7 flex flex-col items-center gap-2 border-t border-black/15 pt-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-[10px] font-medium text-black/45">
              {t("footer.copyright")}
            </p>

            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
              {t("footer.signature")}
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Grand SD décoratif */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-1
          right-10
          hidden
          select-none
          text-[220px]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-black/[0.055]
          lg:block
        "
      >
        SD
      </span>
    </footer>
  );
}
