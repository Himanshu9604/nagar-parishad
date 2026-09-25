import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight, GraduationCap, House, MapPin, Phone, School, UserRound, Users, Vote } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { GenderSplit } from "@/components/ui/GenderSplit";
import { getWard, wardTotals, wards } from "@/data/wards";
import { L, T } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";
import { formatNumber, percent, telHref } from "@/lib/utils";

type Props = { params: Promise<{ wardNo: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return wards.map((w) => ({ wardNo: String(w.wardNo) }));
}

export async function generateMetadata({ params }: Props) {
  const { wardNo } = await params;
  const ward = getWard(Number(wardNo));
  if (!ward) return {};
  const names = ward.members.map((m) => m.name.en).join(" & ");
  return buildMetadata({
    title: `Ward ${ward.wardNo} – ${ward.area.en}`,
    description: `Ward ${ward.wardNo} (${ward.area.en}): population ${ward.population.total}, voters ${ward.voters.total} (male ${ward.voters.male}, female ${ward.voters.female}). Nagarsevaks: ${names}.`,
    path: `/wards/${ward.wardNo}`,
  });
}

export default async function WardDetailPage({ params }: Props) {
  const { wardNo } = await params;
  const ward = getWard(Number(wardNo));
  if (!ward) notFound();

  const idx = wards.findIndex((w) => w.wardNo === ward.wardNo);
  const prev = wards[idx - 1];
  const next = wards[idx + 1];
  const facts = [
    { icon: Users, k: "ward.population" as const, value: formatNumber(ward.population.total) },
    { icon: Vote, k: "ward.voters" as const, value: formatNumber(ward.voters.total) },
    { icon: House, k: "ward.households" as const, value: formatNumber(ward.households) },
    { icon: Vote, k: "ward.pollingBooths" as const, value: String(ward.pollingBooths) },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-royal-gradient text-ivory">
        <div className="bg-pattern-royal absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="container relative py-12 sm:py-16">
          <Breadcrumbs
            tone="dark"
            items={[
              { k: "nav.wards", href: "/wards" },
              { label: { en: `Ward ${ward.wardNo}`, mr: `प्रभाग ${ward.wardNo}`, hi: `वार्ड ${ward.wardNo}` } },
            ]}
          />
          <Reveal className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold-200 to-gold-500 font-display text-3xl font-bold text-navy-950 shadow-gold">
              {ward.wardNo}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-200">
                <T k="common.wardNo" /> {ward.wardNo}
              </p>
              <h1 className="mt-1 text-3xl font-semibold !text-ivory sm:text-4xl">
                <L text={ward.area} />
              </h1>
              <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ivory/75">
                {ward.members.map((mem) => (
                  <span key={mem.id}>
                    {mem.seat && `${mem.seat} · `}
                    {mem.reservation}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        </div>
        <div className="gold-divider absolute bottom-0 left-0" aria-hidden="true" />
      </section>

      <section className="bg-pattern-light py-14">
        <div className="container grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.k} className="card-royal p-5">
                  <f.icon className="h-5 w-5 text-gold-600" aria-hidden="true" />
                  <p className="mt-3 font-display text-2xl font-semibold tabular-nums text-navy-900">{f.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-navy-500">
                    <T k={f.k} />
                  </p>
                </div>
              ))}
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2">
              <Reveal>
                <GenderSplit titleKey="ward.populationSplit" male={ward.population.male} female={ward.population.female} className="h-full" />
              </Reveal>
              <Reveal delay={0.08}>
                <GenderSplit
                  titleKey="ward.voterSplit"
                  male={ward.voters.male}
                  female={ward.voters.female}
                  other={ward.voters.other}
                  className="h-full"
                />
              </Reveal>
            </div>

            <Reveal className="card-royal overflow-hidden">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Ward {ward.wardNo} statistics</caption>
                <thead className="bg-navy-900 text-xs uppercase tracking-wider text-gold-100">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold" />
                    <th scope="col" className="px-5 py-3 text-right font-semibold"><T k="ward.male" /></th>
                    <th scope="col" className="px-5 py-3 text-right font-semibold"><T k="ward.female" /></th>
                    <th scope="col" className="px-5 py-3 text-right font-semibold"><T k="ward.other" /></th>
                    <th scope="col" className="px-5 py-3 text-right font-semibold"><T k="ward.total" /></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100 tabular-nums">
                  <tr>
                    <th scope="row" className="px-5 py-3.5 font-semibold text-navy-900"><T k="ward.population" /></th>
                    <td className="px-5 py-3.5 text-right">{formatNumber(ward.population.male)}</td>
                    <td className="px-5 py-3.5 text-right">{formatNumber(ward.population.female)}</td>
                    <td className="px-5 py-3.5 text-right text-navy-400">—</td>
                    <td className="px-5 py-3.5 text-right font-semibold">{formatNumber(ward.population.total)}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-5 py-3.5 font-semibold text-navy-900"><T k="ward.voters" /></th>
                    <td className="px-5 py-3.5 text-right">{formatNumber(ward.voters.male)}</td>
                    <td className="px-5 py-3.5 text-right">{formatNumber(ward.voters.female)}</td>
                    <td className="px-5 py-3.5 text-right">{formatNumber(ward.voters.other)}</td>
                    <td className="px-5 py-3.5 text-right font-semibold">{formatNumber(ward.voters.total)}</td>
                  </tr>
                </tbody>
              </table>
              <dl className="grid gap-4 border-t border-navy-100 p-5 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-navy-500"><T k="ward.sexRatio" /></dt>
                  <dd className="mt-1 font-semibold text-navy-900">
                    {ward.sexRatio} <span className="font-normal text-navy-500">(<T k="ward.sexRatioUnit" />)</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-navy-500"><T k="ward.share" /></dt>
                  <dd className="mt-1 font-semibold text-navy-900">{percent(ward.voters.total, wardTotals.voters.total)}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="card-royal overflow-hidden">
              <div className="bg-royal-gradient px-6 py-4 font-display text-lg font-semibold text-ivory">
                <T k="ward.member" />
              </div>
              <div className="divide-y divide-navy-100">
                {ward.members.map((mem) => (
                  <div key={mem.id} className="p-6 text-center">
                    <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-700 p-[3px]">
                      <div className="grid h-full w-full place-items-center rounded-full bg-ivory text-navy-400">
                        <UserRound className="h-11 w-11" aria-hidden="true" />
                      </div>
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gold-600">
                      {mem.seat && `Seat ${mem.seat}`} {mem.reservation && `· ${mem.reservation}`}
                    </p>
                    <h2 className="mt-1 font-sans text-lg font-semibold text-navy-900">
                      <L text={mem.name} />
                    </h2>
                    {mem.role && (
                      <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                        <L text={mem.role} />
                      </p>
                    )}
                    <p className="mt-3 flex items-start justify-center gap-1.5 text-left text-xs text-navy-500">
                      <GraduationCap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" aria-hidden="true" />
                      <L text={mem.qualification ?? mem.qualificationNote} />
                    </p>
                    {mem.phone && (
                      <a href={telHref(mem.phone)} className="btn-outline mt-4">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        {mem.phone}
                      </a>
                    )}
                  </div>
                ))}
              </div>
              {ward.members[0]?.source && (
                <p className="border-t border-navy-100 px-6 py-3 text-center text-[0.7rem] text-navy-400">
                  <a
                    href={ward.members[0].source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-gold-400 underline-offset-2 hover:text-gold-700"
                  >
                    Source: {ward.members[0].source.label}
                  </a>
                </p>
              )}
            </Reveal>

            <Reveal className="card-royal p-6">
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
                <School className="h-5 w-5 text-gold-600" aria-hidden="true" />
                <T k="ward.pollingStation" />
              </h2>
              <p className="mt-3 text-sm text-navy-700">{ward.pollingStation}</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-navy-500">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                <L text={ward.area} />
              </p>
            </Reveal>

            <nav aria-label="Ward navigation" className="grid grid-cols-2 gap-3">
              {prev ? (
                <Link href={`/wards/${prev.wardNo}`} className="card-royal flex items-center gap-2 p-4 text-sm font-semibold text-navy-700 hover:text-gold-700">
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  <T k="common.wardNo" /> {prev.wardNo}
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={`/wards/${next.wardNo}`} className="card-royal flex items-center justify-end gap-2 p-4 text-sm font-semibold text-navy-700 hover:text-gold-700">
                  <T k="common.wardNo" /> {next.wardNo}
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
              <Link href="/wards" className="btn-primary col-span-2">
                <T k="ward.allWards" />
              </Link>
            </nav>
          </aside>
        </div>
      </section>
    </>
  );
}
