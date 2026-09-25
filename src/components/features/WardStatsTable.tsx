"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowDownUp, ChevronRight, MapPin, Search, UserRound } from "lucide-react";
import type { WardStats } from "@/data/wards";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn, formatNumber } from "@/lib/utils";
import { GenderBar } from "@/components/ui/GenderSplit";

type SortKey = "ward" | "population" | "voters" | "female";

interface Totals {
  households: number;
  population: { male: number; female: number; total: number };
  voters: { male: number; female: number; other: number; total: number };
  pollingBooths: number;
}

export function WardStatsTable({ wards, totals }: { wards: WardStats[]; totals: Totals }) {
  const { t, l } = useLanguage();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("ward");
  const [desc, setDesc] = useState(false);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? wards.filter((w) =>
          [String(w.wardNo), w.area.en, w.area.mr, ...w.members.flatMap((m) => [m.name.en, m.name.mr]), w.pollingStation]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(q),
        )
      : wards;
    const value = (w: WardStats) =>
      sort === "ward" ? w.wardNo : sort === "population" ? w.population.total : sort === "voters" ? w.voters.total : w.voters.female;
    return [...filtered].sort((a, b) => (desc ? value(b) - value(a) : value(a) - value(b)));
  }, [wards, query, sort, desc]);

  const toggleSort = (key: SortKey) => {
    if (sort === key) setDesc((d) => !d);
    else {
      setSort(key);
      setDesc(key !== "ward");
    }
  };

  const SortBtn = ({ k, children }: { k: SortKey; children: React.ReactNode }) => (
    <button
      type="button"
      onClick={() => toggleSort(k)}
      className={cn("inline-flex items-center gap-1 uppercase", sort === k ? "text-gold-200" : "hover:text-gold-200")}
      aria-label={`Sort by ${String(children)}`}
    >
      {children}
      <ArrowDownUp className="h-3 w-3" aria-hidden="true" />
    </button>
  );

  return (
    <div>
      <label className="relative mb-6 block max-w-md">
        <span className="sr-only">{t("common.search")}</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`${t("common.search")} — ${t("common.wardNo")} / ${t("common.area")} / ${t("ward.member")}`}
          className="input-royal rounded-full py-3 pl-11"
        />
      </label>

      {/* Desktop table */}
      <div className="card-royal hidden overflow-hidden lg:block">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy-900 text-[0.7rem] tracking-wider text-gold-100">
              <tr>
                <th scope="col" rowSpan={2} className="px-4 py-3 font-semibold">
                  <SortBtn k="ward">{t("common.wardNo")}</SortBtn>
                </th>
                <th scope="col" rowSpan={2} className="px-4 py-3 font-semibold uppercase">
                  {t("common.area")} / {t("ward.member")}
                </th>
                <th scope="colgroup" colSpan={3} className="border-l border-white/10 px-4 pt-3 text-center font-semibold uppercase">
                  {t("ward.population")}
                </th>
                <th scope="colgroup" colSpan={4} className="border-l border-white/10 px-4 pt-3 text-center font-semibold uppercase">
                  {t("ward.voters")}
                </th>
                <th scope="col" rowSpan={2} className="border-l border-white/10 px-4 py-3 text-center font-semibold uppercase">
                  {t("ward.pollingBooths")}
                </th>
                <th scope="col" rowSpan={2} className="px-2 py-3">
                  <span className="sr-only">{t("ward.viewDetails")}</span>
                </th>
              </tr>
              <tr className="text-ivory/80">
                <th scope="col" className="border-l border-white/10 px-4 pb-3 pt-1 text-right font-medium">{t("ward.male")}</th>
                <th scope="col" className="px-4 pb-3 pt-1 text-right font-medium">{t("ward.female")}</th>
                <th scope="col" className="px-4 pb-3 pt-1 text-right font-medium">
                  <SortBtn k="population">{t("ward.total")}</SortBtn>
                </th>
                <th scope="col" className="border-l border-white/10 px-4 pb-3 pt-1 text-right font-medium">{t("ward.male")}</th>
                <th scope="col" className="px-4 pb-3 pt-1 text-right font-medium">
                  <SortBtn k="female">{t("ward.female")}</SortBtn>
                </th>
                <th scope="col" className="px-4 pb-3 pt-1 text-right font-medium">
                  <SortBtn k="voters">{t("ward.total")}</SortBtn>
                </th>
                <th scope="col" className="px-4 pb-3 pt-1 font-medium">M / F</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {rows.map((w) => (
                <tr key={w.wardNo} className="group transition hover:bg-ivory-100">
                  <td className="px-4 py-3.5">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b from-navy-800 to-navy-950 text-xs font-bold text-gold-200">
                      {w.wardNo}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <Link href={`/wards/${w.wardNo}`} className="font-semibold text-navy-900 hover:text-gold-700">
                      {l(w.area)}
                    </Link>
                    <p className="mt-0.5 text-xs text-navy-500">{w.members.map((m) => l(m.name)).join(" & ")}</p>
                  </td>
                  <td className="border-l border-navy-100 px-4 py-3.5 text-right tabular-nums text-navy-700">{formatNumber(w.population.male)}</td>
                  <td className="px-4 py-3.5 text-right tabular-nums text-navy-700">{formatNumber(w.population.female)}</td>
                  <td className="px-4 py-3.5 text-right font-semibold tabular-nums text-navy-900">{formatNumber(w.population.total)}</td>
                  <td className="border-l border-navy-100 px-4 py-3.5 text-right tabular-nums text-navy-700">{formatNumber(w.voters.male)}</td>
                  <td className="px-4 py-3.5 text-right tabular-nums text-navy-700">{formatNumber(w.voters.female)}</td>
                  <td className="px-4 py-3.5 text-right font-semibold tabular-nums text-navy-900">{formatNumber(w.voters.total)}</td>
                  <td className="px-4 py-3.5">
                    <GenderBar male={w.voters.male} female={w.voters.female} other={w.voters.other} />
                  </td>
                  <td className="border-l border-navy-100 px-4 py-3.5 text-center tabular-nums text-navy-700">{w.pollingBooths}</td>
                  <td className="px-2 py-3.5">
                    <Link
                      href={`/wards/${w.wardNo}`}
                      aria-label={`${t("ward.viewDetails")} ${w.wardNo}`}
                      className="grid h-8 w-8 place-items-center rounded-full text-navy-400 transition group-hover:bg-navy-900 group-hover:text-gold-200"
                    >
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            {!query && (
              <tfoot className="bg-gold-50 font-semibold text-navy-900">
                <tr>
                  <td className="px-4 py-4" colSpan={2}>
                    {t("ward.total")} · {t("ward.totalWards")}: {wards.length}
                  </td>
                  <td className="border-l border-gold-200 px-4 py-4 text-right tabular-nums">{formatNumber(totals.population.male)}</td>
                  <td className="px-4 py-4 text-right tabular-nums">{formatNumber(totals.population.female)}</td>
                  <td className="px-4 py-4 text-right tabular-nums">{formatNumber(totals.population.total)}</td>
                  <td className="border-l border-gold-200 px-4 py-4 text-right tabular-nums">{formatNumber(totals.voters.male)}</td>
                  <td className="px-4 py-4 text-right tabular-nums">{formatNumber(totals.voters.female)}</td>
                  <td className="px-4 py-4 text-right tabular-nums">{formatNumber(totals.voters.total)}</td>
                  <td className="px-4 py-4">
                    <GenderBar male={totals.voters.male} female={totals.voters.female} other={totals.voters.other} />
                  </td>
                  <td className="border-l border-gold-200 px-4 py-4 text-center tabular-nums">{totals.pollingBooths}</td>
                  <td />
                </tr>
              </tfoot>
            )}
          </table>
        </div>
        {rows.length === 0 && <p className="p-10 text-center text-navy-500">{t("common.noResults")}</p>}
      </div>

      {/* Mobile / tablet cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
        {rows.map((w) => (
          <Link key={w.wardNo} href={`/wards/${w.wardNo}`} className="card-royal block p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-b from-navy-800 to-navy-950 text-sm font-bold text-gold-200">
                {w.wardNo}
              </span>
              <div className="min-w-0 flex-1">
                <p className="inline-flex items-center gap-1.5 font-semibold text-navy-900">
                  <MapPin className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
                  {l(w.area)}
                </p>
                <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-navy-500">
                  <UserRound className="h-3 w-3" aria-hidden="true" />
                  {w.members.map((m) => l(m.name)).join(" & ")}
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-navy-300" aria-hidden="true" />
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
              <div className="rounded-lg bg-ivory-100 px-2 py-2">
                <dt className="text-navy-500">{t("ward.population")}</dt>
                <dd className="mt-0.5 font-semibold tabular-nums text-navy-900">{formatNumber(w.population.total)}</dd>
              </div>
              <div className="rounded-lg bg-ivory-100 px-2 py-2">
                <dt className="text-navy-500">{t("ward.voters")}</dt>
                <dd className="mt-0.5 font-semibold tabular-nums text-navy-900">{formatNumber(w.voters.total)}</dd>
              </div>
            </dl>
            <div className="mt-3">
              <GenderBar male={w.voters.male} female={w.voters.female} other={w.voters.other} />
              <p className="mt-1.5 flex justify-between text-xs text-navy-600">
                <span>
                  {t("ward.male")}: <strong className="tabular-nums text-navy-900">{formatNumber(w.voters.male)}</strong>
                </span>
                <span>
                  {t("ward.female")}: <strong className="tabular-nums text-navy-900">{formatNumber(w.voters.female)}</strong>
                </span>
              </p>
            </div>
          </Link>
        ))}
        {rows.length === 0 && <p className="card-royal p-10 text-center text-navy-500 sm:col-span-2">{t("common.noResults")}</p>}
      </div>
    </div>
  );
}
