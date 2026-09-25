"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, FileText, Search, SearchX } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { searchSite, type SearchKind } from "@/lib/search";
import { lt } from "@/lib/utils";

const KIND_LABEL: Record<SearchKind, { en: string; mr: string; hi: string }> = {
  page: { en: "Page", mr: "पान", hi: "पृष्ठ" },
  service: { en: "Service", mr: "सेवा", hi: "सेवा" },
  department: { en: "Department", mr: "विभाग", hi: "विभाग" },
  notice: { en: "Notice", mr: "सूचना", hi: "सूचना" },
  circular: { en: "Circular", mr: "परिपत्रक", hi: "परिपत्र" },
  form: { en: "Form", mr: "अर्ज", hi: "फ़ॉर्म" },
  tender: { en: "Tender", mr: "निविदा", hi: "निविदा" },
  scheme: { en: "Scheme", mr: "योजना", hi: "योजना" },
  link: { en: "Link", mr: "दुवा", hi: "लिंक" },
  contact: { en: "Contact", mr: "संपर्क", hi: "संपर्क" },
};

const SUGGESTIONS = ["Property tax", "Birth certificate", "Water", "Tender", "RTI", "जन्म", "कर"];

export function SearchClient() {
  const { t, locale } = useLanguage();
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState(params.get("q") ?? "");

  // Keep the URL (?q=) in sync so results are shareable
  useEffect(() => {
    const id = setTimeout(() => {
      const q = query.trim();
      router.replace(q ? `${pathname}?q=${encodeURIComponent(q)}` : pathname, { scroll: false });
    }, 300);
    return () => clearTimeout(id);
  }, [query, pathname, router]);

  const results = useMemo(() => searchSite(query, locale), [query, locale]);

  return (
    <div className="mx-auto max-w-3xl">
      <form role="search" onSubmit={(e) => e.preventDefault()} className="relative">
        <label htmlFor="site-search" className="sr-only">
          {t("common.search")}
        </label>
        <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gold-600" aria-hidden="true" />
        <input
          id="site-search"
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("common.searchPlaceholder")}
          className="w-full rounded-full border border-navy-100 bg-white py-4 pl-14 pr-6 text-base text-navy-900 shadow-royal-lg placeholder:text-navy-300 focus:border-gold-400 focus:outline-none focus:ring-4 focus:ring-gold-100"
        />
      </form>

      {!query.trim() && (
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setQuery(s)}
              className="rounded-full bg-white px-4 py-1.5 text-sm text-navy-700 ring-1 ring-navy-100 transition hover:ring-gold-300"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {query.trim() && (
        <div className="mt-10">
          <p className="mb-4 text-sm text-navy-500" aria-live="polite">
            {results.length} {t("common.results")} — {t("common.resultsFor")} “{query.trim()}”
          </p>
          {results.length === 0 ? (
            <div className="card-royal flex flex-col items-center gap-3 p-12 text-center text-navy-500">
              <SearchX className="h-10 w-10 text-gold-400" aria-hidden="true" />
              {t("common.noResults")}
            </div>
          ) : (
            <ul className="space-y-3">
              {results.map((r) => {
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-600 group-hover:bg-navy-900 group-hover:text-gold-200">
                      <FileText className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="text-[0.7rem] font-bold uppercase tracking-wider text-gold-600">
                        {lt(KIND_LABEL[r.kind], locale)}
                      </span>
                      <span className="mt-0.5 block font-semibold text-navy-900">{lt(r.title, locale)}</span>
                      {r.description && (
                        <span className="mt-0.5 block truncate text-sm text-navy-500">{lt(r.description, locale)}</span>
                      )}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-navy-300 group-hover:text-gold-600" aria-hidden="true" />
                  </>
                );
                const cls = "card-royal group flex items-center gap-4 p-4";
                return (
                  <li key={r.id}>
                    {r.external ? (
                      <a href={r.href} target="_blank" rel="noopener noreferrer" className={cls}>
                        {content}
                      </a>
                    ) : (
                      <Link href={r.href} className={cls}>
                        {content}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
