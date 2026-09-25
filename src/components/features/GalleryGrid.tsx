"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { GalleryItem } from "@/types";
import { galleryCategories } from "@/data/gallery";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

/** Filterable photo grid with an accessible, keyboard-navigable lightbox. */
export function GalleryGrid({ items, showFilters = true }: { items: GalleryItem[]; showFilters?: boolean }) {
  const { l, t } = useLanguage();
  const [category, setCategory] = useState<(typeof galleryCategories)[number]["key"]>("all");
  const [index, setIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (category === "all" ? items : items.filter((i) => i.category === category)),
    [items, category],
  );

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + filtered.length) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const current = index !== null ? filtered[index] : null;

  return (
    <div>
      {showFilters && (
        <div className="scrollbar-none mb-8 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center" role="tablist" aria-label="Gallery categories">
          {galleryCategories.map((c) => (
            <button
              key={c.key}
              type="button"
              role="tab"
              aria-selected={category === c.key}
              onClick={() => setCategory(c.key)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition",
                category === c.key ? "bg-navy-900 text-ivory shadow-royal" : "bg-white text-navy-700 ring-1 ring-navy-100 hover:ring-gold-300",
              )}
            >
              {l(c.label)}
            </button>
          ))}
        </div>
      )}

      <motion.ul layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl bg-navy-900 shadow-royal ring-1 ring-navy-100 transition hover:shadow-royal-lg hover:ring-gold-300"
              >
                <Image
                  src={item.src}
                  alt={l(item.alt)}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-90 transition group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-left">
                  <span className="text-sm font-semibold text-ivory">{l(item.alt)}</span>
                  <Expand className="h-4 w-4 shrink-0 text-gold-200 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={l(current.alt)}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label={t("nav.close")}
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            {filtered.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20 sm:left-6"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20 sm:right-6"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              </>
            )}
            <motion.figure
              key={current.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-gold-300/40">
                <Image src={current.src} alt={l(current.alt)} fill sizes="100vw" className="object-contain" priority />
              </div>
              <figcaption className="mt-4 text-center text-sm text-ivory/85">
                {l(current.alt)}
                <span className="ml-3 text-ivory/50">
                  {(index ?? 0) + 1} / {filtered.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
