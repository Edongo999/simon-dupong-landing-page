import { ExternalLink } from "lucide-react";

export default function SiteCredit() {
  return (
    <div className="w-full border-t border-white/[0.08] bg-[#111111]">
      <a
        href="https://tonportfolio.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter le portfolio de Frank Landry"
        className="
          group
          flex
          min-h-[32px]
          w-full
          items-center
          justify-center
          gap-2
          px-4
          text-center
          transition-colors
          duration-300
        "
      >
        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-[#f5f5f0]">
          Conçu & développé par
        </span>

        <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#f5f5f0] transition-colors duration-300 group-hover:text-[#f3f009]">
          Frank Landry
        </span>

        <span className="h-3 w-px bg-white/20" />

        <span className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#f5f5f0] transition-colors duration-300 group-hover:text-[#f3f009]">
          Visiter mon portfolio
        </span>

        <ExternalLink
          size={10}
          strokeWidth={2}
          className="
            text-[#f5f5f0]
            transition-all
            duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            group-hover:text-[#f3f009]
          "
        />
      </a>
    </div>
  );
}
