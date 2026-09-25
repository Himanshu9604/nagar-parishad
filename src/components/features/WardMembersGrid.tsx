"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, GraduationCap, MapPin, Phone, Search, UserRound } from "lucide-react";
import type { WardMember } from "@/types";
import { useLanguage } from "@/i18n/LanguageProvider";
import { formatNumber, telHref } from "@/lib/utils";
import { wards } from "@/data/wards";
import { GenderBar } from "@/components/ui/GenderSplit";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function WardMembersGrid({ members }: { members: WardMember[] }) {
  const { t, l } = useLanguage();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return members;
    return members.filter((m) =>
      [String(m.wardNo), m.name.en, m.name.mr, m.area.en, m.area.mr, m.reservation]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [members, query]);

  return (
    <div>
      <label className="relative mx-auto mb-10 block max-w-md">
        <span className="sr-only">{t("common.search")}</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`${t("common.search")} — ${t("common.wardNo")} / ${t("common.area")}`}
          className="input-royal rounded-full py-3 pl-11"
        />
      </label>

      {filtered.length === 0 ? (
        <p className="card-royal p-10 text-center text-navy-500">{t("common.noResults")}</p>
      ) : (
        <Stagger key={query} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((m) => {
            const stats = wards.find((w) => w.wardNo === m.wardNo);
            return (
            <StaggerItem key={m.id}>
              <article className="card-royal group relative h-full overflow-hidden p-6 text-center hover:-translate-y-1">
                <span className="absolute right-0 top-0 rounded-bl-2xl bg-navy-900 px-3 py-1.5 text-xs font-bold text-gold-200">
                  {t("common.wardNo")} {m.wardNo}
                  {m.seat && ` · ${m.seat}`}
                </span>
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-700 p-[3px]">
                  <div className="grid h-full w-full place-items-center rounded-full bg-ivory text-navy-400">
                    <UserRound className="h-9 w-9" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="mt-4 font-sans text-base font-semibold text-navy-900">{l(m.name)}</h3>
                {m.role && <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-gold-600">{l(m.role)}</p>}
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-navy-600">
                  <MapPin className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
                  {l(m.area)}
                </p>
                {m.reservation && (
                  <p className="mt-2">
                    <span className="rounded-full bg-navy-50 px-2.5 py-0.5 text-[0.7rem] font-medium text-navy-600">
                      {m.reservation}
                    </span>
                  </p>
                )}
                {(m.qualification || m.qualificationNote) && (
                  <p className="mt-2 flex items-start justify-center gap-1.5 text-left text-xs text-navy-500">
                    <GraduationCap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" aria-hidden="true" />
                    {l(m.qualification ?? m.qualificationNote)}
                  </p>
                )}
                {stats && (
                  <div className="mt-4 rounded-xl bg-ivory-100 p-3 text-left text-xs">
                    <div className="flex justify-between text-navy-600">
                      <span>{t("ward.voters")}</span>
                      <strong className="tabular-nums text-navy-900">{formatNumber(stats.voters.total)}</strong>
                    </div>
                    <div className="mt-2">
                      <GenderBar male={stats.voters.male} female={stats.voters.female} other={stats.voters.other} />
                    </div>
                    <div className="mt-1.5 flex justify-between text-navy-500">
                      <span>
                        {t("ward.male")} {formatNumber(stats.voters.male)}
                      </span>
                      <span>
                        {t("ward.female")} {formatNumber(stats.voters.female)}
                      </span>
                    </div>
                  </div>
                )}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {m.phone && (
                    <a
                      href={telHref(m.phone)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 px-3 py-1.5 text-xs font-semibold text-navy-700 transition hover:border-gold-400"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                      {m.phone}
                    </a>
                  )}
                  <Link
                    href={`/wards/${m.wardNo}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-3 py-1.5 text-xs font-semibold text-ivory transition hover:bg-navy-700"
                  >
                    {t("ward.viewDetails")}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
            );
          })}
        </Stagger>
      )}
    </div>
  );
}
