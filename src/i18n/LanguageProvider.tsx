"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { LText, Locale } from "@/types";
import { DEFAULT_LOCALE, translate, type TKey } from "./dictionaries";
import { lt } from "@/lib/utils";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TKey) => string;
  l: (text: LText | string | undefined) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "np-dhamangaon-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start with the default locale so server and client HTML match;
  // the saved preference is applied right after hydration.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "en" || saved === "mr" || saved === "hi") setLocaleState(saved);
    } catch {
      /* storage unavailable — keep default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key) => translate(locale, key),
      l: (text) => lt(text, locale),
    }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
