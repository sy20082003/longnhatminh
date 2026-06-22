const palettes = [
  { bg: "#1a35a8", accent: "#fde685", base: "#0c1840" },
  { bg: "#1f52ef", accent: "#f7bd24", base: "#142566" },
  { bg: "#142566", accent: "#fbd34d", base: "#0c1840" },
  { bg: "#3470fa", accent: "#fde685", base: "#1a35a8" },
];

export default function ProjectIllustration({
  variant,
  paletteIndex,
  className = "",
}: {
  variant: number;
  paletteIndex: number;
  className?: string;
}) {
  const p = palettes[paletteIndex % palettes.length];

  return (
    <svg viewBox="0 0 400 300" className={className}>
      <rect width="400" height="300" fill={p.bg} />
      {variant === 0 && (
        <g>
          <rect x="40" y="150" width="320" height="110" fill={p.base} />
          <rect x="160" y="60" width="80" height="200" fill={p.base} />
          <line x1="200" y1="30" x2="200" y2="60" stroke={p.accent} strokeWidth="4" />
          <line x1="140" y1="80" x2="260" y2="80" stroke={p.accent} strokeWidth="4" />
          <line x1="155" y1="120" x2="245" y2="120" stroke={p.accent} strokeWidth="4" />
          <circle cx="140" cy="80" r="5" fill={p.accent} />
          <circle cx="260" cy="80" r="5" fill={p.accent} />
        </g>
      )}
      {variant === 1 && (
        <g>
          <polygon points="80,260 200,80 320,260" fill="none" stroke={p.accent} strokeWidth="3" />
          <rect x="60" y="260" width="280" height="20" fill={p.base} />
          <line x1="140" y1="170" x2="260" y2="170" stroke={p.accent} strokeWidth="3" />
          <line x1="170" y1="220" x2="230" y2="220" stroke={p.accent} strokeWidth="3" />
          <circle cx="200" cy="80" r="6" fill={p.accent} />
        </g>
      )}
      {variant === 2 && (
        <g>
          <rect x="50" y="130" width="130" height="130" rx="6" fill={p.base} />
          <rect x="220" y="130" width="130" height="130" rx="6" fill={p.base} />
          <rect x="70" y="150" width="40" height="50" fill={p.accent} opacity="0.7" />
          <rect x="120" y="150" width="40" height="50" fill={p.accent} opacity="0.7" />
          <rect x="240" y="150" width="40" height="50" fill={p.accent} opacity="0.7" />
          <rect x="290" y="150" width="40" height="50" fill={p.accent} opacity="0.7" />
          <line x1="180" y1="100" x2="220" y2="100" stroke={p.accent} strokeWidth="3" />
        </g>
      )}
    </svg>
  );
}
