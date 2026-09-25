"use client";

import { useEffect, useState } from "react";
import { CalendarClock, Droplets } from "lucide-react";
import { WEEKDAYS, slotForWard } from "@/data/waterSchedule";
import { wardMembers } from "@/data/wardMembers";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "np-dhamangaon-my-ward";

/** Lets a citizen pick their ward and see whether water is scheduled today (remembered locally). */
export function WaterTodayChecker() {
  const { t, l, locale } = useLanguage();
  const [ward, setWard] = useState<number>(1);
  // Day is read on the client only, so the static HTML never shows a stale "today".
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(new Date().getDay());
    try {
      const saved = Number(window.localStorage.getItem(STORAGE_KEY));
      if (saved >= 1 && saved <= wardMembers.length) setWard(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const choose = (w: number) => {
    setWard(w);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(w));
    } catch {
      /* ignore */
    }
  };

  const slot = slotForWard(ward);
  const days = WEEKDAYS[locale];
  const suppliedToday = today !== null && !!slot?.days.includes(today);
  const nextDay =
    today !== null && slot
      ? [1, 2, 3, 4, 5, 6, 7].map((n) => (today + n) % 7).find((d) => slot.days.includes(d))
      : undefined;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-royal-gradient p-6 text-ivory shadow-royal-lg sm:p-8">
      <div className="bg-pattern-royal absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative">
        <h2 className="flex items-center gap-2 font-display text-2xl font-semibold !text-ivory">
          <Droplets className="h-6 w-6 text-gold-300" aria-hidden="true" />
          {t("water.todayTitle")}
        </h2>

        <label className="mt-5 block max-w-sm">
          <span className="mb-1.5 block text-sm text-ivory/75">{t("water.selectWard")}</span>
          <select
            value={ward}
            onChange={(e) => choose(Number(e.target.value))}
            className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-ivory focus:border-gold-300 focus:outline-none [&>option]:text-navy-900"
          >
            {wardMembers.map((m) => (
              <option key={m.wardNo} value={m.wardNo}>
                {t("common.wardNo")} {m.wardNo} – {l(m.area)}
              </option>
            ))}
          </select>
        </label>

        <div
          className={cn(
            "mt-5 flex items-start gap-4 rounded-xl p-4",
            suppliedToday ? "bg-emerald-500/15 ring-1 ring-emerald-300/40" : "bg-white/5 ring-1 ring-white/15",
          )}
          aria-live="polite"
        >
          <CalendarClock className={cn("mt-0.5 h-6 w-6 shrink-0", suppliedToday ? "text-emerald-300" : "text-gold-300")} aria-hidden="true" />
          {today === null || !slot ? (
            <p className="text-sm text-ivory/70">{t("common.loading")}</p>
          ) : suppliedToday ? (
            <div>
              <p className="text-sm text-ivory/75">
                {t("water.supplyToday")} · {days[today]}
              </p>
              <p className="font-display text-2xl font-semibold text-emerald-200">{slot.time}</p>
            </div>
          ) : (
            <div>
              <p className="font-semibold text-ivory">
                {t("water.noSupply")} ({days[today]})
              </p>
              {nextDay !== undefined && (
                <p className="mt-1 text-sm text-ivory/75">
                  {t("water.nextSupply")}: <strong className="text-gold-200">{days[nextDay]}</strong>, {slot.time}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
