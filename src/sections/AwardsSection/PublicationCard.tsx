import { useTranslation } from "react-i18next";

type BookTranslation = {
  year: string;
  title: string;
  detail: string;
};

type Book = {
  key: string;
};

type Props = {
  book: Book;
  index: number;
};

const PublicationCard = ({ book, index }: Props) => {
  const { t } = useTranslation();

  const data = t(`awards.books.${book.key}`, {
    returnObjects: true,
  }) as BookTranslation;

  return (
    <article
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-2xl
        border
        border-[#f3f009]
        bg-[#f3f009]
        p-5
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(243,240,9,0.08)]
        sm:p-6
      "
    >
      {/* =========================================
          DÉCORATION
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          border
          border-black/[0.06]
          transition-transform
          duration-700
          group-hover:scale-125
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-5
          -top-5
          h-20
          w-20
          rounded-full
          border
          border-black/[0.05]
        "
      />

      {/* =========================================
          ANNÉE + NUMÉRO
      ========================================== */}

      <div className="relative z-10 mb-6 flex items-center justify-between">
        <span
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-black/70
          "
        >
          {data.year}
        </span>

        <span
          className="
            text-xs
            font-medium
            tabular-nums
            text-black/30
          "
        >
          0{index + 1}
        </span>
      </div>

      {/* =========================================
          TITRE
      ========================================== */}

      <h4
        className="
          relative
          z-10
          max-w-sm
          text-lg
          font-semibold
          leading-snug
          tracking-[-0.01em]
          text-black
          sm:text-xl
        "
      >
        {data.title}
      </h4>

      {/* =========================================
          DESCRIPTION
      ========================================== */}

      <p
        className="
          relative
          z-10
          mt-4
          text-sm
          leading-7
          text-black/60
        "
      >
        {data.detail}
      </p>

      {/* =========================================
          LIGNE DÉCORATIVE
      ========================================== */}

      <div
        className="
          relative
          z-10
          mt-7
          h-px
          w-10
          bg-black/40
          transition-all
          duration-500
          group-hover:w-20
          group-hover:bg-black/70
        "
      />
    </article>
  );
};

export default PublicationCard;
