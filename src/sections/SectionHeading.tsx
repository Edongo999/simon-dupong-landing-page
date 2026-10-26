type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-3 max-w-3xl">
      {/* Numéro et catégorie */}
      <div className="mb-5 flex items-center gap-3">
        <span className="text-sm font-medium text-[#f3f009]">{number}</span>

        <span className="h-px w-10 bg-[#f3f009]/60" />

        <span className="text-xs uppercase tracking-[0.25em] text-white/50">
          {eyebrow}
        </span>
      </div>

      {/* Titre principal */}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      {/* Description facultative */}
      {/* Description facultative */}
      {description && (
        <p
          className="
      mt-5
      w-full
      max-w-2xl
      text-justify
      text-base
      leading-relaxed
      tracking-normal
      text-white/60
      hyphens-auto
      [overflow-wrap:break-word]
      px-0
      sm:text-lg
      sm:leading-7
      md:max-w-lg
    "
        >
          {description}
        </p>
      )}
    </div>
  );
}
