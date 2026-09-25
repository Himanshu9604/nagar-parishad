/** Decorative silhouette of the town: council hall, temple, water tank, trees and a train. */
export function TownSkyline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true" fill="currentColor">
      {/* Trees */}
      <circle cx="70" cy="150" r="30" />
      <circle cx="110" cy="160" r="22" />
      <circle cx="1350" cy="148" r="32" />
      <circle cx="1395" cy="162" r="22" />
      {/* Water tank */}
      <rect x="180" y="70" width="70" height="38" rx="6" />
      <path d="M185 108 L175 185 h8 L200 108z M245 108 L262 185 h-8 L230 108z" />
      <rect x="206" y="108" width="18" height="77" />
      {/* Temple shikhara */}
      <path d="M360 185 V130 h14 l26 -60 26 60 h14 v55z" />
      <path d="M398 62 h4 v-14 h-4z" />
      <path d="M402 48 l14 5 -14 5z" />
      {/* Council hall with dome */}
      <path d="M560 185 V120 h320 v65z" />
      <path d="M620 120 V95 h200 v25z" />
      <path d="M660 95 a60 50 0 0 1 120 0z" />
      <rect x="717" y="30" width="6" height="18" />
      <circle cx="720" cy="28" r="5" />
      <rect x="540" y="115" width="360" height="8" rx="2" />
      {/* Houses */}
      <path d="M950 185 V140 l40 -30 40 30 v45z" />
      <path d="M1040 185 V130 h70 v55z" />
      <path d="M1120 185 V150 l30 -22 30 22 v35z" />
      <path d="M1200 185 V120 h50 v65z" />
      {/* Railway track + train */}
      <rect x="0" y="185" width="1440" height="35" />
      <g className="opacity-90">
        <rect x="1000" y="160" width="130" height="24" rx="5" />
        <rect x="1136" y="160" width="130" height="24" rx="5" />
        <path d="M1272 184 V160 h62 q24 0 30 24z" />
      </g>
    </svg>
  );
}
