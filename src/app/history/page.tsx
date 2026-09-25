import { Fragment } from "react";
import { BadgeCheck, Crown, ExternalLink, History, Info, Mail, UserRound } from "lucide-react";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GenderSplit } from "@/components/ui/GenderSplit";
import { census2011, mla2024Result, mlaSource, mlas, pastPresidents, timeline, type Source } from "@/data/history";
import type { TKey } from "@/i18n/dictionaries";
import { L, T } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";
import { cn, formatNumber } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "History & Past Presidents",
  description:
    "History of Dhamangaon Railway and its Nagar Parishad, roll of Presidents (Nagaradhyaksha) including Pratap Adsad and Dr. Archanatai Adsad-Rothe, and Census 2011 town profile.",
  path: "/history",
  keywords: ["Dhamangaon history", "former nagaradhyaksha", "Pratap Adsad", "Dattapur Dhamangaon census"],
});

function SourceBadge({ source, tone = "light" }: { source: Source; tone?: "light" | "dark" }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 text-[0.7rem]",
        tone === "dark" ? "text-ivory/60 hover:text-gold-200" : "text-navy-400 hover:text-gold-700",
      )}
    >
      <BadgeCheck className="h-3 w-3" aria-hidden="true" />
      {source.label}
      <ExternalLink className="h-2.5 w-2.5" aria-hidden="true" />
    </a>
  );
}

