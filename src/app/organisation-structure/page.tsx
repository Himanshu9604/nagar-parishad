import { ArrowDown, Landmark, RefreshCw, Scale, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OrgCard, OrgTree } from "@/components/features/OrgTree";
import { electedWing, executiveWing, governanceCycle, governmentChain } from "@/data/orgStructure";
import { L, T } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Organisation Structure",
  description:
    "Administrative hierarchy of Nagar Parishad Dhamangaon Railway — Government of Maharashtra, Collector, President (Nagaradhyaksha), Chief Officer, committees, ward members and departments.",
  path: "/organisation-structure",
  keywords: ["organisation chart", "nagar parishad structure", "chief officer", "nagaradhyaksha"],
});

/** Positions for the six-step governance cycle (desktop circle). */
function cyclePosition(i: number, n: number) {
  const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
  return { left: `${50 + 40 * Math.cos(angle)}%`, top: `${50 + 40 * Math.sin(angle)}%` };
}

export default function OrganisationStructurePage() {
  const executiveCollapsed = (executiveWing.children ?? []).map((c) => c.id);

  return (
    <>
      <PageHero
        titleKey="pages.orgStructure.title"
        descKey="pages.orgStructure.desc"
        trail={[{ k: "nav.about", href: "/about" }]}
      />

      {/* ── Government chain ─────────────────────────────── */}
      <section className="bg-pattern-light py-14 sm:py-16">
        <div className="container">
          <SectionHeading titleKey="org.govChain" align="center" />
          <ol className="mx-auto flex max-w-xl flex-col items-center">
            {governmentChain.map((node, i) => (
              <Reveal as="li" key={node.id} delay={i * 0.06} className="flex w-full flex-col items-center">
                <OrgCard node={node} className="w-full text-center [&>div:first-child]:text-center" />
                <span className="flex h-10 flex-col items-center justify-center text-gold-500" aria-hidden="true">
                  <span className="h-5 w-0.5 bg-gold-400" />
                  <ArrowDown className="-mt-1 h-4 w-4" />
                </span>
              </Reveal>
            ))}
            <Reveal as="li" className="w-full">
              <div className="relative overflow-hidden rounded-2xl bg-royal-gradient p-6 text-center text-ivory shadow-royal-lg ring-2 ring-gold-400/60">
                <div className="bg-pattern-royal absolute inset-0 opacity-40" aria-hidden="true" />
                <Landmark className="relative mx-auto h-8 w-8 text-gold-300" aria-hidden="true" />
                <p className="relative mt-2 font-display text-2xl font-semibold">
                  <T k="site.name" />
                </p>
                <p className="relative mt-1 text-xs uppercase tracking-[0.18em] text-gold-200">
                  Municipal Council · Maharashtra Municipal Councils Act, 1965
                </p>
              </div>
            </Reveal>
          </ol>

          {/* Split connector into the two wings (desktop) */}
          <div className="hidden lg:block" aria-hidden="true">
            <div className="mx-auto h-8 w-0.5 bg-gold-400" />
            <div className="mx-auto h-0.5 w-1/2 bg-gold-400" />
            <div className="mx-auto flex w-1/2 justify-between">
              <span className="h-8 w-0.5 bg-gold-400" />
              <span className="h-8 w-0.5 bg-gold-400" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Two wings ────────────────────────────────────── */}
      <section className="pb-16 pt-2 lg:-mt-16 lg:pt-0">
        <div className="container grid gap-10 lg:grid-cols-2 lg:gap-8">
          <Reveal className="card-royal p-5 sm:p-7">
            <h2 className="mb-5 flex items-center gap-3 text-2xl font-semibold">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold-200 to-gold-500 text-navy-950">
                <Users className="h-5 w-5" aria-hidden="true" />
              </span>
              <T k="org.elected" />
            </h2>
            <OrgTree root={electedWing} collapsedByDefault={["committees", "ward-members"]} />
          </Reveal>

          <Reveal delay={0.08} className="card-royal p-5 sm:p-7">
            <h2 className="mb-5 flex items-center gap-3 text-2xl font-semibold">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-gold-200">
                <Scale className="h-5 w-5" aria-hidden="true" />
              </span>
              <T k="org.executive" />
            </h2>
            <OrgTree root={executiveWing} collapsedByDefault={executiveCollapsed} />
          </Reveal>
        </div>

        <div className="container">
          <Reveal className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold-200 bg-gold-50/70 p-5 text-center text-sm leading-relaxed text-navy-700">
            <T k="org.coordination" />
          </Reveal>
        </div>
      </section>

      {/* ── Governance cycle ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-royal-gradient py-16 text-ivory sm:py-20">
        <div className="bg-pattern-royal absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container relative">
          <SectionHeading titleKey="org.cycleTitle" subtitleKey="org.cycleSub" align="center" tone="dark" />

          {/* Desktop: circular cycle */}
          <Reveal className="relative mx-auto hidden aspect-square w-full max-w-[40rem] md:block">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <marker id="cycle-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                  <path d="M0 0 L10 5 L0 10z" fill="#d4a93f" />
                </marker>
              </defs>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#d4a93f" strokeOpacity="0.35" strokeWidth="0.4" strokeDasharray="1.2 1.2" />
              {governanceCycle.map((_, i) => {
                const n = governanceCycle.length;
                const a = ((i + 0.5) / n) * 2 * Math.PI - Math.PI / 2;
                const x = 50 + 40 * Math.cos(a);
                const y = 50 + 40 * Math.sin(a);
                const tx = -Math.sin(a);
                const ty = Math.cos(a);
                return (
                  <line
                    key={i}
                    x1={x - tx * 1.5}
                    y1={y - ty * 1.5}
                    x2={x + tx * 1.5}
                    y2={y + ty * 1.5}
                    stroke="#d4a93f"
                    strokeWidth="0.6"
                    markerEnd="url(#cycle-arrow)"
                  />
                );
              })}
            </svg>
            <div className="absolute left-1/2 top-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/5 text-center ring-1 ring-gold-300/40 backdrop-blur">
              <div>
                <RefreshCw className="mx-auto h-7 w-7 text-gold-300" aria-hidden="true" />
                <p className="mt-2 px-4 font-display text-lg font-semibold leading-tight">
                  <T k="org.cycleTitle" />
                </p>
              </div>
            </div>
            <ol>
              {governanceCycle.map((step, i) => (
                <li
                  key={step.title.en}
                  className="absolute w-44 -translate-x-1/2 -translate-y-1/2 text-center"
                  style={cyclePosition(i, governanceCycle.length)}
                >
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-gradient-to-b from-gold-200 to-gold-500 font-display text-lg font-bold text-navy-950 shadow-gold">
                    {i + 1}
                  </span>
                  <p className="mt-2 font-semibold text-ivory">
                    <L text={step.title} />
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-ivory/70">
                    <L text={step.text} />
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Mobile: vertical cycle */}
          <ol className="mx-auto max-w-md space-y-3 md:hidden">
            {governanceCycle.map((step, i) => (
              <li key={step.title.en}>
                <div className="card-glass flex items-start gap-4 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-b from-gold-200 to-gold-500 font-display font-bold text-navy-950">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">
                      <L text={step.title} />
                    </p>
                    <p className="mt-0.5 text-sm text-ivory/70">
                      <L text={step.text} />
                    </p>
                  </div>
                </div>
                <div className="flex justify-center py-1 text-gold-400" aria-hidden="true">
                  {i < governanceCycle.length - 1 ? <ArrowDown className="h-4 w-4" /> : <RefreshCw className="h-4 w-4" />}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
