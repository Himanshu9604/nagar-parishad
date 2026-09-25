"use client";

import { Languages } from "lucide-react";
import { LOCALES } from "@/i18n/dictionaries";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

/** Segmented EN / मरा / हिं language control. */
export function LanguageSwitcher({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const { locale, setLocale, t } = useLanguage();
  return (
    <div
      role="group"
      aria-label={t("common.language")}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full p-0.5 text-xs",
        tone === "dark" ? "bg-white/10" : "bg-navy-50 ring-1 ring-navy-100",
        className,
      )}
    >
      <Languages
        className={cn("mx-1.5 h-3.5 w-3.5", tone === "dark" ? "text-gold-200" : "text-navy-500")}
        aria-hidden="true"
      />
      {LOCALES.map((l) => {
        const active = l.code === locale;
        return (
          <button
            key={l.code}
            type="button"
            lang={l.code}
            onClick={() => setLocale(l.code)}
            aria-pressed={active}
            title={l.label}
            className={cn(
              "rounded-full px-2.5 py-1 font-semibold transition",
              active
                ? "bg-gradient-to-b from-gold-200 to-gold-400 text-navy-950 shadow-sm"
                : tone === "dark"
                  ? "text-ivory/80 hover:text-ivory"
                  : "text-navy-600 hover:text-navy-900",
            )}
          >
            {l.short}
          </button>
        );
      })}
    </div>
  );
}
