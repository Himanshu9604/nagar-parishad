"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FolderOpen, Search } from "lucide-react";
import type { DocumentCategory, DocumentItem } from "@/types";
import type { TKey } from "@/i18n/dictionaries";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn, sortByDateDesc } from "@/lib/utils";
import { DocumentCard } from "@/components/cards/DocumentCard";

/**
 * Filterable grid of document cards — category chips, year filter and text search.
 * Used by Notices, Circulars and Download Forms pages.
 */
export function DocumentExplorer({ documents, showYear = true }: { documents: DocumentItem[]; showYear?: boolean }) {
  const { t, l } = useLanguage();
  const [category, setCategory] = useState<DocumentCategory | "all">("all");
  const [year, setYear] = useState<string>("all");
  const [query, setQuery] = useState("");

  const sorted = useMemo(() => sortByDateDesc(documents), [documents]);
  const categories = useMemo(
    () => Array.from(new Set(sorted.map((d) => d.category))),
    [sorted],
  );
  const years = useMemo(
    () => Array.from(new Set(sorted.map((d) => d.date.slice(0, 4)))).sort().reverse(),
    [sorted],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((d) => {
      if (category !== "all" && d.category !== category) return false;
      if (year !== "all" && !d.date.startsWith(year)) return false;
      if (!q) return true;
      const hay = [d.title.en, d.title.mr, d.title.hi, d.referenceNo, d.summary?.en, l(d.title)]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [sorted, category, year, query, l]);

  return (
    <div>
      <div className="card-royal mb-8 flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:flex-wrap lg:pb-0" role="tablist" aria-label={t("common.category")}>
          {(["all", ...categories] as const).map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(c)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-navy-900 text-ivory shadow-royal"
                    : "bg-ivory-200/70 text-navy-700 hover:bg-navy-50",
                )}
              >
                {c === "all" ? t("common.all") : t(`categories.${c}` as TKey)}
              </button>
            );
          })}
        </div>

        <div className="flex gap-2">
          {showYear && years.length > 1 && (
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              aria-label="Year"
              className="input-royal w-28"
            >
              <option value="all">{t("common.all")}</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          )}
          <label className="relative block w-full lg:w-72">
            <span className="sr-only">{t("common.search")}</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("common.search")}
              className="input-royal pl-10"
            />
          </label>
        </div>
      </div>

      <p className="mb-4 text-sm text-navy-500" aria-live="polite">
        {filtered.length} {t("common.results")}
      </p>

      {filtered.length === 0 ? (
        <div className="card-royal flex flex-col items-center gap-3 p-12 text-center text-navy-500">
          <FolderOpen className="h-10 w-10 text-gold-400" aria-hidden="true" />
          {t("common.noResults")}
        </div>
      ) : (
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((doc) => (
              <motion.div
                key={doc.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <DocumentCard doc={doc} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
