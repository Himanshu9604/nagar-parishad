import type { LText, Locale } from "@/types";

type ClassValue = string | false | null | undefined;

/** Tiny classnames joiner (avoids an extra dependency). */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Resolve localised text with English fallback. */
export function lt(text: LText | string | undefined, locale: Locale = "en"): string {
  if (!text) return "";
  if (typeof text === "string") return text;
  return text[locale] ?? text.en;
}

const LOCALE_TAG: Record<Locale, string> = {
  en: "en-IN",
  mr: "mr-IN",
  hi: "hi-IN",
};

const EN_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Formats an ISO date. English uses a fixed format so server-rendered HTML
 * always matches the browser (avoids ICU differences during hydration).
 */
export function formatDate(iso: string, locale: Locale = "en"): string {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  if (locale === "en") {
    return `${String(d.getDate()).padStart(2, "0")} ${EN_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  }
  return new Intl.DateTimeFormat(LOCALE_TAG[locale], {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}

export function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date));
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}

export function telHref(number: string): string {
  return `tel:${number.replace(/[^\d+]/g, "")}`;
}

/**
 * Indian digit grouping (1,23,456) done by hand so server and browser output
 * are identical (no ICU differences during hydration).
 */
export function formatNumber(n: number): string {
  const [int, dec] = String(Math.abs(n)).split(".");
  const last3 = int.slice(-3);
  const rest = int.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  const grouped = rest ? `${rest},${last3}` : last3;
  return `${n < 0 ? "-" : ""}${grouped}${dec ? `.${dec}` : ""}`;
}

export function percent(part: number, whole: number, digits = 1): string {
  if (!whole) return "0%";
  return `${((part / whole) * 100).toFixed(digits)}%`;
}
