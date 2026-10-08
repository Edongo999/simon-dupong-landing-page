import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

interface HeroNameProps {
  progress: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const easeOut = (value: number) => 1 - Math.pow(1 - value, 3);

export default function HeroName({ progress }: HeroNameProps) {
  const { t } = useTranslation();

  const firstName = t("hero.firstName");
  const lastName = t("hero.lastName");

  const renderWord = (word: string, wordIndex: number) => {
    return (
      <div className="flex" key={`${word}-${wordIndex}`}>
        {word.split("").map((letter, index) => {
          const globalIndex = wordIndex * 5 + index;

          const start = 0.03 + globalIndex * 0.025;

          const localProgress = clamp((progress - start) / 0.3, 0, 1);

          const p = easeOut(localProgress);

          const direction = globalIndex % 2 === 0 ? -1 : 1;

          const x = direction * (70 + globalIndex * 10) * (1 - p);

          const y =
            (globalIndex % 3 === 0 ? -60 : globalIndex % 3 === 1 ? 60 : -35) *
            (1 - p);

          const rotation = direction * 10 * (1 - p);

          return (
            <span
              key={`${letter}-${globalIndex}`}
              className="
                inline-block
                font-sans
                text-[16vw]
                font-semibold
                uppercase
                leading-[0.72]
                tracking-[-0.09em]
                text-white
                md:text-[10vw]
                lg:text-[8vw]
              "
              style={{
                transform: `
                  translate3d(
                    ${x}px,
                    ${y}px,
                    0
                  )
                  rotate(${rotation}deg)
                `,
                opacity: 0.15 + p * 0.85,
                filter: `blur(${(1 - p) * 8}px)`,
              }}
            >
              {letter}
            </span>
          );
        })}
      </div>
    );
  };

  const sloganProgress = clamp((progress - 0.18) / 0.25, 0, 1);

  const sloganOpacity = easeOut(sloganProgress);

  return (
    <div className="w-full py-10 md:py-12 lg:py-16">
      {/* LABEL */}
      <div
        className="mb-7 flex items-center gap-3"
        style={{
          opacity: 0.35 + progress * 0.65,
        }}
      >
        <span className="h-px w-8 bg-[#f3f009]" />

        <span className="text-[9px] uppercase tracking-[0.35em] text-white/50">
          {t("hero.entrepreneur")}
        </span>
      </div>

      {/* NOM */}
      <div className="relative">
        {/* SIMON */}
        {renderWord(firstName, 0)}

        {/* DUPONG */}
        <div className="relative mt-2">
          {renderWord(lastName, 1)}

          {/* LIGNE JAUNE */}
          <div
            className="mt-8 h-px bg-[#f3f009]"
            style={{
              width: `${sloganProgress * 110}px`,
              opacity: sloganOpacity,
            }}
          />
        </div>
      </div>

      {/* SLOGAN */}
      <div
        className="mt-6 max-w-md"
        style={{
          opacity: sloganOpacity,
          transform: `
            translateY(
              ${(1 - sloganProgress) * 25}px
            )
          `,
        }}
      >
        <h2 className="font-serif text-2xl italic leading-tight text-white/90 md:text-3xl lg:text-4xl">
          {t("hero.sloganLine1")}
          <br />
          {t("hero.sloganLine2")}
          <br />
          {t("hero.sloganLine3")}
        </h2>

        <p className="mt-5 max-w-sm text-xs leading-6 tracking-wide text-white/50 md:text-sm">
          {t("hero.description")}
        </p>
      </div>

      {/* CTA */}
      <div
        className="mt-8"
        style={{
          opacity: sloganOpacity,
          transform: `
            translateY(
              ${(1 - sloganProgress) * 20}px
            )
          `,
        }}
      >
        <a
          href="#apropos"
          className="
            group
            inline-flex
            items-center
            gap-4
            text-xs
            uppercase
            tracking-[0.2em]
            text-white/70
          "
        >
          <span
            className="
    flex
    h-10
    w-10
    shrink-0
    items-center
    justify-center
    rounded-full
    border
    border-[#f3f009]
    bg-[#f3f009]
    text-black
    transition-all
    duration-300
    group-hover:bg-transparent
    group-hover:text-[#f3f009]
  "
          >
            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>

          <span className="font-medium transition-colors group-hover:text-white">
            {t("hero.cta")}
          </span>
        </a>
      </div>
    </div>
  );
}
