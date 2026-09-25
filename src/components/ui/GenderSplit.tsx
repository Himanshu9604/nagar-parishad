import type { TKey } from "@/i18n/dictionaries";
import { T } from "@/i18n/T";
import { cn, formatNumber, percent } from "@/lib/utils";

export const GENDER_COLORS = {
  male: "#2a4686",
  female: "#c1922b",
  other: "#0f766e",
} as const;

interface Props {
  titleKey: TKey;
  male: number;
  female: number;
  other?: number;
  className?: string;
}

/** Donut chart + legend showing a male / female (/ third gender) split. Pure SVG, no chart library. */
export function GenderSplit({ titleKey, male, female, other = 0, className }: Props) {
  const total = male + female + other;
  const r = 52;
  const c = 2 * Math.PI * r;
  const segments = [
    { key: "male" as const, value: male, label: "ward.male" as const },
    { key: "female" as const, value: female, label: "ward.female" as const },
    ...(other > 0 ? [{ key: "other" as const, value: other, label: "ward.other" as const }] : []),
  ];

  let offset = 0;
  return (
    <div className={cn("card-royal p-6", className)}>
      <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gold-700">
        <T k={titleKey} />
      </h3>
      <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row">
        <div className="relative h-36 w-36 shrink-0">
          <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="70" cy="70" r={r} fill="none" stroke="#eef3fb" strokeWidth="18" />
            {segments.map((s) => {
              const len = total ? (s.value / total) * c : 0;
              const el = (
                <circle
                  key={s.key}
                  cx="70"
                  cy="70"
                  r={r}
                  fill="none"
                  stroke={GENDER_COLORS[s.key]}
                  strokeWidth="18"
                  strokeDasharray={`${Math.max(len - 1.5, 0)} ${c}`}
                  strokeDashoffset={-offset}
                />
              );
              offset += len;
              return el;
            })}
          </svg>
          <div className="absolute inset-0 grid place-items-center text-center">
            <div>
              <p className="font-display text-xl font-semibold text-navy-900">{formatNumber(total)}</p>
              <p className="text-[0.65rem] uppercase tracking-wider text-navy-500">
                <T k="ward.total" />
              </p>
            </div>
          </div>
        </div>

        <ul className="w-full space-y-3">
          {segments.map((s) => (
            <li key={s.key}>
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="inline-flex items-center gap-2 text-navy-700">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: GENDER_COLORS[s.key] }} aria-hidden="true" />
                  <T k={s.label} />
                </span>
                <span className="font-semibold text-navy-900">
                  {formatNumber(s.value)}
                  <span className="ml-2 text-xs font-normal text-navy-500">{percent(s.value, total)}</span>
                </span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-navy-50">
                <div
                  className="h-full rounded-full"
                  style={{ width: percent(s.value, total), background: GENDER_COLORS[s.key] }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Thin stacked male/female bar used in tables. */
export function GenderBar({ male, female, other = 0 }: { male: number; female: number; other?: number }) {
  const total = male + female + other;
  return (
    <div className="flex h-2 w-full min-w-[6rem] overflow-hidden rounded-full bg-navy-50" aria-hidden="true">
      <div style={{ width: percent(male, total), background: GENDER_COLORS.male }} />
      <div style={{ width: percent(female, total), background: GENDER_COLORS.female }} />
      {other > 0 && <div style={{ width: percent(other, total), background: GENDER_COLORS.other }} />}
    </div>
  );
}
