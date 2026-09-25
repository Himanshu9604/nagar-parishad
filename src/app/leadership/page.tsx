import Link from "next/link";
import { Info } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeaderMessageCard, OfficerCard, SourceLink } from "@/components/cards/PersonCard";
import { chiefOfficer, electedCouncillors, localMla, officers, president, vicePresident } from "@/data/leadership";
import { L, T } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "President & Chief Officer",
  description:
    "President (Nagaradhyaksha) Dr. Archanatai Adsad-Rothe, Vice-President Girish Mundada, elected councillors and officers of Nagar Parishad Dhamangaon Railway.",
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero titleKey="pages.leadership.title" descKey="pages.leadership.desc" trail={[{ k: "nav.about", href: "/about" }]} />

      <section className="py-16 sm:py-20">
        <div className="container space-y-8">
          <Reveal>
            <LeaderMessageCard person={president} />
          </Reveal>
          <Reveal>
            <LeaderMessageCard person={chiefOfficer} reverse />
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-200/60 py-16 sm:py-20">
        <div className="container">
          <SectionHeading title="Office Bearers & Elected Councillors" align="center" />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[vicePresident, ...electedCouncillors].map((p) => (
              <StaggerItem key={p.id}>
                <OfficerCard person={p} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-6 flex flex-col items-center gap-2 text-center">
            {vicePresident.source && <SourceLink source={vicePresident.source} />}
            <p className="flex max-w-2xl items-start gap-2 rounded-xl bg-gold-50 p-4 text-left text-sm text-navy-700 ring-1 ring-gold-200">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              <span>
                The complete ward-wise list of all 20 elected Nagarsevaks — sourced from the State Election
                Commission&rsquo;s official winning-candidate data — is on the{" "}
                <Link href="/ward-members" className="font-semibold underline decoration-gold-400 underline-offset-2">
                  <T k="nav.wardMembers" />
                </Link>{" "}
                page. Education / qualification details are not publicly available for Nagar Parishad candidates
                (unlike MLA/MP affidavits), so that field is marked accordingly.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <SectionHeading title="Key Officers" align="center" />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {officers.map((p) => (
              <StaggerItem key={p.id}>
                <OfficerCard person={p} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mx-auto mt-10 max-w-md rounded-2xl border border-navy-100 bg-white p-5 text-center text-sm text-navy-600">
            <p className="text-xs uppercase tracking-wider text-gold-700">
              <L text={localMla.designation} />
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-navy-900">
              <L text={localMla.name} />
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
