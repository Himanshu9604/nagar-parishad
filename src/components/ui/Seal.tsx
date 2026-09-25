import { cn } from "@/lib/utils";

/**
 * Decorative council seal (inline SVG, no network request).
 * Replace with the official Nagar Parishad logo by swapping this component's
 * body for <Image src="/images/logo.png" … /> once the logo file is available.
 */
export function Seal({ className, title = "Nagar Parishad Dhamangaon Railway" }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={cn("shrink-0", className)} role="img" aria-label={title}>
      <defs>
        <linearGradient id="seal-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5ebcc" />
          <stop offset="0.5" stopColor="#d4a93f" />
          <stop offset="1" stopColor="#a47522" />
        </linearGradient>
        <radialGradient id="seal-navy" cx="0.5" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#2a4686" />
          <stop offset="1" stopColor="#0f1d3d" />
        </radialGradient>
        <path id="seal-arc-top" d="M 20 60 A 40 40 0 0 1 100 60" />
        <path id="seal-arc-bottom" d="M 24 64 A 36 36 0 0 0 96 64" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="url(#seal-gold)" />
      <circle cx="60" cy="60" r="53" fill="url(#seal-navy)" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="#d4a93f" strokeWidth="0.8" strokeDasharray="2 2.4" />
      <text fontSize="8.2" fontWeight="700" letterSpacing="1.6" fill="#ead597" fontFamily="Georgia, serif">
        <textPath href="#seal-arc-top" startOffset="50%" textAnchor="middle">
          NAGAR PARISHAD
        </textPath>
      </text>
      <text fontSize="7.2" fontWeight="600" letterSpacing="1.2" fill="#ead597" fontFamily="Georgia, serif">
        <textPath href="#seal-arc-bottom" startOffset="50%" textAnchor="middle">
          DHAMANGAON RLY.
        </textPath>
      </text>
      {/* Stylised municipal building with dome */}
      <g fill="url(#seal-gold)">
        <path d="M60 36 c-6 0 -10 4.6 -10 10 h20 c0 -5.4 -4 -10 -10 -10z" />
        <rect x="59.2" y="31" width="1.6" height="5" />
        <circle cx="60" cy="30.4" r="1.4" />
        <rect x="44" y="46.5" width="32" height="2.6" rx="0.6" />
        <rect x="46" y="50" width="3" height="14" />
        <rect x="52" y="50" width="3" height="14" />
        <rect x="58.5" y="50" width="3" height="14" />
        <rect x="65" y="50" width="3" height="14" />
        <rect x="71" y="50" width="3" height="14" />
        <rect x="41" y="64.5" width="38" height="2.8" rx="0.6" />
        <rect x="38" y="68.2" width="44" height="2.6" rx="0.6" />
      </g>
      {/* Railway line motif */}
      <g stroke="#ead597" strokeWidth="1" strokeLinecap="round">
        <line x1="40" y1="76" x2="80" y2="76" />
        <line x1="40" y1="79.5" x2="80" y2="79.5" />
        {[43, 48, 53, 58, 63, 68, 73, 78].map((x) => (
          <line key={x} x1={x} y1="75" x2={x} y2="80.5" strokeWidth="0.8" />
        ))}
      </g>
      <circle cx="22" cy="60" r="1.6" fill="#ead597" />
      <circle cx="98" cy="60" r="1.6" fill="#ead597" />
    </svg>
  );
}
