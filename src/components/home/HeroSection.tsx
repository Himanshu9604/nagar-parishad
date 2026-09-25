"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BellRing, FileText, Phone, Search } from "lucide-react";
import { notices } from "@/data/notices";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { formatDate, sortByDateDesc, telHref } from "@/lib/utils";
import { TownSkyline } from "./TownSkyline";

const latest = sortByDateDesc(notices).slice(0, 4);

export function HeroSection() {
  const { t, l, locale } = useLanguage();
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative isolate overflow-hidden bg-royal-gradient text-ivory">
      <div className="bg-pattern-royal absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
      <div className="absolute -left-40 top-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-navy-500/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 -top-20 -z-10 h-[24rem] w-[24rem] rounded-full bg-gold-400/15 blur-3xl" aria-hidden="true" />
      <TownSkyline className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 w-full text-navy-950/70 sm:h-56" />

      <div className="container grid items-center gap-12 pb-24 pt-14 sm:pb-32 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-40">
        <div className="lg:col-span-7">
          <motion.span {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-200">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-300" aria-hidden="true" />
            {t("home.heroEyebrow")}
          </motion.span>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.1] !text-ivory sm:text-5xl lg:text-6xl"
          >
            {t("home.heroTitle")}
          </motion.h1>

          <motion.div {...fade(0.16)} className="mt-5 h-[3px] w-28 rounded-full bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600" aria-hidden="true" />

          <motion.p {...fade(0.22)} className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            {t("home.heroSubtitle")}
          </motion.p>

          <motion.form
            {...fade(0.3)}
            action="/search/"
            method="get"
            role="search"
            className="mt-8 flex max-w-xl items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1.5 backdrop-blur-md focus-within:border-gold-300/60"
          >
            <label htmlFor="hero-search" className="sr-only">
              {t("common.search")}
            </label>
            <Search className="ml-3 h-5 w-5 shrink-0 text-gold-200" aria-hidden="true" />
            <input
              id="hero-search"
              name="q"
              type="search"
              placeholder={t("common.searchPlaceholder")}
              className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-sm text-ivory placeholder:text-ivory/50 focus:outline-none"
            />
            <button type="submit" className="btn-gold shrink-0 !px-5">
              {t("common.search")}
            </button>
          </motion.form>

          <motion.div {...fade(0.38)} className="mt-8 flex flex-wrap gap-3">
            <Link href="/services" className="btn-gold">
              {t("home.heroCtaServices")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/notices" className="btn-ghost-light">
              <BellRing className="h-4 w-4" aria-hidden="true" />
              {t("home.heroCtaNotices")}
            </Link>
          </motion.div>
        </div>

        {/* What's new glass panel */}
        <motion.aside
          initial={reduce ? false : { opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="card-glass p-6 sm:p-7 lg:col-span-5"
          aria-labelledby="whats-new"
        >
          <div className="flex items-center justify-between">
            <h2 id="whats-new" className="flex items-center gap-2 font-display text-xl font-semibold !text-ivory">
              <BellRing className="h-5 w-5 text-gold-300" aria-hidden="true" />
              {t("home.whatsNew")}
            </h2>
            <Link href="/notices" className="text-xs font-semibold text-gold-200 hover:text-gold-100">
              {t("common.viewAll")} →
            </Link>
          </div>
          <div className="gold-divider my-4 opacity-60" aria-hidden="true" />
          <ul className="space-y-1">
            {latest.map((n) => (
              <li key={n.id}>
                <a
                  href={n.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3 rounded-xl p-2.5 transition hover:bg-white/10"
                >
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold-300/15 text-gold-200">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="line-clamp-2 text-sm font-medium text-ivory group-hover:text-gold-100">
                      {l(n.title)}
                    </span>
                    <span className="mt-1 flex items-center gap-2 text-xs text-ivory/60">
                      {formatDate(n.date, locale)}
                      {n.isNew && (
                        <span className="rounded bg-gold-400 px-1.5 py-px text-[0.6rem] font-bold uppercase text-navy-950">
                          {t("common.new")}
                        </span>
                      )}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={telHref(siteConfig.helpline)}
            className="mt-5 flex items-center gap-3 rounded-xl border border-gold-300/25 bg-gradient-to-r from-gold-300/15 to-transparent p-3.5 transition hover:border-gold-300/60"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-400 text-navy-950">
              <Phone className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs text-ivory/70">
                {t("common.helpline")} · {t("common.tollFree")}
              </span>
              <span className="block font-display text-lg font-semibold tracking-wide text-gold-100">
                {siteConfig.helpline}
              </span>
            </span>
          </a>
        </motion.aside>
      </div>
      <div className="gold-divider absolute bottom-0 left-0" aria-hidden="true" />
    </section>
  );
}