export default function HistoryPage() {
  const c = census2011;
  const tiles: { k: TKey; value: string }[] = [
    { k: "ward.population", value: formatNumber(c.population.total) },
    { k: "history.households", value: formatNumber(c.households) },
    { k: "history.children", value: formatNumber(c.children0to6) },
    { k: "history.sexRatio", value: String(c.sexRatio) },
    { k: "history.childSexRatio", value: String(c.childSexRatio) },
    { k: "history.workers", value: formatNumber(c.workers.total) },
  ];

  return (
    <>
      <PageHero titleKey="pages.history.title" descKey="pages.history.desc" trail={[{ k: "nav.about", href: "/about" }]} />

      {/* ── Timeline ─────────────────────────────────── */}
      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <SectionHeading titleKey="history.timeline" align="center" />
          <ol className="relative mx-auto max-w-4xl before:absolute before:bottom-0 before:left-5 before:top-0 before:w-0.5 before:bg-gradient-to-b before:from-gold-300 before:via-gold-500 before:to-gold-300 md:before:left-1/2 md:before:-translate-x-1/2">
            {timeline.map((e, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal as="li" key={e.period} delay={0.03 * i} className="relative mb-8 pl-14 last:mb-0 md:grid md:grid-cols-2 md:gap-12 md:pl-0">
                  <span
                    className="absolute left-5 top-5 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-gold-400 ring-4 ring-ivory md:left-1/2"
                    aria-hidden="true"
                  />
                  <div className={cn(right ? "md:col-start-2" : "md:col-start-1 md:text-right")}>
                    <article className="card-royal p-6">
                      <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">{e.period}</p>
                      <h3 className="mt-1 text-xl font-semibold">
                        <L text={e.title} />
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-600">
                        <L text={e.text} />
                      </p>
                      {e.source && (
                        <p className="mt-3">
                          <SourceBadge source={e.source} />
                        </p>
                      )}
                    </article>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Roll of Presidents ───────────────────────── */}
      <section className="relative overflow-hidden bg-royal-gradient py-16 text-ivory sm:py-20">
        <div className="bg-pattern-royal absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container relative">
          <SectionHeading titleKey="history.presidents" subtitleKey="history.presidentsSub" align="center" tone="dark" />
          <Stagger className="mx-auto grid max-w-4xl gap-4">
            {pastPresidents.map((p, i) => (
              <StaggerItem key={p.name.en}>
                <article
                  className={cn(
                    "flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:p-6",
                    p.current ? "bg-gradient-to-r from-gold-200 to-gold-400 text-navy-950 shadow-gold" : "card-glass",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-14 w-14 shrink-0 place-items-center rounded-full font-display text-xl font-bold",
                      p.current ? "bg-navy-950 text-gold-200" : "bg-gold-400/15 text-gold-200 ring-1 ring-gold-300/40",
                    )}
                  >
                    {p.current ? <Crown className="h-6 w-6" aria-hidden="true" /> : pastPresidents.length - i}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className={cn("font-display text-xl font-semibold", p.current ? "!text-navy-950" : "!text-ivory")}>
                        <L text={p.name} />
                      </h3>
                      {p.current && (
                        <span className="rounded-full bg-navy-950 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-gold-200">
                          <T k="history.current" />
                        </span>
                      )}
                    </div>
                    <p className={cn("mt-1 text-sm", p.current ? "text-navy-800" : "text-ivory/75")}>
                      <T k="history.term" />: {p.from} – {p.to ?? <T k="history.present" />}
                      {p.party && (
                        <>
                          {" · "}
                          <T k="history.party" />: {p.party}
                        </>
                      )}
                    </p>
                  </div>
                  {p.source && (
                    <div className="shrink-0">
                      <SourceBadge source={p.source} tone={p.current ? "light" : "dark"} />
                    </div>
                  )}
                </article>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="flex items-center gap-4 rounded-2xl border-2 border-dashed border-gold-300/40 p-5 text-ivory/70 sm:p-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/5">
                  <UserRound className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <p className="text-sm">
                    <T k="history.toBeAdded" />
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Former President – details for website")}&body=${encodeURIComponent(["Name:", "Term (from – to):", "Party:", "Reference / source:"].join(String.fromCharCode(10)))}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-200 hover:text-gold-100"
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    Share details of a former President with the office
                  </a>
                </div>
              </div>
            </StaggerItem>
          </Stagger>
          <p className="mx-auto mt-6 flex max-w-3xl items-start justify-center gap-2 text-center text-xs text-ivory/60">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <T k="history.verifyNote" />
          </p>
        </div>
      </section>

      {/* ── MLAs of the constituency ─────────────────── */}
      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <SectionHeading
            title={<L text={{ en: "MLAs – Dhamangaon Railway Constituency", mr: "आमदार – धामणगाव रेल्वे मतदारसंघ", hi: "विधायक – धामणगांव रेलवे विधानसभा क्षेत्र" }} />}
            align="center"
          />
          <p className="-mt-6 mb-10 text-center text-sm text-navy-600">
            <L
              text={{
                en: "No. 36 Dhamangaon Railway Assembly constituency, Amravati district (Wardha Lok Sabha seat).",
                mr: "३६ – धामणगाव रेल्वे विधानसभा मतदारसंघ, अमरावती जिल्हा (वर्धा लोकसभा मतदारसंघ).",
                hi: "36 – धामणगांव रेलवे विधानसभा क्षेत्र, अमरावती ज़िला (वर्धा लोकसभा क्षेत्र)।",
              }}
            />
          </p>

          <div className="grid gap-8 lg:grid-cols-3">
            <Reveal className="card-royal overflow-hidden lg:col-span-2">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[30rem] text-left text-sm">
                  <thead className="bg-navy-900 text-xs uppercase tracking-wider text-gold-100">
                    <tr>
                      <th scope="col" className="px-5 py-3.5 font-semibold">Year</th>
                      <th scope="col" className="px-5 py-3.5 font-semibold">MLA</th>
                      <th scope="col" className="px-5 py-3.5 font-semibold">
                        <T k="history.party" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-100">
                    {mlas.map((m, i) => {
                      const firstPre = m.preDelimitation && !mlas[i - 1]?.preDelimitation;
                      return (
                        <Fragment key={m.year}>
                          {firstPre && (
                            <tr key={`sep-${m.year}`} className="bg-gold-50">
                              <td colSpan={3} className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-gold-800">
                                <L
                                  text={{
                                    en: "Before 2008 delimitation – Chandur constituency",
                                    mr: "२००८ पुनर्रचनेपूर्वी – चांदूर मतदारसंघ",
                                    hi: "2008 परिसीमन से पहले – चांदूर विधानसभा क्षेत्र",
                                  }}
                                />
                              </td>
                            </tr>
                          )}
                          <tr key={m.year} className={cn("hover:bg-ivory-100", i === 0 && "bg-gold-50/50")}>
                            <td className="whitespace-nowrap px-5 py-3.5 font-display text-base font-semibold text-navy-900">{m.year}</td>
                            <td className="px-5 py-3.5">
                              {m.name ? (
                                <span className="font-medium text-navy-900">
                                  <L text={m.name} />
                                </span>
                              ) : (
                                <span className="italic text-navy-400">Not listed in source</span>
                              )}
                              {i === 0 && (
                                <span className="ml-2 rounded-full bg-navy-900 px-2 py-0.5 text-[0.65rem] font-bold uppercase text-gold-200">
                                  <T k="history.current" />
                                </span>
                              )}
                            </td>
                            <td className="px-5 py-3.5 text-navy-600">{m.party ?? "—"}</td>
                          </tr>
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="relative overflow-hidden rounded-2xl bg-royal-gradient p-6 text-ivory shadow-royal-lg lg:self-start">
              <div className="bg-pattern-royal absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">2024 result</p>
                <p className="mt-3 font-display text-xl font-semibold">{mla2024Result.winner.name}</p>
                <p className="text-sm text-ivory/75">
                  {mla2024Result.winner.party} · {formatNumber(mla2024Result.winner.votes)} votes ({mla2024Result.winner.share}%)
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gold-400" style={{ width: `${mla2024Result.winner.share}%` }} />
                </div>
                <p className="mt-4 text-sm font-semibold">{mla2024Result.runnerUp.name}</p>
                <p className="text-sm text-ivory/75">
                  {mla2024Result.runnerUp.party} · {formatNumber(mla2024Result.runnerUp.votes)} votes ({mla2024Result.runnerUp.share}%)
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-navy-300" style={{ width: `${mla2024Result.runnerUp.share}%` }} />
                </div>
                <p className="mt-5 border-t border-white/10 pt-4 text-sm">
                  Margin: <strong className="text-gold-200">{formatNumber(mla2024Result.margin)} votes</strong>
                </p>
                <div className="mt-4">
                  <SourceBadge source={mlaSource} tone="dark" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Census 2011 ──────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <SectionHeading titleKey="history.census" />
          <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {tiles.map((tile) => (
              <StaggerItem key={tile.k}>
                <div className="card-royal h-full p-5">
                  <p className="font-display text-2xl font-semibold tabular-nums text-navy-900 sm:text-3xl">{tile.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-500">
                    <T k={tile.k} />
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <Reveal>
              <GenderSplit titleKey="ward.populationSplit" male={c.population.male} female={c.population.female} className="h-full" />
            </Reveal>

            <Reveal delay={0.06} className="card-royal p-6">
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gold-700">
                <T k="history.literacy" />
              </h3>
              <ul className="mt-5 space-y-4">
                {(
                  [
                    ["ward.total", c.literacy.total, "#20376d"],
                    ["ward.male", c.literacy.male, "#2a4686"],
                    ["ward.female", c.literacy.female, "#c1922b"],
                  ] as const
                ).map(([k, v, color]) => (
                  <li key={k}>
                    <div className="flex justify-between text-sm">
                      <span className="text-navy-700">
                        <T k={k} />
                      </span>
                      <span className="font-semibold tabular-nums text-navy-900">{v}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-navy-50">
                      <div className="h-full rounded-full" style={{ width: `${v}%`, background: color }} />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-navy-100 pt-4 text-sm text-navy-600">
                <T k="history.scSt" />: <strong className="text-navy-900">{c.scPercent}%</strong> SC ·{" "}
                <strong className="text-navy-900">{c.stPercent}%</strong> ST
              </div>
            </Reveal>

            <Reveal delay={0.12} className="card-royal p-6">
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gold-700">
                <T k="history.religion" />
              </h3>
              <ul className="mt-5 space-y-3">
                {c.religion.map((r) => (
                  <li key={r.name.en}>
                    <div className="flex justify-between text-sm">
                      <span className="text-navy-700">
                        <L text={r.name} />
                      </span>
                      <span className="font-semibold tabular-nums text-navy-900">{r.percent}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-navy-50">
                      <div className="h-full rounded-full bg-navy-600" style={{ width: `${Math.max(r.percent, 1)}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <p className="mt-6 flex items-center gap-2 text-xs text-navy-500">
            <History className="h-3.5 w-3.5" aria-hidden="true" />
            <T k="history.source" />: <SourceBadge source={c.source} />
          </p>
        </div>
      </section>
    </>
  );
}
