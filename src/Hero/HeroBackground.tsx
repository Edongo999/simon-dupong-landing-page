import "./HeroBackground.css";

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="hero-background pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Halo lumineux principal */}
      <div className="hero-gold-halo" />

      {/* Halo secondaire */}
      <div className="hero-gold-glow" />

      {/* Lignes géométriques discrètes */}
      <svg
        className="hero-geometric-lines"
        viewBox="0 0 1000 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <circle cx="720" cy="400" r="190" stroke="#f3f009" strokeWidth="0.7" />
        <circle cx="720" cy="400" r="260" stroke="#f3f009" strokeWidth="0.5" />
        <circle cx="720" cy="400" r="330" stroke="#f3f009" strokeWidth="0.4" />
        <path
          d="M520 100 L900 480 L700 700"
          stroke="#f3f009"
          strokeWidth="0.6"
        />
        <path d="M600 40 L960 400" stroke="#f3f009" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
