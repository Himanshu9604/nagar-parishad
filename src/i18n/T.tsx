"use client";

import type { LText } from "@/types";
import type { TKey } from "./dictionaries";
import { useLanguage } from "./LanguageProvider";
import { formatDate } from "@/lib/utils";

/**
 * Tiny client leaves that let Server Components render translated text:
 *   <T k="nav.home" />            → UI dictionary string
 *   <L text={notice.title} />     → localised data field
 *   <LDate date="2026-09-01" />   → localised date
 */
export function T({ k }: { k: TKey }) {
  const { t } = useLanguage();
  return <>{t(k)}</>;
}

export function L({ text }: { text: LText | string | undefined }) {
  const { l } = useLanguage();
  return <>{l(text)}</>;
}

export function LDate({ date }: { date: string }) {
  const { locale } = useLanguage();
  return <time dateTime={date}>{formatDate(date, locale)}</time>;
}
