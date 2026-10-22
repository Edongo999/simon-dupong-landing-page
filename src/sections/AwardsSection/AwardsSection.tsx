import { useState } from "react";
import { useTranslation } from "react-i18next";

import SectionHeading from "@/sections/SectionHeading";
import DistinctionCard from "@/sections/AwardsSection/DistinctionCard";
import PublicationCard from "@/sections/AwardsSection/PublicationCard";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AwardsPublicationsSymbol from "@/sections/AwardsSection/AwardsPublicationsSymbol";
import ImageLightbox from "@/sections/AwardsSection/ImageLightbox";

const distinctions = [
  {
    key: "russianLanguage",
    images: [
      "/Images/awards/simon23.webp",
      "/Images/awards/simon21.webp",
      "/Images/awards/simon22.webp",
    ],
    columns: 3,
  },
  {
    key: "workMedals",
    images: ["/Images/awards/simon26.webp", "/Images/awards/simon27.webp"],
    columns: 2,
  },
  {
    key: "cameroonianMerit",
    images: ["/Images/awards/simon24.webp", "/Images/awards/simon25.webp"],
    columns: 2,
  },
];

const books = [
  {
    key: "pereNonDeclare",
  },
  {
    key: "puberteFinanciere",
  },
  {
    key: "virusAccueil",
  },
];

const AwardsSection = () => {
  const { t } = useTranslation();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section
      id="awards"
      className="relative overflow-hidden bg-[#0d0d0a] py-10 sm:py-12"
    >
      {/* =========================================
        SYMBOLE — DISTINCTIONS & PUBLICATIONS
    ========================================== */}

      <AwardsPublicationsSymbol />
      {/* =========================================
          AMBIANCE DE FOND
      ========================================== */}

      {/* Halo jaune — coin supérieur droit */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-[8%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#f3f009]/[0.025]
          blur-[130px]
        "
      />

      {/* Halo clair — centre gauche */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[42%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-white/[0.012]
          blur-[120px]
        "
      />

      {/* Halo jaune inférieur */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-48
          right-[20%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#f3f009]/[0.018]
          blur-[140px]
        "
      />

      {/* =========================================
          CONTENU
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =========================================
            HEADING
        ========================================== */}

        <ScrollReveal direction="up" distance={26} duration={1.1} amount={0.12}>
          <SectionHeading
            number="05"
            eyebrow={t("awards.eyebrow")}
            title={t("awards.title")}
            description={t("awards.description")}
          />
        </ScrollReveal>

        {/* =========================================
            DISTINCTIONS
        ========================================== */}

        <div className="mt-16 sm:mt-20">
          <ScrollReveal
            direction="left"
            distance={28}
            duration={1.05}
            amount={0.12}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#f3f009]" />

              <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                {t("awards.distinctionsTitle")}
              </h3>
            </div>
          </ScrollReveal>

          {/* =========================================
              CARTES DISTINCTIONS — CASCADE
          ========================================== */}

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {distinctions.map((distinction, index) => (
              <ScrollReveal
                key={distinction.key}
                direction={index % 2 === 0 ? "left" : "right"}
                distance={28}
                delay={index * 0.16}
                duration={1.05}
                amount={0.12}
                className={
                  index === distinctions.length - 1 ? "lg:col-span-2" : ""
                }
              >
                <DistinctionCard
                  distinction={distinction}
                  index={index}
                  onImageClick={setLightboxImage}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* =========================================
            PUBLICATIONS
        ========================================== */}

        <div className="mt-10 sm:mt-8">
          <ScrollReveal
            direction="right"
            distance={28}
            duration={1.05}
            amount={0.12}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#f3f009]" />

              <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                {t("awards.publicationsTitle")}
              </h3>
            </div>
          </ScrollReveal>

          {/* =========================================
              PUBLICATIONS — CASCADE
          ========================================== */}

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {books.map((book, index) => (
              <ScrollReveal
                key={book.key}
                direction="up"
                distance={24}
                delay={index * 0.16}
                duration={1}
                amount={0.12}
                scale
              >
                <PublicationCard book={book} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* =========================================
            NOTE ÉDITORIALE
        ========================================== */}

        <ScrollReveal
          direction="up"
          distance={20}
          delay={0.1}
          duration={1}
          amount={0.12}
          className="mt-10 sm:mt-12"
        >
          <div className="border-t border-white/10 pt-6">
            <p className="max-w-3xl text-sm leading-7 text-white/35">
              {t("awards.editorialNote")}
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ImageLightbox
        image={lightboxImage}
        alt={t("awards.lightboxAlt")}
        onClose={() => setLightboxImage(null)}
      />
    </section>
  );
};

export default AwardsSection;
