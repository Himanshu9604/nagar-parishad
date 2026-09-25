"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Contrast, Mail, Phone, Siren } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { telHref } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

const SIZES = [93.75, 100, 112.5]; // % root font-size for A- / A / A+
const SIZE_KEY = "np-dhamangaon-fontsize";
const HC_KEY = "np-dhamangaon-contrast";

/** Thin government utility bar: skip link, text resize, contacts and language. */
export function TopBar() {
  const { t } = useLanguage();
  const [size, setSize] = useState(1);
  const [contrast, setContrast] = useState(false);

  useEffect(() => {
    try {
      setContrast(window.localStorage.getItem(HC_KEY) === "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("hc", contrast);
    try {
      window.localStorage.setItem(HC_KEY, contrast ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, [contrast]);

  useEffect(() => {
    try {
      const saved = Number(window.localStorage.getItem(SIZE_KEY));
      if (saved >= 0 && saved < SIZES.length) setSize(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${SIZES[size]}%`;
    try {
      window.localStorage.setItem(SIZE_KEY, String(size));
    } catch {
      /* ignore */
    }
  }, [size]);

  return (
    <div className="bg-navy-950 text-ivory/85">
      <div className="container flex h-10 items-center justify-between gap-3 text-xs">
        <div className="flex min-w-0 items-center gap-4">
          <span className="hidden font-medium text-gold-200 md:inline">{t("site.tagline")}</span>
          <a href={telHref(siteConfig.phone)} className="hidden items-center gap-1.5 hover:text-gold-200 sm:inline-flex">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden items-center gap-1.5 hover:text-gold-200 lg:inline-flex"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.email}
          </a>
          <Link href="/emergency-contacts" className="inline-flex items-center gap-1.5 text-gold-200 hover:text-gold-100">
            <Siren className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="truncate">{t("nav.emergency")}</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-0.5 sm:flex" role="group" aria-label="Text size">
            {["A-", "A", "A+"].map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => setSize(i)}
                aria-pressed={size === i}
                aria-label={["Decrease text size", "Normal text size", "Increase text size"][i]}
                className={`h-6 min-w-6 rounded px-1 font-semibold transition ${
                  size === i ? "bg-white/15 text-gold-200" : "hover:text-gold-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setContrast((c) => !c)}
            aria-pressed={contrast}
            aria-label={t("common.highContrast")}
            title={t("common.highContrast")}
            className={`grid h-6 w-6 place-items-center rounded transition ${contrast ? "bg-gold-300 text-navy-950" : "hover:text-gold-200"}`}
          >
            <Contrast className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
