"use client";

import { useMemo, useState } from "react";
import { CalendarClock, Download, ExternalLink } from "lucide-react";
import type { Tender } from "@/types";
import type { TKey } from "@/i18n/dictionaries";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn, formatDate } from "@/lib/utils";

const STATUS_STYLE: Record<Tender["status"], string> = {
  open: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  closed: "bg-navy-50 text-navy-600 ring-navy-200",
  awarded: "bg-gold-50 text-gold-800 ring-gold-200",
  cancelled: "bg-rose-50 text-rose-700 ring-rose-200",
};

export function StatusBadge({ status }: { status: Tender["status"] }) {
  const { t } = useLanguage();
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1", STATUS_STYLE[status])}>
      {status === "open" && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" aria-hidden="true" />}
      {t(`status.${status}` as TKey)}
    </span>
  );
}

/** Tender register: status filter + responsive table (desktop) / cards (mobile). */
export function TenderList({ tenders, limit }: { tenders: Tender[]; limit?: number }) {
  const { t, l, locale } = useLanguage();
  const [status, setStatus] = useState<Tender["status"] | "all">("all");

  const rows = useMemo(() => {
    const list = [...tenders]
      .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
      .filter((x) => status === "all" || x.status === status);
    return limit ? list.slice(0, limit) : list;
  }, [tenders, status, limit]);

  const statuses: (Tender["status"] | "all")[] = ["all", "open", "closed", "awarded", "cancelled"];

  return (
    <div>
      {!limit && (
        <div className="scrollbar-none mb-6 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label={t("tender.status")}>
          {statuses.map((s) => (
            <button
              key={s}
              type="button"
              role="tab"
              aria-selected={status === s}
              onClick={() => setStatus(s)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition",
                status === s ? "bg-navy-900 text-ivory shadow-royal" : "bg-white text-navy-700 ring-1 ring-navy-100 hover:ring-gold-300",
              )}
            >
              {s === "all" ? t("common.all") : t(`status.${s}` as TKey)}
            </button>
          ))}
        </div>
      )}

      {/* Desktop table */}
      <div className="card-royal hidden overflow-hidden md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-navy-900 text-xs uppercase tracking-wider text-gold-100">
            <tr>
              <th scope="col" className="px-5 py-4 font-semibold">{t("tender.tenderNo")}</th>
              <th scope="col" className="px-5 py-4 font-semibold">{t("tender.work")}</th>
              <th scope="col" className="px-5 py-4 font-semibold">{t("tender.cost")}</th>
              <th scope="col" className="px-5 py-4 font-semibold">{t("tender.closing")}</th>
              <th scope="col" className="px-5 py-4 font-semibold">{t("tender.status")}</th>
              <th scope="col" className="px-5 py-4 text-right font-semibold">{t("tender.documents")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-100">
            {rows.map((row) => (
              <tr key={row.id} className="align-top transition hover:bg-ivory-100">
                <td className="whitespace-nowrap px-5 py-4 font-mono text-xs text-navy-600">{row.tenderNo}</td>
                <td className="px-5 py-4">
                  <p className="font-medium text-navy-900">{l(row.title)}</p>
                  <p className="mt-1 text-xs text-navy-500">
                    {row.department} · {t("tender.published")}: {formatDate(row.publishDate, locale)}
                  </p>
                </td>
                <td className="whitespace-nowrap px-5 py-4 font-semibold text-navy-800">
                  {row.estimatedCost}
                  {row.emd && <p className="mt-1 text-xs font-normal text-navy-500">{t("tender.emd")}: {row.emd}</p>}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-navy-700">{formatDate(row.closingDate, locale)}</td>
                <td className="px-5 py-4">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <a
                      href={row.file}
                      download
                      aria-label={`${t("common.download")} – ${row.tenderNo}`}
                      className="grid h-9 w-9 place-items-center rounded-full bg-navy-900 text-ivory transition hover:bg-gold-500 hover:text-navy-950"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                    </a>
                    {row.portalUrl && (
                      <a
                        href={row.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`e-Tender portal – ${row.tenderNo}`}
                        className="grid h-9 w-9 place-items-center rounded-full border border-navy-100 text-navy-700 transition hover:border-gold-400"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && <p className="p-10 text-center text-navy-500">{t("common.noResults")}</p>}
      </div>

      {/* Mobile cards */}
      <div className="grid gap-4 md:hidden">
        {rows.map((row) => (
          <article key={row.id} className="card-royal p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[0.7rem] text-navy-500">{row.tenderNo}</span>
              <StatusBadge status={row.status} />
            </div>
            <h3 className="mt-3 font-sans text-[0.95rem] font-semibold leading-snug text-navy-900">{l(row.title)}</h3>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div>
                <dt className="text-navy-500">{t("tender.cost")}</dt>
                <dd className="mt-0.5 font-semibold text-navy-800">{row.estimatedCost}</dd>
              </div>
              <div>
                <dt className="text-navy-500">{t("tender.closing")}</dt>
                <dd className="mt-0.5 inline-flex items-center gap-1 font-semibold text-navy-800">
                  <CalendarClock className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
                  {formatDate(row.closingDate, locale)}
                </dd>
              </div>
            </dl>
            <div className="mt-4 flex gap-2">
              <a href={row.file} download className="btn-primary flex-1 !py-2 text-xs">
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                {t("common.download")}
              </a>
              {row.portalUrl && (
                <a href={row.portalUrl} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 !py-2 text-xs">
                  e-Tender
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
        {rows.length === 0 && <p className="card-royal p-10 text-center text-navy-500">{t("common.noResults")}</p>}
      </div>
    </div>
  );
}
