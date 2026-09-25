import { House, Info, Landmark, Users, Vote } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GenderSplit } from "@/components/ui/GenderSplit";
import { WardStatsTable } from "@/components/features/WardStatsTable";
import { VOTER_LIST_REFERENCE, wardTotals, wards } from "@/data/wards";
import type { TKey } from "@/i18n/dictionaries";
import { T } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";
import { formatNumber } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Ward Details & Voter Statistics",
  description:
    "Ward-wise population, male and female voters, households, polling booths and elected ward members of Nagar Parishad Dhamangaon Railway.",
  path: "/wards",
  keywords: ["voter list", "ward wise voters", "matdar yadi", "prabhag", "ward population Dhamangaon"],
});

export default function WardsPage() {
  const sexRatio = Math.round((wardTotals.population.female / wardTotals.population.male) * 1000);
  const tiles: { icon: typeof Users; k: TKey; value: string; sub?: string }[] = [
    { icon: Landmark, k: "ward.totalWards", value: String(wardTotals.wards) },
    { icon: Users, k: "ward.population", value: formatNumber(wardTotals.population.total) },
    { icon: Vote, k: "ward.voters", value: formatNumber(wardTotals.voters.total) },
    { icon: House, k: "ward.households", value: formatNumber(wardTotals.households) },
    { icon: Vote, k: "ward.pollingBooths", value: String(wardTotals.pollingBooths) },
    { icon: Users, k: "ward.sexRatio", value: String(sexRatio) },
  ];

  return (
    <>
      <PageHero titleKey="pages.wards.title" descKey="pages.wards.desc" trail={[{ k: "nav.about", href: "/about" }]} />

      <section className="bg-pattern-light py-14 sm:py-16">
        <div className="container">
          <SectionHeading titleKey="ward.townSummary" />
          <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {tiles.map((tile) => (
              <StaggerItem key={tile.k}>
                <div className="card-royal h-full p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-gold-200">
                    <tile.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-display text-2xl font-semibold tabular-nums text-navy-900 sm:text-3xl">{tile.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-500">
                    <T k={tile.k} />
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <GenderSplit
                titleKey="ward.populationSplit"
                male={wardTotals.population.male}
                female={wardTotals.population.female}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <GenderSplit
                titleKey="ward.voterSplit"
                male={wardTotals.voters.male}
                female={wardTotals.voters.female}
                other={wardTotals.voters.other}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container">
          <SectionHeading titleKey="ward.wardwise" />
          <WardStatsTable wards={wards} totals={wardTotals} />
          <p className="mt-8 flex items-start gap-2 rounded-xl bg-gold-50 p-4 text-sm text-navy-700 ring-1 ring-gold-200">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
            <span>
              <strong>
                <T k="ward.source" />:
              </strong>{" "}
              {VOTER_LIST_REFERENCE}. Figures are indicative. The authoritative voter list is published by the State
              Election Commission, Maharashtra; you can check your name on{" "}
              <a href="https://voters.eci.gov.in" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-gold-400 underline-offset-2">
                voters.eci.gov.in
              </a>
              .
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
