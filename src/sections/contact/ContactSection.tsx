import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
  Facebook,
  Linkedin,
} from "lucide-react";

import SectionHeading from "../SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ContactSection() {
  const { t } = useTranslation();

  const phonePrimary = t("contact.phonePrimary");
  const phoneSecondary = t("contact.phoneSecondary");
  const email = t("contact.email");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0d0d0a] px-6 py-16 sm:px-10 lg:px-20 lg:py-12"
    >
      {/* Lumières d'ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#f3f009]/[0.035] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#f3f009]/[0.025] blur-[160px]"
      />

      {/* Lignes verticales décoratives */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-white/[0.04] lg:left-10 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-0 hidden h-full w-px bg-white/[0.04] lg:right-10 lg:block"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <ScrollReveal
          direction="up"
          distance={22}
          duration={1.25}
          amount={0.08}
        >
          <SectionHeading
            number={t("contact.number")}
            eyebrow={t("contact.eyebrow")}
            title={t("contact.title")}
            description={t("contact.description")}
          />
        </ScrollReveal>

        {/* Bloc principal */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
          {/* Message principal */}
          <ScrollReveal
            direction="left"
            distance={24}
            duration={1.3}
            amount={0.08}
            className="h-full"
          >
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#080808] p-8 sm:p-12 lg:p-16">
              {/* Grand numéro */}
              <span
                aria-hidden="true"
                className="absolute -right-4 -top-16 select-none text-[180px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[240px]"
              >
                {t("contact.number")}
              </span>

              {/* Repères */}
              <span
                aria-hidden="true"
                className="absolute left-6 top-6 h-10 w-10 border-l border-t border-[#f3f009]/60"
              />

              <span
                aria-hidden="true"
                className="absolute bottom-6 right-6 h-10 w-10 border-b border-r border-[#f3f009]/30"
              />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <ScrollReveal
                    direction="up"
                    distance={14}
                    delay={0.12}
                    duration={1}
                    amount={0.08}
                  >
                    <span className="mb-6 block text-[10px] font-medium uppercase tracking-[0.3em] text-[#f3f009]">
                      {t("contact.statementEyebrow")}
                    </span>
                  </ScrollReveal>

                  <ScrollReveal
                    direction="up"
                    distance={18}
                    delay={0.18}
                    duration={1.15}
                    amount={0.08}
                  >
                    <h3 className="max-w-4xl mt-20 sm:mt-23 text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                      {t("contact.headline")}
                    </h3>
                  </ScrollReveal>
                </div>

                <div className="mt-12 flex items-end justify-between gap-8">
                  <ScrollReveal
                    direction="up"
                    distance={14}
                    delay={0.25}
                    duration={1.1}
                    amount={0.08}
                  >
                    <p className="max-w-md text-sm leading-7 text-white/40">
                      {t("contact.statement")}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal
                    direction="up"
                    distance={14}
                    delay={0.32}
                    duration={1.1}
                    amount={0.08}
                  >
                    <div
                      aria-hidden="true"
                      className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#f3f009]/30 sm:flex"
                    >
                      <ArrowUpRight className="h-5 w-5 text-[#f3f009]" />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Coordonnées */}
          <ScrollReveal
            direction="right"
            distance={24}
            delay={0.1}
            duration={1.3}
            amount={0.08}
            className="h-full"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#f3f009]/20 bg-[#f3f009] text-black">
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                {/* En-tête */}
                <div>
                  <ScrollReveal
                    direction="up"
                    distance={14}
                    delay={0.16}
                    duration={1}
                    amount={0.08}
                  >
                    <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.3em] text-black/50">
                      {t("contact.contactEyebrow")}
                    </span>
                  </ScrollReveal>

                  <ScrollReveal
                    direction="up"
                    distance={14}
                    delay={0.22}
                    duration={1}
                    amount={0.08}
                  >
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-black/15">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                  </ScrollReveal>

                  <ScrollReveal
                    direction="up"
                    distance={16}
                    delay={0.28}
                    duration={1.1}
                    amount={0.08}
                  >
                    <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                      {t("contact.contactTitle")}
                    </h3>
                  </ScrollReveal>
                </div>

                {/* Informations */}
                <div className="mt-10 space-y-6">
                  {/* Téléphone */}
                  <ScrollReveal
                    direction="up"
                    distance={14}
                    delay={0.34}
                    duration={1.05}
                    amount={0.08}
                  >
                    <div>
                      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
                        {t("contact.phoneLabel")}
                      </span>

                      <div className="space-y-2">
                        <a
                          href={`tel:${phonePrimary.replace(/\s/g, "")}`}
                          className="group flex items-center gap-3 text-sm font-semibold transition-opacity duration-300 hover:opacity-60 sm:text-base"
                        >
                          <Phone className="h-4 w-4 shrink-0" />

                          <span>{phonePrimary}</span>

                          <ArrowUpRight className="ml-auto h-4 w-4 opacity-50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>

                        <a
                          href={`tel:${phoneSecondary.replace(/\s/g, "")}`}
                          className="group flex items-center gap-3 text-sm font-semibold transition-opacity duration-300 hover:opacity-60 sm:text-base"
                        >
                          <Phone className="h-4 w-4 shrink-0" />

                          <span>{phoneSecondary}</span>

                          <ArrowUpRight className="ml-auto h-4 w-4 opacity-50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* E-mail */}
                  <ScrollReveal
                    direction="up"
                    distance={14}
                    delay={0.4}
                    duration={1.05}
                    amount={0.08}
                  >
                    <div>
                      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
                        {t("contact.emailLabel")}
                      </span>

                      <a
                        href={`mailto:${email}`}
                        className="group flex items-center gap-3 break-all text-sm font-semibold transition-opacity duration-300 hover:opacity-60 sm:text-base"
                      >
                        <Mail className="h-4 w-4 shrink-0" />

                        <span>{email}</span>

                        <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 opacity-50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </ScrollReveal>

                  {/* Réseaux sociaux */}
                  <ScrollReveal
                    direction="up"
                    distance={14}
                    delay={0.46}
                    duration={1.05}
                    amount={0.08}
                  >
                    <div>
                      <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
                        {t("contact.socialLabel")}
                      </span>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={t("contact.facebookLabel")}
                          className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-all duration-300 hover:border-black hover:bg-black hover:text-[#f3f009]"
                        >
                          <Facebook className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                        </a>

                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={t("contact.linkedinLabel")}
                          className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-all duration-300 hover:border-black hover:bg-black hover:text-[#f3f009]"
                        >
                          <Linkedin className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Disponibilité */}
              <div className="border-t border-black/15 px-8 py-5 sm:px-10">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.15em]">
                    {t("contact.availability")}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
