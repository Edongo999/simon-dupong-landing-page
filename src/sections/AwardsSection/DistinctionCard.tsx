import { useTranslation } from "react-i18next";

import ScrollReveal from "@/components/animations/ScrollReveal";

type DistinctionTranslation = {
  date: string;
  title: string;
  detail: string;
};

type Distinction = {
  key: string;
  images: string[];
  columns: number;
};

type Props = {
  distinction: Distinction;
  index: number;
  onImageClick: (src: string) => void;
};

const DistinctionCard = ({ distinction, index, onImageClick }: Props) => {
  const { t } = useTranslation();

  const data = t(`awards.distinctions.${distinction.key}`, {
    returnObjects: true,
  }) as DistinctionTranslation;

  return (
    <article
      className={`group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] transition-all duration-500 hover:border-[#f3f009]/20 ${
        index === 0 ? "lg:col-span-2" : ""
      }`}
    >
      {/* Images */}
      <div
        className={`grid gap-2 overflow-hidden border-b border-white/10 bg-[#080808] p-2 ${
          distinction.columns === 3 ? "grid-cols-3" : "grid-cols-2"
        }`}
      >
        {distinction.images.map((image, imageIndex) => (
          <ScrollReveal
            key={image}
            direction="up"
            distance={32}
            delay={0.18 + imageIndex * 0.18}
            duration={1.15}
            amount={0.08}
            scale
            className="h-full"
          >
            <button
              type="button"
              onClick={() => onImageClick(image)}
              className="group/image relative block h-[190px] w-full overflow-hidden rounded-lg bg-black/20 sm:h-[230px]"
              aria-label={`Voir l'image ${imageIndex + 1}`}
            >
              <img
                src={image}
                alt={`${data.title} - ${imageIndex + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover/image:scale-[1.04]"
                loading="lazy"
              />

              <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/image:bg-black/35 group-hover/image:opacity-100">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                  >
                    <path
                      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M21 21L16.65 16.65"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {/* Contenu */}
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-7 bg-[#f3f009]" />

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#f3f009]/80">
            {data.date}
          </span>
        </div>

        <h4 className="max-w-3xl text-lg font-medium leading-snug text-white sm:text-xl">
          {data.title}
        </h4>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/50">
          {data.detail}
        </p>
      </div>
    </article>
  );
};

export default DistinctionCard;
